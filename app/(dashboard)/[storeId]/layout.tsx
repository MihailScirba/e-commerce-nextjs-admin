import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function DashboardLayout({
  children, params
}: {
  children: React.ReactNode;
  params: { storeId: string}
}) {
  const { userId } = await auth();
  if (!userId) {
    redirect("/");
  }
}
