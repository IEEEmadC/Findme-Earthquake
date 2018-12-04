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
    static async getPinsMaps() {
        const pinSnapshot = await firebase.database().ref('/maps').once('value');
        return pinSnapshot.val()
    }

}
module.exports = FirebaseData;
