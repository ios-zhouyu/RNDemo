//
//  ZYViewController.m
//  RNDemo
//
//  Created by zhouyu on 2018/10/24.
//  Copyright © 2018 zhouyu. All rights reserved.
//

#import "ZYViewController.h"
#import "ZYRNViewController.h"

@interface ZYViewController ()

@end

@implementation ZYViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.title = @"原生界面";
    
    self.navigationItem.rightBarButtonItem = [[UIBarButtonItem alloc] initWithTitle:@"原生2RN" style:UIBarButtonItemStyleDone target:self action:@selector(jumpToNewRNPage)];
}

- (void)jumpToNewRNPage {
    [self.navigationController pushViewController:[[ZYRNViewController alloc] init] animated:YES];
}

- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    self.navigationController.navigationBar.hidden = NO;
}

- (void)viewWillDisappear:(BOOL)animated {
    [super viewWillDisappear:animated];
    self.navigationController.navigationBar.hidden = YES;
}

@end
