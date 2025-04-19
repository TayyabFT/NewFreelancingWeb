import API_BASE_URL from "@/app/utils/apiconfig";
export async function sendResetPasswordEmail(email) {
  try {
    const response = await fetch(`${API_BASE_URL}/forgotpassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (response.status !== 200) {
      console.log(data.message);
      throw new Error(data.message || "Failed to send reset email");
    }

    return data; // return the success data
  } catch (error) {
    throw error;
  }
}

export async function verifyOtp(email, otp) {
  // console.log("Verifying OTP:", { email, otp });
  try {
    const response = await fetch(`${API_BASE_URL}/verifyotp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, otp }),
    });
    const data = await response.json();
    if (response.status != 200) {
      throw new Error(data.message || "OTP verification failed");
    }

    return data;
  } catch (error) {
    throw error;
  }
}

export async function changePasswordRequest(email, password, confirm_password) {
  try {
    const response = await fetch(`${API_BASE_URL}/afterforgot/${email}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        confirm_password,
      }),
    });

    console.log("Change password response status:", response.status);
    const data = await response.json();
    console.log("Change password response:", data);

    if (response.status !== 200) {
      throw new Error(data.message || "Change password request failed");
    }

    return data;
  } catch (error) {
    throw error;
  }
}
