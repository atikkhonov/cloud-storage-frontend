import { Button, Upload, UploadFile, notification } from "antd"
import { CloudUploadOutlined } from "@ant-design/icons"
import { useState } from "react"
import * as Api from '../../api'
import styles from './UploadButton.module.scss'

export const UploadButton = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([])

  const onUploadSuccess = async (options: any) => {
    try {
      const file = await Api.files.uploadFile(options)

      console.log(file);
      
    } catch (error) {
      notification.error({
        message: "Ошибка!",
        description: "Не удалось загрузить файл",
        duration: 2,
      })
    }
  }
  
  return (
    <Upload
      customRequest={onUploadSuccess}
      fileList={fileList}
      onChange={({ fileList }) => setFileList(fileList)}
      className={styles.upload}
    >
      <Button type="primary" icon={<CloudUploadOutlined/>} size="large">
        Загрузить файл
      </Button>
    </Upload>
  )
}
