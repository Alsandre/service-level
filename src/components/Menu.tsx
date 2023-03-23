import Icon from "./Icon";
import MarlinLogo from "./Logo";

export function Menu(): JSX.Element {
  return (
    <div
      className={
        "fixed left-[14px] w-[70px] h-[620px] bg-marlin mt-4 py-4 rounded-3xl flex flex-col justify-between"
      }
    >
      <div
        className={
          "w-[70px] h-[320px] flex flex-col gap-4 items-center justify-center"
        }
      >
        <MarlinLogo />
        <Icon icon="customer" />
        <Icon icon="shopping-bag" />
        <Icon icon="catalog" />
        <Icon icon="team-management" />
        <Icon icon="invoice" />
        <Icon icon="settings" />
      </div>
      <div
        className={
          "w-[70px] h-16 mb-8 flex flex-col gap-4 items-center justify-center"
        }
      >
        <Icon icon="terms-and-conditions" />
        <Icon icon="paper" />
      </div>
    </div>
  );
}
