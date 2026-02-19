import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import PatientListScreen from '../screens/PatientListScreen';
import PatientDetailScreen from '../screens/PatientDetailScreen';
import PatientInfoScreen from '../screens/PatientInfoScreen';
import AnamnezScreen from '../screens/AnamnezScreen';
import PhotoScreen from '../screens/PhotoScreen';
import EvaluationScreen from '../screens/EvaluationScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="PatientList" component={PatientListScreen} />
                <Stack.Screen name="PatientDetail" component={PatientDetailScreen} />
                <Stack.Screen name="PatientInfo" component={PatientInfoScreen} />
                <Stack.Screen name="Anamnez" component={AnamnezScreen} />
                <Stack.Screen name="Photo" component={PhotoScreen} />
                <Stack.Screen name="Evaluation" component={EvaluationScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
