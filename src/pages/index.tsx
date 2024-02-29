import { AxiosError } from "axios";
import { getUsersList } from "@/services/list/api";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import TableUsersList from "@/components/users/TableUsersList";

export default function Home() {
  const { data: userslist } = useQuery({
    queryKey: ['userslist'],
    queryFn: () => getUsersList(),
    onError: (err: AxiosError) => {
      console.log(err)
    },
    staleTime: Infinity,
    cacheTime: 0,
    retry: 0,
  })

  return (
    <main className="w-full flex flex-col items-center justify-between lg:p-24 p-12">
      {userslist && <TableUsersList list={userslist} />}
    </main>
  );
}

Home.layout = "L1";

export async function getServerSideProps() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['userslist'], getUsersList)
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}