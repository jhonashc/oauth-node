
export class OAuthController {
  constructor(oAuthService) {
    this.oAuthService = oAuthService;
  }

  oAuth = (req, res, next) => {
    const body = req.body;

    this.oAuthService
      .oAuth(body)
      .then((oAuthResponse) => res.status(201).json(oAuthResponse))
      .catch((error) => next(error));
  };
}
