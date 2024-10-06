from app import db, cursor
import mysql.connector

class Book:
    def __init__(self, id, title, year, publisher, pages, isbn):
        self.id = id
        self.title = title
        self.year = year
        self.publisher = publisher
        self.pages = pages
        self.isbn = isbn

    @staticmethod
    def get_all_books():
        query = "SELECT * FROM books"

        try:
            cursor.execute(query)
            results = cursor.fetchall()
            return [Book(**book) for book in results]  # Convert dicts to Book objects
        except mysql.connector.Error as err:
            print("Error fetching books:", err)
            return []

    @staticmethod
    def get_book_by_id(book_id):
        query = "SELECT * FROM books WHERE id = %s"

        try:
            cursor.execute(query, (book_id,))
            result = cursor.fetchone()
            return Book(**result) if result else None  # Convert dict to Book object
        except mysql.connector.Error as err:
            print("Error fetching book:", err)
            return None

    @staticmethod
    def get_book_by_title(title):
        query = "SELECT * FROM books WHERE title = %s"

        try:
            cursor.execute(query, (title,))
            result = cursor.fetchone()
            return Book(**result) if result else None  # Convert dict to Book object
        except mysql.connector.Error as err:
            print("Error fetching book:", err)
            return None

    @staticmethod
    def get_book_by_isbn(isbn):
        query = "SELECT * FROM books WHERE isbn = %s"

        try:
            cursor.execute(query, (isbn,))
            result = cursor.fetchone()
            return Book(**result) if result else None  # Convert dict to Book object
        except mysql.connector.Error as err:
            print("Error fetching book:", err)
            return None

    @staticmethod
    def get_book_villains(book_id):
        query = """
            SELECT * from books
            JOIN book_villain ON books.title = book_villain.book_title
            WHERE books.id = %s
        """
        try:
            cursor.execute(query, (book_id,))
            result = cursor.fetchall()
            return [Book(**result) if result else None]
        except mysql.connector.Error as err:
            print("Error fetching villains:", err)
            return None
