import dbConnect from "@/dbConnect";
import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { name, email } = await req.json();

    try {
        await dbConnect();
        const user = await prisma.user.create({
            data: {
                name,
                email
            }
        });

        return NextResponse.json({ data: user, msg: "User created" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ msg: "Failed to create user" }, { status: 500 })
    }
}       