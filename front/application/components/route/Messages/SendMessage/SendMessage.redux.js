import { connect } from 'react-redux'

const mapStateToProps = ({ ownProps }) => ({
  ...ownProps
})

export default connect(mapStateToProps)
