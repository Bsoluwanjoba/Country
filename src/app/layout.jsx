import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbarii'


const inter = Poppins({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'World Map || Country and Details',
  description: 'Knowing the World Around You',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Navbar />
       <div>

       {children}
       </div>
        </body>
    </html>
  )
}
