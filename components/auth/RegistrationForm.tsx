import { RegisterFormDTO } from '@/api/dto/auth.dto'
import { Form, Input, Button, notification } from 'antd'
import * as Api from '../../api'
import { setCookie } from 'nookies'
import styles from './Auth.module.scss'

export const RegistrationForm: React.FC = () => {
  const onSubmit = async (values: RegisterFormDTO) => {
    try {
      if (typeof values !== "undefined") {
        const { token } = await Api.auth.register(values)

        notification.success({
          message: "Вы успешно зарегистрированы!",
          description: "Переходим на админ-панель...",
          duration: 2
        })

        setCookie(null, "_token", token, {
          path: "/",
        })

        location.href = "/dashboard";
      }

    } catch (error) {
      console.warn(error)

      notification.error({
        message: "Ошибка!",
        description: "Ошибка при регистрации",
        duration: 2
      })
    }
    
    console.log()
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
          label="Полное имя"
          name="fullName"
          rules={[
            {
              required: true,
              message: "Укажите Ваше полное имя"
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
            Регистрация
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}