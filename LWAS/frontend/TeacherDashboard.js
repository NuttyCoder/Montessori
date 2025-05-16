import React from "react";
import { View, Text } from "react-native";

const TeacherDashboard = ({ studentData }) => {
  return (
    <View>
      <Text>Progress Overview for {studentData.name}</Text>
      <Text>🧠 Cognitive Score: {studentData.cognitive_score}/10</Text>
      <Text>👐 Motor Skills: {studentData.motor_score}/10</Text>
      <Text>😊 Social Skills: {studentData.social_emotional_score}/10</Text>
    </View>
  );
};

export default TeacherDashboard;
