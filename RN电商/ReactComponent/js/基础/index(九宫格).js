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

//导入json数据
var goods = require("../../json/goods.json");

var Dimensions = require("Dimensions");
var {width} = Dimensions.get("window");

var cols = 3;
var boxW = 100;
var vMargin = (width - cols * boxW) / (cols + 1);
var hMargin = 25;

export default class RNDemo extends Component {//这个组件类似controller
    //viewDidLoad() 初始化方法, 返回具体的组件内容
    render() {
        //这个view类似controller的view
        return <View style={styles.container}>
            {this.renderAllGoods()}
        </View>;
    }

    renderAllGoods() {
        //Xcode控制台会输出相关信息
        console.log(goods)
        var allGoods = [];
        for(var i=0; i < goods.data.length; i++) {
            var data = goods.data[i];
            allGoods.push(
                <View key={i} style={styles.goodsView}>
                    <Image style={styles.goodsImage} source={{url: data.icon}}></Image>
                    <Text style={styles.goodsText}>{data.title}</Text>
                </View>
            );
        }
        return allGoods;
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 64,
        backgroundColor: 'white',
        borderTopWidth: 1.0,
        borderTopColor: "#FFFFFF",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    goodsView: {
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        marginTop: hMargin,
        marginLeft: vMargin
    },
    goodsImage: {
        width: boxW,
        height: boxW,
        marginBottom: 10
    },
    goodsText: {
        // textAlign: "center"
    }
});

AppRegistry.registerComponent('RNDemo', () => RNDemo);

