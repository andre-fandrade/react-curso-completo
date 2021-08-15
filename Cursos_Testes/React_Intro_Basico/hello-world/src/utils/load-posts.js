export const loadPosts = async () => {

  const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
  const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

  const [posts, photos] = await Promise.all([postsResponse, photosResponse]);
  //console.log(posts);

  const postsJson = await posts.json();
  const photosJson = await photos.json();
  
  //console.log(postsJson.map(p => p.id + 'OI'));

  // Isso se chama ziper, pegar dentro de um array informações para,
  // se juntar a outro.
  return (
    postsJson.map((posts, index) => {
      return { ...posts, imagem: photosJson[index].url }
    })
  )


}