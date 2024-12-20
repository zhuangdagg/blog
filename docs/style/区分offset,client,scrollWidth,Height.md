# 区分offset,client,scrollWidth,Height

## offsetWidth/offsetHeight = contain + padding + border (包括 边的尺寸)
> 效果与 `e.getBoundingClientRect()` 相同

## clientWidth / clientHeight = contain + padding‘

## scrollWidth /scrollHeight = contain + padding + 溢出内容的尺寸