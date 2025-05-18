from flask import Flask, jsonify
import sqlite3

app = Flask(__name__)

def get_db_connection():
    conn = sqlite3.connect('imdb.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/')
def index():
    return "API de Películas IMDB"

@app.route('/api/movies', methods=['GET'])
def get_movies():
    conn = get_db_connection()
    query = 'SELECT MovieID, Title, Year, Score, Votes FROM Movie LIMIT 10'
    result = conn.execute(query).fetchall()
    conn.close()
    return jsonify([dict(row) for row in result])

if __name__ == '__main__':
    app.run(debug=True)
