const http = require("node:http");
const { initializeSequelize } = require("./sequelize.js");
async function main() {
  const sequelizeInstance = await initializeSequelize();
  http
    .createServer(async (req, res) => {
      if (req.method === "POST" && req.url === "/recensie") {
        let body = "";
        req.on("data", (data) => {
          body += data.toString(); 
        });
        req.on("end", async () => {
          try {
            const data = JSON.parse(body);
            await sequelizeInstance.models.Recensie.create(data);
            res.writeHead(201, { "Content-Type": "application/json" });
            res.end();
          } catch (error) {
            console.error("Error:", error);
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Invalid data" }));
          }
        });
      } else if (req.method === "GET" && req.url === "/onderwerpen") {
        try {
          const data = await sequelizeInstance.models.Onderwerp.findAll();
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(data));
        } catch {
          res.writeHead(500, { "Content-Type": "tet/plain" });
          res.end('Internal Server error')
        }
      }
    })
    .listen(3000);
}
main();
