import jwt from "jsonwebtoken";

// Creates a token that encodes the user's ID, signed with our secret key.
// It expires in 30 days — after that, the user has to log in again.
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "30m",
  });
};

export default generateToken;