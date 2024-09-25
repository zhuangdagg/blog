// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import Playground from '../../components/playground/playground.vue'
import JsPlayground from '../../components/playground/JsPlayground.vue'
// 自定义样式
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('Playground', Playground)
    app.component('JsPlayground', JsPlayground)

    // 百度统计
    router.onAfterRouteChanged = (to) => {
      console.log(to, '--to')
      const _hml = window._hml
      if(typeof _hml != "undefined") {
        _hml.push(["_trackPageview", to])
      }
    }
  }
} satisfies Theme
