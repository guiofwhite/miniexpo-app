import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Pagina2 from './pagina2';
const Stack = createNativeStackNavigator();

export default function App() {
return (
<NavigationContainer>
<Stack.Navigator>

<Stack.Screen name="Página dos Cria" component={HomeScreen} />
<Stack.Screen name="Pagina2" component={Pagina2} />

</Stack.Navigator>
</NavigationContainer>
);
}

function HomeScreen({ navigation }) {
return (
<View style={styles.container}>
<StatusBar barStyle="light-content" backgroundColor="#1e697c" />
<Text style={styles.welcomeText}>Bem vindo aos Crias!</Text>

<Button
title="Ir para a segunda page"
onPress={() => navigation.navigate("Pagina2")}
/>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#e6fffdff',
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