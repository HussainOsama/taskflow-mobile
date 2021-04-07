import * as React from "react";
import { Input } from "@ui-kitten/components";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button, Layout } from "@ui-kitten/components";
import icon from "../Media/tie.png";
// import Rotator from "../components/Rotator";
// import Cow from "../Media/giphy.gif";

const Homepage = () => {
  return (
    <>
      <View style={styles.container1}>
        <Text style={styles.titleText}> Hello,Ahmed</Text>
        <Text style={styles.Text1}> Developer</Text>
      </View>
      <View style={styles.container}>
        {/* <Rotator />
        <Image style={styles.stretch2} source={Cow} /> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 40,
  },
  Text1: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 50,
  },
  container1: {
    marginBottom: 30,
    marginRight: 200,
  },
  container: {
    marginBottom: 400,
  },
  stretch: {
    width: 200,
    height: 200,
    resizeMode: "stretch",
  },

  stretch2: {
    width: 100,
    height: 100,
    resizeMode: "stretch",
    marginLeft: 60,
    padding: 24,
    margin: 10,
    marginBottom: -260,
  },
});

export default Homepage;
