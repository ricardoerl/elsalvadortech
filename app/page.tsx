export default function Home() {
  return (
    <main className="app">
      <header className="header">
        <div className="header__logo">
          <a href="" className="uppercase font-black text-sm tracking-wide">
            El Salvador Tech
          </a>
        </div>
        <div className="header__search"></div>
        <div className="header__menu">
          <ul>
            <li>
              <a href="" className="uppercase font-medium text-xs">
                Acerca de
              </a>
            </li>
          </ul>
        </div>
      </header>
      <section className="hero">
        <p className="text-4xl w-1/2 text-center mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </section>
      <section className="main">Main</section>
      <section className="footer">Footer</section>
    </main>
  );
}
