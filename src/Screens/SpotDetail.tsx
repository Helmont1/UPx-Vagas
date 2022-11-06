import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import {
  View,
  Button,
  StyleSheet,
  Pressable,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export const SpotDetail = ({ route }: any) => {
  console.log("ROOOUTE", route);

  const routeObj = {
    spotId: route.params.spotId,
    name: route.params.spotName,
    occupied: route.params.spotOccupied,
    type: route.params.spotType,
    region: route.params.parkingRegion,
    address: route.params.spotAdress,
    latitude:
      route.params.latitude === undefined ? 40.0 : route.params.latitude,
    longitude:
      route.params.longitude === undefined ? 40.0 : route.params.longitude,
  };

  const [clicked, setClicked] = useState(false);

  const navigation = useNavigation();

  function openScreenA() {
    navigation.navigate("Home");
  }

  function openScreenB() {
    navigation.navigate("Vagas");
  }

//   function handleOccupiedButton() {
//     const response = await fetch(
//       `https://upx4api2022.azurewebsites.net/spot/${routeObj.spotId}`,
//       {
//         method: "PUT",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           spotId: routeObj.spotId,
//           region: routeObj.region,
//           name: routeObj.name,
//           type: routeObj.type,
//           latitude: routeObj.latitude,
//           longitude: routeObj.longitude,
//           address: routeObj.address,
//           occupied: !routeObj.occupied,
//         }),
//       }
//     );
//     if (response.status === 200) {
//       //navigate to vagas
//       navigation.navigate("Vagas", { routeObj });
//     }
//   }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Detalhes da vaga</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyHeader}>
          <Text style={styles.textBodyHeader}>Vaga {routeObj.name}</Text>
          <Text style={styles.textBodyHeader}>Tipo: {routeObj.type}</Text>
          <Text style={styles.textBodyHeader}>
            Status: {routeObj.occupied ? "Ocupada" : "Livre"}
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>
            {routeObj.occupied ? "Liberar vaga" : "Ocupar vaga"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
    backgroundColor: "#000",
  },
  body: {
    flex: 3,
    alignItems: "flex-start",
    justifyContent: "space-around",
  },
  bodyHeader: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-around",
    width: "100%",
    height: 50,
    margin: 40,
    borderRadius: 10,
    padding: 100,
    backgroundColor: "#000",
  },

  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textHeader: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  textBodyHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  button: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 10,
  },
  textButton: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
