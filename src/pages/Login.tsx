import { Button } from "antd"
import { useForm } from "react-hook-form"
import { useLoginMutation } from "../redux/feature/auth/authApi"

const Login = () => {
  const {register, handleSubmit } = useForm({
    defaultValues:{
      userId:'A-0001',
      password: 'admin123'
    }
  })

  const [login, {data, error }] = useLoginMutation()

 console.log(data)
 console.log(error)
  const onSubmit = (data)=>{
    const userInfo = {
      id: data.userId,
      password: data.password
    }

    login(userInfo)


  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="id">Id:</label>
          <input type="text" id="id" {...register('userId')}/>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="text" id="password" {...register('password')}  />
        </div>
        <Button htmlType="submit">Login</Button>
      </form>
    </div>
  )
}

export default Login
