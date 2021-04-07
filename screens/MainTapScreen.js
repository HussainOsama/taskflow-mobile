import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import HomeScreen from "./HomeScreen";
import CompeletedTask from "./CompeletedTask";
import UnCompeletedTask from "./UnCompeletedTask";
import Ionicons from "react-native-vector-icons/Ionicons";

import { createStackNavigator } from "@react-navigation/stack";

const HomeStack = createStackNavigator();
const CompeletedTaskStack = createStackNavigator();

export const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <Ionicons.Button
              name="ios-menu"
              size={35}
              backgroundColor="#fff"
              onPress={() => navigation.openDrawer()}
              title="Info"
              color="#000"
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

export const CompeletedTaskStackScreen = ({ navigation }) => {
  return (
    <CompeletedTaskStack.Navigator>
      <CompeletedTaskStack.Screen
        name="CompeletedTask"
        component={CompeletedTask}
        options={{
          headerLeft: () => (
            <Ionicons.Button
              name="ios-menu"
              size={35}
              backgroundColor="#fff"
              onPress={() => navigation.openDrawer()}
              title="Info"
              color="#000"
            />
          ),
        }}
      />
    </CompeletedTaskStack.Navigator>
  );
};
