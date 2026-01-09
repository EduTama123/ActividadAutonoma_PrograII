import { Button, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function CardPelicula(props: any) {
    //console.log(props.pelicula.enlaces.image);

    //useState para controlar el estado del modal
    const [verModal, setverModal] = useState(false)

    return (
        <TouchableOpacity
            onPress={() => setverModal(true)}
            style={styles.container}>
            <Text style={styles.tittle}>{props.pelicula.titulo}</Text>
            <Image
                style={styles.img}
                source={{ uri: props.pelicula.enlaces.image }} />

            <Modal visible={verModal} transparent>
                <View style={styles.modal}>
                    <View style={styles.modalContainer}>
                        <Text style={{ alignSelf: 'center', fontSize: 40, fontWeight: 'bold' }}>DETALLES</Text>
                        <Text style={styles.tittle}>{props.pelicula.titulo}</Text>
                        <Image
                            style={styles.img}
                            source={{ uri: props.pelicula.enlaces.image }} />
                        <Text style={{ textAlign: 'justify', marginTop: 20, marginBottom: 10}}>{props.pelicula.descripcion}</Text>
                        <Button title='cerrar'
                            onPress={() => setverModal(false)}
                        />
                    </View>
                </View>

            </Modal>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    taquilla:{
        alignItems: 'center'
    },
    modalContainer: {
        backgroundColor: "#ffffff",
        height: "auto",
        width: "80%",
        borderRadius: 20,
        padding: 20,
        alignItems: 'center'

    },
    modal: {
        backgroundColor: '#2f2f2f5e',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        height: 150,
        width: "40%",
        resizeMode: 'center',
        marginTop: 10
    },
    container: {
        backgroundColor: "#8bd8e9",
        height: 190,
        margin: 10,
        alignItems: 'center',
        borderRadius: 25
    },
    tittle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})