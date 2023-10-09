import React, { useState } from "react";
import { View, Text } from "react-native";
import { firebase } from "../../../../config";
import styles from "./RegisterStyle";
import Input from "../../../Components/Input";
import Button from "../../../Components/Button";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (email, password) => {
    try {
      setLoading(true);
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      setLoading(false);
      alert("Kayıt başarılı!");
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
          placeholder="Şifre giriniz"
          isSecure
        />
      </View>
      <Button
        text={"Kayıt Ol"}
        onPress={() => handleRegister(email, password)}
        loading={loading}
      />
    </View>
  );
};

export default Register;
