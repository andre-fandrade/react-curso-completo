import { PostCard } from '../PostCard';

export const Posts = ({ posts }) => (

  <div className="posts">
    {/* Trabalhando com Arrays */}
    {posts.map(post => (
      <PostCard key={post.id}
        title={post.title}
        body={post.body}
        id={post.id}
        imagem={post.imagem}
      />
    ))}
  </div>
);