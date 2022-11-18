import { ScreenA } from "../Screens/ScreenA";
import { ScreenB } from "../Screens/ScreenB";
import { SpotDetail } from "../Screens/SpotDetail";
import Scanner from "../Screens/Scanner";
import Login from "../Screens/Login";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {


  return (
    <Navigator>
      <Screen name="Login" component={Login} />
      <Screen name="Home" component={ScreenA} />
      <Screen name="Vagas" component={ScreenB}  />
      <Screen name="spotDetail" component={SpotDetail} />
      <Screen name="Scanner" component={Scanner} />
    </Navigator>
  );
}
