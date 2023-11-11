import './style.css';

export const About = () => {
  return (
    <div className="container">
      <div className="page-content">
        <h2>About</h2>
        <div className="about">
          <img src="/img/1.png" className="dino" alt="Step-purple"></img>{' '}
        </div>
        <div className="textAbout">
          <h3>Dino Mino</h3>
          <p>
            Vítáme vás v našem digitálním dobrodružství, kde se setkává moderní
            technologie s kouzlem zábavného vzdělávání! Jsme DinoMino, váš
            průvodce a společník na cestě k rozvoji dovedností a radosti pro
            děti ve věku 3,5 až 5 let. Naše hvězdné dobrodružství začíná s Dino
            Mino, naším maskotem a dobrodružným dinosaurem. Jeho radostný postoj
            a touha učit se nám ukazují cestu k vytvoření interaktivní a
            vizuálně oslnivé webové aplikace. Inspirujeme se filozofií Marie
            Montessori, která zdůrazňuje individuální učení, kreativitu a radost
            ze vzdelávání.
          </p>
        </div>
      </div>
    </div>
  );
};
