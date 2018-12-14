import React, { Component } from 'react';
import Layout from '../layouts/layout_news'
import { connect } from 'react-redux'




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
function mapStateToProps(state) {
    return {
        list: state.articles.articles
    }
}

export default connect(mapStateToProps)(NewsContainer);
