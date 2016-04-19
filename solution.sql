--01. Get all users from Chicago.
SELECT * FROM syntax_practice WHERE city LIKE '%chicago%';

--02. Get all users with usernames that contain the letter a.
SELECT * FROM syntax_practice WHERE username LIKE '%a%';

--03. The bank is giving a new customer bonus! Update all records with an account balance of 0.00 and a transactions_attempted of 0. Give them a new account balance of 10.00.
UPDATE syntax_practice SET account_balance=10 WHERE transactions_completed=0 AND transactions_attempted=0;

--04. Select all users that have attempted 9 or more transactions.
SELECT * FROM syntax_practice WHERE transactions_attempted >= 9;

--05. Get the username and account balance of the 3 users with the highest balances, sort highest to lowest balance. NOTE: Research LIMIT
SELECT username, account_balance FROM syntax_practice ORDER by account_balance DESC LIMIT 3;

--06. Get the username and account balance of the 3 users with the lowest balances, sort lowest to highest balance.
SELECT username, account_balance FROM syntax_practice ORDER by account_balance ASC LIMIT 3;

--07. Get all users with account balances that are more than $100.
SELECT * FROM syntax_practice WHERE account_balance > 100;

--08. Add a new record.
INSERT INTO syntax_practice (username, city, transactions_completed, transactions_attempted, account_balance)
VALUES
('john', 'bloomington', 0, 0, 0),
('janis', 'delevan', 10, 10, 100000),
('harvey', 'rochester', 12, 12, 200000),
('shirley', 'wisconsin dells', 12, 12, 200000),
('george', 'madison', 10, 10, 100000);

--09. The bank is losing money in Miami and Phoenix and needs to unload low transaction customers: Delete users that reside in miami OR phoenix and have completed fewer than 5 transactions.
DELETE FROM syntax_practice WHERE city='miami' OR city='phoenix' AND transactions_completed < 5;
