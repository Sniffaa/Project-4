import './register.css';

function register() {
  return (
    <div className='tyxw'>
      <h1 className='fqqb'>Register</h1>
      <p className='dwal'>Username</p>
      <input className='fgbm'></input>
      <p className='ugio'>Password</p>
      <input className='nals'></input>
      <div className='cgqy'>
        <input className='vuhx' type='checkbox'></input>
        <p className='eaza'>By clicking here, I state that I have read and understood the terms and conditions.</p>
      </div>
      <button className='vcxh'>Register</button>
      <a className='jhav' href='/login'>Already have an account? Log in</a>
    </div>
  );
}

export default register;
