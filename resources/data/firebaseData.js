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
         firebase.database().ref('/maps/pins').on('value', (childSnapshot)=>{
            callback(childSnapshot.val())
        });
    }
    static setPinsMaps(marker, region) {
        console.log('Se va a guardar un: '+marker);
        
        firebase.database().ref('/maps/pins/' + marker + '/').push(
            {
                latitude: region.latitude,
                longitude: region.longitude
            }
        );
    }
    static uploadImages(uid, uriImage) {
        firebase.storage().ref('users/' + uid + "/user").putFile(uriImage).then(uploadedFile => {
            console.log(uploadedFile);
        })
            .catch(err => {
                console.log("Error: " + error);

            });
    }
    // static uploadImagesContact(contacts){
    //     if (contacts.length > 0) {
    //         contacts.map((contact, index) => {
    //             firebase.storage().ref('users/' + uid + "/contact" + index).putFile(contact.image).then(uploadedFile => {
    //                 console.log(uploadedFile);
    //             }).catch(error => {
    //                 console.log("Error: " + error);

    //             });
    //         })
    //     }
    // }
}
module.exports = FirebaseData;
