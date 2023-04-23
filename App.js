import { StatusBar as ExpoStatusBar, StatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/features/restaurants/screens/RestaurantsScreen";

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style='auto' />
    </>
  );
}
