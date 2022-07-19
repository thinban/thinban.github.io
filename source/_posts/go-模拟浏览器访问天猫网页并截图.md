---
title: go:模拟浏览器访问天猫网页并截图
date: 2022-07-13 16:28:52
tags:
- go
- 代码段
---

## 源代码

```go
package main

import (
	"context"
	"fmt"
	"github.com/chromedp/cdproto/page"
	"github.com/chromedp/chromedp"
	"github.com/chromedp/chromedp/device"
	"github.com/chromedp/chromedp/kb"
	"io/ioutil"
	"os"
	"strings"
	"sync"
	"time"
)

var sw = sync.WaitGroup{}

const tmallDir = "天猫截图"

func main() {
	_, err := os.Stat(tmallDir)
	if err != nil {
		os.Mkdir(tmallDir, 0666)
	}
	opts := append(chromedp.DefaultExecAllocatorOptions[:],
		chromedp.Flag("headless", true),
		chromedp.Flag("start-maximized", true),
		chromedp.WindowSize(1980, 1080),
	)
	ctx, cancel := chromedp.NewExecAllocator(context.Background(), opts...)
	defer cancel()

	urls := loadConfig()
	//urls := []string{"https://conba.tmall.com", "https://cloudmusic.tmall.com"}
	for _, url := range urls {
		sw.Add(1)
		go handle(ctx, url)
	}
	sw.Wait()
	fmt.Println("收工!")
}

func loadConfig() []string {
	fmt.Println("加载配置文件:天猫网址填这里.txt")
	cfg, err := os.Open("天猫网址填这里.txt")
	defer cfg.Close()
	if err != nil {
		panic("请填写天猫网址")
	}
	body, err := ioutil.ReadAll(cfg)
	if err != nil {
		panic("请填写天猫网址")
	}
	urls := string(body)
	us := strings.Split(urls, "\r\n")
	return us
}

func handle(ctx context.Context, url string) {
	fmt.Println("访问:", url)
	ctx, cancel := chromedp.NewContext(ctx)
	defer cancel()
	var imageBuf []byte
	var headToCut, footToCut float64
	var title string
	chromedp.Run(ctx, chromedp.Navigate(url),
		chromedp.WaitVisible("#LineZing"),
		chromedp.Title(&title),
		chromedp.Evaluate("document.querySelector('#header').offsetHeight;", &headToCut),
		chromedp.Evaluate("document.querySelector('#footer').offsetHeight;", &footToCut))
	for i := 0; i < 20; i++ {
		chromedp.Run(ctx, chromedp.KeyEvent(kb.PageDown), chromedp.Sleep(100*time.Millisecond))
	}
	now := time.Now().Format("20060102-150405")
	chromedp.Run(ctx, shot(&imageBuf, 10, headToCut, footToCut), chromedp.ActionFunc(func(ctx context.Context) error {
		filename := fmt.Sprintf("./%s/%s-%s.jpg", tmallDir, now, title)
		fmt.Println("保存截图:", filename)
		return ioutil.WriteFile(filename, imageBuf, 0666)
	}))
	chromedp.Run(ctx, chromedp.Emulate(device.IPhone7landscape), shot(&imageBuf, 10, headToCut, footToCut), chromedp.ActionFunc(func(ctx context.Context) error {
		filename := fmt.Sprintf("./%s/%s-%s-移动版.jpg", tmallDir, now, title)
		fmt.Println("保存移动版截图:", filename)
		return ioutil.WriteFile(filename, imageBuf, 0666)
	}))
	sw.Done()
}

func shot(res *[]byte, quality int, headToCut, footToCut float64) chromedp.EmulateAction {
	if res == nil {
		panic("res cannot be nil")
	}
	return chromedp.ActionFunc(func(ctx context.Context) error {
		// get layout metrics
		_, _, contentSize, _, _, cssContentSize, err := page.GetLayoutMetrics().Do(ctx)
		if err != nil {
			return err
		}
		// protocol v90 changed the return parameter name (contentSize -> cssContentSize)
		if cssContentSize != nil {
			contentSize = cssContentSize
		}

		format := page.CaptureScreenshotFormatPng
		if quality != 100 {
			format = page.CaptureScreenshotFormatJpeg
		}

		// capture screenshot
		*res, err = page.CaptureScreenshot().
			WithCaptureBeyondViewport(true).
			WithFormat(format).
			WithQuality(int64(quality)).
			WithClip(&page.Viewport{
				X:      0,
				Y:      headToCut,
				Width:  contentSize.Width,
				Height: contentSize.Height - footToCut,
				Scale:  1,
			}).Do(ctx)
		if err != nil {
			return err
		}
		return nil
	})
}

```

## 配置文件

天猫网址填这里.txt

```text
https://conba.tmall.com
https://cloudmusic.tmall.com/
```