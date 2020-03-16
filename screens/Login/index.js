import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity
} from "react-native";

import styles from "./style";
import Home from "../Home";

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loginStatus: false,
      loginError: false
    };

    this.handleOnPress = this.handleOnPress.bind(this);
    this.handleOnChangeText = this.handleOnChangeText.bind(this);
  }

  handleOnPress() {
    const { username, password } = this.state;
    if (username.toLowerCase() == "demo" && password.toLowerCase() == "demo")
      this.setState({ loginStatus: true });
    else this.setState({ username: "", password: "", loginError: true });
  }

  handleOnChangeText(key) {
    return text => this.setState({ [key]: text });
  }

  render() {
    const { loginStatus } = this.state;

    if (loginStatus) return <Home />;

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.appContainer}>
        <View style={styles.titleGroup}>
          <Text style={styles.title}>GC Login</Text>
        </View>

        <View style={styles.inputView}>
          {this.state.loginError && (
            <Text style={{ color: "red", fontSize: 13, marginBottom: 10 }}>
              Login failed. Please try again.
            </Text>
          )}
          <View style={styles.inputGroup}>
            <Text style={styles.inputText}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Username: Demo"
              autoCorrect={false}
              selectionColor="black"
              autoCorrect={false}
              value={this.state.username}
              onChangeText={this.handleOnChangeText("username")}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputText}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Password: Demo"
              autoCorrect={false}
              selectionColor="black"
              value={this.state.password}
              onChangeText={this.handleOnChangeText("password")}
            />
          </View>
          <TouchableOpacity
            onPress={this.handleOnPress}
            style={styles.buttonContainer}
          >
            <View style={styles.submitButton}>
              <Text style={styles.buttonText}>Submit</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginProblem}>
            <View>
              <Text>Forgot Password?</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
