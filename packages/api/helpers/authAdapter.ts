import fs from "node:fs";

import jwt from "jsonwebtoken";

const privKey = fs.readFileSync("./keys/jwtRS256.key", "utf8");
const pubKey = fs.readFileSync("./keys/jwtRS256.key.pub", "utf8");

export const authAdapter = {
    sign: (payload: any) => {
        return jwt.sign(payload, privKey, {
            algorithm: "RS256",
            expiresIn: "1d",
        });
    },
    verify: (token: string) => {
        return jwt.verify(token, pubKey, {
            algorithms: ["RS256"],
        });
    },
};
