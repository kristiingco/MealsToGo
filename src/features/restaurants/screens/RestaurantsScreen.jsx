import React from "react";
import { StyleSheet, SafeAreaView, Text, View, Platform } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/RestaurantInfo";

export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <View
        style={{
          padding: 16,
          backgroundColor: "green",
          justifyContent: "center",
        }}
      >
        <Searchbar placeholder='Search' />
      </View>
      <View style={{ flex: 1, padding: 16, backgroundColor: "blue" }}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
