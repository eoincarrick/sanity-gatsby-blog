export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62852609fd3c8200a4c32dbc",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-kcys4auq",
                  apiId: "76849752-20fb-4b14-b749-4043987c5519",
                },
                {
                  buildHookId: "6285260999f64c0932b10185",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-ma6t2frm",
                  apiId: "477719e3-e4f4-49d2-b8e7-e69dcea6b6fd",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/eoincarrick/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-ma6t2frm.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
