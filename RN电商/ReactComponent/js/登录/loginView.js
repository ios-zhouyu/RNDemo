import React, { Component } from 'react';
//Module语法风格,ES6新增,编译时加载
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    ImageBackground,
    TouchableOpacity,
    AlertIOS
} from 'react-native';

//导入json数据
var Dimensions = require("Dimensions");
var {width} = Dimensions.get("window");

export default class loginView extends Component {//这个组件类似controller
    //viewDidLoad() 初始化方法, 返回具体的组件内容
    render() {
        //这个view类似controller的view
        return <View style={styles.container}>
            <Image source={{url: "icon_avatar"}} style={styles.icon}></Image>
            <TextInput placeholder="请输入用户名" style={styles.accountInput}></TextInput>
            <TextInput placeholder="请输入密码" style={styles.accountInput}></TextInput>
            <View>
                <TouchableOpacity activeOpacity={0.3} onPressOut={this.loginPress()}>
                    <View style={styles.loginBtn}>
                        <Text style={styles.loginText}>登录</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.setting}>
                <Text style={styles.settingText}>无法登录</Text>
                <Text style={styles.settingText}>新用户</Text>
            </View>
            <View style={styles.otherLogin}>
                <Text>其他登录方式:</Text>
                <Image source={{url: "icon_avatar"}} style={styles.otherLoginImage}></Image>
                <Image source={{url: "icon_avatar"}} style={styles.otherLoginImage}></Image>
                <Image source={{url: "icon_avatar"}} style={styles.otherLoginImage}></Image>
            </View>
        </View>;
    }

    loginPress() {
        AlertIOS.alert("登录成功");
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 64,
        backgroundColor: '#dddddd',
        borderTopWidth: 1.0,
        borderTopColor: "#999999",
        flex: 1,
        alignItems: "center"
    },
    icon: {
        width: 80,
        height: 80,
        marginTop: 50,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 40
    },
    accountInput: {
        height: 38,
        backgroundColor: "white",
        marginBottom: 2,
        textAlign: "center",
        width: width
    },
    loginBtn: {
        height: 35,
        width: 360,
        backgroundColor: "blue",
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4
    },
    loginText: {
        color: "white",
        fontSize: 20
    },
    setting: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 360,
        marginTop: 20
    },
    settingText: {
        color: "blue"
    },
    otherLogin: {
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        bottom: 40,
        left: 20
    },
    otherLoginImage: {
        width: 40,
        height: 40,
        marginLeft: 10
    }
});

module.exports = loginView;

