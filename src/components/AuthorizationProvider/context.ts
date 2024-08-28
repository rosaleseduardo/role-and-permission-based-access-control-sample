import { createContext, useContext } from 'react';

/** React Context to store the user roles and permissions */
export const AuthorizationContext = createContext<{
  /** Current roles assigned to the logged in user */
  userRoles: string[];
  /** Current permissions assigned to the logged in user */
  userPermissions: string[];
}>({} as any);

/** Custom Hook to access the Authorization Context  */
export const useAuthorizationProvider = (): {
  userRoles: string[];
  userPermissions: string[];
} => useContext(AuthorizationContext);
