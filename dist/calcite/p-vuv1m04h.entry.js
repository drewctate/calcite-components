import{f as t,d as e,e as i,g as s,h as l}from"./p-fe89d886.js";const r="M23 11.5A11.5 11.5 0 1 1 11.5 0 11.5 11.5 0 0 1 23 11.5zm-5.5-6.018l-8.5 8.5-3.5-3.5-2 2L9.018 18l.018-.018L11.018 16l8.5-8.5z",a="M22.3 19.795l-9-17.901a1.5 1.5 0 0 0-2.597 0L1.7 19.795a1.502 1.502 0 0 0 0 1.502A1.456 1.456 0 0 0 2.998 22H21a1.458 1.458 0 0 0 1.299-.703 1.506 1.506 0 0 0 .001-1.502zM13 19h-2v-2h2zm0-3h-2V8h2z",h="M11 13h1v4h-1zm3.895 5.45a.311.311 0 0 0-.12-.27l-.232-.18h-6.19l-.232.18a.312.312 0 0 0 .04.518l1.387.771-1.367.76a.311.311 0 0 0-.028.526l3.09 2.18a.356.356 0 0 0 .41 0l3.09-2.18a.311.311 0 0 0-.029-.527l-1.366-.759 1.388-.77a.312.312 0 0 0 .159-.25zM11.59 0l-.173.002L11.244 0a6.2 6.2 0 0 0-6.182 6.698c.31 2.575 2.784 5.207 2.939 6.134.13.78.116 1.844.199 2.472A2.542 2.542 0 0 0 9.088 17H10v-4.412L8.83 9.37l.94-.342L10.85 12h1.3l1.08-2.97.94.341L13 12.588V17h.745a2.542 2.542 0 0 0 .889-1.696c.083-.628.068-1.692.199-2.472.154-.927 2.628-3.559 2.938-6.134A6.2 6.2 0 0 0 11.59 0z",c="M16.707 16l10.607 10.606-.708.707L16 16.707 5.394 27.313l-.708-.707L15.293 16 4.686 5.394l.708-.707L16 15.293 26.606 4.687l.708.707z",n=(()=>{let e=new Map,i={currentAlert:"",queueLength:0};const s=(t,e)=>{Array.isArray(t)?[...t].forEach(t=>{e[t]=i[t]}):e[t]=Object.assign({},i)},l=(t,i)=>{e.has(t)||(e.set(t,i),s(i,t))};return{Provider:({state:t},l)=>(i=t,e.forEach(s),l),Consumer:(e,i)=>((e,i)=>t("context-consumer",{subscribe:e,renderer:i}))(l,i[0]),injectProps:(t,i)=>{const s=t.prototype,r=s.componentWillLoad,a=s.componentDidUnload;s.componentWillLoad=function(){if(l(this,i),r)return r.call(this)},s.componentDidUnload=function(){e.delete(this),a&&a.call(this)}}}})();class u{constructor(t){e(this,t),this.active=!1,this.dismiss=!1,this.duration=this.dismiss?"medium":null,this.color="blue",this.theme="light",this.icon=!1,this.id="1",this.currentAlert="",this.queueLength=0,this.durationDefaults={slow:14e3,medium:1e4,fast:6e3},this.iconDefaults={green:r,yellow:a,red:a,blue:h},this.calciteAlertClose=i(this,"calciteAlertClose",7),this.calciteAlertOpen=i(this,"calciteAlertOpen",7)}watchCurrentAlert(){this.active=this.currentAlert===this.id,this.active&&this.openCalciteAlert(),this.active&&this.dismiss&&setTimeout(()=>this.closeCalciteAlert(),this.durationDefaults[this.duration])}async closeCalciteAlert(){this.calciteAlertClose.emit(this.id)}async openCalciteAlert(){this.calciteAlertOpen.emit(this.id)}connectedCallback(){["blue","red","green","yellow"].includes(this.color)||(this.color="blue"),null===this.duration||["slow","medium","fast"].includes(this.duration)||(this.duration="medium"),["dark","light"].includes(this.theme)||(this.theme="light")}setIcon(){return t("div",{class:"alert-icon"},t("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24",viewBox:"0 0 24 24"},t("path",{d:this.iconDefaults[this.color]})))}render(){const e=t("button",{class:"alert-close","aria-label":"close",onClick:()=>this.closeCalciteAlert()},t("svg",{xmlns:"http://www.w3.org/2000/svg",height:"32",width:"32",viewBox:"0 0 32 32"},t("path",{d:c}))),i=this.dismiss?"":e,l=this.icon?this.setIcon():"",r=t("div",{class:`${this.queueLength>0?"active ":""}alert-count`},"+",this.queueLength>0?this.queueLength:1),a=this.active&&this.dismiss?t("div",{class:"alert-dismiss"}):"";return t(s,{theme:this.theme,active:!!this.active,duration:this.duration},l,t("div",{class:"alert-content"},t("slot",{name:"alert-title"}),t("slot",{name:"alert-message"}),t("slot",{name:"alert-link"})),r,i,a)}get el(){return l(this)}static get watchers(){return{currentAlert:["watchCurrentAlert"]}}static get style(){return"body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}calcite-tabs{display:block}:host{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;pointer-events:none;z-index:102;margin:0 auto;width:50em;max-width:90%;max-height:0;background-color:#fff;-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.15);box-shadow:0 0 16px 0 rgba(0,0,0,.15);border-radius:2px;opacity:0;-webkit-transform:translate3d(0,1.5rem,0);transform:translate3d(0,1.5rem,0);-webkit-transition:.3s cubic-bezier(.215,.44,.42,.88),opacity .3s cubic-bezier(.215,.44,.42,.88),all .15s ease-in-out;transition:.3s cubic-bezier(.215,.44,.42,.88),opacity .3s cubic-bezier(.215,.44,.42,.88),all .15s ease-in-out;-webkit-border-before:0 solid transparent;border-block-start:0 solid transparent}\@media only screen and (max-width:860px){:host{max-width:100%;border-radius:2px 2px 0 0;-webkit-box-shadow:0 -8px 16px 0 rgba(0,0,0,.15);box-shadow:0 -8px 16px 0 rgba(0,0,0,.15)}}:host:host([active]){visibility:visible;opacity:1;max-height:100%;-webkit-transition-delay:.3s;transition-delay:.3s;-webkit-transform:translate3d(0,-1.5rem,0);transform:translate3d(0,-1.5rem,0);pointer-events:auto;border-block-start-width:3px}\@media only screen and (max-width:860px){:host:host([active]){-webkit-transform:translateZ(0);transform:translateZ(0)}}:host slot[name=alert-title]::slotted(div){font-size:1rem;line-height:1.5;font-weight:500}:host slot[name=alert-link]::slotted(a){font-size:.9375rem;line-height:1.5;color:#007ac2;margin-left:.75rem}:host slot[name=alert-message]::slotted(div){font-size:.9375rem;line-height:1.5;color:#555;display:inline}.alert-content{padding:.75rem 1.5rem;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition-delay:.3s;transition-delay:.3s;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;-ms-flex:1 1 auto;flex:1 1 auto;min-width:0;word-wrap:break-word;-webkit-padding-before:.75rem;padding-block-start:.75rem;-webkit-padding-after:.75rem;padding-block-end:.75rem;-webkit-padding-end:.75rem;padding-inline-end:.75rem;-webkit-padding-start:0;padding-inline-start:0}.alert-content svg{height:16px;width:16px;vertical-align:top}\@media only screen and (max-width:860px){.alert-content{padding:1.5rem}}.alert-content:first-of-type{-webkit-padding-start:1.5rem;padding-inline-start:1.5rem}\@media only screen and (max-width:860px){.alert-content{-webkit-padding-before:1.5rem;padding-block-start:1.5rem;-webkit-padding-after:1.5rem;padding-block-end:1.5rem;-webkit-padding-end:.75rem;padding-inline-end:.75rem;-webkit-padding-start:0;padding-inline-start:0}}.alert-icon{padding:.75rem 1.5rem;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition-delay:.3s;transition-delay:.3s;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.alert-icon svg{height:16px;width:16px;vertical-align:top}\@media only screen and (max-width:860px){.alert-icon{padding:1.5rem}}.alert-close{padding:.75rem 1.5rem;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition-delay:.3s;transition-delay:.3s;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;background-color:transparent;-webkit-appearance:none;border:none;outline:none;cursor:pointer;border-radius:0 0 2px 0}.alert-close svg{height:16px;width:16px;vertical-align:top}\@media only screen and (max-width:860px){.alert-close{padding:1.5rem}}.alert-close svg{fill:#151515}.alert-close:focus,.alert-close:hover{background-color:#f3f3f3}.alert-close:active{background-color:#eaeaea}.alert-close:last-child{border-radius:0 0 2px 0}\@media only screen and (max-width:860px){.alert-close{border-radius:0}}.alert-count{font-size:.875rem;line-height:1.5;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:space-evenly;justify-content:space-evenly;overflow:hidden;width:0;visibility:hidden;font-weight:500;text-align:center;color:#404040;opacity:0;-webkit-border-start:0 solid transparent;border-inline-start:0 solid transparent;-webkit-border-end:0 solid transparent;border-inline-end:0 solid transparent;cursor:default;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}.alert-count.active{visibility:visible;-webkit-transition-delay:.3s;transition-delay:.3s;opacity:1;padding:0 .375rem;width:3rem;-webkit-border-start:1px solid #f3f3f3;border-inline-start:1px solid #f3f3f3;-webkit-border-end:1px solid #f3f3f3;border-inline-end:1px solid #f3f3f3}.alert-count.active:last-child{-webkit-border-end:0 solid transparent;border-inline-end:0 solid transparent}\@media only screen and (max-width:860px){.alert-count{border-radius:0}}.alert-dismiss{left:0;top:0;width:100%;z-index:103}.alert-dismiss,.alert-dismiss:after{display:block;position:absolute;right:0;height:3px}.alert-dismiss:after{top:-3px;border-radius:2px 2px 0 0;content:\"\";background-color:hsla(0,0%,100%,.6);-webkit-transition:all .3s linear;transition:all .3s linear;z-index:104}:host([theme=dark]){background-color:#2b2b2b}:host([theme=dark]) slot[name=alert-title]::slotted(div){color:#f8f8f8}:host([theme=dark]) slot[name=alert-message]::slotted(div){color:#f3f3f3}:host([theme=dark]) .alert-close svg{fill:#d4d4d4}:host([theme=dark]) .alert-close:focus,:host([theme=dark]) .alert-close:hover{background-color:#202020}:host([theme=dark]) .alert-close:active{background-color:#151515}:host([theme=dark]) .alert-count{color:#d4d4d4}:host([theme=dark]) .alert-count.active{border-left:1px solid #202020;border-right:1px solid #202020}:host([theme=dark]) .alert-dismiss:after{background-color:rgba(43,43,43,.6)}:host([dir=rtl]) .alert-close:last-child{border-radius:0 0 0 2px}:host([dir=rtl]) slot[name=alert-link]::slotted(a){margin-left:unset;margin-right:.75rem}:host([color=blue]){border-block-start-color:#007ac2}:host([color=blue]) .alert-icon svg{fill:#007ac2}:host([color=red]){border-block-start-color:#d83020}:host([color=red]) .alert-icon svg{fill:#d83020}:host([color=yellow]){border-block-start-color:#edd317}:host([color=yellow]) .alert-icon svg{fill:#edd317}:host([color=green]){border-block-start-color:#35ac46}:host([color=green]) .alert-icon svg{fill:#35ac46}:host([duration=fast]) .alert-dismiss:after{-webkit-animation:dismissProgress 6s linear;animation:dismissProgress 6s linear}:host([duration=medium]) .alert-dismiss:after{-webkit-animation:dismissProgress 10s linear;animation:dismissProgress 10s linear}:host([duration=slow]) .alert-dismiss:after{-webkit-animation:dismissProgress 14s linear;animation:dismissProgress 14s linear}\@-webkit-keyframes dismissProgress{0%{width:0;opacity:0}to{width:100%;opacity:1}}\@keyframes dismissProgress{0%{width:0;opacity:0}to{width:100%;opacity:1}}"}}n.injectProps(u,["currentAlert","queueLength"]);class o{constructor(t){e(this,t),this.id="1",this.currentAlert="",this.active=!1,this.alertQueue=[],this.calciteAlertsClose=i(this,"calciteAlertsClose",7),this.calciteAlertsOpen=i(this,"calciteAlertsOpen",7)}updateQueueOnOpen(t){let e=t.target.id;this.alertQueue.includes(e)||(this.active=!0,this.currentAlert=e,this.alertQueue.push(e),this.calciteAlertsOpen.emit({id:this.id,currentAlert:this.currentAlert,alertQueue:this.alertQueue}))}updateQueueOnClose(t){let e=t.target.id;this.alertQueue.includes(e)&&(this.alertQueue=this.alertQueue.filter(t=>t!==e)),this.alertQueue.length<1&&setTimeout(()=>{this.active=!1},300),this.calciteAlertsClose.emit({id:this.id,currentAlert:this.currentAlert,alertQueue:this.alertQueue})}componentWillUpdate(){this.currentAlert=this.alertQueue.length>0?this.alertQueue[0]:""}render(){return t(s,{active:!!this.active},t(n.Provider,{state:{currentAlert:this.currentAlert,queueLength:this.alertQueue.length>=2?this.alertQueue.length-1:0}},t("slot",null)))}get el(){return l(this)}static get style(){return"body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}calcite-tabs{display:block}:host{display:none;position:fixed;left:0;right:0;bottom:0;pointer-events:none;z-index:101}:host:host([active]){display:block}"}}export{u as calcite_alert,o as calcite_alerts};