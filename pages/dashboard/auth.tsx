import { LoginForm } from "@/components/auth/LoginForn";
import { RegistrationForm } from "@/components/auth/RegistrationForm";
import { Tabs } from "antd";
import { NextPage } from "next";
import Head from "next/head";

const AuthPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard / Auth</title>
      </Head>
      <main style={{ width: 400, margin: "50px auto" }}>
        <Tabs
          items={[
            {
              label: 'Войти',
              key: '1',
              children: <LoginForm/>
            },
            {
              label: 'Регистрация',
              key: '2',
              children: <RegistrationForm/>
            }
          ]}
        />
      </main>
    </>
  )
}

export default AuthPage;