import styles from "./HeroStyles.module.css";
import heroeImg from "../../../src/assets/hero-img.png";
import sun from "../../../src/assets/sun.svg";
import moon from "../../../src/assets/moon.svg";
import githubLight from "../../../src/assets/github-light.svg";
import linkedinLight from "../../../src/assets/linkedin-light.svg";
import githubDark from "../../../src/assets/github-dark.svg";
import linkedinDark from "../../../src/assets/linkedin-dark.svg";
import CV from "../../../src/assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroeImg}
          alt="Profile icon of Lazar Kostic"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Lazar <br /> Kostic
        </h1>
        <h2>Web Developer</h2>
        <span>
          <a href="https://github.com/HAOR97" target="_blank">
            <img src={githubIcon} alt="GitHub icon" />
          </a>
          <a href="https://www.linkedin.com/in/lazar-kostic/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern react web apps for comerical
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover" download>
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
