import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Alert  } from 'react-native';


export default function App() {

  const lidarComClique = () => {
        Alert.alert("Ação do Botão", `Você clicou no perfil de ${nome}!`);
    };
  return (
    
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1e697c" />
      <Text style={styles.welcomeText}>Bem vindo ao seu app!</Text>

      <TouchableOpacity 
                style={estilos.botao} 
                onPress={lidarComClique}
            >
                <Text style={estilos.textoBotao}>Ver Perfil</Text>
            </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ee8ffff', 
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

   botao: {
        marginTop: 15,
        backgroundColor: '#5b82a8',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        elevation: 5, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    
    textoBotao: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});