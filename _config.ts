import lume from "lume/mod.ts";
import favicon from "lume/plugins/favicon.ts";
import feed from "lume/plugins/feed.ts";
import metas from "lume/plugins/metas.ts";
import nav from "lume/plugins/nav.ts";
import picture from "lume/plugins/picture.ts";
import postcss from "lume/plugins/postcss.ts";
import imagick from "lume/plugins/imagick.ts";
import vento from "lume/plugins/vento.ts";

const site = lume();

site.use(favicon());
site.use(feed());
site.use(metas());
site.use(nav());
site.use(picture());
site.use(postcss());
site.use(imagick());
site.use(vento());
site.copy('assets/');

export default site;
