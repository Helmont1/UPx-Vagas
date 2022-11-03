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
            <View style={styles.header}>
                <Text style={styles.textHeader}>Detalhes da vaga</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.bodyHeader}>
                    <Text style={styles.textBodyHeader}>Vaga {spotName}</Text>
                    <Text style={styles.textBodyHeader}>Tipo: {spotType}</Text>
                    <Text style={styles.textBodyHeader}>Status: {spotOccupied ? "Ocupada" : "Livre"}</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>{!spotOccupied ? "Ocupar" : "Liberar"}</Text>
                </TouchableOpacity>
            </View>                
        </View>
    )

}

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
    }
}) 