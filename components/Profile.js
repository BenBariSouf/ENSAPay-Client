import React from "react";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Image,
	ScrollView,
	TextInput,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function UserProfile({
	nom,
	prenom,
	userID,
	email,
	telephone,
	password,
	solde,
}) {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.titleBar}>
					<Ionicons name="ios-arrow-back" size={24} color="#52575D"></Ionicons>

					<Text style={styles.heading}>Mon profil</Text>
				</View>

				<View style={{ alignSelf: "center" }}>
					<View style={styles.profileImage}>
						<Image
							source={require("../assets/images/profile-pic.jpg")}
							style={styles.image}
							resizeMode="center"
						></Image>
					</View>
					<View style={styles.dm}>
						<MaterialIcons
							name="chat"
							size={18}
							color="#DFD8C8"
						></MaterialIcons>
					</View>
					<View style={styles.active}></View>
				</View>

				<View style={styles.infoContainer}>
					<Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
						{nom} {prenom}
					</Text>
				</View>

				<View style={styles.statsContainer}>
					<View style={styles.statsBox}>
						<Text
							style={[
								styles.text,
								{ fontSize: 15, marginTop: 5, fontWeight: "bold" },
							]}
						>
							Mon Solde
						</Text>
					</View>
					<View
						style={[
							styles.statsBox,
							{
								borderColor: "#D00D80",
								borderLeftWidth: 3,
								borderRadius: 2,
							},
						]}
					>
						<Text style={[styles.text, { fontSize: 24 }]}>{solde} DH</Text>
					</View>
				</View>

				<View style={{ marginTop: 32 }}>
					<Text style={styles.text2}>Email:</Text>
					<TextInput
						style={[styles.inputStyle, { backgroundColor: "#d3d3d3" }]}
						onChangeText={(text) => onChangeText(text)}
						value={email}
						editable={false}
					/>
					<Text style={styles.text2}>Numéro de téléphone:</Text>
					<TextInput
						style={[styles.inputStyle, { backgroundColor: "#d3d3d3" }]}
						onChangeText={(text) => onChangeText(text)}
						value={telephone}
						editable={false}
					/>
					<Text style={styles.text2}>Mot de passe:</Text>
					<TextInput
						style={styles.inputStyle}
						onChangeText={(text) => onChangeText(text)}
						value={password}
						editable={true}
					/>

					<Text
						style={{
							color: "white",
							marginRight: 80,
							marginLeft: 80,
							marginTop: 10,
							textAlign: "center",
							fontWeight: "bold",
							backgroundColor: "#D00D80",
							padding: 7,
							borderRadius: 6,
						}}
						onPress={() => {
							alert(`Update user ${userID} `);
						}}
					>
						Modifier mes données
					</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	text: {
		color: "#52575D",
	},
	image: {
		flex: 1,
		height: undefined,
		width: undefined,
	},
	titleBar: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 40,
		marginHorizontal: 16,
	},
	subText: {
		fontSize: 12,
		color: "#AEB5BC",
		textTransform: "uppercase",
		fontWeight: "bold",
	},
	heading: {
		fontWeight: "bold",
		fontSize: 16,
		textTransform: "uppercase",
	},
	profileImage: {
		width: 180,
		height: 180,
		borderRadius: 100,
		overflow: "hidden",
	},

	text2: {
		marginLeft: 30,
		fontWeight: "bold",
	},
	dm: {
		backgroundColor: "#41444B",
		position: "absolute",
		top: 20,
		width: 40,
		height: 40,
		borderRadius: 20,
		alignItems: "center",
		justifyContent: "center",
	},
	active: {
		backgroundColor: "#34FFB9",
		position: "absolute",
		bottom: 28,
		left: 20,
		padding: 4,
		height: 20,
		width: 20,
		borderRadius: 10,
	},
	inputStyle: {
		marginTop: 8,
		margin: 30,
		height: 40,
		borderColor: "gray",
		color: "#41444B",
		borderWidth: 1,
		borderRadius: 5,
		padding: 10,
		textAlign: "center",
	},
	add: {
		backgroundColor: "#41444B",
		position: "absolute",
		bottom: 0,
		right: 0,
		width: 60,
		height: 60,
		borderRadius: 30,
		alignItems: "center",
		justifyContent: "center",
	},
	infoContainer: {
		alignSelf: "center",
		alignItems: "center",
		marginTop: 16,
	},
	statsContainer: {
		flexDirection: "row",
		alignSelf: "center",
		marginTop: 32,
	},
	statsBox: {
		alignItems: "center",
		flex: 1,
	},
	mediaImageContainer: {
		width: 180,
		height: 200,
		borderRadius: 12,
		overflow: "hidden",
		marginHorizontal: 10,
	},
	mediaCount: {
		backgroundColor: "#41444B",
		position: "absolute",
		top: "50%",
		marginTop: -50,
		marginLeft: 30,
		width: 100,
		height: 100,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 12,
		shadowColor: "rgba(0, 0, 0, 0.38)",
		shadowOffset: { width: 0, height: 10 },
		shadowRadius: 20,
		shadowOpacity: 1,
	},
	recent: {
		marginLeft: 78,
		marginTop: 32,
		marginBottom: 6,
		fontSize: 10,
	},
	recentItem: {
		flexDirection: "row",
		alignItems: "flex-start",
		marginBottom: 16,
	},
	activityIndicator: {
		backgroundColor: "#CABFAB",
		padding: 4,
		height: 12,
		width: 12,
		borderRadius: 6,
		marginTop: 3,
		marginRight: 20,
	},
});
