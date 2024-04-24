import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreateRaceScreen from '../screens/Race/CreateRaceScreen';
import JoinRaceScreen from '../screens/Race/JoinRaceScreen';
import RaceProgressScreen from '../screens/Race/RaceProgressScreen';
import UserProfileScreen from '../screens/Profile/UserProfileScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CreateRace" component={CreateRaceScreen} />
            <Stack.Screen name="JoinRace" component={JoinRaceScreen} />
            <Stack.Screen name="RaceProgress" component={RaceProgressScreen} />
            <Stack.Screen name="UserProfile" component={UserProfileScreen} />
            {/* Add more screens here */}
        </Stack.Navigator>
    );
};

export default MainNavigator;
