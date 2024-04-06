--Create table
CREATE TABLE tasks (
id SERIAL PRIMARY KEY,
 	"name" varchar(320) NOT NULL,
 	"done" BOOLEAN NOT NULL
);

--Insert
INSERT INTO tasks ("name", "done")
VALUES 
 ('5 task', FALSE),
  ('6 task', FALSE),
  ('7 task', FALSE),
  ('8 task', FALSE),
  ('9 task', FALSE),
  ('10 task', FALSE);