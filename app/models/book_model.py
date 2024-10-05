from app import db, cursor

class Book:
    def __init__(self, id, title, year, publisher, pages, isbn):
        self.id = id
        self.title = title
        self.year = year
        self.publisher = publisher
        self.pages = pages
        self.isbn = isbn

    @staticmethod
    def insert_book(title, year, publisher, pages, isbn):
        query = """
        INSERT INTO books (title, year, publisher, pages, isbn)
        VALUES (%s, %s, %s, %s, %s)
        """
        values = (title, year, publisher, pages, isbn)

        try:
            cursor.execute(query, values)
            db.commit()
            return cursor.lastrowid
        except mysql.connector.Error as err:
            print("Error inserting book:", err)
            db.rollback()  # Rollback in case of error
            return None

    @staticmethod
    def link_book_to_villain(book_id, villain_id):
        query = """
        INSERT INTO book_villain (book_id, villain_id)
        VALUES (%s, %s)
        """
        values = (book_id, villain_id)

        try:
            cursor.execute(query, values)
            db.commit()
        except mysql.connector.Error as err:
            print("Error linking book to villain:", err)
            db.rollback()  # Rollback in case of error

    @staticmethod
    def get_books():
        query = "SELECT * FROM books"

        try:
            cursor.execute(query)
            books = cursor.fetchall()
            return books
        except mysql.connector.Error as err:
            print("Error fetching books:", err)
            return []

    @staticmethod
    def get_book_by_id(book_id):
        query = "SELECT * FROM books WHERE id = %s"

        try:
            cursor.execute(query, (book_id,))
            book = cursor.fetchone()
            return book
        except mysql.connector.Error as err:
            print("Error fetching book:", err)
            return None

    @staticmethod
    def get_book_by_name(name):
        query = "SELECT * FROM books WHERE name = %s"

        try:
            cursor.execute(query, (name,))
            book = cursor.fetchone()
            return book
        except mysql.connector.Error as err:
            print("Error fetching book:", err)
            return None
