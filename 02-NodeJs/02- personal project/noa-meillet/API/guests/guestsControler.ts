import GuestModel from "./guestsModel";
import jwt from "jwt-simple";
//const secret = process.env.JWT_SECRET;

export const addGuest = async (req: any, res: any) => {
  try {
    const { firstName, lastName, phoneNumber, numberOfGuest, guestType } = req.body;
    
    //add guests to DB;
    const guestDB = await GuestModel.create({firstName, lastName, phoneNumber, numberOfGuest, guestType });

    console.log(guestDB);

    res.status(201).send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
/*
export const updateUser = (req: any, res: any) => {
  try {
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const updateUserName = (req: any, res: any) => {
  try {
    // const { name, uid } = req.body;
    // if (!name) throw new Error("No name in data");
    // if (!uid) throw new Error("No uid in data");
    // const user = users.find((user) => user.uid === uid);
    // if (!user) throw new Error("No user in array");
    // user.name = name;
    // res.send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
*/
export const deleteGuest = async (req: any, res: any) => {
  try {
    const { _id } = req.body;

    const deleteGuest = await GuestModel.deleteOne({ _id });
    const guests = await GuestModel.find({});

    res.send({ ok: true, guests });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const updateGuestType = async (req: any, res: any) => {
  try {
    const { guestId, guestType } = req.body;

    const guestDB = await GuestModel.findOneAndUpdate(
      { _id: guestId },
      { guestType }
    );

    res.send({ ok: true, guestDB });
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