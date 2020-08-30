# ASharedCompanyFrontend
  对A股上市公司分地区进行可视化分析   http://acompany.top-hr.fun/
  
# 遇到的问题  

## 1. 部署到AWS加载慢  

解决方法： 我们发现的问题有3个：  
1. http接口请求的json有3M多，在服务器IIS上进行gzip压缩(浏览器默认就是请求gzip格式，所有http 接口中不需要加gzip头）,这样压缩之后，3M变为500k左右。  
2. * npm run build 之后，dist里面的vendor.bundle.js有3M左右，这个即使IIS设置了gzip它也不会被压缩。这个文件请求仍然很慢。 
   * 即使使用官方的最简单的Hero应用，https://angular.cn/tutorial/toh-pt0  dist后仍然有3M，  
  (这里可以继续优化)   
3. 服务器AWS配置太低,1核cpu 1G内存，网络是中低速，而且服务器在新加坡。特别是网络宽带太低，提高配置之后，即使3M的vendor.bundle.js也是秒开。  

## 2. 使用阿里云的服务器，然后用域名访问的时候，需要进行备案。
  解决方法： 
  * 使用AWS(国外)的服务器就可以不备案。如下是在阿里云买的域名，而服务器是AWS的  
  ![aliyun_dns](https://github.com/grb2015/ASharedCompanyFrontend/blob/master/docs/aliyun_dns.png)
  * 进行备案 ，不过貌似需要使用阿里云服务器3个月以上，才能在阿里云进行备份
  

