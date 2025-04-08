import { Suspense } from "react";
import PostInfo from "./_components/post";

export default async function PostById({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <h1>detalhes do post</h1>
      <h2>Id: {id}</h2>

      <Suspense fallback={<h1 className="text-center mt-3">loading...</h1>}>
        <PostInfo id={id} />
      </Suspense>
    </div>
  );
}
