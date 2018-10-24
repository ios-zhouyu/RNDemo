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

import middleBottomData from "../json/ZY_Home_D4.json"
import CommonView from "./ZYHomeMiddleCommonView"

var KUIScreenWidth = require("Dimensions").get("window").width;

export default class Module extends Component {

    static defaultProps = {
        popToHome: null //向父控件Home页逆向传值
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topViewStyle}>

                </View>
                <View style={styles.bottomViewStyle}>
                    {this.renderBottomView()}
                </View>
            </View>
        );
    }

    renderBottomView() {
        var itemArr = [];
        var dataArr = middleBottomData.data;
        for (let i=0; i<dataArr.length; i++) {
            var data = dataArr[i];
            itemArr.push(
                <CommonView
                    key={i}
                    title={data.maintitle}
                    subTitle={data.deputytitle}
                    rightImage={this.detalWithImageUrl(data.imageurl)}
                    titleColor={data.typeface_color}
                    talUrl={data.tplurl}
                    //子页面将值回调过来
                    callBack={(data) => this.popToTopView(data)}
                />
            );
        }
        return itemArr;
    }

    //继续向父页面传值
    popToTopView(data) {
        if (this.props.popToHome == null) {
            return
        } else {
            this.props.popToHome(data)
        }
    }

    detalWithImageUrl(url) {
        if (url.search("w.h") == -1) {
            return url;
        } else {
            return url.replace("w.h","150.120");
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EBEBEB",
        marginTop: 10
    },
    topViewStyle: {

    },
    bottomViewStyle: {
        flexDirection: "row",
        flexWrap: "wrap"
    }
})