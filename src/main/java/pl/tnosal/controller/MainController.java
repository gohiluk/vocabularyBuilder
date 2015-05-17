package pl.tnosal.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by gohilukk on 2015-04-19.
 */
@Controller
public class MainController {

    @RequestMapping(value="/login", method = RequestMethod.GET)
    public String login() {
        return "login";
    }

    @RequestMapping(value="/index", method = RequestMethod.GET)
    public String index() {
        return "index2";
    }

}
