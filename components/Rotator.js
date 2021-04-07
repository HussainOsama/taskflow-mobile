// React Native Rotate Image View Using Animation
// https://aboutreact.com/react-native-rotate-image-view-using-animation/

// import React in our code
import React from "react";
import icon from "../Media/tie.png";

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Animated,
  Easing,
  TouchableHighlight,
  Text,
} from "react-native";

const Rotator = () => {
  let rotateValueHolder = new Animated.Value(0);

  const startImageRotateFunction = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => startImageRotateFunction());
  };

  const rotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <>
      <View style={styles.container}>
        <Animated.Image
          style={{
            width: 200,
            height: 200,
            transform: [{ rotate: rotateData }],
          }}
          source={icon}
        />
        <TouchableHighlight
          onPress={startImageRotateFunction}
          style={styles.buttonStyle}
        >
          <Text style={styles.buttonTextStyle}>Start</Text>
        </TouchableHighlight>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C2C2C2",
  },
  titleText: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    padding: 20,
  },
  textStyle: {
    textAlign: "center",
    marginTop: 10,
  },
  buttonStyle: {
    fontSize: 16,
    color: "white",
    backgroundColor: "green",
    padding: 5,
    marginTop: 32,
    minWidth: 250,
  },
  buttonTextStyle: {
    padding: 5,
    color: "white",
    textAlign: "center",
  },
});

export default Rotator;
