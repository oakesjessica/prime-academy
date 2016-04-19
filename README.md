# intro-solo-sql

###Description
In this challenge, we’re going to practice performing SQL queries. This should help solidify some concepts that were covered during lecture.

###Assumptions
You are using Postico or pgAdmin
Postgres is currently running on your computer
Setup
Follow the instructions below before continuing with this challenge.

Create your database, table, and data
We are creating a database with a single table (syntax_practice) and 8 records. Please follow the instructions below to create a new database with this table and data.

###Postico instructions

Open Postico.
Create a local connection to your Postgres server, if needed.
Click the button in the upper left with the elephant icon, to get back to the list of databases/
Create a new database using the button at the bottom.
Double click your new DB.
Double click SQL query.
Paste everything from this file (https://drive.google.com/file/d/0B10Wu-zrSBwMODZMbHZ1UUNPejQ/view?usp=sharing) into the upper textbox
Press cmd + option + enter or select Connection -> Execute All Queries.
Press cmr + R or select Connection -> Reload.
pgAdmin instructions

Open pgAdmin, if needed
Connect to your server, if needed
Right-click on the Databases option (listed just under the icon that represents your server) and click New Database…
In the dialog, give your database a named iota
Click on the SQL tab/button
Uncheck the Read only option
Paste everything from this file (https://drive.google.com/file/d/0B10Wu-zrSBwMODZMbHZ1UUNPejQ/view?usp=sharing) into a textbox
Click OK to create our database, table, and data!
GitHub repo
Create a GitHub repo named “prime-solo-sql”.
Create a file called “solution.sql”. You will store your responses to the exercise questions here. NOTE: This is merely a text file with a .sql extension.
Exercise
For each of the following questions

Write a comment that specifies which question you are answering. (SQL comments are two dashes, followed by text.)
Write the SQL query that answers the question, below that comment.

Example question and answer
-- 0. Get all the users
SELECT * FROM syntax_practice;

###Tasks
Get all users from Chicago.
Get all users with usernames that contain the letter a.
The bank is giving a new customer bonus! Update all records with an account balance of 0.00 and a transactions_attempted of 0. Give them a new account balance of 10.00.
Select all users that have attempted 9 or more transactions.
Get the username and account balance of the 3 users with the highest balances, sort highest to lowest balance. NOTE: Research LIMIT
Get the username and account balance of the 3 users with the lowest balances, sort lowest to highest balance.
Get all users with account balances that are more than $100.
Add a new record.
The bank is losing money in Miami and Phoenix and needs to unload low transaction customers: Delete users that reside in miami OR phoenix and have completed fewer than 5 transactions.
