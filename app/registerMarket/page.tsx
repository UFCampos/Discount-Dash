import RegisterMarketsForm from "@/components/forms/registerMarkets/RegistermarketsForm";
import style from "@/components/forms/registerMarkets/RegisterMarkets.module.css";

const RegisterMarket = () => {
  return (
    <main className={style.registerCont}>
      <div className={style.imgCont}></div>
      <div className={style.formCont}>
        <RegisterMarketsForm />
      </div>
    </main>
  );
};

export default RegisterMarket;
