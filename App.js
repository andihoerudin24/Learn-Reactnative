import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGamesScreen";
export default function App() {
  return (
    <View style={styles.screnn}>
      <Header title="Guest a Number" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screnn: {
    flex: 1
  }
});
