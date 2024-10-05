require('dotenv').config();
const axios = require('axios');
const mysql = require('mysql2');

// Database configuration
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};

// Create a connection to the database
const connection = mysql.createConnection(dbConfig);

// Function to fetch data from the villains API
const fetchVillainsFromAPI = async () => {
  const url = process.env.VILLAIN_API; // Get the villains API URL
  try {
      const response = await axios.get(url);
      return response.data; // Return the villains data
  } catch (error) {
      console.error('Error fetching villains data from API:', error);
      throw error; // Re-throw the error for further handling
  }
};

// Function to fetch data from the books API
const fetchBooksFromAPI = async () => {
  const url = process.env.BOOK_API; // Get the books API URL
  try {
      const response = await axios.get(url);
      return response.data; // Return the books data
  } catch (error) {
      console.error('Error fetching books data from API:', error);
      throw error; // Re-throw the error for further handling
  }
};

const findVillain = (data) => {

}

// Function to insert data into the MySQL database
const insertVillains = (data) => {
  const query = 'INSERT INTO villains (name, gender, status) VALUES (?, ?, ?)';
    // Use parameterized queries to avoid SQL injection
    connection.query(query, [data.name, data.gender, data.status], (err, results) => {
      if (err) {
        console.error('Error inserting data into database:', err);
      } else {
        console.log('Inserted villain with ID:', results.insertId);
      }
    });
};


// Function to insert data into the MySQL database
const insertBooks = (data) => {
  const query = 'INSERT INTO books (title, year, publisher, pages, isbn) VALUES (?, ?, ?, ?, ?)';
    connection.query(query, [data.title, data.year, data.publisher, data.pages, data.isbn], (err, results) => {
        if (err) {
            console.error('Error inserting data into database:', err);
        } else {
            console.log('Inserted book:', results.insertId);
        }
    });
};

// Main function to orchestrate the fetch and insert
const main = async () => {
  try {
        // const villains = await fetchVillainsFromAPI(); // Fetch villains data
        // const data = villains.data;
        // data.forEach(villian => {
        //     if (villian.books.length > 0) {
        //         insertVillains(villian)
        //     }
        // })

        const books = await fetchBooksFromAPI();
        const data = books.data;
        data.forEach(book => {
            if (book.villains.length > 0) {
                for (let i = 0; i < book.villains.length; i++) {
                    let villain = book.villains[i].name;
                    findVillain(villain);
                }
            }
        })

  } catch (error) {
      console.error('Error in main execution:', error);
  } finally {
      connection.end(); // Close the database connection
  }
};

// Run the main function
main();
