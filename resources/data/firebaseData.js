import firebase from 'react-native-firebase'

class FirebaseData {

    static async  getVideo() {
        const wordsSnapshot = await firebase.database().ref('/videosYT/url').once('value');
        return wordsSnapshot.val()

    }

    static getVideos(callback) {
        firebase.database().ref('/videosYT/url').on('value',
            (snapshot) => {
                let articles = []
                if (snapshot.val()) {
                    articles = snapshot.val()
                }
                callback(articles)
            }
        )
    }
    static getArticles(callback) {
        firebase.database().ref('/articles').on('value', (snapshot) => {
            let articles = {}
            if (snapshot.val()) {
                articles = snapshot.val()
            }
            callback(articles)
        })
    }

}
module.exports = FirebaseData;
