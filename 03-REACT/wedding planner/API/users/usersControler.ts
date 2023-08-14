import UserModel from "./usersModel";
import jwt from "jwt-simple";
const secret = process.env.JWT_SECRET;

export const addUser = async (req: any, res: any) => {
  try {
    const { nameOfBride, nameOfGroom, weddingDate, username, password } =
      req.body;

    //add users to DB;
    const userDB = await UserModel.create({
      nameOfBride,
      nameOfGroom,
      weddingDate,
      username,
      password,
    });
    console.log(userDB);
    res.status(201).send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const login = async (req: any, res: any) => {
  try {
    const { username, password } = req.body;
    console.log(username, password);

    const userDB = await UserModel.findOne({ username, password });

    if (!userDB) {
      return res.status(401).json({ message: "username or password are not correct" });
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error("Missing jwt secret");

    const token = jwt.encode({ userId: userDB._id, role: "public" }, secret);
    console.log(token);

    res.cookie("user", token, { maxAge: 50000000, httpOnly: true });

    res.status(201).send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

/*
export const getUser = async (req: any, res: any) => {
  try {
    const { user } = req.cookies;
    console.log(user);
    if (!secret) throw new Error("No secret");
    
    const decoded = jwt.decode(user, secret);
    console.log(decoded);
    
    const { userId, role} = decoded;

    if(role === 'admin') console.log("Give all avilable data")

    const userDB = await UserModel.findById(userId);

    res.send({ ok: true, user: userDB });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
*/
