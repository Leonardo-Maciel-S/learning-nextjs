import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col item-center justify-center pt-72 text-center">
      <h1 className=" font-bold mb-9 text-6xl">Página 404 não encontrada!</h1>

      <p>Essa página que tentou acessar não existe</p>

      <Link href="/">Voltar para home</Link>
    </div>
  );
}
