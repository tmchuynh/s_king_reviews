from . import get_db_connection, close_db_connection

class User:
    def __init__(self, id, name, email, book_id):
        self.id = id
        self.name = name
        self.email = email
        self.book = book_id

    @staticmethod
    def get_all_users():
        connection = get_db_connection()
        cursor = connection.cursor()

        cursor.execute("SELECT * FROM users")
        users = cursor.fetchall()

        cursor.close()
        close_db_connection(connection)

        return [User(**user) for user in users]  # Convert dicts to User objects

    @staticmethod
    def get_user_by_id(user_id):
        connection = get_db_connection()
        cursor = connection.cursor()

        cursor.execute("SELECT * FROM users WHERE id = %s", (user_id,))
        user_data = cursor.fetchone()

        cursor.close()
        close_db_connection(connection)

        return User(**user_data) if user_data else None  # Return None if user not found

    @staticmethod
    def add_user(name, email):
        connection = get_db_connection()
        cursor = connection.cursor()

        cursor.execute("INSERT INTO users (name, email) VALUES (%s, %s)", (name, email))
        connection.commit()

        cursor.close()
        close_db_connection(connection)

    @staticmethod
    def update_user(user_id, name, email):
        connection = get_db_connection()
        cursor = connection.cursor()

        cursor.execute("UPDATE users SET name = %s, email = %s WHERE id = %s", (name, email, user_id))
        connection.commit()

        cursor.close()
        close_db_connection(connection)

    @staticmethod
    def delete_user(user_id):
        connection = get_db_connection()
        cursor = connection.cursor()

        cursor.execute("DELETE FROM users WHERE id = %s", (user_id,))
        connection.commit()

        cursor.close()
        close_db_connection(connection)

    @staticmethod
    def add_book_to_user(user_id, book_id):
        connection = get_db_connection()
        cursor = connection.cursor()

        # Here, we assume there is a user_books table to represent the many-to-many relationship
        cursor.execute("INSERT INTO user_books (user_id, book_id) VALUES (%s, %s)", (user_id, book_id))
        connection.commit()

        cursor.close()
        close_db_connection(connection)

    @staticmethod
    def get_books_for_user(user_id):
        connection = get_db_connection()
        cursor = connection.cursor()

        # Retrieve books for a specific user
        cursor.execute("""
            SELECT b.* FROM books b
            JOIN user_books ub ON b.id = ub.book_id
            WHERE ub.user_id = %s
        """, (user_id,))
        books = cursor.fetchall()

        cursor.close()
        close_db_connection(connection)

        return [Book(**book) for book in books]  # Convert dicts to Book objects
