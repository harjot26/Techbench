import axios from "axios";

export default function formatError(error: any) {
  if (axios.isAxiosError(error)) {
    const axiosError = {
      code: error?.code,
      config: error?.config,
      message: error?.message,
      name: error?.name,
      request: error?.request,
      response: error?.response
        ? {
            config: error.response?.config,
            headers: error.response?.headers,
            data: error.response?.data,
            request: error.response?.request,
            status: error.response?.status,
            statusText: error.response?.statusText,
          }
        : {},
    };
    console.log("error:", axiosError);
    return error;
  } else {
    console.log("error:", error);
    return error;
  }
}
