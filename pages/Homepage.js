import * as React from "react";
import Card from "../components/Card";
import { View, Text, StyleSheet, Image } from "react-native";
import { Avatar, Layout } from "@ui-kitten/components";
import Swiper from "../components/Carousel";
import Swiper2 from "../components/Newsbox";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";

const Homepage = () => {
  return (
    <>
      <SafeAreaView style={styles.container7}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container1}>
            <Text style={styles.titleText}> Hello,Ahmed</Text>
            <Text style={styles.Text1}> Developer</Text>
          </View>

          <View style={styles.container5}>
            <Image
              style={styles.stretch}
              source={{
                uri:
                  "https://cdn.discordapp.com/attachments/827208573515333704/828370972280356954/4444.jpg",
              }}
            />
          </View>
          <View style={{ marginLeft: 50, marginTop: 20 }}>
            <Swiper />
          </View>
          <View style={{ marginTop: 300 }}>
            <Swiper2 />
          </View>
          <View style={{ marginTop: 100 }}>
            <Card />
          </View>
          <View style={styles.container6}>
            <Text style={styles.titleText}> Top Employee</Text>
          </View>
          <Layout style={styles.container3} level="1">
            <Avatar
              style={styles.avatar}
              shape="rounded"
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />

            <Avatar
              style={styles.avatar}
              shape="rounded"
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />

            <Avatar
              style={styles.avatar}
              shape="rounded"
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />

            <Avatar
              style={styles.avatar}
              shape="rounded"
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
            <View style={styles.container4}>
              <Text style={styles.titleText2}> Ahmed</Text>
              <Text style={styles.titleText2}> Ahmed</Text>
              <Text style={styles.titleText2}> Ahmed</Text>
              <Text style={styles.titleText2}> Ahmed</Text>
            </View>
          </Layout>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container7: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {},
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 40,
  },
  titleText2: {
    fontSize: 10,
    fontWeight: "bold",
    marginLeft: 23,
    paddingLeft: 27.5,
  },
  Text1: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 50,
  },
  container1: {
    marginTop: 30,
    marginBottom: 30,
    marginRight: 200,
  },
  container3: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  container4: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    marginLeft: 2,
  },
  avatar: {
    marginLeft: 51,
  },
  container6: {
    marginTop: 70,
    marginBottom: 20,
    marginLeft: 130,
  },
  stretch: {
    width: 400,
    height: 200,
    resizeMode: "stretch",
    marginLeft: 60,
    padding: 24,
    margin: 10,
    marginBottom: -260,
  },
});

export default Homepage;
