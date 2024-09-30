import mysql.connector

def fetch_user_data():
    connection = mysql.connector.connect(
        host='localhost',
        user='root',
        password='',
        database='career_counselling'
    )

    cursor = connection.cursor()
    cursor.execute("SELECT * FROM Users")
    users = cursor.fetchall()

    cursor.close()
    connection.close()
    
    return users

def fetch_career_data():
    connection = mysql.connector.connect(
        host='localhost',
        user='root',
        password='',
        database='career_counselling'
    )

    cursor = connection.cursor()
    cursor.execute("SELECT * FROM Careers")
    careers = cursor.fetchall()

    cursor.close()
    connection.close()
    
    return careers
