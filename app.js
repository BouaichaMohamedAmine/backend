const express=require('express');
const mongoose =require("mongoose")
const dotenv =require('dotenv')
const CategorieRouter=require("./routes/categorie.route")
const ScategorieRouter=require("./routes/scategorie.route")
const ArticleRouter=require("./routes/article.route")
dotenv.config()
const app = express();
app.use(express.json())

mongoose.set("strictQuery", false);
// Connexion à la base données
mongoose.connect(process.env.DATABASECLOUD,{
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(() => {console.log("Connexion à la base de données réussie");
}).catch(err => {
console.log('Impossible de se connecter à la base de données', err);
process.exit();
});

    
    app.use("/api/categories",CategorieRouter);
    app.use("/api/scategories",ScategorieRouter);
    app.use("/api/articles",ArticleRouter);
    
    app.listen(process.env.PORT, () => {
       
    console.log(`Server is listening on port ${process.env.PORT}`); });
    module.exports =app;