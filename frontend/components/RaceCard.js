import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RaceCard = ({ race }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{race.title}</Text>
            <Text style={styles.description}>{race.description}</Text>
            <Text style={styles.createdBy}>Created by: {race.createdBy}</Text>
            {/* Add more race details here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
    },
    createdBy: {
        fontSize: 14,
        color: '#666',
    },
});

export default RaceCard;
