// import React, { Component } from 'react';
// import Avatar from '../../components/Avart'
// import ImagePicker from 'react-native-image-picker';
// import firebase from 'react-native-firebase';

// const url = 'https://media.aweita.larepublica.pe/678x508/aweita/imagen/2018/02/08/noticia-persona-positiva.png'
// class ModalExample extends Component {
//     constructor(props) {
//         super(props)
//         arrayContacts = []
//         this.state = {
//             name:'',
//             number:'',
//             modalUserVisible: false,
//             avatarSource: url
//         }
//     };
//     updateToFirebase = () => {
//         alert('Contacto Actualizado');
        
//     }
//     onPressEdit = () => {
//         Alert.alert('Editar', "¿Está seguro de guardar los cambios?",
//             [
//                 { text: 'Cancel' },
//                 { text: 'OK', onPress: () => this.updateToFirebase() }
//             ])
//         this.uploadImage(this.state.avatarSource,"imagenPrueba")
//         .then(()=>{
//             alert("Bien hecho")
//         }).catch((error)=> alert(error))
//     }
//     onPressButton = () => {
//         ImagePicker.showImagePicker(options, (response) => {

//             if (response.didCancel) {
//             } else if (response.error) {
//             } else {
//                 const source = response.uri;
//                 this.setState({
//                     avatarSource: source,
//                 });
//             }
//         });
//         alert(this.state.avatarSource)

//     }
// setModalProfileVisible(visible) {
//     this.setState({ modalEditVisible: visible });
// }
// onPressEditButton = () => {
//     this.setState({
//         modalUserVisible: !this.state.modalUserVisible
//     })
// }
// updateToFirebase = () => {
//     alert('Contacto Actualizado');
    
// }
// onPressEdit = () => {
//     Alert.alert('Editar', "¿Está seguro de guardar los cambios?",
//         [
//             { text: 'Cancel' },
//             { text: 'OK', onPress: () => this.updateToFirebase() }
//         ])
//     this.uploadImage(this.state.avatarSource,"imagenPrueba")
//     .then(()=>{
//         alert("Bien hecho")
//     }).catch((error)=> alert(error))
// }
//     //Upload image
//     uploadImage=async(uri,imageName)=>{
//         const response=await fetch(uri);
//         const blob= await response.blob();
//         var ref = firebase.storage().ref.child("images/"+imageName)
//         return ref.put(blob)
//     }
//     componentWillMount() {
//         StatusBar.setHidden(false)

//     }
//     render() {

//         return (
//             <Container >

            
//             </Container>
//         )
//     }
// }
// export default ModalExample;