import UserModel from "./usersModel";
import jwt from "jwt-simple";
const secret: string | undefined = process.env.JWT_SECRET;


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
      password
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
      return res
        .status(401)
        .json({ message: "username or password are not correct" });
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error("Missing jwt secret");

    const token = jwt.encode({ userId: userDB._id, role: "public" }, secret);
    console.log(token);

    res.cookie("user", token, { maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: true });

    res.status(201).send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const logout = (req: any, res: any) => {
  try {
    res.clearCookie('user');
    res.send('Cookie deleted');

    res.status(200).send({ ok: true});

  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal server error" });

  }
};

export const getUserById  = async (req: any, res: any) => {
  try {
    const { user } = req.cookies;
    if (!secret) throw new Error("No secret");
    
    const decoded = jwt.decode(user, secret);
    
    const { userId } = decoded;

    const userDB = await UserModel.findById(userId);

    res.send({ ok: true, user: userDB });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
/*



*/
