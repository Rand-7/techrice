const BASE_URL = "https://team-portfolio-8u19.onrender.com/api";

export async function fetchAPI(endpoint) {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch");

    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function postAPI(endpoint, body) {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) throw new Error("Failed to send message");

    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
