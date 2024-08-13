# 语法



## 常用函数

### `all()`
> all() 函数用于判断给定的可迭代参数 iterable 中的所有元素是否都为 TRUE，如果是返回 True，否则返回 False。

```python
def all(iterable):
    for element in iterable:
        if not element:
            return False
    return True
```

### `itertools.pairwise()`
> 对象中获取连续的**重叠对**

```python
from itertools import pairwise

class Solution:
    def isArraySpecial(self, nums: List[int]) -> bool:
        return all(i%2 != j%2 for i,j in pairwise(nums))
```