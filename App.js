import React, { useState, useEffect } from "react";
import { firebase } from "./config";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Screens
import Login from "./src/Pages/Auth/Login";
import Register from "./src/Pages/Auth/Register";
import Home from "./src/Pages/HomePages/Home";
import Rent from "./src/Pages/TabPages/Rent";
import Detail from "./src/Pages/HomePages/Detail/Detail";

//Components
import TabBarIcon from "./src/Components/TabBarIcon";
import colors from "./src/styles/colors";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [userSessison, setUserSession] = useState();
  useEffect(() => {
    checkUserSession();

    firebase.auth().onAuthStateChanged(async (loggedIn) => {
      if (loggedIn) {
        setUserSession(true);
      }
    });
  }, []);

  const checkUserSession = async () => {
    try {
      const userSession = await AsyncStorage.getItem("userSession");
      setUserSession(userSession);
    } catch (error) {
      console.log({ error });
    }
  };

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    );
  };
  const HomeStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="AuthScreen" component={AuthStack} />
      </Stack.Navigator>
    );
  };
  const TabPages = () => {
    return (
      <Tab.Navigator screenOptions={TabBarScreenOptions}>
        <Tab.Screen
          name="HomePages"
          component={HomeStack}
          options={HomeOptions}
        />
        <Tab.Screen name="Rent" component={Rent} options={RentOptions} />
      </Tab.Navigator>
    );
  };

  return (
    <Provider store={store}>
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
          <Stack.Screen name="Rent" component={Rent} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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

const RentOptions = () => ({
  headerShown: false,
  tabBarLabelStyle: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#3d342f",
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon name="bike-scooter" focused={focused} />
  ),
});
