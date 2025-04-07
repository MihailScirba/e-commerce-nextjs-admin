"use client";

import { useStoreModal } from "@/hooks/use-store-modal";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useUser } from "@clerk/nextjs";

export default function SetupPage() {
  // const { user, isLoaded } = useUser();

  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {

    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return null;
}
