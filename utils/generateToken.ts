import jwt from "jsonwebtoken";

import { Response } from "express";

const generateToken = (res: Response, userId: string) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "4h",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 4 * 60 * 60 * 1000,
  });
};

export default generateToken;
