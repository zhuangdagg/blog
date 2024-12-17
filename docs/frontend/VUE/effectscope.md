# effectscope API
> [RFC](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0041-reactivity-effect-scope.md)

## 定义
```ts
/**
 * @param detached 阻断和父级的联系
 */
function effectScope(detached?: boolean): EffectScope

interface EffectScope {
    run<T>(fn: () => T): T | undefined  // 如果作用域不活跃就为 undefined
    stop(): void
}
```

```ts
import { effectScope } from 'vue'

let nestedScope, childScope

const parentScope = effectScope()

parentScope.run(() => {
    const doubled = computed(() => cnt.value * 2)

    nestedScope = effectScope(true /* detached */) // 与父级断开链接

    nestedScope.run(() => {
        watch(doubled, () => {})
    })

    // 父级断开监听也会断开
    childScope = effectScope()

    childScope.run(() => {
        watch(doubled, () => {})
    })

    watchEffect(() => {

    })
})

// 停止 parentScope、childScope 监听
parentScope.stop()

// 停止 nestedScope 监听
nestedScope.stop()
```

## onScopeDispose
> 停止监听时触发改函数onScopeDispose，作用类似onUnmounted

## 性能提升
举例一：组件内监听鼠标事件，多个组件就会添加多个监听，增加性能成本，可使用EffectScope优化

```ts
function useMouse() {
    const x = ref(0), y = ref(0)

    function handler(e) {}

    window.addEventListener('mousemove', handler)

    onScopeDispose(() => window.removeEventListener('mousemove', handler))

    return { x, y }
}

function createSharedComposable(composable) {
    let subscribeNum = 0
    let state, scope

    const dispose = () => {
        if(scope && --subscribeNum <=0 ) {
            scope.stop()
            state = scope = null
        }
    }

    return (...args) => {
        subscribeNum++
        if(!state) {
            scope = effectScope()
            state = scope.run(() => composable(...args))
        }
        onScopeDispose(dispose)
        return state
    }
}

const useSharedMouse = createSharedComposable(useMouse)

export default useSharedMouse

```

## 状态管理
```ts useGlobalState
// useGlobalState
import { effectScope } from '@vue/composition-api'

export default function useGlobalState(run) => {
    let isChange = false
    let state
    const scope = effectScope(true)

    return () => {
        // 防止重复触发
        if(!isChange) {
            state = scope.run(run)
            isChange = true
        }
        return state
    }
}

export function useGlobalState(() => {
    const cnt = ref(0)
    const increment = () => {
        cnt.value++
    }
    return { cnt, increment }
})
```

