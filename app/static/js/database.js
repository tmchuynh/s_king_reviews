// Load environment variables from a .env file into process.env
require('dotenv').config();
// Importing axios for making HTTP requests
const axios = require('axios');
// Importing mysql2 library to handle MySQL database connections
const mysql = require('mysql2');

// Database configuration using environment variables for security
const dbConfig = {
  host: process.env.DB_HOST,          // Database host
  user: process.env.DB_USER,          // Database user
  password: process.env.DB_PASSWORD,  // Database password
  database: process.env.DB_NAME       // Database name
};

// Create a connection to the database using the configuration
const connection = mysql.createConnection(dbConfig);

// Function to fetch data from the villains API
const fetchVillainsFromAPI = async () => {
  const url = process.env.VILLAIN_API; // Get the villains API URL from environment variables
  try {
      // Make a GET request to the villains API
      const response = await axios.get(url);
      return response.data; // Return the villains data received from the API
  } catch (error) {
      // Log any errors encountered while fetching data
      console.error('Error fetching villains data from API:', error);
      throw error; // Re-throw the error for further handling
  }
};

// Function to fetch data from the books API
const fetchBooksFromAPI = async () => {
  const url = process.env.BOOK_API; // Get the books API URL from environment variables
  try {
      // Make a GET request to the books API
      const response = await axios.get(url);
      return response.data; // Return the books data received from the API
  } catch (error) {
      // Log any errors encountered while fetching data
      console.error('Error fetching books data from API:', error);
      throw error; // Re-throw the error for further handling
  }
};

// Function to find a villain by name in the database
const findVillain = (data) => {
    const query = "SELECT id FROM villains WHERE name = ? LIMIT 1"; // Query to select villain ID
    // Execute the query with the provided villain name
    connection.query(query, [data], (err, results) => {
        if (err) {
            // Log any errors encountered while querying
            console.error('Error finding data in database:', err);
        } else {
            // Log the found villain ID
            console.log('Found villain in database with ID:', results[0].id);
        }
    });
}

// Function to insert a villain into the MySQL database
const insertVillains = (data) => {
  const query = 'INSERT INTO villains (name, gender, status) VALUES (?, ?, ?)'; // SQL insert query
  // Use parameterized queries to avoid SQL injection vulnerabilities
  connection.query(query, [data.name, data.gender, data.status], (err, results) => {
      if (err) {
          // Log any errors encountered during the insert operation
          console.error('Error inserting data into database:', err);
      } else {
          // Log the ID of the inserted villain
          console.log('Inserted villain with ID:', results.insertId);
      }
  });
};

// Function to insert a book into the MySQL database
const insertBooks = (data) => {
  const query = 'INSERT INTO books (title, year, publisher, pages, isbn) VALUES (?, ?, ?, ?, ?)'; // SQL insert query
  // Execute the insert query for the book data
  connection.query(query, [data.Title, data.Year, data.Publisher, data.Pages, data.ISBN], (err, results) => {
      if (err) {
          // Log any errors encountered during the insert operation
          console.error('Error inserting data into database:', err);
      } else {
          // Log the ID of the inserted book
          console.log('Inserted book:', results.insertId);
      }
  });
};

// Function to create a relationship between a book and a villain in the database
const book_villain = (book_title, villain_name) => {
  const query = 'INSERT INTO book_villain (book_title, villain_name) VALUES (?, ?)'; // SQL insert query
  // Execute the insert query for the relationship
  connection.query(query, [book_title, villain_name], (err, results) => {
      if (err) {
          // Log any errors encountered during the insert operation
          console.error('Error inserting data into database:', err);
      } else {
          // Log the results of the relationship insert operation
          console.log('Insert relationship between book and villain for: ', results);
      }
  });
}

// Main function to orchestrate the fetching and inserting of data
const main = async () => {
  try {
        const villains = await fetchVillainsFromAPI(); // Fetch villains data from the API
        const data = villains.data; // Extract the data field from the response
        // Loop through each villain and insert them into the database
        data.forEach(villian => {
            if (villian.books.length > 0) { // Check if the villain has associated books
                insertVillains(villian); // Insert villain data
            }
        });

        const books = await fetchBooksFromAPI();  // Fetch books data from the API
        const data = books.data; // Extract the data field from the response
        // Loop through each book and insert them into the database
        data.forEach(book => {
          insertBooks(book); // Insert book data
          if (book.villains.length > 0) { // Check if the book has associated villains
            // Loop through each villain related to the book and create the relationship
            for (let i = 0; i < book.villains.length; i++) {
              let villain = book.villains[i].name; // Get the villain name
              book_villain(book.Title, villain); // Insert relationship between book and villain
            }
          }
        });

  } catch (error) {
      // Log any errors encountered during the main execution
      console.error('Error in main execution:', error);
  } finally {
      connection.end(); // Close the database connection after all operations
  }
};

// Run the main function to execute the script
main();
