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

// Function to insert data into the MySQL database
const insertVillains = (data) => {
  const query = 'INSERT INTO villians (name, gender, status) VALUES (data.name, data.gender, data.status)';
  data.forEach(book => {
      const { name, gender, status } = book;
      connection.query(query, [name, gender, status], (err, results) => {
          if (err) {
              console.error('Error inserting data into database:', err);
          } else {
              console.log('Inserted villian:', results.insertId);
          }
      });
  });
};

// Function to insert data into the MySQL database
const insertBooks = (data, villains) => {
	for (let i = 0; i < villains.length; i++) {
		const query = 'SELECT * FROM villains'
	}
  const query = 'INSERT INTO books (title, year, publisher, pages, isbn) VALUES (data.Title, data.Year, data.Publisher, data.Pages, data.ISBN)';
  data.forEach(book => {
      const { title, year, publisher, pages, isbn } = book;
      connection.query(query, [title, year, publisher, pages, isbn], (err, results) => {
          if (err) {
              console.error('Error inserting data into database:', err);
          } else {
              console.log('Inserted book:', results.insertId);
          }
      });
  });
};

// Main function to orchestrate the fetch and insert
const main = async () => {
  try {
		const villains = await fetchVillainsFromAPI(); // Fetch villains data
		console.log(villains.data[5])
		for (let i = 0; i < villains.length; i++) {
			if (villains.data[i].books.length > 0) {
				insertVillains(data[i])
			}
		}

		const books = await fetchBooksFromAPI(); // Fetch books data
		for (let i = 0; i < books.length; i++) {
			let villains = []
			if (books.data[i].villains.length > 0) {
				for (let j = 0; j < books.data[i].villains; j++) {
					villains.push(books.data[i].villains[j].name);
					insertBooks(books.data[i], villains)
				}
			}
		}
  } catch (error) {
      console.error('Error in main execution:', error);
  } finally {
      connection.end(); // Close the database connection
  }
};

// Run the main function
main();
