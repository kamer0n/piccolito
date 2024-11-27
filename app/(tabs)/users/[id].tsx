import { useLocalSearchParams } from "expo-router";
import { Image, Text, View } from "react-native";

const violet = require("../../image/washed violet.jpg");
const violet2 = require("../../image/eepy.jpeg");

const UserPage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>User Page - {id}</Text>
      {id == "1" ? (
        <Image
          source={violet}
          style={{
            width: "60%",
            height: undefined,
            aspectRatio: 1,
          }}
        />
      ) : (
        <Image
          source={violet2}
          style={{
            width: "60%",
            height: undefined,
            aspectRatio: 1,
          }}
        />
      )}
    </View>
  );
};

export default UserPage;
