import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, UserTextInput, Button } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

renderError() {
  if (this.props.error) {
    return (
      <View style={{ flex: 1, backgroundColor: 'grey' }}>
        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
      </View>
    );
  }
}

  render() {
    return (
      <Card>
        <CardSection>
          <UserTextInput
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            //This comes from the state object that was handled by the AuthReducer
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <UserTextInput
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}

          />
        </CardSection>

        <CardSection>
          {this.renderError()}
          <Button onPress={this.onButtonPress.bind(this)}>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 14,
    alignSelf: 'center',
    color: 'red'
  }
};

// If we're not using 'mapStateToProps' we pass in 'null' as the first argument
// to the connect function because that is reserved for 'mapStateToProps'

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error
  };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);
