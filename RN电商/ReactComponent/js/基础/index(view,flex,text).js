import React, { Component } from 'react';
//Module语法风格,ES6新增,编译时加载
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

var Dimensions = require("Dimensions");

export default class RNDemo extends Component {//这个组件类似controller
    //viewDidLoad() 初始化方法, 返回具体的组件内容
    render() {
        //这个view类似controller的view
        return <View style={styles.container}>
            {/*<Text>我是存在的</Text>*/}
            <View style={styles.innerView1}>
                <Text style={{textAlign: "center", textDecorationLine: "underline", textDecorationColor: "red"}}>第一个view</Text>
            </View>
            <View style={styles.innerView2}>
                <Text style={{textAlign: "center", color: "red", fontsize: 50}}>第二个veiw{Dimensions.get("window").width}</Text>
                <Text>第二个veiw{Dimensions.get("window").height}</Text>
                <Text>第二个veiw{Dimensions.get("window").scale}</Text>
            </View>
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 44,
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: 'red',
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center"
    },
    innerView1: {
        width: 200,
        height: 150,
        backgroundColor: "yellow",
        marginRight: 20
    },
    innerView2: {
        width: 100,
        height: 100,
        backgroundColor: "#FFFFFF"
    }
});

AppRegistry.registerComponent('RNDemo', () => RNDemo);

