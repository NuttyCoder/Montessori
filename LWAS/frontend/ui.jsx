import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const StudentInsights = ({ student }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <Text>📚 {student.name} – Tap to view details</Text>
      </TouchableOpacity>
      {expanded && (
        <View>
          <Text>🧠 Cognitive Progress: {student.cognitive_score}</Text>
          <Text>👐 Motor Skills Growth: {student.motor_score}</Text>
          <Text>🔍 Assessment Breakdown: {student.last_test_summary}</Text>
        </View>
      )}
    </View>
  );
};

export default StudentInsights;
