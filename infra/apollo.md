# springboot集成
```
     <!-- https://mvnrepository.com/artifact/com.ctrip.framework.apollo/apollo-client -->
        <dependency>
            <groupId>com.ctrip.framework.apollo</groupId>
            <artifactId>apollo-client</artifactId>
            <version>2.3.0</version>
        </dependency>

    @EnableApolloConfig

    # apollo>>> https://www.apolloconfig.com/#/zh/client/java-sdk-user-guide?id=_122-apollo-meta-server
    app:
    id: ${spring.application.name}
    apollo:
    # meta可以用于配置中心的高可用（服务发现）、指定config-service就可以注释掉meta的配置。
    #  meta: http://s.lab.io:8080
    config-service: http://s.lab.io:8080
    bootstrap:
        enabled: true
        namespaces: application,TEST1.infra
        # log eager loader: https://github.com/apolloconfig/apollo-use-cases/blob/master/spring-boot-logger/src/main/java/com/ctrip/framework/apollo/use/cases/spring/boot/logger/LoggerConfiguration.java
        eagerLoad:
        enabled: true
    # <<<apollo
```