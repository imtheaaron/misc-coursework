* Scraping Mars

![web display image]('https://github.com/imtheaaron/misc-coursework/blob/master/scraping-display/web_output.jpg')


```python
from bs4 import BeautifulSoup as bs
import pandas as pd
import requests
from splinter import Browser
from selenium import webdriver
import time
```


```python
mars_dict = {}
```


```python
#initialize splinter using selenium as our webdriver on Chrome

executable_path = {'executable_path': 'chromedriver.exe'}
browser = Browser('chrome', **executable_path, headless=True)
```


```python
#RETRIEVE THE IMAGES OF THE MARS HEMISPHERES

hemi_url = 'https://astrogeology.usgs.gov/search/results?q=hemisphere+enhanced&k1=target&v1=Mars'
browser.visit(hemi_url)
```


```python
hemi_html = browser.html
hemi_soup = bs(hemi_html, 'html.parser')
print(hemi_soup.prettify())
```

    <!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml">
     <head>
      <link href="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/themes/smoothness/jquery-ui.css" rel="stylesheet" type="text/css"/>
      <script async="" src="https://ssl.google-analytics.com/ga.js" type="text/javascript">
      </script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js" type="text/javascript">
      </script>
      <title>
       Astropedia Search Results | USGS Astrogeology Science Center
      </title>
      <meta content="USGS Astrogeology Science Center Astropedia search results." name="description"/>
      <meta content="USGS,Astrogeology Science Center,Cartography,Geology,Space,Geological Survey,Mapping" name="keywords"/>
      <meta content="IE=edge" http-equiv="X-UA-Compatible"/>
      <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
      <meta content="width=device-width, initial-scale=1, maximum-scale=1" name="viewport"/>
      <meta content="x61hXXVj7wtfBSNOPnTftajMsZ5yB2W-qRoyr7GtOKM" name="google-site-verification"/>
      <!--<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,bold"/>-->
      <link href="/css/main.css" media="screen" rel="stylesheet"/>
      <link href="/css/print.css" media="print" rel="stylesheet"/>
      <!--[if lt IE 9]>
    			<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    			<script src="/js/respond.min.js"></script>
    			<link rel="stylesheet" type="text/css" href="/css/ie.css"/>
                            <script>
                              document.createElement('header');
                              document.createElement('nav');
                              document.createElement('section');
                              document.createElement('article');
                              document.createElement('aside');
                              document.createElement('footer');
                              document.createElement('hgroup');
                            </script>
                      <![endif]-->
      <link href="/favicon.ico" rel="icon" type="image/x-ico"/>
     </head>
     <body id="results">
      <header>
       <h1>
        Astrogeology Science Center
       </h1>
       <a href="http://www.usgs.gov">
        <img alt="USGS: Science for a Changing World" class="logo" height="70" src="/images/usgs_logo_main_2x.png" width="180"/>
       </a>
      </header>
      <div class="wrapper">
       <nav>
        <a href="#" id="nav-toggle" title="Navigation Menu">
         Menu
        </a>
        <ul class="dropdown dropdown-horizontal" id="yw0">
         <li>
          <a href="/">
           Home
          </a>
         </li>
         <li>
          <a href="/about">
           About
          </a>
          <ul>
           <li>
            <a href="/about/careers">
             Careers
            </a>
           </li>
           <li>
            <a href="/contact">
             Contact
            </a>
           </li>
           <li>
            <a href="/about/events">
             Events
            </a>
           </li>
           <li>
            <a href="/site/glossary">
             Glossary
            </a>
           </li>
           <li>
            <a href="/about/mission">
             Mission
            </a>
           </li>
           <li>
            <a href="/news">
             News
            </a>
           </li>
           <li>
            <a href="/people">
             People
            </a>
           </li>
           <li>
            <a href="/about/using-our-images">
             Using Our Images
            </a>
           </li>
           <li>
            <a href="/about/visitors">
             Visitors
            </a>
           </li>
          </ul>
         </li>
         <li>
          <a href="/facilities">
           Labs / Facilities
          </a>
          <ul>
           <li>
            <a href="/facilities/flynn-creek-crater-sample-collection">
             Flynn Creek Crater Sample Collection
            </a>
           </li>
           <li>
            <a href="http://www.moon-cal.org">
             Lunar Calibration Project
            </a>
           </li>
           <li>
            <a href="/facilities/meteor-crater-sample-collection">
             Meteor Crater Sample Collection
            </a>
           </li>
           <li>
            <a href="/facilities/mrctr">
             MRCTR GIS Lab
            </a>
           </li>
           <li>
            <a href="/facilities/cartography-and-imaging-sciences-node-of-nasa-planetary-data-system">
             PDS Cartography and Imaging Sciences Node
            </a>
           </li>
           <li>
            <a href="/pds/annex">
             PDS IMG Annex
            </a>
           </li>
           <li>
            <a href="/facilities/photogrammetry-guest-facility">
             Photogrammetry Guest Facility
            </a>
           </li>
           <li>
            <a href="/rpif">
             Regional Planetary Information Facility (RPIF)
            </a>
           </li>
          </ul>
         </li>
         <li>
          <a href="/maps">
           Maps / Products
          </a>
          <ul>
           <li>
            <a href="/search">
             Product Search
            </a>
           </li>
           <li>
            <a href="http://planetarynames.wr.usgs.gov">
             Gazetteer of Planetary Nomenclature
            </a>
           </li>
           <li>
            <a href="http://planetarymapping.wr.usgs.gov">
             Geologic Mapping Program
            </a>
           </li>
           <li>
            <a href="http://pilot.wr.usgs.gov">
             Planetary Image Locator Tool (PILOT)
            </a>
           </li>
           <li>
            <a href="/search/planetary-index">
             Planetary Map Index
            </a>
           </li>
          </ul>
         </li>
         <li>
          <a href="/geology">
           Missions / Research
          </a>
          <ul>
           <li>
            <a href="/geology/mars-dunes">
             Mars Dunes
            </a>
           </li>
           <li>
            <a href="/geology/mars-ice">
             Mars Ice
            </a>
           </li>
           <li>
            <a href="/missions">
             Mission Support
            </a>
           </li>
           <li>
            <a href="/solar-system">
             Solar System
            </a>
           </li>
           <li>
            <a href="/groups">
             Working Groups
            </a>
           </li>
          </ul>
         </li>
         <li>
          <a href="/tools">
           Tools
          </a>
          <ul>
           <li>
            <a href="http://planetarynames.wr.usgs.gov">
             Gazetteer of Planetary Nomenclature
            </a>
           </li>
           <li>
            <a href="http://isis.astrogeology.usgs.gov">
             Integrated Software for Imagers and Spectrometers (ISIS)
            </a>
           </li>
           <li>
            <a href="http://astrogeology.usgs.gov/tools/map-a-planet-2">
             Map a Planet 2
            </a>
           </li>
           <li>
            <a href="http://pilot.wr.usgs.gov">
             Planetary Image Locator Tool (PILOT)
            </a>
           </li>
           <li>
            <a href="http://astrocloud.wr.usgs.gov/">
             Projection on the Web (POW)
            </a>
           </li>
          </ul>
         </li>
        </ul>
        <form action="/search/results" class="search" id="search" method="get">
         <input title="Search Astropedia" type="submit" value=""/>
         <input name="q" placeholder="Search" type="text"/>
         <input name="__ncforminfo" type="hidden" value="YeKsQflg6QMv_Bd60dunJ1A8LVovVlEMYaav4VmLgZCSnBCYMjRjsaq_gPS0kmNhP1-pzIKp29vV72YGh8SvdaTjni852g-9PFeOpjkj1jA="/>
        </form>
       </nav>
       <div class="container">
        <form action="/search/results" class="bar widget block" id="search-bar">
         <input name="q" type="hidden" value="hemisphere-enhanced"/>
         <input name="target" type="hidden" value="Mars"/>
         <input name="__ncforminfo" type="hidden" value="YeKsQflg6QMv_Bd60dunJ1A8LVovVlEMYaav4VmLgZCgMgNV_tcuY4EJQDiukq0fB_ZBpYLWH3FXG0m32RSi3qTX_IxJzxBYIWXqYGwiWemT4A-nSEXSFA=="/>
        </form>
        <div class="full-content">
         <section class="block" id="results-accordian">
          <div class="result-list" data-section="product" id="product-section">
           <div class="accordian">
            <h2>
             Products
            </h2>
            <span class="count">
             4 Results
            </span>
            <span class="collapse">
             Collapse
            </span>
           </div>
           <div class="collapsible results">
            <div class="item">
             <a class="itemLink product-item" href="/search/map/Mars/Viking/cerberus_enhanced">
              <img alt="Cerberus Hemisphere Enhanced thumbnail" class="thumb" src="/cache/images/dfaf3849e74bf973b59eb50dab52b583_cerberus_enhanced.tif_thumb.png"/>
             </a>
             <div class="description">
              <a class="itemLink product-item" href="/search/map/Mars/Viking/cerberus_enhanced">
               <h3>
                Cerberus Hemisphere Enhanced
               </h3>
              </a>
              <span class="subtitle" style="float:left">
               image/tiff 21 MB
              </span>
              <span class="pubDate" style="float:right">
              </span>
              <br/>
              <p>
               Mosaic of the Cerberus hemisphere of Mars projected into point perspective, a view similar to that which one would see from a spacecraft. This mosaic is composed of 104 Viking Orbiter images acquired…
              </p>
             </div>
             <!-- end description -->
            </div>
            <div class="item">
             <a class="itemLink product-item" href="/search/map/Mars/Viking/schiaparelli_enhanced">
              <img alt="Schiaparelli Hemisphere Enhanced thumbnail" class="thumb" src="/cache/images/7677c0a006b83871b5a2f66985ab5857_schiaparelli_enhanced.tif_thumb.png"/>
             </a>
             <div class="description">
              <a class="itemLink product-item" href="/search/map/Mars/Viking/schiaparelli_enhanced">
               <h3>
                Schiaparelli Hemisphere Enhanced
               </h3>
              </a>
              <span class="subtitle" style="float:left">
               image/tiff 35 MB
              </span>
              <span class="pubDate" style="float:right">
              </span>
              <br/>
              <p>
               Mosaic of the Schiaparelli hemisphere of Mars projected into point perspective, a view similar to that which one would see from a spacecraft. The images were acquired in 1980 during early northern…
              </p>
             </div>
             <!-- end description -->
            </div>
            <div class="item">
             <a class="itemLink product-item" href="/search/map/Mars/Viking/syrtis_major_enhanced">
              <img alt="Syrtis Major Hemisphere Enhanced thumbnail" class="thumb" src="/cache/images/aae41197e40d6d4f3ea557f8cfe51d15_syrtis_major_enhanced.tif_thumb.png"/>
             </a>
             <div class="description">
              <a class="itemLink product-item" href="/search/map/Mars/Viking/syrtis_major_enhanced">
               <h3>
                Syrtis Major Hemisphere Enhanced
               </h3>
              </a>
              <span class="subtitle" style="float:left">
               image/tiff 25 MB
              </span>
              <span class="pubDate" style="float:right">
              </span>
              <br/>
              <p>
               Mosaic of the Syrtis Major hemisphere of Mars projected into point perspective, a view similar to that which one would see from a spacecraft. This mosaic is composed of about 100 red and violet…
              </p>
             </div>
             <!-- end description -->
            </div>
            <div class="item">
             <a class="itemLink product-item" href="/search/map/Mars/Viking/valles_marineris_enhanced">
              <img alt="Valles Marineris Hemisphere Enhanced thumbnail" class="thumb" src="/cache/images/04085d99ec3713883a9a57f42be9c725_valles_marineris_enhanced.tif_thumb.png"/>
             </a>
             <div class="description">
              <a class="itemLink product-item" href="/search/map/Mars/Viking/valles_marineris_enhanced">
               <h3>
                Valles Marineris Hemisphere Enhanced
               </h3>
              </a>
              <span class="subtitle" style="float:left">
               image/tiff 27 MB
              </span>
              <span class="pubDate" style="float:right">
              </span>
              <br/>
              <p>
               Mosaic of the Valles Marineris hemisphere of Mars projected into point perspective, a view similar to that which one would see from a spacecraft. The distance is 2500 kilometers from the surface of…
              </p>
             </div>
             <!-- end description -->
            </div>
            <script>
             addBases=[];;if(typeof resetLayerSwitcher==="function"){resetLayerSwitcher(false)};var productTotal = 4;
            </script>
           </div>
           <!-- end this-section -->
          </div>
         </section>
        </div>
       </div>
       <div class="icons projects black scroll-wrapper">
        <div class="scroll">
         <a class="icon" href="http://isis.astrogeology.usgs.gov" title="Integrated Software for Imagers and Spectrometers">
          <img alt="ISIS Logo" height="112" src="/images/logos/isis_2x.jpg" width="112"/>
          <span class="label">
           ISIS
          </span>
         </a>
         <a class="icon" href="http://planetarynames.wr.usgs.gov" title="Gazetteer of Planetary Nomenclature">
          <img alt="Nomenclature Logo" height="112" src="/images/logos/nomenclature_2x.jpg" width="112"/>
          <span class="label">
           Planetary Nomenclature
          </span>
         </a>
         <a class="icon" href="http://astrogeology.usgs.gov/tools/map" title="Map a Planet 2">
          <img alt="Map-a-Planet Logo" height="112" src="/images/logos/map_a_planet_2x.jpg" width="112"/>
          <span class="label">
           Map a Planet 2
          </span>
         </a>
         <a class="icon" href="/facilities/imaging-node-of-nasa-planetary-data-system-pds" title="PDS Imaging Node">
          <img alt="PDS Logo" height="112" src="/images/pds_logo-black-web.png"/>
          <span class="label">
           PDS Imaging Node
          </span>
         </a>
         <!--
    						<a title="Astropedia Search" href="/search" class="icon">
    							<img alt="Astropedia Logo" height="112" width="112" src="/images/logos/astropedia_2x.jpg"/>
    							<span class="label">Astropedia</span>
    						</a>
    -->
         <a class="icon" href="/rpif" title="Regional Planetary Image Facility">
          <img alt="RPIF Logo" height="112" src="/images/logos/rpif_2x.jpg" width="112"/>
          <span class="label">
           RPIF
          </span>
         </a>
         <a class="icon" href="/facilities/photogrammetry-guest-facility" title="Photogrammetry Guest Facility">
          <img alt="Photogrammetry Guest Faciltiy Logo" height="112" src="/images/logos/photogrammetry_2x.jpg" width="112"/>
          <span class="label">
           Photogrammetry Guest Facility
          </span>
         </a>
         <a class="icon" href="http://pilot.wr.usgs.gov" title="Planetary Image Locator Tool">
          <img alt="Pilot Logo" height="112" src="/images/logos/pilot_2x.jpg" width="112"/>
          <span class="label">
           PILOT
          </span>
         </a>
         <a class="icon" href="/facilities/mrctr" title="Mapping, Remote-sensing, Cartography, Technology and Research GIS Lab">
          <img alt="MRCTR GIS Lab Logo" height="112" src="/images/logos/mrctr_2x.jpg" width="112"/>
          <span class="label">
           MRCTR GIS Lab
          </span>
         </a>
        </div>
       </div>
       <footer>
        <div class="left">
         <a href="http://astrogeology.usgs.gov">
          Home
         </a>
         |
         <a href="http://astrogeology.usgs.gov/contact">
          Contact
         </a>
         |
         <a href="http://astrogeology.usgs.gov/about/events">
          Events
         </a>
         |
         <a href="http://astrogeology.usgs.gov/news">
          News
         </a>
        </div>
        <div class="right">
         <a href="http://www.doi.gov">
          U.S. Department of Interior
         </a>
         |
         <a href="http://www.usgs.gov">
          U.S. Geological Survey
         </a>
         |
         <a href="http://www.usa.gov">
          USA.gov
         </a>
        </div>
       </footer>
      </div>
      <!--
    		<div class="credit">
    			<small>Background Credits: NASA/USGS</small>
    		</div>
    -->
      <div class="page-background" style="
    			background:url('/images/backgrounds/mars.jpg');
    			filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(
    				src='/images/backgrounds/mars.jpg', sizingMethod='scale');
    		">
      </div>
      <script type="text/javascript">
       var baseUrl = "";
    
    
    var _gaq = _gaq || [];_gaq.push(['_setAccount', 'UA-27613186-1']);_gaq.push(['_trackPageview']);(function() { var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);})();
      </script>
      <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/jquery-ui.min.js" type="text/javascript">
      </script>
      <script src="/js/general.js" type="text/javascript">
      </script>
     </body>
    </html>
    

It looks like the only h3 elements are the ones we want. So we could possibly loop through those and click on them


```python
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
    
hemi_list
```




    [{'img_url': 'http://astropedia.astrogeology.usgs.gov/download/Mars/Viking/cerberus_enhanced.tif/full.jpg',
      'title': 'Cerberus Hemisphere'},
     {'img_url': 'http://astropedia.astrogeology.usgs.gov/download/Mars/Viking/schiaparelli_enhanced.tif/full.jpg',
      'title': 'Schiaparelli Hemisphere'},
     {'img_url': 'http://astropedia.astrogeology.usgs.gov/download/Mars/Viking/syrtis_major_enhanced.tif/full.jpg',
      'title': 'Syrtis Major Hemisphere'},
     {'img_url': 'http://astropedia.astrogeology.usgs.gov/download/Mars/Viking/valles_marineris_enhanced.tif/full.jpg',
      'title': 'Valles Marineris Hemisphere'}]




```python
mars_dict['hemispheres'] = hemi_list
```


```python
mars_dict['hemispheres'][2]['img_url']
```




    'http://astropedia.astrogeology.usgs.gov/download/Mars/Viking/syrtis_major_enhanced.tif/full.jpg'




```python
#GET MARS FACTS TABLE USING PANDAS

pandas_url = 'https://space-facts.com/mars/'

tables = pd.read_html(pandas_url)
tables
```




    [                      0                              1
     0  Equatorial Diameter:                       6,792 km
     1       Polar Diameter:                       6,752 km
     2                 Mass:  6.42 x 10^23 kg (10.7% Earth)
     3                Moons:            2 (Phobos & Deimos)
     4       Orbit Distance:       227,943,824 km (1.52 AU)
     5         Orbit Period:           687 days (1.9 years)
     6  Surface Temperature:                  -153 to 20 °C
     7         First Record:              2nd millennium BC
     8          Recorded By:           Egyptian astronomers]




```python
df = tables[0]
df.columns = ['Description', 'Value']
df.set_index('Description', inplace=True)
df
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Value</th>
    </tr>
    <tr>
      <th>Description</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Equatorial Diameter:</th>
      <td>6,792 km</td>
    </tr>
    <tr>
      <th>Polar Diameter:</th>
      <td>6,752 km</td>
    </tr>
    <tr>
      <th>Mass:</th>
      <td>6.42 x 10^23 kg (10.7% Earth)</td>
    </tr>
    <tr>
      <th>Moons:</th>
      <td>2 (Phobos &amp; Deimos)</td>
    </tr>
    <tr>
      <th>Orbit Distance:</th>
      <td>227,943,824 km (1.52 AU)</td>
    </tr>
    <tr>
      <th>Orbit Period:</th>
      <td>687 days (1.9 years)</td>
    </tr>
    <tr>
      <th>Surface Temperature:</th>
      <td>-153 to 20 °C</td>
    </tr>
    <tr>
      <th>First Record:</th>
      <td>2nd millennium BC</td>
    </tr>
    <tr>
      <th>Recorded By:</th>
      <td>Egyptian astronomers</td>
    </tr>
  </tbody>
</table>
</div>




```python
mars_table = df.to_html()
mars_table = mars_table.replace('\n', '')
mars_table
```




    '<table border="1" class="dataframe">  <thead>    <tr style="text-align: right;">      <th></th>      <th>Value</th>    </tr>    <tr>      <th>Description</th>      <th></th>    </tr>  </thead>  <tbody>    <tr>      <th>Equatorial Diameter:</th>      <td>6,792 km</td>    </tr>    <tr>      <th>Polar Diameter:</th>      <td>6,752 km</td>    </tr>    <tr>      <th>Mass:</th>      <td>6.42 x 10^23 kg (10.7% Earth)</td>    </tr>    <tr>      <th>Moons:</th>      <td>2 (Phobos &amp; Deimos)</td>    </tr>    <tr>      <th>Orbit Distance:</th>      <td>227,943,824 km (1.52 AU)</td>    </tr>    <tr>      <th>Orbit Period:</th>      <td>687 days (1.9 years)</td>    </tr>    <tr>      <th>Surface Temperature:</th>      <td>-153 to 20 °C</td>    </tr>    <tr>      <th>First Record:</th>      <td>2nd millennium BC</td>    </tr>    <tr>      <th>Recorded By:</th>      <td>Egyptian astronomers</td>    </tr>  </tbody></table>'




```python
mars_dict['facts'] = mars_table
```


```python
#GET THE MOST RECENT MARS WEATHER

weather_url = 'https://twitter.com/marswxreport?lang=en'
response = requests.get(weather_url)
```


```python
# Create a Beautiful Soup object
soup = bs(response.text, 'html.parser')
print(soup.prettify())
```

    <?xml version="1.0" encoding="utf-8"?>
    <!DOCTYPE html PUBLIC "-//WAPFORUM//DTD XHTML Mobile 1.1//EN" "http://www.openmobilealliance.org/tech/DTD/xhtml-mobile11.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
     <head>
      <meta content="True" name="HandheldFriendly"/>
      <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport"/>
      <link href="https://twitter.com/marswxreport" rel="canonical"/>
      <meta content="twitter://user?screen_name=marswxreport" name="twitter-redirect-url"/>
      <meta content='{"pwreset-iphone":true,"android":true,"email":true}' name="twitter-redirect-srcs"/>
      <link href="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/favicon.ico" rel="icon" type="image/x-icon">
       <title>
        Mars Weather (@MarsWxReport) on Twitter
       </title>
       <link href="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/assets/a.css" inline="false" media="screen" rel="stylesheet" type="text/css"/>
       <script src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/javascripts/framebust.js" type="text/javascript">
       </script>
       <meta content="V0yIS0Ec_o3Ii9KThrCoMCkwTYMMJ_JYx_RSaGhFYvw" name="google-site-verification"/>
       <meta content='{"m2_mmw_scribe_get_url":true}' name="deciders"/>
      </link>
     </head>
     <body class="images nojs users-page users-show-page">
      <div id="container">
       <div id="brand_bar">
        <table id="top">
         <tr>
          <td class="left">
           <a class="brandmark" href="/">
            <img alt="Twitter" height="28" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/larry_28px.gif"/>
           </a>
          </td>
          <td class="right">
           <img alt="|" class="divider" height="28" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/brandbar_divider.gif">
            <a class="search" href="#search">
             <img alt="Search" height="28" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/search_28px.gif"/>
            </a>
            <img alt="|" class="divider" height="28" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/brandbar_divider.gif">
             <a class="signin" href="/session/new">
              <span>
               Log in
              </span>
             </a>
             <img alt="|" class="divider" height="28" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/brandbar_divider.gif"/>
             <a href="/signup">
              <span class="signup">
               Sign up
              </span>
             </a>
            </img>
           </img>
          </td>
         </tr>
        </table>
       </div>
       <div id="main_content">
        <div class="profile">
         <table class="profile-details">
          <tr>
           <td class="avatar">
            <img alt="Mars Weather" src="https://pbs.twimg.com/profile_images/2552209293/220px-Mars_atmosphere_normal.jpg"/>
           </td>
           <td class="user-info">
            <div class="fullname">
             Mars Weather
            </div>
            <div class="username">
             <span>
              @
             </span>
             <span class="screen-name">
              MarsWxReport
             </span>
            </div>
            <div class="location">
             Gale Crater, Mars
            </div>
           </td>
          </tr>
          <tr>
           <td class="details" colspan="2">
            <div class="bio">
             <div class="dir-ltr" dir="ltr">
              Updates as avail from the REMS weather instrument aboard
              <a class="tweet-url twitter-atreply pretty-link" data-mentioned-user-id="0" dir="ltr" href="/MarsCuriosity" rel="nofollow">
               @MarsCuriosity
              </a>
              .  Data credit: Centro deAstrobiologia, FMI, JPL/NASA, Not an official acct.
             </div>
            </div>
            <div class="url">
             <div class="dir-ltr">
              <a class="twitter-timeline-link activeLink dir-ltr tco-link" data-url="mars.nasa.gov/msl/mission/in…" dir="ltr" href="http://t.co/OcX0oySes3" rel="nofollow" target="_blank">
               mars.nasa.gov/msl/mission/in…
              </a>
             </div>
            </div>
           </td>
          </tr>
         </table>
         <table class="profile-stats">
          <tr>
           <td class="stat">
            <div class="statnum">
             1,444
            </div>
            <div class="statlabel">
             Tweets
            </div>
           </td>
           <td class="stat">
            <a href="/MarsWxReport/following">
             <div class="statnum">
              54
             </div>
             <div class="statlabel">
              Following
             </div>
            </a>
           </td>
           <td class="stat stat-last">
            <a href="/MarsWxReport/followers">
             <div class="statnum">
              40,266
             </div>
             <div class="statlabel">
              Followers
             </div>
            </a>
           </td>
          </tr>
         </table>
         <div class="profile-actions">
          <form action="/i/guest/follow/MarsWxReport" method="post">
           <span class="m2-auth-token">
            <input name="authenticity_token" type="hidden" value="52631780e58e3aaaf8f5e0e1b6c03af2b9acdf81"/>
           </span>
           <span class="w-button-common w-button">
            <input name="commit" type="submit" value="Follow"/>
           </span>
          </form>
          <form action="/MarsWxReport/actions" method="get">
           <span class="w-button-common w-button">
            <input name="commit" type="submit" value="•••"/>
           </span>
          </form>
         </div>
        </div>
        <div class="w-mediaonebox">
         <table>
          <tr>
           <td style="width: 87px;">
            <a href="/MarsWxReport/media/grid?idx=1">
             <img height="78" src="https://pbs.twimg.com/media/DY-MAVZX4AIsIni.jpg:thumb" width="87"/>
            </a>
           </td>
           <td style="width: 81px;">
            <a href="/MarsWxReport/media/grid?idx=2">
             <img height="78" src="https://pbs.twimg.com/media/DV9NxlXWsAA01an.jpg:thumb" width="81"/>
            </a>
           </td>
           <td style="width: 38px;">
            <a href="/MarsWxReport/media/grid?idx=3">
             <img height="78" src="https://pbs.twimg.com/media/DVZUnXlW0AEmpJ4.jpg:thumb" width="38"/>
            </a>
           </td>
           <td>
           </td>
          </tr>
         </table>
         <div class="see-more">
          <a href="/MarsWxReport/media/grid">
           View more photos
          </a>
         </div>
        </div>
        <div class="timeline">
         <table class="titlebar">
          <tr>
           <td>
            Tweets
           </td>
           <td class="right fifty">
            <form action="/MarsWxReport/follow_sms" method="get">
             <span class="w-button-common w-button-follow-sms-small">
              <input alt="Follow by SMS" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/notifications_default_sm.gif" type="image"/>
             </span>
            </form>
           </td>
          </tr>
         </table>
         <table class="tweet " href="/MarsWxReport/status/997627758871277568?p=v">
          <tr class="tweet-header ">
           <td class="avatar" rowspan="3">
            <a href="/MarsWxReport?p=i">
             <img alt="Mars Weather" src="https://pbs.twimg.com/profile_images/2552209293/220px-Mars_atmosphere_normal.jpg"/>
            </a>
           </td>
           <td class="user-info">
            <a href="/MarsWxReport?p=s">
             <strong class="fullname">
              Mars Weather
             </strong>
             <div class="username">
              <span>
               @
              </span>
              MarsWxReport
             </div>
            </a>
           </td>
           <td class="timestamp">
            <a href="/MarsWxReport/status/997627758871277568?p=p" name="tweet_997627758871277568">
             May 18
            </a>
           </td>
          </tr>
          <tr class="tweet-container">
           <td class="tweet-content" colspan="2">
            <div class="tweet-text" data-id="997627758871277568">
             <div class="dir-ltr" dir="ltr">
              Sol 2054 (May 17, 2018), Sunny, high 4C/39F, low -72C/-97F, pressure at 7.40 hPa, daylight 05:21-17:20
             </div>
            </div>
           </td>
          </tr>
          <tr>
           <td class="meta-and-actions" colspan="2">
            <span class="metadata">
             <a href="/MarsWxReport/status/997627758871277568?p=v">
              View details
             </a>
             <span class="middot">
              ·
             </span>
            </span>
            <span class="tweet-actions">
             <a class="first" href="/MarsWxReport/reply/997627758871277568?p=r">
              <img alt="Reply" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_reply.gif"/>
             </a>
             <a href="/statuses/997627758871277568/retweet?p=t">
              <img alt="Retweet" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_rt.gif"/>
             </a>
             <a class="favorite" href="/statuses/997627758871277568/favorite?p=f&amp;authenticity_token=52631780e58e3aaaf8f5e0e1b6c03af2b9acdf81">
              <img alt="Like" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_heart.gif"/>
             </a>
             <a class="last" href="/MarsWxReport/status/997627758871277568/actions">
             </a>
            </span>
           </td>
          </tr>
         </table>
         <table class="tweet " href="/MarsWxReport/status/997265374025482240?p=v">
          <tr class="tweet-header ">
           <td class="avatar" rowspan="3">
            <a href="/MarsWxReport?p=i">
             <img alt="Mars Weather" src="https://pbs.twimg.com/profile_images/2552209293/220px-Mars_atmosphere_normal.jpg">
             </img>
            </a>
           </td>
           <td class="user-info">
            <a href="/MarsWxReport?p=s">
             <strong class="fullname">
              Mars Weather
             </strong>
             <div class="username">
              <span>
               @
              </span>
              MarsWxReport
             </div>
            </a>
           </td>
           <td class="timestamp">
            <a href="/MarsWxReport/status/997265374025482240?p=p" name="tweet_997265374025482240">
             May 17
            </a>
           </td>
          </tr>
          <tr class="tweet-container">
           <td class="tweet-content" colspan="2">
            <div class="tweet-text" data-id="997265374025482240">
             <div class="dir-ltr" dir="ltr">
              Sol 2053 (May 16, 2018), Sunny, high 3C/37F, low -71C/-95F, pressure at 7.40 hPa, daylight 05:21-17:20
             </div>
            </div>
           </td>
          </tr>
          <tr>
           <td class="meta-and-actions" colspan="2">
            <span class="metadata">
             <a href="/MarsWxReport/status/997265374025482240?p=v">
              View details
             </a>
             <span class="middot">
              ·
             </span>
            </span>
            <span class="tweet-actions">
             <a class="first" href="/MarsWxReport/reply/997265374025482240?p=r">
              <img alt="Reply" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_reply.gif"/>
             </a>
             <a href="/statuses/997265374025482240/retweet?p=t">
              <img alt="Retweet" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_rt.gif"/>
             </a>
             <a class="favorite" href="/statuses/997265374025482240/favorite?p=f&amp;authenticity_token=52631780e58e3aaaf8f5e0e1b6c03af2b9acdf81">
              <img alt="Like" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_heart.gif"/>
             </a>
             <a class="last" href="/MarsWxReport/status/997265374025482240/actions">
             </a>
            </span>
           </td>
          </tr>
         </table>
         <table class="tweet " href="/MarsWxReport/status/996902987674025984?p=v">
          <tr class="tweet-header ">
           <td class="avatar" rowspan="3">
            <a href="/MarsWxReport?p=i">
             <img alt="Mars Weather" src="https://pbs.twimg.com/profile_images/2552209293/220px-Mars_atmosphere_normal.jpg">
             </img>
            </a>
           </td>
           <td class="user-info">
            <a href="/MarsWxReport?p=s">
             <strong class="fullname">
              Mars Weather
             </strong>
             <div class="username">
              <span>
               @
              </span>
              MarsWxReport
             </div>
            </a>
           </td>
           <td class="timestamp">
            <a href="/MarsWxReport/status/996902987674025984?p=p" name="tweet_996902987674025984">
             May 16
            </a>
           </td>
          </tr>
          <tr class="tweet-container">
           <td class="tweet-content" colspan="2">
            <div class="tweet-text" data-id="996902987674025984">
             <div class="dir-ltr" dir="ltr">
              Sol 2051 (May 14, 2018), Sunny, high 1C/33F, low -71C/-95F, pressure at 7.39 hPa, daylight 05:21-17:20
             </div>
            </div>
           </td>
          </tr>
          <tr>
           <td class="meta-and-actions" colspan="2">
            <span class="metadata">
             <a href="/MarsWxReport/status/996902987674025984?p=v">
              View details
             </a>
             <span class="middot">
              ·
             </span>
            </span>
            <span class="tweet-actions">
             <a class="first" href="/MarsWxReport/reply/996902987674025984?p=r">
              <img alt="Reply" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_reply.gif"/>
             </a>
             <a href="/statuses/996902987674025984/retweet?p=t">
              <img alt="Retweet" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_rt.gif"/>
             </a>
             <a class="favorite" href="/statuses/996902987674025984/favorite?p=f&amp;authenticity_token=52631780e58e3aaaf8f5e0e1b6c03af2b9acdf81">
              <img alt="Like" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_heart.gif"/>
             </a>
             <a class="last" href="/MarsWxReport/status/996902987674025984/actions">
             </a>
            </span>
           </td>
          </tr>
         </table>
         <table class="tweet " href="/MarsWxReport/status/996178220507680768?p=v">
          <tr class="tweet-header ">
           <td class="avatar" rowspan="3">
            <a href="/MarsWxReport?p=i">
             <img alt="Mars Weather" src="https://pbs.twimg.com/profile_images/2552209293/220px-Mars_atmosphere_normal.jpg">
             </img>
            </a>
           </td>
           <td class="user-info">
            <a href="/MarsWxReport?p=s">
             <strong class="fullname">
              Mars Weather
             </strong>
             <div class="username">
              <span>
               @
              </span>
              MarsWxReport
             </div>
            </a>
           </td>
           <td class="timestamp">
            <a href="/MarsWxReport/status/996178220507680768?p=p" name="tweet_996178220507680768">
             May 14
            </a>
           </td>
          </tr>
          <tr class="tweet-container">
           <td class="tweet-content" colspan="2">
            <div class="tweet-text" data-id="996178220507680768">
             <div class="dir-ltr" dir="ltr">
              Sol 2050 (May 13, 2018), Sunny, high 1C/33F, low -71C/-95F, pressure at 7.37 hPa, daylight 05:21-17:20
             </div>
            </div>
           </td>
          </tr>
          <tr>
           <td class="meta-and-actions" colspan="2">
            <span class="metadata">
             <a href="/MarsWxReport/status/996178220507680768?p=v">
              View details
             </a>
             <span class="middot">
              ·
             </span>
            </span>
            <span class="tweet-actions">
             <a class="first" href="/MarsWxReport/reply/996178220507680768?p=r">
              <img alt="Reply" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_reply.gif"/>
             </a>
             <a href="/statuses/996178220507680768/retweet?p=t">
              <img alt="Retweet" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_rt.gif"/>
             </a>
             <a class="favorite" href="/statuses/996178220507680768/favorite?p=f&amp;authenticity_token=52631780e58e3aaaf8f5e0e1b6c03af2b9acdf81">
              <img alt="Like" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_heart.gif"/>
             </a>
             <a class="last" href="/MarsWxReport/status/996178220507680768/actions">
             </a>
            </span>
           </td>
          </tr>
         </table>
         <table class="tweet " href="/MarsWxReport/status/995091070500392961?p=v">
          <tr class="tweet-header ">
           <td class="avatar" rowspan="3">
            <a href="/MarsWxReport?p=i">
             <img alt="Mars Weather" src="https://pbs.twimg.com/profile_images/2552209293/220px-Mars_atmosphere_normal.jpg">
             </img>
            </a>
           </td>
           <td class="user-info">
            <a href="/MarsWxReport?p=s">
             <strong class="fullname">
              Mars Weather
             </strong>
             <div class="username">
              <span>
               @
              </span>
              MarsWxReport
             </div>
            </a>
           </td>
           <td class="timestamp">
            <a href="/MarsWxReport/status/995091070500392961?p=p" name="tweet_995091070500392961">
             May 11
            </a>
           </td>
          </tr>
          <tr class="tweet-container">
           <td class="tweet-content" colspan="2">
            <div class="tweet-text" data-id="995091070500392961">
             <div class="dir-ltr" dir="ltr">
              Sol 2047 (May 10, 2018), Sunny, high 3C/37F, low -71C/-95F, pressure at 7.33 hPa, daylight 05:22-17:20
             </div>
            </div>
           </td>
          </tr>
          <tr>
           <td class="meta-and-actions" colspan="2">
            <span class="metadata">
             <a href="/MarsWxReport/status/995091070500392961?p=v">
              View details
             </a>
             <span class="middot">
              ·
             </span>
            </span>
            <span class="tweet-actions">
             <a class="first" href="/MarsWxReport/reply/995091070500392961?p=r">
              <img alt="Reply" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_reply.gif"/>
             </a>
             <a href="/statuses/995091070500392961/retweet?p=t">
              <img alt="Retweet" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_rt.gif"/>
             </a>
             <a class="favorite" href="/statuses/995091070500392961/favorite?p=f&amp;authenticity_token=52631780e58e3aaaf8f5e0e1b6c03af2b9acdf81">
              <img alt="Like" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_heart.gif"/>
             </a>
             <a class="last" href="/MarsWxReport/status/995091070500392961/actions">
             </a>
            </span>
           </td>
          </tr>
         </table>
         <table class="tweet " href="/MarsWxReport/status/994766443555250176?p=v">
          <tr class="tweet-header ">
           <td class="avatar" rowspan="3">
            <a href="/MarsWxReport?p=i">
             <img alt="Mars Weather" src="https://pbs.twimg.com/profile_images/2552209293/220px-Mars_atmosphere_normal.jpg">
             </img>
            </a>
           </td>
           <td class="user-info">
            <a href="/MarsWxReport?p=s">
             <strong class="fullname">
              Mars Weather
             </strong>
             <div class="username">
              <span>
               @
              </span>
              MarsWxReport
             </div>
            </a>
           </td>
           <td class="timestamp">
            <a href="/MarsWxReport/status/994766443555250176?p=p" name="tweet_994766443555250176">
             May 10
            </a>
           </td>
          </tr>
          <tr class="tweet-container">
           <td class="tweet-content" colspan="2">
            <div class="tweet-text" data-id="994766443555250176">
             <div class="dir-ltr" dir="ltr">
              <a class="twitter-hashtag dir-ltr" data-query-source="hashtag_click" dir="ltr" href="/hashtag/InSight?src=hash">
               #InSight
              </a>
              rising above the California fog on liftoff.
              <a class="twitter_external_link dir-ltr tco-link" data-expanded-url="https://twitter.com/birdsnspace/status/993603886106660864" data-url="https://twitter.com/birdsnspace/status/993603886106660864" dir="ltr" href="https://t.co/7bMYYBvGlA" rel="nofollow noopener" target="_blank" title="https://twitter.com/birdsnspace/status/993603886106660864">
               twitter.com/birdsnspace/st…
              </a>
             </div>
            </div>
           </td>
          </tr>
          <tr>
           <td class="meta-and-actions" colspan="2">
            <span class="metadata">
             <a href="/MarsWxReport/status/994766443555250176?p=v">
              View details
             </a>
             <span class="middot">
              ·
             </span>
            </span>
            <span class="tweet-actions">
             <a class="first" href="/MarsWxReport/reply/994766443555250176?p=r">
              <img alt="Reply" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_reply.gif"/>
             </a>
             <a href="/statuses/994766443555250176/retweet?p=t">
              <img alt="Retweet" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_rt.gif"/>
             </a>
             <a class="favorite" href="/statuses/994766443555250176/favorite?p=f&amp;authenticity_token=52631780e58e3aaaf8f5e0e1b6c03af2b9acdf81">
              <img alt="Like" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_heart.gif"/>
             </a>
             <a class="last" href="/MarsWxReport/status/994766443555250176/actions">
             </a>
            </span>
           </td>
          </tr>
         </table>
         <table class="tweet " href="/MarsWxReport/status/994366302545498113?p=v">
          <tr class="tweet-header ">
           <td class="avatar" rowspan="3">
            <a href="/MarsWxReport?p=i">
             <img alt="Mars Weather" src="https://pbs.twimg.com/profile_images/2552209293/220px-Mars_atmosphere_normal.jpg">
             </img>
            </a>
           </td>
           <td class="user-info">
            <a href="/MarsWxReport?p=s">
             <strong class="fullname">
              Mars Weather
             </strong>
             <div class="username">
              <span>
               @
              </span>
              MarsWxReport
             </div>
            </a>
           </td>
           <td class="timestamp">
            <a href="/MarsWxReport/status/994366302545498113?p=p" name="tweet_994366302545498113">
             May 9
            </a>
           </td>
          </tr>
          <tr class="tweet-container">
           <td class="tweet-content" colspan="2">
            <div class="tweet-text" data-id="994366302545498113">
             <div class="dir-ltr" dir="ltr">
              Sol 2045 (May 08, 2018), Sunny, high -7C/19F, low -74C/-101F, pressure at 7.33 hPa, daylight 05:22-17:20
             </div>
            </div>
           </td>
          </tr>
          <tr>
           <td class="meta-and-actions" colspan="2">
            <span class="metadata">
             <a href="/MarsWxReport/status/994366302545498113?p=v">
              View details
             </a>
             <span class="middot">
              ·
             </span>
            </span>
            <span class="tweet-actions">
             <a class="first" href="/MarsWxReport/reply/994366302545498113?p=r">
              <img alt="Reply" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_reply.gif"/>
             </a>
             <a href="/statuses/994366302545498113/retweet?p=t">
              <img alt="Retweet" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_rt.gif"/>
             </a>
             <a class="favorite" href="/statuses/994366302545498113/favorite?p=f&amp;authenticity_token=52631780e58e3aaaf8f5e0e1b6c03af2b9acdf81">
              <img alt="Like" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_heart.gif"/>
             </a>
             <a class="last" href="/MarsWxReport/status/994366302545498113/actions">
             </a>
            </span>
           </td>
          </tr>
         </table>
         <table class="tweet " href="/MarsWxReport/status/994076500340215809?p=v">
          <tr class="tweet-header ">
           <td class="avatar" rowspan="3">
            <a href="/MarsWxReport?p=i">
             <img alt="Mars Weather" src="https://pbs.twimg.com/profile_images/2552209293/220px-Mars_atmosphere_normal.jpg">
             </img>
            </a>
           </td>
           <td class="user-info">
            <a href="/MarsWxReport?p=s">
             <strong class="fullname">
              Mars Weather
             </strong>
             <div class="username">
              <span>
               @
              </span>
              MarsWxReport
             </div>
            </a>
           </td>
           <td class="timestamp">
            <a href="/MarsWxReport/status/994076500340215809?p=p" name="tweet_994076500340215809">
             May 8
            </a>
           </td>
          </tr>
          <tr class="tweet-container">
           <td class="tweet-content" colspan="2">
            <div class="tweet-text" data-id="994076500340215809">
             <div class="dir-ltr" dir="ltr">
              What a long beautiful neck full of science you have Curiosity’s Earth bound twin sister
              <a class="twitter_external_link dir-ltr tco-link" data-expanded-url="https://twitter.com/doug_ellison/status/994057810668212225" data-url="https://twitter.com/doug_ellison/status/994057810668212225" dir="ltr" href="https://t.co/NIJoNgmRzy" rel="nofollow noopener" target="_blank" title="https://twitter.com/doug_ellison/status/994057810668212225">
               twitter.com/doug_ellison/s…
              </a>
             </div>
            </div>
           </td>
          </tr>
          <tr>
           <td class="meta-and-actions" colspan="2">
            <span class="metadata">
             <a href="/MarsWxReport/status/994076500340215809?p=v">
              View details
             </a>
             <span class="middot">
              ·
             </span>
            </span>
            <span class="tweet-actions">
             <a class="first" href="/MarsWxReport/reply/994076500340215809?p=r">
              <img alt="Reply" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_reply.gif"/>
             </a>
             <a href="/statuses/994076500340215809/retweet?p=t">
              <img alt="Retweet" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_rt.gif"/>
             </a>
             <a class="favorite" href="/statuses/994076500340215809/favorite?p=f&amp;authenticity_token=52631780e58e3aaaf8f5e0e1b6c03af2b9acdf81">
              <img alt="Like" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_heart.gif"/>
             </a>
             <a class="last" href="/MarsWxReport/status/994076500340215809/actions">
             </a>
            </span>
           </td>
          </tr>
         </table>
         <table class="tweet " href="/MarsWxReport/status/994003918148571136?p=v">
          <tr class="tweet-header ">
           <td class="avatar" rowspan="3">
            <a href="/MarsWxReport?p=i">
             <img alt="Mars Weather" src="https://pbs.twimg.com/profile_images/2552209293/220px-Mars_atmosphere_normal.jpg">
             </img>
            </a>
           </td>
           <td class="user-info">
            <a href="/MarsWxReport?p=s">
             <strong class="fullname">
              Mars Weather
             </strong>
             <div class="username">
              <span>
               @
              </span>
              MarsWxReport
             </div>
            </a>
           </td>
           <td class="timestamp">
            <a href="/MarsWxReport/status/994003918148571136?p=p" name="tweet_994003918148571136">
             May 8
            </a>
           </td>
          </tr>
          <tr class="tweet-container">
           <td class="tweet-content" colspan="2">
            <div class="tweet-text" data-id="994003918148571136">
             <div class="dir-ltr" dir="ltr">
              Sol 2043 (May 06, 2018), Sunny, high -14C/6F, low -71C/-95F, pressure at 7.36 hPa, daylight 05:22-17:20
             </div>
            </div>
           </td>
          </tr>
          <tr>
           <td class="meta-and-actions" colspan="2">
            <span class="metadata">
             <a href="/MarsWxReport/status/994003918148571136?p=v">
              View details
             </a>
             <span class="middot">
              ·
             </span>
            </span>
            <span class="tweet-actions">
             <a class="first" href="/MarsWxReport/reply/994003918148571136?p=r">
              <img alt="Reply" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_reply.gif"/>
             </a>
             <a href="/statuses/994003918148571136/retweet?p=t">
              <img alt="Retweet" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_rt.gif"/>
             </a>
             <a class="favorite" href="/statuses/994003918148571136/favorite?p=f&amp;authenticity_token=52631780e58e3aaaf8f5e0e1b6c03af2b9acdf81">
              <img alt="Like" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_heart.gif"/>
             </a>
             <a class="last" href="/MarsWxReport/status/994003918148571136/actions">
             </a>
            </span>
           </td>
          </tr>
         </table>
         <table class="tweet " href="/MarsWxReport/status/993641532522684416?p=v">
          <tr class="tweet-header ">
           <td class="avatar" rowspan="3">
            <a href="/MarsWxReport?p=i">
             <img alt="Mars Weather" src="https://pbs.twimg.com/profile_images/2552209293/220px-Mars_atmosphere_normal.jpg">
             </img>
            </a>
           </td>
           <td class="user-info">
            <a href="/MarsWxReport?p=s">
             <strong class="fullname">
              Mars Weather
             </strong>
             <div class="username">
              <span>
               @
              </span>
              MarsWxReport
             </div>
            </a>
           </td>
           <td class="timestamp">
            <a href="/MarsWxReport/status/993641532522684416?p=p" name="tweet_993641532522684416">
             May 7
            </a>
           </td>
          </tr>
          <tr class="tweet-container">
           <td class="tweet-content" colspan="2">
            <div class="tweet-text" data-id="993641532522684416">
             <div class="dir-ltr" dir="ltr">
              Sol 2042 (May 05, 2018), Sunny, high -7C/19F, low -72C/-97F, pressure at 7.30 hPa, daylight 05:23-17:20
             </div>
            </div>
           </td>
          </tr>
          <tr>
           <td class="meta-and-actions" colspan="2">
            <span class="metadata">
             <a href="/MarsWxReport/status/993641532522684416?p=v">
              View details
             </a>
             <span class="middot">
              ·
             </span>
            </span>
            <span class="tweet-actions">
             <a class="first" href="/MarsWxReport/reply/993641532522684416?p=r">
              <img alt="Reply" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_reply.gif"/>
             </a>
             <a href="/statuses/993641532522684416/retweet?p=t">
              <img alt="Retweet" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_rt.gif"/>
             </a>
             <a class="favorite" href="/statuses/993641532522684416/favorite?p=f&amp;authenticity_token=52631780e58e3aaaf8f5e0e1b6c03af2b9acdf81">
              <img alt="Like" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_heart.gif"/>
             </a>
             <a class="last" href="/MarsWxReport/status/993641532522684416/actions">
             </a>
            </span>
           </td>
          </tr>
         </table>
         <table class="tweet " href="/MarsWxReport/status/992554379961126912?p=v">
          <tr class="tweet-header ">
           <td class="avatar" rowspan="3">
            <a href="/MarsWxReport?p=i">
             <img alt="Mars Weather" src="https://pbs.twimg.com/profile_images/2552209293/220px-Mars_atmosphere_normal.jpg">
             </img>
            </a>
           </td>
           <td class="user-info">
            <a href="/MarsWxReport?p=s">
             <strong class="fullname">
              Mars Weather
             </strong>
             <div class="username">
              <span>
               @
              </span>
              MarsWxReport
             </div>
            </a>
           </td>
           <td class="timestamp">
            <a href="/MarsWxReport/status/992554379961126912?p=p" name="tweet_992554379961126912">
             May 4
            </a>
           </td>
          </tr>
          <tr class="tweet-container">
           <td class="tweet-content" colspan="2">
            <div class="tweet-text" data-id="992554379961126912">
             <div class="dir-ltr" dir="ltr">
              Sol 2039 (May 02, 2018), Sunny, high 0C/32F, low -74C/-101F, pressure at 7.28 hPa, daylight 05:23-17:20
             </div>
            </div>
           </td>
          </tr>
          <tr>
           <td class="meta-and-actions" colspan="2">
            <span class="metadata">
             <a href="/MarsWxReport/status/992554379961126912?p=v">
              View details
             </a>
             <span class="middot">
              ·
             </span>
            </span>
            <span class="tweet-actions">
             <a class="first" href="/MarsWxReport/reply/992554379961126912?p=r">
              <img alt="Reply" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_reply.gif"/>
             </a>
             <a href="/statuses/992554379961126912/retweet?p=t">
              <img alt="Retweet" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_rt.gif"/>
             </a>
             <a class="favorite" href="/statuses/992554379961126912/favorite?p=f&amp;authenticity_token=52631780e58e3aaaf8f5e0e1b6c03af2b9acdf81">
              <img alt="Like" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_heart.gif"/>
             </a>
             <a class="last" href="/MarsWxReport/status/992554379961126912/actions">
             </a>
            </span>
           </td>
          </tr>
         </table>
         <table class="tweet " href="/MarsWxReport/status/992191996340199424?p=v">
          <tr class="tweet-header ">
           <td class="avatar" rowspan="3">
            <a href="/MarsWxReport?p=i">
             <img alt="Mars Weather" src="https://pbs.twimg.com/profile_images/2552209293/220px-Mars_atmosphere_normal.jpg">
             </img>
            </a>
           </td>
           <td class="user-info">
            <a href="/MarsWxReport?p=s">
             <strong class="fullname">
              Mars Weather
             </strong>
             <div class="username">
              <span>
               @
              </span>
              MarsWxReport
             </div>
            </a>
           </td>
           <td class="timestamp">
            <a href="/MarsWxReport/status/992191996340199424?p=p" name="tweet_992191996340199424">
             May 3
            </a>
           </td>
          </tr>
          <tr class="tweet-container">
           <td class="tweet-content" colspan="2">
            <div class="tweet-text" data-id="992191996340199424">
             <div class="dir-ltr" dir="ltr">
              Sol 2038 (May 01, 2018), Sunny, high -3C/26F, low -74C/-101F, pressure at 7.26 hPa, daylight 05:23-17:20
             </div>
            </div>
           </td>
          </tr>
          <tr>
           <td class="meta-and-actions" colspan="2">
            <span class="metadata">
             <a href="/MarsWxReport/status/992191996340199424?p=v">
              View details
             </a>
             <span class="middot">
              ·
             </span>
            </span>
            <span class="tweet-actions">
             <a class="first" href="/MarsWxReport/reply/992191996340199424?p=r">
              <img alt="Reply" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_reply.gif"/>
             </a>
             <a href="/statuses/992191996340199424/retweet?p=t">
              <img alt="Retweet" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_rt.gif"/>
             </a>
             <a class="favorite" href="/statuses/992191996340199424/favorite?p=f&amp;authenticity_token=52631780e58e3aaaf8f5e0e1b6c03af2b9acdf81">
              <img alt="Like" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_heart.gif"/>
             </a>
             <a class="last" href="/MarsWxReport/status/992191996340199424/actions">
             </a>
            </span>
           </td>
          </tr>
         </table>
         <table class="tweet " href="/MarsWxReport/status/991467229471440898?p=v">
          <tr class="tweet-header ">
           <td class="avatar" rowspan="3">
            <a href="/MarsWxReport?p=i">
             <img alt="Mars Weather" src="https://pbs.twimg.com/profile_images/2552209293/220px-Mars_atmosphere_normal.jpg">
             </img>
            </a>
           </td>
           <td class="user-info">
            <a href="/MarsWxReport?p=s">
             <strong class="fullname">
              Mars Weather
             </strong>
             <div class="username">
              <span>
               @
              </span>
              MarsWxReport
             </div>
            </a>
           </td>
           <td class="timestamp">
            <a href="/MarsWxReport/status/991467229471440898?p=p" name="tweet_991467229471440898">
             May 1
            </a>
           </td>
          </tr>
          <tr class="tweet-container">
           <td class="tweet-content" colspan="2">
            <div class="tweet-text" data-id="991467229471440898">
             <div class="dir-ltr" dir="ltr">
              Sol 2037 (April 30, 2018), Sunny, high -2C/28F, low -75C/-103F, pressure at 7.25 hPa, daylight 05:24-17:20
             </div>
            </div>
           </td>
          </tr>
          <tr>
           <td class="meta-and-actions" colspan="2">
            <span class="metadata">
             <a href="/MarsWxReport/status/991467229471440898?p=v">
              View details
             </a>
             <span class="middot">
              ·
             </span>
            </span>
            <span class="tweet-actions">
             <a class="first" href="/MarsWxReport/reply/991467229471440898?p=r">
              <img alt="Reply" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_reply.gif"/>
             </a>
             <a href="/statuses/991467229471440898/retweet?p=t">
              <img alt="Retweet" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_rt.gif"/>
             </a>
             <a class="favorite" href="/statuses/991467229471440898/favorite?p=f&amp;authenticity_token=52631780e58e3aaaf8f5e0e1b6c03af2b9acdf81">
              <img alt="Like" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_heart.gif"/>
             </a>
             <a class="last" href="/MarsWxReport/status/991467229471440898/actions">
             </a>
            </span>
           </td>
          </tr>
         </table>
         <table class="tweet " href="/MarsWxReport/status/991104845095555073?p=v">
          <tr class="tweet-header ">
           <td class="avatar" rowspan="3">
            <a href="/MarsWxReport?p=i">
             <img alt="Mars Weather" src="https://pbs.twimg.com/profile_images/2552209293/220px-Mars_atmosphere_normal.jpg">
             </img>
            </a>
           </td>
           <td class="user-info">
            <a href="/MarsWxReport?p=s">
             <strong class="fullname">
              Mars Weather
             </strong>
             <div class="username">
              <span>
               @
              </span>
              MarsWxReport
             </div>
            </a>
           </td>
           <td class="timestamp">
            <a href="/MarsWxReport/status/991104845095555073?p=p" name="tweet_991104845095555073">
             Apr 30
            </a>
           </td>
          </tr>
          <tr class="tweet-container">
           <td class="tweet-content" colspan="2">
            <div class="tweet-text" data-id="991104845095555073">
             <div class="dir-ltr" dir="ltr">
              Sol 2036 (April 29, 2018), Sunny, high -5C/23F, low -72C/-97F, pressure at 7.28 hPa, daylight 05:24-17:20
             </div>
            </div>
           </td>
          </tr>
          <tr>
           <td class="meta-and-actions" colspan="2">
            <span class="metadata">
             <a href="/MarsWxReport/status/991104845095555073?p=v">
              View details
             </a>
             <span class="middot">
              ·
             </span>
            </span>
            <span class="tweet-actions">
             <a class="first" href="/MarsWxReport/reply/991104845095555073?p=r">
              <img alt="Reply" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_reply.gif"/>
             </a>
             <a href="/statuses/991104845095555073/retweet?p=t">
              <img alt="Retweet" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_rt.gif"/>
             </a>
             <a class="favorite" href="/statuses/991104845095555073/favorite?p=f&amp;authenticity_token=52631780e58e3aaaf8f5e0e1b6c03af2b9acdf81">
              <img alt="Like" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_heart.gif"/>
             </a>
             <a class="last" href="/MarsWxReport/status/991104845095555073/actions">
             </a>
            </span>
           </td>
          </tr>
         </table>
         <table class="tweet " href="/MarsWxReport/status/990017691770597376?p=v">
          <tr class="tweet-header ">
           <td class="avatar" rowspan="3">
            <a href="/MarsWxReport?p=i">
             <img alt="Mars Weather" src="https://pbs.twimg.com/profile_images/2552209293/220px-Mars_atmosphere_normal.jpg">
             </img>
            </a>
           </td>
           <td class="user-info">
            <a href="/MarsWxReport?p=s">
             <strong class="fullname">
              Mars Weather
             </strong>
             <div class="username">
              <span>
               @
              </span>
              MarsWxReport
             </div>
            </a>
           </td>
           <td class="timestamp">
            <a href="/MarsWxReport/status/990017691770597376?p=p" name="tweet_990017691770597376">
             Apr 27
            </a>
           </td>
          </tr>
          <tr class="tweet-container">
           <td class="tweet-content" colspan="2">
            <div class="tweet-text" data-id="990017691770597376">
             <div class="dir-ltr" dir="ltr">
              Sol 2033 (April 25, 2018), Sunny, high -10C/14F, low -71C/-95F, pressure at 7.23 hPa, daylight 05:24-17:20
             </div>
            </div>
           </td>
          </tr>
          <tr>
           <td class="meta-and-actions" colspan="2">
            <span class="metadata">
             <a href="/MarsWxReport/status/990017691770597376?p=v">
              View details
             </a>
             <span class="middot">
              ·
             </span>
            </span>
            <span class="tweet-actions">
             <a class="first" href="/MarsWxReport/reply/990017691770597376?p=r">
              <img alt="Reply" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_reply.gif"/>
             </a>
             <a href="/statuses/990017691770597376/retweet?p=t">
              <img alt="Retweet" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_rt.gif"/>
             </a>
             <a class="favorite" href="/statuses/990017691770597376/favorite?p=f&amp;authenticity_token=52631780e58e3aaaf8f5e0e1b6c03af2b9acdf81">
              <img alt="Like" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_heart.gif"/>
             </a>
             <a class="last" href="/MarsWxReport/status/990017691770597376/actions">
             </a>
            </span>
           </td>
          </tr>
         </table>
         <table class="tweet " href="/MarsWxReport/status/989292923329146880?p=v">
          <tr class="tweet-header ">
           <td class="avatar" rowspan="3">
            <a href="/MarsWxReport?p=i">
             <img alt="Mars Weather" src="https://pbs.twimg.com/profile_images/2552209293/220px-Mars_atmosphere_normal.jpg">
             </img>
            </a>
           </td>
           <td class="user-info">
            <a href="/MarsWxReport?p=s">
             <strong class="fullname">
              Mars Weather
             </strong>
             <div class="username">
              <span>
               @
              </span>
              MarsWxReport
             </div>
            </a>
           </td>
           <td class="timestamp">
            <a href="/MarsWxReport/status/989292923329146880?p=p" name="tweet_989292923329146880">
             Apr 25
            </a>
           </td>
          </tr>
          <tr class="tweet-container">
           <td class="tweet-content" colspan="2">
            <div class="tweet-text" data-id="989292923329146880">
             <div class="dir-ltr" dir="ltr">
              Sol 2030 (April 22, 2018), Sunny, high -4C/24F, low -73C/-99F, pressure at 7.21 hPa, daylight 05:25-17:21
             </div>
            </div>
           </td>
          </tr>
          <tr>
           <td class="meta-and-actions" colspan="2">
            <span class="metadata">
             <a href="/MarsWxReport/status/989292923329146880?p=v">
              View details
             </a>
             <span class="middot">
              ·
             </span>
            </span>
            <span class="tweet-actions">
             <a class="first" href="/MarsWxReport/reply/989292923329146880?p=r">
              <img alt="Reply" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_reply.gif"/>
             </a>
             <a href="/statuses/989292923329146880/retweet?p=t">
              <img alt="Retweet" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_rt.gif"/>
             </a>
             <a class="favorite" href="/statuses/989292923329146880/favorite?p=f&amp;authenticity_token=52631780e58e3aaaf8f5e0e1b6c03af2b9acdf81">
              <img alt="Like" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_heart.gif"/>
             </a>
             <a class="last" href="/MarsWxReport/status/989292923329146880/actions">
             </a>
            </span>
           </td>
          </tr>
         </table>
         <table class="tweet " href="/MarsWxReport/status/988568154732482561?p=v">
          <tr class="tweet-header ">
           <td class="avatar" rowspan="3">
            <a href="/MarsWxReport?p=i">
             <img alt="Mars Weather" src="https://pbs.twimg.com/profile_images/2552209293/220px-Mars_atmosphere_normal.jpg">
             </img>
            </a>
           </td>
           <td class="user-info">
            <a href="/MarsWxReport?p=s">
             <strong class="fullname">
              Mars Weather
             </strong>
             <div class="username">
              <span>
               @
              </span>
              MarsWxReport
             </div>
            </a>
           </td>
           <td class="timestamp">
            <a href="/MarsWxReport/status/988568154732482561?p=p" name="tweet_988568154732482561">
             Apr 23
            </a>
           </td>
          </tr>
          <tr class="tweet-container">
           <td class="tweet-content" colspan="2">
            <div class="tweet-text" data-id="988568154732482561">
             <div class="dir-ltr" dir="ltr">
              Sol 2029 (April 21, 2018), Sunny, high -11C/12F, low -72C/-97F, pressure at 7.22 hPa, daylight 05:25-17:21
             </div>
            </div>
           </td>
          </tr>
          <tr>
           <td class="meta-and-actions" colspan="2">
            <span class="metadata">
             <a href="/MarsWxReport/status/988568154732482561?p=v">
              View details
             </a>
             <span class="middot">
              ·
             </span>
            </span>
            <span class="tweet-actions">
             <a class="first" href="/MarsWxReport/reply/988568154732482561?p=r">
              <img alt="Reply" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_reply.gif"/>
             </a>
             <a href="/statuses/988568154732482561/retweet?p=t">
              <img alt="Retweet" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_rt.gif"/>
             </a>
             <a class="favorite" href="/statuses/988568154732482561/favorite?p=f&amp;authenticity_token=52631780e58e3aaaf8f5e0e1b6c03af2b9acdf81">
              <img alt="Like" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_heart.gif"/>
             </a>
             <a class="last" href="/MarsWxReport/status/988568154732482561/actions">
             </a>
            </span>
           </td>
          </tr>
         </table>
         <table class="tweet " href="/MarsWxReport/status/987481001935949825?p=v">
          <tr class="tweet-header ">
           <td class="avatar" rowspan="3">
            <a href="/MarsWxReport?p=i">
             <img alt="Mars Weather" src="https://pbs.twimg.com/profile_images/2552209293/220px-Mars_atmosphere_normal.jpg">
             </img>
            </a>
           </td>
           <td class="user-info">
            <a href="/MarsWxReport?p=s">
             <strong class="fullname">
              Mars Weather
             </strong>
             <div class="username">
              <span>
               @
              </span>
              MarsWxReport
             </div>
            </a>
           </td>
           <td class="timestamp">
            <a href="/MarsWxReport/status/987481001935949825?p=p" name="tweet_987481001935949825">
             Apr 20
            </a>
           </td>
          </tr>
          <tr class="tweet-container">
           <td class="tweet-content" colspan="2">
            <div class="tweet-text" data-id="987481001935949825">
             <div class="dir-ltr" dir="ltr">
              Sol 2026 (April 18, 2018), Sunny, high -6C/21F, low -73C/-99F, pressure at 7.19 hPa, daylight 05:26-17:21
             </div>
            </div>
           </td>
          </tr>
          <tr>
           <td class="meta-and-actions" colspan="2">
            <span class="metadata">
             <a href="/MarsWxReport/status/987481001935949825?p=v">
              View details
             </a>
             <span class="middot">
              ·
             </span>
            </span>
            <span class="tweet-actions">
             <a class="first" href="/MarsWxReport/reply/987481001935949825?p=r">
              <img alt="Reply" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_reply.gif"/>
             </a>
             <a href="/statuses/987481001935949825/retweet?p=t">
              <img alt="Retweet" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_rt.gif"/>
             </a>
             <a class="favorite" href="/statuses/987481001935949825/favorite?p=f&amp;authenticity_token=52631780e58e3aaaf8f5e0e1b6c03af2b9acdf81">
              <img alt="Like" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_heart.gif"/>
             </a>
             <a class="last" href="/MarsWxReport/status/987481001935949825/actions">
             </a>
            </span>
           </td>
          </tr>
         </table>
         <table class="tweet " href="/MarsWxReport/status/986756236937957379?p=v">
          <tr class="tweet-header ">
           <td class="avatar" rowspan="3">
            <a href="/MarsWxReport?p=i">
             <img alt="Mars Weather" src="https://pbs.twimg.com/profile_images/2552209293/220px-Mars_atmosphere_normal.jpg">
             </img>
            </a>
           </td>
           <td class="user-info">
            <a href="/MarsWxReport?p=s">
             <strong class="fullname">
              Mars Weather
             </strong>
             <div class="username">
              <span>
               @
              </span>
              MarsWxReport
             </div>
            </a>
           </td>
           <td class="timestamp">
            <a href="/MarsWxReport/status/986756236937957379?p=p" name="tweet_986756236937957379">
             Apr 18
            </a>
           </td>
          </tr>
          <tr class="tweet-container">
           <td class="tweet-content" colspan="2">
            <div class="tweet-text" data-id="986756236937957379">
             <div class="dir-ltr" dir="ltr">
              Sol 2024 (April 16, 2018), Sunny, high -7C/19F, low -76C/-104F, pressure at 7.20 hPa, daylight 05:26-17:21
             </div>
            </div>
           </td>
          </tr>
          <tr>
           <td class="meta-and-actions" colspan="2">
            <span class="metadata">
             <a href="/MarsWxReport/status/986756236937957379?p=v">
              View details
             </a>
             <span class="middot">
              ·
             </span>
            </span>
            <span class="tweet-actions">
             <a class="first" href="/MarsWxReport/reply/986756236937957379?p=r">
              <img alt="Reply" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_reply.gif"/>
             </a>
             <a href="/statuses/986756236937957379/retweet?p=t">
              <img alt="Retweet" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_rt.gif"/>
             </a>
             <a class="favorite" href="/statuses/986756236937957379/favorite?p=f&amp;authenticity_token=52631780e58e3aaaf8f5e0e1b6c03af2b9acdf81">
              <img alt="Like" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_heart.gif"/>
             </a>
             <a class="last" href="/MarsWxReport/status/986756236937957379/actions">
             </a>
            </span>
           </td>
          </tr>
         </table>
         <table class="tweet " href="/MarsWxReport/status/986031468571803648?p=v">
          <tr class="tweet-header ">
           <td class="avatar" rowspan="3">
            <a href="/MarsWxReport?p=i">
             <img alt="Mars Weather" src="https://pbs.twimg.com/profile_images/2552209293/220px-Mars_atmosphere_normal.jpg">
             </img>
            </a>
           </td>
           <td class="user-info">
            <a href="/MarsWxReport?p=s">
             <strong class="fullname">
              Mars Weather
             </strong>
             <div class="username">
              <span>
               @
              </span>
              MarsWxReport
             </div>
            </a>
           </td>
           <td class="timestamp">
            <a href="/MarsWxReport/status/986031468571803648?p=p" name="tweet_986031468571803648">
             Apr 16
            </a>
           </td>
          </tr>
          <tr class="tweet-container">
           <td class="tweet-content" colspan="2">
            <div class="tweet-text" data-id="986031468571803648">
             <div class="dir-ltr" dir="ltr">
              Sol 2022 (April 14, 2018), Sunny, high -4C/24F, low -73C/-99F, pressure at 7.19 hPa, daylight 05:27-17:21
             </div>
            </div>
           </td>
          </tr>
          <tr>
           <td class="meta-and-actions" colspan="2">
            <span class="metadata">
             <a href="/MarsWxReport/status/986031468571803648?p=v">
              View details
             </a>
             <span class="middot">
              ·
             </span>
            </span>
            <span class="tweet-actions">
             <a class="first" href="/MarsWxReport/reply/986031468571803648?p=r">
              <img alt="Reply" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_reply.gif"/>
             </a>
             <a href="/statuses/986031468571803648/retweet?p=t">
              <img alt="Retweet" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_rt.gif"/>
             </a>
             <a class="favorite" href="/statuses/986031468571803648/favorite?p=f&amp;authenticity_token=52631780e58e3aaaf8f5e0e1b6c03af2b9acdf81">
              <img alt="Like" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/tweet_heart.gif"/>
             </a>
             <a class="last" href="/MarsWxReport/status/986031468571803648/actions">
             </a>
            </span>
           </td>
          </tr>
         </table>
         <div class="w-button-more">
          <a href="/MarsWxReport?max_id=986031468571803647">
           Load older Tweets
          </a>
         </div>
        </div>
       </div>
       <div id="footer">
        <div class="search-fields">
         <div class="title">
          <label for="q">
           Enter a topic, @name, or fullname
          </label>
         </div>
         <form action="/search" class="search-input" method="get">
          <table>
           <tr>
            <td class="value" id="search">
             <div>
              <input id="q" name="q" type="text" value=""/>
             </div>
            </td>
            <td class="button">
             <input name="s" type="hidden" value="typd">
              <input alt="Search" src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/images/sprites/magnifying_glass.gif" type="image">
              </input>
             </input>
            </td>
           </tr>
          </table>
         </form>
        </div>
        <table class="global-actions">
         <tr>
          <td>
           <a href="/settings">
            Settings
           </a>
          </td>
          <td>
           <a href="https://support.twitter.com/">
            Help
           </a>
          </td>
         </tr>
        </table>
        <div class="view-actions">
         <a href="#top">
          Back to top
         </a>
         ·
         <a href="/settings/profile_images">
          Turn images off
         </a>
        </div>
       </div>
      </div>
      <script id="scribe-configuration" type="application/json">
       {"page":"profile"}
      </script>
      <script src="https://ma.twimg.com/twitter-mobile/8f3445bd0e5eb63b939e25a6ff29981d947a4a51/assets/m2_tweets.js" type="text/javascript">
      </script>
      <img height="0" src="/i/anonymize?data=%5B%7B%22integration%22%3A%22ga%22%2C%22ref%22%3A%22%22%2C%22mobileMetricsToken%22%3A%22152692519532701131%22%7D%5D" style="opacity: 0" width="0"/>
     </body>
    </html>
    
    


```python
results = soup.find('p', class_="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text").text
results
```


    ---------------------------------------------------------------------------

    AttributeError                            Traceback (most recent call last)

    <ipython-input-10-581590968d50> in <module>()
    ----> 1 results = soup.find('p', class_="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text").text
          2 results
    

    AttributeError: 'NoneType' object has no attribute 'text'



```python
mars_dict['weather'] = results
```


```python
# GETTING THE MOST RECENT MARS IMAGE

url = 'https://www.jpl.nasa.gov/spaceimages/?search=&category=Mars'
browser.visit(url)
```


```python
html = browser.html
soup = bs(html, 'html.parser')
print(soup.prettify())
```

    <!DOCTYPE html>
    <!--[if IE 9]> <html class="no-js ie ie9" lang="en"> <![endif]-->
    <!--[if IE 8]> <html class="no-js ie ie8" lang="en"> <![endif]-->
    <html class="js flexbox canvas canvastext webgl touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths -webkit-" style="" xmlns="http://www.w3.org/1999/xhtml">
     <!-- START HEADER: "DEFAULT" -->
     <head>
      <script src="//m.addthis.com/live/red_lojson/300lo.json?si=5b0242de17c5dd32&amp;bkl=0&amp;bl=1&amp;pdt=953&amp;sid=5b0242de17c5dd32&amp;pub=&amp;rev=v8.3.12-wp&amp;ln=en&amp;pc=men&amp;cb=0&amp;ab=-&amp;dp=www.jpl.nasa.gov&amp;fp=spaceimages%2F%3Fsearch%3D%26category%3DMars&amp;fr=&amp;of=1&amp;pd=0&amp;irt=0&amp;vcl=0&amp;md=0&amp;ct=1&amp;tct=0&amp;abt=0&amp;cdn=0&amp;pi=1&amp;rb=0&amp;gen=100&amp;chr=UTF-8&amp;colc=1526874846445&amp;jsl=1&amp;skipb=1&amp;callback=addthis.cbs.oln9_8331105513908670" type="text/javascript">
      </script>
      <script async="" src="https://script.crazyegg.com/pages/scripts/0025/5267.js?424131" type="text/javascript">
      </script>
      <meta charset="utf-8"/>
      <!-- Always force latest IE rendering engine or request Chrome Frame -->
      <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible"/>
      <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport"/>
      <title>
       Space Images
      </title>
      <style data-href="/assets/stylesheets/manifest.css" media="all">
       @import url("https://www.jpl.nasa.gov/assets/stylesheets/vendor/jquery.fancybox.css");@import url("https://www.jpl.nasa.gov/assets/stylesheets/vendor/jquery.fancybox-thumbs.css");html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{border:0;font-size:100%;font:inherit;vertical-align:baseline;margin:0;padding:0}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:none}table{border-collapse:collapse;border-spacing:0}html,button,input,select,textarea{color:#222}body{font-size:1em;line-height:1.4}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}audio,canvas,img,video{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.browsehappy{margin:0.2em 0;background:#ccc;color:#000;padding:0.2em 0}.ir{background-color:transparent;border:0;overflow:hidden;*text-indent:-9999px}.ir:before{content:"";display:block;width:0;height:150%}.hidden{display:none !important;visibility:hidden}.visuallyhidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.visuallyhidden.focusable:active,.visuallyhidden.focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.invisible{visibility:hidden}.clearfix:before,.main_nav_overlay .nav_item:before,.clearfix:after,.main_nav_overlay .nav_item:after{content:" ";display:table}.clearfix:after,.main_nav_overlay .nav_item:after{clear:both}.clearfix,.main_nav_overlay .nav_item{*zoom:1}@media print{*{background:transparent !important;color:#000 !important;box-shadow:none !important;text-shadow:none !important}a,a:visited{text-decoration:underline}a[href]:after{content:" (" attr(href) ")"}abbr[title]:after{content:" (" attr(title) ")"}.ir a:after,a[href^="javascript:"]:after,a[href^="#"]:after{content:""}pre,blockquote{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}tr,img{page-break-inside:avoid}img{max-width:100% !important}@page{margin:0.5cm}p,h2,h3{orphans:3;widows:3}h2,h3{page-break-after:avoid}}.ui-helper-hidden{display:none}.ui-helper-hidden-accessible{position:absolute !important;clip:rect(1px 1px 1px 1px);clip:rect(1px, 1px, 1px, 1px)}.ui-helper-reset{margin:0;padding:0;border:0;outline:0;line-height:1.3;text-decoration:none;font-size:100%;list-style:none}.ui-helper-clearfix:before,.ui-helper-clearfix:after{content:"";display:table}.ui-helper-clearfix:after{clear:both}.ui-helper-clearfix{zoom:1}.ui-helper-zfix{width:100%;height:100%;top:0;left:0;position:absolute;opacity:0;filter:Alpha(Opacity=0)}.ui-state-disabled{cursor:default !important}.ui-icon{display:block;text-indent:-99999px;overflow:hidden;background-repeat:no-repeat}.ui-widget-overlay{position:absolute;top:0;left:0;width:100%;height:100%}.ui-slider{position:relative;text-align:left}.ui-slider .ui-slider-handle{position:absolute;z-index:2;width:6.2em;height:.7em;cursor:default}.ui-slider .ui-slider-range{position:absolute;z-index:1;font-size:.7em;display:block;border:0;background-position:0 0}.ui-slider-horizontal{height:.8em}.ui-slider-horizontal .ui-slider-handle{top:0;margin-left:0}.ui-slider-horizontal .ui-slider-range{top:0;height:100%}.ui-slider-horizontal .ui-slider-range-min{left:0}.ui-slider-horizontal .ui-slider-range-max{right:0}.ui-slider-vertical{width:.8em;height:100px}.ui-slider-vertical .ui-slider-handle{left:-.3em;margin-left:0;margin-bottom:-.6em}.ui-slider-vertical .ui-slider-range{left:0;width:100%}.ui-slider-vertical .ui-slider-range-min{bottom:0}.ui-slider-vertical .ui-slider-range-max{top:0}.ui-widget{font-family:Segoe UI,Arial,sans-serif;font-size:1.1em}.ui-widget .ui-widget{font-size:1em}.ui-widget input,.ui-widget select,.ui-widget textarea,.ui-widget button{font-family:Segoe UI,Arial,sans-serif;font-size:1em}.ui-widget-content{border:1px solid #666666;background:#000000;color:#ffffff}.ui-widget-content a{color:#ffffff}.ui-widget-header{border:1px solid #333333;background:#333333;color:#ffffff;font-weight:700}.ui-widget-header a{color:#ffffff}.ui-state-default,.ui-widget-content .ui-state-default,.ui-widget-header .ui-state-default{border:1px solid #666666;background:#555555;font-weight:700;color:#eeeeee}.ui-state-default a,.ui-state-default a:link,.ui-state-default a:visited{color:#eeeeee;text-decoration:none}.ui-state-hover a,.ui-state-hover a:hover{color:#ffffff;text-decoration:none}.ui-state-active,.ui-widget-content .ui-state-active,.ui-widget-header .ui-state-active{border:1px solid #ffaf0f;background:#f58400;font-weight:700;color:#ffffff}.ui-state-active a,.ui-state-active a:link,.ui-state-active a:visited{color:#ffffff;text-decoration:none}.ui-state-highlight,.ui-widget-content .ui-state-highlight,.ui-widget-header .ui-state-highlight{border:1px solid #cccccc;background:#eeeeee;color:#2e7db2}.ui-state-highlight a,.ui-widget-content .ui-state-highlight a,.ui-widget-header .ui-state-highlight a{color:#2e7db2}.ui-state-error,.ui-widget-content .ui-state-error,.ui-widget-header .ui-state-error{border:1px solid #ffb73d;background:#ffc73d;color:#111111}.ui-state-error a,.ui-widget-content .ui-state-error a,.ui-widget-header .ui-state-error a{color:#111111}.ui-state-error-text,.ui-widget-content .ui-state-error-text,.ui-widget-header .ui-state-error-text{color:#111111}.ui-priority-primary,.ui-widget-content .ui-priority-primary,.ui-widget-header .ui-priority-primary{font-weight:700}.ui-priority-secondary,.ui-widget-content .ui-priority-secondary,.ui-widget-header .ui-priority-secondary{opacity:.7;filter:Alpha(Opacity=70);font-weight:400}.ui-state-disabled,.ui-widget-content .ui-state-disabled,.ui-widget-header .ui-state-disabled{opacity:.35;filter:Alpha(Opacity=35);background-image:none}.ui-icon{width:16px;height:16px}.ui-icon-carat-1-n{background-position:0 0}.ui-icon-carat-1-ne{background-position:-16px 0}.ui-icon-carat-1-e{background-position:-32px 0}.ui-icon-carat-1-se{background-position:-48px 0}.ui-icon-carat-1-s{background-position:-64px 0}.ui-icon-carat-1-sw{background-position:-80px 0}.ui-icon-carat-1-w{background-position:-96px 0}.ui-icon-carat-1-nw{background-position:-112px 0}.ui-icon-carat-2-n-s{background-position:-128px 0}.ui-icon-carat-2-e-w{background-position:-144px 0}.ui-icon-triangle-1-n{background-position:0 -16px}.ui-icon-triangle-1-ne{background-position:-16px -16px}.ui-icon-triangle-1-e{background-position:-32px -16px}.ui-icon-triangle-1-se{background-position:-48px -16px}.ui-icon-triangle-1-s{background-position:-64px -16px}.ui-icon-triangle-1-sw{background-position:-80px -16px}.ui-icon-triangle-1-w{background-position:-96px -16px}.ui-icon-triangle-1-nw{background-position:-112px -16px}.ui-icon-triangle-2-n-s{background-position:-128px -16px}.ui-icon-triangle-2-e-w{background-position:-144px -16px}.ui-icon-arrow-1-n{background-position:0 -32px}.ui-icon-arrow-1-ne{background-position:-16px -32px}.ui-icon-arrow-1-e{background-position:-32px -32px}.ui-icon-arrow-1-se{background-position:-48px -32px}.ui-icon-arrow-1-s{background-position:-64px -32px}.ui-icon-arrow-1-sw{background-position:-80px -32px}.ui-icon-arrow-1-w{background-position:-96px -32px}.ui-icon-arrow-1-nw{background-position:-112px -32px}.ui-icon-arrow-2-n-s{background-position:-128px -32px}.ui-icon-arrow-2-ne-sw{background-position:-144px -32px}.ui-icon-arrow-2-e-w{background-position:-160px -32px}.ui-icon-arrow-2-se-nw{background-position:-176px -32px}.ui-icon-arrowstop-1-n{background-position:-192px -32px}.ui-icon-arrowstop-1-e{background-position:-208px -32px}.ui-icon-arrowstop-1-s{background-position:-224px -32px}.ui-icon-arrowstop-1-w{background-position:-240px -32px}.ui-icon-arrowthick-1-n{background-position:0 -48px}.ui-icon-arrowthick-1-ne{background-position:-16px -48px}.ui-icon-arrowthick-1-e{background-position:-32px -48px}.ui-icon-arrowthick-1-se{background-position:-48px -48px}.ui-icon-arrowthick-1-s{background-position:-64px -48px}.ui-icon-arrowthick-1-sw{background-position:-80px -48px}.ui-icon-arrowthick-1-w{background-position:-96px -48px}.ui-icon-arrowthick-1-nw{background-position:-112px -48px}.ui-icon-arrowthick-2-n-s{background-position:-128px -48px}.ui-icon-arrowthick-2-ne-sw{background-position:-144px -48px}.ui-icon-arrowthick-2-e-w{background-position:-160px -48px}.ui-icon-arrowthick-2-se-nw{background-position:-176px -48px}.ui-icon-arrowthickstop-1-n{background-position:-192px -48px}.ui-icon-arrowthickstop-1-e{background-position:-208px -48px}.ui-icon-arrowthickstop-1-s{background-position:-224px -48px}.ui-icon-arrowthickstop-1-w{background-position:-240px -48px}.ui-icon-arrowreturnthick-1-w{background-position:0 -64px}.ui-icon-arrowreturnthick-1-n{background-position:-16px -64px}.ui-icon-arrowreturnthick-1-e{background-position:-32px -64px}.ui-icon-arrowreturnthick-1-s{background-position:-48px -64px}.ui-icon-arrowreturn-1-w{background-position:-64px -64px}.ui-icon-arrowreturn-1-n{background-position:-80px -64px}.ui-icon-arrowreturn-1-e{background-position:-96px -64px}.ui-icon-arrowreturn-1-s{background-position:-112px -64px}.ui-icon-arrowrefresh-1-w{background-position:-128px -64px}.ui-icon-arrowrefresh-1-n{background-position:-144px -64px}.ui-icon-arrowrefresh-1-e{background-position:-160px -64px}.ui-icon-arrowrefresh-1-s{background-position:-176px -64px}.ui-icon-arrow-4{background-position:0 -80px}.ui-icon-arrow-4-diag{background-position:-16px -80px}.ui-icon-extlink{background-position:-32px -80px}.ui-icon-newwin{background-position:-48px -80px}.ui-icon-refresh{background-position:-64px -80px}.ui-icon-shuffle{background-position:-80px -80px}.ui-icon-transfer-e-w{background-position:-96px -80px}.ui-icon-transferthick-e-w{background-position:-112px -80px}.ui-icon-folder-collapsed{background-position:0 -96px}.ui-icon-folder-open{background-position:-16px -96px}.ui-icon-document{background-position:-32px -96px}.ui-icon-document-b{background-position:-48px -96px}.ui-icon-note{background-position:-64px -96px}.ui-icon-mail-closed{background-position:-80px -96px}.ui-icon-mail-open{background-position:-96px -96px}.ui-icon-suitcase{background-position:-112px -96px}.ui-icon-comment{background-position:-128px -96px}.ui-icon-person{background-position:-144px -96px}.ui-icon-print{background-position:-160px -96px}.ui-icon-trash{background-position:-176px -96px}.ui-icon-locked{background-position:-192px -96px}.ui-icon-unlocked{background-position:-208px -96px}.ui-icon-bookmark{background-position:-224px -96px}.ui-icon-tag{background-position:-240px -96px}.ui-icon-home{background-position:0 -112px}.ui-icon-flag{background-position:-16px -112px}.ui-icon-calendar{background-position:-32px -112px}.ui-icon-cart{background-position:-48px -112px}.ui-icon-pencil{background-position:-64px -112px}.ui-icon-clock{background-position:-80px -112px}.ui-icon-disk{background-position:-96px -112px}.ui-icon-calculator{background-position:-112px -112px}.ui-icon-zoomin{background-position:-128px -112px}.ui-icon-zoomout{background-position:-144px -112px}.ui-icon-search{background-position:-160px -112px}.ui-icon-wrench{background-position:-176px -112px}.ui-icon-gear{background-position:-192px -112px}.ui-icon-heart{background-position:-208px -112px}.ui-icon-star{background-position:-224px -112px}.ui-icon-link{background-position:-240px -112px}.ui-icon-cancel{background-position:0 -128px}.ui-icon-plus{background-position:-16px -128px}.ui-icon-plusthick{background-position:-32px -128px}.ui-icon-minus{background-position:-48px -128px}.ui-icon-minusthick{background-position:-64px -128px}.ui-icon-close{background-position:-80px -128px}.ui-icon-closethick{background-position:-96px -128px}.ui-icon-key{background-position:-112px -128px}.ui-icon-lightbulb{background-position:-128px -128px}.ui-icon-scissors{background-position:-144px -128px}.ui-icon-clipboard{background-position:-160px -128px}.ui-icon-copy{background-position:-176px -128px}.ui-icon-contact{background-position:-192px -128px}.ui-icon-image{background-position:-208px -128px}.ui-icon-video{background-position:-224px -128px}.ui-icon-script{background-position:-240px -128px}.ui-icon-alert{background-position:0 -144px}.ui-icon-info{background-position:-16px -144px}.ui-icon-notice{background-position:-32px -144px}.ui-icon-help{background-position:-48px -144px}.ui-icon-check{background-position:-64px -144px}.ui-icon-bullet{background-position:-80px -144px}.ui-icon-radio-on{background-position:-96px -144px}.ui-icon-radio-off{background-position:-112px -144px}.ui-icon-pin-w{background-position:-128px -144px}.ui-icon-pin-s{background-position:-144px -144px}.ui-icon-play{background-position:0 -160px}.ui-icon-pause{background-position:-16px -160px}.ui-icon-seek-next{background-position:-32px -160px}.ui-icon-seek-prev{background-position:-48px -160px}.ui-icon-seek-end{background-position:-64px -160px}.ui-icon-seek-start{background-position:-80px -160px}.ui-icon-seek-first{background-position:-80px -160px}.ui-icon-stop{background-position:-96px -160px}.ui-icon-eject{background-position:-112px -160px}.ui-icon-volume-off{background-position:-128px -160px}.ui-icon-volume-on{background-position:-144px -160px}.ui-icon-power{background-position:0 -176px}.ui-icon-signal-diag{background-position:-16px -176px}.ui-icon-signal{background-position:-32px -176px}.ui-icon-battery-0{background-position:-48px -176px}.ui-icon-battery-1{background-position:-64px -176px}.ui-icon-battery-2{background-position:-80px -176px}.ui-icon-battery-3{background-position:-96px -176px}.ui-icon-circle-plus{background-position:0 -192px}.ui-icon-circle-minus{background-position:-16px -192px}.ui-icon-circle-close{background-position:-32px -192px}.ui-icon-circle-triangle-e{background-position:-48px -192px}.ui-icon-circle-triangle-s{background-position:-64px -192px}.ui-icon-circle-triangle-w{background-position:-80px -192px}.ui-icon-circle-triangle-n{background-position:-96px -192px}.ui-icon-circle-arrow-e{background-position:-112px -192px}.ui-icon-circle-arrow-s{background-position:-128px -192px}.ui-icon-circle-arrow-w{background-position:-144px -192px}.ui-icon-circle-arrow-n{background-position:-160px -192px}.ui-icon-circle-zoomin{background-position:-176px -192px}.ui-icon-circle-zoomout{background-position:-192px -192px}.ui-icon-circle-check{background-position:-208px -192px}.ui-icon-circlesmall-plus{background-position:0 -208px}.ui-icon-circlesmall-minus{background-position:-16px -208px}.ui-icon-circlesmall-close{background-position:-32px -208px}.ui-icon-squaresmall-plus{background-position:-48px -208px}.ui-icon-squaresmall-minus{background-position:-64px -208px}.ui-icon-squaresmall-close{background-position:-80px -208px}.ui-icon-grip-dotted-vertical{background-position:0 -224px}.ui-icon-grip-dotted-horizontal{background-position:-16px -224px}.ui-icon-grip-solid-vertical{background-position:-32px -224px}.ui-icon-grip-solid-horizontal{background-position:-48px -224px}.ui-icon-gripsmall-diagonal-se{background-position:-64px -224px}.ui-icon-grip-diagonal-se{background-position:-80px -224px}.ui-corner-all,.ui-corner-top,.ui-corner-left,.ui-corner-tl{-moz-border-radius-topleft:6px;-webkit-border-top-left-radius:6px;-khtml-border-top-left-radius:6px;border-top-left-radius:6px}.ui-corner-all,.ui-corner-top,.ui-corner-right,.ui-corner-tr{-moz-border-radius-topright:6px;-webkit-border-top-right-radius:6px;-khtml-border-top-right-radius:6px;border-top-right-radius:6px}.ui-corner-all,.ui-corner-bottom,.ui-corner-left,.ui-corner-bl{-moz-border-radius-bottomleft:6px;-webkit-border-bottom-left-radius:6px;-khtml-border-bottom-left-radius:6px;border-bottom-left-radius:6px}.ui-corner-all,.ui-corner-bottom,.ui-corner-right,.ui-corner-br{-moz-border-radius-bottomright:6px;-webkit-border-bottom-right-radius:6px;-khtml-border-bottom-right-radius:6px;border-bottom-right-radius:6px}#simplemodal-overlay{background-color:#000}#simplemodal-container{height:360px;width:600px;color:#fff;background-color:#000;border:0;padding:0}#simplemodal-container .simplemodal-data{padding:20px 50px}.slick-slider{position:relative;display:block;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list{position:relative;overflow:hidden;display:block;margin:0;padding:0}.slick-list:focus{outline:none}.slick-loading .slick-list{background:#fff url("https://www.jpl.nasa.gov/assets/stylesheets/./ajax-loader.gif") center center no-repeat}.slick-list.dragging{cursor:pointer;cursor:hand}.slick-slider .slick-list,.slick-track,.slick-slide,.slick-slide img{-webkit-transform:translate3d(0, 0, 0);-moz-transform:translate3d(0, 0, 0);-ms-transform:translate3d(0, 0, 0);-o-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}.slick-track{position:relative;left:0;top:0;display:block;zoom:1}.slick-track:before,.slick-track:after{content:"";display:table}.slick-track:after{clear:both}.slick-loading .slick-track{visibility:hidden}.slick-slide{float:left;height:100%;min-height:1px;display:none}.slick-slide img{display:block}.slick-slide.slick-loading img{display:none}.slick-slide.dragging img{pointer-events:none}.slick-initialized .slick-slide{display:block}.slick-loading .slick-slide{visibility:hidden}.slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}@font-face{font-family:"slick";src:url("https://www.jpl.nasa.gov/assets/stylesheets/./fonts/slick.eot");src:url("https://www.jpl.nasa.gov/assets/stylesheets/./fonts/slick.eot?#iefix") format("embedded-opentype"),url("https://www.jpl.nasa.gov/assets/stylesheets/./fonts/slick.woff") format("woff"),url("https://www.jpl.nasa.gov/assets/stylesheets/./fonts/slick.ttf") format("truetype"),url("https://www.jpl.nasa.gov/assets/stylesheets/./fonts/slick.svg#slick") format("svg");font-weight:normal;font-style:normal}.slick-prev,.slick-next{position:absolute;display:block;height:20px;width:20px;line-height:0;font-size:0;cursor:pointer;background:transparent;color:transparent;top:50%;margin-top:-10px;padding:0;border:none;outline:none}.slick-prev:hover,.slick-prev:focus,.slick-next:hover,.slick-next:focus{outline:none;background:transparent;color:transparent}.slick-prev:hover:before,.slick-prev:focus:before,.slick-next:hover:before,.slick-next:focus:before{opacity:1}.slick-prev.slick-disabled:before,.slick-next.slick-disabled:before{opacity:0.25}.slick-prev:before,.slick-next:before{font-family:"slick";font-size:20px;line-height:1;color:white;opacity:0.75;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.slick-prev{left:-25px}.slick-prev:before{content:"\2190"}.slick-next{right:-25px}.slick-next:before{content:"\2192"}.slick-slider{margin-bottom:30px}.slick-dots{position:absolute;bottom:-45px;list-style:none;display:block;text-align:center;padding:0;width:100%}.slick-dots li{position:relative;display:inline-block;height:20px;width:20px;margin:0 5px;padding:0;cursor:pointer}.slick-dots li button{border:0;background:transparent;display:block;height:20px;width:20px;outline:none;line-height:0;font-size:0;color:transparent;padding:5px;cursor:pointer}.slick-dots li button:hover,.slick-dots li button:focus{outline:none}.slick-dots li button:hover:before,.slick-dots li button:focus:before{opacity:1}.slick-dots li button:before{position:absolute;top:0;left:0;content:"\2022";width:20px;height:20px;font-family:"slick";font-size:6px;line-height:20px;text-align:center;color:black;opacity:0.25;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.slick-dots li.slick-active button:before{color:black;opacity:0.75}[dir="rtl"] .slick-next{right:auto;left:-25px}[dir="rtl"] .slick-next:before{content:"\2190"}[dir="rtl"] .slick-prev{right:-25px;left:auto}[dir="rtl"] .slick-prev:before{content:"\2192"}[dir="rtl"] .slick-slide{float:right}*,*:before,*:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}html,html a,select,input{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}input.placeholder,textarea.placeholder{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}input:-moz-placeholder,textarea:-moz-placeholder{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}input::-moz-placeholder,textarea::-moz-placeholder{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}html,button,input,select,textarea{font-family:Helvetica, Arial, sans-serif}html{min-height:100%;-webkit-text-size-adjust:100%}body{font-family:Helvetica, Arial, sans-serif;font-size:96%;line-height:1.4;min-height:100%;position:relative}body.noscroll{overflow:hidden}@media (min-width: 600px){body{font-size:98%}}@media (min-width: 769px){body{font-size:100%}}@media (min-width: 1024px){body{font-size:102%}}@media (min-width: 1200px){body{font-size:104%}}h1{letter-spacing:-.03em}@media (min-width: 769px){h1{letter-spacing:-.04em}}h2{letter-spacing:-.02em}@media (min-width: 769px){h2{letter-spacing:-.03em}}h3{letter-spacing:-.01em}@media (min-width: 769px){h3{letter-spacing:-.02em}}h4{letter-spacing:-.01em}a{color:#0e7ee0;text-decoration:none}img{width:100%}i{font-style:italic}strong{font-weight:600}p{margin:1em 0}article{overflow:hidden;*zoom:1}@media (min-width: 769px){.mobile_only{display:none !important}}.gradient_line{margin-left:auto;margin-right:auto;content:" ";width:100%;height:1px;clear:both;background:#777777;background:-moz-linear-gradient(left, transparent, #777, transparent);background:-webkit-linear-gradient(left, transparent, #777, transparent);background:linear-gradient(to right, transparent, #777, transparent)}.scrollblock{background-color:white;z-index:10;position:relative;padding-top:0}ul.articles,.gallery_list{overflow:hidden;*zoom:1;margin-bottom:3em}ul.articles li,.gallery_list li{position:relative}.print_only{display:none}.module_title,.module_title_small,.media_feature_title,.sitemap_title,.nav_title,.article_title,.sidebar_title,.rollover_title{letter-spacing:-.04em}.module_title{letter-spacing:-.04em}.rollover_title{font-size:2.34em;margin-bottom:0em}@media (min-width: 600px){.rollover_title{font-size:2.7em;margin-bottom:0em}}@media (min-width: 769px){.rollover_title{font-size:3.06em;margin-bottom:0em}}@media (min-width: 1024px){.rollover_title{font-size:3.24em;margin-bottom:0em}}@media (min-width: 1200px){.rollover_title{font-size:3.42em;margin-bottom:0em}}.content_title{letter-spacing:0;font-weight:600}.module_title{font-size:1.82em;margin-bottom:0.3em;text-align:center;font-weight:700}@media (min-width: 600px){.module_title{font-size:2.1em;margin-bottom:0.54em}}@media (min-width: 769px){.module_title{font-size:2.38em;margin-bottom:0.78em}}@media (min-width: 1024px){.module_title{font-size:2.52em;margin-bottom:0.87em}}@media (min-width: 1200px){.module_title{font-size:2.66em;margin-bottom:0.96em}}@media (min-width: 600px){.grid_gallery .module_title{text-align:left;width:80%}}.module_title_small{font-size:1.4em;font-weight:700;display:inline-block}@media (min-width: 600px){.module_title_small{font-size:1.8em}}.filter_bar .module_title_small{text-align:left;width:90%}@media (min-width: 600px){.filter_bar .module_title_small{text-align:center}}.category_title{font-size:.9em;font-weight:600;color:#71a3d5;text-transform:uppercase;margin-bottom:6px}.multimedia_teaser .category_title{font-size:.8em}.primary_media_feature .media_feature_title{font-size:1.82em;margin-bottom:0em;font-weight:700;color:white}@media (min-width: 600px){.primary_media_feature .media_feature_title{font-size:2.1em;margin-bottom:0em}}@media (min-width: 769px){.primary_media_feature .media_feature_title{font-size:2.38em;margin-bottom:0em}}@media (min-width: 1024px){.primary_media_feature .media_feature_title{font-size:2.52em;margin-bottom:0em}}@media (min-width: 1200px){.primary_media_feature .media_feature_title{font-size:2.66em;margin-bottom:0em}}.media_feature .media_feature_title{font-size:1.43em;margin-bottom:0em;font-weight:700;color:white}@media (min-width: 600px){.media_feature .media_feature_title{font-size:1.65em;margin-bottom:0em}}@media (min-width: 769px){.media_feature .media_feature_title{font-size:1.87em;margin-bottom:0em}}@media (min-width: 1024px){.media_feature .media_feature_title{font-size:1.98em;margin-bottom:0em}}@media (min-width: 1200px){.media_feature .media_feature_title{font-size:2.09em;margin-bottom:0em}}.multimedia_module_gallery .media_feature_title{font-size:1.43em;margin-bottom:0em;color:white;font-weight:700}@media (min-width: 600px){.multimedia_module_gallery .media_feature_title{font-size:1.65em;margin-bottom:0em}}@media (min-width: 769px){.multimedia_module_gallery .media_feature_title{font-size:1.87em;margin-bottom:0em}}@media (min-width: 1024px){.multimedia_module_gallery .media_feature_title{font-size:1.98em;margin-bottom:0em}}@media (min-width: 1200px){.multimedia_module_gallery .media_feature_title{font-size:2.09em;margin-bottom:0em}}.article_title{font-size:1.82em;margin-bottom:0em;font-weight:700}@media (min-width: 600px){.article_title{font-size:2.1em;margin-bottom:0em}}@media (min-width: 769px){.article_title{font-size:2.38em;margin-bottom:0em}}@media (min-width: 1024px){.article_title{font-size:2.52em;margin-bottom:0em}}@media (min-width: 1200px){.article_title{font-size:2.66em;margin-bottom:0em}}.sidebar_title{font-size:1.55em;margin-bottom:0.6em;font-weight:700;margin-left:-1px}.links_module a{font-size:.9em;cursor:pointer}.site_header_area{position:absolute;width:100%;z-index:2000;height:70px;transition:background-color .5s ease-in-out}@media (min-width: 600px){.site_header_area{height:90px}}@media (min-width: 769px){.site_header_area{height:92px}}@media (min-width: 1024px){.site_header_area{height:105px}}.touch .iosWasZoomed .site_header_area{position:absolute !important;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}@media screen and (orientation: portrait){.touch .site_header_area.fixed{position:fixed;background-color:#e4e9ef;-webkit-box-shadow:0 4px 4px -1px rgba(0,0,0,0.15);-moz-box-shadow:0 4px 4px -2px rgba(0,0,0,0.15);box-shadow:0 4px 4px -2px rgba(0,0,0,0.15);opacity:0}.touch .site_header_area.fixed.fixed_show{transition:opacity .5s ease-in-out;opacity:1}}.no-touch .site_header_area.fixed{position:fixed;background-color:#e4e9ef;-webkit-box-shadow:0 4px 4px -1px rgba(0,0,0,0.15);-moz-box-shadow:0 4px 4px -2px rgba(0,0,0,0.15);box-shadow:0 4px 4px -2px rgba(0,0,0,0.15);opacity:0}.no-touch .site_header_area.fixed.fixed_show{transition:opacity .5s ease-in-out;opacity:1}.site_header{clear:both;z-index:5;width:100%;height:100%;position:relative;margin:0 auto;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:-moz-none;-ms-user-select:none;user-select:none;padding:.8em 0 0 .5em}@media (min-width: 600px){.site_header{padding:1em 0 0 1.2em}}@media (min-width: 769px){.site_header{padding:1.1em 0 0 1.5em}}@media (min-width: 1024px){.site_header{padding:1.1em 0 0 2em}}.site_header .brand_area{position:relative;background:url("https://www.jpl.nasa.gov/assets/images/logo_nasa_trio_white@2x.png") no-repeat;background-size:100%;z-index:300;display:inline-block;width:250px;height:56px}@media (min-width: 600px){.site_header .brand_area{width:330px;height:64px}}@media (min-width: 769px){.site_header .brand_area{margin:0}}@media (min-width: 1024px){.site_header .brand_area{width:362px;height:68px}}.site_header .brand_area .brand1{height:100%;width:25%;float:left}.site_header .brand_area .brand2{float:left;width:75%;height:100%}.site_header .brand_area .jpl_logo{text-indent:-9999px;width:100%;float:left;height:100%}.site_header .brand_area .caltech_logo{display:none}.site_header .brand_area .nasa_logo{text-indent:-9999px}.site_header a#jpl_logo,.site_header a#caltech_logo,.site_header a.nasa_logo{display:block;height:100%}.light_background .site_header .brand_area,.fixed .site_header .brand_area{background:url("https://www.jpl.nasa.gov/assets/images/logo_nasa_trio_black@2x.png") no-repeat;background-size:100%}.light_background .site_header .search_field,.light_background .site_header form.submit_newsletter .email_field,form.submit_newsletter .light_background .site_header .email_field,.fixed .site_header .search_field,.fixed .site_header form.submit_newsletter .email_field,form.submit_newsletter .fixed .site_header .email_field{background-color:white !important;color:#222222 !important}.light_background .site_header .search_field.placeholder,.light_background .site_header form.submit_newsletter .placeholder.email_field,form.submit_newsletter .light_background .site_header .placeholder.email_field,.fixed .site_header .search_field.placeholder,.fixed .site_header form.submit_newsletter .placeholder.email_field,form.submit_newsletter .fixed .site_header .placeholder.email_field{color:#5a6470 !important;opacity:1 !important}.light_background .site_header .search_field:-moz-placeholder,.light_background .site_header form.submit_newsletter .email_field:-moz-placeholder,form.submit_newsletter .light_background .site_header .email_field:-moz-placeholder,.fixed .site_header .search_field:-moz-placeholder,.fixed .site_header form.submit_newsletter .email_field:-moz-placeholder,form.submit_newsletter .fixed .site_header .email_field:-moz-placeholder{color:#5a6470 !important;opacity:1 !important}.light_background .site_header .search_field::-moz-placeholder,.light_background .site_header form.submit_newsletter .email_field::-moz-placeholder,form.submit_newsletter .light_background .site_header .email_field::-moz-placeholder,.fixed .site_header .search_field::-moz-placeholder,.fixed .site_header form.submit_newsletter .email_field::-moz-placeholder,form.submit_newsletter .fixed .site_header .email_field::-moz-placeholder{color:#5a6470 !important;opacity:1 !important}.light_background .site_header .search_field::-webkit-input-placeholder,.light_background .site_header form.submit_newsletter .email_field::-webkit-input-placeholder,form.submit_newsletter .light_background .site_header .email_field::-webkit-input-placeholder,.fixed .site_header .search_field::-webkit-input-placeholder,.fixed .site_header form.submit_newsletter .email_field::-webkit-input-placeholder,form.submit_newsletter .fixed .site_header .email_field::-webkit-input-placeholder{color:#5a6470 !important;opacity:1 !important}.light_background .site_header .section_search .search_submit,.light_background .site_header form.nav_search .search_submit,.light_background .site_header .overlay_search .search_submit,.light_background .site_header form.submit_newsletter .search_submit,form.submit_newsletter .light_background .site_header .section_search .email_submit,form.submit_newsletter .light_background .site_header form.nav_search .email_submit,form.submit_newsletter .light_background .site_header .overlay_search .email_submit,.light_background .site_header form.submit_newsletter .email_submit,.fixed .site_header .section_search .search_submit,.fixed .site_header form.nav_search .search_submit,.fixed .site_header .overlay_search .search_submit,.fixed .site_header form.submit_newsletter .search_submit,form.submit_newsletter .fixed .site_header .section_search .email_submit,form.submit_newsletter .fixed .site_header form.nav_search .email_submit,form.submit_newsletter .fixed .site_header .overlay_search .email_submit,.fixed .site_header form.submit_newsletter .email_submit{background:url("https://www.jpl.nasa.gov/assets/images/search_icon_darkgrey@2x.png") no-repeat 6px 9px transparent;background-size:20px}.light_background .site_header a.menu_button .menu_icon,.fixed .site_header a.menu_button .menu_icon{text-indent:-9999px;background:url("https://www.jpl.nasa.gov/assets/images/menu_icon_black@2x.png") center center no-repeat;background-size:25px 20px}@media (min-width: 600px){.light_background .site_header a.menu_button .menu_icon,.fixed .site_header a.menu_button .menu_icon{background:url("https://www.jpl.nasa.gov/assets/images/menu_button_jpl@2x.png") center center no-repeat;background-size:90%}}@media (min-width: 1200px){.light_background .site_header a.menu_button .menu_icon,.fixed .site_header a.menu_button .menu_icon{background-size:100%}}.main_nav_overlay .site_header .brand_area{background:url("https://www.jpl.nasa.gov/assets/images/logo_nasa_trio_white@2x.png") no-repeat;background-size:100%}.nav_area{position:absolute;top:1.1em;right:.3em}@media (min-width: 600px){.nav_area{top:1.7em;right:1em}}@media (min-width: 769px){.nav_area{top:1.8em}}@media (min-width: 1024px){.nav_area{top:2em}}@media (min-width: 600px){.nav_area{right:1.3em}}a.menu_button{position:relative;display:inline-block;vertical-align:middle;height:40px;padding:0.6em 1em 0;text-decoration:none}@media (min-width: 600px){a.menu_button{padding:0}}a.menu_button .menu_icon{text-indent:-9999px;display:inline-block;vertical-align:middle;width:25px;height:20px;background:url("https://www.jpl.nasa.gov/assets/images/menu_icon@2x.png") center center no-repeat;background-size:25px 20px}@media (min-width: 600px){a.menu_button .menu_icon{background:url("https://www.jpl.nasa.gov/assets/images/menu_button_jpl@2x.png") center center no-repeat;background-size:90%;width:140px;height:43px}}@media (min-width: 1200px){a.menu_button .menu_icon{background-size:100%}}a.menu_button .menu_label{display:none}@media (min-width: 769px){a.menu_button .menu_label{top:.1em;margin-left:.3em;position:relative;text-transform:uppercase;color:white}}.header_mask{background-color:#e4e9ef;height:70px}@media (min-width: 600px){.header_mask{height:90px}}@media (min-width: 769px){.header_mask{height:92px}}@media (min-width: 1024px){.header_mask{height:105px}}#home.no_background .header_mask,#home.dark_background .header_mask{display:none}#home.light_background .header_mask{position:absolute;top:0;left:0;display:block;z-index:1;width:100%;opacity:.5}.main_nav_overlay{display:none;position:absolute;top:0;left:0;min-height:100%;width:100%;z-index:210000;position:fixed;-ms-overflow-style:none;height:100%;overflow-y:scroll;-webkit-overflow-scrolling:touch;background-color:#395069;background-color:rgba(57,80,105,0.99)}.main_nav_overlay::-webkit-scrollbar{display:none}.main_nav_overlay .site_header{position:relative;margin-bottom:0;background-color:#395069;background-color:rgba(57,80,105,0.99);height:70px}@media (min-width: 600px){.main_nav_overlay .site_header{height:90px}}@media (min-width: 769px){.main_nav_overlay .site_header{height:92px}}@media (min-width: 1024px){.main_nav_overlay .site_header{height:105px}}.main_nav_overlay .navigation_area{margin-bottom:4em;padding-top:0;padding-bottom:2em;text-align:center}@media (min-width: 769px){.main_nav_overlay .navigation_area{padding-bottom:3em}}.main_nav_overlay #modal_close{display:block;text-indent:-9999px;width:57px;height:44px;background:url("https://www.jpl.nasa.gov/assets/images/close_x_icon_thick@2x.png") center no-repeat;background-size:31px 30px;cursor:pointer;position:absolute;top:1.1em;right:.3em}@media (min-width: 600px){.main_nav_overlay #modal_close{top:1.7em;right:1em}}@media (min-width: 769px){.main_nav_overlay #modal_close{top:1.8em}}@media (min-width: 1024px){.main_nav_overlay #modal_close{top:2em}}.main_nav_overlay .nav_area{display:none}.main_nav_overlay .arrow_box .arrow_down{display:none}.main_nav_overlay .nav_item{text-align:center;margin:1.5em auto 2em;text-transform:capitalize;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:-moz-none;-ms-user-select:none;user-select:none}@media (min-width: 769px){.main_nav_overlay .nav_item{margin:.6em auto 2em}}.main_nav_overlay .nav_item:first-child{margin-top:0}.main_nav_overlay .nav_item .nav_title{padding:.28em 0;font-weight:600;color:white}.main_nav_overlay .nav_item .nav_title a{color:white}@media (min-width: 769px){.main_nav_overlay .nav_item .nav_title{padding:.8em 0 .4em}}.main_nav_overlay .nav_item .subnav li{font-weight:600;white-space:nowrap}.main_nav_overlay .nav_item a{color:#a5a6a7;text-decoration:none}.no-touch .main_nav_overlay .nav_item a:hover{color:white}.main_nav_overlay .nav_item .social_icons{padding-top:.5em}.main_nav_overlay .overlay_search{width:250px}.main_nav_overlay .overlay_search .search_field,.main_nav_overlay .overlay_search form.submit_newsletter .email_field,form.submit_newsletter .main_nav_overlay .overlay_search .email_field{width:100%;font-size:16px}@media (min-width: 600px){.main_nav_overlay .overlay_search{width:320px}}.main_nav_overlay .gradient_line{margin-left:auto;margin-right:auto;content:" ";width:100%;height:1px;clear:both;background:#61b6fd;background:-moz-linear-gradient(left, rgba(97,182,253,0), #61b6fd, rgba(97,182,253,0));background:-webkit-linear-gradient(left, rgba(97,182,253,0), #61b6fd, rgba(97,182,253,0));background:linear-gradient(to right, rgba(97,182,253,0), #61b6fd, rgba(97,182,253,0));width:50%}@media (min-width: 769px){.main_nav_overlay .gradient_line{width:25%}}@media (max-width: 768px){.main_nav_overlay .navigation_area{padding:0 2% 2em 2.8%}.main_nav_overlay .nav_item{text-align:left;margin:1em 0 .5em}.main_nav_overlay .nav_item.centered{text-align:center}.main_nav_overlay .nav_item.centered .nav_title{text-align:center;width:100%}.main_nav_overlay .nav_item .social_icons{margin-bottom:1.8em}.main_nav_overlay .gradient_line{width:100%}.main_nav_overlay .nav_title{margin-bottom:0;display:block;line-height:1.4em;font-weight:600;text-align:left;width:80%;font-size:1.2em;letter-spacing:-.01em;cursor:pointer;-webkit-tap-highlight-color:rgba(255,255,255,0);-webkit-tap-highlight-color:transparent}.main_nav_overlay .subnav{display:none;margin-bottom:.8em}.main_nav_overlay .subnav li{padding:.28em 0;display:block !important;font-size:1em}.main_nav_overlay .subnav li a{font-size:1em}.main_nav_overlay .overlay_search.top_search{margin:.7em 0 .5em;display:none}.main_nav_overlay .arrow_box{padding:20px 20px;width:52px;float:right;cursor:pointer;margin:-0.4em -.8em 0 0;display:block;text-align:center;-webkit-tap-highlight-color:rgba(255,255,255,0);-webkit-tap-highlight-color:transparent}.main_nav_overlay .arrow_box.reverse{transform:rotate(180deg);-ms-filter:"progid:DXImageTransform.Microsoft.Matrix(M11=-1, M12=1.2246063538223773e-16, M21=-1.2246063538223773e-16, M22=-1, SizingMethod='auto expand')"}.main_nav_overlay .arrow_box .arrow_down{display:block;width:0;height:0;border-left:6px solid rgba(255,255,255,0);border-right:6px solid rgba(255,255,255,0);border-top:8px solid #fff;float:right}}@media (min-width: 769px){.main_nav_overlay .nav_item{cursor:default}.main_nav_overlay .nav_title{font-size:2.05em;letter-spacing:-.02em}.main_nav_overlay .subnav{display:block !important}.main_nav_overlay .subnav li{display:inline-block !important;padding:.28em 1em}.main_nav_overlay .subnav li a{font-size:1.15em}}@media (min-width: 769px) and (min-width: 1024px){.main_nav_overlay .subnav li a{font-size:1.25em}}@media (min-width: 769px){.main_nav_overlay .overlay_search.top_search{margin:2em 0 1em}}.gradient_container_top,.gradient_container_bottom{height:200px;width:100%;position:absolute;z-index:1}.primary_media_feature.homepage_carousel .gradient_container_top,.primary_media_feature.homepage_carousel .gradient_container_bottom{z-index:7}.gradient_container_top{background:url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMC4wIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIgLz48L3N2Zz4g');background:-webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, rgba(0,0,0,0.6)), color-stop(100%, transparent));background:-moz-linear-gradient(rgba(0,0,0,0.6), transparent);background:-webkit-linear-gradient(rgba(0,0,0,0.6), transparent);background:linear-gradient(rgba(0,0,0,0.6), transparent);top:0}.light_background .gradient_container_top{display:none}.no_background .gradient_container_top{background:none}.gradient_container_bottom{background:url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjAiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMC42Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIgLz48L3N2Zz4g');background:-webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, transparent), color-stop(100%, rgba(0,0,0,0.6)));background:-moz-linear-gradient(transparent, rgba(0,0,0,0.6));background:-webkit-linear-gradient(transparent, rgba(0,0,0,0.6));background:linear-gradient(transparent, rgba(0,0,0,0.6));bottom:0}.gradient_bottom_grid,.gradient_bottom_teasers,.grid_gallery.grid_view .bottom_gradient{background-image:url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjAiLz48c3RvcCBvZmZzZXQ9IjMwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');background-size:100%;background-image:-webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, transparent), color-stop(30%, #000), color-stop(100%, #000));background-image:-moz-linear-gradient(top, transparent 0%, #000 30%, #000 100%);background-image:-webkit-linear-gradient(top, transparent 0%, #000 30%, #000 100%);background-image:linear-gradient(to bottom, transparent 0%, #000 30%, #000 100%)}.ie9 .gradient_bottom_grid,.ie9 .gradient_bottom_teasers,.ie9 .grid_gallery.grid_view .bottom_gradient,.grid_gallery.grid_view .ie9 .bottom_gradient{filter:none;background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjQ4JSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+)}.gradient_bottom_teasers{width:100%;height:38%;position:absolute;bottom:0}.primary_media_feature{margin-bottom:0}@media (min-width: 769px){.primary_media_feature{padding:0}}.primary_media_feature #masterslider .ms-nav-next,.primary_media_feature #masterslider .ms-nav-prev{display:none}@media (min-width: 769px){.primary_media_feature #masterslider .ms-nav-next,.primary_media_feature #masterslider .ms-nav-prev{display:block}}.primary_media_feature #masterslider .ms-nav-prev,.primary_media_feature #masterslider .ms-nav-next{width:40px;height:80px;margin-top:-60px}@media (min-width: 769px){.primary_media_feature #masterslider .ms-nav-prev,.primary_media_feature #masterslider .ms-nav-next{margin-top:-80px}}.primary_media_feature #masterslider .ms-nav-prev{background:url("https://www.jpl.nasa.gov/assets/images/arrow_left_darktheme.png");background-size:40px 95px;background-color:rgba(32,32,32,0.9);background-position:0;left:0;border-top-right-radius:6px;border-bottom-right-radius:6px}.primary_media_feature #masterslider .ms-nav-next{background:url("https://www.jpl.nasa.gov/assets/images/arrow_right_darktheme.png");background-size:40px 95px;background-color:rgba(32,32,32,0.9);background-position:0;right:0;border-top-left-radius:6px;border-bottom-left-radius:6px}.primary_media_feature #masterslider .ms-bullets{bottom:60px;z-index:10}@media (min-width: 600px){.primary_media_feature #masterslider .ms-bullets{bottom:90px}}@media (min-width: 769px){.primary_media_feature #masterslider .ms-bullets{bottom:110px}}.primary_media_feature #masterslider .ms-bullet{background-color:white;background-image:none;border-radius:50% 50% 50% 50%;height:8px;width:8px;opacity:0.5;margin:0 10px}.primary_media_feature #masterslider .ms-bullet:hover{opacity:1.0}.primary_media_feature #masterslider .ms-bullet-selected{opacity:1.0}.primary_media_feature.single{position:relative;margin-bottom:0;overflow:hidden}.primary_media_feature.single .carousel_item{height:300px;background-size:cover;position:relative;z-index:3;background-position:center}@media (min-width: 769px){.primary_media_feature.single .carousel_item{height:700px}}.primary_media_feature.single.video .play{display:none;position:absolute;top:47%;left:47%;top:calc(50%- 30px);left:calc(50%- 30px);top:-webkit-calc(50% - 30px);left:-webkit-calc(50% - 30px);width:60px;height:60px;padding-top:0;cursor:pointer;background:url("https://www.jpl.nasa.gov/assets/images/play-button.png") 0 0 no-repeat;z-index:10}.primary_media_feature.single.video .player{width:100%;height:100%;position:absolute;top:0;left:0;z-index:2}.primary_media_feature.homepage_carousel{margin-bottom:0}.primary_media_feature.homepage_carousel .main_feature{height:482px}@media only screen and (orientation: landscape){.primary_media_feature.homepage_carousel .main_feature{height:260px}}@media (min-width: 600px){.primary_media_feature.homepage_carousel .main_feature{height:420px}}@media only screen and (min-width: 600px) and (orientation: landscape){.primary_media_feature.homepage_carousel .main_feature{height:400px}}@media (min-width: 769px){.primary_media_feature.homepage_carousel .main_feature{height:400px}}@media only screen and (min-width: 769px) and (orientation: landscape){.primary_media_feature.homepage_carousel .main_feature{height:400px}}@media (min-width: 1024px){.primary_media_feature.homepage_carousel .main_feature{height:440px}}@media (min-width: 1200px){.primary_media_feature.homepage_carousel .main_feature{height:550px}}@media (min-width: 1700px){.primary_media_feature.homepage_carousel .main_feature{height:660px}}.primary_media_feature.homepage_carousel #masterslider{width:100%;height:100%}@media (min-width: 600px){.primary_media_feature.homepage_carousel{margin-bottom:-20px}}@media (min-width: 769px){.primary_media_feature.homepage_carousel{margin-bottom:-40px}}@media (min-width: 769px){.primary_media_feature.homepage_carousel .gradient_container_bottom{bottom:40px}}#home #site_nav_down{cursor:pointer;position:absolute;top:-32px;display:block;width:60px;height:40px;left:50%;margin-left:-30px;z-index:21}@media (min-width: 769px){#home #site_nav_down{top:-45px}}#home .site_nav_down_prompt{display:none}@media (min-width: 769px){#home .site_nav_down_prompt{display:block;position:absolute;top:.4em;z-index:20;width:100%;left:0;background-color:transparent !important;color:black;font-size:1.5em;text-align:center;font-weight:400;padding:18px 0;cursor:pointer;opacity:1;transition:opacity .5s ease-in}#home .site_nav_down_prompt span{color:#0e7ee0}#home .site_nav_down_prompt.hide{opacity:0}}#home .pointer_mask{height:25px;z-index:18;position:relative;top:-24px;width:100%}@media (min-width: 769px){#home .pointer_mask{height:40px;top:-38px}}#home .pointer_mask .arrow_masks{border-right:20px solid white;border-top:20px solid white;border-left:20px solid white;border-bottom:0px;display:inline-block;width:calc(50% - 20px);width:-webkit-calc(50% - 20px);height:100%;background-color:white}#home .pointer_mask .arrow_mask{display:inline-block;width:20px;height:100%;border-right:20px solid white;border-top:20px solid transparent;border-left:20px solid white;border-bottom:0px solid white}@media (min-width: 769px){#home .pointer_mask .arrow_mask{border-bottom:20px solid white}}.light_background .site_header form.nav_search,.section_search,.site_header form.nav_search,.overlay_search,form.submit_newsletter{color:white;display:inline-block;position:relative}.section_search .search_field,.site_header form.nav_search .search_field,.overlay_search .search_field,form.submit_newsletter .search_field,form.submit_newsletter .email_field{color:white;background-color:rgba(255,255,255,0.3)}.section_search .search_field.placeholder,.site_header form.nav_search .search_field.placeholder,.overlay_search .search_field.placeholder,form.submit_newsletter .search_field.placeholder,form.submit_newsletter .placeholder.email_field{color:white;-webkit-font-smoothing:antialiased}.section_search .search_field:-moz-placeholder,.site_header form.nav_search .search_field:-moz-placeholder,.overlay_search .search_field:-moz-placeholder,form.submit_newsletter .search_field:-moz-placeholder,form.submit_newsletter .email_field:-moz-placeholder{color:white;-webkit-font-smoothing:antialiased}.section_search .search_field::-moz-placeholder,.site_header form.nav_search .search_field::-moz-placeholder,.overlay_search .search_field::-moz-placeholder,form.submit_newsletter .search_field::-moz-placeholder,form.submit_newsletter .email_field::-moz-placeholder{color:white;-webkit-font-smoothing:antialiased}.section_search .search_field::-webkit-input-placeholder,.site_header form.nav_search .search_field::-webkit-input-placeholder,.overlay_search .search_field::-webkit-input-placeholder,form.submit_newsletter .search_field::-webkit-input-placeholder,form.submit_newsletter .email_field::-webkit-input-placeholder{color:white;-webkit-font-smoothing:antialiased}.section_search .search_field,.site_header form.nav_search .search_field,.overlay_search .search_field,form.submit_newsletter .search_field,form.submit_newsletter .email_field{font-size:16px;border:none;border-radius:4px;height:40px;padding-left:1.1em;padding-right:40px;padding-top:.2em}.section_search .search_field.placeholder,.site_header form.nav_search .search_field.placeholder,.overlay_search .search_field.placeholder,form.submit_newsletter .search_field.placeholder,form.submit_newsletter .placeholder.email_field{opacity:1 !important;font-family:Helvetica, Arial, sans-serif}.section_search .search_field:-moz-placeholder,.site_header form.nav_search .search_field:-moz-placeholder,.overlay_search .search_field:-moz-placeholder,form.submit_newsletter .search_field:-moz-placeholder,form.submit_newsletter .email_field:-moz-placeholder{opacity:1 !important;font-family:Helvetica, Arial, sans-serif}.section_search .search_field::-moz-placeholder,.site_header form.nav_search .search_field::-moz-placeholder,.overlay_search .search_field::-moz-placeholder,form.submit_newsletter .search_field::-moz-placeholder,form.submit_newsletter .email_field::-moz-placeholder{opacity:1 !important;font-family:Helvetica, Arial, sans-serif}.section_search .search_field::-webkit-input-placeholder,.site_header form.nav_search .search_field::-webkit-input-placeholder,.overlay_search .search_field::-webkit-input-placeholder,form.submit_newsletter .search_field::-webkit-input-placeholder,form.submit_newsletter .email_field::-webkit-input-placeholder{opacity:1 !important;font-family:Helvetica, Arial, sans-serif}.section_search .search_submit,.site_header form.nav_search .search_submit,.overlay_search .search_submit,form.submit_newsletter .search_submit,form.submit_newsletter .email_submit{background:url("https://www.jpl.nasa.gov/assets/images/search_icon@2x.png") no-repeat 6px 9px transparent;background-size:20px;position:absolute;right:0;top:0;cursor:pointer;border:none;width:40px;height:40px}.light_background .site_header form.nav_search .search_field,.section_search .search_field,.light_background .site_header form.nav_search form.submit_newsletter .email_field,form.submit_newsletter .light_background .site_header form.nav_search .email_field,.section_search form.submit_newsletter .email_field,form.submit_newsletter .section_search .email_field{background-color:white;color:#222222}.light_background .site_header form.nav_search .search_field.placeholder,.section_search .search_field.placeholder,.light_background .site_header form.nav_search form.submit_newsletter .placeholder.email_field,form.submit_newsletter .light_background .site_header form.nav_search .placeholder.email_field,.section_search form.submit_newsletter .placeholder.email_field,form.submit_newsletter .section_search .placeholder.email_field{color:#5a6470;opacity:1 !important}.light_background .site_header form.nav_search .search_field:-moz-placeholder,.section_search .search_field:-moz-placeholder,.light_background .site_header form.nav_search form.submit_newsletter .email_field:-moz-placeholder,form.submit_newsletter .light_background .site_header form.nav_search .email_field:-moz-placeholder,.section_search form.submit_newsletter .email_field:-moz-placeholder,form.submit_newsletter .section_search .email_field:-moz-placeholder{color:#5a6470;opacity:1 !important}.light_background .site_header form.nav_search .search_field::-moz-placeholder,.section_search .search_field::-moz-placeholder,.light_background .site_header form.nav_search form.submit_newsletter .email_field::-moz-placeholder,form.submit_newsletter .light_background .site_header form.nav_search .email_field::-moz-placeholder,.section_search form.submit_newsletter .email_field::-moz-placeholder,form.submit_newsletter .section_search .email_field::-moz-placeholder{color:#5a6470;opacity:1 !important}.light_background .site_header form.nav_search .search_field::-webkit-input-placeholder,.section_search .search_field::-webkit-input-placeholder,.light_background .site_header form.nav_search form.submit_newsletter .email_field::-webkit-input-placeholder,form.submit_newsletter .light_background .site_header form.nav_search .email_field::-webkit-input-placeholder,.section_search form.submit_newsletter .email_field::-webkit-input-placeholder,form.submit_newsletter .section_search .email_field::-webkit-input-placeholder{color:#5a6470;opacity:1 !important}#home.light_background .site_header form.nav_search .search_field,#home.light_background .section_search .search_field,#home.light_background .site_header form.nav_search form.submit_newsletter .email_field,form.submit_newsletter #home.light_background .site_header form.nav_search .email_field,#home.light_background .section_search form.submit_newsletter .email_field,form.submit_newsletter #home.light_background .section_search .email_field{background-color:rgba(255,255,255,0.8)}.light_background .site_header form.nav_search .search_submit,.section_search .search_submit,.light_background .site_header form.nav_search form.submit_newsletter .email_submit,form.submit_newsletter .light_background .site_header form.nav_search .email_submit,.section_search form.submit_newsletter .email_submit,form.submit_newsletter .section_search .email_submit{background:url("https://www.jpl.nasa.gov/assets/images/search_icon_darkgrey@2x.png") no-repeat 9px 12px transparent;background-size:20px;margin-top:-2px}.filter_bar .light_background .site_header form.nav_search .search_submit,.light_background .site_header .filter_bar form.nav_search .search_submit,.filter_bar .section_search .search_submit,.filter_bar .light_background .site_header form.nav_search form.submit_newsletter .email_submit,form.submit_newsletter .filter_bar .light_background .site_header form.nav_search .email_submit,.light_background .site_header .filter_bar form.nav_search form.submit_newsletter .email_submit,form.submit_newsletter .light_background .site_header .filter_bar form.nav_search .email_submit,.filter_bar .section_search form.submit_newsletter .email_submit,form.submit_newsletter .filter_bar .section_search .email_submit{background:url("https://www.jpl.nasa.gov/assets/images/search_icon_dark@2x.png") no-repeat 9px 12px transparent;background-size:20px}.site_header form.nav_search{display:none}@media (min-width: 769px){.site_header form.nav_search{display:inline-block}}.light_background .site_header form.nav_search{display:none}@media (min-width: 769px){.light_background .site_header form.nav_search{display:inline-block}}form.submit_newsletter{width:85%;max-width:300px;display:inline-block}form.submit_newsletter .email_field{width:100%}form.submit_newsletter .email_submit{background:url("https://www.jpl.nasa.gov/assets/stylesheets/../images/envelope_white@2x.png") no-repeat 4px 10px transparent;background-size:25px;opacity:.8}form.submit_newsletter .email_submit:hover{opacity:1}#secondary_column form.submit_newsletter{width:100%;max-width:none}#secondary_column form.submit_newsletter .search_field,#secondary_column form.submit_newsletter .email_field{background:#4b6a8d;border-radius:4px}form.list_form ul{padding:1em 0}form.list_form ul label{display:block;margin-bottom:5px}form.list_form ul input:not([type="checkbox"]):not([type="radio"]),form.list_form ul textarea{width:100%;border:none;border:1px solid #777777;border-radius:4px;padding:10px 12px;font-size:1em}form.list_form ul input[type="checkbox"]{width:auto}form.list_form li{margin-bottom:10px}form.list_form li.inline_item&gt;input,form.list_form li.inline_item&gt;label{display:inline-block}form.list_form li.inline_item.indented{margin-left:1.5em}@media (min-width: 600px){.grid_gallery .gallery_header{line-height:50px}}.grid_gallery .module_title_small{display:none}@media (min-width: 600px){.grid_gallery .module_title_small{display:block}}.grid_gallery .module_title{display:none}@media (min-width: 769px){.grid_gallery .module_title{display:block}}.grid_gallery ul.articles{margin-bottom:2em}.grid_gallery .image_and_description_container{position:relative}.grid_gallery .more_links{padding-top:2em;float:right;font-weight:600}.grid_gallery .more_links a{text-decoration:none;display:inline-block;color:#0e7ee0}.grid_gallery .more_links a:hover{text-decoration:underline}.grid_gallery .more_links a+a{margin-left:2em}.grid_gallery.grid_view .content_title{letter-spacing:-.03em;display:none}.grid_gallery.grid_view .image_and_description_container{min-height:0}.grid_gallery.grid_view .article_teaser_body{display:none}.grid_gallery.grid_view .img{position:relative}.grid_gallery.grid_view span.play_button{position:absolute;background:url("https://www.jpl.nasa.gov/assets/images/play-button.png") center center no-repeat;background-size:50px 50px;height:50px;width:50px;display:inline;left:42%;left:calc(50% - 25px);top:42%;top:calc(50% - 25px)}.grid_gallery.grid_view .bottom_gradient{color:white;display:block;position:relative;margin-top:-48px;height:126px;text-align:center}.grid_gallery.grid_view .bottom_gradient:before{content:'';display:inline-block;height:100%;vertical-align:middle;margin-right:-.25em}.grid_gallery.grid_view .bottom_gradient div{display:inline-block;vertical-align:middle;width:90%;text-align:left;margin-top:2.5em}#missions .grid_gallery.grid_view .bottom_gradient div{margin-top:1em;text-align:center}#missions .grid_gallery.grid_view .bottom_gradient div h3{font-size:1.4em;margin-bottom:.1em}.grid_gallery.grid_view .bottom_gradient h3{font-weight:600}.grid_gallery.grid_view li.slide{margin-bottom:0.84034%;width:49.57983%;float:left}.grid_gallery.grid_view li.slide:nth-child(2n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}.grid_gallery.grid_view li.slide:nth-child(2n+2){margin-left:50.42017%;margin-right:-100%;clear:none}@media (min-width: 600px){.grid_gallery.grid_view li.slide{width:24.36975%;float:left}.grid_gallery.grid_view li.slide:nth-child(4n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}.grid_gallery.grid_view li.slide:nth-child(4n+2){margin-left:25.21008%;margin-right:-100%;clear:none}.grid_gallery.grid_view li.slide:nth-child(4n+3){margin-left:50.42017%;margin-right:-100%;clear:none}.grid_gallery.grid_view li.slide:nth-child(4n+4){margin-left:75.63025%;margin-right:-100%;clear:none}}@media (min-width: 769px){.grid_gallery.grid_view li.slide{width:19.32773%;float:left}.grid_gallery.grid_view li.slide:nth-child(5n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}.grid_gallery.grid_view li.slide:nth-child(5n+2){margin-left:20.16807%;margin-right:-100%;clear:none}.grid_gallery.grid_view li.slide:nth-child(5n+3){margin-left:40.33613%;margin-right:-100%;clear:none}.grid_gallery.grid_view li.slide:nth-child(5n+4){margin-left:60.5042%;margin-right:-100%;clear:none}.grid_gallery.grid_view li.slide:nth-child(5n+5){margin-left:80.67227%;margin-right:-100%;clear:none}}@media (min-width: 1200px){.grid_gallery.grid_view li.slide{width:15.96639%;float:left}.grid_gallery.grid_view li.slide:nth-child(6n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}.grid_gallery.grid_view li.slide:nth-child(6n+2){margin-left:16.80672%;margin-right:-100%;clear:none}.grid_gallery.grid_view li.slide:nth-child(6n+3){margin-left:33.61345%;margin-right:-100%;clear:none}.grid_gallery.grid_view li.slide:nth-child(6n+4){margin-left:50.42017%;margin-right:-100%;clear:none}.grid_gallery.grid_view li.slide:nth-child(6n+5){margin-left:67.22689%;margin-right:-100%;clear:none}.grid_gallery.grid_view li.slide:nth-child(6n+6){margin-left:84.03361%;margin-right:-100%;clear:none}}.grid_gallery.grid_view li.slide a{text-decoration:none}#images .grid_gallery.grid_view li.slide{text-decoration:none;width:49.57983%;float:left;margin-bottom:0.84034%}#images .grid_gallery.grid_view li.slide:nth-child(2n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}#images .grid_gallery.grid_view li.slide:nth-child(2n+2){margin-left:50.42017%;margin-right:-100%;clear:none}@media (min-width: 480px){#images .grid_gallery.grid_view li.slide{width:32.77311%;float:left}#images .grid_gallery.grid_view li.slide:nth-child(3n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}#images .grid_gallery.grid_view li.slide:nth-child(3n+2){margin-left:33.61345%;margin-right:-100%;clear:none}#images .grid_gallery.grid_view li.slide:nth-child(3n+3){margin-left:67.22689%;margin-right:-100%;clear:none}}@media (min-width: 769px){#images .grid_gallery.grid_view li.slide{width:24.36975%;float:left}#images .grid_gallery.grid_view li.slide:nth-child(4n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}#images .grid_gallery.grid_view li.slide:nth-child(4n+2){margin-left:25.21008%;margin-right:-100%;clear:none}#images .grid_gallery.grid_view li.slide:nth-child(4n+3){margin-left:50.42017%;margin-right:-100%;clear:none}#images .grid_gallery.grid_view li.slide:nth-child(4n+4){margin-left:75.63025%;margin-right:-100%;clear:none}}@media (min-width: 1200px){#images .grid_gallery.grid_view li.slide{width:24.36975%;float:left}#images .grid_gallery.grid_view li.slide:nth-child(4n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}#images .grid_gallery.grid_view li.slide:nth-child(4n+2){margin-left:25.21008%;margin-right:-100%;clear:none}#images .grid_gallery.grid_view li.slide:nth-child(4n+3){margin-left:50.42017%;margin-right:-100%;clear:none}#images .grid_gallery.grid_view li.slide:nth-child(4n+4){margin-left:75.63025%;margin-right:-100%;clear:none}}#missions .grid_gallery.grid_view li.slide{text-decoration:none;width:49.57983%;float:left;margin-bottom:0.84034%}#missions .grid_gallery.grid_view li.slide:nth-child(2n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}#missions .grid_gallery.grid_view li.slide:nth-child(2n+2){margin-left:50.42017%;margin-right:-100%;clear:none}@media (min-width: 480px){#missions .grid_gallery.grid_view li.slide{width:32.77311%;float:left}#missions .grid_gallery.grid_view li.slide:nth-child(3n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}#missions .grid_gallery.grid_view li.slide:nth-child(3n+2){margin-left:33.61345%;margin-right:-100%;clear:none}#missions .grid_gallery.grid_view li.slide:nth-child(3n+3){margin-left:67.22689%;margin-right:-100%;clear:none}}@media (min-width: 769px){#missions .grid_gallery.grid_view li.slide{width:24.36975%;float:left}#missions .grid_gallery.grid_view li.slide:nth-child(4n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}#missions .grid_gallery.grid_view li.slide:nth-child(4n+2){margin-left:25.21008%;margin-right:-100%;clear:none}#missions .grid_gallery.grid_view li.slide:nth-child(4n+3){margin-left:50.42017%;margin-right:-100%;clear:none}#missions .grid_gallery.grid_view li.slide:nth-child(4n+4){margin-left:75.63025%;margin-right:-100%;clear:none}}@media (min-width: 1200px){#missions .grid_gallery.grid_view li.slide{width:24.36975%;float:left}#missions .grid_gallery.grid_view li.slide:nth-child(4n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}#missions .grid_gallery.grid_view li.slide:nth-child(4n+2){margin-left:25.21008%;margin-right:-100%;clear:none}#missions .grid_gallery.grid_view li.slide:nth-child(4n+3){margin-left:50.42017%;margin-right:-100%;clear:none}#missions .grid_gallery.grid_view li.slide:nth-child(4n+4){margin-left:75.63025%;margin-right:-100%;clear:none}}#news .grid_gallery.grid_view li.slide{width:49.57983%;float:left;margin-bottom:0.84034%}#news .grid_gallery.grid_view li.slide:nth-child(2n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}#news .grid_gallery.grid_view li.slide:nth-child(2n+2){margin-left:50.42017%;margin-right:-100%;clear:none}@media (min-width: 480px){#news .grid_gallery.grid_view li.slide{width:32.77311%;float:left}#news .grid_gallery.grid_view li.slide:nth-child(3n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}#news .grid_gallery.grid_view li.slide:nth-child(3n+2){margin-left:33.61345%;margin-right:-100%;clear:none}#news .grid_gallery.grid_view li.slide:nth-child(3n+3){margin-left:67.22689%;margin-right:-100%;clear:none}}@media (min-width: 1200px){#news .grid_gallery.grid_view li.slide{width:32.77311%;float:left}#news .grid_gallery.grid_view li.slide:nth-child(3n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}#news .grid_gallery.grid_view li.slide:nth-child(3n+2){margin-left:33.61345%;margin-right:-100%;clear:none}#news .grid_gallery.grid_view li.slide:nth-child(3n+3){margin-left:67.22689%;margin-right:-100%;clear:none}}.grid_gallery.list_view .img{float:right;margin-left:4%;margin-bottom:.5em;width:32%}@media (min-width: 600px){.grid_gallery.list_view .img{margin-left:0;margin-bottom:0;width:23.07692%;float:left;margin-right:2.5641%}}@media (min-width: 769px){.grid_gallery.list_view .img{width:23.72881%;float:left;margin-right:1.69492%}}@media (min-width: 1024px){.grid_gallery.list_view .img{width:23.72881%;float:left;margin-right:1.69492%}}.grid_gallery.list_view .list_text_content{width:auto}@media (min-width: 600px){.grid_gallery.list_view .list_text_content{width:74.35897%;float:right;margin-right:0}}@media (min-width: 769px){.grid_gallery.list_view .list_text_content{width:74.57627%;float:right;margin-right:0}}@media (min-width: 1024px){.grid_gallery.list_view .list_text_content{width:66.10169%;float:left;margin-right:1.69492%}}.grid_gallery.list_view .content_title{display:block;font-size:1.17em;margin-bottom:0.1em;margin-bottom:.2em;font-weight:600;text-decoration:none;color:black;cursor:pointer;letter-spacing:-.035em}@media (min-width: 600px){.grid_gallery.list_view .content_title{font-size:1.35em;margin-bottom:0.18em}}@media (min-width: 769px){.grid_gallery.list_view .content_title{font-size:1.53em;margin-bottom:0.26em}}@media (min-width: 1024px){.grid_gallery.list_view .content_title{font-size:1.62em;margin-bottom:0.29em}}@media (min-width: 1200px){.grid_gallery.list_view .content_title{font-size:1.71em;margin-bottom:0.32em}}@media (min-width: 1024px){.grid_gallery.list_view .article_teaser_body{font-size:1.1em}}.grid_gallery.list_view li.slide:first-child{border-top:1px solid #cccccc}.grid_gallery.list_view li.slide{border-bottom:1px solid #cccccc;overflow:hidden;*zoom:1;padding:1.2em 0}.grid_gallery.list_view li.slide a{text-decoration:none;color:#222222;cursor:pointer}.grid_gallery.list_view .bottom_gradient{display:none}.view_selectors{position:relative;margin:0 auto;text-align:center;width:106px;text-align:right}@media (min-width: 769px){.view_selectors{position:absolute;right:0;top:0;height:100%}}.view_selectors .nav_item{display:inline-block;position:relative;background-repeat:no-repeat;width:50px;height:50px;cursor:pointer;background-image:url("https://www.jpl.nasa.gov/assets/images/grid_list_icon.png");background-color:#e4e9ef;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:-moz-none;-ms-user-select:none;user-select:none}.view_selectors .nav_item.list_icon{background-position:-4px -51px;border-radius:50%}.no-touch .view_selectors .nav_item.list_icon:hover{background-position:-4px -0px}.list_view .view_selectors .nav_item.list_icon{background-position:-4px -0px}.view_selectors .nav_item.grid_icon{background-position:-59px -51px;border-radius:50%}.no-touch .view_selectors .nav_item.grid_icon:hover{background-position:-59px -0px}.grid_view .view_selectors .nav_item.grid_icon{background-position:-59px -0px}.module header{margin-bottom:1em;position:relative}.module footer{text-align:center}.multimedia_teaser{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:-moz-none;-ms-user-select:none;user-select:none;background-color:#e4e9ef}.events_teaser section{overflow:hidden}.events_teaser .slide_nav{display:block}@media (min-width: 769px){.events_teaser .slide_nav{display:none}}.events_teaser .event_teaser{min-height:99px;margin-bottom:4em}.events_teaser .util-carousel{margin-bottom:3em}.events_teaser .date{font-weight:200;margin-bottom:.1em;font-size:.9em}.events_teaser .title{font-weight:600;font-size:.9em}.multi_teaser{padding-top:4em;padding-bottom:3em;margin-bottom:0;background-color:#e4e9ef}.multi_teaser ul li{width:100%;float:left;margin-left:0;margin-right:0;margin-bottom:5.26316%}.multi_teaser ul li:last-child{margin-bottom:0}@media (min-width: 769px){.multi_teaser ul li{margin-bottom:0}}@media (min-width: 600px){.multi_teaser ul li{width:32.20339%;float:left}.multi_teaser ul li:nth-child(3n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}.multi_teaser ul li:nth-child(3n+2){margin-left:33.89831%;margin-right:-100%;clear:none}.multi_teaser ul li:nth-child(3n+3){margin-left:67.79661%;margin-right:-100%;clear:none}}.multi_teaser .image_and_description_container{position:relative}.multi_teaser .content_title{padding:.6em 0 0}.multi_teaser .content_title .date{font-weight:300;font-size:.9em;margin-bottom:.2em}.multi_teaser.events_teaser{background-color:white}.newsletter_follow_teaser.module{background-color:#e4e9ef;padding:1.5em 0 .5em 0}.newsletter_follow_teaser.module .share,.newsletter_follow_teaser.module .footer_newsletter{text-align:center;padding:1.69492%;margin-bottom:3em;width:100%}.newsletter_follow_teaser.module .share h2,.newsletter_follow_teaser.module .footer_newsletter h2{font-size:1.5em;font-weight:600;margin-bottom:0.6em;color:white;letter-spacing:-.035em}@media (min-width: 600px){.newsletter_follow_teaser.module .share h2,.newsletter_follow_teaser.module .footer_newsletter h2{font-size:1.6em}}@media (min-width: 1200px){.newsletter_follow_teaser.module .share h2,.newsletter_follow_teaser.module .footer_newsletter h2{font-size:1.8em}}.newsletter_follow_teaser.module .gradient_line_divider{margin:1em auto;display:none}@media (min-width: 600px){.newsletter_follow_teaser.module .footer_newsletter{width:48.71795%;float:left;margin-left:0;margin-right:-100%}}@media (min-width: 769px){.newsletter_follow_teaser.module .footer_newsletter{width:40.67797%;float:left;margin-left:8.47458%;margin-right:-100%}}@media (min-width: 600px){.newsletter_follow_teaser.module .share{width:48.71795%;float:left;margin-left:51.28205%;margin-right:-100%}}@media (min-width: 769px){.newsletter_follow_teaser.module .share{width:40.67797%;float:left;margin-left:50.84746%;margin-right:-100%}}.newsletter_follow_teaser.module .gradient_line_divider{margin-left:auto;margin-right:auto;content:" ";width:100%;height:1px;clear:both;background:white;background:-moz-linear-gradient(left, rgba(255,255,255,0), #fff, rgba(255,255,255,0));background:-webkit-linear-gradient(left, rgba(255,255,255,0), #fff, rgba(255,255,255,0));background:linear-gradient(to right, rgba(255,255,255,0), #fff, rgba(255,255,255,0));display:block}@media (min-width: 600px){.newsletter_follow_teaser.module .gradient_line_divider{display:none}}.newsletter_follow_teaser.module .share,.newsletter_follow_teaser.module .footer_newsletter{margin-bottom:1.5em}.newsletter_follow_teaser.module .share h2,.newsletter_follow_teaser.module .footer_newsletter h2{color:#222222}.newsletter_follow_teaser.module form.submit_newsletter .email_field{color:#343434;background-color:white}.newsletter_follow_teaser.module form.submit_newsletter .email_field.placeholder{color:#7b7b7b}.newsletter_follow_teaser.module form.submit_newsletter .email_field:-moz-placeholder{color:#7b7b7b}.newsletter_follow_teaser.module form.submit_newsletter .email_field::-moz-placeholder{color:#7b7b7b}.newsletter_follow_teaser.module form.submit_newsletter .email_field::-webkit-input-placeholder{color:#7b7b7b}.newsletter_follow_teaser.module .email_submit{background:url("https://www.jpl.nasa.gov/assets/stylesheets/../images/envelope_blue@2x.png") no-repeat 4px 10px transparent;background-size:25px}.newsletter_follow_teaser.module .share .all_icon{color:#14aaf7}.newsletter_teaser{background-color:#e4e9ef;padding-top:4em;padding-bottom:3em;margin-bottom:0}.newsletter_teaser .img_col{width:23.72881%;float:left;margin-left:25.42373%;margin-right:-100%}.newsletter_teaser .text_col{width:23.72881%;float:left;margin-left:50.84746%;margin-right:-100%}.image_teaser ul{width:100%;margin:0 auto}@media (min-width: 769px){.image_teaser ul{width:83.05085%}}.image_teaser .slide{width:100%;margin-bottom:5.26316%}@media (min-width: 600px){.image_teaser .slide{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;width:50%;float:left;padding-left:0.83333%;padding-right:0.83333%}}@media (min-width: 769px){.image_teaser .slide{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;width:50%;float:left;padding-left:0.83333%;padding-right:0.83333%}}.image_teaser .image_container{margin-bottom:1.69492%}.image_teaser .content_title{font-size:1.2em;margin-bottom:.1em}.grid_gallery+.image_teaser{padding-top:0}.player.lede{margin-bottom:2em}.facts_module .title{font-weight:600}.primary_media_feature .floating_text_area{position:absolute;color:white;width:95%;left:0;right:0;margin:0 auto;bottom:2em;text-align:center;z-index:2}@media (min-width: 769px){.primary_media_feature .floating_text_area{left:10%;width:80%}}.primary_media_feature .floating_text_area a{text-decoration:none;color:inherit}.primary_media_feature .floating_text_area .brand_title{font-size:.9em;font-weight:600;margin-bottom:6px}.primary_media_feature .floating_text_area .brand_title i{font-weight:200}.primary_media_feature .floating_text_area .category_title{color:white}.primary_media_feature .floating_text_area .media_feature_title{font-weight:600;line-height:1.2em;margin-bottom:.18em}.primary_media_feature .floating_text_area .description{display:none}@media (min-width: 769px){.primary_media_feature .floating_text_area .description{display:block;line-height:1.4em;margin-bottom:1.4em}}.primary_media_feature .floating_text_area footer{text-align:left}.primary_media_feature .floating_text_area.no_bg{color:white}.primary_media_feature .floating_text_area.bg_dark{background-color:black;background-color:rgba(0,0,0,0.5);padding:1.4em}.primary_media_feature .floating_text_area.bg_light{background-color:white;background-color:rgba(255,255,255,0.9);color:black;padding:1.4em}.primary_media_feature .floating_text_area.bg_light .category_title,.primary_media_feature .floating_text_area.bg_light .media_feature_title{color:black !important}@media (min-width: 769px){.primary_media_feature .floating_text_area.bg_light .category_title,.primary_media_feature .floating_text_area.bg_light .media_feature_title{color:white !important}}@media (min-width: 769px){.primary_media_feature .floating_text_area.bottom_left{width:21%;text-align:left;bottom:40px;left:12%}}@media (min-width: 769px){.primary_media_feature.centered_text .floating_text_area{left:0;right:0;width:80%}}@media (min-width: 769px){.primary_media_feature.centered_text .floating_text_area .description{width:500px;margin:15px auto 10px}}@media (min-width: 1024px){.primary_media_feature.centered_text .floating_text_area .description{width:550px}}.primary_media_feature.centered_text .floating_text_area footer{text-align:center;padding:1.2em 0 .2em}#missions_detail .primary_media_feature .floating_text_area{width:95%}@media (min-width: 600px){#missions_detail .primary_media_feature .floating_text_area{width:95%;left:0;right:0;text-align:left}}@media (min-width: 769px){#missions_detail .primary_media_feature .floating_text_area{width:90%}}@media (min-width: 1024px){#missions_detail .primary_media_feature .floating_text_area{max-width:1200px;width:97%}}.primary_media_feature.homepage_carousel .floating_text_area{width:100%;padding:1.4em;margin:0;bottom:4.2em;background:none}@media (min-width: 600px){.primary_media_feature.homepage_carousel .floating_text_area{bottom:7em}}@media (min-width: 769px){.primary_media_feature.homepage_carousel .floating_text_area{border-radius:6px;color:white;padding:1.4em;bottom:70px;text-align:left;transition:background-color .5s ease-out;right:auto;left:3%;width:40%}.primary_media_feature.homepage_carousel .floating_text_area:hover{background-color:black;background-color:rgba(32,32,32,0.9)}.primary_media_feature.homepage_carousel .floating_text_area:hover::before{opacity:0}.primary_media_feature.homepage_carousel .floating_text_area:hover .description{max-height:300px}.primary_media_feature.homepage_carousel .floating_text_area:hover .media_feature_title:after{opacity:0}.primary_media_feature.homepage_carousel .floating_text_area .description{max-height:0;overflow:hidden;transition:all .5s}.primary_media_feature.homepage_carousel .floating_text_area .description a{color:white}.primary_media_feature.homepage_carousel .floating_text_area .description a.detail_link{color:#44a2f5;display:block;margin:.7em 0 .6em}.primary_media_feature.homepage_carousel .floating_text_area .description a.detail_link:hover{color:#65b5fc}}@media (min-width: 1024px){.primary_media_feature.homepage_carousel .floating_text_area{width:435px;right:auto}}@media (min-width: 1200px){.primary_media_feature.homepage_carousel .floating_text_area{width:510px}}@media (min-width: 1700px){.primary_media_feature.homepage_carousel .floating_text_area{left:2%;width:760px}}@media (min-width: 769px){.primary_media_feature.homepage_carousel .floating_text_area.bottom_right{left:auto;right:3%}}@media (min-width: 1700px){.primary_media_feature.homepage_carousel .floating_text_area.bottom_right{right:2%}}.primary_media_feature.homepage_carousel .floating_text_area .media_feature_title{font-size:1.6em}@media (min-width: 600px){.primary_media_feature.homepage_carousel .floating_text_area .media_feature_title{font-size:2em}}@media (min-width: 769px){.primary_media_feature.homepage_carousel .floating_text_area .media_feature_title{font-size:2.1em;color:white;position:relative;margin-bottom:16px}.primary_media_feature.homepage_carousel .floating_text_area .media_feature_title:after{content:url("https://www.jpl.nasa.gov/assets/images/arrow_down_prompt.png");transition:opacity .25s;position:relative;top:-4px;left:10px;opacity:1}}@media (min-width: 1024px){.primary_media_feature.homepage_carousel .floating_text_area .media_feature_title{font-size:2.4em}}@media (min-width: 1200px){.primary_media_feature.homepage_carousel .floating_text_area .media_feature_title{font-size:2.7em}}@media (min-width: 1700px){.primary_media_feature.homepage_carousel .floating_text_area .media_feature_title{font-size:3em}}.button,.primary_media_feature.single .button,.outline_button{font-weight:600;display:inline-block;margin-bottom:.5em;margin-left:auto;margin-right:auto;background-color:#4b6a8d;color:white;line-height:1em;border:none;text-decoration:none;border-radius:4px;cursor:pointer;text-shadow:none;font-size:13px;padding:12px 24px;white-space:nowrap}@media (min-width: 769px){.button,.primary_media_feature.single .button,.outline_button{font-size:14px}}.no-touch .button:hover,.no-touch .outline_button:hover{background-color:#6083aa}@-moz-document url-prefix(){body .button,body .primary_media_feature.single .button,.primary_media_feature.single body .button,body .outline_button{padding-bottom:10px}body .primary_media_feature.single .button,body .primary_media_feature.single .outline_button,body .outline_button{padding-bottom:8px}@media (min-width: 769px){body .primary_media_feature.single .button,body .primary_media_feature.single .outline_button,body .outline_button{padding-bottom:10px}}}.button+.button,.outline_button+.button,.primary_media_feature.single .button+.button,.primary_media_feature.single .outline_button+.button,.button+.outline_button,.primary_media_feature.single .button+.outline_button,.outline_button+.outline_button{margin-left:1em}.primary_media_feature.single .button,.primary_media_feature.single .outline_button,.outline_button{border-radius:12px;border:2px solid white;border:2px solid rgba(255,255,255,0.8);background:none;color:#FFF;font-weight:600;text-transform:uppercase;padding:10px 13px}@media (min-width: 769px){.primary_media_feature.single .button,.primary_media_feature.single .outline_button,.outline_button{padding:12px 15px}}.primary_media_feature.single .dark.button,.primary_media_feature.single .dark.outline_button,.outline_button.dark{opacity:1;color:#777;border-color:#a5a6a7}.no-touch .primary_media_feature.single .button:hover,.no-touch .primary_media_feature.single .outline_button:hover,.no-touch .outline_button:hover{background-color:#6083aa;color:white;border-color:#6083aa;opacity:1}#site_footer{padding:2em 2em 5em 2em;background-color:black}#site_footer .gradient_line{margin-left:auto;margin-right:auto;content:" ";width:100%;height:1px;clear:both;background:#61b6fd;background:-moz-linear-gradient(left, transparent, #61b6fd, transparent);background:-webkit-linear-gradient(left, transparent, #61b6fd, transparent);background:linear-gradient(to right, transparent, #61b6fd, transparent);width:90%}@media (min-width: 769px){#site_footer .gradient_line{width:50%}}.upper_footer{padding:3em 0 4em}.upper_footer .grid_layout{width:100%}.upper_footer .share,.upper_footer .footer_newsletter{text-align:center;padding:1.69492%;margin-bottom:3em;width:100%}.upper_footer .share h2,.upper_footer .footer_newsletter h2{font-size:1.5em;font-weight:600;margin-bottom:0.6em;color:white;letter-spacing:-.035em}@media (min-width: 600px){.upper_footer .share h2,.upper_footer .footer_newsletter h2{font-size:1.6em}}@media (min-width: 1200px){.upper_footer .share h2,.upper_footer .footer_newsletter h2{font-size:1.8em}}.upper_footer .gradient_line_divider{margin:1em auto;display:none}@media (min-width: 600px){.upper_footer .footer_newsletter{width:48.71795%;float:left;margin-left:0;margin-right:-100%}}@media (min-width: 769px){.upper_footer .footer_newsletter{width:40.67797%;float:left;margin-left:8.47458%;margin-right:-100%}}@media (min-width: 600px){.upper_footer .share{width:48.71795%;float:left;margin-left:51.28205%;margin-right:-100%}}@media (min-width: 769px){.upper_footer .share{width:40.67797%;float:left;margin-left:50.84746%;margin-right:-100%}}#site_footer .sitemap{margin-bottom:3em}@media (min-width: 600px){#site_footer .sitemap .grid_layout{width:100%}}@media (min-width: large){#site_footer .sitemap .grid_layout{width:97%}}#site_footer .sitemap_directory{overflow:hidden;*zoom:1;margin-bottom:3em}#site_footer .sitemap_directory .footer_sitemap_item{margin-bottom:.6em}@media (min-width: 600px){#site_footer .sitemap_directory .footer_sitemap_item{margin-bottom:.2em}}@media (min-width: 1024px){#site_footer .sitemap_directory .footer_sitemap_item{margin-bottom:.2em;margin-left:10%}}#site_footer .sitemap_title{color:white;font-weight:600;text-transform:capitalize;font-size:1.2em;letter-spacing:-.01em;margin-bottom:.3em}@media (min-width: 600px){#site_footer .sitemap_title{font-size:1.1em}}@media (min-width: 1024px){#site_footer .sitemap_title{font-size:1.3em}}#site_footer .sitemap_block{text-align:center;width:100%}@media (min-width: 600px){#site_footer .sitemap_block{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;width:25%;float:left;padding-left:0.83333%;padding-right:0.83333%;text-align:left}}@media (min-width: 600px){#site_footer ul.subnav{margin-bottom:1em}#site_footer ul.subnav li{padding-left:1em;text-indent:-1em;margin:.1em 0}}#site_footer ul.subnav a{color:#a5a6a7;text-decoration:none;font-size:1em}@media (min-width: 600px){#site_footer ul.subnav a{font-size:.85em}}@media (min-width: 1024px){#site_footer ul.subnav a{font-size:.95em}}.no-touch #site_footer ul.subnav a:hover{color:white}.lower_footer{overflow:hidden}.lower_footer .nav_container{margin:0 auto;position:relative;left:0;width:100%;margin-bottom:2.5em}@media (min-width: 1024px){.lower_footer .nav_container{padding-top:1em;position:absolute}}.lower_footer nav{text-transform:uppercase;text-align:center;margin-left:auto;margin-right:auto;font-size:.9em;color:#a5a6a7}.lower_footer nav a{color:#a5a6a7;text-decoration:none}.no-touch .lower_footer nav a:hover{color:white}.lower_footer nav li{margin:0 .6em;display:inline;line-height:2em}.lower_footer nav li+li:before{margin-left:.6em}.lower_footer .credits{color:#a5a6a7;width:100%;font-size:.9em;text-align:center;position:relative}.lower_footer .credits&gt;span{display:block}.lower_footer .credits a{color:#a5a6a7;text-decoration:none}.no-touch .lower_footer .credits a:hover{color:white}@media (min-width: 1024px){.lower_footer .credits{float:right;width:20%;text-align:left}.lower_footer .credits&gt;span{display:block}}.module{padding:2.3em 0 3em;position:relative}@media (min-width: 769px){.module{padding:4em 0 4.3em}}.grid_layout{max-width:100%;margin-left:auto;margin-right:auto;width:95%}.grid_layout:after{content:" ";display:block;clear:both}@media (min-width: 600px){.grid_layout{max-width:100%;margin-left:auto;margin-right:auto;width:95%}.grid_layout:after{content:" ";display:block;clear:both}}@media (min-width: 769px){.grid_layout{max-width:100%;margin-left:auto;margin-right:auto;width:90%}.grid_layout:after{content:" ";display:block;clear:both}}@media (min-width: 1024px){.grid_layout{max-width:1200px;width:97%}.content_page .grid_layout{width:90%}}@media (max-width: 479px){.slide_strips .grid_layout,.multimedia_teaser .grid_layout,.events_teaser .grid_layout{width:100%}.slide_strips .grid_layout header,.multimedia_teaser .grid_layout header,.events_teaser .grid_layout header{width:95%}.slide_strips .grid_layout footer,.multimedia_teaser .grid_layout footer,.events_teaser .grid_layout footer{width:95%}}@media (min-width: 600px){.slide_strips .grid_layout,.multimedia_teaser .grid_layout,.events_teaser .grid_layout{width:90%}}.homepage_carousel{background:black}.carousel_nav{position:absolute;bottom:30px;cursor:pointer;text-align:center;left:0;right:0;margin:0 auto}@media (min-width: 769px){.carousel_nav{bottom:60px}}.carousel_nav .dot_btns{position:relative;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:-moz-none;-ms-user-select:none;user-select:none}.carousel_nav .dot_btns .prev,.carousel_nav .dot_btns .next{display:none}@media screen and (769px){.carousel_nav .dot_btns .prev,.carousel_nav .dot_btns .next{display:inline-block;position:relative;vertical-align:top;margin:6px 8px 0;width:10px;height:15px;background-image:url("https://www.jpl.nasa.gov/assets/arrows-carousel@2x.png");background-size:20px 30px}}.carousel_nav .dot_btns .dot_btn{display:inline-block;cursor:pointer;margin:0 -2px;padding:10px 11px}@media screen and (769px){.carousel_nav .dot_btns .dot_btn{margin:0;padding:10px 9px}}.carousel_nav .dot_btns .dot_btn .dot{background-color:white;border-radius:50% 50% 50% 50%;height:7px;width:7px;opacity:0.2}.no-touch .carousel_nav .dot_btns .dot_btn:hover .dot{opacity:1}.carousel_nav .dot_btns .dot_btn.active .dot{opacity:1}.addthis-smartlayers-desktop .addthis_32x32_style a{width:40px}.touch .addthis-smartlayers{position:relative}.social_icons{display:inline-block;margin-top:3px;white-space:nowrap}.social_icons .icon{display:inline-block;overflow:hidden;height:32px;width:32px;vertical-align:middle;cursor:pointer;border-radius:3px;padding:0 !important;margin-bottom:.6em}.social_icons .icon+.icon{margin-left:.6em}@media (min-width: 769px){.social_icons .icon+.icon{margin-left:.7em}}.social_icons .all_icon{height:32px;width:32px;position:relative;vertical-align:middle;color:#a5a6a7}.social_icons .all_icon span{text-decoration:none;font-size:1em;font-weight:600;position:absolute;bottom:0;left:0;width:100%;line-height:normal}.social_icons .all_icon:hover{color:white}.media_feature .window{width:100%;height:auto;position:absolute;overflow:hidden}@media (min-width: 769px){.media_feature .window{position:relative;height:600px}}.media_feature .window.mobile{height:auto;min-height:100%}.media_feature #featured_image{z-index:9;top:0;left:0;width:100%;overflow:hidden}@media (min-width: 769px){.media_feature #featured_image{position:absolute}}.media_feature.image_of_the_day{padding:0;overflow:hidden;background:black;min-height:300px}@media (min-width: 600px){.media_feature.image_of_the_day{height:335px}}@media (min-width: 769px){.media_feature.image_of_the_day{height:430px}}@media (min-width: 1024px){.media_feature.image_of_the_day{height:570px}}@media (min-width: 1200px){.media_feature.image_of_the_day{height:660px}}@media (min-width: 1700px){.media_feature.image_of_the_day{height:740px;max-height:800px}}.media_feature.image_of_the_day a.image_day{width:100%;height:100%;position:absolute;top:0;left:0;z-index:11}.media_feature.image_of_the_day .window{padding:2.3em 0 3em;height:100%}@media (min-width: 769px){.media_feature.image_of_the_day .window{padding:4em 0 4.3em}}.media_feature.image_of_the_day header{z-index:12;text-align:center}.media_feature.image_of_the_day header .header_link{width:100%}.media_feature.image_of_the_day header .category_title{color:white}.media_feature.image_of_the_day header .module_title{color:white;margin-bottom:20px}.media_feature.image_of_the_day .outline_button{opacity:1}.missions_teaser{color:white;padding:0;overflow:hidden;background:black}@media (min-width: 769px){.missions_teaser{height:auto}}.missions_teaser .window{padding:2.3em 0 3em;width:100%;z-index:11;height:100%;position:relative;overflow:hidden}@media (min-width: 769px){.missions_teaser .window{padding:4em 0 4.3em}}.missions_teaser .window.mobile{height:auto;min-height:100%}.missions_teaser #missions_image{position:absolute;z-index:9;top:0;left:0;height:100%;overflow:hidden}@media (min-width: 600px){.touch .missions_teaser #missions_image{width:150% !important}}.missions_teaser header{z-index:12;text-align:center;margin-bottom:2em}@media (min-width: 769px){.missions_teaser header{margin-bottom:3.2em}}.missions_teaser header .header_link{width:100%}.missions_teaser header .category_title{color:white}.missions_teaser header .module_title{color:white;margin-bottom:.4em}.missions_teaser header p{text-align:center;width:100%;margin:.3em auto 1em;color:#cccccc}@media (min-width: 600px){.missions_teaser header p{width:70%}}@media (min-width: 769px){.missions_teaser header p{width:60%}}@media (min-width: 1024px){.missions_teaser header p{width:50%}}.missions_teaser .missions_gallery{padding-bottom:1px;margin-bottom:2.4em}@media (min-width: 769px){.missions_teaser .missions_gallery{margin-bottom:3em}}.missions_teaser .missions_gallery .slide{border:1px solid #3A3A3A;overflow:hidden;width:47.36842%;float:left;margin-bottom:5.26316%}.missions_teaser .missions_gallery .slide:nth-child(2n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}.missions_teaser .missions_gallery .slide:nth-child(2n+2){margin-left:52.63158%;margin-right:-100%;clear:none}@media (min-width: 600px){.missions_teaser .missions_gallery .slide{width:23.72881%;float:left;margin-bottom:0}.missions_teaser .missions_gallery .slide:nth-child(4n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}.missions_teaser .missions_gallery .slide:nth-child(4n+2){margin-left:25.42373%;margin-right:-100%;clear:none}.missions_teaser .missions_gallery .slide:nth-child(4n+3){margin-left:50.84746%;margin-right:-100%;clear:none}.missions_teaser .missions_gallery .slide:nth-child(4n+4){margin-left:76.27119%;margin-right:-100%;clear:none}}.missions_teaser .missions_gallery .text_overlay{color:white;font-size:1.3em;font-weight:600;padding-bottom:.6em;z-index:1;padding:.6em}@media (min-width: 600px){.missions_teaser .missions_gallery .text_overlay{font-size:1.5em;padding-bottom:.8em}}.missions_teaser .missions_gallery .gradient_bottom_teasers{position:relative;margin-top:-25px;height:75px}@media (min-width: 600px){.missions_teaser .missions_gallery .gradient_bottom_teasers{margin-top:-35px;height:110px}}.missions_teaser .outline_button{opacity:1}.filter_bar{background-color:#e4e9ef;text-align:center;padding:1em 0 0}@media (min-width: 769px){.filter_bar{padding:2em 0}}.filter_bar form.section_search{display:none;padding-bottom:1em;max-width:380px;width:90%;margin:0 auto}@media (min-width: 769px){.filter_bar form.section_search{width:auto;max-width:none;display:block !important;padding-bottom:0}}@media screen and (orientation: portrait){.touch .filter_bar.fixed{position:fixed;top:0;left:0;z-index:20;width:100%;-webkit-box-shadow:0 4px 4px -1px rgba(0,0,0,0.15);-moz-box-shadow:0 4px 4px -2px rgba(0,0,0,0.15);box-shadow:0 4px 4px -2px rgba(0,0,0,0.15)}}.no-touch .filter_bar.fixed{position:fixed;top:0;left:0;z-index:20;width:100%;-webkit-box-shadow:0 4px 4px -1px rgba(0,0,0,0.15);-moz-box-shadow:0 4px 4px -2px rgba(0,0,0,0.15);box-shadow:0 4px 4px -2px rgba(0,0,0,0.15)}.filter_bar .search_binder{width:100%;margin-bottom:.7em}@media (min-width: 769px){.filter_bar .search_binder{position:relative;vertical-align:top;display:inline-block;width:auto;margin:0}}.filter_bar input.search_field,.filter_bar form.submit_newsletter input.email_field,form.submit_newsletter .filter_bar input.email_field{width:100%}@media (min-width: 769px){.filter_bar input.search_field,.filter_bar form.submit_newsletter input.email_field,form.submit_newsletter .filter_bar input.email_field{width:170px}}@media (min-width: 1024px){.filter_bar input.search_field,.filter_bar form.submit_newsletter input.email_field,form.submit_newsletter .filter_bar input.email_field{width:220px}}.filter_bar select{margin:0 auto .5em;float:none;width:100%;max-width:380px;padding:.5em 1em;font-size:16px;border:0;height:40px;vertical-align:middle;color:white;-webkit-appearance:none;-o-appearance:none;background:#4b6a8d url("https://www.jpl.nasa.gov/assets/images/arrows_select_box.png") no-repeat 94% 10px;font-weight:600}@media (min-width: 769px){.filter_bar select{margin-left:.5em;margin-bottom:0;width:160px}}@media (min-width: 1024px){.filter_bar select{width:200px}}.no-touch .filter_bar select:hover{cursor:pointer}.filter_bar select::-ms-expand{display:none}.filter_bar option{padding:0.5em 1em}.filter_bar header{display:inline-block;width:100%;text-align:left}@media (min-width: 600px){.filter_bar header{text-align:center}}@media (min-width: 769px){.filter_bar header{display:none}}.filter_bar .arrow_box{display:inline-block;position:absolute;padding:4px;cursor:pointer;right:0;bottom:7px;float:none;transition:all .2s}@media (min-width: 600px){.filter_bar .arrow_box{text-align:center}}.filter_bar .arrow_box.rotate_up{transform:rotate(180deg)}.filter_bar .arrow_box.rotate_right{transform:rotate(270deg)}.filter_bar .arrow_box.rotate_left{transform:rotate(90deg)}.filter_bar .arrow_box .arrow_down{display:block;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #8597B1}.filter_bar_spanner{display:none}@media screen and (orientation: landscape){.touch .filter_bar_spanner{display:none !important}}@-moz-document url-prefix(){section.filter_bar select{background-image:none;padding:0.6em 1em 0.5em}}.ie9 section.filter_bar select{background-image:none}.rollover_description{opacity:0;height:0;z-index:1;overflow:hidden}.rollover_description .item_tease_overlay{color:white}.slide{position:relative;min-height:100%}.slide .overlay_arrow{display:none}.slide&gt;a{text-decoration:none;color:black}.no-touch .slide:hover .content_title{color:#366599;cursor:pointer}@media (min-width: 769px){.no-touch .slide:hover .rollover_description{padding:.9em;position:absolute;opacity:1;height:auto;top:0;right:0;width:100%;height:100%;color:white;background-color:rgba(67,93,122,0.95);cursor:pointer}.no-touch .slide:hover .rollover_title{font-size:1.6em;font-weight:600;margin-bottom:.2em}.no-touch .slide:hover .overlay_arrow{height:14px;width:14px;position:absolute;right:14px;bottom:18px;display:block}}.list_view .rollover_description{display:none}.release_heading{text-transform:uppercase;font-weight:600}.release_heading,.release_date{font-size:.9em;margin-bottom:.3em;display:inline-block}.slick-slider{margin-left:auto;margin-right:auto;width:100%}@media (min-width: 480px){.slick-slider{width:84%}}@media (min-width: 600px){.slick-slider{width:90%}}.slick-slider .slick-slide&gt;a{text-decoration:none;color:black}.slick-slider .slide{margin:0 6px}@media (min-width: 769px){.slick-slider .slide{margin:0 9px}}.image_and_description_container{position:relative;overflow:hidden}.image_and_description_container span.play_button{position:absolute;background:url("https://www.jpl.nasa.gov/assets/images/play-button.png") center center no-repeat;background-size:50px 50px;height:50px;width:50px;display:inline;left:42%;left:calc(50% - 25px);top:42%;top:calc(50% - 25px)}.slide_strips{overflow:hidden;padding-top:0}.slide_strips header{overflow:hidden}.slide_strips header h1.module_title{margin-bottom:.45em}.slide_strips header h1.module_title_small{display:inline-block;vertical-align:middle;width:20%}.slide_strips header .section_selector{text-align:center;display:inline-block;width:100%;position:relative;padding:1px 0;margin-bottom:1em}@media (min-width: 600px){.slide_strips header .section_selector{margin-bottom:1.6em}}@media (min-width: 769px){.slide_strips header .section_selector{margin-bottom:1.8em}}.slide_strips header .section_selector a{cursor:pointer;border-radius:50%;height:6em;width:6em;background-color:white;border:1px solid #777777;line-height:6em;color:#777777;line-height:4.3em;cursor:pointer;display:inline-block;text-transform:uppercase;font-size:.7em;transition:background .2s ease;line-height:6em;font-weight:600;letter-spacing:-.02em}@media (min-width: 769px){.slide_strips header .section_selector a{cursor:pointer;border-radius:50%;height:6.5em;width:6.5em;background-color:white;border:2px solid #a5a6a7;line-height:6.5em;font-size:.9em;line-height:6.5em}}.slide_strips header .section_selector a+a{margin-left:.2em}@media (min-width: 769px){.slide_strips header .section_selector a+a{margin-left:1em}}.no-touch .slide_strips header .section_selector a:hover,.slide_strips header .section_selector a.current{background-color:black;border-color:black;color:white;transition:none}.slide_strips header .section_selector .gradient_line{position:absolute;top:50%;z-index:-1;height:2px}.slide_strips .slide_strip_wrapper{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:-moz-none;-ms-user-select:none;user-select:none;position:relative;min-height:100px;margin-bottom:40px}.slide_strips .slide_strip_wrapper .loading{display:none;background-image:url("https://www.jpl.nasa.gov/assets/stylesheets/ajax-loader.gif");width:32px;height:32px;margin-left:auto;margin-right:auto;position:relative;top:40px}.slide_strips .slide_strip_container{width:100%;left:0}.slide_strips .slide_strip{z-index:6;position:relative;left:0;opacity:0;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";margin-bottom:0}.slide_strips .slide_strip .slide{margin:0 6px}@media (min-width: 769px){.slide_strips .slide_strip .slide{margin:0 9px}}.slide_strips .content_title{padding:.6em 0 0;color:black;text-decoration:none}.slide_strips .content_titlea{text-decoration:none}.multimedia_teaser .multimedia_module_gallery{position:relative;overflow:visible}nav.slide_nav{width:100%;position:absolute;height:100%}nav.slide_nav .set_view_master_nav{display:none}@media (min-width: 480px){nav.slide_nav .set_view_master_nav{display:block;cursor:pointer;position:absolute;width:40px;height:40px;text-align:center;top:20%}}@media (min-width: 600px){nav.slide_nav .set_view_master_nav{top:20%}}@media (min-width: 769px){nav.slide_nav .set_view_master_nav{top:26%}}@media (min-width: 1024px){nav.slide_nav .set_view_master_nav{top:30%}}nav.slide_nav .set_view_master_nav .carousel_arrow_icon{background-image:url("https://www.jpl.nasa.gov/assets/images/arrows_carousel_round@2x.png");background-size:100px;width:40px;height:40px;display:inline-block;text-indent:-9999px}.multimedia_teaser nav.slide_nav .set_view_master_nav{top:38%}nav.slide_nav .prev_btn .carousel_arrow_icon,nav.slide_nav .next_btn .carousel_arrow_icon{background-position:0px 0px}@media (min-width: 480px){nav.slide_nav .prev_btn,nav.slide_nav .next_btn{opacity:.4;-webkit-tap-highlight-color:rgba(255,255,255,0);-webkit-tap-highlight-color:transparent}.no-touch nav.slide_nav .prev_btn:hover,.no-touch nav.slide_nav .next_btn:hover{opacity:1}.no-touch nav.slide_nav .prev_btn:hover.disabled,.no-touch nav.slide_nav .next_btn:hover.disabled{cursor:default;opacity:.1}nav.slide_nav .prev_btn.disabled,nav.slide_nav .next_btn.disabled{opacity:.1}}nav.slide_nav .prev_btn{left:-.5%}@media (min-width: 600px){nav.slide_nav .prev_btn{left:-2%}}@media (min-width: 769px){nav.slide_nav .prev_btn{left:-1.5%}}@media (min-width: 1024px){nav.slide_nav .prev_btn{left:-.5%}}@media (min-width: 1200px){nav.slide_nav .prev_btn{left:.5%}}nav.slide_nav .next_btn{right:-1.5%}@media (min-width: 600px){nav.slide_nav .next_btn{right:-2.5%}}@media (min-width: 769px){nav.slide_nav .next_btn{right:-2%}}@media (min-width: 1024px){nav.slide_nav .next_btn{right:-1%}}@media (min-width: 1200px){nav.slide_nav .next_btn{right:0}}nav.slide_nav .next_btn .carousel_arrow_icon{background-position:-50px 0px}.fancybox-overlay,#fancybox-lock{background:#000 !important}.fancybox-wrap,.fancybox-wrap *{-moz-box-sizing:content-box !important;-webkit-box-sizing:content-box !important;-safari-box-sizing:content-box !important;box-sizing:content-box !important}.fancybox-wrap .fancybox-inner{box-shadow:none !important;border-radius:2px !important}.fancybox-wrap .fancybox-title{font-size:16px;font-weight:600;letter-spacing:-0.01em;text-align:center;margin-top:16px;color:#E7E7E7;line-height:1.4em}@media (min-width: 769px){.fancybox-wrap .fancybox-title{font-size:17px}}@media (min-width: 1200px){.fancybox-wrap .fancybox-title{font-size:19px}}.fancybox-wrap .addthis_toolbox{display:inline-block;width:100%;margin-top:16px;white-space:nowrap}.fancybox-wrap a.addthis_button_compact{width:85px;border-radius:4px;overflow:hidden;height:35px}.fancybox-wrap a.addthis_button_compact img{vertical-align:top}.fancybox-wrap a.addthis_button_compact,.fancybox-wrap .button,.fancybox-wrap .primary_media_feature.single .button,.primary_media_feature.single .fancybox-wrap .button,.fancybox-wrap .outline_button{margin-right:6px;display:inline-block;vertical-align:top}.fancybox-wrap .button,.fancybox-wrap .primary_media_feature.single .button,.primary_media_feature.single .fancybox-wrap .button,.fancybox-wrap .outline_button{font-size:14px;padding-bottom:0;padding-left:1em;padding-right:1em;height:25px;letter-spacing:0;padding-top:10px}#fancybox-thumbs{background:#2A2A2A !important}#fancybox-thumbs .fancybox-thumb-prev,#fancybox-thumbs .fancybox-thumb-next{background:#4A4A4A !important}#fancybox-thumbs ul li{padding:2px !important}#fancybox-thumbs ul li a{border:2px solid #909090 !important;border-radius:2px !important;box-shadow:none !important}#fancybox-thumbs ul li.fancybox-thumb-active{padding:2px !important}#fancybox-thumbs ul li.fancybox-thumb-active a{border:2px solid #fff !important}.atm-i{display:none !important}figure{position:relative;margin-bottom:1em}@media (min-width: 769px){figure{margin-bottom:2em}}figure figcaption{margin-top:.8em;font-size:.8em;color:#5a6470}@media (min-width: 769px){figure figcaption{font-size:.88em}}figure a.play{position:relative}figure span.play_button{position:absolute;background:url("https://www.jpl.nasa.gov/assets/images/play-button.png") center center no-repeat;background-size:50px 50px;height:50px;width:50px;display:inline;left:42%;left:calc(50% - 25px);top:42%;top:calc(50% - 25px)}aside figure{margin-bottom:0}aside figure figcaption{margin-bottom:0}.content_page #page_header{margin-bottom:2em}.content_page #page_header .release_date{font-size:1em;color:#222222;white-space:nowrap}.content_page #page_header .author{margin:.5em 0 1.8em}.no-touch .content_page a:hover{border-bottom:1px solid}.content_page .main_feature .master-slider{width:100%;height:300px}@media (min-width: 600px){.content_page .main_feature .master-slider{height:400px}}.content_page .main_feature .master-slider .gradient_container_bottom{height:80px}.content_page .main_feature .master-slider .ms-nav-next,.content_page .main_feature .master-slider .ms-nav-prev{display:none}@media (min-width: 769px){.content_page .main_feature .master-slider .ms-nav-next,.content_page .main_feature .master-slider .ms-nav-prev{display:block}}.content_page .main_feature .master-slider .ms-bullets{bottom:30px}.content_page .main_feature .master-slider .ms-bullets-count{right:-50%;position:absolute}.content_page .main_feature .master-slider .ms-bullet{background-color:white;background-image:none;border-radius:50% 50% 50% 50%;height:10px;width:10px;opacity:0.5;margin:0 10px}.content_page .main_feature .master-slider .ms-bullet:hover,.content_page .main_feature .master-slider .ms-bullet.ms-bullet-selected{opacity:1.0}.content_page #primary_column{margin-bottom:5.26316%}@media (min-width: 600px){.content_page #primary_column{width:61.53846%;float:left;margin-right:2.5641%;margin-bottom:0}}@media (min-width: 769px){.content_page #primary_column{width:64.40678%;float:left;margin-right:1.69492%}}@media (min-width: 1024px){.content_page #primary_column{width:61.86441%;float:left;margin-right:1.69492%}}@media (min-width: 1200px){.content_page #primary_column{width:59.32203%;float:left;margin-right:1.69492%}}@media (min-width: 600px){.content_page #secondary_column{width:35.89744%;float:right;margin-right:0}}@media (min-width: 769px){.content_page #secondary_column{width:32.20339%;float:right;margin-right:0}}.article_image_container{margin-bottom:2.5641%}.article_image_container .caption{margin-top:.8em;color:#5a6470;font-size:0.8em;height:70px;overflow:hidden}.inner_nav li{display:inline-block}.inner_nav li a{font-weight:600}.inner_nav li a:hover{text-decoration:underline}.inner_nav li a:after{content:" |";color:#777777}.inner_nav li:last-child a:after{content:""}#secondary_column aside{border:1px solid #c1c1c1;padding:5.26316%;margin-bottom:7.14286%}#secondary_column aside:last-child{margin-bottom:0}aside .gallery_list{margin-bottom:0}aside .gallery_list li{margin-bottom:1em;position:relative}aside .gallery_list li:last-child{margin-bottom:0}aside .gallery_list .caption_overlay{position:absolute;top:0;left:0;width:50%;padding:.6em;color:white;font-weight:600}aside .gallery_list span.play_button{position:absolute;background:url("https://www.jpl.nasa.gov/assets/images/play-button.png") center center no-repeat;background-size:50px 50px;height:50px;width:50px;display:inline;left:42%;left:calc(50% - 25px);top:42%;top:calc(50% - 25px)}.links_module li{margin-bottom:1em}.page_subnav{position:relative;top:-1.6em;font-weight:600;font-size:.9em;letter-spacing:-.01em;font-family:Helvetica, Arial, sans-serif;cursor:pointer}@media (min-width: 769px){.page_subnav{top:-2.9em;font-size:1em}}.page_subnav li{margin:0 .5em .3em 0;display:inline-block}.page_subnav li.page_subnav_title{text-transform:uppercase;white-space:nowrap}.page_subnav li.page_subnav_title .divider{margin-left:.5em}.page_subnav li:last-child{margin:0}.page_subnav li a,.page_subnav li .divider{color:#a7afb8}.page_subnav li a{white-space:nowrap}.page_subnav li a:hover{text-decoration:none;border:none !important}.page_subnav li a:hover,.page_subnav li .current{color:#222222}.text_overlay{position:absolute;bottom:0;width:100%;text-align:center;padding:1.2em}.item_tease_overlay{margin-top:.3em;color:#cccccc;overflow:hidden}.article_nav{display:none}@media (min-width: 1024px){.article_nav{display:block;position:relative;z-index:11}.article_nav .article_nav_block{position:fixed;height:86px;display:inline-block;top:42.5%}.article_nav .article_nav_block .link_box{width:40px;background-color:#e4e9ef;display:inline;height:100%}.article_nav .article_nav_block .article_details{display:inline;width:250px;background-color:#FFF;text-decoration:none;color:#000;padding:10px;background-color:#e4e9ef}.article_nav .article_nav_block .article_details .img{margin-bottom:6px}.article_nav .article_nav_block .article_details .title{font-weight:600;font-size:.9em}.article_nav .article_nav_block .article_details .which{font-size:.8em;margin-bottom:12px}.article_nav .article_nav_block.prev{left:0}.article_nav .article_nav_block.prev .link_box{float:left}.article_nav .article_nav_block.prev .article_details{float:left;display:none}.article_nav .article_nav_block.next{right:0}.article_nav .article_nav_block.next .link_box{float:right}.article_nav .article_nav_block.next .article_details{display:none;float:right}.no-touch .article_nav .article_nav_block:hover .article_details{display:block}}.wysiwyg_content{line-height:1.4em}#primary_column .wysiwyg_content&gt;:first-child{margin-top:0}.wysiwyg_content p,.wysiwyg_content a{word-wrap:break-word}.wysiwyg_content h1,.wysiwyg_content h2,.wysiwyg_content h3,.wysiwyg_content h4{font-weight:600;margin:1.5em 0 .5em;line-height:1.2em}.wysiwyg_content h1{font-size:2.2em}.wysiwyg_content h2{font-size:1.8em}.wysiwyg_content h3{font-size:1.4em}.wysiwyg_content h4{font-weight:600;font-size:1.1em}.wysiwyg_content strong,.wysiwyg_content b,.wysiwyg_content .bold{font-weight:bold}.wysiwyg_content .small_text{font-size:.8em}.wysiwyg_content .inline_img,.wysiwyg_content .inline_img .inline_img_wide{margin:.4em 1.2em .9em 0;float:left;max-width:40%}.wysiwyg_content .inline_img.right,.wysiwyg_content .inline_img .right.inline_img_wide{margin-right:0;margin-left:1.2em;float:right}.wysiwyg_content .inline_img img,.wysiwyg_content .inline_img .inline_img_wide img{width:auto;max-width:100%}@media (min-width: 600px){.wysiwyg_content .inline_img,.wysiwyg_content .inline_img .inline_img_wide{max-width:100%}}.wysiwyg_content .inline_img .inline_img_wide{width:100%;max-width:100%}.wysiwyg_content .comment{color:red}.wysiwyg_content .pipe_divider{color:#cccccc}@media (min-width: 480px){.wysiwyg_content .video_embed #video_player{height:385px}}@media (min-width: 600px){.wysiwyg_content .video_embed #video_player{height:306px}}@media (min-width: 769px){.wysiwyg_content .video_embed #video_player{height:400px}}@media (min-width: 1024px){.wysiwyg_content .video_embed #video_player{height:485px}}.wysiwyg_content table{border-spacing:1px;border-collapse:separate;font-size:15px}#primary_column .wysiwyg_content table{margin:2em 0}#secondary_column .wysiwyg_content table{margin:1em 0;width:100%}.wysiwyg_content table th,.wysiwyg_content table td{padding:8px 10px}.wysiwyg_content table th{background-color:#ddd;font-weight:600}.wysiwyg_content table td{background-color:#eee}.wysiwyg_content table .table_top{vertical-align:top}.wysiwyg_content table h1,.wysiwyg_content table h2,.wysiwyg_content table h3,.wysiwyg_content table h4,.wysiwyg_content table h5{margin:.2em 0 .2em}.wysiwyg_content table.clear_table td{background-color:transparent}.wysiwyg_content table.line_separated_table{border-spacing:0}.wysiwyg_content table.line_separated_table td{background-color:transparent;border-bottom:1px solid #cccccc;padding:5px 12px 4px 0}.wysiwyg_content ul.spaced_list,.wysiwyg_content ul.bullet_list{padding-bottom:.5em}.wysiwyg_content ul.spaced_list li,.wysiwyg_content ul.bullet_list li{margin-bottom:.5em}.wysiwyg_content ul.bullet_list{margin-left:20px;list-style-type:disc}.wysiwyg_content ol.numbered_list{list-style-type:decimal;margin-left:2em}.wysiwyg_content ol.numbered_list li{margin-bottom:.5em}.wysiwyg_content ul.thumb_row{margin:1em 0}.wysiwyg_content ul.thumb_row li{width:31.81818%;float:left}.wysiwyg_content ul.thumb_row li:nth-child(3n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}.wysiwyg_content ul.thumb_row li:nth-child(3n+2){margin-left:34.09091%;margin-right:-100%;clear:none}.wysiwyg_content ul.thumb_row li:nth-child(3n+3){margin-left:68.18182%;margin-right:-100%;clear:none}@media (min-width: 480px){.wysiwyg_content ul.thumb_row li{width:18.36735%;float:left}.wysiwyg_content ul.thumb_row li:nth-child(5n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}.wysiwyg_content ul.thumb_row li:nth-child(5n+2){margin-left:20.40816%;margin-right:-100%;clear:none}.wysiwyg_content ul.thumb_row li:nth-child(5n+3){margin-left:40.81633%;margin-right:-100%;clear:none}.wysiwyg_content ul.thumb_row li:nth-child(5n+4){margin-left:61.22449%;margin-right:-100%;clear:none}.wysiwyg_content ul.thumb_row li:nth-child(5n+5){margin-left:81.63265%;margin-right:-100%;clear:none}}.wysiwyg_content ul.thumb_row li p{font-size:.9em;text-align:center}.wysiwyg_content .hr_custom{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}.wysiwyg_content ul.image_text_list,.wysiwyg_content ul.image_text_sublist,.wysiwyg_content ul.small_image_text_list{margin-bottom:2em}#secondary_column .wysiwyg_content ul.image_text_list,#secondary_column .wysiwyg_content ul.image_text_sublist,#secondary_column .wysiwyg_content ul.small_image_text_list{margin-bottom:0}.wysiwyg_content ul.image_text_list li,.wysiwyg_content ul.image_text_sublist li,.wysiwyg_content ul.small_image_text_list li{border-bottom:1px solid #cccccc;overflow:hidden;*zoom:1;padding:1.5em 0 1.5em}.wysiwyg_content ul.image_text_list li a,.wysiwyg_content ul.image_text_sublist li a,.wysiwyg_content ul.small_image_text_list li a{text-decoration:none;cursor:pointer}#secondary_column .wysiwyg_content ul.image_text_list li:first-child,#secondary_column .wysiwyg_content ul.image_text_sublist li:first-child,#secondary_column .wysiwyg_content ul.small_image_text_list li:first-child{padding-top:.5em}.wysiwyg_content ul.image_text_list li:last-child,.wysiwyg_content ul.image_text_sublist li:last-child,.wysiwyg_content ul.small_image_text_list li:last-child{border-bottom:none}.wysiwyg_content ul.image_text_list .image_text_container,.wysiwyg_content ul.image_text_sublist .image_text_container,.wysiwyg_content ul.small_image_text_list .image_text_container{position:relative}.wysiwyg_content ul.image_text_list .image_text_container .img,.wysiwyg_content ul.image_text_sublist .image_text_container .img,.wysiwyg_content ul.small_image_text_list .image_text_container .img{float:right;margin-left:4%;margin-bottom:.5em;width:23%}@media (min-width: 600px){.wysiwyg_content ul.image_text_list .image_text_container .img,.wysiwyg_content ul.image_text_sublist .image_text_container .img,.wysiwyg_content ul.small_image_text_list .image_text_container .img{float:left;margin:0 3% 0 0}#secondary_column .wysiwyg_content ul.image_text_list .image_text_container .img,#secondary_column .wysiwyg_content ul.image_text_sublist .image_text_container .img,#secondary_column .wysiwyg_content ul.small_image_text_list .image_text_container .img{margin-right:4%;width:27%}}.wysiwyg_content ul.image_text_list .image_text_container .list_text_content,.wysiwyg_content ul.image_text_sublist .image_text_container .list_text_content,.wysiwyg_content ul.small_image_text_list .image_text_container .list_text_content{width:auto}@media (min-width: 600px){.wysiwyg_content ul.image_text_list .image_text_container .list_text_content,.wysiwyg_content ul.image_text_sublist .image_text_container .list_text_content,.wysiwyg_content ul.small_image_text_list .image_text_container .list_text_content{width:73%;float:left}#secondary_column .wysiwyg_content ul.image_text_list .image_text_container .list_text_content,#secondary_column .wysiwyg_content ul.image_text_sublist .image_text_container .list_text_content,#secondary_column .wysiwyg_content ul.small_image_text_list .image_text_container .list_text_content{width:69%}}.wysiwyg_content ul.image_text_list .image_text_container .date,.wysiwyg_content ul.image_text_sublist .image_text_container .date,.wysiwyg_content ul.small_image_text_list .image_text_container .date{font-size:.9em;margin-bottom:.3em;color:#222222}.wysiwyg_content ul.image_text_list .image_text_container .content_title,.wysiwyg_content ul.image_text_sublist .image_text_container .content_title,.wysiwyg_content ul.small_image_text_list .image_text_container .content_title{display:block;font-weight:600;text-decoration:none;color:black;cursor:pointer;letter-spacing:-.025em;line-height:1.3em;font-size:1.04em;margin-bottom:0em}@media (min-width: 600px){.wysiwyg_content ul.image_text_list .image_text_container .content_title,.wysiwyg_content ul.image_text_sublist .image_text_container .content_title,.wysiwyg_content ul.small_image_text_list .image_text_container .content_title{font-size:1.2em;margin-bottom:0em}}@media (min-width: 769px){.wysiwyg_content ul.image_text_list .image_text_container .content_title,.wysiwyg_content ul.image_text_sublist .image_text_container .content_title,.wysiwyg_content ul.small_image_text_list .image_text_container .content_title{font-size:1.36em;margin-bottom:0em}}@media (min-width: 1024px){.wysiwyg_content ul.image_text_list .image_text_container .content_title,.wysiwyg_content ul.image_text_sublist .image_text_container .content_title,.wysiwyg_content ul.small_image_text_list .image_text_container .content_title{font-size:1.44em;margin-bottom:0em}}@media (min-width: 1200px){.wysiwyg_content ul.image_text_list .image_text_container .content_title,.wysiwyg_content ul.image_text_sublist .image_text_container .content_title,.wysiwyg_content ul.small_image_text_list .image_text_container .content_title{font-size:1.52em;margin-bottom:0em}}#secondary_column .wysiwyg_content ul.image_text_list .image_text_container .content_title,#secondary_column .wysiwyg_content ul.image_text_sublist .image_text_container .content_title,#secondary_column .wysiwyg_content ul.small_image_text_list .image_text_container .content_title{font-size:0.78em;margin-bottom:0em}@media (min-width: 600px){#secondary_column .wysiwyg_content ul.image_text_list .image_text_container .content_title,#secondary_column .wysiwyg_content ul.image_text_sublist .image_text_container .content_title,#secondary_column .wysiwyg_content ul.small_image_text_list .image_text_container .content_title{font-size:0.9em;margin-bottom:0em}}@media (min-width: 769px){#secondary_column .wysiwyg_content ul.image_text_list .image_text_container .content_title,#secondary_column .wysiwyg_content ul.image_text_sublist .image_text_container .content_title,#secondary_column .wysiwyg_content ul.small_image_text_list .image_text_container .content_title{font-size:1.02em;margin-bottom:0em}}@media (min-width: 1024px){#secondary_column .wysiwyg_content ul.image_text_list .image_text_container .content_title,#secondary_column .wysiwyg_content ul.image_text_sublist .image_text_container .content_title,#secondary_column .wysiwyg_content ul.small_image_text_list .image_text_container .content_title{font-size:1.08em;margin-bottom:0em}}@media (min-width: 1200px){#secondary_column .wysiwyg_content ul.image_text_list .image_text_container .content_title,#secondary_column .wysiwyg_content ul.image_text_sublist .image_text_container .content_title,#secondary_column .wysiwyg_content ul.small_image_text_list .image_text_container .content_title{font-size:1.14em;margin-bottom:0em}}.wysiwyg_content ul.image_text_list .image_text_container .content_title a,.wysiwyg_content ul.image_text_sublist .image_text_container .content_title a,.wysiwyg_content ul.small_image_text_list .image_text_container .content_title a{color:black}.wysiwyg_content ul.image_text_list .image_text_container .article_teaser_body,.wysiwyg_content ul.image_text_sublist .image_text_container .article_teaser_body,.wysiwyg_content ul.small_image_text_list .image_text_container .article_teaser_body{font-size:1em}.wysiwyg_content ul.image_text_list .image_text_container .article_teaser_body&gt;:first-child,.wysiwyg_content ul.image_text_sublist .image_text_container .article_teaser_body&gt;:first-child,.wysiwyg_content ul.small_image_text_list .image_text_container .article_teaser_body&gt;:first-child{margin-top:.5em}.wysiwyg_content ul.image_text_list .image_text_container .article_teaser_body&gt;:last-child,.wysiwyg_content ul.image_text_sublist .image_text_container .article_teaser_body&gt;:last-child,.wysiwyg_content ul.small_image_text_list .image_text_container .article_teaser_body&gt;:last-child{margin-bottom:0}#secondary_column .wysiwyg_content ul.image_text_list .image_text_container .article_teaser_body,#secondary_column .wysiwyg_content ul.image_text_sublist .image_text_container .article_teaser_body,#secondary_column .wysiwyg_content ul.small_image_text_list .image_text_container .article_teaser_body{font-size:.9em}#primary_column .wysiwyg_content&gt;ul.image_text_list:first-child li:first-child,#primary_column .wysiwyg_content&gt;ul.image_text_sublist:first-child li:first-child,#primary_column .wysiwyg_content&gt;ul.small_image_text_list:first-child li:first-child{padding-top:0}.wysiwyg_content ul.image_text_sublist{margin-top:0}.wysiwyg_content ul.image_text_sublist li{border-bottom:none}.wysiwyg_content ul.image_text_sublist li:first-child{padding-top:0}@media (min-width: 600px){.wysiwyg_content ul.image_text_sublist{margin-left:9%}}.wysiwyg_content ul.image_text_sublist .image_text_container .img{width:15%}.wysiwyg_content ul.image_text_sublist .image_text_container .content_title{font-size:0.975em;margin-bottom:0em;letter-spacing:-.02em}@media (min-width: 600px){.wysiwyg_content ul.image_text_sublist .image_text_container .content_title{font-size:1.125em;margin-bottom:0em}}@media (min-width: 769px){.wysiwyg_content ul.image_text_sublist .image_text_container .content_title{font-size:1.275em;margin-bottom:0em}}@media (min-width: 1024px){.wysiwyg_content ul.image_text_sublist .image_text_container .content_title{font-size:1.35em;margin-bottom:0em}}@media (min-width: 1200px){.wysiwyg_content ul.image_text_sublist .image_text_container .content_title{font-size:1.425em;margin-bottom:0em}}.wysiwyg_content ul.small_image_text_list .image_text_container .img{width:15%}@media (min-width: 600px){.wysiwyg_content ul.small_image_text_list .image_text_container .list_text_content{width:80%}}.wysiwyg_content ul.small_image_text_list .image_text_container .list_text_content .content_title{font-size:0.975em;margin-bottom:0em;letter-spacing:-.02em}@media (min-width: 600px){.wysiwyg_content ul.small_image_text_list .image_text_container .list_text_content .content_title{font-size:1.125em;margin-bottom:0em}}@media (min-width: 769px){.wysiwyg_content ul.small_image_text_list .image_text_container .list_text_content .content_title{font-size:1.275em;margin-bottom:0em}}@media (min-width: 1024px){.wysiwyg_content ul.small_image_text_list .image_text_container .list_text_content .content_title{font-size:1.35em;margin-bottom:0em}}@media (min-width: 1200px){.wysiwyg_content ul.small_image_text_list .image_text_container .list_text_content .content_title{font-size:1.425em;margin-bottom:0em}}.wysiwyg_content .pagination{height:40px}.wysiwyg_content .pagination .previous{float:left}.wysiwyg_content .pagination .next{float:right}.wysiwyg_content .content_grid{margin:1.5em 0}.wysiwyg_content .content_grid:after{content:"";display:table;clear:both}.wysiwyg_content .content_grid .slide{margin-bottom:1.69492%;width:49.15254%;float:left}.wysiwyg_content .content_grid .slide:nth-child(2n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}.wysiwyg_content .content_grid .slide:nth-child(2n+2){margin-left:50.84746%;margin-right:-100%;clear:none}@media (min-width: 769px){.wysiwyg_content .content_grid .slide{width:23.72881%;float:left}.wysiwyg_content .content_grid .slide:nth-child(4n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}.wysiwyg_content .content_grid .slide:nth-child(4n+2){margin-left:25.42373%;margin-right:-100%;clear:none}.wysiwyg_content .content_grid .slide:nth-child(4n+3){margin-left:50.84746%;margin-right:-100%;clear:none}.wysiwyg_content .content_grid .slide:nth-child(4n+4){margin-left:76.27119%;margin-right:-100%;clear:none}}@media (min-width: 600px){.wysiwyg_content .main_area_sitemap .sitemap .grid_layout{width:100%}}.wysiwyg_content .main_area_sitemap .sitemap_directory{overflow:hidden;*zoom:1}.wysiwyg_content .main_area_sitemap .sitemap_title{text-transform:capitalize}.wysiwyg_content .main_area_sitemap .sitemap_block{text-align:center;width:100%}@media (min-width: 600px){.wysiwyg_content .main_area_sitemap .sitemap_block{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;width:25%;float:left;padding-left:0.83333%;padding-right:0.83333%;text-align:left}}@media (min-width: 600px){.wysiwyg_content .main_area_sitemap .subnav li{padding-left:1em;text-indent:-1em;margin:.1em 0}}.tooltipsy{background-color:rgba(250,250,250,0.8);font-size:.8em;padding:.4em .7em;color:#000;border-radius:6px;z-index:10;border:1px solid #e4e9ef}#main_container form.gsc-search-box{padding:0}#main_container form.gsc-search-box td.gsc-input{padding:0}#main_container.placeholder{-webkit-font-smoothing:antialiased}#main_container:-moz-placeholder{-webkit-font-smoothing:antialiased}#main_container::-moz-placeholder{-webkit-font-smoothing:antialiased}#main_container::-webkit-input-placeholder{-webkit-font-smoothing:antialiased}#main_container .gsc-tabsArea{border-color:#4b6a8d}#main_container .gsc-tabsArea&gt;div{overflow:hidden;position:relative;bottom:-2px}#main_container .gsc-tabsArea .gsc-tabhInactive{border-bottom:1px solid #4b6a8d}#main_container .gsc-tabsArea .gsc-tabhActive{border-color:#4b6a8d;border-bottom:none}#main_container .gcsc-branding{display:none}#main_container .gsc-control-cse table{margin:0}#main_container .gsc-input-box{height:auto;border-radius:6px;border-color:#B3BEC8;height:38px}#main_container .gsc-input-box .gsib_a{padding-top:9px;vertical-align:top}#main_container .gsc-input-box .gsib_b{padding-top:8px}#main_container .gsc-input-box .gsib_b a:hover{border-bottom:none}#main_container input.gsc-input{padding:12px 0 0 0;font-size:16px}#main_container td.gsc-search-button{padding-left:9px}#main_container input.gsc-search-button{border-radius:6px;height:38px;color:white;font-size:16px;font-weight:500;text-transform:uppercase;background:#4b6a8d url("https://www.jpl.nasa.gov/assets/images/search_icon.png") no-repeat center}#main_container input.gsc-search-button:hover{background-color:#6083aa}#main_container .gsc-selected-option-container{width:auto !important;max-width:none}#main_container td.gsc-clear-button{padding-left:4px}#main_container .cse .gsc-control-cse,#main_container .gsc-control-cse{padding:0}#main_container td.gsc-result-info-container{padding-left:0}#main_container .gs-no-results-result .gs-snippet,#main_container .gs-error-result .gs-snippet{padding:5px 0;margin:5px 0;border:none;background-color:transparent}#main_container .gsc-webResult.gsc-results{margin-top:0px}#main_container table.gsc-table-result{margin-top:13px}#main_container div.gsc-webResult.gsc-result{border-bottom:1px solid #CFD7E1;padding-bottom:16px;padding-top:16px;padding-left:0;margin-bottom:0px;margin-top:0px}#main_container td.gsc-table-cell-snippet-close{padding:0}#main_container div.gs-title{padding:0;height:auto;line-height:1.4em;text-decoration:none}#main_container .gsc-thumbnail-inside,#main_container .gsc-url-top{padding:0}#main_container td.gsc-table-cell-thumbnail{padding-top:3px}#main_container .gs-result a.gs-title,#main_container .gs-result a.gs-title b{color:#388FDA;text-decoration:none;font-weight:600;letter-spacing:-.035em;height:auto;padding:0}@media (min-width: 600px){#main_container .gs-result a.gs-title,#main_container .gs-result a.gs-title b{font-size:18px}}@media (min-width: 769px){#main_container .gs-result a.gs-title,#main_container .gs-result a.gs-title b{font-size:20px}}#main_container a.gs-title:hover{color:#115FA3}#main_container a.gs-title:hover b{color:#115FA3}#main_container .gs-webResult .gs-snippet,#main_container .gs-imageResult .gs-snippet,#main_container .gs-fileFormatType{color:#333;line-height:1.4em}@media (min-width: 1024px){#main_container .gs-webResult .gs-snippet,#main_container .gs-imageResult .gs-snippet,#main_container .gs-fileFormatType{font-size:15px}}#main_container .gs-webResult div.gs-visibleUrl,#main_container .gs-imageResult div.gs-visibleUrl{color:#888}#main_container .gsc-table-cell-thumbnail{padding:0 6px 0 0}@media (min-width: 600px){#main_container .gsc-table-cell-thumbnail{padding:0 12px 0 0}}@media (min-width: 1024px){#main_container .gsc-table-cell-thumbnail{padding:0 16px 0 0}}#main_container .gs-web-image-box{width:100px}@media (min-width: 600px){#main_container .gs-web-image-box{padding:0;width:125px}}#main_container img.gs-image,#main_container .gs-promotion-image-box img.gs-promotion-image{border:none;width:100%;height:auto;max-width:none;max-height:none}#main_container a.gs-image{display:block}#main_container .gsc-results .gsc-cursor-box{padding-top:2px}#main_container .gsc-results .gsc-cursor-box .gsc-cursor-page{color:#388FDA;font-size:17px}#main_container .gsc-results .gsc-cursor-box .gsc-cursor-current-page{color:#333;background-color:transparent;text-shadow:none;padding:0}#main_container .gsc-adBlock{display:none !important}#search article{overflow:visible}
      </style>
      <style data-href="/assets/stylesheets/print.css" media="print">
       .print_only{display:block}.print_logo{position:absolute;top:0;left:0}div#site_body{padding-top:3em}.site_header_area{top:0;position:absolute}.site_header_area.fixed{position:absolute !important}.site_header_area .brand1,.site_header_area .brand2{display:none}.content_page.module{padding-top:0}#missions_detail .content_page.module{padding-top:2em}.header_mask{height:30px}.custom_banner_container{height:68px}.custom_banner_container img{display:none}.custom_banner_container .banner_header_overlay{display:none}a[href]:after{content:""}.definition_teaser{color:white !important}.triple_teaser .column{width:31%;float:left}.triple_teaser .column+.column{margin-left:1%}#home .homepage_site_teaser .text_col{width:58%;float:left}#home .homepage_site_teaser .img_col{display:block !important;width:40%;float:right}#home .homepage_site_teaser .img_col img{display:block;float:right}#home .site_header_area{position:relative}.module.vital_signs{overflow:hidden;height:600px !important}.homepage_carousel .master-slider{height:auto !important;min-height:1px}.homepage_carousel #vital_signs_modal{height:auto !important;position:relative !important}.homepage_carousel .ms-container{display:none !important}#vital_signs_modal .left_col{width:40%;float:left}#vital_signs_modal .right_col{width:40%;float:right}.vital_signs_menu{margin-top:3em;border:1px solid black;border-width:1px 0}#site_footer .upper_footer,#site_footer .sitemap{display:none}#site_footer .lower_footer .nav_container{display:none}.content_page .main_feature .master-slider{overflow:hidden;text-align:center}.primary_media_feature .carousel_container{display:none}.wysiwyg_content blockquote{border:none}.content_page.module{padding-top:0}#primary_column{width:60%;float:left;overflow:hidden;position:relative;display:block}#secondary_column{width:32%;float:right;position:relative;font-size:80%}.grid_view .module_title{display:block}#fancybox-lock,.fancybox-overlay{display:none}.view_selectors{display:none}.multi_teaser,.teasers_module,.multimedia_teaser,.filter_bar,.tertiary_nav_container,.secondary_nav_mobile,.carousel_teaser,.image_of_the_day{display:none}
      </style>
      <script async="" src="https://www.google-analytics.com/analytics.js">
      </script>
      <script src="/assets/javascripts/public_manifest.js" type="text/javascript">
      </script>
      <style type="text/css">
      </style>
      <style>
      </style>
      <script src="/assets/javascripts/vendor/jquery.fancybox.js" type="text/javascript">
      </script>
      <script src="/assets/javascripts/vendor/jquery.fancybox-thumbs.js" type="text/javascript">
      </script>
      <style type="text/css">
       .fancybox-margin{margin-right:17px;}
      </style>
      <style type="text/css">
       .at-icon{fill:#fff;border:0}.at-icon-wrapper{display:inline-block;overflow:hidden}a .at-icon-wrapper{cursor:pointer}.at-rounded,.at-rounded-element .at-icon-wrapper{border-radius:12%}.at-circular,.at-circular-element .at-icon-wrapper{border-radius:50%}.addthis_32x32_style .at-icon{width:2pc;height:2pc}.addthis_24x24_style .at-icon{width:24px;height:24px}.addthis_20x20_style .at-icon{width:20px;height:20px}.addthis_16x16_style .at-icon{width:1pc;height:1pc}#at16lb{display:none;position:absolute;top:0;left:0;width:100%;height:100%;z-index:1001;background-color:#000;opacity:.001}#at_complete,#at_error,#at_share,#at_success{position:static!important}.at15dn{display:none}#at15s,#at16p,#at16p form input,#at16p label,#at16p textarea,#at_share .at_item{font-family:arial,helvetica,tahoma,verdana,sans-serif!important;font-size:9pt!important;outline-style:none;outline-width:0;line-height:1em}* html #at15s.mmborder{position:absolute!important}#at15s.mmborder{position:fixed!important;width:250px!important}#at15s{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtJREFUeNpiZGBgaGAgAjAxEAlGFVJHIUCAAQDcngCUgqGMqwAAAABJRU5ErkJggg==);float:none;line-height:1em;margin:0;overflow:visible;padding:5px;text-align:left;position:absolute}#at15s a,#at15s span{outline:0;direction:ltr;text-transform:none}#at15s .at-label{margin-left:5px}#at15s .at-icon-wrapper{width:1pc;height:1pc;vertical-align:middle}#at15s .at-icon{width:1pc;height:1pc}.at4-icon{display:inline-block;background-repeat:no-repeat;background-position:top left;margin:0;overflow:hidden;cursor:pointer}.addthis_16x16_style .at4-icon,.addthis_default_style .at4-icon,.at4-icon,.at-16x16{width:1pc;height:1pc;line-height:1pc;background-size:1pc!important}.addthis_32x32_style .at4-icon,.at-32x32{width:2pc;height:2pc;line-height:2pc;background-size:2pc!important}.addthis_24x24_style .at4-icon,.at-24x24{width:24px;height:24px;line-height:24px;background-size:24px!important}.addthis_20x20_style .at4-icon,.at-20x20{width:20px;height:20px;line-height:20px;background-size:20px!important}.at4-icon.circular,.circular .at4-icon,.circular.aticon{border-radius:50%}.at4-icon.rounded,.rounded .at4-icon{border-radius:4px}.at4-icon-left{float:left}#at15s .at4-icon{text-indent:20px;padding:0;overflow:visible;white-space:nowrap;background-size:1pc;width:1pc;height:1pc;background-position:top left;display:inline-block;line-height:1pc}.addthis_vertical_style .at4-icon,.at4-follow-container .at4-icon{margin-right:5px}html&gt;body #at15s{width:250px!important}#at15s.atm{background:none!important;padding:0!important;width:10pc!important}#at15s_inner{background:#fff;border:1px solid #fff;margin:0}#at15s_head{position:relative;background:#f2f2f2;padding:4px;cursor:default;border-bottom:1px solid #e5e5e5}.at15s_head_success{background:#cafd99!important;border-bottom:1px solid #a9d582!important}.at15s_head_success a,.at15s_head_success span{color:#000!important;text-decoration:none}#at15s_brand,#at15sptx,#at16_brand{position:absolute}#at15s_brand{top:4px;right:4px}.at15s_brandx{right:20px!important}a#at15sptx{top:4px;right:4px;text-decoration:none;color:#4c4c4c;font-weight:700}#at15sptx:hover{text-decoration:underline}#at16_brand{top:5px;right:30px;cursor:default}#at_hover{padding:4px}#at_hover .at_item,#at_share .at_item{background:#fff!important;float:left!important;color:#4c4c4c!important}#at_share .at_item .at-icon-wrapper{margin-right:5px}#at_hover .at_bold{font-weight:700;color:#000!important}#at_hover .at_item{width:7pc!important;padding:2px 3px!important;margin:1px;text-decoration:none!important}#at_hover .at_item.athov,#at_hover .at_item:focus,#at_hover .at_item:hover{margin:0!important}#at_hover .at_item.athov,#at_hover .at_item:focus,#at_hover .at_item:hover,#at_share .at_item.athov,#at_share .at_item:hover{background:#f2f2f2!important;border:1px solid #e5e5e5;color:#000!important;text-decoration:none}.ipad #at_hover .at_item:focus{background:#fff!important;border:1px solid #fff}.at15t{display:block!important;height:1pc!important;line-height:1pc!important;padding-left:20px!important;background-position:0 0;text-align:left}.addthis_button,.at15t{cursor:pointer}.addthis_toolbox a.at300b,.addthis_toolbox a.at300m{width:auto}.addthis_toolbox a{margin-bottom:5px;line-height:initial}.addthis_toolbox.addthis_vertical_style{width:200px}.addthis_button_facebook_like .fb_iframe_widget{line-height:100%}.addthis_button_facebook_like iframe.fb_iframe_widget_lift{max-width:none}.addthis_toolbox a.addthis_button_counter,.addthis_toolbox a.addthis_button_facebook_like,.addthis_toolbox a.addthis_button_facebook_send,.addthis_toolbox a.addthis_button_facebook_share,.addthis_toolbox a.addthis_button_foursquare,.addthis_toolbox a.addthis_button_google_plusone,.addthis_toolbox a.addthis_button_linkedin_counter,.addthis_toolbox a.addthis_button_pinterest_pinit,.addthis_toolbox a.addthis_button_stumbleupon_badge,.addthis_toolbox a.addthis_button_tweet{display:inline-block}.at-share-tbx-element .google_plusone_iframe_widget&gt;span&gt;div{vertical-align:top!important}.addthis_toolbox span.addthis_follow_label{display:none}.addthis_toolbox.addthis_vertical_style span.addthis_follow_label{display:block;white-space:nowrap}.addthis_toolbox.addthis_vertical_style a{display:block}.addthis_toolbox.addthis_vertical_style.addthis_32x32_style a{line-height:2pc;height:2pc}.addthis_toolbox.addthis_vertical_style .at300bs{margin-right:4px;float:left}.addthis_toolbox.addthis_20x20_style span{line-height:20px}.addthis_toolbox.addthis_32x32_style span{line-height:2pc}.addthis_toolbox.addthis_pill_combo_style .addthis_button_compact .at15t_compact,.addthis_toolbox.addthis_pill_combo_style a{float:left}.addthis_toolbox.addthis_pill_combo_style a.addthis_button_tweet{margin-top:-2px}.addthis_toolbox.addthis_pill_combo_style .addthis_button_compact .at15t_compact{margin-right:4px}.addthis_default_style .addthis_separator{margin:0 5px;display:inline}div.atclear{clear:both}.addthis_default_style .addthis_separator,.addthis_default_style .at4-icon,.addthis_default_style .at300b,.addthis_default_style .at300bo,.addthis_default_style .at300bs,.addthis_default_style .at300m{float:left}.at300b img,.at300bo img{border:0}a.at300b .at4-icon,a.at300m .at4-icon{display:block}.addthis_default_style .at300b,.addthis_default_style .at300bo,.addthis_default_style .at300m{padding:0 2px}.at300b,.at300bo,.at300bs,.at300m{cursor:pointer}.addthis_button_facebook_like.at300b:hover,.addthis_button_facebook_like.at300bs:hover,.addthis_button_facebook_send.at300b:hover,.addthis_button_facebook_send.at300bs:hover{opacity:1}.addthis_20x20_style .at15t,.addthis_20x20_style .at300bs{overflow:hidden;display:block;height:20px!important;width:20px!important;line-height:20px!important}.addthis_32x32_style .at15t,.addthis_32x32_style .at300bs{overflow:hidden;display:block;height:2pc!important;width:2pc!important;line-height:2pc!important}.at300bs{overflow:hidden;display:block;background-position:0 0;height:1pc;width:1pc;line-height:1pc!important}.addthis_default_style .at15t_compact,.addthis_default_style .at15t_expanded{margin-right:4px}#at_share .at_item{width:123px!important;padding:4px;margin-right:2px;border:1px solid #fff}#at16p{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtJREFUeNpiZGBgaGAgAjAxEAlGFVJHIUCAAQDcngCUgqGMqwAAAABJRU5ErkJggg==);z-index:10000001;position:absolute;top:50%;left:50%;width:300px;padding:10px;margin:0 auto;margin-top:-185px;margin-left:-155px;font-family:arial,helvetica,tahoma,verdana,sans-serif;font-size:9pt;color:#5e5e5e}#at_share{margin:0;padding:0}#at16pt{position:relative;background:#f2f2f2;height:13px;padding:5px 10px}#at16pt a,#at16pt h4{font-weight:700}#at16pt h4{display:inline;margin:0;padding:0;font-size:9pt;color:#4c4c4c;cursor:default}#at16pt a{position:absolute;top:5px;right:10px;color:#4c4c4c;text-decoration:none;padding:2px}#at15sptx:focus,#at16pt a:focus{outline:thin dotted}#at15s #at16pf a{top:1px}#_atssh{width:1px!important;height:1px!important;border:0!important}.atm{width:10pc!important;padding:0;margin:0;line-height:9pt;letter-spacing:normal;font-family:arial,helvetica,tahoma,verdana,sans-serif;font-size:9pt;color:#444;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtJREFUeNpiZGBgaGAgAjAxEAlGFVJHIUCAAQDcngCUgqGMqwAAAABJRU5ErkJggg==);padding:4px}.atm-f{text-align:right;border-top:1px solid #ddd;padding:5px 8px}.atm-i{background:#fff;border:1px solid #d5d6d6;padding:0;margin:0;box-shadow:1px 1px 5px rgba(0,0,0,.15)}.atm-s{margin:0!important;padding:0!important}.atm-s a:focus{border:transparent;outline:0;transition:none}#at_hover.atm-s a,.atm-s a{display:block;text-decoration:none;padding:4px 10px;color:#235dab!important;font-weight:400;font-style:normal;transition:none}#at_hover.atm-s .at_bold{color:#235dab!important}#at_hover.atm-s a:hover,.atm-s a:hover{background:#2095f0;text-decoration:none;color:#fff!important}#at_hover.atm-s .at_bold{font-weight:700}#at_hover.atm-s a:hover .at_bold{color:#fff!important}.atm-s a .at-label{vertical-align:middle;margin-left:5px;direction:ltr}.at_PinItButton{display:block;width:40px;height:20px;padding:0;margin:0;background-image:url(//s7.addthis.com/static/t00/pinit00.png);background-repeat:no-repeat}.at_PinItButton:hover{background-position:0 -20px}.addthis_toolbox .addthis_button_pinterest_pinit{position:relative}.at-share-tbx-element .fb_iframe_widget span{vertical-align:baseline!important}#at16pf{height:auto;text-align:right;padding:4px 8px}.at-privacy-info{position:absolute;left:7px;bottom:7px;cursor:pointer;text-decoration:none;font-family:helvetica,arial,sans-serif;font-size:10px;line-height:9pt;letter-spacing:.2px;color:#666}.at-privacy-info:hover{color:#000}.body .wsb-social-share .wsb-social-share-button-vert{padding-top:0;padding-bottom:0}.body .wsb-social-share.addthis_counter_style .addthis_button_tweet.wsb-social-share-button{padding-top:40px}.body .wsb-social-share.addthis_counter_style .addthis_button_google_plusone.wsb-social-share-button{padding-top:0}.body .wsb-social-share.addthis_counter_style .addthis_button_facebook_like.wsb-social-share-button{padding-top:21px}@media print{#at4-follow,#at4-share,#at4-thankyou,#at4-whatsnext,#at4m-mobile,#at15s,.at4,.at4-recommended{display:none!important}}@media screen and (max-width:400px){.at4win{width:100%}}@media screen and (max-height:700px) and (max-width:400px){.at4-thankyou-inner .at4-recommended-container{height:122px;overflow:hidden}.at4-thankyou-inner .at4-recommended .at4-recommended-item:first-child{border-bottom:1px solid #c5c5c5}}
      </style>
      <style type="text/css">
       .at-branding-logo{font-family:helvetica,arial,sans-serif;text-decoration:none;font-size:10px;display:inline-block;margin:2px 0;letter-spacing:.2px}.at-branding-logo .at-branding-icon{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRF////+GlNUkcc1QAAAB1JREFUeNpiYIQDBjQmAwMmkwEM0JnY1WIxFyDAABGeAFEudiZsAAAAAElFTkSuQmCC")}.at-branding-logo .at-branding-icon,.at-branding-logo .at-privacy-icon{display:inline-block;height:10px;width:10px;margin-left:4px;margin-right:3px;margin-bottom:-1px;background-repeat:no-repeat}.at-branding-logo .at-privacy-icon{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAKCAMAAABR24SMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABhQTFRF8fr9ot/xXcfn2/P5AKva////////AKTWodjhjAAAAAd0Uk5T////////ABpLA0YAAAA6SURBVHjaJMzBDQAwCAJAQaj7b9xifV0kUKJ9ciWxlzWEWI5gMF65KUTv0VKkjVeTerqE/x7+9BVgAEXbAWI8QDcfAAAAAElFTkSuQmCC")}.at-branding-logo span{text-decoration:none}.at-branding-logo .at-branding-addthis,.at-branding-logo .at-branding-powered-by{color:#666}.at-branding-logo .at-branding-addthis:hover{color:#333}.at-cv-with-image .at-branding-addthis,.at-cv-with-image .at-branding-addthis:hover{color:#fff}a.at-branding-logo:visited{color:initial}.at-branding-info{display:inline-block;padding:0 5px;color:#666;border:1px solid #666;border-radius:50%;font-size:10px;line-height:9pt;opacity:.7;transition:all .3s ease;text-decoration:none}.at-branding-info span{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.at-branding-info:before{content:'i';font-family:Times New Roman}.at-branding-info:hover{color:#0780df;border-color:#0780df}
      </style>
      <script async="" charset="utf-8" src="//s7.addthis.com/static/155.341d8bbafea741725b1c.js" type="text/javascript">
      </script>
      <script async="" charset="utf-8" src="//s7.addthis.com/static/152.ee3c08cb7372f3351376.js" type="text/javascript">
      </script>
     </head>
     <body class="dark_background logged_out mobile_menu" id="images" style="">
      <!--[if lt IE 9]>
          <div class='browsehappy' style='font-size: 30px; color: white; position:absolute; top: 0; margin: 0; height: 3000px; width: 100%; background: #000; z-index: 10000; padding: 5%;'>
            You are using an
            <strong>outdated</strong>
            browser. Please
            <a href='http://browsehappy.com/'>click here</a>
            to upgrade or change your browser.
          </div>
        <![endif]-->
      <div id="main_container">
       <div id="site_body">
        <div class="site_header_area">
         <header class="site_header">
          <div class="brand_area">
           <div class="brand1">
            <a class="nasa_logo" href="http://www.nasa.gov" title="NASA">
             NASA
            </a>
           </div>
           <div class="brand2">
            <div class="jpl_logo">
             <a href="//www.jpl.nasa.gov/" id="jpl_logo" title="Jet Propulsion Laboratory">
              Jet Propulsion Laboratory
             </a>
            </div>
            <div class="caltech_logo">
             <a href="http://www.caltech.edu/" id="caltech_logo" target="_blank" title="California Institute of Technology">
              California Institute of Technology
             </a>
            </div>
           </div>
           <img alt="" class="print_only print_logo" src="/assets/images/logo_nasa_trio_black@2x.png"/>
          </div>
          <a class="visuallyhidden focusable" href="#main">
           Skip Navigation
          </a>
          <div class="nav_area">
           <a class="menu_button" href="javascript:void(0);" id="menu_button" title="menu button">
            <span class="menu_icon">
             menu and search
            </span>
           </a>
          </div>
         </header>
        </div>
        <div class="main_nav_overlay">
         <div class="modal_menu">
          <header class="site_header clearfix">
           <div class="brand_area">
            <div class="brand1">
             <a class="nasa_logo" href="http://www.nasa.gov" title="">
             </a>
            </div>
            <div class="brand2">
             <div class="jpl_logo">
              <a class="" href="" id="jpl_logo" title="">
               Jet Propulsion Laboratory
              </a>
             </div>
             <div class="caltech_logo">
              <a class="" href="" id="caltech_logo" title="">
               California Institute of Technology
              </a>
             </div>
            </div>
            <img alt="" class="print_only print_logo" src="/assets/images/logo_nasa_trio_black@2x.png"/>
           </div>
           <a class="modal_close" id="modal_close" title="close menu">
            close menu
           </a>
           <div class="nav_area">
            <a class="menu_button modal_close" href="javascript:void(0);" id="menu_button" title="menu icon">
             <span class="menu_icon">
              menu
             </span>
            </a>
           </div>
          </header>
          <section class="navigation_area">
           <div class="grid_layout">
            <div class="directory">
             <form action="/search.php" class="overlay_search top_search">
              <input class="search_field" name="q" onblur="this.placeholder = 'search'" onfocus="this.placeholder = ''" placeholder="search" type="text" value=""/>
              <input class="search_submit" type="submit" value=""/>
             </form>
             <div class="nav_item">
              <div class="arrow_box">
               <span class="arrow_down">
               </span>
              </div>
              <h3 class="nav_title">
               <a href="/about">
                about JPL
               </a>
              </h3>
              <ul class="subnav">
               <li>
                <a href="/about">
                 about JPL
                </a>
               </li>
               <li>
                <a href="/about/exec.php">
                 executive council
                </a>
               </li>
               <li>
                <a href="/about/history.php">
                 history
                </a>
               </li>
               <li>
                <a href="/about/reports.php">
                 annual reports
                </a>
               </li>
               <li>
                <a href="/contact_JPL.php">
                 contact us
                </a>
               </li>
               <li>
                <a href="/opportunities/">
                 opportunities
                </a>
               </li>
              </ul>
             </div>
             <div class="gradient_line">
             </div>
             <div class="nav_item">
              <div class="arrow_box">
               <span class="arrow_down">
               </span>
              </div>
              <h3 class="nav_title">
               <a href="/events">
                public events
               </a>
              </h3>
              <ul class="subnav">
               <li>
                <a href="/events">
                 overview
                </a>
               </li>
               <li>
                <a href="/events/tours/views">
                 tours
                </a>
               </li>
               <li>
                <a href="/events/lectures.php">
                 lecture series
                </a>
               </li>
               <li>
                <a href="/events/speakers-bureau.php">
                 speakers bureau
                </a>
               </li>
               <li>
                <a href="/events/team-competitions.php">
                 team competitions
                </a>
               </li>
               <li>
                <a href="/events/special-events.php">
                 special events
                </a>
               </li>
              </ul>
             </div>
             <div class="gradient_line">
             </div>
             <div class="nav_item">
              <div class="arrow_box">
               <span class="arrow_down">
               </span>
              </div>
              <h3 class="nav_title">
               <a href="/edu/">
                education
               </a>
              </h3>
              <ul class="subnav">
               <li>
                <a href="/edu/intern/">
                 Intern
                </a>
               </li>
               <li>
                <a href="/edu/learn/">
                 Learn
                </a>
               </li>
               <li>
                <a href="/edu/teach/">
                 Teach
                </a>
               </li>
               <li>
                <a href="/edu/news/">
                 News
                </a>
               </li>
               <li>
                <a href="/edu/events/">
                 Events
                </a>
               </li>
              </ul>
             </div>
             <div class="gradient_line">
             </div>
             <div class="nav_item">
              <div class="arrow_box">
               <span class="arrow_down">
               </span>
              </div>
              <h3 class="nav_title">
               <a href="/news">
                news
               </a>
              </h3>
              <ul class="subnav">
               <li>
                <a href="/news">
                 latest news
                </a>
               </li>
               <li>
                <a href="/news/presskits.php">
                 press kits
                </a>
               </li>
               <li>
                <a href="/news/factsheets.php">
                 fact sheets
                </a>
               </li>
               <li>
                <a href="/news/mediainformation.php">
                 media information
                </a>
               </li>
               <li>
                <a href="http://blogs.jpl.nasa.gov">
                 blog
                </a>
               </li>
              </ul>
             </div>
             <div class="gradient_line">
             </div>
             <div class="nav_item">
              <div class="arrow_box">
               <span class="arrow_down">
               </span>
              </div>
              <h3 class="nav_title">
               <a href="/missions/">
                missions
               </a>
              </h3>
              <ul class="subnav">
               <li>
                <a href="/missions/?type=current">
                 current
                </a>
               </li>
               <li>
                <a href="/missions/?type=past">
                 past
                </a>
               </li>
               <li>
                <a href="/missions/?type=future">
                 future
                </a>
               </li>
               <li>
                <a href="/missions/?type=proposed">
                 proposed
                </a>
               </li>
               <li>
                <a href="/missions">
                 all
                </a>
               </li>
              </ul>
             </div>
             <div class="gradient_line">
             </div>
             <div class="nav_item">
              <div class="arrow_box">
               <span class="arrow_down">
               </span>
              </div>
              <h3 class="nav_title">
               <a href="/spaceimages">
                galleries
               </a>
              </h3>
              <ul class="subnav">
               <li>
                <a href="/spaceimages">
                 images
                </a>
               </li>
               <li>
                <a href="/videos">
                 videos
                </a>
               </li>
               <li>
                <a href="/infographics">
                 infographics
                </a>
               </li>
               <li>
                <a href="/multimedia/audio.php">
                 audio
                </a>
               </li>
               <li>
                <a href="/apps/">
                 apps
                </a>
               </li>
              </ul>
             </div>
             <div class="gradient_line">
             </div>
             <div class="nav_item centered">
              <h3 class="nav_title">
               <a href="/social">
                Follow JPL
               </a>
              </h3>
              <div class="social_icons">
               <!-- AddThis Button BEGIN -->
               <div class="addthis_toolbox addthis_default_style addthis_32x32_style">
                <a addthis:userid="NASAJPL" class="addthis_button_facebook_follow icon at300b" href="http://www.facebook.com/NASAJPL" target="_blank" title="Follow on Facebook">
                 <span class="at-icon-wrapper" style="background-color: rgb(59, 89, 152); line-height: 32px; height: 32px; width: 32px;">
                  <svg alt="Facebook" aria-labelledby="at-svg-facebook-1" class="at-icon at-icon-facebook" role="img" style="width: 32px; height: 32px;" title="Facebook" version="1.1" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                   <title id="at-svg-facebook-1" xmlns="http://www.w3.org/1999/xhtml">
                    Facebook
                   </title>
                   <g>
                    <path d="M22 5.16c-.406-.054-1.806-.16-3.43-.16-3.4 0-5.733 1.825-5.733 5.17v2.882H9v3.913h3.837V27h4.604V16.965h3.823l.587-3.913h-4.41v-2.5c0-1.123.347-1.903 2.198-1.903H22V5.16z" fill-rule="evenodd">
                    </path>
                   </g>
                  </svg>
                 </span>
                 <span class="addthis_follow_label">
                  Facebook
                 </span>
                </a>
                <a addthis:userid="NASAJPL" class="addthis_button_twitter_follow icon at300b" href="//twitter.com/NASAJPL" target="_blank" title="Follow on Twitter">
                 <span class="at-icon-wrapper" style="background-color: rgb(29, 161, 242); line-height: 32px; height: 32px; width: 32px;">
                  <svg alt="Twitter" aria-labelledby="at-svg-twitter-2" class="at-icon at-icon-twitter" role="img" style="width: 32px; height: 32px;" title="Twitter" version="1.1" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                   <title id="at-svg-twitter-2" xmlns="http://www.w3.org/1999/xhtml">
                    Twitter
                   </title>
                   <g>
                    <path d="M27.996 10.116c-.81.36-1.68.602-2.592.71a4.526 4.526 0 0 0 1.984-2.496 9.037 9.037 0 0 1-2.866 1.095 4.513 4.513 0 0 0-7.69 4.116 12.81 12.81 0 0 1-9.3-4.715 4.49 4.49 0 0 0-.612 2.27 4.51 4.51 0 0 0 2.008 3.755 4.495 4.495 0 0 1-2.044-.564v.057a4.515 4.515 0 0 0 3.62 4.425 4.52 4.52 0 0 1-2.04.077 4.517 4.517 0 0 0 4.217 3.134 9.055 9.055 0 0 1-5.604 1.93A9.18 9.18 0 0 1 6 23.85a12.773 12.773 0 0 0 6.918 2.027c8.3 0 12.84-6.876 12.84-12.84 0-.195-.005-.39-.014-.583a9.172 9.172 0 0 0 2.252-2.336" fill-rule="evenodd">
                    </path>
                   </g>
                  </svg>
                 </span>
                 <span class="addthis_follow_label">
                  Twitter
                 </span>
                </a>
                <a addthis:userid="JPLnews" class="addthis_button_youtube_follow icon at300b" href="http://www.youtube.com/user/JPLnews?sub_confirmation=1" target="_blank" title="Follow on YouTube">
                 <span class="at-icon-wrapper" style="background-color: rgb(205, 32, 31); line-height: 32px; height: 32px; width: 32px;">
                  <svg alt="YouTube" aria-labelledby="at-svg-youtube-3" class="at-icon at-icon-youtube" role="img" style="width: 32px; height: 32px;" title="YouTube" version="1.1" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                   <title id="at-svg-youtube-3" xmlns="http://www.w3.org/1999/xhtml">
                    YouTube
                   </title>
                   <g>
                    <path d="M13.73 18.974V12.57l5.945 3.212-5.944 3.192zm12.18-9.778c-.837-.908-1.775-.912-2.205-.965C20.625 8 16.007 8 16.007 8c-.01 0-4.628 0-7.708.23-.43.054-1.368.058-2.205.966-.66.692-.875 2.263-.875 2.263S5 13.303 5 15.15v1.728c0 1.845.22 3.69.22 3.69s.215 1.57.875 2.262c.837.908 1.936.88 2.426.975 1.76.175 7.482.23 7.482.15 0 .08 4.624.072 7.703-.16.43-.052 1.368-.057 2.205-.965.66-.69.875-2.262.875-2.262s.22-1.845.22-3.69v-1.73c0-1.844-.22-3.69-.22-3.69s-.215-1.57-.875-2.262z" fill-rule="evenodd">
                    </path>
                   </g>
                  </svg>
                 </span>
                 <span class="addthis_follow_label">
                  YouTube
                 </span>
                </a>
                <a addthis:userid="nasajpl" class="addthis_button_instagram_follow icon at300b" href="http://instagram.com/nasajpl" target="_blank" title="Follow on Instagram">
                 <span class="at-icon-wrapper" style="background-color: rgb(224, 53, 102); line-height: 32px; height: 32px; width: 32px;">
                  <svg alt="Instagram" aria-labelledby="at-svg-instagram-4" class="at-icon at-icon-instagram" role="img" style="width: 32px; height: 32px;" title="Instagram" version="1.1" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                   <title id="at-svg-instagram-4" xmlns="http://www.w3.org/1999/xhtml">
                    Instagram
                   </title>
                   <g>
                    <path d="M16 5c-2.987 0-3.362.013-4.535.066-1.17.054-1.97.24-2.67.512a5.392 5.392 0 0 0-1.95 1.268 5.392 5.392 0 0 0-1.267 1.95c-.272.698-.458 1.498-.512 2.67C5.013 12.637 5 13.012 5 16s.013 3.362.066 4.535c.054 1.17.24 1.97.512 2.67.28.724.657 1.337 1.268 1.95a5.392 5.392 0 0 0 1.95 1.268c.698.27 1.498.457 2.67.51 1.172.054 1.547.067 4.534.067s3.362-.013 4.535-.066c1.17-.054 1.97-.24 2.67-.51a5.392 5.392 0 0 0 1.95-1.27 5.392 5.392 0 0 0 1.268-1.95c.27-.698.457-1.498.51-2.67.054-1.172.067-1.547.067-4.534s-.013-3.362-.066-4.535c-.054-1.17-.24-1.97-.51-2.67a5.392 5.392 0 0 0-1.27-1.95 5.392 5.392 0 0 0-1.95-1.267c-.698-.272-1.498-.458-2.67-.512C19.363 5.013 18.988 5 16 5zm0 1.982c2.937 0 3.285.01 4.445.064 1.072.05 1.655.228 2.042.38.514.198.88.437 1.265.822.385.385.624.75.823 1.265.15.387.33.97.38 2.042.052 1.16.063 1.508.063 4.445 0 2.937-.01 3.285-.064 4.445-.05 1.072-.228 1.655-.38 2.042-.198.514-.437.88-.822 1.265-.385.385-.75.624-1.265.823-.387.15-.97.33-2.042.38-1.16.052-1.508.063-4.445.063-2.937 0-3.285-.01-4.445-.064-1.072-.05-1.655-.228-2.042-.38-.514-.198-.88-.437-1.265-.822a3.408 3.408 0 0 1-.823-1.265c-.15-.387-.33-.97-.38-2.042-.052-1.16-.063-1.508-.063-4.445 0-2.937.01-3.285.064-4.445.05-1.072.228-1.655.38-2.042.198-.514.437-.88.822-1.265.385-.385.75-.624 1.265-.823.387-.15.97-.33 2.042-.38 1.16-.052 1.508-.063 4.445-.063zm0 12.685a3.667 3.667 0 1 1 0-7.334 3.667 3.667 0 0 1 0 7.334zm0-9.316a5.65 5.65 0 1 0 0 11.3 5.65 5.65 0 0 0 0-11.3zm7.192-.222a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0" fill-rule="evenodd">
                    </path>
                   </g>
                  </svg>
                 </span>
                 <span class="addthis_follow_label">
                  Instagram
                 </span>
                </a>
                <a class="icon all_icon" href="/social">
                 <span>
                  All
                 </span>
                </a>
                <div class="atclear">
                </div>
               </div>
              </div>
             </div>
             <form action="/search.php" class="overlay_search">
              <input class="search_field" name="q" onblur="this.placeholder = 'search'" onfocus="this.placeholder = ''" placeholder="search" type="text" value=""/>
              <input class="search_submit" type="submit" value=""/>
             </form>
            </div>
           </div>
          </section>
         </div>
        </div>
        <a name="main">
        </a>
        <div id="page">
         <!-- END HEADER: "DEFAULT" -->
         <!-- START CONTENT -->
         <section class="centered_text clearfix main_feature primary_media_feature single">
          <div class="carousel_container">
           <div class="carousel_items">
            <article alt="Titan's Northern Lakes: Salt Flats?" class="carousel_item" style="background-image: url('/spaceimages/images/wallpaper/PIA17470-1920x1200.jpg');">
             <div class="default floating_text_area ms-layer">
              <h2 class="category_title">
              </h2>
              <h2 class="brand_title">
               FEATURED IMAGE
              </h2>
              <h1 class="media_feature_title">
               Titan's Northern Lakes: Salt Flats?
              </h1>
              <div class="description">
              </div>
              <footer>
               <a class="button fancybox" data-description="NASA's Cassini spacecraft reveals the differences in the composition of surface materials around hydrocarbon lakes at Titan." data-fancybox-group="images" data-fancybox-href="/spaceimages/images/mediumsize/PIA17470_ip.jpg" data-link="/spaceimages/details.php?id=PIA17470" data-title="Titan's Northern Lakes: Salt Flats?" id="full_image">
                FULL IMAGE
               </a>
              </footer>
             </div>
             <div class="gradient_container_top">
             </div>
             <div class="gradient_container_bottom">
             </div>
            </article>
           </div>
          </div>
         </section>
         <section class="filter_bar module">
          <div class="grid_layout">
           <header>
            <h2 class="module_title_small">
             Mars Images
            </h2>
            <div class="arrow_box">
             <span class="arrow_down">
             </span>
            </div>
           </header>
           <form action="#submit" class="section_search">
            <div class="search_binder">
             <input class="search_field" name="search" onblur="this.placeholder = 'search'" onfocus="this.placeholder = ''" placeholder="search" type="text" value=""/>
             <input class="search_submit" type="submit" value=""/>
            </div>
            <select name="category" onchange="this.form.submit()">
             <option value="">
              All
             </option>
             <option value="featured">
              Featured
             </option>
             <option value="Asteroids and Comets">
              Asteroids and Comets
             </option>
             <option value="Dwarf Planet">
              Dwarf Planet
             </option>
             <option value="Earth">
              Earth
             </option>
             <option value="Ida">
              Ida
             </option>
             <option value="Jupiter">
              Jupiter
             </option>
             <option selected="selected" value="Mars">
              Mars
             </option>
             <option value="Mercury">
              Mercury
             </option>
             <option value="Neptune">
              Neptune
             </option>
             <option value="Saturn">
              Saturn
             </option>
             <option value="Spacecraft and Technology">
              Spacecraft and Technology
             </option>
             <option value="Spacecraft and Telescope">
              Spacecraft and Telescope
             </option>
             <option value="Sun">
              Sun
             </option>
             <option value="Universe">
              Universe
             </option>
             <option value="Uranus">
              Uranus
             </option>
             <option value="Venus">
              Venus
             </option>
            </select>
           </form>
          </div>
         </section>
         <div class="filter_bar_spanner" style="height: 104px;">
         </div>
         <script src="/assets/javascripts/grid_list_page.js" type="text/javascript">
         </script>
         <script>
          function build_image_item(data){
                var html = "&lt;li class=\"slide\"&gt;";
    			html += "&lt;a class='fancybox' data-fancybox-group='images' data-fancybox-href='" + data.images.full.src +"' data-title='" + data.title + "' data-description='" + data.tease + "' data-link='" + data.link + "' data-thumbnail='" + data.images.thumb.src + "'&gt;";
                html +=       "&lt;div class=\"image_and_description_container\"&gt;";
                html +=         "&lt;div class=\"rollover_description\" style=\"word-wrap: break-word;\"&gt;";
                html +=		      "&lt;h3 class=\"release_date\"&gt;"+data.date+"&lt;\/h3&gt;";
    		    html +=		      "&lt;div class=\"item_tease_overlay\"&gt;"+data.title+"&lt;\/div&gt;";
                html +=           "&lt;div class=\"overlay_arrow\"&gt;";
                html +=             "&lt;img alt=\"more arrow\" src=\"/assets/images/overlay-arrow.png\"&gt;";
                html +=           "&lt;\/div&gt;";
                html +=         "&lt;\/div&gt;";
                html +=         "&lt;div class=\"img\"&gt;&lt;img alt=\""+data.images.thumb.alt+"\" class=\"thumb\" src=\""+data.images.thumb.src+"\"&gt;&lt;\/div&gt;";
                html +=         "&lt;div class=\"list_text_content\"&gt;";
                html +=		      "&lt;div class=\"article_teaser_body\"&gt;"+data.date+"&lt;\/div&gt;";
                html +=           "&lt;div class=\"content_title\"&gt;";
                html +=             data.title
                html +=           "&lt;\/div&gt;";
                html +=           "&lt;div class=\"article_teaser_body\"&gt;"
                html +=             data.tease
                html +=           "&lt;\/div&gt;"
                html +=         "&lt;\/div&gt;"
                html +=       "&lt;\/div&gt;"
                html +=  "&lt;\/a&gt;";
                html +=  "&lt;\/li&gt;";
                return html;
            };
    		$(document).ready(function(){
    			$('ul.articles').more_items({"url": "/assets/json/getMore.php?images=true&amp;" + $.param(mb_utils._getQueryParams()), "build_item_fn": build_image_item})
    		});
         </script>
         <section class="grid_gallery module grid_view">
          <div class="grid_layout">
           <header>
            <h2 class="module_title">
             Mars Images
            </h2>
            <div class="view_selectors">
             <a class="nav_item ir list_icon">
              list view
             </a>
             <a class="nav_item ir grid_icon">
              grid view
             </a>
            </div>
           </header>
           <ul class="articles">
            <li class="slide">
             <a class="fancybox" data-description="This image captured by NASA's 2001 Mars Odyssey spacecraft shows a region of Chryse Chaos where the isolated mesas are beginning to be formed. The interconnected channel forms erode, and mesas are created by erosion of the bounding channels." data-fancybox-group="images" data-fancybox-href="/spaceimages/images/largesize/PIA22395_hires.jpg" data-link="/spaceimages/details.php?id=PIA22395" data-thumbnail="/spaceimages/images/wallpaper/PIA22395-640x350.jpg" data-title="Chryse Chaos">
              <div class="image_and_description_container">
               <div class="rollover_description">
                <h3 class="release_date">
                 May 18, 2018
                </h3>
                <div class="item_tease_overlay">
                 Chryse Chaos
                </div>
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <div class="img">
                <img alt="Chryse Chaos" class="thumb" src="/spaceimages/images/wallpaper/PIA22395-640x350.jpg" title="Chryse Chaos"/>
               </div>
               <div class="list_text_content">
                <div class="article_teaser_body">
                 May 18, 2018
                </div>
                <div class="content_title">
                 Chryse Chaos
                </div>
                <div class="article_teaser_body">
                 This image captured by NASA's 2001 Mars Odyssey spacecraft shows a region of Chryse Chaos where the isolated mesas are beginning to be formed. The interconnected channel forms erode, and mesas are created by erosion of the bounding channels.
                </div>
               </div>
              </div>
             </a>
            </li>
            <li class="slide">
             <a class="fancybox" data-description="This image from NASA's 2001 Mars Odyssey spacecraft shows an unnamed crater located in Utopia Planitia. This relatively young crater has a steep inner rim, with floor deposits that originate from the crater rim itself." data-fancybox-group="images" data-fancybox-href="/spaceimages/images/largesize/PIA22394_hires.jpg" data-link="/spaceimages/details.php?id=PIA22394" data-thumbnail="/spaceimages/images/wallpaper/PIA22394-640x350.jpg" data-title="Utopia Planitia Crater">
              <div class="image_and_description_container">
               <div class="rollover_description">
                <h3 class="release_date">
                 May 17, 2018
                </h3>
                <div class="item_tease_overlay">
                 Utopia Planitia Crater
                </div>
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <div class="img">
                <img alt="Utopia Planitia Crater" class="thumb" src="/spaceimages/images/wallpaper/PIA22394-640x350.jpg" title="Utopia Planitia Crater"/>
               </div>
               <div class="list_text_content">
                <div class="article_teaser_body">
                 May 17, 2018
                </div>
                <div class="content_title">
                 Utopia Planitia Crater
                </div>
                <div class="article_teaser_body">
                 This image from NASA's 2001 Mars Odyssey spacecraft shows an unnamed crater located in Utopia Planitia. This relatively young crater has a steep inner rim, with floor deposits that originate from the crater rim itself.
                </div>
               </div>
              </div>
             </a>
            </li>
            <li class="slide">
             <a class="fancybox" data-description="This image from NASA's 2001 Mars Odyssey spacecraft shows Gale Crater on Mars, the home of the Curiosity Rover." data-fancybox-group="images" data-fancybox-href="/spaceimages/images/largesize/PIA22393_hires.jpg" data-link="/spaceimages/details.php?id=PIA22393" data-thumbnail="/spaceimages/images/wallpaper/PIA22393-640x350.jpg" data-title="Gale Crater">
              <div class="image_and_description_container">
               <div class="rollover_description">
                <h3 class="release_date">
                 May 16, 2018
                </h3>
                <div class="item_tease_overlay">
                 Gale Crater
                </div>
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <div class="img">
                <img alt="Gale Crater" class="thumb" src="/spaceimages/images/wallpaper/PIA22393-640x350.jpg" title="Gale Crater"/>
               </div>
               <div class="list_text_content">
                <div class="article_teaser_body">
                 May 16, 2018
                </div>
                <div class="content_title">
                 Gale Crater
                </div>
                <div class="article_teaser_body">
                 This image from NASA's 2001 Mars Odyssey spacecraft shows Gale Crater on Mars, the home of the Curiosity Rover.
                </div>
               </div>
              </div>
             </a>
            </li>
            <li class="slide">
             <a class="fancybox" data-description="This image captured by NASA's 2001 Mars Odyssey spacecraft shows part of Gale Crater. Gale Crater is the home of the Curiosity Rover." data-fancybox-group="images" data-fancybox-href="/spaceimages/images/largesize/PIA22392_hires.jpg" data-link="/spaceimages/details.php?id=PIA22392" data-thumbnail="/spaceimages/images/wallpaper/PIA22392-640x350.jpg" data-title="Gale Crater">
              <div class="image_and_description_container">
               <div class="rollover_description">
                <h3 class="release_date">
                 May 15, 2018
                </h3>
                <div class="item_tease_overlay">
                 Gale Crater
                </div>
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <div class="img">
                <img alt="Gale Crater" class="thumb" src="/spaceimages/images/wallpaper/PIA22392-640x350.jpg" title="Gale Crater"/>
               </div>
               <div class="list_text_content">
                <div class="article_teaser_body">
                 May 15, 2018
                </div>
                <div class="content_title">
                 Gale Crater
                </div>
                <div class="article_teaser_body">
                 This image captured by NASA's 2001 Mars Odyssey spacecraft shows part of Gale Crater. Gale Crater is the home of the Curiosity Rover.
                </div>
               </div>
              </div>
             </a>
            </li>
            <li class="slide">
             <a class="fancybox" data-description="This image from NASA's Mars Reconnaissance Orbiter shows barchan sand dunes, common on Mars often forming vast dune fields within very large (tens to hundreds of km) impact basins. The regions upwind of barchans are usually devoid of sandy bedforms." data-fancybox-group="images" data-fancybox-href="/spaceimages/images/largesize/PIA22456_hires.jpg" data-link="/spaceimages/details.php?id=PIA22456" data-thumbnail="/spaceimages/images/wallpaper/PIA22456-640x350.jpg" data-title="Barchan Pac-Man">
              <div class="image_and_description_container">
               <div class="rollover_description">
                <h3 class="release_date">
                 May 14, 2018
                </h3>
                <div class="item_tease_overlay">
                 Barchan Pac-Man
                </div>
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <div class="img">
                <img alt="Barchan Pac-Man" class="thumb" src="/spaceimages/images/wallpaper/PIA22456-640x350.jpg" title="Barchan Pac-Man"/>
               </div>
               <div class="list_text_content">
                <div class="article_teaser_body">
                 May 14, 2018
                </div>
                <div class="content_title">
                 Barchan Pac-Man
                </div>
                <div class="article_teaser_body">
                 This image from NASA's Mars Reconnaissance Orbiter shows barchan sand dunes, common on Mars often forming vast dune fields within very large (tens to hundreds of km) impact basins. The regions upwind of barchans are usually devoid of sandy bedforms.
                </div>
               </div>
              </div>
             </a>
            </li>
            <li class="slide">
             <a class="fancybox" data-description="This image from NASA's Mars Reconnaissance Orbiter (MRO) shows some of these on the slopes of Nectaris Montes within Coprates Chasma on Mars. Sand dunes in Valles Marineris can be impressive in size, with steep slopes that seem to climb and descend." data-fancybox-group="images" data-fancybox-href="/spaceimages/images/largesize/PIA22455_hires.jpg" data-link="/spaceimages/details.php?id=PIA22455" data-thumbnail="/spaceimages/images/wallpaper/PIA22455-640x350.jpg" data-title="Dunes in Nectaris Montes">
              <div class="image_and_description_container">
               <div class="rollover_description">
                <h3 class="release_date">
                 May 14, 2018
                </h3>
                <div class="item_tease_overlay">
                 Dunes in Nectaris Montes
                </div>
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <div class="img">
                <img alt="Dunes in Nectaris Montes" class="thumb" src="/spaceimages/images/wallpaper/PIA22455-640x350.jpg" title="Dunes in Nectaris Montes"/>
               </div>
               <div class="list_text_content">
                <div class="article_teaser_body">
                 May 14, 2018
                </div>
                <div class="content_title">
                 Dunes in Nectaris Montes
                </div>
                <div class="article_teaser_body">
                 This image from NASA's Mars Reconnaissance Orbiter (MRO) shows some of these on the slopes of Nectaris Montes within Coprates Chasma on Mars. Sand dunes in Valles Marineris can be impressive in size, with steep slopes that seem to climb and descend.
                </div>
               </div>
              </div>
             </a>
            </li>
            <li class="slide">
             <a class="fancybox" data-description="This image from NASA's Mars Reconnaissance Orbiter (MRO) shows two small impact craters located in Meridiani Planum on Mars. Small boulders on the floor and walls of the left-side crater." data-fancybox-group="images" data-fancybox-href="/spaceimages/images/largesize/PIA22454_hires.jpg" data-link="/spaceimages/details.php?id=PIA22454" data-thumbnail="/spaceimages/images/wallpaper/PIA22454-640x350.jpg" data-title="Twin Craters in Meridiani Planum">
              <div class="image_and_description_container">
               <div class="rollover_description">
                <h3 class="release_date">
                 May 14, 2018
                </h3>
                <div class="item_tease_overlay">
                 Twin Craters in Meridiani Planum
                </div>
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <div class="img">
                <img alt="Twin Craters in Meridiani Planum" class="thumb" src="/spaceimages/images/wallpaper/PIA22454-640x350.jpg" title="Twin Craters in Meridiani Planum"/>
               </div>
               <div class="list_text_content">
                <div class="article_teaser_body">
                 May 14, 2018
                </div>
                <div class="content_title">
                 Twin Craters in Meridiani Planum
                </div>
                <div class="article_teaser_body">
                 This image from NASA's Mars Reconnaissance Orbiter (MRO) shows two small impact craters located in Meridiani Planum on Mars. Small boulders on the floor and walls of the left-side crater.
                </div>
               </div>
              </div>
             </a>
            </li>
            <li class="slide">
             <a class="fancybox" data-description="This image from NASA's Mars Reconnaissance Orbiter shows two new craters on Mars with the same distinctive pattern of relatively blue ejecta surrounded by a dark blast zone and arcing patterns. This pattern indicates an oblique impact angle with a bolide." data-fancybox-group="images" data-fancybox-href="/spaceimages/images/largesize/PIA22453_hires.jpg" data-link="/spaceimages/details.php?id=PIA22453" data-thumbnail="/spaceimages/images/wallpaper/PIA22453-640x350.jpg" data-title="A Pair of New Impact Craters">
              <div class="image_and_description_container">
               <div class="rollover_description">
                <h3 class="release_date">
                 May 14, 2018
                </h3>
                <div class="item_tease_overlay">
                 A Pair of New Impact Craters
                </div>
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <div class="img">
                <img alt="A Pair of New Impact Craters" class="thumb" src="/spaceimages/images/wallpaper/PIA22453-640x350.jpg" title="A Pair of New Impact Craters"/>
               </div>
               <div class="list_text_content">
                <div class="article_teaser_body">
                 May 14, 2018
                </div>
                <div class="content_title">
                 A Pair of New Impact Craters
                </div>
                <div class="article_teaser_body">
                 This image from NASA's Mars Reconnaissance Orbiter shows two new craters on Mars with the same distinctive pattern of relatively blue ejecta surrounded by a dark blast zone and arcing patterns. This pattern indicates an oblique impact angle with a bolide.
                </div>
               </div>
              </div>
             </a>
            </li>
            <li class="slide">
             <a class="fancybox" data-description="This image captured by NASA's 2001 Mars Odyssey spacecraft shows a small portion of Olympia Undae, a huge dune field that surrounds part of the north polar cap. This image was taken during summer and there is no frost on the dune forms." data-fancybox-group="images" data-fancybox-href="/spaceimages/images/largesize/PIA22391_hires.jpg" data-link="/spaceimages/details.php?id=PIA22391" data-thumbnail="/spaceimages/images/wallpaper/PIA22391-640x350.jpg" data-title="Olympia Undae">
              <div class="image_and_description_container">
               <div class="rollover_description">
                <h3 class="release_date">
                 May 14, 2018
                </h3>
                <div class="item_tease_overlay">
                 Olympia Undae
                </div>
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <div class="img">
                <img alt="Olympia Undae" class="thumb" src="/spaceimages/images/wallpaper/PIA22391-640x350.jpg" title="Olympia Undae"/>
               </div>
               <div class="list_text_content">
                <div class="article_teaser_body">
                 May 14, 2018
                </div>
                <div class="content_title">
                 Olympia Undae
                </div>
                <div class="article_teaser_body">
                 This image captured by NASA's 2001 Mars Odyssey spacecraft shows a small portion of Olympia Undae, a huge dune field that surrounds part of the north polar cap. This image was taken during summer and there is no frost on the dune forms.
                </div>
               </div>
              </div>
             </a>
            </li>
            <li class="slide">
             <a class="fancybox" data-description="Sand dunes cover this entire image from NASA's 2001 Mars Odyssey spacecraft. The dunes are part of Olympia Undae, a huge dune field surrounding 1/4 of the northern polar cap." data-fancybox-group="images" data-fancybox-href="/spaceimages/images/largesize/PIA22390_hires.jpg" data-link="/spaceimages/details.php?id=PIA22390" data-thumbnail="/spaceimages/images/wallpaper/PIA22390-640x350.jpg" data-title="Olympia Undae">
              <div class="image_and_description_container">
               <div class="rollover_description">
                <h3 class="release_date">
                 May 11, 2018
                </h3>
                <div class="item_tease_overlay">
                 Olympia Undae
                </div>
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <div class="img">
                <img alt="Olympia Undae" class="thumb" src="/spaceimages/images/wallpaper/PIA22390-640x350.jpg" title="Olympia Undae"/>
               </div>
               <div class="list_text_content">
                <div class="article_teaser_body">
                 May 11, 2018
                </div>
                <div class="content_title">
                 Olympia Undae
                </div>
                <div class="article_teaser_body">
                 Sand dunes cover this entire image from NASA's 2001 Mars Odyssey spacecraft. The dunes are part of Olympia Undae, a huge dune field surrounding 1/4 of the northern polar cap.
                </div>
               </div>
              </div>
             </a>
            </li>
            <li class="slide">
             <a class="fancybox" data-description="This image of Gale Crater from NASA's 2001 Mars Odyssey spacecraft shows part of the huge layered deposit that covers much of the crater floor. The top of the image shows part of the crater rim, including one of the many small channels." data-fancybox-group="images" data-fancybox-href="/spaceimages/images/largesize/PIA22389_hires.jpg" data-link="/spaceimages/details.php?id=PIA22389" data-thumbnail="/spaceimages/images/wallpaper/PIA22389-640x350.jpg" data-title="Gale Crater">
              <div class="image_and_description_container">
               <div class="rollover_description">
                <h3 class="release_date">
                 May 10, 2018
                </h3>
                <div class="item_tease_overlay">
                 Gale Crater
                </div>
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <div class="img">
                <img alt="Gale Crater" class="thumb" src="/spaceimages/images/wallpaper/PIA22389-640x350.jpg" title="Gale Crater"/>
               </div>
               <div class="list_text_content">
                <div class="article_teaser_body">
                 May 10, 2018
                </div>
                <div class="content_title">
                 Gale Crater
                </div>
                <div class="article_teaser_body">
                 This image of Gale Crater from NASA's 2001 Mars Odyssey spacecraft shows part of the huge layered deposit that covers much of the crater floor. The top of the image shows part of the crater rim, including one of the many small channels.
                </div>
               </div>
              </div>
             </a>
            </li>
            <li class="slide">
             <a class="fancybox" data-description="This image from NASA's 2001 Mars Odyssey spacecraft shows part of the interior of Candor Chasma. At the bottom of the frame is a bright feature formed by layers of material deposited in the canyon after it formed." data-fancybox-group="images" data-fancybox-href="/spaceimages/images/largesize/PIA22388_hires.jpg" data-link="/spaceimages/details.php?id=PIA22388" data-thumbnail="/spaceimages/images/wallpaper/PIA22388-640x350.jpg" data-title="Candor Chasma">
              <div class="image_and_description_container">
               <div class="rollover_description">
                <h3 class="release_date">
                 May 9, 2018
                </h3>
                <div class="item_tease_overlay">
                 Candor Chasma
                </div>
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <div class="img">
                <img alt="Candor Chasma" class="thumb" src="/spaceimages/images/wallpaper/PIA22388-640x350.jpg" title="Candor Chasma"/>
               </div>
               <div class="list_text_content">
                <div class="article_teaser_body">
                 May 9, 2018
                </div>
                <div class="content_title">
                 Candor Chasma
                </div>
                <div class="article_teaser_body">
                 This image from NASA's 2001 Mars Odyssey spacecraft shows part of the interior of Candor Chasma. At the bottom of the frame is a bright feature formed by layers of material deposited in the canyon after it formed.
                </div>
               </div>
              </div>
             </a>
            </li>
            <li class="slide">
             <a class="fancybox" data-description="The feature that crosses this image captured by NASA's 2001 Mars Odyssey spacecraft is a graben. Graben are formed by tectonic action, where a block of material moves downward between a pair of faults." data-fancybox-group="images" data-fancybox-href="/spaceimages/images/largesize/PIA22387_hires.jpg" data-link="/spaceimages/details.php?id=PIA22387" data-thumbnail="/spaceimages/images/wallpaper/PIA22387-640x350.jpg" data-title="Labeatis Fossae">
              <div class="image_and_description_container">
               <div class="rollover_description">
                <h3 class="release_date">
                 May 8, 2018
                </h3>
                <div class="item_tease_overlay">
                 Labeatis Fossae
                </div>
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <div class="img">
                <img alt="Labeatis Fossae" class="thumb" src="/spaceimages/images/wallpaper/PIA22387-640x350.jpg" title="Labeatis Fossae"/>
               </div>
               <div class="list_text_content">
                <div class="article_teaser_body">
                 May 8, 2018
                </div>
                <div class="content_title">
                 Labeatis Fossae
                </div>
                <div class="article_teaser_body">
                 The feature that crosses this image captured by NASA's 2001 Mars Odyssey spacecraft is a graben. Graben are formed by tectonic action, where a block of material moves downward between a pair of faults.
                </div>
               </div>
              </div>
             </a>
            </li>
            <li class="slide">
             <a class="fancybox" data-description="This image captured by NASA's 2001 Mars Odyssey spacecraft shows the part of the crater rim and ejecta surrounding Lonar Crater in the northern plains of Vastitas Borealis." data-fancybox-group="images" data-fancybox-href="/spaceimages/images/largesize/PIA22386_hires.jpg" data-link="/spaceimages/details.php?id=PIA22386" data-thumbnail="/spaceimages/images/wallpaper/PIA22386-640x350.jpg" data-title="Lonar Crater Ejecta">
              <div class="image_and_description_container">
               <div class="rollover_description">
                <h3 class="release_date">
                 May 7, 2018
                </h3>
                <div class="item_tease_overlay">
                 Lonar Crater Ejecta
                </div>
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <div class="img">
                <img alt="Lonar Crater Ejecta" class="thumb" src="/spaceimages/images/wallpaper/PIA22386-640x350.jpg" title="Lonar Crater Ejecta"/>
               </div>
               <div class="list_text_content">
                <div class="article_teaser_body">
                 May 7, 2018
                </div>
                <div class="content_title">
                 Lonar Crater Ejecta
                </div>
                <div class="article_teaser_body">
                 This image captured by NASA's 2001 Mars Odyssey spacecraft shows the part of the crater rim and ejecta surrounding Lonar Crater in the northern plains of Vastitas Borealis.
                </div>
               </div>
              </div>
             </a>
            </li>
            <li class="slide">
             <a class="fancybox" data-description="This image captured by NASA's 2001 Mars Odyssey spacecraft shows one of the numerous unnamed channels in northern Terra Sabaea." data-fancybox-group="images" data-fancybox-href="/spaceimages/images/largesize/PIA22384_hires.jpg" data-link="/spaceimages/details.php?id=PIA22384" data-thumbnail="/spaceimages/images/wallpaper/PIA22384-640x350.jpg" data-title="Terra Sabaea Channel">
              <div class="image_and_description_container">
               <div class="rollover_description">
                <h3 class="release_date">
                 May 4, 2018
                </h3>
                <div class="item_tease_overlay">
                 Terra Sabaea Channel
                </div>
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <div class="img">
                <img alt="Terra Sabaea Channel" class="thumb" src="/spaceimages/images/wallpaper/PIA22384-640x350.jpg" title="Terra Sabaea Channel"/>
               </div>
               <div class="list_text_content">
                <div class="article_teaser_body">
                 May 4, 2018
                </div>
                <div class="content_title">
                 Terra Sabaea Channel
                </div>
                <div class="article_teaser_body">
                 This image captured by NASA's 2001 Mars Odyssey spacecraft shows one of the numerous unnamed channels in northern Terra Sabaea.
                </div>
               </div>
              </div>
             </a>
            </li>
            <li class="slide">
             <a class="fancybox" data-description="A group of dunes captured by NASA's 2001 Mars Odyssey spacecraft is visible on the floor of this unnamed crater in Arabia Terra. The dunes contain basaltic sand, which is darker than the dust covered materials of the rest of the crater." data-fancybox-group="images" data-fancybox-href="/spaceimages/images/largesize/PIA22383_hires.jpg" data-link="/spaceimages/details.php?id=PIA22383" data-thumbnail="/spaceimages/images/wallpaper/PIA22383-640x350.jpg" data-title="Crater Dunes">
              <div class="image_and_description_container">
               <div class="rollover_description">
                <h3 class="release_date">
                 May 3, 2018
                </h3>
                <div class="item_tease_overlay">
                 Crater Dunes
                </div>
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <div class="img">
                <img alt="Crater Dunes" class="thumb" src="/spaceimages/images/wallpaper/PIA22383-640x350.jpg" title="Crater Dunes"/>
               </div>
               <div class="list_text_content">
                <div class="article_teaser_body">
                 May 3, 2018
                </div>
                <div class="content_title">
                 Crater Dunes
                </div>
                <div class="article_teaser_body">
                 A group of dunes captured by NASA's 2001 Mars Odyssey spacecraft is visible on the floor of this unnamed crater in Arabia Terra. The dunes contain basaltic sand, which is darker than the dust covered materials of the rest of the crater.
                </div>
               </div>
              </div>
             </a>
            </li>
            <li class="slide">
             <a class="fancybox" data-description="At the bottom of this image of Daedalia Planum is the uppermost rim of an impact crater. This image was captured by NASA's 2001 Mars Odyssey spacecraft." data-fancybox-group="images" data-fancybox-href="/spaceimages/images/largesize/PIA22382_hires.jpg" data-link="/spaceimages/details.php?id=PIA22382" data-thumbnail="/spaceimages/images/wallpaper/PIA22382-640x350.jpg" data-title="Daedalia Planum">
              <div class="image_and_description_container">
               <div class="rollover_description">
                <h3 class="release_date">
                 May 2, 2018
                </h3>
                <div class="item_tease_overlay">
                 Daedalia Planum
                </div>
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <div class="img">
                <img alt="Daedalia Planum" class="thumb" src="/spaceimages/images/wallpaper/PIA22382-640x350.jpg" title="Daedalia Planum"/>
               </div>
               <div class="list_text_content">
                <div class="article_teaser_body">
                 May 2, 2018
                </div>
                <div class="content_title">
                 Daedalia Planum
                </div>
                <div class="article_teaser_body">
                 At the bottom of this image of Daedalia Planum is the uppermost rim of an impact crater. This image was captured by NASA's 2001 Mars Odyssey spacecraft.
                </div>
               </div>
              </div>
             </a>
            </li>
            <li class="slide">
             <a class="fancybox" data-description="This image from NASA's 2001 Mars Odyssey spacecraft runs from northern Juventae Chasma to just short of the southern canyon wall." data-fancybox-group="images" data-fancybox-href="/spaceimages/images/largesize/PIA22381_hires.jpg" data-link="/spaceimages/details.php?id=PIA22381" data-thumbnail="/spaceimages/images/wallpaper/PIA22381-640x350.jpg" data-title="Juventae Chasma">
              <div class="image_and_description_container">
               <div class="rollover_description">
                <h3 class="release_date">
                 May 1, 2018
                </h3>
                <div class="item_tease_overlay">
                 Juventae Chasma
                </div>
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <div class="img">
                <img alt="Juventae Chasma" class="thumb" src="/spaceimages/images/wallpaper/PIA22381-640x350.jpg" title="Juventae Chasma"/>
               </div>
               <div class="list_text_content">
                <div class="article_teaser_body">
                 May 1, 2018
                </div>
                <div class="content_title">
                 Juventae Chasma
                </div>
                <div class="article_teaser_body">
                 This image from NASA's 2001 Mars Odyssey spacecraft runs from northern Juventae Chasma to just short of the southern canyon wall.
                </div>
               </div>
              </div>
             </a>
            </li>
            <li class="slide">
             <a class="fancybox" data-description="This enhanced color image from NASA's Mars Reconnaissance Orbiter shows eroded bedrock on the floor of a large ancient crater." data-fancybox-group="images" data-fancybox-href="/spaceimages/images/largesize/PIA22439_hires.jpg" data-link="/spaceimages/details.php?id=PIA22439" data-thumbnail="/spaceimages/images/wallpaper/PIA22439-640x350.jpg" data-title="Bedrock on a Crater Floor">
              <div class="image_and_description_container">
               <div class="rollover_description">
                <h3 class="release_date">
                 April 30, 2018
                </h3>
                <div class="item_tease_overlay">
                 Bedrock on a Crater Floor
                </div>
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <div class="img">
                <img alt="Bedrock on a Crater Floor" class="thumb" src="/spaceimages/images/wallpaper/PIA22439-640x350.jpg" title="Bedrock on a Crater Floor"/>
               </div>
               <div class="list_text_content">
                <div class="article_teaser_body">
                 April 30, 2018
                </div>
                <div class="content_title">
                 Bedrock on a Crater Floor
                </div>
                <div class="article_teaser_body">
                 This enhanced color image from NASA's Mars Reconnaissance Orbiter shows eroded bedrock on the floor of a large ancient crater.
                </div>
               </div>
              </div>
             </a>
            </li>
            <li class="slide">
             <a class="fancybox" data-description="NASA's Opportunity rover has spent 13 years exploring a small region of Meridiani Planum which has a rather ordinary appearance as seen by NASA's Mars Reconnaissance Orbiter." data-fancybox-group="images" data-fancybox-href="/spaceimages/images/largesize/PIA22438_hires.jpg" data-link="/spaceimages/details.php?id=PIA22438" data-thumbnail="/spaceimages/images/wallpaper/PIA22438-640x350.jpg" data-title="Exploring Meridiani Planum">
              <div class="image_and_description_container">
               <div class="rollover_description">
                <h3 class="release_date">
                 April 30, 2018
                </h3>
                <div class="item_tease_overlay">
                 Exploring Meridiani Planum
                </div>
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <div class="img">
                <img alt="Exploring Meridiani Planum" class="thumb" src="/spaceimages/images/wallpaper/PIA22438-640x350.jpg" title="Exploring Meridiani Planum"/>
               </div>
               <div class="list_text_content">
                <div class="article_teaser_body">
                 April 30, 2018
                </div>
                <div class="content_title">
                 Exploring Meridiani Planum
                </div>
                <div class="article_teaser_body">
                 NASA's Opportunity rover has spent 13 years exploring a small region of Meridiani Planum which has a rather ordinary appearance as seen by NASA's Mars Reconnaissance Orbiter.
                </div>
               </div>
              </div>
             </a>
            </li>
            <li class="slide">
             <a class="fancybox" data-description="This color image from NASA's Mars Reconnaissance Orbiter (MRO) shows bedrock layers of diverse colors and composition." data-fancybox-group="images" data-fancybox-href="/spaceimages/images/largesize/PIA22437_hires.jpg" data-link="/spaceimages/details.php?id=PIA22437" data-thumbnail="/spaceimages/images/wallpaper/PIA22437-640x350.jpg" data-title="Colorful Layers in Ariadnes Colles">
              <div class="image_and_description_container">
               <div class="rollover_description">
                <h3 class="release_date">
                 April 30, 2018
                </h3>
                <div class="item_tease_overlay">
                 Colorful Layers in Ariadnes Colles
                </div>
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <div class="img">
                <img alt="Colorful Layers in Ariadnes Colles" class="thumb" src="/spaceimages/images/wallpaper/PIA22437-640x350.jpg" title="Colorful Layers in Ariadnes Colles"/>
               </div>
               <div class="list_text_content">
                <div class="article_teaser_body">
                 April 30, 2018
                </div>
                <div class="content_title">
                 Colorful Layers in Ariadnes Colles
                </div>
                <div class="article_teaser_body">
                 This color image from NASA's Mars Reconnaissance Orbiter (MRO) shows bedrock layers of diverse colors and composition.
                </div>
               </div>
              </div>
             </a>
            </li>
            <li class="slide">
             <a class="fancybox" data-description="This enhanced color image from NASA's Mars Reconnaissance Orbiter (MRO) shows the heavily channeled and ancient southern highlands of Mars. The elongated and jagged features are windblown dunes, perhaps hardened and eroded." data-fancybox-group="images" data-fancybox-href="/spaceimages/images/largesize/PIA22436_hires.jpg" data-link="/spaceimages/details.php?id=PIA22436" data-thumbnail="/spaceimages/images/wallpaper/PIA22436-640x350.jpg" data-title="Channeled Southern Highlands">
              <div class="image_and_description_container">
               <div class="rollover_description">
                <h3 class="release_date">
                 April 30, 2018
                </h3>
                <div class="item_tease_overlay">
                 Channeled Southern Highlands
                </div>
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <div class="img">
                <img alt="Channeled Southern Highlands" class="thumb" src="/spaceimages/images/wallpaper/PIA22436-640x350.jpg" title="Channeled Southern Highlands"/>
               </div>
               <div class="list_text_content">
                <div class="article_teaser_body">
                 April 30, 2018
                </div>
                <div class="content_title">
                 Channeled Southern Highlands
                </div>
                <div class="article_teaser_body">
                 This enhanced color image from NASA's Mars Reconnaissance Orbiter (MRO) shows the heavily channeled and ancient southern highlands of Mars. The elongated and jagged features are windblown dunes, perhaps hardened and eroded.
                </div>
               </div>
              </div>
             </a>
            </li>
            <li class="slide">
             <a class="fancybox" data-description="This image captured by NASA's 2001 Mars Odyssey spacecraft shows one of the numerous unnamed channels located in northern Arabia Terra." data-fancybox-group="images" data-fancybox-href="/spaceimages/images/largesize/PIA22380_hires.jpg" data-link="/spaceimages/details.php?id=PIA22380" data-thumbnail="/spaceimages/images/wallpaper/PIA22380-640x350.jpg" data-title="Arabia Terra Channel">
              <div class="image_and_description_container">
               <div class="rollover_description">
                <h3 class="release_date">
                 April 30, 2018
                </h3>
                <div class="item_tease_overlay">
                 Arabia Terra Channel
                </div>
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <div class="img">
                <img alt="Arabia Terra Channel" class="thumb" src="/spaceimages/images/wallpaper/PIA22380-640x350.jpg" title="Arabia Terra Channel"/>
               </div>
               <div class="list_text_content">
                <div class="article_teaser_body">
                 April 30, 2018
                </div>
                <div class="content_title">
                 Arabia Terra Channel
                </div>
                <div class="article_teaser_body">
                 This image captured by NASA's 2001 Mars Odyssey spacecraft shows one of the numerous unnamed channels located in northern Arabia Terra.
                </div>
               </div>
              </div>
             </a>
            </li>
            <li class="slide">
             <a class="fancybox" data-description="This image from NASA's 2001 Mars Odyssey spacecraft shows a section of Bahram Vallis. This channel is located in northern Lunae Planum, south of Kasei Valles." data-fancybox-group="images" data-fancybox-href="/spaceimages/images/largesize/PIA22379_hires.jpg" data-link="/spaceimages/details.php?id=PIA22379" data-thumbnail="/spaceimages/images/wallpaper/PIA22379-640x350.jpg" data-title="Bahram Vallis">
              <div class="image_and_description_container">
               <div class="rollover_description">
                <h3 class="release_date">
                 April 27, 2018
                </h3>
                <div class="item_tease_overlay">
                 Bahram Vallis
                </div>
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <div class="img">
                <img alt="Bahram Vallis" class="thumb" src="/spaceimages/images/wallpaper/PIA22379-640x350.jpg" title="Bahram Vallis"/>
               </div>
               <div class="list_text_content">
                <div class="article_teaser_body">
                 April 27, 2018
                </div>
                <div class="content_title">
                 Bahram Vallis
                </div>
                <div class="article_teaser_body">
                 This image from NASA's 2001 Mars Odyssey spacecraft shows a section of Bahram Vallis. This channel is located in northern Lunae Planum, south of Kasei Valles.
                </div>
               </div>
              </div>
             </a>
            </li>
            <li class="slide">
             <a class="fancybox" data-description="This image captured by NASA's 2001 Mars Odyssey spacecraft shows the western rim of Bamberg Crater. The complex nature of the rim is one indication of the relative youth of this crater in relation to it's surrounding." data-fancybox-group="images" data-fancybox-href="/spaceimages/images/largesize/PIA22378_hires.jpg" data-link="/spaceimages/details.php?id=PIA22378" data-thumbnail="/spaceimages/images/wallpaper/PIA22378-640x350.jpg" data-title="Bamberg Crater">
              <div class="image_and_description_container">
               <div class="rollover_description">
                <h3 class="release_date">
                 April 26, 2018
                </h3>
                <div class="item_tease_overlay">
                 Bamberg Crater
                </div>
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <div class="img">
                <img alt="Bamberg Crater" class="thumb" src="/spaceimages/images/wallpaper/PIA22378-640x350.jpg" title="Bamberg Crater"/>
               </div>
               <div class="list_text_content">
                <div class="article_teaser_body">
                 April 26, 2018
                </div>
                <div class="content_title">
                 Bamberg Crater
                </div>
                <div class="article_teaser_body">
                 This image captured by NASA's 2001 Mars Odyssey spacecraft shows the western rim of Bamberg Crater. The complex nature of the rim is one indication of the relative youth of this crater in relation to it's surrounding.
                </div>
               </div>
              </div>
             </a>
            </li>
            <li class="slide">
             <a class="fancybox" data-description="The rounded hills in this image from NASA's 2001 Mars Odyssey spacecraft are located in Arcadia Planitia. Broad linear ridges and groups of hills in this region are part of Phlegra Dorsa and Phlegra Montes." data-fancybox-group="images" data-fancybox-href="/spaceimages/images/largesize/PIA22377_hires.jpg" data-link="/spaceimages/details.php?id=PIA22377" data-thumbnail="/spaceimages/images/wallpaper/PIA22377-640x350.jpg" data-title="Arcadia Planitia Hills">
              <div class="image_and_description_container">
               <div class="rollover_description">
                <h3 class="release_date">
                 April 25, 2018
                </h3>
                <div class="item_tease_overlay">
                 Arcadia Planitia Hills
                </div>
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <div class="img">
                <img alt="Arcadia Planitia Hills" class="thumb" src="/spaceimages/images/wallpaper/PIA22377-640x350.jpg" title="Arcadia Planitia Hills"/>
               </div>
               <div class="list_text_content">
                <div class="article_teaser_body">
                 April 25, 2018
                </div>
                <div class="content_title">
                 Arcadia Planitia Hills
                </div>
                <div class="article_teaser_body">
                 The rounded hills in this image from NASA's 2001 Mars Odyssey spacecraft are located in Arcadia Planitia. Broad linear ridges and groups of hills in this region are part of Phlegra Dorsa and Phlegra Montes.
                </div>
               </div>
              </div>
             </a>
            </li>
            <li class="slide">
             <a class="fancybox" data-description="The northern margins of Arabia Terra and Terra Sabaea contain many unnamed channels. This channel is located in Terra Sabaea. The channel flow is toward the top of this image from NASA's 2001 Mars Odyssey spacecraft." data-fancybox-group="images" data-fancybox-href="/spaceimages/images/largesize/PIA22376_hires.jpg" data-link="/spaceimages/details.php?id=PIA22376" data-thumbnail="/spaceimages/images/wallpaper/PIA22376-640x350.jpg" data-title="Terra Sabaea Channel">
              <div class="image_and_description_container">
               <div class="rollover_description">
                <h3 class="release_date">
                 April 24, 2018
                </h3>
                <div class="item_tease_overlay">
                 Terra Sabaea Channel
                </div>
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <div class="img">
                <img alt="Terra Sabaea Channel" class="thumb" src="/spaceimages/images/wallpaper/PIA22376-640x350.jpg" title="Terra Sabaea Channel"/>
               </div>
               <div class="list_text_content">
                <div class="article_teaser_body">
                 April 24, 2018
                </div>
                <div class="content_title">
                 Terra Sabaea Channel
                </div>
                <div class="article_teaser_body">
                 The northern margins of Arabia Terra and Terra Sabaea contain many unnamed channels. This channel is located in Terra Sabaea. The channel flow is toward the top of this image from NASA's 2001 Mars Odyssey spacecraft.
                </div>
               </div>
              </div>
             </a>
            </li>
            <li class="slide">
             <a class="fancybox" data-description="This image captured by NASA's 2001 Mars Odyssey spacecraft shows one of the mega-gullies that empties into Echus Chasma. Echus Chasma is approximately 4km deep in this region, and is the source of Kasei Valles." data-fancybox-group="images" data-fancybox-href="/spaceimages/images/largesize/PIA22375_hires.jpg" data-link="/spaceimages/details.php?id=PIA22375" data-thumbnail="/spaceimages/images/wallpaper/PIA22375-640x350.jpg" data-title="Echus Chasma Gully">
              <div class="image_and_description_container">
               <div class="rollover_description">
                <h3 class="release_date">
                 April 23, 2018
                </h3>
                <div class="item_tease_overlay">
                 Echus Chasma Gully
                </div>
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <div class="img">
                <img alt="Echus Chasma Gully" class="thumb" src="/spaceimages/images/wallpaper/PIA22375-640x350.jpg" title="Echus Chasma Gully"/>
               </div>
               <div class="list_text_content">
                <div class="article_teaser_body">
                 April 23, 2018
                </div>
                <div class="content_title">
                 Echus Chasma Gully
                </div>
                <div class="article_teaser_body">
                 This image captured by NASA's 2001 Mars Odyssey spacecraft shows one of the mega-gullies that empties into Echus Chasma. Echus Chasma is approximately 4km deep in this region, and is the source of Kasei Valles.
                </div>
               </div>
              </div>
             </a>
            </li>
            <li class="slide">
             <a class="fancybox" data-description="This image captured by NASA's 2001 Mars Odyssey spacecraft shows a small portion of Lobo Vallis near where it recombines with Kasei Valles and empties into Chryse Planitia." data-fancybox-group="images" data-fancybox-href="/spaceimages/images/largesize/PIA22374_hires.jpg" data-link="/spaceimages/details.php?id=PIA22374" data-thumbnail="/spaceimages/images/wallpaper/PIA22374-640x350.jpg" data-title="Lobo Vallis">
              <div class="image_and_description_container">
               <div class="rollover_description">
                <h3 class="release_date">
                 April 20, 2018
                </h3>
                <div class="item_tease_overlay">
                 Lobo Vallis
                </div>
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <div class="img">
                <img alt="Lobo Vallis" class="thumb" src="/spaceimages/images/wallpaper/PIA22374-640x350.jpg" title="Lobo Vallis"/>
               </div>
               <div class="list_text_content">
                <div class="article_teaser_body">
                 April 20, 2018
                </div>
                <div class="content_title">
                 Lobo Vallis
                </div>
                <div class="article_teaser_body">
                 This image captured by NASA's 2001 Mars Odyssey spacecraft shows a small portion of Lobo Vallis near where it recombines with Kasei Valles and empties into Chryse Planitia.
                </div>
               </div>
              </div>
             </a>
            </li>
            <li class="slide">
             <a class="fancybox" data-description="Located on the western margin of Lunae Planum, Sacra Fossae is a group of linear depressions. The right angle turns and uniform width seen in this image from NASA's 2001 Mars Odyssey spacecraft indicate that these channels were formed by faulting." data-fancybox-group="images" data-fancybox-href="/spaceimages/images/largesize/PIA22373_hires.jpg" data-link="/spaceimages/details.php?id=PIA22373" data-thumbnail="/spaceimages/images/wallpaper/PIA22373-640x350.jpg" data-title="Sacra Fossae">
              <div class="image_and_description_container">
               <div class="rollover_description">
                <h3 class="release_date">
                 April 19, 2018
                </h3>
                <div class="item_tease_overlay">
                 Sacra Fossae
                </div>
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <div class="img">
                <img alt="Sacra Fossae" class="thumb" src="/spaceimages/images/wallpaper/PIA22373-640x350.jpg" title="Sacra Fossae"/>
               </div>
               <div class="list_text_content">
                <div class="article_teaser_body">
                 April 19, 2018
                </div>
                <div class="content_title">
                 Sacra Fossae
                </div>
                <div class="article_teaser_body">
                 Located on the western margin of Lunae Planum, Sacra Fossae is a group of linear depressions. The right angle turns and uniform width seen in this image from NASA's 2001 Mars Odyssey spacecraft indicate that these channels were formed by faulting.
                </div>
               </div>
              </div>
             </a>
            </li>
            <li class="slide">
             <a class="fancybox" data-description="Osuga Valles is a complex set of channels located near Eos Chasma. This image was captured by NASA's 2001 Mars Odyssey spacecraft." data-fancybox-group="images" data-fancybox-href="/spaceimages/images/largesize/PIA22372_hires.jpg" data-link="/spaceimages/details.php?id=PIA22372" data-thumbnail="/spaceimages/images/wallpaper/PIA22372-640x350.jpg" data-title="Osuga Valles">
              <div class="image_and_description_container">
               <div class="rollover_description">
                <h3 class="release_date">
                 April 18, 2018
                </h3>
                <div class="item_tease_overlay">
                 Osuga Valles
                </div>
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <div class="img">
                <img alt="Osuga Valles" class="thumb" src="/spaceimages/images/wallpaper/PIA22372-640x350.jpg" title="Osuga Valles"/>
               </div>
               <div class="list_text_content">
                <div class="article_teaser_body">
                 April 18, 2018
                </div>
                <div class="content_title">
                 Osuga Valles
                </div>
                <div class="article_teaser_body">
                 Osuga Valles is a complex set of channels located near Eos Chasma. This image was captured by NASA's 2001 Mars Odyssey spacecraft.
                </div>
               </div>
              </div>
             </a>
            </li>
            <li class="slide">
             <a class="fancybox" data-description="Bonestell Crater is a relatively young crater located in Acidalia Planitia. The grooved surface of the ejecta blanket is evident in this image from NASA's 2001 Mars Odyssey spacecraft." data-fancybox-group="images" data-fancybox-href="/spaceimages/images/largesize/PIA22371_hires.jpg" data-link="/spaceimages/details.php?id=PIA22371" data-thumbnail="/spaceimages/images/wallpaper/PIA22371-640x350.jpg" data-title="Bonestell Crater">
              <div class="image_and_description_container">
               <div class="rollover_description">
                <h3 class="release_date">
                 April 17, 2018
                </h3>
                <div class="item_tease_overlay">
                 Bonestell Crater
                </div>
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <div class="img">
                <img alt="Bonestell Crater" class="thumb" src="/spaceimages/images/wallpaper/PIA22371-640x350.jpg" title="Bonestell Crater"/>
               </div>
               <div class="list_text_content">
                <div class="article_teaser_body">
                 April 17, 2018
                </div>
                <div class="content_title">
                 Bonestell Crater
                </div>
                <div class="article_teaser_body">
                 Bonestell Crater is a relatively young crater located in Acidalia Planitia. The grooved surface of the ejecta blanket is evident in this image from NASA's 2001 Mars Odyssey spacecraft.
                </div>
               </div>
              </div>
             </a>
            </li>
           </ul>
           <footer>
            <div class="more_button">
             <a class="button" href="">
              MORE
             </a>
            </div>
           </footer>
          </div>
         </section>
         <section class="image_teaser module">
          <div class="grid_layout">
           <header>
            <h1 class="module_title">
            </h1>
           </header>
           <ul class="module_gallery gallery_list">
            <li class="slide">
             <div class="image_container">
              <a href="http://photojournal.jpl.nasa.gov/">
               <img alt="jpl photojournal" class="thumb" src="/assets/images/content/tmp/images/jpl_photojournal(3x1).jpg"/>
              </a>
             </div>
             <div class="content_title">
              <a href="http://photojournal.jpl.nasa.gov/">
               JPL Photojournal
              </a>
             </div>
             <div class="article_teaser_body">
              Access to the full library of publicly released images from various Solar System exploration programs
             </div>
            </li>
            <li class="slide">
             <div class="image_container">
              <a href="http://www.nasa.gov/multimedia/imagegallery/">
               <img alt="Great images in NASA" class="thumb" src="/assets/images/content/tmp/images/nasa_images(3x1).jpg"/>
              </a>
             </div>
             <div class="content_title">
              <a href="http://www.nasa.gov/multimedia/imagegallery/">
               Great images in NASA
              </a>
             </div>
             <div class="article_teaser_body">
              A selection of the best-known images from a half-century of exploration and discovery
             </div>
            </li>
           </ul>
          </div>
         </section>
         <section class="multi_teaser module">
          <div class="grid_layout">
           <header>
            <h1 class="module_title">
             You Might Also Like
            </h1>
           </header>
           <ul class="module_gallery gallery_list">
            <li class="slide">
             <a href="//www.jpl.nasa.gov/news/news.php?feature=7129">
              <div class="image_and_description_container">
               <div class="rollover_description">
                Rover engineers at JPL will try to restore percussive drilling on Mars this week, part of a larger series of tests that will last through summer.
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <img alt="A test of a new percussive drilling technique at NASA's JPL" src="//imagecache.jpl.nasa.gov/images/640x350/PIA22324-16-640x350.jpg"/>
              </div>
              <div class="content_title">
               NASA's Curiosity Rover Aims to Get Its Rhythm Back
              </div>
             </a>
            </li>
            <li class="slide">
             <a href="//www.jpl.nasa.gov/news/news.php?feature=7124">
              <div class="image_and_description_container">
               <div class="rollover_description">
                One of NASA's MarCO CubeSats has taken its first image.
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <img alt="First image captured by one of NASA's Mars Cube One (MarCO) CubeSats" src="//imagecache.jpl.nasa.gov/images/640x350/PIA22323-16-640x350.jpg"/>
              </div>
              <div class="content_title">
               A Pale Blue Dot, As Seen by a CubeSat
              </div>
             </a>
            </li>
            <li class="slide">
             <a href="//www.jpl.nasa.gov/news/news.php?feature=7121">
              <div class="image_and_description_container">
               <div class="rollover_description">
                NASA is adding a Mars helicopter to the agency's next mission to the Red Planet, Mars 2020.
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <img alt="Mars Helicopter" src="//imagecache.jpl.nasa.gov/images/640x350/helicopter20180511-16-640x350.jpg"/>
              </div>
              <div class="content_title">
               Mars Helicopter to Fly on NASA's Next Red Planet Rover Mission
              </div>
             </a>
            </li>
           </ul>
           <footer>
            <a class="outline_button dark" href="/news">
             more news
            </a>
           </footer>
          </div>
         </section>
         <!-- END CONTENT -->
         <script src="/Scripts/custom_detail.js" type="text/javascript">
         </script>
         <!-- START FOOTER: "DEFAULT" -->
        </div>
        <footer class="clearfix" id="site_footer">
         <section class="upper_footer">
          <div class="grid_layout">
           <div class="footer_newsletter">
            <h2>
             Get the Newsletter
            </h2>
            <form action="/signup/index.php" class="submit_newsletter" method="post">
             <input class="email_field" name="email_field" onblur="this.placeholder = 'enter email address'" onfocus="this.placeholder = ''" placeholder="enter email address" type="email" value=""/>
             <input class="email_submit" type="submit" value=""/>
            </form>
           </div>
           <div class="gradient_line_divider">
           </div>
           <div class="share">
            <h2>
             Follow JPL
            </h2>
            <div class="social_icons">
             <!-- AddThis Button BEGIN -->
             <div class="addthis_toolbox addthis_default_style addthis_32x32_style">
              <a addthis:userid="NASAJPL" class="addthis_button_facebook_follow icon at300b" href="http://www.facebook.com/NASAJPL" target="_blank" title="Follow on Facebook">
               <span class="at-icon-wrapper" style="background-color: rgb(59, 89, 152); line-height: 32px; height: 32px; width: 32px;">
                <svg alt="Facebook" aria-labelledby="at-svg-facebook-5" class="at-icon at-icon-facebook" role="img" style="width: 32px; height: 32px;" title="Facebook" version="1.1" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                 <title id="at-svg-facebook-5" xmlns="http://www.w3.org/1999/xhtml">
                  Facebook
                 </title>
                 <g>
                  <path d="M22 5.16c-.406-.054-1.806-.16-3.43-.16-3.4 0-5.733 1.825-5.733 5.17v2.882H9v3.913h3.837V27h4.604V16.965h3.823l.587-3.913h-4.41v-2.5c0-1.123.347-1.903 2.198-1.903H22V5.16z" fill-rule="evenodd">
                  </path>
                 </g>
                </svg>
               </span>
               <span class="addthis_follow_label">
                Facebook
               </span>
              </a>
              <a addthis:userid="NASAJPL" class="addthis_button_twitter_follow icon at300b" href="//twitter.com/NASAJPL" target="_blank" title="Follow on Twitter">
               <span class="at-icon-wrapper" style="background-color: rgb(29, 161, 242); line-height: 32px; height: 32px; width: 32px;">
                <svg alt="Twitter" aria-labelledby="at-svg-twitter-6" class="at-icon at-icon-twitter" role="img" style="width: 32px; height: 32px;" title="Twitter" version="1.1" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                 <title id="at-svg-twitter-6" xmlns="http://www.w3.org/1999/xhtml">
                  Twitter
                 </title>
                 <g>
                  <path d="M27.996 10.116c-.81.36-1.68.602-2.592.71a4.526 4.526 0 0 0 1.984-2.496 9.037 9.037 0 0 1-2.866 1.095 4.513 4.513 0 0 0-7.69 4.116 12.81 12.81 0 0 1-9.3-4.715 4.49 4.49 0 0 0-.612 2.27 4.51 4.51 0 0 0 2.008 3.755 4.495 4.495 0 0 1-2.044-.564v.057a4.515 4.515 0 0 0 3.62 4.425 4.52 4.52 0 0 1-2.04.077 4.517 4.517 0 0 0 4.217 3.134 9.055 9.055 0 0 1-5.604 1.93A9.18 9.18 0 0 1 6 23.85a12.773 12.773 0 0 0 6.918 2.027c8.3 0 12.84-6.876 12.84-12.84 0-.195-.005-.39-.014-.583a9.172 9.172 0 0 0 2.252-2.336" fill-rule="evenodd">
                  </path>
                 </g>
                </svg>
               </span>
               <span class="addthis_follow_label">
                Twitter
               </span>
              </a>
              <a addthis:userid="JPLnews" class="addthis_button_youtube_follow icon at300b" href="http://www.youtube.com/user/JPLnews?sub_confirmation=1" target="_blank" title="Follow on YouTube">
               <span class="at-icon-wrapper" style="background-color: rgb(205, 32, 31); line-height: 32px; height: 32px; width: 32px;">
                <svg alt="YouTube" aria-labelledby="at-svg-youtube-7" class="at-icon at-icon-youtube" role="img" style="width: 32px; height: 32px;" title="YouTube" version="1.1" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                 <title id="at-svg-youtube-7" xmlns="http://www.w3.org/1999/xhtml">
                  YouTube
                 </title>
                 <g>
                  <path d="M13.73 18.974V12.57l5.945 3.212-5.944 3.192zm12.18-9.778c-.837-.908-1.775-.912-2.205-.965C20.625 8 16.007 8 16.007 8c-.01 0-4.628 0-7.708.23-.43.054-1.368.058-2.205.966-.66.692-.875 2.263-.875 2.263S5 13.303 5 15.15v1.728c0 1.845.22 3.69.22 3.69s.215 1.57.875 2.262c.837.908 1.936.88 2.426.975 1.76.175 7.482.23 7.482.15 0 .08 4.624.072 7.703-.16.43-.052 1.368-.057 2.205-.965.66-.69.875-2.262.875-2.262s.22-1.845.22-3.69v-1.73c0-1.844-.22-3.69-.22-3.69s-.215-1.57-.875-2.262z" fill-rule="evenodd">
                  </path>
                 </g>
                </svg>
               </span>
               <span class="addthis_follow_label">
                YouTube
               </span>
              </a>
              <a addthis:userid="nasajpl" class="addthis_button_instagram_follow icon at300b" href="http://instagram.com/nasajpl" target="_blank" title="Follow on Instagram">
               <span class="at-icon-wrapper" style="background-color: rgb(224, 53, 102); line-height: 32px; height: 32px; width: 32px;">
                <svg alt="Instagram" aria-labelledby="at-svg-instagram-8" class="at-icon at-icon-instagram" role="img" style="width: 32px; height: 32px;" title="Instagram" version="1.1" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                 <title id="at-svg-instagram-8" xmlns="http://www.w3.org/1999/xhtml">
                  Instagram
                 </title>
                 <g>
                  <path d="M16 5c-2.987 0-3.362.013-4.535.066-1.17.054-1.97.24-2.67.512a5.392 5.392 0 0 0-1.95 1.268 5.392 5.392 0 0 0-1.267 1.95c-.272.698-.458 1.498-.512 2.67C5.013 12.637 5 13.012 5 16s.013 3.362.066 4.535c.054 1.17.24 1.97.512 2.67.28.724.657 1.337 1.268 1.95a5.392 5.392 0 0 0 1.95 1.268c.698.27 1.498.457 2.67.51 1.172.054 1.547.067 4.534.067s3.362-.013 4.535-.066c1.17-.054 1.97-.24 2.67-.51a5.392 5.392 0 0 0 1.95-1.27 5.392 5.392 0 0 0 1.268-1.95c.27-.698.457-1.498.51-2.67.054-1.172.067-1.547.067-4.534s-.013-3.362-.066-4.535c-.054-1.17-.24-1.97-.51-2.67a5.392 5.392 0 0 0-1.27-1.95 5.392 5.392 0 0 0-1.95-1.267c-.698-.272-1.498-.458-2.67-.512C19.363 5.013 18.988 5 16 5zm0 1.982c2.937 0 3.285.01 4.445.064 1.072.05 1.655.228 2.042.38.514.198.88.437 1.265.822.385.385.624.75.823 1.265.15.387.33.97.38 2.042.052 1.16.063 1.508.063 4.445 0 2.937-.01 3.285-.064 4.445-.05 1.072-.228 1.655-.38 2.042-.198.514-.437.88-.822 1.265-.385.385-.75.624-1.265.823-.387.15-.97.33-2.042.38-1.16.052-1.508.063-4.445.063-2.937 0-3.285-.01-4.445-.064-1.072-.05-1.655-.228-2.042-.38-.514-.198-.88-.437-1.265-.822a3.408 3.408 0 0 1-.823-1.265c-.15-.387-.33-.97-.38-2.042-.052-1.16-.063-1.508-.063-4.445 0-2.937.01-3.285.064-4.445.05-1.072.228-1.655.38-2.042.198-.514.437-.88.822-1.265.385-.385.75-.624 1.265-.823.387-.15.97-.33 2.042-.38 1.16-.052 1.508-.063 4.445-.063zm0 12.685a3.667 3.667 0 1 1 0-7.334 3.667 3.667 0 0 1 0 7.334zm0-9.316a5.65 5.65 0 1 0 0 11.3 5.65 5.65 0 0 0 0-11.3zm7.192-.222a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0" fill-rule="evenodd">
                  </path>
                 </g>
                </svg>
               </span>
               <span class="addthis_follow_label">
                Instagram
               </span>
              </a>
              <a class="icon all_icon" href="/social">
               <span>
                All
               </span>
              </a>
              <div class="atclear">
              </div>
             </div>
             <script>
              addthis_loader.init("//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5429eeee4e460927", {follow: true})
             </script>
            </div>
           </div>
          </div>
          <div class="gradient_line">
          </div>
         </section>
         <section class="sitemap">
          <div class="grid_layout">
           <div class="sitemap_directory">
            <div class="sitemap_block">
             <div class="footer_sitemap_item">
              <h3 class="sitemap_title">
               about JPL
              </h3>
              <ul class="subnav">
               <li>
                <a href="/about/">
                 About JPL
                </a>
               </li>
               <li>
                <a href="/about/exec.php">
                 Executive Council
                </a>
               </li>
               <li>
                <a href="/about/history.php">
                 History
                </a>
               </li>
               <li>
                <a href="/about/reports.php">
                 Annual Reports
                </a>
               </li>
               <li>
                <a href="/contact_JPL.php">
                 Contact Us
                </a>
               </li>
               <li>
                <a href="/opportunities/">
                 Opportunities
                </a>
               </li>
               <li>
                <a href="/acquisition/">
                 Doing Business with JPL
                </a>
               </li>
              </ul>
             </div>
             <div class="footer_sitemap_item">
              <h3 class="sitemap_title">
               missions
              </h3>
              <ul class="subnav">
               <li>
                <a href="/missions/?type=current">
                 Current
                </a>
               </li>
               <li>
                <a href="/missions/?type=past">
                 Past
                </a>
               </li>
               <li>
                <a href="/missions/?type=future">
                 Future
                </a>
               </li>
               <li>
                <a href="/missions/?type=proposed">
                 Proposed
                </a>
               </li>
               <li>
                <a href="/missions">
                 All
                </a>
               </li>
              </ul>
             </div>
             <div class="footer_sitemap_item">
              <h3 class="sitemap_title">
               galleries
              </h3>
              <ul class="subnav">
               <li>
                <a href="/spaceimages/">
                 JPL Space Images
                </a>
               </li>
               <li>
                <a href="/videos/">
                 Videos
                </a>
               </li>
               <li>
                <a href="/infographics/">
                 Infographics
                </a>
               </li>
               <li>
                <a href="https://photojournal.jpl.nasa.gov/">
                 Photojournal
                </a>
               </li>
               <li>
                <a href="http://www.nasaimages.org/">
                 NASA Images
                </a>
               </li>
               <li>
                <a href="/apps/">
                 Mobile Apps
                </a>
               </li>
              </ul>
             </div>
            </div>
            <div class="sitemap_block">
             <div class="footer_sitemap_item">
              <h3 class="sitemap_title">
               education
              </h3>
              <ul class="subnav">
               <li>
                <a href="/edu/intern/">
                 Intern
                </a>
               </li>
               <li>
                <a href="/edu/learn/">
                 Learn
                </a>
               </li>
               <li>
                <a href="/edu/teach/">
                 Teach
                </a>
               </li>
               <li>
                <a href="/edu/news/">
                 News
                </a>
               </li>
               <li>
                <a href="/edu/events/">
                 Events
                </a>
               </li>
              </ul>
             </div>
             <div class="footer_sitemap_item">
              <h3 class="sitemap_title">
               news
              </h3>
              <ul class="subnav">
               <li>
                <a href="/news">
                 Latest News
                </a>
               </li>
               <li>
                <a href="/news/presskits.php">
                 Press Kits
                </a>
               </li>
               <li>
                <a href="/news/factsheets.php">
                 Fact Sheets
                </a>
               </li>
               <li>
                <a href="/news/mediainformation.php">
                 Media Information
                </a>
               </li>
               <li>
                <a href="/universe/">
                 Universe Newspaper
                </a>
               </li>
              </ul>
             </div>
             <div class="footer_sitemap_item">
              <h3 class="sitemap_title">
               public events
              </h3>
              <ul class="subnav">
               <li>
                <a href="/events/">
                 Overview
                </a>
               </li>
               <li>
                <a href="/events/tours/views/">
                 Tours
                </a>
               </li>
               <li>
                <a href="/events/lectures.php">
                 Lecture Series
                </a>
               </li>
               <li>
                <a href="/events/speakers-bureau.php">
                 Speakers Bureau
                </a>
               </li>
               <li>
                <a href="/events/team-competitions.php">
                 Team Competitions
                </a>
               </li>
               <li>
                <a href="/events/special-events.php">
                 Special Events
                </a>
               </li>
              </ul>
             </div>
            </div>
            <div class="sitemap_block">
             <div class="footer_sitemap_item">
              <h3 class="sitemap_title">
               Our Sites
              </h3>
              <ul class="subnav">
               <li>
                <a href="/asteroidwatch/">
                 Asteroid Watch
                </a>
               </li>
               <li>
                <a href="http://saturn.jpl.nasa.gov/index.cfm">
                 Cassini - Mission to Saturn
                </a>
               </li>
               <li>
                <a href="http://climate.nasa.gov">
                 Earth / Global Climate Change
                </a>
               </li>
               <li>
                <a href="http://planetquest.jpl.nasa.gov">
                 Exoplanet Exploration
                </a>
               </li>
               <li>
                <a href="/missions/juno/">
                 Juno - Mission to Jupiter
                </a>
               </li>
               <li>
                <a href="http://marsprogram.jpl.nasa.gov/">
                 Mars Exploration
                </a>
               </li>
               <li>
                <a href="http://marsprogram.jpl.nasa.gov/msl/">
                 Mars Science Laboratory / Curiosity
                </a>
               </li>
               <li>
                <a href="http://rosetta.jpl.nasa.gov/">
                 Rosetta - Understanding Comets
                </a>
               </li>
               <li>
                <a href="http://scienceandtechnology.jpl.nasa.gov/">
                 Science and Technology
                </a>
               </li>
               <li>
                <a href="http://solarsystem.nasa.gov/">
                 Solar System Exploration
                </a>
               </li>
               <li>
                <a href="http://eyes.nasa.gov/">
                 Eyes on the Solar System
                </a>
               </li>
               <li>
                <a href="http://eyes.nasa.gov/earth/">
                 Eyes on the Earth
                </a>
               </li>
               <li>
                <a href="http://eyes.nasa.gov/exoplanets/">
                 Eyes on Exoplanets
                </a>
               </li>
               <li>
                <a href="http://www.spitzer.caltech.edu/">
                 Spitzer Space Telescope
                </a>
               </li>
              </ul>
             </div>
            </div>
            <div class="sitemap_block">
             <div class="footer_sitemap_item">
              <h3 class="sitemap_title">
               Follow JPL
              </h3>
              <ul class="subnav">
               <li>
                <a href="/signup/">
                 Newsletter
                </a>
               </li>
               <li>
                <a href="https://www.facebook.com/NASAJPL">
                 Facebook
                </a>
               </li>
               <li>
                <a href="http://twitter.com/NASAJPL">
                 Twitter
                </a>
               </li>
               <li>
                <a href="http://www.youtube.com/user/JPLnews">
                 YouTube
                </a>
               </li>
               <li>
                <a href="http://www.flickr.com/photos/nasa-jpl">
                 Flickr
                </a>
               </li>
               <li>
                <a href="http://instagram.com/nasajpl">
                 Instagram
                </a>
               </li>
               <li>
                <a href="https://www.linkedin.com/company/2004/">
                 LinkedIn
                </a>
               </li>
               <li>
                <a href="http://itunes.apple.com/podcast/hd-nasas-jet-propulsion-laboratory/id262254981">
                 iTunes
                </a>
               </li>
               <li>
                <a href="http://www.ustream.tv/nasajpl">
                 UStream
                </a>
               </li>
               <li>
                <a href="/rss/">
                 RSS
                </a>
               </li>
               <li>
                <a href="http://blogs.jpl.nasa.gov">
                 Blog
                </a>
               </li>
               <li>
                <a href="/onthego/">
                 Mobile
                </a>
               </li>
               <li>
                <a href="/social/">
                 All Social Media
                </a>
               </li>
              </ul>
             </div>
             <div class="footer_sitemap_item">
              <h3 class="sitemap_title">
               NASA
              </h3>
              <ul class="subnav">
               <li>
                <a href="http://jplwater.nasa.gov">
                 NASA Water Cleanup
                </a>
               </li>
               <li>
                <a href="http://www.hq.nasa.gov/office/pao/FOIA/agency/">
                 FOIA
                </a>
               </li>
              </ul>
             </div>
            </div>
           </div>
          </div>
          <div class="gradient_line">
          </div>
         </section>
         <section class="lower_footer">
          <div class="nav_container">
           <nav>
            <ul>
             <li>
              <a href="http://www.nasa.gov/" target="_blank">
               NASA
              </a>
             </li>
             |
             <li>
              <a href="http://www.caltech.edu/" target="_blank">
               Caltech
              </a>
             </li>
             |
             <li>
              <a href="/copyrights.php">
               Privacy
              </a>
             </li>
             |
             <li>
              <a href="/imagepolicy">
               Image Policy
              </a>
             </li>
             |
             <li>
              <a href="/faq.php">
               FAQ
              </a>
             </li>
             |
             <li>
              <a href="/contact_JPL.php">
               Feedback
              </a>
             </li>
            </ul>
           </nav>
          </div>
          <div class="credits">
           <span class="credits_manager">
            Site Manager: Jon Nelson
           </span>
           <span class="credits_webmaster">
            Webmasters: Tony Greicius, Luis Espinoza, Anil Natha
           </span>
          </div>
         </section>
        </footer>
       </div>
      </div>
      <script src="/assets/javascripts/vendor/prefixfree.js" type="text/javascript">
      </script>
      <script src="/assets/javascripts/vendor/prefixfree.jquery.js" type="text/javascript">
      </script>
      <script id="_fed_an_ua_tag" src="https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js?agency=NASA&amp;pua=UA-45212297-1&amp;subagency=JPL&amp;dclink=true&amp;sp=search,s,q&amp;sdor=false&amp;exts=tif,tiff" type="text/javascript">
      </script>
      <script type="text/javascript">
       setTimeout(function(){var a=document.createElement("script");
    var b=document.getElementsByTagName("script")[0];
    a.src=document.location.protocol+"//script.crazyegg.com/pages/scripts/0025/5267.js?"+Math.floor(new Date().getTime()/3600000);
    a.async=true;a.type="text/javascript";b.parentNode.insertBefore(a,b)}, 1);
      </script>
      <!-- END FOOTER: "DEFAULT" -->
      <div id="_atssh" style="visibility: hidden; height: 1px; width: 1px; position: absolute; top: -9999px; z-index: 100000;">
       <iframe id="_atssh168" src="https://s7.addthis.com/static/sh.1836a2a6d9443e6d814c8dfc.html#rand=0.8366367892749682&amp;iit=1526874846432&amp;tmr=load%3D1526874846280%26core%3D1526874846341%26main%3D1526874846427%26ifr%3D1526874846436&amp;cb=0&amp;cdn=0&amp;md=0&amp;kw=&amp;ab=-&amp;dh=www.jpl.nasa.gov&amp;dr=&amp;du=https%3A%2F%2Fwww.jpl.nasa.gov%2Fspaceimages%2F%3Fsearch%3D%26category%3DMars&amp;href=https%3A%2F%2Fwww.jpl.nasa.gov%2Fspaceimages%2F&amp;dt=Space%20Images&amp;dbg=0&amp;cap=tc%3D0%26ab%3D0&amp;inst=1&amp;jsl=1&amp;prod=undefined&amp;lng=en&amp;ogt=&amp;pc=men&amp;pub=&amp;ssl=1&amp;sid=5b0242de17c5dd32&amp;srf=0.01&amp;ver=300&amp;xck=1&amp;xtr=0&amp;og=&amp;csi=undefined&amp;rev=v8.3.12-wp&amp;ct=1&amp;xld=1&amp;xd=1" style="height: 1px; width: 1px; position: absolute; top: 0px; z-index: 100000; border: 0px; left: 0px;" title="AddThis utility frame">
       </iframe>
      </div>
      <style id="service-icons-0">
      </style>
     </body>
    </html>
    


```python
#we will need to click multiple times in order to get the full size version of the most recent image
#'a' id_="full_image"
browser.find_by_id('full_image').click()
```


```python
browser.find_link_by_partial_text('more info').click()
```


```python
img_html = browser.html
img_soup = bs(img_html, 'html.parser')
print(img_soup.prettify())
```

    <!DOCTYPE html>
    <!--[if IE 9]> <html class="no-js ie ie9" lang="en"> <![endif]-->
    <!--[if IE 8]> <html class="no-js ie ie8" lang="en"> <![endif]-->
    <html class="js flexbox canvas canvastext webgl geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths -webkit- no-touch" style="" xmlns="http://www.w3.org/1999/xhtml">
     <!-- START HEADER: "DEFAULT" -->
     <head>
      <script src="//m.addthis.com/live/red_lojson/300lo.json?si=5b02433cb5044f6b&amp;bkl=0&amp;bl=1&amp;pdt=653&amp;sid=5b02433cb5044f6b&amp;pub=&amp;rev=v8.3.12-wp&amp;ln=en&amp;pc=men&amp;cb=0&amp;ab=-&amp;dp=www.jpl.nasa.gov&amp;fp=spaceimages%2Fdetails.php%3Fid%3DPIA17470&amp;fr=spaceimages%2F%3Fsearch%3D%26category%3DMars&amp;of=2&amp;pd=0&amp;irt=0&amp;vcl=0&amp;md=0&amp;ct=1&amp;tct=0&amp;abt=0&amp;cdn=0&amp;pi=1&amp;rb=2&amp;gen=100&amp;chr=UTF-8&amp;colc=1526874940306&amp;jsl=1&amp;skipb=1&amp;callback=addthis.cbs.oln9_97749552119889560" type="text/javascript">
      </script>
      <script async="" src="https://script.crazyegg.com/pages/scripts/0025/5267.js?424131" type="text/javascript">
      </script>
      <meta charset="utf-8"/>
      <!-- Always force latest IE rendering engine or request Chrome Frame -->
      <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible"/>
      <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
      <title>
       Space Images | Titan's Northern Lakes: Salt Flats?
      </title>
      <style data-href="/assets/stylesheets/manifest.css" media="all">
       @import url("https://www.jpl.nasa.gov/assets/stylesheets/vendor/jquery.fancybox.css");@import url("https://www.jpl.nasa.gov/assets/stylesheets/vendor/jquery.fancybox-thumbs.css");html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{border:0;font-size:100%;font:inherit;vertical-align:baseline;margin:0;padding:0}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:none}table{border-collapse:collapse;border-spacing:0}html,button,input,select,textarea{color:#222}body{font-size:1em;line-height:1.4}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}audio,canvas,img,video{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.browsehappy{margin:0.2em 0;background:#ccc;color:#000;padding:0.2em 0}.ir{background-color:transparent;border:0;overflow:hidden;*text-indent:-9999px}.ir:before{content:"";display:block;width:0;height:150%}.hidden{display:none !important;visibility:hidden}.visuallyhidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.visuallyhidden.focusable:active,.visuallyhidden.focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.invisible{visibility:hidden}.clearfix:before,.main_nav_overlay .nav_item:before,.clearfix:after,.main_nav_overlay .nav_item:after{content:" ";display:table}.clearfix:after,.main_nav_overlay .nav_item:after{clear:both}.clearfix,.main_nav_overlay .nav_item{*zoom:1}@media print{*{background:transparent !important;color:#000 !important;box-shadow:none !important;text-shadow:none !important}a,a:visited{text-decoration:underline}a[href]:after{content:" (" attr(href) ")"}abbr[title]:after{content:" (" attr(title) ")"}.ir a:after,a[href^="javascript:"]:after,a[href^="#"]:after{content:""}pre,blockquote{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}tr,img{page-break-inside:avoid}img{max-width:100% !important}@page{margin:0.5cm}p,h2,h3{orphans:3;widows:3}h2,h3{page-break-after:avoid}}.ui-helper-hidden{display:none}.ui-helper-hidden-accessible{position:absolute !important;clip:rect(1px 1px 1px 1px);clip:rect(1px, 1px, 1px, 1px)}.ui-helper-reset{margin:0;padding:0;border:0;outline:0;line-height:1.3;text-decoration:none;font-size:100%;list-style:none}.ui-helper-clearfix:before,.ui-helper-clearfix:after{content:"";display:table}.ui-helper-clearfix:after{clear:both}.ui-helper-clearfix{zoom:1}.ui-helper-zfix{width:100%;height:100%;top:0;left:0;position:absolute;opacity:0;filter:Alpha(Opacity=0)}.ui-state-disabled{cursor:default !important}.ui-icon{display:block;text-indent:-99999px;overflow:hidden;background-repeat:no-repeat}.ui-widget-overlay{position:absolute;top:0;left:0;width:100%;height:100%}.ui-slider{position:relative;text-align:left}.ui-slider .ui-slider-handle{position:absolute;z-index:2;width:6.2em;height:.7em;cursor:default}.ui-slider .ui-slider-range{position:absolute;z-index:1;font-size:.7em;display:block;border:0;background-position:0 0}.ui-slider-horizontal{height:.8em}.ui-slider-horizontal .ui-slider-handle{top:0;margin-left:0}.ui-slider-horizontal .ui-slider-range{top:0;height:100%}.ui-slider-horizontal .ui-slider-range-min{left:0}.ui-slider-horizontal .ui-slider-range-max{right:0}.ui-slider-vertical{width:.8em;height:100px}.ui-slider-vertical .ui-slider-handle{left:-.3em;margin-left:0;margin-bottom:-.6em}.ui-slider-vertical .ui-slider-range{left:0;width:100%}.ui-slider-vertical .ui-slider-range-min{bottom:0}.ui-slider-vertical .ui-slider-range-max{top:0}.ui-widget{font-family:Segoe UI,Arial,sans-serif;font-size:1.1em}.ui-widget .ui-widget{font-size:1em}.ui-widget input,.ui-widget select,.ui-widget textarea,.ui-widget button{font-family:Segoe UI,Arial,sans-serif;font-size:1em}.ui-widget-content{border:1px solid #666666;background:#000000;color:#ffffff}.ui-widget-content a{color:#ffffff}.ui-widget-header{border:1px solid #333333;background:#333333;color:#ffffff;font-weight:700}.ui-widget-header a{color:#ffffff}.ui-state-default,.ui-widget-content .ui-state-default,.ui-widget-header .ui-state-default{border:1px solid #666666;background:#555555;font-weight:700;color:#eeeeee}.ui-state-default a,.ui-state-default a:link,.ui-state-default a:visited{color:#eeeeee;text-decoration:none}.ui-state-hover a,.ui-state-hover a:hover{color:#ffffff;text-decoration:none}.ui-state-active,.ui-widget-content .ui-state-active,.ui-widget-header .ui-state-active{border:1px solid #ffaf0f;background:#f58400;font-weight:700;color:#ffffff}.ui-state-active a,.ui-state-active a:link,.ui-state-active a:visited{color:#ffffff;text-decoration:none}.ui-state-highlight,.ui-widget-content .ui-state-highlight,.ui-widget-header .ui-state-highlight{border:1px solid #cccccc;background:#eeeeee;color:#2e7db2}.ui-state-highlight a,.ui-widget-content .ui-state-highlight a,.ui-widget-header .ui-state-highlight a{color:#2e7db2}.ui-state-error,.ui-widget-content .ui-state-error,.ui-widget-header .ui-state-error{border:1px solid #ffb73d;background:#ffc73d;color:#111111}.ui-state-error a,.ui-widget-content .ui-state-error a,.ui-widget-header .ui-state-error a{color:#111111}.ui-state-error-text,.ui-widget-content .ui-state-error-text,.ui-widget-header .ui-state-error-text{color:#111111}.ui-priority-primary,.ui-widget-content .ui-priority-primary,.ui-widget-header .ui-priority-primary{font-weight:700}.ui-priority-secondary,.ui-widget-content .ui-priority-secondary,.ui-widget-header .ui-priority-secondary{opacity:.7;filter:Alpha(Opacity=70);font-weight:400}.ui-state-disabled,.ui-widget-content .ui-state-disabled,.ui-widget-header .ui-state-disabled{opacity:.35;filter:Alpha(Opacity=35);background-image:none}.ui-icon{width:16px;height:16px}.ui-icon-carat-1-n{background-position:0 0}.ui-icon-carat-1-ne{background-position:-16px 0}.ui-icon-carat-1-e{background-position:-32px 0}.ui-icon-carat-1-se{background-position:-48px 0}.ui-icon-carat-1-s{background-position:-64px 0}.ui-icon-carat-1-sw{background-position:-80px 0}.ui-icon-carat-1-w{background-position:-96px 0}.ui-icon-carat-1-nw{background-position:-112px 0}.ui-icon-carat-2-n-s{background-position:-128px 0}.ui-icon-carat-2-e-w{background-position:-144px 0}.ui-icon-triangle-1-n{background-position:0 -16px}.ui-icon-triangle-1-ne{background-position:-16px -16px}.ui-icon-triangle-1-e{background-position:-32px -16px}.ui-icon-triangle-1-se{background-position:-48px -16px}.ui-icon-triangle-1-s{background-position:-64px -16px}.ui-icon-triangle-1-sw{background-position:-80px -16px}.ui-icon-triangle-1-w{background-position:-96px -16px}.ui-icon-triangle-1-nw{background-position:-112px -16px}.ui-icon-triangle-2-n-s{background-position:-128px -16px}.ui-icon-triangle-2-e-w{background-position:-144px -16px}.ui-icon-arrow-1-n{background-position:0 -32px}.ui-icon-arrow-1-ne{background-position:-16px -32px}.ui-icon-arrow-1-e{background-position:-32px -32px}.ui-icon-arrow-1-se{background-position:-48px -32px}.ui-icon-arrow-1-s{background-position:-64px -32px}.ui-icon-arrow-1-sw{background-position:-80px -32px}.ui-icon-arrow-1-w{background-position:-96px -32px}.ui-icon-arrow-1-nw{background-position:-112px -32px}.ui-icon-arrow-2-n-s{background-position:-128px -32px}.ui-icon-arrow-2-ne-sw{background-position:-144px -32px}.ui-icon-arrow-2-e-w{background-position:-160px -32px}.ui-icon-arrow-2-se-nw{background-position:-176px -32px}.ui-icon-arrowstop-1-n{background-position:-192px -32px}.ui-icon-arrowstop-1-e{background-position:-208px -32px}.ui-icon-arrowstop-1-s{background-position:-224px -32px}.ui-icon-arrowstop-1-w{background-position:-240px -32px}.ui-icon-arrowthick-1-n{background-position:0 -48px}.ui-icon-arrowthick-1-ne{background-position:-16px -48px}.ui-icon-arrowthick-1-e{background-position:-32px -48px}.ui-icon-arrowthick-1-se{background-position:-48px -48px}.ui-icon-arrowthick-1-s{background-position:-64px -48px}.ui-icon-arrowthick-1-sw{background-position:-80px -48px}.ui-icon-arrowthick-1-w{background-position:-96px -48px}.ui-icon-arrowthick-1-nw{background-position:-112px -48px}.ui-icon-arrowthick-2-n-s{background-position:-128px -48px}.ui-icon-arrowthick-2-ne-sw{background-position:-144px -48px}.ui-icon-arrowthick-2-e-w{background-position:-160px -48px}.ui-icon-arrowthick-2-se-nw{background-position:-176px -48px}.ui-icon-arrowthickstop-1-n{background-position:-192px -48px}.ui-icon-arrowthickstop-1-e{background-position:-208px -48px}.ui-icon-arrowthickstop-1-s{background-position:-224px -48px}.ui-icon-arrowthickstop-1-w{background-position:-240px -48px}.ui-icon-arrowreturnthick-1-w{background-position:0 -64px}.ui-icon-arrowreturnthick-1-n{background-position:-16px -64px}.ui-icon-arrowreturnthick-1-e{background-position:-32px -64px}.ui-icon-arrowreturnthick-1-s{background-position:-48px -64px}.ui-icon-arrowreturn-1-w{background-position:-64px -64px}.ui-icon-arrowreturn-1-n{background-position:-80px -64px}.ui-icon-arrowreturn-1-e{background-position:-96px -64px}.ui-icon-arrowreturn-1-s{background-position:-112px -64px}.ui-icon-arrowrefresh-1-w{background-position:-128px -64px}.ui-icon-arrowrefresh-1-n{background-position:-144px -64px}.ui-icon-arrowrefresh-1-e{background-position:-160px -64px}.ui-icon-arrowrefresh-1-s{background-position:-176px -64px}.ui-icon-arrow-4{background-position:0 -80px}.ui-icon-arrow-4-diag{background-position:-16px -80px}.ui-icon-extlink{background-position:-32px -80px}.ui-icon-newwin{background-position:-48px -80px}.ui-icon-refresh{background-position:-64px -80px}.ui-icon-shuffle{background-position:-80px -80px}.ui-icon-transfer-e-w{background-position:-96px -80px}.ui-icon-transferthick-e-w{background-position:-112px -80px}.ui-icon-folder-collapsed{background-position:0 -96px}.ui-icon-folder-open{background-position:-16px -96px}.ui-icon-document{background-position:-32px -96px}.ui-icon-document-b{background-position:-48px -96px}.ui-icon-note{background-position:-64px -96px}.ui-icon-mail-closed{background-position:-80px -96px}.ui-icon-mail-open{background-position:-96px -96px}.ui-icon-suitcase{background-position:-112px -96px}.ui-icon-comment{background-position:-128px -96px}.ui-icon-person{background-position:-144px -96px}.ui-icon-print{background-position:-160px -96px}.ui-icon-trash{background-position:-176px -96px}.ui-icon-locked{background-position:-192px -96px}.ui-icon-unlocked{background-position:-208px -96px}.ui-icon-bookmark{background-position:-224px -96px}.ui-icon-tag{background-position:-240px -96px}.ui-icon-home{background-position:0 -112px}.ui-icon-flag{background-position:-16px -112px}.ui-icon-calendar{background-position:-32px -112px}.ui-icon-cart{background-position:-48px -112px}.ui-icon-pencil{background-position:-64px -112px}.ui-icon-clock{background-position:-80px -112px}.ui-icon-disk{background-position:-96px -112px}.ui-icon-calculator{background-position:-112px -112px}.ui-icon-zoomin{background-position:-128px -112px}.ui-icon-zoomout{background-position:-144px -112px}.ui-icon-search{background-position:-160px -112px}.ui-icon-wrench{background-position:-176px -112px}.ui-icon-gear{background-position:-192px -112px}.ui-icon-heart{background-position:-208px -112px}.ui-icon-star{background-position:-224px -112px}.ui-icon-link{background-position:-240px -112px}.ui-icon-cancel{background-position:0 -128px}.ui-icon-plus{background-position:-16px -128px}.ui-icon-plusthick{background-position:-32px -128px}.ui-icon-minus{background-position:-48px -128px}.ui-icon-minusthick{background-position:-64px -128px}.ui-icon-close{background-position:-80px -128px}.ui-icon-closethick{background-position:-96px -128px}.ui-icon-key{background-position:-112px -128px}.ui-icon-lightbulb{background-position:-128px -128px}.ui-icon-scissors{background-position:-144px -128px}.ui-icon-clipboard{background-position:-160px -128px}.ui-icon-copy{background-position:-176px -128px}.ui-icon-contact{background-position:-192px -128px}.ui-icon-image{background-position:-208px -128px}.ui-icon-video{background-position:-224px -128px}.ui-icon-script{background-position:-240px -128px}.ui-icon-alert{background-position:0 -144px}.ui-icon-info{background-position:-16px -144px}.ui-icon-notice{background-position:-32px -144px}.ui-icon-help{background-position:-48px -144px}.ui-icon-check{background-position:-64px -144px}.ui-icon-bullet{background-position:-80px -144px}.ui-icon-radio-on{background-position:-96px -144px}.ui-icon-radio-off{background-position:-112px -144px}.ui-icon-pin-w{background-position:-128px -144px}.ui-icon-pin-s{background-position:-144px -144px}.ui-icon-play{background-position:0 -160px}.ui-icon-pause{background-position:-16px -160px}.ui-icon-seek-next{background-position:-32px -160px}.ui-icon-seek-prev{background-position:-48px -160px}.ui-icon-seek-end{background-position:-64px -160px}.ui-icon-seek-start{background-position:-80px -160px}.ui-icon-seek-first{background-position:-80px -160px}.ui-icon-stop{background-position:-96px -160px}.ui-icon-eject{background-position:-112px -160px}.ui-icon-volume-off{background-position:-128px -160px}.ui-icon-volume-on{background-position:-144px -160px}.ui-icon-power{background-position:0 -176px}.ui-icon-signal-diag{background-position:-16px -176px}.ui-icon-signal{background-position:-32px -176px}.ui-icon-battery-0{background-position:-48px -176px}.ui-icon-battery-1{background-position:-64px -176px}.ui-icon-battery-2{background-position:-80px -176px}.ui-icon-battery-3{background-position:-96px -176px}.ui-icon-circle-plus{background-position:0 -192px}.ui-icon-circle-minus{background-position:-16px -192px}.ui-icon-circle-close{background-position:-32px -192px}.ui-icon-circle-triangle-e{background-position:-48px -192px}.ui-icon-circle-triangle-s{background-position:-64px -192px}.ui-icon-circle-triangle-w{background-position:-80px -192px}.ui-icon-circle-triangle-n{background-position:-96px -192px}.ui-icon-circle-arrow-e{background-position:-112px -192px}.ui-icon-circle-arrow-s{background-position:-128px -192px}.ui-icon-circle-arrow-w{background-position:-144px -192px}.ui-icon-circle-arrow-n{background-position:-160px -192px}.ui-icon-circle-zoomin{background-position:-176px -192px}.ui-icon-circle-zoomout{background-position:-192px -192px}.ui-icon-circle-check{background-position:-208px -192px}.ui-icon-circlesmall-plus{background-position:0 -208px}.ui-icon-circlesmall-minus{background-position:-16px -208px}.ui-icon-circlesmall-close{background-position:-32px -208px}.ui-icon-squaresmall-plus{background-position:-48px -208px}.ui-icon-squaresmall-minus{background-position:-64px -208px}.ui-icon-squaresmall-close{background-position:-80px -208px}.ui-icon-grip-dotted-vertical{background-position:0 -224px}.ui-icon-grip-dotted-horizontal{background-position:-16px -224px}.ui-icon-grip-solid-vertical{background-position:-32px -224px}.ui-icon-grip-solid-horizontal{background-position:-48px -224px}.ui-icon-gripsmall-diagonal-se{background-position:-64px -224px}.ui-icon-grip-diagonal-se{background-position:-80px -224px}.ui-corner-all,.ui-corner-top,.ui-corner-left,.ui-corner-tl{-moz-border-radius-topleft:6px;-webkit-border-top-left-radius:6px;-khtml-border-top-left-radius:6px;border-top-left-radius:6px}.ui-corner-all,.ui-corner-top,.ui-corner-right,.ui-corner-tr{-moz-border-radius-topright:6px;-webkit-border-top-right-radius:6px;-khtml-border-top-right-radius:6px;border-top-right-radius:6px}.ui-corner-all,.ui-corner-bottom,.ui-corner-left,.ui-corner-bl{-moz-border-radius-bottomleft:6px;-webkit-border-bottom-left-radius:6px;-khtml-border-bottom-left-radius:6px;border-bottom-left-radius:6px}.ui-corner-all,.ui-corner-bottom,.ui-corner-right,.ui-corner-br{-moz-border-radius-bottomright:6px;-webkit-border-bottom-right-radius:6px;-khtml-border-bottom-right-radius:6px;border-bottom-right-radius:6px}#simplemodal-overlay{background-color:#000}#simplemodal-container{height:360px;width:600px;color:#fff;background-color:#000;border:0;padding:0}#simplemodal-container .simplemodal-data{padding:20px 50px}.slick-slider{position:relative;display:block;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list{position:relative;overflow:hidden;display:block;margin:0;padding:0}.slick-list:focus{outline:none}.slick-loading .slick-list{background:#fff url("https://www.jpl.nasa.gov/assets/stylesheets/./ajax-loader.gif") center center no-repeat}.slick-list.dragging{cursor:pointer;cursor:hand}.slick-slider .slick-list,.slick-track,.slick-slide,.slick-slide img{-webkit-transform:translate3d(0, 0, 0);-moz-transform:translate3d(0, 0, 0);-ms-transform:translate3d(0, 0, 0);-o-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}.slick-track{position:relative;left:0;top:0;display:block;zoom:1}.slick-track:before,.slick-track:after{content:"";display:table}.slick-track:after{clear:both}.slick-loading .slick-track{visibility:hidden}.slick-slide{float:left;height:100%;min-height:1px;display:none}.slick-slide img{display:block}.slick-slide.slick-loading img{display:none}.slick-slide.dragging img{pointer-events:none}.slick-initialized .slick-slide{display:block}.slick-loading .slick-slide{visibility:hidden}.slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}@font-face{font-family:"slick";src:url("https://www.jpl.nasa.gov/assets/stylesheets/./fonts/slick.eot");src:url("https://www.jpl.nasa.gov/assets/stylesheets/./fonts/slick.eot?#iefix") format("embedded-opentype"),url("https://www.jpl.nasa.gov/assets/stylesheets/./fonts/slick.woff") format("woff"),url("https://www.jpl.nasa.gov/assets/stylesheets/./fonts/slick.ttf") format("truetype"),url("https://www.jpl.nasa.gov/assets/stylesheets/./fonts/slick.svg#slick") format("svg");font-weight:normal;font-style:normal}.slick-prev,.slick-next{position:absolute;display:block;height:20px;width:20px;line-height:0;font-size:0;cursor:pointer;background:transparent;color:transparent;top:50%;margin-top:-10px;padding:0;border:none;outline:none}.slick-prev:hover,.slick-prev:focus,.slick-next:hover,.slick-next:focus{outline:none;background:transparent;color:transparent}.slick-prev:hover:before,.slick-prev:focus:before,.slick-next:hover:before,.slick-next:focus:before{opacity:1}.slick-prev.slick-disabled:before,.slick-next.slick-disabled:before{opacity:0.25}.slick-prev:before,.slick-next:before{font-family:"slick";font-size:20px;line-height:1;color:white;opacity:0.75;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.slick-prev{left:-25px}.slick-prev:before{content:"\2190"}.slick-next{right:-25px}.slick-next:before{content:"\2192"}.slick-slider{margin-bottom:30px}.slick-dots{position:absolute;bottom:-45px;list-style:none;display:block;text-align:center;padding:0;width:100%}.slick-dots li{position:relative;display:inline-block;height:20px;width:20px;margin:0 5px;padding:0;cursor:pointer}.slick-dots li button{border:0;background:transparent;display:block;height:20px;width:20px;outline:none;line-height:0;font-size:0;color:transparent;padding:5px;cursor:pointer}.slick-dots li button:hover,.slick-dots li button:focus{outline:none}.slick-dots li button:hover:before,.slick-dots li button:focus:before{opacity:1}.slick-dots li button:before{position:absolute;top:0;left:0;content:"\2022";width:20px;height:20px;font-family:"slick";font-size:6px;line-height:20px;text-align:center;color:black;opacity:0.25;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.slick-dots li.slick-active button:before{color:black;opacity:0.75}[dir="rtl"] .slick-next{right:auto;left:-25px}[dir="rtl"] .slick-next:before{content:"\2190"}[dir="rtl"] .slick-prev{right:-25px;left:auto}[dir="rtl"] .slick-prev:before{content:"\2192"}[dir="rtl"] .slick-slide{float:right}*,*:before,*:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}html,html a,select,input{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}input.placeholder,textarea.placeholder{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}input:-moz-placeholder,textarea:-moz-placeholder{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}input::-moz-placeholder,textarea::-moz-placeholder{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}html,button,input,select,textarea{font-family:Helvetica, Arial, sans-serif}html{min-height:100%;-webkit-text-size-adjust:100%}body{font-family:Helvetica, Arial, sans-serif;font-size:96%;line-height:1.4;min-height:100%;position:relative}body.noscroll{overflow:hidden}@media (min-width: 600px){body{font-size:98%}}@media (min-width: 769px){body{font-size:100%}}@media (min-width: 1024px){body{font-size:102%}}@media (min-width: 1200px){body{font-size:104%}}h1{letter-spacing:-.03em}@media (min-width: 769px){h1{letter-spacing:-.04em}}h2{letter-spacing:-.02em}@media (min-width: 769px){h2{letter-spacing:-.03em}}h3{letter-spacing:-.01em}@media (min-width: 769px){h3{letter-spacing:-.02em}}h4{letter-spacing:-.01em}a{color:#0e7ee0;text-decoration:none}img{width:100%}i{font-style:italic}strong{font-weight:600}p{margin:1em 0}article{overflow:hidden;*zoom:1}@media (min-width: 769px){.mobile_only{display:none !important}}.gradient_line{margin-left:auto;margin-right:auto;content:" ";width:100%;height:1px;clear:both;background:#777777;background:-moz-linear-gradient(left, transparent, #777, transparent);background:-webkit-linear-gradient(left, transparent, #777, transparent);background:linear-gradient(to right, transparent, #777, transparent)}.scrollblock{background-color:white;z-index:10;position:relative;padding-top:0}ul.articles,.gallery_list{overflow:hidden;*zoom:1;margin-bottom:3em}ul.articles li,.gallery_list li{position:relative}.print_only{display:none}.module_title,.module_title_small,.media_feature_title,.sitemap_title,.nav_title,.article_title,.sidebar_title,.rollover_title{letter-spacing:-.04em}.module_title{letter-spacing:-.04em}.rollover_title{font-size:2.34em;margin-bottom:0em}@media (min-width: 600px){.rollover_title{font-size:2.7em;margin-bottom:0em}}@media (min-width: 769px){.rollover_title{font-size:3.06em;margin-bottom:0em}}@media (min-width: 1024px){.rollover_title{font-size:3.24em;margin-bottom:0em}}@media (min-width: 1200px){.rollover_title{font-size:3.42em;margin-bottom:0em}}.content_title{letter-spacing:0;font-weight:600}.module_title{font-size:1.82em;margin-bottom:0.3em;text-align:center;font-weight:700}@media (min-width: 600px){.module_title{font-size:2.1em;margin-bottom:0.54em}}@media (min-width: 769px){.module_title{font-size:2.38em;margin-bottom:0.78em}}@media (min-width: 1024px){.module_title{font-size:2.52em;margin-bottom:0.87em}}@media (min-width: 1200px){.module_title{font-size:2.66em;margin-bottom:0.96em}}@media (min-width: 600px){.grid_gallery .module_title{text-align:left;width:80%}}.module_title_small{font-size:1.4em;font-weight:700;display:inline-block}@media (min-width: 600px){.module_title_small{font-size:1.8em}}.filter_bar .module_title_small{text-align:left;width:90%}@media (min-width: 600px){.filter_bar .module_title_small{text-align:center}}.category_title{font-size:.9em;font-weight:600;color:#71a3d5;text-transform:uppercase;margin-bottom:6px}.multimedia_teaser .category_title{font-size:.8em}.primary_media_feature .media_feature_title{font-size:1.82em;margin-bottom:0em;font-weight:700;color:white}@media (min-width: 600px){.primary_media_feature .media_feature_title{font-size:2.1em;margin-bottom:0em}}@media (min-width: 769px){.primary_media_feature .media_feature_title{font-size:2.38em;margin-bottom:0em}}@media (min-width: 1024px){.primary_media_feature .media_feature_title{font-size:2.52em;margin-bottom:0em}}@media (min-width: 1200px){.primary_media_feature .media_feature_title{font-size:2.66em;margin-bottom:0em}}.media_feature .media_feature_title{font-size:1.43em;margin-bottom:0em;font-weight:700;color:white}@media (min-width: 600px){.media_feature .media_feature_title{font-size:1.65em;margin-bottom:0em}}@media (min-width: 769px){.media_feature .media_feature_title{font-size:1.87em;margin-bottom:0em}}@media (min-width: 1024px){.media_feature .media_feature_title{font-size:1.98em;margin-bottom:0em}}@media (min-width: 1200px){.media_feature .media_feature_title{font-size:2.09em;margin-bottom:0em}}.multimedia_module_gallery .media_feature_title{font-size:1.43em;margin-bottom:0em;color:white;font-weight:700}@media (min-width: 600px){.multimedia_module_gallery .media_feature_title{font-size:1.65em;margin-bottom:0em}}@media (min-width: 769px){.multimedia_module_gallery .media_feature_title{font-size:1.87em;margin-bottom:0em}}@media (min-width: 1024px){.multimedia_module_gallery .media_feature_title{font-size:1.98em;margin-bottom:0em}}@media (min-width: 1200px){.multimedia_module_gallery .media_feature_title{font-size:2.09em;margin-bottom:0em}}.article_title{font-size:1.82em;margin-bottom:0em;font-weight:700}@media (min-width: 600px){.article_title{font-size:2.1em;margin-bottom:0em}}@media (min-width: 769px){.article_title{font-size:2.38em;margin-bottom:0em}}@media (min-width: 1024px){.article_title{font-size:2.52em;margin-bottom:0em}}@media (min-width: 1200px){.article_title{font-size:2.66em;margin-bottom:0em}}.sidebar_title{font-size:1.55em;margin-bottom:0.6em;font-weight:700;margin-left:-1px}.links_module a{font-size:.9em;cursor:pointer}.site_header_area{position:absolute;width:100%;z-index:2000;height:70px;transition:background-color .5s ease-in-out}@media (min-width: 600px){.site_header_area{height:90px}}@media (min-width: 769px){.site_header_area{height:92px}}@media (min-width: 1024px){.site_header_area{height:105px}}.touch .iosWasZoomed .site_header_area{position:absolute !important;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}@media screen and (orientation: portrait){.touch .site_header_area.fixed{position:fixed;background-color:#e4e9ef;-webkit-box-shadow:0 4px 4px -1px rgba(0,0,0,0.15);-moz-box-shadow:0 4px 4px -2px rgba(0,0,0,0.15);box-shadow:0 4px 4px -2px rgba(0,0,0,0.15);opacity:0}.touch .site_header_area.fixed.fixed_show{transition:opacity .5s ease-in-out;opacity:1}}.no-touch .site_header_area.fixed{position:fixed;background-color:#e4e9ef;-webkit-box-shadow:0 4px 4px -1px rgba(0,0,0,0.15);-moz-box-shadow:0 4px 4px -2px rgba(0,0,0,0.15);box-shadow:0 4px 4px -2px rgba(0,0,0,0.15);opacity:0}.no-touch .site_header_area.fixed.fixed_show{transition:opacity .5s ease-in-out;opacity:1}.site_header{clear:both;z-index:5;width:100%;height:100%;position:relative;margin:0 auto;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:-moz-none;-ms-user-select:none;user-select:none;padding:.8em 0 0 .5em}@media (min-width: 600px){.site_header{padding:1em 0 0 1.2em}}@media (min-width: 769px){.site_header{padding:1.1em 0 0 1.5em}}@media (min-width: 1024px){.site_header{padding:1.1em 0 0 2em}}.site_header .brand_area{position:relative;background:url("https://www.jpl.nasa.gov/assets/images/logo_nasa_trio_white@2x.png") no-repeat;background-size:100%;z-index:300;display:inline-block;width:250px;height:56px}@media (min-width: 600px){.site_header .brand_area{width:330px;height:64px}}@media (min-width: 769px){.site_header .brand_area{margin:0}}@media (min-width: 1024px){.site_header .brand_area{width:362px;height:68px}}.site_header .brand_area .brand1{height:100%;width:25%;float:left}.site_header .brand_area .brand2{float:left;width:75%;height:100%}.site_header .brand_area .jpl_logo{text-indent:-9999px;width:100%;float:left;height:100%}.site_header .brand_area .caltech_logo{display:none}.site_header .brand_area .nasa_logo{text-indent:-9999px}.site_header a#jpl_logo,.site_header a#caltech_logo,.site_header a.nasa_logo{display:block;height:100%}.light_background .site_header .brand_area,.fixed .site_header .brand_area{background:url("https://www.jpl.nasa.gov/assets/images/logo_nasa_trio_black@2x.png") no-repeat;background-size:100%}.light_background .site_header .search_field,.light_background .site_header form.submit_newsletter .email_field,form.submit_newsletter .light_background .site_header .email_field,.fixed .site_header .search_field,.fixed .site_header form.submit_newsletter .email_field,form.submit_newsletter .fixed .site_header .email_field{background-color:white !important;color:#222222 !important}.light_background .site_header .search_field.placeholder,.light_background .site_header form.submit_newsletter .placeholder.email_field,form.submit_newsletter .light_background .site_header .placeholder.email_field,.fixed .site_header .search_field.placeholder,.fixed .site_header form.submit_newsletter .placeholder.email_field,form.submit_newsletter .fixed .site_header .placeholder.email_field{color:#5a6470 !important;opacity:1 !important}.light_background .site_header .search_field:-moz-placeholder,.light_background .site_header form.submit_newsletter .email_field:-moz-placeholder,form.submit_newsletter .light_background .site_header .email_field:-moz-placeholder,.fixed .site_header .search_field:-moz-placeholder,.fixed .site_header form.submit_newsletter .email_field:-moz-placeholder,form.submit_newsletter .fixed .site_header .email_field:-moz-placeholder{color:#5a6470 !important;opacity:1 !important}.light_background .site_header .search_field::-moz-placeholder,.light_background .site_header form.submit_newsletter .email_field::-moz-placeholder,form.submit_newsletter .light_background .site_header .email_field::-moz-placeholder,.fixed .site_header .search_field::-moz-placeholder,.fixed .site_header form.submit_newsletter .email_field::-moz-placeholder,form.submit_newsletter .fixed .site_header .email_field::-moz-placeholder{color:#5a6470 !important;opacity:1 !important}.light_background .site_header .search_field::-webkit-input-placeholder,.light_background .site_header form.submit_newsletter .email_field::-webkit-input-placeholder,form.submit_newsletter .light_background .site_header .email_field::-webkit-input-placeholder,.fixed .site_header .search_field::-webkit-input-placeholder,.fixed .site_header form.submit_newsletter .email_field::-webkit-input-placeholder,form.submit_newsletter .fixed .site_header .email_field::-webkit-input-placeholder{color:#5a6470 !important;opacity:1 !important}.light_background .site_header .section_search .search_submit,.light_background .site_header form.nav_search .search_submit,.light_background .site_header .overlay_search .search_submit,.light_background .site_header form.submit_newsletter .search_submit,form.submit_newsletter .light_background .site_header .section_search .email_submit,form.submit_newsletter .light_background .site_header form.nav_search .email_submit,form.submit_newsletter .light_background .site_header .overlay_search .email_submit,.light_background .site_header form.submit_newsletter .email_submit,.fixed .site_header .section_search .search_submit,.fixed .site_header form.nav_search .search_submit,.fixed .site_header .overlay_search .search_submit,.fixed .site_header form.submit_newsletter .search_submit,form.submit_newsletter .fixed .site_header .section_search .email_submit,form.submit_newsletter .fixed .site_header form.nav_search .email_submit,form.submit_newsletter .fixed .site_header .overlay_search .email_submit,.fixed .site_header form.submit_newsletter .email_submit{background:url("https://www.jpl.nasa.gov/assets/images/search_icon_darkgrey@2x.png") no-repeat 6px 9px transparent;background-size:20px}.light_background .site_header a.menu_button .menu_icon,.fixed .site_header a.menu_button .menu_icon{text-indent:-9999px;background:url("https://www.jpl.nasa.gov/assets/images/menu_icon_black@2x.png") center center no-repeat;background-size:25px 20px}@media (min-width: 600px){.light_background .site_header a.menu_button .menu_icon,.fixed .site_header a.menu_button .menu_icon{background:url("https://www.jpl.nasa.gov/assets/images/menu_button_jpl@2x.png") center center no-repeat;background-size:90%}}@media (min-width: 1200px){.light_background .site_header a.menu_button .menu_icon,.fixed .site_header a.menu_button .menu_icon{background-size:100%}}.main_nav_overlay .site_header .brand_area{background:url("https://www.jpl.nasa.gov/assets/images/logo_nasa_trio_white@2x.png") no-repeat;background-size:100%}.nav_area{position:absolute;top:1.1em;right:.3em}@media (min-width: 600px){.nav_area{top:1.7em;right:1em}}@media (min-width: 769px){.nav_area{top:1.8em}}@media (min-width: 1024px){.nav_area{top:2em}}@media (min-width: 600px){.nav_area{right:1.3em}}a.menu_button{position:relative;display:inline-block;vertical-align:middle;height:40px;padding:0.6em 1em 0;text-decoration:none}@media (min-width: 600px){a.menu_button{padding:0}}a.menu_button .menu_icon{text-indent:-9999px;display:inline-block;vertical-align:middle;width:25px;height:20px;background:url("https://www.jpl.nasa.gov/assets/images/menu_icon@2x.png") center center no-repeat;background-size:25px 20px}@media (min-width: 600px){a.menu_button .menu_icon{background:url("https://www.jpl.nasa.gov/assets/images/menu_button_jpl@2x.png") center center no-repeat;background-size:90%;width:140px;height:43px}}@media (min-width: 1200px){a.menu_button .menu_icon{background-size:100%}}a.menu_button .menu_label{display:none}@media (min-width: 769px){a.menu_button .menu_label{top:.1em;margin-left:.3em;position:relative;text-transform:uppercase;color:white}}.header_mask{background-color:#e4e9ef;height:70px}@media (min-width: 600px){.header_mask{height:90px}}@media (min-width: 769px){.header_mask{height:92px}}@media (min-width: 1024px){.header_mask{height:105px}}#home.no_background .header_mask,#home.dark_background .header_mask{display:none}#home.light_background .header_mask{position:absolute;top:0;left:0;display:block;z-index:1;width:100%;opacity:.5}.main_nav_overlay{display:none;position:absolute;top:0;left:0;min-height:100%;width:100%;z-index:210000;position:fixed;-ms-overflow-style:none;height:100%;overflow-y:scroll;-webkit-overflow-scrolling:touch;background-color:#395069;background-color:rgba(57,80,105,0.99)}.main_nav_overlay::-webkit-scrollbar{display:none}.main_nav_overlay .site_header{position:relative;margin-bottom:0;background-color:#395069;background-color:rgba(57,80,105,0.99);height:70px}@media (min-width: 600px){.main_nav_overlay .site_header{height:90px}}@media (min-width: 769px){.main_nav_overlay .site_header{height:92px}}@media (min-width: 1024px){.main_nav_overlay .site_header{height:105px}}.main_nav_overlay .navigation_area{margin-bottom:4em;padding-top:0;padding-bottom:2em;text-align:center}@media (min-width: 769px){.main_nav_overlay .navigation_area{padding-bottom:3em}}.main_nav_overlay #modal_close{display:block;text-indent:-9999px;width:57px;height:44px;background:url("https://www.jpl.nasa.gov/assets/images/close_x_icon_thick@2x.png") center no-repeat;background-size:31px 30px;cursor:pointer;position:absolute;top:1.1em;right:.3em}@media (min-width: 600px){.main_nav_overlay #modal_close{top:1.7em;right:1em}}@media (min-width: 769px){.main_nav_overlay #modal_close{top:1.8em}}@media (min-width: 1024px){.main_nav_overlay #modal_close{top:2em}}.main_nav_overlay .nav_area{display:none}.main_nav_overlay .arrow_box .arrow_down{display:none}.main_nav_overlay .nav_item{text-align:center;margin:1.5em auto 2em;text-transform:capitalize;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:-moz-none;-ms-user-select:none;user-select:none}@media (min-width: 769px){.main_nav_overlay .nav_item{margin:.6em auto 2em}}.main_nav_overlay .nav_item:first-child{margin-top:0}.main_nav_overlay .nav_item .nav_title{padding:.28em 0;font-weight:600;color:white}.main_nav_overlay .nav_item .nav_title a{color:white}@media (min-width: 769px){.main_nav_overlay .nav_item .nav_title{padding:.8em 0 .4em}}.main_nav_overlay .nav_item .subnav li{font-weight:600;white-space:nowrap}.main_nav_overlay .nav_item a{color:#a5a6a7;text-decoration:none}.no-touch .main_nav_overlay .nav_item a:hover{color:white}.main_nav_overlay .nav_item .social_icons{padding-top:.5em}.main_nav_overlay .overlay_search{width:250px}.main_nav_overlay .overlay_search .search_field,.main_nav_overlay .overlay_search form.submit_newsletter .email_field,form.submit_newsletter .main_nav_overlay .overlay_search .email_field{width:100%;font-size:16px}@media (min-width: 600px){.main_nav_overlay .overlay_search{width:320px}}.main_nav_overlay .gradient_line{margin-left:auto;margin-right:auto;content:" ";width:100%;height:1px;clear:both;background:#61b6fd;background:-moz-linear-gradient(left, rgba(97,182,253,0), #61b6fd, rgba(97,182,253,0));background:-webkit-linear-gradient(left, rgba(97,182,253,0), #61b6fd, rgba(97,182,253,0));background:linear-gradient(to right, rgba(97,182,253,0), #61b6fd, rgba(97,182,253,0));width:50%}@media (min-width: 769px){.main_nav_overlay .gradient_line{width:25%}}@media (max-width: 768px){.main_nav_overlay .navigation_area{padding:0 2% 2em 2.8%}.main_nav_overlay .nav_item{text-align:left;margin:1em 0 .5em}.main_nav_overlay .nav_item.centered{text-align:center}.main_nav_overlay .nav_item.centered .nav_title{text-align:center;width:100%}.main_nav_overlay .nav_item .social_icons{margin-bottom:1.8em}.main_nav_overlay .gradient_line{width:100%}.main_nav_overlay .nav_title{margin-bottom:0;display:block;line-height:1.4em;font-weight:600;text-align:left;width:80%;font-size:1.2em;letter-spacing:-.01em;cursor:pointer;-webkit-tap-highlight-color:rgba(255,255,255,0);-webkit-tap-highlight-color:transparent}.main_nav_overlay .subnav{display:none;margin-bottom:.8em}.main_nav_overlay .subnav li{padding:.28em 0;display:block !important;font-size:1em}.main_nav_overlay .subnav li a{font-size:1em}.main_nav_overlay .overlay_search.top_search{margin:.7em 0 .5em;display:none}.main_nav_overlay .arrow_box{padding:20px 20px;width:52px;float:right;cursor:pointer;margin:-0.4em -.8em 0 0;display:block;text-align:center;-webkit-tap-highlight-color:rgba(255,255,255,0);-webkit-tap-highlight-color:transparent}.main_nav_overlay .arrow_box.reverse{transform:rotate(180deg);-ms-filter:"progid:DXImageTransform.Microsoft.Matrix(M11=-1, M12=1.2246063538223773e-16, M21=-1.2246063538223773e-16, M22=-1, SizingMethod='auto expand')"}.main_nav_overlay .arrow_box .arrow_down{display:block;width:0;height:0;border-left:6px solid rgba(255,255,255,0);border-right:6px solid rgba(255,255,255,0);border-top:8px solid #fff;float:right}}@media (min-width: 769px){.main_nav_overlay .nav_item{cursor:default}.main_nav_overlay .nav_title{font-size:2.05em;letter-spacing:-.02em}.main_nav_overlay .subnav{display:block !important}.main_nav_overlay .subnav li{display:inline-block !important;padding:.28em 1em}.main_nav_overlay .subnav li a{font-size:1.15em}}@media (min-width: 769px) and (min-width: 1024px){.main_nav_overlay .subnav li a{font-size:1.25em}}@media (min-width: 769px){.main_nav_overlay .overlay_search.top_search{margin:2em 0 1em}}.gradient_container_top,.gradient_container_bottom{height:200px;width:100%;position:absolute;z-index:1}.primary_media_feature.homepage_carousel .gradient_container_top,.primary_media_feature.homepage_carousel .gradient_container_bottom{z-index:7}.gradient_container_top{background:url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMC4wIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIgLz48L3N2Zz4g');background:-webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, rgba(0,0,0,0.6)), color-stop(100%, transparent));background:-moz-linear-gradient(rgba(0,0,0,0.6), transparent);background:-webkit-linear-gradient(rgba(0,0,0,0.6), transparent);background:linear-gradient(rgba(0,0,0,0.6), transparent);top:0}.light_background .gradient_container_top{display:none}.no_background .gradient_container_top{background:none}.gradient_container_bottom{background:url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjAiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMC42Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIgLz48L3N2Zz4g');background:-webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, transparent), color-stop(100%, rgba(0,0,0,0.6)));background:-moz-linear-gradient(transparent, rgba(0,0,0,0.6));background:-webkit-linear-gradient(transparent, rgba(0,0,0,0.6));background:linear-gradient(transparent, rgba(0,0,0,0.6));bottom:0}.gradient_bottom_grid,.gradient_bottom_teasers,.grid_gallery.grid_view .bottom_gradient{background-image:url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjAiLz48c3RvcCBvZmZzZXQ9IjMwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');background-size:100%;background-image:-webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, transparent), color-stop(30%, #000), color-stop(100%, #000));background-image:-moz-linear-gradient(top, transparent 0%, #000 30%, #000 100%);background-image:-webkit-linear-gradient(top, transparent 0%, #000 30%, #000 100%);background-image:linear-gradient(to bottom, transparent 0%, #000 30%, #000 100%)}.ie9 .gradient_bottom_grid,.ie9 .gradient_bottom_teasers,.ie9 .grid_gallery.grid_view .bottom_gradient,.grid_gallery.grid_view .ie9 .bottom_gradient{filter:none;background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjQ4JSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+)}.gradient_bottom_teasers{width:100%;height:38%;position:absolute;bottom:0}.primary_media_feature{margin-bottom:0}@media (min-width: 769px){.primary_media_feature{padding:0}}.primary_media_feature #masterslider .ms-nav-next,.primary_media_feature #masterslider .ms-nav-prev{display:none}@media (min-width: 769px){.primary_media_feature #masterslider .ms-nav-next,.primary_media_feature #masterslider .ms-nav-prev{display:block}}.primary_media_feature #masterslider .ms-nav-prev,.primary_media_feature #masterslider .ms-nav-next{width:40px;height:80px;margin-top:-60px}@media (min-width: 769px){.primary_media_feature #masterslider .ms-nav-prev,.primary_media_feature #masterslider .ms-nav-next{margin-top:-80px}}.primary_media_feature #masterslider .ms-nav-prev{background:url("https://www.jpl.nasa.gov/assets/images/arrow_left_darktheme.png");background-size:40px 95px;background-color:rgba(32,32,32,0.9);background-position:0;left:0;border-top-right-radius:6px;border-bottom-right-radius:6px}.primary_media_feature #masterslider .ms-nav-next{background:url("https://www.jpl.nasa.gov/assets/images/arrow_right_darktheme.png");background-size:40px 95px;background-color:rgba(32,32,32,0.9);background-position:0;right:0;border-top-left-radius:6px;border-bottom-left-radius:6px}.primary_media_feature #masterslider .ms-bullets{bottom:60px;z-index:10}@media (min-width: 600px){.primary_media_feature #masterslider .ms-bullets{bottom:90px}}@media (min-width: 769px){.primary_media_feature #masterslider .ms-bullets{bottom:110px}}.primary_media_feature #masterslider .ms-bullet{background-color:white;background-image:none;border-radius:50% 50% 50% 50%;height:8px;width:8px;opacity:0.5;margin:0 10px}.primary_media_feature #masterslider .ms-bullet:hover{opacity:1.0}.primary_media_feature #masterslider .ms-bullet-selected{opacity:1.0}.primary_media_feature.single{position:relative;margin-bottom:0;overflow:hidden}.primary_media_feature.single .carousel_item{height:300px;background-size:cover;position:relative;z-index:3;background-position:center}@media (min-width: 769px){.primary_media_feature.single .carousel_item{height:700px}}.primary_media_feature.single.video .play{display:none;position:absolute;top:47%;left:47%;top:calc(50%- 30px);left:calc(50%- 30px);top:-webkit-calc(50% - 30px);left:-webkit-calc(50% - 30px);width:60px;height:60px;padding-top:0;cursor:pointer;background:url("https://www.jpl.nasa.gov/assets/images/play-button.png") 0 0 no-repeat;z-index:10}.primary_media_feature.single.video .player{width:100%;height:100%;position:absolute;top:0;left:0;z-index:2}.primary_media_feature.homepage_carousel{margin-bottom:0}.primary_media_feature.homepage_carousel .main_feature{height:482px}@media only screen and (orientation: landscape){.primary_media_feature.homepage_carousel .main_feature{height:260px}}@media (min-width: 600px){.primary_media_feature.homepage_carousel .main_feature{height:420px}}@media only screen and (min-width: 600px) and (orientation: landscape){.primary_media_feature.homepage_carousel .main_feature{height:400px}}@media (min-width: 769px){.primary_media_feature.homepage_carousel .main_feature{height:400px}}@media only screen and (min-width: 769px) and (orientation: landscape){.primary_media_feature.homepage_carousel .main_feature{height:400px}}@media (min-width: 1024px){.primary_media_feature.homepage_carousel .main_feature{height:440px}}@media (min-width: 1200px){.primary_media_feature.homepage_carousel .main_feature{height:550px}}@media (min-width: 1700px){.primary_media_feature.homepage_carousel .main_feature{height:660px}}.primary_media_feature.homepage_carousel #masterslider{width:100%;height:100%}@media (min-width: 600px){.primary_media_feature.homepage_carousel{margin-bottom:-20px}}@media (min-width: 769px){.primary_media_feature.homepage_carousel{margin-bottom:-40px}}@media (min-width: 769px){.primary_media_feature.homepage_carousel .gradient_container_bottom{bottom:40px}}#home #site_nav_down{cursor:pointer;position:absolute;top:-32px;display:block;width:60px;height:40px;left:50%;margin-left:-30px;z-index:21}@media (min-width: 769px){#home #site_nav_down{top:-45px}}#home .site_nav_down_prompt{display:none}@media (min-width: 769px){#home .site_nav_down_prompt{display:block;position:absolute;top:.4em;z-index:20;width:100%;left:0;background-color:transparent !important;color:black;font-size:1.5em;text-align:center;font-weight:400;padding:18px 0;cursor:pointer;opacity:1;transition:opacity .5s ease-in}#home .site_nav_down_prompt span{color:#0e7ee0}#home .site_nav_down_prompt.hide{opacity:0}}#home .pointer_mask{height:25px;z-index:18;position:relative;top:-24px;width:100%}@media (min-width: 769px){#home .pointer_mask{height:40px;top:-38px}}#home .pointer_mask .arrow_masks{border-right:20px solid white;border-top:20px solid white;border-left:20px solid white;border-bottom:0px;display:inline-block;width:calc(50% - 20px);width:-webkit-calc(50% - 20px);height:100%;background-color:white}#home .pointer_mask .arrow_mask{display:inline-block;width:20px;height:100%;border-right:20px solid white;border-top:20px solid transparent;border-left:20px solid white;border-bottom:0px solid white}@media (min-width: 769px){#home .pointer_mask .arrow_mask{border-bottom:20px solid white}}.light_background .site_header form.nav_search,.section_search,.site_header form.nav_search,.overlay_search,form.submit_newsletter{color:white;display:inline-block;position:relative}.section_search .search_field,.site_header form.nav_search .search_field,.overlay_search .search_field,form.submit_newsletter .search_field,form.submit_newsletter .email_field{color:white;background-color:rgba(255,255,255,0.3)}.section_search .search_field.placeholder,.site_header form.nav_search .search_field.placeholder,.overlay_search .search_field.placeholder,form.submit_newsletter .search_field.placeholder,form.submit_newsletter .placeholder.email_field{color:white;-webkit-font-smoothing:antialiased}.section_search .search_field:-moz-placeholder,.site_header form.nav_search .search_field:-moz-placeholder,.overlay_search .search_field:-moz-placeholder,form.submit_newsletter .search_field:-moz-placeholder,form.submit_newsletter .email_field:-moz-placeholder{color:white;-webkit-font-smoothing:antialiased}.section_search .search_field::-moz-placeholder,.site_header form.nav_search .search_field::-moz-placeholder,.overlay_search .search_field::-moz-placeholder,form.submit_newsletter .search_field::-moz-placeholder,form.submit_newsletter .email_field::-moz-placeholder{color:white;-webkit-font-smoothing:antialiased}.section_search .search_field::-webkit-input-placeholder,.site_header form.nav_search .search_field::-webkit-input-placeholder,.overlay_search .search_field::-webkit-input-placeholder,form.submit_newsletter .search_field::-webkit-input-placeholder,form.submit_newsletter .email_field::-webkit-input-placeholder{color:white;-webkit-font-smoothing:antialiased}.section_search .search_field,.site_header form.nav_search .search_field,.overlay_search .search_field,form.submit_newsletter .search_field,form.submit_newsletter .email_field{font-size:16px;border:none;border-radius:4px;height:40px;padding-left:1.1em;padding-right:40px;padding-top:.2em}.section_search .search_field.placeholder,.site_header form.nav_search .search_field.placeholder,.overlay_search .search_field.placeholder,form.submit_newsletter .search_field.placeholder,form.submit_newsletter .placeholder.email_field{opacity:1 !important;font-family:Helvetica, Arial, sans-serif}.section_search .search_field:-moz-placeholder,.site_header form.nav_search .search_field:-moz-placeholder,.overlay_search .search_field:-moz-placeholder,form.submit_newsletter .search_field:-moz-placeholder,form.submit_newsletter .email_field:-moz-placeholder{opacity:1 !important;font-family:Helvetica, Arial, sans-serif}.section_search .search_field::-moz-placeholder,.site_header form.nav_search .search_field::-moz-placeholder,.overlay_search .search_field::-moz-placeholder,form.submit_newsletter .search_field::-moz-placeholder,form.submit_newsletter .email_field::-moz-placeholder{opacity:1 !important;font-family:Helvetica, Arial, sans-serif}.section_search .search_field::-webkit-input-placeholder,.site_header form.nav_search .search_field::-webkit-input-placeholder,.overlay_search .search_field::-webkit-input-placeholder,form.submit_newsletter .search_field::-webkit-input-placeholder,form.submit_newsletter .email_field::-webkit-input-placeholder{opacity:1 !important;font-family:Helvetica, Arial, sans-serif}.section_search .search_submit,.site_header form.nav_search .search_submit,.overlay_search .search_submit,form.submit_newsletter .search_submit,form.submit_newsletter .email_submit{background:url("https://www.jpl.nasa.gov/assets/images/search_icon@2x.png") no-repeat 6px 9px transparent;background-size:20px;position:absolute;right:0;top:0;cursor:pointer;border:none;width:40px;height:40px}.light_background .site_header form.nav_search .search_field,.section_search .search_field,.light_background .site_header form.nav_search form.submit_newsletter .email_field,form.submit_newsletter .light_background .site_header form.nav_search .email_field,.section_search form.submit_newsletter .email_field,form.submit_newsletter .section_search .email_field{background-color:white;color:#222222}.light_background .site_header form.nav_search .search_field.placeholder,.section_search .search_field.placeholder,.light_background .site_header form.nav_search form.submit_newsletter .placeholder.email_field,form.submit_newsletter .light_background .site_header form.nav_search .placeholder.email_field,.section_search form.submit_newsletter .placeholder.email_field,form.submit_newsletter .section_search .placeholder.email_field{color:#5a6470;opacity:1 !important}.light_background .site_header form.nav_search .search_field:-moz-placeholder,.section_search .search_field:-moz-placeholder,.light_background .site_header form.nav_search form.submit_newsletter .email_field:-moz-placeholder,form.submit_newsletter .light_background .site_header form.nav_search .email_field:-moz-placeholder,.section_search form.submit_newsletter .email_field:-moz-placeholder,form.submit_newsletter .section_search .email_field:-moz-placeholder{color:#5a6470;opacity:1 !important}.light_background .site_header form.nav_search .search_field::-moz-placeholder,.section_search .search_field::-moz-placeholder,.light_background .site_header form.nav_search form.submit_newsletter .email_field::-moz-placeholder,form.submit_newsletter .light_background .site_header form.nav_search .email_field::-moz-placeholder,.section_search form.submit_newsletter .email_field::-moz-placeholder,form.submit_newsletter .section_search .email_field::-moz-placeholder{color:#5a6470;opacity:1 !important}.light_background .site_header form.nav_search .search_field::-webkit-input-placeholder,.section_search .search_field::-webkit-input-placeholder,.light_background .site_header form.nav_search form.submit_newsletter .email_field::-webkit-input-placeholder,form.submit_newsletter .light_background .site_header form.nav_search .email_field::-webkit-input-placeholder,.section_search form.submit_newsletter .email_field::-webkit-input-placeholder,form.submit_newsletter .section_search .email_field::-webkit-input-placeholder{color:#5a6470;opacity:1 !important}#home.light_background .site_header form.nav_search .search_field,#home.light_background .section_search .search_field,#home.light_background .site_header form.nav_search form.submit_newsletter .email_field,form.submit_newsletter #home.light_background .site_header form.nav_search .email_field,#home.light_background .section_search form.submit_newsletter .email_field,form.submit_newsletter #home.light_background .section_search .email_field{background-color:rgba(255,255,255,0.8)}.light_background .site_header form.nav_search .search_submit,.section_search .search_submit,.light_background .site_header form.nav_search form.submit_newsletter .email_submit,form.submit_newsletter .light_background .site_header form.nav_search .email_submit,.section_search form.submit_newsletter .email_submit,form.submit_newsletter .section_search .email_submit{background:url("https://www.jpl.nasa.gov/assets/images/search_icon_darkgrey@2x.png") no-repeat 9px 12px transparent;background-size:20px;margin-top:-2px}.filter_bar .light_background .site_header form.nav_search .search_submit,.light_background .site_header .filter_bar form.nav_search .search_submit,.filter_bar .section_search .search_submit,.filter_bar .light_background .site_header form.nav_search form.submit_newsletter .email_submit,form.submit_newsletter .filter_bar .light_background .site_header form.nav_search .email_submit,.light_background .site_header .filter_bar form.nav_search form.submit_newsletter .email_submit,form.submit_newsletter .light_background .site_header .filter_bar form.nav_search .email_submit,.filter_bar .section_search form.submit_newsletter .email_submit,form.submit_newsletter .filter_bar .section_search .email_submit{background:url("https://www.jpl.nasa.gov/assets/images/search_icon_dark@2x.png") no-repeat 9px 12px transparent;background-size:20px}.site_header form.nav_search{display:none}@media (min-width: 769px){.site_header form.nav_search{display:inline-block}}.light_background .site_header form.nav_search{display:none}@media (min-width: 769px){.light_background .site_header form.nav_search{display:inline-block}}form.submit_newsletter{width:85%;max-width:300px;display:inline-block}form.submit_newsletter .email_field{width:100%}form.submit_newsletter .email_submit{background:url("https://www.jpl.nasa.gov/assets/stylesheets/../images/envelope_white@2x.png") no-repeat 4px 10px transparent;background-size:25px;opacity:.8}form.submit_newsletter .email_submit:hover{opacity:1}#secondary_column form.submit_newsletter{width:100%;max-width:none}#secondary_column form.submit_newsletter .search_field,#secondary_column form.submit_newsletter .email_field{background:#4b6a8d;border-radius:4px}form.list_form ul{padding:1em 0}form.list_form ul label{display:block;margin-bottom:5px}form.list_form ul input:not([type="checkbox"]):not([type="radio"]),form.list_form ul textarea{width:100%;border:none;border:1px solid #777777;border-radius:4px;padding:10px 12px;font-size:1em}form.list_form ul input[type="checkbox"]{width:auto}form.list_form li{margin-bottom:10px}form.list_form li.inline_item&gt;input,form.list_form li.inline_item&gt;label{display:inline-block}form.list_form li.inline_item.indented{margin-left:1.5em}@media (min-width: 600px){.grid_gallery .gallery_header{line-height:50px}}.grid_gallery .module_title_small{display:none}@media (min-width: 600px){.grid_gallery .module_title_small{display:block}}.grid_gallery .module_title{display:none}@media (min-width: 769px){.grid_gallery .module_title{display:block}}.grid_gallery ul.articles{margin-bottom:2em}.grid_gallery .image_and_description_container{position:relative}.grid_gallery .more_links{padding-top:2em;float:right;font-weight:600}.grid_gallery .more_links a{text-decoration:none;display:inline-block;color:#0e7ee0}.grid_gallery .more_links a:hover{text-decoration:underline}.grid_gallery .more_links a+a{margin-left:2em}.grid_gallery.grid_view .content_title{letter-spacing:-.03em;display:none}.grid_gallery.grid_view .image_and_description_container{min-height:0}.grid_gallery.grid_view .article_teaser_body{display:none}.grid_gallery.grid_view .img{position:relative}.grid_gallery.grid_view span.play_button{position:absolute;background:url("https://www.jpl.nasa.gov/assets/images/play-button.png") center center no-repeat;background-size:50px 50px;height:50px;width:50px;display:inline;left:42%;left:calc(50% - 25px);top:42%;top:calc(50% - 25px)}.grid_gallery.grid_view .bottom_gradient{color:white;display:block;position:relative;margin-top:-48px;height:126px;text-align:center}.grid_gallery.grid_view .bottom_gradient:before{content:'';display:inline-block;height:100%;vertical-align:middle;margin-right:-.25em}.grid_gallery.grid_view .bottom_gradient div{display:inline-block;vertical-align:middle;width:90%;text-align:left;margin-top:2.5em}#missions .grid_gallery.grid_view .bottom_gradient div{margin-top:1em;text-align:center}#missions .grid_gallery.grid_view .bottom_gradient div h3{font-size:1.4em;margin-bottom:.1em}.grid_gallery.grid_view .bottom_gradient h3{font-weight:600}.grid_gallery.grid_view li.slide{margin-bottom:0.84034%;width:49.57983%;float:left}.grid_gallery.grid_view li.slide:nth-child(2n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}.grid_gallery.grid_view li.slide:nth-child(2n+2){margin-left:50.42017%;margin-right:-100%;clear:none}@media (min-width: 600px){.grid_gallery.grid_view li.slide{width:24.36975%;float:left}.grid_gallery.grid_view li.slide:nth-child(4n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}.grid_gallery.grid_view li.slide:nth-child(4n+2){margin-left:25.21008%;margin-right:-100%;clear:none}.grid_gallery.grid_view li.slide:nth-child(4n+3){margin-left:50.42017%;margin-right:-100%;clear:none}.grid_gallery.grid_view li.slide:nth-child(4n+4){margin-left:75.63025%;margin-right:-100%;clear:none}}@media (min-width: 769px){.grid_gallery.grid_view li.slide{width:19.32773%;float:left}.grid_gallery.grid_view li.slide:nth-child(5n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}.grid_gallery.grid_view li.slide:nth-child(5n+2){margin-left:20.16807%;margin-right:-100%;clear:none}.grid_gallery.grid_view li.slide:nth-child(5n+3){margin-left:40.33613%;margin-right:-100%;clear:none}.grid_gallery.grid_view li.slide:nth-child(5n+4){margin-left:60.5042%;margin-right:-100%;clear:none}.grid_gallery.grid_view li.slide:nth-child(5n+5){margin-left:80.67227%;margin-right:-100%;clear:none}}@media (min-width: 1200px){.grid_gallery.grid_view li.slide{width:15.96639%;float:left}.grid_gallery.grid_view li.slide:nth-child(6n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}.grid_gallery.grid_view li.slide:nth-child(6n+2){margin-left:16.80672%;margin-right:-100%;clear:none}.grid_gallery.grid_view li.slide:nth-child(6n+3){margin-left:33.61345%;margin-right:-100%;clear:none}.grid_gallery.grid_view li.slide:nth-child(6n+4){margin-left:50.42017%;margin-right:-100%;clear:none}.grid_gallery.grid_view li.slide:nth-child(6n+5){margin-left:67.22689%;margin-right:-100%;clear:none}.grid_gallery.grid_view li.slide:nth-child(6n+6){margin-left:84.03361%;margin-right:-100%;clear:none}}.grid_gallery.grid_view li.slide a{text-decoration:none}#images .grid_gallery.grid_view li.slide{text-decoration:none;width:49.57983%;float:left;margin-bottom:0.84034%}#images .grid_gallery.grid_view li.slide:nth-child(2n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}#images .grid_gallery.grid_view li.slide:nth-child(2n+2){margin-left:50.42017%;margin-right:-100%;clear:none}@media (min-width: 480px){#images .grid_gallery.grid_view li.slide{width:32.77311%;float:left}#images .grid_gallery.grid_view li.slide:nth-child(3n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}#images .grid_gallery.grid_view li.slide:nth-child(3n+2){margin-left:33.61345%;margin-right:-100%;clear:none}#images .grid_gallery.grid_view li.slide:nth-child(3n+3){margin-left:67.22689%;margin-right:-100%;clear:none}}@media (min-width: 769px){#images .grid_gallery.grid_view li.slide{width:24.36975%;float:left}#images .grid_gallery.grid_view li.slide:nth-child(4n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}#images .grid_gallery.grid_view li.slide:nth-child(4n+2){margin-left:25.21008%;margin-right:-100%;clear:none}#images .grid_gallery.grid_view li.slide:nth-child(4n+3){margin-left:50.42017%;margin-right:-100%;clear:none}#images .grid_gallery.grid_view li.slide:nth-child(4n+4){margin-left:75.63025%;margin-right:-100%;clear:none}}@media (min-width: 1200px){#images .grid_gallery.grid_view li.slide{width:24.36975%;float:left}#images .grid_gallery.grid_view li.slide:nth-child(4n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}#images .grid_gallery.grid_view li.slide:nth-child(4n+2){margin-left:25.21008%;margin-right:-100%;clear:none}#images .grid_gallery.grid_view li.slide:nth-child(4n+3){margin-left:50.42017%;margin-right:-100%;clear:none}#images .grid_gallery.grid_view li.slide:nth-child(4n+4){margin-left:75.63025%;margin-right:-100%;clear:none}}#missions .grid_gallery.grid_view li.slide{text-decoration:none;width:49.57983%;float:left;margin-bottom:0.84034%}#missions .grid_gallery.grid_view li.slide:nth-child(2n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}#missions .grid_gallery.grid_view li.slide:nth-child(2n+2){margin-left:50.42017%;margin-right:-100%;clear:none}@media (min-width: 480px){#missions .grid_gallery.grid_view li.slide{width:32.77311%;float:left}#missions .grid_gallery.grid_view li.slide:nth-child(3n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}#missions .grid_gallery.grid_view li.slide:nth-child(3n+2){margin-left:33.61345%;margin-right:-100%;clear:none}#missions .grid_gallery.grid_view li.slide:nth-child(3n+3){margin-left:67.22689%;margin-right:-100%;clear:none}}@media (min-width: 769px){#missions .grid_gallery.grid_view li.slide{width:24.36975%;float:left}#missions .grid_gallery.grid_view li.slide:nth-child(4n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}#missions .grid_gallery.grid_view li.slide:nth-child(4n+2){margin-left:25.21008%;margin-right:-100%;clear:none}#missions .grid_gallery.grid_view li.slide:nth-child(4n+3){margin-left:50.42017%;margin-right:-100%;clear:none}#missions .grid_gallery.grid_view li.slide:nth-child(4n+4){margin-left:75.63025%;margin-right:-100%;clear:none}}@media (min-width: 1200px){#missions .grid_gallery.grid_view li.slide{width:24.36975%;float:left}#missions .grid_gallery.grid_view li.slide:nth-child(4n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}#missions .grid_gallery.grid_view li.slide:nth-child(4n+2){margin-left:25.21008%;margin-right:-100%;clear:none}#missions .grid_gallery.grid_view li.slide:nth-child(4n+3){margin-left:50.42017%;margin-right:-100%;clear:none}#missions .grid_gallery.grid_view li.slide:nth-child(4n+4){margin-left:75.63025%;margin-right:-100%;clear:none}}#news .grid_gallery.grid_view li.slide{width:49.57983%;float:left;margin-bottom:0.84034%}#news .grid_gallery.grid_view li.slide:nth-child(2n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}#news .grid_gallery.grid_view li.slide:nth-child(2n+2){margin-left:50.42017%;margin-right:-100%;clear:none}@media (min-width: 480px){#news .grid_gallery.grid_view li.slide{width:32.77311%;float:left}#news .grid_gallery.grid_view li.slide:nth-child(3n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}#news .grid_gallery.grid_view li.slide:nth-child(3n+2){margin-left:33.61345%;margin-right:-100%;clear:none}#news .grid_gallery.grid_view li.slide:nth-child(3n+3){margin-left:67.22689%;margin-right:-100%;clear:none}}@media (min-width: 1200px){#news .grid_gallery.grid_view li.slide{width:32.77311%;float:left}#news .grid_gallery.grid_view li.slide:nth-child(3n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}#news .grid_gallery.grid_view li.slide:nth-child(3n+2){margin-left:33.61345%;margin-right:-100%;clear:none}#news .grid_gallery.grid_view li.slide:nth-child(3n+3){margin-left:67.22689%;margin-right:-100%;clear:none}}.grid_gallery.list_view .img{float:right;margin-left:4%;margin-bottom:.5em;width:32%}@media (min-width: 600px){.grid_gallery.list_view .img{margin-left:0;margin-bottom:0;width:23.07692%;float:left;margin-right:2.5641%}}@media (min-width: 769px){.grid_gallery.list_view .img{width:23.72881%;float:left;margin-right:1.69492%}}@media (min-width: 1024px){.grid_gallery.list_view .img{width:23.72881%;float:left;margin-right:1.69492%}}.grid_gallery.list_view .list_text_content{width:auto}@media (min-width: 600px){.grid_gallery.list_view .list_text_content{width:74.35897%;float:right;margin-right:0}}@media (min-width: 769px){.grid_gallery.list_view .list_text_content{width:74.57627%;float:right;margin-right:0}}@media (min-width: 1024px){.grid_gallery.list_view .list_text_content{width:66.10169%;float:left;margin-right:1.69492%}}.grid_gallery.list_view .content_title{display:block;font-size:1.17em;margin-bottom:0.1em;margin-bottom:.2em;font-weight:600;text-decoration:none;color:black;cursor:pointer;letter-spacing:-.035em}@media (min-width: 600px){.grid_gallery.list_view .content_title{font-size:1.35em;margin-bottom:0.18em}}@media (min-width: 769px){.grid_gallery.list_view .content_title{font-size:1.53em;margin-bottom:0.26em}}@media (min-width: 1024px){.grid_gallery.list_view .content_title{font-size:1.62em;margin-bottom:0.29em}}@media (min-width: 1200px){.grid_gallery.list_view .content_title{font-size:1.71em;margin-bottom:0.32em}}@media (min-width: 1024px){.grid_gallery.list_view .article_teaser_body{font-size:1.1em}}.grid_gallery.list_view li.slide:first-child{border-top:1px solid #cccccc}.grid_gallery.list_view li.slide{border-bottom:1px solid #cccccc;overflow:hidden;*zoom:1;padding:1.2em 0}.grid_gallery.list_view li.slide a{text-decoration:none;color:#222222;cursor:pointer}.grid_gallery.list_view .bottom_gradient{display:none}.view_selectors{position:relative;margin:0 auto;text-align:center;width:106px;text-align:right}@media (min-width: 769px){.view_selectors{position:absolute;right:0;top:0;height:100%}}.view_selectors .nav_item{display:inline-block;position:relative;background-repeat:no-repeat;width:50px;height:50px;cursor:pointer;background-image:url("https://www.jpl.nasa.gov/assets/images/grid_list_icon.png");background-color:#e4e9ef;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:-moz-none;-ms-user-select:none;user-select:none}.view_selectors .nav_item.list_icon{background-position:-4px -51px;border-radius:50%}.no-touch .view_selectors .nav_item.list_icon:hover{background-position:-4px -0px}.list_view .view_selectors .nav_item.list_icon{background-position:-4px -0px}.view_selectors .nav_item.grid_icon{background-position:-59px -51px;border-radius:50%}.no-touch .view_selectors .nav_item.grid_icon:hover{background-position:-59px -0px}.grid_view .view_selectors .nav_item.grid_icon{background-position:-59px -0px}.module header{margin-bottom:1em;position:relative}.module footer{text-align:center}.multimedia_teaser{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:-moz-none;-ms-user-select:none;user-select:none;background-color:#e4e9ef}.events_teaser section{overflow:hidden}.events_teaser .slide_nav{display:block}@media (min-width: 769px){.events_teaser .slide_nav{display:none}}.events_teaser .event_teaser{min-height:99px;margin-bottom:4em}.events_teaser .util-carousel{margin-bottom:3em}.events_teaser .date{font-weight:200;margin-bottom:.1em;font-size:.9em}.events_teaser .title{font-weight:600;font-size:.9em}.multi_teaser{padding-top:4em;padding-bottom:3em;margin-bottom:0;background-color:#e4e9ef}.multi_teaser ul li{width:100%;float:left;margin-left:0;margin-right:0;margin-bottom:5.26316%}.multi_teaser ul li:last-child{margin-bottom:0}@media (min-width: 769px){.multi_teaser ul li{margin-bottom:0}}@media (min-width: 600px){.multi_teaser ul li{width:32.20339%;float:left}.multi_teaser ul li:nth-child(3n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}.multi_teaser ul li:nth-child(3n+2){margin-left:33.89831%;margin-right:-100%;clear:none}.multi_teaser ul li:nth-child(3n+3){margin-left:67.79661%;margin-right:-100%;clear:none}}.multi_teaser .image_and_description_container{position:relative}.multi_teaser .content_title{padding:.6em 0 0}.multi_teaser .content_title .date{font-weight:300;font-size:.9em;margin-bottom:.2em}.multi_teaser.events_teaser{background-color:white}.newsletter_follow_teaser.module{background-color:#e4e9ef;padding:1.5em 0 .5em 0}.newsletter_follow_teaser.module .share,.newsletter_follow_teaser.module .footer_newsletter{text-align:center;padding:1.69492%;margin-bottom:3em;width:100%}.newsletter_follow_teaser.module .share h2,.newsletter_follow_teaser.module .footer_newsletter h2{font-size:1.5em;font-weight:600;margin-bottom:0.6em;color:white;letter-spacing:-.035em}@media (min-width: 600px){.newsletter_follow_teaser.module .share h2,.newsletter_follow_teaser.module .footer_newsletter h2{font-size:1.6em}}@media (min-width: 1200px){.newsletter_follow_teaser.module .share h2,.newsletter_follow_teaser.module .footer_newsletter h2{font-size:1.8em}}.newsletter_follow_teaser.module .gradient_line_divider{margin:1em auto;display:none}@media (min-width: 600px){.newsletter_follow_teaser.module .footer_newsletter{width:48.71795%;float:left;margin-left:0;margin-right:-100%}}@media (min-width: 769px){.newsletter_follow_teaser.module .footer_newsletter{width:40.67797%;float:left;margin-left:8.47458%;margin-right:-100%}}@media (min-width: 600px){.newsletter_follow_teaser.module .share{width:48.71795%;float:left;margin-left:51.28205%;margin-right:-100%}}@media (min-width: 769px){.newsletter_follow_teaser.module .share{width:40.67797%;float:left;margin-left:50.84746%;margin-right:-100%}}.newsletter_follow_teaser.module .gradient_line_divider{margin-left:auto;margin-right:auto;content:" ";width:100%;height:1px;clear:both;background:white;background:-moz-linear-gradient(left, rgba(255,255,255,0), #fff, rgba(255,255,255,0));background:-webkit-linear-gradient(left, rgba(255,255,255,0), #fff, rgba(255,255,255,0));background:linear-gradient(to right, rgba(255,255,255,0), #fff, rgba(255,255,255,0));display:block}@media (min-width: 600px){.newsletter_follow_teaser.module .gradient_line_divider{display:none}}.newsletter_follow_teaser.module .share,.newsletter_follow_teaser.module .footer_newsletter{margin-bottom:1.5em}.newsletter_follow_teaser.module .share h2,.newsletter_follow_teaser.module .footer_newsletter h2{color:#222222}.newsletter_follow_teaser.module form.submit_newsletter .email_field{color:#343434;background-color:white}.newsletter_follow_teaser.module form.submit_newsletter .email_field.placeholder{color:#7b7b7b}.newsletter_follow_teaser.module form.submit_newsletter .email_field:-moz-placeholder{color:#7b7b7b}.newsletter_follow_teaser.module form.submit_newsletter .email_field::-moz-placeholder{color:#7b7b7b}.newsletter_follow_teaser.module form.submit_newsletter .email_field::-webkit-input-placeholder{color:#7b7b7b}.newsletter_follow_teaser.module .email_submit{background:url("https://www.jpl.nasa.gov/assets/stylesheets/../images/envelope_blue@2x.png") no-repeat 4px 10px transparent;background-size:25px}.newsletter_follow_teaser.module .share .all_icon{color:#14aaf7}.newsletter_teaser{background-color:#e4e9ef;padding-top:4em;padding-bottom:3em;margin-bottom:0}.newsletter_teaser .img_col{width:23.72881%;float:left;margin-left:25.42373%;margin-right:-100%}.newsletter_teaser .text_col{width:23.72881%;float:left;margin-left:50.84746%;margin-right:-100%}.image_teaser ul{width:100%;margin:0 auto}@media (min-width: 769px){.image_teaser ul{width:83.05085%}}.image_teaser .slide{width:100%;margin-bottom:5.26316%}@media (min-width: 600px){.image_teaser .slide{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;width:50%;float:left;padding-left:0.83333%;padding-right:0.83333%}}@media (min-width: 769px){.image_teaser .slide{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;width:50%;float:left;padding-left:0.83333%;padding-right:0.83333%}}.image_teaser .image_container{margin-bottom:1.69492%}.image_teaser .content_title{font-size:1.2em;margin-bottom:.1em}.grid_gallery+.image_teaser{padding-top:0}.player.lede{margin-bottom:2em}.facts_module .title{font-weight:600}.primary_media_feature .floating_text_area{position:absolute;color:white;width:95%;left:0;right:0;margin:0 auto;bottom:2em;text-align:center;z-index:2}@media (min-width: 769px){.primary_media_feature .floating_text_area{left:10%;width:80%}}.primary_media_feature .floating_text_area a{text-decoration:none;color:inherit}.primary_media_feature .floating_text_area .brand_title{font-size:.9em;font-weight:600;margin-bottom:6px}.primary_media_feature .floating_text_area .brand_title i{font-weight:200}.primary_media_feature .floating_text_area .category_title{color:white}.primary_media_feature .floating_text_area .media_feature_title{font-weight:600;line-height:1.2em;margin-bottom:.18em}.primary_media_feature .floating_text_area .description{display:none}@media (min-width: 769px){.primary_media_feature .floating_text_area .description{display:block;line-height:1.4em;margin-bottom:1.4em}}.primary_media_feature .floating_text_area footer{text-align:left}.primary_media_feature .floating_text_area.no_bg{color:white}.primary_media_feature .floating_text_area.bg_dark{background-color:black;background-color:rgba(0,0,0,0.5);padding:1.4em}.primary_media_feature .floating_text_area.bg_light{background-color:white;background-color:rgba(255,255,255,0.9);color:black;padding:1.4em}.primary_media_feature .floating_text_area.bg_light .category_title,.primary_media_feature .floating_text_area.bg_light .media_feature_title{color:black !important}@media (min-width: 769px){.primary_media_feature .floating_text_area.bg_light .category_title,.primary_media_feature .floating_text_area.bg_light .media_feature_title{color:white !important}}@media (min-width: 769px){.primary_media_feature .floating_text_area.bottom_left{width:21%;text-align:left;bottom:40px;left:12%}}@media (min-width: 769px){.primary_media_feature.centered_text .floating_text_area{left:0;right:0;width:80%}}@media (min-width: 769px){.primary_media_feature.centered_text .floating_text_area .description{width:500px;margin:15px auto 10px}}@media (min-width: 1024px){.primary_media_feature.centered_text .floating_text_area .description{width:550px}}.primary_media_feature.centered_text .floating_text_area footer{text-align:center;padding:1.2em 0 .2em}#missions_detail .primary_media_feature .floating_text_area{width:95%}@media (min-width: 600px){#missions_detail .primary_media_feature .floating_text_area{width:95%;left:0;right:0;text-align:left}}@media (min-width: 769px){#missions_detail .primary_media_feature .floating_text_area{width:90%}}@media (min-width: 1024px){#missions_detail .primary_media_feature .floating_text_area{max-width:1200px;width:97%}}.primary_media_feature.homepage_carousel .floating_text_area{width:100%;padding:1.4em;margin:0;bottom:4.2em;background:none}@media (min-width: 600px){.primary_media_feature.homepage_carousel .floating_text_area{bottom:7em}}@media (min-width: 769px){.primary_media_feature.homepage_carousel .floating_text_area{border-radius:6px;color:white;padding:1.4em;bottom:70px;text-align:left;transition:background-color .5s ease-out;right:auto;left:3%;width:40%}.primary_media_feature.homepage_carousel .floating_text_area:hover{background-color:black;background-color:rgba(32,32,32,0.9)}.primary_media_feature.homepage_carousel .floating_text_area:hover::before{opacity:0}.primary_media_feature.homepage_carousel .floating_text_area:hover .description{max-height:300px}.primary_media_feature.homepage_carousel .floating_text_area:hover .media_feature_title:after{opacity:0}.primary_media_feature.homepage_carousel .floating_text_area .description{max-height:0;overflow:hidden;transition:all .5s}.primary_media_feature.homepage_carousel .floating_text_area .description a{color:white}.primary_media_feature.homepage_carousel .floating_text_area .description a.detail_link{color:#44a2f5;display:block;margin:.7em 0 .6em}.primary_media_feature.homepage_carousel .floating_text_area .description a.detail_link:hover{color:#65b5fc}}@media (min-width: 1024px){.primary_media_feature.homepage_carousel .floating_text_area{width:435px;right:auto}}@media (min-width: 1200px){.primary_media_feature.homepage_carousel .floating_text_area{width:510px}}@media (min-width: 1700px){.primary_media_feature.homepage_carousel .floating_text_area{left:2%;width:760px}}@media (min-width: 769px){.primary_media_feature.homepage_carousel .floating_text_area.bottom_right{left:auto;right:3%}}@media (min-width: 1700px){.primary_media_feature.homepage_carousel .floating_text_area.bottom_right{right:2%}}.primary_media_feature.homepage_carousel .floating_text_area .media_feature_title{font-size:1.6em}@media (min-width: 600px){.primary_media_feature.homepage_carousel .floating_text_area .media_feature_title{font-size:2em}}@media (min-width: 769px){.primary_media_feature.homepage_carousel .floating_text_area .media_feature_title{font-size:2.1em;color:white;position:relative;margin-bottom:16px}.primary_media_feature.homepage_carousel .floating_text_area .media_feature_title:after{content:url("https://www.jpl.nasa.gov/assets/images/arrow_down_prompt.png");transition:opacity .25s;position:relative;top:-4px;left:10px;opacity:1}}@media (min-width: 1024px){.primary_media_feature.homepage_carousel .floating_text_area .media_feature_title{font-size:2.4em}}@media (min-width: 1200px){.primary_media_feature.homepage_carousel .floating_text_area .media_feature_title{font-size:2.7em}}@media (min-width: 1700px){.primary_media_feature.homepage_carousel .floating_text_area .media_feature_title{font-size:3em}}.button,.primary_media_feature.single .button,.outline_button{font-weight:600;display:inline-block;margin-bottom:.5em;margin-left:auto;margin-right:auto;background-color:#4b6a8d;color:white;line-height:1em;border:none;text-decoration:none;border-radius:4px;cursor:pointer;text-shadow:none;font-size:13px;padding:12px 24px;white-space:nowrap}@media (min-width: 769px){.button,.primary_media_feature.single .button,.outline_button{font-size:14px}}.no-touch .button:hover,.no-touch .outline_button:hover{background-color:#6083aa}@-moz-document url-prefix(){body .button,body .primary_media_feature.single .button,.primary_media_feature.single body .button,body .outline_button{padding-bottom:10px}body .primary_media_feature.single .button,body .primary_media_feature.single .outline_button,body .outline_button{padding-bottom:8px}@media (min-width: 769px){body .primary_media_feature.single .button,body .primary_media_feature.single .outline_button,body .outline_button{padding-bottom:10px}}}.button+.button,.outline_button+.button,.primary_media_feature.single .button+.button,.primary_media_feature.single .outline_button+.button,.button+.outline_button,.primary_media_feature.single .button+.outline_button,.outline_button+.outline_button{margin-left:1em}.primary_media_feature.single .button,.primary_media_feature.single .outline_button,.outline_button{border-radius:12px;border:2px solid white;border:2px solid rgba(255,255,255,0.8);background:none;color:#FFF;font-weight:600;text-transform:uppercase;padding:10px 13px}@media (min-width: 769px){.primary_media_feature.single .button,.primary_media_feature.single .outline_button,.outline_button{padding:12px 15px}}.primary_media_feature.single .dark.button,.primary_media_feature.single .dark.outline_button,.outline_button.dark{opacity:1;color:#777;border-color:#a5a6a7}.no-touch .primary_media_feature.single .button:hover,.no-touch .primary_media_feature.single .outline_button:hover,.no-touch .outline_button:hover{background-color:#6083aa;color:white;border-color:#6083aa;opacity:1}#site_footer{padding:2em 2em 5em 2em;background-color:black}#site_footer .gradient_line{margin-left:auto;margin-right:auto;content:" ";width:100%;height:1px;clear:both;background:#61b6fd;background:-moz-linear-gradient(left, transparent, #61b6fd, transparent);background:-webkit-linear-gradient(left, transparent, #61b6fd, transparent);background:linear-gradient(to right, transparent, #61b6fd, transparent);width:90%}@media (min-width: 769px){#site_footer .gradient_line{width:50%}}.upper_footer{padding:3em 0 4em}.upper_footer .grid_layout{width:100%}.upper_footer .share,.upper_footer .footer_newsletter{text-align:center;padding:1.69492%;margin-bottom:3em;width:100%}.upper_footer .share h2,.upper_footer .footer_newsletter h2{font-size:1.5em;font-weight:600;margin-bottom:0.6em;color:white;letter-spacing:-.035em}@media (min-width: 600px){.upper_footer .share h2,.upper_footer .footer_newsletter h2{font-size:1.6em}}@media (min-width: 1200px){.upper_footer .share h2,.upper_footer .footer_newsletter h2{font-size:1.8em}}.upper_footer .gradient_line_divider{margin:1em auto;display:none}@media (min-width: 600px){.upper_footer .footer_newsletter{width:48.71795%;float:left;margin-left:0;margin-right:-100%}}@media (min-width: 769px){.upper_footer .footer_newsletter{width:40.67797%;float:left;margin-left:8.47458%;margin-right:-100%}}@media (min-width: 600px){.upper_footer .share{width:48.71795%;float:left;margin-left:51.28205%;margin-right:-100%}}@media (min-width: 769px){.upper_footer .share{width:40.67797%;float:left;margin-left:50.84746%;margin-right:-100%}}#site_footer .sitemap{margin-bottom:3em}@media (min-width: 600px){#site_footer .sitemap .grid_layout{width:100%}}@media (min-width: large){#site_footer .sitemap .grid_layout{width:97%}}#site_footer .sitemap_directory{overflow:hidden;*zoom:1;margin-bottom:3em}#site_footer .sitemap_directory .footer_sitemap_item{margin-bottom:.6em}@media (min-width: 600px){#site_footer .sitemap_directory .footer_sitemap_item{margin-bottom:.2em}}@media (min-width: 1024px){#site_footer .sitemap_directory .footer_sitemap_item{margin-bottom:.2em;margin-left:10%}}#site_footer .sitemap_title{color:white;font-weight:600;text-transform:capitalize;font-size:1.2em;letter-spacing:-.01em;margin-bottom:.3em}@media (min-width: 600px){#site_footer .sitemap_title{font-size:1.1em}}@media (min-width: 1024px){#site_footer .sitemap_title{font-size:1.3em}}#site_footer .sitemap_block{text-align:center;width:100%}@media (min-width: 600px){#site_footer .sitemap_block{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;width:25%;float:left;padding-left:0.83333%;padding-right:0.83333%;text-align:left}}@media (min-width: 600px){#site_footer ul.subnav{margin-bottom:1em}#site_footer ul.subnav li{padding-left:1em;text-indent:-1em;margin:.1em 0}}#site_footer ul.subnav a{color:#a5a6a7;text-decoration:none;font-size:1em}@media (min-width: 600px){#site_footer ul.subnav a{font-size:.85em}}@media (min-width: 1024px){#site_footer ul.subnav a{font-size:.95em}}.no-touch #site_footer ul.subnav a:hover{color:white}.lower_footer{overflow:hidden}.lower_footer .nav_container{margin:0 auto;position:relative;left:0;width:100%;margin-bottom:2.5em}@media (min-width: 1024px){.lower_footer .nav_container{padding-top:1em;position:absolute}}.lower_footer nav{text-transform:uppercase;text-align:center;margin-left:auto;margin-right:auto;font-size:.9em;color:#a5a6a7}.lower_footer nav a{color:#a5a6a7;text-decoration:none}.no-touch .lower_footer nav a:hover{color:white}.lower_footer nav li{margin:0 .6em;display:inline;line-height:2em}.lower_footer nav li+li:before{margin-left:.6em}.lower_footer .credits{color:#a5a6a7;width:100%;font-size:.9em;text-align:center;position:relative}.lower_footer .credits&gt;span{display:block}.lower_footer .credits a{color:#a5a6a7;text-decoration:none}.no-touch .lower_footer .credits a:hover{color:white}@media (min-width: 1024px){.lower_footer .credits{float:right;width:20%;text-align:left}.lower_footer .credits&gt;span{display:block}}.module{padding:2.3em 0 3em;position:relative}@media (min-width: 769px){.module{padding:4em 0 4.3em}}.grid_layout{max-width:100%;margin-left:auto;margin-right:auto;width:95%}.grid_layout:after{content:" ";display:block;clear:both}@media (min-width: 600px){.grid_layout{max-width:100%;margin-left:auto;margin-right:auto;width:95%}.grid_layout:after{content:" ";display:block;clear:both}}@media (min-width: 769px){.grid_layout{max-width:100%;margin-left:auto;margin-right:auto;width:90%}.grid_layout:after{content:" ";display:block;clear:both}}@media (min-width: 1024px){.grid_layout{max-width:1200px;width:97%}.content_page .grid_layout{width:90%}}@media (max-width: 479px){.slide_strips .grid_layout,.multimedia_teaser .grid_layout,.events_teaser .grid_layout{width:100%}.slide_strips .grid_layout header,.multimedia_teaser .grid_layout header,.events_teaser .grid_layout header{width:95%}.slide_strips .grid_layout footer,.multimedia_teaser .grid_layout footer,.events_teaser .grid_layout footer{width:95%}}@media (min-width: 600px){.slide_strips .grid_layout,.multimedia_teaser .grid_layout,.events_teaser .grid_layout{width:90%}}.homepage_carousel{background:black}.carousel_nav{position:absolute;bottom:30px;cursor:pointer;text-align:center;left:0;right:0;margin:0 auto}@media (min-width: 769px){.carousel_nav{bottom:60px}}.carousel_nav .dot_btns{position:relative;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:-moz-none;-ms-user-select:none;user-select:none}.carousel_nav .dot_btns .prev,.carousel_nav .dot_btns .next{display:none}@media screen and (769px){.carousel_nav .dot_btns .prev,.carousel_nav .dot_btns .next{display:inline-block;position:relative;vertical-align:top;margin:6px 8px 0;width:10px;height:15px;background-image:url("https://www.jpl.nasa.gov/assets/arrows-carousel@2x.png");background-size:20px 30px}}.carousel_nav .dot_btns .dot_btn{display:inline-block;cursor:pointer;margin:0 -2px;padding:10px 11px}@media screen and (769px){.carousel_nav .dot_btns .dot_btn{margin:0;padding:10px 9px}}.carousel_nav .dot_btns .dot_btn .dot{background-color:white;border-radius:50% 50% 50% 50%;height:7px;width:7px;opacity:0.2}.no-touch .carousel_nav .dot_btns .dot_btn:hover .dot{opacity:1}.carousel_nav .dot_btns .dot_btn.active .dot{opacity:1}.addthis-smartlayers-desktop .addthis_32x32_style a{width:40px}.touch .addthis-smartlayers{position:relative}.social_icons{display:inline-block;margin-top:3px;white-space:nowrap}.social_icons .icon{display:inline-block;overflow:hidden;height:32px;width:32px;vertical-align:middle;cursor:pointer;border-radius:3px;padding:0 !important;margin-bottom:.6em}.social_icons .icon+.icon{margin-left:.6em}@media (min-width: 769px){.social_icons .icon+.icon{margin-left:.7em}}.social_icons .all_icon{height:32px;width:32px;position:relative;vertical-align:middle;color:#a5a6a7}.social_icons .all_icon span{text-decoration:none;font-size:1em;font-weight:600;position:absolute;bottom:0;left:0;width:100%;line-height:normal}.social_icons .all_icon:hover{color:white}.media_feature .window{width:100%;height:auto;position:absolute;overflow:hidden}@media (min-width: 769px){.media_feature .window{position:relative;height:600px}}.media_feature .window.mobile{height:auto;min-height:100%}.media_feature #featured_image{z-index:9;top:0;left:0;width:100%;overflow:hidden}@media (min-width: 769px){.media_feature #featured_image{position:absolute}}.media_feature.image_of_the_day{padding:0;overflow:hidden;background:black;min-height:300px}@media (min-width: 600px){.media_feature.image_of_the_day{height:335px}}@media (min-width: 769px){.media_feature.image_of_the_day{height:430px}}@media (min-width: 1024px){.media_feature.image_of_the_day{height:570px}}@media (min-width: 1200px){.media_feature.image_of_the_day{height:660px}}@media (min-width: 1700px){.media_feature.image_of_the_day{height:740px;max-height:800px}}.media_feature.image_of_the_day a.image_day{width:100%;height:100%;position:absolute;top:0;left:0;z-index:11}.media_feature.image_of_the_day .window{padding:2.3em 0 3em;height:100%}@media (min-width: 769px){.media_feature.image_of_the_day .window{padding:4em 0 4.3em}}.media_feature.image_of_the_day header{z-index:12;text-align:center}.media_feature.image_of_the_day header .header_link{width:100%}.media_feature.image_of_the_day header .category_title{color:white}.media_feature.image_of_the_day header .module_title{color:white;margin-bottom:20px}.media_feature.image_of_the_day .outline_button{opacity:1}.missions_teaser{color:white;padding:0;overflow:hidden;background:black}@media (min-width: 769px){.missions_teaser{height:auto}}.missions_teaser .window{padding:2.3em 0 3em;width:100%;z-index:11;height:100%;position:relative;overflow:hidden}@media (min-width: 769px){.missions_teaser .window{padding:4em 0 4.3em}}.missions_teaser .window.mobile{height:auto;min-height:100%}.missions_teaser #missions_image{position:absolute;z-index:9;top:0;left:0;height:100%;overflow:hidden}@media (min-width: 600px){.touch .missions_teaser #missions_image{width:150% !important}}.missions_teaser header{z-index:12;text-align:center;margin-bottom:2em}@media (min-width: 769px){.missions_teaser header{margin-bottom:3.2em}}.missions_teaser header .header_link{width:100%}.missions_teaser header .category_title{color:white}.missions_teaser header .module_title{color:white;margin-bottom:.4em}.missions_teaser header p{text-align:center;width:100%;margin:.3em auto 1em;color:#cccccc}@media (min-width: 600px){.missions_teaser header p{width:70%}}@media (min-width: 769px){.missions_teaser header p{width:60%}}@media (min-width: 1024px){.missions_teaser header p{width:50%}}.missions_teaser .missions_gallery{padding-bottom:1px;margin-bottom:2.4em}@media (min-width: 769px){.missions_teaser .missions_gallery{margin-bottom:3em}}.missions_teaser .missions_gallery .slide{border:1px solid #3A3A3A;overflow:hidden;width:47.36842%;float:left;margin-bottom:5.26316%}.missions_teaser .missions_gallery .slide:nth-child(2n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}.missions_teaser .missions_gallery .slide:nth-child(2n+2){margin-left:52.63158%;margin-right:-100%;clear:none}@media (min-width: 600px){.missions_teaser .missions_gallery .slide{width:23.72881%;float:left;margin-bottom:0}.missions_teaser .missions_gallery .slide:nth-child(4n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}.missions_teaser .missions_gallery .slide:nth-child(4n+2){margin-left:25.42373%;margin-right:-100%;clear:none}.missions_teaser .missions_gallery .slide:nth-child(4n+3){margin-left:50.84746%;margin-right:-100%;clear:none}.missions_teaser .missions_gallery .slide:nth-child(4n+4){margin-left:76.27119%;margin-right:-100%;clear:none}}.missions_teaser .missions_gallery .text_overlay{color:white;font-size:1.3em;font-weight:600;padding-bottom:.6em;z-index:1;padding:.6em}@media (min-width: 600px){.missions_teaser .missions_gallery .text_overlay{font-size:1.5em;padding-bottom:.8em}}.missions_teaser .missions_gallery .gradient_bottom_teasers{position:relative;margin-top:-25px;height:75px}@media (min-width: 600px){.missions_teaser .missions_gallery .gradient_bottom_teasers{margin-top:-35px;height:110px}}.missions_teaser .outline_button{opacity:1}.filter_bar{background-color:#e4e9ef;text-align:center;padding:1em 0 0}@media (min-width: 769px){.filter_bar{padding:2em 0}}.filter_bar form.section_search{display:none;padding-bottom:1em;max-width:380px;width:90%;margin:0 auto}@media (min-width: 769px){.filter_bar form.section_search{width:auto;max-width:none;display:block !important;padding-bottom:0}}@media screen and (orientation: portrait){.touch .filter_bar.fixed{position:fixed;top:0;left:0;z-index:20;width:100%;-webkit-box-shadow:0 4px 4px -1px rgba(0,0,0,0.15);-moz-box-shadow:0 4px 4px -2px rgba(0,0,0,0.15);box-shadow:0 4px 4px -2px rgba(0,0,0,0.15)}}.no-touch .filter_bar.fixed{position:fixed;top:0;left:0;z-index:20;width:100%;-webkit-box-shadow:0 4px 4px -1px rgba(0,0,0,0.15);-moz-box-shadow:0 4px 4px -2px rgba(0,0,0,0.15);box-shadow:0 4px 4px -2px rgba(0,0,0,0.15)}.filter_bar .search_binder{width:100%;margin-bottom:.7em}@media (min-width: 769px){.filter_bar .search_binder{position:relative;vertical-align:top;display:inline-block;width:auto;margin:0}}.filter_bar input.search_field,.filter_bar form.submit_newsletter input.email_field,form.submit_newsletter .filter_bar input.email_field{width:100%}@media (min-width: 769px){.filter_bar input.search_field,.filter_bar form.submit_newsletter input.email_field,form.submit_newsletter .filter_bar input.email_field{width:170px}}@media (min-width: 1024px){.filter_bar input.search_field,.filter_bar form.submit_newsletter input.email_field,form.submit_newsletter .filter_bar input.email_field{width:220px}}.filter_bar select{margin:0 auto .5em;float:none;width:100%;max-width:380px;padding:.5em 1em;font-size:16px;border:0;height:40px;vertical-align:middle;color:white;-webkit-appearance:none;-o-appearance:none;background:#4b6a8d url("https://www.jpl.nasa.gov/assets/images/arrows_select_box.png") no-repeat 94% 10px;font-weight:600}@media (min-width: 769px){.filter_bar select{margin-left:.5em;margin-bottom:0;width:160px}}@media (min-width: 1024px){.filter_bar select{width:200px}}.no-touch .filter_bar select:hover{cursor:pointer}.filter_bar select::-ms-expand{display:none}.filter_bar option{padding:0.5em 1em}.filter_bar header{display:inline-block;width:100%;text-align:left}@media (min-width: 600px){.filter_bar header{text-align:center}}@media (min-width: 769px){.filter_bar header{display:none}}.filter_bar .arrow_box{display:inline-block;position:absolute;padding:4px;cursor:pointer;right:0;bottom:7px;float:none;transition:all .2s}@media (min-width: 600px){.filter_bar .arrow_box{text-align:center}}.filter_bar .arrow_box.rotate_up{transform:rotate(180deg)}.filter_bar .arrow_box.rotate_right{transform:rotate(270deg)}.filter_bar .arrow_box.rotate_left{transform:rotate(90deg)}.filter_bar .arrow_box .arrow_down{display:block;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #8597B1}.filter_bar_spanner{display:none}@media screen and (orientation: landscape){.touch .filter_bar_spanner{display:none !important}}@-moz-document url-prefix(){section.filter_bar select{background-image:none;padding:0.6em 1em 0.5em}}.ie9 section.filter_bar select{background-image:none}.rollover_description{opacity:0;height:0;z-index:1;overflow:hidden}.rollover_description .item_tease_overlay{color:white}.slide{position:relative;min-height:100%}.slide .overlay_arrow{display:none}.slide&gt;a{text-decoration:none;color:black}.no-touch .slide:hover .content_title{color:#366599;cursor:pointer}@media (min-width: 769px){.no-touch .slide:hover .rollover_description{padding:.9em;position:absolute;opacity:1;height:auto;top:0;right:0;width:100%;height:100%;color:white;background-color:rgba(67,93,122,0.95);cursor:pointer}.no-touch .slide:hover .rollover_title{font-size:1.6em;font-weight:600;margin-bottom:.2em}.no-touch .slide:hover .overlay_arrow{height:14px;width:14px;position:absolute;right:14px;bottom:18px;display:block}}.list_view .rollover_description{display:none}.release_heading{text-transform:uppercase;font-weight:600}.release_heading,.release_date{font-size:.9em;margin-bottom:.3em;display:inline-block}.slick-slider{margin-left:auto;margin-right:auto;width:100%}@media (min-width: 480px){.slick-slider{width:84%}}@media (min-width: 600px){.slick-slider{width:90%}}.slick-slider .slick-slide&gt;a{text-decoration:none;color:black}.slick-slider .slide{margin:0 6px}@media (min-width: 769px){.slick-slider .slide{margin:0 9px}}.image_and_description_container{position:relative;overflow:hidden}.image_and_description_container span.play_button{position:absolute;background:url("https://www.jpl.nasa.gov/assets/images/play-button.png") center center no-repeat;background-size:50px 50px;height:50px;width:50px;display:inline;left:42%;left:calc(50% - 25px);top:42%;top:calc(50% - 25px)}.slide_strips{overflow:hidden;padding-top:0}.slide_strips header{overflow:hidden}.slide_strips header h1.module_title{margin-bottom:.45em}.slide_strips header h1.module_title_small{display:inline-block;vertical-align:middle;width:20%}.slide_strips header .section_selector{text-align:center;display:inline-block;width:100%;position:relative;padding:1px 0;margin-bottom:1em}@media (min-width: 600px){.slide_strips header .section_selector{margin-bottom:1.6em}}@media (min-width: 769px){.slide_strips header .section_selector{margin-bottom:1.8em}}.slide_strips header .section_selector a{cursor:pointer;border-radius:50%;height:6em;width:6em;background-color:white;border:1px solid #777777;line-height:6em;color:#777777;line-height:4.3em;cursor:pointer;display:inline-block;text-transform:uppercase;font-size:.7em;transition:background .2s ease;line-height:6em;font-weight:600;letter-spacing:-.02em}@media (min-width: 769px){.slide_strips header .section_selector a{cursor:pointer;border-radius:50%;height:6.5em;width:6.5em;background-color:white;border:2px solid #a5a6a7;line-height:6.5em;font-size:.9em;line-height:6.5em}}.slide_strips header .section_selector a+a{margin-left:.2em}@media (min-width: 769px){.slide_strips header .section_selector a+a{margin-left:1em}}.no-touch .slide_strips header .section_selector a:hover,.slide_strips header .section_selector a.current{background-color:black;border-color:black;color:white;transition:none}.slide_strips header .section_selector .gradient_line{position:absolute;top:50%;z-index:-1;height:2px}.slide_strips .slide_strip_wrapper{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:-moz-none;-ms-user-select:none;user-select:none;position:relative;min-height:100px;margin-bottom:40px}.slide_strips .slide_strip_wrapper .loading{display:none;background-image:url("https://www.jpl.nasa.gov/assets/stylesheets/ajax-loader.gif");width:32px;height:32px;margin-left:auto;margin-right:auto;position:relative;top:40px}.slide_strips .slide_strip_container{width:100%;left:0}.slide_strips .slide_strip{z-index:6;position:relative;left:0;opacity:0;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";margin-bottom:0}.slide_strips .slide_strip .slide{margin:0 6px}@media (min-width: 769px){.slide_strips .slide_strip .slide{margin:0 9px}}.slide_strips .content_title{padding:.6em 0 0;color:black;text-decoration:none}.slide_strips .content_titlea{text-decoration:none}.multimedia_teaser .multimedia_module_gallery{position:relative;overflow:visible}nav.slide_nav{width:100%;position:absolute;height:100%}nav.slide_nav .set_view_master_nav{display:none}@media (min-width: 480px){nav.slide_nav .set_view_master_nav{display:block;cursor:pointer;position:absolute;width:40px;height:40px;text-align:center;top:20%}}@media (min-width: 600px){nav.slide_nav .set_view_master_nav{top:20%}}@media (min-width: 769px){nav.slide_nav .set_view_master_nav{top:26%}}@media (min-width: 1024px){nav.slide_nav .set_view_master_nav{top:30%}}nav.slide_nav .set_view_master_nav .carousel_arrow_icon{background-image:url("https://www.jpl.nasa.gov/assets/images/arrows_carousel_round@2x.png");background-size:100px;width:40px;height:40px;display:inline-block;text-indent:-9999px}.multimedia_teaser nav.slide_nav .set_view_master_nav{top:38%}nav.slide_nav .prev_btn .carousel_arrow_icon,nav.slide_nav .next_btn .carousel_arrow_icon{background-position:0px 0px}@media (min-width: 480px){nav.slide_nav .prev_btn,nav.slide_nav .next_btn{opacity:.4;-webkit-tap-highlight-color:rgba(255,255,255,0);-webkit-tap-highlight-color:transparent}.no-touch nav.slide_nav .prev_btn:hover,.no-touch nav.slide_nav .next_btn:hover{opacity:1}.no-touch nav.slide_nav .prev_btn:hover.disabled,.no-touch nav.slide_nav .next_btn:hover.disabled{cursor:default;opacity:.1}nav.slide_nav .prev_btn.disabled,nav.slide_nav .next_btn.disabled{opacity:.1}}nav.slide_nav .prev_btn{left:-.5%}@media (min-width: 600px){nav.slide_nav .prev_btn{left:-2%}}@media (min-width: 769px){nav.slide_nav .prev_btn{left:-1.5%}}@media (min-width: 1024px){nav.slide_nav .prev_btn{left:-.5%}}@media (min-width: 1200px){nav.slide_nav .prev_btn{left:.5%}}nav.slide_nav .next_btn{right:-1.5%}@media (min-width: 600px){nav.slide_nav .next_btn{right:-2.5%}}@media (min-width: 769px){nav.slide_nav .next_btn{right:-2%}}@media (min-width: 1024px){nav.slide_nav .next_btn{right:-1%}}@media (min-width: 1200px){nav.slide_nav .next_btn{right:0}}nav.slide_nav .next_btn .carousel_arrow_icon{background-position:-50px 0px}.fancybox-overlay,#fancybox-lock{background:#000 !important}.fancybox-wrap,.fancybox-wrap *{-moz-box-sizing:content-box !important;-webkit-box-sizing:content-box !important;-safari-box-sizing:content-box !important;box-sizing:content-box !important}.fancybox-wrap .fancybox-inner{box-shadow:none !important;border-radius:2px !important}.fancybox-wrap .fancybox-title{font-size:16px;font-weight:600;letter-spacing:-0.01em;text-align:center;margin-top:16px;color:#E7E7E7;line-height:1.4em}@media (min-width: 769px){.fancybox-wrap .fancybox-title{font-size:17px}}@media (min-width: 1200px){.fancybox-wrap .fancybox-title{font-size:19px}}.fancybox-wrap .addthis_toolbox{display:inline-block;width:100%;margin-top:16px;white-space:nowrap}.fancybox-wrap a.addthis_button_compact{width:85px;border-radius:4px;overflow:hidden;height:35px}.fancybox-wrap a.addthis_button_compact img{vertical-align:top}.fancybox-wrap a.addthis_button_compact,.fancybox-wrap .button,.fancybox-wrap .primary_media_feature.single .button,.primary_media_feature.single .fancybox-wrap .button,.fancybox-wrap .outline_button{margin-right:6px;display:inline-block;vertical-align:top}.fancybox-wrap .button,.fancybox-wrap .primary_media_feature.single .button,.primary_media_feature.single .fancybox-wrap .button,.fancybox-wrap .outline_button{font-size:14px;padding-bottom:0;padding-left:1em;padding-right:1em;height:25px;letter-spacing:0;padding-top:10px}#fancybox-thumbs{background:#2A2A2A !important}#fancybox-thumbs .fancybox-thumb-prev,#fancybox-thumbs .fancybox-thumb-next{background:#4A4A4A !important}#fancybox-thumbs ul li{padding:2px !important}#fancybox-thumbs ul li a{border:2px solid #909090 !important;border-radius:2px !important;box-shadow:none !important}#fancybox-thumbs ul li.fancybox-thumb-active{padding:2px !important}#fancybox-thumbs ul li.fancybox-thumb-active a{border:2px solid #fff !important}.atm-i{display:none !important}figure{position:relative;margin-bottom:1em}@media (min-width: 769px){figure{margin-bottom:2em}}figure figcaption{margin-top:.8em;font-size:.8em;color:#5a6470}@media (min-width: 769px){figure figcaption{font-size:.88em}}figure a.play{position:relative}figure span.play_button{position:absolute;background:url("https://www.jpl.nasa.gov/assets/images/play-button.png") center center no-repeat;background-size:50px 50px;height:50px;width:50px;display:inline;left:42%;left:calc(50% - 25px);top:42%;top:calc(50% - 25px)}aside figure{margin-bottom:0}aside figure figcaption{margin-bottom:0}.content_page #page_header{margin-bottom:2em}.content_page #page_header .release_date{font-size:1em;color:#222222;white-space:nowrap}.content_page #page_header .author{margin:.5em 0 1.8em}.no-touch .content_page a:hover{border-bottom:1px solid}.content_page .main_feature .master-slider{width:100%;height:300px}@media (min-width: 600px){.content_page .main_feature .master-slider{height:400px}}.content_page .main_feature .master-slider .gradient_container_bottom{height:80px}.content_page .main_feature .master-slider .ms-nav-next,.content_page .main_feature .master-slider .ms-nav-prev{display:none}@media (min-width: 769px){.content_page .main_feature .master-slider .ms-nav-next,.content_page .main_feature .master-slider .ms-nav-prev{display:block}}.content_page .main_feature .master-slider .ms-bullets{bottom:30px}.content_page .main_feature .master-slider .ms-bullets-count{right:-50%;position:absolute}.content_page .main_feature .master-slider .ms-bullet{background-color:white;background-image:none;border-radius:50% 50% 50% 50%;height:10px;width:10px;opacity:0.5;margin:0 10px}.content_page .main_feature .master-slider .ms-bullet:hover,.content_page .main_feature .master-slider .ms-bullet.ms-bullet-selected{opacity:1.0}.content_page #primary_column{margin-bottom:5.26316%}@media (min-width: 600px){.content_page #primary_column{width:61.53846%;float:left;margin-right:2.5641%;margin-bottom:0}}@media (min-width: 769px){.content_page #primary_column{width:64.40678%;float:left;margin-right:1.69492%}}@media (min-width: 1024px){.content_page #primary_column{width:61.86441%;float:left;margin-right:1.69492%}}@media (min-width: 1200px){.content_page #primary_column{width:59.32203%;float:left;margin-right:1.69492%}}@media (min-width: 600px){.content_page #secondary_column{width:35.89744%;float:right;margin-right:0}}@media (min-width: 769px){.content_page #secondary_column{width:32.20339%;float:right;margin-right:0}}.article_image_container{margin-bottom:2.5641%}.article_image_container .caption{margin-top:.8em;color:#5a6470;font-size:0.8em;height:70px;overflow:hidden}.inner_nav li{display:inline-block}.inner_nav li a{font-weight:600}.inner_nav li a:hover{text-decoration:underline}.inner_nav li a:after{content:" |";color:#777777}.inner_nav li:last-child a:after{content:""}#secondary_column aside{border:1px solid #c1c1c1;padding:5.26316%;margin-bottom:7.14286%}#secondary_column aside:last-child{margin-bottom:0}aside .gallery_list{margin-bottom:0}aside .gallery_list li{margin-bottom:1em;position:relative}aside .gallery_list li:last-child{margin-bottom:0}aside .gallery_list .caption_overlay{position:absolute;top:0;left:0;width:50%;padding:.6em;color:white;font-weight:600}aside .gallery_list span.play_button{position:absolute;background:url("https://www.jpl.nasa.gov/assets/images/play-button.png") center center no-repeat;background-size:50px 50px;height:50px;width:50px;display:inline;left:42%;left:calc(50% - 25px);top:42%;top:calc(50% - 25px)}.links_module li{margin-bottom:1em}.page_subnav{position:relative;top:-1.6em;font-weight:600;font-size:.9em;letter-spacing:-.01em;font-family:Helvetica, Arial, sans-serif;cursor:pointer}@media (min-width: 769px){.page_subnav{top:-2.9em;font-size:1em}}.page_subnav li{margin:0 .5em .3em 0;display:inline-block}.page_subnav li.page_subnav_title{text-transform:uppercase;white-space:nowrap}.page_subnav li.page_subnav_title .divider{margin-left:.5em}.page_subnav li:last-child{margin:0}.page_subnav li a,.page_subnav li .divider{color:#a7afb8}.page_subnav li a{white-space:nowrap}.page_subnav li a:hover{text-decoration:none;border:none !important}.page_subnav li a:hover,.page_subnav li .current{color:#222222}.text_overlay{position:absolute;bottom:0;width:100%;text-align:center;padding:1.2em}.item_tease_overlay{margin-top:.3em;color:#cccccc;overflow:hidden}.article_nav{display:none}@media (min-width: 1024px){.article_nav{display:block;position:relative;z-index:11}.article_nav .article_nav_block{position:fixed;height:86px;display:inline-block;top:42.5%}.article_nav .article_nav_block .link_box{width:40px;background-color:#e4e9ef;display:inline;height:100%}.article_nav .article_nav_block .article_details{display:inline;width:250px;background-color:#FFF;text-decoration:none;color:#000;padding:10px;background-color:#e4e9ef}.article_nav .article_nav_block .article_details .img{margin-bottom:6px}.article_nav .article_nav_block .article_details .title{font-weight:600;font-size:.9em}.article_nav .article_nav_block .article_details .which{font-size:.8em;margin-bottom:12px}.article_nav .article_nav_block.prev{left:0}.article_nav .article_nav_block.prev .link_box{float:left}.article_nav .article_nav_block.prev .article_details{float:left;display:none}.article_nav .article_nav_block.next{right:0}.article_nav .article_nav_block.next .link_box{float:right}.article_nav .article_nav_block.next .article_details{display:none;float:right}.no-touch .article_nav .article_nav_block:hover .article_details{display:block}}.wysiwyg_content{line-height:1.4em}#primary_column .wysiwyg_content&gt;:first-child{margin-top:0}.wysiwyg_content p,.wysiwyg_content a{word-wrap:break-word}.wysiwyg_content h1,.wysiwyg_content h2,.wysiwyg_content h3,.wysiwyg_content h4{font-weight:600;margin:1.5em 0 .5em;line-height:1.2em}.wysiwyg_content h1{font-size:2.2em}.wysiwyg_content h2{font-size:1.8em}.wysiwyg_content h3{font-size:1.4em}.wysiwyg_content h4{font-weight:600;font-size:1.1em}.wysiwyg_content strong,.wysiwyg_content b,.wysiwyg_content .bold{font-weight:bold}.wysiwyg_content .small_text{font-size:.8em}.wysiwyg_content .inline_img,.wysiwyg_content .inline_img .inline_img_wide{margin:.4em 1.2em .9em 0;float:left;max-width:40%}.wysiwyg_content .inline_img.right,.wysiwyg_content .inline_img .right.inline_img_wide{margin-right:0;margin-left:1.2em;float:right}.wysiwyg_content .inline_img img,.wysiwyg_content .inline_img .inline_img_wide img{width:auto;max-width:100%}@media (min-width: 600px){.wysiwyg_content .inline_img,.wysiwyg_content .inline_img .inline_img_wide{max-width:100%}}.wysiwyg_content .inline_img .inline_img_wide{width:100%;max-width:100%}.wysiwyg_content .comment{color:red}.wysiwyg_content .pipe_divider{color:#cccccc}@media (min-width: 480px){.wysiwyg_content .video_embed #video_player{height:385px}}@media (min-width: 600px){.wysiwyg_content .video_embed #video_player{height:306px}}@media (min-width: 769px){.wysiwyg_content .video_embed #video_player{height:400px}}@media (min-width: 1024px){.wysiwyg_content .video_embed #video_player{height:485px}}.wysiwyg_content table{border-spacing:1px;border-collapse:separate;font-size:15px}#primary_column .wysiwyg_content table{margin:2em 0}#secondary_column .wysiwyg_content table{margin:1em 0;width:100%}.wysiwyg_content table th,.wysiwyg_content table td{padding:8px 10px}.wysiwyg_content table th{background-color:#ddd;font-weight:600}.wysiwyg_content table td{background-color:#eee}.wysiwyg_content table .table_top{vertical-align:top}.wysiwyg_content table h1,.wysiwyg_content table h2,.wysiwyg_content table h3,.wysiwyg_content table h4,.wysiwyg_content table h5{margin:.2em 0 .2em}.wysiwyg_content table.clear_table td{background-color:transparent}.wysiwyg_content table.line_separated_table{border-spacing:0}.wysiwyg_content table.line_separated_table td{background-color:transparent;border-bottom:1px solid #cccccc;padding:5px 12px 4px 0}.wysiwyg_content ul.spaced_list,.wysiwyg_content ul.bullet_list{padding-bottom:.5em}.wysiwyg_content ul.spaced_list li,.wysiwyg_content ul.bullet_list li{margin-bottom:.5em}.wysiwyg_content ul.bullet_list{margin-left:20px;list-style-type:disc}.wysiwyg_content ol.numbered_list{list-style-type:decimal;margin-left:2em}.wysiwyg_content ol.numbered_list li{margin-bottom:.5em}.wysiwyg_content ul.thumb_row{margin:1em 0}.wysiwyg_content ul.thumb_row li{width:31.81818%;float:left}.wysiwyg_content ul.thumb_row li:nth-child(3n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}.wysiwyg_content ul.thumb_row li:nth-child(3n+2){margin-left:34.09091%;margin-right:-100%;clear:none}.wysiwyg_content ul.thumb_row li:nth-child(3n+3){margin-left:68.18182%;margin-right:-100%;clear:none}@media (min-width: 480px){.wysiwyg_content ul.thumb_row li{width:18.36735%;float:left}.wysiwyg_content ul.thumb_row li:nth-child(5n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}.wysiwyg_content ul.thumb_row li:nth-child(5n+2){margin-left:20.40816%;margin-right:-100%;clear:none}.wysiwyg_content ul.thumb_row li:nth-child(5n+3){margin-left:40.81633%;margin-right:-100%;clear:none}.wysiwyg_content ul.thumb_row li:nth-child(5n+4){margin-left:61.22449%;margin-right:-100%;clear:none}.wysiwyg_content ul.thumb_row li:nth-child(5n+5){margin-left:81.63265%;margin-right:-100%;clear:none}}.wysiwyg_content ul.thumb_row li p{font-size:.9em;text-align:center}.wysiwyg_content .hr_custom{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}.wysiwyg_content ul.image_text_list,.wysiwyg_content ul.image_text_sublist,.wysiwyg_content ul.small_image_text_list{margin-bottom:2em}#secondary_column .wysiwyg_content ul.image_text_list,#secondary_column .wysiwyg_content ul.image_text_sublist,#secondary_column .wysiwyg_content ul.small_image_text_list{margin-bottom:0}.wysiwyg_content ul.image_text_list li,.wysiwyg_content ul.image_text_sublist li,.wysiwyg_content ul.small_image_text_list li{border-bottom:1px solid #cccccc;overflow:hidden;*zoom:1;padding:1.5em 0 1.5em}.wysiwyg_content ul.image_text_list li a,.wysiwyg_content ul.image_text_sublist li a,.wysiwyg_content ul.small_image_text_list li a{text-decoration:none;cursor:pointer}#secondary_column .wysiwyg_content ul.image_text_list li:first-child,#secondary_column .wysiwyg_content ul.image_text_sublist li:first-child,#secondary_column .wysiwyg_content ul.small_image_text_list li:first-child{padding-top:.5em}.wysiwyg_content ul.image_text_list li:last-child,.wysiwyg_content ul.image_text_sublist li:last-child,.wysiwyg_content ul.small_image_text_list li:last-child{border-bottom:none}.wysiwyg_content ul.image_text_list .image_text_container,.wysiwyg_content ul.image_text_sublist .image_text_container,.wysiwyg_content ul.small_image_text_list .image_text_container{position:relative}.wysiwyg_content ul.image_text_list .image_text_container .img,.wysiwyg_content ul.image_text_sublist .image_text_container .img,.wysiwyg_content ul.small_image_text_list .image_text_container .img{float:right;margin-left:4%;margin-bottom:.5em;width:23%}@media (min-width: 600px){.wysiwyg_content ul.image_text_list .image_text_container .img,.wysiwyg_content ul.image_text_sublist .image_text_container .img,.wysiwyg_content ul.small_image_text_list .image_text_container .img{float:left;margin:0 3% 0 0}#secondary_column .wysiwyg_content ul.image_text_list .image_text_container .img,#secondary_column .wysiwyg_content ul.image_text_sublist .image_text_container .img,#secondary_column .wysiwyg_content ul.small_image_text_list .image_text_container .img{margin-right:4%;width:27%}}.wysiwyg_content ul.image_text_list .image_text_container .list_text_content,.wysiwyg_content ul.image_text_sublist .image_text_container .list_text_content,.wysiwyg_content ul.small_image_text_list .image_text_container .list_text_content{width:auto}@media (min-width: 600px){.wysiwyg_content ul.image_text_list .image_text_container .list_text_content,.wysiwyg_content ul.image_text_sublist .image_text_container .list_text_content,.wysiwyg_content ul.small_image_text_list .image_text_container .list_text_content{width:73%;float:left}#secondary_column .wysiwyg_content ul.image_text_list .image_text_container .list_text_content,#secondary_column .wysiwyg_content ul.image_text_sublist .image_text_container .list_text_content,#secondary_column .wysiwyg_content ul.small_image_text_list .image_text_container .list_text_content{width:69%}}.wysiwyg_content ul.image_text_list .image_text_container .date,.wysiwyg_content ul.image_text_sublist .image_text_container .date,.wysiwyg_content ul.small_image_text_list .image_text_container .date{font-size:.9em;margin-bottom:.3em;color:#222222}.wysiwyg_content ul.image_text_list .image_text_container .content_title,.wysiwyg_content ul.image_text_sublist .image_text_container .content_title,.wysiwyg_content ul.small_image_text_list .image_text_container .content_title{display:block;font-weight:600;text-decoration:none;color:black;cursor:pointer;letter-spacing:-.025em;line-height:1.3em;font-size:1.04em;margin-bottom:0em}@media (min-width: 600px){.wysiwyg_content ul.image_text_list .image_text_container .content_title,.wysiwyg_content ul.image_text_sublist .image_text_container .content_title,.wysiwyg_content ul.small_image_text_list .image_text_container .content_title{font-size:1.2em;margin-bottom:0em}}@media (min-width: 769px){.wysiwyg_content ul.image_text_list .image_text_container .content_title,.wysiwyg_content ul.image_text_sublist .image_text_container .content_title,.wysiwyg_content ul.small_image_text_list .image_text_container .content_title{font-size:1.36em;margin-bottom:0em}}@media (min-width: 1024px){.wysiwyg_content ul.image_text_list .image_text_container .content_title,.wysiwyg_content ul.image_text_sublist .image_text_container .content_title,.wysiwyg_content ul.small_image_text_list .image_text_container .content_title{font-size:1.44em;margin-bottom:0em}}@media (min-width: 1200px){.wysiwyg_content ul.image_text_list .image_text_container .content_title,.wysiwyg_content ul.image_text_sublist .image_text_container .content_title,.wysiwyg_content ul.small_image_text_list .image_text_container .content_title{font-size:1.52em;margin-bottom:0em}}#secondary_column .wysiwyg_content ul.image_text_list .image_text_container .content_title,#secondary_column .wysiwyg_content ul.image_text_sublist .image_text_container .content_title,#secondary_column .wysiwyg_content ul.small_image_text_list .image_text_container .content_title{font-size:0.78em;margin-bottom:0em}@media (min-width: 600px){#secondary_column .wysiwyg_content ul.image_text_list .image_text_container .content_title,#secondary_column .wysiwyg_content ul.image_text_sublist .image_text_container .content_title,#secondary_column .wysiwyg_content ul.small_image_text_list .image_text_container .content_title{font-size:0.9em;margin-bottom:0em}}@media (min-width: 769px){#secondary_column .wysiwyg_content ul.image_text_list .image_text_container .content_title,#secondary_column .wysiwyg_content ul.image_text_sublist .image_text_container .content_title,#secondary_column .wysiwyg_content ul.small_image_text_list .image_text_container .content_title{font-size:1.02em;margin-bottom:0em}}@media (min-width: 1024px){#secondary_column .wysiwyg_content ul.image_text_list .image_text_container .content_title,#secondary_column .wysiwyg_content ul.image_text_sublist .image_text_container .content_title,#secondary_column .wysiwyg_content ul.small_image_text_list .image_text_container .content_title{font-size:1.08em;margin-bottom:0em}}@media (min-width: 1200px){#secondary_column .wysiwyg_content ul.image_text_list .image_text_container .content_title,#secondary_column .wysiwyg_content ul.image_text_sublist .image_text_container .content_title,#secondary_column .wysiwyg_content ul.small_image_text_list .image_text_container .content_title{font-size:1.14em;margin-bottom:0em}}.wysiwyg_content ul.image_text_list .image_text_container .content_title a,.wysiwyg_content ul.image_text_sublist .image_text_container .content_title a,.wysiwyg_content ul.small_image_text_list .image_text_container .content_title a{color:black}.wysiwyg_content ul.image_text_list .image_text_container .article_teaser_body,.wysiwyg_content ul.image_text_sublist .image_text_container .article_teaser_body,.wysiwyg_content ul.small_image_text_list .image_text_container .article_teaser_body{font-size:1em}.wysiwyg_content ul.image_text_list .image_text_container .article_teaser_body&gt;:first-child,.wysiwyg_content ul.image_text_sublist .image_text_container .article_teaser_body&gt;:first-child,.wysiwyg_content ul.small_image_text_list .image_text_container .article_teaser_body&gt;:first-child{margin-top:.5em}.wysiwyg_content ul.image_text_list .image_text_container .article_teaser_body&gt;:last-child,.wysiwyg_content ul.image_text_sublist .image_text_container .article_teaser_body&gt;:last-child,.wysiwyg_content ul.small_image_text_list .image_text_container .article_teaser_body&gt;:last-child{margin-bottom:0}#secondary_column .wysiwyg_content ul.image_text_list .image_text_container .article_teaser_body,#secondary_column .wysiwyg_content ul.image_text_sublist .image_text_container .article_teaser_body,#secondary_column .wysiwyg_content ul.small_image_text_list .image_text_container .article_teaser_body{font-size:.9em}#primary_column .wysiwyg_content&gt;ul.image_text_list:first-child li:first-child,#primary_column .wysiwyg_content&gt;ul.image_text_sublist:first-child li:first-child,#primary_column .wysiwyg_content&gt;ul.small_image_text_list:first-child li:first-child{padding-top:0}.wysiwyg_content ul.image_text_sublist{margin-top:0}.wysiwyg_content ul.image_text_sublist li{border-bottom:none}.wysiwyg_content ul.image_text_sublist li:first-child{padding-top:0}@media (min-width: 600px){.wysiwyg_content ul.image_text_sublist{margin-left:9%}}.wysiwyg_content ul.image_text_sublist .image_text_container .img{width:15%}.wysiwyg_content ul.image_text_sublist .image_text_container .content_title{font-size:0.975em;margin-bottom:0em;letter-spacing:-.02em}@media (min-width: 600px){.wysiwyg_content ul.image_text_sublist .image_text_container .content_title{font-size:1.125em;margin-bottom:0em}}@media (min-width: 769px){.wysiwyg_content ul.image_text_sublist .image_text_container .content_title{font-size:1.275em;margin-bottom:0em}}@media (min-width: 1024px){.wysiwyg_content ul.image_text_sublist .image_text_container .content_title{font-size:1.35em;margin-bottom:0em}}@media (min-width: 1200px){.wysiwyg_content ul.image_text_sublist .image_text_container .content_title{font-size:1.425em;margin-bottom:0em}}.wysiwyg_content ul.small_image_text_list .image_text_container .img{width:15%}@media (min-width: 600px){.wysiwyg_content ul.small_image_text_list .image_text_container .list_text_content{width:80%}}.wysiwyg_content ul.small_image_text_list .image_text_container .list_text_content .content_title{font-size:0.975em;margin-bottom:0em;letter-spacing:-.02em}@media (min-width: 600px){.wysiwyg_content ul.small_image_text_list .image_text_container .list_text_content .content_title{font-size:1.125em;margin-bottom:0em}}@media (min-width: 769px){.wysiwyg_content ul.small_image_text_list .image_text_container .list_text_content .content_title{font-size:1.275em;margin-bottom:0em}}@media (min-width: 1024px){.wysiwyg_content ul.small_image_text_list .image_text_container .list_text_content .content_title{font-size:1.35em;margin-bottom:0em}}@media (min-width: 1200px){.wysiwyg_content ul.small_image_text_list .image_text_container .list_text_content .content_title{font-size:1.425em;margin-bottom:0em}}.wysiwyg_content .pagination{height:40px}.wysiwyg_content .pagination .previous{float:left}.wysiwyg_content .pagination .next{float:right}.wysiwyg_content .content_grid{margin:1.5em 0}.wysiwyg_content .content_grid:after{content:"";display:table;clear:both}.wysiwyg_content .content_grid .slide{margin-bottom:1.69492%;width:49.15254%;float:left}.wysiwyg_content .content_grid .slide:nth-child(2n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}.wysiwyg_content .content_grid .slide:nth-child(2n+2){margin-left:50.84746%;margin-right:-100%;clear:none}@media (min-width: 769px){.wysiwyg_content .content_grid .slide{width:23.72881%;float:left}.wysiwyg_content .content_grid .slide:nth-child(4n+1){margin-left:0;margin-right:-100%;clear:both;margin-left:0}.wysiwyg_content .content_grid .slide:nth-child(4n+2){margin-left:25.42373%;margin-right:-100%;clear:none}.wysiwyg_content .content_grid .slide:nth-child(4n+3){margin-left:50.84746%;margin-right:-100%;clear:none}.wysiwyg_content .content_grid .slide:nth-child(4n+4){margin-left:76.27119%;margin-right:-100%;clear:none}}@media (min-width: 600px){.wysiwyg_content .main_area_sitemap .sitemap .grid_layout{width:100%}}.wysiwyg_content .main_area_sitemap .sitemap_directory{overflow:hidden;*zoom:1}.wysiwyg_content .main_area_sitemap .sitemap_title{text-transform:capitalize}.wysiwyg_content .main_area_sitemap .sitemap_block{text-align:center;width:100%}@media (min-width: 600px){.wysiwyg_content .main_area_sitemap .sitemap_block{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;width:25%;float:left;padding-left:0.83333%;padding-right:0.83333%;text-align:left}}@media (min-width: 600px){.wysiwyg_content .main_area_sitemap .subnav li{padding-left:1em;text-indent:-1em;margin:.1em 0}}.tooltipsy{background-color:rgba(250,250,250,0.8);font-size:.8em;padding:.4em .7em;color:#000;border-radius:6px;z-index:10;border:1px solid #e4e9ef}#main_container form.gsc-search-box{padding:0}#main_container form.gsc-search-box td.gsc-input{padding:0}#main_container.placeholder{-webkit-font-smoothing:antialiased}#main_container:-moz-placeholder{-webkit-font-smoothing:antialiased}#main_container::-moz-placeholder{-webkit-font-smoothing:antialiased}#main_container::-webkit-input-placeholder{-webkit-font-smoothing:antialiased}#main_container .gsc-tabsArea{border-color:#4b6a8d}#main_container .gsc-tabsArea&gt;div{overflow:hidden;position:relative;bottom:-2px}#main_container .gsc-tabsArea .gsc-tabhInactive{border-bottom:1px solid #4b6a8d}#main_container .gsc-tabsArea .gsc-tabhActive{border-color:#4b6a8d;border-bottom:none}#main_container .gcsc-branding{display:none}#main_container .gsc-control-cse table{margin:0}#main_container .gsc-input-box{height:auto;border-radius:6px;border-color:#B3BEC8;height:38px}#main_container .gsc-input-box .gsib_a{padding-top:9px;vertical-align:top}#main_container .gsc-input-box .gsib_b{padding-top:8px}#main_container .gsc-input-box .gsib_b a:hover{border-bottom:none}#main_container input.gsc-input{padding:12px 0 0 0;font-size:16px}#main_container td.gsc-search-button{padding-left:9px}#main_container input.gsc-search-button{border-radius:6px;height:38px;color:white;font-size:16px;font-weight:500;text-transform:uppercase;background:#4b6a8d url("https://www.jpl.nasa.gov/assets/images/search_icon.png") no-repeat center}#main_container input.gsc-search-button:hover{background-color:#6083aa}#main_container .gsc-selected-option-container{width:auto !important;max-width:none}#main_container td.gsc-clear-button{padding-left:4px}#main_container .cse .gsc-control-cse,#main_container .gsc-control-cse{padding:0}#main_container td.gsc-result-info-container{padding-left:0}#main_container .gs-no-results-result .gs-snippet,#main_container .gs-error-result .gs-snippet{padding:5px 0;margin:5px 0;border:none;background-color:transparent}#main_container .gsc-webResult.gsc-results{margin-top:0px}#main_container table.gsc-table-result{margin-top:13px}#main_container div.gsc-webResult.gsc-result{border-bottom:1px solid #CFD7E1;padding-bottom:16px;padding-top:16px;padding-left:0;margin-bottom:0px;margin-top:0px}#main_container td.gsc-table-cell-snippet-close{padding:0}#main_container div.gs-title{padding:0;height:auto;line-height:1.4em;text-decoration:none}#main_container .gsc-thumbnail-inside,#main_container .gsc-url-top{padding:0}#main_container td.gsc-table-cell-thumbnail{padding-top:3px}#main_container .gs-result a.gs-title,#main_container .gs-result a.gs-title b{color:#388FDA;text-decoration:none;font-weight:600;letter-spacing:-.035em;height:auto;padding:0}@media (min-width: 600px){#main_container .gs-result a.gs-title,#main_container .gs-result a.gs-title b{font-size:18px}}@media (min-width: 769px){#main_container .gs-result a.gs-title,#main_container .gs-result a.gs-title b{font-size:20px}}#main_container a.gs-title:hover{color:#115FA3}#main_container a.gs-title:hover b{color:#115FA3}#main_container .gs-webResult .gs-snippet,#main_container .gs-imageResult .gs-snippet,#main_container .gs-fileFormatType{color:#333;line-height:1.4em}@media (min-width: 1024px){#main_container .gs-webResult .gs-snippet,#main_container .gs-imageResult .gs-snippet,#main_container .gs-fileFormatType{font-size:15px}}#main_container .gs-webResult div.gs-visibleUrl,#main_container .gs-imageResult div.gs-visibleUrl{color:#888}#main_container .gsc-table-cell-thumbnail{padding:0 6px 0 0}@media (min-width: 600px){#main_container .gsc-table-cell-thumbnail{padding:0 12px 0 0}}@media (min-width: 1024px){#main_container .gsc-table-cell-thumbnail{padding:0 16px 0 0}}#main_container .gs-web-image-box{width:100px}@media (min-width: 600px){#main_container .gs-web-image-box{padding:0;width:125px}}#main_container img.gs-image,#main_container .gs-promotion-image-box img.gs-promotion-image{border:none;width:100%;height:auto;max-width:none;max-height:none}#main_container a.gs-image{display:block}#main_container .gsc-results .gsc-cursor-box{padding-top:2px}#main_container .gsc-results .gsc-cursor-box .gsc-cursor-page{color:#388FDA;font-size:17px}#main_container .gsc-results .gsc-cursor-box .gsc-cursor-current-page{color:#333;background-color:transparent;text-shadow:none;padding:0}#main_container .gsc-adBlock{display:none !important}#search article{overflow:visible}
      </style>
      <style data-href="/assets/stylesheets/print.css" media="print">
       .print_only{display:block}.print_logo{position:absolute;top:0;left:0}div#site_body{padding-top:3em}.site_header_area{top:0;position:absolute}.site_header_area.fixed{position:absolute !important}.site_header_area .brand1,.site_header_area .brand2{display:none}.content_page.module{padding-top:0}#missions_detail .content_page.module{padding-top:2em}.header_mask{height:30px}.custom_banner_container{height:68px}.custom_banner_container img{display:none}.custom_banner_container .banner_header_overlay{display:none}a[href]:after{content:""}.definition_teaser{color:white !important}.triple_teaser .column{width:31%;float:left}.triple_teaser .column+.column{margin-left:1%}#home .homepage_site_teaser .text_col{width:58%;float:left}#home .homepage_site_teaser .img_col{display:block !important;width:40%;float:right}#home .homepage_site_teaser .img_col img{display:block;float:right}#home .site_header_area{position:relative}.module.vital_signs{overflow:hidden;height:600px !important}.homepage_carousel .master-slider{height:auto !important;min-height:1px}.homepage_carousel #vital_signs_modal{height:auto !important;position:relative !important}.homepage_carousel .ms-container{display:none !important}#vital_signs_modal .left_col{width:40%;float:left}#vital_signs_modal .right_col{width:40%;float:right}.vital_signs_menu{margin-top:3em;border:1px solid black;border-width:1px 0}#site_footer .upper_footer,#site_footer .sitemap{display:none}#site_footer .lower_footer .nav_container{display:none}.content_page .main_feature .master-slider{overflow:hidden;text-align:center}.primary_media_feature .carousel_container{display:none}.wysiwyg_content blockquote{border:none}.content_page.module{padding-top:0}#primary_column{width:60%;float:left;overflow:hidden;position:relative;display:block}#secondary_column{width:32%;float:right;position:relative;font-size:80%}.grid_view .module_title{display:block}#fancybox-lock,.fancybox-overlay{display:none}.view_selectors{display:none}.multi_teaser,.teasers_module,.multimedia_teaser,.filter_bar,.tertiary_nav_container,.secondary_nav_mobile,.carousel_teaser,.image_of_the_day{display:none}
      </style>
      <script async="" src="https://www.google-analytics.com/analytics.js">
      </script>
      <script src="/assets/javascripts/public_manifest.js" type="text/javascript">
      </script>
      <style type="text/css">
      </style>
      <style>
      </style>
      <script src="/assets/javascripts/vendor/jquery.fancybox.js" type="text/javascript">
      </script>
      <script src="/assets/javascripts/vendor/jquery.fancybox-thumbs.js" type="text/javascript">
      </script>
      <style data-href="css/styles2.css" media="all">
       @charset "UTF-8";
    .wysiwyg_content img { width: auto; }
      </style>
      <meta content="//www.jpl.nasa.gov/spaceimages/images/mediumsize/PIA17470_ip.jpg" property="og:image"/>
      <meta content="//www.jpl.nasa.gov/spaceimages/details.php?id=PIA17470" property="og:url"/>
      <meta content="Titan's Northern Lakes: Salt Flats?" property="og:title"/>
      <meta content="NASA's Cassini spacecraft reveals the differences in the composition of surface materials around hydrocarbon lakes at Titan." property="og:description"/>
      <style type="text/css">
       .fancybox-margin{margin-right:17px;}
      </style>
      <style type="text/css">
       .at-icon{fill:#fff;border:0}.at-icon-wrapper{display:inline-block;overflow:hidden}a .at-icon-wrapper{cursor:pointer}.at-rounded,.at-rounded-element .at-icon-wrapper{border-radius:12%}.at-circular,.at-circular-element .at-icon-wrapper{border-radius:50%}.addthis_32x32_style .at-icon{width:2pc;height:2pc}.addthis_24x24_style .at-icon{width:24px;height:24px}.addthis_20x20_style .at-icon{width:20px;height:20px}.addthis_16x16_style .at-icon{width:1pc;height:1pc}#at16lb{display:none;position:absolute;top:0;left:0;width:100%;height:100%;z-index:1001;background-color:#000;opacity:.001}#at_complete,#at_error,#at_share,#at_success{position:static!important}.at15dn{display:none}#at15s,#at16p,#at16p form input,#at16p label,#at16p textarea,#at_share .at_item{font-family:arial,helvetica,tahoma,verdana,sans-serif!important;font-size:9pt!important;outline-style:none;outline-width:0;line-height:1em}* html #at15s.mmborder{position:absolute!important}#at15s.mmborder{position:fixed!important;width:250px!important}#at15s{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtJREFUeNpiZGBgaGAgAjAxEAlGFVJHIUCAAQDcngCUgqGMqwAAAABJRU5ErkJggg==);float:none;line-height:1em;margin:0;overflow:visible;padding:5px;text-align:left;position:absolute}#at15s a,#at15s span{outline:0;direction:ltr;text-transform:none}#at15s .at-label{margin-left:5px}#at15s .at-icon-wrapper{width:1pc;height:1pc;vertical-align:middle}#at15s .at-icon{width:1pc;height:1pc}.at4-icon{display:inline-block;background-repeat:no-repeat;background-position:top left;margin:0;overflow:hidden;cursor:pointer}.addthis_16x16_style .at4-icon,.addthis_default_style .at4-icon,.at4-icon,.at-16x16{width:1pc;height:1pc;line-height:1pc;background-size:1pc!important}.addthis_32x32_style .at4-icon,.at-32x32{width:2pc;height:2pc;line-height:2pc;background-size:2pc!important}.addthis_24x24_style .at4-icon,.at-24x24{width:24px;height:24px;line-height:24px;background-size:24px!important}.addthis_20x20_style .at4-icon,.at-20x20{width:20px;height:20px;line-height:20px;background-size:20px!important}.at4-icon.circular,.circular .at4-icon,.circular.aticon{border-radius:50%}.at4-icon.rounded,.rounded .at4-icon{border-radius:4px}.at4-icon-left{float:left}#at15s .at4-icon{text-indent:20px;padding:0;overflow:visible;white-space:nowrap;background-size:1pc;width:1pc;height:1pc;background-position:top left;display:inline-block;line-height:1pc}.addthis_vertical_style .at4-icon,.at4-follow-container .at4-icon{margin-right:5px}html&gt;body #at15s{width:250px!important}#at15s.atm{background:none!important;padding:0!important;width:10pc!important}#at15s_inner{background:#fff;border:1px solid #fff;margin:0}#at15s_head{position:relative;background:#f2f2f2;padding:4px;cursor:default;border-bottom:1px solid #e5e5e5}.at15s_head_success{background:#cafd99!important;border-bottom:1px solid #a9d582!important}.at15s_head_success a,.at15s_head_success span{color:#000!important;text-decoration:none}#at15s_brand,#at15sptx,#at16_brand{position:absolute}#at15s_brand{top:4px;right:4px}.at15s_brandx{right:20px!important}a#at15sptx{top:4px;right:4px;text-decoration:none;color:#4c4c4c;font-weight:700}#at15sptx:hover{text-decoration:underline}#at16_brand{top:5px;right:30px;cursor:default}#at_hover{padding:4px}#at_hover .at_item,#at_share .at_item{background:#fff!important;float:left!important;color:#4c4c4c!important}#at_share .at_item .at-icon-wrapper{margin-right:5px}#at_hover .at_bold{font-weight:700;color:#000!important}#at_hover .at_item{width:7pc!important;padding:2px 3px!important;margin:1px;text-decoration:none!important}#at_hover .at_item.athov,#at_hover .at_item:focus,#at_hover .at_item:hover{margin:0!important}#at_hover .at_item.athov,#at_hover .at_item:focus,#at_hover .at_item:hover,#at_share .at_item.athov,#at_share .at_item:hover{background:#f2f2f2!important;border:1px solid #e5e5e5;color:#000!important;text-decoration:none}.ipad #at_hover .at_item:focus{background:#fff!important;border:1px solid #fff}.at15t{display:block!important;height:1pc!important;line-height:1pc!important;padding-left:20px!important;background-position:0 0;text-align:left}.addthis_button,.at15t{cursor:pointer}.addthis_toolbox a.at300b,.addthis_toolbox a.at300m{width:auto}.addthis_toolbox a{margin-bottom:5px;line-height:initial}.addthis_toolbox.addthis_vertical_style{width:200px}.addthis_button_facebook_like .fb_iframe_widget{line-height:100%}.addthis_button_facebook_like iframe.fb_iframe_widget_lift{max-width:none}.addthis_toolbox a.addthis_button_counter,.addthis_toolbox a.addthis_button_facebook_like,.addthis_toolbox a.addthis_button_facebook_send,.addthis_toolbox a.addthis_button_facebook_share,.addthis_toolbox a.addthis_button_foursquare,.addthis_toolbox a.addthis_button_google_plusone,.addthis_toolbox a.addthis_button_linkedin_counter,.addthis_toolbox a.addthis_button_pinterest_pinit,.addthis_toolbox a.addthis_button_stumbleupon_badge,.addthis_toolbox a.addthis_button_tweet{display:inline-block}.at-share-tbx-element .google_plusone_iframe_widget&gt;span&gt;div{vertical-align:top!important}.addthis_toolbox span.addthis_follow_label{display:none}.addthis_toolbox.addthis_vertical_style span.addthis_follow_label{display:block;white-space:nowrap}.addthis_toolbox.addthis_vertical_style a{display:block}.addthis_toolbox.addthis_vertical_style.addthis_32x32_style a{line-height:2pc;height:2pc}.addthis_toolbox.addthis_vertical_style .at300bs{margin-right:4px;float:left}.addthis_toolbox.addthis_20x20_style span{line-height:20px}.addthis_toolbox.addthis_32x32_style span{line-height:2pc}.addthis_toolbox.addthis_pill_combo_style .addthis_button_compact .at15t_compact,.addthis_toolbox.addthis_pill_combo_style a{float:left}.addthis_toolbox.addthis_pill_combo_style a.addthis_button_tweet{margin-top:-2px}.addthis_toolbox.addthis_pill_combo_style .addthis_button_compact .at15t_compact{margin-right:4px}.addthis_default_style .addthis_separator{margin:0 5px;display:inline}div.atclear{clear:both}.addthis_default_style .addthis_separator,.addthis_default_style .at4-icon,.addthis_default_style .at300b,.addthis_default_style .at300bo,.addthis_default_style .at300bs,.addthis_default_style .at300m{float:left}.at300b img,.at300bo img{border:0}a.at300b .at4-icon,a.at300m .at4-icon{display:block}.addthis_default_style .at300b,.addthis_default_style .at300bo,.addthis_default_style .at300m{padding:0 2px}.at300b,.at300bo,.at300bs,.at300m{cursor:pointer}.addthis_button_facebook_like.at300b:hover,.addthis_button_facebook_like.at300bs:hover,.addthis_button_facebook_send.at300b:hover,.addthis_button_facebook_send.at300bs:hover{opacity:1}.addthis_20x20_style .at15t,.addthis_20x20_style .at300bs{overflow:hidden;display:block;height:20px!important;width:20px!important;line-height:20px!important}.addthis_32x32_style .at15t,.addthis_32x32_style .at300bs{overflow:hidden;display:block;height:2pc!important;width:2pc!important;line-height:2pc!important}.at300bs{overflow:hidden;display:block;background-position:0 0;height:1pc;width:1pc;line-height:1pc!important}.addthis_default_style .at15t_compact,.addthis_default_style .at15t_expanded{margin-right:4px}#at_share .at_item{width:123px!important;padding:4px;margin-right:2px;border:1px solid #fff}#at16p{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtJREFUeNpiZGBgaGAgAjAxEAlGFVJHIUCAAQDcngCUgqGMqwAAAABJRU5ErkJggg==);z-index:10000001;position:absolute;top:50%;left:50%;width:300px;padding:10px;margin:0 auto;margin-top:-185px;margin-left:-155px;font-family:arial,helvetica,tahoma,verdana,sans-serif;font-size:9pt;color:#5e5e5e}#at_share{margin:0;padding:0}#at16pt{position:relative;background:#f2f2f2;height:13px;padding:5px 10px}#at16pt a,#at16pt h4{font-weight:700}#at16pt h4{display:inline;margin:0;padding:0;font-size:9pt;color:#4c4c4c;cursor:default}#at16pt a{position:absolute;top:5px;right:10px;color:#4c4c4c;text-decoration:none;padding:2px}#at15sptx:focus,#at16pt a:focus{outline:thin dotted}#at15s #at16pf a{top:1px}#_atssh{width:1px!important;height:1px!important;border:0!important}.atm{width:10pc!important;padding:0;margin:0;line-height:9pt;letter-spacing:normal;font-family:arial,helvetica,tahoma,verdana,sans-serif;font-size:9pt;color:#444;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtJREFUeNpiZGBgaGAgAjAxEAlGFVJHIUCAAQDcngCUgqGMqwAAAABJRU5ErkJggg==);padding:4px}.atm-f{text-align:right;border-top:1px solid #ddd;padding:5px 8px}.atm-i{background:#fff;border:1px solid #d5d6d6;padding:0;margin:0;box-shadow:1px 1px 5px rgba(0,0,0,.15)}.atm-s{margin:0!important;padding:0!important}.atm-s a:focus{border:transparent;outline:0;transition:none}#at_hover.atm-s a,.atm-s a{display:block;text-decoration:none;padding:4px 10px;color:#235dab!important;font-weight:400;font-style:normal;transition:none}#at_hover.atm-s .at_bold{color:#235dab!important}#at_hover.atm-s a:hover,.atm-s a:hover{background:#2095f0;text-decoration:none;color:#fff!important}#at_hover.atm-s .at_bold{font-weight:700}#at_hover.atm-s a:hover .at_bold{color:#fff!important}.atm-s a .at-label{vertical-align:middle;margin-left:5px;direction:ltr}.at_PinItButton{display:block;width:40px;height:20px;padding:0;margin:0;background-image:url(//s7.addthis.com/static/t00/pinit00.png);background-repeat:no-repeat}.at_PinItButton:hover{background-position:0 -20px}.addthis_toolbox .addthis_button_pinterest_pinit{position:relative}.at-share-tbx-element .fb_iframe_widget span{vertical-align:baseline!important}#at16pf{height:auto;text-align:right;padding:4px 8px}.at-privacy-info{position:absolute;left:7px;bottom:7px;cursor:pointer;text-decoration:none;font-family:helvetica,arial,sans-serif;font-size:10px;line-height:9pt;letter-spacing:.2px;color:#666}.at-privacy-info:hover{color:#000}.body .wsb-social-share .wsb-social-share-button-vert{padding-top:0;padding-bottom:0}.body .wsb-social-share.addthis_counter_style .addthis_button_tweet.wsb-social-share-button{padding-top:40px}.body .wsb-social-share.addthis_counter_style .addthis_button_google_plusone.wsb-social-share-button{padding-top:0}.body .wsb-social-share.addthis_counter_style .addthis_button_facebook_like.wsb-social-share-button{padding-top:21px}@media print{#at4-follow,#at4-share,#at4-thankyou,#at4-whatsnext,#at4m-mobile,#at15s,.at4,.at4-recommended{display:none!important}}@media screen and (max-width:400px){.at4win{width:100%}}@media screen and (max-height:700px) and (max-width:400px){.at4-thankyou-inner .at4-recommended-container{height:122px;overflow:hidden}.at4-thankyou-inner .at4-recommended .at4-recommended-item:first-child{border-bottom:1px solid #c5c5c5}}
      </style>
      <style type="text/css">
       .at-branding-logo{font-family:helvetica,arial,sans-serif;text-decoration:none;font-size:10px;display:inline-block;margin:2px 0;letter-spacing:.2px}.at-branding-logo .at-branding-icon{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRF////+GlNUkcc1QAAAB1JREFUeNpiYIQDBjQmAwMmkwEM0JnY1WIxFyDAABGeAFEudiZsAAAAAElFTkSuQmCC")}.at-branding-logo .at-branding-icon,.at-branding-logo .at-privacy-icon{display:inline-block;height:10px;width:10px;margin-left:4px;margin-right:3px;margin-bottom:-1px;background-repeat:no-repeat}.at-branding-logo .at-privacy-icon{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAKCAMAAABR24SMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABhQTFRF8fr9ot/xXcfn2/P5AKva////////AKTWodjhjAAAAAd0Uk5T////////ABpLA0YAAAA6SURBVHjaJMzBDQAwCAJAQaj7b9xifV0kUKJ9ciWxlzWEWI5gMF65KUTv0VKkjVeTerqE/x7+9BVgAEXbAWI8QDcfAAAAAElFTkSuQmCC")}.at-branding-logo span{text-decoration:none}.at-branding-logo .at-branding-addthis,.at-branding-logo .at-branding-powered-by{color:#666}.at-branding-logo .at-branding-addthis:hover{color:#333}.at-cv-with-image .at-branding-addthis,.at-cv-with-image .at-branding-addthis:hover{color:#fff}a.at-branding-logo:visited{color:initial}.at-branding-info{display:inline-block;padding:0 5px;color:#666;border:1px solid #666;border-radius:50%;font-size:10px;line-height:9pt;opacity:.7;transition:all .3s ease;text-decoration:none}.at-branding-info span{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.at-branding-info:before{content:'i';font-family:Times New Roman}.at-branding-info:hover{color:#0780df;border-color:#0780df}
      </style>
      <script async="" charset="utf-8" src="//s7.addthis.com/static/layers.4d47818520f1c51ae56e.js" type="text/javascript">
      </script>
      <style type="text/css">
       .at-share-dock.atss{top:auto;left:0;right:0;bottom:0;width:100%;max-width:100%;z-index:1000200;box-shadow:0 0 1px 1px #e2dfe2}.at-share-dock.at-share-dock-zindex-hide{z-index:-1!important}.at-share-dock.atss-top{bottom:auto;top:0}.at-share-dock a{width:auto;transition:none;color:#fff;text-decoration:none;box-sizing:content-box;-webkit-box-sizing:content-box;-moz-box-sizing:content-box}.at-share-dock a:hover{width:auto}.at-share-dock .at4-count{height:43px;padding:5px 0 0;line-height:20px;background:#fff;font-family:Helvetica neue,arial}.at-share-dock .at4-count span{width:100%}.at-share-dock .at4-count .at4-share-label{color:#848484;font-size:10px;letter-spacing:1px}.at-share-dock .at4-count .at4-counter{top:2px;position:relative;display:block;color:#222;font-size:22px}.at-share-dock.at-shfs-medium .at4-count{height:36px;line-height:1pc;padding-top:4px}.at-share-dock.at-shfs-medium .at4-count .at4-counter{font-size:18px}.at-share-dock.at-shfs-medium .at-share-btn .at-icon-wrapper,.at-share-dock.at-shfs-medium a .at-icon-wrapper{padding:6px 0}.at-share-dock.at-shfs-small .at4-count{height:26px;line-height:1;padding-top:3px}.at-share-dock.at-shfs-small .at4-count .at4-share-label{font-size:8px}.at-share-dock.at-shfs-small .at4-count .at4-counter{font-size:14px}.at-share-dock.at-shfs-small .at-share-btn .at-icon-wrapper,.at-share-dock.at-shfs-small a .at-icon-wrapper{padding:4px 0}
      </style>
      <style type="text/css">
       div.at-share-close-control.ats-dark,div.at-share-open-control-left.ats-dark,div.at-share-open-control-right.ats-dark{background:#262b30}div.at-share-close-control.ats-light,div.at-share-open-control-left.ats-light,div.at-share-open-control-right.ats-light{background:#fff}div.at-share-close-control.ats-gray,div.at-share-open-control-left.ats-gray,div.at-share-open-control-right.ats-gray{background:#f2f2f2}.atss{position:fixed;top:20%;width:3pc;z-index:100020;background:none}.at-share-close-control{position:relative;width:3pc;overflow:auto}.at-share-open-control-left{position:fixed;top:20%;z-index:100020;left:0;width:22px}.at-share-close-control .at4-arrow.at-left{float:right}.atss-left{left:0;float:left;right:auto}.atss-right{left:auto;float:right;right:0}.atss-right.at-share-close-control .at4-arrow.at-right{position:relative;right:0;overflow:auto}.atss-right.at-share-close-control .at4-arrow{float:left}.at-share-open-control-right{position:fixed;top:20%;z-index:100020;right:0;width:22px;float:right}.atss-right .at-share-close-control .at4-arrow{float:left}.atss.atss-right a{float:right}.atss.atss-right .at4-share-title{float:right;overflow:hidden}.atss .at-share-btn,.atss a{position:relative;display:block;width:3pc;margin:0;outline-offset:-1px;text-align:center;float:left;transition:width .15s ease-in-out;overflow:hidden;background:#e8e8e8;z-index:100030;cursor:pointer}.at-share-btn::-moz-focus-inner{border:0;padding:0}.atss-right .at-share-btn{float:right}.atss .at-share-btn{border:0;padding:0}.atss .at-share-btn:focus,.atss .at-share-btn:hover,.atss a:focus,.atss a:hover{width:4pc}.atss .at-share-btn .at-icon-wrapper,.atss a .at-icon-wrapper{display:block;padding:8px 0}.atss .at-share-btn:last-child,.atss a:last-child{border:none}.atss .at-share-btn span .at-icon,.atss a span .at-icon{position:relative;top:0;left:0;display:block;background-repeat:no-repeat;background-position:50% 50%;width:2pc;height:2pc;line-height:2pc;border:none;padding:0;margin:0 auto;overflow:hidden;cursor:pointer;cursor:hand}.at4-share .at-custom-sidebar-counter{font-family:Helvetica neue,arial;vertical-align:top;margin-right:4px;display:inline-block;text-align:center}.at4-share .at-custom-sidebar-count{font-size:17px;line-height:1.25em;color:#222}.at4-share .at-custom-sidebar-text{font-size:9px;line-height:1.25em;color:#888;letter-spacing:1px}.at4-share .at4-share-count-container{position:absolute;left:0;right:auto;top:auto;bottom:0;width:100%;color:#fff;background:inherit}.at4-share .at4-share-count,.at4-share .at4-share-count-container{line-height:1pc;font-size:10px}.at4-share .at4-share-count{text-indent:0;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-weight:200;width:100%;height:1pc}.at4-share .at4-share-count-anchor{padding-bottom:8px;text-decoration:none;transition:padding .15s ease-in-out .15s,width .15s ease-in-out}
      </style>
      <style type="text/css">
       #at4-drawer-outer-container{top:0;width:20pc;position:fixed}#at4-drawer-outer-container.at4-drawer-inline{position:relative}#at4-drawer-outer-container.at4-drawer-inline.at4-drawer-right{float:right;right:0;left:auto}#at4-drawer-outer-container.at4-drawer-inline.at4-drawer-left{float:left;left:0;right:auto}#at4-drawer-outer-container.at4-drawer-shown,#at4-drawer-outer-container.at4-drawer-shown *{z-index:999999}#at4-drawer-outer-container,#at4-drawer-outer-container .at4-drawer-outer,#at-drawer{height:100%;overflow-y:auto;overflow-x:hidden}.at4-drawer-push-content-right-back{position:relative;right:0}.at4-drawer-push-content-right{position:relative;left:20pc!important}.at4-drawer-push-content-left-back{position:relative;left:0}.at4-drawer-push-content-left{position:relative;right:20pc!important}#at4-drawer-outer-container.at4-drawer-right{left:auto;right:-20pc}#at4-drawer-outer-container.at4-drawer-left{right:auto;left:-20pc}#at4-drawer-outer-container.at4-drawer-shown.at4-drawer-right{left:auto;right:0}#at4-drawer-outer-container.at4-drawer-shown.at4-drawer-left{right:auto;left:0}#at-drawer{top:0;z-index:9999999;height:100%;animation-duration:.4s}#at-drawer.drawer-push.at-right{right:-20pc}#at-drawer.drawer-push.at-left{left:-20pc}#at-drawer .at-recommended-label{padding:0 0 0 20px;color:#999;line-height:3pc;font-size:18px;font-weight:300;cursor:default}#at-drawer-arrow{width:30px;height:5pc}#at-drawer-arrow.ats-dark{background:#262b30}#at-drawer-arrow.ats-gray{background:#f2f2f2}#at-drawer-open-arrow{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAABcCAYAAAC1OT8uAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk3ODNCQjdERUQ3QjExRTM5NjFGRUZBODc3MTIwMTNCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk3ODNCQjdFRUQ3QjExRTM5NjFGRUZBODc3MTIwMTNCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTc4M0JCN0JFRDdCMTFFMzk2MUZFRkE4NzcxMjAxM0IiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTc4M0JCN0NFRDdCMTFFMzk2MUZFRkE4NzcxMjAxM0IiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7kstzCAAAB4ElEQVR42uyWv0oDQRDGb9dYimgVjliID2Ca9AGfwtZob2Grja1PIFj7EhGCYK99VPBPOkVMp8X5rc6FeN7dfjOksMjAxwXZ3667OzvfLKRr682l5ZV9aDh+fxsnRHhoDzqGLjFBi4XOoFtoAxowoB893o/w7WpAl/+QgQMBwwRdTPhUC2lAV/wDA7qy5WOgq9psHejqTqkKdLE7KYCv0JZjMgBgB58raBG6mP1K6j2pT099T+qMUOeeOss1wDcEIA1PnQXy576rAUI0oFMoC7VCnn40Gs8Pd4lAiXNUKmJ0lh1mPzGEWiyUCqAGW3Pwv4IvUJsFO9CHgP3Zr6Te0xwgAf3LxaAjS241pbikCRkOg+nSJdV4p8HOPl3vvRYI5dtrgVDvvcWovcWovcWovcWovcWovcWovQChWNywNpqvdAKtQp/QNmPUIQ6kwwqt2Xmsxf6GMPM1Pptsbz45CPmXqKb+15Gz4J/LZcDSNIqBlQlbB0afe1mmUDWiCNKFZRq0VKMeXY1CTDq2sJLWsCmoaBBRqNRR6qBKC6qCaj2rDIqaXBGiXHEaom00h1S+K3fVlr6HNuqgvgCh0+owt21bybQn8+mZ78mcEebcM2e5+T2ZX24ZqCph0qn1vgQYAJ/KDpLQr2tPAAAAAElFTkSuQmCC);background-repeat:no-repeat;width:13px;height:23px;margin:28px 0 0 8px}.at-left #at-drawer-open-arrow{background-position:0 -46px}.ats-dark #at-drawer-open-arrow{background-position:0 -23px}.ats-dark.at-left #at-drawer-open-arrow{background-position:0 -69px}#at-drawer-arrow.at4-drawer-modern-browsers{position:fixed;top:40%;background-repeat:no-repeat;background-position:0 0!important;z-index:9999999}.at4-drawer-inline #at-drawer-arrow{position:absolute}#at-drawer-arrow.at4-drawer-modern-browsers.at-right{right:0}#at-drawer-arrow.at4-drawer-modern-browsers.at-left{left:0}.at4-drawer-push-animation-left{transition:left .4s ease-in-out .15s}.at4-drawer-push-animation-right{transition:right .4s ease-in-out .15s}#at-drawer.drawer-push.at4-drawer-push-animation-right{right:0}#at-drawer.drawer-push.at4-drawer-push-animation-right-back{right:-20pc!important}#at-drawer.drawer-push.at4-drawer-push-animation-left{left:0}#at-drawer.drawer-push.at4-drawer-push-animation-left-back{left:-20pc!important}#at-drawer .at4-closebutton.drawer-close{content:'X';color:#999;display:block;position:absolute;margin:0;top:0;right:0;width:3pc;height:45px;line-height:45px;overflow:hidden;opacity:.5}#at-drawer.ats-dark .at4-closebutton.drawer-close{color:#fff}#at-drawer .at4-closebutton.drawer-close:hover{opacity:1}#at-drawer.ats-dark.at4-recommended .at4-logo-container a{color:#666}#at-drawer.at4-recommended .at4-recommended-vertical{padding:0}#at-drawer.at4-recommended .at4-recommended-item .sponsored-label{margin:2px 0 0 21px;color:#ddd}#at-drawer.at4-recommended .at4-recommended-vertical .at4-recommended-item{position:relative;padding:0;width:20pc;height:180px;margin:0}#at-drawer.at4-recommended .at4-recommended-vertical .at4-recommended-item .at4-recommended-item-img a:after{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.65);z-index:1000000;transition:all .2s ease-in-out}#at-drawer.at4-recommended .at4-recommended-vertical .at4-recommended-item.at-hover .at4-recommended-item-img a:after{background:rgba(0,0,0,.8)}#at-drawer .at4-recommended-vertical .at4-recommended-item .at4-recommended-item-img,#at-drawer .at4-recommended-vertical .at4-recommended-item .at4-recommended-item-img a,#at-drawer .at4-recommended-vertical .at4-recommended-item .at4-recommended-item-img img{width:20pc;height:180px;float:none}#at-drawer .at4-recommended-vertical .at4-recommended-item .at4-recommended-item-caption{width:100%;position:absolute;bottom:0;left:0;height:70px}#at-drawer .at4-recommended-vertical .at4-recommended-item .at4-recommended-item-caption .at-h4{color:#fff;position:absolute;height:52px;top:0;left:20px;right:20px;margin:0;padding:0;line-height:25px;font-size:20px;font-weight:600;z-index:1000001;text-decoration:none;text-transform:none}#at-drawer.at4-recommended .at4-recommended-vertical .at4-recommended-item .at4-recommended-item-caption .at-h4 a:hover{text-decoration:none}#at-drawer.at4-recommended .at4-recommended-vertical .at4-recommended-item .at4-recommended-item-caption .at-h4 a:link{color:#fff}#at-drawer.at4-recommended .at4-recommended-vertical .at4-recommended-item .at4-recommended-item-caption small{position:absolute;top:auto;bottom:10px;left:20px;width:auto;color:#ccc}#at-drawer.at4-recommended .at4-logo-container{margin-left:20px}#at-drawer.ats-dark.at4-recommended .at4-logo-container a:hover{color:#fff}#at-drawer.at4-recommended .at-logo{margin:0}
      </style>
      <style type="text/css">
       .at4-follow.at-mobile{display:none!important}.at4-follow{position:fixed;top:0;right:0;font-weight:400;color:#666;cursor:default;z-index:10001}.at4-follow .at4-follow-inner{position:relative;padding:10px 24px 10px 15px}.at4-follow-inner,.at-follow-open-control{border:0 solid #c5c5c5;border-width:1px 0 1px 1px;margin-top:-1px}.at4-follow .at4-follow-container{margin-left:9pt}.at4-follow.at4-follow-24 .at4-follow-container{height:24px;line-height:23px;font-size:13px}.at4-follow.at4-follow-32 .at4-follow-container{width:15pc;height:2pc;line-height:2pc;font-size:14px}.at4-follow .at4-follow-container .at-follow-label{display:inline-block;height:24px;line-height:24px;margin-right:10px;padding:0;cursor:default;float:left}.at4-follow .at4-follow-container .at-icon-wrapper{height:24px;width:24px}.at4-follow.ats-transparent .at4-follow-inner,.at-follow-open-control.ats-transparent{border-color:transparent}.at4-follow.ats-dark .at4-follow-inner,.at-follow-open-control.ats-dark{background:#262b30;border-color:#000;color:#fff}.at4-follow.ats-dark .at-follow-close-control{background-color:#262b30}.at4-follow.ats-light .at4-follow-inner{background:#fff;border-color:#c5c5c5}.at4-follow.ats-gray .at4-follow-inner,.at-follow-open-control.ats-gray{background:#f2f2f2;border-color:#c5c5c5}.at4-follow.ats-light .at4-follow-close-control,.at-follow-open-control.ats-light{background:#e5e5e5}.at4-follow .at4-follow-inner .at4-follow-close-control{position:absolute;top:0;bottom:0;left:0;width:20px;cursor:pointer;display:none}.at4-follow .at4-follow-inner .at4-follow-close-control div{display:block;line-height:20px;text-indent:-9999em;margin-top:calc(50% + 1px);overflow:hidden}.at-follow-open-control div.at4-arrow.at-left{background-position:0 -2px}.at-follow-open-control{position:fixed;height:35px;top:0;right:0;padding-top:10px;z-index:10002}.at-follow-btn{margin:0 5px 5px 0;padding:0;outline-offset:-1px;display:inline-block;box-sizing:content-box;transition:all .2s ease-in-out}.at-follow-btn:focus,.at-follow-btn:hover{transform:translateY(-4px)}.at4-follow-24 .at-follow-btn{height:25px;line-height:0;width:25px}
      </style>
      <style type="text/css">
       .at-follow-tbx-element .at300b,.at-follow-tbx-element .at300m{display:inline-block;width:auto;padding:0;margin:0 2px 5px;outline-offset:-1px;transition:all .2s ease-in-out}.at-follow-tbx-element .at300b:focus,.at-follow-tbx-element .at300b:hover,.at-follow-tbx-element .at300m:focus,.at-follow-tbx-element .at300m:hover{transform:translateY(-4px)}.at-follow-tbx-element .addthis_vertical_style .at300b,.at-follow-tbx-element .addthis_vertical_style .at300m{display:block}.at-follow-tbx-element .addthis_vertical_style .at300b .addthis_follow_label,.at-follow-tbx-element .addthis_vertical_style .at300b .at-icon-wrapper,.at-follow-tbx-element .addthis_vertical_style .at300m .addthis_follow_label,.at-follow-tbx-element .addthis_vertical_style .at300m .at-icon-wrapper{display:inline-block;vertical-align:middle;margin-right:5px}.at-follow-tbx-element .addthis_vertical_style .at300b:focus,.at-follow-tbx-element .addthis_vertical_style .at300b:hover,.at-follow-tbx-element .addthis_vertical_style .at300m:focus,.at-follow-tbx-element .addthis_vertical_style .at300m:hover{transform:none}
      </style>
      <style type="text/css">
       .at4-jumboshare .at-share-btn{display:inline-block;margin-right:13px;margin-top:13px}.at4-jumboshare .at-share-btn .at-icon{float:left}.at4-jumboshare .at-share-btn .at300bs{display:inline-block;float:left;cursor:pointer}.at4-jumboshare .at4-mobile .at-share-btn .at-icon,.at4-jumboshare .at4-mobile .at-share-btn .at-icon-wrapper{margin:0;padding:0}.at4-jumboshare .at4-mobile .at-share-btn{padding:0}.at4-jumboshare .at4-mobile .at-share-btn .at-label{display:none}.at4-jumboshare .at4-count{font-size:60px;line-height:60px;font-family:Helvetica neue,arial;font-weight:700}.at4-jumboshare .at4-count-container{display:table-cell;text-align:center;min-width:200px;vertical-align:middle;border-right:1px solid #ccc;padding-right:20px}.at4-jumboshare .at4-share-container{display:table-cell;vertical-align:middle;padding-left:20px}.at4-jumboshare .at4-share-container.at-share-tbx-element{padding-top:0}.at4-jumboshare .at4-title{position:relative;font-size:18px;line-height:18px;bottom:2px}.at4-jumboshare .at4-spacer{height:1px;display:block;visibility:hidden;opacity:0}.at4-jumboshare .at-share-btn{display:inline-block;margin:0 2px;line-height:0;padding:0;overflow:hidden;text-decoration:none;text-transform:none;color:#fff;cursor:pointer;transition:all .2s ease-in-out;border:0;background-color:transparent}.at4-jumboshare .at-share-btn:focus,.at4-jumboshare .at-share-btn:hover{transform:translateY(-4px);color:#fff;text-decoration:none}.at4-jumboshare .at-label{font-family:helvetica neue,helvetica,arial,sans-serif;font-size:9pt;padding:0 15px 0 0;margin:0;height:2pc;line-height:2pc;background:none}.at4-jumboshare .at-share-btn:hover,.at4-jumboshare .at-share-btn:link{text-decoration:none}.at4-jumboshare .at-share-btn::-moz-focus-inner{border:0;padding:0}.at4-jumboshare.at-mobile .at-label{display:none}
      </style>
      <style type="text/css">
       .at4-recommendedbox-outer-container{display:inline}.at4-recommended-outer{position:static}.at4-recommended{top:20%;margin:0;text-align:center;font-weight:400;font-size:13px;line-height:17px;color:#666}.at4-recommended.at-inline .at4-recommended-horizontal{text-align:left}.at4-recommended-recommendedbox{padding:0;z-index:inherit}.at4-recommended-recommended{padding:40px 0}.at4-recommended-horizontal{max-height:340px}.at4-recommended.at-medium .at4-recommended-horizontal{max-height:15pc}.at4-recommended.at4-minimal.at-medium .at4-recommended-horizontal{padding-top:10px;max-height:230px}.at4-recommended-text-only .at4-recommended-horizontal{max-height:130px}.at4-recommended-horizontal{padding-top:5px;overflow-y:hidden}.at4-minimal{background:none;color:#000;border:none!important;box-shadow:none!important}@media screen and (max-width:900px){.at4-recommended-horizontal .at4-recommended-item,.at4-recommended-horizontal .at4-recommended-item .at4-recommended-item-img{width:15pc}}.at4-recommended.at4-minimal .at4-recommended-horizontal .at4-recommended-item .at4-recommended-item-caption{padding:0 0 10px}.at4-recommended.at4-minimal .at4-recommended-horizontal .at4-recommended-item-caption{padding:20px 0 0!important}.addthis-smartlayers .at4-recommended .at-h3.at-recommended-label{margin:0;padding:0;font-weight:300;font-size:18px;line-height:24px;color:#464646;width:100%;display:inline-block;zoom:1}.addthis-smartlayers .at4-recommended.at-inline .at-h3.at-recommended-label{text-align:left}#at4-thankyou .addthis-smartlayers .at4-recommended.at-inline .at-h3.at-recommended-label{text-align:center}.at4-recommended .at4-recommended-item{display:inline-block;zoom:1;position:relative;background:#fff;border:1px solid #c5c5c5;width:200px;margin:10px}.addthis_recommended_horizontal .at4-recommended-item{border:none}.at4-recommended .at4-recommended-item .sponsored-label{color:#666;font-size:9px;position:absolute;top:-20px}.at4-recommended .at4-recommended-item-img .at-tli,.at4-recommended .at4-recommended-item-img a{position:absolute;left:0}.at4-recommended.at-inline .at4-recommended-horizontal .at4-recommended-item{margin:10px 20px 0 0}.at4-recommended.at-medium .at4-recommended-horizontal .at4-recommended-item{margin:10px 10px 0 0}.at4-recommended.at-medium .at4-recommended-item{width:140px;overflow:hidden}.at4-recommended .at4-recommended-item .at4-recommended-item-img{position:relative;text-align:center;width:100%;height:200px;line-height:0;overflow:hidden}.at4-recommended .at4-recommended-item .at4-recommended-item-img a{display:block;width:100%;height:200px}.at4-recommended.at-medium .at4-recommended-item .at4-recommended-item-img,.at4-recommended.at-medium .at4-recommended-item .at4-recommended-item-img a{height:140px}.at4-recommended .at4-recommended-item .at4-recommended-item-img img{position:absolute;top:0;left:0;min-height:0;min-width:0;max-height:none;max-width:none;margin:0;padding:0}.at4-recommended .at4-recommended-item .at4-recommended-item-caption{height:74px;overflow:hidden;padding:20px;text-align:left;-ms-box-sizing:content-box;-o-box-sizing:content-box;box-sizing:content-box}.at4-recommended.at-medium .at4-recommended-item .at4-recommended-item-caption{height:50px;padding:15px}.at4-recommended .at4-recommended-item .at4-recommended-item-caption .at-h4{height:54px;margin:0 0 5px;padding:0;overflow:hidden;word-wrap:break-word;font-size:14px;font-weight:400;line-height:18px;text-align:left}.at4-recommended.at-medium .at4-recommended-item .at4-recommended-item-caption .at-h4{font-size:9pt;line-height:1pc;height:33px}.at4-recommended .at4-recommended-item:hover .at4-recommended-item-caption .at-h4{text-decoration:underline}.at4-recommended a:link,.at4-recommended a:visited{text-decoration:none;color:#464646}.at4-recommended .at4-recommended-item .at4-recommended-item-caption .at-h4 a:hover{text-decoration:underline;color:#000}.at4-recommended .at4-recommended-item .at4-recommended-item-caption small{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:11px;color:#666}.at4-recommended.at-medium .at4-recommended-item .at4-recommended-item-caption small{font-size:9px}.at4-recommended .at4-recommended-vertical{padding:15px 0 0}.at4-recommended .at4-recommended-vertical .at4-recommended-item{display:block;width:auto;max-width:100%;height:60px;border:none;margin:0 0 15px;box-shadow:none;background:none}.at4-recommended-vertical .at4-recommended-item .at4-recommended-item-img,.at4-recommended-vertical .at4-recommended-item .at4-recommended-item-img img{width:60px;height:60px;float:left}.at4-recommended-vertical .at4-recommended-item .at4-recommended-item-caption{border-top:none;margin:0;height:60px;padding:3px 5px}.at4-recommended .at4-recommended-vertical .at4-recommended-item .at4-recommended-item-caption .at-h4{height:38px;margin:0}.at4-recommended .at4-recommended-vertical .at4-recommended-item .at4-recommended-item-caption small{position:absolute;bottom:0}.at4-recommended .at-recommended-label.at-vertical{text-align:left}.at4-no-image-light-recommended,.at4-no-image-minimal-recommended{background-color:#f2f2f2!important}.at4-no-image-gray-recommended{background-color:#e6e6e5!important}.at4-no-image-dark-recommended{background-color:#4e555e!important}.at4-recommended .at4-recommended-item-placeholder-img{background-repeat:no-repeat!important;background-position:center!important;width:100%!important;height:100%!important}.at4-recommended-horizontal .at4-no-image-dark-recommended .at4-recommended-item-placeholder-img{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAfCAYAAACCox+xAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlFNUUyQTg3MTI0RDExRTM4NzAwREJDRjlCQzAyMUVFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlFNUUyQTg4MTI0RDExRTM4NzAwREJDRjlCQzAyMUVFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUU1RTJBODUxMjREMTFFMzg3MDBEQkNGOUJDMDIxRUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUU1RTJBODYxMjREMTFFMzg3MDBEQkNGOUJDMDIxRUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6oCfPiAAABfUlEQVR42uyWTU/DMAyGm3bdBxp062hHe+PC//9HCIkDYpNAO7CPAuWN5Eohyhpno2GHWqq8pO78xHHsiLquH4L/l6cwuBAZaOPKs//YBFIJIR59UiAt7huYi90aE/UQakTDLaL26RUEAAJqiefm93T9Bpj1X4O0bY0OIUXCpYBJvYDAUWyAUCWliHGTcnpqRMaM72ImRAJVknYG+eb4YEDIBeU0zGnsBLK1ODogYSsLhDwIJeVVk18lzfNA4ERGZNXi59UCIQhiYDilpSm/jp4awLxDvWhlf4/nGe8+LLuSt+SZul28ggaHG6gNVhDR+IuRFzOoxGKWwG7vVFm5AAQxgcqYpzrjFjR9zwPH5LSuT7XlNr2MQm5LzqjLpncNNaM+s8M27Y60g3FwhoSMzrtUQllgLtRs5pZ2cB4IhbvQbGRZv1NsrhyS8+SI5Mo9RJWpjAI1xqKL+0iEP180vy214JbeR12AyOgsHI7e0NfFyKv0ID1ID+IqPwIMAOeljGQOryBmAAAAAElFTkSuQmCC)!important}.at4-recommended-vertical .at4-no-image-dark-recommended .at4-recommended-item-placeholder-img{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAzREMyNTM2MTI0RjExRTM4NzAwREJDRjlCQzAyMUVFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAzREMyNTM3MTI0RjExRTM4NzAwREJDRjlCQzAyMUVFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDNEQzI1MzQxMjRGMTFFMzg3MDBEQkNGOUJDMDIxRUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDNEQzI1MzUxMjRGMTFFMzg3MDBEQkNGOUJDMDIxRUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5GfbtkAAAAxklEQVR42qRSTQvCMAxduk53mEOHKFPP/v8/5cGTiIibivVFUomlG7gFHvloXpKmJefcPhkmNyvGEWj+IOZA6ckPImoxxVwOLvCvXUzkpayNCpRQK64IbOBnAYGAXMeMslNlU+CzrIEdCkxi5DPAoz6BE8ZuVNdKJuL8rS9sv62IXlCHyP0KqKUKZXK9uwkSLVArfwpVR3b225kXwovibcP+jC4jUtfWPZmfqJJnYlkAM128j1z0nHWKSUbIKDL/msHktwADAPptQo+vkZNLAAAAAElFTkSuQmCC)!important}.at4-recommended-horizontal .at4-no-image-gray-recommended .at4-recommended-item-placeholder-img,.at4-recommended-horizontal .at4-no-image-light-recommended .at4-recommended-item-placeholder-img,.at4-recommended-horizontal .at4-no-image-minimal-recommended .at4-recommended-item-placeholder-img{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAfCAYAAACCox+xAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAzREMyNTMyMTI0RjExRTM4NzAwREJDRjlCQzAyMUVFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAzREMyNTMzMTI0RjExRTM4NzAwREJDRjlCQzAyMUVFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUU1RTJBODkxMjREMTFFMzg3MDBEQkNGOUJDMDIxRUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUU1RTJBOEExMjREMTFFMzg3MDBEQkNGOUJDMDIxRUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6dfDQvAAABg0lEQVR42uyWS0vDQBDH82jaKNW0qUltbl68e/Di98eLBz+CCB5EBaWIpUat/4UJLMuame1j7SEDYbqbKfPLvHbDi8ur8+D/5T4K9kR6xrr27D+xgdS3N9d3PilQFmcNzN6mxkbdhxrQcoGofXkFAUAINcVzrG2vsP8KmJdtg7SlxoRQouBywOReQOAosUDoklPEpEU5XDciqeB/iRAig6pIO4P8CHysBBDqg0palrR2Alkwjj5RsDUDoRqhorpq6quifRkInKiIPLf4eWIgQoLoWbq0stXXn10DmDeoR2PsL/E84N0Hk5Wypc70dMkGGhzOoeb4gpjW34K6GEFljFkGu6XTZJUCEMQBVCHs6kI60MycB47FyUmo20oPvYJCzhVnvIsR3zg5ghoRTNpyHKTBBhIJTt6pFsoZ9iLDZswcB5uBULhnho0a66eazaFDca59Hym1e4guQ4rCO4Fu/T4Sw8Gk+c3MghN6H+8CRKVg4tB6fV8XI6/SgXQgHYir/AowAMU5TskhKVUNAAAAAElFTkSuQmCC)!important}.at4-recommended-vertical .at4-no-image-gray-recommended .at4-recommended-item-placeholder-img,.at4-recommended-vertical .at4-no-image-light-recommended .at4-recommended-item-placeholder-img,.at4-recommended-vertical .at4-no-image-minimal-recommended .at4-recommended-item-placeholder-img{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAzREMyNTNBMTI0RjExRTM4NzAwREJDRjlCQzAyMUVFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAzREMyNTNCMTI0RjExRTM4NzAwREJDRjlCQzAyMUVFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDNEQzI1MzgxMjRGMTFFMzg3MDBEQkNGOUJDMDIxRUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDNEQzI1MzkxMjRGMTFFMzg3MDBEQkNGOUJDMDIxRUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz65Fr9cAAAA0ElEQVR42qRRuQrCQBDd3SSaIgYNosSrtLew8f+xsfAnYmEVRMR4YHwjExjCbsBk4DHHzptjR2+2u7VqJ3efjTNQ/EEMgbgiv46H/QNTDPnhCv/mYiLPI21EIIaaUEVgBj+oETQQypgRtidsXfNJpsACBXo28gWgUd9AjrEL0TXhiSh/XhWudlZI/kCdLPtFUGMRCni9p6kl+kAq/D5UavmzX2fNd87obsCSfztnrOR0rjvTiRImkoyAQQNRyZ2jhjenGNVBOpF1WZatyV8BBgBJ+irgS/KHdAAAAABJRU5ErkJggg==)!important}#at-drawer.ats-dark,.at4-recommended.ats-dark .at4-recommended-horizontal .at4-recommended-item-caption,.at4-recommended.ats-dark .at4-recommended-vertical .at4-recommended-item-caption{background:#262b30}#at-drawer.ats-gray,.at4-recommended.ats-gray .at4-recommended-horizontal .at4-recommended-item-caption{background:#f2f2f2}#at-drawer.ats-light,.at4-recommended.ats-light .at4-recommended-horizontal .at4-recommended-item-caption{background:#fff}.at4-recommended.ats-dark .at4-recommended-vertical .at4-recommended-item{background:none}.at4-recommended.ats-dark .at4-recommended-item .at4-recommended-item-caption a:hover,.at4-recommended.ats-dark .at4-recommended-item .at4-recommended-item-caption a:link,.at4-recommended.ats-dark .at4-recommended-item .at4-recommended-item-caption a:visited,.at4-recommended.ats-dark .at4-recommended-item .at4-recommended-item-caption small,.at4-recommended.ats-dark .at4-recommended-item-caption,.at4-recommended.ats-dark .at-logo a:hover,.at4-recommended.ats-dark .at-recommended-label.at-vertical{color:#fff}.at4-recommended-vertical-logo{padding-top:0;text-align:left}.at4-recommended-vertical-logo .at4-logo-container{line-height:10px}.at4-recommended-horizontal-logo{text-align:center}.at4-recommended.at-inline .at4-recommended-horizontal-logo{text-align:left}#at4-thankyou .at4-recommended.at-inline .at4-recommended-horizontal{text-align:center}.at4-recommended .at-logo{margin:10px 0 0;padding:0;height:25px;overflow:auto;-ms-box-sizing:content-box;-o-box-sizing:content-box;box-sizing:content-box}.at4-recommended.at-inline .at4-recommended-horizontal .at-logo{text-align:left}.at4-recommended .at4-logo-container a.at-sponsored-link{color:#666}.at4-recommended-class .at4-logo-container a:hover,.at4-recommendedbox-outer-container .at4-recommended-recommendedbox .at4-logo-container a:hover{color:#000}
      </style>
      <style type="text/css">
       .at-recommendedjumbo-outer-container{margin:0;padding:0;border:0;background:none;color:#000}.at-recommendedjumbo-footer{position:relative;width:100%;height:510px;overflow:hidden;transition:all .3s ease-in-out}.at-mobile .at-recommendedjumbo-footer{height:250px}.at-recommendedjumbo-footer #bg-link:after{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.75)}.at-recommendedjumbo-footer:hover #bg-link:after{background:rgba(0,0,0,.85)}.at-recommendedjumbo-footer *,.at-recommendedjumbo-footer :after,.at-recommendedjumbo-footer :before{box-sizing:border-box}.at-recommendedjumbo-footer:hover #at-recommendedjumbo-footer-bg{animation:atRecommendedJumboAnimatedBackground 1s ease-in-out 1;animation-fill-mode:forwards}.at-recommendedjumbo-footer #at-recommendedjumbo-top-holder{position:absolute;top:0;padding:0 40px;width:100%}.at-mobile .at-recommendedjumbo-footer #at-recommendedjumbo-top-holder{padding:0 20px}.at-recommendedjumbo-footer .at-recommendedjumbo-footer-inner{position:relative;text-align:center;font-family:helvetica,arial,sans-serif;z-index:2;width:100%}.at-recommendedjumbo-footer #at-recommendedjumbo-label-holder{margin:40px 0 0;max-height:30px}.at-mobile .at-recommendedjumbo-footer #at-recommendedjumbo-label-holder{margin:20px 0 0;max-height:20px}.at-recommendedjumbo-footer #at-recommendedjumbo-label{font-weight:300;font-size:24px;line-height:24px;color:#fff;margin:0}.at-mobile .at-recommendedjumbo-footer #at-recommendedjumbo-label{font-weight:150;font-size:14px;line-height:14px}.at-recommendedjumbo-footer #at-recommendedjumbo-title-holder{margin:20px 0 0;min-height:3pc;max-height:78pt}.at-mobile .at-recommendedjumbo-footer #at-recommendedjumbo-title-holder{margin:10px 0 0;min-height:24px;max-height:54px}.at-recommendedjumbo-footer #at-recommendedjumbo-content-title{font-size:3pc;line-height:52px;font-weight:700;margin:0}.at-mobile .at-recommendedjumbo-footer #at-recommendedjumbo-content-title{font-size:24px;line-height:27px}.at-recommendedjumbo-footer a{text-decoration:none;color:#fff}.at-recommendedjumbo-footer a:visited{color:#fff}.at-recommendedjumbo-footer small{margin:20px 0 0;display:inline-block;height:2pc;line-height:2pc;font-size:14px;color:#ccc;cursor:default}.at-mobile .at-recommendedjumbo-footer small{margin:10px 0 0;height:14px;line-height:14px;font-size:9pt}.at-recommendedjumbo-footer .at-logo-container{position:absolute;bottom:20px;margin:auto;left:0;right:0}.at-mobile .at-recommendedjumbo-footer .at-logo-container{bottom:10px}.at-recommendedjumbo-footer a.at-sponsored-link{color:#ccc}.at-recommendedjumbo-footer div #at-recommendedjumbo-logo-link{padding:2px 0 0 11px;text-decoration:none;line-height:20px;font-family:helvetica,arial,sans-serif;font-size:9px;color:#ccc}@keyframes atRecommendedJumboAnimatedBackground{0%{transform:scale(1,1)}to{transform:scale(1.1,1.1)}}
      </style>
      <style type="text/css">
       .at-resp-share-element{position:relative;padding:0;margin:0;font-size:0;line-height:0}.at-resp-share-element:after,.at-resp-share-element:before{content:" ";display:table}.at-resp-share-element.at-mobile .at4-share-count-container,.at-resp-share-element.at-mobile .at-label{display:none}.at-resp-share-element .at-share-btn{display:inline-block;*display:inline;*zoom:1;margin:0 2px 5px;padding:0;overflow:hidden;line-height:0;text-decoration:none;text-transform:none;color:#fff;cursor:pointer;transition:all .2s ease-in-out;border:0;font-family:helvetica neue,helvetica,arial,sans-serif;background-color:transparent}.at-resp-share-element .at-share-btn::-moz-focus-inner{border:0;padding:0}.at-resp-share-element .at-share-btn:focus,.at-resp-share-element .at-share-btn:hover{transform:translateY(-4px);color:#fff;text-decoration:none}.at-resp-share-element .at-share-btn .at-icon-wrapper{float:left}.at-resp-share-element .at-share-btn.at-share-btn.at-svc-compact:hover{transform:none}.at-resp-share-element .at-share-btn .at-label{font-family:helvetica neue,helvetica,arial,sans-serif;font-size:9pt;padding:0 15px 0 0;margin:0 0 0 5px;height:2pc;line-height:2pc;background:none}.at-resp-share-element .at-icon,.at-resp-share-element .at-label{cursor:pointer}.at-resp-share-element .at4-share-count-container{text-decoration:none;float:right;padding-right:15px;font-size:9pt}.at-mobile .at-resp-share-element .at-label{display:none}.at-resp-share-element.at-mobile .at-share-btn{margin-right:5px}.at-mobile .at-resp-share-element .at-share-btn{padding:5px;margin-right:5px}
      </style>
      <style type="text/css">
       .at-share-tbx-element{position:relative;margin:0;color:#fff;font-size:0}.at-share-tbx-element,.at-share-tbx-element .at-share-btn{font-family:helvetica neue,helvetica,arial,sans-serif;padding:0;line-height:0}.at-share-tbx-element .at-share-btn{cursor:pointer;margin:0 5px 5px 0;display:inline-block;overflow:hidden;border:0;text-decoration:none;text-transform:none;background-color:transparent;color:inherit;transition:all .2s ease-in-out}.at-share-tbx-element .at-share-btn:focus,.at-share-tbx-element .at-share-btn:hover{transform:translateY(-4px);outline-offset:-1px;color:inherit}.at-share-tbx-element .at-share-btn::-moz-focus-inner{border:0;padding:0}.at-share-tbx-element .at-share-btn.at-share-btn.at-svc-compact:hover{transform:none}.at-share-tbx-element .at-icon-wrapper{vertical-align:middle}.at-share-tbx-element .at4-share-count,.at-share-tbx-element .at-label{margin:0 7.5px 0 2.5px;text-decoration:none;vertical-align:middle;display:inline-block;background:none;height:0;font-size:inherit;line-height:inherit;color:inherit}.at-share-tbx-element.at-mobile .at4-share-count,.at-share-tbx-element.at-mobile .at-label{display:none}.at-share-tbx-element .at_native_button{vertical-align:middle}.at-share-tbx-element .addthis_counter.addthis_bubble_style{margin:0 2px;vertical-align:middle;display:inline-block}.at-share-tbx-element .fb_iframe_widget{display:block}.at-share-tbx-element.at-share-tbx-native .at300b{vertical-align:middle}.at-style-responsive .at-share-btn{padding:5px}.at-style-jumbo{display:table}.at-style-jumbo .at4-spacer{height:1px;display:block;visibility:hidden;opacity:0}.at-style-jumbo .at4-count-container{display:table-cell;text-align:center;min-width:200px;vertical-align:middle;border-right:1px solid #ccc;padding-right:20px}.at-style-jumbo .at4-count{font-size:60px;line-height:60px;font-weight:700}.at-style-jumbo .at4-count-title{position:relative;font-size:18px;line-height:18px;bottom:2px}.at-style-jumbo .at-share-btn-elements{display:table-cell;vertical-align:middle;padding-left:20px}.at_flat_counter{cursor:pointer;font-family:helvetica,arial,sans-serif;font-weight:700;text-transform:uppercase;display:inline-block;position:relative;vertical-align:top;height:auto;margin:0 5px;padding:0 6px;left:-1px;background:#ebebeb;color:#32363b;transition:all .2s ease}.at_flat_counter:after{top:30%;left:-4px;content:"";position:absolute;border-width:5px 8px 5px 0;border-style:solid;border-color:transparent #ebebeb transparent transparent;display:block;width:0;height:0;transform:translateY(360deg)}.at_flat_counter:hover{background:#e1e2e2}
      </style>
      <style type="text/css">
       .at4-thankyou-background{top:0;right:0;left:0;bottom:0;-webkit-overflow-scrolling:touch;z-index:9999999;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtJREFUeNpizCuu/sRABGBiIBKMKqSOQoAAAwC8KgJipENhxwAAAABJRU5ErkJggg==);background:hsla(217,6%,46%,.95)}.at4-thankyou-background.at-thankyou-shown{position:fixed}.at4-thankyou-inner{position:absolute;width:100%;top:10%;left:50%;margin-left:-50%;text-align:center}.at4-thankyou-mobile .at4-thankyou-inner{top:5%}.thankyou-description{font-weight:400}.at4-thankyou-background .at4lb-inner{position:relative;width:100%;height:100%}.at4-thankyou-background .at4lb-inner .at4x{position:absolute;top:15px;right:15px;display:block;width:20px;height:20px;padding:20px;margin:0;cursor:pointer;transition:opacity .25s ease-in;opacity:.4;background:url("data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMTEvMTMvMTKswDp5AAAAd0lEQVQ4jb2VQRLAIAgDE///Z3qqY1FAhalHMCsCIkVEAIAkkVgvp2lDBgYAnAyHkWotLccNrEd4A7X2TqIdqLfnWBAdaF5rJdyJfjtPH5GT37CaGhoVq3nOm/XflUuLUto2pY1d+vRKh0Pp+MrAVtDe2JkvYNQ+jVSEEFmOkggAAAAASUVORK5CYII=") no-repeat center center;overflow:hidden;text-indent:-99999em;border:1px solid transparent}.at4-thankyou-background .at4lb-inner .at4x:focus,.at4-thankyou-background .at4lb-inner .at4x:hover{border:1px solid #fff;border-radius:50%;outline:0}.at4-thankyou-background .at4lb-inner #at4-palogo{position:absolute;bottom:10px;display:inline-block;text-decoration:none;font-family:helvetica,arial,sans-serif;font-size:11px;cursor:pointer;-webkit-transition:opacity .25s ease-in;moz-transition:opacity .25s ease-in;transition:opacity .25s ease-in;opacity:.5;z-index:100020;color:#fff;padding:2px 0 0 13px}.at4-thankyou-background .at4lb-inner #at4-palogo .at-branding-addthis,.at4-thankyou-background .at4lb-inner #at4-palogo .at-branding-info{color:#fff}.at4-thankyou-background .at4lb-inner #at4-palogo:hover,.at4-thankyou-background.ats-dark .at4lb-inner a#at4-palogo:hover{text-decoration:none;color:#fff;opacity:1}.at4-thankyou-background.ats-dark{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtJREFUeNpiZGBgeMZABGBiIBKMKqSOQoAAAwB+cQD6hqlbCwAAAABJRU5ErkJggg==");background:rgba(0,0,0,.85)}.at4-thankyou-background .thankyou-title{color:#fff;font-size:38.5px;margin:10px 20px;line-height:38.5px;font-family:helvetica neue,helvetica,arial,sans-serif;font-weight:300}.at4-thankyou-background.ats-dark .thankyou-description,.at4-thankyou-background.ats-dark .thankyou-title{color:#fff}.at4-thankyou-background .thankyou-description{color:#fff;font-size:18px;margin:10px 0;line-height:24px;padding:0;font-family:helvetica neue,helvetica,arial,sans-serif;font-weight:300}.at4-thankyou-background .at4-thanks-icons{padding-top:10px}.at4-thankyou-mobile *{-webkit-overflow-scrolling:touch}#at4-thankyou .at4-recommended-recommendedbox .at-logo{display:none}.at4-thankyou .at-h3{height:49px;line-height:49px;margin:0 50px 0 20px;padding:1px 0 0;font-family:helvetica neue,helvetica,arial,sans-serif;font-size:1pc;font-weight:700;color:#fff;text-shadow:0 1px #000}.at4-thanks{padding-top:50px;text-align:center}.at4-thanks label{display:block;margin:0 0 15px;font-size:1pc;line-height:1pc}.at4-thanks .at4-h2{background:none;border:none;margin:0 0 10px;padding:0;font-family:helvetica neue,helvetica,arial,sans-serif;font-size:28px;font-weight:300;color:#000}.at4-thanks .at4-thanks-icons{position:relative;height:2pc}.at4-thanks .at4-thanks-icons .at-thankyou-label{display:block;padding-bottom:10px;font-size:14px;color:#666}.at4-thankyou-layer .at-follow .at-icon-wrapper{width:2pc;height:2pc}
      </style>
      <style type="text/css">
       .at4-recommended-toaster{position:fixed;top:auto;bottom:0;right:0;z-index:100021}.at4-recommended-toaster.ats-light{border:1px solid #c5c5c5;background:#fff}.at4-recommended-toaster.ats-gray{border:1px solid #c5c5c5;background:#f2f2f2}.at4-recommended-toaster.ats-dark{background:#262b30;color:#fff}.at4-recommended-toaster .at4-recommended-container{padding-top:0;margin:0}.at4-recommended.at4-recommended-toaster div.at-recommended-label{line-height:1pc;font-size:1pc;text-align:left;padding:20px 0 0 20px}.at4-toaster-outer .at4-recommended .at4-recommended-item .at4-recommended-item-caption .at-h4{font-size:11px;line-height:11px;margin:10px 0 6px;height:30px}.at4-recommended.at4-recommended-toaster div.at-recommended-label.ats-gray,.at4-recommended.at4-recommended-toaster div.at-recommended-label.ats-light{color:#464646}.at4-recommended.at4-recommended-toaster div.at-recommended-label.ats-dark{color:#fff}.at4-toaster-close-control{position:absolute;top:0;right:0;display:block;width:20px;height:20px;line-height:20px;margin:5px 5px 0 0;padding:0;text-indent:-9999em}.at4-toaster-open-control{position:fixed;right:0;bottom:0;z-index:100020}.at4-toaster-outer .at4-recommended-item{width:90pt;border:0;margin:9px 10px 0}.at4-toaster-outer .at4-recommended-item:first-child{margin-left:20px}.at4-toaster-outer .at4-recommended-item:last-child{margin-right:20px}.at4-toaster-outer .at4-recommended-item .at4-recommended-item-img{max-height:90pt;max-width:90pt}.at4-toaster-outer .at4-recommended-item .at4-recommended-item-img img{height:90pt;width:90pt}.at4-toaster-outer .at4-recommended-item .at4-recommended-item-caption{height:30px;padding:0;margin:0;height:initial}.at4-toaster-outer .ats-dark .at4-recommended-item .at4-recommended-item-caption{background:#262b30}.at4-toaster-outer .at4-recommended .at4-recommended-item .at4-recommended-item-caption small{width:auto;line-height:14px;margin:0}.at4-toaster-outer .at4-recommended.ats-dark .at4-recommended-item .at4-recommended-item-caption small{color:#fff}.at4-recommended-toaster .at-logo{margin:0 0 3px 20px;text-align:left}.at4-recommended-toaster .at-logo .at4-logo-container.at-sponsored-logo{position:relative}.at4-toaster-outer .at4-recommended-item .sponsored-label{text-align:right;font-size:10px;color:#666;float:right;position:fixed;bottom:6px;right:20px;top:initial;z-index:99999}
      </style>
      <style type="text/css">
       .at4-whatsnext{position:fixed;bottom:0!important;right:0;background:#fff;border:1px solid #c5c5c5;margin:-1px;width:390px;height:90pt;overflow:hidden;font-size:9pt;font-weight:400;color:#000;z-index:1800000000}.at4-whatsnext a{color:#666}.at4-whatsnext .at-whatsnext-content{height:90pt;position:relative}.at4-whatsnext .at-whatsnext-content .at-branding{position:absolute;bottom:15px;right:10px;padding-left:9px;text-decoration:none;line-height:10px;font-family:helvetica,arial,sans-serif;font-size:10px;color:#666}.at4-whatsnext .at-whatsnext-content .at-whatsnext-content-inner{position:absolute;top:15px;right:20px;bottom:15px;left:140px;text-align:left;height:105px}.at4-whatsnext .at-whatsnext-content-inner a{display:inline-block}.at4-whatsnext .at-whatsnext-content-inner div.at-h6{text-align:left;margin:0;padding:0 0 3px;font-size:11px;color:#666;cursor:default}.at4-whatsnext .at-whatsnext-content .at-h3{text-align:left;margin:5px 0;padding:0;line-height:1.2em;font-weight:400;font-size:14px;height:3pc}.at4-whatsnext .at-whatsnext-content-inner a:link,.at4-whatsnext .at-whatsnext-content-inner a:visited{text-decoration:none;font-weight:400;color:#464646}.at4-whatsnext .at-whatsnext-content-inner a:hover{color:#000}.at4-whatsnext .at-whatsnext-content-inner small{position:absolute;bottom:15px;line-height:10px;font-size:11px;color:#666;cursor:default;text-align:left}.at4-whatsnext .at-whatsnext-content .at-whatsnext-content-img{position:absolute;top:0;left:0;width:90pt;height:90pt;overflow:hidden}.at4-whatsnext .at-whatsnext-content .at-whatsnext-content-img img{position:absolute;top:0;left:0;max-height:none;max-width:none}.at4-whatsnext .at-whatsnext-close-control{position:absolute;top:0;right:0;display:block;width:20px;height:20px;line-height:20px;margin:0 5px 0 0;padding:0;text-indent:-9999em}.at-whatsnext-open-control{position:fixed;right:0;bottom:0;z-index:100020}.at4-whatsnext.ats-dark{background:#262b30}.at4-whatsnext.ats-dark .at-whatsnext-content .at-h3,.at4-whatsnext.ats-dark .at-whatsnext-content a.at4-logo:hover,.at4-whatsnext.ats-dark .at-whatsnext-content-inner a:link,.at4-whatsnext.ats-dark .at-whatsnext-content-inner a:visited{color:#fff}.at4-whatsnext.ats-light{background:#fff}.at4-whatsnext.ats-gray{background:#f2f2f2}.at4-whatsnext.at-whatsnext-nophoto{width:270px}.at4-whatsnext.at-whatsnext-nophoto .at-whatsnext-content-img{display:none}.at4-whatsnext.at-whatsnext-nophoto .at-whatsnext-content .at-whatsnext-content-inner{top:15px;right:0;left:20px}.at4-whatsnext.at-whatsnext-nophoto .at-whatsnext-content .at-whatsnext-content-inner.addthis_32x32_style{top:0;right:0;left:0;padding:45px 20px 0;font-size:20px}.at4-whatsnext.at-whatsnext-nophoto .at-whatsnext-content .at-whatsnext-content-inner .at4-icon,.at4-whatsnext.at-whatsnext-nophoto .at-whatsnext-content .at-whatsnext-content-inner .at4-icon-fw,.at4-whatsnext.at-whatsnext-nophoto .at-whatsnext-content .at-whatsnext-content-inner .whatsnext-msg{vertical-align:middle}.at-whatsnext-img,.at-whatsnext-img-lnk{position:absolute;left:0}
      </style>
      <style type="text/css">
       .at4-whatsnextmobile{position:fixed;bottom:0;right:0;left:0;background:#fff;z-index:9999998;height:170px;font-size:28px}.at4-whatsnextmobile .col-2{height:100%;font-size:1em}.at4-whatsnextmobile .col-2:first-child{max-width:200px;display:inline-block;float:left}.at4-whatsnextmobile .col-2:last-child{position:absolute;left:200px;right:50px;top:0;bottom:0;display:inline-block}.at4-whatsnextmobile .at-whatsnext-content-inner{font-size:1em}.at4-whatsnextmobile .at-whatsnext-content-img img{height:100%;width:100%}.at4-whatsnextmobile .at-close-control{font-size:1em;position:absolute;top:0;right:0;width:50px;height:50px}.at4-whatsnextmobile .at-close-control button{width:100%;height:100%;font-size:1em;font-weight:400;text-decoration:none;opacity:.5;padding:0;cursor:pointer;background:0 0;border:0;-webkit-appearance:none}.at4-whatsnextmobile .at-h3,.at4-whatsnextmobile .at-h6{font-size:1em;margin:0;color:#a1a1a1;margin-left:2.5%;margin-top:25px}.at4-whatsnextmobile .at-h3{font-size:1em;line-height:1em;font-weight:500;height:50%}.at4-whatsnextmobile .at-h3 a{font-size:1em;text-decoration:none}.at4-whatsnextmobile .at-h6{font-size:.8em;line-height:.8em;font-weight:500}.at4-whatsnextmobile .footer{position:absolute;bottom:2px;left:200px;right:0;padding-left:2.5%;font-size:1em;line-height:.6em}.at4-whatsnextmobile .footer small{font-size:.6em;color:#a1a1a1}.at4-whatsnextmobile .footer small:first-child{margin-right:5%;float:left}.at4-whatsnextmobile .footer small:last-child{margin-right:2.5%;float:right}.at4-whatsnextmobile .at-whatsnext-content{height:100%}.at4-whatsnextmobile.ats-dark{background:#262b30;color:#fff}.at4-whatsnextmobile .at-close-control button{color:#bfbfbf}.at4-whatsnextmobile.ats-dark a:link,.at4-whatsnextmobile.ats-dark a:visited{color:#fff}.at4-whatsnextmobile.ats-gray{background:#f2f2f2;color:#262b30}.at4-whatsnextmobile.ats-light{background:#fff;color:#262b30}.at4-whatsnextmobile.ats-dark .footer a:link,.at4-whatsnextmobile.ats-dark .footer a:visited,.at4-whatsnextmobile.ats-gray .footer a:link,.at4-whatsnextmobile.ats-gray .footer a:visited,.at4-whatsnextmobile.ats-light .footer a:link,.at4-whatsnextmobile.ats-light .footer a:visited{color:#a1a1a1}.at4-whatsnextmobile.ats-gray a:link,.at4-whatsnextmobile.ats-gray a:visited,.at4-whatsnextmobile.ats-light a:link,.at4-whatsnextmobile.ats-light a:visited{color:#262b30}@media only screen and (min-device-width:320px) and (max-device-width:480px){.at4-whatsnextmobile{height:85px;font-size:14px}.at4-whatsnextmobile .col-2:first-child{width:75pt}.at4-whatsnextmobile .col-2:last-child{right:25px;left:75pt}.at4-whatsnextmobile .footer{left:75pt}.at4-whatsnextmobile .at-close-control{width:25px;height:25px}.at4-whatsnextmobile .at-h3,.at4-whatsnextmobile .at-h6{margin-top:12.5px}}
      </style>
      <style type="text/css">
       .at-custom-mobile-bar{left:0;right:0;width:100%;height:56px;position:fixed;text-align:center;z-index:100020;background:#fff;overflow:hidden;box-shadow:0 0 10px 0 rgba(0,0,0,.2);font:initial;line-height:normal;top:auto;bottom:0}.at-custom-mobile-bar.at-custom-mobile-bar-zindex-hide{z-index:-1!important}.at-custom-mobile-bar.atss-top{top:0;bottom:auto}.at-custom-mobile-bar.atss-bottom{top:auto;bottom:0}.at-custom-mobile-bar .at-custom-mobile-bar-btns{display:inline-block;text-align:center}.at-custom-mobile-bar .at-custom-mobile-bar-counter,.at-custom-mobile-bar .at-share-btn{margin-top:4px}.at-custom-mobile-bar .at-share-btn{display:inline-block;text-decoration:none;transition:none;box-sizing:content-box}.at-custom-mobile-bar .at-custom-mobile-bar-counter{font-family:Helvetica neue,arial;vertical-align:top;margin-left:4px;margin-right:4px;display:inline-block}.at-custom-mobile-bar .at-custom-mobile-bar-count{font-size:26px;line-height:1.25em;color:#222}.at-custom-mobile-bar .at-custom-mobile-bar-text{font-size:9pt;line-height:1.25em;color:#888;letter-spacing:1px}.at-custom-mobile-bar .at-icon-wrapper{text-align:center;height:3pc;width:3pc;margin:0 4px}.at-custom-mobile-bar .at-icon{vertical-align:top;margin:8px;width:2pc;height:2pc}.at-custom-mobile-bar.at-shfs-medium{height:3pc}.at-custom-mobile-bar.at-shfs-medium .at-custom-mobile-bar-counter{margin-top:6px}.at-custom-mobile-bar.at-shfs-medium .at-custom-mobile-bar-count{font-size:18px}.at-custom-mobile-bar.at-shfs-medium .at-custom-mobile-bar-text{font-size:10px}.at-custom-mobile-bar.at-shfs-medium .at-icon-wrapper{height:40px;width:40px}.at-custom-mobile-bar.at-shfs-medium .at-icon{margin:6px;width:28px;height:28px}.at-custom-mobile-bar.at-shfs-small{height:40px}.at-custom-mobile-bar.at-shfs-small .at-custom-mobile-bar-counter{margin-top:3px}.at-custom-mobile-bar.at-shfs-small .at-custom-mobile-bar-count{font-size:1pc}.at-custom-mobile-bar.at-shfs-small .at-custom-mobile-bar-text{font-size:10px}.at-custom-mobile-bar.at-shfs-small .at-icon-wrapper{height:2pc;width:2pc}.at-custom-mobile-bar.at-shfs-small .at-icon{margin:4px;width:24px;height:24px}
      </style>
      <style type="text/css">
       .at-custom-sidebar{top:20%;width:58px;position:fixed;text-align:center;z-index:100020;background:#fff;overflow:hidden;box-shadow:0 0 10px 0 rgba(0,0,0,.2);font:initial;line-height:normal;top:auto;bottom:0}.at-custom-sidebar.at-custom-sidebar-zindex-hide{z-index:-1!important}.at-custom-sidebar.atss-left{left:0;right:auto;float:left;border-radius:0 4px 4px 0}.at-custom-sidebar.atss-right{left:auto;right:0;float:right;border-radius:4px 0 0 4px}.at-custom-sidebar .at-custom-sidebar-btns{display:inline-block;text-align:center;padding-top:4px}.at-custom-sidebar .at-custom-sidebar-counter{margin-bottom:8px}.at-custom-sidebar .at-share-btn{display:inline-block;text-decoration:none;transition:none;box-sizing:content-box}.at-custom-sidebar .at-custom-sidebar-counter{font-family:Helvetica neue,arial;vertical-align:top;margin-left:4px;margin-right:4px;display:inline-block}.at-custom-sidebar .at-custom-sidebar-count{font-size:21px;line-height:1.25em;color:#222}.at-custom-sidebar .at-custom-sidebar-text{font-size:10px;line-height:1.25em;color:#888;letter-spacing:1px}.at-custom-sidebar .at-icon-wrapper{text-align:center;margin:0 4px}.at-custom-sidebar .at-icon{vertical-align:top;margin:9px;width:2pc;height:2pc}.at-custom-sidebar .at-icon-wrapper{position:relative}.at-custom-sidebar .at4-share-count,.at-custom-sidebar .at4-share-count-container{line-height:1pc;font-size:10px}.at-custom-sidebar .at4-share-count{text-indent:0;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-weight:200;width:100%;height:1pc}.at-custom-sidebar .at4-share-count-anchor .at-icon{margin-top:3px}.at-custom-sidebar .at4-share-count-container{position:absolute;left:0;right:auto;top:auto;bottom:0;width:100%;color:#fff;background:inherit}
      </style>
      <style type="text/css">
       .at-image-sharing-mobile-icon{position:absolute;background:#000 url(//s7.addthis.com/static/44a36d35bafef33aa9455b7d3039a771.png) no-repeat top center;background-color:rgba(0,0,0,.9);background-image:url(//s7.addthis.com/static/10db525181ee0bbe1a515001be1c7818.svg),none;border-radius:3px;width:50px;height:40px;top:-9999px;left:-9999px}.at-image-sharing-tool{display:block;position:absolute;text-align:center;z-index:9001;background:none;overflow:hidden;top:-9999px;left:-9999px;font:initial;line-height:0}.at-image-sharing-tool.addthis-animated{animation-duration:.15s}.at-image-sharing-tool.at-orientation-vertical .at-share-btn{display:block}.at-image-sharing-tool.at-orientation-horizontal .at-share-btn{display:inline-block}.at-image-sharing-tool.at-image-sharing-tool-size-big .at-icon{width:43px;height:43px}.at-image-sharing-tool.at-image-sharing-tool-size-mobile .at-share-btn{margin:0!important}.at-image-sharing-tool.at-image-sharing-tool-size-mobile .at-icon-wrapper{height:60px;width:100%;border-radius:0!important}.at-image-sharing-tool.at-image-sharing-tool-size-mobile .at-icon{max-width:100%;height:54px!important;width:54px!important}.at-image-sharing-tool .at-custom-shape.at-image-sharing-tool-btns{margin-right:8px;margin-bottom:8px}.at-image-sharing-tool .at-custom-shape .at-share-btn{margin-top:8px;margin-left:8px}.at-image-sharing-tool .at-share-btn{line-height:0;text-decoration:none;transition:none;box-sizing:content-box}.at-image-sharing-tool .at-icon-wrapper{text-align:center;height:100%;width:100%}.at-image-sharing-tool .at-icon{vertical-align:top;width:2pc;height:2pc;margin:3px}
      </style>
      <style type="text/css">
       .at-expanding-share-button{box-sizing:border-box;position:fixed;z-index:9999}.at-expanding-share-button[data-position=bottom-right]{bottom:10px;right:10px}.at-expanding-share-button[data-position=bottom-right] .at-expanding-share-button-toggle-bg,.at-expanding-share-button[data-position=bottom-right] .at-expanding-share-button-toggle-btn[data-name]:after,.at-expanding-share-button[data-position=bottom-right] .at-icon-wrapper,.at-expanding-share-button[data-position=bottom-right] [data-name]:after{float:right}.at-expanding-share-button[data-position=bottom-right] [data-name]:after{margin-right:10px}.at-expanding-share-button[data-position=bottom-right] .at-expanding-share-button-toggle-btn[data-name]:after{margin-right:5px}.at-expanding-share-button[data-position=bottom-right] .at-icon-wrapper{margin-right:-3px}.at-expanding-share-button[data-position=bottom-left]{bottom:10px;left:10px}.at-expanding-share-button[data-position=bottom-left] .at-expanding-share-button-toggle-bg,.at-expanding-share-button[data-position=bottom-left] .at-expanding-share-button-toggle-btn[data-name]:after,.at-expanding-share-button[data-position=bottom-left] .at-icon-wrapper,.at-expanding-share-button[data-position=bottom-left] [data-name]:after{float:left}.at-expanding-share-button[data-position=bottom-left] [data-name]:after{margin-left:10px}.at-expanding-share-button[data-position=bottom-left] .at-expanding-share-button-toggle-btn[data-name]:after{margin-left:5px}.at-expanding-share-button *,.at-expanding-share-button :after,.at-expanding-share-button :before{box-sizing:border-box}.at-expanding-share-button .at-expanding-share-button-services-list{display:none;list-style:none;margin:0 5px;overflow:visible;padding:0}.at-expanding-share-button .at-expanding-share-button-services-list&gt;li{display:block;height:45px;position:relative;overflow:visible}.at-expanding-share-button .at-expanding-share-button-toggle-btn,.at-expanding-share-button .at-share-btn{transition:.1s;text-decoration:none}.at-expanding-share-button .at-share-btn{display:block;height:40px;padding:0 3px 0 0}.at-expanding-share-button .at-expanding-share-button-toggle-btn{position:relative;overflow:auto}.at-expanding-share-button .at-expanding-share-button-toggle-btn.at-expanding-share-button-hidden[data-name]:after{display:none}.at-expanding-share-button .at-expanding-share-button-toggle-bg{box-shadow:0 2px 4px 0 rgba(0,0,0,.3);border-radius:50%;position:relative}.at-expanding-share-button .at-expanding-share-button-toggle-bg&gt;span{background-image:url("data:image/svg+xml,%3Csvg%20width%3D%2232px%22%20height%3D%2232px%22%20viewBox%3D%220%200%2032%2032%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Eshare%3C%2Ftitle%3E%3Cg%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23FFFFFF%22%3E%3Cpath%20d%3D%22M26%2C13.4285714%20C26%2C13.6220248%2025.9293162%2C13.7894338%2025.7879464%2C13.9308036%20L20.0736607%2C19.6450893%20C19.932291%2C19.786459%2019.7648819%2C19.8571429%2019.5714286%2C19.8571429%20C19.3779752%2C19.8571429%2019.2105662%2C19.786459%2019.0691964%2C19.6450893%20C18.9278267%2C19.5037195%2018.8571429%2C19.3363105%2018.8571429%2C19.1428571%20L18.8571429%2C16.2857143%20L16.3571429%2C16.2857143%20C15.6279725%2C16.2857143%2014.9750773%2C16.3080355%2014.3984375%2C16.3526786%20C13.8217977%2C16.3973217%2013.2488868%2C16.477306%2012.6796875%2C16.5926339%20C12.1104882%2C16.7079619%2011.6157015%2C16.8660704%2011.1953125%2C17.0669643%20C10.7749235%2C17.2678581%2010.3824423%2C17.5264121%2010.0178571%2C17.8426339%20C9.65327199%2C18.1588557%209.35565592%2C18.534596%209.125%2C18.9698661%20C8.89434408%2C19.4051361%208.71391434%2C19.9203839%208.58370536%2C20.515625%20C8.45349637%2C21.1108661%208.38839286%2C21.7842224%208.38839286%2C22.5357143%20C8.38839286%2C22.9449425%208.40699386%2C23.4025272%208.44419643%2C23.9084821%20C8.44419643%2C23.9531252%208.45349693%2C24.0405499%208.47209821%2C24.1707589%20C8.4906995%2C24.3009679%208.5%2C24.3995532%208.5%2C24.4665179%20C8.5%2C24.5781256%208.46837829%2C24.6711306%208.40513393%2C24.7455357%20C8.34188956%2C24.8199408%208.25446484%2C24.8571429%208.14285714%2C24.8571429%20C8.02380893%2C24.8571429%207.9196433%2C24.7938994%207.83035714%2C24.6674107%20C7.77827355%2C24.6004461%207.72991094%2C24.5186017%207.68526786%2C24.421875%20C7.64062478%2C24.3251483%207.59040206%2C24.2135423%207.53459821%2C24.0870536%20C7.47879436%2C23.9605648%207.43973225%2C23.87128%207.41741071%2C23.8191964%20C6.47246551%2C21.6986501%206%2C20.0208395%206%2C18.7857143%20C6%2C17.3050521%206.19717065%2C16.0662252%206.59151786%2C15.0691964%20C7.79688103%2C12.0706695%2011.0520568%2C10.5714286%2016.3571429%2C10.5714286%20L18.8571429%2C10.5714286%20L18.8571429%2C7.71428571%20C18.8571429%2C7.52083237%2018.9278267%2C7.35342333%2019.0691964%2C7.21205357%20C19.2105662%2C7.07068382%2019.3779752%2C7%2019.5714286%2C7%20C19.7648819%2C7%2019.932291%2C7.07068382%2020.0736607%2C7.21205357%20L25.7879464%2C12.9263393%20C25.9293162%2C13.067709%2026%2C13.2351181%2026%2C13.4285714%20L26%2C13.4285714%20Z%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E");background-position:center center;background-repeat:no-repeat;transition:transform .4s ease;border-radius:50%;display:block}.at-expanding-share-button .at-icon-wrapper{box-shadow:0 2px 4px 0 rgba(0,0,0,.3);border-radius:50%;display:inline-block;height:40px;line-height:40px;text-align:center;width:40px}.at-expanding-share-button .at-icon{display:inline-block;height:34px;margin:3px 0;vertical-align:top;width:34px}.at-expanding-share-button [data-name]:after{box-shadow:0 2px 4px 0 rgba(0,0,0,.3);transform:translate(0, -50%);transition:.4s;background-color:#fff;border-radius:3px;color:#666;content:attr(data-name);font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:9pt;line-height:9pt;font-weight:500;opacity:0;padding:3px 5px;position:relative;top:20px;white-space:nowrap}.at-expanding-share-button.at-expanding-share-button-show-icons .at-expanding-share-button-services-list{display:block}.at-expanding-share-button.at-expanding-share-button-animate-in .at-expanding-share-button-toggle-bg&gt;span{transform:rotate(270deg);background-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cg%3E%3Cpath%20d%3D%22M18%2014V8h-4v6H8v4h6v6h4v-6h6v-4h-6z%22%20fill-rule%3D%22evenodd%22%20fill%3D%22white%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E");background-position:center center;background-repeat:no-repeat}.at-expanding-share-button.at-expanding-share-button-animate-in [data-name]:after{opacity:1}.at-expanding-share-button.at-hide-label [data-name]:after{display:none}.at-expanding-share-button.at-expanding-share-button-desktop .at-expanding-share-button-toggle{height:50px}.at-expanding-share-button.at-expanding-share-button-desktop .at-icon-wrapper:hover{box-shadow:0 2px 5px 0 rgba(0,0,0,.5)}.at-expanding-share-button.at-expanding-share-button-desktop .at-expanding-share-button-toggle-bg{height:50px;line-height:50px;width:50px}.at-expanding-share-button.at-expanding-share-button-desktop .at-expanding-share-button-toggle-bg&gt;span{height:50px;width:50px}.at-expanding-share-button.at-expanding-share-button-desktop .at-expanding-share-button-toggle-bg:after{box-shadow:0 2px 5px 0 rgba(0,0,0,.2);transition:opacity .2s ease;border-radius:50%;content:'';height:100%;opacity:0;position:absolute;top:0;left:0;width:100%}.at-expanding-share-button.at-expanding-share-button-desktop .at-expanding-share-button-toggle-bg:hover:after{opacity:1}.at-expanding-share-button.at-expanding-share-button-desktop .at-expanding-share-button-toggle-btn[data-name]:after{top:25px}.at-expanding-share-button.at-expanding-share-button-mobile .at-expanding-share-button-services-list{margin:0}.at-expanding-share-button.at-expanding-share-button-mobile .at-expanding-share-button-toggle-btn,.at-expanding-share-button.at-expanding-share-button-mobile .at-share-btn{outline:0}.at-expanding-share-button.at-expanding-share-button-mobile .at-expanding-share-button-toggle{height:40px;-webkit-tap-highlight-color:transparent}.at-expanding-share-button.at-expanding-share-button-mobile .at-expanding-share-button-toggle-bg,.at-expanding-share-button.at-expanding-share-button-mobile .at-expanding-share-button-toggle-bg span{height:40px;line-height:40px;width:40px}.at-expanding-share-button.at-expanding-share-button-mobile .at-expanding-share-button-click-flash{transform:scale(0);transition:transform ease,opacity ease-in;background-color:hsla(0,0%,100%,.3);border-radius:50%;height:40px;opacity:1;position:absolute;width:40px;z-index:10000}.at-expanding-share-button.at-expanding-share-button-mobile .at-expanding-share-button-click-flash.at-expanding-share-button-click-flash-animate{transform:scale(1);opacity:0}.at-expanding-share-button.at-expanding-share-button-mobile+.at-expanding-share-button-mobile-overlay{transition:opacity ease;bottom:0;background-color:hsla(0,0%,87%,.7);display:block;height:auto;left:0;opacity:0;position:fixed;right:0;top:0;width:auto;z-index:9998}.at-expanding-share-button.at-expanding-share-button-mobile+.at-expanding-share-button-mobile-overlay.at-expanding-share-button-hidden{height:0;width:0;z-index:-10000}.at-expanding-share-button.at-expanding-share-button-mobile.at-expanding-share-button-animate-in+.at-expanding-share-button-mobile-overlay{transition:opacity ease;opacity:1}
      </style>
      <style type="text/css">
       .at-tjin-element .at300b,.at-tjin-element .at300m{display:inline-block;width:auto;padding:0;margin:0 2px 5px;outline-offset:-1px;transition:all .2s ease-in-out}.at-tjin-element .at300b:focus,.at-tjin-element .at300b:hover,.at-tjin-element .at300m:focus,.at-tjin-element .at300m:hover{transform:translateY(-4px)}.at-tjin-element .addthis_tjin_label{display:none}.at-tjin-element .addthis_vertical_style .at300b,.at-tjin-element .addthis_vertical_style .at300m{display:block}.at-tjin-element .addthis_vertical_style .at300b .addthis_tjin_label,.at-tjin-element .addthis_vertical_style .at300b .at-icon-wrapper,.at-tjin-element .addthis_vertical_style .at300m .addthis_tjin_label,.at-tjin-element .addthis_vertical_style .at300m .at-icon-wrapper{display:inline-block;vertical-align:middle;margin-right:5px}.at-tjin-element .addthis_vertical_style .at300b:focus,.at-tjin-element .addthis_vertical_style .at300b:hover,.at-tjin-element .addthis_vertical_style .at300m:focus,.at-tjin-element .addthis_vertical_style .at300m:hover{transform:none}.at-tjin-element .at-tjin-btn{margin:0 5px 5px 0;padding:0;outline-offset:-1px;display:inline-block;box-sizing:content-box;transition:all .2s ease-in-out}.at-tjin-element .at-tjin-btn:focus,.at-tjin-element .at-tjin-btn:hover{transform:translateY(-4px)}.at-tjin-element .at-tjin-title{margin:0 0 15px}
      </style>
      <style type="text/css">
       #addthissmartlayerscssready{color:#bada55!important}.addthis-smartlayers,div#at4-follow,div#at4-share,div#at4-thankyou,div#at4-whatsnext{padding:0;margin:0}#at4-follow-label,#at4-share-label,#at4-whatsnext-label,.at4-recommended-label.hidden{padding:0;border:none;background:none;position:absolute;top:0;left:0;height:0;width:0;overflow:hidden;text-indent:-9999em}.addthis-smartlayers .at4-arrow:hover{cursor:pointer}.addthis-smartlayers .at4-arrow:after,.addthis-smartlayers .at4-arrow:before{content:none}a.at4-logo{background:url(data:image/gif;base64,R0lGODlhBwAHAJEAAP9uQf///wAAAAAAACH5BAkKAAIALAAAAAAHAAcAAAILFH6Ge8EBH2MKiQIAOw==) no-repeat left center}.at4-minimal a.at4-logo{background:url(data:image/gif;base64,R0lGODlhBwAHAJEAAP9uQf///wAAAAAAACH5BAkKAAIALAAAAAAHAAcAAAILFH6Ge8EBH2MKiQIAOw==) no-repeat left center!important}button.at4-closebutton{position:absolute;top:0;right:0;padding:0;margin-right:10px;cursor:pointer;background:transparent;border:0;-webkit-appearance:none;font-size:19px;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.2}button.at4-closebutton:hover{color:#000;text-decoration:none;cursor:pointer;opacity:.5}div.at4-arrow{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAoCAYAAABpYH0BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAV1JREFUeNrsmesOgyAMhQfxwfrofTM3E10ME2i5Oeppwr9a5OMUCrh1XV+wcvNAAIAA+BiAzrmtUWln27dbjEcC3AdODfo0BdEPhmcO4nIDvDNELi2jggk4/k8dT7skfeKzWIEd4VUpMQKvNB7X+OZSmAZkATWC1xvipbpnLmOosbJZC08CkAeA4E6qFUEMwLAGnlSBPCE8lW8CYnZTcimH2HoT7kSFOx5HBmCnDhTIu1p5s98G+QZrxGPhZVMY1vgyAQaAAAiAAAgDQACcBOD+BvJtBWfRy7NpJK5tBe4FNzXokywV734wPHMQlxvgnSGyNoUP/2ACjv/7iSeYKO3YWKzAjvCqlBiBVxqPa3ynexNJwOsN8TJbzL6JNIYYXWpMv4lIIAZgWANPqkCeEJ7KNwExu8lpLlSpAVQarO77TyKdBsyRPuwV0h0gmoGnTWFYzVkYBoAA+I/2FmAAt6+b5XM9mFkAAAAASUVORK5CYII=);background-repeat:no-repeat;width:20px;height:20px;margin:0;padding:0;overflow:hidden;text-indent:-9999em;text-align:left;cursor:pointer}#at4-recommendedpanel-outer-container .at4-arrow.at-right,div.at4-arrow.at-right{background-position:-20px 0}#at4-recommendedpanel-outer-container .at4-arrow.at-left,div.at4-arrow.at-left{background-position:0 0}div.at4-arrow.at-down{background-position:-60px 0}div.at4-arrow.at-up{background-position:-40px 0}.ats-dark div.at4-arrow.at-right{background-position:-20px -20px}.ats-dark div.at4-arrow.at-left{background-position:0 -20px}.ats-dark div.at4-arrow.at-down{background-position:-60px -20px}.ats-dark div.at4-arrow.at-up{background-position:-40px -20}.at4-opacity-hidden{opacity:0!important}.at4-opacity-visible{opacity:1!important}.at4-visually-hidden{position:absolute;clip:rect(1px,1px,1px,1px);padding:0;border:0;overflow:hidden}.at4-hidden-off-screen,.at4-hidden-off-screen *{position:absolute!important;top:-9999px!important;left:-9999px!important}.at4-show{display:block!important;opacity:1!important}.at4-show-content{opacity:1!important;visibility:visible}.at4-hide{display:none!important;opacity:0!important}.at4-hide-content{opacity:0!important;visibility:hidden}.at4-visible{display:block!important;opacity:0!important}.at-wordpress-hide{display:none!important;opacity:0!important}.addthis-animated{animation-fill-mode:both;animation-timing-function:ease-out;animation-duration:.3s}.slideInDown.addthis-animated,.slideInLeft.addthis-animated,.slideInRight.addthis-animated,.slideInUp.addthis-animated,.slideOutDown.addthis-animated,.slideOutLeft.addthis-animated,.slideOutRight.addthis-animated,.slideOutUp.addthis-animated{animation-duration:.4s}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.fadeIn{animation-name:fadeIn}@keyframes fadeInUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.fadeInUp{animation-name:fadeInUp}@keyframes fadeInDown{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}.fadeInDown{animation-name:fadeInDown}@keyframes fadeInLeft{0%{opacity:0;transform:translateX(-20px)}to{opacity:1;transform:translateX(0)}}.fadeInLeft{animation-name:fadeInLeft}@keyframes fadeInRight{0%{opacity:0;transform:translateX(20px)}to{opacity:1;transform:translateX(0)}}.fadeInRight{animation-name:fadeInRight}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.fadeOut{animation-name:fadeOut}@keyframes fadeOutUp{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-20px)}}.fadeOutUp{animation-name:fadeOutUp}@keyframes fadeOutDown{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(20px)}}.fadeOutDown{animation-name:fadeOutDown}@keyframes fadeOutLeft{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(-20px)}}.fadeOutLeft{animation-name:fadeOutLeft}@keyframes fadeOutRight{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(20px)}}.fadeOutRight{animation-name:fadeOutRight}@keyframes slideInUp{0%{transform:translateY(1500px)}0%,to{opacity:1}to{transform:translateY(0)}}.slideInUp{animation-name:slideInUp}.slideInUp.addthis-animated{animation-duration:.4s}@keyframes slideInDown{0%{transform:translateY(-850px)}0%,to{opacity:1}to{transform:translateY(0)}}.slideInDown{animation-name:slideInDown}@keyframes slideOutUp{0%{transform:translateY(0)}0%,to{opacity:1}to{transform:translateY(-250px)}}.slideOutUp{animation-name:slideOutUp}@keyframes slideOutUpFast{0%{transform:translateY(0)}0%,to{opacity:1}to{transform:translateY(-1250px)}}#at4m-menu.slideOutUp{animation-name:slideOutUpFast}@keyframes slideOutDown{0%{transform:translateY(0)}0%,to{opacity:1}to{transform:translateY(350px)}}.slideOutDown{animation-name:slideOutDown}@keyframes slideOutDownFast{0%{transform:translateY(0)}0%,to{opacity:1}to{transform:translateY(1250px)}}#at4m-menu.slideOutDown{animation-name:slideOutDownFast}@keyframes slideInLeft{0%{opacity:0;transform:translateX(-850px)}to{transform:translateX(0)}}.slideInLeft{animation-name:slideInLeft}@keyframes slideInRight{0%{opacity:0;transform:translateX(1250px)}to{transform:translateX(0)}}.slideInRight{animation-name:slideInRight}@keyframes slideOutLeft{0%{transform:translateX(0)}to{opacity:0;transform:translateX(-350px)}}.slideOutLeft{animation-name:slideOutLeft}@keyframes slideOutRight{0%{transform:translateX(0)}to{opacity:0;transform:translateX(350px)}}.slideOutRight{animation-name:slideOutRight}.at4win{margin:0 auto;background:#fff;border:1px solid #ebeced;width:25pc;box-shadow:0 0 10px rgba(0,0,0,.3);border-radius:8px;font-family:helvetica neue,helvetica,arial,sans-serif;text-align:left;z-index:9999}.at4win .at4win-header{position:relative;border-bottom:1px solid #f2f2f2;background:#fff;height:49px;-webkit-border-top-left-radius:8px;-webkit-border-top-right-radius:8px;-moz-border-radius-topleft:8px;-moz-border-radius-topright:8px;border-top-left-radius:8px;border-top-right-radius:8px;cursor:default}.at4win .at4win-header .at-h3,.at4win .at4win-header h3{height:49px;line-height:49px;margin:0 50px 0 0;padding:1px 0 0;margin-left:20px;font-family:helvetica neue,helvetica,arial,sans-serif;font-size:1pc;font-weight:700;text-shadow:0 1px #fff;color:#333}.at4win .at4win-header .at-h3 img,.at4win .at4win-header h3 img{display:inline-block;margin-right:4px}.at4win .at4win-header .at4-close{display:block;position:absolute;top:0;right:0;background:url("data:image/gif;base64,R0lGODlhFAAUAIABAAAAAP///yH5BAEAAAEALAAAAAAUABQAAAIzBIKpG+YMm5Enpodw1HlCfnkKOIqU1VXk55goVb2hi7Y0q95lfG70uurNaqLgTviyyUoFADs=") no-repeat center center;background-repeat:no-repeat;background-position:center center;border-left:1px solid #d2d2d1;width:49px;height:49px;line-height:49px;overflow:hidden;text-indent:-9999px;text-shadow:none;cursor:pointer;opacity:.5;border:0;transition:opacity .15s ease-in}.at4win .at4win-header .at4-close::-moz-focus-inner{border:0;padding:0}.at4win .at4win-header .at4-close:hover{opacity:1;background-color:#ebeced;border-top-right-radius:7px}.at4win .at4win-content{position:relative;background:#fff;min-height:220px}#at4win-footer{position:relative;background:#fff;border-top:1px solid #d2d2d1;-webkit-border-bottom-right-radius:8px;-webkit-border-bottom-left-radius:8px;-moz-border-radius-bottomright:8px;-moz-border-radius-bottomleft:8px;border-bottom-right-radius:8px;border-bottom-left-radius:8px;height:11px;line-height:11px;padding:5px 20px;font-size:11px;color:#666;-ms-box-sizing:content-box;-o-box-sizing:content-box;box-sizing:content-box}#at4win-footer a{margin-right:10px;text-decoration:none;color:#666}#at4win-footer a:hover{text-decoration:none;color:#000}#at4win-footer a.at4-logo{top:5px;padding-left:10px}#at4win-footer a.at4-privacy{position:absolute;top:5px;right:10px;padding-right:14px}.at4win.ats-dark{border-color:#555;box-shadow:none}.at4win.ats-dark .at4win-header{background:#1b1b1b;-webkit-border-top-left-radius:6px;-webkit-border-top-right-radius:6px;-moz-border-radius-topleft:6px;-moz-border-radius-topright:6px;border-top-left-radius:6px;border-top-right-radius:6px}.at4win.ats-dark .at4win-header .at4-close{background:url("data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMTEvMTMvMTKswDp5AAAAd0lEQVQ4jb2VQRLAIAgDE///Z3qqY1FAhalHMCsCIkVEAIAkkVgvp2lDBgYAnAyHkWotLccNrEd4A7X2TqIdqLfnWBAdaF5rJdyJfjtPH5GT37CaGhoVq3nOm/XflUuLUto2pY1d+vRKh0Pp+MrAVtDe2JkvYNQ+jVSEEFmOkggAAAAASUVORK5CYII=") no-repeat center center;background-image:url(//s7.addthis.com/static/fb08f6d50887bd0caacc86a62bcdcf68.svg),none;border-color:#333}.at4win.ats-dark .at4win-header .at4-close:hover{background-color:#000}.at4win.ats-dark .at4win-header .at-h3,.at4win.ats-dark .at4win-header h3{color:#fff;text-shadow:0 1px #000}.at4win.ats-gray .at4win-header{background:#fff;border-color:#d2d2d1;-webkit-border-top-left-radius:6px;-webkit-border-top-right-radius:6px;-moz-border-radius-topleft:6px;-moz-border-radius-topright:6px;border-top-left-radius:6px;border-top-right-radius:6px}.at4win.ats-gray .at4win-header a.at4-close{border-color:#d2d2d1}.at4win.ats-gray .at4win-header a.at4-close:hover{background-color:#ebeced}.at4win.ats-gray #at4win-footer{border-color:#ebeced}.at4win .clear{clear:both}.at4win ::selection{background:#fe6d4c;color:#fff}.at4win ::-moz-selection{background:#fe6d4c;color:#fff}.at4-icon-fw{display:inline-block;background-repeat:no-repeat;background-position:0 0;margin:0 5px 0 0;overflow:hidden;text-indent:-9999em;cursor:pointer;padding:0;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%}.at44-follow-container a.aticon{height:2pc;margin:0 5px 5px 0}.at44-follow-container .at4-icon-fw{margin:0}
      </style>
      <script async="" charset="utf-8" src="//s7.addthis.com/static/155.341d8bbafea741725b1c.js" type="text/javascript">
      </script>
      <script async="" charset="utf-8" src="//s7.addthis.com/static/152.ee3c08cb7372f3351376.js" type="text/javascript">
      </script>
      <style id="at4-share-offset" media="screen" type="text/css">
       #at4-share,#at4-soc {top:60% !important;bottom:auto}
      </style>
     </head>
     <body class="light_background logged_out mobile_menu" id="image_detail" style="">
      <!--[if lt IE 9]>
          <div class='browsehappy' style='font-size: 30px; color: white; position:absolute; top: 0; margin: 0; height: 3000px; width: 100%; background: #000; z-index: 10000; padding: 5%;'>
            You are using an
            <strong>outdated</strong>
            browser. Please
            <a href='http://browsehappy.com/'>click here</a>
            to upgrade or change your browser.
          </div>
        <![endif]-->
      <div id="main_container">
       <div id="site_body">
        <div class="site_header_area">
         <header class="site_header">
          <div class="brand_area">
           <div class="brand1">
            <a class="nasa_logo" href="http://www.nasa.gov" title="NASA">
             NASA
            </a>
           </div>
           <div class="brand2">
            <div class="jpl_logo">
             <a href="//www.jpl.nasa.gov/" id="jpl_logo" title="Jet Propulsion Laboratory">
              Jet Propulsion Laboratory
             </a>
            </div>
            <div class="caltech_logo">
             <a href="http://www.caltech.edu/" id="caltech_logo" target="_blank" title="California Institute of Technology">
              California Institute of Technology
             </a>
            </div>
           </div>
           <img alt="" class="print_only print_logo" src="/assets/images/logo_nasa_trio_black@2x.png"/>
          </div>
          <a class="visuallyhidden focusable" href="#main">
           Skip Navigation
          </a>
          <div class="nav_area">
           <a class="menu_button" href="javascript:void(0);" id="menu_button" title="menu button">
            <span class="menu_icon">
             menu and search
            </span>
           </a>
          </div>
         </header>
        </div>
        <div class="main_nav_overlay">
         <div class="modal_menu">
          <header class="site_header clearfix">
           <div class="brand_area">
            <div class="brand1">
             <a class="nasa_logo" href="http://www.nasa.gov" title="">
             </a>
            </div>
            <div class="brand2">
             <div class="jpl_logo">
              <a class="" href="" id="jpl_logo" title="">
               Jet Propulsion Laboratory
              </a>
             </div>
             <div class="caltech_logo">
              <a class="" href="" id="caltech_logo" title="">
               California Institute of Technology
              </a>
             </div>
            </div>
            <img alt="" class="print_only print_logo" src="/assets/images/logo_nasa_trio_black@2x.png"/>
           </div>
           <a class="modal_close" id="modal_close" title="close menu">
            close menu
           </a>
           <div class="nav_area">
            <a class="menu_button modal_close" href="javascript:void(0);" id="menu_button" title="menu icon">
             <span class="menu_icon">
              menu
             </span>
            </a>
           </div>
          </header>
          <section class="navigation_area">
           <div class="grid_layout">
            <div class="directory">
             <form action="/search.php" class="overlay_search top_search">
              <input class="search_field" name="q" onblur="this.placeholder = 'search'" onfocus="this.placeholder = ''" placeholder="search" type="text" value=""/>
              <input class="search_submit" type="submit" value=""/>
             </form>
             <div class="nav_item">
              <div class="arrow_box">
               <span class="arrow_down">
               </span>
              </div>
              <h3 class="nav_title">
               <a href="/about">
                about JPL
               </a>
              </h3>
              <ul class="subnav">
               <li>
                <a href="/about">
                 about JPL
                </a>
               </li>
               <li>
                <a href="/about/exec.php">
                 executive council
                </a>
               </li>
               <li>
                <a href="/about/history.php">
                 history
                </a>
               </li>
               <li>
                <a href="/about/reports.php">
                 annual reports
                </a>
               </li>
               <li>
                <a href="/contact_JPL.php">
                 contact us
                </a>
               </li>
               <li>
                <a href="/opportunities/">
                 opportunities
                </a>
               </li>
              </ul>
             </div>
             <div class="gradient_line">
             </div>
             <div class="nav_item">
              <div class="arrow_box">
               <span class="arrow_down">
               </span>
              </div>
              <h3 class="nav_title">
               <a href="/events">
                public events
               </a>
              </h3>
              <ul class="subnav">
               <li>
                <a href="/events">
                 overview
                </a>
               </li>
               <li>
                <a href="/events/tours/views">
                 tours
                </a>
               </li>
               <li>
                <a href="/events/lectures.php">
                 lecture series
                </a>
               </li>
               <li>
                <a href="/events/speakers-bureau.php">
                 speakers bureau
                </a>
               </li>
               <li>
                <a href="/events/team-competitions.php">
                 team competitions
                </a>
               </li>
               <li>
                <a href="/events/special-events.php">
                 special events
                </a>
               </li>
              </ul>
             </div>
             <div class="gradient_line">
             </div>
             <div class="nav_item">
              <div class="arrow_box">
               <span class="arrow_down">
               </span>
              </div>
              <h3 class="nav_title">
               <a href="/edu/">
                education
               </a>
              </h3>
              <ul class="subnav">
               <li>
                <a href="/edu/intern/">
                 Intern
                </a>
               </li>
               <li>
                <a href="/edu/learn/">
                 Learn
                </a>
               </li>
               <li>
                <a href="/edu/teach/">
                 Teach
                </a>
               </li>
               <li>
                <a href="/edu/news/">
                 News
                </a>
               </li>
               <li>
                <a href="/edu/events/">
                 Events
                </a>
               </li>
              </ul>
             </div>
             <div class="gradient_line">
             </div>
             <div class="nav_item">
              <div class="arrow_box">
               <span class="arrow_down">
               </span>
              </div>
              <h3 class="nav_title">
               <a href="/news">
                news
               </a>
              </h3>
              <ul class="subnav">
               <li>
                <a href="/news">
                 latest news
                </a>
               </li>
               <li>
                <a href="/news/presskits.php">
                 press kits
                </a>
               </li>
               <li>
                <a href="/news/factsheets.php">
                 fact sheets
                </a>
               </li>
               <li>
                <a href="/news/mediainformation.php">
                 media information
                </a>
               </li>
               <li>
                <a href="http://blogs.jpl.nasa.gov">
                 blog
                </a>
               </li>
              </ul>
             </div>
             <div class="gradient_line">
             </div>
             <div class="nav_item">
              <div class="arrow_box">
               <span class="arrow_down">
               </span>
              </div>
              <h3 class="nav_title">
               <a href="/missions/">
                missions
               </a>
              </h3>
              <ul class="subnav">
               <li>
                <a href="/missions/?type=current">
                 current
                </a>
               </li>
               <li>
                <a href="/missions/?type=past">
                 past
                </a>
               </li>
               <li>
                <a href="/missions/?type=future">
                 future
                </a>
               </li>
               <li>
                <a href="/missions/?type=proposed">
                 proposed
                </a>
               </li>
               <li>
                <a href="/missions">
                 all
                </a>
               </li>
              </ul>
             </div>
             <div class="gradient_line">
             </div>
             <div class="nav_item">
              <div class="arrow_box">
               <span class="arrow_down">
               </span>
              </div>
              <h3 class="nav_title">
               <a href="/spaceimages">
                galleries
               </a>
              </h3>
              <ul class="subnav">
               <li>
                <a href="/spaceimages">
                 images
                </a>
               </li>
               <li>
                <a href="/videos">
                 videos
                </a>
               </li>
               <li>
                <a href="/infographics">
                 infographics
                </a>
               </li>
               <li>
                <a href="/multimedia/audio.php">
                 audio
                </a>
               </li>
               <li>
                <a href="/apps/">
                 apps
                </a>
               </li>
              </ul>
             </div>
             <div class="gradient_line">
             </div>
             <div class="nav_item centered">
              <h3 class="nav_title">
               <a href="/social">
                Follow JPL
               </a>
              </h3>
              <div class="social_icons">
               <!-- AddThis Button BEGIN -->
               <div class="addthis_toolbox addthis_default_style addthis_32x32_style">
                <a addthis:userid="NASAJPL" class="addthis_button_facebook_follow icon at300b" href="http://www.facebook.com/NASAJPL" target="_blank" title="Follow on Facebook">
                 <span class="at-icon-wrapper" style="background-color: rgb(59, 89, 152); line-height: 32px; height: 32px; width: 32px;">
                  <svg alt="Facebook" aria-labelledby="at-svg-facebook-1" class="at-icon at-icon-facebook" role="img" style="width: 32px; height: 32px;" title="Facebook" version="1.1" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                   <title id="at-svg-facebook-1" xmlns="http://www.w3.org/1999/xhtml">
                    Facebook
                   </title>
                   <g>
                    <path d="M22 5.16c-.406-.054-1.806-.16-3.43-.16-3.4 0-5.733 1.825-5.733 5.17v2.882H9v3.913h3.837V27h4.604V16.965h3.823l.587-3.913h-4.41v-2.5c0-1.123.347-1.903 2.198-1.903H22V5.16z" fill-rule="evenodd">
                    </path>
                   </g>
                  </svg>
                 </span>
                 <span class="addthis_follow_label">
                  Facebook
                 </span>
                </a>
                <a addthis:userid="NASAJPL" class="addthis_button_twitter_follow icon at300b" href="//twitter.com/NASAJPL" target="_blank" title="Follow on Twitter">
                 <span class="at-icon-wrapper" style="background-color: rgb(29, 161, 242); line-height: 32px; height: 32px; width: 32px;">
                  <svg alt="Twitter" aria-labelledby="at-svg-twitter-2" class="at-icon at-icon-twitter" role="img" style="width: 32px; height: 32px;" title="Twitter" version="1.1" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                   <title id="at-svg-twitter-2" xmlns="http://www.w3.org/1999/xhtml">
                    Twitter
                   </title>
                   <g>
                    <path d="M27.996 10.116c-.81.36-1.68.602-2.592.71a4.526 4.526 0 0 0 1.984-2.496 9.037 9.037 0 0 1-2.866 1.095 4.513 4.513 0 0 0-7.69 4.116 12.81 12.81 0 0 1-9.3-4.715 4.49 4.49 0 0 0-.612 2.27 4.51 4.51 0 0 0 2.008 3.755 4.495 4.495 0 0 1-2.044-.564v.057a4.515 4.515 0 0 0 3.62 4.425 4.52 4.52 0 0 1-2.04.077 4.517 4.517 0 0 0 4.217 3.134 9.055 9.055 0 0 1-5.604 1.93A9.18 9.18 0 0 1 6 23.85a12.773 12.773 0 0 0 6.918 2.027c8.3 0 12.84-6.876 12.84-12.84 0-.195-.005-.39-.014-.583a9.172 9.172 0 0 0 2.252-2.336" fill-rule="evenodd">
                    </path>
                   </g>
                  </svg>
                 </span>
                 <span class="addthis_follow_label">
                  Twitter
                 </span>
                </a>
                <a addthis:userid="JPLnews" class="addthis_button_youtube_follow icon at300b" href="http://www.youtube.com/user/JPLnews?sub_confirmation=1" target="_blank" title="Follow on YouTube">
                 <span class="at-icon-wrapper" style="background-color: rgb(205, 32, 31); line-height: 32px; height: 32px; width: 32px;">
                  <svg alt="YouTube" aria-labelledby="at-svg-youtube-3" class="at-icon at-icon-youtube" role="img" style="width: 32px; height: 32px;" title="YouTube" version="1.1" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                   <title id="at-svg-youtube-3" xmlns="http://www.w3.org/1999/xhtml">
                    YouTube
                   </title>
                   <g>
                    <path d="M13.73 18.974V12.57l5.945 3.212-5.944 3.192zm12.18-9.778c-.837-.908-1.775-.912-2.205-.965C20.625 8 16.007 8 16.007 8c-.01 0-4.628 0-7.708.23-.43.054-1.368.058-2.205.966-.66.692-.875 2.263-.875 2.263S5 13.303 5 15.15v1.728c0 1.845.22 3.69.22 3.69s.215 1.57.875 2.262c.837.908 1.936.88 2.426.975 1.76.175 7.482.23 7.482.15 0 .08 4.624.072 7.703-.16.43-.052 1.368-.057 2.205-.965.66-.69.875-2.262.875-2.262s.22-1.845.22-3.69v-1.73c0-1.844-.22-3.69-.22-3.69s-.215-1.57-.875-2.262z" fill-rule="evenodd">
                    </path>
                   </g>
                  </svg>
                 </span>
                 <span class="addthis_follow_label">
                  YouTube
                 </span>
                </a>
                <a addthis:userid="nasajpl" class="addthis_button_instagram_follow icon at300b" href="http://instagram.com/nasajpl" target="_blank" title="Follow on Instagram">
                 <span class="at-icon-wrapper" style="background-color: rgb(224, 53, 102); line-height: 32px; height: 32px; width: 32px;">
                  <svg alt="Instagram" aria-labelledby="at-svg-instagram-4" class="at-icon at-icon-instagram" role="img" style="width: 32px; height: 32px;" title="Instagram" version="1.1" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                   <title id="at-svg-instagram-4" xmlns="http://www.w3.org/1999/xhtml">
                    Instagram
                   </title>
                   <g>
                    <path d="M16 5c-2.987 0-3.362.013-4.535.066-1.17.054-1.97.24-2.67.512a5.392 5.392 0 0 0-1.95 1.268 5.392 5.392 0 0 0-1.267 1.95c-.272.698-.458 1.498-.512 2.67C5.013 12.637 5 13.012 5 16s.013 3.362.066 4.535c.054 1.17.24 1.97.512 2.67.28.724.657 1.337 1.268 1.95a5.392 5.392 0 0 0 1.95 1.268c.698.27 1.498.457 2.67.51 1.172.054 1.547.067 4.534.067s3.362-.013 4.535-.066c1.17-.054 1.97-.24 2.67-.51a5.392 5.392 0 0 0 1.95-1.27 5.392 5.392 0 0 0 1.268-1.95c.27-.698.457-1.498.51-2.67.054-1.172.067-1.547.067-4.534s-.013-3.362-.066-4.535c-.054-1.17-.24-1.97-.51-2.67a5.392 5.392 0 0 0-1.27-1.95 5.392 5.392 0 0 0-1.95-1.267c-.698-.272-1.498-.458-2.67-.512C19.363 5.013 18.988 5 16 5zm0 1.982c2.937 0 3.285.01 4.445.064 1.072.05 1.655.228 2.042.38.514.198.88.437 1.265.822.385.385.624.75.823 1.265.15.387.33.97.38 2.042.052 1.16.063 1.508.063 4.445 0 2.937-.01 3.285-.064 4.445-.05 1.072-.228 1.655-.38 2.042-.198.514-.437.88-.822 1.265-.385.385-.75.624-1.265.823-.387.15-.97.33-2.042.38-1.16.052-1.508.063-4.445.063-2.937 0-3.285-.01-4.445-.064-1.072-.05-1.655-.228-2.042-.38-.514-.198-.88-.437-1.265-.822a3.408 3.408 0 0 1-.823-1.265c-.15-.387-.33-.97-.38-2.042-.052-1.16-.063-1.508-.063-4.445 0-2.937.01-3.285.064-4.445.05-1.072.228-1.655.38-2.042.198-.514.437-.88.822-1.265.385-.385.75-.624 1.265-.823.387-.15.97-.33 2.042-.38 1.16-.052 1.508-.063 4.445-.063zm0 12.685a3.667 3.667 0 1 1 0-7.334 3.667 3.667 0 0 1 0 7.334zm0-9.316a5.65 5.65 0 1 0 0 11.3 5.65 5.65 0 0 0 0-11.3zm7.192-.222a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0" fill-rule="evenodd">
                    </path>
                   </g>
                  </svg>
                 </span>
                 <span class="addthis_follow_label">
                  Instagram
                 </span>
                </a>
                <a class="icon all_icon" href="/social">
                 <span>
                  All
                 </span>
                </a>
                <div class="atclear">
                </div>
               </div>
              </div>
             </div>
             <form action="/search.php" class="overlay_search">
              <input class="search_field" name="q" onblur="this.placeholder = 'search'" onfocus="this.placeholder = ''" placeholder="search" type="text" value=""/>
              <input class="search_submit" type="submit" value=""/>
             </form>
            </div>
           </div>
          </section>
         </div>
        </div>
        <a name="main">
        </a>
        <div id="page">
         <!-- END HEADER: "DEFAULT" -->
         <!-- START CONTENT -->
         <script>
          addthis_loader.init("//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5429eeee4e460927", {floater: true})
         </script>
         <div class="header_mask">
         </div>
         <div class="article_nav">
          <a class="article_nav_block prev" href="?id=PIA17471">
           <div class="link_box">
            <img alt="previous article arrow" src="/assets/images/arrow_left_lighttheme.png"/>
           </div>
           <div class="article_details" id="prev_details">
            <div class="img">
             <img alt="Ultracold hydrocarbon lakes and seas (dark shapes) near the north pole of Saturn's moon Titan can be seen embedded in some kind of bright surface material in this infrared mosaic from NASA's Cassini mission." src="/spaceimages/images/wallpaper/PIA17471-640x350.jpg" title="Ultracold hydrocarbon lakes and seas (dark shapes) near the north pole of Saturn's moon Titan can be seen embedded in some kind of bright surface material in this infrared mosaic from NASA's Cassini mission."/>
            </div>
            <div class="title">
             Dark Lakes on a Bright Landscape
            </div>
           </div>
          </a>
          <a class="article_nav_block next" href="?id=PIA17367">
           <div class="link_box">
            <img alt="next article arrow" src="/assets/images/arrow_right_lighttheme.png"/>
           </div>
           <div class="article_details" id="next_details">
            <div class="img">
             <img alt="NASA's Mars Exploration Rover Opportunity captured this 3-D view after beginning to ascend the northwestern slope of 'Solander Point' on the western rim of Endeavour Crater." src="/spaceimages/images/wallpaper/PIA17367-640x350.jpg" title="NASA's Mars Exploration Rover Opportunity captured this 3-D view after beginning to ascend the northwestern slope of 'Solander Point' on the western rim of Endeavour Crater."/>
            </div>
            <div class="title">
             Mars Hill-Climbing Opportunity at 'Solander Point,' in Stereo
            </div>
           </div>
          </a>
         </div>
         <section class="content_page module">
          <div class="grid_layout">
           <article>
            <header id="page_header">
             <h2 class="category_title">
              <a href="./">
               Images
              </a>
              <span class="release_date">
               | October 23, 2013
              </span>
             </h2>
             <h1 class="article_title">
              Titan's Northern Lakes: Salt Flats?
             </h1>
            </header>
            <figure class="lede">
             <a href="/spaceimages/images/largesize/PIA17470_hires.jpg">
              <img alt="NASA's Cassini spacecraft reveals the differences in the composition of surface materials around hydrocarbon lakes at Titan." class="main_image" src="/spaceimages/images/largesize/PIA17470_hires.jpg" title="NASA's Cassini spacecraft reveals the differences in the composition of surface materials around hydrocarbon lakes at Titan."/>
             </a>
            </figure>
            <div class="clearfix" id="primary_column">
             <div class="wysiwyg_content">
              <p>
              </p>
              <center>
               <a href="//photojournal.jpl.nasa.gov/figures/PIA17470_fig1.jpg" target="new">
                <img alt="Click here for larger version of PIA17470" src="//photojournal.jpl.nasa.gov/figures/PIA17470_fig1_thumb.jpg"/>
               </a>
               <br/>
               Figure 1
               <br/>
               <font size="-1">
                <b>
                 Click on the image for larger version
                </b>
               </font>
              </center>
              <p>
              </p>
              <p>
               This false-color mosaic, made from infrared data collected by NASA's Cassini spacecraft, reveals the differences in the composition of surface materials around hydrocarbon lakes at Titan, Saturn's largest moon. Titan is the only other place in the solar system that we know has stable liquid on its surface, though its lakes are made of liquid ethane and methane rather than liquid water. While there is one large lake and a few smaller ones near Titan's south pole, almost all of Titan's lakes appear near the moon's north pole.
              </p>
              <p>
               Scientists mapped near-infrared colors onto the visible color spectrum. Red in this image was assigned a wavelength of 5 microns (10 times longer than visible light), green 2.0 microns (four times longer than visible light), and blue 1.3 microns (2.6 times longer than visible light).
              </p>
              <p>
               The orange areas are thought to be evaporite -- the Titan equivalent of salt flats on Earth. The evaporated material is thought to be organic chemicals originally from Titan's haze particles that once dissolved in liquid methane. They appear orange in this image against the greenish backdrop of Titan's typical bedrock of water ice.
              </p>
              <p>
               In this mosaic, Kraken Mare, which is Titan's largest sea and covers about the same area as Earth's Caspian Sea and Lake Superior combined, can be seen spreading out with many tendrils on the upper right,. The big dark zone up and left of Kraken is Ligeia Mare, the second largest sea. Below Ligeia, shaped similar to a sports fan's foam finger that points just up from left, is Punga Mare, the third largest Titan Sea. Numerous other smaller lakes dot the area. Titan's north pole is located in the geographic location just above the end of the "finger" of Punga Mare.
              </p>
              <p>
               Figure 1 highlights a high-resolution strip and shows the north pole marked with a red cross. Other smaller lakes are also labeled.
              </p>
              <p>
               The data shown here were obtained by Cassini's visual and infrared mapping spectrometer during a close flyby of Titan on Sept. 12, 2013.
              </p>
              <p>
               Until now, the spectrometer has only been able to capture distant, oblique or partial views of this area. The Sept. 12, 2013, flyby provided better viewing geometry. And sunlight has begun to pierce the winter darkness that shrouded Titan's north pole at the time of Cassini's arrival in the Saturn system nine years ago. A thick cap of haze that once hung over the north pole has also dissipated as northern summer approaches. And, thankfully, Titan's beautiful, almost cloudless, rain-free weather continued during this flyby.
              </p>
              <p>
               The resolution varies across this composite view depending on when each cube of data was acquired, but the best surface sampling is 2 miles (3 kilometers) per pixel.
              </p>
              <p>
               Views of this area by other Cassini instruments include
               <a href="//photojournal.jpl.nasa.gov/catalog/PIA17471">
                PIA17471
               </a>
               ,
               <a href="//photojournal.jpl.nasa.gov/catalog/PIA17472">
                PIA17472
               </a>
               ,
               <a href="//photojournal.jpl.nasa.gov/catalog/PIA17473">
                PIA17473
               </a>
               and
               <a href="//photojournal.jpl.nasa.gov/catalog/PIA14584">
                PIA14584
               </a>
               from the imaging science subsystem; and
               <a href="//photojournal.jpl.nasa.gov/catalog/PIA10008">
                PIA10008
               </a>
               and
               <a href="//photojournal.jpl.nasa.gov/catalog/PIA17031">
                PIA17031
               </a>
               from the radar mapper. An earlier VIMS view can be seen at
               <a href="//photojournal.jpl.nasa.gov/catalog/PIA16845">
                PIA16845
               </a>
               .
              </p>
              <p>
               The Cassini-Huygens mission is a cooperative project of NASA, the European Space Agency and the Italian Space Agency. The Jet Propulsion Laboratory, a division of the California Institute of Technology in Pasadena, manages the mission for NASA's Science Mission Directorate, Washington, D.C. The Cassini orbiter and the visual and infrared mapping spectrometer were designed, developed and assembled at JPL. VIMS operations are based at the University of Arizona, Tucson.
              </p>
              <p>
               For more information about the Cassini-Huygens mission visit
               <a href="http://www.nasa.gov/cassini" target="new">
                http://www.nasa.gov/cassini
               </a>
               and
               <a href="http://saturn.jpl.nasa.gov" target="new">
                http://saturn.jpl.nasa.gov
               </a>
               .
              </p>
             </div>
             <a href="index.php?category=">
              View all Images
             </a>
            </div>
            <div id="secondary_column">
             <aside class="image_detail_module">
              <h1 class="sidebar_title">
               Image Details
              </h1>
              <ul>
               <li>
                <div class="mission">
                 <p>
                  Mission:
                  <a href="index.php?search=Cassini-Huygens">
                   Cassini-Huygens
                  </a>
                 </p>
                </div>
               </li>
               <li>
                <div class="mission">
                 <p>
                  Target:
                  <a href="index.php?search=Titan">
                   Titan
                  </a>
                 </p>
                </div>
               </li>
               <li>
                <div class="mission">
                 <p>
                  Spacecraft:
                  <a href="index.php?search=Cassini+Orbiter">
                   Cassini Orbiter
                  </a>
                 </p>
                </div>
               </li>
               <li>
                <div class="mission">
                 <p>
                  Instrument:
                  <a href="index.php?search=Visual+and+Infrared+Mapping+Spectrometer">
                   Visual and Infrared Mapping Spectrometer
                  </a>
                 </p>
                </div>
               </li>
               <li>
                <div class="views">
                 <p>
                  Views: 12,979
                 </p>
                </div>
               </li>
               <li>
                <div class="download_tiff">
                 <p>
                  Full-Res TIFF:
                  <a href="//photojournal.jpl.nasa.gov/tiff/PIA17470.tif">
                   PIA17470.tif
                  </a>
                 </p>
                </div>
               </li>
               <li>
                <div class="download_tiff">
                 <p>
                  Full-Res JPG:
                  <a href="//photojournal.jpl.nasa.gov/jpeg/PIA17470.jpg">
                   PIA17470.jpg
                  </a>
                 </p>
                </div>
               </li>
               <li>
                <div class="credit">
                 <p>
                  Image credit: NASA/JPL-Caltech/University of Arizona/University of Idaho
                 </p>
                </div>
               </li>
              </ul>
             </aside>
             <aside class="image_detail_module">
              <h1 class="sidebar_title">
               Wallpaper
              </h1>
              Applying Wallpaper:
              <br/>
              1. Click on the screen resolution you would like to use.
              <br/>
              2. Right-click on the image (control-click on a Mac) and select the option 'Set the Background' or 'Set as Wallpaper' (or similar).
              <br/>
              <br/>
              <ul>
               <li>
                Fullscreen download sizes:
               </li>
               <li>
                <a href="images/wallpaper/PIA17470-800x600.jpg" target="_blank">
                 800 x 600
                </a>
               </li>
               <li>
                <a href="images/wallpaper/PIA17470-1024x768.jpg" target="_blank">
                 1024 x 768
                </a>
               </li>
               <li>
                <a href="images/wallpaper/PIA17470-1280x1024.jpg" target="_blank">
                 1280 x 1024
                </a>
               </li>
               <li>
                <a href="images/wallpaper/PIA17470-1600x1200.jpg" target="_blank">
                 1600 x 1200
                </a>
               </li>
               <li>
                <br/>
                Widescreen download sizes:
               </li>
               <li>
                <a href="images/wallpaper/PIA17470-1280x800.jpg" target="_blank">
                 1280 x 800
                </a>
               </li>
               <li>
                <a href="images/wallpaper/PIA17470-1440x900.jpg" target="_blank">
                 1440 x 900
                </a>
               </li>
               <li>
                <a href="images/wallpaper/PIA17470-1920x1200.jpg" target="_blank">
                 1920 x 1200
                </a>
                <br/>
               </li>
              </ul>
             </aside>
            </div>
           </article>
          </div>
         </section>
         <section class="multi_teaser module">
          <div class="grid_layout">
           <header>
            <h1 class="module_title">
             You Might Also Like
            </h1>
           </header>
           <ul class="module_gallery gallery_list">
            <li class="slide">
             <a href="/spaceimages/details.php?id=PIA18320">
              <div class="image_and_description_container">
               <div class="rollover_description">
                Saturn's rings cast dark bands across cloud tops in the northern hemisphere. Near the pole, an elongated shadow can be seen from Saturn's moon Tethys. Icy moons Dione (front right) and Enceladus (back right) are also seen by NASA's Cassini spacecraft.
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <img alt="Saturn's rings cast dark bands across cloud tops in the northern hemisphere. Near the pole, an elongated shadow can be seen from Saturn's moon Tethys. Icy moons Dione (front right) and Enceladus (back right) are also seen by NASA's Cassini spacecraft." src="/spaceimages/images/wallpaper/PIA18320-640x350.jpg" title="Saturn's rings cast dark bands across cloud tops in the northern hemisphere. Near the pole, an elongated shadow can be seen from Saturn's moon Tethys. Icy moons Dione (front right) and Enceladus (back right) are also seen by NASA's Cassini spacecraft."/>
              </div>
              <div class="content_title">
               A Stage for Shadows
              </div>
             </a>
            </li>
            <li class="slide">
             <a href="/spaceimages/details.php?id=PIA18323">
              <div class="image_and_description_container">
               <div class="rollover_description">
                On March 13, 2006 Cassini's narrow-angle camera captured this look at Saturn and its rings, seen here nearly edge on. The frame also features Mimas and tiny Janus (above the rings), and Tethys (below the rings).
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <img alt="On March 13, 2006 Cassini's narrow-angle camera captured this look at Saturn and its rings, seen here nearly edge on. The frame also features Mimas and tiny Janus (above the rings), and Tethys (below the rings)." src="/spaceimages/images/wallpaper/PIA18323-640x350.jpg" title="On March 13, 2006 Cassini's narrow-angle camera captured this look at Saturn and its rings, seen here nearly edge on. The frame also features Mimas and tiny Janus (above the rings), and Tethys (below the rings)."/>
              </div>
              <div class="content_title">
               Postcard from the Ring Plane
              </div>
             </a>
            </li>
            <li class="slide">
             <a href="/spaceimages/details.php?id=PIA22418">
              <div class="image_and_description_container">
               <div class="rollover_description">
                Saturn's rings display their subtle colors in this view captured on Aug. 22, 2009, by NASA's Cassini spacecraft. The ice particles that make up the rings range in size from smaller than a grain of sand to as large as mountains.
                <div class="overlay_arrow">
                 <img alt="more arrow" src="/assets/images/overlay-arrow.png"/>
                </div>
               </div>
               <img alt="Saturn's rings display their subtle colors in this view captured on Aug. 22, 2009, by NASA's Cassini spacecraft. The ice particles that make up the rings range in size from smaller than a grain of sand to as large as mountains." src="/spaceimages/images/wallpaper/PIA22418-640x350.jpg" title="Saturn's rings display their subtle colors in this view captured on Aug. 22, 2009, by NASA's Cassini spacecraft. The ice particles that make up the rings range in size from smaller than a grain of sand to as large as mountains."/>
              </div>
              <div class="content_title">
               Gravity's Rainbow
              </div>
             </a>
            </li>
           </ul>
           <footer>
            <a class="outline_button dark" href="index.php?category=Saturn">
             more images
            </a>
           </footer>
          </div>
         </section>
         <!-- END CONTENT -->
         <!-- START FOOTER: "DEFAULT" -->
        </div>
        <footer class="clearfix" id="site_footer">
         <section class="upper_footer">
          <div class="grid_layout">
           <div class="footer_newsletter">
            <h2>
             Get the Newsletter
            </h2>
            <form action="/signup/index.php" class="submit_newsletter" method="post">
             <input class="email_field" name="email_field" onblur="this.placeholder = 'enter email address'" onfocus="this.placeholder = ''" placeholder="enter email address" type="email" value=""/>
             <input class="email_submit" type="submit" value=""/>
            </form>
           </div>
           <div class="gradient_line_divider">
           </div>
           <div class="share">
            <h2>
             Follow JPL
            </h2>
            <div class="social_icons">
             <!-- AddThis Button BEGIN -->
             <div class="addthis_toolbox addthis_default_style addthis_32x32_style">
              <a addthis:userid="NASAJPL" class="addthis_button_facebook_follow icon at300b" href="http://www.facebook.com/NASAJPL" target="_blank" title="Follow on Facebook">
               <span class="at-icon-wrapper" style="background-color: rgb(59, 89, 152); line-height: 32px; height: 32px; width: 32px;">
                <svg alt="Facebook" aria-labelledby="at-svg-facebook-5" class="at-icon at-icon-facebook" role="img" style="width: 32px; height: 32px;" title="Facebook" version="1.1" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                 <title id="at-svg-facebook-5" xmlns="http://www.w3.org/1999/xhtml">
                  Facebook
                 </title>
                 <g>
                  <path d="M22 5.16c-.406-.054-1.806-.16-3.43-.16-3.4 0-5.733 1.825-5.733 5.17v2.882H9v3.913h3.837V27h4.604V16.965h3.823l.587-3.913h-4.41v-2.5c0-1.123.347-1.903 2.198-1.903H22V5.16z" fill-rule="evenodd">
                  </path>
                 </g>
                </svg>
               </span>
               <span class="addthis_follow_label">
                Facebook
               </span>
              </a>
              <a addthis:userid="NASAJPL" class="addthis_button_twitter_follow icon at300b" href="//twitter.com/NASAJPL" target="_blank" title="Follow on Twitter">
               <span class="at-icon-wrapper" style="background-color: rgb(29, 161, 242); line-height: 32px; height: 32px; width: 32px;">
                <svg alt="Twitter" aria-labelledby="at-svg-twitter-6" class="at-icon at-icon-twitter" role="img" style="width: 32px; height: 32px;" title="Twitter" version="1.1" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                 <title id="at-svg-twitter-6" xmlns="http://www.w3.org/1999/xhtml">
                  Twitter
                 </title>
                 <g>
                  <path d="M27.996 10.116c-.81.36-1.68.602-2.592.71a4.526 4.526 0 0 0 1.984-2.496 9.037 9.037 0 0 1-2.866 1.095 4.513 4.513 0 0 0-7.69 4.116 12.81 12.81 0 0 1-9.3-4.715 4.49 4.49 0 0 0-.612 2.27 4.51 4.51 0 0 0 2.008 3.755 4.495 4.495 0 0 1-2.044-.564v.057a4.515 4.515 0 0 0 3.62 4.425 4.52 4.52 0 0 1-2.04.077 4.517 4.517 0 0 0 4.217 3.134 9.055 9.055 0 0 1-5.604 1.93A9.18 9.18 0 0 1 6 23.85a12.773 12.773 0 0 0 6.918 2.027c8.3 0 12.84-6.876 12.84-12.84 0-.195-.005-.39-.014-.583a9.172 9.172 0 0 0 2.252-2.336" fill-rule="evenodd">
                  </path>
                 </g>
                </svg>
               </span>
               <span class="addthis_follow_label">
                Twitter
               </span>
              </a>
              <a addthis:userid="JPLnews" class="addthis_button_youtube_follow icon at300b" href="http://www.youtube.com/user/JPLnews?sub_confirmation=1" target="_blank" title="Follow on YouTube">
               <span class="at-icon-wrapper" style="background-color: rgb(205, 32, 31); line-height: 32px; height: 32px; width: 32px;">
                <svg alt="YouTube" aria-labelledby="at-svg-youtube-7" class="at-icon at-icon-youtube" role="img" style="width: 32px; height: 32px;" title="YouTube" version="1.1" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                 <title id="at-svg-youtube-7" xmlns="http://www.w3.org/1999/xhtml">
                  YouTube
                 </title>
                 <g>
                  <path d="M13.73 18.974V12.57l5.945 3.212-5.944 3.192zm12.18-9.778c-.837-.908-1.775-.912-2.205-.965C20.625 8 16.007 8 16.007 8c-.01 0-4.628 0-7.708.23-.43.054-1.368.058-2.205.966-.66.692-.875 2.263-.875 2.263S5 13.303 5 15.15v1.728c0 1.845.22 3.69.22 3.69s.215 1.57.875 2.262c.837.908 1.936.88 2.426.975 1.76.175 7.482.23 7.482.15 0 .08 4.624.072 7.703-.16.43-.052 1.368-.057 2.205-.965.66-.69.875-2.262.875-2.262s.22-1.845.22-3.69v-1.73c0-1.844-.22-3.69-.22-3.69s-.215-1.57-.875-2.262z" fill-rule="evenodd">
                  </path>
                 </g>
                </svg>
               </span>
               <span class="addthis_follow_label">
                YouTube
               </span>
              </a>
              <a addthis:userid="nasajpl" class="addthis_button_instagram_follow icon at300b" href="http://instagram.com/nasajpl" target="_blank" title="Follow on Instagram">
               <span class="at-icon-wrapper" style="background-color: rgb(224, 53, 102); line-height: 32px; height: 32px; width: 32px;">
                <svg alt="Instagram" aria-labelledby="at-svg-instagram-8" class="at-icon at-icon-instagram" role="img" style="width: 32px; height: 32px;" title="Instagram" version="1.1" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                 <title id="at-svg-instagram-8" xmlns="http://www.w3.org/1999/xhtml">
                  Instagram
                 </title>
                 <g>
                  <path d="M16 5c-2.987 0-3.362.013-4.535.066-1.17.054-1.97.24-2.67.512a5.392 5.392 0 0 0-1.95 1.268 5.392 5.392 0 0 0-1.267 1.95c-.272.698-.458 1.498-.512 2.67C5.013 12.637 5 13.012 5 16s.013 3.362.066 4.535c.054 1.17.24 1.97.512 2.67.28.724.657 1.337 1.268 1.95a5.392 5.392 0 0 0 1.95 1.268c.698.27 1.498.457 2.67.51 1.172.054 1.547.067 4.534.067s3.362-.013 4.535-.066c1.17-.054 1.97-.24 2.67-.51a5.392 5.392 0 0 0 1.95-1.27 5.392 5.392 0 0 0 1.268-1.95c.27-.698.457-1.498.51-2.67.054-1.172.067-1.547.067-4.534s-.013-3.362-.066-4.535c-.054-1.17-.24-1.97-.51-2.67a5.392 5.392 0 0 0-1.27-1.95 5.392 5.392 0 0 0-1.95-1.267c-.698-.272-1.498-.458-2.67-.512C19.363 5.013 18.988 5 16 5zm0 1.982c2.937 0 3.285.01 4.445.064 1.072.05 1.655.228 2.042.38.514.198.88.437 1.265.822.385.385.624.75.823 1.265.15.387.33.97.38 2.042.052 1.16.063 1.508.063 4.445 0 2.937-.01 3.285-.064 4.445-.05 1.072-.228 1.655-.38 2.042-.198.514-.437.88-.822 1.265-.385.385-.75.624-1.265.823-.387.15-.97.33-2.042.38-1.16.052-1.508.063-4.445.063-2.937 0-3.285-.01-4.445-.064-1.072-.05-1.655-.228-2.042-.38-.514-.198-.88-.437-1.265-.822a3.408 3.408 0 0 1-.823-1.265c-.15-.387-.33-.97-.38-2.042-.052-1.16-.063-1.508-.063-4.445 0-2.937.01-3.285.064-4.445.05-1.072.228-1.655.38-2.042.198-.514.437-.88.822-1.265.385-.385.75-.624 1.265-.823.387-.15.97-.33 2.042-.38 1.16-.052 1.508-.063 4.445-.063zm0 12.685a3.667 3.667 0 1 1 0-7.334 3.667 3.667 0 0 1 0 7.334zm0-9.316a5.65 5.65 0 1 0 0 11.3 5.65 5.65 0 0 0 0-11.3zm7.192-.222a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0" fill-rule="evenodd">
                  </path>
                 </g>
                </svg>
               </span>
               <span class="addthis_follow_label">
                Instagram
               </span>
              </a>
              <a class="icon all_icon" href="/social">
               <span>
                All
               </span>
              </a>
              <div class="atclear">
              </div>
             </div>
             <script>
              addthis_loader.init("//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5429eeee4e460927", {follow: true})
             </script>
            </div>
           </div>
          </div>
          <div class="gradient_line">
          </div>
         </section>
         <section class="sitemap">
          <div class="grid_layout">
           <div class="sitemap_directory">
            <div class="sitemap_block">
             <div class="footer_sitemap_item">
              <h3 class="sitemap_title">
               about JPL
              </h3>
              <ul class="subnav">
               <li>
                <a href="/about/">
                 About JPL
                </a>
               </li>
               <li>
                <a href="/about/exec.php">
                 Executive Council
                </a>
               </li>
               <li>
                <a href="/about/history.php">
                 History
                </a>
               </li>
               <li>
                <a href="/about/reports.php">
                 Annual Reports
                </a>
               </li>
               <li>
                <a href="/contact_JPL.php">
                 Contact Us
                </a>
               </li>
               <li>
                <a href="/opportunities/">
                 Opportunities
                </a>
               </li>
               <li>
                <a href="/acquisition/">
                 Doing Business with JPL
                </a>
               </li>
              </ul>
             </div>
             <div class="footer_sitemap_item">
              <h3 class="sitemap_title">
               missions
              </h3>
              <ul class="subnav">
               <li>
                <a href="/missions/?type=current">
                 Current
                </a>
               </li>
               <li>
                <a href="/missions/?type=past">
                 Past
                </a>
               </li>
               <li>
                <a href="/missions/?type=future">
                 Future
                </a>
               </li>
               <li>
                <a href="/missions/?type=proposed">
                 Proposed
                </a>
               </li>
               <li>
                <a href="/missions">
                 All
                </a>
               </li>
              </ul>
             </div>
             <div class="footer_sitemap_item">
              <h3 class="sitemap_title">
               galleries
              </h3>
              <ul class="subnav">
               <li>
                <a href="/spaceimages/">
                 JPL Space Images
                </a>
               </li>
               <li>
                <a href="/videos/">
                 Videos
                </a>
               </li>
               <li>
                <a href="/infographics/">
                 Infographics
                </a>
               </li>
               <li>
                <a href="https://photojournal.jpl.nasa.gov/">
                 Photojournal
                </a>
               </li>
               <li>
                <a href="http://www.nasaimages.org/">
                 NASA Images
                </a>
               </li>
               <li>
                <a href="/apps/">
                 Mobile Apps
                </a>
               </li>
              </ul>
             </div>
            </div>
            <div class="sitemap_block">
             <div class="footer_sitemap_item">
              <h3 class="sitemap_title">
               education
              </h3>
              <ul class="subnav">
               <li>
                <a href="/edu/intern/">
                 Intern
                </a>
               </li>
               <li>
                <a href="/edu/learn/">
                 Learn
                </a>
               </li>
               <li>
                <a href="/edu/teach/">
                 Teach
                </a>
               </li>
               <li>
                <a href="/edu/news/">
                 News
                </a>
               </li>
               <li>
                <a href="/edu/events/">
                 Events
                </a>
               </li>
              </ul>
             </div>
             <div class="footer_sitemap_item">
              <h3 class="sitemap_title">
               news
              </h3>
              <ul class="subnav">
               <li>
                <a href="/news">
                 Latest News
                </a>
               </li>
               <li>
                <a href="/news/presskits.php">
                 Press Kits
                </a>
               </li>
               <li>
                <a href="/news/factsheets.php">
                 Fact Sheets
                </a>
               </li>
               <li>
                <a href="/news/mediainformation.php">
                 Media Information
                </a>
               </li>
               <li>
                <a href="/universe/">
                 Universe Newspaper
                </a>
               </li>
              </ul>
             </div>
             <div class="footer_sitemap_item">
              <h3 class="sitemap_title">
               public events
              </h3>
              <ul class="subnav">
               <li>
                <a href="/events/">
                 Overview
                </a>
               </li>
               <li>
                <a href="/events/tours/views/">
                 Tours
                </a>
               </li>
               <li>
                <a href="/events/lectures.php">
                 Lecture Series
                </a>
               </li>
               <li>
                <a href="/events/speakers-bureau.php">
                 Speakers Bureau
                </a>
               </li>
               <li>
                <a href="/events/team-competitions.php">
                 Team Competitions
                </a>
               </li>
               <li>
                <a href="/events/special-events.php">
                 Special Events
                </a>
               </li>
              </ul>
             </div>
            </div>
            <div class="sitemap_block">
             <div class="footer_sitemap_item">
              <h3 class="sitemap_title">
               Our Sites
              </h3>
              <ul class="subnav">
               <li>
                <a href="/asteroidwatch/">
                 Asteroid Watch
                </a>
               </li>
               <li>
                <a href="http://saturn.jpl.nasa.gov/index.cfm">
                 Cassini - Mission to Saturn
                </a>
               </li>
               <li>
                <a href="http://climate.nasa.gov">
                 Earth / Global Climate Change
                </a>
               </li>
               <li>
                <a href="http://planetquest.jpl.nasa.gov">
                 Exoplanet Exploration
                </a>
               </li>
               <li>
                <a href="/missions/juno/">
                 Juno - Mission to Jupiter
                </a>
               </li>
               <li>
                <a href="http://marsprogram.jpl.nasa.gov/">
                 Mars Exploration
                </a>
               </li>
               <li>
                <a href="http://marsprogram.jpl.nasa.gov/msl/">
                 Mars Science Laboratory / Curiosity
                </a>
               </li>
               <li>
                <a href="http://rosetta.jpl.nasa.gov/">
                 Rosetta - Understanding Comets
                </a>
               </li>
               <li>
                <a href="http://scienceandtechnology.jpl.nasa.gov/">
                 Science and Technology
                </a>
               </li>
               <li>
                <a href="http://solarsystem.nasa.gov/">
                 Solar System Exploration
                </a>
               </li>
               <li>
                <a href="http://eyes.nasa.gov/">
                 Eyes on the Solar System
                </a>
               </li>
               <li>
                <a href="http://eyes.nasa.gov/earth/">
                 Eyes on the Earth
                </a>
               </li>
               <li>
                <a href="http://eyes.nasa.gov/exoplanets/">
                 Eyes on Exoplanets
                </a>
               </li>
               <li>
                <a href="http://www.spitzer.caltech.edu/">
                 Spitzer Space Telescope
                </a>
               </li>
              </ul>
             </div>
            </div>
            <div class="sitemap_block">
             <div class="footer_sitemap_item">
              <h3 class="sitemap_title">
               Follow JPL
              </h3>
              <ul class="subnav">
               <li>
                <a href="/signup/">
                 Newsletter
                </a>
               </li>
               <li>
                <a href="https://www.facebook.com/NASAJPL">
                 Facebook
                </a>
               </li>
               <li>
                <a href="http://twitter.com/NASAJPL">
                 Twitter
                </a>
               </li>
               <li>
                <a href="http://www.youtube.com/user/JPLnews">
                 YouTube
                </a>
               </li>
               <li>
                <a href="http://www.flickr.com/photos/nasa-jpl">
                 Flickr
                </a>
               </li>
               <li>
                <a href="http://instagram.com/nasajpl">
                 Instagram
                </a>
               </li>
               <li>
                <a href="https://www.linkedin.com/company/2004/">
                 LinkedIn
                </a>
               </li>
               <li>
                <a href="http://itunes.apple.com/podcast/hd-nasas-jet-propulsion-laboratory/id262254981">
                 iTunes
                </a>
               </li>
               <li>
                <a href="http://www.ustream.tv/nasajpl">
                 UStream
                </a>
               </li>
               <li>
                <a href="/rss/">
                 RSS
                </a>
               </li>
               <li>
                <a href="http://blogs.jpl.nasa.gov">
                 Blog
                </a>
               </li>
               <li>
                <a href="/onthego/">
                 Mobile
                </a>
               </li>
               <li>
                <a href="/social/">
                 All Social Media
                </a>
               </li>
              </ul>
             </div>
             <div class="footer_sitemap_item">
              <h3 class="sitemap_title">
               NASA
              </h3>
              <ul class="subnav">
               <li>
                <a href="http://jplwater.nasa.gov">
                 NASA Water Cleanup
                </a>
               </li>
               <li>
                <a href="http://www.hq.nasa.gov/office/pao/FOIA/agency/">
                 FOIA
                </a>
               </li>
              </ul>
             </div>
            </div>
           </div>
          </div>
          <div class="gradient_line">
          </div>
         </section>
         <section class="lower_footer">
          <div class="nav_container">
           <nav>
            <ul>
             <li>
              <a href="http://www.nasa.gov/" target="_blank">
               NASA
              </a>
             </li>
             |
             <li>
              <a href="http://www.caltech.edu/" target="_blank">
               Caltech
              </a>
             </li>
             |
             <li>
              <a href="/copyrights.php">
               Privacy
              </a>
             </li>
             |
             <li>
              <a href="/imagepolicy">
               Image Policy
              </a>
             </li>
             |
             <li>
              <a href="/faq.php">
               FAQ
              </a>
             </li>
             |
             <li>
              <a href="/contact_JPL.php">
               Feedback
              </a>
             </li>
            </ul>
           </nav>
          </div>
          <div class="credits">
           <span class="credits_manager">
            Site Manager: Jon Nelson
           </span>
           <span class="credits_webmaster">
            Webmasters: Tony Greicius, Luis Espinoza, Anil Natha
           </span>
          </div>
         </section>
        </footer>
       </div>
      </div>
      <script src="/assets/javascripts/vendor/prefixfree.js" type="text/javascript">
      </script>
      <script src="/assets/javascripts/vendor/prefixfree.jquery.js" type="text/javascript">
      </script>
      <script id="_fed_an_ua_tag" src="https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js?agency=NASA&amp;pua=UA-45212297-1&amp;subagency=JPL&amp;dclink=true&amp;sp=search,s,q&amp;sdor=false&amp;exts=tif,tiff" type="text/javascript">
      </script>
      <script type="text/javascript">
       setTimeout(function(){var a=document.createElement("script");
    var b=document.getElementsByTagName("script")[0];
    a.src=document.location.protocol+"//script.crazyegg.com/pages/scripts/0025/5267.js?"+Math.floor(new Date().getTime()/3600000);
    a.async=true;a.type="text/javascript";b.parentNode.insertBefore(a,b)}, 1);
      </script>
      <!-- END FOOTER: "DEFAULT" -->
      <div id="_atssh" style="visibility: hidden; height: 1px; width: 1px; position: absolute; top: -9999px; z-index: 100000;">
       <iframe id="_atssh405" src="https://s7.addthis.com/static/sh.1836a2a6d9443e6d814c8dfc.html#rand=0.8366367892749682&amp;iit=1526874940297&amp;tmr=load%3D1526874940153%26core%3D1526874940188%26main%3D1526874940293%26ifr%3D1526874940301&amp;cb=0&amp;cdn=0&amp;md=0&amp;kw=&amp;ab=-&amp;dh=www.jpl.nasa.gov&amp;dr=https%3A%2F%2Fwww.jpl.nasa.gov%2Fspaceimages%2F%3Fsearch%3D%26category%3DMars&amp;du=https%3A%2F%2Fwww.jpl.nasa.gov%2Fspaceimages%2Fdetails.php%3Fid%3DPIA17470&amp;href=https%3A%2F%2Fwww.jpl.nasa.gov%2Fspaceimages%2Fdetails.php&amp;dt=Titan's%20Northern%20Lakes%3A%20Salt%20Flats%3F&amp;dbg=0&amp;cap=tc%3D0%26ab%3D0&amp;inst=1&amp;jsl=1&amp;prod=undefined&amp;lng=en&amp;ogt=description%2Ctitle%2Curl%2Cimage&amp;pc=men&amp;pub=&amp;ssl=1&amp;sid=5b02433cb5044f6b&amp;srf=0.01&amp;ver=300&amp;xck=1&amp;xtr=0&amp;og=image%3D%252F%252Fwww.jpl.nasa.gov%252Fspaceimages%252Fimages%252Fmediumsize%252FPIA17470_ip.jpg%26url%3D%252F%252Fwww.jpl.nasa.gov%252Fspaceimages%252Fdetails.php%253Fid%253DPIA17470%26title%3DTitan's%2520Northern%2520Lakes%253A%2520Salt%2520Flats%253F%26description%3DNASA's%2520Cassini%2520spacecraft%2520reveals%2520the%2520differences%2520in%2520the%2520composition%2520of%2520surface%2520materials%2520around%2520hydrocarbon%2520lakes%2520at%2520Titan.&amp;csi=undefined&amp;rev=v8.3.12-wp&amp;ct=1&amp;xld=1&amp;xd=1" style="height: 1px; width: 1px; position: absolute; top: 0px; z-index: 100000; border: 0px; left: 0px;" title="AddThis utility frame">
       </iframe>
      </div>
      <style id="service-icons-0">
      </style>
      <div aria-labelledby="at4-share-label" class="addthis-smartlayers addthis-smartlayers-desktop" role="region">
       <div id="at4-share-label">
        AddThis Sharing Sidebar
       </div>
       <div class="at4-share addthis_32x32_style atss atss-left addthis-animated slideInLeft" id="at4-share">
        <a class="at-share-btn at-svc-twitter" role="button" tabindex="1">
         <span class="at4-visually-hidden">
          Share to Twitter
         </span>
         <span class="at-icon-wrapper" style="background-color: rgb(29, 161, 242);">
          <svg aria-labelledby="at-svg-twitter-9" class="at-icon at-icon-twitter" role="img" version="1.1" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
           <title id="at-svg-twitter-9" xmlns="http://www.w3.org/1999/xhtml">
            Twitter
           </title>
           <g>
            <path d="M27.996 10.116c-.81.36-1.68.602-2.592.71a4.526 4.526 0 0 0 1.984-2.496 9.037 9.037 0 0 1-2.866 1.095 4.513 4.513 0 0 0-7.69 4.116 12.81 12.81 0 0 1-9.3-4.715 4.49 4.49 0 0 0-.612 2.27 4.51 4.51 0 0 0 2.008 3.755 4.495 4.495 0 0 1-2.044-.564v.057a4.515 4.515 0 0 0 3.62 4.425 4.52 4.52 0 0 1-2.04.077 4.517 4.517 0 0 0 4.217 3.134 9.055 9.055 0 0 1-5.604 1.93A9.18 9.18 0 0 1 6 23.85a12.773 12.773 0 0 0 6.918 2.027c8.3 0 12.84-6.876 12.84-12.84 0-.195-.005-.39-.014-.583a9.172 9.172 0 0 0 2.252-2.336" fill-rule="evenodd">
            </path>
           </g>
          </svg>
         </span>
        </a>
        <a class="at-share-btn at-svc-facebook" role="button" tabindex="1">
         <span class="at4-visually-hidden">
          Share to Facebook
         </span>
         <span class="at-icon-wrapper" style="background-color: rgb(59, 89, 152);">
          <svg aria-labelledby="at-svg-facebook-10" class="at-icon at-icon-facebook" role="img" version="1.1" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
           <title id="at-svg-facebook-10" xmlns="http://www.w3.org/1999/xhtml">
            Facebook
           </title>
           <g>
            <path d="M22 5.16c-.406-.054-1.806-.16-3.43-.16-3.4 0-5.733 1.825-5.733 5.17v2.882H9v3.913h3.837V27h4.604V16.965h3.823l.587-3.913h-4.41v-2.5c0-1.123.347-1.903 2.198-1.903H22V5.16z" fill-rule="evenodd">
            </path>
           </g>
          </svg>
         </span>
        </a>
        <a class="at-share-btn at-svc-email" role="button" tabindex="1">
         <span class="at4-visually-hidden">
          Share to Email
         </span>
         <span class="at-icon-wrapper" style="background-color: rgb(132, 132, 132);">
          <svg aria-labelledby="at-svg-email-11" class="at-icon at-icon-email" role="img" version="1.1" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
           <title id="at-svg-email-11" xmlns="http://www.w3.org/1999/xhtml">
            Email
           </title>
           <g>
            <g fill-rule="evenodd">
            </g>
            <path d="M27 22.757c0 1.24-.988 2.243-2.19 2.243H7.19C5.98 25 5 23.994 5 22.757V13.67c0-.556.39-.773.855-.496l8.78 5.238c.782.467 1.95.467 2.73 0l8.78-5.238c.472-.28.855-.063.855.495v9.087z">
            </path>
            <path d="M27 9.243C27 8.006 26.02 7 24.81 7H7.19C5.988 7 5 8.004 5 9.243v.465c0 .554.385 1.232.857 1.514l9.61 5.733c.267.16.8.16 1.067 0l9.61-5.733c.473-.283.856-.96.856-1.514v-.465z">
            </path>
           </g>
          </svg>
         </span>
        </a>
        <a class="at-share-btn at-svc-compact" role="button" tabindex="1">
         <span class="at4-visually-hidden">
          More AddThis Share options
         </span>
         <span class="at-icon-wrapper" style="background-color: rgb(255, 101, 80);">
          <svg aria-labelledby="at-svg-addthis-12" class="at-icon at-icon-addthis" role="img" version="1.1" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
           <title id="at-svg-addthis-12" xmlns="http://www.w3.org/1999/xhtml">
            Addthis
           </title>
           <g>
            <path d="M18 14V8h-4v6H8v4h6v6h4v-6h6v-4h-6z" fill-rule="evenodd">
            </path>
           </g>
          </svg>
         </span>
        </a>
        <div class="at-share-close-control ats-transparent at4-hide-content at4-show" id="at4-scc" title="Hide">
         <div class="at4-arrow at-left">
          Hide
         </div>
        </div>
       </div>
       <div class="at-share-open-control at-share-open-control-left ats-transparent at4-hide" id="at4-soc" title="Show">
        <div class="at4-arrow at-right">
         Show
        </div>
       </div>
      </div>
      <div aria-labelledby="at-thankyou-label" class="at4-thankyou at4-thankyou-background at4-hide ats-transparent at4-thankyou-desktop addthis-smartlayers addthis-animated fadeIn at4-show" id="at4-thankyou" role="dialog">
       <div class="at4lb-inner">
        <button class="at4x" title="Close">
         Close
        </button>
        <a id="at4-palogo">
         <div>
          <a class="at-branding-logo" href="//www.addthis.com/website-tools/overview?utm_source=AddThis%20Tools&amp;utm_medium=image" target="_blank" title="Powered by AddThis">
           <div class="at-branding-icon">
           </div>
           <span class="at-branding-addthis">
            AddThis
           </span>
          </a>
         </div>
        </a>
        <div class="at4-thankyou-inner">
         <div class="thankyou-title" id="at-thankyou-label">
         </div>
         <div class="thankyou-description">
         </div>
         <div class="at4-thankyou-layer">
         </div>
        </div>
       </div>
      </div>
     </body>
    </html>
    


```python
img_src = img_soup.find(class_='main_image')['src']
img_src
```




    '/spaceimages/images/largesize/PIA17470_hires.jpg'




```python
featured_image_url = 'https://www.jpl.nasa.gov/' + img_src
```


```python
featured_image_url
```




    'https://www.jpl.nasa.gov//spaceimages/images/largesize/PIA17470_hires.jpg'




```python
mars_dict['featured_image'] = featured_image_url
```


```python
print(mars_dict)
```

    {'hemispheres': [{'title': 'Cerberus Hemisphere', 'img_url': 'http://astropedia.astrogeology.usgs.gov/download/Mars/Viking/cerberus_enhanced.tif/full.jpg'}, {'title': 'Schiaparelli Hemisphere', 'img_url': 'http://astropedia.astrogeology.usgs.gov/download/Mars/Viking/schiaparelli_enhanced.tif/full.jpg'}, {'title': 'Syrtis Major Hemisphere', 'img_url': 'http://astropedia.astrogeology.usgs.gov/download/Mars/Viking/syrtis_major_enhanced.tif/full.jpg'}, {'title': 'Valles Marineris Hemisphere', 'img_url': 'http://astropedia.astrogeology.usgs.gov/download/Mars/Viking/valles_marineris_enhanced.tif/full.jpg'}], 'facts': '<table border="1" class="dataframe">  <thead>    <tr style="text-align: right;">      <th></th>      <th>Value</th>    </tr>    <tr>      <th>Description</th>      <th></th>    </tr>  </thead>  <tbody>    <tr>      <th>Equatorial Diameter:</th>      <td>6,792 km</td>    </tr>    <tr>      <th>Polar Diameter:</th>      <td>6,752 km</td>    </tr>    <tr>      <th>Mass:</th>      <td>6.42 x 10^23 kg (10.7% Earth)</td>    </tr>    <tr>      <th>Moons:</th>      <td>2 (Phobos &amp; Deimos)</td>    </tr>    <tr>      <th>Orbit Distance:</th>      <td>227,943,824 km (1.52 AU)</td>    </tr>    <tr>      <th>Orbit Period:</th>      <td>687 days (1.9 years)</td>    </tr>    <tr>      <th>Surface Temperature:</th>      <td>-153 to 20 °C</td>    </tr>    <tr>      <th>First Record:</th>      <td>2nd millennium BC</td>    </tr>    <tr>      <th>Recorded By:</th>      <td>Egyptian astronomers</td>    </tr>  </tbody></table>', 'weather': 'Sol 2054 (May 17, 2018), Sunny, high 4C/39F, low -72C/-97F, pressure at 7.40 hPa, daylight 05:21-17:20', 'featured_image': 'https://www.jpl.nasa.gov//spaceimages/images/largesize/PIA17470_hires.jpg'}
    


```python
#since the requests.get for twitter just decided to break, now let's test code for splinter to grab from twitter.
url = 'https://twitter.com/marswxreport?lang=en'
browser.visit(url)
time.sleep(1)

html = browser.html
weather_soup = bs(html, 'html.parser')
```


```python
results = weather_soup.find('p', class_="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text").text
results
```




    'Sol 2054 (May 17, 2018), Sunny, high 4C/39F, low -72C/-97F, pressure at 7.40 hPa, daylight 05:21-17:20'


