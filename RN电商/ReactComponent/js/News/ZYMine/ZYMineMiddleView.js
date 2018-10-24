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

import MiddleData from "./MiddleData.json"

export default class MineMiddleView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.renderItem()}
            </View>
        );
    }

    renderItem() {
        var itemArr = [];
        for (let i=0; i < MiddleData.length; i++) {
            var data = MiddleData[i];
            itemArr.push(
                <InnerView
                    key={i}
                    title={data.title}
                    iconName={data.icon}
                />
            );
        }
        return itemArr;
    }
}

class InnerView extends Component {

    static defaultProps = {
        iconName: "",
        title: ""
    }

    render() {
        return(
            <TouchableOpacity activeOpacity={0.5}>
                <Image source={{url: this.props.iconName}} style={styles.iconNameStyle}/>
                <Text style={styles.title}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 60,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#FFFFFF"
    },
    innerViewStyle: {
        justifyContent: "center"
    },
    iconNameStyle: {
        width: 35,
        height: 25,
        alignSelf: "center"
    },
    title: {
        fontSize: 12,
        color: "#666666",
        marginTop: 5
    }
})
