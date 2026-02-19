import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';

interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    loading?: boolean;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    title,
    onPress,
    variant = 'primary',
    loading = false,
    disabled = false
}) => {
    const getBackgroundColor = () => {
        if (disabled) return '#ccc';
        if (variant === 'primary') return '#E30613';
        if (variant === 'secondary') return '#333';
        return 'transparent';
    };

    const getTextColor = () => {
        if (variant === 'outline') return '#E30613';
        return '#fff';
    };

    return (
        <TouchableOpacity
            style={[
                styles.container,
                { backgroundColor: getBackgroundColor() },
                variant === 'outline' && styles.outlineButton
            ]}
            onPress={onPress}
            disabled={disabled || loading}
        >
            {loading ? (
                <ActivityIndicator color={getTextColor()} />
            ) : (
                <Text style={[styles.text, { color: getTextColor() }]}>{title}</Text>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        width: '100%',
    },
    outlineButton: {
        borderWidth: 1,
        borderColor: '#E30613',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Button;
