def generate_alert(student_data):
    if student_data["cognitive_score"] >= 9:
        return "🎯 New Milestone! Time for an advanced challenge!"
    elif student_data["motor_score"] < 4:
        return "⚠️ Hands-on reinforcement needed for fine motor skills."
    else:
        return "🔍 Steady learning progress!"
