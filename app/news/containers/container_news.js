import React, { Component } from 'react';
import Layout from '../layouts/layout_news'
import { connect } from 'react-redux'

function mapStateToProps(state) {
    return {
        list: state.articles
    }
}
class NewsContainer extends Component {

    render() {
        return (
            <Layout
                onPressCardNew={this.onPressCardNew}
                news={this.props.list}
            ></Layout>
        );
    }
}

export default connect(mapStateToProps)(NewsContainer);