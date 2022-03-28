import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import tw from "twrnc";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import NavFavorites from "./NavFavorites";
import { Icon } from "react-native-elements";

const NavigateCard = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();

	return (
		<SafeAreaView style={tw`bg-white flex-1`}>
			<Text style={tw`text-center py-5 text-xl`}>
				Good Morning, Nguyen Kiet
			</Text>
			<View style={tw`border-t border-gray-200 flex-shrink`}>
				<View>
					<GooglePlacesAutocomplete
						styles={toInputBoxStyles}
						placeholder="Where to?"
						fetchDetails={true}
						enablePoweredByContainer={false}
						minLength={2}
						query={{
							key: GOOGLE_MAPS_APIKEY,
							language: "en",
						}}
						onPress={(data, details = null) => {
							dispatch(
								setDestination({
									location: { lat: 37.78825, lng: -122.4324 },
									description: data.description,
								})
							);

							navigation.navigate("RideOptionsCard");
						}}
						nearbyPlacesAPI="GooglePlacesSearch"
						debounce={400}
					/>
				</View>
				<NavFavorites />
			</View>

			<View
				style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
			>
				<TouchableOpacity
					onPress={() => navigation.navigate("RideOptionsCard")}
					style={tw`flex flex-row bg-black justify-between w-24 px-4 py-3 rounded-full`}
				>
					<Icon
						name="car"
						type="font-awesome"
						color="white"
						size={16}
					/>
					<Text style={tw`text-white text-center`}>Rides</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}
				>
					<Icon
						name="fast-food-outline"
						type="ionicon"
						color="black"
						size={16}
					/>
					<Text style={tw`text-center`}>Eats</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		paddingTop: 20,
		flex: 0,
	},
	textInput: {
		backgroundColor: "#DDDDDF",
		borderRadius: 16,
		fontSize: 18,
	},
	textInputContainer: {
		paddingHorizontal: 20,
		paddingBottom: 0,
	},
});
