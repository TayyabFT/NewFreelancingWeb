import API_BASE_URL from "@/app/utils/apiconfig";

export const saveBotdata = async (botData) => {
  console.log("Saving bot data:", botData);
  alert("Clicked save button");

  try {
    const response = await fetch(`${API_BASE_URL}/createBot`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(botData),
    });

    if (response.ok) {
      alert("Bot created successfully!");
      return response; // return response for further handling
    } else {
      const errorData = await response.json();
      console.log("Error: " + errorData.error);
      return response;
    }
  } catch (error) {
    console.error("Error saving bot data:", error);
    throw error; // optionally re-throw for external error handling
  }
};
