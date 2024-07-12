import style from "./FooterStyle.module.css";

export default function Footer() {
  return (
    <section id="footer" className={style.container}>
      <p>
        {" "}
        &copy; 2024 Lazar Kostic. <br />
        All rights reserved.
      </p>
    </section>
  );
}
