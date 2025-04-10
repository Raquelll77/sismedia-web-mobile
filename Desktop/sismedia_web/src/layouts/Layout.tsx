import {Outlet} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ConversorDolarLempira from '../components/ConversorDolaraLempira'


export default function Layout() {


  return (
    <>
        <Header />
        <ConversorDolarLempira/>
        <main className='mx-auto p-2 md:py-16 md:px-15'>
         <Outlet />
        </main>
        {/* <Modal />
        <Notification /> */}
        
        <Footer /> 
    </>
    
  )
}
