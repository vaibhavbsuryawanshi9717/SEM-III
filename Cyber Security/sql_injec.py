import mysql.connector
from mysql.connector import Error
import cgi

def connect():
    try:
        conn=mysql.connector.connect(host='localhost',database='PUCSD',user='root',password='mysql')
        if conn.is_connected():
            print('Connected to MySQL database')
    except Error as e:
        print(e)
 
    print("Content-type: text/html\n")
    form=cgi.FieldStorage()
    f_Name=form.getvalue('fname')
    l_Name=form.getvalue('lname')
    
    cursor=conn.cursor()

    cursor.execute("insert into user (fname,lname) values (%s,%s)",(f_Name,l_Name))
    conn.commit()
    conn.close()
 
if __name__ == '__main__':
    connect()
