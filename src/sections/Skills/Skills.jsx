import SkillList from "../../common/SkillList";
import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-light.svg';

export default function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
        <SkillList src={checkMarkIcon} skill="React" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Node JS" />
        <SkillList src={checkMarkIcon} skill=".NET" />
        <SkillList src={checkMarkIcon} skill="GIT" />
        <SkillList src={checkMarkIcon} skill="SQL" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="ReactNative" />
        <SkillList src={checkMarkIcon} skill="Docker" />
        <SkillList src={checkMarkIcon} skill=".NET" />
        <SkillList src={checkMarkIcon} skill="C#" />
      </div>
    </section>
  );
}
