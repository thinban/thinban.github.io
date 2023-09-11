
# JMH
## 使用
为什么要用JMH？何时应该用？ - 武培轩的回答 - 知乎
https://www.zhihu.com/question/276455629/answer/1259967560
（包括jar打包，结果可视化等。）
### 依赖
```
<dependency>
    <groupId>org.openjdk.jmh</groupId>
    <artifactId>jmh-core</artifactId>
    <version>1.23</version>
</dependency>
<dependency>
    <groupId>org.openjdk.jmh</groupId>
    <artifactId>jmh-generator-annprocess</artifactId>
    <version>1.23</version>
</dependency>
```
### 测试main
预热：是被测试代码获得充分的JIT编译和优化

```
@BenchmarkMode(Mode.AverageTime)
@Warmup(iterations = 3, time = 1)
@Measurement(iterations = 5, time = 5)
@Threads(4)
@Fork(1)
@State(value = Scope.Benchmark)
@OutputTimeUnit(TimeUnit.NANOSECONDS)
public class StringConnectTest {

    @Param(value = {"10", "50", "100"})
    private int length;

    @Benchmark
    public void testStringAdd(Blackhole blackhole) {
        String a = "";
        for (int i = 0; i < length; i++) {
            a += i;
        }
        blackhole.consume(a);
    }

    @Benchmark
    public void testStringBuilderAdd(Blackhole blackhole) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < length; i++) {
            sb.append(i);
        }
        blackhole.consume(sb.toString());
    }

    public static void main(String[] args) throws RunnerException {
        Options opt = new OptionsBuilder()
                .include(StringConnectTest.class.getSimpleName())
                .result("result.json")
                .resultFormat(ResultFormatType.JSON).build();
        new Runner(opt).run();
    }
}

```
### 响应结果
```
# JMH version: 1.23
# VM version: JDK 1.8.0_201, Java HotSpot(TM) 64-Bit Server VM, 25.201-b09
# VM invoker: D:\Software\Java\jdk1.8.0_201\jre\bin\java.exe
# VM options: -javaagent:D:\Software\JetBrains\IntelliJ IDEA 2019.1.3\lib\idea_rt.jar=61018:D:\Software\JetBrains\IntelliJ IDEA 2019.1.3\bin -Dfile.encoding=UTF-8
# Warmup: 3 iterations, 1 s each
# Measurement: 5 iterations, 5 s each
# Timeout: 10 min per iteration
# Threads: 4 threads, will synchronize iterations
# Benchmark mode: Average time, time/op
# Benchmark: com.wupx.jmh.StringConnectTest.testStringBuilderAdd
# Parameters: (length = 100)

# Warmup Iteration   1: 1083.569 ±(99.9%) 393.884 ns/op
# Warmup Iteration   2: 864.685 ±(99.9%) 174.120 ns/op
# Warmup Iteration   3: 798.310 ±(99.9%) 121.161 ns/op

Iteration   1: 810.667 ±(99.9%) 51.505 ns/op
Iteration   2: 807.861 ±(99.9%) 13.163 ns/op
Iteration   3: 851.421 ±(99.9%) 33.564 ns/op
Iteration   4: 805.675 ±(99.9%) 33.038 ns/op
Iteration   5: 821.020 ±(99.9%) 66.943 ns/op

Result "com.wupx.jmh.StringConnectTest.testStringBuilderAdd":
  819.329 ±(99.9%) 72.698 ns/op [Average]
  (min, avg, max) = (805.675, 819.329, 851.421), stdev = 18.879
  CI (99.9%): [746.631, 892.027] (assumes normal distribution)

Benchmark                               (length)  Mode  Cnt     Score     Error  Units
StringConnectTest.testStringAdd               10  avgt    5   161.496 ±  17.097  ns/op
StringConnectTest.testStringAdd               50  avgt    5  1854.657 ± 227.902  ns/op
StringConnectTest.testStringAdd              100  avgt    5  6490.062 ± 327.626  ns/op
StringConnectTest.testStringBuilderAdd        10  avgt    5    68.769 ±   4.460  ns/op
StringConnectTest.testStringBuilderAdd        50  avgt    5   413.021 ±  30.950  ns/op
StringConnectTest.testStringBuilderAdd       100  avgt    5   819.329 ±  72.698  ns/op
```