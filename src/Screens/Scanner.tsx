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
      //make a put request to the api
      //if the request is successful, navigate to the spot details screen
      //if the request is not successful, show an error message
      const putRequest = async () => {
        try {
        const response = await fetch(`https://upx4api2022.azurewebsites.net/spot/${scanData.spotId}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            spotId: scanData.spotId,
            region: scanData.region,
            name: scanData.name,
            type: scanData.type,
            latitude: scanData.latitude === undefined ? 40.0 : scanData.latitude,
            longitude: scanData.longitude === undefined ? 40.0 : scanData.longitude,
            address: scanData.address === undefined ? "Rua do Pão" : scanData.address,
            occupied: !scanData.occupied,
          }),
        });
        if (response.status === 200) {
          if (props.navigation) {
            props.navigation.navigate("vagas");
          
          }
        }
      } catch (error) {
        console.log(error);
      }
      };
      putRequest();
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
          focusable={true}
          
        />
        {/* flashlightMode={BarCodeScanner.Constants.FlashMode.torch} */}
        
        <Text style={styles.text}>Escaneie o QRCode</Text>
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
  //scanner full screen
  scanner: {
    flex: 1,
    width: "100%",
  },

    
});
