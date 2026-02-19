import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Card from '../components/Card';
import Button from '../components/Button';

const EvaluationScreen = ({ navigation }: any) => {
    const [selectedTeeth, setSelectedTeeth] = useState<number[]>([]);
    const [bleeding, setBleeding] = useState<'Var' | 'Yok'>('Yok');
    const [plaque, setPlaque] = useState<'Var' | 'Yok'>('Yok');

    const toggleTooth = (number: number) => {
        if (selectedTeeth.includes(number)) {
            setSelectedTeeth(selectedTeeth.filter(n => n !== number));
        } else {
            setSelectedTeeth([...selectedTeeth, number]);
        }
    };

    const handleSave = () => {
        Alert.alert('Başarılı', 'Değerlendirme kaydedildi.');
        navigation.goBack();
    };

    const renderTeeth = (range: number[]) => (
        <View style={styles.teethRow}>
            {range.map(number => (
                <TouchableOpacity
                    key={number}
                    style={[
                        styles.tooth,
                        selectedTeeth.includes(number) && styles.selectedTooth
                    ]}
                    onPress={() => toggleTooth(number)}
                >
                    <Text style={[
                        styles.toothText,
                        selectedTeeth.includes(number) && styles.selectedToothText
                    ]}>
                        {number}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#333" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Değerlendirme</Text>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <Card style={styles.card}>
                    <Text style={styles.sectionTitle}>Dental Değerlendirme</Text>
                    <Text style={styles.subtitle}>Üst Çene</Text>
                    {renderTeeth([18, 17, 16, 15, 14, 13, 12, 11])}
                    {renderTeeth([21, 22, 23, 24, 25, 26, 27, 28])}

                    <View style={styles.divider} />

                    <Text style={styles.subtitle}>Alt Çene</Text>
                    {renderTeeth([48, 47, 46, 45, 44, 43, 42, 41])}
                    {renderTeeth([31, 32, 33, 34, 35, 36, 37, 38])}

                    <Text style={styles.note}>* Sorunlu dişleri seçiniz.</Text>
                </Card>

                <Card style={styles.card}>
                    <Text style={styles.sectionTitle}>Genel Değerlendirme</Text>

                    <View style={styles.optionRow}>
                        <Text style={styles.optionLabel}>Diş Eti Kanaması:</Text>
                        <View style={styles.options}>
                            <TouchableOpacity
                                style={[styles.optionButton, bleeding === 'Var' && styles.optionSelected]}
                                onPress={() => setBleeding('Var')}
                            >
                                <Text style={[styles.optionText, bleeding === 'Var' && styles.selectedOptionText]}>Var</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.optionButton, bleeding === 'Yok' && styles.optionSelected]}
                                onPress={() => setBleeding('Yok')}
                            >
                                <Text style={[styles.optionText, bleeding === 'Yok' && styles.selectedOptionText]}>Yok</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.optionRow}>
                        <Text style={styles.optionLabel}>Plak Varlığı:</Text>
                        <View style={styles.options}>
                            <TouchableOpacity
                                style={[styles.optionButton, plaque === 'Var' && styles.optionSelected]}
                                onPress={() => setPlaque('Var')}
                            >
                                <Text style={[styles.optionText, plaque === 'Var' && styles.selectedOptionText]}>Var</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.optionButton, plaque === 'Yok' && styles.optionSelected]}
                                onPress={() => setPlaque('Yok')}
                            >
                                <Text style={[styles.optionText, plaque === 'Yok' && styles.selectedOptionText]}>Yok</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Card>

                <Button title="Kaydet" onPress={handleSave} />
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
        paddingBottom: 40,
    },
    card: {
        padding: 20,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#E30613',
        marginBottom: 15,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
        fontWeight: '600',
    },
    teethRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginBottom: 5,
    },
    tooth: {
        width: 35,
        height: 35,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3,
    },
    selectedTooth: {
        backgroundColor: '#E30613',
        borderColor: '#E30613',
    },
    toothText: {
        fontSize: 12,
        color: '#333',
    },
    selectedToothText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    divider: {
        height: 1,
        backgroundColor: '#eee',
        marginVertical: 15,
    },
    note: {
        fontSize: 12,
        color: '#999',
        marginTop: 10,
        textAlign: 'center',
        fontStyle: 'italic',
    },
    optionRow: {
        marginBottom: 20,
    },
    optionLabel: {
        fontSize: 16,
        marginBottom: 10,
        color: '#333',
    },
    options: {
        flexDirection: 'row',
    },
    optionButton: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center',
        borderRadius: 8,
        marginHorizontal: 5,
    },
    optionSelected: {
        backgroundColor: '#E30613',
        borderColor: '#E30613',
    },
    optionText: {
        color: '#333',
    },
    selectedOptionText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default EvaluationScreen;
