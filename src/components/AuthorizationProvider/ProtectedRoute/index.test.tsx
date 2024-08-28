import { render, screen } from '@testing-library/react';

import ProtectedRoute from '.';

describe('ProtectedRoute', () => {
  it('should render children when the user is authorized', () => {
    const requiredRoles = ['admin'];
    const authorizationStrategy = (): boolean => true; // User is authorized

    render(
      <ProtectedRoute
        requiredRoles={requiredRoles}
        authorizationStrategy={authorizationStrategy}
        accessDenied={<div>Access denied</div>}
      >
        <div>Authorized content</div>
      </ProtectedRoute>,
    );

    expect(screen.getByText('Authorized content')).toBeInTheDocument();
  });

  it('Renders accessDenied component when the user is not authorized', () => {
    const requiredRoles = ['admin'];
    const authorizationStrategy = (): boolean => false;

    render(
      <ProtectedRoute
        requiredRoles={requiredRoles}
        authorizationStrategy={authorizationStrategy}
        accessDenied={<div>Access denied</div>}
      >
        <div>Authorized content</div>
      </ProtectedRoute>,
    );

    expect(screen.getByText('Access denied')).toBeInTheDocument();
  });
});
