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

# types

新建`src/types`文件夹，这里用来管理我们的全局声明文件。

首先把`env.d.ts`移动到这个文件夹内，这个文件夹是vite自带的`.vue`文件的模块扩展声明文件，我们如果所有代码都用tsx写的话，这个文件其实可以不用了。

再新建`index.d.ts`，这里我们声明一些全局的类型，全局声明的类型可以在整个项目的任何地方使用，而不用导入。需要注意，**全局声明文件不能包含`import`和`export`，否则就不是全局声明文件了**。

```ts
// src/types/index.d.ts
type Id = number | string
type NullableId = Id | null
```

```ts
// App.tsx
const id: Id = 1 // 不需要import Id这个类型，可以直接用
```

# vite配置路径别名

```ts
// vite.config.ts
import path from 'path'

const resolve = (dir: string) => path.resolve(__dirname, '.', dir)

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve('src')
    }
  }
})
```

上面的代码会报错，首先`path`是node模块，需要安装node的类型：

```sh
pnpm add @types/node -D
```

然后需要在`tsconfig.node.json`里把`compilerOptions.allowSyntheticDefaultImports`字段设置为true（没有这个字段需要自己加上），因为`path`模块里是没有默认导出的。我这里用的vite版本是2.9.9，以前用vite启动的时候是没有`tsconfig.node.json`的，不知道从哪个版本开始改的，以前的配置是不一样的，这个需要注意一下。

