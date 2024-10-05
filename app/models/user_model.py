from app import db, cursor

class User:
    def __init__(self):
        self.id = id
        self.name = name
        self.email = email
        self.created_on = created_on
        self.updated_on = updated_on

    @staticmethod
    def get_all_users():
        query = """SELECT * FROM users"""
        cursor.execute(query)
        results = cursor.fetchall()
        return results

    @staticmethod
    def get_user_by_id(user_id):
        connection = get_db_connection()
        cursor.execute(query, (user_id,))
        user = cursor.fetchone()
        return user # Return None if user not found

    @staticmethod
    def add_user(name, email):
        cursor.execute("INSERT INTO users (name, email) VALUES (%s, %s)", (name, email))
        db.commit()

    @staticmethod
    def update_user(user_id, name=None, email=None):
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

    @staticmethod
    def delete_user(user_id):
        cursor.execute("DELETE FROM users WHERE id = %s", (user_id,))
        db.commit()

    @staticmethod
    def add_book_to_user_collection(user_id, book_id):
        query = """
        INSERT INTO user_book_collection (user_id, book_id, added_on)
        VALUES (%s, %s, NOW())
        """
        values = (user_id, book_id)
        cursor.execute(query, values)
        db.commit()

    @staticmethod
    def add_user_review(user_id, book_id, review, rating):
        query = """
        INSERT INTO user_book_reviews (user_id, book_id, review, rating)
        VALUES (%s, %s, %s, %s)
        """
        values(user_id, book_id, review, rating)
        cursor.execute(query, values)
        db.commit()


    @staticmethod
    def get_books_for_user(user_id):
        # Retrieve books for a specific user
        cursor.execute("""
            SELECT b.* FROM books b
            JOIN user_books ub ON b.id = ub.book_id
            WHERE ub.user_id = %s
        """, (user_id,))
        results = cursor.fetchall()

        return results  # Convert dicts to Book objects
