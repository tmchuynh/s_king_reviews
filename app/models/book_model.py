class Book:
    def __init__(self, id, title, year, publisher, pages, isbn, villian_id):
        self.id = id
        self.title = title
        self.year = year
        self.publisher = publisher
        self.pages = pages
        self.isbn = isbn
        self.villian = villian_id

    @staticmethod
    def insert_book(title, year, publisher, pages, isbn):
        query = """
        INSERT INTO books (title, year, publisher, pages, isbn)
        VALUES (%s, %s, %s, %s, %s)
        """
        values = (title, year, publisher, pages, isbn)
        cursor.execute(query, values)
        db.commit()
        return cursor.lastrowid

    @staticmethod
    def link_book_to_villain(book_id, villain_id):
        query = """
        INSERT INTO book_villain (book_id, villain_id)
        VALUES (%s, %s)
        """
        values = (book_id, villain_id)
        cursor.execute(query, values)
        db.commit()


