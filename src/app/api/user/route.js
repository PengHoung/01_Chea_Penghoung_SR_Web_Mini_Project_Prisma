import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");
    const students = await prisma.srStudent.findMany(
        {
            where: !email ? undefined : {email:{contains:email, mode:"insensitive"}}
        }
    );
    return NextResponse.json({
        status: "success",
        message: "Students retrieved successfully", 
        payload: students,
    });
}

export async function POST(request) {
    const { name, email, gender } = await request.json();
    const student = await prisma.srStudent.create({
        data: {
            name,
            email,
            gender,
        },
    });
    return NextResponse.json({
        status: "success",
        message: "Student created successfully",
        payload: student,
    });
}


