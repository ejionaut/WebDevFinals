
import './LoginForm.css';

function loginLanding() {
  return (
    <div className="login">
      <div> 
        <h1>Username: </h1>
        <input type="text" placeholder='User ID' maxLength={13}/>
      </div>
      <div className='passwordSection'>
        <h1>Password: </h1>
        <input type="password" placeholder='Password' maxLength={13}/>
      </div>
      <button className='loginBTN'> login </button>
    </div>
  );
}

export default loginLanding;
