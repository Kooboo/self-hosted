var y=Object.defineProperty;var S=(s,t,e)=>t in s?y(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var A=(s,t,e)=>(S(s,typeof t!="symbol"?t+"":t,e),e);var g=(s,t,e)=>new Promise((n,r)=>{var i=a=>{try{o(e.next(a))}catch(c){r(c)}},l=a=>{try{o(e.throw(a))}catch(c){r(c)}},o=a=>a.done?n(a.value):Promise.resolve(a.value).then(i,l);o((e=e.apply(s,t)).next())});import{m}from"./userWorker.b3a6730b.js";import{l as O}from"./editor.main.d2800f63.js";function z(s){return g(this,null,function*(){var e;const t={data:{useDefaultDataProvider:!0,dataProviders:{}}};for(const n of s)((e=t.data)==null?void 0:e.dataProviders)[n.name]=w(n);m.languages.html.htmlDefaults.setOptions(t)})}function w(s){return{version:1.1,tags:D(s.tags),globalAttributes:$(s.globalAttributes)}}function D(s){const t=[];if(s)for(const e of s)t.push({name:e.name,description:{kind:"markdown",value:e.description},attributes:$(e.attributes)});return t}function $(s){var e;const t=[];if(s)for(const n of s)t.push({name:n.name,description:{kind:"markdown",value:n.description},valueSet:n.values?(e=n.values[0])==null?void 0:e.name:void 0,values:n.values?n.values.map(r=>({name:r.name,description:{kind:"markdown",value:r.description}})):[]});return t}let x=[],I=!1;class N{constructor(){A(this,"triggerCharacters",["'",'"'," ",""])}provideCompletionItems(t,e){const n={suggestions:[]},r=t.getValue(),i=t.getOffsetAt(e),l=r.substring(0,i),o=l.match(/class[\s,\n,\r]*=[\s,\n,\r]*\"|\'/);if(!o)return n;const a=o.pop(),c=l.lastIndexOf(a)+a.length,P=a.match(/\"|\'/)[0].toString();t.getValue().substring(t.getOffsetAt(e));const p=r.substring(i).indexOf(P)+l.length;if(p==-1)return n;const v=r.substring(c,p);if(v.search(/\<|\>|\'\"/)>-1)return n;const h=v.split(" ").map(u=>u.trim()),d=t.getWordAtPosition(e);for(const u of x){for(const k of u.classes)for(const f of q(k)){const b=h.indexOf(f.name);if(b>-1&&b<h.length-1)continue;let C=new m.Range(e.lineNumber,e.column,e.lineNumber,e.column);r.charAt(i-1)!=" "&&d&&(C=new m.Range(e.lineNumber,d.startColumn,e.lineNumber,d.endColumn)),n.suggestions.push({kind:O.CompletionItemKind.Property,label:f.name,insertText:f.name,detail:u.name,documentation:{value:f.description},range:C,command:{title:"Suggest",id:"editor.action.triggerSuggest"}})}n.incomplete=!1}return n}}function E(s){return g(this,null,function*(){x=s,!I&&(I=!0,m.languages.registerCompletionItemProvider("html",new N))})}function q(s){const t=[];if(s.repeat)for(const e of s.repeat){const n={name:s.name,description:s.description};if(Array.isArray(e))for(let r=0;r<e.length;r++)n.name=n.name.replaceAll(`#$repeat-${r}$#`,e[r]),n.description=n.description.replaceAll(`#$repeat-${r}$#`,e[r]);else n.name=n.name.replaceAll("#$repeat$#",e),n.description=n.description.replaceAll("#$repeat$#",e);t.push(n)}else t.push(s);return t}export{z as a,E as r};
