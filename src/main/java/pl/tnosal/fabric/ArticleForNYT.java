package pl.tnosal.fabric;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by gohilukk on 2015-05-27.
 */
public class ArticleForNYT extends Article {


    private static HashMap<String, HashMap<String, String>> host2cookies = new HashMap<String, HashMap<String, String>>();

    public ArticleForNYT(String url) {
        this.url = url;
    }

    @Override
    public String createArticle() {

        return "We don't know how to handle this site. For now... ;)";
    }


}
