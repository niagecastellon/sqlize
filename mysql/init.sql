CREATE DATABASE compagniaaerea;

USE compagniaaerea;

-- definizione tabelle
CREATE TABLE Volo(
	id int primary key auto_increment,
	orariopartenza timestamp,
	durataminuti smallint,
	fkaeroportopartenza smallint,
	fkaeroportoarrivo smallint
);

CREATE TABLE Giornaliero(
	fkvolo int
);

CREATE TABLE Settimanale(
	fkvolo int,
	giornosettimana tinyint
);

CREATE TABLE Mensile(
	fkvolo int,
	giornomese tinyint
);

CREATE TABLE Aeroporto(
	codice smallint primary key,
	nome varchar(20),
	fkcategoria tinyint,
	fkcitta smallint
);

CREATE TABLE Tappaintermedia(
	fkvolo int,
	fkaeroporto smallint,
	ordine tinyint
);

CREATE TABLE Categoria(
	id tinyint primary key auto_increment, -- tinyint perchè non ci sono molte categorie
	nome varchar(20)
);




CREATE TABLE Citta(
	id smallint primary key auto_increment,
	nome varchar(50),
	numeroabitanti int,
	fkregione smallint
);

CREATE TABLE Regione(
	id smallint primary key auto_increment,
	nome varchar(50)
);

CREATE TABLE Mensileregione(
	fkmensile int,
	fkregione smallint
);

-- ----------------------------------------
-- definizione vincoli primary key
-- ----------------------------------------

ALTER TABLE Giornaliero ADD CONSTRAINT PKGiornaliero PRIMARY KEY (fkvolo);

ALTER TABLE Settimanale ADD CONSTRAINT PKSettimanale PRIMARY KEY (fkvolo);

ALTER TABLE Mensile ADD CONSTRAINT PKMensile PRIMARY KEY (fkvolo);

ALTER TABLE Mensileregione ADD CONSTRAINT PKMensileregione PRIMARY KEY (fkmensile,fkregione);

ALTER TABLE Tappaintermedia ADD CONSTRAINT PKTappaintermedia PRIMARY KEY (fkvolo,fkaeroporto);

-- ---------------------------------------
-- definizione vincoli foreign key
-- ----------------------------------------

ALTER TABLE Volo ADD CONSTRAINT FKVoloAreoportopartenza FOREIGN KEY (fkareoportopartenza) REFERENCES Aeroporto(codice);
ALTER TABLE Volo ADD CONSTRAINT FKVoloAreoportoarrivo FOREIGN KEY (fkareoportoarrivo) REFERENCES Aeroporto(codice);

ALTER TABLE Giornaliero ADD CONSTRAINT FKGiornalieroVolo FOREIGN KEY (fkvolo) REFERENCES Volo(id);

ALTER TABLE Settimanale ADD CONSTRAINT FKSettimanaleVolo FOREIGN KEY (fkvolo) REFERENCES Volo(id);

ALTER TABLE Mensile ADD CONSTRAINT FKMensileVolo FOREIGN KEY (fkvolo) REFERENCES Volo(id);

ALTER TABLE Aeroporto ADD CONSTRAINT FKAeroportoCategoria FOREIGN KEY (fkcategoria) REFERENCES Categoria(id);
ALTER TABLE Aeroporto ADD CONSTRAINT FKAeroportoCitta FOREIGN KEY (fkcitta) REFERENCES Citta(id);

ALTER TABLE Tappaintermedia ADD CONSTRAINT FKTappaintermediaVolo FOREIGN KEY (fkvolo) REFERENCES Volo(id);
ALTER TABLE Tappaintermedia ADD CONSTRAINT FKTappaintermediaAeroporto FOREIGN KEY (fkaeroporto) REFERENCES Aeroporto(codice);

ALTER TABLE Citta ADD CONSTRAINT FKCittaRegione FOREIGN KEY (fkregione) REFERENCES Regione(id);

ALTER TABLE Mensileregione ADD CONSTRAINT FKMensileregioneMensile FOREIGN KEY (fkmensile) REFERENCES Mensile(fkvolo);
ALTER TABLE Mensileregione ADD CONSTRAINT FKMensileregioneRegione FOREIGN KEY (fkregione) REFERENCES Regione(id);

-- ------------------------
-- definizione vincoli 
-- ------------------------

ALTER TABLE Settimanale ADD CONSTRAINT CHECK (giornosettimana > 0 AND giornosettimana < 8);
ALTER TABLE Mensile ADD CONSTRAINT CHECK (giornomese > 0 AND giornomese < 32);