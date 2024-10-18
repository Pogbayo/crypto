import styles from "./coin.module.css";
import { SiWalletconnect } from "react-icons/si";
import { CoinData } from "../../data";
import { useNavigate } from "react-router-dom";
const Coin = () => {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/phrase");
  };
  return (
    <div className={styles.container}>
      <header>
        <nav>
          <SiWalletconnect size={40} color="blue" />
        </nav>
      </header>
      <div className={styles.connect}>Connect Wallet</div>
      <p className={styles.open}>
        Open protocol for connecting Wallets to Dapps
      </p>
      <div className={styles.coinContainer}>
        {CoinData.map((coin, index) => {
          return (
            <div
              key={index}
              onClick={handleClickButton}
              className={styles.coinItem}
            >
              <img src={coin.img.source} className={styles.icon} />
              <p className={styles.coinText}>{coin.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Coin;
