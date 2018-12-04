import searchYoutube from 'youtube-api-v3-search';

class YoutubeSearch {

    static async getvideo(urlVideos){
        arrayvideos = [];
        urlVideos.map( async (url) =>{

            const options = {
                q: url,
                type: 'video'
            }            
            searchYoutube('AIzaSyArFvQD6p9fO4egyoDYNMpIkswGGa1whvU', options)
                    .then(result => { arrayvideos.push(result.items[0])} )
                    .catch(error => console.log(error))
        } )
        return arrayvideos;
    }

}

module.exports = YoutubeSearch;
