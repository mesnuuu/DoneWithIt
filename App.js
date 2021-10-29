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
  Dimensions
} from "react-native";

import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'

export default function App() {
  
  console.log(useDimensions())
  const orientation = useDeviceOrientation()

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor:"yellow",
        width:'100%',
        height:orientation.landscape? '100%' : '30%'
      }}>

      </View>   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
