import jwt from "jsonwebtoken";
const JWT_PASSWORD = "Brainly2908";
export const userMiddleware = (req, res, next) => {
    const header = req.headers["authorization"];
    if (!header) {
        return res.status(403).json({
            message: "Authorization header missing"
        });
    }
    try {
        const decoded = jwt.verify(header, JWT_PASSWORD);
        req.userId = decoded.id; // ✅ No @ts-ignore needed
        next();
    }
    catch (error) {
        res.status(403).json({
            message: "Invalid token"
        });
    }
};
//# sourceMappingURL=middleware.js.map