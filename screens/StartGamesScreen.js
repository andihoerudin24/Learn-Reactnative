import React from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start A New Game!</Text>
      <View style={styles.inputContainer}>
        <Text>Selec a Number</Text>
        <TextInput />
        <View style={styles.ButtonContainer}>
          <Button title="Reset" onPress={() => {}} />
          <Button title="Confrim" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 8,
    padding: 20,
    borderBottomLeftRadius: 10
  },
  ButtonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15
  }
});

export default StartGameScreen;
