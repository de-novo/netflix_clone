import config from "../../config/index.js";
import jwt from "jsonwebtoken";
import { User as userModel } from "../../models/user.js";
import { AuthService } from "../../services/auth.js";
// 1. refreshToken 가지고있나?

// 2. 가지고있다                              //2. 없다

// 3. accessToken은 유효한가?                 //3. 로그아웃

// 4. accessToken 이유효하다 / 만료되었다

// 5. pass /  refreshToken 을 기반으로 토큰 재발급

const isReissueAccessToken = async (req, res, next) => {
    // console.log(req)
    console.log('isReissueAccessToken')
    if (req.user) {
        console.log('isReissueAccessToken accessToken 유효함')
        return next();
    }
    if (!req.cookies.R_AUTH) {
        console.log('not found refreshToken  plese login  (없음)')
        throw new Error(' plese login ' ); //not found refreshToken ' plese login ' (없
    }
    let AuthServiceInstance = new AuthService({ userModel });
    const refreshToken = req.cookies.R_AUTH;
    const { decodeSuccess, _id, Email, accessToken } = await AuthServiceInstance.reissueAccessToken(refreshToken);
    if (!decodeSuccess) {
        console.log('refresh token inValid (만료됨)')
        //refresh token inValid (만료됨)
        res.clearCookie("R_AUTH");
        throw new Error();
    } else {
        console.log('accessToken 재발급')
        return res.status(200).json({
            _id,
            Email,
            accessToken,
        });
    }
};
export { isReissueAccessToken };
