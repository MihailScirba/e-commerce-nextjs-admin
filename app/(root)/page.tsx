"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { useStoreModal } from "@/hooks/use-store-modal";

export default function SetupPage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (isLoaded && !user) {
      router.push("/sign-in");
    }

    if (isLoaded && user && !isOpen) {
      onOpen();
    }
  }, [isLoaded, user, isOpen, onOpen, router]);

  return <div className="p-4"></div>;
}
