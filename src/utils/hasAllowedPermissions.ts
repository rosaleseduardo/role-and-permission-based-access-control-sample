/**
 * Determines the permissions that a user has that are allowed to access a
 * section of the application.
 *
 * @param userPermissions - An array of the permissions assigned to the logged
 * in user.
 * @param requiredPermissions - An optional array of the required permissions to
 * access a section of the application.
 *
 * @returns An array of permissions that the user has that are allowed to access
 * the section of the application.
 */
function hasAllowedPermissions(
  userPermissions: string[],
  requiredPermissions?: string[],
): string[] {
  return [];
}

export default hasAllowedPermissions;
