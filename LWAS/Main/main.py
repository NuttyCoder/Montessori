from fastapi import FastAPI
from routers import assessments, students, reports

app = FastAPI()

app.include_router(assessments.router)
app.include_router(students.router)
app.include_router(reports.router)

@app.get("/")
def read_root():
    return {"message": "Montessori Assessment API is running!"}
