---
layout: blog
book: true
background: blue
background-image: http://img.hb.aicdn.com/7960b6b7237013bf1ab8cb6e3e341a69c632ff15f0e8-Ij0bMM_fw658
category: 设计
title: 关于鼠标悬停事件的7种用法
tags:
- 设计
- 交互设计
- Web Design
date:  2016-08-16 20:35:12
redirect_from:
  - /2016/08/bookindex/
---

最近写网页前端的过程中，发现会经常用到伪类的使用，如:link,:visited,:hover,:active,:disabled等。其中:link通常表示未点击链接的状态，:visited则为已点击的状态，:hover为鼠标悬停，：active为鼠标按下到放开时链接或按钮的状态，:disabled常用于表示元素不可用时的状态。其中数鼠标悬停交互（hover/onmouseover）的方式的运用最为多样化，当css不能满足悬停事件的时候常常借助js来实现。在开发人员和设计师的脑洞下鼠标悬停事件可以有多种多样的表现形式。从交互作用上总结起来大致有以下几类：

**1.最常见的是用在可点击元素或者网页链接上，常见为网址鼠标悬停显示下划线、按钮/图标悬停改变颜色等状态，若是material design风格会常将鼠标选中的卡片加重阴影，使卡片有上浮的感觉。**

有些图标的鼠标悬浮会出现tips来提示按钮的含义或者作用。将用户的鼠标移动行为即时反馈，以提示人们选中了可点击的元素或者超链接，可以进行点击了。

如：google搜索链接鼠标悬停显示下划线

![google搜索链接鼠标悬停显示下划线](http://upload-images.jianshu.io/upload_images/746926-860a18b8987b1d1d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



喜欢按钮悬停颜色变深，同时出现该图标的tip

![喜欢按钮悬停](http://upload-images.jianshu.io/upload_images/746926-a14d5d61874a47da.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

选中卡片时阴影加重，卡片上浮

![选中卡片时](http://upload-images.jianshu.io/upload_images/746926-a49a2b6bb6bdf5ca.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**2.用于导航中显示二级菜单/分类详情，其中选中的一级菜单链接可以直接点击显示，也可选中二级菜单进入更详细的分类页面。**

需要注意的是，当导航中的每个选项都有二级菜单并且为鼠标悬停显示的时候，二级菜单的弹出有一定的时间延迟会好一些，原因是如果鼠标悬停立刻显示的话，当鼠标沿着导航栏划过的时候二级菜单的显示会使人眼花缭乱，增加用户烦躁感；而若延迟出现二级菜单则可以在用户在某选项短暂停留后（用户对此选项可能有兴趣，想点击）再出现，可在相关选项聚焦其注意力。

如：淘宝分类导航

![淘宝分类导航](http://upload-images.jianshu.io/upload_images/746926-626f3934fa8e408b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

哔哩哔哩视频导航 

![哔哩哔哩视频导航](http://upload-images.jianshu.io/upload_images/746926-1c0645158495c0e9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**3.显示隐藏的按钮/图标。**

当某些按钮：（1）不是那么重要、（2）不希望按钮太吸引用户视线、（3）每个同类图片或模块都有相同操作的按钮时，则可在用户对某板块感兴趣而将鼠标移入的时候显示该按钮。例如facebook里的广告，关闭按钮只在鼠标悬停在广告内容上才出现，相比于没有关闭按钮的贴片广告而言增加了用户的控制感，相比于关闭按钮默认一直显示的贴片广告而言可使用户在关闭前增强用户对广告的关注度，有益于广告的转化率（若关闭按钮一直显示则用户的注意力大部分会在关闭按钮上急着想关闭而容易忽视广告本身的内容。）

如：facebook广告贴片

![facebook广告贴片](http://upload-images.jianshu.io/upload_images/746926-054130dce05fab8f.png?imageMogr2/auto-orient/strip)

pinterest图片上的save等按钮

![Pinterest 图片上的按钮](http://upload-images.jianshu.io/upload_images/746926-26c4d15572a62643.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



**4.通过隐藏或弱化其它元素或者突出选中元素来聚焦用户的视线。可以在当前页面内更好地展示产品**

如：华为官网的产品展示，鼠标移入后产品图片变大，并展示产品细节

![华为官网](http://upload-images.jianshu.io/upload_images/746926-ae539fd31e21a55f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**5.通过图片遮罩或者在选中的元素周围弹出新浮层来显示相关元素的额外/更详细的信息。使用户不需要跳转页面就可以获得更多的相关信息。**

如：dribbble的作品介绍

![dribbble的作品介绍](http://upload-images.jianshu.io/upload_images/746926-aaf87a64c306da09.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

微博用户信息简介图层

![微博用户信息简介图层](http://upload-images.jianshu.io/upload_images/746926-3864c70341967cec.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**6.鼠标悬停自动播放gif，在这里鼠标悬停是一个时机，悬停在gif图片上图片才变成动图播放，而不是一开始就不停地播放动图，使人眼花缭乱（这和视频很少设置为自动播放的道理是相同的）。**

如：dribbble当鼠标悬停在gif时自动加载播放动图

![dribbble当鼠标悬停在gif时自动加载播放动图](http://upload-images.jianshu.io/upload_images/746926-826e4abd5353d1e3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**7.显示可切换选项，如在视频中可即时切换声音状态或者画质状态。**

![视频播放页面](http://upload-images.jianshu.io/upload_images/746926-c027f77c52ac7d6f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

以上只是整理了鼠标悬停事件的几种用法，这些用法有优点也有缺点，网页元素应该根据自身特点选择是否采用鼠标悬停触发事件。