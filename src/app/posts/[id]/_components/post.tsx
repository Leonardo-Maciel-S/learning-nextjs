import { PostProps } from "../../page";

export default async function PostInfo({ id }: { id: string }) {
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const data: PostProps = await response.json();

  console.log(data);

  return (
    <div className="flex flex-col gap-2 p-4 bg-zinc-200 rounded-2xl mt-4">
      <h2 className="font-bold">{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
}
