import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchFeatureFlag } from '../../actions/sample-action';

function featureFlagHOC(WrapComponent, featureFlagName) {

    class featureWraper extends Component {
        componentDidMount() {
            this.props.actions.fetchFeatureFlag(featureFlagName);
        }

        render() {
            return (
                <WrapComponent featureFlag={this.props.featureFlag} />
            );
        };
    }

    const mapStateToProps = state => ({
        ...state
    });

    const mapDispatchToProps = dispatch => ({
        actions: bindActionCreators({ fetchFeatureFlag }, dispatch)
    });

    return connect(mapStateToProps, mapDispatchToProps)(featureWraper);

}

export default featureFlagHOC;