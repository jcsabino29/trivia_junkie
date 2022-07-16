let users
import { User } from '../models/user.model.js';

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

        this.deleteDuplicates();
        try {
            cursor = await users.find({}, { projection: { _id: 0, password: 0 }})
            displayCursor = await cursor.limit(10).skip(0).toArray()
            console.log({displayCursor});
            //cursor.forEach(item => console.log(item))
            return displayCursor
        } catch (e) {
            console.error(`Unable to issue find command: ${e}`)
            return { user: '' }
        }
    }


    static async findUser(username) {
        //Ignores cases
        var regex = new RegExp(["^", username, "$"].join(""), "i");

        try {
            let query = await users.find({
                username: regex
            }, { projection: { password: 0, _id: 0 } });
            let displayQuery = await query.limit(10).skip(0).toArray();
            //console.log("displayQuery: " + JSON.stringify(displayQuery)) ;

            if (displayQuery.length == 0) {
                query = await users.find({email_address: regex}, { projection: { password: 0, _id: 0 }});
                displayQuery = await query.limit(10).skip(0).toArray();
                //console.log("The email address: " + JSON.stringify(displayQuery)) ;
            } else { }

            if (displayQuery.length == 0) { 
                return null;
            } else {
                return displayQuery;
            }
        } catch (e) {
            console.error(`Unable to issue find command: ${e}`)
            return { user: '' }
        }
    }

    static async addUser(user) {
        try {
            await users.insertOne(user);
            console.log("User: " + {user} + "Created successfully!")
            return user;
        } catch (e) {
            console.error(`Unable to post user: ${e}`)
            return { error: e}
        }
    }

    static async deleteDuplicates() {
        try {
            let cursor = await users.find({}, { projection: { password: 0 }})
            let displayCursor = await cursor.limit(10).skip(0).toArray()
            for (let i = 0; i < displayCursor.length; i++) {
                if ((i + 1) > displayCursor.length) {
                    break;
                } else { }
                var regex_i = new RegExp(["^", displayCursor[i].username, "$"].join(""), "i");
                for (let j = i + 1; j < displayCursor.length; j++) {
                    var regex_j = new RegExp(["^", displayCursor[j].username, "$"].join(""), "i");
                    console.log(regex_i + " + " + regex_j);
                    if (regex_i== regex_j) {
                        console.log("Deleting: " + displayCursor[j]._id);
                        await users.deleteOne({_id: displayCursor[j]._id});
                    }
                }
            }
        } catch (e) {
            console.log({ error: e}); 
        }
    }
}