import React, { Component } from 'react';
//Module语法风格,ES6新增,编译时加载
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    ImageBackground,
    ScrollView,
    ListView,
    FlatList,
    TouchableOpacity,
    AlertIOS
} from 'react-native';

var ZYUIScreen = require("Dimensions");
var {width} = ZYUIScreen.get("window")

var cols = 3;
var boxW = 120;
var vMargin = (width - cols * boxW) / (cols + 1);
var hMargin = 10;

var shares = require("../../json/shareData.json");

export default class RNDemo extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(shares.data)
        };
        this.renderRow = this.renderRow.bind(this)
    };

    render() {
        return (
            <ListView
                contentContainerStyle={styles.container}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow} />
        );
    }

    renderRow(rowData) {
        return (
        <TouchableOpacity activeOpacity={0.6} onPress={this.selectedCell(this)}>
            <View style={styles.cell}>
                <Image source={{url: rowData.icon}} style={styles.cellImage}/>
                <Text style={styles.cellName}>{rowData.title}</Text>
            </View>
        </TouchableOpacity>
        );
    }

    selectedCell(cell) {
        console.log(cell.rowData);
        // AlertIOS.alert(cell.rowData)
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 64,
        marginBottom: 34,
        borderTopWidth: 1,
        borderTopColor: "#bbbbbb",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    cell: {
        height: boxW,
        width: boxW,
        backgroundColor: "#999999",
        marginTop: hMargin,
        marginLeft: vMargin,
        alignItems: "center"
    },
    cellImage: {
        width: 50,
        height: 50,
        marginTop: 10
    },
    cellName: {
        fontSize: 20,
        marginTop: 15
    }
});

AppRegistry.registerComponent('RNDemo', () => RNDemo);

