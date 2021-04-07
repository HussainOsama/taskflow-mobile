import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import HomeScreen from "./HomeScreen";
import CompeletedTask from "./CompeletedTask";
import UnCompeletedTask from "./UnCompeletedTask";
import Ionicons from "react-native-vector-icons/Ionicons";

import { createStackNavigator } from "@react-navigation/stack";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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

export const UnCompeletedTaskStackScreen = ({ navigation }) => {
  return (
    <CompeletedTaskStack.Navigator>
      <CompeletedTaskStack.Screen
        name="UnCompeletedTask"
        component={UnCompeletedTask}
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

const Tab = createBottomTabNavigator();

export const MainTapScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStackScreen"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: "tomato" }}
    >
      <Tab.Screen
        name="UnCompeletedTaskStackScreen"
        component={UnCompeletedTaskStackScreen}
        options={{
          tabBarLabel: "UnCompleted",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-lock-open" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="HomeStackScreen"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="CompeletedTaskStackScreen"
        component={CompeletedTaskStackScreen}
        options={{
          tabBarLabel: "Completed",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-lock-closed" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTapScreen;
