import useAuthorizationGuard from '../useAuthorizationGuard';

import type { AuthorizedSectionProps } from '@interfaces';
import type { FC } from 'react';

/**
 * A higher-order component that checks if the user is authorized to access a
 * specific section of the application.
 *
 * @param requiredRoles - The roles required to access the section.
 * @param requiredPermissions - The permissions required to access the section.
 * @param authorizationStrategy - The authorization strategy to be used.
 * @param permissionStrategy - The permission strategy to be used.
 *
 * @example
 * ```TypeScript
 * import { AuthorizedSection } from "@components";
 *
 * export const Component = () => (
 *   <AuthorizedSection
 *      requiredRoles={[ROLES_HERE]}
 *      requiredPermissions={[PERMISSIONS_HERE]}
 *   >
 *     {({ isAuthorized, permissions }) =>
 *       isAuthorized ? (
 *         <div> You are authorized to see this content </div>
 *       ) : null
 *     }
 *   </AuthorizedSection>
 * )
 * ```
 */
const AuthorizedSection: FC<AuthorizedSectionProps> = (props) => {
  const { isAuthorized, permissions } = useAuthorizationGuard({
    requiredRoles: props.requiredRoles,
    requiredPermissions: props.requiredPermissions,
    authorizationStrategy: props.authorizationStrategy,
    permissionStrategy: props.permissionStrategy,
  });

  return props.children({ isAuthorized, permissions });
};

export default AuthorizedSection;
