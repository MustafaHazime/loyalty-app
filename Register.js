import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Picker,
  ScrollView,
  SafeAreaView,
  TouchableHighlight,
} from "react-native";
import { Image as ReactImage } from "react-native";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlePress(target, owner) {
    if (this.props.onPress) {
      let name;
      let id;
      let index = -1;
      if (target.search("::") > -1) {
        const varCount = target.split("::").length;
        if (varCount === 2) {
          name = target.split("::")[0];
          id = target.split("::")[1];
        } else if (varCount === 3) {
          name = target.split("::")[0];
          index = parseInt(target.split("::")[1]);
          id = target.split("::")[2];
        }
      } else {
        name = target;
      }
      this.props.onPress({
        type: "button",
        name: name,
        index: index,
        id: id,
        owner: owner,
      });
    }
  }

  handleChangeTextinput(name, value) {
    let id;
    let index = -1;
    if (name.search("::") > -1) {
      const varCount = name.split("::").length;
      if (varCount === 2) {
        name = name.split("::")[0];
        id = name.split("::")[1];
      } else if (varCount === 3) {
        name = name.split("::")[0];
        index = name.split("::")[1];
        id = name.split("::")[2];
      }
    } else {
      name = name;
    }
    let state = this.state;
    state[name.split("::").join("")] = value;
    this.setState(state, () => {
      if (this.props.onChange) {
        this.props.onChange({
          type: "textinput",
          name: name,
          value: value,
          index: index,
          id: id,
        });
      }
    });
  }

  render() {
    return (
      <SafeAreaView
        data-layer="01acad81-f8a0-4c1f-8dd7-aa1f300ddb33"
        style={styles.register}
      >
        <ReactImage
          data-layer="f68899b1-8851-4f37-bfeb-d6d640bcde75"
          source={require("./assets/rectangle7.png")}
          style={styles.register_rectangle7}
        />
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
        <Text
          data-layer="e5d828c6-0e0f-4134-985e-4ae1ab15098a"
          style={styles.register_firstName}
        >
          First Name
        </Text>
        <Text
          data-layer="ad89c353-9042-422f-bb43-93399a708745"
          style={styles.register_lastName}
        >
          Last Name
        </Text>
        <ReactImage
          data-layer="0ba22901-1645-4d35-b0d8-0eaeafbae392"
          source={require("./assets/x1.png")}
          style={styles.register_x1copy}
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
          source={require("./assets/x3.png")}
          style={styles.register_x3}
        />
        <ReactImage
          data-layer="5d8556f2-2ceb-4654-9e58-82cdde8fa9ad"
          source={require("./assets/x1.png")}
          style={styles.register_x1}
        />
        <Text
          data-layer="eef16412-f958-4221-897c-1834f792b4ed"
          style={styles.register_password}
        >
          Password
        </Text>
        <Text
          data-layer="b85a423c-3874-40b7-b28b-d1231e7f2ddf"
          style={styles.register_email}
        >
          Email
        </Text>
        <Text
          data-layer="50fce4ae-4ff4-4fed-9740-77d649c68829"
          style={styles.register_phoneNumber}
        >
          Phone Number
        </Text>
        <ReactImage
          data-layer="2347ee78-37b9-42a3-94e4-d3c5b7d16338"
          source={require("./assets/x2.png")}
          style={styles.register_x2}
        />
        <ReactImage
          data-layer="03be8905-481b-49d7-8051-4fcaeed6e1d4"
          source={require("./assets/x4.png")}
          style={styles.register_x4}
        />
        <Text
          data-layer="833bf8bb-cc47-4984-a69a-1b3d4f323a08"
          style={styles.register_agreeWithTermsConditions}
        >
          Agree with Terms & Conditions
        </Text>
        <ReactImage
          data-layer="faddae64-37e7-488f-a941-ab1db6695160"
          source={require("./assets/x5.png")}
          style={styles.register_x5}
        />
        <ReactImage
          data-layer="92c12fe1-79ec-4628-ab3f-2155497c070f"
          source={require("./assets/rectangle3.png")}
          style={styles.register_rectangle3}
        />
        <Text
          data-layer="b8759782-8a92-4668-a54d-352710e549e4"
          style={styles.register_createAccount}
        >
          Create Account
        </Text>
        <Text
          data-layer="8fb0a481-a8bf-4919-b479-ef6b86ef5ba1"
          style={styles.register_poweredBy}
        >
          Powered by
        </Text>
        <ReactImage
          data-layer="4d6ac383-296a-4dd7-8ff9-85fc331f4463"
          source={require("./assets/logoCopy.png")}
          style={styles.register_logoCopy}
        />
      </SafeAreaView>
    );
  }
}

Register.propTypes = {};

Register.defaultProps = {};

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
  register_rectangle7: {
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
    width: "auto",
    height: "auto",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
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
    color: "rgba(152, 150, 150, 1)",
    fontSize: 15,
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
    width: 88,
    height: 24,
    left: 89,
    top: 299,
  },
  register_lastName: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(152, 150, 150, 1)",
    fontSize: 15,
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
    width: 86,
    height: 24,
    left: 89,
    top: 365,
  },
  register_x1copy: {
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
  register_x3: {
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
  register_x1: {
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
  register_password: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(152, 150, 150, 1)",
    fontSize: 15,
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
    width: 77,
    height: 24,
    left: 89,
    top: 497,
  },
  register_email: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(152, 150, 150, 1)",
    fontSize: 15,
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
    width: 44,
    height: 24,
    left: 89,
    top: 429,
  },
  register_phoneNumber: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(152, 150, 150, 1)",
    fontSize: 15,
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
    width: 124,
    height: 24,
    left: 89,
    top: 565,
  },
  register_x2: {
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
  register_x4: {
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
  register_x5: {
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
