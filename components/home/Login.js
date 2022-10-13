import style from '../../styles/home/Login.module.css'

const Login = () => {
  const connectWithMetamask = useMetamask()

  return (
    <div className={style.wrapper}>
      <div className={style.loginCard}>
        <div>Please Connect your Wallet to use this App</div>
        <button className={style.cta} onClick={connectWithMetamask}>
          Connect MetaMask
        </button>
      </div>
    </div>
  )
}

export default Login
