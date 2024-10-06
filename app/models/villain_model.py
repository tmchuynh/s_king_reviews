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
    def get_villain_by_name(name):
        try:
            cursor.execute("SELECT * FROM villains WHERE name = %s", (name,))
            results = cursor.fetchone()
            return Villain(**results) if results else None  # Convert dict to Villain object
        except mysql.connector.Error as err:
            print("Error fetching villain by name:", err)
            return None
