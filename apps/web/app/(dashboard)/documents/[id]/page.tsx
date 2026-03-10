export default async function DocumentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <main>
      <h1>Document Detail</h1>
      <p>Document ID: {id}</p>
    </main>
  );
}
