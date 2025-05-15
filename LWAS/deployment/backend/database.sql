CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    learning_progress JSONB
);

CREATE TABLE assessments (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id),
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    cognitive_score INT,
    motor_score INT,
    social_emotional_score INT,
    teacher_notes TEXT
);

CREATE TABLE reports (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id),
    period VARCHAR(20),
    strengths TEXT,
    areas_of_improvement TEXT,
    recommendations TEXT
);
