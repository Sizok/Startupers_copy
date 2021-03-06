﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace startupers_project
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");


            routes.MapRoute(
                name: "Feed",
                url: "feed",
                defaults: new { controller = "Home", action = "Index" }
                );
            routes.MapRoute(
                name: "Profile",
                url: "profile",
                defaults: new { controller = "Home", action = "Index" }
                );
            routes.MapRoute(
                name: "Chat",
                url: "chat",
                defaults: new { controller = "Home", action = "Index" }
                );
            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
