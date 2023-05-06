import ExpenseModel from "./expensesModel";
import jwt from "jwt-simple";
//const secret = process.env.JWT_SECRET;

export const addExpense = async (req: any, res: any) => {
  try {
    const { category, name, supplier, cost, advancePayement, expenseCategory } = req.body;
    
    //add expenses to DB;
    const expenseDB = await ExpenseModel.create({category, name, supplier, cost, advancePayement, expenseCategory });

    console.log(expenseDB);

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
export const deleteExpense = async (req: any, res: any) => {
  try {
    const { _id } = req.body;

    const deleteExpense = await ExpenseModel.deleteOne({ _id });
    const expenses = await ExpenseModel.find({});

    res.send({ ok: true, expenses });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const updateExpenseType = async (req: any, res: any) => {
  try {
    const { expenseId, expenseType } = req.body;

    const expenseDB = await ExpenseModel.findOneAndUpdate(
      { _id: expenseId },
      { expenseType }
    );

    res.send({ ok: true, expenseDB });
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