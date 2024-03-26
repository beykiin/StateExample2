import React, {Component} from "react";
import { Text, View } from "react-native";
import Message from "./Components/Message";




class App extends Component {
  render(){
    return(
      <View className="App">
        <Message/>
      </View>
    )
  }
}

export default App