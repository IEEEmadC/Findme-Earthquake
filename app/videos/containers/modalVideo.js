import React, { Component } from 'react';
import { WebView,Text } from 'react-native';
import { connect } from 'react-redux'


{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/8Bq3u-mYEMs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}


// const makeHTML = (id) => {
//     return (`
//       <style>
//         .video {
//           position: relative;
//           padding-bottom: 56.25%;
//         }
//         iframe {
//           position: absolute;
//           left: 0;
//           top: 0;
//           right: 0;
//           bottom: 0;
//           width: 100%;
//           height: 100%;
//         }
//       </style>
//       <div class="video">
//         <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
//       </div>
//     `)
//   }

class CardVideo extends Component {

    render() {
        console.log(this.props.video.id);
        
        return (
            <WebView
                style={{ flex: 1 }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{ uri: "https://www.youtube.com/embed/"+this.props.video.id.videoId  }}
            />
        );
    }
}

function mapStateToProps(state){
    console.log("Estado");
    
    console.log ( "Est" +state.selectedVideo.selectedVideo);
    return({
        video: state.selectedVideo.selectedVideo
    })
}

export default connect(mapStateToProps)(CardVideo);