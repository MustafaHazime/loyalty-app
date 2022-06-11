import React, { Component, useState } from "react";

import PropTypes from "prop-types";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Picker,
  ScrollView,
  Pressable,
  SafeAreaView,
  TouchableHighlight,
  Alert,
} from "react-native";
import { Image as ReactImage } from "react-native";

import { Button, TouchableOpacity } from "react-native-web";
import { LinearGradient } from "expo-linear-gradient";

const Register = () => {
  const simpleAlertHandler = () => {
    //function to make simple alert
    alert("Account Was Created Successfully.");
  };
  //states to show the check  Images to  agree on conditions or not
  const [shouldShow, setShouldShow] = useState(true);
  //states  to  edit the various  text  inputs
  const [firstName, setfirstName] = React.useState("");
  const [lastName, setlastName] = React.useState("");
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [phone, setphone] = React.useState("");

  //returning or showing all the components we have in the register screen
  return (
    <LinearGradient
      colors={["#BB849F", "#888ABC"]}
      data-layer="01acad81-f8a0-4c1f-8dd7-aa1f300ddb33"
      style={styles.register}
    >
      <Text
        data-layer="1e60de70-c629-4556-9d3e-e50294f871b2"
        style={styles.register_registerText}
      >
        Register
      </Text>

      <View
        data-layer="578ebd96-6c90-4c79-b7fe-9be3d22670e3"
        style={styles.register_rectangle1}
      ></View>
      <View
        data-layer="ccb41864-4dce-43d6-ad7c-0f471ebea5d9"
        style={styles.register_rectangle2}
      ></View>
      <TextInput
        //this is for the first name text input and  the same applies  to  the rest  of the text inputs
        placeholder="First Name"
        placeholderTextColor="#989696"
        autoCapitalize="none"
        value={firstName}
        onChangeText={(firstName) => setfirstName(firstName)}
        style={styles.register_firstName}
      ></TextInput>
      <TextInput
        placeholder="Last Name"
        placeholderTextColor="#989696"
        autoCapitalize="none"
        value={lastName}
        onChangeText={(lastName) => setlastName(lastName)}
        style={styles.register_lastName}
      ></TextInput>
      <ReactImage
        //these  are the react  images that  we fetched that  are saved on our device
        data-layer="0ba22901-1645-4d35-b0d8-0eaeafbae392"
        source={require("../assets/userIcon.png")}
        style={styles.register_userIconCopy}
      />
      <View
        data-layer="bda1e95c-ac81-4d34-8e8a-84872625f194"
        style={styles.register_rectangle4}
      ></View>
      <View
        data-layer="a5706975-e12a-4090-8cb0-b374ea67c2f6"
        style={styles.register_rectangle5}
      ></View>
      <View
        data-layer="2ceea75b-4ec3-4ce9-bcb1-88368ddb844d"
        style={styles.register_rectangle6}
      ></View>
      <ReactImage
        data-layer="96ccf50d-e527-4a44-953d-662f01858a11"
        source={require("../assets/passIcon.png")}
        style={styles.register_passIcon}
      />
      <ReactImage
        data-layer="5d8556f2-2ceb-4654-9e58-82cdde8fa9ad"
        source={require("../assets/userIcon.png")}
        style={styles.register_userIcon}
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor="#989696"
        autoCapitalize="none"
        value={email}
        onChangeText={(email) => setemail(email)}
        style={styles.register_email}
      ></TextInput>
      <TextInput
        placeholder="Password"
        placeholderTextColor="#989696"
        autoCapitalize="none"
        value={password}
        onChangeText={(password) => setpassword(password)}
        style={styles.register_password}
      ></TextInput>

      <TextInput
        placeholder="Phone Number"
        placeholderTextColor="#989696"
        autoCapitalize="none"
        value={phone}
        onChangeText={(phone) => setphone(phone)}
        style={styles.register_phoneNumber}
      ></TextInput>
      <ReactImage
        data-layer="2347ee78-37b9-42a3-94e4-d3c5b7d16338"
        source={require("../assets/emailIcon.png")}
        style={styles.register_emailIcon}
      />
      <ReactImage
        data-layer="03be8905-481b-49d7-8051-4fcaeed6e1d4"
        source={require("../assets/phoneIcon.png")}
        style={styles.register_phoneIcon}
      />
      <Text
        data-layer="833bf8bb-cc47-4984-a69a-1b3d4f323a08"
        style={styles.register_agreeWithTermsConditions}
      >
        Agree with Terms & Conditions
      </Text>

      <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
        {shouldShow ? (
          //This  is  the touchable  opacity  that   works like a button  and  is responsible for switchinng between two images
          <ReactImage
            data-layer="faddae64-37e7-488f-a941-ab1db6695160"
            source={require("../assets/emptycheckIcon.png")}
            style={styles.register_emptycheckIcon}
          />
        ) : (
          <ReactImage
            source={require("../assets/fullcheckIcon.png")}
            style={styles.register_fullcheckIcon}
          />
        )}
      </TouchableOpacity>
      <ReactImage
        data-layer="92c12fe1-79ec-4628-ab3f-2155497c070f"
        source={require("../assets/rectangle3.png")}
        style={styles.register_rectangle3}
      />
      <Pressable
        onPress={simpleAlertHandler}
        data-layer="b8759782-8a92-4668-a54d-352710e549e4"
        style={styles.register_createAccount}
      >
        <Text style={styles.register_createAccountText}>Create Account</Text>
      </Pressable>
      <Text
        data-layer="8fb0a481-a8bf-4919-b479-ef6b86ef5ba1"
        style={styles.register_poweredBy}
      >
        Powered by
      </Text>
      <ReactImage
        data-layer="4d6ac383-296a-4dd7-8ff9-85fc331f4463"
        source={require("../assets/logoCopy.png")}
        style={styles.register_logoCopy}
      />
    </LinearGradient>
  );
};

Register.propTypes = {};

Register.defaultProps = {};

//here we  have the  styles to the  various components  we hold in the register  screen
const styles = StyleSheet.create({
  register: {
    opacity: 1,
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 1)",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 414,
    height: 896,
    left: 0,
    top: 0,
  },
  register_fullcheckIcon: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 58,
    height: 41,
    left: 24,
    top: 608,
  },

  register_registerText: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "700",
    fontStyle: "normal",
    fontFamily: "Segoe UI",
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 125,
    height: 46,
    left: 145,
    top: 100,
  },
  register_rectangle1: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(227, 213, 213, 1)",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopWidth: 1,
    borderTopColor: "rgba(112, 112, 112, 1)",
    borderRightWidth: 1,
    borderRightColor: "rgba(112, 112, 112, 1)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(112, 112, 112, 1)",
    borderLeftWidth: 1,
    borderLeftColor: "rgba(112, 112, 112, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    width: 381,
    height: 48,
    left: 17,
    top: 282,
  },
  register_rectangle2: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(227, 213, 213, 1)",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopWidth: 1,
    borderTopColor: "rgba(112, 112, 112, 1)",
    borderRightWidth: 1,
    borderRightColor: "rgba(112, 112, 112, 1)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(112, 112, 112, 1)",
    borderLeftWidth: 1,
    borderLeftColor: "rgba(112, 112, 112, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    width: 381,
    height: 48,
    left: 17,
    top: 350,
  },
  register_firstName: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "black",
    fontSize: 15,
    fontWeight: "500",
    fontStyle: "normal",
    fontFamily: "Segoe UI",
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 300,
    height: 24,
    left: 89,
    top: 295,
  },
  register_lastName: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "black",
    fontSize: 15,
    fontWeight: "500",
    fontStyle: "normal",
    fontFamily: "Segoe UI",
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 300,
    height: 24,
    left: 89,
    top: 362,
  },
  register_userIconCopy: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 58,
    height: 41,
    left: 24,
    top: 286,
  },
  register_rectangle4: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(227, 213, 213, 1)",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopWidth: 1,
    borderTopColor: "rgba(112, 112, 112, 1)",
    borderRightWidth: 1,
    borderRightColor: "rgba(112, 112, 112, 1)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(112, 112, 112, 1)",
    borderLeftWidth: 1,
    borderLeftColor: "rgba(112, 112, 112, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    width: 381,
    height: 48,
    left: 17,
    top: 415,
  },
  register_rectangle5: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(227, 213, 213, 1)",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopWidth: 1,
    borderTopColor: "rgba(112, 112, 112, 1)",
    borderRightWidth: 1,
    borderRightColor: "rgba(112, 112, 112, 1)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(112, 112, 112, 1)",
    borderLeftWidth: 1,
    borderLeftColor: "rgba(112, 112, 112, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    width: 381,
    height: 48,
    left: 17,
    top: 483,
  },
  register_rectangle6: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(227, 213, 213, 1)",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopWidth: 1,
    borderTopColor: "rgba(112, 112, 112, 1)",
    borderRightWidth: 1,
    borderRightColor: "rgba(112, 112, 112, 1)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(112, 112, 112, 1)",
    borderLeftWidth: 1,
    borderLeftColor: "rgba(112, 112, 112, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    width: 381,
    height: 48,
    left: 17,
    top: 551,
  },
  register_passIcon: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 58,
    height: 41,
    left: 24,
    top: 486.5,
  },
  register_userIcon: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 58,
    height: 41,
    left: 24,
    top: 352,
  },
  register_email: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "black",
    fontSize: 15,
    fontWeight: "500",
    fontStyle: "normal",
    fontFamily: "Segoe UI",
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 300,
    height: 24,
    left: 89,
    top: 426,
  },
  register_password: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "black",
    fontSize: 15,
    fontWeight: "500",
    fontStyle: "normal",
    fontFamily: "Segoe UI",
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 300,
    height: 24,
    left: 89,
    top: 494,
  },

  register_phoneNumber: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "black",
    fontSize: 15,
    fontWeight: "500",
    fontStyle: "normal",
    fontFamily: "Segoe UI",
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 300,
    height: 24,
    left: 89,
    top: 562,
  },
  register_emailIcon: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 58,
    height: 41,
    left: 24,
    top: 416,
  },
  register_phoneIcon: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 58,
    height: 41,
    left: 24,
    top: 553.5,
  },
  register_agreeWithTermsConditions: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(230, 224, 224, 1)",
    fontSize: 13,
    fontWeight: "700",
    fontStyle: "normal",
    fontFamily: "Segoe UI",
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 197,
    height: 19,
    left: 89,
    top: 619,
  },

  register_emptycheckIcon: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 58,
    height: 41,
    left: 24,
    top: 608,
  },

  register_rectangle3: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    width: 245,
    height: 48,
    left: 85,
    top: 728,
  },
  register_createAccount: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17,
    fontWeight: "700",
    fontStyle: "normal",
    fontFamily: "Segoe UI",
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 146,
    height: 28,
    left: 150,
    top: 740,
  },
  register_createAccountText: {
    fontSize: 17,
    opacity: 1,
    color: "white",
    position: "absolute",
    fontWeight: "700",
    left: -5,
    top: 2,
  },
  register_poweredBy: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(97, 97, 97, 1)",
    fontSize: 8,
    fontWeight: "700",
    fontStyle: "normal",
    fontFamily: "Segoe UI",
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 48,
    height: 12,
    left: 165,
    top: 855,
  },
  register_logoCopy: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 48,
    height: 31,
    left: 213,
    top: 846,
  },
});

export default Register;
