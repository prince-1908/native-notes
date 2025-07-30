import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Note = {
    id: string,
    text: string
}

export const NoteItem = ({item}: {item: Note}) => {
    return (
        <View style={styles.listItem}>
            <Text style={styles.text}>{item.text}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        margin: 5,
        padding: 15,
        borderRadius: 10,
        backgroundColor: "#00000033",
        borderWidth: 2,
        borderColor: "black",
    },
    text: {
        color: "black"
    }
})