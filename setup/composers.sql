--Make sure to use utf8mb4 for the database and tables or else composer names with diacritics will not work
CREATE DATABASE composer_timeline CHARACTER SET utf8mb4;

USE composer_timeline;

CREATE TABLE `composers` (
	`ID` int(10) NOT NULL AUTO_INCREMENT,
	`name` varchar(100) NOT NULL,
	`complete_name` varchar(100) NOT NULL,
	`birthdate` DATE NOT NULL,
	`deathdate` DATE NOT NULL,
	`epoch` varchar(50) NOT NULL,
	PRIMARY KEY(`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO composers(name,complete_name,birthdate,deathdate,epoch) VALUES ('Bach','Johann Sebastian Bach','1685-01-01','1750-01-01','Baroque');
INSERT INTO composers(name,complete_name,birthdate,deathdate,epoch) VALUES ('Beethoven','Ludwig van Beethoven','1770-01-01','1827-01-01','Early Romantic');
INSERT INTO composers(name,complete_name,birthdate,deathdate,epoch) VALUES ('Brahms','Johannes Brahms','1833-01-01','1897-01-01','Romantic');
INSERT INTO composers(name,complete_name,birthdate,deathdate,epoch) VALUES ('Chopin','Frédéric Chopin','1810-01-01','1849-01-01','Romantic');
INSERT INTO composers(name,complete_name,birthdate,deathdate,epoch) VALUES ('Debussy','Claude Debussy','1862-01-01','1918-01-01','Late Romantic');
INSERT INTO composers(name,complete_name,birthdate,deathdate,epoch) VALUES ('Dvořák','Antonín Dvořák','1841-01-01','1904-01-01','Romantic');
INSERT INTO composers(name,complete_name,birthdate,deathdate,epoch) VALUES ('Gershwin','George Gershwin','1898-01-01','1937-01-01','20th Century');
INSERT INTO composers(name,complete_name,birthdate,deathdate,epoch) VALUES ('Handel','George Frideric Handel','1685-01-01','1759-01-01','Baroque');
INSERT INTO composers(name,complete_name,birthdate,deathdate,epoch) VALUES ('Haydn','Franz Joseph Haydn','1732-01-01','1809-01-01','Classical');
INSERT INTO composers(name,complete_name,birthdate,deathdate,epoch) VALUES ('Liszt','Franz Liszt','1811-01-01','1886-01-01','Romantic');
INSERT INTO composers(name,complete_name,birthdate,deathdate,epoch) VALUES ('Mahler','Gustav Mahler','1860-01-01','1911-01-01','Late Romantic');
INSERT INTO composers(name,complete_name,birthdate,deathdate,epoch) VALUES ('Mendelssohn','Felix Mendelssohn','1809-01-01','1847-01-01','Romantic');
INSERT INTO composers(name,complete_name,birthdate,deathdate,epoch) VALUES ('Mozart','Wolfgang Amadeus Mozart','1756-01-01','1791-01-01','Classical');
INSERT INTO composers(name,complete_name,birthdate,deathdate,epoch) VALUES ('Puccini','Giacomo Puccini','1858-01-01','1924-01-01','Late Romantic');
INSERT INTO composers(name,complete_name,birthdate,deathdate,epoch) VALUES ('Ravel','Maurice Ravel','1875-01-01','1937-01-01','Late Romantic');
INSERT INTO composers(name,complete_name,birthdate,deathdate,epoch) VALUES ('Schubert','Franz Schubert','1797-01-01','1828-01-01','Early Romantic');
INSERT INTO composers(name,complete_name,birthdate,deathdate,epoch) VALUES ('Schumann','Robert Schumann','1810-01-01','1856-01-01','Romantic');
INSERT INTO composers(name,complete_name,birthdate,deathdate,epoch) VALUES ('Strauss Jr','Johann Strauss Jr','1825-01-01','1899-01-01','Romantic');
INSERT INTO composers(name,complete_name,birthdate,deathdate,epoch) VALUES ('Stravinsky','Igor Stravinsky','1882-01-01','1971-01-01','20th Century');
INSERT INTO composers(name,complete_name,birthdate,deathdate,epoch) VALUES ('Tchaikovsky','Pyotr Ilyich Tchaikovsky','1840-01-01','1893-01-01','Romantic');
INSERT INTO composers(name,complete_name,birthdate,deathdate,epoch) VALUES ('Verdi','Giuseppe Verdi','1813-01-01','1901-01-01','Romantic');
INSERT INTO composers(name,complete_name,birthdate,deathdate,epoch) VALUES ('Vivaldi','Antonio Vivaldi','1678-01-01','1741-01-01','Baroque');
INSERT INTO composers(name,complete_name,birthdate,deathdate,epoch) VALUES ('Wagner','Richard Wagner','1813-01-01','1883-01-01','Romantic');