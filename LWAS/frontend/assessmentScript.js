import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const AssessmentScreen = () => {
  const [score, setScore] = useState(0);

  return (
    <View>
      <Text>Which shape matches this one? 🔵</Text>
      <Button title="🔵" onPress={() => setScore(score + 1)} />
      <Button title="🔺" onPress={() => setScore(score)} />
      <Text>Score: {score}</Text>
    </View>
  );
};

export default AssessmentScreen;
