import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { IStackScreenProps } from "../library/ISTackScreenProps";
import { IQRCodeProps } from "../library/IQRCodeProps";
import QRcode from 'react-native-qrcode-svg'
import { useNavigation } from "@react-navigation/native";
import Scanner from "../Screens/Scanner";


const QRCode: React.FC = () => {
  const navigation = useNavigation()
  const payload: IQRCodeProps = {
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
  };

  return <View style={styles.container}>
    <View>
        {/* <Button title="Escanear vaga" onPress={() => navigation.navigate("Scanner")} /> */}
        {/* <QRcode value={JSON.stringify(payload)} size={200} /> */}
        <Scanner navigation={navigation} />
    </View>
  </View>;
};

export default QRCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
