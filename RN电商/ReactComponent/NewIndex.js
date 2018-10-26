import React, { Component } from 'react';
//Module语法风格,ES6新增,编译时加载
import {
    AppRegistry,
} from 'react-native';

import ShopCenterDetail from "./js/News/ZYHome/ZYHomeShopCenterDetail";

export default class RNDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTabBarItem: "contacts"
        };
    };

    render() {
        return (
            <ShopCenterDetail/>
        );
    }

    
}

AppRegistry.registerComponent('RNDemo', () => RNDemo);

