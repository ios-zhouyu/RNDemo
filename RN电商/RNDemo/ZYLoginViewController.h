//
//  ZYLoginViewController.h
//  RNDemo
//
//  Created by zhouyu on 2018/10/25.
//  Copyright © 2018 zhouyu. All rights reserved.
//

#import "ViewController.h"

@interface ZYLoginViewController : UIViewController

@property (nonatomic, copy)  void(^loginBlock) (NSArray* resultArr);

@end

