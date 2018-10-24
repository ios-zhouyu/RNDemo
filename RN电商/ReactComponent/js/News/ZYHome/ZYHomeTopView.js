/**
 * Created by zhouyu on 2018/10/18.
 */

import React, { Component } from "React";

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

import HomeTopListView from "./ZYHomeTopListView"
import TopData from "../json/TopMenu.json"
var KUIScreenWidth = require("Dimensions").get("window").width;

export default class HomeTopView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0
        }
        this.onScrollAnimationEnd = this.onScrollAnimationEnd.bind(this)
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={this.onScrollAnimationEnd}
                >
                    {this.renderScrollItem()}
                </ScrollView>
                <View style={styles.indicatorViewStyle}>
                    {this.renderIndicator()}
                </View>
            </View>
        );
    }

    onScrollAnimationEnd(element) {
        var page = Math.floor(element.nativeEvent.contentOffset.x / KUIScreenWidth);
        this.setState({
            currentPage: page
        });
    }

    renderScrollItem() {
        var itemArr = [];
        var dataArr = TopData.data;
        for (let i=0; i<dataArr.length; i++) {
            itemArr.push(
                <HomeTopListView
                    key={i}
                    dataArr={dataArr[i]}
                >
                </HomeTopListView>
            )
        }
        return itemArr;
    }

    renderIndicator() {
        var indicatorArr = [], color;
        for (let i=0; i<2; i++) {
            color = (i == this.state.currentPage) ? "red" : "black";
            indicatorArr.push(
                <Text key={i} style={[styles.indicatorStyle, {color: color}]}>&bull;</Text>
            )
        }
        return indicatorArr;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EBEBEB"
    },
    indicatorViewStyle: {
        backgroundColor: "#FFFFFF",
        height: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    indicatorStyle: {
        fontSize: 17,
        marginRight: 3,
        alignSelf: "center"
    }
})
