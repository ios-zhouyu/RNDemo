//
//  NativeToRNEventEmitter.h
//  RNDemo
//
//  Created by zhouyu on 2018/10/26.
//  Copyright © 2018 zhouyu. All rights reserved.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

NS_ASSUME_NONNULL_BEGIN

@interface NativeToRNEventEmitter : RCTEventEmitter <RCTBridgeModule>

+ (instancetype)shareInstance;

@end

NS_ASSUME_NONNULL_END
