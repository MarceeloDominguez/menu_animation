import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Notifications from "../screens/Notifications";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ contentStyle: { backgroundColor: "transparent" } }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{ contentStyle: { backgroundColor: "transparent" } }}
      />
    </Stack.Navigator>
  );
}
