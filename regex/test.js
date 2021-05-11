function test(input) {
  const links = input.match(/(((?<=href=\")[^\"]+))/gi);

  const content = input.match(/((?<=<a.*\>)(.*?)(?=<\/a>))/g);
  const arr = [];
  links.map((v, i) => arr.push([v, content[i]]));
  let result = '';
  arr.forEach((v) => {
    result += v.join(',') + '\n';
  });
  console.log(content);
  return result;
}

const input = `<div class="portal" role="navigation" id='p-lang'>
<h3>Languages</h3>
<div class="body">
<ul>
<li class="interwiki-ar"><a href="//ar.wikipedia.org/wiki/" title="" lang="ar" hreflang="ar"></a></li>
<li class="interwiki-id"><a href="//id.wikipedia.org/wiki/" title="" lang="id" hreflang="id">Bahasa Indonesia</a></li>
<li class="interwiki-da"><a href="//da.wikipedia.org/wiki/" title="" lang="da" hreflang="da"><b>Dansk</b></a></li>
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

function removeHtmlTags(str) {
  const reg = /(?<=<.*\>)(.*?)(?=<\/.*>)/g;
  return str.match(reg);
}

console.log(removeHtmlTags('Dansk'));
