import React, { Component } from 'react';
import Layout from '../layouts/layout_news'
import { connect } from 'react-redux'

import FirebaseData from '../../../resources/data/firebaseData'
import YoutubeSearch from '../../../resources/data/youtubeSearch'

function mapStateToProps(state) {
    return {
        list: state.articles.articles
    }
}
class NewsContainer extends Component {
    async componentDidMount() {
        const article= await FirebaseData.getArticles();
        this.props.dispatch({
          type: 'GET_ARTICLES',
          payload:{
            articles: article
          }
        })
      }
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
