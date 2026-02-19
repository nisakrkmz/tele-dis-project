import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Button from '../components/Button';
import Card from '../components/Card';

const PhotoScreen = ({ navigation }: any) => {
    const [image, setImage] = useState<string | null>(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const takePhoto = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('İzin Gerekli', 'Kamera izni verilmedi.');
            return;
        }

        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#333" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Fotoğraflar</Text>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <Card style={styles.frame}>
                    {image ? (
                        <Image source={{ uri: image }} style={styles.image} />
                    ) : (
                        <View style={styles.placeholder}>
                            <Ionicons name="camera-outline" size={60} color="#ccc" />
                            <Text style={styles.placeholderText}>Fotoğraf Yok</Text>
                        </View>
                    )}
                </Card>

                <View style={styles.buttonContainer}>
                    <Button title="Galeriden Seç" onPress={pickImage} variant="secondary" />
                    <Button title="Fotoğraf Çek" onPress={takePhoto} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    backButton: {
        marginRight: 15,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    content: {
        padding: 20,
        alignItems: 'center',
    },
    frame: {
        width: '100%',
        aspectRatio: 4 / 3,
        padding: 5,
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    placeholder: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    placeholderText: {
        color: '#ccc',
        marginTop: 10,
        fontSize: 16,
    },
    buttonContainer: {
        width: '100%',
    },
});

export default PhotoScreen;
