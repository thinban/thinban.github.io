package main

import (
	"fmt"
	"io/ioutil"
	"strings"
)

var tpl = "[%s](%s)"
var s = "<!-- _sidebar.md-->\n"
var ignore = "image,.git,.idea"

func main() {
	//遍历目录，递归获取文件名
	//写入_sidebar.md
	recur("./", 0)
	println(s)
	ioutil.WriteFile("./_sidebar.md", []byte(s), 666)
}

func recur(dir string, num int) {
	files, err := ioutil.ReadDir(dir)
	if err != nil {
		panic(err)
	}
	for _, fi := range files {
		name := fi.Name()
		d := dir + `/` + name
		if fi.IsDir() && !strings.Contains(ignore, name) {
			s = s + strings.Repeat("*", num+1) + " " + fmt.Sprintf(tpl, name, "") + "\n"
			recur(d+`/`, num+1)
		} else {
			if num > 0 {
				d = strings.ReplaceAll(d, "//", "/")
				s = s + strings.Repeat("*", num+1) + " " + fmt.Sprintf(tpl, name, d[1:]) + "\n"
				//println(name)
			}
		}
	}
}
