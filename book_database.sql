-- First, create the database (replace 'book_review' with your desired database name)
CREATE DATABASE IF NOT EXISTS book_review;
-- Switch to the newly created database
USE book_review;
-- Create the `villians` table
CREATE TABLE IF NOT EXISTS `villains` (
  `id` INT AUTO_INCREMENT NOT NULL,
  `name` VARCHAR(250) NOT NULL DEFAULT '',
  `gender` VARCHAR(250) NULL,
  `status` VARCHAR(250) NULL,
  PRIMARY KEY (`id`, `name`)
) ENGINE = InnoDB;
-- Create the `books` table
CREATE TABLE IF NOT EXISTS `books` (
  `id` INT AUTO_INCREMENT NOT NULL,
  `title` VARCHAR(250) NOT NULL DEFAULT '',
  `year` INT NULL,
  `publisher` VARCHAR(250) NULL,
  `pages` INT NULL,
  `isbn` INT NULL,
  PRIMARY KEY (`id`, `title`),
  CONSTRAINT villian FOREIGN KEY (name) REFERENCES villians(name)
) ENGINE = InnoDB;
-- Create the `users` table
CREATE TABLE IF NOT EXISTS `users` (
  `id` INT AUTO_INCREMENT NOT NULL,
  `name` VARCHAR(250) NOT NULL DEFAULT '',
  `email` VARCHAR(250) NULL,
  PRIMARY KEY (`id`, `name`),
  CONSTRAINT book FOREIGN KEY (id) REFERENCES books(id)
) ENGINE = InnoDB;
