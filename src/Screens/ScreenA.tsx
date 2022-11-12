import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { View, Button, StyleSheet, Pressable, Text } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import QRCode from "../components/QrCode";

import { useNavigation } from "@react-navigation/native";
import Navbottom from "../components/NavBottom";

export function ScreenA() {
  const navigation = useNavigation();
  function openScreenA() {
    navigation.navigate("Home");
  }
  function openScreenB() {
    navigation.navigate("Vagas");
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
          <QRCode />
      </View>
      <Navbottom openScreenA={openScreenA} openScreenB={openScreenB} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    
  },
  //make bodyContent occupy the full width and height of the screen
  //make header transparent and floating above the content
  Header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
    backgroundColor: "#e6e6e6",
   //make it floating above the content
    position: "absolute",
    top: 0,
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    //make it floating above the content
    
    position: "absolute",
    top: 30,
    bottom: 20,
  },
  
    
  textHeader: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
  },
  textBodyHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  button: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 10,
  },
  textButton: {
    color: "#fff",
  },



 
});
