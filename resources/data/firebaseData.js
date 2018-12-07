import firebase from 'react-native-firebase'

class FirebaseData {

    static async  getVideo() {
        const wordsSnapshot = await firebase.database().ref('/videosYT/url').once('value');
        return wordsSnapshot.val()

    }
    static async getArticles() {
        const articleSnapshot = await firebase.database().ref('/articles').once('value');
        return articleSnapshot.val()
    }
    static  getPinsMaps(callback) {
        // const pinSnapshot = await firebase.database().ref('/maps/pins').once('value');
         firebase.database().ref('/maps/pins').on('value', (childSnapshot)=>{
            // console.log(childSnapshot);
            callback(childSnapshot.val())
        });
        // return pinSnapshot.val()
    }
    static setPinsMaps(marker, region) {
        console.log(marker);
        
        firebase.database().ref('/maps/pins/' + marker + '/').push(
            {
                latitude: region.latitude,
                longitude: region.longitude
            }
        );
    }

}
module.exports = FirebaseData;
