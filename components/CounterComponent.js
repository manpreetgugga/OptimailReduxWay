import React from 'react'
import { Text,View,Button} from "react-native";
import {useState }from "react";
import { increment } from '../Actions/ActionTypes';
import { decrement } from '../Actions/ActionTypes';
import { incrementAction } from '../reducers/counterReducers';
import { decrementAction } from '../reducers/counterReducers';
import { connect } from 'react-redux';



export class CounterComponent extends React.Component {

  constructor(props) {
    super(props);
 
    // Setting initial state to components
    this.state  = {
       value : 0 
      } 
 
    }

    // increment() {
    //  this.setState({value : this.state.value + 1})
    // }

    // decrement() {
    //  this.setState({value : this.state.value - 1})
    // }


  render(){

    const titleText = "Counter State value : " + this.props.value;
     console.log("Pressed") 
    return (<View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text> {titleText} </Text>
              <Button onPress ={ ()=> this.props.incrementClick() }
                      title="increment"
                      color="#841584"/>
              <Button onPress ={ ()=> this.props.decrementClick() }
                      title="decrement"
                      color="#841584"/>

           </View>)
  }

}

const mapStateToProps = (state) =>( {
  value : state.counterReducer.value
});

const mapDispatchToProps = (dispatch)=> ({
  incrementClick: ()=> dispatch(incrementAction(increment)),
  decrementClick: ()=> dispatch(decrementAction(increment))
});

export default connect(mapStateToProps,mapDispatchToProps)(CounterComponent)


