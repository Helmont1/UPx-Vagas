import React from "react";
import { StyleSheet, Pressable, Text, View } from "react-native";

const Navbottom = (props: any) => {
  return (
    <View style={styles.nav}>
      <Pressable style={styles.buttonLeft} onPress={props.openScreenA}>
        <Text style={styles.text}>Home</Text>
      </Pressable>
      <Pressable style={styles.buttonRight} onPress={props.openScreenB}>
        <Text style={styles.text}>Vagas</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: 50,
    backgroundColor: "#686868",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  buttonLeft: {
    borderColor: "gray",
    textAlign: "center",
    backgroundColor: "#686868",
  },
  buttonRight: {
    borderColor: "gray",
    textAlign: "center",
    backgroundColor: "#686868",
  },
  text: {
    color: "white",
  },
});

export default Navbottom;
