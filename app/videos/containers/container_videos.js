import React, { Component } from 'react';
import LayoutVideo from '../layouts/layout_videos';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        list: state.videos.videos
    }

}

class VideosContainer extends Component {
   
    render() {
        return (
            <LayoutVideo
                videos={this.props.list}
            />
        );
    }
}

export default connect(mapStateToProps)(VideosContainer);