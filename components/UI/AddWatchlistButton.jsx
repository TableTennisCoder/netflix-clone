import {View, Text, Pressable, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

function AddWatchlistButton() {
  return (
    <Pressable>
      <View style={styles.watchlistButton}>
        <Icon name="plus" size={24} color="#FCFFFF" />
        <Text style={styles.buttonText}>Meine Liste</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  watchlistButton: {
    backgroundColor: "#171717",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },

  buttonText: {
    color: "#FCFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AddWatchlistButton;
