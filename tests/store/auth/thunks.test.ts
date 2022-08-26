import { checkingCredentials, login, logout } from '../../../src/store/auth';
import { checkingAuthentication, startCreatingUserWithEmailPassword, startGoogleSignIn, startLogout, startSignInWithEmailPassword } from '../../../src/store/auth/thunks';
import { testUser } from '../../fixtures/authFixtures';
import { loginWithEmailPassword, logoutFirebase, registerWithEmailPassword, signInWithGoogle } from '../../../src/firebase/providers';
;


jest.mock('../../../src/firebase/providers');

describe('Pruebas en authThunks', () =>{
    const dispatch = jest.fn();
    beforeEach(() => {
        jest.clearAllMocks();
    })
    
    test('debe de invocar el checkingCredentials', async () => {
        await checkingAuthentication()(dispatch);
        expect( dispatch ).toHaveBeenCalledWith(checkingCredentials());
        
    })

    test('startGoogleSignin debe de llamar checkingCredentials y login', async () => {
        const loginData = {
            ok: true,
            ...testUser
        }
        await (signInWithGoogle as jest.Mock).mockResolvedValue(loginData);

        //thunk
        await startGoogleSignIn()(dispatch);

        expect( dispatch ).toHaveBeenCalledWith(checkingCredentials());
        expect( dispatch ).toHaveBeenCalledWith(login( loginData));

    })

    test('startGoogleSignin debe de llamar checkingCredentials y logout - ERROR', async () => {
      const loginData = {
        ok: false,
        errorMessage: 'Error en el login'
      };

        await (signInWithGoogle as jest.Mock).mockResolvedValue(loginData)

        //thunk
        await startGoogleSignIn()(dispatch);
        expect( dispatch ).toHaveBeenCalledWith(checkingCredentials());
        expect( dispatch ).toHaveBeenCalledWith( logout( {errorMessage: loginData.errorMessage} ) );
    });


    test('startLoginEmailPassword debe de llamar checkingCredentials y login - EXITO', async () => {
        const loginData = {
            ok: true,
            ...testUser
        }
        const formData = {
            email: testUser.email,
            password: '123456'
        }

        await (loginWithEmailPassword as jest.Mock).mockResolvedValue(loginData);

        await startSignInWithEmailPassword( formData.email, formData.password )(dispatch);

        expect( dispatch ).toHaveBeenCalledWith(checkingCredentials());
        expect( dispatch ).toHaveBeenCalledWith(login( loginData));
    })
    
    test('startLoginEmailPassword debe de llamar checkingCredentials y logout - ERROR', async () => {
        const loginData = {
            ok: false,
            errorMessage: 'Error en el login'
        }
        const formData = {
            email: testUser.email,
            password: '123456'
        }

        await (loginWithEmailPassword as jest.Mock).mockResolvedValue(loginData);

        await startSignInWithEmailPassword( formData.email, formData.password )(dispatch);

        expect( dispatch ).toHaveBeenCalledWith(checkingCredentials());
        expect( dispatch ).toHaveBeenCalledWith(logout( {errorMessage: loginData.errorMessage} ));
    })

    test('startLogout debe de llamar logoutFirebase y logout',async () => {
        await startLogout()(dispatch);

        expect( logoutFirebase ).toHaveBeenCalled();
        expect( dispatch ).toHaveBeenCalledWith( logout({errorMessage: null}) );
    })

})