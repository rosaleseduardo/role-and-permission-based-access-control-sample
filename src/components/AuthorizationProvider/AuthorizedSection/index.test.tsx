import { render, screen } from '@testing-library/react';
import { vitest, it } from 'vitest';

import AuthorizedSection from '.';

describe('AuthorizedSection', () => {
  it('should render children when user is authorized', () => {
    // Define a mock child component that returns a div with some text content
    const mockChildComponent = vitest.fn(() => <div>Authorized Content</div>);

    // Render the AuthorizedSection component with the child component and some
    // required roles
    render(
      <AuthorizedSection requiredRoles={['admin']}>
        {mockChildComponent}
      </AuthorizedSection>,
    );

    // Assert that the child component was called with the correct arguments
    expect(mockChildComponent).toHaveBeenCalledWith({
      isAuthorized: true,
      permissions: [],
    });

    // Assert that the rendered content contains the text "Authorized Content"
    expect(screen.getByText('Authorized Content')).toBeInTheDocument();
  });
});
