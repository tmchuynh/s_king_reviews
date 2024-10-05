-- First, create the database (replace 'book_review' with your desired database name)
CREATE DATABASE IF NOT EXISTS book_review;
-- Switch to the newly created database
USE book_review;

-- Create the `villains` table
CREATE TABLE IF NOT EXISTS `villains` (
  `id` INT AUTO_INCREMENT NOT NULL,
  `name` VARCHAR(250) NOT NULL,
  `gender` VARCHAR(250) NULL,
  `status` VARCHAR(250) NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- Create the `books` table
CREATE TABLE IF NOT EXISTS `books` (
  `id` INT AUTO_INCREMENT NOT NULL,
  `title` VARCHAR(250) NOT NULL,
  `year` INT NULL,
  `publisher` VARCHAR(250) NULL,
  `pages` INT NULL,
  `isbn` VARCHAR(20) NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- Create the `book_villain` table for the many-to-many relationship between books and villains
CREATE TABLE IF NOT EXISTS `book_villain` (
  `book_id` INT NOT NULL,
  `villain_id` INT NOT NULL,
  PRIMARY KEY (`book_id`, `villain_id`),
  CONSTRAINT fk_book FOREIGN KEY (`book_id`) REFERENCES `books`(`id`) ON DELETE CASCADE,
  CONSTRAINT fk_villain FOREIGN KEY (`villain_id`) REFERENCES `villains`(`id`) ON DELETE CASCADE
) ENGINE = InnoDB;

-- Create the `users` table with created_on and updated_on timestamps
CREATE TABLE IF NOT EXISTS `users` (
  `id` INT AUTO_INCREMENT NOT NULL,
  `name` VARCHAR(250) NOT NULL,
  `email` VARCHAR(250) NULL,
  `created_on` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Automatically set on row creation
  `updated_on` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- Automatically updated on row update
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;


-- Create the `book_reviews` table for user reviews of books
CREATE TABLE IF NOT EXISTS `book_reviews` (
  `user_id` INT NOT NULL,
  `book_id` INT NOT NULL,
  `review` TEXT NULL,
  `rating` INT NULL,
  PRIMARY KEY (`user_id`, `book_id`),
  CONSTRAINT fk_user FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE,
  CONSTRAINT fk_book_review FOREIGN KEY (`book_id`) REFERENCES `books`(`id`) ON DELETE CASCADE
) ENGINE = InnoDB;

-- Create the `user_book_collection` table for users' book collections (many-to-many)
CREATE TABLE IF NOT EXISTS `user_book_collection` (
  `user_id` INT NOT NULL,
  `book_id` INT NOT NULL,
  `added_on` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`, `book_id`),
  CONSTRAINT fk_user_collection FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE,
  CONSTRAINT fk_book_collection FOREIGN KEY (`book_id`) REFERENCES `books`(`id`) ON DELETE CASCADE
) ENGINE = InnoDB;
