function test(input) {
  const links = input.match(/(((?<=href=\")[^\"]+))/gi);
  console.log(links);
  const content = input.match(/(?<=<a.*\>).+(?=<\/a>)/g) || [];
  const arr = [];
  links.map((v, i) => arr.push([v, content[i]]));
  let result = '';
  arr.forEach((v) => {
    result += v.join(',') + '\n';
  });
  console.log(result);
  return result;
}

const input = `<div class="portal" role="navigation" id='p-lang'>
<h3>Languages</h3>
<div class="body">
<ul>
<li class="interwiki-simple"><a href="//simple.wikipedia.org/wiki/" title="" lang="simple" hreflang="simple">Simple English</a></li>
<li class="interwiki-ar"><a href="//ar.wikipedia.org/wiki/" title="" lang="ar" hreflang="ar"></a></li>
<li class="interwiki-id"><a href="//id.wikipedia.org/wiki/" title="" lang="id" hreflang="id">Bahasa Indonesia</a></li>
<li class="interwiki-ms"><a href="//ms.wikipedia.org/wiki/" title="" lang="ms" hreflang="ms">Bahasa Melayu</a></li>
<li class="interwiki-bg"><a href="//bg.wikipedia.org/wiki/" title="" lang="bg" hreflang="bg"></a></li>
<li class="interwiki-ca"><a href="//ca.wikipedia.org/wiki/" title="" lang="ca" hreflang="ca">Catal</a></li>
<li class="interwiki-cs"><a href="//cs.wikipedia.org/wiki/" title="" lang="cs" hreflang="cs">esky</a></li>
<li class="interwiki-da"><a href="//da.wikipedia.org/wiki/" title="" lang="da" hreflang="da"><b>Dansk</b></a></li>
<li class="interwiki-de"><a href="//de.wikipedia.org/wiki/" title="" lang="de" hreflang="de">Deutsch</a></li>
<li class="interwiki-et"><a href="//et.wikipedia.org/wiki/" title="" lang="et" hreflang="et">Eesti</a></li>
<li class="interwiki-el"><a href="//el.wikipedia.org/wiki/" title="" lang="el" hreflang="el"></a></li>
<li class="interwiki-es"><a href="//es.wikipedia.org/wiki/" title="" lang="es" hreflang="es">Espaol</a></li>
<li class="interwiki-eo"><a href="//eo.wikipedia.org/wiki/" title="" lang="eo" hreflang="eo">Esperanto</a></li>
<li class="interwiki-eu"><a href="//eu.wikipedia.org/wiki/" title="" lang="eu" hreflang="eu">Euskara</a></li>
<li class="interwiki-fa"><a href="//fa.wikipedia.org/wiki/" title="" lang="fa" hreflang="fa"></a></li>
<li class="interwiki-fr"><a href="//fr.wikipedia.org/wiki/" title="" lang="fr" hreflang="fr">Franais</a></li>
<li class="interwiki-gl"><a href="//gl.wikipedia.org/wiki/" title="" lang="gl" hreflang="gl">Galego</a></li>
<li class="interwiki-ko"><a href="//ko.wikipedia.org/wiki/" title="" lang="ko" hreflang="ko"></a></li>
<li class="interwiki-he"><a href="//he.wikipedia.org/wiki/" title="" lang="he" hreflang="he"></a></li>
<li class="interwiki-hr"><a href="//hr.wikipedia.org/wiki/" title="" lang="hr" hreflang="hr">Hrvatski</a></li>
<li class="interwiki-it"><a href="//it.wikipedia.org/wiki/" title="" lang="it" hreflang="it">Italiano</a></li>
<li class="interwiki-lt"><a href="//lt.wikipedia.org/wiki/" title="" lang="lt" hreflang="lt">Lietuvi</a></li>
<li class="interwiki-hu"><a href="//hu.wikipedia.org/wiki/" title="" lang="hu" hreflang="hu">Magyar</a></li>
<li class="interwiki-nl"><a href="//nl.wikipedia.org/wiki/" title="" lang="nl" hreflang="nl">Nederlands</a></li>
<li class="interwiki-ja"><a href="//ja.wikipedia.org/wiki/" title="" lang="ja" hreflang="ja"></a></li>
<li class="interwiki-no"><a href="//no.wikipedia.org/wiki/" title="" lang="no" hreflang="no">Norsk bokml</a></li>
<li class="interwiki-nn"><a href="//nn.wikipedia.org/wiki/" title="" lang="nn" hreflang="nn">Norsk nynorsk</a></li>
<li class="interwiki-pl"><a href="//pl.wikipedia.org/wiki/" title="" lang="pl" hreflang="pl">Polski</a></li>
<li class="interwiki-pt"><a href="//pt.wikipedia.org/wiki/" title="" lang="pt" hreflang="pt">Portugus</a></li>
<li class="interwiki-ro"><a href="//ro.wikipedia.org/wiki/" title="" lang="ro" hreflang="ro">Romn</a></li>
<li class="interwiki-ru"><a href="//ru.wikipedia.org/wiki/" title="" lang="ru" hreflang="ru"></a></li>
<li class="interwiki-sk"><a href="//sk.wikipedia.org/wiki/" title="" lang="sk" hreflang="sk">Slovenina</a></li>
<li class="interwiki-sl"><a href="//sl.wikipedia.org/wiki/" title="" lang="sl" hreflang="sl">Slovenina</a></li>
<li class="interwiki-sr"><a href="//sr.wikipedia.org/wiki/" title="" lang="sr" hreflang="sr"> / srpski</a></li>
<li class="interwiki-sh"><a href="//sh.wikipedia.org/wiki/" title="" lang="sh" hreflang="sh">Srpskohrvatski / </a></li>
<li class="interwiki-fi"><a href="//fi.wikipedia.org/wiki/" title="" lang="fi" hreflang="fi">Suomi</a></li>
<li class="interwiki-sv"><a href="//sv.wikipedia.org/wiki/" title="" lang="sv" hreflang="sv">Svenska</a></li>
<li class="interwiki-th"><a href="//th.wikipedia.org/wiki/" title="" lang="th" hreflang="th"></a></li>
<li class="interwiki-vi"><a href="//vi.wikipedia.org/wiki/" title="" lang="vi" hreflang="vi">Ting Vit</a></li>
<li class="interwiki-tr"><a href="//tr.wikipedia.org/wiki/" title="" lang="tr" hreflang="tr">Trke</a></li>
<li class="interwiki-uk"><a href="//uk.wikipedia.org/wiki/" title="" lang="uk" hreflang="uk"></a></li>
<li class="interwiki-zh"><a href="//zh.wikipedia.org/wiki/" title="" lang="zh" hreflang="zh"></a></li>
</ul>
</div>
</div>`;

const output = `//simple.wikipedia.org/wiki/,Simple English
//ar.wikipedia.org/wiki/,
//id.wikipedia.org/wiki/,Bahasa Indonesia
//ms.wikipedia.org/wiki/,Bahasa Melayu
//bg.wikipedia.org/wiki/,
//ca.wikipedia.org/wiki/,Catal
//cs.wikipedia.org/wiki/,esky
//da.wikipedia.org/wiki/,Dansk
//de.wikipedia.org/wiki/,Deutsch
//et.wikipedia.org/wiki/,Eesti
//el.wikipedia.org/wiki/,
//es.wikipedia.org/wiki/,Espaol
//eo.wikipedia.org/wiki/,Esperanto
//eu.wikipedia.org/wiki/,Euskara
//fa.wikipedia.org/wiki/,
//fr.wikipedia.org/wiki/,Franais
//gl.wikipedia.org/wiki/,Galego
//ko.wikipedia.org/wiki/,
//he.wikipedia.org/wiki/,
//hr.wikipedia.org/wiki/,Hrvatski
//it.wikipedia.org/wiki/,Italiano
//lt.wikipedia.org/wiki/,Lietuvi
//hu.wikipedia.org/wiki/,Magyar
//nl.wikipedia.org/wiki/,Nederlands
//ja.wikipedia.org/wiki/,
//no.wikipedia.org/wiki/,Norsk bokml
//nn.wikipedia.org/wiki/,Norsk nynorsk
//pl.wikipedia.org/wiki/,Polski
//pt.wikipedia.org/wiki/,Portugus
//ro.wikipedia.org/wiki/,Romn
//ru.wikipedia.org/wiki/,
//sk.wikipedia.org/wiki/,Slovenina
//sl.wikipedia.org/wiki/,Slovenina
//sr.wikipedia.org/wiki/,/ srpski
//sh.wikipedia.org/wiki/,Srpskohrvatski /
//fi.wikipedia.org/wiki/,Suomi
//sv.wikipedia.org/wiki/,Svenska
//th.wikipedia.org/wiki/,
//vi.wikipedia.org/wiki/,Ting Vit
//tr.wikipedia.org/wiki/,Trke
//uk.wikipedia.org/wiki/,
//zh.wikipedia.org/wiki/,`;

console.log(test(input), output);
