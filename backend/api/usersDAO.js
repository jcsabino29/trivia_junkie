import mongodb from "mongodb";

let users

export default class usersDAO {
    static async injectDB(conn) {
        if (users) {
            return
        }
        try {
            users = await conn.db(process.env.ATLAS_MS).collection("user_profiles");
            
            //await users.insertOne({name: "Armin", email_address: "hugo@yahoo.com"});
            //await users.find().forEach((item) => console.log(item))
            //console.log(await users.find());
        } catch(e) {
            console.error(`Unable to establish a collection handle with users dao: ${e}`) 
        }
    }

    static async getUsers() {
        let cursor
        let displayCursor

        try {
            cursor = await users.find({}, { projection: { _id: 0, password: 0 }})
            displayCursor = await cursor.limit(10).skip(0).toArray()
            console.log({displayCursor: { users }})
            //cursor.forEach(item => console.log(item))
            return displayCursor
        } catch (e) {
            console.error(`Unable to issue find command: ${e}`)
            return { user: '' }
        }
    }


    static async findUser(username) {
        //Ignores case
        var regex = new RegExp(["^", username, "$"].join(""), "i");

        try {
            let query = await users.find({
                username: regex
            }, { projection: { password: 0, _id: 0 } });
            let displayQuery = await query.limit(10).skip(0).toArray();
            console.log("displayQuery: " + JSON.stringify(displayQuery)) ;
            return displayQuery;
        } catch (e) {
            console.error(`Unable to issue find command: ${e}`)
            return { user: '' }
        }
    }

    static async addUser(fullName, username, password, email_address, points) {
        try {
            const userDoc = {
                fullName: fullName,
                username: username,
                password: password,
                email_address: email_address,
                points: Number(1000)
            }
            
            await users.createIndex(userDoc);
            console.log("Created successfully!")
            return userDoc;
        } catch (e) {
            console.error(`Unable to post user: ${e}`)
            return { error: e}
        }
    }
}