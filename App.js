import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import Signin from "./pages/Login";
import Homepage from "./pages/Homepage";
import Karavetta from "./pages/Karavetta";
import Completed from "./pages/Completed";
const HomeScreen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Completed />
    {/* <Karavetta />
    <Signin />
    <Homepage /> */}
  </Layout>
);
export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <HomeScreen />
  </ApplicationProvider>
);
