import React, { useState, useEffect } from "react";
import { firebase } from "./config";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Screens
import Login from "./src/Pages/Auth/Login";
import Register from "./src/Pages/Auth/Register";
import Home from "./src/Pages/TabPages/Home";
import Profile from "./src/Pages/TabPages/Profile";

//Components
import TabBarIcon from "./src/Components/TabBarIcon";
import colors from "./src/styles/colors";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
  const TabPages = () => {
    return (
      <Tab.Navigator screenOptions={TabBarScreenOptions}>
        <Tab.Screen name="Home" component={Home} options={HomeOptions} />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={ProfileOptions}
        />
      </Tab.Navigator>
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
            name="TabPages"
            component={TabPages}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const TabBarScreenOptions = ({ route }) => ({
  tabBarShowLabel: false,
  tabBarInactiveBackgroundColor: colors.orange,
  tabBarActiveBackgroundColor:
    route.name === "Home"
      ? colors.yellow
      : route.name === "Profile"
      ? colors.yellow
      : "white",
});

const HomeOptions = () => ({
  headerShown: false,
  tabBarLabelStyle: {
    fontWeight: "bold",
    fontSize: 15,
  },
  tabBarIcon: ({ focused }) => <TabBarIcon name="home" focused={focused} />,
});

const ProfileOptions = () => ({
  headerShown: false,
  tabBarLabelStyle: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#3d342f",
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon name="account-circle" focused={focused} />
  ),
});
