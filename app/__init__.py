from flask import Flask
from dotenv import load_dotenv
import os
import secrets
import mysql.connector

load_dotenv()

# Global variables for db connection and cursor
db = None
cursor = None

def create_app():
    global db, cursor
    app = Flask(__name__, static_folder='static', template_folder='templates')

    # Initialize the database connection
    db = mysql.connector.connect(
        host=os.getenv("DB_HOST"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),
        database=os.getenv("DB_NAME")
    )

    cursor = db.cursor(dictionary=True)

    # Application configuration
    app.config['DEBUG'] = True
    app.secret_key = os.getenv('SECRET_KEY') or secrets.token_hex(48)

    return app
