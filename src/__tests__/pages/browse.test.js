import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Browse } from '../../pages';
import { FirebaseContext } from '../../context/firebase';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({}),
}));

jest.mock('../../utils', () => ({
  selectionFilter: () => ({
    series: [
      {
        title: 'Documentaries',
        data: [
          {
            id: 'series-1x',
            title: 'Tiger King',
            description:
              'An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.',
            genre: 'documentaries',
            maturity: '18',
            slug: 'tiger-king',
          },
        ],
      },
    ],
    films: [
      {
        title: 'Suspense',
        data: [
          {
            id: 'film-1x',
            title: 'Amanda Knox',
            description: 'Amanda Marie Knox is an American woman who spent almost four years in an Italian prison.',
            genre: 'documentaries',
            maturity: '12',
            slug: 'amanda-knox',
          },
        ],
      },
    ],
  }),
}));

const firebase = {
  auth: jest.fn(() => ({
    currentUser: { displayName: 'test', photoURL: 1, email: 'teat@test.com' },
    signOut: jest.fn(() => Promise.resolve('I am signed out!')),
  })),
  firestore: jest.fn(() => ({
    collection: jest.fn(() => ({
      get: jest.fn(() => Promise.resolve('I get content!')),
      add: jest.fn(() => Promise.resolve('I add content!')),
    })),
  })),
};

describe('<Browse />', () => {
  it('renders the browse page with <SelectProfileContainer />', async () => {
    const { getByTestId, getByPlaceholderText, queryByTestId, debug } = render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <Browse />
        </FirebaseContext.Provider>
      </Router>
    );

    await act(async () => {
        await fireEvent.change(getByPlaceholderText('Email address'), { target: { value: 'karl@gmail.com' } });
        await fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password' } });
        fireEvent.click(getByTestId('sign-in'));
  
        expect(getByPlaceholderText('Email address').value).toBe('karl@gmail.com');
        expect(getByPlaceholderText('Password').value).toBe('password');
        expect(queryByTestId('error')).toBeFalsy();
      });

  });
});