"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[753],{3753:(e,s,r)=>{r.d(s,{worker:()=>g});var t=r(3806),o=r(4880),a=r(153);const c="users";const n=function(){let e;const s=indexedDB.open("UserDB",1);return s.onerror=e=>{console.error("IndexedDB error:",e.target.error)},s.onsuccess=s=>{e=s.target.result,console.log("IndexedDB reasy to use!")},s.onupgradeneeded=s=>{if(e=s.target.result,!e.objectStoreNames.contains(c)){const s=e.createObjectStore(c,{keyPath:"id",autoIncrement:!0});s.createIndex("name","name",{unique:!1}),s.createIndex("email","email",{unique:!0})}},{addUser:s=>new Promise(((r,t)=>{const o=e.transaction([c],"readwrite").objectStore(c);o.index("email").get(s.email).onsuccess=e=>{if(e.target.result)console.error("Email already exists:",s.email),t({success:!1,message:"Email already exists: ".concat(s.email)});else{const e=o.add(s);e.onsuccess=e=>{r({success:!0,result:e.target.result})},e.onerror=e=>{t({success:!1,message:e.target.error})}}}})),getUsers:()=>new Promise(((s,r)=>{const t=e.transaction([c],"readonly").objectStore(c).getAll();t.onsuccess=e=>{s(e.target.result)},t.onerror=e=>{r(e.target.error)}})),editUser:(s,r)=>new Promise(((t,o)=>{const a=e.transaction([c],"readwrite").objectStore(c),n=a.get(parseInt(s));n.onsuccess=e=>{const c=e.target.result;if(c){const e={...c,...r},s=a.put(e);s.onsuccess=e=>{t({success:!0,result:e.target.result})},s.onerror=e=>{o({success:!1,message:e.target.error})}}else o({success:!1,message:"User not found with id: ".concat(s)})},n.onerror=e=>{o(e.target.error)}})),deleteUser:s=>new Promise(((r,t)=>{console.log("deleteUser",s);try{const o=e.transaction([c],"readwrite"),a=o.objectStore(c).delete(parseInt(s));a.onsuccess=e=>{console.log("deleteUser success",e),r({success:!0,result:e.target.result})},a.onerror=e=>{t({success:!1,message:e.target.error})}}catch(o){console.log(o)}}))}},{addUser:u,getUsers:i,editUser:l,deleteUser:d}=n(),m=[o.L.get("http://example.com/users",(async()=>{const e=await i();return a.c.json(e)})),o.L.post("http://example.com/user",(async e=>{let{request:s}=e;const r=await s.json();if(!r.name||!r.email)return a.c.json({success:!1,message:"Name and email is required"});const t=await u(r);return a.c.json(t)})),o.L.put("http://example.com/user/:id",(async e=>{let{params:s,request:r}=e;const{id:t}=s,o=await r.json();if(!t)return a.c.json({success:!1,message:"Id is required"});if(!o.name||!o.email)return a.c.json({success:!1,message:"Name and email is required"});const c=await l(t,o);return a.c.json(c)})),o.L.delete("http://example.com/user/:id",(async e=>{let{params:s}=e;const{id:r}=s;if(!r)return a.c.json({success:!1,message:"Id is required"});const t=await d(r);return a.c.json(t)}))],g=(0,t.k)(...m)}}]);
//# sourceMappingURL=753.ccdf9a4a.chunk.js.map