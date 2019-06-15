import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { Card } from 'react-native-elements';
import CreditCard from './components/creditCard';


class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card style={styles.card}>
          <CreditCard/>
        </Card>
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808080',
    justifyContent: 'center',
    
  },
});
