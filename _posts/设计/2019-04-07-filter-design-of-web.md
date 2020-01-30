---
layout: blog
design: true
background: yellow
background-image: ../thumbnails/filter/title.jpg
category: 设计
title: Web筛选器设计小结
tags:
- 用户体验
- 设计
date:  2019-04-07 23:39:09
redirect_from:
  - /2019/04/bookindex/
---

筛选器在应用中是十分常见的模块，用户通过筛选器快速精确地找到目标内容，缩小数据的选择范围。在工作中由于不同的业务诉求，筛选器也各异，下面总结了Web常见筛选器设计方式。



# 筛选器位置

1. 内容上方，内容上方是最常见的位置，但当筛选条件过多时，通常需要滚动页面才能看到筛选结果

![show](http://zhuangzhuangmiao.github.io/thumbnails/filter/d1.png)

2. 内容左侧，纵向能放下较多的查询条件且能够即时查看筛选结果，适用于需要频繁修改筛选条件的场景；但与此同时筛选器占用了内容的横向空间。

![show](http://zhuangzhuangmiao.github.io/thumbnails/filter/d2.png)



# 常见筛选器

1. 搜索框--简单搜索框，通常支持模糊匹配

![show](http://zhuangzhuangmiao.github.io/thumbnails/filter/d3.png)

2. 搜索框--复合搜索框，有针对性地对某个维度进行筛选

![show](http://zhuangzhuangmiao.github.io/thumbnails/filter/d4.png)

3. 多条件组合筛选，输入多个字段的值进行组合查询

![show](http://zhuangzhuangmiao.github.io/thumbnails/filter/d5.png)

4. 表头筛选，通常用于查看数据时快速筛选某个字段的值

![show](http://zhuangzhuangmiao.github.io/thumbnails/filter/d6.gif)

5. 多关键字标签筛选，综合了搜索框和多条件组合的方式，用一个搜索框输入多个条件标签进行组合筛选。牺牲了部分直观性，但是相比多条件平铺的方式极大节省了页面空间

![show](http://zhuangzhuangmiao.github.io/thumbnails/filter/d7.gif)

6. 语句筛选 有着条件丰富和筛选精确的特点，但学习成本较高，语句筛选也支持高级用户直接根据一定的规则手写筛选语句，表达方式类似于正则表达式。

![show](http://zhuangzhuangmiao.github.io/thumbnails/filter/d8.gif)

7. 自定义筛选器，灵活性高，用户可以根据自己的需要自定义筛选条件

![show](http://zhuangzhuangmiao.github.io/thumbnails/filter/d9.gif)

（简道云）

8. 图表筛选  图表筛选也叫数据下钻/图表联动，是一种特殊的筛选场景，图表间可以设置联动，从而达到筛选的目的。在数据可视化、数据报表类工具中比较常见

![show](http://zhuangzhuangmiao.github.io/thumbnails/filter/d9.gif)



# 参考链接：

[后台系统的筛选设计基础知识科普](https://www.uisdc.com/backstage-systematic-screening-design)

[数据表格下的5中搜索场景](https://www.jianshu.com/p/8b2ee660d34d)

