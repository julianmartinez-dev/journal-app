import { authSlice } from '../../../src/store/auth/authSlice';
import { authenticatedState, initialState, notAuthenticatedState, testUser } from '../../fixtures/authFixtures';
import { AnyAction } from '@reduxjs/toolkit';


describe('Pruebas en authSlice',() =>{

    test('Debe de regresar el estado inicial y llamarse "auth"', () =>{

        expect(authSlice.name).toBe('auth');
        const state = authSlice.reducer( initialState, {} as unknown as AnyAction);
        expect(state).toEqual(initialState);
    })

    test('Debe de realizar la autenticacion', () => {
        const state = authSlice.reducer( initialState, authSlice.actions.login(testUser))
        expect(state).toEqual(authenticatedState)
    })

    test('Debe de realizar el logout sin argumentos', () => {
        const state = authSlice.reducer( authenticatedState, authSlice.actions.logout({}))
        expect(state).toEqual(notAuthenticatedState)
    })

    test('Debe de realizar el logout con argumentos', () => {
        const state = authSlice.reducer( authenticatedState, authSlice.actions.logout({errorMessage: 'Credenciales invalidas'}))
        expect(state).toEqual({
            ...notAuthenticatedState,
            errorMessage: 'Credenciales invalidas'
        })
    })

    test('Debe de cambiar el estado a "checking', () => {
        const state = authSlice.reducer( authenticatedState, authSlice.actions.checkingCredentials())
        expect(state.status).toBe('checking')
    })
})