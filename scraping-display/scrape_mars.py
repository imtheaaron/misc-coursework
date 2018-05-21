from bs4 import BeautifulSoup as bs
import pandas as pd
import requests
from splinter import Browser
from selenium import webdriver
import time


def init_browser():
    executable_path = {'executable_path': 'chromedriver.exe'}
    return Browser('chrome', **executable_path, headless=True)

def scrape_mars():
    browser = init_browser()
    mars_dict = {}
#------------------------------------------------  
#RETRIEVE THE IMAGES OF THE MARS HEMISPHERES
    hemi_url = 'https://astrogeology.usgs.gov/search/results?q=hemisphere+enhanced&k1=target&v1=Mars'
    browser.visit(hemi_url)
    time.sleep(2)
    hemi_html = browser.html
    hemi_soup = bs(hemi_html, 'html.parser')

    hemi_list = []
    hemi_text = hemi_soup.find_all('h3')

    for x in range(len(hemi_text)):
        hemi_dict = {}
        #get the title of the hemisphere
        name = hemi_text[x].text.replace(' Enhanced', '')
        hemi_dict['title'] = name
        
        #click on the link and get the url for the full size image
        browser.click_link_by_partial_text(hemi_text[x].text)
        img_src = browser.find_link_by_text('Sample')['href']
        hemi_dict['img_url'] = img_src
        
        hemi_list.append(hemi_dict)
        
        browser.back()
        time.sleep(1)

    # print('hemispheres: ', hemi_list)
    mars_dict['hemispheres'] = hemi_list

#------------------------------------------
#GET MARS FACTS TABLE USING PANDAS
    pandas_url = 'https://space-facts.com/mars/'

    tables = pd.read_html(pandas_url)
    df = tables[0]
    df.columns = ['Description', 'Value']
    df.set_index('Description', inplace=True)

    mars_table = df.to_html()
    mars_table = mars_table.replace('\n', '')

    # print(mars_table)
    mars_dict['facts'] = mars_table

#------------------------------------------
#GET THE MOST RECENT MARS WEATHER
    weather_url = 'https://twitter.com/marswxreport?lang=en'
    browser.visit(weather_url)
    time.sleep(1)
    
    html = browser.html
    weather_soup = bs(html, 'html.parser')
    results = weather_soup.find('p', class_="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text").text

    # print('weather: ', results)
    mars_dict['weather'] = results

#-----------------------------------------
# GETTING THE MOST RECENT MARS IMAGE
    url = 'https://www.jpl.nasa.gov/spaceimages/?search=&category=Mars'
    browser.visit(url)
    html = browser.html
    soup = bs(html, 'html.parser')
    time.sleep(1)

    #click multiple times to get to our image
    browser.find_by_id('full_image').click()
    time.sleep(2)
    browser.find_link_by_partial_text('more info').click()
    time.sleep(1)

    img_html = browser.html
    img_soup = bs(img_html, 'html.parser')
    img_src = img_soup.find(class_='main_image')['src']

    featured_image_url = 'https://www.jpl.nasa.gov/' + img_src
    # print('featured image', featured_image_url)
    mars_dict['featured_image'] = featured_image_url

#----------------------------------
    print(mars_dict)
    return mars_dict
    browser.quit()

scrape_mars()