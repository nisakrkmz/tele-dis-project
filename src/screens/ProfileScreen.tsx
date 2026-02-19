import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Card from '../components/Card';
import Button from '../components/Button';

const ProfileScreen = ({ navigation }: any) => {
    const handleLogout = () => {
        Alert.alert(
            'Çıkış Yap',
            'Çıkış yapmak istediğinize emin misiniz?',
            [
                { text: 'İptal', style: 'cancel' },
                { text: 'Evet', onPress: () => navigation.replace('Login'), style: 'destructive' }
            ]
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#333" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Profilim</Text>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.profileHeader}>
                    <View style={styles.avatarContainer}>
                        <Ionicons name="person" size={60} color="#fff" />
                    </View>
                    <Text style={styles.name}>Dr. Ahmet Yılmaz</Text>
                    <Text style={styles.title}>Diş Hekimi</Text>
                </View>

                <Card style={styles.card}>
                    <ProfileItem icon="mail" label="E-mail" value="dr.ahmet@teledis.com" />
                    <ProfileItem icon="call" label="Telefon" value="+90 555 123 45 67" />
                    <ProfileItem icon="medkit" label="Sicil No" value="123456" />
                    <ProfileItem icon="location" label="Klinik" value="Merkez Diş Polikliniği" />
                </Card>

                <View style={styles.buttonContainer}>
                    <Button title="Ayarlar" onPress={() => Alert.alert('Bilgi', 'Ayarlar sayfası yapım aşamasında.')} variant="secondary" />
                    <Button title="Çıkış Yap" onPress={handleLogout} variant="outline" />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const ProfileItem = ({ icon, label, value }: { icon: any, label: string, value: string }) => (
    <View style={styles.itemContainer}>
        <View style={styles.iconBox}>
            <Ionicons name={icon} size={20} color="#E30613" />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
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
    profileHeader: {
        alignItems: 'center',
        marginBottom: 20,
    },
    avatarContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 3,
        borderColor: '#E30613',
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
    title: {
        fontSize: 16,
        color: '#666',
        marginTop: 5,
    },
    card: {
        padding: 15,
        marginBottom: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    iconBox: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FFF0F0',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
    },
    label: {
        fontSize: 12,
        color: '#999',
    },
    value: {
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
    },
    buttonContainer: {
        gap: 10,
    },
});

export default ProfileScreen;
