from app import db, cursor
import mysql.connector

class User:
    def __init__(self, id=None, name=None, email=None, created_on=None, updated_on=None):
        self.id = id
        self.name = name
        self.email = email
        self.created_on = created_on
        self.updated_on = updated_on

    @staticmethod
    def get_all_users():
        try:
            query = """SELECT * FROM users"""
            cursor.execute(query)
            results = cursor.fetchall()
            return results
        except mysql.connector.Error as err:
            print("Error fetching all users:", err)
            return []

    @staticmethod
    def get_user_by_id(user_id):
        try:
            query = "SELECT * FROM users WHERE id = %s"
            cursor.execute(query, (user_id,))
            user = cursor.fetchone()
            return user  # Return None if user not found
        except mysql.connector.Error as err:
            print("Error fetching user by ID:", err)
            return None

    @staticmethod
    def add_user(name, email):
        try:
            cursor.execute("INSERT INTO users (name, email) VALUES (%s, %s)", (name, email))
            db.commit()
            return cursor.lastrowid  # Return the ID of the newly inserted user
        except mysql.connector.Error as err:
            print("Error adding user:", err)
            db.rollback()  # Rollback in case of error
            return None

    @staticmethod
    def update_user(user_id, name=None, email=None):
        try:
            query = "UPDATE users SET "
            updates = []
            values = []

            if name:
                updates.append("name = %s")
                values.append(name)

            if email:
                updates.append("email = %s")
                values.append(email)

            query += ", ".join(updates) + ", updated_on = NOW() WHERE id = %s"
            values.append(user_id)

            cursor.execute(query, values)
            db.commit()
        except mysql.connector.Error as err:
            print("Error updating user:", err)
            db.rollback()  # Rollback in case of error

    @staticmethod
    def delete_user(user_id):
        try:
            cursor.execute("DELETE FROM users WHERE id = %s", (user_id,))
            db.commit()
        except mysql.connector.Error as err:
            print("Error deleting user:", err)
            db.rollback()  # Rollback in case of error

    @staticmethod
    def add_book_to_user_collection(user_id, book_id):
        try:
            query = """
            INSERT INTO user_book_collection (user_id, book_id, added_on)
            VALUES (%s, %s, NOW())
            """
            values = (user_id, book_id)
            cursor.execute(query, values)
            db.commit()
        except mysql.connector.Error as err:
            print("Error adding book to user collection:", err)
            db.rollback()  # Rollback in case of error

    @staticmethod
    def add_user_review(user_id, book_id, review, rating):
        try:
            query = """
            INSERT INTO user_book_reviews (user_id, book_id, review, rating)
            VALUES (%s, %s, %s, %s)
            """
            values = (user_id, book_id, review, rating)
            cursor.execute(query, values)
            db.commit()
        except mysql.connector.Error as err:
            print("Error adding user review:", err)
            db.rollback()  # Rollback in case of error

    @staticmethod
    def get_books_for_user(user_id):
        try:
            # Retrieve books for a specific user
            cursor.execute("""
                SELECT b.* FROM books b
                JOIN user_book_collection ub ON b.id = ub.book_id
                WHERE ub.user_id = %s
            """, (user_id,))
            results = cursor.fetchall()
            return results  # Convert dicts to Book objects
        except mysql.connector.Error as err:
            print("Error fetching books for user:", err)
            return []
