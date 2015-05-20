package pl.tnosal.model;

/**
 * Created by gohilukk on 2015-05-20.
 */
public class Article {

    public Article() {

    }

    public Article(String url) {
        this.url = url;
    }

    public String url;

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
