import { Pressable, View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

function PlayButton() {
    return (
        <Pressable>
            <View style={styles.playButton}>
                <Icon name="caretright" size={24} />
                <Text style={styles.buttonText}>Abspielen</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    playButton: {
        backgroundColor: '#FCFFFF',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
    },

    buttonText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: "bold"
    }
})

export default PlayButton;