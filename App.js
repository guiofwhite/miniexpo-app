import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { BottomTabs } from 'react-native-screens';


export default function App() {
  return (

    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1e697c" />
      <Text style={styles.welcomeText}>Bem vindo ao seu app!</Text>
    </View>
  );
}

export default funtion Botão(){
  return(
    <view>
      <Text>Avançar</Text> 
    </view>
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