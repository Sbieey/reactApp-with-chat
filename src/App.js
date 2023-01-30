import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from 'pages/dashboardPage';
import Settings from 'pages/settingsPage/settings';
import TransactionPage from 'pages/transactionPage/transaction';
import TestPage from 'pages/testPage';
import { SignInPage, ForgotPasswordPage } from 'pages/signInPage';
import { NavBar, SideBar } from 'pages/sideBar';
import { CreateClientPage, ManageClientPage, UserTransactionHistory } from 'pages/clientPage';

//user profile views
import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { MerchantInfo } from 'pages/clientPage';
import { UserFundingLog } from 'pages/clientPage';
import CommisionsPage from 'pages/commisionPage/commision';
import RequestCardPage from 'pages/requestCard/requestCard';

function App() {
  const { themeColor } = useSelector((state) => ({ themeColor: state.utils.themeColor }));
  return (
    <Router>
      <Box className='App'>
        <NavBar themeColor={themeColor} />
        <Box display='flex' maxWidth='100vw' m='0'>
          <SideBar themeColor={themeColor} />
          <Box>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/login' element={<SignInPage />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/transactions' element={<TransactionPage />} />
              <Route path='/commisions' element={<CommisionsPage />} />
              <Route path='/create-client' element={<CreateClientPage />} />
              <Route path='/manage-client' element={<ManageClientPage />} />
              <Route path='/request-cards' element={<RequestCardPage />} />
              <Route path='/merchant-info/:id' element={<MerchantInfo />} />
              <Route path='/user-transaction/:id' element={<UserTransactionHistory />} />
              <Route path='/funding-log/:id' element={<UserFundingLog />} />
              <Route path='/forgot-password' element={<ForgotPasswordPage />} />
              <Route path='/profile' element={<p>profile page</p>}>
                <Route index element={<p>User profile page</p>} />
                <Route path='favorites' element={<p>FavoritesView</p>} />
              </Route>
              <Route path='/test' element={<TestPage />} />
              <Route path='*' element={<h1>Page Not Found</h1>} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
