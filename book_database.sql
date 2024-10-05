-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS `book_review` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Switch to the `book_review` database
USE `book_review`;

-- Create the `books` table if it doesn't exist
CREATE TABLE IF NOT EXISTS `books` ( 
  `id` INT AUTO_INCREMENT NOT NULL,
  `title` VARCHAR(250) NOT NULL,
  `year` INT NULL,
  `publisher` VARCHAR(250) NULL,
  `pages` INT NULL,
  `isbn` VARCHAR(20) NULL,
  CONSTRAINT `PRIMARY` PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- Create the `users` table if it doesn't exist
CREATE TABLE IF NOT EXISTS `users` ( 
  `id` INT AUTO_INCREMENT NOT NULL,
  `name` VARCHAR(250) NOT NULL,
  `email` VARCHAR(250) NULL,
  `created_on` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ,
  `updated_on` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT `PRIMARY` PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- Create the `villains` table if it doesn't exist
CREATE TABLE IF NOT EXISTS `villains` ( 
  `id` INT AUTO_INCREMENT NOT NULL,
  `name` VARCHAR(250) NOT NULL,
  `gender` VARCHAR(250) NULL,
  `status` VARCHAR(250) NULL,
  CONSTRAINT `PRIMARY` PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- Create the `book_reviews` table if it doesn't exist
CREATE TABLE IF NOT EXISTS `book_reviews` ( 
  `user_id` INT NOT NULL,
  `book_id` INT NOT NULL,
  `review` TEXT NULL,
  `rating` INT NULL,
  CONSTRAINT `PRIMARY` PRIMARY KEY (`user_id`, `book_id`),
  CONSTRAINT `fk_book_review` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- Create the `book_villain` table if it doesn't exist
CREATE TABLE IF NOT EXISTS `book_villain` ( 
  `book_id` INT NOT NULL,
  `villain_id` INT NOT NULL,
  CONSTRAINT `PRIMARY` PRIMARY KEY (`book_id`, `villain_id`),
  CONSTRAINT `fk_book` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `fk_villain` FOREIGN KEY (`villain_id`) REFERENCES `villains` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- Create the `user_book_collection` table if it doesn't exist
CREATE TABLE IF NOT EXISTS `user_book_collection` ( 
  `user_id` INT NOT NULL,
  `book_id` INT NOT NULL,
  `added_on` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT `PRIMARY` PRIMARY KEY (`user_id`, `book_id`),
  CONSTRAINT `fk_book_collection` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_collection` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE = InnoDB;
