import React from "react";
import { Card, Surface, Text } from "react-native-paper";
import {
	StyleSheet,
	Image,
	Dimensions,
	TextInput,
	View,
	ScrollView,
	Keyboard,
	TouchableOpacity,
	KeyboardAvoidingView,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function PayCreanceCard({
	price,
	date,
	name,
	isRecharge,
	image,
}) {
	return (
		<Card elevation={2} onPress={() => {}} style={styles.card}>
			<Card.Content style={styles.container}>
				<Image
					style={styles.image}
					source={{ uri: image }}
					resizeMode="contain"
				/>
				<Surface>
					<Text style={styles.text}>
						Montant : <Text style={styles.textBold}>{price}DH</Text>
					</Text>
				</Surface>
				<Surface style={{ alignItems: "flex-end" }}>
					<Text style={styles.textBold}>{name}</Text>
				</Surface>
			</Card.Content>

			<Card.Content>
				<View style={styles.SectionStyle}>
					{isRecharge ? (
						<TextInput
							style={styles.inputStyle}
							onChangeText={(text) => onChangeText(text)}
							placeholder={"Numéro de téléphone à recharger"}
						/>
					) : (
						<Text style={styles.textBold2}>
							Saisir votre montant pour le confirmer
						</Text>
					)}

					<TextInput
						style={styles.inputStyle}
						onChangeText={(text) => onChangeText(text)}
						placeholder="Montant (DH)"
					/>
					<View style={styles.validate}>
						<Text
							style={styles.btn}
							onPress={() => {
								//hna appeler l methode bach t effectuer paiement
								alert(`Effectuer paiement de ${name} `);
							}}
						>
							Valider
						</Text>
					</View>
				</View>
			</Card.Content>
		</Card>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	card: {
		margin: 10,
		borderRadius: 15,
	},
	image: {
		width: width / 5,
		height: width / 10,
	},
	text: {
		color: "#00000090",
		fontSize: 13,
	},
	textBold: {
		color: "#00000090",
		fontSize: 13,
		fontWeight: "bold",
	},
	textBold2: {
		marginTop: 25,
		color: "#00000090",
		fontSize: 13,
		fontWeight: "bold",
	},
	inputStyle: {
		margin: 15,
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		borderRadius: 5,
		padding: 10,
	},
	btn: {
		color: "white",
		margin: 15,
		textAlign: "center",
		fontWeight: "bold",
		backgroundColor: "#eeaa36",
		padding: 10,
		borderRadius: 8,
		marginBottom: 20,
		width: width / 2,
	},

	validate: {
		display: "flex",
		alignItems: "flex-end",
	},
});
