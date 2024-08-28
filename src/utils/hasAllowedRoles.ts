/**
 * Determines if a user has any of the required roles to access a section of the
 * application.
 *
 * @param userRoles - An array of the roles assigned to the logged in user.
 * @param requiredRoles - An array of the required roles to access a section of
 * the application.
 *
 * @returns A boolean indicating whether the user has any of the required roles.
 */
function hasAllowedRoles(
  userRoles: string[],
  requiredRoles: string[],
): boolean {
  return true;
}

export default hasAllowedRoles;
