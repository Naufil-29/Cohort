import type { NextFunction, Request, Response } from "express";
interface AuthRequest extends Request {
    userId?: string;
}
export declare const userMiddleware: (req: AuthRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export {};
//# sourceMappingURL=middleware.d.ts.map