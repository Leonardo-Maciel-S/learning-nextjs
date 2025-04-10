import Link from "next/link";

export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface ResponseProps {
  posts: PostProps[];
}

export default async function Post() {
  const response = await fetch("https://dummyjson.com/post?limit=5", {
    cache: "force-cache",
    next: {
      revalidate: 60,
    },
  });
  const data: ResponseProps = await response.json();

  return (
    <div>
      <ul className="flex flex-col gap-5 p-4">
        {data.posts.map((post) => (
          <li
            key={post.id}
            className="flex flex-col gap-2 p-4 bg-zinc-200 rounded-2xl"
          >
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
            <Link href={`/posts/${post.id}`} className="text-blue-500">
              Ver mais
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
