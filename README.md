# htxo 
https://hexo.io/zh-cn/docs/front-matter

## 一键三连
hexo clean && hexo g && hexo d

## 本地启动
hexo s

##  https://hexo.io/zh-cn/docs/front-matter
```
layout	布局	config.default_layout
title	标题	文章的文件名
date	建立日期	文件建立日期
updated	更新日期	文件更新日期
comments	开启文章的评论功能	true
tags	标签（不适用于分页）	
categories	分类（不适用于分页）	
permalink	覆盖文章网址	
excerpt	Page excerpt in plain text. Use this plugin to format the text	
disableNunjucks	Disable rendering of Nunjucks tag {{ }}/{% %} and tag plugins when enabled	
lang	Set the language to override auto-detection	Inherited from _config.yml
```

## 资源文件夹
### 1.source/images ，markdown语法引用
![图片啊](/images/1.jpg)

### 2. hexo new post xxx时会创建相关文件夹，内部采用以下语法
{% asset_path slug %}
{% asset_img slug [title] %}
{% asset_link slug [title] %}