import React from "react";
import Card from "./card";
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';

const Articles = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5);
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return (
      <Container className="justify-content-md-center">
	<CardDeck className="justify-content-md-center">
          {leftArticles.map((article, i) => {
            return (
              <Card article={article} key={`article__left__${article.slug}`} />
            );
          })}
          {rightArticles.map((article, i) => {
              return (
                <Card
                  article={article}
                  key={`article__left__${article.slug}`}
                />
              );
          })}
        </CardDeck>
      </Container>
  );
};

export default Articles;
