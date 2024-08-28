import { render, screen } from '@testing-library/react';

import { AuthorizationContext } from './context';

import AuthorizationProvider from '.';

describe('AuthorizationProvider', () => {
  it('renders children without crashing', () => {
    render(
      <AuthorizationContext.Provider
        value={{ userRoles: [], userPermissions: [] }}
      >
        <AuthorizationProvider>
          <div>Hello World!</div>
        </AuthorizationProvider>
      </AuthorizationContext.Provider>,
    );

    expect(screen.getByText('Hello World!')).toBeInTheDocument();
  });
});
