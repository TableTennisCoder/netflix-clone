import { useState, useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import PlayButton from "./UI/PlayButton";
import AddWatchlistButton from "./UI/AddWatchlistButton";
import axios from "../axios";

const base_url = "https://image.tmdb.org/t/p/original/";
const fallback_url = "/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg";

function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <View style={styles.bannerContainer}>
      <Image
        key={1234}
        source={{
          uri: `${base_url}${movie?.poster_path || movie?.backdrop_path || fallback_url}`,
        }}
        style={{
          width: "100%",
          height: 450,
          marginHorizontal: 10,
          borderRadius: 15,
          borderColor: "#3F3F45",
          borderWidth: 0.5,
          objectFit: "cover",
        }}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <PlayButton />
        </View>
        <View style={styles.button}>
          <AddWatchlistButton />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bannerContainer: {
    marginTop: 15,
    position: "relative",
    width: "100%",
    height: 450,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonContainer: {
    flexDirection: "row",
    position: 'absolute',
    padding: 5,
    bottom: 0
  },

  button: {
    flex: 1,
    margin: 5,
  },
});

export default Banner;
