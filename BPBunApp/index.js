const { initializeSequelize } = require("./sequelize.js");
const sequelizeInstance = await initializeSequelize();
Bun.serve({
    port:3000,
    async fetch(request) {
        try {
            const url = new URL(request.url);
            if (request.method === "POST" && url.pathname === "/recensie") {
                const data = await request.json();
                await sequelizeInstance.models.Recensie.create(data);
                return new Response('',{headers: { "Content-Type": "application/json"}, status: 201});
            } else if (request.method === "GET" && url.pathname === "/onderwerpen") {
                const data = await sequelizeInstance.models.Onderwerp.findAll();
                return Response.json(data);
            }
        } catch (error) {
            console.error("Error:", error);
            return new Response(JSON.stringify({ message: 'Invalid data'}), 
            {headers: { "Content-Type": "application/json"}, status: 400})
        }
    }
})