import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <MyLinks />
      {/* <div className={styles.headingButtons}> */}

      <OutlineButton
        onClick={() =>
          window.open(
            "C:/Users/Asus/AppData/Local/Microsoft/Windows/INetCache/IE/F9OLIWQM/Harikrishnan%20(1)[1].pdf"
          )
        }
      >
        My Resume
      </OutlineButton>
      {/* </div> */}
    </header>
  );
};

{
  /* <a href="https://www.buymeacoffee.com/jcdevz" target="_blank">
  <img
    src="https://cdn.buymeacoffee.com/buttons/v2/arial-violet.png"
    alt="Buy Me A Coffee"
    style={{
      height: "46px !important",
      width: "185px !important",
    }}
  />
</a> */
}
