import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import restaurantDAO from "./api/usersDAO.js";

dotenv.config();

const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000;

MongoClient.connect(
    process.env.ATLAS_URI,
    {
        maxPoolSize: 50,
        wtimeoutMS: 5000,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).catch(err => {
    console.log(err.stack);
    process.exit();
}).then(async client => {
    await restaurantDAO.injectDB(client)
    app.listen(port, () => {
        console.log(`listening on port ${port}`);
    })
});