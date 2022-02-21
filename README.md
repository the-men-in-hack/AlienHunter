# AlienHunter

<img src="/public/images/logo-alien-hunters-big.png" alt="logo" width="200"/>

## Description

Alienhunter is an webapp where you can see reports about Alien abductions worldwide.<br> 
Have you been abducted? Then it is the place to report this incident. <br>
The main page shows a world map with all the incidents worldwide, <br>
at the bottom you can see pictures and details about each incident.<br>
We hope by storing the information in the database, someday we will <br>
be able to predict the next abduction.

----When not logged in----

When you visit the website you are imidiatly welcomed by a big map and<br>
all the reports of alien abductions.<br>
-Click on the "show on map" button to see the abduction location on the map, <br>
the page wil scroll up automaticly.<br>
-Click on "Details" to see the description of the report.

----When logged in----

First you need to signup and login.<br>
You can click on the "ADD ABDUCTION" button at the bottom of the map, <br>
this will redirect you to the login page.
If you don't have an account you can click "here" to sign up.<br>
Choose a username and a password of atleast 8 characters, <br>
this wil bring you back to the login page where you can login <br> 
with your newly made account.

Now you can add an abduction. <br>
When you are done creating an abduction and click "Send" to <br>
submit your report, <br>
you will now see the details of your post and delete or <br> 
edit them if you made a mistake.<br>
At the top right a Logout button and a button with your username appeared.<br> 
When you click on your name you can see your profile page, <br>
now only your username apears. <br>
Click on "Edit" to fill in a form to add some fun details about yourself.

Click "Home" to get back at the homepage.
From here you can click on reporters names on every post to see their <br>
userprofile or you can add even more abductions.

## Instructions

-to install modules run:  ***npm i*** <br>
-to start node run:       ***npm run dev***

## technologies

This app was created using:
- Javascript
- NodeJS 
- MongoDB
- Heroku
- Google maps

Dependencies:
- bcrypt
- connect-mongo
- cookie-parser
- dotenv
- express
- express-sessions
- hbs
- mongoose
- morgan
- serve-favicon


We created a custom middleware function <br>
so users could not edit each others post or profile. 

## The App

https://alienhunters.herokuapp.com/

##
This is part of the Ironhack Bootcamp 2022.
