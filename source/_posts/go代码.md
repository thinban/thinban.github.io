---
title: go
date: 2022-07-11 18:02:38
tags:
- 标签1
- 标签2

categories:
- 分类1
- 分类2
---

## 简单爬虫

```go
package main

import (
	"fmt"
	"github.com/PuerkitoBio/goquery"
	"net/http"
)

//查询广东最新疫情
func main() {
	d := findEle("http://wsjkw.gd.gov.cn/")
	newlest := d.Find("#tab > div:nth-child(5) > ul > li:nth-child(1) > a")
	href, _ := newlest.Attr("href")
	fmt.Println(href)

	detail := findEle(href)
	content := detail.Find("body > div.main-content > div > div > div > div > div.content-content")
	fmt.Println(newlest.Text())
	fmt.Println(content.Text())

}

func findEle(url string) *goquery.Document {
	res, _ := http.Get(url)
	d, _ := goquery.NewDocumentFromReader(res.Body)
	return d
}
```