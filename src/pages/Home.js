import { React } from "react";
import { Link } from "react-router-dom";
import options from "../consts/options";
import TopPage from "../components/Home/TopPage";
import Header from "../components/Home/Header";
import HeaderOptions from "../components/Home/HeaderOptions";
import Description from "../components/Home/Description";
import Search from "../components/Home/Search";
import Categories from "../components/Home/Categories";
import MiddleContent from "../components/Home/MiddleContent";
import CharactersContent from "../components/Home/CharactersContent";

export default function Home() {
  function search(e) {
    e.preventDefault();
  }

  return (
    <>
      <TopPage>
        <Header>
          <h4>Leites de Elétrica - UFCG</h4>
          <HeaderOptions>
            <li>
              <p>Início</p>
              <ion-icon name="library"></ion-icon>
            </li>
            <li>
              <p>Sign up</p>
              <ion-icon name="person-add"></ion-icon>
            </li>
            <li>
              <p>Sign in</p>
              <ion-icon name="person"></ion-icon>
            </li>
            <li>
              <p>Sobre</p>
              <ion-icon name="information-circle"></ion-icon>
            </li>
          </HeaderOptions>
        </Header>
        <Description>
          <h1>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </h1>
          <h2>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </h2>
        </Description>
        <Search>
          <form onSubmit={search}>
            <input type="text" placeholder="Search"></input>
            <button type="submit">
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </form>
        </Search>
        <Categories>
          <p className="text">
            Alguns canais e sites que podem te ajudar ao longo da graduação:
          </p>
          <span>
            {options.map((i) => (
              <Link key={i.id} to={"/"} style={{ textDecoration: "none" }}>
                <div>
                  <div className="externalCircle">
                    <div className="middleCircle">
                      <div className="internalCircle">
                        <img src={i.image} alt={`${i.category}`}></img>
                      </div>
                    </div>
                  </div>
                  <p>{i.category}</p>
                </div>
              </Link>
            ))}
          </span>
        </Categories>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h3>Ver todas as disciplinas</h3>
        </Link>
      </TopPage>
      <MiddleContent></MiddleContent>
      <CharactersContent></CharactersContent>
    </>
  );
}
