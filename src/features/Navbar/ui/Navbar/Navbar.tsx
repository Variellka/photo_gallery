import { useAppDispatch } from '../../../../shared/hooks/useAppDispatch/useAppDispatch';
import { authActions } from '../../../../features/Authentication';
import './Navbar.scss'

const Navbar = () => {
    const dispatch = useAppDispatch()

    const onLogout = () => {
        dispatch(authActions.deleteAuthData())
    }

    return (
        <div className='Navbar'>
            <button className='' onClick={onLogout}>log out</button>
        </div>
    );
};

export default Navbar;