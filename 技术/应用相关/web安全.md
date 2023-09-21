认证
授权
RBAC(Role-Based Access Control) 基于角色的访问控制
ABAC（Attribute-Based Access Control）基于属性的访问控制
    对象: 用户属性
    资源: 资产对象
    操作: 对资源的操作
    环境: 上下文,例如访问时间,位置,设备,通信协议等等

    场景
        - 授权某个人具体某本书的编辑权限
        - 当一个文档的所属部门跟用户的部门相同时，用户可以访问这个文档
        - 当用户是一个文档的拥有者并且文档的状态是草稿，用户可以编辑这个文档
        - 早上九点前禁止 A 部门的人访问 B 系统
        - 在除了上海以外的地方禁止以管理员身份访问 A 系统
        - 用户对 2022-06-07 之前创建的订单有操作权限


# 攻击类型
xss跨站脚本攻击
    输入检查和过滤转义特定字符(HTML Purifier )
    输出过滤和编码: html和javascript代码中的特殊字符进行转义.( htmlentities() 或 htmlspecialchars() 函数)
    http-only cookie: 可以避免被js访问篡改
    csp(content-security-policy): 限制页面中可以执行的脚本和资源
        //todo
    防止 DOM 操作污染
    安全开发实践
        严格验证输入数据
        避免动态执行脚本
        代码审查
        安全测试
        漏洞扫描
    

csrf跨站请求伪造
    自动防御
        同源验证(Referer头)
            设置Referrer Policy(CSP/meta标签/a标签增加referrerpolicy属性)
            缺点:严格的同源验证策略不利于seo
    主动防御
        双重Cookie
            访问页面时种到cookie中,请求时带到链接,后端比较cookie和链接值.
            优点: 存储在客户端,实施成本低可统一拦截校验.
            缺点: 没有csrf token安全,攻击者可能从其他子域获取到cookie来实施攻击.

        CSRF Token(//todo实现它)
            访问页面时存一份到session,请求时带到链接,后端比较cookie和链接值.(前段这么拿?)

            Encrypted Token Pattern方式
                使用UserID、时间戳和随机数，通过加密的方法生成,分布式服务的Token一致,而且不用session
        
        保证页面的幂等性，后端接口不要在GET页面中做用户操作。

        Samesite Cookie属性
            可选值: Strict(其他域甚至主域都不会携带cookie进行请求) 和 Lax
            String CookieSpec = String.format("%s=%s; Path=%s; HttpOnly; Samesite=Strict", this.determineCookieName(httpRequest), sToken, httpRequest.getRequestURI());
            缺点: 兼容性不是很好(Safari以及iOS Safari);不支持子域;


# 单点登录
系统设计
    用户/浏览器
    业务站点
    sso站点

业务流程
    (跨域主要解决解决 Cookie 的跨域读写问题,直接回调到业务后台处理)
    登陆(用户访问业务站点)
        同域可以直接写到主域(http://server.sso.com/login?redirect=biz.sso.com, sso服务种在sso.com)
        跨域的话,通过回调(http://server.sso.com/login?redirect=http://biz.com/login?authToken=xxx),由biz.com种在自己域下.
    查询状态
    登出
        同登陆

# oauth2.0(//todo 实现)
行业的标准授权协议,常用的场景就是第三方登录.

系统设计
    三方授权服务
        应用注册
        认证授权
            一次性票据
            查询和保存令牌
            令牌使用
            令牌刷新
    三方资源服务

业务流程
    应用向用户申请授权;
    用户在三方页面上授权,获得票据;
    访问三方授权服务获取许可;凭借许可,获取到资源.

方式
    (具体参考: http://www.ruanyifeng.com/blog/2019/04/oauth-grant-types.html)
    授权码（authorization-code）: CLIENT_ID  + CALLBACK_URL,后端获取code,再去换令牌 (CLIENT_ID + CLIENT_SECRET + code).
    隐藏式（implicit）: CLIENT_ID + CALLBACK_URL ,纯前端应用,直接从回调中获取令牌,安全性不高场景.
    密码式（password）: CLIENT_ID + USERNAME + PASSWORD 申请令牌,应用要求获取用户的账号密码.
    客户端凭证（client credentials）: CLIENT_ID + CLIENT_SECRET 申请令牌,针对应用的.

# 摘抄
Origin在以下两种情况下并不存在：IE11同源策略,302重定向

https://devhints.io/  命令小抄

# 思考
## 用户体系设计
rbac

用户登陆成功返回sessionid, 内存中(redis)中保存登陆信息()和用户信息(u:$sid)

us:$sid={
    device:'',
    state:1,//-1不可用
    loginErr:3,
    type:1,
    cnt:3//登陆设备
}

u:$sid={
    id,
    name,
    logo,
    phone,
    ...
}