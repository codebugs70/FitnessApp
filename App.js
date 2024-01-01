import WelcomeScreen from "./src/screens/WelcomeScreen";
import HomeScreen from "./src/screens/Home";
import ExerciseDetail from "./src/screens/ExerciseDetail";
import Exercise from "./src/screens/Exercise";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { LogBox } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen
          name="Exercise"
          options={{ presentation: "fullScreenModal" }}
          component={Exercise}
        />
        <Stack.Screen
          name="ExerciseDetail"
          options={{ presentation: "modal" }}
          component={ExerciseDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
