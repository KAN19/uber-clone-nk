import {
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const RideOptionsCard = () => {
	const navigation = useNavigation();

	return (
		<SafeAreaView style={tw`bg-white flex-grow `}>
			<View>
				<TouchableOpacity
					onPress={() => navigation.goBack()}
					style={tw`absolute top-3 left-5 z-50 rounded-full p-3`}
				>
					<Icon name="chevron-left" type="fontawesome" />
				</TouchableOpacity>

				<Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
			</View>
		</SafeAreaView>
	);
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
