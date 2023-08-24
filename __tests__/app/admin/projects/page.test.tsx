import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

// Mock react-redux hooks
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn() // you can also mock this if required elsewhere
}));

import Projects from '@/app/admin/projects/page';

jest.mock("@/components/admin/DataTable", () => () => <div>Mock DataTable</div>);
jest.mock("@/components/admin/projects/editproject", () => () => <div>Mock EditProject</div>);
jest.mock("@/components/admin/projects/addproject", () => () => <div>Mock AddProject</div>);


describe('Projects Component', () => {
  beforeEach(() => {
    // Provide a mock implementation for your selector
    (useSelector as jest.Mock).mockReturnValue({
      projects: [] // provide a dummy empty array or a mock projects array if required
    });
  });

  it('should render without crashing', () => {
    render(<Projects />);
    // you can add additional assertions if required
  });
});
