'use strict';
export  var     g_is_login_in = false;
// 注意：即便是声明为var 或者var ,外部也是不可直接修改g_is_login_in的,必须设置setLoginStatus函数来修改
export function setLoginStatus(newValue: boolean) {
    g_is_login_in = newValue;
}
export const version: string="22.2.2";  