import * as React from "react";
import { Input } from "@ui-kitten/components";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button, Layout } from "@ui-kitten/components";

const Homepage = () => {
  return (
    <>
      <View style={styles.container1}>
        <Text style={styles.titleText}> Hello,Ahmed</Text>
        <Text style={styles.Text1}> Developer</Text>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.stretch}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  Text1: {
    fontSize: 15,
    fontWeight: "bold",
  },
  container1: {
    marginBottom: 30,
    marginRight: 200,
  },
  container: {
    marginBottom: 400,
  },
  stretch: {
    width: 600,
    height: 100,
    resizeMode: "stretch",
  },
});

export default Homepage;
