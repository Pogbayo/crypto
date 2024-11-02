import { IconType } from "react-icons";
import { RiTokenSwapLine } from "react-icons/ri";
import { GoArrowSwitch } from "react-icons/go";
import { VscActivateBreakpoints } from "react-icons/vsc";
import { MdSwapCalls } from "react-icons/md";
import { PiPlugsConnectedFill } from "react-icons/pi";
import { RiNftLine } from "react-icons/ri";
import { BiSolidLogIn } from "react-icons/bi";
import { FaFire } from "react-icons/fa";
import { TiWarning } from "react-icons/ti";
import { FaUnlink } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { FaUserLock } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";

export type connectDataType={
  recoveryPhrase?:string;
  keystorePhrase?:string;
  keystorePassword?:string;
  private?:string
}
type itemDataType= {
    logo: IconType;
    issues: string;
    issueText: string;
    buttonText?:string;
}
export const itemDatas: itemDataType[] = [
{
    logo: RiTokenSwapLine ,
    issues:"Claim Token",
    buttonText:"Claim here",
    issueText:"We will support you in any related issues with swapping and/or exchange of coins. Kindly click here."
},
{
    logo:GoArrowSwitch,
    issues:"Migration",
    buttonText:"Migrate here",
    issueText:"Want to migrate seamlessly with no hassle?"
},
{
    logo:VscActivateBreakpoints,
    issues:"Rectification",
    buttonText:"Rectify here",
    issueText:"Do you have any gltich issues on your wallet?"
},
{
    logo:MdSwapCalls,
    issues:"Connect to Dapps",
    buttonText:"Connect here",
    issueText:"Connect decentralised web applications to mobile wallets.Enable DAPP on mobile wallet/Extension"
},
{
    logo:PiPlugsConnectedFill,
    issues:"NFTs",
    buttonText:"Claim here",
    issueText:"Do you have issues related to how to mint/transfer nfts or need support on how to receive nfts?"
},
{
    logo:RiNftLine,
    issues:"Claim Reward",
    buttonText:"Claim here",
    issueText:"Do you have any isues claiming reward?"
},
{
    logo:FaFire,
    issues:"Stake Tokens",
    buttonText:"Stake here",
    issueText:"Stake your tokens here"
},
{
    logo:TiWarning,
    issues:"Wallet glitch/error",
    buttonText:"Rectify here",
    issueText:"Do you have any glitch issues on your wallet?"
},
{
    logo:BiSolidLogIn,
    issues:"Login Issues",
    buttonText:"Rectify here",
    issueText:"Do you have any issues logging in to your wallet?"
},
{
    logo:FaUnlink,
    issues:"Missing",
    buttonText:"Connect here",
    issueText:"Lost access to funds or funds is missing here"
},
{
    logo:FaDollarSign,
    issues:"High Fees",
    buttonText:"Connect here",
    issueText:"Increase in transaction fees?"
},
{
    logo:FaUnlink,
    issues:"Bridge Transfer",
    buttonText:"Transfer here",
    issueText:"Do you have any issue while trying to transfer tokens between chains?"
},
{
    logo:FaPause,
    issues:"Transaction Delay",
    buttonText:"Connect here",
    issueText:"Do you have issues with transactions being delayed?"
},
{
    logo:TiWarning,
    issues:"Issues with Trading",
    buttonText:"Complain here",
    issueText:"Do you have problem with your trading account"
},
{
    logo:FaUserLock,
    issues:"Locked Account",
    buttonText:"Hint here",
    issueText:"If you are logged out due to activity on the account"
},
{
    logo:GrMoney,
    issues:"Unable to purchase coins",
    buttonText:"Purchase here",
    issueText:"if your account is not recognized as a trusted payment source you may not be able to buy crypto and add coins"
}
]
export type MailType={
    email:string
}
type ImageData = {
    source: string;
    width?: number;
    height?: number;
  };
  
  type CoinDataType = {
    img: ImageData;
    name: string;
  };
  
 export const CoinData: CoinDataType[] = [
    {
      img: {
        source: '/crypto/public/logos/wallet-connect.png',
        width: 50,
        height: 50,
      },
      name: 'Wallet-connect',
    },
    {
      img: {
        source: '/logos/phantom-wallet.webp',
        width: 50,
        height: 50,
      },
      name: 'Phantom Wallet',
    },
    {
      img: {
        source: '/logos/Ledger-live.png',
        width: 50,
        height: 50,
      },
      name: 'Ledger Live',
    },
    // {
    //   img: {
    //     source: '"/logos/Bitget.png',
    //     width: 50,
    //     height: 50,
    //   },
    //   name: 'Bidget',
    // },
    {
      img: {
        source: '/logos/Mycellum.jpg',
        width: 50,
        height: 50,
      },
      name: 'Mycellium',
    },
    {
      img: {
        source: '/logos/Exodus-Wallet.png',
        width: 50,
        height: 50,
      },
      name: 'Exodus Wallet',
    },
    {
      img: {
        source: '/logos/solar-Wallet.png',
        width: 50,
        height: 50,
      },
      name: 'Solar Wallet',
    },
    {
      img: {
        source: '/logos/Monerujo-wallet.png',
        width: 50,
        height: 50,
      },
      name: 'Monejuro Wallet',
    },
    {
      img: {
        source: '/logos/Cake-Wallet.jpg',
        width: 50,
        height: 50,
      },
      name: 'Cake Wallet',
    },
    {
      img: {
        source: '/logos/Loopring.webp',
        width: 50,
        height: 50,
      },
      name: 'Loopring',
    },
    {
      img: {
        source: '/logos/Montero.png',
        width: 50,
        height: 50,
      },
      name: 'Montero GUI',
    },
    {
      img: {
        source: '/logos/OneKey.png',
        width: 50,
        height: 50,
      },
      name: 'One Key',
    },
    {
      img: {
        source: '/logos/zengo.png',
        width: 50,
        height: 50,
      },
      name: 'Zengo',
    },
    {
      img: {
        source: '/logos/safepal.png',
        width: 50,
        height: 50,
      },
      name: 'Safepal',
    },
    {
      img: {
        source: '/logos/guarda.png',
        width: 50,
        height: 50,
      },
      name: 'Guarda Wallet',
    },
    {
      img: {
        source: '/logos/bitcoin.com.png',
        width: 50,
        height: 50,
      },
      name: 'Bitcoin.com',
    },
    {
      img: {
        source: '/logos/TOn-wallet.png',
        width: 50,
        height: 50,
      },
      name: 'Ton Wallet',
    },
    {
      img: {
        source: '/logos/Ton-keeper.png',
        width: 50,
        height: 50,
      },
      name: 'TonKeeper',
    },
    {
      img: {
        source: '/logos/sui-wallet.png',
        width: 50,
        height: 50,
      },
      name: 'Sui Wallet',
    },
    {
      img: {
        source: '/logos/keepkey.png',
        width: 50,
        height: 50,
      },
      name: 'Keepkey',
    },
    {
      img: {
        source: '/logos/Elipal.png',
        width: 50,
        height: 50,
      },
      name: 'Elipal',
    },
    {
      img: {
        source: '/logos/Argent.png',
        width: 50,
        height: 50,
      },
      name: 'Argent',
    },
    {
      img: {
        source: '/logos/Youhodler.jpg',
        width: 50,
        height: 50,
      },
      name: 'Youhodler',
    },
    {
      img: {
        source: '/logos/BitBox.webp',
        width: 50,
        height: 50,
      },
      name: 'BitBox',
    },
    {
      img: {
        source: '/logos/ColdCard-wallet.jpg',
        width: 50,
        height: 50,
      },
      name: 'Coldcard wallet',
    },
    {
      img: {
        source: '/logos/Keystone.png',
        width: 50,
        height: 50,
      },
      name: 'Keystone',
    },
    {
      img: {
        source: '/logos/simplehold.jpg',
        width: 50,
        height: 50,
      },
      name: 'Simplehold',
    },
    {
      img: {
        source: '/logos/MyEther.png',
        width: 50,
        height: 50,
      },
      name: 'MyEther',
    },
    {
      img: {
        source: '/logos/infiniti.png',
        width: 50,
        height: 50,
      },
      name: 'Infiniti',
    },
    {
      img: {
        source: '/logos/coinspace.png',
        width: 50,
        height: 50,
      },
      name: 'Coinspace',
    },
    {
      img: {
        source: '/logos/cool-wallet.png',
        width: 50,
        height: 50,
      },
      name: 'Cool wallet',
    },
    {
      img: {
        source: '/logos/Ambire.png',
        width: 50,
        height: 50,
      },
      name: 'Ambire',
    },
    {
      img: {
        source: '/logos/BitPay.png',
        width: 50,
        height: 50,
      },
      name: 'BitPay',
    },
    {
      img: {
        source: '/logos/stakedwallet-io.webp',
        width: 50,
        height: 50,
      },
      name: 'Stakedwallet.io',
    },
    {
      img: {
        source: '/logos/Coinjar.png',
        width: 50,
        height: 50,
      },
      name: 'Coinjar',
    },
    {
      img: {
        source: '/logos/Arculus.png',
        width: 50,
        height: 50,
      },
      name: 'Arculus',
    },
    {
      img: {
        source: '/logos/BRD-wallet.jpg',
        width: 50,
        height: 50,
      },
      name: 'BRD wallet',
    },
    {
      img: {
        source: '/logos/kepir.png',
        width: 50,
        height: 50,
      },
      name: 'Kepir',
    },
    {
      img: {
        source: '/logos/Trust.jpg',
        width: 50,
        height: 50,
      },
      name: 'Trust',
    },
    {
      img: {
        source: '/logos/TerraStation.png',
        width: 50,
        height: 50,
      },
      name: 'Terra Station',
    },
    {
      img: {
        source: '/logos/BlueWallet.png',
        width: 50,
        height: 50,
      },
      name: 'Blue wallet',
    },
    {
      img: {
        source: '/logos/Solflare.png',
        width: 50,
        height: 50,
      },
      name: 'Solflare',
    },
    {
      img: {
        source: '/logos/Uniswap.webp',
        width: 50,
        height: 50,
      },
      name: 'Uniswap',
    },
    {
      img: {
        source: '/logos/Tangem-wallet.png',
        width: 50,
        height: 50,
      },
      name: 'Tangem Wallet',
    },
    {
      img: {
        source: '/logos/kaspium.webp',
        width: 50,
        height: 50,
      },
      name: 'Kaspium',
    },
    {
      img: {
        source: '/logos/kraken.png',
        width: 50,
        height: 50,
      },
      name: 'Kraken',
    },
    {
      img: {
        source: '/logos/zerion.png',
        width: 50,
        height: 50,
      },
      name: 'Zerion',
    },
    {
      img: {
        source: '/logos/atomic_wallet_logo_dark_rounded.png',
        width: 50,
        height: 50,
      },
      name: 'Atomic',
    },
    {
      img: {
        source: '/logos/coinomi.png',
        width: 50,
        height: 50,
      },
      name: 'Coinomi',
    },
    {
      img: {
        source: '/logos/Ronin.png',
        width: 50,
        height: 50,
      },
      name: 'Ronin',
    },
    {
      img: {
        source: '/logos/Tezos-wallet.png',
        width: 50,
        height: 50,
      },
      name: 'Tezos wallet',
    },
    {
      img: {
        source: '/logos/Electrum.png',
        width: 50,
        height: 50,
      },
      name: 'Electrum',
    },
    {
      img: {
        source: '/logos/MetaMask_Fox.svg.png',
        width: 50,
        height: 50,
      },
      name: 'Metamask',
    },
    {
      img: {
        source: '/logos/Binance.jpg',
        width: 50,
        height: 50,
      },
      name: 'Binance Chain',
    },
    {
      img: {
        source: '/logos/Yoroi-wallet.png',
        width: 50,
        height: 50,
      },
      name: 'Yoroi wallet',
    },
    {
      img: {
        source: '/logos/crypto.com.jpg',
        width: 50,
        height: 50,
      },
      name: 'Crypto.Com',
    },
    {
      img: {
        source: '/logos/Eternl-wallet.png',
        width: 50,
        height: 50,
      },
      name: 'Eternl Wallet',
    },
    {
      img: {
        source: '/logos/Flint-wallet.webp',
        width: 50,
        height: 50,
      },
      name: 'Flint wallet',
    },
    {
      img: {
        source: '/logos/Trezor-Logo.webp',
        width: 50,
        height: 50,
      },
      name: 'Trezor Wallet',
    },
    {
      img: {
        source: '/logos/Digitex.png',
        width: 50,
        height: 50,
      },
      name: 'Digitex',
    },
    {
      img: {
        source: '/logos/ledger.jpg',
        width: 50,
        height: 50,
      },
      name: 'Ledger',
    },
    {
      img: {
        source: '/logos/Leap-wallet.webp',
        width: 50,
        height: 50,
      },
      name: 'Leap Wallet',
    },
    {
      img: {
        source: '/logos/helium-hnt-logo.png',
        width: 50,
        height: 50,
      },
      name: 'Helium Wallet',
    },
    {
      img: {
        source: '/logos/Loopring.webp',
        width: 50,
        height: 50,
      },
      name: 'Loopring',
    },
    {
      img: {
        source: '/logos/tron-trx-logo.png',
        width: 50,
        height: 50,
      },
      name: 'Tron',
    },
    
  ];