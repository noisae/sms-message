import { connect } from 'react-redux'

const mapStateToProps = ({ messageCollection, ownProps) => ({
  ...ownProps,
  messageCollection
})

export default connect(mapStateToProps)
