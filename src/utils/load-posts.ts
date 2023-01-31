import fetch from 'cross-fetch';

export async function loadPosts() {
	const postsReponse = fetch('https://jsonplaceholder.typicode.com/posts');
	const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

	const [posts, photos] = await Promise.all([postsReponse, photosResponse]);

	const postsJson = await posts.json();
	const photosJson = await photos.json();

	const postsAndPhotos = postsJson.map((post: string[], index: number) => {
		return { ...post, cover: photosJson[index].url };
	});

	return postsAndPhotos;
}
