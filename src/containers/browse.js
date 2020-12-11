import React, { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { Header, Loading } from '../components';

export function BrowseContainer({ slides }) {
	const [profile, setProfile] = useState({});
	const [loading, setLoading] = useState(true);
	const {firebase} = useContext(FirebaseContext);
	const user = firebase.auth().currentUser || {};

	useEffect(() => {
		console.log('profile', profile);
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, [profile, profile.displayName]);

	return profile.displayName ? (
		<>
			{loading ? (
				<Loading src={user.photoURL} />
			) : (
				<Loading.ReleaseBody />
			)}
			<Header src="joker1">
				<Header.Feature>
					<Header.Text></Header.Text>
				</Header.Feature>
			</Header>
		</>
	) : (
		<SelectProfileContainer user={user} setProfile={setProfile}/>
	);
}
