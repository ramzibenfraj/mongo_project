require('dotenv').config();
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");
const logger = require("./middleware/logger");

const app = express();
app.use(cors());
app.use(logger);


console.log('USER_SERVICE_URL:', process.env.USER_SERVICE_URL);
console.log('PRODUCT_SERVICE_URL:', process.env.PRODUCT_SERVICE_URL);




app.use('/produit', createProxyMiddleware({ target: process.env.PRODUCT_SERVICE_URL, changeOrigin: true }));
app.use('/categories', createProxyMiddleware({ target: process.env.USER_SERVICE_URL , changeOrigin: true }));

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`API Gateway running on port ${port}`));
