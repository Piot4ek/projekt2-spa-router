import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun",
    autor: "Jan Nowak",
    text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, minima laudantium? Velit minima ab incidunt nulla, natus magni est quam tempora delectus asperiores accusantium placeat soluta cupiditate voluptatem rem neque.",
  },
  {
    id: 2,
    title: "Czym jest paradoks fermiego?",
    autor: "Jan Nowak",
    text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, minima laudantium? Velit minima ab incidunt nulla, natus magni est quam tempora delectus asperiores accusantium placeat soluta cupiditate voluptatem rem neque.",
  },
  {
    id: 3,
    title: "Ciemna materia i ciemna energia?",
    autor: "Jan Nowak",
    text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, minima laudantium? Velit minima ab incidunt nulla, natus magni est quam tempora delectus asperiores accusantium placeat soluta cupiditate voluptatem rem neque.",
  },
];

const artList = articles.map((article) => (
  <Article key={article.id} {...article} />
));
const HomePage = () => {
  return <div className="home">{artList}</div>;
};

export default HomePage;
