## mybatisplus反射构建查询
```
  public static String camelToSnakeCase(String camelCase) {
        return camelCase.replaceAll("([a-z])([A-Z]+)", "$1_$2").toLowerCase();
  }

  public static void buildQry(QueryWrapper q, Class<?> cls, Object obj) throws IllegalAccessException {
        if (q == null || cls == null || obj == null) return;
        Field[] declaredFields = cls.getDeclaredFields();
        for (Field declaredField : declaredFields) {
            String name = declaredField.getName();
            Class type = declaredField.getType();
            declaredField.setAccessible(true);
            Object val = declaredField.get(obj);
            if (Arrays.asList("serialVersionUID").contains(name) || val == null) continue;
//            System.out.println(name);
//            System.out.println(val);
//            System.out.println(type);
//            System.out.println();

            name = camelToSnakeCase(name);
            boolean boolDigit = type == Integer.class || type == int.class || type == Long.class || type == long.class || type == Double.class || type == double.class || type == Float.class || type == float.class;
            if (boolDigit) {
                q.eq(name, val);
            } else if (type == Date.class) {
                LocalDateTime localDateTime = LocalDateTime.ofInstant(((Date) val).toInstant(), ZoneId.systemDefault());
                LocalDateTime startOfDay = localDateTime.toLocalDate().atStartOfDay();
                LocalDateTime nextDayStart = startOfDay.plusDays(1).minusSeconds(1);
                q.between(name, startOfDay, nextDayStart);
            } else if (type == LocalDateTime.class) {
                LocalDateTime localDateTime = (LocalDateTime) val;
                LocalDateTime startOfDay = localDateTime.toLocalDate().atStartOfDay();
                LocalDateTime nextDayStart = startOfDay.plusDays(1).minusSeconds(1);
                q.between(name, startOfDay, nextDayStart);
            } else {
                q.like(name, val);
            }
        }
    }

```

## mybatisplus单表增删改查
```
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.mybatisplus.domain.XhsUser;
import com.example.mybatisplus.service.XhsUserService;
import jakarta.annotation.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Field;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Arrays;
import java.util.Date;

@RestController
@RequestMapping("XhsUser")
public class XhsUserController {
    @Resource
    XhsUserService service;

    //?current=1&size=1
    //需要额外参数支持： 排序，范围查询
    @GetMapping("page")
    public ResponseEntity<IPage<XhsUser>> page(Page p, XhsUser m) throws IllegalAccessException {
        QueryWrapper q = new QueryWrapper<XhsUser>();
        buildQry(q, XhsUser.class, m);
        Page page = service.page(p, q);
        return ResponseEntity.ok(page);
    }

    @PostMapping("add")
    public ResponseEntity add(@RequestBody XhsUser m) {
        return service.save(m) ? ResponseEntity.ok(m) : ResponseEntity.status(HttpStatus.BAD_REQUEST).body("操作失败");
    }

    @PutMapping("edit")
    public ResponseEntity edit(@RequestBody XhsUser m) {
        Assert.isTrue(m.getId() > 0, "参数错误");
        return service.updateById(m) ? ResponseEntity.ok(m) : ResponseEntity.status(HttpStatus.BAD_REQUEST).body("操作失败");
    }

    @DeleteMapping("del")
    public ResponseEntity del(String[] ids) {
        Assert.isTrue(ids != null && ids.length > 0, "参数错误");
        return service.removeBatchByIds(Arrays.asList(ids)) ? ResponseEntity.ok(null) : ResponseEntity.status(HttpStatus.BAD_REQUEST).body("操作失败");
    }

    public static void buildQry(QueryWrapper q, Class<?> cls, Object obj) throws IllegalAccessException {
        if (q == null || cls == null || obj == null) return;
        Field[] declaredFields = cls.getDeclaredFields();
        for (Field declaredField : declaredFields) {
            String name = declaredField.getName();
            Class type = declaredField.getType();
            declaredField.setAccessible(true);
            Object val = declaredField.get(obj);
            if (Arrays.asList("serialVersionUID").contains(name) || val == null) continue;
            name = camelToSnakeCase(name);
            boolean boolDigit = type == Integer.class || type == int.class || type == Long.class || type == long.class || type == Double.class || type == double.class || type == Float.class || type == float.class;
            if (boolDigit) {
                q.eq(name, val);
            } else if (type == Date.class) {
                LocalDateTime localDateTime = LocalDateTime.ofInstant(((Date) val).toInstant(), ZoneId.systemDefault());
                LocalDateTime startOfDay = localDateTime.toLocalDate().atStartOfDay();
                LocalDateTime nextDayStart = startOfDay.plusDays(1).minusSeconds(1);
                q.between(name, startOfDay, nextDayStart);
            } else if (type == LocalDateTime.class) {
                LocalDateTime localDateTime = (LocalDateTime) val;
                LocalDateTime startOfDay = localDateTime.toLocalDate().atStartOfDay();
                LocalDateTime nextDayStart = startOfDay.plusDays(1).minusSeconds(1);
                q.between(name, startOfDay, nextDayStart);
            } else {
                q.like(name, val);
            }
        }
    }

    public static String camelToSnakeCase(String camelCase) {
        return camelCase.replaceAll("([a-z])([A-Z]+)", "$1_$2").toLowerCase();
    }
```