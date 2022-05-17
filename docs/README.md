# 支持tsx

需要vite官方插件[@vitejs/plugin-vue-jsx](https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx)，跟着文档走就好了。这个插件基于[@vue/babel-plugin-jsx](https://github.com/vuejs/babel-plugin-jsx)，所以传入的选项需要参考

```sh
pnpm add @vitejs/plugin-vue-jsx -D
```

```ts
// vite.config.ts
import vueJsx from '@vitejs/plugin-vue-jsx'

export default {
  plugins: [
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    })
  ]
}
```

在`main.ts`里引入`App.tsx`代替`App.vue`，这里`.tsx`后缀名可以省略。

```tsx
// App.tsx
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return () => <div>hello world</div>
  }
})
```