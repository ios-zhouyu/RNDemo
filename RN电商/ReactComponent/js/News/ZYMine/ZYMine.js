/**
 * Created by zhouyu on 2018/10/18.
 */

import React, { Component } from "React";

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';

import CommonCell from "../ZYMore/ZYCommonCell";
import MineMiddleView from "./ZYMineMiddleView"
import MineHeaderView from "./ZYMineHeaderView"

var KUIScreenWidth = require("Dimensions").get("window").width;
var KUIScreenHeight = require("Dimensions").get("window").height;

export default class Mine extends Component {
    render() {
        return (
        <View style={styles.container}>
            <ScrollView>
                <MineHeaderView/>
                <View>
                    <CommonCell
                        leftImage="ly"
                        title="我的订单"
                        detailTitle="查看全部订单"
                    />
                    <MineMiddleView/>
                </View>
                <View style={{marginTop: 10}}>
                    <CommonCell
                        leftImage="hcpjp"
                        title="钱包"
                        detailTitle="账户余额:￥100"
                    />
                    <CommonCell
                        leftImage="jdmp"
                        title="抵用券"
                        detailTitle="10张"
                    />
                </View>
                <View style={{marginTop: 10}}>
                    <CommonCell
                        leftImage="jrxd"
                        title="积分商场"
                    />
                </View>
                <View style={{marginTop: 10}}>
                    <CommonCell
                        leftImage="mj"
                        title="今日推荐"
                    />
                </View>
                <View style={{marginTop: 10}}>
                    <CommonCell
                        leftImage="qbfl"
                        title="我要合作"
                        detailTitle="轻松开店,盈利百万"
                    />
                </View>
            </ScrollView>
        </View>
        );
    }

    renderNavBar() {
        return(
            <View style={styles.navBar}>
                <Text style={styles.navTitle}>我的</Text>
                <TouchableOpacity activeOpacity={0.5} style={styles.navRightTouchable}>
                    <Image source={{url: ""}} style={styles.navImage}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EBEBEB"
    },
    navBar: {
        width: KUIScreenWidth,
        height: 88,
        paddingTop: 24,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255,96,0,1.0)"
    },
    navTitle: {
        color: "#FFFFFF",
        fontSize: 17,
        fontWeight: "500",
        marginTop: 18
    },
    navRightTouchable: {
        position: "absolute",
        bottom: 12,
        right: 5
    },
    navImage: {
        width: 25,
        height: 25
    },
})
