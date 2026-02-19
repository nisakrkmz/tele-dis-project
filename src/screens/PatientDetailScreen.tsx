import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Card from '../components/Card';
import Button from '../components/Button';

const PatientDetailScreen = ({ route, navigation }: any) => {
    const { patient } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Hasta Detayı</Text>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.profileSection}>
                    <Image source={{ uri: patient.photo }} style={styles.avatar} />
                    <Text style={styles.name}>{patient.name}</Text>
                    <Text style={styles.subtext}>{patient.age} Yaşında, {patient.gender}</Text>
                    <Text style={styles.subtext}>{patient.city}</Text>
                </View>

                <View style={styles.actions}>
                    <ActionCard
                        title="Hasta Bilgileri"
                        icon="information-circle"
                        onPress={() => navigation.navigate('PatientInfo', { patient })}
                        color="#2196F3"
                    />
                    <ActionCard
                        title="Anamnez"
                        icon="document-text"
                        onPress={() => navigation.navigate('Anamnez', { patient })}
                        color="#FF9800"
                    />
                    <ActionCard
                        title="Fotoğraflar"
                        icon="images"
                        onPress={() => navigation.navigate('Photo', { patient })}
                        color="#9C27B0"
                    />
                    <ActionCard
                        title="Değerlendirme"
                        icon="medical"
                        onPress={() => navigation.navigate('Evaluation', { patient })}
                        color="#E30613"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const ActionCard = ({ title, icon, onPress, color }: any) => (
    <TouchableOpacity onPress={onPress} style={styles.actionItem}>
        <Card style={styles.card}>
            <Ionicons name={icon} size={32} color={color} />
            <Text style={styles.actionText}>{title}</Text>
        </Card>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    header: {
        backgroundColor: '#E30613',
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        marginRight: 15,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    content: {
        padding: 20,
    },
    profileSection: {
        alignItems: 'center',
        marginBottom: 30,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 4,
        borderColor: '#fff',
        marginBottom: 15,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    subtext: {
        fontSize: 16,
        color: '#666',
        marginTop: 5,
    },
    actions: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    actionItem: {
        width: '48%',
        marginBottom: 15,
    },
    card: {
        alignItems: 'center',
        padding: 20,
        height: 120,
        justifyContent: 'center',
    },
    actionText: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
});

export default PatientDetailScreen;
