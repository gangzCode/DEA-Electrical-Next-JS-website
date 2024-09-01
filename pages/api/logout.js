import {getIronSession} from "iron-session";
import {IRON_SESSION_COOKIE, IRON_SESSION_SECRET} from "../../services/constants";

export default async function GET(req, res)  {
    try {
        const session = await getIronSession(req, res, {
            password: IRON_SESSION_SECRET,
            cookieName: IRON_SESSION_COOKIE
        });
        await session.destroy();
        return res.status(200).json({message: "OK"});
    } catch (e) {
        console.error('Error destroying session', e);
        return res.status(500).json({message: 'An error occurred while destroying session'});
    }
}
