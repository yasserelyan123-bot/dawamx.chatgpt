import {state} from './state.js';
export const routes={};
export function registerRoute(name,render){routes[name]=render}
export function go(name){location.hash='#'+name}
export function currentRoute(){return location.hash.replace(/^#/,'')||'dashboard'}
export function renderRoute(container){if(!state.session)return;state.route=currentRoute();const render=routes[state.route]||routes.dashboard;render?.(container)}
