import React, { Component } from "react"
import {Button, Text, View} from  'react-native'

class Message extends Component {
    constructor(){
        super()
        this.state = {
            message: 'Welcome visitor'
        }
    }
    changeMessage() {
        this.setState({
            message:'Thank you for subscribing'
        })
    }
    render() {
        return(
            <View>
                <Text>
                    {this.state.message}
                    <Button title="Subscribe" onClick={ () => this.changeMessage()} />
                </Text>
            </View>
        )
    }
}

export default Message