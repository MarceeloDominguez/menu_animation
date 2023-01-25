import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const images = [
  "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_640.jpg",
  "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_640.jpg",
  "https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058_640.jpg",
  "https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_640.jpg",
];

export default function Home() {
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Home</Text>
      <View style={styles.container}>
        {images.map((item, index) => {
          return (
            <View key={index} style={styles.containerImages}>
              <Image source={{ uri: item }} style={styles.images} />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.5,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  containerImages: {
    marginVertical: 15,
    width: "90%",
    height: 300,
    borderRadius: 12,
    elevation: 12,
  },
  images: {
    width: "100%",
    height: 300,
    borderRadius: 12,
  },
});
