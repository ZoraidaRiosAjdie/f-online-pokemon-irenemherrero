(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/pikachu_loading.3aa872f8.gif"},,function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),o=a.n(r),i=(a(16),a(10)),s=a(2),l=a(3),u=a(6),m=a(4),p=a(5),h=a(1),d=(a(18),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleSearch,a=e.searchValue;return c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"pokeSearch"}),c.a.createElement("input",{id:"pokeSearch",type:"text",name:"pokemonName",onChange:t,value:a}))}}]),t}(n.Component)),f=(a(20),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.pokemonData;return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"imageIdContainer"},c.a.createElement("img",{className:"imagePokemon",src:e.photo,alt:e.name}),c.a.createElement("div",{className:"idContainer"},c.a.createElement("p",{className:"pokemonId"},"ID / ",e.id))),c.a.createElement("div",{className:"nameTypeContainer"},c.a.createElement("p",{className:"pokemonName"},e.name),c.a.createElement("div",{className:"pokemonTypeList"},e.types.map(function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("p",null,e))}))))}}]),t}(n.Component)),b=(a(22),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.pokemonList;return c.a.createElement("div",{className:"pokemonContainer"},c.a.createElement("ul",{className:"pokemonList"},e().map(function(e){return c.a.createElement("li",{className:"pokemonCard",key:e.id},c.a.createElement(f,{pokemonData:e}))})))}}]),t}(n.Component)),k=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleSearch,a=e.pokemonList,n=e.searchValue;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"appTitle"},"Pokemon Searcher"),c.a.createElement(d,{handleSearch:t,searchValue:n}),c.a.createElement(b,{pokemonList:a}))}}]),t}(n.Component),O=a(9),j=a.n(O),v=(a(24),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"containerLoadingPikachu"},c.a.createElement("img",{src:j.a,alt:"Loading page..."}))}}]),t}(n.Component)),y=[],E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={pokemonList:[],filteredList:[],searchValue:""},a.fetchData=a.fetchData.bind(Object(h.a)(Object(h.a)(a))),a.handleSearch=a.handleSearch.bind(Object(h.a)(Object(h.a)(a))),a.selectListToPrint=a.selectListToPrint.bind(Object(h.a)(Object(h.a)(a))),a.saveDataInState=a.saveDataInState.bind(Object(h.a)(Object(h.a)(a))),a.saveDataInLocalStorage=a.saveDataInLocalStorage.bind(Object(h.a)(Object(h.a)(a))),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("pokemon-list"));if(e)this.setState({pokemonList:e});else for(var t=0;t<25;t++)this.fetchData("".concat("https://pokeapi.co/api/v2/pokemon/").concat(t+1,"/"))}},{key:"fetchData",value:function(e){var t=this;fetch(e).then(function(e){return e.json()}).then(function(e){y[e.id-1]={id:e.id,name:e.name,photo:e.sprites.front_default,types:""},e.types.map(function(t){return y[e.id-1].types=Object(i.a)(y[e.id-1].types).concat([t.type.name])}),t.saveDataInState()})}},{key:"saveDataInState",value:function(){this.setState({pokemonList:y},this.saveDataInLocalStorage())}},{key:"saveDataInLocalStorage",value:function(){localStorage.setItem("pokemon-list",JSON.stringify(y))}},{key:"handleSearch",value:function(e){var t=e.target.value.toLowerCase();this.setState({searchValue:t,filteredList:this.state.pokemonList.filter(function(e){return e.name.includes(t)})})}},{key:"selectListToPrint",value:function(){var e=this.state,t=e.filteredList,a=e.pokemonList;return e.searchValue?t:a}},{key:"render",value:function(){return 25===this.state.pokemonList.length?c.a.createElement(k,{handleSearch:this.handleSearch,pokemonList:this.selectListToPrint,searchValue:this.state.searchValue}):c.a.createElement(v,null)}}]),t}(n.Component);o.a.render(c.a.createElement(E,null),document.getElementById("root"))}],[[11,2,1]]]);
//# sourceMappingURL=main.320d5464.chunk.js.map