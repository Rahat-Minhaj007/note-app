import { View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SignInSvgImage } from "../svg";
import Input from "../components/common/input/Input";
import Text from "../components/common/text/Text";
import { colors } from "../theme/colors";

export default function SignInScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.signInImage}>
        <SignInSvgImage />
      </View>
      <View>
        <Text
          preset="h4"
          customStyle={{ color: colors.orange, textAlign: "center" }}
        >
          Never forget your notes
        </Text>
      </View>
      <View style={{ marginVertical: 30 }}>
        <Input placeholder="Email" customStyle={{ marginBottom: 20 }} />
        <Input placeholder="Password" secureTextEntry={true} />
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
    marginHorizontal: 25,
    marginVertical: 10,
  },
  signInImage: {
    justifyContent: "center",
  },
});
