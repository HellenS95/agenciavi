create database agenciauai;

create table clientes (
    id serial primary key,
    nome varchar(100) not null,
    email varchar(50) unique not null,
    senha text not null

);

CREATE TABLE destinos 
( 
 id serial primary key,  
 pais varchar(55) not null,  
 descricao text  
); 

CREATE TABLE companhia_aerea 
( 
 id SERIAL PRIMARY KEY,  
 nome VARCHAR(255) NOT NULL,  
 numeroContato VARCHAR(55)
); 



