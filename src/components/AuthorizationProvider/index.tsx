/* eslint-disable tsdoc/syntax */
import React, { type PropsWithChildren, useMemo } from 'react';

import { AuthorizationContext } from './context';

/**
 * Provides the Authorization Context to all children components.
 *
 * @param children - The child elements that require access to the Authorization
 * Context.
 *
 * @returns A JSX element that provides the Authorization Context to its
 * children.
 *
 * @example
 *  import { AuthorizationProvider } from '@components';
 *
 *  ReactDOM.render(
 *    <AuthorizationProvider>
 *      <App />
 *    </AuthorizationProvider>,
 *    document.getElementById('root'),
 *  );
 */
function AuthorizationProvider({
  children,
}: PropsWithChildren<{
  children: React.ReactNode;
}>): JSX.Element {
  /** The object passed as the value prop to the Context provider (at line 36)
   * changes every render. This rule `react/jsx-no-constructed-context-values`
   * prevents non-stable values (i.e. object identities) from being used as a
   * value for Context.Provider */
  const value = useMemo(() => {
    const userRoles: string[] = [];
    const userPermissions: string[] = [];

    return {
      userRoles,
      userPermissions,
    };
  }, []);

  return (
    <AuthorizationContext.Provider value={value}>
      {children}
    </AuthorizationContext.Provider>
  );
}

export default AuthorizationProvider;

export * from './context';
