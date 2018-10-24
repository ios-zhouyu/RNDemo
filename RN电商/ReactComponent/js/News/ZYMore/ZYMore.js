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
    ScrollView,
    TouchableOpacity
} from 'react-native';

import MoreCommonCell from "./ZYCommonCell"

var KUIScreenWidth = require("Dimensions").get("window").width;
var KUIScreenHeight = require("Dimensions").get("window").height;

export default class More extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                <ScrollView>
                    <View style={{marginTop: 10}}>
                        <MoreCommonCell
                            title="扫一扫"
                            leftImage="hcpjp"
                        />
                    </View>
                    <View style={{marginTop: 10}}>
                        <MoreCommonCell
                            title="省流量模式"
                            isSwitch={true}
                        />
                        <MoreCommonCell
                            title="消息提醒"
                        />
                        <MoreCommonCell
                            title="邀请好友使用"
                        />
                        <MoreCommonCell
                            title="清空缓存"
                            detailTitle="19.45M"
                        />
                    </View>
                    <View style={{marginTop: 10}}>
                        <MoreCommonCell
                            title="意见反馈"
                        />
                        <MoreCommonCell
                            title="问卷调查"
                        />
                        <MoreCommonCell
                            title="支付帮助"
                        />
                        <MoreCommonCell
                            title="网路诊断"
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }

    renderNavBar() {
        return(
            <View style={styles.navBar}>
                <Text style={styles.navTitle}>更多</Text>
                <TouchableOpacity activeOpacity={0.5} style={styles.navRightTouchable}>
                    <Image source={{url: "icon_mine_setting"}} style={styles.navImage}/>
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
        right: 10
    },
    navImage: {
        width: 25,
        height: 25
    },
})
