/**
 * Created by zhouyu on 2018/10/18.
 */

//https://3g.163.com/touch/reconstruct/article/list/BBM54PGAwangning/0-10.html

import React, { Component } from "React";

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    ScrollView,
    TouchableOpacity,
    ListView,
    AlertIOS,
    NativeModules
} from 'react-native';

import HomeTopView from "./ZYHomeTopView"
import HomeMiddleView from "./ZYHomeMiddleView"
import HomeMiddleBottomView from "./ZYHomeMiddleBottomView"
import HomeDetail from "./ZYHomeDetail"
import HomeShopCenter from "./ZYHomeShopCenter"
import ShopCenterDetail from "./ZYHomeShopCenterDetail"
import HomeGuessYouLike from "./ZYHomeGuessYouLike"
import HomeHotChannel from "./ZYHomeHotChannel"

var KUIScreenWidth = require("Dimensions").get("window").width;
var KUIScreenHeight = require("Dimensions").get("window").height;
var addressWidth = 45;
var navRightViewWidth = 50;

var nativeModule = NativeModules.OpenNativeModule;

export default class Home extends Component {


    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <HomeTopView/>
                    <HomeMiddleView/>
                    <HomeMiddleBottomView
                        popToHome={(data) => this.pushToHomeDetail(data)}
                    />
                    <HomeHotChannel/>
                    <HomeShopCenter
                        callBack={(data) => this.pushToShopCenterDetail(data)}
                    />
                    <HomeGuessYouLike/>
                </ScrollView>
            </View>
        );
    }

    //跳转到二级页面
    pushToShopCenterDetail(data) {
        if (data != null) {
            this.props.navigator.push(
                {
                    component: ShopCenterDetail,
                    title: "购物中心详情页",
                    passProps: {
                        "url": this.detalWithUrl(data),
                        "isFromNative": false
                    }
                }
            );
        }
    }

    pushToHomeDetail(data) {
        if (data != null) {
            this.props.navigator.push(
                {
                    component: HomeDetail,
                    title: "详情页"
                }
            );
        }
    }

    detalWithUrl(url) {
        if (url !== null) {
            return url.replace("imeituan://www.meituan.com/web/?url=","");
        }
    }

    renderNavBar() {
        return(
            <View style={styles.navBar}>
                <TouchableOpacity activeOpacity={0.5} onPress={this.jumpToNativeWithParams}>
                    <Text style={styles.address}>北京</Text>
                </TouchableOpacity>
                <TextInput placeholder="输入商家,品类,商圈" style={styles.search} numberOfLines={1}></TextInput>
                <View style={styles.navRightView}>
                    <TouchableOpacity activeOpacity={0.5}  onPress={this.jumpToNative}>
                        <Image source={{url: "icon_homepage_message"}} style={styles.navRightImage}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}  onPress={this.jumpToNative}>
                        <Image source={{url: "icon_homepage_scan"}} style={styles.navRightImage}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    //跳转到原生界面
    jumpToNative() {
        nativeModule.openNativeVC()
    }
    
    //跳转到原生界面
    jumpToNativeWithParams() {
        var params = {"title": "定位地址: 北京"};
        nativeModule.openNativeVCWithParams(params)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EBEBEB",
    },
    navBar: {
        width: KUIScreenWidth,
        height: 88,
        paddingTop: 24,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "rgba(255,96,0,1.0)"
    },
    address: {
        width: addressWidth,
        height: 17,
        marginTop: 15,
        textAlign: "center",
        color: "#FFFFFF"
    },
    search: {
        width: KUIScreenWidth - addressWidth - navRightViewWidth - 10,
        backgroundColor: "#FFFFFF",
        height: 30,
        paddingLeft: 15,
        borderRadius: 15,
        marginTop: 15
    },
    navRightView: {
        flexDirection: "row",
        width: navRightViewWidth,
        alignItems: "stretch",
        marginTop: 15
    },
    navRightImage: {
        width: 23,
        height: 23,
        marginRight: 2.5
    }
})
