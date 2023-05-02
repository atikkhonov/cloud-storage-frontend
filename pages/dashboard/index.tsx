import { Header } from "@/components/Header"
import { checkAuth } from "@/utils/checkAuth"
import { GetServerSidePropsContext, NextPage } from "next"

const DashboardPage: NextPage = () => {
  return (
    <main>
      <Header />
      <h1>Dashboard Private</h1>
    </main>
  )
} 

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx)

  if ("redirect" in authProps) {
    return authProps;
  }

  return {
    props: {},
  }
  
}

export default DashboardPage;