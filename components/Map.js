import { View, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "twrnc";
import { useSelector } from "react-redux";
import { selectDestination, selectOrigin } from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";

const Map = () => {
	const origin = useSelector(selectOrigin);
	const destination = useSelector(selectDestination);
	const mapRef = useRef(null);

	useEffect(() => {
		if (!origin || !destination) return;

		mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
			edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
		});
	}, [origin, destination]);

	return (
		<MapView
			ref={mapRef}
			style={tw`flex-1`}
			mapType="mutedStandard"
			initialRegion={{
				latitude: 37.78825,
				longitude: -122.4324,
				// latitude: origin.location.lat,
				// longitude: origin.location.lng,
				latitudeDelta: 0.008,
				longitudeDelta: 0.008,
			}}
		>
			{origin && destination && (
				<MapViewDirections
					origin={origin.description}
					destination={destination.description}
					apikey={GOOGLE_MAPS_APIKEY}
					strokeWidth={3}
					strokeColor="black"
				/>
			)}
			<Marker
				coordinate={{
					latitude: 37.78825,
					longitude: -122.4324,
				}}
				title="Origin"
				description={"Description ne"}
				identifier="origin"
			/>

			{/* {origin?.location && (
				<Marker
					coordinate={{
						latitude: 37.78825,
						longitude: -122.4324,
					}}
				/>
			)} */}
			{/* 
			{destination?.location && (
				<Marker
					coordinate={{
						latitude: 40.78825,
						longitude: -122.4324,
					}}
					title="Desitination"
					description={"Description ne"}
					identifier="destination"
				/>
			)} */}
		</MapView>
	);
};

export default Map;
