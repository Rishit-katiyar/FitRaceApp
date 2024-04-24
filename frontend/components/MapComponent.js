import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapComponent = ({ markers, initialRegion }) => {
    return (
        <View style={styles.container}>
            <MapView style={styles.map} initialRegion={initialRegion}>
                {markers.map((marker, index) => (
                    <Marker key={index} coordinate={marker.coordinate} title={marker.title} />
                ))}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

export default MapComponent;
