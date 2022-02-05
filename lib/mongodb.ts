import { MongoClient } from "mongodb";

let uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

export default async function connectToDatabase(database: string) {
    const client = await MongoClient.connect(uri);

    const db = client.db(database);

    return { client, db }
}