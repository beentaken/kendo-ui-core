package com.kendoui.spring.controllers.autocomplete;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.kendoui.spring.models.DataSourceRequest;
import com.kendoui.spring.models.DataSourceResult;
import com.kendoui.spring.models.ProductDao;

@Controller("remote-server-filtering-controller")
@RequestMapping(value="/web/autocomplete/")
public class ServerFilteringController {
    @Autowired 
    private ProductDao product;

    @RequestMapping(value = "/server-filtering", method = RequestMethod.GET)
    public String index() {
        return "web/autocomplete/server-filtering";
    }
    
    @RequestMapping(value = "/remote-data/read", method = RequestMethod.POST)
    public @ResponseBody DataSourceResult read(@RequestBody DataSourceRequest request) {
        return product.getList(request);
    }
}