import { Navigate, Outlet, Route, Router, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import './App.css';
import Dashboard from "./pages/Dashboard.jsx";
import Tasks from "./pages/Tasks.jsx";


function Layout (){
  const user = ""

  const location = useLocation()

  return user ? (
    <div className="w-full h-screen flex flex-cool md:flex-row">
      <div className='w-1/5 h-screen bg-white sticky top-o hidden md:block'>
        {/*<sidebar/> */}
      </div>

      
      {/*mobilesidebar/> */}

      <div className="flex-1 oveflow-y-auto">
         {/*<Navbar/> */}

        <div className="p-4 2xl:px-10">
         <Outlet />
        </div>
      </div>
    </div>

  ): (
    <Navigate to="/log-in" state={{from: location}} replace />
  );
}
function App() {
  return (
    <main className='w-full min -h-screen bg-[#f3f4f6]'>
     <Routers>
      <Router element={<Layout/>}>   
        <Route path='/' element={<Navigate to='/Dashboard' />} />
        <Route path='Dashboard >' element={<Dashboard />} />
        <Route path='/Tasks >' element={<Tasks/>}/>
        <Route path='/completed/:status >' element={<Dashboard/>}/>
        <Route path='/in-progress/:status >' element={<Dashboard/>}/>
      </Router>
      <Route path='/login/ >' element={<login/>}/>
     </Routers>
     <Toaster richColor/>
    </main>
  )

}

export default App;
