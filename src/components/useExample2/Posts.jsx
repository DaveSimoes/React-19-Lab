import { use, Suspense } from 'react';

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
};

const PostItems = () => {
  const posts = use(fetchPosts());

  return (
    <ul>
      {posts.map((post) => (
        <div key={post.id} className='bg-blue-50 shadow-md p-4 my-6 rounded-lg'>
          <h2 className='text-xl font-bold'>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </ul>
  );
};

const Posts = () => {
  return (
    <Suspense
      fallback={
        <h2 className='text-2xl text-center'>
          <span className='text-white'>Loading...</span>
        </h2>
      }
    >
      <PostItems />
    </Suspense>
  );
};

export { Posts as UseExample2 };
