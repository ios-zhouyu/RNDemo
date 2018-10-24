import React, { Component } from 'react';
//Module语法风格,ES6新增,编译时加载
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    ImageBackground
} from 'react-native';

var LoginView = require("./loginView");

export default class RNDemo extends Component {//这个组件类似controller
    //viewDidLoad() 初始化方法, 返回具体的组件内容
    render() {
        //这个view类似controller的view
        return <View style={{flex: 1}}>
            <LoginView/>
        </View>;
    }
}

AppRegistry.registerComponent('RNDemo', () => RNDemo);

