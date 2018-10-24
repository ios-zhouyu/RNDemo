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
    Platform
} from 'react-native';

import PropTypes from 'prop-types';

import TabNavigator from 'react-native-tab-navigator';
import { Navigator } from 'react-native-deprecated-custom-components';

import Home from "../ZYHome/ZYHome";
import Shop from "../ZYShop/ZYShop";
import Mine from "../ZYMine/ZYMine";
import More from "../ZYMore/ZYMore";

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "Home"
        };
    };

    render() {
        return (
            <TabNavigator tabBarStyle={{height: 83, paddingBottom: 30}}>
                {this.renderTabBarItem("首页", "icon_tabbar_homepage", "icon_tabbar_homepage_selected", "Home", "首页", Home, "10")}
                {this.renderTabBarItem("商家", "icon_tabbar_merchant", "icon_tabbar_merchant_selected", "Shop", "商家", Shop)}
                {this.renderTabBarItem("我的", "icon_tabbar_mine", "icon_tabbar_mine_selected", "Mine", "我的", Mine, "2")}
                {this.renderTabBarItem("更多", "icon_tabbar_misc", "icon_tabbar_misc_selected", "More", "更多", More)}
            </TabNavigator>
        );
    }

    renderTabBarItem(title,iconName, selectedIconName, selectedTab, componentName, component, badgeText) {
        return (
            <TabNavigator.Item
                title={title}
                renderIcon={() => <Image source={{url: iconName}} style={styles.icon} />}
                renderSelectedIcon={() => <Image source={{url: selectedIconName}} style={styles.icon} />}
                badgeText={badgeText}
                selected={this.state.selectedTab === selectedTab}
                onPress={() => this.setState({ selectedTab: selectedTab })}
            >
                <Navigator
                    initialRoute={{name:componentName,component:component}}
                    configureScene={()=>{
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route,navigator)=>{
                        let Component = route.component;
                        return <Component {...route.passProps} navigator={navigator}/>;
                    }}
                />
            </TabNavigator.Item>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    icon: {
        width: 25,
        height: 25
    }
})
