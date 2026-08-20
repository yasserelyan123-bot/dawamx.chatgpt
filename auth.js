import {users} from '../data/demo-data.js';
export function authenticate(identifier,password){return users.find(u=>(u.id===identifier||u.email.toLowerCase()===identifier.toLowerCase())&&u.password===password)||null}
