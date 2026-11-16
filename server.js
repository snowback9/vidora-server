const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    app: "VIDORA",
    status: "online",
    message: "VIDORA sunucusu çalışıyor."
  });
});

app.get("/api/status", (req, res) => {
  res.json({
    success: true,
    server: "VIDORA",
    status: "active"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("VIDORA sunucusu başlatıldı: " + PORT);
});
