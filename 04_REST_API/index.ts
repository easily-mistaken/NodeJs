import express, { Request, Response } from "express";
import users from "./MOCK_DATA.json";
import { User } from "./types";

const app = express();
const PORT = 8000;

//Routes
app.get("/users", (req: Request, res: Response) => {
  const html = `
    <ul>
    ${users.map((user: User) => `<li>${user.first_name}</li>`).join("")}
    <ul>
    `;
  res.send(html);
});

//REST Api

app.get("/api/users", (req: Request, res: Response) => {
  res.json(users);
  return;
});

app
  .route("/api/users/:id")
  .get((req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user = users.find((user: User) => user.id === id);
    res.json(user);
    return;
  })
  .patch((req: Request, res: Response) => {
    // TODO : edit the user with id
    res.json({ status: "Pending" });
    return;
  })
  .delete((req: Request, res: Response) => {
    // TODO : delete the user with id
    res.json({ status: "Pending" });
  });

// app.post('/api/users' , (req , res)=>{
//     // TODO : Create new user
//     return res.json({status: "pending"});
// })

// app.patch('/api/users/:id' , (req , res)=>{
//     // TODO : Edit the user with id
//     return res.json({status: "pending"});
// })

// app.delete('/api/users/:id' , (req , res)=>{
//     // TODO : delete the user with id
//     return res.json({status: "pending"});
// })

app.listen(PORT, () => {
  console.log(`Server started at Port ${PORT}`);
});
