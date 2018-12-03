import searchYoutube from 'youtube-api-v3-search';

class YoutubeSearch {

    static async getvideo(urlVideos){
        arrayvideos = [];
        urlVideos.map( async (url) =>{

            let options = {
                q: url,
                type: 'video'
            }
            let result = await searchYoutube('AIzaSyArFvQD6p9fO4egyoDYNMpIkswGGa1whvU',options);
            if(result){
                console.log(resul.items[0]);
                arrayvideos.push(result.items[0])
            }
            console.log("resultado");
            console.log(result);
            
            

            // searchYoutube('AIzaSyArFvQD6p9fO4egyoDYNMpIkswGGa1whvU', this.options)
            //         .then(result => { arrayvideos.push(result.items[0])} )
            //         .catch(error => console.log(error))
        } )
        console.log(arrayvideos);
        
        return arrayvideos;
    }

}

module.exports = YoutubeSearch;
