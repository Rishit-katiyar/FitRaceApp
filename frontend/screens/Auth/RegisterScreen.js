import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const RegisterScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            await axios.post('http://localhost:3000/api/auth/register', { username, email, password });
            // Handle successful registration
        } catch (error) {
            console.error('Registration failed:', error.message);
        }
    };

    return (
        <View>
            <Text>Username:</Text>
            <TextInput value={username} onChangeText={setUsername} />
            <Text>Email:</Text>
            <TextInput value={email} onChangeText={setEmail} />
            <Text>Password:</Text>
            <TextInput secureTextEntry value={password} onChangeText={setPassword} />
            <Button title="Register" onPress={handleRegister} />
            <Button title="Already have an account? Login" onPress={() => navigation.navigate('Login')} />
        </View>
    );
};

export default RegisterScreen;
