import React, { Component } from 'react';
//Module语法风格,ES6新增,编译时加载
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

class GreeTing extends Component {
    render() {
        return (
            <Text style={styles.greet}>Hello {this.props.name}!</Text>
        );
    }
}

class Blink extends Component {

    constructor(props){
        super(props);
        this.state = {showText: true};
        setInterval(() => {
            this.setState(previousState => {
                return {showText: !previousState.showText};
            });
        }, 1000);
    }

    render() {
        let display = this.state.showText ? this.props.text : "";
        return(
            <Text style={styles.blink}>{display}</Text>
        );
    }
}


export default class RNDemo extends Component {
    //viewDidLoad() 初始化方法, 返回具体的组件内容
    render() {
        return <View style={styles.container}>
            <Text>This is a simple application.</Text>
            <Text style={{width: 100, height: 30}}>周玉 RN开发</Text>
            <TextInput style={styles.input} placeholder="占位位子" onchangetext={(text) => this.setState({text})}/>
            <GreeTing name="周玉" />
            <GreeTing name="zhangsan" />
            {/*<Blink text="State状态控制" />*/}
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        flex: 1,
        backgroundColor: 'white',
        flexDirection: "column"
    },
    input: {
        width:300,
        height: 50,
        borderWidth: 2,
        borderColor: "blue",
        borderBottomLeftRadius: 5,
        borderBottomStartRadius: 8
    },
    greet: {
        fontSize: 20,
        flex: 1,
        color: "blue",
        borderWidth: 1,
        borderColor: "red"
        // justifyContent: "center",
        // alignItems: "center"
    },
    blink: {
        fontSize: 10,
        flex: 1,
        color: "red",
        backgroundColor: "yellow"
    }
});

AppRegistry.registerComponent('RNDemo', () => RNDemo);

