1.下载依赖包
$ npm install

2.启动服务。默认端口4200
$ npm start

3.编译生成dist文件夹
$ ng build

4.angular4与后端结合开发
前端要调用后端的方法，又不把url写死在代码里面，可以设置一个代理
新建文件proxy.conf.json
``` json
{
	"/api": {
		"target": "http://localhost:8080",
		"secure": false
	}
}
```
修改文件package.json
``` json
...
"scripts": {
    "ng": "ng",
    "start": "ng serve --proxy-config proxy.conf.json",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
},
 ...
```

5.与java项目结合
拷贝dist文件夹到eclipse项目文件webapp里
修改dist/index.html的
```html
<base href="/">   
```
改为项目名+文件名/selenium_tools/dist/
```html
 <base href="/selenium_tools/dist/">
 ```
对应的backend项目是[selenium_tools](https://github.com/miozeng/selenium_tools)
