# country-geo-search application
An angular4 application that connects to geo-name api to get country demographic data

Summary:

• Sorted and filter data using custom javascript functions.
• Create custom routing to inner pages and display various pieces of demographic data 
• Create pagination to neatly display large datasets to communicate data
• Using geo name org countries api 

## User Manual

When the app starts up it takes us to a main page with flags and a button that is used to load the countries.

![image](https://user-images.githubusercontent.com/19658505/52918666-a20aac80-32c7-11e9-9ddf-332abd46fcf9.png)

Clicking on Load Countries creates a large table created by calling the Geonames API and formatting the data. We get large table with tabs that allow us to search all countries, European countries and countries with population more than 1M people.

![image](https://user-images.githubusercontent.com/19658505/52918679-bfd81180-32c7-11e9-8c57-f0f7deed1447.png)


Each country is hyper linked (blue text) and upon clicking the link we display the courtry details. 

Here I have clicked Germany and the application  displays population, area, capital and in which continent it resides. Also we have an outline of the geography and the countries flag is shown.

![image](https://user-images.githubusercontent.com/19658505/52918715-2ceba700-32c8-11e9-9a47-da744780fe77.png)


## To setup and run application
• Fork, clone or checkout master branch
• Have npm and nodeJS installed 
• in console run: npm install 
• in console run: npm start
