import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useContent(target) {
	const [content, setContent] = useState([]);
	const { firebase } = useContext(FirebaseContext);

	//call firestore, where the data is stored (check firebase docs for more info)
	//call collection to get a collection of 'target' which could be series or films
	useEffect(() => {
	 firebase
		.firestore()
		.collection(target)
		.get()
		.then((snapshot) => {
			const allContent = snapshot.docs.map((contentObj) => ({
				...contentObj.data(),
				docId: contentObj.id
			}));
			setContent(allContent);
		})
		.catch((error) => {
			console.error(error.message);
		});
	}, [target, firebase]);

	return { [target]: content };
}
