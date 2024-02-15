import axios from "axios";

import { envs } from "../config/envs.config.js";
import { OauthHelper } from "../helpers/oauth.helper.js";

export const oAuth = async (req, res, next) => {
  const request = {
    url: envs.OAUTH_ENDPOINT,
    method: "PUT",
    body: req.body,
  };

  const authHeader = OauthHelper.getAuthHeaderForRequest(request);

  axios
    .put(request.url, request.body, { headers: authHeader })
    .then(({ data }) => {
      const { code, message } = data;

      if (code === "003") {
        throw new Error(message);
      }

      return data;
    })
    .then((data) => {
      return res.json({
        status: true,
        message: "Add a message here",
        data,
      });
    })
    .catch((error) => {
      next(error);
    });
};
