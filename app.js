const express=require('express');
const mongoose =require("mongoose")
const dotenv =require('dotenv')
const CategorieRouter=require("./routes/categorie.route")
const ScategorieRouter=require("./routes/scategorie.route")
const ArticleRouter=require("./routes/article.route")
dotenv.config()
const app = express();
app.use(express.json())

mongoose.set('strictQuery', true)
const connect = async () => {
    try {
    await mongoose.connect(process.env.DATABASECLOUD);
    console.log("Connected to mongoDB.");
    } catch (error) {
    throw error;
    }
    };
    mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
    });

    
    app.use("/api/categories",CategorieRouter);
    app.use("/api/scategories",ScategorieRouter);
    app.use("/api/articles",ArticleRouter);
    
    app.listen(process.env.PORT, () => {
        connect();
    console.log(`Server is listening on port ${process.env.PORT}`); });
    module.exports =app;