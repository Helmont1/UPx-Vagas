import React from "react";
import { StyleSheet, View, Text, Button } from 'react-native';
import { IStackScreenProps } from "../library/ISTackScreenProps";
import { BarCodeScanner } from "expo-barcode-scanner";
import { IQRCodeProps } from '../library/IQRCodeProps';


const Scanner: React.FunctionComponent<IStackScreenProps> = (props) => {
    
    const [loading, setLoading] = React.useState(true);
    const [scanData, setScanData] = React.useState<IQRCodeProps>();
    const [hasPermission, setHasPermission] = React.useState<boolean>(false);

    React.useEffect(() => {
        requestCameraPermission();
    }, []);
    //make a useeffect that make a post request to the server with the data from the qr code
    React.useEffect(() => {
        if (scanData) {
            console.log(scanData);
        }
    }, [scanData]);
    


    const requestCameraPermission = async () => {
        try {
            const { status, granted } = await BarCodeScanner.requestPermissionsAsync();
            if (status === 'granted') {
                setHasPermission(true);
            }else{
                setHasPermission(false);
            }
        }
        catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }

    }

    if(loading) return <View style={styles.container}>
        <Text>Carregando...</Text>
    </View>

    if(!hasPermission) return <View style={styles.container}>
        <Text>Sem permissão para acessar a câmera</Text>
    </View>

    if(scanData) return (
        <View>
            <Text>Nome: {scanData.name}</Text>
            <Text>Telefone: {scanData.number}</Text>
            <Button title="Voltar" onPress={() => setScanData(undefined)} />
        </View>
    )        

    if(hasPermission) return (
        <BarCodeScanner
            onBarCodeScanned={({type, data}) => {
                try{
                    console.log(data)
                    console.log(type)
                    let _data = JSON.parse(data);
                    setScanData(_data) 
                }
                catch(error){
                    console.log(error)
                }
            }}
            style={styles.container}
        >
            <Text style={styles.text}>Escaneie o QR CODE</Text>
        </BarCodeScanner>



    ) 
    return (
        <View style={styles.container}>


        </View>
    )
}

export default Scanner;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: 'white'
    }
})