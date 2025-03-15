# jwt
## pom.xml
```
    <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-oauth2-resource-server</artifactId>
            <version>3.4.3</version>
        </dependency>

```

## 生成rsa密钥
```
public class RSAKeyGenerator {
    public static void main(String[] args) {
        try {
            KeyPair keyPair = generateKeyPair();
            PublicKey publicKey = keyPair.getPublic();
            PrivateKey privateKey = keyPair.getPrivate();

            saveKeyToFile(publicKey, "app.pub");
            saveKeyToFile(privateKey, "app.key");

            System.out.println("RSA keys have been saved to app.key and app.pub.");
        } catch (NoSuchAlgorithmException | IOException e) {
            e.printStackTrace();
        }
    }

    public static KeyPair generateKeyPair() throws NoSuchAlgorithmException {
        KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA");
        keyPairGenerator.initialize(2048);
        return keyPairGenerator.generateKeyPair();
    }

    public static void saveKeyToFile(Object key, String filePath) throws IOException {
        byte[] keyBytes;
        if (key instanceof PublicKey) {
            keyBytes = ((PublicKey) key).getEncoded();
        } else if (key instanceof PrivateKey) {
            keyBytes = ((PrivateKey) key).getEncoded();
        } else {
            throw new IllegalArgumentException("Invalid key type");
        }
        String keyBase64 = Base64.getEncoder().encodeToString(keyBytes);
        String pemContent;
        if (key instanceof PublicKey) {
            pemContent = "-----BEGIN PUBLIC KEY-----\n" + keyBase64 + "\n-----END PUBLIC KEY-----";
        } else {
            pemContent = "-----BEGIN PRIVATE KEY-----\n" + keyBase64 + "\n-----END PRIVATE KEY-----";
        }
        try (FileOutputStream fos = new FileOutputStream(filePath)) {
            fos.write(pemContent.getBytes());
        }
    }
}

```

## application.yml
```
jwt:
  private.key: classpath:app.key
  public.key: classpath:app.pub
```



## SecurityConfig.java
```
@Configuration
@Slf4j
public class SecurityConfig {

    @Value("${jwt.public.key}")
    RSAPublicKey key;

    @Value("${jwt.private.key}")
    RSAPrivateKey priv;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        // @formatter:off
            http
                    .authorizeHttpRequests((authorize) -> authorize
                            // 自定义无需鉴权的接口
                            .requestMatchers("/token","/login").permitAll()
                            // 允许访问 Swagger 相关的 URL
                            .requestMatchers("/swagger-ui.html", "/swagger-ui/**", "/v3/api-docs/**").permitAll()
                            .anyRequest().authenticated()
                    )
                    .csrf((csrf) -> csrf.ignoringRequestMatchers("/token","/login"))
//                    .httpBasic(Customizer.withDefaults())
                    .oauth2ResourceServer(OAuth2ResourceServerConfigurer::jwt)
                    .sessionManagement((session) -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                    .exceptionHandling((exceptions) -> exceptions
                            .authenticationEntryPoint(new BearerTokenAuthenticationEntryPoint())
                            .accessDeniedHandler(new BearerTokenAccessDeniedHandler())
                    );
            // @formatter:on
        http.addFilterAfter(jwtTokenFilter(), AuthenticationFilter.class);
        return http.build();
    }

    @Bean
    OncePerRequestFilter jwtTokenFilter() {
        return new OncePerRequestFilter() {
            @Override
            protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
                Authentication currentAuthentication = su.getCurrentAuthentication();
//                结合下面配置，可以对已校验的token进行限制，例如限制登录
//                http.addFilterAfter(jwtTokenFilter(), AuthenticationFilter.class);
//                if (true) {
//                    response.setContentType("application/json;charset=utf-8");
//                    response.setStatus(403);
//                    response.getWriter().write("{\"code\":401,\"msg\":\"token无效\"}");
//                    return;
//                }
                filterChain.doFilter(request, response);
            }
        };
    }

    @Bean
    UserDetailsService users() {
        // @formatter:off
            return new InMemoryUserDetailsManager(
                    User.withUsername("user")
                            .password("{noop}password")
                            .authorities("app")
                            .build()
            );
            // @formatter:on
    }

    @Bean
    JwtDecoder jwtDecoder() {
        return NimbusJwtDecoder.withPublicKey(this.key).build();
    }

    @Bean
    JwtEncoder jwtEncoder() {
        JWK jwk = new RSAKey.Builder(this.key).privateKey(this.priv).build();
        JWKSource jwks = new ImmutableJWKSet<>(new JWKSet(jwk));
        return new NimbusJwtEncoder(jwks);
    }
}
```