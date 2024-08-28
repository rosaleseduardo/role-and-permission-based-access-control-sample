import { ProtectedRoute, AuthorizedSection } from '@components';

import reactLogo from './assets/react.svg';
import './App.css';

function AdminPage(): JSX.Element {
  return <h1>Welcome to the Admin Page!</h1>;
}

function EmployeePage(): JSX.Element {
  return <h1>Welcome to the Employee Page!</h1>;
}

function AccessDenied(): JSX.Element {
  return <h1>Access Denied!</h1>;
}

function App(): JSX.Element {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <ProtectedRoute
          requiredRoles={['admin']}
          accessDenied={<AccessDenied />}
        >
          <AuthorizedSection requiredRoles={['admin']}>
            {({ isAuthorized }) =>
              isAuthorized ? <AdminPage /> : <AccessDenied />
            }
          </AuthorizedSection>
        </ProtectedRoute>

        <ProtectedRoute
          requiredRoles={['employee', 'admin']}
          accessDenied={<AccessDenied />}
        >
          <AuthorizedSection requiredRoles={['employee', 'admin']}>
            {({ isAuthorized }) =>
              isAuthorized ? <EmployeePage /> : <AccessDenied />
            }
          </AuthorizedSection>
        </ProtectedRoute>
      </div>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
