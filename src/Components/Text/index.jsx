import './style.css';
import { useWindowSize } from '@uidotdev/usehooks';

export const Text = () => {
  const size = useWindowSize();
  const showText =
    size.width <= 820 || size.height <= 700
      ? 'headline headline--hide'
      : 'headline';
  return (
    <div className={showText}>
      <h1 className="muj-den">Můj skvělý den!!!</h1>
      <p className="title-text">
        Ahoj, jsem Dino-Mino, a spolu se mnou se budeš učit a bavit při
        plánování tvého dne.
      </p>
    </div>
  );
};
