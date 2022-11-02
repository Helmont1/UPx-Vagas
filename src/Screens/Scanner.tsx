import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { IStackScreenProps } from "../library/ISTackScreenProps";
import { BarCodeScanner } from "expo-barcode-scanner";
import { IQRCodeProps } from "../library/IQRCodeProps";

const Scanner: React.FunctionComponent<IStackScreenProps> = (props) => {
  const [loading, setLoading] = React.useState(true);
  const [scanData, setScanData] = React.useState<IQRCodeProps>();
  const [hasPermission, setHasPermission] = React.useState<boolean>(false);

  React.useEffect(() => {
    requestCameraPermission();
  }, []);
  React.useEffect(() => {
    if (scanData) {
      console.log(scanData);
    }
  }, [scanData]);

  const requestCameraPermission = async () => {
    try {
      const { status, granted } =
        await BarCodeScanner.requestPermissionsAsync();
      if (status === "granted") {
        setHasPermission(true);
      } else {
        setHasPermission(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (scanData) {
    if (props.navigation) {
      props.navigation.navigate("Vagas", { scanData });
    }

    return (
      <View style={styles.container}>
       
        <Text>QRCode is valid</Text>

        <Button
          title="Voltar para vagas"
          onPress={() => props.navigation.navigate("Vagas")}
          style={styles.buttonVagas}
        />
        <Button
          title="Escanear novamente"
          onPress={() => setScanData(undefined)}
            style={styles.buttonScan}
        />
      </View>
    );
  }

  if (loading)
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );

  if (!hasPermission)
    return (
      <View style={styles.container}>
        <Text>Sem permissão para acessar a câmera</Text>
      </View>
    );

  if (hasPermission)
    return (
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={(scanned) => {
            if (scanned.data) {
              setScanData(JSON.parse(scanned.data));
            }
          }}
          style={styles.scanner}
        />
      </View>
    );

  return <View style={styles.container}></View>;
};

export default Scanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
  },
  barCodeBox: {
    height: 400,
    width: 400,
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "white",
  },
  scanner: {
    height: 400,
    width: 400,
  },
    
});
