import { SafeAreaProvider } from "react-native-safe-area-context";
import CustomModalScreen from "./components/CustomModal";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return(
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headersShown: false,
            tabBarActiveTintColor: '#000',
            tab
          }}
        >
          
      <CustomModalSreen animation="slide" themeColor="#2196F3" />
      <CustomModalSreen animation="fade" themeColor="#4CAF50" />
      <CustomModalSreen animation="none" themeColor="#FF9800" />
      </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}