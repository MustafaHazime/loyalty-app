import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Picker,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { Image as ReactImage } from "react-native";

export default class Login extends Component {
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
        data-layer="9d78685b-e85b-4d3c-b449-7b6457082ab7"
        style={styles.login}
      >
        <ReactImage
          data-layer="29b71159-4e53-4bd5-a28e-20d4d6386084"
          style={styles.login_path1}
          source={require("../assets/path1.png")}
        />
        <Text
          data-layer="74487432-acb1-4d50-89fa-924c45980ee7"
          style={styles.login_loginText}
        >
          Login
        </Text>
        <View
          data-layer="5b6946e3-2b55-48ea-a8e9-fb59cb111abe"
          style={styles.login_rectangle1}
        ></View>
        <View
          data-layer="e6de698c-8d08-4641-a414-d39520f9bdf8"
          style={styles.login_rectangle2}
        ></View>
        <Text
          data-layer="88b38366-b857-4d5d-ac46-bed622170eb3"
          style={styles.login_email}
        >
          Email
        </Text>
        <Text
          data-layer="cbafec41-033a-4102-bcc9-8eb9fbc095de"
          style={styles.login_password}
        >
          Password
        </Text>
        <ReactImage
          data-layer="bd01b629-b70f-4d05-9ff2-1a3454f4bcac"
          source={require("../assets/userIcon.png")}
          style={styles.login_userIcon}
        />
        <ReactImage
          data-layer="c7179ea5-c1dd-493f-a606-5bfcf3fc7ff8"
          source={require("../assets/passIcon.png")}
          style={styles.login_passIcon}
        />
        <Text
          data-layer="56b039cc-d38e-47ff-a9a9-7d57aad7eb97"
          style={styles.login_forgotPassword}
        >
          Forgot Password
        </Text>
        <ReactImage
          data-layer="c2426112-b0ef-4d2f-85e6-8bf5266528aa"
          source={require("../assets/rectangle3.png")}
          style={styles.login_rectangle3}
        />
        <Text
          data-layer="542fb573-d9dd-4c15-82ed-771631667792"
          style={styles.login_signIn}
        >
          Sign In
        </Text>
        <Text
          data-layer="6fe186ba-1684-4b89-b325-ce8b22feecf4"
          style={styles.login_orLoginUsing}
        >
          Or Login Using
        </Text>
        <ReactImage
          data-layer="00e1f67e-3955-4722-93ba-c89ce405a905"
          source={require("../assets/googleIcon.png")}
          style={styles.login_googleIcon}
        />
        <ReactImage
          data-layer="16c95791-9d33-4e51-b02e-656d00a8a6a0"
          source={require("../assets/facebookIcon.png")}
          style={styles.login_facebookIcon}
        />
        <ReactImage
          data-layer="254c3680-e815-4c5f-82b2-0b99adf30a2b"
          source={require("../assets/appleIcon.png")}
          style={styles.login_appleIcon}
        />
        <Text
          data-layer="2b7fef8c-1421-41da-b528-d44e93279abf"
          style={styles.login_signUp}
        >
          Sign Up
        </Text>
        <Text
          data-layer="b14b6977-2244-4ca0-9fd1-9d5a2b610ca0"
          style={styles.login_poweredBy}
        >
          Powered by
        </Text>
        <ReactImage
          data-layer="db033b63-1ce3-4c1d-b3c8-f958b1a589b4"
          source={require("../assets/logoCopy.png")}
          style={styles.login_logoCopy}
        />
      </SafeAreaView>
    );
  }
}

Login.propTypes = {};

Login.defaultProps = {};

const styles = StyleSheet.create({
  login: {
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
  login_path1: {
    opacity: 1,
    position: "absolute",
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
    bottom: 0,
  },
  login_loginText: {
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
    width: 86,
    height: 46,
    left: 175,
    top: 100,
  },
  login_rectangle1: {
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
  login_rectangle2: {
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
  login_email: {
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
    top: 299,
  },
  login_password: {
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
    top: 365,
  },
  login_userIcon: {
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
  login_passIcon: {
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
  login_forgotPassword: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
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
    width: 112,
    height: 19,
    left: 280,
    top: 404,
  },
  login_rectangle3: {
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
    width: 381,
    height: 48,
    left: 17,
    top: 511,
  },
  login_signIn: {
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
    width: 66,
    height: 28,
    left: 175,
    top: 523,
  },
  login_orLoginUsing: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
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
    width: 95,
    height: 19,
    left: 165,
    top: 587,
  },
  login_googleIcon: {
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
    left: 145,
    top: 606,
  },
  login_facebookIcon: {
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
    left: 203,
    top: 606,
  },
  login_appleIcon: {
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
    left: 174,
    top: 606,
  },
  login_signUp: {
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
    width: 75,
    height: 28,
    left: 175,
    top: 721,
  },
  login_poweredBy: {
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
  login_logoCopy: {
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
