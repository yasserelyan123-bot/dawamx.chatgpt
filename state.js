export const state={session:null,lang:localStorage.getItem('dx_lang')||'ar',route:'dashboard'};
export function setSession(session){state.session=session;sessionStorage.setItem('dx_session',JSON.stringify(session))}
export function restoreSession(){try{const raw=sessionStorage.getItem('dx_session');state.session=raw?JSON.parse(raw):null}catch{state.session=null;sessionStorage.removeItem('dx_session')}}
export function clearSession(){state.session=null;sessionStorage.removeItem('dx_session')}
export function setLanguage(lang){state.lang=lang;localStorage.setItem('dx_lang',lang);document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr'}
