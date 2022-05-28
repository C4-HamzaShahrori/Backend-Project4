const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const db = require("./database/db");

app.use(cors());

app.use(express.json());

//----------

const usersRouter = require("./routes/user");
const doctorRouter = require("./routes/doctor");
const rolesRouter = require("./routes/role");
const loginRouter = require("./routes/login");
const RecommendedDoctorRouter = require("./routes/recommendedDr");
const commentRouter = require("./routes/comment");
const tipsRouter = require("./routes/tips");

//---------

app.use("/users", usersRouter);
app.use("/doctors", doctorRouter);
app.use("/roles", rolesRouter);
app.use("/login", loginRouter);
app.use("/recommendedDr", RecommendedDoctorRouter);
app.use("/comment", commentRouter);
app.use("/tips", tipsRouter);

app.get("/test", (req, res) =>
  res.json("server is running :)))))))))))))))))))))))))))")
);

//------------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${PORT}`);
});
