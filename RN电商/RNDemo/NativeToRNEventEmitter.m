//
//  NativeToRNEventEmitter.m
//  RNDemo
//
//  Created by zhouyu on 2018/10/26.
//  Copyright © 2018 zhouyu. All rights reserved.
//

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
