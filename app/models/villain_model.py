from app import db, cursor

class Villain:
    def __init__(self, id, name, gender, status):
        self.id = id
        self.name = name
        self.gender = gender
        self.status = status

    @staticmethod
    def get_all_villains():
        cursor.execute("SELECT * FROM villains")
        results = cursor.fetchall()
        return [Villain(**villain) for villain in results]  # Convert dicts to Villain objects

    @staticmethod
    def get_villain_by_id(villain_id):
        cursor.execute("SELECT * FROM villains WHERE id = %s", (villain_id,))
        results = cursor.fetchone()
        return Villain(**results) if results else None  # Convert dict to Villain object

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
        except Exception as e:
            print("An error occurred:", e)
            db.rollback()
            return None

    @staticmethod
    def update_villain(villain_id, name, gender, status):
        cursor.execute("UPDATE villains SET name = %s, gender = %s, status = %s WHERE id = %s",
                       (name, gender, status, villain_id))
        db.commit()

    @staticmethod
    def delete_villain(villain_id):
        cursor.execute("DELETE FROM villains WHERE id = %s", (villain_id,))
        db.commit()
