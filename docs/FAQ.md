- 官网说【如果端口已经被使用，Vite 会自动尝试下一个可用的端口】，但是实际遇到过3000端口被占用，vite仍然启动在3000端口的情况，怎么解决？

package.json的scripts字段加个`--host`参数`"dev": "vite --host"`就好了，不过我不知道这是为什么。

- SFC的script setup写法，定义的变量如果只在template中使用，会触发`@typescript-eslint/no-unused-vars`校验规则报错，但是如果把这个规则off掉，又无法校验SFC外的未使用的变量的情况了，怎么解决？