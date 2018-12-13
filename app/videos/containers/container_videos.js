import React, { Component } from 'react';
import searchYoutube from 'youtube-api-v3-search';
import LayoutVideo from '../layouts/layout_videos';
import YoutubeSearch from '../../../resources/data/youtubeSearch'
import FirebaseData from '../../../resources/data/firebaseData'
import { Text } from 'native-base';
import { connect } from 'react-redux';

function mapStateToProps(state) {  
    console.log(state);
          
    return {
        list: state.videos.videos
    }

}

class VideosContainer extends Component {
    async componentWillMount() {
        const v = await FirebaseData.getVideo();
        const y = await YoutubeSearch.getvideo(v);
    
        this.props.dispatch({
          type: 'GET_VIDEOS',
          payload:{
            videos: y
          }
        })
      }
      
    onPressCardVideo = (cardVideo) => {
        
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