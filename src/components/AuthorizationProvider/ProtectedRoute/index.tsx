import AuthorizedSection from '../AuthorizedSection';

import type { ProtectedRouteProps } from '@interfaces';
import type { PropsWithChildren } from 'react';

/**
 * Renders a protected route component that requires certain roles to be
 * authorized to access.
 * If the user is authorized, it renders the children prop. If not, it renders
 * the accessDenied prop.
 *
 * @param requiredRoles - An array of roles that are required to access the
 * protected route.
 * @param authorizationStrategy - The authorization strategy to be used for
 * checking if the user is authorized.
 * @param children - The children to be rendered if the user is authorized.
 * @param accessDenied - The component to be rendered if the user is not
 * authorized.
 *
 * @returns A React node representing the protected route component.
 */
function ProtectedRoute({
  requiredRoles,
  authorizationStrategy,
  children,
  accessDenied,
}: PropsWithChildren<ProtectedRouteProps>): JSX.Element {
  return (
    <AuthorizedSection
      requiredRoles={requiredRoles}
      authorizationStrategy={authorizationStrategy}
    >
      {({ isAuthorized }) => (isAuthorized ? children : accessDenied)}
    </AuthorizedSection>
  );
}

export default ProtectedRoute;
