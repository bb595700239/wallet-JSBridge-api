(function(e){function t(t){for(var n,r,l=t[0],c=t[1],s=t[2],w=0,y=[];w<l.length;w++)r=l[w],i[r]&&y.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(y.length)y.shift()();return o.push.apply(o,s||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,l=1;l<a.length;l++){var c=a[l];0!==i[c]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},i={app:0},o=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("dbf2"),i=a.n(n);const o={versions:function(){var e=navigator.userAgent;return{trident:e.indexOf("Trident")>-1,presto:e.indexOf("Presto")>-1,webKit:e.indexOf("AppleWebKit")>-1,gecko:e.indexOf("Gecko")>-1&&-1==e.indexOf("KHTML"),mobile:!!e.match(/AppleWebKit.*Mobile.*/),ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:e.indexOf("Android")>-1||e.indexOf("Linux")>-1,iPhone:e.indexOf("iPhone")>-1,iPad:e.indexOf("iPad")>-1,webApp:-1==e.indexOf("Safari"),weixin:"micromessenger"==e.toLowerCase().match(/MicroMessenger/i),qq:" qq"==e.match(/\sQQ/i)}}()},r=e=>{return"string"!==typeof e?e:JSON.parse(e)},l=e=>{return e.isServerError?{code:0,data:"",message:"isServerError:"+e.message}:{code:0,data:"",message:"isClientError:"+e.message}},c=(e,t)=>{if(0===t.code||(t={code:1,data:t,message:""}),console.log(e,JSON.stringify(t)),o.versions.ios){if(!window.webkit.messageHandlers[e])throw new Error("未检测到回调方法");window.webkit.messageHandlers[e].postMessage(t)}if(o.versions.android){if(t=JSON.stringify(t),!window.test[e])throw new Error("未检测到回调方法");window.test[e](t)}};window.randomPrivateKey=(async()=>{let e;try{e=await i.a.EvtKey.randomPrivateKey()}catch(t){e=l(t)}c("randomPrivateKeyCallback",e)}),window.privateToPublic=(e=>{let t;try{t=i.a.EvtKey.privateToPublic(e)}catch(a){t=l(a)}c("privateToPublicCallback",t)}),window.seedPrivateKey=(e=>{let t;try{t=i.a.EvtKey.seedPrivateKey(e)}catch(a){t=l(a)}c("seedPrivateKeyCallback",t)}),window.isValidPrivateKey=(e=>{let t;try{t=i.a.EvtKey.isValidPrivateKey(e)}catch(a){t=l(a)}c("isValidPrivateKeyCallback",t)}),window.isValidPublicKey=(e=>{let t;try{t=i.a.EvtKey.isValidPublicKey(e)}catch(a){t=l(a)}c("isValidPublicKeyCallback",t)}),window.isValidAddress=(e=>{let t;try{t=i.a.EvtKey.isValidAddress(e)}catch(a){t=l(a)}c("isValidAddressCallback",t)}),window.random32BytesAsHex=(async()=>{let e;try{e=await i.a.EvtKey.random32BytesAsHex()}catch(t){e=l(t)}c("random32BytesAsHexCallback",e)}),window.randomName128=(async()=>{let e;try{e=await i.a.EvtKey.randomName128()}catch(t){e=l(t)}c("randomName128Callback",e)}),window.getNullAddress=(()=>{let e;try{e=i.a.EvtKey.getNullAddress(address)}catch(t){e=l(t)}c("getNullAddressCallback",e)});let s=null;window.needPrivateKeyResponse=null,window.EVTInit=(()=>{let e="";try{const a={host:"mainnet14.everitoken.io",port:443,protocol:"https"};s=i()({endpoint:a,keyProvider:()=>{return new Promise((e,t)=>{window.needPrivateKeyResponse=e,c("needPrivateKey","")})}}),window.apiCaller=s}catch(t){e=l(t)}c("EVTInitCallback",e)}),window.getInfo=(async()=>{let e;try{e=await s.getInfo()}catch(t){e=l(t)}c("getInfoCallback",e)}),window.getHeadBlockHeaderState=(async()=>{let e;try{e=await s.getHeadBlockHeaderState()}catch(t){e=l(t)}c("getHeadBlockHeaderStateCallback",e)}),window.getOwnedTokens=(async e=>{let t;try{t=await s.getOwnedTokens(e)}catch(a){t=l(a)}c("getOwnedTokensCallback",t)}),window.getManagedGroups=(async e=>{let t;try{t=await s.getManagedGroups(e)}catch(a){t=l(a)}c("getManagedGroupsCallback",t)}),window.getCreatedDomains=(async e=>{let t;try{t=await s.getCreatedDomains(e)}catch(a){t=l(a)}c("getCreatedDomainsCallback",t)}),window.getCreatedFungibles=(async e=>{let t;try{t=await s.getCreatedFungibles(e)}catch(a){t=l(a)}c("getCreatedFungiblesCallback",t)}),window.getActions=(async e=>{let t;try{t=await s.getActions(e)}catch(a){t=l(a)}c("getActionsCallback",t)}),window.getToken=(async(e,t)=>{let a;try{a=await s.getToken(e,t)}catch(n){a=l(n)}c("getTokenCallback",a)}),window.getFungibleBalance=(async(e,t)=>{let a;"string"===typeof t&&(t=Number(t));try{a=await s.getFungibleBalance(e,t)}catch(n){a=l(n)}c("getFungibleBalanceCallback",a)}),window.getTransactionDetailById=(async e=>{let t;try{t=await s.getTransactionDetailById(e)}catch(a){t=l(a)}c("getTransactionDetailByIdCallback",t)}),window.getDomainDetail=(async e=>{let t;try{t=await s.getDomainDetail(e)}catch(a){t=l(a)}c("getDomainDetailCallback",t)}),window.getGroupDetail=(async e=>{let t;try{t=await s.getGroupDetail(e)}catch(a){t=l(a)}c("getGroupDetailCallback",t)}),window.getFungibleActionsByAddress=(async(e,t,a=0,n=10)=>{let i;try{i=await s.getFungibleActionsByAddress(e,t,a,n)}catch(o){i=l(o)}c("getFungibleActionsByAddressCallback",i)}),window.getTransactionsDetailOfPublicKeys=(async(e,t=0,a=10)=>{let n;try{n=await s.getTransactionsDetailOfPublicKeys(e,t,a)}catch(i){n=l(i)}c("getTransactionsDetailOfPublicKeysCallback",n)}),window.getFungibleSymbolDetail=(async e=>{let t;try{t=await s.getFungibleSymbolDetail(e)}catch(a){t=l(a)}c("getFungibleSymbolDetailCallback",t)}),window.getRequiredKeysForSuspendedTransaction=(async(e,t)=>{let a;try{a=await s.getRequiredKeysForSuspendedTransaction(e,t)}catch(n){a=l(n)}c("getRequiredKeysForSuspendedTransactionCallback",a)}),window.getStatusOfEvtLink=(async e=>{let t;e=r(e);try{t=await s.getStatusOfEvtLink(e)}catch(a){t=l(a)}c("getStatusOfEvtLinkCallback",t)}),window.getSuspendedTransactionDetail=(async e=>{let t;try{t=await s.getSuspendedTransactionDetail(e)}catch(a){t=l(a)}c("getSuspendedTransactionDetailCallback",t)}),window.getEstimatedChargeForTransaction=(async(e,t,a)=>{let n;t=r(t),a=r(a);try{n=a?await s.getEstimatedChargeForTransaction(a,new i.a.EvtAction(e,t)):await s.getEstimatedChargeForTransaction(new i.a.EvtAction(e,t))}catch(o){n=l(o)}c("getEstimatedChargeForTransactionCallback",n)}),window.generateUnsignedTransaction=(async(e,t,a)=>{let n;t=r(t),a=r(a);try{n=a?await s.generateUnsignedTransaction(a,new i.a.EvtAction(e,t)):await s.generateUnsignedTransaction(new i.a.EvtAction(e,t))}catch(o){n=l(o)}c("generateUnsignedTransactionCallback",n)}),window.pushTransaction=(async(e,t,a)=>{let n;t=r(t),a=r(a);try{n=a?await s.pushTransaction(a,new i.a.EvtAction(e,t)):await s.pushTransaction(new i.a.EvtAction(e,t))}catch(o){n=l(o)}c("pushTransactionCallback",n)}),window.getUniqueLinkId=(async()=>{let e;try{e=await i.a.EvtLink.getUniqueLinkId()}catch(t){e=l(t)}c("getUniqueLinkIdCallback",e)}),window.getEVTLinkQrImage=((e,t,a)=>{let n;t=r(t),a=r(a);try{i.a.EvtLink.getEVTLinkQrImage(e,t,a,(e,t)=>{c("getEVTLinkQrImageCallback",e?l({isServerError:!1}):t)})}catch(o){n=l(o),c("getEVTLinkQrImageCallback",n)}}),window.parseEvtLink=(async(e,t)=>{let a;t=r(t);try{a=await i.a.EvtLink.parseEvtLink(e,t)}catch(n){a=l(n)}c("parseEvtLinkCallback",a)}),window.getEvtLinkForEveriPass=(async e=>{let t;e=r(e);try{t=await i.a.EvtLink.getEvtLinkForEveriPass(e)}catch(a){t=l(a)}c("getEvtLinkForEveriPassCallback",t)}),window.getEvtLinkForEveriPay=(async e=>{let t;e=r(e);try{t=await i.a.EvtLink.getEvtLinkForEveriPay(e)}catch(a){t=l(a)}c("getEvtLinkForEveriPayCallback",t)}),window.getEvtLinkForPayeeCode=(async e=>{let t;e=r(e);try{t=await i.a.EvtLink.getEvtLinkForPayeeCode(e)}catch(a){t=l(a)}c("getEvtLinkForPayeeCodeCallback",t)});var d=a("00a5"),w=a.n(d);window.generateMnemonic=(()=>{let e=w.a.generateMnemonic(words);c("generateMnemonicCallback",e)}),window.mnemonicToSeedHex=(e=>{let t=w.a.mnemonicToSeedHex(e);c("mnemonicToSeedHexCallback",t)}),window.mnemonicToSeed=((e,t)=>{let a;a=t?w.a.mnemonicToSeed(e,t):w.a.mnemonicToSeed(e),c("mnemonicToSeedCallback",a)}),window.validateMnemonic=(e=>{let t=w.a.validateMnemonic(e);c("validateMnemonicCallback",t)}),window.entropyToMnemonic=(e=>{let t=w.a.entropyToMnemonic(e);c("entropyToMnemonicCallback",t)}),window.mnemonicToEntropy=(e=>{let t=w.a.mnemonicToEntropy(e);c("mnemonicToEntropyCallback",t)}),window.createEVTWallet=(async e=>{let t;try{let n=(await i.a.EvtKey.random32BytesAsHex()).substring(32),o=w.a.entropyToMnemonic(n),r=w.a.mnemonicToSeedHex(o),c=await i.a.EvtKey.seedPrivateKey(r),s=i.a.EvtKey.privateToPublic(c);t={mnemoinc:o,privateKey:c,publicKey:s,password:e,type:"EVT"}}catch(a){t=l(a)}c("createEVTWalletCallback",t)}),window.importEVTWallet=(async(e,t)=>{let a;try{let o=w.a.mnemonicToSeedHex(e),r=await i.a.EvtKey.seedPrivateKey(o),c=i.a.EvtKey.privateToPublic(r);a={mnemoinc:e,privateKey:r,publicKey:c,password:t,type:"EVT"}}catch(n){a=l(n)}c("importEVTWalletCallback",a)}),window.getEVTFungiblesList=(async e=>{let t=[];try{let n=await window.apiCaller.getCreatedFungibles(e);console.log(n),n.ids.forEach(e=>{let a=window.apiCaller.getFungibleSymbolDetail(e);t.push(a)}),Promise.all(t).then(e=>{c("getEVTFungiblesListCallback",e)}).catch(e=>{t=l(e),c("getEVTFungiblesListCallback",t)})}catch(a){t=l(a),c("getEVTFungiblesListCallback",t)}}),window.getEVTDomainsList=(async e=>{let t=[];try{let n=await window.apiCaller.getCreatedDomains(e);console.log(n),n.forEach(e=>{let a=window.apiCaller.getDomainDetail(e.name);t.push(a)}),Promise.all(t).then(e=>{c("getEVTDomainsListCallback",e)}).catch(e=>{t=l(e),c("getEVTDomainsListCallback",t)})}catch(a){t=l(a),c("getEVTDomainsListCallback",t)}})}});
//# sourceMappingURL=app.5d911478.js.map