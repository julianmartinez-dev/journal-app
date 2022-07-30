import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"
import { AnyAction } from "@reduxjs/toolkit";
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { CheckingAuth } from '../ui/components/CheckingAuth';
import { useCheckAuth } from "../hooks/useCheckAuth";

export const AppRouter = () => {
  const { status } = useCheckAuth()

  if( status === 'checking'){
    return <CheckingAuth />
  }

  return (
    <Routes>
      {
        //IF STATUS IS AUTHENTICATED
        // show journal routes and hide auth routes
        (status === 'authenticated')
        ? <Route path='/*' element={<JournalRoutes />} />
        : <Route path='/auth/*' element={<AuthRoutes />} />
      }

      <Route path="*" element={<Navigate to="/auth/login"/>} />
    </Routes>
  )

}
