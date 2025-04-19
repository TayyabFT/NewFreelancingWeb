import API_BASE_URL from "@/app/utils/apiconfig";

export async function RegisterUser(FullName, Email, Password) {
  const response = await fetch(`${API_BASE_URL}/userRegister`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ FullName, Email, Password }),
  });

  if (!response.ok) {
    throw new Error("Failed to SignUp.");
  }

  return response.json();
}
