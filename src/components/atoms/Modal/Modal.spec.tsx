import { render, screen, waitFor } from '@testing-library/react';
import { Modal } from './';
import { act } from 'react-dom/test-utils';
import { userEvent } from '@storybook/testing-library';

jest.mock('lucide-react', () => ({
  X: jest.fn().mockImplementation(props => (
    <svg data-testid="mock-icon" {...props}>
      <line x1="0" y1="0" x2="10" y2="10" />
      <line x1="0" y1="10" x2="10" y2="0" />
    </svg>
  )),
}));

describe('Modal', () => {
  test('renders modal component and handles modal open/close', async () => {
    const handleModal = jest.fn();

    render(
      <Modal.ModalRoot isVisible={true}>
        <Modal.Content isVisible={true} width="400px">
          <>
            <div>Modal Content</div>
            <Modal.IconClose handleModal={handleModal} />
          </>
        </Modal.Content>
      </Modal.ModalRoot>,
    );

    const modalContent = screen.getByText('Modal Content');
    const mockIcon = screen.getByTestId('mock-icon');

    act(() => {
      userEvent.click(mockIcon);
    });

    await waitFor(() => {
      expect(modalContent).toBeInTheDocument();
      expect(mockIcon).toBeInTheDocument();
      expect(mockIcon).toContainHTML('<line x1="0" y1="0" x2="10" y2="10" />');
      expect(handleModal).toHaveBeenCalled();
    });
  });
});
