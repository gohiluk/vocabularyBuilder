package pl.tnosal.fabric;

/**
 * Created by gohilukk on 2015-05-27.
 */
public class ArticlesFactoryImpl implements ArticlesFactory {

    @Override
    public Article productArticle(String url) {
        if (url.contains("barcablaugranes.com")) {
            return new ArticleForBarcaBlaugranes(url);
        }
        if (url.contains("nytimes.com")) {
            return new ArticleForNYT(url);
        }
        return new ArticleHTML5(url);
    }
}
