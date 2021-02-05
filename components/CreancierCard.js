import React from "react";
import {
	View,
	Text,
	Button,
	Image,
	SafeAreaView,
	StyleSheet,
} from "react-native";

import { Card } from "react-native-shadow-cards";

export default function CreancierCard(props) {
	return (
		<View>
			<Card
				style={{
					padding: 10,
					margin: 10,
					borderRadius: 15,
				}}
			>
				<Image source={props.logo} style={styles.creancier} />
				<Text style={styles.title}>{props.title}</Text>

				<Text
					style={{
						color: "white",
						margin: 5,
						textAlign: "center",
						fontWeight: "bold",
						backgroundColor: props.color,
						padding: 7,
						borderRadius: 10,
					}}
					onPress={() => {
						alert(`GetForms dial ${props.creance1} `);
						console.log(125);
					}}
				>
					{props.creance1}
				</Text>

				{props.creance2 != null && (
					<Text
						style={{
							color: "white",
							margin: 5,
							textAlign: "center",
							fontWeight: "bold",
							backgroundColor: props.color,
							padding: 7,
							borderRadius: 10,
						}}
						onPress={() => {
							alert(`GetForms dial ${props.creance2} `);
						}}
					>
						{props.creance2}
					</Text>
				)}
			</Card>
		</View>
	);
}

const styles = StyleSheet.create({
	creancier: {
		width: "35%",
		height: "20%",
		padding: 20,
		marginBottom: 20,
	},

	title: {
		color: "black",
		textAlign: "center",
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 1,
		textTransform: "uppercase",
	},

	creance: {
		color: "black",
		textDecorationLine: "underline",
		margin: 10,
		textAlign: "center",
		fontWeight: "bold",
		backgroundColor: "red",
	},
});
