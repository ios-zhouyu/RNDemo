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

export default class RNDemo extends Component {//这个组件类似controller
    //viewDidLoad() 初始化方法, 返回具体的组件内容
    render() {
        //这个view类似controller的view
        return <View style={styles.container}>
            <Text>加载图片</Text>
            <Image source={{url: "https://www.baidu.com/img/bd_logo1.png"}} style={styles.imageStyle}>
            </Image>
            <ImageBackground source={{url: "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2136740882,3271518133&fm=58&bpow=630&bpoh=630"}}
                             style={{width: 100, height: 100, justifyContent: "center", alignItems: "center"}}>
                <Text style={{backgroundColor: "yellow"}}>图片背景</Text>
            </ImageBackground>
            <Image source={{url: "app_icon_round256", width: 100, height: 100}}>
            </Image>
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
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center"
    },
    imageStyle: {
        // flex: 1,
        width: 200,
        height: 100,
        resizeMode: "cover",
        borderRadius: 30
    }
});

AppRegistry.registerComponent('RNDemo', () => RNDemo);

