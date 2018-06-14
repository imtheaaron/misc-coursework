# Belly Button Biodiversity Dashboard

This project built a web dashboard that displays results dynamically from the [Belly Button Diveristy dataset](http://robdunnlab.com/projects/belly-button-biodiversity/).

## Components:
* sqlite database file of the dataset
* Flask and SQLALchemcy to make SQL queries from the database and serve up the results in json format
* Dropdown selector to let users choose which sample from the dataset to view
* Plotly to build a pie and bubble chart to display the selected sample's results (microbial counts)

__Here an image from the output to the web site built from scraped elements.__

![web display image](images/screen.jpg)

### Image examples of working components of the dashboard:

1. __Dropdown selector:__

![dropdown selector](images/selector.jpg)


2. __Pie chart hover text displaying a description of the known information for the selected microbe:__

![pie chart hover](images/pie-hover.jpg)


3. __Bubble chart hover text:__

![bubble chart hover](images/bubble_hover.jpg)


4. __Restyled pie chart and metadata for sample BB_944 showing dynamically changed metadata results and pie chart data:__

![dynamically changed results](images/sample_change.jpg)
