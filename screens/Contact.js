import React from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";

export default function Contact() {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  const styles = StyleSheet.create({
    input: {
      height: 300,
      width: 300,
      borderRadius: 15,
      margin: 12,
      borderWidth: 1,
    },
  });

  const sendMessage = () => {
    alert(text);
  };

  return (
    <View style={{ flex: 1, marginTop: 30, alignItems: "center" }}>
      <Image
        style={{ width: 200, height: 200 }}
        source={require("../assets/Logoo_1.png")}
      />
      <Text style={{ fontWeight: "bold" }}>Contact Your Supervisor:</Text>
      <Text style={{ fontWeight: "bold", fontSize: "30" }}>Hussain Asad</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        // value={number}
        placeholder=""
        keyboardType="numeric"
        multiline={true}
      />
      <Button title="Send Message" onPress={() => sendMessage()} />
    </View>
  );
}
