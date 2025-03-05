## main.py
```
from pynput.keyboard import Key, Controller
import time
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
import sqlite3
## pip install fastapi uvicorn
## uvicorn main:app --reload --host 0.0.0.0
## http://localhost:8000/docs

# 创建 FastAPI 应用实例
app = FastAPI()

# 挂载静态文件目录
app.mount("/s", StaticFiles(directory="."), name="static")

# 连接到 SQLite 数据库
def get_db_connection():
    conn = sqlite3.connect('example.db')
    conn.row_factory = sqlite3.Row
    return conn

# 创建一个简单的表
def create_table():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS items (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT
        )
    ''')
    conn.commit()
    conn.close()

# 在应用启动时创建表
@app.on_event("startup")
def startup_event():
    create_table()

# 获取所有项目
@app.get("/items/")
def get_items():
    conn = get_db_connection()
    items = conn.execute('SELECT * FROM items').fetchall()
    conn.close()
    return [dict(item) for item in items]

# 创建一个新项目
@app.post("/items/")
def create_item(name: str, description: str = None):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('INSERT INTO items (name, description) VALUES (?,?)', (name, description))
    conn.commit()
    new_item_id = cursor.lastrowid
    new_item = conn.execute('SELECT * FROM items WHERE id =?', (new_item_id,)).fetchone()
    conn.close()
    return dict(new_item)

# 根据 ID 获取单个项目
@app.get("/items/{item_id}")
def get_item(item_id: int):
    conn = get_db_connection()
    item = conn.execute('SELECT * FROM items WHERE id =?', (item_id,)).fetchone()
    conn.close()
    if item is None:
        return {"message": "Item not found"}
    return dict(item)

# 根据 ID 更新项目
@app.put("/items/{item_id}")
def update_item(item_id: int, name: str, description: str = None):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('UPDATE items SET name =?, description =? WHERE id =?', (name, description, item_id))
    conn.commit()
    updated_item = conn.execute('SELECT * FROM items WHERE id =?', (item_id,)).fetchone()
    conn.close()
    if updated_item is None:
        return {"message": "Item not found"}
    return dict(updated_item)

# 根据 ID 删除项目
@app.delete("/items/{item_id}")
def delete_item(item_id: int):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('DELETE FROM items WHERE id =?', (item_id,))
    conn.commit()
    conn.close()
    return {"message": "Item deleted successfully"}


# 获取所有项目
@app.get("/items/")
def get_items():
    conn = get_db_connection()
    items = conn.execute('SELECT * FROM items').fetchall()
    conn.close()
    return [dict(item) for item in items]

# 抖音遥控
@app.get("/h/{action}",summary="抖音遥控", description="action(动作)=up/down/dblclick<br>233")
def yaokong(action: str):
    keyboard = Controller()
    if action == 'up':
        keyboard.press(Key.up)
        keyboard.release(Key.up)
    if action == 'down':
        keyboard.press(Key.down)
        keyboard.release(Key.down)
    if action == 'dblclick':
        k='z'
        keyboard.press(k)
        keyboard.release(k)
        time.sleep(0.1)
        keyboard.press(k)
        keyboard.release(k) 
    if action == 'pageup':
        keyboard.press(Key.page_up)
        keyboard.release(Key.page_up)
    if action == 'pagedown':
        keyboard.press(Key.page_down)
        keyboard.release(Key.page_down)
    return 'ok'


if __name__ == "__main__":
    import uvicorn
    # 启动FastAPI应用
    uvicorn.run(app, host="0.0.0.0", port=8000)
```

## 1.html
静态页面测试

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>按钮上下布局示例</title>
    <style>
        body {
            display: flex;
            flex-direction: column;
            height: 100vh;
            margin: 0;
        }

        button {
            flex: 1;
            font-size: 24px;
            border: none;
            outline: none;
        }

        #upButton {
            background-color: lightblue;
        }

        #downButton {
            background-color: lightgreen;
        }
    </style>
</head>

<body>
    <select id="fruitSelect">
        <option value="dy">抖音</option>
        <option value="book">看书</option>
    </select>
    <button id="upButton">上</button>
    <button id="downButton">下</button>

    <script>
        document.getElementById('upButton').addEventListener('click', function () {
            if (choice == 'dy') {
                screen_click('up')
            } else {
                screen_click('pageup')
            }
        });

        let choice = 'dy'
        document.getElementById('fruitSelect').addEventListener('change', function () {
            choice = this.value
        });


        const screen_click = (action) => {
            // 点击“下”按钮时发起 GET 请求到 /h/down 接口
            fetch('/h/' + action)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('网络响应不正常');
                    }
                    return response.text();
                })
                .then(data => {
                    console.log('响应数据:', data);
                })
                .catch(error => {
                    console.error('请求出错:', error);
                });
        }

        let clickCount = 0;
        let clickTimer;
        const clickDelay = 500; // 延迟时间，单位为毫秒
        document.getElementById('downButton').addEventListener('click', function () {
            clickCount++;
            if (clickCount === 1) {
                clickTimer = setTimeout(function () {
                    if (choice == 'dy') {
                        screen_click('down')
                    } else {
                        screen_click('pagedown')
                    }
                    clickCount = 0; // 重置点击计数
                }, clickDelay);
            } else {
                clearTimeout(clickTimer); // 清除单击的定时器
                screen_click('dblclick')
                clickCount = 0; // 重置点击计数
            }
        });

    </script>
</body>

</html>
```