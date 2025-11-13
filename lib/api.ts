export async function submitLead(data: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  interest?: string;
}) {
  const response = await fetch("/api/leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || "Failed to submit lead");
  }

  return response.json();
}

