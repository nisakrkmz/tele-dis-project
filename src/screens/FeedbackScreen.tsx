import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Card from '../components/Card';
import Button from '../components/Button';

const FeedbackScreen = ({ navigation }: any) => {
    const [topic, setTopic] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        if (!topic.trim() || !message.trim()) {
            Alert.alert('Hata', 'Lütfen konu ve mesaj alanlarını doldurunuz.');
            return;
        }

        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            Alert.alert(
                'Teşekkürler',
                'Geri bildiriminiz başarıyla iletildi.',
                [{ text: 'Tamam', onPress: () => navigation.goBack() }]
            );
        }, 1500);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#333" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Geri Bildirim</Text>
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={styles.content}>
                    <Card style={styles.card}>
                        <View style={styles.infoContainer}>
                            <Ionicons name="chatbox-ellipses-outline" size={40} color="#E30613" />
                            <Text style={styles.infoText}>
                                Görüş ve önerileriniz bizim için çok değerli. Lütfen düşüncelerinizi paylaşın.
                            </Text>
                        </View>

                        <Text style={styles.label}>Konu</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Örn: Uygulama Hızı, Yeni Özellik..."
                            value={topic}
                            onChangeText={setTopic}
                        />

                        <Text style={styles.label}>Mesajınız</Text>
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            placeholder="Mesajınızı buraya yazın..."
                            value={message}
                            onChangeText={setMessage}
                            multiline
                            numberOfLines={5}
                            textAlignVertical="top"
                        />

                        <Button
                            title="Gönder"
                            onPress={handleSubmit}
                            loading={loading}
                        />
                    </Card>
                </ScrollView>
            </KeyboardAvoidingView>
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
    infoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    infoText: {
        textAlign: 'center',
        color: '#666',
        marginTop: 10,
        fontSize: 14,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    input: {
        backgroundColor: '#F9F9F9',
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        marginBottom: 20,
    },
    textArea: {
        minHeight: 120,
    },
});

export default FeedbackScreen;
