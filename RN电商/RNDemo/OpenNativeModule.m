//
//  OpenNativeModule.m
//  RNDemo
//
//  Created by zhouyu on 2018/10/24.
//  Copyright © 2018 zhouyu. All rights reserved.
//

#import "OpenNativeModule.h"
#import "AppDelegate.h"
#import "ZYViewController.h"
#import "ZYLoginViewController.h"

@implementation OpenNativeModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(openNativeVC) {
    dispatch_async(dispatch_get_main_queue(), ^{
        AppDelegate *delegate = (AppDelegate *)([UIApplication sharedApplication].delegate);
        UINavigationController *rootNav = delegate.navigationController;
        ZYViewController *nativeVC = [[ZYViewController alloc] init];
        [rootNav pushViewController:nativeVC animated:YES];
    });
}

RCT_EXPORT_METHOD(openNativeVCWithParams:(NSDictionary *)params) {
    dispatch_async(dispatch_get_main_queue(), ^{
        AppDelegate *delegate = (AppDelegate *)([UIApplication sharedApplication].delegate);
        UINavigationController *rootNav = delegate.navigationController;
        ZYViewController *nativeVC = [[ZYViewController alloc] init];
        nativeVC.params = params;
        [rootNav pushViewController:nativeVC animated:YES];
    });
}

RCT_EXPORT_METHOD(popToViewController) {
    dispatch_async(dispatch_get_main_queue(), ^{
        AppDelegate *delegate = (AppDelegate *)([UIApplication sharedApplication].delegate);
        [delegate.navigationController popViewControllerAnimated:YES];
    });
}

RCT_EXPORT_METHOD(loginState:(NSString *)state callback:(RCTResponseSenderBlock)callback) {
    dispatch_async(dispatch_get_main_queue(), ^{
        AppDelegate *delegate = (AppDelegate *)([UIApplication sharedApplication].delegate);
        ZYLoginViewController *login = [[ZYLoginViewController alloc] init];
        UINavigationController *nav = [[UINavigationController alloc] initWithRootViewController:login];
        [delegate.navigationController presentViewController:nav animated:YES completion:nil];
        login.loginBlock = ^(NSArray *resultArr) {
            callback(@[[NSNull null], resultArr]);
        };
    });
}

@end
