create database school;
use school;
create table students (
    id int,
    name varchar(50),
    age int,
    grade varchar(5)
    );
insert into students (id, name, age, grade) values
(1, 'kasyap', 14, 'a'),
(2, 'amar', 16, 'b'),
(3, 'akhil', 15, 'c'),
(4, 'john', 17, 'a'),
(5, 'lasya', 18, 'b');
select * from students;
select * from students where age between 15 and 17;
select * from students where age not between 15 and 17;
select * from students where grade in ('a', 'b');
select * from students where grade not in ('a', 'b');
select min(age) from students;
select max(age) from students;
select count(*) from students;
select avg(age) from students;
select sum(age) from students;
create table new_students (
    id int,
    name varchar(50),
    age int,
    grade varchar(5)
);
insert into new_students (id, name, age, grade) values
(4, 'david', 17, 'a'),
(5, 'eve', 18, 'b');
select name, grade from students
union
select name, grade from new_students;

select name, grade from students
where grade = 'b'
union
select name, grade from new_students
where grade = 'b';
select 
  name,
  grade,
  case
    when grade = 'a' then 'excellent'
    when grade = 'b' then 'good'
    else 'average'
  end as performance
from students;

select name, age, grade from students
order by age asc;
select name, age, grade from students
order by age desc;

select * from students
where name like 'n';


select * from students
where name like '_o%';
select * from students
where name like '%ar%';
create view excellent_students as
select name, age, grade
from students
where grade = 'a';
select * from excellent_students;




