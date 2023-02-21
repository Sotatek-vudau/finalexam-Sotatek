import { Button, Form, Input, Typography } from 'antd';

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 100,
      offset: 0,
    },
  },
};

function ForgotPassword() {
  const [form] = Form.useForm();

  return (
    <div className='bg-background bg-no-repeat bg-center bg-cover h-screen relative'>
      <div className='bg-white-default w-[35%] rounded-2xl flex flex-col content-center items-center absolute top-[30%] left-[50%] shadow-inner shadow-white-gainsboro'>
        <Typography.Title
          editable={false}
          level={1}
          style={{ margin: '50px 0 30px 0', textAlign: 'start' }}
          className='font-Acme-Regular'
        >
          Forgot Password
        </Typography.Title>
        <Form
          form={form}
          scrollToFirstError
          layout='vertical'
          className='w-[70%] label-form'
        >
          <Form.Item
            name='email'
            label='Email Address'
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input placeholder='Enter email address' />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button
              type='primary'
              htmlType='submit'
              className='h-10 w-full bg-purple-FrenchMauve hover:bg-purple-Purpureus shadow-md shadow-purple-PinkLavender'
            >
              <span className='text-base'>Verify your email</span>
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;
