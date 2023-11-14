import './Authentication.scss';

const Authentication = () => {
    return (
        <div className='Authentication'>
            <div>
                <div className='auth_field'>
                    <p>username:</p>
                    <input className='auth_input'/>
                </div>
                <div className='auth_field'>
                    <p>password:</p>
                    <input className='auth_input'/>
                </div>
                <button className='auth_button'>log in</button>
            </div>
        </div>
    );
};

export default Authentication;