import './style.css';
// import { useWindowSize } from '@uidotdev/usehooks';

export const Text = () => {
  // const size = useWindowSize();
  const showText =
    window.innerWidth <= 820 || window.innerHeight <= 700
      ? 'headline headline--hide'
      : 'headline';
  return (
    <div className={showText}>
      <h1 className="muj-den">Můj skvělý den!!!</h1>
      <p className="title-text">
        Ahoj, jsem Dino-Mino, spolu se mnou se budeš učit a bavit při plánování
        tvého dne - prvotní koncept aplikace Dino Míno Můj první Plánovač.
      </p>
    </div>
  );
};
