import * as React from "react";
import { Input } from "@ui-kitten/components";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button, Layout } from "@ui-kitten/components";

const Signin = () => {
  const [value, setValue] = React.useState("");
  const [value2, setValue2] = React.useState("");

  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={{
            uri:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
          }}
        />
      </View>
      <Text style={styles.titleText}> Login</Text>
      <Input
        placeholder="Enter your username"
        value={value}
        onChangeText={(nextValue) => setValue(nextValue)}
      />
      <Input
        placeholder="Enter Your password"
        value={value2}
        onChangeText={(nextValue2) => setValue2(nextValue2)}
        type="password"
      />
      <Layout style={styles.container} level="1">
        <Button style={styles.button} status="primary">
          Signin
        </Button>
      </Layout>
    </>
  );
};
const styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
  },
  logo: {
    width: 66,
    height: 58,
    marginBottom: 80,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 30,
  },
  button: {
    margin: 2,
  },
  controlContainer: {
    borderRadius: 4,
    margin: 2,
    padding: 6,
    justifyContent: "center",
    backgroundColor: "#3366FF",
  },
});
export default Signin;
