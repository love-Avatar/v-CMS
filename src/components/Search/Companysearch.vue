<script>
export default {
  props: {
    opt: {
      type: Object,
      required: true
    }
  },
  render(h) {
    if (this.opt.type === 'input') {
      return h('input', {
        attrs: {
          placeholder: this.opt.label,
          id: this.opt.label
        },
        domProps: {
          innerHTML: 'asdf'
        }
      })
    }
    if (this.opt.type === 'multiple') {
      return h('select', {
        attrs: {
          placeholder: this.opt.label,
          id: this.opt.label
        },
        domProps: {
          innerHTML: 'asdfghjkl;'
        }
      })
    }
    if (this.opt.type === 'radio') {
      return h('select', {
        attrs: {
          placeholder: this.opt.label,
          id: this.opt.label
        },
        domProps: {
          innerHTML: 'asdfasdfa'
        }
      })
    }
    if (this.opt.type === 'time') {
      return h('input', {
        domProps: {
          innerHTML: 'asdfasdfa'
        }
      })
    }
  }
}

// {
//   // 和`v-bind:class`一样的 API
//   'class': {
//     foo: true,
//     bar: false
//   },
//   // 和`v-bind:style`一样的 API
//   style: {
//     color: 'red',
//     fontSize: '14px'
//   },
//   // 正常的 HTML 特性
//   attrs: {
//     id: 'foo'
//   },
//   // 组件 props
//   props: {
//     myProp: 'bar'
//   },
//   // DOM 属性
//   domProps: {
//     innerHTML: 'baz'
//   },
//   // 事件监听器基于 `on`
//   // 所以不再支持如 `v-on:keyup.enter` 修饰器
//   // 需要手动匹配 keyCode。
//   on: {
//     click: this.clickHandler
//   },
//   // 仅对于组件，用于监听原生事件，而不是组件内部使用 `vm.$emit` 触发的事件。
//   nativeOn: {
//     click: this.nativeClickHandler
//   },
//   // 自定义指令。注意事项：不能对绑定的旧值设值
//   // Vue 会为您持续追踪
//   directives: [
//     {
//       name: 'my-custom-directive',
//       value: '2',
//       expression: '1 + 1',
//       arg: 'foo',
//       modifiers: {
//         bar: true
//       }
//     }
//   ],
//   // Scoped slots in the form of
//   // { name: props => VNode | Array<VNode> }
//   scopedSlots: {
//     default: props => createElement('span', props.text)
//   },
//   // 如果组件是其他组件的子组件，需为插槽指定名称
//   slot: 'name-of-slot',
//   // 其他特殊顶层属性
//   key: 'myKey',
//   ref: 'myRef'
// }
</script>
<style lang="scss" scoped>
input {
  height: 30px;
  line-height: 30px;
}
select {
  width: 200px;
}
</style>
