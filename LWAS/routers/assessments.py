from fastapi import APIRouter, Depends
from schemas import AssessmentCreate
from models import Assessment
from database import SessionLocal

router = APIRouter()

@router.post("/submit_assessment/")
def submit_assessment(data: AssessmentCreate):
    db = SessionLocal()
    new_assessment = Assessment(**data.dict())
    db.add(new_assessment)
    db.commit()
    return {"message": "Assessment recorded successfully!"}
