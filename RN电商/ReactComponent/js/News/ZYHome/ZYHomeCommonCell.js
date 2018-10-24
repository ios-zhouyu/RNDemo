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

export default class HomeCommonView extends Component {

    static defaultProps = {
        leftImage: "",
        title: "",
        rightImage: "icon_cell_rightArrow",
        detailTitle: ""
    }

    render() {
        return (
            <TouchableOpacity activeOpacity={0.7}>
                <View style={styles.container}>
                    <View style={styles.leftViewStyle}>
                        <Image source={{url: this.props.leftImage}} style={styles.leftImageStyle}/>
                        <Text style={styles.titleStyle}>{this.props.title}</Text>
                    </View>
                    <View style={styles.rightViewStyle}>
                        <Text style={styles.detailTitleStyle}>{this.props.detailTitle}</Text>
                        <Image source={{url: this.props.rightImage}} style={styles.rightImageStyle}/>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: KUIScreenWidth,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",
        height: 44,
        alignItems: "center",
        borderBottomColor: "#EBEBEB",
        borderBottomWidth: 1
    },

    leftViewStyle: {
        flexDirection: "row",
        alignItems: "center"
    },
    leftImageStyle: {
        width: 23,
        height: 23,
        marginLeft: 10
    },
    titleStyle: {
        marginLeft: 5,
        color: "#333333"
    },

    rightViewStyle: {
        flexDirection: "row",
        alignItems: "center"
    },
    rightImageStyle: {
        width: 8,
        height: 13,
        marginRight: 8,
        marginLeft: 5
    },
    detailTitleStyle: {
        fontSize: 12,
        color: "#999999"
    }
})