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
import Navbottom from "../components/NavBottom";

export function ScreenB(props: NativeStackScreenProps<any, any>) {
  const navigation = useNavigation();
  function openScreenA() {
    navigation.navigate("Home");
  }
  function openScreenB() {
    navigation.navigate("Vagas");
  }
  function openSpotDetails(spot: any) {
    navigation.navigate("spotDetail", {
      spotName: spot.name,
      spotOccupied: spot.occupied,
      spotType: spot.type,
      parkingRegion: spot.region,
      spotId: spot.spotId,
      spotAdress: spot.adress,
    });
  }

  const [parkingSpots, setParkingSpots] = useState([]);

  useEffect(() => {
    fetch("https://upx4api2022.azurewebsites.net/spot", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setParkingSpots(json);
        console.log(json);
      })
      .catch((error) => {
        console.error(error);
      });
    setInterval(() => {
      fetch("https://upx4api2022.azurewebsites.net/spot", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          setParkingSpots(json);
          console.log(json);
        })
        .catch((error) => {
          console.error(error);
        });
    }, 10000);
  }, []);

  //nest the data by region and then map through the regions
  const regions = parkingSpots.reduce((acc: any, spot: any) => {
    if (!acc[spot.region]) {
      //if the region doesn't exist, create it
      acc[spot.region] = []; //create the region
    } //if the region exists, push the spot into the region
    acc[spot.region].push(spot); // push the spot into the region
    return acc; //return the region
  }, {}); //initialize the accumulator as an empty object

  const regionsArray = Object.keys(regions).map((region) => {
    //map through the regions
    return {
      //return an object with the region name and the spots in that region
      regionName: region, //the region name
      spots: regions[region], //the spots in that region
    }; //return the object
  }); //map through the regions

  return (
    <View style={styles.container}>
      <View style={styles.parkingContainer}>
        <Text style={styles.textTitle}>Vagas</Text>
        <View style={styles.spotsContainer}>
          <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
            {regionsArray ? (
              regionsArray.map((region) => {
                return (
                  <View key={region.regionName + "view"}>
                    <View style={styles.regionContainer}>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text style={styles.regionText}>
                          {region.regionName}
                        </Text>
                        <Text style={styles.regionText}>
                          Vagas: {region.spots.length}
                        </Text>
                      </View>
                    </View>

                    <FlatList
                      data={region.spots}
                      keyExtractor={(item) => item.spotId}
                      showsHorizontalScrollIndicator={false}
                      horizontal={true}
                      renderItem={({ item }) => (
                        <TouchableOpacity
                          style={[
                            styles.spot,
                            item.occupied ? styles.occupied : styles.free,
                          ]}
                          onPress={() => openSpotDetails(item)}
                        >
                          <Image
                            style={styles.spotImage}
                            source={require("../media/car.png")}
                          />
                          <Text style={styles.spotName}>{item.name}</Text>
                        </TouchableOpacity>
                      )}
                    />
                  </View>
                );
              })
            ) : (
              <Text>Não há vagas disponíveis</Text>
            )}
          </ScrollView>
        </View>
      </View>
      <Navbottom openScreenA={openScreenA} openScreenB={openScreenB} />
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
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 50,
    backgroundColor: "#686868",
    alignItems: "center",
    position: "absolute",
    bottom: 0,

    shadowColor: "#000",
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
  spot: {
    width: 100,
    height: 100,
    backgroundColor: "purple",
    borderRadius: 20,
    margin: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  textSpot: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  textRegion: {
    color: "#929292",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    padding: 15,
    alignSelf: "flex-start",
  },
  spotName: {
    color: "#ececec",
    fontSize: 14,
    fontWeight: "bold",
  },
  spotType: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  spotDescription: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  free: {
    backgroundColor: "#b6b6b6",
  },
  occupied: {
    backgroundColor: "#9d63c4",
  },
  spotImage: {
    width: 80,
    height: 80,
  },
  regionContainer: {
    width: "100%",
    backgroundColor: "#E8E8E8",
    borderRadius: 20,
    marginBottom: 20,
    flex: 1,
    flexGrow: 2,
    justifyContent: "space-around",
  },
  regionText: {
    color: "#929292",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    padding: 5,
    paddingHorizontal: 15,
    alignSelf: "flex-start",
    justifyContent: "space-around",
  },
});
