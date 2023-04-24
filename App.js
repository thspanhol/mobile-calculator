import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import CalculatorBtn from "./assets/components/CalculatorBtn";
import CalculatorScreen from "./assets/components/CalculatorScreen";

export default function App() {
  const [expression, setExpression] = useState("");
  const [history, setHistory] = useState(["", "", ""]);

  const funcAu = (e) => {
    if (expression.length < 10) {
      setExpression(expression + e);
    }
  };

  const clear = () => setExpression("");
  const result = () => {
    if (
      expression.includes("÷") ||
      expression.includes("×") ||
      expression.includes("+") ||
      expression.includes("-")
    ) {
      const firstFilter = expression.replace("÷", "/");
      const secondFilter = firstFilter.replace("×", "*");
      let response =
        eval(secondFilter).toFixed(2).slice(-3) === ".00"
          ? eval(secondFilter).toFixed(2).slice(0, -3)
          : eval(secondFilter).toFixed(2);
      setHistory([...history, `${expression} = ${response}`]);
      setExpression(response);
    }
  };

  const array = ["7","8","9","÷","4","5","6","×","1","2","3","-","0",".","=","+",];

  return (
    <SafeAreaView style={styles.calculator}>
      <View style={styles.historyView}>
        {history.slice(-3).map((e) => (
          <Text style={styles.historyText}>{e}</Text>
        ))}
      </View>

      <CalculatorScreen text={expression} />

      <View style={styles.options}>
        {array.map((e) => (
          <CalculatorBtn
            text={e}
            key={e}
            onPress={e === "=" ? () => result() : () => funcAu(e)}
            disabled={
              ["÷", "×", "-", "+", ".", "="].includes(e) &&
              !["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(
                expression[expression.length - 1]
              )
            }
          />
        ))}

        <TouchableOpacity onPress={() => clear()} style={styles.clearBox}>
          <View style={styles.clearView}>
            <Text style={styles.clearText}>Clear</Text>
          </View>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  calculator: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  options: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "80%",
    justifyContent: "center",
  },
  clearBox: {
    width: "100%",
    margin: "0.25%",
  },
  clearView: {
    borderRadius: 15,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#252525",
  },
  clearText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 25,
    textAlign: "center",
  },
  historyView: {
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    paddingHorizontal: 10,
  },
  historyText: {
    fontSize: 25,
    marginRight: 35,
  },
  historyLess: {
    fontSize: 25,
    marginRight: 35,
    color: "orange",
  },
});
