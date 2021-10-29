import React from "react";
import {
  StyleSheet,
  Platform,
  StatusBar,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("Text Pressed");
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="inverted" />

      <Text> {StatusBar.currentHeight} </Text>

      <Text numberOfLines={5} onPress={handlePress}>
        {" "}
        Hello React Native.{" "}
      </Text>

      <Image source={require("./assets/icon.png")} />

      <TouchableOpacity>
        <Image
          source={{ uri: "https://reactjs.org/logo-og.png" }}
          style={{
            width: 250,
            height: 250,
            resizeMode: "contain",
          }}
        />
      </TouchableOpacity>

      <Button
        title="Click me (Alert.alert)"
        color="orange"
        onPress={() =>
          Alert.alert("Title", "message", [
            { text: "Yes", onPress: () => console.log("Yes tapped") },
            { text: "No", onPress: () => console.log("No tapped") },
          ])
        }
      />

      {/* prompt work only in ios */}
      <View style={{ paddingVertical: 10 }}>
        <Button         
          title="Click me (Alert.prompt)"
          color="grey"
          onPress={() =>
            Alert.prompt("Title", "message", (string) => console.log(string))
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
