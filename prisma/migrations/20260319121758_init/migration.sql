-- CreateTable
CREATE TABLE "sr_students" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "gender" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "sr_students_id_key" ON "sr_students"("id");

-- CreateIndex
CREATE UNIQUE INDEX "sr_students_email_key" ON "sr_students"("email");
