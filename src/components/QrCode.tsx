import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { IStackScreenProps } from "../library/ISTackScreenProps";
import { IQRCodeProps } from "../library/IQRCodeProps";
import QRcode from 'react-native-qrcode-svg'
import { useNavigation } from "@react-navigation/native";


const QRCode: React.FC = () => {
  const navigation = useNavigation()
  const payload: IQRCodeProps = {
    name: "Elon Msuk",
    number: "1234567890",
  };

  return <View style={styles.container}>
    <View>
        <Button title="Escanear vaga" onPress={() => navigation.navigate("Scanner")} />
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
