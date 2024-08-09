import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import './index.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import AddTransaction from './AddTransaction.tsx';
import Layout from './components/layout.tsx'
import Invoice from './components/Invoice.tsx';
import AllInvoice from './components/AllInvoices.tsx';
import SignUp from './components/Auth/SignUp.tsx';
import SignIn from './components/Auth/SignIn.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<App />} />
        <Route path="/addtransaction" element={<AddTransaction />} />
        <Route path="/AllInvoices" element={<AllInvoice />} />
        <Route path="/Invoice" element={<Invoice />} />
        </Route>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
