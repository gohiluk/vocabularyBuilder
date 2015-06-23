package pl.tnosal.fabric;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

import java.io.IOException;

/**
 * Created by gohilukk on 2015-05-28.
 */
public class ArticleForBarcaBlaugranes extends Article {

    public ArticleForBarcaBlaugranes(String url){
        this.url = url;
    }

    @Override
    public String createArticle() {
        Document doc = null;
        try {
            doc = Jsoup.connect(url).timeout(20000).get();
            Elements elements = doc.select("div.l-container");
            if (elements != null && elements.size()>0)
                return elements.outerHtml();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return "Something went wrong";
    }
}
