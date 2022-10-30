import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import {
  View,
  Button,
  StyleSheet,
  Pressable,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Svg, { Circle } from 'react-native-svg'

type spots = [
  id: String,
  nameId: String,
  occupied: Boolean,
]

const parkingSpotsA = [
  {
    id: "a1",
    nameId: "a101",
    occupied: true,
  },
  {
    id: "a1",
    nameId: "a102",
    occupied: false,
  },
  {
    id: "a1",
    nameId: "a103",
    occupied: false,
  },
  {
    id: "a1",
    nameId: "a104",
    occupied: true,
  },
  {
    id: "a1",
    nameId: "a103",
    occupied: false,
  },
  {
    id: "a1",
    nameId: "a104",
    occupied: true,
  },
];
const parkingSpotsB = [
  {
    id: "b1",
    nameId: "b101",
    occupied: false,
  },
  {
    id: "b1",
    nameId: "b102",
    occupied: true,
  },
  {
    id: "b1",
    nameId: "b103",
    occupied: false,
  },
  {
    id: "b1",
    nameId: "b104",
    occupied: true,
  },
  {
    id: "b1",
    nameId: "b103",
    occupied: false,
  },
  {
    id: "b1",
    nameId: "b104",
    occupied: true,
  },
 
];

export function ScreenB() {
  const [occupied, setOccupied] = useState(false);
  const [dataA, setDataA] = useState();
  const [dataB, setDataB] = useState();

  const navigation = useNavigation();
  function openScreenA() {
    navigation.navigate("screenA");
  }
  function openScreenB() {
    navigation.navigate("screenB");
  }
  return (
    <View style={styles.container}>
      <View style={styles.parkingContainer}>
        <Text style={styles.textTitle}>Escolha sua vaga</Text>
        <View style={styles.spotsContainer}>
          <View style={styles.esquerda}>
            <Text>A1</Text>
            {
              parkingSpotsA.map((spots, index) => <View style={styles.spot}>
              <TouchableOpacity key={index} style={spots.occupied? styles.spotOccupied : styles.spotFree}>
                <Text>{spots.nameId}</Text>
              </TouchableOpacity>
            </View>)
            }
            {/* <View style={styles.spot}>
              <TouchableOpacity style={styles.spotOccupied}>
              <Svg height="50%" width="50%" viewBox="0 0 100 100" >
                  <Circle cx="50" cy="50" r="50" stroke="purple" strokeWidth=".5" fill="violet" />
              </Svg>
              </TouchableOpacity>
            </View>
            <View style={styles.spot}>
              <TouchableOpacity style={styles.spotOccupied}>
                <Text>Vaga1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.spot}>
              <TouchableOpacity style={styles.spotOccupied}>
                <Text>Vaga1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.spot}>
              <TouchableOpacity style={styles.spotOccupied}>
                <Text>Vaga1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.spot}>
              <TouchableOpacity style={styles.spotOccupied}>
                <Text>Vaga1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.spot}>
              <TouchableOpacity style={styles.spotOccupied}>
                <Text>Vaga1</Text>
              </TouchableOpacity>
            </View> */}
          </View>
          <View style={styles.direita}>
            <Text>B1</Text>
            {
              parkingSpotsB.map((spots, index) => <View style={styles.spot}>
              <TouchableOpacity key={index} style={spots.occupied? styles.spotOccupied : styles.spotFree}>
                <Text>{spots.nameId}</Text>
              </TouchableOpacity>
            </View>)
            }
            {/* <View style={styles.spot}>
              <TouchableOpacity style={styles.spotOccupied}>
                <Text>Vaga1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.spot}>
              <TouchableOpacity style={styles.spotOccupied}>
                <Text>Vaga1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.spot}>
              <TouchableOpacity style={styles.spotOccupied}>
                <Text>Vaga1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.spot}>
              <TouchableOpacity style={styles.spotOccupied}>
                <Text>Vaga1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.spot}>
              <TouchableOpacity style={styles.spotOccupied}>
                <Text>Vaga1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.spot}>
              <TouchableOpacity style={styles.spotOccupied}>
                <Text>Vaga1</Text>
              </TouchableOpacity>
            </View> */}
          </View>
          <View style={styles.chooseSpot}>
            <TouchableOpacity>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Selecionar vaga
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.nav}>
        <Pressable style={styles.buttonLeft} onPress={openScreenA}>
          <Text style={styles.text}>Ir para tela A</Text>
        </Pressable>
        <Pressable style={styles.buttonRight} onPress={openScreenB}>
          <Text style={styles.text}>Ir para tela B</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#686868",
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
  textTitle: {
    color: "#929292",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    padding: 15,
    alignSelf: "center",
  },
  parkingContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "#E8E8E8",
  },
  spotsContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 15,
    position: "relative",
  },
  spot: {
    margin: 10,
    backgroundColor: "#ededed",
    justifyContent: "center",
    alignItems: "center",
  },
  spotOccupied: {
    backgroundColor: "red",
    height: 50,
    width: 140,
    justifyContent: "center",
    alignItems: "center",
  },
  spotFree: {
    backgroundColor: "green",
    height: 50,
    width: 140,
    justifyContent: "center",
    alignItems: "center",
  },
  chooseSpot: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    marginBottom: "auto",
    height: 50,
    width: "50%",
    alignSelf: "center",
    backgroundColor: "purple",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 20,
    position: "absolute",
    bottom: 80,
  },
  esquerda: {
    position: "absolute",
    left: 40,
    top: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  direita: {
    position: "absolute",
    right: 40,
    top: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
