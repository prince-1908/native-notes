import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: "blue"
      },
      headerTitleStyle: {
        color: "white"
      },
      headerTitleAlign: "center",
      headerTintColor:"white"
    }}
  >
    <Stack.Screen name="index" options={{ title: "Home" }} />
    <Stack.Screen name="notes" options={{ headerTitle: "Notes" }} />
  </Stack>;
}
