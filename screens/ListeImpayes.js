import React, { SafeAreaView } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Surface } from "react-native-paper";
import HistoryItem from "../components/HistoryItem";

export default function ListeImpayes(props) {
	return (
		<Surface style={{ flex: 1, paddingTop: 50, backgroundColor: "#d3d3d3" }}>
			<View>
				<Text style={styles.heading}>Vos impayés</Text>
			</View>
			<HistoryItem
				price={10}
				name="RECHARGE INWI"
				date="19/01/2021"
				transactionId="T1531"
				image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Inwi-Logo.png/250px-Inwi-Logo.png"
			/>
			<HistoryItem
				price={250}
				name="FACTURE ADSL IAM"
				date="10/01/2021"
				transactionId="T623"
				image="http://www.iam.ma/ImagesMarocTelecom/Phototh%C3%A8que/Images-grandes/maroc-telecom-blanc-fr-grande.jpg"
			/>
			<HistoryItem
				price={140}
				name="FACTURE REDAL ELEC"
				date="29/12/2020"
				transactionId="T254"
				image="https://media-exp1.licdn.com/dms/image/C511BAQFD_MZ6Chc1QQ/company-background_10000/0/1519797104021?e=2159024400&v=beta&t=HdXBYnrUjsfj-VMo3qouiCTE6dGVBkvhRdMQXFSMfps"
			/>
			<HistoryItem
				price={85}
				name="FACTURE REDAL EAU"
				date="29/12/2020"
				transactionId="T2226"
				image="https://media-exp1.licdn.com/dms/image/C511BAQFD_MZ6Chc1QQ/company-background_10000/0/1519797104021?e=2159024400&v=beta&t=HdXBYnrUjsfj-VMo3qouiCTE6dGVBkvhRdMQXFSMfps"
			/>
		</Surface>
	);
}

const styles = StyleSheet.create({
	heading: {
		fontSize: 19,
		fontWeight: "bold",
		textTransform: "uppercase",
		textAlign: "center",
		marginTop: 46,
		marginBottom: 20,
	},

	paiement: {
		fontSize: 19,
		fontWeight: "bold",
		padding: 10,
		textTransform: "uppercase",
	},
});
