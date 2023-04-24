import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

const CalculatorBtn = ({ text, onPress, disabled }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.box} disabled={disabled}>
      <View
        style={
          ["÷", "×", "-", "+"].includes(text)
            ? styles.button_exp
            : text === "="
            ? styles.button_eq
            : styles.button_number
        }
      >
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    width: "24.5%",
    margin: "0.25%",
  },
  button_number: {
    borderRadius: 15,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#252525",
  },
  button_exp: {
    borderRadius: 15,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "pink",
    marginLeft: 2,
  },
  button_eq: {
    borderRadius: 15,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "red",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: "50%",
    textAlign: "center",
  },
});

export default CalculatorBtn;
