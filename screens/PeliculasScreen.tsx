import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import CardPelicula from '../components/CardPelicula'

export default function PeliculasScreen() {

  let URL = "https://jritsqmet.github.io/web-api/peliculas2.json"
  const [peliculas, setpeliculas] = useState([])
  //useEffect para que se lance la funcion a segundo plano y carge los datos
  useEffect(() => {
    leer()
    //console.log(peliculas);
  }, [])


  async function leer() {
    const resp = await fetch(URL);
    const json = await resp.json();
    setpeliculas(json.peliculas);

  }
  return (
    <View>
      <Text style={styles.tittle}>Peliculas</Text>
      <FlatList
        data={peliculas}
        renderItem={({ item }: any) =>
          <CardPelicula pelicula = {item}/>
        }
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