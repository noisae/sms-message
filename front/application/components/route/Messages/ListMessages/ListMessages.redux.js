import { connect } from 'react-redux'

const mapStateToProps = ({ messageReducer: { messageCollection } , ownProps }) => {
  return {
    ...ownProps,
    messageCollection
  }
}

export default connect(mapStateToProps)
