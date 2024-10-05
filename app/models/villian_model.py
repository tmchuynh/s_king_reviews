from . import get_db_connection, close_db_connection

class Villian:
    def __init__(self, id, name, gender, status):
        self.id = id
        self.name = name
        self.gender = gender
        self.status = status

    @staticmethod
    def get_all_villians():
        connection = get_db_connection()
        cursor = connection.cursor()

        cursor.execute("SELECT * FROM villians")
        villians = cursor.fetchall()

        cursor.close()
        close_db_connection(connection)

        return [Villian(**villian) for villian in villians]  # Convert dicts to Villian objects

    @staticmethod
    def get_villian_by_id(villian_id):
        connection = get_db_connection()
        cursor = connection.cursor()

        cursor.execute("SELECT * FROM villians WHERE id = %s", (villian_id,))
        villian_data = cursor.fetchone()

        cursor.close()
        close_db_connection(connection)

        return Villian(**villian_data) if villian_data else None  # Return None if villian not found

    @staticmethod
    def insert_villain(name, gender, status):
        query = """
        INSERT INTO villains (name, gender, status)
        VALUES (%s, %s, %s)
        """
        values = (name, gender, status)
        cursor.execute(query, values)
        db.commit()
        return cursor.lastrowid


    @staticmethod
    def update_villian(villian_id, name, gender, status):
        connection = get_db_connection()
        cursor = connection.cursor()

        cursor.execute("UPDATE villians SET name = %s, gender = %s, status = %s WHERE id = %s",
                       (name, gender, status, villian_id))
        connection.commit()

        cursor.close()
        close_db_connection(connection)

    @staticmethod
    def delete_villian(villian_id):
        connection = get_db_connection()
        cursor = connection.cursor()

        cursor.execute("DELETE FROM villians WHERE id = %s", (villian_id,))
        connection.commit()

        cursor.close()
        close_db_connection(connection)
