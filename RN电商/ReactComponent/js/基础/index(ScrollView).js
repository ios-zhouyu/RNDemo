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
    ScrollView
} from 'react-native';

var ZYUIScreen = require("Dimensions");
var {width} = ZYUIScreen.get("window")

export default class RNDemo extends Component {//这个组件类似controller
    //viewDidLoad() 初始化方法, 返回具体的组件内容
    render() {
        //这个view类似controller的view
        return (
            <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}
                        pagingEnabled={true}>
                {this.renderChildView()}
            </ScrollView>
        );
    }

    renderChildView() {
        var allChild = [];
        var colors = ["red","green","blue","yellow","black"];
        for (var i=0; i<colors.length; i++) {
            allChild.push(
                <View key={i} style={{backgroundColor: colors[i], width: width, height: 80}}>
                    <Text>第{i}个</Text>
                </View>
            );
        }
        return allChild;
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 64
    }
});

AppRegistry.registerComponent('RNDemo', () => RNDemo);

