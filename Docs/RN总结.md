[@toc]

# RN总结

[iOS原生项目(Objective-C)集成React Native(0.57.3版本)图文教程--(1)基本环境](https://blog.csdn.net/kuangdacaikuang/article/details/83070150)

[iOS原生项目(Objective-C)集成React Native(0.57.3版本)图文教程--(2)集成过程](https://blog.csdn.net/kuangdacaikuang/article/details/83077385)

[一个RNDemo(React Native 0.57.3 + ES6)实现(包含RN与原生相互跳转和通信)](https://blog.csdn.net/kuangdacaikuang/article/details/83377765)

[iOS原生界面与RN界面互调及传值](https://blog.csdn.net/kuangdacaikuang/article/details/83384008)

## 1. props和state相关的属性传值

### 1.1 Props

`Props`：大多数组件在创建的时候可以使用各种参数来进行定制，用于定制的的这些参数就是`Prop`,在`defaultProps`中声明,声明`propTypes`可以控制属性类型

```
#例如name属性,就将name属性传递给NewText组件
<NewText name="zhouyu"/>
```

引用属性
```
{this.props.name}
```

<font color=red>总结: 常用与界面间控制器以及父子空间传值,类似于`iOS`的`property`属性; 在父组件中指定,在生命周期中不能再改变; 与`iOS`的区别就是`RN`使用{}来绑定值,而`iOS`使用`setProperty`来处理属性值</font>

#### `特殊属性: this.props.children`

用来遍历子组件

| 说明 | 属性prop | 状态state |
| --- | --- | --- |
| 能否从父组件获取初始值 | YES | NO |
| 能否有父组件修改 | YES | NO |
| 能否在父组件设置默认值 | YES | YES |
| 能否在组件内修改 | NO | YES |

### 1.2 State

`State`: 一般是数据或者状态存在里面,在`constructor`构造方法中完成初始化.大部分组件的工作应该是从`props`里取数据并渲染出来.但是,有时需要对用户输入,服务器请求或者时间变化等作出响应,这时才需要`state`.


```
#初始化某些参数
constructor(props){
        super(props);
        this.state={
            loaded:false,
        };
        this.fetchData=this.fetchData.bind(this);
}
```

属性参数数据发生变化时

```
this.setState({
       loaded:true,
});
```

<font color=red>总结: 
1. `state`的作用就是在一些数据和属性状态发生变化时去更新指定的数据,需要在方法中去调用`this.setState`来更新数据.
2. state的任何属性改变都会导致页面重新绘制,消耗性能.
</font>

<font color=red> 使用场景: 处理输入事件,网络数据获取,定时更新,消息推送,按钮点击等等</font>

## 2. FastList和fetch应用
`FastList用来替代过时的ListView`
`Fetch`
```
fetch(myRequest)
    .then(response => {
        if (response.status === 200) {
              return response.json();
        } else {
      		throw new Error('Something went wrong on api server!');
    	 }
    })
    .then(response => {
    	  console.debug(response);
         // ...
    }).catch(error => {
         console.error(error);
    });
```

## 3. 原生与RN互调及传值

### 3.1 RN跳转原生界面
`iOS端`: 
1. 导入`#import <React/RCTBridgeModule.h>`.
2. 需要创建一个类遵守`RCTBridgeModule`协议.
3.`RCT_EXPORT_MODULE()` 写调用的方法.

```
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(openNativeVC) {
    dispatch_async(dispatch_get_main_queue(), ^{
        AppDelegate *delegate = (AppDelegate *)([UIApplication sharedApplication].delegate);
        UINavigationController *rootNav = delegate.navigationController;
        ZYViewController *nativeVC = [[ZYViewController alloc] init];
        [rootNav pushViewController:nativeVC animated:YES];
    });
}
```

`RN端`:
1. 引入`NativeModules`模块.
2. 创建nativeModule变量.
3. RN方法中调用对应的函数

```
var nativeModule = NativeModules.OpenNativeModule;
```

```
//跳转到原生界面
jumpToNative() {
    nativeModule.openNativeVC()
}
```

### 3.2 RN跳转原生界面并传值

<font color=red>所传参数可以是已知的数据类型,不过最好用`NSDictionary`和`NSArray`来传,其实原理就是`RN`那边传递个`json`过来,在`RN`中`json`也是个对象</font>

1. 原生界面

```
RCT_EXPORT_METHOD(openNativeVCWithParams:(NSDictionary *)params) {
    dispatch_async(dispatch_get_main_queue(), ^{
        AppDelegate *delegate = (AppDelegate *)([UIApplication sharedApplication].delegate);
        UINavigationController *rootNav = delegate.navigationController;
        ZYViewController *nativeVC = [[ZYViewController alloc] init];
        nativeVC.params = params;
        [rootNav pushViewController:nativeVC animated:YES];
    });
}
```

2. RN界面

```
    //跳转到原生界面
    jumpToNativeWithParams() {
        var params = {"title": "定位地址: 北京"};
        nativeModule.openNativeVCWithParams(params)
    }
```

### 3.3 RN跳转原生界面并传值后,原生界面再回调给RN界面相关信息

1. 原生定义block以便回调
2. bridge桥接类,添加方法
3. 登录页面事件回调

```
#import "ViewController.h"

@interface ZYLoginViewController : UIViewController

@property (nonatomic, copy)  void(^loginBlock) (NSArray* resultArr);

@end

```

```
RCT_EXPORT_METHOD(loginState:(NSString *)state callback:(RCTResponseSenderBlock)callback) {
    dispatch_async(dispatch_get_main_queue(), ^{
        AppDelegate *delegate = (AppDelegate *)([UIApplication sharedApplication].delegate);
        ZYLoginViewController *login = [[ZYLoginViewController alloc] init];
        UINavigationController *nav = [[UINavigationController alloc] initWithRootViewController:login];
        [delegate.navigationController presentViewController:nav animated:YES completion:nil];
        //登录成功后,login控制器就可以调用block,进行回调了
        login.loginBlock = ^(NSArray *resultArr) {
            callback(@[[NSNull null], resultArr]);
        };
    });
}
```

```
- (void)doLogin {
    self.loginBlock(@[@"zhouyu", @"123456"]);
    [self dismiss];
}

- (void)dismiss {
    [self dismissViewControllerAnimated:YES completion:nil];
}
```

### 3.4 原生界面传值给RN页面
[React Native中文网: 和原生端通信](https://reactnative.cn/docs/communication-ios/) 

[React Native中文网: 回调函数及通信](https://reactnative.cn/docs/native-modules-ios/)

`主要分两种情况: 一种是原生界面向下级RN界面传值; 另一种是原生界面向上级RN界面传值`
### 3.4.1 原生界面向下级RN界面传值

<font color=red>这种情况不能用`NativeEventEmitter`结合iOS的通知来实现传值,因为通知是现有监听者再有发送者,向下级RN界面传值,这种方式有可能下级RN页面还没加载出来,通知就已经发送了,导致下级RN页面获取不到值</font>

`可以利用加载js的budle文件时,利用initialProperties参数进行传值`

```
NSDictionary *properties = @{@"name": @"zhangsan"};
NSURL *url = [NSURL URLWithString:@"http://localhost:8081/NewIndex.bundle?platform=ios&dev=true"];
RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:url moduleName:@"RNDemo" initialProperties:properties launchOptions:nil];
self.view = rootView;
```

### 3.4.2 原生界面向上级RN界面传值
<font color=red>此种情况可以使用RN的`NativeEventEmitter`结合iOS的通知来实现传值</font>

1. 原生界面创建事件传递的module类,继承RCTEventEmitter,遵守RCTBridgeModule协议

```
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface NativeToRNEventEmitter : RCTEventEmitter <RCTBridgeModule>
+ (instancetype)shareInstance;
@end
```

2. 原生module类实现和重写相关方法

```
#import "NativeToRNEventEmitter.h"

@interface NativeToRNEventEmitter()
@property (nonatomic,assign)BOOL hasListeners;
@end

@implementation NativeToRNEventEmitter

+ (instancetype)shareInstance {
    static NativeToRNEventEmitter *instance;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        instance = [[NativeToRNEventEmitter alloc] init];
    });
    return instance;
}

RCT_EXPORT_MODULE();

//init方法中使用NSNotificationCenter监听iOS端要发送事件的操作
- (instancetype)init {
    if (self = [super init]) {
         [self registerNotifications];
    }
    return self;
}

//在NSNotification对应的通知方法中将事件发送给RN
- (void)registerNotifications {
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(sendCustomEvent:)
                                                 name:@"CustomEventNameNotifation"
                                               object:nil];
}

- (void)sendCustomEvent:(NSNotification *)notification {
//    NSString *eventName = notification.userInfo[@"name"];
    if (self.hasListeners) {
        [self sendEventWithName:@"CustomEventName" body:@{@"name": @"东皇大厦"}];
    }
}

#pragma RCTEventEmitter
//重写supportedEvents方法，在这个方法中声明支持的事件名称
- (NSArray<NSString *> *)supportedEvents {
    return @[@"CustomEventName"];
}

// 在添加第一个监听函数时触发
-(void)startObserving {
    self.hasListeners = YES;
}

-(void)stopObserving {
    self.hasListeners = NO;
}

@end
```

3. RN界面: 导入NativeEventEmitter

```
	var nativeToRNEventModule = NativeModules.NativeToRNEventEmitter;

    componentDidMount() {
        var eventEmitter = new NativeEventEmitter(nativeToRNEventModule);
        this.listener = eventEmitter.addListener("CustomEventName", (result) => {
            alert("监听到通知事件" + result);
            this.setState({
                add: result.name
            });
        })
    }

    componentWillUnmount() {
        this.listener && this.listener.remove();
    }
```

## 4. 生命周期函数

0. 默认属性
1. 加载阶段
2. 运行阶段
3. 卸载阶段

```
# 默认属性
1. defaultProps

# 加载阶段
1. constructor: 在组件创建的时候调用一次, 可通过this.state初始化属性
2. componentWillMount: 组件生命周期内,只会执行一次, 在render渲染前执行. 如果在这个函数中通过setState修改变量,RN框架不会额外渲染,子组件也有这个过程,是发生在父组件之后调用,常用语从本地读取数据
3. render: 渲染组件
4. componentDidMount: 组件声明周期中只会执行一次, 如果RN组件的子组件也有componentDidMount函数,并会在父组件的componentDidMount函数之前被调用.一般情况在这个方法中请求网络是一个不错的选择!

# 运行阶段
1. componentWillReceiveProps: 在RN组件的初始渲染完成之后,当RN组件接收到新的props时,这个函数将被调用.参数就是新的props.再次强调下,初次渲染不会调用该方法
2. shouldComponentUpdate: RN组件的初始化渲染执行完成后,RN组件接收到新的state或者props时这个函数会调用
3. componentDidUpdate: RN组件初始完成之后,RN框架在重新渲染RN组件完成之后调用,参数是渲染前的props和state

# 卸载阶段
componentWillUnMount: RN组件卸载前,这个函数被执行

```



## 5. {variable}变量嵌入风格

<font color=red>通过{变量}的方式来绑定数据, this.state.属性或者this.props.属性,来操作属性的get方法, 而{变量}的模式就类似与赋值模式</font>

## 6. constructor中函数绑定

`初始化构造器,ES6中代替getInitialState方法, 在此方法中可以用state更新状态,绑定函数`

## 7. 虚拟DOM和DIFF算法

1. 虚拟DOM: 用JS对象的形式,来模拟页面上的DOM嵌套关系
2. diff算法: tree diff; component diff; element diff;
tree diff: 新旧两个DOM树逐层对比,找到满足的更新.
component diff: 在进行tree diff时,每一层中,组件级别的对比更新.
element diff: 在进行tree diff和component diff时,每一层中的每个元素的对比更新.

## 8. Flex和FlexBox布局

Flex: 弹性宽高,决定子控件平分的比例,值越大占的比例就越大.

Flexbox: flexDirection(column,row), justifyContent(延主轴的布局), alignItems(延次轴的布局)

```
主轴方向 flexDirection: row,column
主轴对其方式 justifyContent: flex-start, flex-end, center, space between, space-around
侧轴对齐方式 alignItems: flex-start, flex-end, center, stretch
超出溢出 flexWrap: nowrap, wrap, wrap-reverse

元素属性: 
flex-grow, flex-shrink, flex-basis : 默认值 0, 1, auto 
宽度 = 父类的弹性宽度 * (flex-grow / sum(flex-grow))
alignSelf: auto, flex-start, flex-end, center, baseline, stretch
```

## 9. NativeModules与RCTBridgeModule通信机制作用
`NativeModules`: 将原生中对应的类,映射到RN中. 例如原生中有个`OpenNativeModule`类和RN通信,在RN中可以使用,`var nativeModule = NativeModules.OpenNativeModule;`,将原生中的类导过来,从而实现调用原生方法和属性等操作
[RCTBridgeModule](https://www.jianshu.com/p/e8d2d8e1e21f)
[RN中文网: 手动linking](https://reactnative.cn/docs/linking/)

[RN官网: 手动linking](https://facebook.github.io/react-native/docs/linking-libraries-ios.html#manual-linking)
Linking提供了一个通用的接口来与传入和传出的 App 链接进行交互。
经查跟PushNotification有关，需要手动完成Linking
'RCTPushNotification',
'RCTLinkingIOS',

Module NativeToRNEventEmitter requires main queue setup since it overrides `init` but doesn't implement `requiresMainQueueSetup`. In a future release React Native will default to initializing all native modules on a background thread unless explicitly opted-out of.

## 10. Xcode烦人的log输出: nw_connection_get_connected_socket 

```
[] nw_connection_get_connected_socket [C7] Client called nw_connection_get_connected_socket on unconnected nw_connection
[] nw_socket_handle_socket_event [C8.1:1] Socket SO_ERROR [61: Connection refused]
```

1. Xcode menu -> Product -> Run -> Edit Scheme...
2. Environment Variables -> Add -> Name: "OS_ACTIVITY_MODE", Value:"disable"
3. Run your app again, done! 这样就没问题了

## 11. Redux

