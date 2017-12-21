1.下载依赖包
$ npm install

2.启动服务。默认端口4200
$ npm start

3.编译生成dist文件夹
$ ng build

4.与java项目结合
拷贝dist文件夹到eclipse项目文件里
修改dist/index.html的
改为项目名+文件名/dmio/dist/

对应的项目是selenium_tools，修改src\app\layout下的路径 baseUrl为你selenium_tools的访问路径
