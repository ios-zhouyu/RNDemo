/**
 * Created by zhouyu on 2018/10/23.
 */

import React, {Component} from "React";

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    WebView,
    NativeModules
} from 'react-native';

var KUIScreenWidth = require("Dimensions").get("window").width;

var nativeModule = NativeModules.OpenNativeModule;

export default class ShopCenterDetail extends Component {

    static defaultProps = {
        isFromNative: null
    }

    constructor(props) {
        super(props);
        this.state = {
            // url: this.props.url + '?uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_term=6.6&utm_source=AppStore&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&version_name=6.6&userid=160495643&utm_medium=iphone&lat=23.134709&utm_campaign=AgroupBgroupD100Ghomepage_shoppingmall_detailH0&token=b81UqRVf6pTL4UPLLBU7onkvyQoAAAAAAQIAACQVmmlv_Qf_xR-hBJVMtIlq7nYgStcvRiK_CHFmZ5Gf70DR47KP2VSP1Fu5Fc1ndA&lng=113.373890&f=iphone&ci=20&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'
            url: "http://m.maoyan.com/imeituan/?_v_=yes&my_traffic_sources=group&ci=1&stid_b=1&cevent=imt%2Fhomepage%2Fcategory1%2F99#movie",
            title: "购物中心详情"
        }

        this.popToView = this.popToView.bind(this)
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                <WebView
                    automaticallyAdjustContentInsets={true}
                    source={{uri: this.state.url}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                />
            </View>
        );
    }

    renderNavBar() {
        return(
            <View style={styles.navBar}>
                <TouchableOpacity onPress={this.popToView} activeOpacity={0.5} style={styles.navBackTouchable}>
                    <Image source={{url: "icon_camera_back_normal"}} style={styles.navBackImage}/>
                </TouchableOpacity>
                <Text style={styles.navTitle}>{this.state.title}</Text>
                <TouchableOpacity activeOpacity={0.5} style={styles.navRightTouchable}>
                    <Image source={{url: "icon_mine_setting"}} style={styles.navImage}/>
                </TouchableOpacity>
            </View>
        )
    }

    popToView() {
        if (this.props.isFromNative !== null) {
            this.props.navigator.pop()
        } else {
            nativeModule.popToViewController()
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EBEBEB"
    },
    navBar: {
        width: KUIScreenWidth,
        height: 88,
        paddingTop: 24,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255,96,0,1.0)"
    },
    navTitle: {
        color: "#FFFFFF",
        fontSize: 17,
        fontWeight: "500",
        marginTop: 18
    },
    navRightTouchable: {
        position: "absolute",
        bottom: 12,
        right: 5
    },
    navImage: {
        width: 25,
        height: 25
    },
    navBackTouchable: {
        position: "absolute",
        bottom: 12,
        left: 5
    },
    navBackImage: {
        width: 25,
        height: 25
    },
})