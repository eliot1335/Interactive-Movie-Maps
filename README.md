Project Title: Movie Maps
1)	Create a flask app using MongoDB.
    a.	Create an ETL file that parses the CSV and Creates the MongoDB
2)	The flask app will consist of a base.html and < Visualization>.html files. The Base has a standard header/footer/navbar to inherit.
3)	We are using Movie DB information to provide the following visuals:
    a.	We have a Bubble diagram of the keywords associates with each genre of music.
        i.	Here is an example: https://bl.ocks.org/jyucsiro/767539a876836e920e38bc80d2031ba7
        ii.	Note: This is called cloud.js, and it extends d3. We are using this library for this project
        iii.	Note: there may be thick manipulations on the data if the word count is too long.
    b.	The second Visualization is a scatter plot of profit versus budget with the dots color-coded based upon the movie genre.
        i.	https://ibb.co/zxFhyMp the IMG for my visualization proposal, credited to https://towardsdatascience.com/ 
    c.	The final Visualization will showcase a world map of movie production countries. It will showcase via pop-up the highest-grossing movie for each country. The pop-up will appear when a user clicks on  the country.
