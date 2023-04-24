import { StyleSheet, Text, View } from "react-native";

const CalculatorScreen = ({ text }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: "80%",

    borderRadius: 15,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    marginBottom: 5,
  },
  text: {
    height: 50,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 50,
    textAlign: "right",
    color: "orange",
    backgroundColor: "#fff",
    padding: 0,
  },
});

export default CalculatorScreen;
