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
    const spotName = route.params.spotName;
    const spotOccupied = route.params.spotOccupied;
    const spotType = route.params.spotType;

    return (
        <View style={styles.container}>
            <Text>{spotName}</Text>
            <Text>{spotType}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

