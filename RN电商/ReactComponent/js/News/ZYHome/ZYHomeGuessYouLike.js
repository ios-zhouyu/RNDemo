/**
 * Created by zhouyu on 2018/10/23.
 */

import React, {Component} from "React";

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
    Image
} from 'react-native';

import HomeCommonCell from "./ZYHomeCommonCell"

import YouLikeData from "../json/HomeGeustYouLike.json"

export default class HomeGuessYouLike extends Component {

    static defaultProps = {
        dataArr: [],
        url: "http://api.meituan1.com/group/v2/recommend/homepage/city/20?userId=160495643&userid=160495643&__vhost=api.mobile.meituan.com&position=23.134643%2C113.373951&movieBundleVersion=100&utm_term=6.6&limit=40&wifi-mac=64%3A09%3A80%3A10%3A15%3A27&ci=20&__skcy=X6Jxu5SCaijU80yX5ioQuvCDKj4%3D&__skua=5657981d60b5e2d83e9c64b453063ada&__skts=1459731016.350255&wifi-name=Xiaomi_1526&client=iphone&uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&__skno=FEB757F5-6120-49EC-85B0-D1444A2C2E7B&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_source=AppStore&utm_medium=iphone&version_name=6.6&wifi-cur=0&wifi-strength=&offset=0&utm_campaign=AgroupBgroupD100H0&__skck=3c0cf64e4b039997339ed8fec4cddf05&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594"
    }

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}).cloneWithRows(this.props.dataArr)
        }

        this.renderRow = this.renderRow.bind(this)
    }

    render() {
        return (
            <View style={styles.container}>
                <HomeCommonCell
                    leftImage="cnxh"
                    title="猜你喜欢"
                />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    // contentContainerStyle={styles.contentViewStyle}
                    scrollEnabled={false}
                >
                </ListView>
            </View>
        );
    }

    renderRow(rowData) {
        return(
            <TouchableOpacity activeOpacity={0.7}>
                <View style={styles.cellStyle}>
                    <Image source={{url: this.dealWithImgUrl(rowData.imageUrl)}} style={styles.cellImageStyle} imageStyle={{borderRadius: 8}}/>
                    <View style={styles.cellRightViewStyle}>
                        <View style={styles.cellRightTopViewStyle}>
                            <Text style={styles.cellTitleStyle}>{rowData.title}</Text>
                            <Text style={styles.cellDistanceStyle}>{rowData.topRightInfo}</Text>
                        </View>
                        <Text style={styles.cellDetailTitleStyle}>{rowData.subTitle}</Text>
                        <View style={styles.cellRightBottomViewStyle}>
                            <Text style={styles.cellPriceStyle}>{rowData.subMessage}</Text>
                            <Text style={styles.cellBuyCountStyle}>{rowData.bottomRightInfo}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    // 处理图像的尺寸
    dealWithImgUrl(url){
        if (url.search('w.h') == -1){ // 没有找到,正常返回
            return url;
        }else{
            return url.replace('w.h', '120.90');
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        fetch(this.props.url)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.data)
                });
            })
            .catch((error) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(YouLikeData.data)
                })
            })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        marginTop: 10
    },
    cellStyle: {
        borderBottomWidth: 1,
        borderBottomColor: "#EBEBEB",
        flexDirection: "row"
    },
    cellImageStyle: {
        width: 120,
        height: 90,
        margin: 10
    },
    cellRightViewStyle: {
        flex: 1,
        marginRight: 10
    },
    cellRightTopViewStyle: {
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 10,
        justifyContent: "space-between",
        alignItems: "center"
    },
    cellTitleStyle: {
        color: "#333333",
        fontSize: 16
    },
    cellDistanceStyle: {
        fontSize: 12,
        color: "#999999"
    },
    cellDetailTitleStyle: {
        fontSize: 12,
        color: "#999999"
    },
    cellRightBottomViewStyle: {
        flexDirection: "row",
        marginTop: 10,
        justifyContent: "space-between",
        alignItems: "center"
    },
    cellPriceStyle: {
        color: "#FF0000",
        fontSize: 16
    },
    cellBuyCountStyle: {
        color: "#666666",
        fontSize: 14
    }
})