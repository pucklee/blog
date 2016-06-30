import {
  connect
} from 'react-redux'

import {
  setWth,
} from './Article'

import components from 'components/Article'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapActionCreators = {
  setWth,
}

const mapStateToProps = (state) => ({
  wth: state.article.wth,
})

export default connect(mapStateToProps, mapActionCreators)(components)
