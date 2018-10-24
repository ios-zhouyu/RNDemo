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

import CommonView from "./ZYHomeMiddleCommonView"
import middleData from "../json/HomeTopMiddleLeft.json"

var KUIScreenWidth = require("Dimensions").get("window").width;

export default class HomeMiddleView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.renderLeftView()}
                <View style={styles.rightViewStyle}>
                    {this.renderRightView()}
                </View>
            </View>
        );
    }

    renderLeftView() {
        var leftData = middleData.dataLeft[0];
        return(
            <TouchableOpacity activeOpacity={0.7}>
                <View style={styles.leftViewStyle}>
                    <Image source={{url: leftData.img1}} style={styles.leftImageStyle}/>
                    <Image source={{url: leftData.img2}} style={styles.leftImageStyle}/>
                    <Text style={{color: "gray", fontSize: 14}}>{leftData.title}</Text>
                    <View style={styles.leftTextStyle}>
                        <Text style={styles.leftPriceStyle}>{leftData.price}</Text>
                        <Text style={styles.leftSaleStyle}>{leftData.sale}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    renderRightView() {
        var itemArr = [];
        var rightData = middleData.dataRight;
        for (let i=0; i<rightData.length; i++) {
            var data = rightData[i];
            itemArr.push(
                <CommonView
                    key={i}
                    title={data.title}
                    subTitle={data.subTitle}
                    rightImage={data.rightImage}
                    titleColor={data.titleColor}
                />
            )
        }
        return itemArr;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        flexDirection: "row",
        backgroundColor: "#EBEBEB"
    },
    leftViewStyle: {
        width: KUIScreenWidth / 2,
        backgroundColor: "#FFFFFF",
        marginRight: 1,
        marginBottom: 1,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    leftImageStyle: {
        width: 120,
        height: 30,
        resizeMode: "contain"
    },
    leftTextStyle: {
        flexDirection: "row",
        marginTop: 5
    },
    leftPriceStyle: {
        color: "blue",
        fontSize: 13,
        marginRight: 5
    },
    leftSaleStyle: {
        color: "orange",
        backgroundColor: "yellow",
        fontSize: 13,
        paddingLeft: 2,
        paddingRight: 2,
        borderRadius: 2
    },
    rightViewStyle: {
        backgroundColor: "#EBEBEB"
    }
})