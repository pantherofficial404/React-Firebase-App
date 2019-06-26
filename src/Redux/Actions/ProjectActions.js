export const createProject = (project)=>{
    return(dispatch,getState,{getFirestore})=>{
        const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'panther',
      authorLastName: 'official',
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'createProject' ,project});
    }).catch(err => {
      dispatch({ type: 'createProjectError' }, err);
    });
    }
}