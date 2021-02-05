import React, { SafeAreaView } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Surface } from "react-native-paper";
import PayCreanceCard from "../components/PayCreanceCard";

export default function PayCreance(props) {
	return (
		<Surface style={{ flex: 1, paddingTop: 50, backgroundColor: "#d3d3d3" }}>
			<View>
				<Text style={styles.heading}>Effectuer un paiement</Text>
			</View>
			<PayCreanceCard
				price={10}
				name="RECHARGE INWI"
				isRecharge={true} //ila kant creance une recharge => 3ti lhad propriété 'true', sinon mat3ti walou
				date="19/01/2021"
				transactionId="T1531"
				image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Inwi-Logo.png/250px-Inwi-Logo.png"
			/>

			{/* <PayCreanceCard
				price={140.39}
				name="REDAL ELEC"
				date="29/12/2020"
				transactionId="T254"
				image="https://media-exp1.licdn.com/dms/image/C511BAQFD_MZ6Chc1QQ/company-background_10000/0/1519797104021?e=2159024400&v=beta&t=HdXBYnrUjsfj-VMo3qouiCTE6dGVBkvhRdMQXFSMfps"
			/> */}
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
