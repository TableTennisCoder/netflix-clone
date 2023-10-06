import {View, Text, StyleSheet} from "react-native";

function Genre({genres}) {
  return (
    <View style={styles.genres}>
      {genres.map((genre, index) => (
        <View key={index} style={styles.genre}>
          <Text style={styles.genre__text}>{genre.name}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  genres: {
    flexDirection: "row",
    gap: 7,
  },

  genre: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 25,
    borderColor: "#F2F2F2",
    borderWidth: 1,
    marginBottom: 16,
  },

  genre__text: {
    color: "#F2F2F2",
    fontSize: 16
  },
});

export default Genre;
