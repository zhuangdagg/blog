# 接口

## `WebGLRenderingContext` webgl1渲染上下文

### `gl.drawArrays` 从数组数据渲染图元 [参考](https://juejin.cn/post/6992934014411620365)
```ts
const enum DrawMode {
    POINTS: gl.POINTS, // 表示绘制一系列的点，分别绘制在v0,v1,v2处

    LINES: gl.LINES, // 表示绘制一系列单独的线段，分别绘制在(v0,v1),(v2,v3),(v4,v5)
    LINE_STRIP: gl.LINE_STRIP, // 表示绘制一系列连续的线段，(v0,v1),(v1,v2),(v2,v3)...
    LINE_LOOP: gl.LINE_LOOP, // 表示绘制一个闭环的线段，(v0,v1),(v1,v2),(v2,v3)...(vn,v0)

    TRIANGLES: gl.TRIANGLES, // 表示绘制一系列单独的三角形，三角形的三个点分别是(v0,v1,v2),(v3,v4,v5)...
    TRIANGLE_STRIP: gl.TRIANGLE_STRIP, //  表示绘制一系列相连接的三角形(v0,v1,v2),(v2,v1,v3),(v2,v3,v4)...（注意点的顺序保持一致）
    TRIANGLE_FAN: gl.TRIANGLE_FAN, // 表示绘制一个以v0为圆心的扇形(v0,v1,v2),(v0,v2,v3),(v0,v3,v4)...
}

/**
 * @params first {number} 指定从哪个顶点开始绘制，这个参数决定了上面v0,v1,v2的调用起点，假如first值为1，则从v1开始往后算。
 * @params count {number} 指定绘制需要用到多少个顶点，即有多少个顶点参与绘制，多余的会被忽略。
 */
gl.drawArrays(mode: DrawMode, first: number, count: number)
```
![](/assets/capture/webgl_draw_arrays.png)

> [!TIP] 提示
> threejs > WebGLBufferRenderer > render