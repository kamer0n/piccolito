import { View } from "react-native";
import QuestionBox from "./components/QuestionBox";
import ChaseScreen from "./components/ChaseScreen";
import { ScoreProvider, useScore } from "./context/ScoreContext";
import { styles } from "./styles/style";

const QuizScreen = () => {
  return (
    <ScoreProvider>
      <View style={styles.GameScreen}>
        <ChaseScreen />
        <QuestionBox />
      </View>
    </ScoreProvider>
  );
};

export default QuizScreen;
