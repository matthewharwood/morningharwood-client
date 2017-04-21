/**
 * Created by matth on 4/20/2017.
 */
import { AuthProviders, AuthMethods } from "angularfire2";

export const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};
