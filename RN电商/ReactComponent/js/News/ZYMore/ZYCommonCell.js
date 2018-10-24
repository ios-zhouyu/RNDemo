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
    TouchableOpacity,
    Switch
} from 'react-native';

var KUIScreenWidth = require("Dimensions").get("window").width;
var KUIScreenHeight = require("Dimensions").get("window").height;

export default class MoreCommonCell extends Component {

    static defaultProps = {
        title: "",
        detailTitle: "",
        rightImage: "",
        leftImage: ""
    }

    constructor(props) {
        super(props);
        this.state = {
            isSwitch: false
        }
    }

    render() {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={() => {}}>
                <View style={styles.container}>
                    {this.renderLeftView()}
                    {this.renderRightView()}
                </View>
            </TouchableOpacity>
        );
    }

    renderLeftView() {
        if (this.props.leftImage.length > 0) {
            return(
                <View style={styles.leftView}>
                    <Image source={{url: this.props.leftImage}} style={styles.leftImage}/>
                    <Text style={[styles.title,{marginLeft: 5}]}>{this.props.title}</Text>
                </View>
            )
        } else {
            return(
                <View style={styles.leftView}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
            )
        }
    }

    renderRightView() {
        if (this.props.isSwitch) {
            return(
                <Switch style={styles.switch} value={this.state.isOn == true} onValueChange={() => {this.setState({isOn: !this.state.isOn})}}/>
            )
        } else {
            return(
                <View style={styles.rightView}>
                    {this.renderDetailTitle()}
                    <Image source={{url: "icon_cell_rightArrow"}} style={styles.rightImage}/>
                </View>
            )
        }
    }

    renderDetailTitle() {
        if (this.props.detailTitle.length > 0) {
            return(
                <Text style={styles.detailTitleStyle}>{this.props.detailTitle}</Text>
            )
        } else {
            return(
                <Text></Text>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        height: 44,
        flexDirection: "row",
        alignItems: "center",
        justifyContent:'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: "#EBEBEB"
    },
    leftView: {
        flexDirection: "row",
        alignItems: "center"
    },
    title: {
        fontSize: 15,
        color: "#333333",
        marginLeft: 10
    },
    leftImage: {
        width: 35,
        height: 35,
        marginLeft: 8
    },
    rightView: {
        flexDirection: "row",
        alignItems: "center"
    },
    rightImage: {
        width: 8,
        height: 13,
        marginRight: 8
    },
    switch: {
        position: "absolute",
        right: 5,
        alignSelf: "center"
    },
    detailTitleStyle: {
        fontSize: 13,
        color: "#666666",
        marginRight: 3
    }
})
