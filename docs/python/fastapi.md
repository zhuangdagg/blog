# FastApi

## 注意点

### FastAPI 能够正确识别这三种参数，并从正确的位置获取数据。
> 函数参数按如下规则进行识别：
>- **路径**中声明了相同参数的参数，是路径参数
>- 类型是（int、float、str、bool 等）**单类型**的参数，是**查询**参数
>- 类型是 Pydantic 模型**的参数，是**请求体


```python
from fastapi import FastAPI
from pydantic import BaseModel

class Item(BaseModel):
    name: str,
    description: str | None = None,
    price: float,
    tax: float | None = None

app = FastAPI()

@app.post('/user/{user_id}')
async def user_info(user_id: str, item: Item, q: str | None = None):
    pass
```


### 使用jsonable_encoder 将Pydantic模型转为JSON兼容的数据类型
```py
from fastapi.encoders import jsonable_encoder

json_compatible_item_data = jsonable_encoder(item)
```

### `sqlalchemy`