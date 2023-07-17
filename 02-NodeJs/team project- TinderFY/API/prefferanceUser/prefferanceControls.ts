import PrefferanceModel from "./prefferanceModel";
import UserModel from "../users/usersModel";

export const addNewuserPrefferance = async (req: any, res: any) => {
  try {
      const {
        minHeight,
        maxHeight,
        minAge,
        maxAge,
        gender,
        kids,
        smoking,
        education,
        relationship,
        religious,
        email
      } = req.body;


          const userDB = await UserModel.findOne({email});
          if (!userDB) throw new Error("no user found");
          const userId = userDB._id.toString();
          console.log(userId);
          
    const userPreffer = await PrefferanceModel.create({
      userId,
      minHeight,
      maxHeight,
      minAge,
      maxAge,
      gender,
      kids,
      smoking,
      education,
      relationship,
      religious
    });
    console.log(userPreffer,"prefferance added");  
    res.status(201).send({ ok: true })
  } catch (error) {
    if ((error as { code: number }).code === 11000) {
      res
        .status(409)
        .send({ ok: false, error: `prefferance to this user already exists` });
    }
    console.error(error);
  }
}

export const prefferanceUserCard = async (req: any, res: any) => {
  try {
    const { email } = req.body
    const userPrefferance = await PrefferanceModel.findOne({email});
    if (!userPrefferance)  throw new Error("no prefferance to this user");
    res.status(200).send({ userPrefferance })
  } catch (error) {
    console.error(error)
  }
};
