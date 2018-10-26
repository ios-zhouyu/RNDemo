//
//  ZYViewController.m
//  RNDemo
//
//  Created by zhouyu on 2018/10/24.
//  Copyright © 2018 zhouyu. All rights reserved.
//

#import "ZYViewController.h"
#import "ZYRNViewController.h"
#import "NativeToRNEventEmitter.h"

@interface ZYViewController ()

@end

@implementation ZYViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    if (self.title == nil) {
        self.title = @"这是原生界面";
    }
    
    self.navigationItem.rightBarButtonItem = [[UIBarButtonItem alloc] initWithTitle:@"原生2RN" style:UIBarButtonItemStyleDone target:self action:@selector(jumpToNewRNPage)];
     self.view.backgroundColor = [UIColor whiteColor];
    
    UIButton *button = [[UIButton alloc] initWithFrame:CGRectMake(50, 150, 300, 80)];
    [button setTitle:@"向首页发通知" forState:UIControlStateNormal];
    [button setTitleColor:[UIColor redColor] forState:UIControlStateNormal];
    [button addTarget:self action:@selector(pushNoticationToHome) forControlEvents:UIControlEventTouchUpInside];
    
    [self.view addSubview:button];
}

- (void)jumpToNewRNPage {
    [self.navigationController pushViewController:[[ZYRNViewController alloc] init] animated:YES];
}

- (void)pushNoticationToHome {
    //发通知传值
    [NativeToRNEventEmitter shareInstance];
    [[NSNotificationCenter defaultCenter] postNotificationName:@"CustomEventNameNotifation" object:nil];
}

- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    self.navigationController.navigationBar.hidden = NO;
}

- (void)viewWillDisappear:(BOOL)animated {
    [super viewWillDisappear:animated];
    self.navigationController.navigationBar.hidden = YES;
}

- (void)setParams:(NSDictionary *)params {
    self.title = params[@"title"];
}

@end
