import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'article',
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Article = require('./Container').default
      const reducer = require('./Article').default

      injectReducer(store, {
        key: 'article',
        reducer
      })

      /*  Return getComponent   */
      cb(null, Article)

      /* Webpack named bundle   */
    }, 'Article')
  }
})
