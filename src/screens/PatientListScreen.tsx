import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../components/Input';
import { mockPatients, Patient } from '../data/mockPatients';
import { Ionicons } from '@expo/vector-icons';

const PatientListScreen = ({ navigation }: any) => {
    const [loading, setLoading] = useState(true);
    const [patients, setPatients] = useState<Patient[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            setPatients(mockPatients);
            setLoading(false);
        }, 1000);
    }, []);

    const filteredPatients = patients.filter(patient =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const renderItem = ({ item }: { item: Patient }) => (
        <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('PatientDetail', { patient: item })}
        >
            <Image source={{ uri: item.photo }} style={styles.avatar} />
            <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.details}>Hasta No: {item.id} | {item.age} Yaş</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#ccc" />
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#333" />
                </TouchableOpacity>
                <Text style={styles.title}>Hasta Listesi</Text>
            </View>

            <View style={styles.searchContainer}>
                <Input
                    placeholder="Hasta Ara..."
                    value={searchTerm}
                    onChangeText={setSearchTerm}
                    style={styles.searchInput}
                />
            </View>

            {loading ? (
                <ActivityIndicator size="large" color="#E30613" style={styles.loader} />
            ) : (
                <FlatList
                    data={filteredPatients}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.list}
                    ListEmptyComponent={
                        <View style={styles.emptyContainer}>
                            <Text style={styles.emptyText}>Hasta bulunamadı.</Text>
                        </View>
                    }
                />
            )}
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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    searchContainer: {
        padding: 15,
    },
    searchInput: {
        backgroundColor: '#fff',
    },
    list: {
        padding: 15,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 15,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 15,
    },
    info: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    details: {
        color: '#666',
        marginTop: 4,
    },
    loader: {
        marginTop: 50,
    },
    emptyContainer: {
        alignItems: 'center',
        marginTop: 50,
    },
    emptyText: {
        fontSize: 16,
        color: '#999',
    },
});

export default PatientListScreen;
