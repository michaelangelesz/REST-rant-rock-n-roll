const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
          <img
            src="/images/marion-botella-uaHShoIDGeo-unsplash.jpg"
            alt="Marion Botella"
          />
          <div>
            {" "}
            Photo by{" "}
            <a href="https://unsplash.com/@marionb_photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Marion Botella
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/uaHShoIDGeo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
