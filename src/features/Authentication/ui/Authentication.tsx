import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../../shared/hooks/useAppDispatch/useAppDispatch';
import Loader from '../../../shared/ui/Loader/Loader';
import { authAPI } from '../model/services/authAPI';
import { authActions, selectCurrentUser } from '../model/slice/authSlice';
import './Authentication.scss';

const Authentication = () => {
    const authUser = useSelector(selectCurrentUser)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [login, {isLoading, isError, data }] = authAPI.useLoginMutation()
    const [validationError, setValidationError] = useState('')
    const dispatch = useAppDispatch()

    const onLogin = async () => {
        if (!username || !password) {
            setValidationError('fields should not be empty!')
        } else {
            await login({username,password});
            setValidationError('');
        }
    }

    useEffect(() => {
        if (data?.token) {
            dispatch(authActions.setCredentials({ user: {username, id: data.id}, token: data.token }))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data?.token])

    if (authUser) {
        return  (
            <div className='Authentication'>
                <div>
                    <p className='auth_success'>hi, {authUser.username}! &#x1F495;</p>
                    <NavLink
                        to='/gallery'
                    >
                        <p className='auth_link'>&#x21FE; go to gallery! &#x21FD;</p>
                    </NavLink>
                </div>
            </div>
        )
    }
    
    return (
        <div className='Authentication'>
            <div>
                <p className='auth_text'>log in to enjoy the rest of the site</p>

                {isError && <p className='error'>invalid user!</p>}
                {validationError &&  <p className='error'>{validationError}</p>}

                <div className='auth_field'>
                    <p>username:</p>
                    <input 
                        className='auth_input' 
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                </div>
                <div className='auth_field'>
                    <p>password:</p>
                    <input 
                        className='auth_input'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                {isLoading ? 
                    <Loader />
                    : 
                    <button 
                        className='auth_button'
                        onClick={onLogin}
                    >
                        log in
                    </button>}
                
            </div>
        </div>
    );
};

export default Authentication;