import React, { useState } from "react"; // Import useState
import { Suspense } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Website from "./pages/Website";
import Properties from "./pages/Properties/Properties";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Property from "./pages/Property/Property";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';
import UserDetailContext from "./context/UserDetailContext";

function App() {
  const queryClient = new QueryClient();
  const [userDetails, setUserDetails] = useState({ // Correctly use useState
    favourites: [],
    bookings: [],
    token: null,
  });
  return (
    <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
    <MantineProvider> {/* Wrap your app with MantineProvider */}
    
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Website />} />
                <Route path="/properties">
                  <Route index element={<Properties />} />
                  <Route path=":propertyId" element={<Property />} />
                </Route>
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      
    </MantineProvider>
    </UserDetailContext.Provider>
  );
}

export default App;