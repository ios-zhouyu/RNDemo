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
    SectionList,
    TouchableOpacity,
    AlertIOS
} from 'react-native';

var ZYUIScreen = require("Dimensions");
var {width} = ZYUIScreen.get("window")

var Cars = require("../../json/cars.json");

export default class RNDemo extends Component {

    constructor(props) {
        super(props);
        var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };
        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' + rowID];
        };

        this.state = {
            dataSource: new ListView.DataSource({
                getSectionData: getSectionData,
                getRowData: getRowData,
                rowHasChanged: (r1, r2) => r1 !== r2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
            })
        };
    };

    componentDidMount() {
        this.loadData();
    };

    loadData() {
        var json = Cars.data;
        var dataBlob = {},sectionIDs = [],rowIDs = [],cars = [];
        for (var i in json) {
            //step 1、把组数据放入sectionIDs数组中
            sectionIDs.push(i);
            //step 2、把组中内容放dataBlob对象中
            dataBlob[i] = json[i].title;
            //step 3、取出该组中所有的商品
            cars = json[i].cars;
            //step 4记录每一行中的数据
            rowIDs[i] = [];
            //step 5、获取行中每一组数据
            for (var j in cars) {
                //把行号放入rowIDs中
                rowIDs[i].push(j);
                //把每一行中的内容放dataBlob对象中
                dataBlob[i + ':' + j] = cars[j];
            }
        }
        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
        });
    }

    render() {
        return (
            <ListView
                contentContainerStyle={styles.container}
                dataSource={this.state.dataSource}
                renderSectionHeader={this.renderSectionHeader.bind(this)}
                renderRow={this.renderRow.bind(this)} />
        );
    }

    renderSectionHeader(sectionData, sectionID) {
        return (
            <View style={styles.section}>
                <Text>{sectionData}</Text>
            </View>
        );
    }

    renderRow(rowData, sectionID, rowID) {
        return (
        <TouchableOpacity activeOpacity={0.6} onPress={this.selectedCell(this)}>
            <View style={styles.cell}>
                <Image source={{url: rowData.icon}} style={{width: 80, height: 80}}/>
                <Text >{rowData.name}</Text>
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
    },
    section: {
        height: 40,
        alignItems: "center",
        justifyContent: "center"
    },
    cell: {
        height: 100,
        width: width,
        backgroundColor: "#999999",
        flexDirection: "row"
    },
    cellImage: {
        width: 40,
        height: 40,
        marginTop: 10
    },
    cellName: {
        fontSize: 20,
        marginTop: 15
    }
});

AppRegistry.registerComponent('RNDemo', () => RNDemo);

