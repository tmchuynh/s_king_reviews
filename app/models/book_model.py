from . import get_db_connection, close_db_connection

class Book:
	def __init__(self):
		self.id = id
		self.title = title
		self.year = year
		self.pages = pages
		self.publisher = publisher
		self.isbn = isbn

	@staticmethod
	def get_all_books():
		connection = get_db_connection()
		cursor = connection.cursor(dictionary=True)

		cursor.execute("SELECT * FROM books")
		books = cursor.fetchall()

		cursor.close()
		close_db_connection(connection)

		return [Book(**book) for book in books]

	@staticmethod
	def get_book_by_id(book_id):
		connection = get_db_connection()
