import { Layout } from "@/layouts/Layout"
import { checkAuth } from "@/utils/checkAuth"
import { GetServerSidePropsContext, NextPage } from "next"
import styles from '../../styles/Home.module.scss'
import { Button, Menu } from "antd"
import { useRouter } from "next/router"
import { FileOutlined, FileImageOutlined, DeleteOutlined } from "@ant-design/icons"
import { UploadButton } from "@/components/UploadButton"
import * as Api from "@/api";
import { FileList } from "@/components/FileList"
import { FileItem } from "@/api/dto/files.dto"
import { DashboardLayout } from "@/layouts/DashboardLayout"

interface Props {
  items: FileItem[]
} 

const DashboardPage: NextPage<Props> = ({ items }) => {
  return (
    <DashboardLayout>
      <FileList items={items}/>
    </DashboardLayout>
  )
}

DashboardPage.getLayout = (page: React.ReactNode) => {
  return <Layout title="Dashboard / Главная">{page}</Layout>
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx)

  if ("redirect" in authProps) {
    return authProps;
  }

  try {
    const items = await Api.files.getAll();

    return {
      props: {
        items,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: { items: [] },
    };
  }
  
}

export default DashboardPage;