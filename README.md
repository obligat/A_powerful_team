

#### 软件杯-2016集体项目
## 成员
>

马宇辰(myc1995)

王华

李晨冬

杜金桥(obligat)


## 使用方法

1，npm install 安装依赖

2，sudo mongod 启动数据库

3，npm run refreshMongo 刷新数据库

4，npm run wpw

5，npm start

6，打开localhost：3000


## github多人协作冲突及相关命令

1. git log --oneline：在一行显示日志

2. git pull：将远端仓库的东西拉回本地（当远端仓库的东西比自己的新）

3. 当有两个人同时对仓库中的东西进行修改时，合并会发生错误，此时，在webstorm左边小窗口中可以看到,发生冲突的文件的文件名是红色的，删去没用的（自己不用的）即可再次提交

4. 远程提交到该仓库： git push origin master (git push) default

5. git rm -r --cached folder:删除版本库中多余的内容

6. git reset --hard number:回退指定版本

## 目录结构：
1. public：静态文件
2. server：服务器端文件
3. app.js

## 注意事项：
1. clone该仓库
2. npm install 安装依赖
3. commit的格式：
> git commit -m 'name - description'
  name: 自己github的名字，或自己的名字
  description：自己提交的描述，要具体，小步提交

## npm run eslint
4. 最小圈复杂度3
5. 每句结束有';'
6. 每个函数不超过15行
7. 每个文件不超过150
8. 单引号

## npm run coverage（测试覆盖率）
## npm run wpw（可以自动编译，但是浏览器需手动刷新）
