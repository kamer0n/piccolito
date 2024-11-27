import { Stack } from "expo-router";

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
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default RootLayout;
