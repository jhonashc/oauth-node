import crypto from "crypto";
import OAuth from "oauth-1.0a";

import { envs } from "../config/envs.config.js";

export class OauthHelper {
  static getAuthHeaderForRequest(request) {
    const oauth = OAuth({
      consumer: {
        key: envs.CONSUMER_KEY,
        secret: envs.CONSUMER_SECRET,
      },
      realm: envs.REALM,
      signature_method: "HMAC-SHA256",
      hash_function(base_string, key) {
        return crypto
          .createHmac("sha256", key)
          .update(base_string)
          .digest("base64");
      },
    });

    const authorization = oauth.authorize(request, {
      key: envs.TOKEN_KEY,
      secret: envs.TOKEN_SECRET,
    });

    return oauth.toHeader(authorization);
  }
}
