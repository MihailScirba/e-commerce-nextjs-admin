import SettingsForm from "@/app/(dashboard)/[storeId]/(routes)/settings/components/settings-form";
import prismadb from "@/lib/prismadb";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

interface SettingsPageProps {
  params: {
    storeId: string;
  };
}

export default async function SettingsPage({ params }: SettingsPageProps) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const { storeId } = await params;
  const store = await prismadb.store.findFirst({
    where: {
      id: storeId,
      userId: userId,
    },
  });

  if (!store) {
    redirect("/");
  }

  return (
    <div className="flex-col ">
      <div className="flex-1 space-y-4 p-8 py-6">
        <SettingsForm initialData={store}/>
      </div>
    </div>
  );
}
