import CardComponent from "@/component/CardComponent";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/user");
  const data = await response.json();
  console.log(data);
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {data.payload.map((student) => (
        <CardComponent key={student.id} student={student} />
      ))}
    </div>
  );
}
