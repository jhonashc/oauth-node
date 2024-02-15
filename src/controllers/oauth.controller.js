import * as oAuthService from "../services/oauth.service.js";

const oAuth = (req, res, next) => {
  const body = req.body;

  oAuthService
    .oAuth(body)
    .then((oAuthResponse) => res.json(oAuthResponse))
    .catch((error) => next(error));
};

export { oAuth };
