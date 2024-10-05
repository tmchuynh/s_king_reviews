from . import get_db_connection, close_db_connection

class User:
    def __init__(self, id, name, email):
        self.id = id
        self.name = name
        self.email = email

    @staticmethod
    def get_all_users():
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)

        cursor.execute("SELECT * FROM users")
        users = cursor.fetchall()

        cursor.close()
        close_db_connection(connection)

        return [User(**user) for user in users]  # Convert dicts to User objects

    @staticmethod
    def get_user_by_id(user_id):
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)

        cursor.execute("SELECT * FROM users WHERE id = %s", (user_id,))
        user_data = cursor.fetchone()

        cursor.close()
        close_db_connection(connection)

        return User(**user_data) if user_data else None  # Return None if user not found

    @staticmethod
    def get_user_by_name(name):
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)

        cursor.execute("SELECT * FROM users WHERE name = %s", (name,))
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
