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
      spotAddress: spot.address,
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
    }, 5000); // 5 seconds
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
  parkingContainer: {
    flex: 1,
    backgroundColor: "#686868",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  textTitle: {
    color: "#acacac",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
  },
  spotsContainer: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 10,
    paddingTop: 30,
  },
    

});
