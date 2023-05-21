import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ params }: LoaderArgs) => {
  return json({ slug: params.slug });
};

export default function PostSlug() {
  const { slug } = useLoaderData<typeof loader>();
  return (
    <main className="mx-auto max-w-4xl">
      <h1 id="content">
        Here are my: {slug}
      </h1>
    </main>
  );
}