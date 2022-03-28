import { StyleSheet, Text, StatusBar, Image, View } from "react-native";
import React from "react";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";
import UberLogo from "../assets/uber-logo.png";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import NavFavorites from "../components/NavFavorites";

const HomeScreen = () => {
	const dispatch = useDispatch();

	return (
		<SafeAreaView style={tw`bg-white h-full`}>
			<View style={tw`p-5`}>
				<Image
					style={{ width: 100, height: 100, resizeMode: "contain" }}
					source={UberLogo}
				/>

				<GooglePlacesAutocomplete
					placeholder="Where from ?"
					styles={{
						container: {
							flex: 0,
						},
						textInput: {
							fontSize: 18,
						},
					}}
					onPress={(data, details = null) => {
						dispatch(
							setOrigin({
								location: { lat: 37.78825, lng: -122.4324 },
								description: data.description,
							})
							// setOrigin({
							// 	location: details.geometry.location,
							// 	description: data.description,
							// })
						);

						dispatch(setDestination(null));
					}}
					fetchDetails={true}
					enablePoweredByContainer={false}
					minLength={2}
					query={{
						key: GOOGLE_MAPS_APIKEY,
						language: "en",
					}}
					nearbyPlacesAPI="GooglePlacesSearch"
					debounce={400}
				/>
				<NavOptions />
				<NavFavorites />
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
