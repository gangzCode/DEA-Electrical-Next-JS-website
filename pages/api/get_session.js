import {getIronSession} from "iron-session";
import {IRON_SESSION_COOKIE, IRON_SESSION_SECRET, JWT_SECRET} from "../../services/constants";
import {validateJWT} from "../../services/jwt_service";

export default async function GET(req, res) {
    try {
        const session = await getIronSession(req, res, {
            password: IRON_SESSION_SECRET,
            cookieName: IRON_SESSION_COOKIE
        });
        if (session && session.token && session.token.trim() !== '') {
            const validJWT = validateJWT(session.token);
            if (!validJWT || !validJWT.valid || validJWT.valid === false) {
                return res.json({});
            }
            return res.json(session);
        }
        return res.json(session);
    } catch (e) {
        console.error('Error during get session', e);
        return res.status(500).json({success: false, message: 'An error occurred during retrieval'});
    }
}
