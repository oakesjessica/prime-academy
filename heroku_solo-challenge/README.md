# heroku_solo-challenge

##Solo Heroku Challenge
Welcome back (back? back?) to a challenge that (does not) involve your Resume! For this challenge, I want you to spin up an entirely new project (repetition is key here and will be helpful I promise!). Set up a node project using npm init, create an http server and respond on port 3000 with “Hello world!”. Test the application using the curl command.
Note: make sure you use .listen(process.env.PORT || 3000); in order to support heroku’s automatic port assignment.
Next, you will need to create an account at heroku.com. Once you’re logged in, go to your dashboard, and create a new app (there is a plus sign in the top right, or just go to https://dashboard.heroku.com/new). Enter a name or leave it blank (it’s fun to leave it blank) and hit “create app”.
Follow the steps on the next page. It should say “Install Heroku Toolbelt”, “Create a new Git repository” and finally “Deploy your application”. If you set up your application correctly it should deploy just fine.
Your page should say something simple like ‘Hello Heroku’
Once you are complete, post the assignment to both GitHub and Heroku and send these URLs to your instructors.

##Hard Mode 
When the page is loaded, greet the user with “Today is:” and today’s date.

##Pro Mode 
Add weather data using WeatherUnderground API https://www.wunderground.com/weather/api/
