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
      <View style={styles.Header}>
        <Text style={styles.textHeader}>Bem vindo ao estacionamento</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyHeader}>
          <Text style={styles.textBodyHeader}>Escaneie uma vaga</Text>
        </View>
        <View style={styles.bodyContent}>
          <QRCode />
        </View>
      </View>
      <Navbottom openScreenA={openScreenA} openScreenB={openScreenB} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  nav: {
    backgroundColor: "purple",
    width: "100%",
    position: "absolute",
    bottom: 0,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
  },
  buttonLeft: {
    borderColor: "gray",
    textAlign: "center",
    width: "50%",
    borderRightWidth: 1,
  },
  buttonRight: {
    borderColor: "gray",
    textAlign: "center",
    width: "50%",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
  },
  Header: {
    backgroundColor: "purple",
    width: "100%",
    position: "absolute",
    top: 0,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
  },
  textHeader: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
  },
  body: {
    backgroundColor: "white",
    width: "100%",
    position: "absolute",
    top: 50,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    height: 500,
  },
  bodyHeader: {
    backgroundColor: "purple",
    width: "100%",
    position: "absolute",
    top: 0,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    marginBottom: 10,
  },
  textBodyHeader: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
  },
  bodyContent: {
    backgroundColor: "white",
    width: "100%",
    position: "absolute",
    top: 50,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    height: 600,
  },
});
