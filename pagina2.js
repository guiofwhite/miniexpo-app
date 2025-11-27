import { View, Text, StyleSheet } from 'react-native';

export default function Pagina2() {
return (
<View style={styles.container}>
<Text style={styles.texto}>Bem vindo aos Cria!</Text>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
texto: {
fontSize: 22,
color: '#000000ff',
fontWeight: 'bold',
}
});