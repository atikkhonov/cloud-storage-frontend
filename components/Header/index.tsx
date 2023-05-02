import { Layout, Avatar, Menu, Popover, Button } from "antd"
import { CloudOutlined } from "@ant-design/icons"
import styles from "./Header.module.scss"

export const Header: React.FC = () => {
  return (
    <Layout.Header className={styles.root}>
      <div>
        <div>
          <h2>
            <CloudOutlined />
            Cloud Storage
          </h2>
        </div>
      </div>
    </Layout.Header>
  )
}



