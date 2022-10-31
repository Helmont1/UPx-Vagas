import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenA } from "../Screens/ScreenA";
import { ScreenB } from "../Screens/ScreenB";
import { SpotDetail } from "../Screens/SpotDetail";
import Scanner from "../Screens/Scanner";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={ScreenA} />
      <Screen name="Vagas" component={ScreenB} />
      <Screen name="spotDetail" component={SpotDetail} />
      <Screen name="Scanner" component={Scanner} />
    </Navigator>
  );
}
