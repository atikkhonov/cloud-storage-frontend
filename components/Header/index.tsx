import { Layout, Avatar, Menu, Popover, Button } from "antd"
import { CloudOutlined } from "@ant-design/icons"


export const Header: React.FC = () => {
  return (
    <Layout.Header>
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



