import React from "react";
import {useState, useEffect} from "react";
import {
  View,
  Modal,
  Text,
  Button,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from "react-native";
import axios from "../axios";
import DetailsText from "./DetailsText";
import {LinearGradient} from "expo-linear-gradient"; // Import LinearGradient

const base_url = "https://image.tmdb.org/t/p/original/";
const api_key = "393489a464a51cdfea9d43ae6a6fa249";

function MovieDetails({isVisible, movie, closeModal}) {
  // Check if 'movie' is null or undefined
  if (!movie) return null;

  const type =
    movie.media_type === "movie" || !movie.media_type ? "movie" : "tv";

  const [details, setDetails] = useState();

  // Movie / TV Details
  const movieDetails = `/${type}/${movie.id}?language=en-US&api_key=${api_key}&append_to_response=credits`;

  useEffect(() => {
    async function fetchDetails() {
      const request = await axios.get(movieDetails);
      setDetails(request.data);
    }
    fetchDetails();
  }, []);

  if (!details) return null;

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.container}>
        <ScrollView>
          <ImageBackground
            source={{uri: `${base_url}${movie.backdrop_path}`}}
            style={styles.backdrop}
          >
            {/* Add LinearGradient for radial-like gradient */}
            <LinearGradient
              colors={["transparent", "rgba(37, 37, 37, 0.7)", "#171717"]} // Adjust colors as needed
              style={styles.radialGradient}
            />
          </ImageBackground>
          <DetailsText
            title={movie?.title || movie?.original_title || movie?.name}
            description={movie.overview}
            genres={details.genres}
          />
          <Button title="Close" onPress={closeModal} />
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171717",
  },
  backdrop: {
    width: "100%",
    height: 450,
    objectFit: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative",
  },
  radialGradient: {
    position: "absolute",
    height: 180,
    left: 0,
    right: 0,
    bottom: 0,
  },
  detailsContainer: {
    position: "absolute",
    paddingHorizontal: 25,
    marginTop: 100,
  },
  details__title: {
    fontSize: 38,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#F2F2F2",
  },
  details__description: {
    color: "#F2F2F2",
    fontSize: 16,
  },
});

export default MovieDetails;
