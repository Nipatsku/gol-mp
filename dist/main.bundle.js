!function(e){function t(t){for(var l,r,o=t[0],s=t[1],c=t[2],d=0,h=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&h.push(i[r][0]),i[r]=0;for(l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l]);for(u&&u(t);h.length;)h.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],l=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(l=!1)}l&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var l={},i={0:0},a=[];function r(t){if(l[t])return l[t].exports;var n=l[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=l,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)r.d(n,l,function(t){return e[t]}.bind(null,l));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/game-of-life_lcjs/";var o=window.webpackJsonp=window.webpackJsonp||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=s;a.push([22,1]),n()}({22:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=n(23),i=l.lightningChart().ChartXY({}).setTitle("Conway's Game of Life").setAutoCursorMode(l.AutoCursorModes.disabled).setChartBackgroundFillStyle(new l.SolidFill({color:l.ColorHEX("#fff")})),a=i.getDefaultAxisX(),r=i.getDefaultAxisY(),o=i.addAxisX(!0),s=i.addAxisY(!0),c=function(e){e.setTickStyle(l.emptyTick).setScrollStrategy(void 0)};c(a),c(r),c(o),c(s);var u=new(function(){function e(e,t){this.chart=e,this.px=t,this.points=this.chart.addPointSeries({pointShape:l.PointShape.Square}).setPointSize(this.px).setMouseInteractions(!1).setPointFillStyle(new l.SolidFill({color:l.ColorRGBA(100,100,100)})),this.deadPoints=this.chart.addPointSeries({pointShape:l.PointShape.Square}).setPointSize(this.px).setMouseInteractions(!1).setPointFillStyle(new l.SolidFill({color:l.ColorRGBA(200,255,200)})),this.cellStates=[[]],this.cellStatesFlipBuffer=[[]]}return e.prototype.cycle=function(){for(var e=this.getState(),t=e.cellStates,n=e.bounds,l=t.length,i=0;i<l;i++)for(var a=t[i].length,r=0;r<a;r++){var o=t[i][r],s=0;i>n.x.min&&(r>n.y.min&&(s+=t[i-1][r-1]?1:0),r<n.y.max&&(s+=t[i-1][r+1]?1:0),s+=t[i-1][r]?1:0),r>n.y.min&&(s+=t[i][r-1]?1:0),r<n.y.max&&(s+=t[i][r+1]?1:0),i<n.x.max&&(r>n.y.min&&(s+=t[i+1][r-1]?1:0),r<n.y.max&&(s+=t[i+1][r+1]?1:0),s+=t[i+1][r]?1:0);var c=void 0===o&&void 0;(o&&(2===s||3===s)||!o&&3===s)&&(c=!0),this.cellStatesFlipBuffer[i][r]=c}this.cellStates=this.cellStatesFlipBuffer,this.cellStatesFlipBuffer=t},e.prototype.plot=function(){var e=this.points,t=this.deadPoints;e.clear(),t.clear();for(var n=this.px,l=this.px/2,i=this.cellStates,a=i.length,r=0;r<a;r++)for(var o=i[r].length,s=0;s<o;s++){var c=i[r][s];!0===c?e.add({x:l+r*n,y:l+s*n}):!1===c&&t.add({x:l+r*n,y:l+s*n})}},e.prototype.handleResize=function(e,t){var n=this.cellStates.length,l=this.cellStates[0].length,i=Math.floor(e/this.px),a=Math.floor(t/this.px),r=a>l;if(i>n)for(var o=n;o<i;o++)this.cellStates.push([]),this.cellStatesFlipBuffer.push([]);else this.cellStates.length=i,this.cellStatesFlipBuffer.length=i;for(var s=0;s<i;s++)if(r)for(o=l;o<a;o++)this.cellStates[s][o]=void 0,this.cellStatesFlipBuffer[s][o]=void 0;else this.cellStates[s].length=a,this.cellStatesFlipBuffer[s].length=a},e.prototype.getState=function(){return{cellStates:this.cellStates,bounds:{x:{min:0,max:this.cellStates.length-1,center:Math.round((this.cellStates.length-1)/2)},y:{min:0,max:this.cellStates[0].length-1,center:Math.round((this.cellStates[0].length-1)/2)}}}},e.prototype.clear=function(e){for(var t=e.length,n=0;n<t;n++)for(var l=e[n].length,i=0;i<l;i++)e[n][i]=void 0},e.prototype.initialState=function(){var e=this.getState();e.cellStates,e.bounds},e.prototype.encodeState=function(){return this.cellStates.map(function(e){return e.map(function(e){return String(e)})})},e}())(i,8),d=function(){u.plot()},h=i.addRectangleSeries().add({x1:0,y1:0,x2:0,y2:0}).setFillStyle(l.transparentFill).setFillStyleHighlight(l.transparentFill),f=function(){var e=a.scale.getCellSize(),t=r.scale.getCellSize();a.setInterval(0,e),r.setInterval(0,t),u.handleResize(e,t),h.setDimensions({x1:0,y1:0,x2:e,y2:t}),d()};i.onResize(f),f(),u.initialState(),u.plot();var p=!0,g=function(){u.cycle(),d(),p&&requestAnimationFrame(g)},S=i.addUIElement(l.UILayoutBuilders.Column).setPosition({x:0,y:100}).setOrigin(l.UIOrigins.LeftTop).setPadding({top:2,left:4}).setDraggingMode(l.UIDraggingModes.notDraggable),y=S.addElement(l.UIElementBuilders.CheckBox).setText("Simulation enabled").setFont(function(e){return e.setSize(14)});y.onSwitch(function(e,t){(p=t)&&g()}),p&&y.setOn(!0),S.addElement(l.UIElementBuilders.ButtonBox).setText("Clear").setFont(function(e){return e.setSize(14)}).onSwitch(function(e,t){t&&(u.clear(u.cellStates),d())});for(var x,b=i.addUIElement(l.UILayoutBuilders.Row.setBackground(l.UIBackgrounds.Rectangle)).setPosition({x:0,y:0}).setOrigin(l.UIOrigins.LeftBottom).setMargin({bottom:2,left:4}).setPadding({left:4,right:4}).setDraggingMode(l.UIDraggingModes.draggable).setBackground(function(e){return e.setFillStyle(l.DefaultLibraryStyle.panelBackgroundFillStyle.setA(100))}),v=[{label:"Pencil",draggable:!0,patterns:[{label:"1 px",pattern:[[!0]]},{label:"2 px",pattern:[[!0,!0],[!0,!0]]},{label:"3 px",pattern:[[!0,!0,!0],[!0,!0,!0],[!0,!0,!0]]},{label:"5 px",pattern:[[!0,!0,!0,!0,!0],[!0,!0,!0,!0,!0],[!0,!0,!0,!0,!0],[!0,!0,!0,!0,!0],[!0,!0,!0,!0,!0]]}]},{label:"Glider",draggable:!1,patterns:[{label:"↘",pattern:[[!1,!0,!1],[!1,!1,!0],[!0,!0,!0]]},{label:"↗",pattern:[[!0,!0,!0],[!1,!1,!0],[!1,!0,!1]]},{label:"↙",pattern:[[!1,!0,!1],[!0,!1,!1],[!0,!0,!0]]},{label:"↖",pattern:[[!0,!0,!0],[!0,!1,!1],[!1,!0,!1]]}]},{label:"Spaceship",draggable:!1,patterns:[{label:"→",pattern:[[!1,!0,!0,!0,!0],[!0,!1,!1,!1,!0],[!1,!1,!1,!1,!0],[!0,!1,!1,!0,!1]]},{label:"⬅",pattern:[[!0,!0,!0,!0,!1],[!0,!1,!1,!1,!0],[!0,!1,!1,!1,!1],[!1,!0,!1,!1,!0]]}]},{label:"Methuselahs",draggable:!1,patterns:[{label:"The R-pentomino",pattern:[[!1,!0,!0],[!0,!0,!1],[!1,!0,!1]]},{label:"Diehard",pattern:[[!1,!1,!1,!1,!1,!1,!0,!1],[!0,!0,!1,!1,!1,!1,!1,!1],[!1,!0,!1,!1,!1,!0,!0,!0]]},{label:"Acorn",pattern:[[!1,!0,!1,!1,!1,!1,!1],[!1,!1,!1,!0,!1,!1,!1],[!0,!0,!1,!1,!0,!0,!0]]}]},{label:"Eater",draggable:!1,patterns:[{label:"↖",pattern:[[!0,!0,!1,!1],[!0,!1,!0,!1],[!1,!1,!0,!1],[!1,!1,!0,!0]]}]},{label:"Generators",draggable:!1,patterns:[{label:"Gosper glider gun ↘",pattern:[[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!1,!1,!1,!1,!1,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!0,!1,!1,!1,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0],[!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!0,!1,!1,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!0,!1,!0,!0,!1,!1,!1,!1,!0,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]]}]}],m=[],B=v[0].patterns,P=function(e){var t=e.draggable?l.UIButtonPictures.Circle:l.UIButtonPictures.Rectangle,n=function(n,i,a){var r=n.addElement(l.UIElementBuilders.CheckBox.setPictureOn(t).setPictureOff(t)).setText(i).setFont(function(e){return e.setSize(14)});0===m.length&&(r.setOn(!0),B=a,x=e.draggable),r.onSwitch(function(t,n){return function(e,t,n,l){if(t){B=n,x=l.draggable;for(var i=0,a=m;i<a.length;i++){var r=a[i];r!==e&&r.setOn(!1)}}}(t,n,a,e)}),m.push(r)},i=b.addElement(l.UILayoutBuilders.Column);if("pattern"in e.patterns[0]){var a=e.patterns;i.addElement(l.UIElementBuilders.TextBox).setText(e.label).setFont(function(e){return e.setSize(14)});for(var r=0,o=a;r<o.length;r++){var s=o[r];n(i,s.label,s.pattern)}}else n(i,e.label,e.patterns);i.addGap()},T=0,I=v;T<I.length;T++){P(I[T])}var M=function(e,t){var n=l.translatePoint(i.engine.clientLocation2Engine(e,t),i.engine.scale,{x:a.scale,y:r.scale}),o=Math.round(n.x/u.px),s=Math.round(n.y/u.px);return u.cellStates[o][s]},O=function(e,t,n){for(var o=l.translatePoint(i.engine.clientLocation2Engine(e,t),i.engine.scale,{x:a.scale,y:r.scale}),s=o.x/u.px,c=o.y/u.px,h=B,f=h.length,p=h.reduce(function(e,t){return Math.max(e,t.length)},0),g=0;g<h.length;g++)for(var S=0;S<h[g].length;S++)if(!0===h[g][S]){var y=Math.round(s+S-p/2),x=Math.round(c-g+f/2);u.cellStates[y][x]=void 0===n?!0!==u.cellStates[y][x]:n}d()},U=void 0;h.onMouseDown(function(e,t){return O(t.clientX,t.clientY)}),h.onMouseDragStart(function(e,t){U=!M(t.clientX,t.clientY)}),h.onMouseDrag(function(e,t){return x?O(t.clientX,t.clientY,U):void 0}),h.onTouchStart(function(e,t){for(var n=0;n<t.changedTouches.length;n++)U=!M(t.changedTouches[n].clientX,t.changedTouches[n].clientY),O(t.changedTouches[n].clientX,t.changedTouches[n].clientY)}),h.onTouchMove(function(e,t){for(var n=0;n<t.changedTouches.length;n++)x&&O(t.changedTouches[n].clientX,t.changedTouches[n].clientY,U)});var F=i.addUIElement(l.UILayoutBuilders.Column).setPosition({x:100,y:100}).setOrigin(l.UIOrigins.RightTop);F.addElement(l.UIElementBuilders.ButtonBox).setText("Host").onSwitch(function(e,t){t&&function(){var e=firebase.database(),t=0,n=u.encodeState();e.ref("session-initialState").set(n),e.ref("session-cycle").set(t);var a=function(){t++,console.log("hosted session | cycle:",t),e.ref("session-cycle").set(t),setTimeout(a,500)};window.requestAnimationFrame(a),F.dispose(),i.addUIElement(l.UIElementBuilders.TextBox).setPosition({x:100,y:100}).setOrigin(l.UIOrigins.RightTop).setText("Hosting session")}()}),F.addElement(l.UIElementBuilders.ButtonBox).setText("Connect").onSwitch(function(e,t){t&&(firebase.database().ref("session-initialState").once("value",function(){console.log("hello ?")}),F.dispose(),F.dispose(),i.addUIElement(l.UIElementBuilders.TextBox).setPosition({x:100,y:100}).setOrigin(l.UIOrigins.RightTop).setText("Connected to remote session"))})}});