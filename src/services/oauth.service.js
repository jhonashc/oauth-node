import axios from "axios";

import { envs } from "../config/envs.config.js";
import { CustomError } from "../errors/custom.error.js";
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
    throw CustomError.badRequest(message);
  }

  return {
    status: true,
    data,
  };
};

export { oAuth };
