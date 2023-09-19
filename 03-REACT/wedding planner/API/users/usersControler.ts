import UserModel from "./usersModel";
const jwt: any = require("jwt-simple");
const secret: string | undefined = process.env.JWT_SECRET;
//import bcrypt from "bcryptjs";

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

    res.cookie("user", token, { maxAge: 50000000, httpOnly: true });

    res.status(201).send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

/*
const jwt: any = require("jwt-simple");
const secret: string | undefined = process.env.JWT_SECRET;
import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync(10);

export const addNewUser = async (req: any, res: any) => {
  try {
    const { name, email, password } = req.body;
    const hash = bcrypt.hashSync(password, salt);
    const userLogin = await UserModel.create({

      name, email, password: hash
    })
    console.log(userLogin)
    res.status(201).send({ ok: true })

  } catch (error) {
    if ((error as { code: number }).code === 11000) {
      res.status(409).send({ ok: false, error: `user already exists` });
    }
    console.error(error)
  }
}

export const userLogin = async (req: any, res: any) => {
  try {
    let { email, password } = req.body;
    password = bcrypt.hashSync(password, salt);
    const userLogin = await UserModel.findOne({ email, password })
    if (!userLogin) {
      res.status(401).send({ ok: false })
    } else {
      const token = jwt.encode(userLogin._id, secret)

      console.log(token)
      res.cookie(`${email}`, token, {
        maxAge: 9000000, httpOnly: true
      })
      res.status(200).send({ ok: true })
    }

  } catch (error) {
    console.error(error)
  }
}

*/
