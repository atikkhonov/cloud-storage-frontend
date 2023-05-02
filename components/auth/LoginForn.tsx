import { LoginFormDTO } from '@/api/dto/auth.dto'
import { Form, Input, Button, notification } from 'antd'
import { setCookie } from "nookies"
import * as Api from '../../api'
import styles from './Auth.module.scss'

export const LoginForm: React.FC = () => {
  const onSubmit = async (values: LoginFormDTO) => {
    try {
      const { token } = await Api.auth.login(values)

      notification.success({
        message: "Успешно!",
        description: "Переходим в админ-панель...",
        duration: 2,
      })

      setCookie(null, "_token", token, {
        path: "/",
      });

      location.href = "/dashboard"
    } catch (error) {
      console.warn('LoginForm', error)

      notification.error({
        message: "Ошибка!",
        description: "Неверный логин или пароль",
        duration: 2,
      })
    }
    console.log(values)
  }
  
  return (
    <div className={styles.formBlock}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        onFinish={onSubmit}
      >
        <Form.Item
          label="E-mail"
          name="email"
          rules={[
            {
              required: true,
              message: "Укажите почту"
            }
          ]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Укажите пароль"
            }
          ]}
        >
          <Input.Password/>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,

          }}
        >
          <Button type='primary' htmlType='submit'>
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}