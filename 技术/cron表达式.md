## cron
- 语法：Seconds Minutes Hours DayofMonth Month DayofWeek [Year]
- 语法口诀：秒分时月月周年

### 域配置规则
- ALL：, - * /
- DayofMonth: ? L W
- DayofWeek: ? L #

详见：
```
5,10 = 5分、10分各一次
5-10 = 5-10分内每分钟一次
* = 每单位一次
5/10 = 5分时触发，每10分触发

? = 每单位一次
5L = 最后一个星期四

1#3 = 第三个星期天
5W （in DayofMonth） = 有效工作日：如果5日是星期六，则将在最近的工作日4日触发一次
```