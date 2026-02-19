import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Card from '../components/Card';

const PatientInfoScreen = ({ route, navigation }: any) => {
    const { patient } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#333" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Hasta Bilgileri</Text>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <Card style={styles.card}>
                    <InfoRow label="Ad Soyad" value={patient.name} />
                    <InfoRow label="Cinsiyet" value={patient.gender} />
                    <InfoRow label="Yaş" value={patient.age.toString()} />
                    <InfoRow label="Doğum Tarihi" value={patient.birthDate} />
                    <InfoRow label="Şehir" value={patient.city} />
                    <InfoRow label="Telefon" value="0555 555 55 55" />
                    <InfoRow label="E-mail" value="ornek@email.com" />
                </Card>
            </ScrollView>
        </SafeAreaView>
    );
};

const InfoRow = ({ label, value }: { label: string, value: string }) => (
    <View style={styles.row}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
    </View>
);

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
    },
    card: {
        padding: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    label: {
        fontSize: 16,
        color: '#666',
        fontWeight: '500',
    },
    value: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
    },
});

export default PatientInfoScreen;
