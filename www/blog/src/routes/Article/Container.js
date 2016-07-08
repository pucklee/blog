import {
  connect
} from 'react-redux'

import {
  getData,
} from './Article'

import components from 'components/Article'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapActionCreators = {
  getData,
}

const mapStateToProps = (state) => ({
  data: state.article.data,
})

export default connect(mapStateToProps, mapActionCreators)(components)
