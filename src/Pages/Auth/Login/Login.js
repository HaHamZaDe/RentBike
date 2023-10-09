import React, { useState } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../../../../config";
import styles from "./LoginStyle";
import Input from "../../../Components/Input";
import Button from "../../../Components/Button";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (email, password) => {
    try {
      setLoading(true);
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bi-Rent</Text>
      <View style={styles.inputContainer}>
        <Input
          onType={(email) => setEmail(email)}
          placeholder="E-posta giriniz"
        />
        <Input
          onType={(password) => setPassword(password)}
          placeholder="Parola giriniz"
          isSecure
        />
      </View>
      <Button
        text={"Giriş Yapın"}
        onPress={() => handleLogin(email, password)}
        loading={loading}
      />
      <Button
        text={"Kayıt Olun"}
        onPress={() => navigation.navigate("Register")}
        loading={loading}
        theme="secondary"
      />
    </View>
  );
};

export default Login;
