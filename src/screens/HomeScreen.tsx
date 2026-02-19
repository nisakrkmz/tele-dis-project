import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '../components/Card';
import { Ionicons } from '@expo/vector-icons';

interface MenuItem {
    id: string;
    title: string;
    icon: keyof typeof Ionicons.glyphMap;
    screen?: string;
    color: string;
}

const menuItems: MenuItem[] = [
    { id: '1', title: 'Hasta Listesi', icon: 'people', screen: 'PatientList', color: '#4CAF50' },
    { id: '2', title: 'Profilim', icon: 'person', color: '#2196F3' }, // Placeholder screens for now
    { id: '3', title: 'Geri Bildirim', icon: 'chatbubbles', color: '#FF9800' },
    { id: '4', title: 'Çıkış Yap', icon: 'log-out', screen: 'Login', color: '#F44336' },
];

const HomeScreen = ({ navigation }: any) => {
    const handlePress = (item: MenuItem) => {
        if (item.screen) {
            if (item.screen === 'Login') {
                navigation.replace('Login');
            } else {
                navigation.navigate(item.screen);
            }
        }
    };

    const renderItem = ({ item }: { item: MenuItem }) => (
        <TouchableOpacity onPress={() => handlePress(item)} style={styles.cardContainer}>
            <Card style={styles.card}>
                <Ionicons name={item.icon} size={40} color={item.color} />
                <Text style={styles.cardText}>{item.title}</Text>
            </Card>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Hoş Geldiniz, Dr. Hekim</Text>
                <Text style={styles.subHeaderText}>Bugün ne yapmak istersiniz?</Text>
            </View>

            <FlatList
                data={menuItems}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={styles.grid}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    header: {
        padding: 20,
        backgroundColor: '#E30613',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    subHeaderText: {
        fontSize: 16,
        color: '#rgba(255,255,255,0.8)',
        marginTop: 5,
    },
    grid: {
        padding: 10,
    },
    cardContainer: {
        flex: 1,
        margin: 10,
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        height: 150,
    },
    cardText: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
});

export default HomeScreen;
