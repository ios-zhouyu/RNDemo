/**
 * Created by zhouyu on 2018/10/18.
 */

import React, { Component } from "React";

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';

var KUIScreenWidth = require("Dimensions").get("window").width;
var KUIScreenHeight = require("Dimensions").get("window").height;
var cellHeight = 70;
var cellWidth = 70;

export default class HomeListView extends Component {

    static defaultProps = {
        dataArr: []
    }

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.dataArr)
        }
        this.renderRow = this.renderRow.bind(this)
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.contentViewStyle}
                scrollEnabled={false}
            >
            </ListView>
        );
    }

    renderRow(rowData) {
        return(
            <TouchableOpacity style={styles.cellStyle} activeOpacity={0.7}>
                <Image source={{url: rowData.image}} style={styles.iconStyle}/>
                <Text style={styles.textStyle}>{rowData.title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 160,
        width: KUIScreenWidth,
    },
    contentViewStyle: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: KUIScreenWidth,
        backgroundColor: "#FFFFFF",
        justifyContent: "space-around"
    },
    cellStyle: {
        width: cellWidth,
        height: cellHeight,
        alignItems: "center",
        marginTop: 8
    },
    iconStyle: {
        width: 52,
        height: 52
    },
    textStyle: {
        fontSize: 12
    }
})
