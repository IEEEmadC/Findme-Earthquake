import React, { Component } from 'react';
import searchYoutube from 'youtube-api-v3-search';
import LayoutVideo from '../layouts/layout_videos';
import { Text } from 'native-base';
import { connect } from 'react-redux';

function mapStateToProps(state) {    
    return {
        list: state.videos
    }

}

class VideosContainer extends Component {


    onPressCardVideo = (cardVideo) => {
        console.log(cardVideo);
    }

    render() {     
        return (
            <LayoutVideo
                onPressCardVideo={this.onPressCardVideo}
                videos={this.props.list}
            />
        );
    }
}

export default connect(mapStateToProps)(VideosContainer);