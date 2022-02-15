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
            cursor = await users.find()
            displayCursor = await cursor.limit(10).skip(1).toArray()
            console.log(displayCursor)
            //cursor.forEach(item => console.log(item))
            return displayCursor
        } catch (e) {
            console.error(`Unable to issue find command: ${e}`)
            return { user: '' }
        }
    }


    static async findUser({
        filters=null,
        page=0,
    } = {}) {
        let query
        if (filters) {
            if("name" in filters) {
                query = { $text: { $eq: filters["username"]}}
            }
        }

        let cursor

        try {
            console.log("!!!!");
            cursor = await users.find(query)
            console.log(cursor);
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

            return await users.insertOne(userDoc);
        } catch (e) {
            console.error(`Unable to post user: ${e}`)
            return { error: e}
        }
    }
}