import react from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
export default function paginaSecundaria() {
    return (
        <View style={StyleSheet.container}>
            <StatusBar barStyle="light-content" background-color="#1e697c" />
            <Text style={StyleSheet.welcomeText}>Esta é a página secundaria!</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#adecfcff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
    },

    welcomeText: {
        fontSize: 24,
        paddingBottom: 850,
        fontWeight: 'bold',
        color: '#000000ff',
        textAlign: 'center',
    },
});