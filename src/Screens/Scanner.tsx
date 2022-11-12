import React from "react";
import { StyleSheet, View, Text, Button, Pressable, FlatList } from "react-native";
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
          const response = await fetch(
            `https://upx4api2022.azurewebsites.net/spot/${scanData.spotId}`,
            {
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
                latitude:
                  scanData.latitude === undefined ? 40.0 : scanData.latitude,
                longitude:
                  scanData.longitude === undefined ? 40.0 : scanData.longitude,
                address:
                  scanData.address === undefined
                    ? "Rua do Pão"
                    : scanData.address,
                occupied: !scanData.occupied,
              }),
            }
          );
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
      <View style={styles.containerButtons}>
        <View style={styles.header}>
          <Text style={styles.headerText}>QR Code</Text>
          <FlatList
            data={[scanData]}
            renderItem={({ item }) => (
              <View style={styles.qrCode}>
                <Text style={styles.qrCodeText}>Spot ID: {item.spotId}</Text>
                <Text style={styles.qrCodeText}>Region: {item.region}</Text>
                <Text style={styles.qrCodeText}>Name: {item.name}</Text>
                <Text style={styles.qrCodeText}>Type: {item.type}</Text>
                <Text style={styles.qrCodeText}>
                  Latitude: {item.latitude}
                </Text>
                <Text style={styles.qrCodeText}>
                  Longitude: {item.longitude}
                </Text>
                <Text style={styles.qrCodeText}>Address: {item.address}</Text>
                <Text style={styles.qrCodeText}>
                  Occupied: {item.occupied ? "Yes" : "No"}
                </Text>
              </View>
            )}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.spotId * 1000 + ""}
          />
                
        </View>
        <View style={styles.body}>
          <Pressable
            style={styles.button}
            onPress={() => {
              setScanData(undefined);
            }}
          >
            <Text style={styles.buttonText}>Escanear Novamente</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => {
              if (props.navigation) {
                props.navigation.navigate("Vagas");
              }
            }}
          >
            <Text style={styles.buttonText}>Ir para vagas</Text>
          </Pressable>
        </View>
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
    height: 900,
    width: 900,
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "white",
  },
  //scanner full screen
  scanner: {
    position: "absolute",
    height: 900,
    width: 900,
    padding: 10,
  },
  containerButtons: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonVagas: {
    marginTop: 20,
  },

  header: {
    flex: 1,
    width: 400,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#d3d3d3",
    marginBottom: 20,
    padding: 30,
    borderRadius: 10,
  },
  scanResponse: {
    fontSize: 20,
    color: "white",
    backgroundColor: "gray",
    paddingTop: 0,
    borderRadius: 20,

  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    width: 350,
    flexDirection: "row",
  },

  button: {
    width: 150,
    height: 80,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    color: "#fff",
  },
  buttonText: {
    color: "#fff",
    padding: 10,
  },
  
  qrCode: {
    backgroundColor: "#eee",
    borderRadius: 10,
    paddingTop: 0,
    paddingBottom: 10,
    paddingLeft: 40,
    paddingRight: 40,
  },
  qrCodeText: {
    fontSize: 20,
    color: "#000",
  },


});
