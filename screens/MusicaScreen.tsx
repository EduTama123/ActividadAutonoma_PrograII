import { Alert, Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
 
export default function MusicaScreen() {
 
    const [cancion, setCancion] = useState("");
    const [tiempo, setTiempo] = useState(0);
    const [genero, setGenero] = useState("");
    const [aceptar, setAceptar] = useState(false)
 
    function guardar() {
 
        if ( cancion.trim() == "") {
            Alert.alert("ERROR", "La cancion no debe tener espacios")
        }
 
        if (aceptar && cancion.trim() != "") {
            Alert.alert("Informacion", "Cancion guardada")
 
        } else {
            Alert.alert("Error", "Se debe aceptar los terminos y condiciones")
        }
    }
 
    useEffect(() => {
        if (tiempo >= 6) {
            Alert.alert("Error", "El tiempo maximo es de 6 minutos.")
        }
    }, [tiempo])
 
 
    return (
        <View>
            <Text>Musica</Text>
            <TextInput style={styles.input}
                onChangeText={(texto) => setCancion(texto)}
                placeholder='Ingresar cancion' />
            <TextInput style={styles.input}
                onChangeText={(texto) => setTiempo(+texto)}
                placeholder='Ingresar tiempo' />
            <TextInput style={styles.input}
                onChangeText={(texto) => setGenero(texto)}
                placeholder='Ingresar genero' />
            <Text>Acepta los terminos</Text>
            <Switch
                value={aceptar}
                onValueChange={(valor) => setAceptar(valor)}
            />
            <Button title='Guardar'
                onPress={() => guardar()}
            />
        </View>
    )
}
 
const styles = StyleSheet.create({
    input: {
        fontSize: 20,
        backgroundColor: "#fff",
        marginVertical: 20,
 
    }
})