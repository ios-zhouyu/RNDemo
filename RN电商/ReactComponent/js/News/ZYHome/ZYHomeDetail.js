/**
 * Created by zhouyu on 2018/10/23.
 */

import React, {Component} from "React";

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class HomeDetail extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>商品详情</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF"
    }
})