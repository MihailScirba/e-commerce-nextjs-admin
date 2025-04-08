import prismadb from "@/lib/prismadb";

interface DashboardPageProps {
  params: { storeId: string };
}

export default async function DashboardPage ({params}: DashboardPageProps) {
  const { storeId } = await params;
  const store = await prismadb.store.findFirst({
    where: {
      id: storeId,
    },
  });
  return <div>This is a Dashboard! Active: {store?.name}</div>;
};

