import { connect } from 'react-redux';
import TitlePanel from '../components/TitlePanel';

const mapStateToProps = (state, ownProps) => ({
  title: state.greetingText,
});

export default connect(
  mapStateToProps,
)(TitlePanel);
