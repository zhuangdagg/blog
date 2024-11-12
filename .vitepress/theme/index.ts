// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import Playground from '../../components/playground/playground.vue'
import JsPlayground from '../../components/playground/JsPlayground.vue'
import wechatLink from '../../components/layouts/wechatLink.vue'
import HeroImage from '../../components/layouts/HeroImage.vue'
// 自定义样式
import './style.css'

// TODO: github action build error
// import '@akjs/components/style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      "home-hero-image": () => h(HeroImage),
      "nav-bar-content-after": () => h(wechatLink)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('Playground', Playground)
    app.component('JsPlayground', JsPlayground)

    // 百度统计
    router.onAfterRouteChanged = (to) => {
      if(typeof _hmt != "undefined") {
        console.log('to:'+to)
        _hmt.push(["_trackPageview", to])
      }
    }
  }
} satisfies Theme
