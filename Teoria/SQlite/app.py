from flask import Flask, jsonify
import sqlite3

app = Flask(__name__)

def get_db_connection():
    conn = sqlite3.connect('imdb.db')
    conn.row_factory = sqlite3.Row
    return conn

