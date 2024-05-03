import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.1eb6b028.js";const g=JSON.parse('{"title":"20240426_设计模式","description":"20240426_设计模式","frontmatter":{"title":"20240426_设计模式","description":"20240426_设计模式","date":"2024-04-26T00:00:00.000Z","tags":["技术"]},"headers":[],"relativePath":"posts/知识整理/20240426_设计模式.md","filePath":"posts/知识整理/20240426_设计模式.md"}'),l={name:"posts/知识整理/20240426_设计模式.md"},p=e(`<p>[TOC]</p><h1 id="创建型模式" tabindex="-1">创建型模式 <a class="header-anchor" href="#创建型模式" aria-label="Permalink to &quot;创建型模式&quot;">​</a></h1><h2 id="工厂模式-factory-pattern" tabindex="-1">工厂模式（Factory Pattern） <a class="header-anchor" href="#工厂模式-factory-pattern" aria-label="Permalink to &quot;工厂模式（Factory Pattern）&quot;">​</a></h2><p>//见抽象工厂模式，已包含其原理</p><h2 id="抽象工厂模式-abstract-factory-pattern" tabindex="-1">抽象工厂模式（Abstract Factory Pattern） <a class="header-anchor" href="#抽象工厂模式-abstract-factory-pattern" aria-label="Permalink to &quot;抽象工厂模式（Abstract Factory Pattern）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public interface Shape {</span></span>
<span class="line"><span style="color:#e1e4e8;">   void draw();</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">public abstract class AbstractFactory {</span></span>
<span class="line"><span style="color:#e1e4e8;">   public abstract Color getColor(String color);</span></span>
<span class="line"><span style="color:#e1e4e8;">   public abstract Shape getShape(String shape);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">public class ShapeFactory extends AbstractFactory {</span></span>
<span class="line"><span style="color:#e1e4e8;">   @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">   public Shape getShape(String shapeType){</span></span>
<span class="line"><span style="color:#e1e4e8;">      if(shapeType == null){</span></span>
<span class="line"><span style="color:#e1e4e8;">         return null;</span></span>
<span class="line"><span style="color:#e1e4e8;">      }        </span></span>
<span class="line"><span style="color:#e1e4e8;">      if(shapeType.equalsIgnoreCase(&quot;CIRCLE&quot;)){</span></span>
<span class="line"><span style="color:#e1e4e8;">         return new Circle();</span></span>
<span class="line"><span style="color:#e1e4e8;">      } else if(shapeType.equalsIgnoreCase(&quot;RECTANGLE&quot;)){</span></span>
<span class="line"><span style="color:#e1e4e8;">         return new Rectangle();</span></span>
<span class="line"><span style="color:#e1e4e8;">      } else if(shapeType.equalsIgnoreCase(&quot;SQUARE&quot;)){</span></span>
<span class="line"><span style="color:#e1e4e8;">         return new Square();</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">      return null;</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;">   </span></span>
<span class="line"><span style="color:#e1e4e8;">   @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">   public Color getColor(String color) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      return null;</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//获取工厂类的工厂。</span></span>
<span class="line"><span style="color:#e1e4e8;">public class FactoryProducer {</span></span>
<span class="line"><span style="color:#e1e4e8;">   public static AbstractFactory getFactory(String choice){</span></span>
<span class="line"><span style="color:#e1e4e8;">      if(choice.equalsIgnoreCase(&quot;SHAPE&quot;)){</span></span>
<span class="line"><span style="color:#e1e4e8;">         return new ShapeFactory();</span></span>
<span class="line"><span style="color:#e1e4e8;">      } else if(choice.equalsIgnoreCase(&quot;COLOR&quot;)){</span></span>
<span class="line"><span style="color:#e1e4e8;">         return new ColorFactory();</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">      return null;</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public interface Shape {</span></span>
<span class="line"><span style="color:#24292e;">   void draw();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">public abstract class AbstractFactory {</span></span>
<span class="line"><span style="color:#24292e;">   public abstract Color getColor(String color);</span></span>
<span class="line"><span style="color:#24292e;">   public abstract Shape getShape(String shape);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">public class ShapeFactory extends AbstractFactory {</span></span>
<span class="line"><span style="color:#24292e;">   @Override</span></span>
<span class="line"><span style="color:#24292e;">   public Shape getShape(String shapeType){</span></span>
<span class="line"><span style="color:#24292e;">      if(shapeType == null){</span></span>
<span class="line"><span style="color:#24292e;">         return null;</span></span>
<span class="line"><span style="color:#24292e;">      }        </span></span>
<span class="line"><span style="color:#24292e;">      if(shapeType.equalsIgnoreCase(&quot;CIRCLE&quot;)){</span></span>
<span class="line"><span style="color:#24292e;">         return new Circle();</span></span>
<span class="line"><span style="color:#24292e;">      } else if(shapeType.equalsIgnoreCase(&quot;RECTANGLE&quot;)){</span></span>
<span class="line"><span style="color:#24292e;">         return new Rectangle();</span></span>
<span class="line"><span style="color:#24292e;">      } else if(shapeType.equalsIgnoreCase(&quot;SQUARE&quot;)){</span></span>
<span class="line"><span style="color:#24292e;">         return new Square();</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">      return null;</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;">   </span></span>
<span class="line"><span style="color:#24292e;">   @Override</span></span>
<span class="line"><span style="color:#24292e;">   public Color getColor(String color) {</span></span>
<span class="line"><span style="color:#24292e;">      return null;</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//获取工厂类的工厂。</span></span>
<span class="line"><span style="color:#24292e;">public class FactoryProducer {</span></span>
<span class="line"><span style="color:#24292e;">   public static AbstractFactory getFactory(String choice){</span></span>
<span class="line"><span style="color:#24292e;">      if(choice.equalsIgnoreCase(&quot;SHAPE&quot;)){</span></span>
<span class="line"><span style="color:#24292e;">         return new ShapeFactory();</span></span>
<span class="line"><span style="color:#24292e;">      } else if(choice.equalsIgnoreCase(&quot;COLOR&quot;)){</span></span>
<span class="line"><span style="color:#24292e;">         return new ColorFactory();</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">      return null;</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="单例模式-singleton-pattern" tabindex="-1">单例模式（Singleton Pattern） <a class="header-anchor" href="#单例模式-singleton-pattern" aria-label="Permalink to &quot;单例模式（Singleton Pattern）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">//DLC double-check线程安全延迟加载</span></span>
<span class="line"><span style="color:#e1e4e8;">public class Singleton {  </span></span>
<span class="line"><span style="color:#e1e4e8;">    private volatile static Singleton singleton;  </span></span>
<span class="line"><span style="color:#e1e4e8;">    private Singleton (){}  </span></span>
<span class="line"><span style="color:#e1e4e8;">    public static Singleton getSingleton() {  </span></span>
<span class="line"><span style="color:#e1e4e8;">    if (singleton == null) {  </span></span>
<span class="line"><span style="color:#e1e4e8;">        synchronized (Singleton.class) {  </span></span>
<span class="line"><span style="color:#e1e4e8;">            if (singleton == null) {  </span></span>
<span class="line"><span style="color:#e1e4e8;">                singleton = new Singleton();  </span></span>
<span class="line"><span style="color:#e1e4e8;">            }  </span></span>
<span class="line"><span style="color:#e1e4e8;">        }  </span></span>
<span class="line"><span style="color:#e1e4e8;">    }  </span></span>
<span class="line"><span style="color:#e1e4e8;">    return singleton;  </span></span>
<span class="line"><span style="color:#e1e4e8;">    }  </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//静态内部类：延迟加载</span></span>
<span class="line"><span style="color:#e1e4e8;">public class Singleton {  </span></span>
<span class="line"><span style="color:#e1e4e8;">    private static class SingletonHolder {  </span></span>
<span class="line"><span style="color:#e1e4e8;">    private static final Singleton INSTANCE = new Singleton();  </span></span>
<span class="line"><span style="color:#e1e4e8;">    }  </span></span>
<span class="line"><span style="color:#e1e4e8;">    private Singleton (){}  </span></span>
<span class="line"><span style="color:#e1e4e8;">    public static final Singleton getInstance() {  </span></span>
<span class="line"><span style="color:#e1e4e8;">        return SingletonHolder.INSTANCE;  </span></span>
<span class="line"><span style="color:#e1e4e8;">    }  </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//枚举：非延迟加载</span></span>
<span class="line"><span style="color:#e1e4e8;">public enum Singleton {  </span></span>
<span class="line"><span style="color:#e1e4e8;">    INSTANCE;  </span></span>
<span class="line"><span style="color:#e1e4e8;">    public void whateverMethod() {  </span></span>
<span class="line"><span style="color:#e1e4e8;">    }  </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//DLC double-check线程安全延迟加载</span></span>
<span class="line"><span style="color:#24292e;">public class Singleton {  </span></span>
<span class="line"><span style="color:#24292e;">    private volatile static Singleton singleton;  </span></span>
<span class="line"><span style="color:#24292e;">    private Singleton (){}  </span></span>
<span class="line"><span style="color:#24292e;">    public static Singleton getSingleton() {  </span></span>
<span class="line"><span style="color:#24292e;">    if (singleton == null) {  </span></span>
<span class="line"><span style="color:#24292e;">        synchronized (Singleton.class) {  </span></span>
<span class="line"><span style="color:#24292e;">            if (singleton == null) {  </span></span>
<span class="line"><span style="color:#24292e;">                singleton = new Singleton();  </span></span>
<span class="line"><span style="color:#24292e;">            }  </span></span>
<span class="line"><span style="color:#24292e;">        }  </span></span>
<span class="line"><span style="color:#24292e;">    }  </span></span>
<span class="line"><span style="color:#24292e;">    return singleton;  </span></span>
<span class="line"><span style="color:#24292e;">    }  </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//静态内部类：延迟加载</span></span>
<span class="line"><span style="color:#24292e;">public class Singleton {  </span></span>
<span class="line"><span style="color:#24292e;">    private static class SingletonHolder {  </span></span>
<span class="line"><span style="color:#24292e;">    private static final Singleton INSTANCE = new Singleton();  </span></span>
<span class="line"><span style="color:#24292e;">    }  </span></span>
<span class="line"><span style="color:#24292e;">    private Singleton (){}  </span></span>
<span class="line"><span style="color:#24292e;">    public static final Singleton getInstance() {  </span></span>
<span class="line"><span style="color:#24292e;">        return SingletonHolder.INSTANCE;  </span></span>
<span class="line"><span style="color:#24292e;">    }  </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//枚举：非延迟加载</span></span>
<span class="line"><span style="color:#24292e;">public enum Singleton {  </span></span>
<span class="line"><span style="color:#24292e;">    INSTANCE;  </span></span>
<span class="line"><span style="color:#24292e;">    public void whateverMethod() {  </span></span>
<span class="line"><span style="color:#24292e;">    }  </span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="建造者模式-builder-pattern" tabindex="-1">建造者模式（Builder Pattern） <a class="header-anchor" href="#建造者模式-builder-pattern" aria-label="Permalink to &quot;建造者模式（Builder Pattern）&quot;">​</a></h2><h2 id="原型模式-prototype-pattern" tabindex="-1">原型模式（Prototype Pattern） <a class="header-anchor" href="#原型模式-prototype-pattern" aria-label="Permalink to &quot;原型模式（Prototype Pattern）&quot;">​</a></h2><p>比起对一个类进行实例化来构造新对象，性能更高，并且可以忽略构造函数。*此为浅拷贝</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public abstract class Shape implements Cloneable {</span></span>
<span class="line"><span style="color:#e1e4e8;">   </span></span>
<span class="line"><span style="color:#e1e4e8;">   private String id;</span></span>
<span class="line"><span style="color:#e1e4e8;">   protected String type;</span></span>
<span class="line"><span style="color:#e1e4e8;">   </span></span>
<span class="line"><span style="color:#e1e4e8;">   abstract void draw();</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   public Object clone() {</span></span>
<span class="line"><span style="color:#e1e4e8;">      Object clone = null;</span></span>
<span class="line"><span style="color:#e1e4e8;">      try {</span></span>
<span class="line"><span style="color:#e1e4e8;">         clone = super.clone();</span></span>
<span class="line"><span style="color:#e1e4e8;">      } catch (CloneNotSupportedException e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">         e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">      return clone;</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">public class Rectangle extends Shape {</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   public Rectangle(){</span></span>
<span class="line"><span style="color:#e1e4e8;">     type = &quot;Rectangle&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">   public void draw() {</span></span>
<span class="line"><span style="color:#e1e4e8;">      System.out.println(&quot;Inside Rectangle::draw() method.&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">//比起对一个类进行实例化来构造新对象，性能更高，并且可以忽略构造函数。*此为浅拷贝</span></span>
<span class="line"><span style="color:#e1e4e8;">new Rectangle().clone()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public abstract class Shape implements Cloneable {</span></span>
<span class="line"><span style="color:#24292e;">   </span></span>
<span class="line"><span style="color:#24292e;">   private String id;</span></span>
<span class="line"><span style="color:#24292e;">   protected String type;</span></span>
<span class="line"><span style="color:#24292e;">   </span></span>
<span class="line"><span style="color:#24292e;">   abstract void draw();</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   public Object clone() {</span></span>
<span class="line"><span style="color:#24292e;">      Object clone = null;</span></span>
<span class="line"><span style="color:#24292e;">      try {</span></span>
<span class="line"><span style="color:#24292e;">         clone = super.clone();</span></span>
<span class="line"><span style="color:#24292e;">      } catch (CloneNotSupportedException e) {</span></span>
<span class="line"><span style="color:#24292e;">         e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">      return clone;</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">public class Rectangle extends Shape {</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   public Rectangle(){</span></span>
<span class="line"><span style="color:#24292e;">     type = &quot;Rectangle&quot;;</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   @Override</span></span>
<span class="line"><span style="color:#24292e;">   public void draw() {</span></span>
<span class="line"><span style="color:#24292e;">      System.out.println(&quot;Inside Rectangle::draw() method.&quot;);</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">//比起对一个类进行实例化来构造新对象，性能更高，并且可以忽略构造函数。*此为浅拷贝</span></span>
<span class="line"><span style="color:#24292e;">new Rectangle().clone()</span></span></code></pre></div><h1 id="结构型模式" tabindex="-1">结构型模式 <a class="header-anchor" href="#结构型模式" aria-label="Permalink to &quot;结构型模式&quot;">​</a></h1><h2 id="适配器模式-adapter-pattern" tabindex="-1">适配器模式（Adapter Pattern） <a class="header-anchor" href="#适配器模式-adapter-pattern" aria-label="Permalink to &quot;适配器模式（Adapter Pattern）&quot;">​</a></h2><p>关键代码：旧接口实现类里，持有具有新能力的适配器，并改造部分函数方法。如本例子中AudioPlayer</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">//旧接口</span></span>
<span class="line"><span style="color:#e1e4e8;">public interface MediaPlayer {</span></span>
<span class="line"><span style="color:#e1e4e8;">   public void play(String audioType, String fileName);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//新接口</span></span>
<span class="line"><span style="color:#e1e4e8;">public interface AdvancedMediaPlayer { </span></span>
<span class="line"><span style="color:#e1e4e8;">   public void playVlc(String fileName);</span></span>
<span class="line"><span style="color:#e1e4e8;">   public void playMp4(String fileName);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//定义适配器</span></span>
<span class="line"><span style="color:#e1e4e8;">public class MediaAdapter implements MediaPlayer {</span></span>
<span class="line"><span style="color:#e1e4e8;">    </span></span>
<span class="line"><span style="color:#e1e4e8;">    //新接口</span></span>
<span class="line"><span style="color:#e1e4e8;">   AdvancedMediaPlayer advancedMusicPlayer;</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   public MediaAdapter(String audioType){</span></span>
<span class="line"><span style="color:#e1e4e8;">      if(audioType.equalsIgnoreCase(&quot;vlc&quot;) ){</span></span>
<span class="line"><span style="color:#e1e4e8;">         advancedMusicPlayer = new VlcPlayer();       </span></span>
<span class="line"><span style="color:#e1e4e8;">      } else if (audioType.equalsIgnoreCase(&quot;mp4&quot;)){</span></span>
<span class="line"><span style="color:#e1e4e8;">         advancedMusicPlayer = new Mp4Player();</span></span>
<span class="line"><span style="color:#e1e4e8;">      }  </span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">   public void play(String audioType, String fileName) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      if(audioType.equalsIgnoreCase(&quot;vlc&quot;)){</span></span>
<span class="line"><span style="color:#e1e4e8;">         advancedMusicPlayer.playVlc(fileName);</span></span>
<span class="line"><span style="color:#e1e4e8;">      }else if(audioType.equalsIgnoreCase(&quot;mp4&quot;)){</span></span>
<span class="line"><span style="color:#e1e4e8;">         advancedMusicPlayer.playMp4(fileName);</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//使用适配器</span></span>
<span class="line"><span style="color:#e1e4e8;">public class AudioPlayer implements MediaPlayer {</span></span>
<span class="line"><span style="color:#e1e4e8;">   MediaAdapter mediaAdapter; </span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">   public void play(String audioType, String fileName) {    </span></span>
<span class="line"><span style="color:#e1e4e8;">      //播放 mp3 音乐文件的内置支持</span></span>
<span class="line"><span style="color:#e1e4e8;">      if(audioType.equalsIgnoreCase(&quot;mp3&quot;)){</span></span>
<span class="line"><span style="color:#e1e4e8;">         System.out.println(&quot;Playing mp3 file. Name: &quot;+ fileName);         </span></span>
<span class="line"><span style="color:#e1e4e8;">      } </span></span>
<span class="line"><span style="color:#e1e4e8;">      //mediaAdapter 提供了播放其他文件格式的支持</span></span>
<span class="line"><span style="color:#e1e4e8;">      else if(audioType.equalsIgnoreCase(&quot;vlc&quot;) </span></span>
<span class="line"><span style="color:#e1e4e8;">         || audioType.equalsIgnoreCase(&quot;mp4&quot;)){</span></span>
<span class="line"><span style="color:#e1e4e8;">         mediaAdapter = new MediaAdapter(audioType);</span></span>
<span class="line"><span style="color:#e1e4e8;">         mediaAdapter.play(audioType, fileName);</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">      else{</span></span>
<span class="line"><span style="color:#e1e4e8;">         System.out.println(&quot;Invalid media. &quot;+</span></span>
<span class="line"><span style="color:#e1e4e8;">            audioType + &quot; format not supported&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">   }   </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//旧接口</span></span>
<span class="line"><span style="color:#24292e;">public interface MediaPlayer {</span></span>
<span class="line"><span style="color:#24292e;">   public void play(String audioType, String fileName);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//新接口</span></span>
<span class="line"><span style="color:#24292e;">public interface AdvancedMediaPlayer { </span></span>
<span class="line"><span style="color:#24292e;">   public void playVlc(String fileName);</span></span>
<span class="line"><span style="color:#24292e;">   public void playMp4(String fileName);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//定义适配器</span></span>
<span class="line"><span style="color:#24292e;">public class MediaAdapter implements MediaPlayer {</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">    //新接口</span></span>
<span class="line"><span style="color:#24292e;">   AdvancedMediaPlayer advancedMusicPlayer;</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   public MediaAdapter(String audioType){</span></span>
<span class="line"><span style="color:#24292e;">      if(audioType.equalsIgnoreCase(&quot;vlc&quot;) ){</span></span>
<span class="line"><span style="color:#24292e;">         advancedMusicPlayer = new VlcPlayer();       </span></span>
<span class="line"><span style="color:#24292e;">      } else if (audioType.equalsIgnoreCase(&quot;mp4&quot;)){</span></span>
<span class="line"><span style="color:#24292e;">         advancedMusicPlayer = new Mp4Player();</span></span>
<span class="line"><span style="color:#24292e;">      }  </span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   @Override</span></span>
<span class="line"><span style="color:#24292e;">   public void play(String audioType, String fileName) {</span></span>
<span class="line"><span style="color:#24292e;">      if(audioType.equalsIgnoreCase(&quot;vlc&quot;)){</span></span>
<span class="line"><span style="color:#24292e;">         advancedMusicPlayer.playVlc(fileName);</span></span>
<span class="line"><span style="color:#24292e;">      }else if(audioType.equalsIgnoreCase(&quot;mp4&quot;)){</span></span>
<span class="line"><span style="color:#24292e;">         advancedMusicPlayer.playMp4(fileName);</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//使用适配器</span></span>
<span class="line"><span style="color:#24292e;">public class AudioPlayer implements MediaPlayer {</span></span>
<span class="line"><span style="color:#24292e;">   MediaAdapter mediaAdapter; </span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   @Override</span></span>
<span class="line"><span style="color:#24292e;">   public void play(String audioType, String fileName) {    </span></span>
<span class="line"><span style="color:#24292e;">      //播放 mp3 音乐文件的内置支持</span></span>
<span class="line"><span style="color:#24292e;">      if(audioType.equalsIgnoreCase(&quot;mp3&quot;)){</span></span>
<span class="line"><span style="color:#24292e;">         System.out.println(&quot;Playing mp3 file. Name: &quot;+ fileName);         </span></span>
<span class="line"><span style="color:#24292e;">      } </span></span>
<span class="line"><span style="color:#24292e;">      //mediaAdapter 提供了播放其他文件格式的支持</span></span>
<span class="line"><span style="color:#24292e;">      else if(audioType.equalsIgnoreCase(&quot;vlc&quot;) </span></span>
<span class="line"><span style="color:#24292e;">         || audioType.equalsIgnoreCase(&quot;mp4&quot;)){</span></span>
<span class="line"><span style="color:#24292e;">         mediaAdapter = new MediaAdapter(audioType);</span></span>
<span class="line"><span style="color:#24292e;">         mediaAdapter.play(audioType, fileName);</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">      else{</span></span>
<span class="line"><span style="color:#24292e;">         System.out.println(&quot;Invalid media. &quot;+</span></span>
<span class="line"><span style="color:#24292e;">            audioType + &quot; format not supported&quot;);</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">   }   </span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="桥接模式-bridge-pattern" tabindex="-1">桥接模式（Bridge Pattern） <a class="header-anchor" href="#桥接模式-bridge-pattern" aria-label="Permalink to &quot;桥接模式（Bridge Pattern）&quot;">​</a></h2><p>意图：将抽象部分与实现部分分离，使它们都可以独立的变化。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">//实现类 RedCircle GreenCircle</span></span>
<span class="line"><span style="color:#e1e4e8;">public interface DrawAPI {</span></span>
<span class="line"><span style="color:#e1e4e8;">   public void drawCircle(int radius, int x, int y);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//实现类 Circle</span></span>
<span class="line"><span style="color:#e1e4e8;">public abstract class Shape {</span></span>
<span class="line"><span style="color:#e1e4e8;">   protected DrawAPI drawAPI;</span></span>
<span class="line"><span style="color:#e1e4e8;">   protected Shape(DrawAPI drawAPI){</span></span>
<span class="line"><span style="color:#e1e4e8;">      this.drawAPI = drawAPI;</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;">   public abstract void draw();  </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//使用</span></span>
<span class="line"><span style="color:#e1e4e8;">public class BridgePatternDemo {</span></span>
<span class="line"><span style="color:#e1e4e8;">   public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      Shape redCircle = new Circle(100,100, 10, new RedCircle());</span></span>
<span class="line"><span style="color:#e1e4e8;">      Shape greenCircle = new Circle(100,100, 10, new GreenCircle());</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">      redCircle.draw();</span></span>
<span class="line"><span style="color:#e1e4e8;">      greenCircle.draw();</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//实现类 RedCircle GreenCircle</span></span>
<span class="line"><span style="color:#24292e;">public interface DrawAPI {</span></span>
<span class="line"><span style="color:#24292e;">   public void drawCircle(int radius, int x, int y);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//实现类 Circle</span></span>
<span class="line"><span style="color:#24292e;">public abstract class Shape {</span></span>
<span class="line"><span style="color:#24292e;">   protected DrawAPI drawAPI;</span></span>
<span class="line"><span style="color:#24292e;">   protected Shape(DrawAPI drawAPI){</span></span>
<span class="line"><span style="color:#24292e;">      this.drawAPI = drawAPI;</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;">   public abstract void draw();  </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//使用</span></span>
<span class="line"><span style="color:#24292e;">public class BridgePatternDemo {</span></span>
<span class="line"><span style="color:#24292e;">   public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">      Shape redCircle = new Circle(100,100, 10, new RedCircle());</span></span>
<span class="line"><span style="color:#24292e;">      Shape greenCircle = new Circle(100,100, 10, new GreenCircle());</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">      redCircle.draw();</span></span>
<span class="line"><span style="color:#24292e;">      greenCircle.draw();</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="过滤器模式-filter、criteria-pattern" tabindex="-1">过滤器模式（Filter、Criteria Pattern） <a class="header-anchor" href="#过滤器模式-filter、criteria-pattern" aria-label="Permalink to &quot;过滤器模式（Filter、Criteria Pattern）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">//实现类目的：返回过滤后的集合</span></span>
<span class="line"><span style="color:#e1e4e8;">public interface Criteria {</span></span>
<span class="line"><span style="color:#e1e4e8;">   public List&lt;Person&gt; meetCriteria(List&lt;Person&gt; persons);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//实现类目的：返回过滤后的集合</span></span>
<span class="line"><span style="color:#24292e;">public interface Criteria {</span></span>
<span class="line"><span style="color:#24292e;">   public List&lt;Person&gt; meetCriteria(List&lt;Person&gt; persons);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="组合模式-composite-pattern" tabindex="-1">组合模式（Composite Pattern） <a class="header-anchor" href="#组合模式-composite-pattern" aria-label="Permalink to &quot;组合模式（Composite Pattern）&quot;">​</a></h2><p>树状结构</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class Employee {</span></span>
<span class="line"><span style="color:#e1e4e8;">   private List&lt;Employee&gt; subordinates;</span></span>
<span class="line"><span style="color:#e1e4e8;">   public void add(Employee e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">   public void remove(Employee e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class Employee {</span></span>
<span class="line"><span style="color:#24292e;">   private List&lt;Employee&gt; subordinates;</span></span>
<span class="line"><span style="color:#24292e;">   public void add(Employee e) {</span></span>
<span class="line"><span style="color:#24292e;">   public void remove(Employee e) {</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="装饰器模式-decorator-pattern" tabindex="-1">装饰器模式（Decorator Pattern） <a class="header-anchor" href="#装饰器模式-decorator-pattern" aria-label="Permalink to &quot;装饰器模式（Decorator Pattern）&quot;">​</a></h2><p>意图：动态地给一个对象添加一些额外的职责。就增加功能来说，装饰器模式相比生成子类更为灵活。增强功能.</p><p>关键代码：装饰类与被装饰的类实现同一个接口，增强其功能。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">//实现类： Rectangle，Circle </span></span>
<span class="line"><span style="color:#e1e4e8;">public interface Shape {</span></span>
<span class="line"><span style="color:#e1e4e8;">   void draw();</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//装饰器抽象</span></span>
<span class="line"><span style="color:#e1e4e8;">public abstract class ShapeDecorator implements Shape {</span></span>
<span class="line"><span style="color:#e1e4e8;">   protected Shape decoratedShape;</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   public ShapeDecorator(Shape decoratedShape){</span></span>
<span class="line"><span style="color:#e1e4e8;">      this.decoratedShape = decoratedShape;</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   public void draw(){</span></span>
<span class="line"><span style="color:#e1e4e8;">      decoratedShape.draw();</span></span>
<span class="line"><span style="color:#e1e4e8;">   }  </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">//装饰器</span></span>
<span class="line"><span style="color:#e1e4e8;">public class RedShapeDecorator extends ShapeDecorator {</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   public RedShapeDecorator(Shape decoratedShape) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      super(decoratedShape);     </span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">   public void draw() {</span></span>
<span class="line"><span style="color:#e1e4e8;">      decoratedShape.draw();         </span></span>
<span class="line"><span style="color:#e1e4e8;">      setRedBorder(decoratedShape);</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   private void setRedBorder(Shape decoratedShape){</span></span>
<span class="line"><span style="color:#e1e4e8;">      System.out.println(&quot;Border Color: Red&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">//调用装饰器，触发 setRedBorder 新功能</span></span>
<span class="line"><span style="color:#e1e4e8;">ShapeDecorator redCircle = new RedShapeDecorator(new Circle());</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//实现类： Rectangle，Circle </span></span>
<span class="line"><span style="color:#24292e;">public interface Shape {</span></span>
<span class="line"><span style="color:#24292e;">   void draw();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//装饰器抽象</span></span>
<span class="line"><span style="color:#24292e;">public abstract class ShapeDecorator implements Shape {</span></span>
<span class="line"><span style="color:#24292e;">   protected Shape decoratedShape;</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   public ShapeDecorator(Shape decoratedShape){</span></span>
<span class="line"><span style="color:#24292e;">      this.decoratedShape = decoratedShape;</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   public void draw(){</span></span>
<span class="line"><span style="color:#24292e;">      decoratedShape.draw();</span></span>
<span class="line"><span style="color:#24292e;">   }  </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">//装饰器</span></span>
<span class="line"><span style="color:#24292e;">public class RedShapeDecorator extends ShapeDecorator {</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   public RedShapeDecorator(Shape decoratedShape) {</span></span>
<span class="line"><span style="color:#24292e;">      super(decoratedShape);     </span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   @Override</span></span>
<span class="line"><span style="color:#24292e;">   public void draw() {</span></span>
<span class="line"><span style="color:#24292e;">      decoratedShape.draw();         </span></span>
<span class="line"><span style="color:#24292e;">      setRedBorder(decoratedShape);</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   private void setRedBorder(Shape decoratedShape){</span></span>
<span class="line"><span style="color:#24292e;">      System.out.println(&quot;Border Color: Red&quot;);</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">//调用装饰器，触发 setRedBorder 新功能</span></span>
<span class="line"><span style="color:#24292e;">ShapeDecorator redCircle = new RedShapeDecorator(new Circle());</span></span></code></pre></div><h2 id="外观模式-facade-pattern" tabindex="-1">外观模式（Facade Pattern） <a class="header-anchor" href="#外观模式-facade-pattern" aria-label="Permalink to &quot;外观模式（Facade Pattern）&quot;">​</a></h2><p>意图：为子系统中的一组接口提供一个一致的界面，外观模式定义了一个高层接口，这个接口使得这一子系统更加容易使用。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">//实现类： Circle，Rectangle，Square</span></span>
<span class="line"><span style="color:#e1e4e8;">public interface Shape {</span></span>
<span class="line"><span style="color:#e1e4e8;">   void draw();</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//封装一层,方便使用</span></span>
<span class="line"><span style="color:#e1e4e8;">public class ShapeMaker {</span></span>
<span class="line"><span style="color:#e1e4e8;">   private Shape circle;</span></span>
<span class="line"><span style="color:#e1e4e8;">   private Shape rectangle;</span></span>
<span class="line"><span style="color:#e1e4e8;">   private Shape square;</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   public ShapeMaker() {</span></span>
<span class="line"><span style="color:#e1e4e8;">      circle = new Circle();</span></span>
<span class="line"><span style="color:#e1e4e8;">      rectangle = new Rectangle();</span></span>
<span class="line"><span style="color:#e1e4e8;">      square = new Square();</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   public void drawCircle(){</span></span>
<span class="line"><span style="color:#e1e4e8;">      circle.draw();</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;">   public void drawRectangle(){</span></span>
<span class="line"><span style="color:#e1e4e8;">      rectangle.draw();</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;">   public void drawSquare(){</span></span>
<span class="line"><span style="color:#e1e4e8;">      square.draw();</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//实现类： Circle，Rectangle，Square</span></span>
<span class="line"><span style="color:#24292e;">public interface Shape {</span></span>
<span class="line"><span style="color:#24292e;">   void draw();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//封装一层,方便使用</span></span>
<span class="line"><span style="color:#24292e;">public class ShapeMaker {</span></span>
<span class="line"><span style="color:#24292e;">   private Shape circle;</span></span>
<span class="line"><span style="color:#24292e;">   private Shape rectangle;</span></span>
<span class="line"><span style="color:#24292e;">   private Shape square;</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   public ShapeMaker() {</span></span>
<span class="line"><span style="color:#24292e;">      circle = new Circle();</span></span>
<span class="line"><span style="color:#24292e;">      rectangle = new Rectangle();</span></span>
<span class="line"><span style="color:#24292e;">      square = new Square();</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   public void drawCircle(){</span></span>
<span class="line"><span style="color:#24292e;">      circle.draw();</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;">   public void drawRectangle(){</span></span>
<span class="line"><span style="color:#24292e;">      rectangle.draw();</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;">   public void drawSquare(){</span></span>
<span class="line"><span style="color:#24292e;">      square.draw();</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="享元模式-flyweight-pattern" tabindex="-1">享元模式（Flyweight Pattern） <a class="header-anchor" href="#享元模式-flyweight-pattern" aria-label="Permalink to &quot;享元模式（Flyweight Pattern）&quot;">​</a></h2><p>意图：运用共享技术有效地支持大量细粒度的对象。</p><p>关键代码：用 HashMap 存储这些对象。</p><h2 id="代理模式-proxy-pattern" tabindex="-1">代理模式（Proxy Pattern） <a class="header-anchor" href="#代理模式-proxy-pattern" aria-label="Permalink to &quot;代理模式（Proxy Pattern）&quot;">​</a></h2><p>意图：为其他对象提供一种代理以控制对这个对象的访问。</p><p>关键代码：代理类持有原始类，以加以控制。</p><p>区别</p><ul><li>1、和适配器模式的区别：适配器模式主要改变所考虑对象的接口，而代理模式不能改变所代理类的接口。</li><li>2、和装饰器模式的区别：装饰器模式为了增强功能，而代理模式是为了加以控制。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">//实现类： RealImage ，ProxyImage（持有 RealImage）</span></span>
<span class="line"><span style="color:#e1e4e8;">public interface Image {</span></span>
<span class="line"><span style="color:#e1e4e8;">   void display();</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">//调用</span></span>
<span class="line"><span style="color:#e1e4e8;">Image image = new ProxyImage(&quot;test_10mb.jpg&quot;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//实现类： RealImage ，ProxyImage（持有 RealImage）</span></span>
<span class="line"><span style="color:#24292e;">public interface Image {</span></span>
<span class="line"><span style="color:#24292e;">   void display();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">//调用</span></span>
<span class="line"><span style="color:#24292e;">Image image = new ProxyImage(&quot;test_10mb.jpg&quot;);</span></span></code></pre></div><h1 id="行为型模式" tabindex="-1">行为型模式 <a class="header-anchor" href="#行为型模式" aria-label="Permalink to &quot;行为型模式&quot;">​</a></h1><h2 id="责任链模式-chain-of-responsibility-pattern" tabindex="-1">责任链模式（Chain of Responsibility Pattern） <a class="header-anchor" href="#责任链模式-chain-of-responsibility-pattern" aria-label="Permalink to &quot;责任链模式（Chain of Responsibility Pattern）&quot;">​</a></h2><p>意图: 解耦</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">//实现类: ConsoleLogger ,ErrorLogger,FileLogger </span></span>
<span class="line"><span style="color:#e1e4e8;">public abstract class AbstractLogger {</span></span>
<span class="line"><span style="color:#e1e4e8;">   public static int INFO = 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">   public static int DEBUG = 2;</span></span>
<span class="line"><span style="color:#e1e4e8;">   public static int ERROR = 3;</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   protected int level;</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   //责任链中的下一个元素</span></span>
<span class="line"><span style="color:#e1e4e8;">   protected AbstractLogger nextLogger;</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   public void setNextLogger(AbstractLogger nextLogger){</span></span>
<span class="line"><span style="color:#e1e4e8;">      this.nextLogger = nextLogger;</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   public void logMessage(int level, String message){</span></span>
<span class="line"><span style="color:#e1e4e8;">      if(this.level &lt;= level){</span></span>
<span class="line"><span style="color:#e1e4e8;">         write(message);</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">      if(nextLogger !=null){</span></span>
<span class="line"><span style="color:#e1e4e8;">         nextLogger.logMessage(level, message);</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;">   abstract protected void write(String message);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//实现类: ConsoleLogger ,ErrorLogger,FileLogger </span></span>
<span class="line"><span style="color:#24292e;">public abstract class AbstractLogger {</span></span>
<span class="line"><span style="color:#24292e;">   public static int INFO = 1;</span></span>
<span class="line"><span style="color:#24292e;">   public static int DEBUG = 2;</span></span>
<span class="line"><span style="color:#24292e;">   public static int ERROR = 3;</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   protected int level;</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   //责任链中的下一个元素</span></span>
<span class="line"><span style="color:#24292e;">   protected AbstractLogger nextLogger;</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   public void setNextLogger(AbstractLogger nextLogger){</span></span>
<span class="line"><span style="color:#24292e;">      this.nextLogger = nextLogger;</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   public void logMessage(int level, String message){</span></span>
<span class="line"><span style="color:#24292e;">      if(this.level &lt;= level){</span></span>
<span class="line"><span style="color:#24292e;">         write(message);</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">      if(nextLogger !=null){</span></span>
<span class="line"><span style="color:#24292e;">         nextLogger.logMessage(level, message);</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;">   abstract protected void write(String message);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="命令模式-command-pattern" tabindex="-1">命令模式（Command Pattern） <a class="header-anchor" href="#命令模式-command-pattern" aria-label="Permalink to &quot;命令模式（Command Pattern）&quot;">​</a></h2><p>意图：行为请求者和行为实现者解耦。</p><p>何时使用：在某些场合，比如要对行为进行&quot;记录、撤销/重做、事务&quot;等处理，这种无法抵御变化的紧耦合是不合适的。在这种情况下，如何将&quot;行为请求者&quot;与&quot;行为实现者&quot;解耦？将一组行为抽象为对象，可以实现二者之间的松耦合。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">//实现类: BuyStock ,SellStock </span></span>
<span class="line"><span style="color:#e1e4e8;">public interface Order {</span></span>
<span class="line"><span style="color:#e1e4e8;">   void execute();</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//接收命令和执行命令</span></span>
<span class="line"><span style="color:#e1e4e8;">public class Broker {</span></span>
<span class="line"><span style="color:#e1e4e8;">   private List&lt;Order&gt; orderList = new ArrayList&lt;Order&gt;(); </span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   public void takeOrder(Order order){</span></span>
<span class="line"><span style="color:#e1e4e8;">      orderList.add(order);      </span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   public void placeOrders(){</span></span>
<span class="line"><span style="color:#e1e4e8;">      for (Order order : orderList) {</span></span>
<span class="line"><span style="color:#e1e4e8;">         order.execute();</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">      orderList.clear();</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//调用</span></span>
<span class="line"><span style="color:#e1e4e8;">Broker broker = new Broker();</span></span>
<span class="line"><span style="color:#e1e4e8;">broker.takeOrder(new BuyStock(abcStock));</span></span>
<span class="line"><span style="color:#e1e4e8;">broker.takeOrder(new SellStock(abcStock));</span></span>
<span class="line"><span style="color:#e1e4e8;">broker.placeOrders();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//实现类: BuyStock ,SellStock </span></span>
<span class="line"><span style="color:#24292e;">public interface Order {</span></span>
<span class="line"><span style="color:#24292e;">   void execute();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//接收命令和执行命令</span></span>
<span class="line"><span style="color:#24292e;">public class Broker {</span></span>
<span class="line"><span style="color:#24292e;">   private List&lt;Order&gt; orderList = new ArrayList&lt;Order&gt;(); </span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   public void takeOrder(Order order){</span></span>
<span class="line"><span style="color:#24292e;">      orderList.add(order);      </span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   public void placeOrders(){</span></span>
<span class="line"><span style="color:#24292e;">      for (Order order : orderList) {</span></span>
<span class="line"><span style="color:#24292e;">         order.execute();</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">      orderList.clear();</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//调用</span></span>
<span class="line"><span style="color:#24292e;">Broker broker = new Broker();</span></span>
<span class="line"><span style="color:#24292e;">broker.takeOrder(new BuyStock(abcStock));</span></span>
<span class="line"><span style="color:#24292e;">broker.takeOrder(new SellStock(abcStock));</span></span>
<span class="line"><span style="color:#24292e;">broker.placeOrders();</span></span></code></pre></div><h2 id="解释器模式-interpreter-pattern" tabindex="-1">解释器模式（Interpreter Pattern） <a class="header-anchor" href="#解释器模式-interpreter-pattern" aria-label="Permalink to &quot;解释器模式（Interpreter Pattern）&quot;">​</a></h2><p>意图：给定一个语言，定义它的文法表示，并定义一个解释器，这个解释器使用该标识来解释语言中的句子。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">//实现: TerminalExpression ,OrExpression,AndExpression </span></span>
<span class="line"><span style="color:#e1e4e8;">public interface Expression {</span></span>
<span class="line"><span style="color:#e1e4e8;">   public boolean interpret(String context);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">//调用</span></span>
<span class="line"><span style="color:#e1e4e8;">public class InterpreterPatternDemo {</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   //规则：Robert 和 John 是男性</span></span>
<span class="line"><span style="color:#e1e4e8;">   public static Expression getMaleExpression(){</span></span>
<span class="line"><span style="color:#e1e4e8;">      Expression robert = new TerminalExpression(&quot;Robert&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">      Expression john = new TerminalExpression(&quot;John&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">      return new OrExpression(robert, john);    </span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   //规则：Julie 是一个已婚的女性</span></span>
<span class="line"><span style="color:#e1e4e8;">   public static Expression getMarriedWomanExpression(){</span></span>
<span class="line"><span style="color:#e1e4e8;">      Expression julie = new TerminalExpression(&quot;Julie&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">      Expression married = new TerminalExpression(&quot;Married&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">      return new AndExpression(julie, married);    </span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      Expression isMale = getMaleExpression();</span></span>
<span class="line"><span style="color:#e1e4e8;">      Expression isMarriedWoman = getMarriedWomanExpression();</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">      System.out.println(&quot;John is male? &quot; + isMale.interpret(&quot;John&quot;));</span></span>
<span class="line"><span style="color:#e1e4e8;">      System.out.println(&quot;Julie is a married women? &quot; </span></span>
<span class="line"><span style="color:#e1e4e8;">      + isMarriedWoman.interpret(&quot;Married Julie&quot;));</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//实现: TerminalExpression ,OrExpression,AndExpression </span></span>
<span class="line"><span style="color:#24292e;">public interface Expression {</span></span>
<span class="line"><span style="color:#24292e;">   public boolean interpret(String context);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">//调用</span></span>
<span class="line"><span style="color:#24292e;">public class InterpreterPatternDemo {</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   //规则：Robert 和 John 是男性</span></span>
<span class="line"><span style="color:#24292e;">   public static Expression getMaleExpression(){</span></span>
<span class="line"><span style="color:#24292e;">      Expression robert = new TerminalExpression(&quot;Robert&quot;);</span></span>
<span class="line"><span style="color:#24292e;">      Expression john = new TerminalExpression(&quot;John&quot;);</span></span>
<span class="line"><span style="color:#24292e;">      return new OrExpression(robert, john);    </span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   //规则：Julie 是一个已婚的女性</span></span>
<span class="line"><span style="color:#24292e;">   public static Expression getMarriedWomanExpression(){</span></span>
<span class="line"><span style="color:#24292e;">      Expression julie = new TerminalExpression(&quot;Julie&quot;);</span></span>
<span class="line"><span style="color:#24292e;">      Expression married = new TerminalExpression(&quot;Married&quot;);</span></span>
<span class="line"><span style="color:#24292e;">      return new AndExpression(julie, married);    </span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">      Expression isMale = getMaleExpression();</span></span>
<span class="line"><span style="color:#24292e;">      Expression isMarriedWoman = getMarriedWomanExpression();</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">      System.out.println(&quot;John is male? &quot; + isMale.interpret(&quot;John&quot;));</span></span>
<span class="line"><span style="color:#24292e;">      System.out.println(&quot;Julie is a married women? &quot; </span></span>
<span class="line"><span style="color:#24292e;">      + isMarriedWoman.interpret(&quot;Married Julie&quot;));</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="迭代器模式-iterator-pattern" tabindex="-1">迭代器模式（Iterator Pattern） <a class="header-anchor" href="#迭代器模式-iterator-pattern" aria-label="Permalink to &quot;迭代器模式（Iterator Pattern）&quot;">​</a></h2><p>意图:遍历内部对象且不暴露内部对象.</p><p>关键代码: 内部成员类访问成员属性.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public interface Iterator {</span></span>
<span class="line"><span style="color:#e1e4e8;">   public boolean hasNext();</span></span>
<span class="line"><span style="color:#e1e4e8;">   public Object next();</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">public interface Container {</span></span>
<span class="line"><span style="color:#e1e4e8;">   public Iterator getIterator();</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//使用迭代器</span></span>
<span class="line"><span style="color:#e1e4e8;">public class NameRepository implements Container {</span></span>
<span class="line"><span style="color:#e1e4e8;">   public String[] names = {&quot;Robert&quot; , &quot;John&quot; ,&quot;Julie&quot; , &quot;Lora&quot;};</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">   public Iterator getIterator() {</span></span>
<span class="line"><span style="color:#e1e4e8;">      return new NameIterator();</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   private class NameIterator implements Iterator {</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">      int index;</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">      @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">      public boolean hasNext() {</span></span>
<span class="line"><span style="color:#e1e4e8;">         if(index &lt; names.length){</span></span>
<span class="line"><span style="color:#e1e4e8;">            return true;</span></span>
<span class="line"><span style="color:#e1e4e8;">         }</span></span>
<span class="line"><span style="color:#e1e4e8;">         return false;</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">      @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">      public Object next() {</span></span>
<span class="line"><span style="color:#e1e4e8;">         if(this.hasNext()){</span></span>
<span class="line"><span style="color:#e1e4e8;">            return names[index++];</span></span>
<span class="line"><span style="color:#e1e4e8;">         }</span></span>
<span class="line"><span style="color:#e1e4e8;">         return null;</span></span>
<span class="line"><span style="color:#e1e4e8;">      }     </span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">   public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      NameRepository namesRepository = new NameRepository();</span></span>
<span class="line"><span style="color:#e1e4e8;">      for(Iterator iter = namesRepository.getIterator(); iter.hasNext();){</span></span>
<span class="line"><span style="color:#e1e4e8;">         String name = (String)iter.next();</span></span>
<span class="line"><span style="color:#e1e4e8;">         System.out.println(&quot;Name : &quot; + name);</span></span>
<span class="line"><span style="color:#e1e4e8;">      }  </span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public interface Iterator {</span></span>
<span class="line"><span style="color:#24292e;">   public boolean hasNext();</span></span>
<span class="line"><span style="color:#24292e;">   public Object next();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">public interface Container {</span></span>
<span class="line"><span style="color:#24292e;">   public Iterator getIterator();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//使用迭代器</span></span>
<span class="line"><span style="color:#24292e;">public class NameRepository implements Container {</span></span>
<span class="line"><span style="color:#24292e;">   public String[] names = {&quot;Robert&quot; , &quot;John&quot; ,&quot;Julie&quot; , &quot;Lora&quot;};</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   @Override</span></span>
<span class="line"><span style="color:#24292e;">   public Iterator getIterator() {</span></span>
<span class="line"><span style="color:#24292e;">      return new NameIterator();</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   private class NameIterator implements Iterator {</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">      int index;</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">      @Override</span></span>
<span class="line"><span style="color:#24292e;">      public boolean hasNext() {</span></span>
<span class="line"><span style="color:#24292e;">         if(index &lt; names.length){</span></span>
<span class="line"><span style="color:#24292e;">            return true;</span></span>
<span class="line"><span style="color:#24292e;">         }</span></span>
<span class="line"><span style="color:#24292e;">         return false;</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">      @Override</span></span>
<span class="line"><span style="color:#24292e;">      public Object next() {</span></span>
<span class="line"><span style="color:#24292e;">         if(this.hasNext()){</span></span>
<span class="line"><span style="color:#24292e;">            return names[index++];</span></span>
<span class="line"><span style="color:#24292e;">         }</span></span>
<span class="line"><span style="color:#24292e;">         return null;</span></span>
<span class="line"><span style="color:#24292e;">      }     </span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">   public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">      NameRepository namesRepository = new NameRepository();</span></span>
<span class="line"><span style="color:#24292e;">      for(Iterator iter = namesRepository.getIterator(); iter.hasNext();){</span></span>
<span class="line"><span style="color:#24292e;">         String name = (String)iter.next();</span></span>
<span class="line"><span style="color:#24292e;">         System.out.println(&quot;Name : &quot; + name);</span></span>
<span class="line"><span style="color:#24292e;">      }  </span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="中介者模式-mediator-pattern" tabindex="-1">中介者模式（Mediator Pattern） <a class="header-anchor" href="#中介者模式-mediator-pattern" aria-label="Permalink to &quot;中介者模式（Mediator Pattern）&quot;">​</a></h2><p>意图: 将网状结构的调用关系分离为星型结构。</p><p>关键代码: 静态方法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">//中介</span></span>
<span class="line"><span style="color:#e1e4e8;">public class ChatRoom {</span></span>
<span class="line"><span style="color:#e1e4e8;">   public static void showMessage(User user, String message){</span></span>
<span class="line"><span style="color:#e1e4e8;">      System.out.println(new Date().toString()</span></span>
<span class="line"><span style="color:#e1e4e8;">         + &quot; [&quot; + user.getName() +&quot;] : &quot; + message);</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">public class User {</span></span>
<span class="line"><span style="color:#e1e4e8;">   private String name;</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   public void sendMessage(String message){</span></span>
<span class="line"><span style="color:#e1e4e8;">      ChatRoom.showMessage(this,message);</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//中介</span></span>
<span class="line"><span style="color:#24292e;">public class ChatRoom {</span></span>
<span class="line"><span style="color:#24292e;">   public static void showMessage(User user, String message){</span></span>
<span class="line"><span style="color:#24292e;">      System.out.println(new Date().toString()</span></span>
<span class="line"><span style="color:#24292e;">         + &quot; [&quot; + user.getName() +&quot;] : &quot; + message);</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">public class User {</span></span>
<span class="line"><span style="color:#24292e;">   private String name;</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   public void sendMessage(String message){</span></span>
<span class="line"><span style="color:#24292e;">      ChatRoom.showMessage(this,message);</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="备忘录模式-memento-pattern" tabindex="-1">备忘录模式（Memento Pattern） <a class="header-anchor" href="#备忘录模式-memento-pattern" aria-label="Permalink to &quot;备忘录模式（Memento Pattern）&quot;">​</a></h2><p>意图：在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态。适用于撤销等操作.</p><p>关键代码: 使用外部对象保存状态.</p><h2 id="观察者模式-observer-pattern" tabindex="-1">观察者模式（Observer Pattern） <a class="header-anchor" href="#观察者模式-observer-pattern" aria-label="Permalink to &quot;观察者模式（Observer Pattern）&quot;">​</a></h2><p>意图: 广播通知。</p><p>核心代码：对象保存观察者集合，状态变更时通知。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class Subject {</span></span>
<span class="line"><span style="color:#e1e4e8;">   </span></span>
<span class="line"><span style="color:#e1e4e8;">   private List&lt;Observer&gt; observers  = new ArrayList&lt;Observer&gt;();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">   private int state;</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   public int getState() {</span></span>
<span class="line"><span style="color:#e1e4e8;">      return state;</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   public void setState(int state) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      this.state = state;</span></span>
<span class="line"><span style="color:#e1e4e8;">      notifyAllObservers();</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   public void attach(Observer observer){</span></span>
<span class="line"><span style="color:#e1e4e8;">      observers.add(observer);      </span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   public void notifyAllObservers(){</span></span>
<span class="line"><span style="color:#e1e4e8;">      for (Observer observer : observers) {</span></span>
<span class="line"><span style="color:#e1e4e8;">         observer.update();</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">   }  </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//实现类: BinaryObserver,OctalObserver,HexaObserver</span></span>
<span class="line"><span style="color:#e1e4e8;">//实现类构造时会持有 Subject,并 attach 进来</span></span>
<span class="line"><span style="color:#e1e4e8;">public abstract class Observer {</span></span>
<span class="line"><span style="color:#e1e4e8;">   protected Subject subject;</span></span>
<span class="line"><span style="color:#e1e4e8;">   public abstract void update();</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class Subject {</span></span>
<span class="line"><span style="color:#24292e;">   </span></span>
<span class="line"><span style="color:#24292e;">   private List&lt;Observer&gt; observers  = new ArrayList&lt;Observer&gt;();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">   private int state;</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   public int getState() {</span></span>
<span class="line"><span style="color:#24292e;">      return state;</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   public void setState(int state) {</span></span>
<span class="line"><span style="color:#24292e;">      this.state = state;</span></span>
<span class="line"><span style="color:#24292e;">      notifyAllObservers();</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   public void attach(Observer observer){</span></span>
<span class="line"><span style="color:#24292e;">      observers.add(observer);      </span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   public void notifyAllObservers(){</span></span>
<span class="line"><span style="color:#24292e;">      for (Observer observer : observers) {</span></span>
<span class="line"><span style="color:#24292e;">         observer.update();</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">   }  </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//实现类: BinaryObserver,OctalObserver,HexaObserver</span></span>
<span class="line"><span style="color:#24292e;">//实现类构造时会持有 Subject,并 attach 进来</span></span>
<span class="line"><span style="color:#24292e;">public abstract class Observer {</span></span>
<span class="line"><span style="color:#24292e;">   protected Subject subject;</span></span>
<span class="line"><span style="color:#24292e;">   public abstract void update();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="状态模式-state-pattern" tabindex="-1">状态模式（State Pattern） <a class="header-anchor" href="#状态模式-state-pattern" aria-label="Permalink to &quot;状态模式（State Pattern）&quot;">​</a></h2><p>意图：允许对象在内部状态发生改变时改变它的行为，代码中包含大量与对象状态有关的条件语句。</p><p>关键代码：context保存当前状态（数据），各个状态类执行接口方法时改变context内状态。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">//实现类： StartState ,StopState </span></span>
<span class="line"><span style="color:#e1e4e8;">public interface State {</span></span>
<span class="line"><span style="color:#e1e4e8;">   public void doAction(Context context);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">public class Context {</span></span>
<span class="line"><span style="color:#e1e4e8;">   private State state;</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   public Context(){</span></span>
<span class="line"><span style="color:#e1e4e8;">      state = null;</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   public void setState(State state){</span></span>
<span class="line"><span style="color:#e1e4e8;">      this.state = state;     </span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   public State getState(){</span></span>
<span class="line"><span style="color:#e1e4e8;">      return state;</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Context context = new Context();</span></span>
<span class="line"><span style="color:#e1e4e8;">startState.doAction(context);</span></span>
<span class="line"><span style="color:#e1e4e8;">stopState.doAction(context);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//实现类： StartState ,StopState </span></span>
<span class="line"><span style="color:#24292e;">public interface State {</span></span>
<span class="line"><span style="color:#24292e;">   public void doAction(Context context);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">public class Context {</span></span>
<span class="line"><span style="color:#24292e;">   private State state;</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   public Context(){</span></span>
<span class="line"><span style="color:#24292e;">      state = null;</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   public void setState(State state){</span></span>
<span class="line"><span style="color:#24292e;">      this.state = state;     </span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   public State getState(){</span></span>
<span class="line"><span style="color:#24292e;">      return state;</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Context context = new Context();</span></span>
<span class="line"><span style="color:#24292e;">startState.doAction(context);</span></span>
<span class="line"><span style="color:#24292e;">stopState.doAction(context);</span></span></code></pre></div><h2 id="策略模式-strategy-pattern" tabindex="-1">策略模式（Strategy Pattern） <a class="header-anchor" href="#策略模式-strategy-pattern" aria-label="Permalink to &quot;策略模式（Strategy Pattern）&quot;">​</a></h2><p>意图：定义一系列的算法,把它们一个个封装起来, 并且使它们可相互替换。</p><p>关键代码：context装载策略，并执行接口方法。</p><ul><li>优点： 1、算法可以自由切换。 2、避免使用多重条件判断。 3、扩展性良好。</li><li>缺点： 1、策略类会增多。 2、所有策略类都需要对外暴露。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">//实现类： OperationAdd，OperationSubtract ...</span></span>
<span class="line"><span style="color:#e1e4e8;">public interface Strategy {</span></span>
<span class="line"><span style="color:#e1e4e8;">   public int doOperation(int num1, int num2);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//Context</span></span>
<span class="line"><span style="color:#e1e4e8;">public class Context {</span></span>
<span class="line"><span style="color:#e1e4e8;">   private Strategy strategy;</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   public Context(Strategy strategy){</span></span>
<span class="line"><span style="color:#e1e4e8;">      this.strategy = strategy;</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   public int executeStrategy(int num1, int num2){</span></span>
<span class="line"><span style="color:#e1e4e8;">      return strategy.doOperation(num1, num2);</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//调用</span></span>
<span class="line"><span style="color:#e1e4e8;">Context context = new Context(new OperationAdd());</span></span>
<span class="line"><span style="color:#e1e4e8;">context.executeStrategy()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//实现类： OperationAdd，OperationSubtract ...</span></span>
<span class="line"><span style="color:#24292e;">public interface Strategy {</span></span>
<span class="line"><span style="color:#24292e;">   public int doOperation(int num1, int num2);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//Context</span></span>
<span class="line"><span style="color:#24292e;">public class Context {</span></span>
<span class="line"><span style="color:#24292e;">   private Strategy strategy;</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   public Context(Strategy strategy){</span></span>
<span class="line"><span style="color:#24292e;">      this.strategy = strategy;</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   public int executeStrategy(int num1, int num2){</span></span>
<span class="line"><span style="color:#24292e;">      return strategy.doOperation(num1, num2);</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//调用</span></span>
<span class="line"><span style="color:#24292e;">Context context = new Context(new OperationAdd());</span></span>
<span class="line"><span style="color:#24292e;">context.executeStrategy()</span></span></code></pre></div><h2 id="空对象模式-null-object-pattern" tabindex="-1">空对象模式（Null Object Pattern） <a class="header-anchor" href="#空对象模式-null-object-pattern" aria-label="Permalink to &quot;空对象模式（Null Object Pattern）&quot;">​</a></h2><p>意图： 一个空对象取代 NULL 对象实例的检查</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public abstract class AbstractCustomer {</span></span>
<span class="line"><span style="color:#e1e4e8;">   protected String name;</span></span>
<span class="line"><span style="color:#e1e4e8;">   public abstract boolean isNil();</span></span>
<span class="line"><span style="color:#e1e4e8;">   public abstract String getName();</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">public class NullCustomer extends AbstractCustomer {</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">   public String getName() {</span></span>
<span class="line"><span style="color:#e1e4e8;">      return &quot;Not Available in Customer Database&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">   public boolean isNil() {</span></span>
<span class="line"><span style="color:#e1e4e8;">      return true;</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public abstract class AbstractCustomer {</span></span>
<span class="line"><span style="color:#24292e;">   protected String name;</span></span>
<span class="line"><span style="color:#24292e;">   public abstract boolean isNil();</span></span>
<span class="line"><span style="color:#24292e;">   public abstract String getName();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">public class NullCustomer extends AbstractCustomer {</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   @Override</span></span>
<span class="line"><span style="color:#24292e;">   public String getName() {</span></span>
<span class="line"><span style="color:#24292e;">      return &quot;Not Available in Customer Database&quot;;</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   @Override</span></span>
<span class="line"><span style="color:#24292e;">   public boolean isNil() {</span></span>
<span class="line"><span style="color:#24292e;">      return true;</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="模板模式-template-pattern" tabindex="-1">模板模式（Template Pattern） <a class="header-anchor" href="#模板模式-template-pattern" aria-label="Permalink to &quot;模板模式（Template Pattern）&quot;">​</a></h2><p>意图：通用方法抽象。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">//实现类： Cricket，Football </span></span>
<span class="line"><span style="color:#e1e4e8;">public abstract class Game {</span></span>
<span class="line"><span style="color:#e1e4e8;">   abstract void initialize();</span></span>
<span class="line"><span style="color:#e1e4e8;">   abstract void startPlay();</span></span>
<span class="line"><span style="color:#e1e4e8;">   abstract void endPlay();</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   //模板</span></span>
<span class="line"><span style="color:#e1e4e8;">   public final void play(){</span></span>
<span class="line"><span style="color:#e1e4e8;">      //初始化游戏</span></span>
<span class="line"><span style="color:#e1e4e8;">      initialize();</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">      //开始游戏</span></span>
<span class="line"><span style="color:#e1e4e8;">      startPlay();</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">      //结束游戏</span></span>
<span class="line"><span style="color:#e1e4e8;">      endPlay();</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//调用</span></span>
<span class="line"><span style="color:#e1e4e8;">Game game = new Cricket();</span></span>
<span class="line"><span style="color:#e1e4e8;">game.play();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//实现类： Cricket，Football </span></span>
<span class="line"><span style="color:#24292e;">public abstract class Game {</span></span>
<span class="line"><span style="color:#24292e;">   abstract void initialize();</span></span>
<span class="line"><span style="color:#24292e;">   abstract void startPlay();</span></span>
<span class="line"><span style="color:#24292e;">   abstract void endPlay();</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   //模板</span></span>
<span class="line"><span style="color:#24292e;">   public final void play(){</span></span>
<span class="line"><span style="color:#24292e;">      //初始化游戏</span></span>
<span class="line"><span style="color:#24292e;">      initialize();</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">      //开始游戏</span></span>
<span class="line"><span style="color:#24292e;">      startPlay();</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">      //结束游戏</span></span>
<span class="line"><span style="color:#24292e;">      endPlay();</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//调用</span></span>
<span class="line"><span style="color:#24292e;">Game game = new Cricket();</span></span>
<span class="line"><span style="color:#24292e;">game.play();</span></span></code></pre></div><h2 id="访问者模式-visitor-pattern" tabindex="-1">访问者模式（Visitor Pattern） <a class="header-anchor" href="#访问者模式-visitor-pattern" aria-label="Permalink to &quot;访问者模式（Visitor Pattern）&quot;">​</a></h2><p>意图：主要将数据结构与数据操作分离。</p><p>主要解决：稳定的数据结构和易变的操作耦合问题。</p><ul><li>优点： 1、符合单一职责原则。 2、优秀的扩展性。 3、灵活性。</li><li>缺点： 1、具体元素对访问者公布细节，违反了迪米特原则。 2、具体元素变更比较困难。 3、违反了依赖倒置原则，依赖了具体类，没有依赖抽象。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">//实现类： Keyboard，Monitor ，Mouse  ，Computer </span></span>
<span class="line"><span style="color:#e1e4e8;">public interface ComputerPart {</span></span>
<span class="line"><span style="color:#e1e4e8;">   public void accept(ComputerPartVisitor computerPartVisitor);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//“易变的操作”</span></span>
<span class="line"><span style="color:#e1e4e8;">public interface ComputerPartVisitor {</span></span>
<span class="line"><span style="color:#e1e4e8;">   public void visit(Computer computer);</span></span>
<span class="line"><span style="color:#e1e4e8;">   public void visit(Mouse mouse);</span></span>
<span class="line"><span style="color:#e1e4e8;">   public void visit(Keyboard keyboard);</span></span>
<span class="line"><span style="color:#e1e4e8;">   public void visit(Monitor monitor);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">public class ComputerPartDisplayVisitor implements ComputerPartVisitor {</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">   public void visit(Computer computer) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      System.out.println(&quot;Displaying Computer.&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">   public void visit(Mouse mouse) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      System.out.println(&quot;Displaying Mouse.&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">   public void visit(Keyboard keyboard) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      System.out.println(&quot;Displaying Keyboard.&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">   @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">   public void visit(Monitor monitor) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      System.out.println(&quot;Displaying Monitor.&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">ComputerPart computer = new Computer();</span></span>
<span class="line"><span style="color:#e1e4e8;">computer.accept(new ComputerPartDisplayVisitor());</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//实现类： Keyboard，Monitor ，Mouse  ，Computer </span></span>
<span class="line"><span style="color:#24292e;">public interface ComputerPart {</span></span>
<span class="line"><span style="color:#24292e;">   public void accept(ComputerPartVisitor computerPartVisitor);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//“易变的操作”</span></span>
<span class="line"><span style="color:#24292e;">public interface ComputerPartVisitor {</span></span>
<span class="line"><span style="color:#24292e;">   public void visit(Computer computer);</span></span>
<span class="line"><span style="color:#24292e;">   public void visit(Mouse mouse);</span></span>
<span class="line"><span style="color:#24292e;">   public void visit(Keyboard keyboard);</span></span>
<span class="line"><span style="color:#24292e;">   public void visit(Monitor monitor);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">public class ComputerPartDisplayVisitor implements ComputerPartVisitor {</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   @Override</span></span>
<span class="line"><span style="color:#24292e;">   public void visit(Computer computer) {</span></span>
<span class="line"><span style="color:#24292e;">      System.out.println(&quot;Displaying Computer.&quot;);</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   @Override</span></span>
<span class="line"><span style="color:#24292e;">   public void visit(Mouse mouse) {</span></span>
<span class="line"><span style="color:#24292e;">      System.out.println(&quot;Displaying Mouse.&quot;);</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   @Override</span></span>
<span class="line"><span style="color:#24292e;">   public void visit(Keyboard keyboard) {</span></span>
<span class="line"><span style="color:#24292e;">      System.out.println(&quot;Displaying Keyboard.&quot;);</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">   @Override</span></span>
<span class="line"><span style="color:#24292e;">   public void visit(Monitor monitor) {</span></span>
<span class="line"><span style="color:#24292e;">      System.out.println(&quot;Displaying Monitor.&quot;);</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">ComputerPart computer = new Computer();</span></span>
<span class="line"><span style="color:#24292e;">computer.accept(new ComputerPartDisplayVisitor());</span></span></code></pre></div>`,86),o=[p];function t(c,r,i,y,d,u){return n(),a("div",null,o)}const h=s(l,[["render",t]]);export{g as __pageData,h as default};
