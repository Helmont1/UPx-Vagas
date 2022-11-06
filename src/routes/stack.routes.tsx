import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenA } from "../Screens/ScreenA";
import { ScreenB } from "../Screens/ScreenB";
import { SpotDetail } from "../Screens/SpotDetail";
import Scanner from "../Screens/Scanner";
import React, { useEffect } from "react";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {

  // curl -X 'GET' \
  // 'https://upx4api2022.azurewebsites.net/spot' \
  // -H 'accept: application/json'  

  const [parkingSpots, setParkingSpots] = React.useState([]);


  


  return (
    <Navigator>
      <Screen name="Home" component={ScreenA} />
      <Screen name="Vagas" component={ScreenB}  />
      <Screen name="spotDetail" component={SpotDetail} />
      <Screen name="Scanner" component={Scanner} />
    </Navigator>
  );
}
