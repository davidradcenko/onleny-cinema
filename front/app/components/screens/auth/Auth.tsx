import React, { FC, useState } from "react";
import { useAuthRedirect } from "./useAuthRedirect";
import { useAuth } from "@/hooks/useAuth";

const Auth: FC = () => {
  useAuthRedirect();

  const { isLoading } = useAuth();

  const [type, setType] = useState<"login" | "register">("login");

  return <div>Auth</div>;
};

export default Auth;
