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

import HomeCommonCell from "./ZYHomeCommonCell"

import HotChannelData from "../json/ZY_Home_D6.json"
var KUIScreenWidth = require("Dimensions").get("window").width;
var itemMargin = 5;

export default class Module extends Component {
    render() {
        return (
            <View style={styles.container}>
                <HomeCommonCell
                    leftImage="dy"
                    title="热门频道"
                    detailTitle="查看全部"
                />
                <View style={styles.hotChannelMainView}>
                    <View style={styles.hotChannelMainTopView}>
                        {this.renderTopView()}
                    </View>
                    <View style={styles.hotChannelMainBottomView}>
                        {this.renderBottomView()}
                    </View>
                </View>
            </View>
        );
    }

    renderTopView() {
        var itemArr = [];
        var hotDataArr = HotChannelData.data[0].resource.cateArea.slice(0,2)
        for (let i=0; i< hotDataArr.length; i++) {
            var data = hotDataArr[i];
            itemArr.push(
                <TouchableOpacity activeOpacity={0.7} key={i}>
                    <View style={styles.hotChannelMainTopItemView}>
                        <View style={styles.topItemLeftView}>
                            <Text style={styles.topItemTitle}>{data.mainTitle}</Text>
                            <Text style={styles.topItemDetailTitle}>{data.deputyTitle}</Text>
                            <View style={styles.topItemHotView}>
                                <Text style={styles.topItemHotTag}>{data.otherDesc}</Text>
                            </View>
                        </View>
                        <Image source={{url: data.entranceImgUrl}} style={styles.topItemImage}/>
                    </View>
                </TouchableOpacity>
            );
        }
        return itemArr;
    }

    renderBottomView() {
        var itemArr = [];
        var hotDataArr = HotChannelData.data[0].resource.cateArea.slice(2,6)
        for (let i=0; i< hotDataArr.length; i++) {
            var data = hotDataArr[i];
            itemArr.push(
                <TouchableOpacity activeOpacity={0.7} key={i}>
                    <View style={styles.hotChannelMainBottomItemView}>
                        <Text style={styles.bottomItemTitle}>{data.mainTitle}</Text>
                        <Text style={styles.bottomItemDetailTitle}>{data.deputyTitle}</Text>
                        <Image source={{url: data.entranceImgUrl}} style={styles.bottomItemImage}/>
                    </View>
                </TouchableOpacity>
            );
        }
        return itemArr;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        marginTop: 10
    },
    hotChannelMainView: {
        marginTop: 8,
        marginBottom: 8
    },

    hotChannelMainTopView: {
        flexDirection: "row",
    },
    hotChannelMainTopItemView: {
        flexDirection: "row",
        backgroundColor: "#F6F6F6",
        width: (KUIScreenWidth - itemMargin * 3) / 2,
        marginLeft: itemMargin,
        marginBottom: itemMargin,
        justifyContent: "space-around",
        height: 80
    },
    topItemLeftView: {
        alignItems: "center",
        marginLeft: 10
    },
    topItemTitle: {
        fontSize: 17,
        color: "#333333",
        marginTop: 10
    },
    topItemDetailTitle: {
        fontSize: 13,
        color: "#999999",
        marginTop: 5
    },
    topItemHotView: {
        backgroundColor: "#FF0000",
        borderRadius: 12,
        marginTop: 5,
        padding: 2,
        marginBottom: 8
    },
    topItemHotTag: {
        paddingLeft: 5,
        paddingRight: 5,
        color: "#FFFFFF",
    },
    topItemImage: {
        width: 80,
        height: 60,
        resizeMode: "contain",
        alignSelf: "center"
    },

    hotChannelMainBottomView: {
        flexDirection: "row"
    },
    hotChannelMainBottomItemView: {
        backgroundColor: "#F6F6F6",
        alignItems: "center",
        width: (KUIScreenWidth - itemMargin * 5) / 4,
        marginLeft: itemMargin
    },
    bottomItemTitle: {
        fontSize: 17,
        color: "#333333",
        marginTop: 8
    },
    bottomItemDetailTitle: {
        fontSize: 13,
        color: "#999999",
        marginTop: 5
    },
    bottomItemImage: {
        width: 80,
        height: 60,
        marginTop: 8,
        marginBottom: 8
    },
})