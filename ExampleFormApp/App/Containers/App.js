// @flow

import React, { Component } from 'react';
import { Text, ScrollView, View, Button, TextInput } from 'react-native';
import { Form } from 'react-native-simple-form';
import styles from './Styles/AppStyle';

/**
 * Root component to wire up ios and android.
 */
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.welcome}>Form Example</Text>

          <Form ref="form" style={styles.form}>
            <View>
              <Text>Firstname</Text>
              <TextInput
                type="TextInput"
                name="firstname"
                style={styles.input}
              />
            </View>
            <View>
              <Text>Lastname</Text>
              <TextInput
                type="TextInput"
                name="lastname"
                style={styles.input}
              />
            </View>
          </Form>

          <Button
            onPress={() => console.log(this.refs.form.getValues())}
            title="Submit"
          />
        </ScrollView>
      </View>
    );
  }
}

export default App;
