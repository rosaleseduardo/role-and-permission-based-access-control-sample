/** General Roles and Permission properties to provide access and privileges */
export interface AuthorizationBaseProps {
  /** Requested Admin Roles for a user to have access to a feature within the
   * app */
  requiredRoles: string[];
  /** Requested Admin Permissions for a user to have privileges into a feature
   * within the app */
  requiredPermissions?: string[];
  /** Function to be used to filter users roles in order to provide access */
  authorizationStrategy?: <RL, RE>(roles: RL, requirement: RE) => boolean;
  /** Function to be used to filter users permissions in order to provide
   * privileges */
  permissionStrategy?: <PS, RE>(permissions: PS, requirement: RE) => string[];
}

export interface AuthorizedGuardReturn {
  /** It indicates whether a user has access to a feature or not  */
  isAuthorized: boolean;
  /** Allowed actions that a user is entitled to perform over a feature */
  permissions: string[];
}

export interface AuthorizedSectionProps extends AuthorizationBaseProps {
  children: (props: AuthorizedGuardReturn) => JSX.Element | null;
}

export interface ProtectedRouteProps extends AuthorizationBaseProps {
  /** UI to be displayed to the user once they are redirected for not having
   * access to the route */
  accessDenied: React.ReactElement;
  children: React.ReactElement;
}
