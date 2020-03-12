---
layout: blog
life: true
background: blue
background-image: ../thumbnails/Information-architecture-design/title.png
title: 信息架构设计
category: 设计
tags:
- 设计
- 用户体验
date:  2018-11-06 18:24:23
redirect_from:
  - /2018/11/bookindex/
---

关于信息架构，在实习期间有做相关的梳理：[《认识信息架构》](https://wiki.haplat.net/pages/viewpage.action?pageId=49807379)，现在回头看当时的分析发现其实还停留在非常表象的层面，且更多是对《信息架构 超越Web设计》这本书的学习总结，这次的重新学习和实践加深了我对信息架构的认识，并重新梳理了关于信息架构以及任务流这块的知识结构。

## 1.1信息架构介绍

信息架构简单来说就是对信息的一个分类和分级，将信息结构化为有意义、易理解的信息。

为什么会有信息架构？因为人天生擅长分类，人们从出生开始可能就已经在一个分类的结构化的环境中，家庭、社区、城市、国家；班级、年级、学校、专业；公司、组织、部门等等，当你要寻找一个人，你可能会先看他在哪个城市，那个学校/公司，然后再层层寻找。信息架构存在于我们周遭环境的方方面面。我们使用的网站，我们常逛的超市，我们阅读的书籍。所以经过分类的结构化组织能够帮助人们更好的理解环境，定位目标。

## 1.2 信息架构原则


**1.根据产品特点组织信息**
不同类别的产品信息组织方式差异比较大，但目的都是为了满足用户需求
信息流类的产品，多是根据内容的分类和时间流来组织信息，如今日头条按照新闻类别和时间流来组织内容，是因为新闻的时效性比较强，用户也有根据兴趣筛选新闻的需求。

![show](http://zhuangzhuangmiao.github.io/thumbnails/Information-architecture-design/d1.png)

工具类产品，多是根据使用流程和功能模块来组织信息，如teambition是按照任务流程（产品设计流程）来组织结构。

![show](http://zhuangzhuangmiao.github.io/thumbnails/Information-architecture-design/d2.png)

**2.一致性**
信息架构的一致性体现在几个方面：

1. 同一个系统不同平台保持一致性。如下是网易云音乐PC端和手机端的页面，可以看出，由于平台不同，布局很不一样，但信息架构基本是保持一样的，一级分类都为：“推荐”、“我的音乐”、“歌单”

![show](http://zhuangzhuangmiao.github.io/thumbnails/Information-architecture-design/d3.png)

1. 组织内容保持一致性



**3.同层级内容独立**
相同层级的内容应该是独立的两个部分，并且用合适的组件形式来表现。
经历的项目中曾经有一个信息架构不恰当的例子，客户监控平台的监控配置页，原来只有按任务粒度查看，而现在为满足需求需要增加一个域名粒度查看页面，于是当时拍脑袋就设计成了如下用Tab切换两个页面。

![show](http://zhuangzhuangmiao.github.io/thumbnails/Information-architecture-design/d4.png)

乍一看好像没什么问题，但拿去给用户测试的时候，发现绝大部分用户都忽视了“监控域名”的Tab项，一方面因为用户原先没有域名粒度查看的概念，所以可能看到了也会觉得是另外一个不相关的东西。另一方面，则是信息架构出现了问题。因为其实“任务粒度查看”和“域名粒度查看”是一个东西，它们共用数据库的一张表，只是查看的维度不同，而这种设计则把一个东西设计成了两个东西，至少让用户觉得它们是两个不同的东西。

发现问题后，将设计方案做了如下改进，依然是切换查看，但此时采用切换按钮查看，名称也改成了“任务视角”和“域名视角”，将原来混淆掉的概念厘清了，再拿给用户看，用户也很容易理解视角的意思。

![show](http://zhuangzhuangmiao.github.io/thumbnails/Information-architecture-design/d5.png)

**4.上下层级内容相关**
上下层级的内容应该是相关联的。
如网易严选，居家分类下有“医疗宠物”一项，相关性并不是那么强，当用户想要找关于宠物的用品的时候寻找的成本会多一些。而天猫下的关于宠物的分类则提到一级，在一级分类名称中用“/”来关联弱相关的类别，增强其相关性，同时平衡了一级分类和二级分类的信息架构宽度。

![show](http://zhuangzhuangmiao.github.io/thumbnails/Information-architecture-design/d6.png)

![show](http://zhuangzhuangmiao.github.io/thumbnails/Information-architecture-design/d7.png)

**5.平衡性**
信息架构的层级应该平衡广度和深度。
C端产品常采用广而浅的信息架构，用户的完成任务的流程相对较短，广而浅的信息架构使得C端用户能通过很少的点击完成任务。但同时增加了用户在每一层获取信息的难度。
B端产品常采用窄而深的信息架构，用户完成任务的流程相对较长，窄而深的信息架构能帮助用户专注于完成任务。

**6.可扩展性**
信息架构不是一成不变的，随着产品功能的变更或删减，信息架构应该具有可扩展性。

## 1.3 信息架构方法

**从上到下的构建方法**
适合产品目标、战略已经明确的情况（从产品目标出发），这时一般先将满足产品目标的功能分成几个大类（一级），然后再往下细分层级内容

![show](http://zhuangzhuangmiao.github.io/thumbnails/Information-architecture-design/d8.png)

**从下到上的构建方法**
适合产品用户目标比较明确的情况（从用户目标出发），这时先给大量收集来的功能或内容做分类，然后再向上一层做归类，直到层级广度和深度都适合为止

![show](http://zhuangzhuangmiao.github.io/thumbnails/Information-architecture-design/d9.png)


