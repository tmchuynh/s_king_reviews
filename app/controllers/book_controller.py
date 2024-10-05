from flask import Flask, request, jsonify
from models.user_model import User

app = Flask(__name__)

@app.route('/users/<int:user_id>/books', methods=['POST'])
def add_book_for_user(user_id):
    data = {
        'title': request.form.get('title'),
        'year': request.form.get('year'),
        'publisher': request.form.get('publisher'),
        'pages': request.form.get('pages'),
        'isbn': request.form.get('isbn'),
    }
    
    # Add the book first
    Book.add_book(**data)
    
    # Assuming we want to get the last inserted book's ID
    connection = get_db_connection()
    cursor = connection.cursor()
    cursor.execute("SELECT LAST_INSERT_ID()")
    book_id = cursor.fetchone()[0]
    
    cursor.close()
    close_db_connection(connection)

    # Then associate it with the user
    User.add_book_to_user(user_id, book_id)

    return jsonify({'message': 'Book added to user collection successfully!'}), 201
