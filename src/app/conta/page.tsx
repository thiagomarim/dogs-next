import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minha conta",
};

export default async function ContaPage() {
  return (
    <main>
      <h1>Conta</h1>
    </main>
  );
}
