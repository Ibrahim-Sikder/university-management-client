import { Button } from "antd"
import { useForm } from "react-hook-form"
import { useLoginMutation } from "../redux/feature/auth/authApi"
import { useAppDispatch } from "../redux/hooks"
import { setUser } from "../redux/feature/auth/authSlice"
import { verifyToken } from "../utils/verifyToken"

const Login = () => {
  const [login, {data }] = useLoginMutation()
  const dispatch = useAppDispatch()

  const {register, handleSubmit } = useForm({
    defaultValues:{
      userId:'A-0001',
      password: 'admin123'
    }
  })

 

 console.log(data)
  const onSubmit = async(data)=>{
    const userInfo = {
      id: data.userId,
      password: data.password
    }

    const res = await login(userInfo).unwrap()
    const user = verifyToken(res.data.accessToken)
    console.log(user)
   dispatch(setUser({user:user, token: res.data.accessToken}))


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
