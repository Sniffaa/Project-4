import './register.css';

function register() {
  return (
    <div className='tyxw'>
      <h1 className='fqqb'>Register</h1>
      <h2 className='dwal'>Username</h2>
      <input className='fgbm'></input>
      <h2 className='ugio'>Password</h2>
      <input className='nals'></input>
      <div className='cgqy'>
        <input className='vuhx' type='checkbox'></input>
        <h3 className='eaza'>By clicking here, I state that I have read and understood the terms and conditions.</h3>
      </div>
      <button className='vcxh'>Register</button>
      <a className='jhav' href='/login'>Already have an account? Log in</a>
    </div>
  );
}

export default register;
