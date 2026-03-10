import { CreateUser } from "../../components/CreateUser";

export default async function Home() {
  return (
    <div className="flex flex-col ">
      <CreateUser />
    </div>
  );
}
