---
title: go代码段
date: 2022-07-11 18:02:38
updated: 2022-07-12 11:17:42
tags:
- go
- 代码段
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

## 追加写入csv

```go
package main

import (
	"encoding/csv"
	"io"
	"os"
)

func main() {
	f, _ := os.OpenFile("test.csv", os.O_RDWR|os.O_CREATE, 0666)
	defer f.Close()
	f.WriteString("\xEF\xBB\xBF") //写入utf-8 编码
	f.Seek(0, io.SeekEnd)
	w := csv.NewWriter(f)
	w.Write([]string{"网站", "类型"})
	w.Write([]string{"知乎", "问答类"})
	w.Write([]string{"百度", "搜索类"})
	w.Write([]string{"B站", "视频类"})
	w.Flush()
}
```

## 读取excel：格式化输出接口文档

```go
package main

import (
	"fmt"
	"github.com/360EntSecGroup-Skylar/excelize"
	"regexp"
	"sort"
)

//格式化输出接口文档
func main() {
	f, _ := excelize.OpenFile("a.xlsx")
	//序号	参数名称	变量名	参数类型	必填	描述
	//1	交易流水号	tranSeq	String(20)	是	发起系统的流水或业务流水号
	//										业务号
	rows := f.GetRows("Sheet1")
	m := map[string]string{} //{"tranSeq":"[必填]交易流水号：发起系统的流水或业务流水号、运单号"}
	var k string
	re, _ := regexp.Compile("\\s+")
	for i, row := range rows {
		var fieldZh = row[1]
		var field = row[2]
		var mustWrite = row[4]
		var comment = row[5]
		comment = re.ReplaceAllString(comment, "")
		//跳过首行
		if i < 1 {
			continue
		}
		if len(field) > 0 {
			k = field
			if mustWrite == "是" {
				mustWrite = "[必填]"
			} else {
				mustWrite = ""
			}
			m[k] = fmt.Sprintf("%s%s:%s", mustWrite, fieldZh, comment)
		} else {
			//合并单元格时记录上次结果
			m[k] = m[k] + "、" + comment
		}
	}
	//按字母序对map的key排序
	sorted_keys := make([]string, 0)
	for k, _ := range m {
		sorted_keys = append(sorted_keys, k)
	}
	sort.Strings(sorted_keys)
	for _, s := range sorted_keys {
		//fmt.Println(fmt.Sprintf("o.put(\"%s\", \"\");//%s", s, m[s]))
		fmt.Print(fmt.Sprintf(".fluentPut(\"%s\", \"\")//%s\n", s, m[s]))

		//required := false
		//if strings.Contains(m[s], "[必填]") {
		//	required = true
		//	m[s] = m[s][8:]
		//}
		//fmt.Print(fmt.Sprintf("@ApiModelProperty(value = \"%s\", required = %v)\nprivate String %s;\n", m[s], required, s))
	}
}
```