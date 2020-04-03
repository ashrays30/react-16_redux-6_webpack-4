import React, { Component } from 'react';
import featureFlagHOC from './featureFlagHOC';

class ReduxSample extends Component {

    render() {
        return (
            <div>
                <h3>This page has example for redux store. Plese click the below button to see the change using store!!</h3>
                <div className="redux-container col-12">
                    <pre>Feature Flag value: { JSON.stringify(this.props.featureFlag) } </pre>
                </div>
            </div>
        );
    };
}

export default  featureFlagHOC(ReduxSample, 'VirtualNetworkFlag');
