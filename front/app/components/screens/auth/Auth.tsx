import React, { FC, useState } from "react";
import { useAuthRedirect } from "./useAuthRedirect";
import { useAuth } from "@/hooks/useAuth";
import { useForm, SubmitHandler } from "react-hook-form";
import { IAuthInput } from "./auth.interface";
import styles from "./Auth.module.scss";
import Meta from "@/utils/meta/Meta";
import Heading from "@/components/ui/heading/Heading";
import Button from "@/components/ui/form-elements/Button";

const Auth: FC = () => {
  useAuthRedirect();

  const { isLoading } = useAuth();

  const [type, setType] = useState<"login" | "register">("login");

  const {
    register: registerInput,
    handleSubmit,
    formState,
    reset,
  } = useForm<IAuthInput>({
    mode: "onChange",
  });

  const login = (data: any) => {};
  const register = (data: any) => {};

  const onSubmit: SubmitHandler<IAuthInput> = (data) => {
    if (type === "login") login(data);
    else if (type === "register") register(data);
    reset();
  };
  return (
    <Meta description="Auth" title="Auth">
      <section className={styles.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
<Heading title='Auth' className="mb-6"/>

<div className={styles.buttons}>
  <Button type='submit' onClick={()=>setType('login')} disabled={isLoading}>Login</Button>
</div>
        </form>
      </section>
    </Meta>
  );
};

export default Auth;
