import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  QuestionText: {
    // flex: 1,
    // flexDirection: "row",
    // flexWrap: "wrap",
    // justifyContent: "center",
    textAlign: "center",
    fontSize: 20,
  },
  QuestionBox: {
    backgroundColor: "red",
    margin: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 3,
    width: "100%",
  },
  GameScreen: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#3b3b3b",
  },
  ChaseScreen: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  ChaseScreenItem: {
    width: "45%",
    borderColor: "black",
    borderWidth: 3,
    height: "100%",
    margin: 5,
  },

  AnswerGrid: {
    // flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  AnswerBox: {
    width: "100%",
    height: 100,
    backgroundColor: "red",

    borderColor: "black",
    borderWidth: 3,
    margin: 1,
    // alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  AnswerBoxText: {
    // textAlign: "center",
  },
});
