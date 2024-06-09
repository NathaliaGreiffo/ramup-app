import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

const events = [
  {
    name: "Car Enthusiast Meetup",
    description: "A meetup for car enthusiasts to showcase their modified vehicles and share their passion for cars.",
    city: "São Paulo",
    state: "São Paulo",
    country: "Brazil",
    zipCode: "12345-678",
    latitude: "-23.550520",
    longitude: "-46.633308",
    onlyAdults: false,
    showUsers: true
  },
  {
    name: "Classic Car Show",
    description: "An exhibition of classic cars from the 1960s and 1970s.",
    city: "Rio de Janeiro",
    state: "Rio de Janeiro",
    country: "Brazil",
    zipCode: "23456-789",
    latitude: "-22.906847",
    longitude: "-43.172896",
    onlyAdults: false,
    showUsers: true
  },
  {
    name: "Luxury Car Expo",
    description: "A grand exhibition featuring the latest models of luxury cars from top brands.",
    city: "New York",
    state: "New York",
    country: "USA",
    zipCode: "10001-123",
    latitude: "40.712776",
    longitude: "-74.005974",
    onlyAdults: true,
    showUsers: false
  },
  {
    name: "Electric Vehicle Fair",
    description: "An event showcasing the newest electric vehicles and innovations in EV technology.",
    city: "San Francisco",
    state: "California",
    country: "USA",
    zipCode: "94102-345",
    latitude: "37.774929",
    longitude: "-122.419418",
    onlyAdults: false,
    showUsers: true
  },
  {
    name: "Motorcycle Rally",
    description: "A rally for motorcycle enthusiasts with events, contests, and a parade.",
    city: "Austin",
    state: "Texas",
    country: "USA",
    zipCode: "73301-567",
    latitude: "30.267153",
    longitude: "-97.743057",
    onlyAdults: true,
    showUsers: false
  }
];

const Item = ({ name, description, city, state, country, zipCode, onlyAdults }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
    <Text>{description}</Text>
    <Text>{`${city}, ${state}, ${country}`}</Text>
    <Text>{`Zip Code: ${zipCode}`}</Text>
    <Text>{`Only Adults: ${onlyAdults ? "Yes" : "No"}`}</Text>
  </View>
);

export default function SearchPage() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={events}
        renderItem={({ item }) => (
          <Item
            name={item.name}
            description={item.description}
            city={item.city}
            state={item.state}
            country={item.country}
            zipCode={item.zipCode}
            onlyAdults={item.onlyAdults}
          />
        )}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 3, // for Android
    shadowColor: '#000', // for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});