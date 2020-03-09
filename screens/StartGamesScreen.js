import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";

const StartGameScreen = props => {
  const [enteredValues, setEnteredValue] = useState("");
  const [confirmed, setConfrimed] = useState(false);
  const [SelectNumber, setSelectedNumber] = useState();

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfrimed(false);
  };

  const confrimInputHandler = () => {
    const chooseNumber = parseInt(enteredValues);
    if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
       Alert.alert('Invalid number','Number Has to be a number between 1 and 99.',[{text:'Okay',style:'destructive',onPress:resetInputHandler}])
       return;
    }
    setEnteredValue("");
    setSelectedNumber(chooseNumber);
    setConfrimed(true);
  };

  let confrimedOutput;

  if (confirmed) {
    confrimedOutput = <Text>Choose Number: {SelectNumber}</Text>;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start A New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Selec a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValues}
          />
          <View style={styles.ButtonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={Colors.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confrim"
                onPress={confrimInputHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confrimedOutput}
      </View>
    </TouchableWithoutFeedback>
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
    alignItems: "center"
  },
  ButtonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  button: {
    width: 100
  },
  input: {
    width: 50,
    textAlign: "center"
  }
});

export default StartGameScreen;
