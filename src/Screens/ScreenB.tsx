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
import uuid from "react-native-uuid";

type spots = [
  {
    id: number;
    spotRegion: string;
    spotName: string;
    spots: {
      id: number;
      spotName: string;
      spotRegion: string;
      spotType: string;
      spotDescription: string;
      spotImage: string | null;
      spotLatitude: number | null;
      spotLongitude: number | null;
      spotAddress: string | null;
      occupied: boolean;
    }[];
  }
];

const parkingSpotsData: any = [
  {
    id: 1,
    spotRegion: "A",
    spotName: "A1",
    spots: [
      {
        id: 1,
        spotName: "A1",
        spotRegion: "A",
        spotType: "Car",
        spotDescription: "A1",
        spotImage: null,
        spotLatitude: 0,
        spotLongitude: 0,
        spotAddress: null,
        occupied: true,
      },
      {
        id: 2,
        spotName: "A2",
        spotRegion: "A",
        spotType: "Car",
        spotDescription: "A2",
        spotImage: null,
        spotLatitude: 0,
        spotLongitude: 0,
        spotAddress: null,
        occupied: false,
      },
      {
        id: 3,
        spotName: "A3",
        spotRegion: "A",
        spotType: "Car",
        spotDescription: "A3",
        spotImage: null,
        spotLatitude: 0,
        spotLongitude: 0,
        spotAddress: null,
        occupied: false,
      },
      {
        id: 4,
        spotName: "A4",
        spotRegion: "A",
        spotType: "Car",
        spotDescription: "A4",
        spotImage: null,
        spotLatitude: 0,
        spotLongitude: 0,
        spotAddress: null,
        occupied: false,
      },
      {
        id: 5,
        spotName: "A5",
        spotRegion: "A",
        spotType: "Car",
        spotDescription: "A5",
        spotImage: null,
        spotLatitude: 0,

        spotLongitude: 0,
        spotAddress: null,
        occupied: false,
      },
    ],
  },
  {
    id: 2,
    spotRegion: "B",
    spotName: "B1",
    spots: [
      {
        id: 6,
        spotName: "B1",
        spotRegion: "B",
        spotType: "Car",
        spotDescription: "B1",
        spotImage: null,
        spotLatitude: 0,
        spotLongitude: 0,
        spotAddress: null,
        occupied: false,
      },
      {
        id: 7,
        spotName: "B2",
        spotRegion: "B",
        spotType: "Car",
        spotDescription: "B2",
        spotImage: null,
        spotLatitude: 0,
        spotLongitude: 0,
        spotAddress: null,
        occupied: false,
      },
      {
        id: 8,
        spotName: "B3",
        spotRegion: "B",
        spotType: "Car",
        spotDescription: "B3",
        spotImage: null,
        spotLatitude: 0,
        spotLongitude: 0,
        spotAddress: null,
        occupied: false,
      },
      //generate 100 spots
      {
        id: 9,
        spotName: "B4",
        spotRegion: "B",
        spotType: "Car",
        spotDescription: "B4",
        spotImage: null,
        spotLatitude: 0,
        spotLongitude: 0,
        spotAddress: null,
        occupied: false,
      },
      {
        id: 10,
        spotName: "B5",
        spotRegion: "B",
        spotType: "Car",
        spotDescription: "B5",
        spotImage: null,
        spotLatitude: 0,
        spotLongitude: 0,
        spotAddress: null,
        occupied: false,
      },
    ],
  },
  {
    id: 3,
    spotRegion: "C",
    spotName: "C1",
    spots: [
      {
        id: 11,
        spotName: "C1",
        spotRegion: "C",
        spotType: "Car",
        spotDescription: "C1",
        spotImage: null,
        spotLatitude: 0,
        spotLongitude: 0,
        spotAddress: null,
        occupied: false,
      },
      {
        id: 12,
        spotName: "C2",
        spotRegion: "C",
        spotType: "Car",
        spotDescription: "C2",
        spotImage: null,
        spotLatitude: 0,
        spotLongitude: 0,
        spotAddress: null,
        occupied: false,
      },
    ],
  },
  {
    id: 4,
    spotRegion: "D",
    spotName: "D1",
    spots: [
      {
        id: 13,
        spotName: "D1",
        spotRegion: "D",
        spotType: "Car",
        spotDescription: "D1",
        spotImage: null,
        spotLatitude: 0,
        spotLongitude: 0,
        spotAddress: null,
        occupied: false,
      },
      {
        id: 14,
        spotName: "D2",
        spotRegion: "D",
        spotType: "Car",
        spotDescription: "D2",
        spotImage: null,
        spotLatitude: 0,
        spotLongitude: 0,
        spotAddress: null,
        occupied: false,
      },
    ],
  },
  {
    id: 5,
    spotRegion: "E",
    spotName: "E1",
    spots: [
      {
        id: 15,
        spotName: "E1",
        spotRegion: "E",
        spotType: "Car",
        spotDescription: "E1",
        spotImage: null,
        spotLatitude: 0,
        spotLongitude: 0,
        spotAddress: null,
        occupied: false,
      },
    ],
  },
];

export function ScreenB() {
  const navigation = useNavigation();
  function openScreenA() {
    navigation.navigate("Home");
  }
  function openScreenB() {
    navigation.navigate("Vagas");
  }
  function openSpotDetails(spot: any) {
    navigation.navigate("spotDetail", {
      spotOccupied: spot.occupied,
      spotName: spot.spotName,
      spotRegion: spot.spotRegion,
      spotType: spot.spotType,
      spotDescription: spot.spotDescription,
    });
  }

  function generateUniqueKey() {
    return (Math.random().toString(36).substr(2, 9) + uuid.v4).toString();
  }

  return (
    <View style={styles.container}>
      <View style={styles.parkingContainer}>
        <Text style={styles.textTitle}>Vagas</Text>
        <View style={styles.spotsContainer}>
          <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
            {parkingSpotsData.map((item: any, index: any) => {
              return (
                <View style={styles.spotContainer}>
                  <Text key={generateUniqueKey()} style={styles.spotTitle}>
                    {item.spotRegion}
                  </Text>
                  <ScrollView horizontal={true} key={index * Math.random()}>
                    <FlatList
                      key={generateUniqueKey()}
                      data={item.spots}
                      showsHorizontalScrollIndicator={true}
                      showsVerticalScrollIndicator={false}
                      renderItem={({ item }) => (
                        <View
                          key={generateUniqueKey()}
                          style={
                            item.occupied
                              ? styles.spotOccupied
                              : styles.spotFree
                          }
                        >
                          <Pressable
                            key={generateUniqueKey()}
                            onPress={() => openSpotDetails(item)}
                            style={styles.spotButton}
                          >
                            <Image
                              key={generateUniqueKey()}
                              style={styles.spotImage}
                              source={require("../media/car.png")}
                            />
                            <Text
                              key={ generateUniqueKey()}
                              style={styles.spotName}
                            >
                              {item.spotName}
                            </Text>
                          </Pressable>
                        </View>
                      )}
                      keyExtractor={(item) =>  generateUniqueKey()}
                      numColumns={5}
                      scrollEnabled={true}
                      scrollToOverflowEnabled={true}
                    />
                  </ScrollView>
                </View>
              );
            })}
            
          </ScrollView>
        </View>
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
  spotContainer: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    marginBottom: 20,
    padding: 10,
    flex: 1,
    flexGrow: 2,
  },
  spotTitle: {
    color: "#929292",

    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  spotContent: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  spotButton: {
    height: 50,
    width: 140,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginBottom: 10,
  },
  spotButtonText: {
    color: "#929292",
    fontSize: 20,
    fontWeight: "bold",
  },
  spotText: {
    color: "#929292",
    fontSize: 20,
    fontWeight: "bold",
  },
  spotTextOccupied: {
    color: "purple",
    fontSize: 20,
    fontWeight: "bold",
  },
  spotTextFree: {
    color: "green",
    fontSize: 20,
    fontWeight: "bold",
  },
  spotImage: {
    height: 100,
    width: 100,
  },
  spotFree: {
    backgroundColor: "#ededed",
    height: 140,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginBottom: 10,
    marginRight: 10,
    padding: 20,
  },
  spotOccupied: {
    backgroundColor: "purple",
    color: "white",
    height: 140,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginBottom: 10,
    marginRight: 10,
    padding: 20,
  },
  spotName: {
    //light purple
    color: "#976d97",
    fontSize: 20,
    fontWeight: "bold",
  },
});
