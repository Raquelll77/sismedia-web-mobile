import {Outlet} from 'react-router-dom'
import Header from '../components/Header'
export default function Layout() {


  return (
    <>
        <Header />
        <main className='mx-auto p-2 md:py-16 md:px-15'>
         <Outlet />
        </main>
        {/* <Modal />
        <Notification /> */}
    </>
    
  )
}
