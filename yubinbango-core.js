var CACHE=[],YubinBango;!function(t){var e=function(){function t(t,e){if(void 0===t&&(t=""),this.URL="https://yubinbango.github.io/yubinbango-data/data",this.REGION=[null,"北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県","茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県","新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"],t){var i=t.replace(/[０-９]/g,function(t){return String.fromCharCode(t.charCodeAt(0)-65248)}),r=i.match(/\d/g),o=r.join(""),n=this.chk7(o);n?this.getAddr(n,e):e({region_id:"",region:"",locality:"",street:"",extended:""})}}return t.prototype.chk7=function(t){return 7===t.length?t:void 0},t.prototype.selectAddr=function(t){return t&&t[0]&&t[1]?{region_id:t[0],region:this.REGION[t[0]],locality:t[1],street:t[2],extended:t[3]}:{region_id:"",region:"",locality:"",street:"",extended:""}},t.prototype.jsonp=function(e,n){window.$yubin=function(t){return n(t)};var t=document.createElement("script");t.setAttribute("type","text/javascript"),t.setAttribute("charset","UTF-8"),t.setAttribute("src",e),document.head.appendChild(t)},t.prototype.getAddr=function(e,n){var i=this,t=e.substr(0,3);return t in CACHE&&e in CACHE[t]?n(this.selectAddr(CACHE[t][e])):void this.jsonp(this.URL+"/"+t+".js",function(r){return CACHE[t]=r,n(i.selectAddr(r[e]))})},t}();t.Core=e}(YubinBango||(YubinBango={}));
//# sourceMappingURL=./yubinbango-core.js.map