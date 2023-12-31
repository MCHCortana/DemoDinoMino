import './style.css';
// import { useWindowSize } from '@uidotdev/usehooks'; Vercel FIX

export const TynaPage = () => {
  return (
    <div className="container">
      <div className="page-content">
        <div className="about">
          <img src="/img/Tyna.png" className="paw-blue" alt="Step-purple"></img>{' '}
        </div>
        <div className="textTyna">
          <h3>Týna kodérka--loading...</h3>
          <strong>"Snažím se stát lepší verzí svého včerejšího já." </strong>
          <p>
            Přihlásila jsem se do akademie, protože chci mít pevný základ ve
            FrontEnd technologiích, a zároveň se těším na své první velké
            dobrodružství - práci na projektu <strong>DinoMino</strong>. Těším
            se na kreativní práci v týmu a poznávání nových lidiček v oblasti
            vývoje. 🚀💻
          </p>
          <p>
            Očekávám z tohohle projektu takový Javascriptový a Reactový
            adrenalin, že by se dal stáčet do energeťáku. Bude to pro mě první
            obří kolotoč kódu, kde si vyzkouším všechno. Těším se na všelijaké
            zákruty, kódové akrobatické kousky a týmové debaty. Věřím, že po
            tomhle projektu budu připravena na další level a moje portfolio se
            rozšíří jako vesmír při BigBangu...1 z nekonečna!
          </p>
        </div>
      </div>
    </div>
  );
};
