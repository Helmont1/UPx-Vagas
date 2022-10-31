import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenA } from "../Screens/ScreenA";
import { ScreenB } from "../Screens/ScreenB";
import { SpotDetail } from "../Screens/SpotDetail";


const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen name="screenA" component={ScreenA} />
      <Screen name="screenB" component={ScreenB} />
      <Screen name="spotDetail" component={SpotDetail} />
    </Navigator>
  );
}
