export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="p-4 bg-white shadow text-xl font-bold">
        Insta_Clone
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
