import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SignInSvgImage } from "../svg";

export default function SignInScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.signInImage}>
        <SignInSvgImage />
      </View>
      <View>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "600",
            fontSize: 14,
            color: "#EDA249",
          }}
        >
          Never forget your notes
        </Text>
      </View>
      <View style={{ marginVertical: 30 }}>
        <TextInput
          placeholder="Email"
          style={{
            height: 40,
            borderColor: "#EDA249",
            borderBottomWidth: 0.5,
            marginHorizontal: 25,
            marginVertical: 10,
            padding: 10,
          }}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={{
            height: 40,
            borderColor: "#EDA249",
            borderBottomWidth: 0.5,
            marginHorizontal: 25,
            marginVertical: 10,
            padding: 10,
          }}
        />
      </View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "#EDA249",
            padding: 14,
            margin: 10,
            width: "50%",
            borderRadius: 50,
            marginTop: 100,
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 16,
              textTransform: "uppercase",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  signInImage: {
    justifyContent: "center",
  },
});
