import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
      <h1>Painel de administração</h1>
    </div>
  );
}
