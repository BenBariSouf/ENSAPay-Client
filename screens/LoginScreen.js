import React, { useState, createRef } from "react";
import {
	StyleSheet,
	TextInput,
	View,
	Text,
	ScrollView,
	Image,
	Keyboard,
	TouchableOpacity,
	KeyboardAvoidingView,
	ImageBackground,
} from "react-native";

import AsyncStorage from "@react-native-community/async-storage";

import Loader from "./Loader";

import backgroundImage from "../assets/images/background.jpg";

const LoginScreen = ({ navigation }) => {
	const [userLogin, setUserLogin] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [errortext, setErrortext] = useState("");

	const passwordInputRef = createRef();

	const handleSubmitPress = () => {
		setErrortext("");
		if (!userLogin) {
			alert("Veulliez saisir un login: Champs obligatoire");
			return;
		}
		if (!userPassword) {
			alert("Veulliez saisir un mot de passe: Champs obligatoire");
			return;
		}
		setLoading(true);

		/**l9it had exemple bach t3ayet 3la API bach tdir login:   
		let dataToSend = { login: userLogin, password: userPassword };
		let formBody = [];
		for (let key in dataToSend) {
			let encodedKey = encodeURIComponent(key);
			let encodedValue = encodeURIComponent(dataToSend[key]);
			formBody.push(encodedKey + "=" + encodedValue);
		}
		formBody = formBody.join("&");

		fetch("http://API_DIAL_USERS", {
			method: "POST",
			body: formBody,
			headers: {
				//Header Defination
				"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
			},
		})
			.then((response) => response.json())
			.then((responseJson) => {
				//Hide Loader
				setLoading(false);
				console.log(responseJson);
				// If server response message same as Data Matched
				if (responseJson.status === "success") {
					AsyncStorage.setItem("user_id", responseJson.data.email);
					console.log(responseJson.data.email);
					navigation.replace("DrawerNavigationRoutes");
				} else {
					setErrortext(responseJson.msg);
					console.log("Please check your email id or password");
				}
			})
			.catch((error) => {
				//Hide Loader
				setLoading(false);
				console.error(error);
			});

            */
	};

	return (
		<ImageBackground source={backgroundImage} style={styles.image}>
			<View style={styles.mainBody}>
				<Loader loading={loading} />
				<ScrollView
					keyboardShouldPersistTaps="handled"
					contentContainerStyle={{
						flex: 1,
						justifyContent: "center",
						alignContent: "center",
					}}
				>
					<View>
						<KeyboardAvoidingView enabled>
							<View style={{ alignItems: "center" }}>
								<Image
									source={require("../assets/images/logo.png")}
									style={{
										width: "120%",
										height: 100,
										resizeMode: "contain",
										margin: 30,
									}}
								/>
							</View>
							<View style={styles.SectionStyle}>
								<TextInput
									style={styles.inputStyle}
									onChangeText={(userLogin) => setUserLogin(UserLogin)}
									placeholder="Votre Login"
									placeholderTextColor="#ffff"
									autoCapitalize="none"
									keyboardType="email-address"
									returnKeyType="next"
									onSubmitEditing={() =>
										passwordInputRef.current && passwordInputRef.current.focus()
									}
									underlineColorAndroid="#f000"
									blurOnSubmit={false}
								/>
							</View>
							<View style={styles.SectionStyle}>
								<TextInput
									style={styles.inputStyle}
									onChangeText={(UserPassword) => setUserPassword(UserPassword)}
									placeholder="Votre mot de passe" //12345
									placeholderTextColor="#ffff"
									keyboardType="default"
									ref={passwordInputRef}
									onSubmitEditing={Keyboard.dismiss}
									blurOnSubmit={false}
									secureTextEntry={true}
									underlineColorAndroid="#f000"
									returnKeyType="next"
								/>
							</View>
							{errortext != "" ? (
								<Text style={styles.errorTextStyle}>{errortext}</Text>
							) : null}
							<TouchableOpacity
								style={styles.buttonStyle}
								activeOpacity={0.5}
								onPress={handleSubmitPress}
							>
								<Text style={styles.buttonTextStyle}>S'authentifier</Text>
							</TouchableOpacity>
						</KeyboardAvoidingView>
					</View>
				</ScrollView>
			</View>
		</ImageBackground>
	);
};
export default LoginScreen;

const styles = StyleSheet.create({
	mainBody: {
		flex: 1,
		justifyContent: "center",
		alignContent: "center",
	},
	SectionStyle: {
		flexDirection: "row",
		height: 40,
		marginTop: 20,
		marginLeft: 35,
		marginRight: 35,
		margin: 10,
	},
	image: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
		opacity: 0.7,
	},
	buttonStyle: {
		backgroundColor: "#36558a",
		borderWidth: 0,
		color: "#FFFFFF",
		borderColor: "#7DE24E",
		height: 45,
		alignItems: "center",
		borderRadius: 30,
		marginLeft: 35,
		marginRight: 35,
		marginTop: 20,
		marginBottom: 25,
	},
	buttonTextStyle: {
		color: "#FFFFFF",
		paddingVertical: 10,
		fontSize: 16,
	},
	inputStyle: {
		flex: 1,
		color: "white",
		paddingLeft: 15,
		paddingRight: 15,
		borderWidth: 1,
		borderRadius: 30,
		borderColor: "#dadae8",
	},
	registerTextStyle: {
		color: "#FFFFFF",
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 14,
		alignSelf: "center",
		padding: 10,
	},
	errorTextStyle: {
		color: "red",
		textAlign: "center",
		fontSize: 14,
	},
});
