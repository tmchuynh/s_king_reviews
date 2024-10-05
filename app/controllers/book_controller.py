from flask import Flask, render_template, request, redirect, url_for
from models.book import Book

app = create_app()

@app.route('/add_book', methods=['POST'])
def add_book():
    title = request.form['title']
    year = request.form['year']
    publisher = request.form['publisher']
    pages = request.form['pages']
    isbn = request.form['isbn']

    book_id = Book.insert_book(title, year, publisher, pages, isbn)
    if book_id:
        print(f"Book inserted with ID: {book_id}")
        return redirect(url_for('book_list'))  # Redirect after success

    return "Error inserting book", 500

@app.route('/books')
def book_list():
    books = Book.get_books()
    return render_template('book_list.html', books=books)

if __name__ == '__main__':
    app.run()
