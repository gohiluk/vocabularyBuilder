package pl.tnosal.controller;

import com.sun.org.apache.xml.internal.utils.URI;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import pl.tnosal.fabric.ArticlesFactory;
import pl.tnosal.fabric.ArticlesFactoryImpl;
import pl.tnosal.model.Article;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by gohilukk on 2015-04-19.
 */
@Controller
public class MainController {

    @RequestMapping(value="/login", method = RequestMethod.GET)
    public String login() {
        return "login";
    }

    @RequestMapping(value="/", method = RequestMethod.GET)
    public String index() {
        return "index2";
    }

    @RequestMapping(value="/parse", method = RequestMethod.POST)
    @ResponseBody
    public void parse(HttpServletRequest request, HttpServletResponse response, @RequestBody Article article) throws IOException {
        String url = java.net.URLDecoder.decode(article.getUrl(), "UTF-8");

        ArticlesFactory af = new ArticlesFactoryImpl();
        pl.tnosal.fabric.Article a = af.productArticle(url);

        String result = "";
        if (a!= null) {
           result = a.createArticle();
        }

        PrintWriter out = response.getWriter();
        out.write(result);
    }
}
