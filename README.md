## 关于

这是一个对[ele.me](http://ele.me)首页进行视觉模仿的实现(没有要冒犯的意思..囧)，然后根据我个人的一些想法，对页面进行了一些调整

## Demo

[demo](http://lanzc.com/eleme)

## 用到的项目

 - [html5-boilerplate](https://github.com/h5bp/html5-boilerplate) (目录结构)
 - [Bootstrap](https://github.com/twbs/bootstrap) 
 - [Quicksand](https://github.com/razorjack/quicksand)
 - 还有一些stackoverflow和google到的tips就不列举了... 

## 答

**1.**我用Bootstrap来重构页面，这样可以在不同分辨率的情况下自适应调整，有一个较一致的浏览体验.

**2.**幻灯片组件我使用Bootstrap的Carousel.js插件来实现，鼠标点击幻灯片的左右边缘可以切换上一张或者下一张.支持无限循环

**3.**以下是我对ele.me首页几个细节上的调整或者说改进：

(a). ![](https://raw.githubusercontent.com/hanaarena/Little-eleme/master/img/0.png)
把导航栏固定在顶端，让user不用上滑页面便可找到一些常用的选项.

(b). ![](https://raw.githubusercontent.com/hanaarena/Little-eleme/master/img/1.gif)
搜索框改成在user下滑页面是弹出.

(c). 餐厅筛选，如图：
![](https://raw.githubusercontent.com/hanaarena/Little-eleme/master/img/2.png)

起送价滑条跟页面的其他元素不太和谐，所以这里我用一个叫quicksand的小插件来代替它，勾选下拉checkbox即可以对列表项进行某种特定条件的排序.(这里加了`按价格`和`按评价`两个条件)
![](https://raw.githubusercontent.com/hanaarena/Little-eleme/master/img/3.png)

(d).<br>![](https://raw.githubusercontent.com/hanaarena/Little-eleme/master/img/4.png)
页面中间的这一栏我觉得可以去掉，可以`分解`它们放到导航栏或者footer中.

**4.**刚开始接触编程的时候是用wordpress建博客，当时那个博客界面还挺丑的，然后在完善博客让它更好看点的过程中步入了前端的坑.越踩越深后觉得前端不仅仅是'网页设计'，而且javascript也不仅仅是一门传说中的'玩具语言'.我觉得前端可以不仅仅是前端，在很多方面都有可能性.