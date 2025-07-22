import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function NotesScreen() {
    const router = useRouter();
    
    const [notes, setNotes] = useState([
        {
            id: "1", text: `To change the back arrow color in the expo-router Stack, you need to use the headerTintColor property in screenOptions. Here’s the updated code: tsx Copy Edit`
        },
        { id: "2", text: "two" },
        { id: "3", text: "three" }
    ]);

    return (
        <View
            style={styles.container}
        >
            <TouchableOpacity
                style={styles.addItem}
                onPress={()=>router.push('/addNote')}
            >
                <Text style={{ color: "white", fontSize: 32, marginVertical: "auto" }}>+</Text>
                <Text style={{ color: "white", marginVertical: "auto", fontSize: 16 }}>Add Note</Text>
            </TouchableOpacity>
            <FlatList
                data={notes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Text style={styles.text}>{item.text}</Text>
                    </View>
                )}
                contentContainerStyle={styles.listContainer}
                numColumns={2}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
        padding: 10,
    },
    listContainer: {
        justifyContent: "space-between"
    },
    listItem: {
        flex: 1,
        margin: 5,
        padding: 15,
        borderRadius: 10,
        backgroundColor: "#ffffff33",
        minHeight: 100,
    },
    addItem: {
        margin: 5,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "white",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        minHeight: 75
    },
    text: {
        color: "white"
    }
})