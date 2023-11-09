import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import fetchMock from 'jest-fetch-mock';

import AddCollaborators from './';
import { act } from 'react-dom/test-utils';
import { userEvent } from '@storybook/testing-library';

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('<AddCollaborators />', () => {
  test('should render email input and select component', () => {
    render(<AddCollaborators />);

    const emailInput = screen.getByLabelText('Email');
    const selectElement = screen.getByText('Nivel de acesso');
    const saveButton = screen.getByText('SALVAR');

    expect(emailInput).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
    expect(selectElement).toBeInTheDocument();
  });

  test('should display error message when submitting form without email and level access', async () => {
    render(<AddCollaborators />);

    const saveButton = screen.getByText('SALVAR');
    await act(async () => {
      userEvent.click(saveButton);
    });

    const errorMessageEmail = screen.getByText('Informe um email válido');
    const errorMessageLevelAccess = screen.getByText('Campo Obrigatório');
    expect(errorMessageEmail).toBeInTheDocument();
    expect(errorMessageLevelAccess).toBeInTheDocument();
  });

  test('data is send correct', async () => {
    render(<AddCollaborators />);

    const emailInput: HTMLInputElement = screen.getByLabelText('Email');
    const selectElement = screen.getByText('Nivel de acesso');
    const selectElementItem = screen.getByText('Admin Super');

    await act(async () => {
      userEvent.type(emailInput, 'test@example.com');
      userEvent.click(selectElement);
      userEvent.click(selectElementItem);
    });

    expect(selectElement.textContent).toBe('Admin Super');
    expect(emailInput.value).toBe('test@example.com');
  });
});
