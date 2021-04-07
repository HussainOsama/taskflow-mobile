import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navbar from "./components/Navbar";
import Drawer from "./components/Drawer";
import FooterTabs from "./components/FooterTabs";

export default function App() {
  return <FooterTabs />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
