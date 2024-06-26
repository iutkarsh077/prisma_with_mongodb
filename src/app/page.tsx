import MyHome from "@/components/MyHome";
import prisma from "@/prisma";
import Link from "next/link";

export default async function Home() {
  const users = await prisma.user.findMany();
  console.log(users);
  return (
    <div>
      <Link
        href="/createUserInfo"
        className="border-2 border-white p-2 m-2 flex bg-blue-500 hover:bg-blue-600 flex-col items-center"
      >
        Add your Info
      </Link>

      {users.map((post) => {
        return (
          <MyHome
            key={post.id}
            id={post.id}
            name={post.name ?? ""}
            email={post.email}
          />
        );
      })}
    </div>
  );
}
