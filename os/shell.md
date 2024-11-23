# 常用代码
## 后台执行
```
nohup xxx >> output.log 2>&1 &
```

## curl命令
```
curl -O https://github.com/apolloconfig/apollo-quick-start/blob/master/sql/apolloportaldb.sql
```

## nginx日志按指定时间统计url访问次数
```shell
sed -n '/2024:11:01:00:00:00/,/2024:11:03:23:59:59/p' access.log > temp.log

awk '{print $7}' temp.log | sort | uniq -c | sort -nr
```

# 常用命令
sed -n 抑制标准输出,直到命令p,例如
`sed -n '/2024:11:01:00:00:00/,/2024:11:03:23:59:59/p' access.log > temp.log`

## sed 批量替换文件内容
sed -i "s/localhost/lab.io/g" `grep lab.io -rl .`

## find
find . -name "*.txt"
find . -type f
find . -size +10M
find . -mtime -1  *过去一天

## du
du -ah . | sort -rh | head -n 10

# 语法
## 参数
    $1 $2
    $#	传递到脚本的参数个数
    $*	以一个单字符串显示所有向脚本传递的参数。如"$*"用「"」括起来的情况、以"$1 $2 … $n"的形式输出所有参数。
    $$	脚本运行的当前进程ID号
    $!	后台运行的最后一个进程的ID号
    $@	与$*相同，但是使用时加引号，并在引号中返回每个参数。如"$@"用「"」括起来的情况、以"$1" "$2" … "$n" 的形式输出所有参数。
    $-	显示Shell使用的当前选项，与set命令功能相同。
    $?	显示最后命令的退出状态。0表示没有错误，其他任何值表明有错误。

## 数组
    declare -A site
    site["google"]="www.google.com"
    site["runoob"]="www.runoob.com"
    site["taobao"]="www.taobao.com"

    echo ${site["runoob"]}
    echo "数组的元素为: ${site[*]}"
    echo "数组的键为: ${!site[*]}"
    echo "数组元素个数为: ${#site[*]}"


## 运算符
    val=`expr 2 + 2`

    关系运算符只支持数字，不支持字符串，除非字符串的值是数字。
        -eq/ne/gt/lt/ge/le
    
    布尔运算符
        !/-o/-a
    
    逻辑运算符
        &&/||
    
    字符串运算符
        =/!= 相等/不相等
        [ -z $str ] 长度为0
        [ -n $str ] 长度不为0
        [ $str ] 是否不为空

    文件运算符
        -r/-w/-x    是否可读写执行
        -f/-d/-b/-c 普通文件/目录/块设备/字符设备
        -s  文件不为空
        -e  文件存在

    自增自减
        let num++
        ((num--))
## 流程控制
### if
```shell
if-then-elif-then-else-fi

if [ $(ps -ef | grep -c "ssh") -gt 1 ]; then echo "true"; fi

```

### loop
```shell
for loop in 1 2 3 4 5
do
    echo "The value is: $loop"
done
 ```

```shell
while read FILM
do
    echo "是的！$FILM 是一个好网站"
done
```

```shell
echo '输入 1 到 4 之间的数字:'
echo '你输入的数字为:'
read aNum
case $aNum in
    1|2)  echo '你选择了 1或者2'
    ;;
    3)  echo '你选择了 3'
    ;;
    4)  echo '你选择了 4'
    ;;
    *)  echo '你没有输入 1 到 4 之间的数字'
    ;;
esac
```

```shell
#!/bin/bash
while :
do
    echo -n "输入 1 到 5 之间的数字:"
    read aNum
    case $aNum in
        1|2|3|4|5) echo "你输入的数字为 $aNum!"
        ;;
        *) echo "你输入的数字不是 1 到 5 之间的! 游戏结束"
            break
            <!-- continue -->
        ;;
    esac
done
```

## 函数
```
[ function ] funname [()]

{

    action;

    [return int;]

}
```

## 文件包含
. filename

source filename
