import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color="blue" size={16} />
          ),
          headerStyle: {
            backgroundColor: "#222222", // Set the header background color
            paddingBottom: 10,
          },
          headerTintColor: "#fff", // Set the header text color
        }}
      />
      <Tabs.Screen
        name="users/[id]"
        options={{
          headerTitle: "User Page",
          title: "User",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color="blue" size={16} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
