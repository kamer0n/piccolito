import { Stack, Router, router } from "expo-router";
import { Pressable, Text, View } from "react-native";

const RootLayout = () => {
  return (
    // <Stack>
    //   <Stack.Screen
    //     name="(tabs)"
    //     options={{
    //       headerShown: false,
    //     }}
    //   />
    // </Stack>
    // <Stack>
    //   <Stack.Screen
    //     name="index"
    //     options={{
    //       headerShown: false,
    //     }}
    //   />
    // </Stack>
    <Stack>
      <Stack.Screen name="index"></Stack.Screen>
    </Stack>
  );
};

export default RootLayout;
