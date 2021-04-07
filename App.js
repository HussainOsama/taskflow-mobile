import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Navbar from "./components/Navbar";
// import Drawer from "./components/Drawer";
import FooterTabs from "./components/FooterTabs";

//Tab
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

//Drawer
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
const Drawer = createDrawerNavigator();

import { DrawerContent } from "./components/DrawerContent";

import { ContactStackScreen } from "./screens/MainTapScreen";

import MainTapScreen from "./screens/MainTapScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={MainTapScreen} />
        <Drawer.Screen name="Contact" component={ContactStackScreen} />
        {/* <Drawer.Screen name="Contact" component={MainTapScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// <NavigationContainer>
//   <Tab.Navigator
//     screenOptions={({ route }) => ({
//       tabBarIcon: ({ focused, color, size }) => {
//         let iconName;

//         if (route.name === "Home") {
//           iconName = focused ? "ios-home" : "ios-home-outline";
//         } else if (route.name === "Compelete") {
//           iconName = focused
//             ? "ios-lock-closed"
//             : "ios-lock-closed-outline";
//         } else if (route.name === "UnCompelete") {
//           iconName = focused ? "ios-lock-open" : "ios-lock-open-outline";
//         }

//         // You can return any component that you like here!
//         return <Ionicons name={iconName} size={size} color={color} />;
//       },
//     })}
//     tabBarOptions={{
//       activeTintColor: "tomato",
//       inactiveTintColor: "gray",
//     }}
//   >
//     <Tab.Screen name="UnCompelete" component={UnCompeletedTask} />
//     <Tab.Screen name="Home" component={HomeScreen} />
//     <Tab.Screen name="Compelete" component={CompeletedTask} />
//   </Tab.Navigator>
// </NavigationContainer>
{
  /* <Drawer />; */
}
