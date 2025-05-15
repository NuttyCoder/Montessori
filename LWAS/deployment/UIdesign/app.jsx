import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const LearningGame = () => {
  const [progress, setProgress] = useState(0);

  return (
    <View>
      <Text>Can you match the shapes? Choose carefully!</Text>
      <Button title="✔️ Correct!" onPress={() => setProgress(progress + 1)} />
      <Button title="❌ Try Again!" onPress={() => setProgress(progress - 1)} />
      <Text>Progress: {progress}%</Text>
    </View>
  );
};

export default LearningGame;
