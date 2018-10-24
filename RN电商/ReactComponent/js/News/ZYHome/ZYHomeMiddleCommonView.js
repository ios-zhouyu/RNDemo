/**
 * Created by zhouyu on 2018/10/23.
 */

import React, {Component} from "React";

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

var KUIScreenWidth = require("Dimensions").get("window").width;
var KUIScreenHeight = require("Dimensions").get("window").height;

export default class CommonView extends Component {

    static defaultProps = {
        title: "",
        subTitle: "",
        rightImage: "",
        titleColor: "",
        talUrl: "",
        callBack: null //回调函数
    }

    render() {
        return (
            <TouchableOpacity activeOpacity={0.7} onPress={() => this.clickCell(this.props.talUrl)}>
                <View style={styles.container}>
                    <View style={styles.leftViewStyle}>
                        <Text style={[styles.titleStyle,{color: this.props.titleColor}]}>{this.props.title}</Text>
                        <Text style={styles.subTitleStyle}>{this.props.subTitle}</Text>
                    </View>
                    <Image source={{url: this.props.rightImage}} style={styles.rightImageStyle}/>
                </View>
            </TouchableOpacity>
        );
    }

    clickCell(data) {
        if (this.props.callBack == null) {
            return;
        } else {
            this.props.callBack(data);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        height: 60,
        width: KUIScreenWidth / 2 - 1,
        marginBottom: 1,
        marginRight: 1
    },
    leftViewStyle: {
        justifyContent: "center"
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5
    },
    subTitleStyle: {
        fontSize: 12,
        color: "#999999"
    },
    rightImageStyle: {
        width: 45,
        height: 35,
        resizeMode: "contain"
    }
})