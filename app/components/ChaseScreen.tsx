import { View, Text, Pressable, StyleSheet } from "react-native";
import { Link, router } from "expo-router";
import { useScore } from "../context/ScoreContext";

const ChaseScreen = () => {
  const { score, updateScore } = useScore();
  return (
    <View style={styles.ChaseScreen}>
      <View style={styles.ChaseScreenItem}>
        <Link href="users/1">Go to user 1</Link>
        <Text>{score}</Text>
      </View>
      <View style={styles.ChaseScreenItem}>
        <Pressable
          onPress={() =>
            router.push({
              pathname: "users/[id]",
              params: { id: 2 },
            })
          }
        >
          <Text>Go to user 2</Text>
        </Pressable>
        <Pressable onPress={() => updateScore(false, true)}>
          <Text>Reset Score</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default ChaseScreen;
