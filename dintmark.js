
I18N={
	"english":{	"FIGURE":	"Figure {x}: ",
				"TABLE": 	"Table {x}: "},
	"spanish":{	"FIGURE":	"Figura {x}: ",
				"TABLE":	"Tabla {x}: "}
}

matches=[
	[/\\\[/gm, "&#91;"],							[/\\\]/gm, "&#93;"],			//Escapes "[" and "]"
	[/\\x/gm,"&#120;"],								[/\\-/gm,"&#45;"],				//Escapes "x" and "-" for lists
	[/\[&(\w+)\s/gm,"<span class='$1'>"],			[/&\]/gm,"</span>"],				//Custom shorthands
	[/^\s*\[---\]\s*$/gm,"<hr>"],													//<hr> element
	[/^\s*\[vvv\]\s*$/gm,"</div> <div class='page'>"],								//<div> element: page break
	[/\[\*\*\*/gm,"<b><i>"],						[/\*\*\*\]/gm,"</i></b>"],		//<b><i> tags
	[/\[\*\*/gm,"<b>"],								[/\*\*\]/gm,"</b>"],			//<b> tags
	[/\[\*/gm,"<i>"],								[/\*\]/gm,"</i>"],				//<i> tags
	[/\[\+/gm,"<span class='sc'>"],					[/\+\]/gm,"</span>"],			//<span> tags: small caps
	[/\[~/gm,"<s>"],								[/~\]/gm,"</s>"],				//<s> tags
	[/\[\|\!/gm,"<table><tr><td class='th'>"],		[/\[\|/gm,"<table><tr><td>"],	//<table> elements: start with th/td
	[/\|\]/gm,"</td></tr></table>"],												//<table> elements: end
	[/\[-\|/gm,"<span class='caption'>"],			[/\|-\]/gm,"</span>"],			//<caption> element for tables
	[/\[#\|/gm,"<span class='numbered caption'>"],	[/\|#\]/gm,"</span>"],			//<caption> element for tables
	[/\[=!/gm,"<h1 class='title'>"],				[/!=\]/gm,"</h1>"],				//<h1> tags: title
	[/\[======/gm,"<h6 class='heading'>"],			[/======\]/gm,"</h6>"],			//<h6> tags
	[/\[=====/gm,"<h5 class='heading'>"],			[/=====\]/gm,"</h5>"],			//<h5> tags
	[/\[====/gm,"<h4 class='heading'>"],			[/====\]/gm,"</h4>"],			//<h4> tags
	[/\[===/gm,"<h3 class='heading'>"],				[/===\]/gm,"</h3>"],			//<h3> tags
	[/\[==/gm,"<h2 class='heading'>"],				[/==\]/gm,"</h2>"],				//<h2> tags
	[/\[=/gm,"<h1 class='heading'>"],				[/=\]/gm,"</h1>"],				//<h1> tags
	[/\[######/gm,"<h6 class='numbered heading'>"],	[/######\]/gm,"</h6>"],			//<h6> tags: numbered
	[/\[#####/gm,"<h5 class='numbered heading'>"],	[/#####\]/gm,"</h5>"],			//<h5> tags: numbered
	[/\[####/gm,"<h4 class='numbered heading'>"],	[/####\]/gm,"</h4>"],			//<h4> tags: numbered
	[/\[###/gm,"<h3 class='numbered heading'>"],	[/###\]/gm,"</h3>"],			//<h3> tags: numbered
	[/\[##/gm,"<h2 class='numbered heading'>"],		[/##\]/gm,"</h2>"],				//<h2> tags: numbered
	[/\[#/gm,"<h1 class='numbered heading'>"],		[/#\]/gm,"</h1>"],				//<h1> tags: numbered
	[/\["/gm,"<quote>"],							[/"\]/gm,"</quote>"],			//<quote> tags
	[/\[\{\{/gm,"<pre>"],							[/\}\}\]/gm,"</pre>"],			//<pre> block
	[/\[\{/gm,"<tt>"],								[/\}\]/gm,"</tt>"],				//<tt> tags
	[/\[:-:/gm,"<center>"],							[/:-:\]/gm,"</center>"],		//<center> blocks
	[/\[:--/gm,"<span class='floatRight'>"],		[/:--\]/gm,"</span>"],			//right floating blocks
	[/\[--:/gm,"<span class='floatLeft'>"],			[/--:\]/gm,"</span>"],			//left floating blocks
	[/\[x/gm,"<ol>"],								[/x\]/gm, "</li></ol>"],		//Ordered lists		
	[/\[-/gm,"<ul>"],								[/-\]/gm, "</li></ul>"],		//Unordered lists		
	[/\s+--\s/gm,"</li><li>"],						[/\s+x\.\s/gm,"</li><li>"],		//List items
	[/^[ ]([^ |])/gm,"<p>$1"],								/*[//g,"<p>"],*/				//<p> blocks. Ignores "|" for tables
	[/\[!\$/gm,"<mathref>"],						[/\$!\]/gm,"</mathref>"],		//<mathref> element (Formula reference)
	[/\[\[(.*)\]\((.*?)\)\]/gm,"<a href='$1'>$2</a>"],								//<a> element with label
	[/\[\[(.*)\]\]/gm,"<a href='$1'>$1</a>"],										//<a> element without label
	[/\[!\[(.*)\]\[%(.*)%\]!\]/gm,
		"<figure><img src='$1' style='width:$2%;height:auto'></img></figure>"],		//<img> element: scaled
	[/\[!\[(.*)\]!\]/gm,"<figure><img src='$1'></img></figure>"],					//<img> element
	[/\[_/gm,"<sub>"],								[/_\]/gm,"</sub>"],				//<sub> element
	[/\[\^/gm,"<sup>"],								[/\^\]/gm,"</sup>"],			//<sup> element
	[/\[\?/gm,"<setting>"],							[/\?\]/gm,"</setting>"],		//<setting> elements
	[/\[F\|/gm,"<div id='footer'>"],				[/\|F\]/gm,"</div>"],			//FOOTER content
	[/\[H\|/gm,"<div id='header'>"],				[/\|H\]/gm,"</div>"],			//HEADER content
	[/\[f\|/gm,"<span class='footnote'>"],			[/\|f\]/gm,"</span>"],			//<div> block: footnote
	[/[ ][ ]$/gm,"<br>"],															//newline
	[/\\~/gm," "],																	//escapes \~ to " "
	];

tableMatches=[
	[/\|\|$/gm,"</td></tr>"],						[/\|\!/gm,"</td><td class='th'>"],			//<th>
	[/^\s*\| :-- /gm,"<tr><td class='lAlign'>"],	[/\| :--/gm,"</td><td class='lAlign'>"],	//<td> left-aligned
	[/^\s*\| :-: /gm,"<tr><td class='cAlign'>"],	[/\| :-:/gm,"</td><td class='cAlign'>"],	//<td> center-aligned
	[/^\s*\| --: /gm,"<tr><td class='rAlign'>"],	[/\| --:/gm,"</td><td class='rAlign'>"],	//<td> right-aligned
	[/^\s*\|/gm,"<tr><td>"],						[/\|\s*$/gm,"</td></tr>"],					//<td> at start/end
	[/\|/gm,"</td><td>"],																		//<td>
	];

//MM=document.getElementById("control").offsetHeight/10;

function processContent(c){
	for(match of matches){c=c.replace(match[0],match[1]);}
	return c;
}

function processTableContent(t){
	for(match of tableMatches){t.innerHTML=t.innerHTML.replace(match[0],match[1]);}
	numberCells(t);
	processCellContents(t);
}

function numberCells(t){
	rowIndex=0;colIndex=0;
	for(r of t.rows){
		for(c of r.cells){
			c.id=t.id+"R"+rowIndex+"C"+colIndex;
			colIndex+=1;}
		colIndex=0;
		rowIndex+=1;}
	return t;
}

function processCellContents(t){
	rowCount=t.rows.length;
	colCount=t.rows[0].children.length;
	for(r=rowCount-1;r>=0;r--){
		for(c=colCount-1;c>=0;c--){
			cell=document.getElementById(t.id+"R"+r+"C"+c);
			switch(cell.innerText.substring(0,5)){
				case "[EFL]":
					mainCell=document.getElementById(t.id+"R"+r+"C"+(c-1));
					mainCell.colSpan+=1;
					mainCell.innerText+=cell.innerText.substring(5);
					cell.remove();
					break;
				case "[EFA]":
					mainCell=document.getElementById(t.id+"R"+(r-1)+"C"+c);
					mainCell.rowSpan+=1;
					mainCell.innerHTML+="<br>"+cell.innerText.substring(5);
					cell.remove();
					break;
				case "[CRN]":
					cell.innerHTML="";
					cell.classList.add("cornerCell");
					break;
			}
		}
	}
};
function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object
    f = files[0];
    var reader = new FileReader();

    // Closure to capture the file information.
	reader.onload = (function(theFile) {
		return function(e) {
			//Handle most marking conversions
			c=processContent(e.target.result);
			document.getElementById("content").innerHTML="<div class='page'>"+c+"</div>";
			//Handle MathJax conversion
			MathJax.typeset();
			
			//Handle options
			settings={}
			for(s of document.getElementsByTagName("setting")){
				setting=s.innerHTML.split("=");
				settings[setting[0]]=setting[1];}
			lang=settings["language"]&&I18N[settings["language"]]?settings["language"]:"english";
			document.body.style.fontFamily=settings["font"]?settings["font"]:"serif";
			//Handle table elements
			tables=document.getElementsByTagName("table");
			tables = [].slice.call(tables); //Transform HTMLCollection to Array. This is to remove one item.
			tables.shift(); //The whole document is inside a table td. This table is not processed.
			tableIndex=0;
			for (t of tables){
				t.id="TABLE"+tableIndex;
				tableIndex+=1;
				processTableContent(t);};
			//Handle captions
			csT=0; csI=0;
			captions=document.getElementsByClassName("caption");
			for(c of captions){
				t=c.previousElementSibling;
				if(t&&t.tagName=="TABLE"){
					newC=document.createElement("caption");
					if(c.classList.contains("numbered")){csT+=1; c.innerHTML=I18N[lang]["TABLE"].replace("{x}",csT)+c.innerHTML;}
					newC.innerHTML=c.innerHTML;
					t.insertBefore(newC,t.firstElementChild);}
				else if(t&&(t.tagName=="FIGURE"||t.tagName=="A")){
					if(t.tagName=="A" && t.firstElementChild && t.firstElementChild.tagName=="FIGURE"){
						t.classList.add("figure");
						t=t.firstElementChild;}
					newC=document.createElement("figcaption");
					if(c.classList.contains("numbered")){csI+=1; c.innerHTML=I18N[lang]["FIGURE"].replace("{x}",csI)+c.innerHTML;}
					newC.innerHTML=c.innerHTML;
					t.appendChild(newC);
				}
				c.style.display="none";
			}
			//Add numbering to numbered headings
			hLevels=[0,0,0,0,0,0]
			ll=6;
			for(h of document.getElementsByClassName("heading")){
				if(h.classList.contains("numbered")){
					l=parseInt(h.tagName.substring(1));
					if(l<ll){for(i=l;i<6;i++){hLevels[i]=0}}
					ll=l;
					hLevels[l-1]+=1;
					h.innerHTML=hLevels.join(". ").substring(0,l*3)+h.innerHTML;}}
			//Handle Header and Footer
			h=document.getElementById("header");
			f=document.getElementById("footer");
			if(h){
				hs=document.getElementById("header-space");
				hs.style.height=h.offsetHeight;
				document.body.classList.add("hasHeader");}
			if(f){
				fs=document.getElementById("footer-space");
				fs.style.height=f.offsetHeight+"px";
				document.body.classList.add("hasFooter");}
			/* Handles page numbers - currently does not work
			if(settings["pageNumbers"]){
				pn=document.createElement("span");
				pn.id="pageNumber";
				pn.classList.add(settings["pageNumbers"]);
				if(settings["pageNumbers"][0]=="t")document.getElementById("header").appendChild(pn);
				else if(settings["pageNumbers"][0]=="b")document.getElementById("footer").appendChild(pn);
			}
			*/
			if(settings["justify"]=="true")document.getElementById("content").classList.add("justify");
			
			//Delete empty <p> blocks
			ps=document.getElementsByTagName("p");
			i=ps.length-1;r=0;
			while(i-r>0){
				currP=ps[i-r];
				if(currP.innerHTML.trim()==""){currP.remove();r+=1;}
				else{i-=1;}
			}
		};
	})(f);
	reader.readAsText(f);
}