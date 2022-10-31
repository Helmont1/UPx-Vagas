import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { View, Button, StyleSheet, Pressable, Text } from "react-native";
import { BarCodeScanner } from 'expo-barcode-scanner';
import QRCode from "../components/QrCode";

import { useNavigation } from "@react-navigation/native";

export function ScreenA() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  
  
  
  const navigation = useNavigation();
  function openScreenA() {
    navigation.navigate("Home");
  }
  function openScreenB() {
    navigation.navigate("Vagas");
  }






  return (
    <View style={styles.container}>
      <View>
        <QRCode />
      </View>

      <View style={styles.nav}>
        <Pressable style={styles.buttonLeft} onPress={openScreenA}>
          <Text style={styles.text}>Ir para home</Text>
        </Pressable>
        <Pressable style={styles.buttonRight} onPress={openScreenB}>
          <Text style={styles.text}>Ir para vagas</Text>
        </Pressable>
      </View>
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
    height: 50
  },
  buttonLeft: {
    borderColor: 'gray',
    textAlign: "center",
    width: "50%",
    borderRightWidth: 1,
  },
  buttonRight: {
    borderColor: 'gray',
    textAlign: "center",
    width: "50%",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto'
  },
});
