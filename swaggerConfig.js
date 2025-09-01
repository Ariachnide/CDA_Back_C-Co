const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Jokes API",
            description: "Jokes API Information"
        },
        servers: [
            {
                url: "http://localhost:8080/"
            }
        ],
    },
    apis: ["./routes/*.js"]
};

export default swaggerOptions;
