//
//  ZYLoginViewController.m
//  RNDemo
//
//  Created by zhouyu on 2018/10/25.
//  Copyright © 2018 zhouyu. All rights reserved.
//

#import "ZYLoginViewController.h"

@interface ZYLoginViewController ()

@property (nonatomic, strong) UITextField *account;
@property (nonatomic, strong) UITextField *password;
@property (nonatomic, strong) UIButton *login;
@end

@implementation ZYLoginViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    self.title = @"登录";
    self.view.backgroundColor = [UIColor whiteColor];
    self.navigationItem.rightBarButtonItem = [[UIBarButtonItem alloc] initWithBarButtonSystemItem:UIBarButtonSystemItemRedo target:self action:@selector(dismiss)];
    
    self.account = [[UITextField alloc] initWithFrame:CGRectMake(50,100,200,50)];
    self.password = [[UITextField alloc] initWithFrame:CGRectMake(50,160,200,50)];
    self.account.backgroundColor = [UIColor lightGrayColor];
    self.password.backgroundColor = [UIColor blueColor];
    
    self.login = [[UIButton alloc] initWithFrame:CGRectMake(50,230,200,50)];
    [self.login setTitle:@"登录" forState:UIControlStateNormal];
    [self.login setTitleColor:[UIColor blackColor] forState:UIControlStateNormal];
    [self.login addTarget:self action:@selector(doLogin) forControlEvents:UIControlEventTouchUpInside];
    
    [self.view addSubview:self.account];
    [self.view addSubview:self.password];
    [self.view addSubview:self.login];
}

- (void)dismiss {
    [self dismissViewControllerAnimated:YES completion:nil];
}

- (void)doLogin {
    self.loginBlock(@[@"zhouyu", @"123456"]);
    [self dismiss];
}

@end
