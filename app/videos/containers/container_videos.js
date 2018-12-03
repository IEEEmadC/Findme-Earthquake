import React, { Component } from 'react';
import searchYoutube from 'youtube-api-v3-search';
import LayoutVideo from '../layouts/layout_videos';
import { Text } from 'native-base';
import { connect } from 'react-redux';

function mapStateToProps(state) {

    console.log("en el state" + state);
    
    return {
        list: state.videos
    }

}

class VideosContainer extends Component {


    onPressCardVideo = (cardVideo) => {
        console.log(cardVideo);
    }

    render() {
        console.log(this.props);
        
        // const { videos } = 

        return (
            <LayoutVideo
                onPressCardVideo={this.onPressCardVideo}
                videos={this.props.list}
            />
        );
        // if (0 > 1) {
           
        // } else {
        //     //
        //     return (
        //         <Text>Cargando... </Text>
        //     );
        // }
    }
}

export default connect(mapStateToProps)(VideosContainer);