
import {
  createApp, h, render, createVNode,
  defineComponent,
  defineAsyncComponent,
  resolveComponent,
  resolveDynamicComponent,
  resolveDirective,
  withDirectives
} from 'vue'

const app = createApp(<AppContainer />)

/**
 应用配置
 */
app.config.errorHandler = function (err, vm, info) {

};

app.config.warnHandler = function (msg, vm, trace) {
  // `trace` 是组件的继承关系追踪

};

app.config.globalProperties.$http = {};
app.config.globalProperties.$config = {};

app.config.optionMergeStrategies.hello = (parent, child, vm) => {
  return `hello,${child}`
};
app.mixin({ hello: 'Vue' });

app.config.isCustomElement = (tag) => tag.startsWith('icon-');

/**
 * 应用api
 */

app.component('MyComponent', <MyComponent />)

app.directive('Api', {
  created(el, binding, vnode) {
    // el : 指令绑定到的元素。这可用于直接操作 DOM。
    /*
    binding: { 
      instance：使用指令的组件实例。
      value：传递给指令的值。例如，在 v-my-directive="1 + 1" 中，该值为 2。
      oldValue：先前的值，仅在 beforeUpdate 和 updated 中可用。值是否已更改都可用。
      arg：参数传递给指令 (如果有)。例如在 v-my-directive:foo 中，arg 为 "foo"。
      modifiers：包含修饰符 (如果有) 的对象。例如在 v-my-directive.foo.bar 中，修饰符对象为 {foo: true，bar: true}。
      dir：一个对象，在注册指令时作为参数传递。例如，在以下指令中
    }
    */
  },
  beforeMount(el, binding, vnode, prevVNode) { },
  mounted(el, binding, vnode, prevVNode) { },
  beforeUpdate(el, binding, vnode, prevVNode) { },
  updated(el, binding, vnode, prevVNode) { },
  beforeUnmount(el, binding, vnode, prevVNode) { },
  unmounted(el, binding, vnode, prevVNode) { },
});

app.mount('#app');
app.unmount('#app');
app.provide('obj', {})

app.use((app, options) => {

});

/**
 * 全局api
 */

const vNode = h('div', {}, ['some text', h('h1', 'header')])
//  createVNode 与 h 功能类似
render(vnode, document.createElement('div'))

const HelloWorld = defineComponent({
  setup() {

  }
})

const AsyncHelloWorld = defineAsyncComponent(() => import('./components/HelloWorld.vue'))

/*
  只能在 render 或 setup 函数中使用

  resolveComponent, 返回一个 Component。如果没有找到，则返回 undefined。
  resolveDynamicComponent: 允许使用与 <component :is=""> 相同的机制来解析一个 component。
  resolveDirective,

  withDirectives 允许将指令应用于 VNode。返回一个包含应用指令的 VNode。

  */

/**
 * 选项
 */
{
  data(){
    return {}
  },
  props: {

  },
  computed: {

  },
  methods: {

  },
  watch: {

  },
  emits: [],
    directives{
    'focus': {

    }
  },
  components: { },
  setup(props, content){
    return {}
  },
    extends: MyComponent,
    mixins: [],

  }

/**
 * 实例property
 * $data $options $refs $prop $attrs $el $parent $root $slots
 */

/**
 * 实例方法
 * $watch $emit $forceUpdate $nextTick
 */

/**
 * 指令
 * v-text v-html v-show v-if
 */
