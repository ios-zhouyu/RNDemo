/**
 * Created by zhouyu on 2018/10/22.
 */
/**
 * Created by zhouyu on 2018/10/18.
 */

import React, { Component } from "React";

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

export default class MineHeaderView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.renderTopView()}
                {this.renderBottomView()}
            </View>
        );
    }

    renderTopView() {
        return(
            <TouchableOpacity style={styles.headerTopViewStyle} activeOpacity={0.8}>
                <Image source={{url: "see"}} style={styles.iconStyle}/>
                <Text style={styles.name}>TNT电商</Text>
                <Image source={{url: "avatar_vip"}} style={styles.vip}/>
                <Image source={{url: "icon_cell_rightArrow"}} style={styles.rightArrow}/>
            </TouchableOpacity>
        );
    }

    renderBottomView() {
        return(
            <View style={styles.bottomViewStyle}>
                {this.renderBottomItem()}
            </View>
        );
    }

    renderBottomItem() {
        var dataArr = [{'number':'100', 'title':'码哥券'},{'number':'12', 'title':'评价'},{'number':'50', 'title':'收藏'}];
        var itemArr = [];
        for (let i=0; i < dataArr.length; i++) {
            var data = dataArr[i];
            itemArr.push(
                <View key={i} style={styles.bottomItemStyle}>
                    <TouchableOpacity style={styles.bottomTTouchableOpacity} activeOpacity={0.5}>
                        <Text style={styles.bottomItemNumber}>{data.number}</Text>
                        <Text style={styles.bottomItemTitle}>{data.title}</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        return itemArr;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 180,
        backgroundColor: "rgba(255,96,0,1.0)"
    },
    headerTopViewStyle: {
        height: 90,
        marginTop: 44,
        flexDirection: "row",
        alignItems: "center"
    },
    iconStyle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 3,
        borderColor: "rgba(0,0,0,0.2)",
        marginLeft: 10,
        marginRight: 8
    },
    vip: {
        width: 17,
        height: 17
    },
    name: {
        color: "#FFFFFF",
        fontSize: 17
    },
    rightArrow: {
        width: 8,
        height: 13,
        position: "absolute",
        right: 8
    },
    bottomViewStyle: {
        flexDirection: "row",
        backgroundColor:'rgba(255,255,255,0.4)',
        height: 41,
        position: "absolute",
        bottom: 0
    },
    bottomItemStyle: {
        marginTop: 4,
        width: (KUIScreenWidth / 3) + 0.5,
        height: 34,
        borderRightWidth: 0.5,
        borderRightColor: "white"
    },
    bottomTTouchableOpacity: {
        justifyContent: "center",
        alignItems: "center",
    },
    bottomItemNumber: {
        fontSize: 13,
        color: "#FFFFFF",
        marginBottom: 4
    },
    bottomItemTitle: {
        fontSize: 12,
        color: "#FFFFFF",
    }
})
