import React from 'react';
import { TextInput, StyleSheet, View, Text, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
    label?: string;
}

const Input: React.FC<InputProps> = ({ label, style, ...props }) => {
    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput
                style={[styles.input, style]}
                placeholderTextColor="#999"
                {...props}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        width: '100%',
    },
    label: {
        fontSize: 14,
        color: '#333',
        marginBottom: 5,
        fontWeight: '500',
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 15,
        fontSize: 16,
        color: '#333',
    },
});

export default Input;
