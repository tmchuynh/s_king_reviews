from app import db, cursor
import mysql.connector

class Villain:
    def __init__(self, id, name, gender, status):
        self.id = id
        self.name = name
        self.gender = gender
        self.status = status

    @staticmethod
    def get_all_villains():
        try:
            cursor.execute("SELECT * FROM villains")
            results = cursor.fetchall()
            return [Villain(**villain) for villain in results]  # Convert dicts to Villain objects
        except mysql.connector.Error as err:
            print("Error fetching villains:", err)
            return []

    @staticmethod
    def get_villain_by_id(villain_id):
        try:
            cursor.execute("SELECT * FROM villains WHERE id = %s", (villain_id,))
            results = cursor.fetchone()
            return Villain(**results) if results else None  # Convert dict to Villain object
        except mysql.connector.Error as err:
            print("Error fetching villain by ID:", err)
            return None

    @staticmethod
    def insert_villain(name, gender, status):
        try:
            query = """
            INSERT INTO villains (name, gender, status)
            VALUES (%s, %s, %s)
            """
            values = (name, gender, status)
            cursor.execute(query, values)
            db.commit()
            return cursor.lastrowid
        except mysql.connector.Error as err:
            print("An error occurred while inserting villain:", err)
            db.rollback()
            return None

    @staticmethod
    def update_villain(villain_id, name, gender, status):
        try:
            cursor.execute(
                "UPDATE villains SET name = %s, gender = %s, status = %s WHERE id = %s",
                (name, gender, status, villain_id)
            )
            db.commit()
        except mysql.connector.Error as err:
            print("Error updating villain:", err)
            db.rollback()  # Rollback in case of error

    @staticmethod
    def delete_villain(villain_id):
        try:
            cursor.execute("DELETE FROM villains WHERE id = %s", (villain_id,))
            db.commit()
        except mysql.connector.Error as err:
            print("Error deleting villain:", err)
            db.rollback()  # Rollback in case of error
