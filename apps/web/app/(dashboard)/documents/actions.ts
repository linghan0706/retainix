"use server";

export async function uploadDocumentAction(formData: FormData) {
  const title = String(formData.get("title") ?? "Untitled");
  return { id: "doc_demo", title, status: "queued" };
}
