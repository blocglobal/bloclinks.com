import styles from "./BlocLink.module.css";

export default function BlocLink({ href, children }) {
  return (
    <a href={href} className={styles.BlocLink} target="_blank">
      {children}
    </a>
  );
}
