import {
  connect
} from 'react-redux'

import {
  setShowSortList,
  getData,
  setSendData,
  moreData,
  getDefault,
  setCategoryName
} from './Home'

import components from 'components/Home'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapActionCreators = {
  	setShowSortList,
    getData,
    setSendData,
    moreData,
    getDefault,
    setCategoryName
}

const mapStateToProps = (state) => ({
  showSortList: state.home.showSortList,
  data: state.home.data,
  sendData: state.home.sendData,
  more: state.home.more,
  cache: state.home.cache,
  category: state.home.category,
  citys: state.home.citys,
  categoryName: state.home.categoryName
})

export default connect(mapStateToProps, mapActionCreators)(components)
