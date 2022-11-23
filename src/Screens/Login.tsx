import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const Login = () => {


    const [student, setStudent] = useState({
        id: 0,
        name: "",
        ra: "",
        spotId: 0,
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [error, setError] = useState("");

    const navigation = useNavigation();

    function openScreenA() {
        navigation.navigate("Home");
    }

    function openScreenB() {
        navigation.navigate("Vagas");
    }
    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setStudent({ ...student, [name]: value });
    };

    

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    value={student.name}
                    onChangeText={
                        (text) => setStudent({ ...student, name: text })

                    }
                />
                <TextInput
                    style={styles.input}
                    placeholder="RA"
                    value={student.ra}
                    onChangeText={(text) => setStudent({ ...student, ra: text })}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={text => setStudent({ ...student, email: text })}
                    value={student.email}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    onChangeText={text => setStudent({ ...student, password: text })}
                    value={student.password}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    onChangeText={text => setStudent({ ...student, confirmPassword: text })}
                    value={student.confirmPassword}
                />
                <Button
                    title="Login"
                    onPress={() => { 
                        console.log(student);
                    }}
                />
            </View>
            <Text style={styles.error}>{error}</Text>
            {
                //display error message if there is one
                error ? <Text style={styles.error}>{error}</Text> : null

            }
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
    form: {
        width: "100%",
        alignItems: "center",
    },

    error: {
        color: "red",
    },
});

export default Login;

