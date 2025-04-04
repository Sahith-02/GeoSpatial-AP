import express from "express";
import session from "express-session";
import cors from "cors";
import authRoutes from "./Routes/auth.route.js";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.use(
  cors({
    origin: "https://geospatial-ap-frontend.onrender.com",
    credentials: true,
  })
);

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: true,
      sameSite: "none",
      maxAge: 2000 * 60 * 60,
    },
  })
);

app.use("/", authRoutes);

app.listen(PORT, () => {
  console.log("server is running on port:", +PORT);
});
