import { getExtensionFileName } from '@/utils/getExtensionFromFileName';
import styles from './FileCard.module.scss'
import { isImage } from '@/utils/isImage';
import { getColorByExtension } from '@/utils/getColorByExtension';
import { FileTextOutlined } from "@ant-design/icons"
import Image from 'next/image';

interface FileCardProps {
  filename: string;
  originalName: string;
}

export const FileCard: React.FC<FileCardProps> = ({ filename, originalName }) => {
  const ext = getExtensionFileName(filename)
  const imageUrl = ext && isImage(ext) ? "http://localhost:5555/uoloads/" + filename : "";
  
  const color = getColorByExtension(ext)
  const classColor = styles[color]
  
  return (
    <div className={styles.root}>
      <div className={styles.icon}>
        <i className={classColor}>
          {ext}
        </i>
        {
          isImage(ext) 
          ? (<Image className={styles.image} src={imageUrl} alt="Image"/>) 
          : (<FileTextOutlined/>)
        }
      </div>
      <span>{originalName}</span>
    </div>
  )
}
