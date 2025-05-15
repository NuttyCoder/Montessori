from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Student(BaseModel):
    id: int
    name: str
    age: int
    progress: dict

@app.post("/submit_assessment/")
def submit_assessment(student: Student):
    return {"message": "Assessment recorded", "data": student.dict()}
