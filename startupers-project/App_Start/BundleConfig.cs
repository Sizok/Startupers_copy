﻿using System.Web;
using System.Web.Optimization;

namespace startupers_project
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                      "~/Scripts/angular.js",
                      "~/Scripts/angular-local-storage.js",
                      "~/Scripts/angular-messages.js",
                      "~/Scripts/angular-ui-router.js",
                      "~/Scripts/angular-ui/ui-bootstrap.js",
                      "~/Scripts/angular-ui/ui-bootstrap-tpls.js",
                      "~/Scripts/ng-infinite-scroll.js"
                      ));

            bundles.Add(new ScriptBundle("~/bundles/angular-comp").Include(
                      "~/app/app.js",
                      "~/app/layout/topMenuComponent.js",
                      "~/app/layout/loginModalComponent.js",
                      "~/app/feed/feed.js",
                      "~/app/feed/feedComponent.js",
                      "~/app/feed/postModalComponent.js",
                      "~/app/home/home.js",
                      "~/app/home/homeComponent.js",
                      "~/app/profile/profile.js",
                      "~/app/profile/profileComponent.js",
                      "~/app/chat/chat.js",
                      "~/app/chat/chatComponent.js",
                      "~/app/services/feedService.js",
                      "~/app/services/linkService.js",
                      "~/app/services/loginService.js",
                      "~/app/services/postModalService.js",
                      "~/app/services/currentUserService.js",
                      "~/app/services/cutLinkService.js",
                      "~/app/services/cutLinkService.js",
                      "~/app/services/chatService.js",
                      "~/app/derectives/scrollDerective.js",
                      "~/app/derectives/hidePostImageDerective.js"
                      ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/sass/style.css"));
        }
    }
}
