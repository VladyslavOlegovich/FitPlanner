"use client";

import { Button } from "@/components/ui/button";

import { signIn } from "next-auth/react";

export default function SignInWithGoogle() {
  return (
    <Button
      onClick={() =>
        signIn("google", {
          callbackUrl: `${window.location.origin}`,
        })
      }
      className="mt-6"
      variant="secondary"
    >
      Log in with Google
    </Button>
  );
}
