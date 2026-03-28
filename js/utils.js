const API_URL = "http://localhost:4000"; // TODO: Read from .env file

const GET = async function (endpoint, { withAuthorization = true } = {}) {
  try {
    let authToken = "";
    if (withAuthorization) {
      authToken = await getSessionToken();
    }

    const response = await fetch(API_URL + endpoint, {
      headers: {
        "Content-Type": "application/json",
        ...(withAuthorization && {
          Authorization: `Bearer ${authToken}`,
        }),
      },
      credentials: "include",
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
  { withAuthorization = true } = {},
) {
  try {
    let authToken = "";
    if (withAuthorization) {
      authToken = await getSessionToken();
    }

    const response = await fetch(API_URL + endpoint, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        ...(withAuthorization && {
          Authorization: `Bearer ${authToken}`,
        }),
      },
      credentials: "include",
    });

    const responseData = await response.json();

    if (!response.ok) throw new Error(responseData.message);

    return responseData;
  } catch (error) {
    throw error;
  }
};

const PUT = async function (endpoint, data, { withAuthorization = true } = {}) {
  try {
    let authToken = "";
    if (withAuthorization) {
      authToken = await getSessionToken();
    }

    const response = await fetch(API_URL + endpoint, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        ...(withAuthorization && {
          Authorization: `Bearer ${authToken}`,
        }),
      },
      credentials: "include",
    });

    const responseData = await response.json();

    if (!response.ok) throw new Error(responseData.message);

    return responseData;
  } catch (error) {
    throw error;
  }
};

const DELETE = async function (endpoint, { withAuthorization = true } = {}) {
  try {
    let authToken = "";
    if (withAuthorization) {
      authToken = await getSessionToken();
    }

    const response = await fetch(API_URL + endpoint, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...(withAuthorization && {
          Authorization: `Bearer ${authToken}`,
        }),
      },
      credentials: "include",
    });

    let responseData = null;

    try {
      responseData = await response.json();
    } catch {
      responseData = null;
    }

    if (!response.ok) {
      throw new Error(responseData?.message || `HTTP ${response.status}`);
    }

    return responseData;
  } catch (error) {
    throw error;
  }
};

const getSessionToken = async function () {
  try {
    const response = await fetch(API_URL + "/auth", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const responseData = await response.json();

    if (!response.ok) throw new Error(responseData.message);

    // Extraer el userId del token JWT y almacenarlo en localStorage
    const encryptedToken = responseData.accessToken.split(".")[1];
    const decryptedToken = JSON.parse(atob(encryptedToken));
    localStorage.setItem("userId", decryptedToken.id);

    return responseData.accessToken;
  } catch (error) {
    localStorage.removeItem("userId");
    window.location.href = "/html/login.html";
    throw error;
  }
};
