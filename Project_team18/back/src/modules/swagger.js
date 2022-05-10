import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import path from "path";

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "DA API",
      version: "1.0.0",
      description: "Elice 데이터분석 팀프로젝트: 팀18 우아한 남매들",
    },
    servers: [
      {
        url: "http://localhost:" + process.env.SERVER_PORT,
      },
    ],
    paths: {},
    components: {},
    tags: ["User"],
  },
  apis: [__dirname + "/../routers/*.js"],
};

const specs = swaggerJsDoc(options);

export { swaggerUi, specs };
