// src/app/api/favorites/get/route.js
import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;

    const client = await clientPromise;
    const db = client.db("weatherApp");
    const favorites = db.collection("favorites");

    const cities = await favorites.find({ email }).toArray();

    return Response.json({ cities }, { status: 200 });
  } catch (error) {
    console.error("Get error:", error);
    return Response.json({ error: "Failed to fetch cities" }, { status: 500 });
  }
}
