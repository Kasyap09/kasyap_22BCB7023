show databases;
use vit_ap;
show tables from vit_ap;
desc worker;
select * from worker;
select department,count(department) from worker group by department;
SELECT COUNT(department)
FROM worker
GROUP BY department
ORDER BY COUNT(department) DESC
LIMIT 1;
select department,sum(salary) as sume from worker
group by department order by sume desc limit 1;
select department,count(department) from worker having count(department)>3;

SELECT department, COUNT(department) 
FROM worker 
GROUP BY department 
HAVING COUNT(department) > 3;
select first_name,department from worker where salary = (select max(worker) from worker);
SELECT first_name, department 
FROM worker 
WHERE salary = (SELECT MAX(salary) FROM worker);
create table student(
s_id int,
s_name varchar(25)
);
insert into student values (101,'kasyap'),(102,'amar'),(103,'akhil'),(105,'john');
create table address(
s_id int,
s_address varchar(25));
insert into address values (101,'coimbatore'),(104,'chennai'),(105,'pune');
SELECT * 
FROM student 
CROSS JOIN address;
SELECT * from student INNER JOIN address where student.s_id = address.s_id;

SELECT * FROM student LEFT OUTER JOIN address ON (student.s_id = address.s_id);


