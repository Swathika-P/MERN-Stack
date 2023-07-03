create table students(
    Roll_no int PRIMARY KEY,
    Name varchar(50),
    Dept varchar(10),
    section varchar(5),
    Year int
);
insert into students(Roll_no,Name,Dept,section,Year)
    values(21,'Swa','CSE','C',3),
    (20,'Suki','ECE','C',3),
    (2,'Tej','IT','B',4),
    (5,'Sow','CSE','D',2),
    (30,'Shb','ECE','A',),
    (10,'Jan','EEE','A',1),
    (15,'Prio','CSE','B',4),
    (23,'Hema','IT','D',2)
 SELECT * from students;
 select * from students order by roll_no;
 select name from students where year=4;
 update students set section='C' where name='Suki';
 select name,section from students;
 select sum(roll_no) from students;
 select * from students where roll_no>=20;
 ALTER TABLE students ADD COLUMN id int;
 ALTER TABLE students ADD COLUMN age int;
 UPDATE students
SET id = CASE
    WHEN roll_no = 21 THEN 1
    WHEN roll_no = 20 THEN 2
    WHEN roll_no = 2 THEN 3
    WHEN roll_no = 5 THEN 4
    WHEN roll_no = 30 THEN 5
    WHEN roll_no = 10 THEN 6
    WHEN roll_no = 15 THEN 7
    WHEN roll_no = 23 THEN 8
END,
age = CASE
    WHEN roll_no = 21 THEN 22
    WHEN roll_no = 20 THEN 24
    WHEN roll_no = 2 THEN 21
    WHEN roll_no = 5 THEN 20
    WHEN roll_no = 30 THEN 23
    WHEN roll_no = 10 THEN 19
    WHEN roll_no = 15 THEN 22
    WHEN roll_no = 23 THEN 21
END;
select * from students;
UPDATE students SET age = 25 WHERE id % 2 = 0;
select id,age,name from students;