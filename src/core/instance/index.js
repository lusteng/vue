import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

// 定义vue构造函数
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // 初始化参数
  this._init(options)
}

// 混入_init函数
initMixin(Vue)

stateMixin(Vue)

eventsMixin(Vue)

lifecycleMixin(Vue)

renderMixin(Vue)

export default Vue
