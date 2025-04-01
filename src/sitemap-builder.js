import Sitemap from "react-router-sitemap";
import Router from "./routes/Router";

new Sitemap(Router).build("https://college.la.edu.kg").save("./sitemap.xml");
