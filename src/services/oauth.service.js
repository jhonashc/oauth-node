import axios from "axios";

import { envs } from "../config/envs.config.js";
import { OauthHelper } from "../helpers/oauth.helper.js";

const oAuth = async (createUserDto) => {
  const request = {
    url: envs.OAUTH_ENDPOINT,
    method: "PUT",
    body: createUserDto,
  };

  const authHeader = OauthHelper.getAuthHeaderForRequest(request);

  const { data } = await axios.put(request.url, request.body, {
    headers: authHeader,
  });

  const { code, message } = data;

  if (code === "003") {
    throw new Error(message);
  }

  return {
    status: true,
    message: "Add a message here",
    data,
  };
};

export { oAuth };
