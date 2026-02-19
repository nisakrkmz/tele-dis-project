import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Card from '../components/Card';

const AnamnezScreen = ({ route, navigation }: any) => {
    const { patient } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#333" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Anamnez</Text>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <Card style={styles.card}>
                    <Text style={styles.label}>Tıbbi Geçmiş:</Text>
                    <Text style={styles.text}>
                        Hastanın genel sağlık durumu iyidir. Bilinen kronik bir rahatsızlığı yoktur.
                        2018 yılında apendektomi operasyonu geçirmiştir.
                    </Text>

                    <Text style={styles.label}>Alerjiler:</Text>
                    <Text style={styles.text}>
                        Penisilin alerjisi mevcuttur.
                    </Text>

                    <Text style={styles.label}>Kullandığı İlaçlar:</Text>
                    <Text style={styles.text}>
                        Düzenli kullandığı bir ilaç bulunmamaktadır.
                    </Text>

                    <Text style={styles.label}>Şikayet:</Text>
                    <Text style={styles.text}>
                        Sol alt çenede ağrı ve soğuk hassasiyeti şikayeti ile başvurmuştur.
                        Ağrı gece artmaktadır.
                    </Text>

                    <Text style={styles.label}>Dental Geçmiş:</Text>
                    <Text style={styles.text}>
                        Düzenli diş hekimi kontrolüne gitmemektedir. En son 2 yıl önce diş taşı temizliği yaptırmıştır.
                        Daha önce kanal tedavisi deneyimi vardır.
                    </Text>
                </Card>
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
    },
    card: {
        padding: 20,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#E30613',
        marginTop: 15,
        marginBottom: 5,
    },
    text: {
        fontSize: 16,
        color: '#333',
        lineHeight: 24,
    },
});

export default AnamnezScreen;
