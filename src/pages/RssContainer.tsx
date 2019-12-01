import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Rss } from './Rss'
import { actions } from './duck';

const mapStateToProps = (state) => {
    return ({
        isLoading: state.rss.isLoading,
        fetchError: state.rss.fetchError,
        rss: state.rss.rss,
    })
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(
        {
            getRss: actions.getRss,
            setLoading: actions.setLoading,
        },
        dispatch
    ),
});

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(Rss);