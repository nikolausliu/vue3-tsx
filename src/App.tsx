import { defineComponent } from 'vue'
import Hello from '@/components/Hello.vue'

export default defineComponent({
  setup() {
    return () => (
      <div>
        <span>hello world</span>
        <Hello />
      </div>
    )
  },
})
