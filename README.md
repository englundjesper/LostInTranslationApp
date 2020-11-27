# LostInTranslationApp

This project is created by [Johnny Hoang](https://github.com/flaakan) and [Jesper Englund](https://github.com/englundjesper).

Link to [Heroku](https://lostintranslationapp.herokuapp.com/).

## Information
This project is a translation application where you can translate regular text to sign language.  
To translate, you will need to type in your name and be logged in.  
As a logged in user you can translate to sign language and check your translations in a collection.

## How to run 
* Clone the project, `git clone https://github.com/flaakan/LostInTranslationApp.git`
* Open the project in Visual Studio Code.
* Open up a terminal and run ``npm install`.
* Type in `npm start` in the terminal.
* Open the proposed localhost in your browser.

## Web page
The web page has several endpoints:
* `/` : This is the home page. If you are logged in you can translate a sentence to sign language.  Otherwise it will redirect you to `/login`.
* `/login`: The login page, you can only enter this page if you are not logged in.
* `/profile`: Displays a collection of all translations.
