import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
//import Rotator from "../components/Rotator";
import Cow from "../Media/giphy.gif";
import icon from "../Media/tie.png";
import { Animated, Easing } from "react-native";

spinValue = new Animated.Value(0);
Animated.loop(
  Animated.timing(this.spinValue, {
    toValue: 1,
    duration: 1000,
    easing: Easing.linear,
    useNativeDriver: true,
  })
).start();
// Next, interpolate beginning and end values (in this case 0 and 1)
const spin = this.spinValue.interpolate({
  inputRange: [0, 1],
  outputRange: ["0deg", "360deg"],
});
const Karavetta = () => {
  return (
    <>
      <View style={styles.container1}>
        <Text style={styles.titleText}>Karavetta VOL.2.0</Text>
      </View>
      <Animated.View>
        <Animated.Image
          style={{ transform: [{ rotate: spin }] }}
          style={styles.stretch}
          source={icon}
        />
      </Animated.View>
      <View style={styles.container}>
        <Image style={styles.stretch2} source={Cow} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 100,
  },
  Text1: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 50,
  },
  container1: {
    marginTop: 10,

    marginRight: 200,
  },
  container: {
    marginBottom: 400,
  },
  stretch: {
    width: 100,
    marginTop: 500,

    height: 100,
    resizeMode: "stretch",
  },

  stretch2: {
    width: 150,
    height: 150,
    resizeMode: "stretch",
    marginLeft: 60,
    padding: 24,
    margin: 10,
    marginBottom: 20,
  },
});

export default Karavetta;
