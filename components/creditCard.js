import React, { Component } from 'react';
import { StyleSheet, View, Text, Animated, Easing } from 'react-native';
import FAB from 'react-native-fab'


class CreditCard extends Component {
  state = {
    counter: 0,
    counterAnimation: new Animated.Value(1),
    scaleAddBtnXAnimation: new Animated.Value(0),
    scaleAddBtnYAnimation: new Animated.Value(0),
    scaleCtrXAnimation: new Animated.Value(0),
    scaleCtrYAnimation: new Animated.Value(0),
  };

 
  handleMinusClick() {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1
      });
      this.animateCtr();
    }
  };

 handlePlusClick() {
  this.setState({
    counter: this.state.counter + 1
  });

    if (this.state.counter == 0) {
      this.animateBtn();
    }

    this.animateCtr();
  };
  
  //Button animation 

  animateBtn() {
    Animated.timing(this.state.scaleAddBtnXAnimation, {
      toValue: 1,
      duration: 200,
      easing: Easing.quad
    }).start();
    Animated.timing(this.state.scaleAddBtnYAnimation, {
      toValue: 1,
      duration: 200,
      easing: Easing.quad
    }).start();
    Animated.timing(this.state.scaleCtrXAnimation, {
      toValue: 1,
      duration: 200,
      easing: Easing.quad
    }).start();
    Animated.timing(this.state.scaleCtrYAnimation, {
      toValue: 1,
      duration: 200,
      easing: Easing.quad
    }).start();
  }

  animateCtr() {
    Animated.spring(this.state.counterAnimation, {
      toValue: 1,
      speed: 0.5,
    }).start();
    setTimeout(() => {
      Animated.spring(this.state.counterAnimation, {
        toValue: 1,
        speed: 0.1,
      }).start();
    }, 20);
  }

  render() {
   
    const scaleAddBtnXAnimation = this.state.scaleAddBtnXAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 1]
    });
    const scaleAddBtnYAnimation = this.state.scaleAddBtnYAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 1]
    });
    const scaleCtrXAnimation = this.state.scaleAddBtnYAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });
    const scaleCtrYAnimation = this.state.scaleAddBtnYAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });
    const scaleMinusXAnimation = this.state.scaleAddBtnYAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 0.8]
    });
    const scaleMinusYAnimation = this.state.scaleAddBtnYAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 0.8]
    });
    const counter = this.state.counter;

    return (
      <View>
        <View style={styles.box}></View>
        <View style={styles.box1}>
        </View>
        <View>
          <Text style={styles.price}>$29</Text>
          <View style={styles.btns}>
            <Animated.View style={{
              ...styles.stView,
              transform: [
                { scaleX: scaleCtrXAnimation },
                { scaleY: scaleCtrYAnimation }
              ],
            }}>
              <View style={{
                ...styles.st
              }}>
                <Animated.Text style={{
                  ...styles.Count
                }}>{counter}
                </Animated.Text>
              </View>
            </Animated.View>
            <Animated.View style={{
              ...styles.minusBtn,
              transform: [
                { scaleX: scaleMinusXAnimation },
                { scaleY: scaleMinusYAnimation }
              ],
            }}>
              <FAB buttonColor="#FFF" iconTextColor="#000"
                onClickAction={this.handleMinusClick.bind(this)} visible={true}
                snackOffset={-40} style={styles.mnsBtn} iconTextComponent={<Text>-</Text>}
              />
            </Animated.View>
            <Animated.View style={{
              ...styles.plusBtn,
              transform: [
              { scaleX: scaleAddBtnXAnimation },
              { scaleY: scaleAddBtnYAnimation }
              ],
            }}>
              <FAB buttonColor="#66CCCC" iconTextColor="#fff"
                onClickAction={this.handlePlusClick.bind(this)} visible={true}
                snackOffset={-40} style={styles.addBtn}
              />
            </Animated.View>
          </View>
        </View>
      </View>
    );
  }
}
export default CreditCard;

const styles = StyleSheet.create({
  //styling for the box
  box: {
    width: 200,
    height: 20,
    borderRadius: 5,
    backgroundColor: '#eee',
  },
  box1: {
    width: 180,
    backgroundColor: '#eee',
    height: 30,
    width: 180,
    borderRadius: 5,
    marginTop: 30
  },
  //styling for the price tag
  price: {
    fontSize: 25,
    color: '#222',
    marginTop: 30,
  },
  //styling for the add button
  addBtn: {
    height: 55,
    width: 55
  },
  mnsBtn: {
    width: 55,
    height: 55
  },
  //plus button style
  plusBtn: {
    alignSelf: 'flex-end',
    width: 95,
  },

  btns: {
    marginTop: -20,
    height: 70
  },
  // Number style
  Count: {
    fontSize: 30,
    height: 70,
    width: 70,
    color: '#000',
    padding: 25,
    paddingTop: 18,
  },

  stView: {
    alignSelf: 'flex-end',
    width: 120,
  },
  // minus button style
  minusBtn: {
    alignSelf: 'flex-start',
    width: 100,
    marginLeft: 140,
    marginTop: -20
  },
 
});
