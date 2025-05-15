from sqlalchemy import Column, Integer, String, ForeignKey, JSON, TIMESTAMP
from database import Base

class Student(Base):
    __tablename__ = "students"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    age = Column(Integer, nullable=False)
    learning_progress = Column(JSON, nullable=True)

class Assessment(Base):
    __tablename__ = "assessments"
    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey("students.id"))
    date = Column(TIMESTAMP)
    cognitive_score = Column(Integer)
    motor_score = Column(Integer)
    social_emotional_score = Column(Integer)
    teacher_notes = Column(String)
