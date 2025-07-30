import { AddNoteModal } from "@/components/AddNoteModal";
import { NoteList } from "@/components/NoteList";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const uuidv4 = () => Math.random().toString(36).substring(2, 10) + Date.now().toString(36);

type Note = {
    id: string,
    text: string
}

export default function NotesScreen() {
    const [notes, setNotes] = useState<Note[]>([]);
    const [openModal, setOpenModal] = useState(false);
    const [newText, setNewText] = useState("");

    const addNote = () => {
        if (newText.trim() !== "") {
            const id = uuidv4();

            setNotes((prev) => [
                ...prev,
                { id, text: newText }
            ]);

            setNewText('');

            setOpenModal(false);
        }
    }

    return (
        <View
            style={styles.container}
        >

            <NoteList notes={notes} />

            <TouchableOpacity
                style={styles.addItem}
                onPress={() => setOpenModal(true)}
            >
                <Text style={{ color: "black", fontSize: 32, marginVertical: "auto" }}>+</Text>
                <Text style={{ color: "black", marginVertical: "auto", fontSize: 20 }}>Add Note</Text>
            </TouchableOpacity>

            <AddNoteModal
                openModal={openModal}
                setOpenModal={setOpenModal}
                newText={newText}
                setNewText={setNewText}
                addNote={addNote}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f8f8f8",
        flex: 1,
        padding: 10,
    },
    addItem: {
        paddingHorizontal: 15,
        minHeight: 50,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        borderRadius: 10,
        marginBottom: 25,
        marginHorizontal: 10,
        backgroundColor: "#6fc7ba",
        borderWidth: 2,
        borderColor: "black",
    },
    text: {
        color: "black"
    }
})