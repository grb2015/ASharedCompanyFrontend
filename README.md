# ASharedCompanyFrontend
  对A股上市公司分地区进行可视化分析   http://acompany.top-hr.fun/
  
# 遇到的问题  

## 1. 部署到AWS加载慢  

解决方法： 我们发现的问题有3个：  
1. http接口请求的json有3M多，在服务器IIS上进行gzip压缩(浏览器默认就是请求gzip格式，所有http 接口中不需要加gzip头）,这样压缩之后，3M变为500k左右。  
  参考：  
  https://stackoverflow.com/questions/25580078/how-to-enable-gzip-compression-in-iis-7-5  
  https://blog.csdn.net/dream_ll/article/details/52996540  
  https://blog.csdn.net/qq_26708777/article/details/79210936  
2. * npm run build 之后，dist里面的vendor.bundle.js有3M左右，这个即使IIS设置了gzip它也不会被压缩。这个文件请求仍然很慢。 
   * 即使使用官方的最简单的Hero应用，https://angular.cn/tutorial/toh-pt0  dist后仍然有3M，  
    **解决方法**:  
    不要使用npm run build --prod 进行编译。  
    使用 ng build --prod 或者 ng build --prod --build-optimizer  
     ref: https://stackoverflow.com/questions/41432673/how-to-decrease-prod-bundle-size  
3. 服务器AWS配置太低,1核cpu 1G内存，网络是中低速，而且服务器在新加坡。特别是网络宽带太低，提高配置之后，即使3M的vendor.bundle.js也是秒开。  

## 2. 使用阿里云的服务器，然后用域名访问的时候，需要进行备案。
  解决方法： 
  * 使用AWS(国外)的服务器就可以不备案。如下是在阿里云买的域名，而服务器是AWS的  
  ![aliyun_dns](https://github.com/grb2015/ASharedCompanyFrontend/blob/master/docs/aliyun_dns.png)
  * 进行备案 ，不过貌似需要使用阿里云服务器3个月以上，才能在阿里云进行备份
  
## 3. 如何让百度能够搜索到自己的网站? 

参考：https://jingyan.baidu.com/article/363872ec21d5346e4ba16fb1.html
     用户中心-->站点管理(https://ziyuan.baidu.com/site/index#/) 。需要添加网站验证才能管理。而站点管理需要先验证网站。注意需要手动将baidu_verify_HVQt2JtSbM.html加入到dist/目录
     
     用户中心-->站点管理 ，这个就是站长工具，可以看是否被百度的爬虫抓取过关键字
     
## 4.如何使用百度统计来看自己的网站被访问的数据
    step1 : 首先在百度统计里面新建网站  https://tongji.baidu.com/sc-web/10000247012/home/site/index?from=3
    step2 ：将百度的js文件加入到代码中。https://tongji.baidu.com/web/help/article?id=175&type=0 
    如下图：
    ![](https://github.com/grb2015/ASharedCompanyFrontend/blob/master/docs/baiduTongJi.png)
    
    note:可参考提交
    和 20200831的这次提交 [add] 加入百度统计的js文件



 
 
