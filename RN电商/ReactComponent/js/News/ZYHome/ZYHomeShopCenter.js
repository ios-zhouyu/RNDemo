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
    ScrollView,
    ImageBackground,
    TouchableOpacity
} from 'react-native';

import HomeCommonCell from "./ZYHomeCommonCell"

import ShopCenterData from "../json/ZY_Home_D5.json"

export default class HomeShopCenter extends Component {

    static defaultProps = {
        callBack: null
    }

    render() {
        return (
            <View style={styles.container}>
                <HomeCommonCell
                    leftImage="gw"
                    title="购物中心"
                    detailTitle={ShopCenterData.tips}
                />
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollViewStyle}
                >
                    {this.renderShopCenterItem()}
                </ScrollView>
            </View>
        );
    }

    renderShopCenterItem() {
        var itemArr = [];
        var dataArr = ShopCenterData.data;
        for (let i=0; i<dataArr.length; i++) {
            var data = dataArr[i];
            itemArr.push(
                <ShopCenterItem
                    key={i}
                    image={data.img}
                    title={data.name}
                    desc={data.showtext.text}
                    detailUrl={data.detailurl}
                    popToShopCenter={(url) => this.popToHome(url)}
                />
            );
        }
        return itemArr;
    }

    popToHome(url) {
        if (this.props.callBack !== null && url !== null) {
            this.props.callBack(url)
        }
    }
}

class ShopCenterItem extends Component {

    static defaultProps = {
        image: "",
        title: "",
        desc: "",
        detailUrl: null,
        popToShopCenter: null
    }

    render() {
        return(
            <TouchableOpacity activeOpacity={0.7} onPress={() => this.itemClick(this.props.detailUrl)}>
                <View style={styles.itemViewStyle}>
                    <ImageBackground source={{url: this.props.image}} style={styles.itemImageStyle} imageStyle={{borderRadius: 8}}>
                        <Text style={styles.itemDescStyle}>{this.props.desc}</Text>
                    </ImageBackground>
                    <Text style={styles.itemTitleStyle}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    itemClick(url) {
        if (this.props.popToShopCenter !== null && url !== null) {
            this.props.popToShopCenter(url)
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        marginTop: 10,
    },
    scrollViewStyle: {
        marginTop: 10,
        marginBottom: 10
    },
    itemViewStyle: {
        marginLeft: 8,
        marginRight: 8
    },
    itemImageStyle: {
        width: 100,
        height: 70
    },
    itemTitleStyle: {
        marginTop: 10,
        fontSize: 13,
        color: "#333333"
    },
    itemDescStyle: {
        position: "absolute",
        bottom: 10,
        backgroundColor: "orange",
        padding: 2,
        fontSize: 11,
        color: "#FFFFFF"
    }
})