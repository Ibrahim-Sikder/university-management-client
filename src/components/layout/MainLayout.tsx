import { Layout } from "antd"
import { Content, Header } from "antd/es/layout/layout"
import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

// const items: MenuProps["items"] = [
//   {
//     key: "Dashboard",
//     label: <NavLink to="/admin/dashboard"> Dashboard</NavLink>,
//   },
//   {
//     key: "2",
//     label: "Profile",
//   },
//   {
//     key: "User Management",
//     label: "User Management",
//     children: [
//       {
//         key: "Create Admin ",
//         label: <NavLink to="/admin/create-admin">Create Admin </NavLink>,
//       },
//       {
//         key: "Create Faculty ",
//         label: <NavLink to="/admin/create-faculty">Create Faculty </NavLink>,
//       },
//       {
//         key: "Create Student ",
//         label: <NavLink to="/admin/create-student">Create Student </NavLink>,
//       },
//       {
//         key: "Create Faculty ",
//         label: <NavLink to="/admin/create-admin">Create Faculty </NavLink>,
//       },
//     ],
//   },
// ]

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
   
   <Sidebar/>
      <Layout>
        <Header />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
       
      </Layout>
    </Layout>
  )
}

export default MainLayout
