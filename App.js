import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Pagina2 from './pagina2';
const Stack = createNativeStackNavigator();

export default function App() {
return (
<NavigationContainer>
<Stack.Navigator>

<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="Pagina2" component={Pagina2} />

</Stack.Navigator>
</NavigationContainer>
);
}

function HomeScreen({ navigation }) {
return (
<View style={styles.container}>
<StatusBar barStyle="light-content" backgroundColor="#1e697c" />
<Text style={styles.welcomeText}>Bem vindo ao seu app!</Text>

<Button
title="Ir para Página 2"
onPress={() => navigation.navigate("Pagina2")}
/>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#c4c4c4ff',
justifyContent: 'center',
alignItems: 'center',
paddingHorizontal: 30,
},

welcomeText: {
fontSize: 24,
paddingBottom: 50,
fontWeight: 'bold',
color: '#000000ff',
textAlign: 'center',
},
});