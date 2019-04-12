import { connect } from 'react-redux';
import { makeGreetingText } from '../actions';
import Form from '../components/Form';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (userName) => dispatch(makeGreetingText(userName))
});

export default connect(
  null,
  mapDispatchToProps
)(Form);
