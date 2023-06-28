from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__, static_folder='client/build', static_url_path='')
CORS(app)

#app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:root@localhost:3306/your_database_name'
#app.config['MYSQL_HOST'] = 'localhost'  # Replace with your MySQL host
#app.config['MYSQL_USER'] = 'root'  # Replace with your MySQL username
#app.config['MYSQL_PASSWORD'] = 'Safi_123'  # Replace with your MySQL password
#app.config['MYSQL_DB'] = 'teambuilder'  # Replace with your MySQL database name

mysql = MySQL(app)

@app.route('/')
@cross_origin()
def serve():
    return app.send_from_directory(app.static_folder, 'index.html')

@app.route('/hello')
@cross_origin()
def hello():
    return 'Hello, World!'

#@app.route('/team')
#def get_user():
 #   cur = mysql.connection.cursor()
  #  cur.execute("SELECT * FROM builtteam WHERE id = 1")
  #  data = cur.fetchone()
  #  cur.close()
  #  print(data)
  #  if data:
   #     columns = [desc[0] for desc in cur.description]
    #    team_dict = dict(zip(columns, data))
    #    return json.dumps(team_dict, indent=4, sort_keys=True, default=str)
   # else:
    #    return 'User not found'

if __name__ == "__main__":
    app.run(debug=True)