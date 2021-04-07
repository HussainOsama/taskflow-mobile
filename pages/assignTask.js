import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import {
  Datepicker,
  Layout,
  Icon,
  IndexPath,
  Select,
  SelectItem,
  Button,
  Input,
} from "@ui-kitten/components";
const CalendarIcon = (props) => <Icon {...props} name="calendar" />;

const useInputState = (initialValue = "") => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};
const Assign = () => {
  const [date, setDate] = React.useState(new Date());
  const [date2, setDate2] = React.useState(new Date());
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const [selectedIndex2, setSelectedIndex2] = React.useState(new IndexPath(0));

  const multilineInputState = useInputState();
  return (
    <>
      <Text style={styles.titleText}> Assign Task</Text>
      <Layout style={styles.container} level="1">
        <Datepicker
          label="Label"
          caption="Caption"
          placeholder="Pick Date"
          date={date}
          onSelect={(nextDate) => setDate(nextDate)}
          accessoryRight={CalendarIcon}
        />
      </Layout>
      <Layout style={styles.container} level="1">
        <Datepicker
          label="Label"
          caption="Caption"
          placeholder="Pick Date"
          date={date2}
          onSelect={(nextDate) => setDate2(nextDate)}
          accessoryRight={CalendarIcon}
        />
      </Layout>
      <Layout style={styles.container2} level="1">
        <Select
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}
        >
          <SelectItem title="Option 1" />
          <SelectItem title="Option 2" />
          <SelectItem title="Option 3" />
        </Select>
      </Layout>
      <Layout style={styles.container2} level="1">
        <Select
          selectedIndex={selectedIndex2}
          onSelect={(index) => setSelectedIndex2(index)}
        >
          <SelectItem title="Option 1" />
          <SelectItem title="Option 2" />
          <SelectItem title="Option 3" />
        </Select>
      </Layout>

      <Input
        multiline={true}
        textStyle={{ minHeight: 64 }}
        placeholder="Multiline"
        {...multilineInputState}
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
  input: {
    marginVertical: 2,
  },
  logo: {
    width: 66,
    height: 58,
    marginBottom: 80,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 6,
  },
  container2: {
    minHeight: 128,
    width: 250,
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
export default Assign;
