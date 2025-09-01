const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Jokes API",
            description: "Jokes API Information"
        },
        servers: [
            {
                url: `${process.env.API_BASE_URL}:${process.env.API_PORT}`
            }
        ],
    },
    apis: ["./routes/*.js"]
};

export default swaggerOptions;
