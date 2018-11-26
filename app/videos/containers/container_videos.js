import React, { Component } from 'react';
// import Layout from '../layouts/layout_videos'
import { WebView } from 'react-native';
import searchYoutube from 'youtube-api-v3-search';
import LayoutVideo from '../layouts/layout_videos';
import { Text } from 'native-base';


class VideosContainer extends Component {

    constructor(props) {
        super(props);
        arrayvideos = []
        busqueda = ['https://www.youtube.com/watch?v=tpRRGCOb5hQ', 'https://www.youtube.com/watch?v=XnkRA_DnFgY', 'https://www.youtube.com/watch?v=8XRSnYzewes']
        this.options = {
            q: '',
            type: 'video'
        },
            this.state = {
                videos: arrayvideos,
            }
    }
    componentWillMount() {
        busqueda.map(query => {
            this.options.q = query
            searchYoutube('AIzaSyArFvQD6p9fO4egyoDYNMpIkswGGa1whvU', this.options)
                .then(result => {
                    //arrayvideos.push(result.items[0].snippet)
                    arrayvideos.push(result.items[0])
                    this.setState(
                        {
                            videos: arrayvideos,
                        }
                    )
                }
                )
                .catch(error => console.log(error))
        })
    }

    onPressCardVideo = (cardVideo)=>{
        console.log(cardVideo);
        //alert("bo00000000000000000");

    }
    
    render() {
        const { videos } = this.state
        if (videos.length > 1) {
            return (
                <LayoutVideo 
                    onPressCardVideo={this.onPressCardVideo}
                    videos={videos} 
                />
            );
        } else {
            //
            return (
                <Text>Cargando... </Text>
            );
        }
    }
}

export default VideosContainer;