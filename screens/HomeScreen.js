import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

import { ActivityIndicator, Surface } from "react-native-paper";

import MarocTelecom from "../assets/images/Maroc_telecom.png";
import Inwi from "../assets/images/Inwi-Logo.png";
import Redal from "../assets/images/redal-logo.png";

import CreancierCard from "../components/CreancierCard";

const HomeScreen = () => {
	// const serviceSlice = useSelector((state) => state.services);
	const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#d3d3da" }}>
			<View style={{ flex: 0.45, padding: 16 }}>
				<View
					style={{
						alignItems: "center",
					}}
				>
					<Text style={styles.heading}>Paiement de facture</Text>
					<Text style={styles.paiement}>Liste des créanciers</Text>
				</View>
				<CreancierCard
					logo={MarocTelecom}
					title="Iam Recharges"
					color="#ff820a"
					creance1="Produit Mobile Jawal"
					creance2="Produit Internet SIM"
				/>
				<CreancierCard
					logo={Inwi}
					title="Inwi"
					color="#841584"
					creance1="Reacharge Inwi"
				/>
				<CreancierCard
					logo={Redal}
					title="Redal"
					color="#8b0000"
					creance1="Facture Redal d'eau"
					creance2="Facture Redal d'éléctricité"
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	heading: {
		fontSize: 19,
		textAlign: "center",
		marginTop: 46,
	},

	paiement: {
		fontSize: 19,
		fontWeight: "bold",
		padding: 10,
		textTransform: "uppercase",
	},
});

export default HomeScreen;
