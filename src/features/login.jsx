import API_BASE_URL from "@/app/utils/apiconfig";

export async function loginUser(Email, Password) {
  const response = await fetch(`${API_BASE_URL}/userLogin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ Email, Password }),
  });

  if (!response.ok) {
    throw new Error("Failed to log in. Please check your credentials.");
  }

  const data = await response.json();
  localStorage.setItem("UserID", data.user.UserID); // Save userID in localStorage
  return data;
}
