import React from "react";
import { View, Text } from "react-native";
import Profile from "../components/Profile";

export default function UserProfile() {
	return (
		<Profile
			nom="nom1"
			prenom="prénom1"
			userID="6686864535"
			email="mail@mail.com"
			telephone="065554145"
			solde="697"
			password="password123"
		/>
	);
}
