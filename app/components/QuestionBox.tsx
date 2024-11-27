import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { getRandomNumber, shuffle } from "../utils";
import csvFilePath from "../image/question_database_casual.json";
import { useScore } from "../context/ScoreContext";
import { styles } from "../styles/style";

type Question = {
  Question: string;
  Answer1: string;
  Answer2: string;
  Answer3: string;
  Answer4: string;
};

const QuestionBox = () => {
  const [question, setQuestion] = useState<Question | null>(null);

  if (!question) {
    newQuestion();
  }

  const questionText = question?.Question || "";
  let answers = [
    { answer: { answer: question?.Answer1 || "", correct: true } },
    { answer: { answer: question?.Answer2 || "", correct: false } },
    { answer: { answer: question?.Answer3 || "", correct: false } },
    { answer: { answer: question?.Answer4 || "", correct: false } },
  ];
  const questionToRemove = Math.floor(getRandomNumber(1, 4));
  answers.splice(questionToRemove, 1);
  shuffle(answers);

  return (
    <View style={{ margin: 10 }}>
      <QuestionView Question={questionText} />
      <AnswerBox
        Answer1={answers[0].answer}
        Answer2={answers[1].answer}
        Answer3={answers[2].answer}
        newQuestion={newQuestion}
      />
    </View>
  );

  function newQuestion() {
    setQuestion(
      csvFilePath[Math.floor(getRandomNumber(0, csvFilePath.length))]
    );
  }
};

const QuestionView = (props: any) => {
  return (
    <View style={styles.QuestionBox}>
      <Text style={styles.QuestionText}>{props.Question}</Text>
    </View>
  );
};

interface AnswerBoxProps {
  Answer1: { answer: string; correct: boolean };
  Answer2: { answer: string; correct: boolean };
  Answer3: { answer: string; correct: boolean };
  newQuestion: () => void;
}

const AnswerBox = (props: AnswerBoxProps) => {
  const [clicked, setClicked] = useState(false);
  let clickArray = [clicked, setClicked];

  const answers = [props.Answer1, props.Answer2, props.Answer3];

  return (
    <View style={styles.AnswerGrid}>
      {answers.map((answer, index) => (
        <AnswerField
          key={index}
          Answer={answer.answer}
          Correct={answer.correct}
          newQuestion={props.newQuestion}
          clickArray={clickArray}
        />
      ))}
    </View>
  );
};

const AnswerField = (props: any) => {
  console.log(props);
  const [bgColor, setBgColor] = useState("pink");
  const { updateScore } = useScore();
  let [clicked, setClicked] = props.clickArray;

  const handlePressIn = () => {
    if (!clicked) {
      setClicked(true);
      setBgColor(props.Correct ? "green" : "red");
      updateScore(props.Correct ? true : false);
      setTimeout(resetState, 1000);
    }
  };

  const resetState = () => {
    setBgColor("pink");
    props.newQuestion();
    setClicked(false);
  };

  return (
    <Pressable
      style={[styles.AnswerBox, { backgroundColor: bgColor }]}
      onPressIn={handlePressIn}
    >
      <View>
        <Text>{props.Answer}</Text>
      </View>
    </Pressable>
  );
};

export default QuestionBox;
