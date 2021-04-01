import ArticleItem from "./ArticleItem";
import artStyle from "../styles/Article.module.css";

const ArticleStyle = ({ articles }) => {
  return (
    <div className={artStyle.grid}>
      {articles.map((article) => (
        <ArticleItem article={article} />
      ))}
    </div>
  );
};

export default ArticleStyle;
