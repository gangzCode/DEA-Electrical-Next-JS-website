import User from "../../models/user_schema";
import dbConnect from "../../services/db_middleware";
import bcrypt from 'bcrypt';
import {generateJWT} from "../../services/jwt_service";
import {getIronSession} from "iron-session";
import {IRON_SESSION_COOKIE, IRON_SESSION_SECRET} from "../../services/constants";

export default async function POST(req, res) {
    try {
        const body = await req.body;
        await dbConnect();
        let user = await User.find({username: body.username});
        if (user.length === 0) {
            return res.status(401).json({success: false, message: "Username or Password is incorrect."});
        } else {
            const isPasswordValid = await bcrypt.compare(body.password, user[0].password);
            if (isPasswordValid) {
                const token = generateJWT({username: user[0].username})
                const session = await getIronSession(req, res, {
                    password: IRON_SESSION_SECRET,
                    cookieName: IRON_SESSION_COOKIE,
                    ttl: 21600
                });
                session.username = user[0].username;
                session.token = token;
                await session.save();
                return res.status(200).json({success: true, message: 'Login successful'});
            } else {
                return res.status(401).json({success: false, message: "Username or Password is incorrect."});
            }
        }
    } catch (e) {
        console.error('Error during login', e);
        return res.status(500).json({success: false, message: 'An error occurred during login'});
    }
}

// Use this to generate password
// const salt = await bcrypt.genSalt(10);
// body.password = await bcrypt.hash(body.password, salt);
