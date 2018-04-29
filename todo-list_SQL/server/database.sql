CREATE TABLE tasks
(
  id SERIAL PRIMARY KEY,
  task varchar(350) NOT NULL,
  status BOOLEAN NOT NULL
);
