// src/app/api/favorites/save/route.js
import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, city } = body;

    const client = await clientPromise;
    const db = client.db("weatherApp");
    const favorites = db.collection("favorites");

    await favorites.insertOne({ email, city });

    return Response.json({ message: "City saved successfully" }, { status: 200 });
  } catch (error) {
    console.error("Save error:", error);
    return Response.json({ error: "Failed to save city" }, { status: 500 });
  }
}
