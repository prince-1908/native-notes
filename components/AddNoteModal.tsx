import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

export const AddNoteModal = ({
    openModal,
    setOpenModal,
    newText,
    setNewText,
    addNote
}: {
    openModal: boolean,
    setOpenModal: (value: boolean) => void,
    newText: string,
    setNewText: (text: string) => void,
    addNote: () => void
}) => {
    return (
        <Modal
            visible={openModal}
            transparent
            onRequestClose={() => setOpenModal(false)}
            animationType="fade"
        >
            <View
                style={styles.modalView}
            >
                <View
                    style={styles.modalCard}
                >
                    <Text style={styles.cardHeading}>Add a Note</Text>
                    <View
                        style={styles.saveContainer}
                    >
                        <TextInput
                            value={newText}
                            style={styles.input}
                            onChangeText={setNewText}
                            placeholder="Add a Note..."
                            multiline
                        />
                        <View
                            style={styles.btnContainer}
                        >
                            <TouchableOpacity
                                style={styles.saveBtn}
                                onPress={addNote}
                            >
                                <Text
                                    style={{
                                        textAlign: "center",
                                        fontSize: 18
                                    }}
                                >
                                    SAVE
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.cancelBtn}
                                onPress={() => setOpenModal(false)}
                            >
                                <Text
                                    style={{
                                        textAlign: "center",
                                        fontSize: 18
                                    }}
                                >
                                    CLOSE
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "black"
    },
    modalView: {
        backgroundColor: "transparent",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    modalCard: {
        backgroundColor: "#6fc7ba",
        minHeight: "50%",
        minWidth: "90%",
        maxHeight: 500,
        borderRadius: 10,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "black",
    },
    cardHeading: {
        color: "black",
        paddingVertical: 10,
        borderBottomWidth: 2,
        minWidth: "70%",
        textAlign: "center",
        borderColor: "black",
        fontSize: 24
    },
    saveContainer: {
        flexGrow: 1,
        justifyContent: "space-between",
        paddingVertical: 25
    },
    input: {
        backgroundColor: "white",
        width: 300,
        borderRadius: 8,
        maxHeight: 275
    },
    btnContainer: {
        display: "flex",
        gap: 10
    },
    saveBtn: {
        backgroundColor: "lightgreen",
        padding: 8,
        textAlign: "center",
        borderRadius: 8
    },
    cancelBtn: {
        backgroundColor: "#FFCCCB",
        padding: 8,
        textAlign: "center",
        borderRadius: 8
    }
})