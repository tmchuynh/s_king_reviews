from . import get_db_connection, close_db_connection

class Book:
    def __init__(self, id, title, year, publisher, pages, isbn, villian_id):
        self.id = id
        self.title = title
        self.year = year
        self.publisher = publisher
        self.pages = pages
        self.isbn = isbn
        self.villian_id = villian_id

    @staticmethod
    def get_all_books():
        connection = get_db_connection()
        cursor = connection.cursor()

        cursor.execute("SELECT * FROM books")
        books = cursor.fetchall()

        cursor.close()
        close_db_connection(connection)

        return [Book(**book) for book in books]  # Convert dicts to Book objects

    @staticmethod
    def get_book_by_id(book_id):
        connection = get_db_connection()
        cursor = connection.cursor()

        cursor.execute("SELECT * FROM books WHERE id = %s", (book_id,))
        book_data = cursor.fetchone()

        cursor.close()
        close_db_connection(connection)

        return Book(**book_data) if book_data else None  # Return None if book not found

    @staticmethod
    def add_book(title, year, publisher, pages, isbn, villian_id):
        connection = get_db_connection()
        cursor = connection.cursor()

        cursor.execute("INSERT INTO books (title, year, publisher, pages, isbn, villian_id) VALUES (%s, %s, %s, %s, %s, %s)",
                       (title, year, publisher, pages, isbn, villian_id))
        connection.commit()

        cursor.close()
        close_db_connection(connection)

    @staticmethod
    def update_book(book_id, title, year, publisher, pages, isbn, villian_id):
        connection = get_db_connection()
        cursor = connection.cursor()

        cursor.execute("UPDATE books SET title = %s, year = %s, publisher = %s, pages = %s, isbn = %s, villian_id = %s WHERE id = %s",
                       (title, year, publisher, pages, isbn, villian_id, book_id))
        connection.commit()

        cursor.close()
        close_db_connection(connection)

    @staticmethod
    def delete_book(book_id):
        connection = get_db_connection()
        cursor = connection.cursor()

        cursor.execute("DELETE FROM books WHERE id = %s", (book_id,))
        connection.commit()

        cursor.close()
        close_db_connection(connection)
