import { Layout, Avatar, Menu, Popover, Button } from "antd"
import { CloudOutlined } from "@ant-design/icons"
import styles from "./Header.module.scss"

export const Header: React.FC = () => {
  return (
    <Layout.Header className={styles.root}>
      <div className={styles.headerInner}>
        <div className={styles.headerLeft}>
          <h2>
            <CloudOutlined />
            Cloud Storage
          </h2>
        </div>
        <Menu
          className={styles.topMenu}
          theme="dark"
          mode="horizontal"
          items={[
            { key: "/dashboard", label: "Главная" },
            { key: "/dashboard/profile", label: "Профиль" },
          ]}
        />
      </div>
    </Layout.Header>
  )
}



