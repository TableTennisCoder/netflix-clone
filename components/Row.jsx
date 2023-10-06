import React, {useState, useEffect} from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import axios from "../axios";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow, onOpenModal}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <View style={{marginTop: 20, marginBottom: 10}}>
      <Text style={styles.row__title}>{title}</Text>
      <ScrollView horizontal contentContainerStyle={styles.row__posters}>
        {movies.map((movie) => (
          <Pressable key={movie.id} onPress={() => onOpenModal(movie)}>
            <Image
              source={{uri: `${base_url}${movie.poster_path}`}}
              style={{
                width: isLargeRow ? 150 : 100,
                height: isLargeRow ? 220 : 150,
                marginRight: 10,
                borderRadius: 5,
              }}
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  row__title: {
    paddingLeft: 10,
    paddingBottom: 6,
    color: "#F2F2F2",
    fontSize: 16,
    fontWeight: "bold",
  },
  row__posters: {
    paddingLeft: 10,
  },
});

export default Row;
