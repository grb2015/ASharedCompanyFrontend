# ASharedCompanyFrontend
A shared   companies info Frontend

# 遇到的问题

1. 部署到AWS加载慢

解决方法： 我们发现的问题有2个：
1.请求的json有3M多，在服务器IIS上进行gzip压缩(浏览器默认就是请求gzip格式，所有http 接口中不需要加gzip头）,这样压缩之后，3M变为500k左右。
2. npm run build 之后，dist里面的vendor.bundle.js有3M左右，这个即使IIS设置了gzip它也不会被压缩。这个文件请求仍然很慢。(这里可以继续优化)
3.服务器AWS配置太低,1核cpu 1G内存，网络是中低速，而且服务器在新加坡。特别是网络宽带太低，提高配置之后，即使3M的vendor.bundle.js也是秒开。

