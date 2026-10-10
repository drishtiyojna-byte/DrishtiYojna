(function(){
var mb=document.getElementById('mb'),nav=document.getElementById('nav');
mb.onclick=function(){var o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o)};
document.getElementById('yr').textContent=new Date().getFullYear();
var all=[];for(var k in DATA)all=all.concat(DATA[k]);
var sf=document.getElementById('sf');
if(sf){var q=document.getElementById('q'),sr=document.getElementById('sr');
function run(e){if(e)e.preventDefault();var t=q.value.trim().toLowerCase();
if(!t){sr.innerHTML='';return}
var r=all.filter(function(x){return (x.title+' '+x.org+' '+x.info).toLowerCase().indexOf(t)>-1});
sr.innerHTML=r.length?'<ul class="list">'+r.map(function(x){return '<li><a href="post.html?c='+x.cat+'&id='+x.id+'">'+x.title+'</a><span>'+x.org+' &middot; '+x.info+'</span></li>'}).join('')+'</ul>':'<p>Koi result nahi mila. Dusra shabd try karein.</p>'}
sf.onsubmit=run;q.oninput=run}
var p=document.getElementById('post');
if(p){var u=new URLSearchParams(location.search),it=all.find(function(x){return x.id===u.get('id')});
if(it){document.title=it.title+' | Drishti Yojna';
p.innerHTML='<h1>'+it.title+'</h1><p><b>Sanstha:</b> '+it.org+'<br><b>Jankari:</b> '+it.info+'<br><b>'+it.note+'</b></p><p class="note">Yeh sample post hai. Poori details, important dates aur official link yahan add karein.</p><p><a href="'+it.cat+'.html">&larr; Wapas list par</a></p>'}
else p.innerHTML='<h1>Post nahi mili</h1><p><a href="index.html">Home par jayein</a></p>'}
})();
