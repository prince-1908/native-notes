import { FlatList, StyleSheet, Text, View } from "react-native"
import { NoteItem } from "./NoteItem"

type Note = {
    id: string,
    text: string
}


export const NoteList = ({
    notes
}: {
    notes: Note[]
}
) => {
    return (
        <>
            {notes.length > 0 ? <FlatList
                data={notes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <NoteItem item={item} />
                )}
                contentContainerStyle={styles.listContainer}
            />
                : <View
                    style={{
                        flex: 1,
                        padding: 25
                    }}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            color: "#00000080"
                        }}
                    >
                        Your thoughts matter. Start by adding your first note!
                    </Text>
                </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        justifyContent: "space-between"
    }
})