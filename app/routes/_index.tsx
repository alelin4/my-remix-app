import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Link } from "@remix-run/react";


export const loader = async () => {
  return json({
    posts: [
      {
        slug: "this is my first post",
        title: "My First Post",
      },
      {
        slug: "this is my first post",
        title: "Post nr:2",
      },
    ],
  });
};

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <main>
      <div id="startText">
        <h1>Welcome to Remix</h1>
  <p><Link
    to="/post"
    className="text-xl text-blue-600 underline"
  >
    Blog Post</Link></p>
</div>
      
    </main>
  );
}
