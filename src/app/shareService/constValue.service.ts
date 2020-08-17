import { Injectable} from "@angular/core";


@Injectable()
export class ConstValueService
{
  // 注意：必须要用static才能全局共享
  // public static newSeedapiUrl = 'http://127.0.0.1:8000';
  public static newSeedapiUrl = 'http://13.229.124.37:8000';

  public static echartbg = "red";
  public static g_is_login_in  = false ; // 保存登录状态。

}
