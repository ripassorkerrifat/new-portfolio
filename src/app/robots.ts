import {MetadataRoute} from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://ripassorkerrifat.me";

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/dashboard/"],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
