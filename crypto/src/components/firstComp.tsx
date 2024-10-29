import { FaViacoin } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { LiaWalletSolid } from "react-icons/lia";
import { SiBitcoinsv } from "react-icons/si";
import { SiTether } from "react-icons/si";
import { SiDogecoin } from "react-icons/si";
import { SiInfiniti } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { itemDatas } from "../data";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MailType } from "../data";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const firstComp = () => {
  const schema: ZodType<MailType> = z.object({ email: z.string().email() });
  const { register, handleSubmit, reset } = useForm<MailType>({
    resolver: zodResolver(schema),
  });

  const submitData = (data: MailType) => {
    console.log(data);
    reset();
  };
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/coin");
  };
  return (
    <>
      <div className="firstCopmDiv">
        <div className="webDetails">
          <nav>
            <FaViacoin size={50} className="icon" />
            <p className="tokenText"> Token Dapps</p>
          </nav>
          <div className="curvedDiv">
            <p className="web3">Web3.0</p>
            <p className="people">People-powered Networks</p>
          </div>
          <div className="bigTexts">
            <h1 className="first">See The Future.</h1>
            <h1 className="second">
              Transact With <br />
              confidence.
            </h1>
            <p className="modern">
              A modern app that allows you to import and manage all of <br />{" "}
              your crypto wallets account in one place
            </p>
            <div className="btnCon">
              <button onClick={handleClickButton} className="btn1">
                CONNECT
              </button>
              <button onClick={handleClickButton} className="btn2">
                GET STARTED
              </button>
            </div>
            <section className="uw">
              <div className="userOne">
                <HiUsers size={28} />
                <span className="tuta">2000</span>
                <p className="plus">+ users</p>
              </div>
              <div className="userTwo">
                <LiaWalletSolid size={20} />
                <span className="sevi">70</span>
                <p> + wallets</p>
              </div>
            </section>
          </div>
        </div>
        <div className="easily">
          <p className="was">
            Easily import your existing wallets with 12/18/24-word recovery
            phrase
          </p>
          <article>
            <div className="artText">
              Made possible with your favourites <br /> cryptocurrencies
            </div>
            <div className="coins">
              <SiBitcoinsv size={50} color="yellow" />
              <SiTether size={50} color="green" />
              <SiDogecoin size={50} color="white" />
              <SiInfiniti size={50} />
              <FaEthereum size={50} />
            </div>
          </article>
        </div>
      </div>
      <section className="two">
        <div className="mainBox">
          {itemDatas.map((item) => {
            return (
              <div className="box">
                <p className="mogo">
                  <item.logo size={50} />
                </p>
                <p className="itemIssue">{item.issues}</p>
                <p className="itemIssueText">{item.issueText}</p>
                <button onClick={handleClickButton} className="itemButton">
                  {item.buttonText}
                </button>
              </div>
            );
          })}
        </div>
      </section>
      <footer>
        <div className="sub">
          <p className="subscribe">Subscribe</p>
          <p className="join">
            Join the hundreds of teams using our services, subscribe to get
            exclusive news and <br /> offer
          </p>
          <form onSubmit={handleSubmit(submitData)}>
            <input
              {...register("email")}
              type="text"
              placeholder="Email address"
              className="subInput"
            />
            <button className="subButton" type="submit">
              Subscribe
            </button>
          </form>
        </div>
        <div className="bottom">
          <FaViacoin size={60} />
          <div className="lilIcons">
            <FaDiscord color="blue" />
            <FaXTwitter color="blue" />
            <FaInstagramSquare color="blue" />
            <FaYoutube color="blue" />
          </div>
        </div>
        <div className="last">
          Copyright A&copy; 2023. Made with love for you. All rights reserved
        </div>
      </footer>
    </>
  );
};

export default firstComp;
