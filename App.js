import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import requests from './requests';
import Row from './components/Row';
import Banner from './components/Banner';
import MovieDetails from './components/MovieDetails';
import { useState } from 'react';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  function openModal(movie) {
    setIsModalVisible(true),
    setSelectedMovie(movie);
  }

  function closeModal() {
    setIsModalVisible(false);
    setSelectedMovie(null);
  }

  return (
    <View style={styles.container}>
      <MovieDetails isVisible={isModalVisible} movie={selectedMovie} closeModal={closeModal}/>
      <ScrollView>
        <Banner fetchUrl={requests.fetchNetflixOriginals}/>
        <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow onOpenModal={openModal}/>
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} onOpenModal={openModal}/>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} onOpenModal={openModal}/>
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} onOpenModal={openModal}/>
        {/* <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romances" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /> */}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
});
