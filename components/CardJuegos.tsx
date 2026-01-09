import { Button, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function CardJuegos(props: any) {
    //console.log(props.videojuego.titulo);


    //useState para controlar el estado del modal
    const [verModal, setverModal] = useState(false)

    return (
        <View>
            <TouchableOpacity
                onPress={() => setverModal(true)}
                style={styles.container}>
                <Text style={styles.tittle}>{props.videojuego.titulo}</Text>
                <Image
                    style={styles.img}
                    source={{ uri: props.videojuego.imagen }} />

                <Modal visible={verModal} transparent>
                    <View style={styles.modal}>
                        <View style={styles.modalContainer}>
                            <Text style={{ alignSelf: 'center', fontSize: 40, fontWeight: 'bold' }}>DETALLES</Text>
                            <Text style={styles.tittle}>{props.videojuego.titulo}</Text>
                            <Image
                                style={styles.imgModal}
                                source={{ uri: props.videojuego.imagen }} />
                            <Text style={{ textAlign: 'justify', marginTop: 20, marginBottom: 10}}>{props.videojuego.descripcion}</Text>
                            <Button title='cerrar'
                                onPress={() => setverModal(false)}
                            />
                        </View>
                    </View>

                </Modal>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    taquilla: {
        alignItems: 'center'
    },
    modalContainer: {
        backgroundColor: "#ffffff",
        height: 'auto',
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
        height: "80%",
        width: "80%",
        resizeMode: 'center',
        marginTop: 10
    },
    imgModal: {
        height: 150,
        width: "80%",
        resizeMode: 'center',
        marginTop: 10
    },
    container: {
        backgroundColor: "#8bd8e9",
        height: 200,
        margin: 10,
        alignItems: 'center',
        borderRadius: 25,
        padding: 15
        
    },
    tittle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})