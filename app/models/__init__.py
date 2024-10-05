import mysql.connector
import os
from flask import current_app
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Function to get a database connection
def get_db_connection():
    db_config = {
        'host': os.getenv('DB_HOST'),
        'user': os.getenv('DB_USER'),
        'password': os.getenv('DB_PASSWORD'),
        'database': os.getenv('DB_NAME')
    }
    connection = mysql.connector.connect(**db_config)
    return connection

# Function to close the connection
def close_db_connection(connection):
    if connection.is_connected():
        connection.close()
