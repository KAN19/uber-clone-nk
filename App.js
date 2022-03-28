import { KeyboardAvoidingView, Platform } from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import MapScreen from "./screens/MapScreen";
import "react-native-gesture-handler";
import { TransitionPresets } from "@react-navigation/stack";

export default function App() {
	const Stack = createStackNavigator();

	return (
		<Provider store={store}>
			<NavigationContainer>
				<SafeAreaProvider>
					<KeyboardAvoidingView
						behavior={Platform.OS === "ios" ? "padding" : "height"}
						keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
						style={{ flex: 1 }}
					>
						<Stack.Navigator
							screenOptions={{
								// gestureDirection: "horizontal",
								gestureEnabled: true,
								...TransitionPresets.SlideFromRightIOS,
							}}
						>
							<Stack.Screen
								name="HomeScreen"
								component={HomeScreen}
								options={{
									headerShown: false,
								}}
							/>
							<Stack.Screen
								name="MapScreen"
								component={MapScreen}
								options={{
									headerShown: false,
								}}
							/>
						</Stack.Navigator>
					</KeyboardAvoidingView>

					{/* <HomeScreen /> */}
				</SafeAreaProvider>
			</NavigationContainer>
		</Provider>
	);
}
