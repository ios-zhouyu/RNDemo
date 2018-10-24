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
    AlertIOS,
    TabBarIOS,
    NavigatorIOS
} from 'react-native';

var ZYUIScreen = require("Dimensions");
var {width} = ZYUIScreen.get("window");
var {height} = ZYUIScreen.get("window")

export default class RNDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTabBarItem: "contacts"
        };
    };

    render() {
        return (
            <View style={styles.container}>
                
                <TabBarIOS barTintColor={"white"} tintColor={"purple"}>
                    <TabBarIOS.Item
                        title="首页"
                        icon={{url: "account"}}
                        selectedIcon={{url: "balance_arrow"}}
                        badge="3"
                        selected={this.state.selectedTabBarItem == "contacts"}
                        onPress={()=>{this.setState({selectedTabBarItem: "contacts"})}}
                    >
                        <View style={[styles.commonView, {backgroundColor: "red"}]}>
                            <Text>第一页</Text>
                        </View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        systemIcon="bookmarks"
                        selected={this.state.selectedTabBarItem == "bookmarks"}
                        onPress={()=>{this.setState({selectedTabBarItem: "bookmarks"})}}
                    >
                        <View style={[styles.commonView, {backgroundColor: "white"}]}>
                            <Text>第二页</Text>
                        </View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        systemIcon="downloads"
                        selected={this.state.selectedTabBarItem == "downloads"}
                        onPress={()=>{this.setState({selectedTabBarItem: "downloads"})}}
                    >
                        <View style={[styles.commonView, {backgroundColor: "yellow"}]}>
                            <Text>第三页</Text>
                        </View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        systemIcon="search"
                        selected={this.state.selectedTabBarItem == "search"}
                        onPress={()=>{this.setState({selectedTabBarItem: "search"})}}
                    >
                        <View style={[styles.commonView, {backgroundColor: "green"}]}>
                            <Text>第四页</Text>
                        </View>
                    </TabBarIOS.Item>
                </TabBarIOS>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    commonView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

AppRegistry.registerComponent('RNDemo', () => RNDemo);

