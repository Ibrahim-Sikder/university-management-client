import { Outlet } from "react-router-dom"

const AdminLayout = () => {
  return (
    <div>
      <h3>this is sidebar </h3>
      <Outlet/>
    </div>
  )
}

export default AdminLayout
