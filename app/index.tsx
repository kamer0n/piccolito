import { Pressable, View, Text } from "react-native";
import { styles } from "./styles/style";
import { router } from "expo-router";

const HomePage = () => {
  return (
    <View style={styles.GameScreen}>
      <Pressable
        onPress={() =>
          router.replace({
            pathname: "quizScreen",
            // params: { id: 2 },
          })
        }
      >
        <Text>it's a meeee</Text>
      </Pressable>
    </View>
  );
};

export default HomePage;
