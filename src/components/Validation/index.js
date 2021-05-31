import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default class Validation extends Component {
  state = {
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
  };

  handleSubmit = () => {
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    console.log(regexEmail.test(this.state.email.trim()));

    if (!this.state.email.trim().length) {
      this.setState({emailError: 'Email không được bỏ trống'});
    } else if (!regexEmail.test(this.state.email.trim())) {
      this.setState({emailError: 'Email không hợp lệ'});
    } else {
      this.setState({emailError: ''});
    }
    if (!this.state.password.trim().length) {
      this.setState({passwordError: 'Password không được bỏ trống'});
    } else if (
      this.state.password.trim().length < 5 ||
      this.state.password.trim().length > 8
    ) {
      this.setState({passwordError: 'Password sẽ từ 5 đến 8 ký tự'});
    } else {
      this.setState({passwordError: ''});
    }
  };

  handleBlur = () => {
    if (!this.state.email.trim().length) {
      this.setState({emailError: 'Email không được bỏ trống'});
    }
    if (!this.state.password.trim().length) {
      this.setState({passwordError: 'Password không được bỏ trống'});
    }
  };

  handleSubmitFormik = values => {
    console.log(values);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loginForm}>
          <Text>Login Form</Text>

          <View style={styles.inputContainer}>
            <Text>Email</Text>
            <TextInput
              style={[
                styles.inputField,
                this.state.emailError && styles.inputError,
              ]}
              onChangeText={text =>
                this.setState({email: text, emailError: false})
              }
              onBlur={this.handleBlur}
              placeholder="example@email.co"
              value={this.state.email}
            />

            {this.state.emailError.length !== 0 && (
              <Text style={styles.errorText}>{this.state.emailError}</Text>
            )}
          </View>
          <View style={styles.inputContainer}>
            <Text>Password</Text>
            <TextInput
              style={[
                styles.inputField,
                this.state.passwordError && styles.inputError,
              ]}
              placeholder="******"
              secureTextEntry={false}
              onChangeText={text =>
                this.setState({password: text, passwordError: false})
              }
              onBlur={this.handleBlur}
              value={this.state.password}
            />
            {!!this.state.passwordError && (
              <Text style={styles.errorText}>{this.state.passwordError}</Text>
            )}
          </View>
          <TouchableOpacity
            style={styles.signInButton}
            onPress={this.handleSubmit}>
            <Text>Sign in</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginForm: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginVertical: 10,
  },
  inputField: {
    borderWidth: 1,
    padding: 8,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
  },
  signInButton: {
    backgroundColor: '#bffefe',
    padding: 8,
    width: '30%',
    alignItems: 'center',
  },
});
