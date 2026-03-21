const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
export const prisma = new PrismaClient( {adapter} );

const studentData = [
  { name: "Sokha Mean", email: "sokha.mean@gmail.com", gender: "Male" },
  { name: "Dara Chan", email: "dara.chan@yahoo.com", gender: "Male" },
  { name: "Bopha Roth", email: "bopha.roth@yahoo.com", gender: "Female" },
  { name: "Vicheka Sam", email: "vicheka.sam@gmail.com", gender: "Male" },
];

async function main() {
  console.log("Seeding started...");

  for (const student of studentData) {
    await prisma.srStudent.create({
      data: student,
    });
  }
  console.log("Seeding finished successfully!");
}

main();