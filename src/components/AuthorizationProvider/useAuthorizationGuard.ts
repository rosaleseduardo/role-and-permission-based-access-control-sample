import { hasAllowedPermissions, hasAllowedRoles } from '@utils';

import { useAuthorizationProvider } from './context';

import type {
  AuthorizationBaseProps,
  AuthorizedGuardReturn,
} from '@interfaces';

const defaultStrategyForRole = hasAllowedRoles;
const defaultStrategyForPermissions = hasAllowedPermissions;

/**
 * Apply the authorization strategy over the user's roles/permissions to
 * determine whether a person is entitled to access a protected section.
 *
 * @param props - An object containing the required roles, required permissions,
 * authorization strategy, and permission strategy.
 *
 * @returns An object containing a boolean indicating if the user is authorized
 * and an array of their permissions.
 */
const useAuthorizationGuard = (
  props: AuthorizationBaseProps,
): AuthorizedGuardReturn => {
  const { userRoles, userPermissions } = useAuthorizationProvider();

  const isAuthorized =
    props.authorizationStrategy != null
      ? props.authorizationStrategy(userRoles, props.requiredRoles)
      : defaultStrategyForRole(userRoles, props.requiredRoles);

  const permissions =
    props.permissionStrategy != null
      ? props.permissionStrategy(userPermissions, props.requiredPermissions)
      : defaultStrategyForPermissions(
          userPermissions,
          props.requiredPermissions,
        );

  return { isAuthorized, permissions };
};

export default useAuthorizationGuard;
