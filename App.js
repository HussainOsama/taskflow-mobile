import React from "react";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text,
} from "@ui-kitten/components";

import Signin from "./pages/Login";
import Homepage from "./pages/Homepage";
import Assign from "./pages/assignTask";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
const HomeScreen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    {/* <Signin /> */}
    {/* <Homepage /> */}
    <Assign />
  </Layout>
);
export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <HomeScreen />
    </ApplicationProvider>
  </>
);
