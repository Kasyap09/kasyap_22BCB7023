create database Tuesday;
use Tuesday;
create table category(
c_id int primary key,
c_name varchar(25),
c_details varchar(25)
);
insert into category values(101,'electronics','abcd');
insert into category values(102,'furnitures','abcdefgh');
create table products(
p_id int primary key,
p_name varchar(25),
p_details varchar(35),
c_id int,
foreign key products(c_id) references category(c_id)
);
desc products;
insert into products values(501,'samsung s23','12gb',101);
select * from products;
update products set c_id = 999 where p_id = 501;

