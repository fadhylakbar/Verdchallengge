import axios from "axios";

const baseURL = "https://gorest.co.in/public/v2/users"

const ApiService = () => {
  const defaultOptions = {
    baseURL,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      crossorigin: true,
    },
  };

  const instance = axios.create(defaultOptions);

  // instance.interceptors.request.use(async (request) => {
  //   const session: string = await getCookies("_token");
  //   if (session) {
  //     request.headers.Authorization = `Bearer ${session}`;
  //   }
  //   return request;
  // });

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response) {
        // Check if the error status is 500 and display an alert
        if (error.response.status === 500) {
          alert("500 internal server error. Please try again later.");
        } else {
          alert(error.response.data.message ?? error.response.data.msg);
        }
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export default ApiService();
