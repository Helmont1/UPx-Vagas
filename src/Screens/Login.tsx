import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface student {
    id: number;
    name: string;
    ra: string;
    spotId: number;
}


const Login = () => {
    
    const [name, setName] = React.useState("");
    const [ra, setRa] = React.useState("");
    const [student, setStudent] = React.useState<student>();

    const [error, setError] = React.useState("");

    const navigation = useNavigation();

    function openScreenA() {
        navigation.navigate("home");
    }

    function openScreenB() {
        navigation.navigate("hagas");
    }

    function handleLogin() {
        if (name === "" || ra === "") {
            setError("Preencha todos os campos");
        } else {
            setStudent({
                id: Math.random(),
                name: name,
                ra: ra,
                spotId: Math.random(),
            });
            setError("");
            openScreenA();
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                onChangeText={text => setName(text)}
                value={name}
            />
            <TextInput
                style={styles.input}
                placeholder="RA"
                onChangeText={text => setRa(text)}
                value={ra}
            />
            <Button
                title="Login"
                onPress={handleLogin}
            />
            <Text style={styles.error}>{error}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
    input: {
        width: "80%",
        height: 40,
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 4,

        marginBottom: 16,
        padding: 8,
    },
    error: {
        color: "red",
    },
});

export default Login;

