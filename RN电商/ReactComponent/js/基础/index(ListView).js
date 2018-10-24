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
var wines = require("../../json/wine.json");

export default class RNDemo extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(wines)
        };
        this.renderRow = this.renderRow.bind(this)
    };

    render() {
        return (
            <ListView
                style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow} />
        );
    }

    renderRow(rowData) {
        return (
        <TouchableOpacity activeOpacity={0.6} onPress={this.selectedCell(this)}>
            <View style={styles.cell}>
                <Image source={{url: rowData.image}} style={styles.cellImage}/>
                <View style={{marginRight: 20}}>
                    <Text style={styles.cellName} numberOfLines={0}>{rowData.name}</Text>
                    <Text style={styles.cellMoney}>{rowData.money}</Text>
                </View>
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
        borderTopColor: "#bbbbbb"
    },
    cell: {
        height: 100,
        borderBottomWidth: 1,
        borderBottomColor: "#999999",
        flexDirection: "row",
        // alignItems: "center"
    },
    cellImage: {
        width: 50,
        height: 50,
        marginLeft: 20,
        marginRight: 20,
        alignSelf: "center"
    },
    cellName: {
        fontSize: 20,
        width: width - 50 - 40 - 15,
        marginTop: 15
    },
    cellMoney: {
        position: "absolute",
        bottom: 12.5,
        fontSize: 19,
        color: "red"
    }
});

AppRegistry.registerComponent('RNDemo', () => RNDemo);

