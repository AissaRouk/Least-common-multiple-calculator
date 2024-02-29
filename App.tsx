/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [number1, setNumber1] = useState<number>(0);
  const [number2, setNumber2] = useState<number>(0);
  const [resultado, setResultado] = useState<number | null>(0);

  const calcular = () => {
    var primero = 1;
    var segundo = 0;
    var elegido = number1 > number2 ? number1 : number2;
    var noElegido = number1 < number2 ? number1 : number2;
    for (var i = 1; primero !== segundo; i++) {
      if ((elegido * i) % noElegido === 0) {
        setResultado(elegido * i);
        return;
      }
    }
  };

  return (
    <SafeAreaView style={[styles.mainContainer]}>
      <View>
        <Text>First Number</Text>
        <TextInput
          style={{borderColor: 'black', borderWidth: 1}}
          keyboardType="numeric"
          onChangeText={number => {
            // Check if the input is empty
            if (number === '') {
              setNumber1(0); // Set the state to 0 if the input is empty
            } else {
              setNumber1(parseInt(number, 10)); // Parse the input string to an integer
            }
          }}
          value={number1.toString()}
          onFocus={() => {
            console.log('hola');
          }}
        />
      </View>
      <View style={{marginVertical: 10}}>
        <Text>Second number</Text>
        <TextInput
          style={{borderColor: 'black', borderWidth: 1}}
          keyboardType="numeric"
          onChangeText={number => {
            // Check if the input is empty
            if (number === '') {
              setNumber2(0); // Set the state to 0 if the input is empty
            } else {
              setNumber2(parseInt(number, 10)); // Parse the input string to an integer
            }
          }}
          value={number2.toString()}
        />
      </View>
      <Button title="Calcular M.C.M" onPress={() => calcular()} />
      <View
        style={{
          marginVertical: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 30}}>
          Result -{'>'} {resultado}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
});

export default App;
