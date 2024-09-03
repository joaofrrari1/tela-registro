import React, { useState } from "react";
import { View, Text, TextInput, Pressable, SafeAreaView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');


    async function enviaRegistro() {

        if (!nome || !senha || !email) {
            alert('Preencha todas as opções')
        }

        const resposta = await fetch('https://taskhub-s37f.onrender.com/auth/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'name': nome, 'password': senha, 'email': email })

        }
        )
        alert('Registrado com sucesso!')
    }


   
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Registre-se</Text>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    placeholder="Digite seu email"
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setSenha(text)}
                    value={senha}
                    placeholder="Digite sua Senha"
                    keyboardType="Senha-address"
                    secureTextEntry={true}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setNome(text)}
                    value={nome}
                    placeholder="Digite seu Nome"
                    keyboardType="Nome"
                />
            </View>
            <Pressable style={styles.button} onPress={() => enviaRegistro()}>
                <Text style={styles.buttonText}>Registrar</Text>
            </Pressable>
        </SafeAreaView>
    );
}
