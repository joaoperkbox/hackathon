(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports={birthdays:[{ID:205,CreatedAt:"2019-02-01T13:57:56Z",UpdatedAt:"2019-02-01T13:57:56Z",DeletedAt:null,FirstName:"Joao",LastName:"Silva",Birthday:"1900-02-01T00:00:00Z",Email:"joao.silva@perkbox.com",HireDate:"2018-10-22T00:00:00Z",ImageURL:"https://97c0f0f9c6a5d9e0b96a-2c31dda0bcfb1a98c36375a50fdbe437.ssl.cf3.rackcdn.com/photos/476-3-4.jpg",Department:"Engineering"}],anniversaries:[{ID:207,CreatedAt:"2019-02-01T13:57:57Z",UpdatedAt:"2019-02-01T13:57:57Z",DeletedAt:null,FirstName:"Hannah",LastName:"Sims",Birthday:"1900-11-03T00:00:00Z",Email:"hannah.sims@perkbox.com",HireDate:"2016-02-01T00:00:00Z",ImageURL:"https://97c0f0f9c6a5d9e0b96a-2c31dda0bcfb1a98c36375a50fdbe437.ssl.cf3.rackcdn.com/photos/109-0-4.jpg",Department:"Product & UX"}],probation_passed:[{ID:16,CreatedAt:"2019-02-01T13:57:16Z",UpdatedAt:"2019-02-01T13:57:16Z",DeletedAt:null,FirstName:"Sam",LastName:"Barrie",Birthday:"1900-04-01T00:00:00Z",Email:"sam.barrie@perkbox.com",HireDate:"2018-11-01T00:00:00Z",ImageURL:"https://97c0f0f9c6a5d9e0b96a-2c31dda0bcfb1a98c36375a50fdbe437.ssl.cf3.rackcdn.com/photos/495-0-4.jpg",Department:"Engineering"}]}},11:function(e,t,a){e.exports=a(23)},17:function(e,t,a){},19:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(4),s=a.n(r),c=(a(17),a(5)),o=a(6),m=a(9),h=a(7),d=a(10),l=(a(19),a(8)),p=a.n(l),g=a(1),u=a(2),f=a.n(u),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={events:g.birthdays.map(function(e){return{name:"".concat(e.FirstName," ").concat(e.LastName),img:e.ImageURL,type:"birthday",gifTag:"birthday"}}).concat(g.anniversaries.map(function(e){return{name:"".concat(e.FirstName," ").concat(e.LastName),years:f()().year()-f()(e.HireDate).year(),img:e.ImageURL,type:"anniversary",gifTag:"celebration"}})).concat(g.probation_passed.map(function(e){return{name:"".concat(e.FirstName," ").concat(e.LastName),img:e.ImageURL,type:"probation",gifTag:"celebration"}})),num:0},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"getGif",value:function(e){var t=this;fetch("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=".concat(e)).then(function(e){return e.json()}).then(function(e){t.setState({url:e.data.images.fixed_height.url})})}},{key:"componentDidMount",value:function(){var e=this.state,t=e.events,a=e.num,n=this.container.getBoundingClientRect(),i=n.width,r=n.height;this.getGif(t[a].gifTag),this.setState({width:i,height:r})}},{key:"onClick",value:function(){var e=this.state,t=e.events,a=e.num;t[a+1]&&(this.getGif(t[a+1].gifTag),this.setState({num:a+1}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.height,n=t.width,r=t.events[t.num];return i.a.createElement("div",{className:"App",onClick:this.onClick.bind(this)},a&&i.a.createElement(p.a,{width:n,height:a}),i.a.createElement("div",{className:"birthday",ref:function(t){e.container=t}},i.a.createElement("div",{className:"name"},"birthday"===r.type?i.a.createElement("div",{className:"message"},"Happy Birthday ",r.name,"!",i.a.createElement("img",{alt:"",src:r.img,height:"170px",width:"170px"})):"anniversary"===r.type?i.a.createElement("div",{className:"message"},r.name," has been here for an astonishing ",r.years," years! Happy Anniversary!",i.a.createElement("img",{alt:"",src:r.img,height:"170px",width:"170px"})):"probation"===r.type?i.a.createElement("div",{className:"message"},"As of today ",r.name," has passed their 3 month probation! Well done!",i.a.createElement("img",{alt:"",src:r.img,height:"170px",width:"170px"})):null),i.a.createElement("div",{className:"gif"},i.a.createElement("img",{src:this.state.url,alt:""}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.8902ac45.chunk.js.map