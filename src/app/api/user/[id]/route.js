
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  const { id } = await params;
  const student = await prisma.srStudent.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return NextResponse.json({
    status: 200,
    message: `get user id ${id} successfully`,
    payload: student,
  });
}




export async function DELETE(_, { params }) {
  const { id } = await params;
  await prisma.srStudent.delete({
    where: {
      id: parseInt(id),
    },
  });
  return NextResponse.json({
    status: 200,
    message: `delete user id ${id} successfully`,
  });
}



export async function PUT(request, { params }) {
  const { id } = await params;
  const { name, email, gender } = await request.json();
  const student = await prisma.srStudent.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name: name, 
      email: email,
      gender: gender
    }
  });
  return NextResponse.json({
    status: 200,
    message: `update user id ${id} successfully`,
    payload: student,
  });
}
