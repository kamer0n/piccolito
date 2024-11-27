import { Pressable, View, Text } from "react-native";
import { styles } from "./styles/style";
import { router } from "expo-router";

const HomePage = () => {
  return (
    <View style={styles.GameScreen}>
      <Pressable
        onPress={() =>
          router.push({
            pathname: "quizScreen",
            // params: { id: 2 },
          })
        }
      >
        <Text>it's a me</Text>
      </Pressable>
    </View>
  );
};

export default HomePage;
