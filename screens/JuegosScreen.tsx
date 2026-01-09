import { FlatList, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CardJuegos from '../components/CardJuegos'

export default function JuegosScreen() {


  let URL = "https://jritsqmet.github.io/web-api/videojuegos.json"
  const [juegos, setjuegos] = useState([])

  //funcion para funcionar el horizontal
  const [horizontal, sethorizontal] = useState(false)

  //useEffect para que se lance la funcion a segundo plano y carge los datos
  useEffect(() => {
    leer()

    //console.log(juegos);

  }, [])


  async function leer() {
    const resp = await fetch(URL);
    const json = await resp.json();
    setjuegos(json.videojuegos);

  }
  return (
    <View>
      <Text style={styles.tittle}>VideoJuegos</Text>
      <Switch
      value={horizontal}
      onValueChange={(valor) => sethorizontal(valor)}
      />
      <FlatList
        data={juegos}
        renderItem={({ item }: any) =>
          <CardJuegos videojuego = {item}/>
        }
        horizontal = {horizontal}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  tittle: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})