!function(n){function t(r){if(i[r])return i[r].exports;var e=i[r]={i:r,l:!1,exports:{}};return n[r].call(e.exports,e,e.exports,t),e.l=!0,e.exports}var i={};return t.m=n,t.c=i,t.i=function(n){return n},t.d=function(n,t,i){Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:i})},t.n=function(n){var i=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(i,"a",i),i},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=3)}([function(n,t,i){(function(t){const r="undefined"!=typeof window?window:t,e=r.XP||i(2);n.exports=r.XPQueue=new e.Class("XPQueue",{initialize(n){this.channels={},this.current={},this.running=!1,this.options=n,this.options.autoStart&&this.start()},add(n,t){e.isFunction(n)&&(t=n,n=void 0),e.assertArgument(e.isVoid(n)||e.isString(n),1,"string"),e.assertArgument(e.isFunction(t),2,"Function"),Array.prototype.push.call(this.channels[n||""]=this.channels[n||""]||[],t),this._next(n)},clear(n){e.assertArgument(e.isVoid(n)||e.isString(n),1,"string"),Array.prototype.splice.call(this.channels[n||""]||[],this.current[n||""]?1:0)},start(){this.running=!0,Object.keys(this.channels).forEach(n=>this._next(n))},stop(){this.running=!1},_next:{enumerable:!1,value(n){e.assertArgument(e.isVoid(n)||e.isString(n),1,"string"),n||(n=""),this.running&&!this.current[n]&&e.isArray(this.channels[n],!0)&&(this.current[n]=this.channels[n][0],this.current[n](()=>{this.channels[n].splice(0,1),this.current[n]=null,this._next(n)}))}},channels:{set(n){return this.channels||n},validate(n){return!e.isObject(n)&&"Object"}},current:{set(n){return this.current||n},validate(n){return!e.isObject(n)&&"Object"}},running:{set(n){return!!n}}})}).call(t,i(1))},function(n,t){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(n){"object"==typeof window&&(i=window)}n.exports=i},function(n,t){n.exports=XP},function(n,t,i){n.exports=i(0)}]);