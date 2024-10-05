from flask import Flask, request, jsonify
from models.user_model import User

app = Flask(__name__)

@app.route('/users', methods=['GET'])
def list_users():
    users = User.get_all_users()
    return jsonify([user.__dict__ for user in users])  # Convert User objects to dictionaries

@app.route('/users', methods=['POST'])
def create_user():
    # Gather data from the form
    data = {
        'name': request.form.get('name'),
        'email': request.form.get('email')
    }

    # Validate the data (optional)
    if not data['name'] or not data['email']:
        return jsonify({'error': 'Name and email are required!'}), 400

    # Add user to the database
    User.add_user(data['name'], data['email'])

    return jsonify({'message': 'User created successfully!'}), 201

@app.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = User.get_user_by_id(user_id)
    return jsonify(user.__dict__) if user else ('', 404)

@app.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    # Gather data from the form
    data = {
        'name': request.form.get('name'),
        'email': request.form.get('email')
    }

    # Validate the data (optional)
    if not data['name'] or not data['email']:
        return jsonify({'error': 'Name and email are required!'}), 400

    # Update user in the database
    User.update_user(user_id, data['name'], data['email'])

    return jsonify({'message': 'User updated successfully!'})

@app.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    User.delete_user(user_id)
    return jsonify({'message': 'User deleted successfully!'})
