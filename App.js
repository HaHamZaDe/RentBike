import React, { useState, useEffect } from "react";
import { firebase } from "./config";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import Login from "./src/Pages/Auth/Login";
import Register from "./src/Pages/Auth/Register";
import Home from "./src/Pages/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  const [userSessison, setUserSession] = useState();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUserSession(!!user);
    });
  }, []);

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userSessison ? (
          <Stack.Screen
            name="AuthScreen"
            component={AuthStack}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
