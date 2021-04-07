import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
} from "native-base";
const cards = [
  {
    text: "Card One",
    name: "One",
    image: require("../media/2222.jpg"),
  },
  {
    text: "Card One",
    name: "One",
    image: require("../media/2222.jpg"),
  },
  {
    text: "Card One",
    name: "One",
    image: require("../media/2222.jpg"),
  },
];
export default class DeckSwiperExample extends Component {
  render() {
    return (
      <View>
        <DeckSwiper
          dataSource={cards}
          renderItem={(item) => (
            <Card style={{ elevation: 3, width: 300 }}>
              <CardItem>
                <Left>
                  <Thumbnail source={item.image} />
                  <Body>
                    <Text>{item.text}</Text>
                    <Text note>NativeBase</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image
                  style={{ height: 100, width: 200 }}
                  source={item.image}
                />
              </CardItem>
              <CardItem></CardItem>
            </Card>
          )}
        />
      </View>
    );
  }
}
