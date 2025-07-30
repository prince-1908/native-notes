import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: "#6fc7ba"
      },
      headerTitleStyle: {
        color: "black"
      },
      headerTitleAlign: "center",
      headerTintColor:"black"
    }}
  >
    <Stack.Screen name="index" options={{ title: "Home" }} />
    <Stack.Screen name="notes" options={{ headerTitle: "Notes" }} />
  </Stack>;
}
