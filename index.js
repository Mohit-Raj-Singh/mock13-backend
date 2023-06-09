const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/UserRoutes");
const { bookRouter } = require("./routes/BookRoutes");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/users", userRouter);
app.use("/hospital", bookRouter);

app.listen(process.env.port, async () => {
    try {
        await connection;
    }
    catch (err) {
        console.log(err);
    }
    console.log(`server is running on ${process.env.port}`);
})