from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    date_of_birth = db.Column(db.Date, nullable=False)
    age = db.Column(db.Integer, nullable=False)
    gender = db.Column(db.String(20), nullable=False)
    
    # Mother/Guardian Information
    mother_address = db.Column(db.String(200), nullable=False)
    mother_phone = db.Column(db.String(20), nullable=False)
    mother_email = db.Column(db.String(120), nullable=False)
    
    # Father/Guardian Information
    father_address = db.Column(db.String(200), nullable=False)
    father_phone = db.Column(db.String(20), nullable=False)
    father_email = db.Column(db.String(120), nullable=False)

    def __repr__(self):
        return f'<User {self.username}>'

with app.app_context():
    db.drop_all()  # Clear existing tables
    db.create_all()  # Create fresh tables

@app.route('/')
def index():
    users = User.query.all()
    return render_template('index.html', users=users)

@app.route('/add_user', methods=['POST'])
def add_user():
    try:
        from datetime import datetime
        
        # Basic user information
        username = f"{request.form['First_Name']} {request.form['Last_Name']}"
        email = request.form['email']
        phone = request.form['phone']
        date_of_birth = datetime.strptime(request.form['date_of_birth'], '%Y-%m-%d').date()
        age = int(request.form['age'])
        gender = request.form['gender']
        
        # Parent 1 information
        mother_address = request.form['parent_address']
        mother_phone = request.form['parent_phone1']
        mother_work_phone = request.form['parent_phonework1']
        mother_employer = request.form['parent_work1']
        mother_email = request.form['parent_email1']
        
        # Parent 2 information
        father_address = request.form['parent_address2']
        father_phone = request.form['parent_phone2']
        father_work_phone = request.form['parent_phonework2']
        father_employer = request.form['parent_work2']
        father_email = request.form['parent_email2']
        
        new_user = User(
            username=username,
            email=email,
            date_of_birth=date_of_birth,
            age=age,
            gender=gender,
            mother_address=mother_address,
            mother_phone=mother_phone,
            mother_email=mother_email,
            father_address=father_address,
            father_phone=father_phone,
            father_email=father_email
        )
        
        db.session.add(new_user)
        db.session.commit()
        return redirect(url_for('index'))
    except Exception as e:
        db.session.rollback()
        return f"Error adding user: {str(e)}", 400

@app.route('/save_database')
def save_database():
    users = User.query.all()
    with open('database_export.txt', 'w') as f:
        f.write("User Database Export\n\n")
        for user in users:
            f.write(f"Username: {user.username}, Email: {user.email}\n")
    return redirect(url_for('index'))

@app.route('/print_database')
def print_database():
    import os
    users = User.query.all()
    with open('print_file.txt', 'w') as f:
        f.write("User Database\n\n")
        for user in users:
            f.write(f"Username: {user.username}, Email: {user.email}\n")
    os.system('lpr print_file.txt')  # Send to default printer
    return redirect(url_for('index'))

app.run(host='0.0.0.0', port=8080)
