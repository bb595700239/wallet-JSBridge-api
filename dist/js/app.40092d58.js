(function(e){function t(t){for(var n,o,c=t[0],l=t[1],s=t[2],w=0,y=[];w<c.length;w++)o=c[w],i[o]&&y.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(y.length)y.shift()();return r.push.apply(r,s||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,c=1;c<a.length;c++){var l=a[c];0!==i[l]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},i={app:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},"56d7":function(t,a,n){"use strict";n.r(a);var i=n("dbf2"),r=n.n(i);const o={versions:function(){var e=navigator.userAgent;return{trident:e.indexOf("Trident")>-1,presto:e.indexOf("Presto")>-1,webKit:e.indexOf("AppleWebKit")>-1,gecko:e.indexOf("Gecko")>-1&&-1==e.indexOf("KHTML"),mobile:!!e.match(/AppleWebKit.*Mobile.*/),ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:e.indexOf("Android")>-1||e.indexOf("Linux")>-1,iPhone:e.indexOf("iPhone")>-1,iPad:e.indexOf("iPad")>-1,webApp:-1==e.indexOf("Safari"),weixin:"micromessenger"==e.toLowerCase().match(/MicroMessenger/i),qq:" qq"==e.match(/\sQQ/i)}}()},c=e=>{return"string"!==typeof e?JSON.stringify(e):e},l=e=>{return"string"!==typeof e?e:JSON.parse(e)},s=e=>{return e.isServerError?"isServerError":"isClientError"},d=(e,t)=>{if(console.log(e,t),o.versions.ios){if(!window.webkit.messageHandlers[e])throw new Error("未检测到回调方法");window.webkit.messageHandlers[e].postMessage({content:t})}if(o.versions.android){if(!window.test[e])throw new Error("未检测到回调方法");window.test[e](t)}};window.randomPrivateKey=(async()=>{let e;try{e=c(await r.a.EvtKey.randomPrivateKey())}catch(t){e=s(t)}d("randomPrivateKeyCallback",e)}),window.privateToPublic=(e=>{let t;try{t=c(r.a.EvtKey.privateToPublic(e))}catch(a){t=s(a)}d("privateToPublicCallback",t)}),window.seedPrivateKey=(e=>{let t;try{t=c(r.a.EvtKey.seedPrivateKey(e))}catch(a){t=s(a)}d("seedPrivateKeyCallback",t)}),window.isValidPrivateKey=(e=>{let t;try{t=c(r.a.EvtKey.isValidPrivateKey(e))}catch(a){t=s(a)}d("isValidPrivateKeyCallback",t)}),window.isValidPublicKey=(e=>{let t;try{t=c(r.a.EvtKey.isValidPublicKey(e))}catch(a){t=s(a)}d("isValidPublicKeyCallback",t)}),window.isValidAddress=(e=>{let t;try{t=c(r.a.EvtKey.isValidAddress(e))}catch(a){t=s(a)}d("isValidAddressCallback",t)}),window.random32BytesAsHex=(async()=>{let e;try{e=c(await r.a.EvtKey.random32BytesAsHex())}catch(t){e=s(t)}d("random32BytesAsHexCallback",e)}),window.randomName128=(async()=>{let e;try{e=c(await r.a.EvtKey.randomName128())}catch(t){e=s(t)}d("randomName128Callback",e)}),window.getNullAddress=(()=>{let e;try{e=c(r.a.EvtKey.getNullAddress(address))}catch(t){e=s(t)}d("getNullAddressCallback",e)});let w=null;window.needPrivateKeyResponse=null,window.EVTInit=(()=>{let e="";try{const a={host:"mainnet14.everitoken.io",port:443,protocol:"https"};w=r()({endpoint:a,keyProvider:()=>{return new Promise((e,t)=>{window.needPrivateKeyResponse=e,e("5JrNgyyNDqz2pikijgdJwUktV8xkS7JPPSURr2YwxkhKPzm2eRi")})}}),window.apiCaller=w}catch(t){e=s(t)}d("EVTInitCallback",e)}),window.getInfo=(async()=>{let e;try{e=c(await w.getInfo())}catch(t){e=s(t)}d("getInfoCallback",e)}),window.getHeadBlockHeaderState=(async()=>{let e;try{e=c(await w.getHeadBlockHeaderState())}catch(t){e=s(t)}d("getHeadBlockHeaderStateCallback",e)}),window.getOwnedTokens=(async e=>{let t;try{t=c(await w.getOwnedTokens(e))}catch(a){t=s(a)}d("getOwnedTokensCallback",t)}),window.getManagedGroups=(async e=>{let t;try{t=c(await w.getManagedGroups(e))}catch(a){t=s(a)}d("getManagedGroupsCallback",t)}),window.getCreatedDomains=(async e=>{let t;try{t=c(await w.getCreatedDomains(e))}catch(a){t=s(a)}d("getCreatedDomainsCallback",t)}),window.getCreatedFungibles=(async e=>{let t;try{t=c(await w.getCreatedFungibles(e))}catch(a){t=s(a)}d("getCreatedFungiblesCallback",t)}),window.getActions=(async e=>{let t;try{t=c(await w.getActions(e))}catch(a){t=s(a)}d("getActionsCallback",t)}),window.getToken=(async(e,t)=>{let a;try{a=c(await w.getToken(e,t))}catch(n){a=s(n)}d("getTokenCallback",a)}),window.getFungibleBalance=(async(e,t)=>{let a;"string"===typeof t&&(t=Number(t));try{a=c(await w.getFungibleBalance(e,t))}catch(n){a=s(n)}d("getFungibleBalanceCallback",a)}),window.getTransactionDetailById=(async e=>{let t;try{t=c(await w.getTransactionDetailById(e))}catch(a){t=s(a)}d("getTransactionDetailByIdCallback",t)}),window.getDomainDetail=(async e=>{let t;try{t=c(await w.getDomainDetail(e))}catch(a){t=s(a)}d("getDomainDetailCallback",t)}),window.getGroupDetail=(async e=>{let t;try{t=c(await w.getGroupDetail(e))}catch(a){t=s(a)}d("getGroupDetailCallback",t)}),window.getFungibleActionsByAddress=(async(e,t,a=0,n=10)=>{let i;try{i=c(await w.getFungibleActionsByAddress(e,t,a,n))}catch(r){i=s(r)}d("getFungibleActionsByAddressCallback",i)}),window.getTransactionsDetailOfPublicKeys=(async(e,t=0,a=10)=>{let n;try{n=c(await w.getTransactionsDetailOfPublicKeys(e,t,a))}catch(i){n=s(i)}d("getTransactionsDetailOfPublicKeysCallback",n)}),window.getFungibleSymbolDetail=(async e=>{let t;try{t=c(await w.getFungibleSymbolDetail(e))}catch(a){t=s(a)}d("getFungibleSymbolDetailCallback",t)}),window.getRequiredKeysForSuspendedTransaction=(async(e,t)=>{let a;try{a=c(await w.getRequiredKeysForSuspendedTransaction(e,t))}catch(n){a=s(n)}d("getRequiredKeysForSuspendedTransactionCallback",a)}),window.getStatusOfEvtLink=(async e=>{let t;e=l(e);try{t=c(await w.getStatusOfEvtLink(e))}catch(a){t=s(a)}d("getStatusOfEvtLinkCallback",t)}),window.getSuspendedTransactionDetail=(async e=>{let t;try{t=c(await w.getSuspendedTransactionDetail(e))}catch(a){t=s(a)}d("getSuspendedTransactionDetailCallback",t)}),window.getEstimatedChargeForTransaction=(async(e,t,a)=>{let n;t=l(t),a=l(a);try{n=c(a?await w.getEstimatedChargeForTransaction(a,new r.a.EvtAction(e,t)):await w.getEstimatedChargeForTransaction(new r.a.EvtAction(e,t)))}catch(i){n=s(i)}d("getEstimatedChargeForTransactionCallback",n)}),window.generateUnsignedTransaction=(async(e,t,a)=>{let n;t=l(t),a=l(a);try{n=c(a?await w.generateUnsignedTransaction(a,new r.a.EvtAction(e,t)):await w.generateUnsignedTransaction(new r.a.EvtAction(e,t)))}catch(i){n=s(i)}d("generateUnsignedTransactionCallback",n)}),window.pushTransaction=(async(e,t,a)=>{let n;t=l(t),a=l(a);try{n=c(a?await w.pushTransaction(a,new r.a.EvtAction(e,t)):await w.pushTransaction(new r.a.EvtAction(e,t)))}catch(i){n=s(i)}d("pushTransactionCallback",n)}),window.getUniqueLinkId=(async()=>{let e;try{e=c(await r.a.EvtLink.getUniqueLinkId())}catch(t){e=s(t)}d("getUniqueLinkIdCallback",e)}),window.getEVTLinkQrImage=((t,a,n)=>{let i;a=l(a),n=l(n);try{r.a.EvtLink.getEVTLinkQrImage(t,a,n,(t,a)=>{if(t)return console.log(e.message),void d("getEVTLinkQrImageCallback",s({isServerError:!1}));d("getEVTLinkQrImageCallback",c(a.dataUrl))})}catch(o){i=s(o),d("getEVTLinkQrImageCallback",i)}}),window.parseEvtLink=(async(e,t)=>{let a;t=l(t);try{a=c(await r.a.EvtLink.parseEvtLink(e,t))}catch(n){a=s(n)}d("parseEvtLinkCallback",a)}),window.getEvtLinkForEveriPass=(async e=>{let t;e=l(e);try{t=c(await r.a.EvtLink.getEvtLinkForEveriPass(e))}catch(a){t=s(a)}d("getEvtLinkForEveriPassCallback",t)}),window.getEvtLinkForEveriPay=(async e=>{let t;e=l(e);try{t=c(await r.a.EvtLink.getEvtLinkForEveriPay(e))}catch(a){t=s(a)}d("getEvtLinkForEveriPayCallback",t)}),window.getEvtLinkForPayeeCode=(async e=>{let t;e=l(e);try{t=c(await r.a.EvtLink.getEvtLinkForPayeeCode(e))}catch(a){t=s(a)}d("getEvtLinkForPayeeCodeCallback",t)});var y=n("00a5"),g=n.n(y);window.generateMnemonic=(()=>{let e=g.a.generateMnemonic(words);d("generateMnemonicCallback",e)}),window.mnemonicToSeedHex=(e=>{let t=g.a.mnemonicToSeedHex(e);d("mnemonicToSeedHexCallback",t)}),window.mnemonicToSeed=((e,t)=>{let a;a=t?g.a.mnemonicToSeed(e,t):g.a.mnemonicToSeed(e),d("mnemonicToSeedCallback",a)}),window.validateMnemonic=(e=>{let t=g.a.validateMnemonic(e);d("validateMnemonicCallback",t)}),window.entropyToMnemonic=(e=>{let t=g.a.entropyToMnemonic(e);d("entropyToMnemonicCallback",t)}),window.mnemonicToEntropy=(e=>{let t=g.a.mnemonicToEntropy(e);d("mnemonicToEntropyCallback",t)}),window.createEVTWallet=(async e=>{let t;try{let n=(await r.a.EvtKey.random32BytesAsHex()).substring(32),i=g.a.entropyToMnemonic(n),o=g.a.mnemonicToSeedHex(i),c=await r.a.EvtKey.seedPrivateKey(o),l=r.a.EvtKey.privateToPublic(c);t=JSON.stringify({mnemoinc:i,privateKey:c,publicKey:l,password:e,type:"EVT"})}catch(a){t=s(a)}d("createEVTWalletCallback",t)}),window.importEVTWallet=(async(e,t)=>{let a;try{let i=g.a.mnemonicToSeedHex(e),o=await r.a.EvtKey.seedPrivateKey(i),c=r.a.EvtKey.privateToPublic(o);a=JSON.stringify({mnemoinc:e,privateKey:o,publicKey:c,password:t,type:"EVT"})}catch(n){a=s(n)}d("importEVTWalletCallback",a)}),window.getEVTFungiblesList=(async e=>{let t=[];try{let n=await window.apiCaller.getCreatedFungibles(e);n.ids.forEach(e=>{let a=window.apiCaller.getFungibleSymbolDetail(e);t.push(a)}),Promise.all(t).then(e=>{d("getEVTFungiblesListCallback",c(e))}).catch(e=>{t=s(e),d("getEVTFungiblesListCallback",t)})}catch(a){t=s(a),d("getEVTFungiblesListCallback",t)}})}});
//# sourceMappingURL=app.40092d58.js.map