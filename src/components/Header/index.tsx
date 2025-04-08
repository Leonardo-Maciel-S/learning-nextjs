import Link from "next/link";

export default function Header() {
  return (
    <header className="flex px-2 py-4 bg-zinc-900 text-white">
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
        <div>NextJS</div>

        <nav>
          <ul className="flex items-center justify-center gap-2">
            <li>
              <Link href="/">home</Link>
            </li>

            <li>
              <Link href="/posts">Post</Link>
            </li>

            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
