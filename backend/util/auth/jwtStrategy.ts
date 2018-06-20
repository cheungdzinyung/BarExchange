import * as passport from "passport";
import * as PassportJWT from "passport-jwt";
import config from "../../config";
import UsersService from "../../services/UsersService";

export default function(usersService: UsersService) {
  const strategy = new PassportJWT.Strategy(
    {
      secretOrKey: config.jwtSecret,
      jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    async (payload, done) => {
      const user = await usersService.get(payload.id);
      return user
        ? done(null, { id: user[0].users_id })
        : done(new Error("User not found"), null);
    }
  );

  passport.use(strategy);

  return {
    initialize: () => passport.initialize(),
    // tslint:disable-next-line:object-literal-sort-keys
    authenticate: () => passport.authenticate("jwt", config.jwtSession)
  };
}
