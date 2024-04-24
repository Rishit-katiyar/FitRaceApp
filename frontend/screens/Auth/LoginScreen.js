import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/auth/login', { email, password });
            const token = response.data.token;
            // Save token to AsyncStorage or state
            // Navigate to the next screen
        } catch (error) {
            console.error('Login failed:', error.message);
        }
    };

    return (
        <View>
            <Text>Email:</Text>
            <TextInput value={email} onChangeText={setEmail} />
            <Text>Password:</Text>
            <TextInput secureTextEntry value={password} onChangeText={setPassword} />
            <Button title="Login" onPress={handleLogin} />
            <Button title="Don't have an account? Register" onPress={() => navigation.navigate('Register')} />
        </View>
    );
};

export default LoginScreen;
