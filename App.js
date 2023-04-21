import { StatusBar as ExpoStatusBar, StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text, View, Platform } from "react-native";
import { Searchbar } from "react-native-paper";

export default function App() {
  return (
    <>
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
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({});
