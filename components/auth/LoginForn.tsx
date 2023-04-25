import { Form, Input, Button } from 'antd'

export const LoginForm: React.FC = () => {
  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
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