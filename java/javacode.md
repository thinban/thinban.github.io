# cst.java
```
public interface cst {
    String ok = "ok";
    String fail = "fail";

    static void buildQuery(Object m, QueryWrapper q) {
        if (Objects.nonNull(m)) {
            Class<?> clazz = m.getClass();
            try {
                PropertyDescriptor[] propertyDescriptors = java.beans.Introspector.getBeanInfo(clazz, Object.class).getPropertyDescriptors();
                for (PropertyDescriptor propertyDescriptor : propertyDescriptors) {
                    String propertyName = propertyDescriptor.getName();
                    Method readMethod = propertyDescriptor.getReadMethod();
                    Object value = readMethod.invoke(m);
                    if (Objects.nonNull(value)) {
                        Method columnMethod = User.class.getMethod("get" + propertyName.substring(0, 1).toUpperCase() + propertyName.substring(1));
                        q.eq(columnMethod.getName().substring(3), value);
                    }
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}

```

# SpringContextUtil.java 
```
@Component
public class SpringContextUtil implements ApplicationContextAware {

    private static ApplicationContext applicationContext;

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        SpringContextUtil.applicationContext = applicationContext;
    }

    /**
     * 根据 Bean 名称获取 Bean 实例
     *
     * @param name Bean 的名称
     * @return Bean 实例
     */
    public static Object getBean(String name) {
        return applicationContext.getBean(name);
    }

    /**
     * 根据 Bean 类型获取 Bean 实例
     *
     * @param requiredType Bean 的类型
     * @param <T>          Bean 的泛型类型
     * @return Bean 实例
     */
    public static <T> T getBean(Class<T> requiredType) {
        return applicationContext.getBean(requiredType);
    }

    /**
     * 根据 Bean 名称和类型获取 Bean 实例
     *
     * @param name         Bean 的名称
     * @param requiredType Bean 的类型
     * @param <T>          Bean 的泛型类型
     * @return Bean 实例
     */
    public static <T> T getBean(String name, Class<T> requiredType) {
        return applicationContext.getBean(name, requiredType);
    }

    /**
     * 判断 Spring 容器中是否包含指定名称的 Bean
     *
     * @param name Bean 的名称
     * @return 如果包含返回 true，否则返回 false
     */
    public static boolean containsBean(String name) {
        return applicationContext.containsBean(name);
    }

    /**
     * 判断指定名称的 Bean 是否为单例
     *
     * @param name Bean 的名称
     * @return 如果是单例返回 true，否则返回 false
     */
    public static boolean isSingleton(String name) {
        return applicationContext.isSingleton(name);
    }

    /**
     * 获取指定名称 Bean 的类型
     *
     * @param name Bean 的名称
     * @return Bean 的类型
     */
    public static Class<?> getType(String name) {
        return applicationContext.getType(name);
    }
}
```

# SysUserController.java
```
@RestController
@RequestMapping("/sys/user")
public class SysUserController {

    @Autowired
    UserService userService;

    @GetMapping
    public ResponseEntity page(Page<User> p, User m) {
        QueryWrapper<User> q = new QueryWrapper<>();
        cst.buildQuery(m, q);
        IPage<User> page = userService.page(p, q);
        return ResponseEntity.ok(page);
    }

    @GetMapping("/{id}")
    public ResponseEntity getById(@PathVariable Integer id) {
        User user = userService.getById(id);
        return ResponseEntity.ok(user);
    }

    @PostMapping
    @Transactional
    public ResponseEntity saveOrUpdate(@RequestBody List<User> m) {
        Assert.isTrue(userService.saveOrUpdateBatch(m), cst.fail);
        return ResponseEntity.ok(cst.ok);
    }

    @DeleteMapping("/{ids}")
    @Transactional
    public ResponseEntity delete(@PathVariable List<Integer> ids) {
        Assert.isTrue(userService.removeBatchByIds(ids), cst.fail);
        return ResponseEntity.ok(cst.ok);
    }
}
```
