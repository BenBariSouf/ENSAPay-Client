import React from "react";
import "react-native-gesture-handler";

// Import Navigators from React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import Screens
import SplashScreen from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";

import DrawerNavigationRoutes from "./screens/DrawerNavigationRoutes";
import ListeImpayes from "./screens/ListeImpayes";
import PayCreance from "./screens/PayCreance";
import UserProfile from "./screens/UserProfile";

const Stack = createStackNavigator();

const Auth = () => {
	// Stack Navigator for Login and Sign up Screen
	return (
		<Stack.Navigator initialRouteName="LoginScreen">
			<Stack.Screen
				name="LoginScreen"
				component={LoginScreen}
				options={{ headerShown: false }}
			/>

			{/* <Stack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{ headerShown: false }}
			/> */}

			{/* <Stack.Screen
				name="ListeImpayes"
				component={ListeImpayes}
				options={{ headerShown: false }}
			/> */}

			{/* <Stack.Screen
				name="PayCreance"
				component={PayCreance}
				options={{ headerShown: false }}
			/> */}

			{/* <Stack.Screen
				name="UserProfile"
				component={UserProfile}
				options={{ headerShown: false }}
			/> */}
		</Stack.Navigator>
	);
};

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="SplashScreen">
				{/* SplashScreen which will come once for 5 Seconds */}
				<Stack.Screen
					name="SplashScreen"
					component={SplashScreen}
					// Hiding header for Splash Screen
					options={{ headerShown: false }}
				/>
				{/* Auth Navigator: Include Login and Signup */}
				<Stack.Screen
					name="Auth"
					component={Auth}
					options={{ headerShown: false }}
				/>
				{/* Navigation Drawer as a landing page */}
				<Stack.Screen
					name="DrawerNavigationRoutes"
					component={DrawerNavigationRoutes}
					// Hiding header for Navigation Drawer
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
