const API_URL = "http://127.0.0.1:4000"; // TODO: Read from .env file

const GET = async function (endpoint, { withAuthorization = false } = {}) {
  try {
    let authToken = localStorage.getItem("token");
    if (withAuthorization) {
      authToken = await getRefreshToken();
    }

    const response = await fetch(API_URL + endpoint, {
      headers: {
        "Content-Type": "application/json",
        ...(withAuthorization && {
          Authorization: `Bearer ${authToken}`,
        }),
      },
    });

    const responseData = await response.json();

    if (!response.ok) throw new Error(responseData.message);

    return responseData;
  } catch (error) {
    throw error;
  }
};

const POST = async function (
  endpoint,
  data,
  { withAuthorization = false } = {},
) {
  try {
    let authToken = localStorage.getItem("token");
    if (withAuthorization) {
      authToken = await getRefreshToken();
    }

    const response = await fetch(API_URL + endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(withAuthorization && {
          Authorization: `Bearer ${authToken}`,
        }),
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (!response.ok) throw new Error(responseData.message);

    return responseData;
  } catch (error) {
    throw error;
  }
};

const getRefreshToken = async function () {
  try {
    const response = await fetch(API_URL + "/auth", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();

    if (!response.ok) throw new Error(responseData.message);

    return responseData;
  } catch (error) {
    throw error;
  }
};
