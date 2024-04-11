import { Home } from "@/modules/home/containers/Home";
import { getOffices } from "@/modules/home/utils/getOffices";

export default async function HomePage() {
  const data = await getOffices({queryParams: ""})

  return (
    <main className="min-h-screen">
      <Home offices={data?.offices ?? []} />
    </main>
  );
}
