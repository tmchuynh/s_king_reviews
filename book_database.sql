-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS `book_review` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
-- Switch to the `book_review` database
USE `book_review`;

-- Create the `books` table if it doesn't exist
CREATE TABLE IF NOT EXISTS `books` (
  `id` INT AUTO_INCREMENT NOT NULL,
  `title` VARCHAR(250) NOT NULL DEFAULT '',
  `year` INT NULL,
  `publisher` VARCHAR(250) NULL,
  `pages` INT NULL,
  `isbn` VARCHAR(20) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`, `isbn`),
  UNIQUE (`title`)
) ENGINE = InnoDB;

-- Create the `users` table if it doesn't exist
CREATE TABLE IF NOT EXISTS `users` (
  `id` INT AUTO_INCREMENT NOT NULL,
  `name` VARCHAR(250) NOT NULL DEFAULT '',
  `email` VARCHAR(250) NOT NULL DEFAULT '',
  `created_on` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_on` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT `PRIMARY` PRIMARY KEY (`id`, `email`)
) ENGINE = InnoDB;

-- Create the `villains` table if it doesn't exist
CREATE TABLE IF NOT EXISTS `villains` (
  `id` INT AUTO_INCREMENT NOT NULL,
  `name` VARCHAR(250) NOT NULL DEFAULT '',
  `gender` VARCHAR(250) NULL,
  `status` VARCHAR(250) NULL,
  PRIMARY KEY (`id`),
  UNIQUE (`name`)
) ENGINE = InnoDB;

-- Create the `book_reviews` table if it doesn't exist
CREATE TABLE IF NOT EXISTS `user_book_reviews` (
  `user_id` INT NOT NULL,
  `book_id` INT NOT NULL,
  `review` TEXT NULL,
  `rating` INT NULL,
  `created_on` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_on` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT `PRIMARY` PRIMARY KEY (`user_id`, `book_id`),
  CONSTRAINT `book_review_id` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `user_review_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- Create the `book_villain` table if it doesn't exist
CREATE TABLE IF NOT EXISTS `book_villain` (
  `book_title` VARCHAR(250) NOT NULL,
  `villain_name` VARCHAR(250) NOT NULL,
  PRIMARY KEY (`book_title`, `villain_name`),
  CONSTRAINT `book_title` FOREIGN KEY (`book_title`) REFERENCES `books` (`title`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `villain_name` FOREIGN KEY (`villain_name`) REFERENCES `villains` (`name`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- Create the `user_book_collection` table if it doesn't exist
CREATE TABLE IF NOT EXISTS `user_book_collection` (
  `user_id` INT NOT NULL,
  `book_id` INT NOT NULL,
  `added_on` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT `PRIMARY` PRIMARY KEY (`user_id`, `book_id`),
  CONSTRAINT `book_collection_id` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `user_collection_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE = InnoDB;
