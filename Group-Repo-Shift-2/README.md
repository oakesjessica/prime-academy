# Prime Repo Shift Challenge 2!

Welcome back for another round of Repo Shift!

In this challenge, you will be building an application that uses either Angular or jQuery, Node.js, Express.js, and MongoDB. A little styling would not hurt either, so we will be adding in some CSS to make things look great and to add a little to the challenge.

Your group will be creating an application that generates users. Specifically, their name, age, birthplace, location, and Twitter handle. The trick however, is all of this needs to happen server side. The client side will just be requesting the information back from the server. Once it gets the information, it will be displaying it on the DOM. 

When the application loads, have a button in the center of the top of the page that reads 'Get Users'. When that button is clicked, it will tell the server that it is requesting information with a 'GET' request. Once the GET request is received by the server, it will generate 20 users. All of those users will be written to the database, then all of that information will be sent back down to the client to be rendered. The information needs to be stored in a Mongo Database as the client experience will be able to delete users. 

To create a user, you will need seperate modules for Name, Age, Birthplace, Location, and Twitter Handle. It should be all controlled off of one main module that is used to generate one user. The module should be fired off by another module that is used to create 20 users. Then that module will write those users to the database, and then once all of that is complete, all the information is sent back to the client in one JSON response. 

Remember that you will be shifting REPOs with other teams after a while. Leave good notes for the next team.
All other details of this project can be determined by your team.

##Hard Mode

The client experience should display all of the information, but structed in a specific way. There should be 4 users per 'row'. It should also have a delete button that deletes the user both in the DOM and in the Database. 
Use Bootstap to make your row creation easier! The information should be in a Bootstrap 'well' container, and have a col-md-3 width. We will be introducing this concept tomorrow, but get a sneak peek!

https://getbootstrap.com/getting-started/

https://getbootstrap.com/examples/grid/

Good Luck!
