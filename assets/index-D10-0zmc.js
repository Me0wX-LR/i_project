var lh=Object.defineProperty;var ch=(t,e,n)=>e in t?lh(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ct=(t,e,n)=>ch(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();const Cd=[{id:"underwater-ambient-pad",name:"水下氛圍鋪底",en:"Underwater Ambient Pad",mood:"水下",style:"氛圍",file:"audio/library/001-underwater-ambient-pad.ogg",author:"isaiah658",duration:17},{id:"ambient-relaxing-loop",name:"寧靜氛圍循環",en:"Ambient Relaxing Loop",mood:"舒緩",style:"氛圍",file:"audio/library/002-ambient-relaxing-loop.ogg",author:"isaiah658",duration:25},{id:"abstraction-4ee6896a70defe43375a8518",name:"Sketchbook 2024-02-21_02",en:"Sketchbook 2024-02-21_02",mood:"未指定",style:"詼諧",file:"audio/library/003-abstraction-4ee6896a70defe43375a8518.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:30},{id:"abstraction-8050c41087b975e7bd74e5df",name:"Sketchbook 2024-08-01",en:"Sketchbook 2024-08-01",mood:"未指定",style:"芯片音樂",file:"audio/library/004-abstraction-8050c41087b975e7bd74e5df.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:30},{id:"abstraction-cd749f11dd097e915b4107ac",name:"VGMA Challenge 29",en:"VGMA Challenge 29",mood:"未指定",style:"電子",file:"audio/library/005-abstraction-cd749f11dd097e915b4107ac.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:30},{id:"abstraction-a02d499b250e3a92fdba66ed",name:"VGMA Challenge 05",en:"VGMA Challenge 05",mood:"未指定",style:"爵士",file:"audio/library/006-abstraction-a02d499b250e3a92fdba66ed.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:30},{id:"abstraction-a536fa50aec4ddfea7dde032",name:"VGMA Challenge 18",en:"VGMA Challenge 18",mood:"未指定",style:"未指定",file:"audio/library/007-abstraction-a536fa50aec4ddfea7dde032.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:31},{id:"abstraction-bbe4c30e22403b677f526e45",name:"Ludum Dare 32 04",en:"Ludum Dare 32 04",mood:"未指定",style:"電子",file:"audio/library/008-abstraction-bbe4c30e22403b677f526e45.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:32},{id:"abstraction-cfc56edbe16dc83cde0d0344",name:"Ludum Dare 38 09",en:"Ludum Dare 38 09",mood:"未指定",style:"芯片音樂",file:"audio/library/009-abstraction-cfc56edbe16dc83cde0d0344.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:32},{id:"heavenly-loop",name:"天境循環",en:"Heavenly Loop",mood:"夢幻",style:"氛圍",file:"audio/library/010-heavenly-loop.ogg",author:"isaiah658",duration:34},{id:"abstraction-3be812f737982a33fe28dc04",name:"VGMA Challenge 17",en:"VGMA Challenge 17",mood:"未指定",style:"未指定",file:"audio/library/011-abstraction-3be812f737982a33fe28dc04.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:34},{id:"abstraction-660328d005f5c812d0f52f63",name:"Patreon Challenge 12",en:"Patreon Challenge 12",mood:"未指定",style:"芯片音樂",file:"audio/library/012-abstraction-660328d005f5c812d0f52f63.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:36},{id:"happy-end-music",name:"快樂結尾",en:"happy end music",mood:"歡快",style:"合成樂曲",file:"audio/library/013-happy-end-music.ogg",author:"Igor Gundarev",duration:36},{id:"abstraction-75394c5b688daa78e5f73459",name:"Sketchbook 2024-10-14",en:"Sketchbook 2024-10-14",mood:"未指定",style:"鼓打貝斯",file:"audio/library/014-abstraction-75394c5b688daa78e5f73459.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:36},{id:"abstraction-a51cb573a413fd5a835ec6c2",name:"VGMA Challenge 28",en:"VGMA Challenge 28",mood:"未指定",style:"電子",file:"audio/library/015-abstraction-a51cb573a413fd5a835ec6c2.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:37},{id:"abstraction-b99be066361b26e25c07b3ad",name:"VGMA Challenge 01",en:"VGMA Challenge 01",mood:"未指定",style:"未指定",file:"audio/library/016-abstraction-b99be066361b26e25c07b3ad.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:39},{id:"abstraction-42d521c3eff005c80eb52792",name:"Sketchbook 2024-12-05",en:"Sketchbook 2024-12-05",mood:"未指定",style:"電子",file:"audio/library/017-abstraction-42d521c3eff005c80eb52792.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:39},{id:"abstraction-11f4db37c1809ac3fcead6ce",name:"VGMA Challenge 22",en:"VGMA Challenge 22",mood:"未指定",style:"詭異",file:"audio/library/018-abstraction-11f4db37c1809ac3fcead6ce.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:40},{id:"abstraction-587c74506a27fe4d51be8e7b",name:"Sketchbook 2024-04-24_03",en:"Sketchbook 2024-04-24_03",mood:"未指定",style:"氛圍",file:"audio/library/019-abstraction-587c74506a27fe4d51be8e7b.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:40},{id:"abstraction-5fa7326d9c740c438d185e07",name:"Ludum Dare 38 04",en:"Ludum Dare 38 04",mood:"未指定",style:"電子",file:"audio/library/020-abstraction-5fa7326d9c740c438d185e07.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:41},{id:"abstraction-65a04612ce40c711696d075b",name:"VGMA Challenge 20",en:"VGMA Challenge 20",mood:"未指定",style:"電子",file:"audio/library/021-abstraction-65a04612ce40c711696d075b.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:41},{id:"abstraction-0fa2b58312c2b15c4a6a0b08",name:"Patreon Challenge 13",en:"Patreon Challenge 13",mood:"未指定",style:"未指定",file:"audio/library/022-abstraction-0fa2b58312c2b15c4a6a0b08.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:43},{id:"abstraction-c70e608321db9b8dfe18784e",name:"Sketchbook 2024-05-01_02",en:"Sketchbook 2024-05-01_02",mood:"未指定",style:"詼諧",file:"audio/library/023-abstraction-c70e608321db9b8dfe18784e.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:44},{id:"abstraction-56b67c93c59de869834bd4a5",name:"Sketchbook 2024-05-29",en:"Sketchbook 2024-05-29",mood:"未指定",style:"放克",file:"audio/library/024-abstraction-56b67c93c59de869834bd4a5.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:44},{id:"abstraction-e90988e89ad0951cea816394",name:"Sketchbook 2024-06-16",en:"Sketchbook 2024-06-16",mood:"未指定",style:"氛圍",file:"audio/library/025-abstraction-e90988e89ad0951cea816394.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:45},{id:"abstraction-f1de31eeaca529c17c906dde",name:"Sketchbook 2024-12-15",en:"Sketchbook 2024-12-15",mood:"未指定",style:"未指定",file:"audio/library/026-abstraction-f1de31eeaca529c17c906dde.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:45},{id:"unsolved-investigation",name:"未解調查",en:"Unsolved Investigation",mood:"懸疑",style:"氛圍",file:"audio/library/027-unsolved-investigation.ogg",author:"isaiah658",duration:48},{id:"abstraction-38586ba5ee0890062c76b591",name:"Patreon Challenge 06",en:"Patreon Challenge 06",mood:"未指定",style:"詼諧",file:"audio/library/028-abstraction-38586ba5ee0890062c76b591.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:48},{id:"abstraction-3dfe3354a4cce53ab5ddcb82",name:"Sketchbook 2024-10-26",en:"Sketchbook 2024-10-26",mood:"未指定",style:"電子",file:"audio/library/029-abstraction-3dfe3354a4cce53ab5ddcb82.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:48},{id:"abstraction-6b13391bc1b3862dbf2cd5c9",name:"Sketchbook 2024-06-12",en:"Sketchbook 2024-06-12",mood:"未指定",style:"氛圍",file:"audio/library/030-abstraction-6b13391bc1b3862dbf2cd5c9.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:48},{id:"abstraction-dba2c0aae3bc394bac5622e5",name:"Ludum Dare 32 01",en:"Ludum Dare 32 01",mood:"未指定",style:"芯片音樂",file:"audio/library/031-abstraction-dba2c0aae3bc394bac5622e5.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:48},{id:"abstraction-36d4672d475a362f4c61d313",name:"Sketchbook 2024-05-22",en:"Sketchbook 2024-05-22",mood:"未指定",style:"放克",file:"audio/library/032-abstraction-36d4672d475a362f4c61d313.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:50},{id:"abstraction-c9405661a0c582a20bca1b45",name:"Sketchbook 2024-05-08",en:"Sketchbook 2024-05-08",mood:"未指定",style:"電子",file:"audio/library/033-abstraction-c9405661a0c582a20bca1b45.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:51},{id:"abstraction-9822a148da5254c79b75edd2",name:"Sketchbook 2024-11-29",en:"Sketchbook 2024-11-29",mood:"未指定",style:"電子",file:"audio/library/034-abstraction-9822a148da5254c79b75edd2.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:53},{id:"abstraction-417fa91b83fab8b8be52a4e5",name:"Sketchbook 2024-10-30",en:"Sketchbook 2024-10-30",mood:"未指定",style:"電子",file:"audio/library/035-abstraction-417fa91b83fab8b8be52a4e5.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:54},{id:"shrine",name:"神殿",en:"Shrine",mood:"神秘",style:"合成氛圍",file:"audio/library/036-shrine.ogg",author:"yd",duration:54},{id:"abstraction-b4976a7c25c1b112b43c16e1",name:"Sketchbook 2024-09-18",en:"Sketchbook 2024-09-18",mood:"未指定",style:"爵士",file:"audio/library/037-abstraction-b4976a7c25c1b112b43c16e1.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:55},{id:"abstraction-d32cba3e070abffb8c45fc60",name:"Ludum Dare 30 09",en:"Ludum Dare 30 09",mood:"未指定",style:"電子",file:"audio/library/038-abstraction-d32cba3e070abffb8c45fc60.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:56},{id:"abstraction-acf636f80c650a22f3f885d3",name:"Sketchbook 2024-07-07",en:"Sketchbook 2024-07-07",mood:"未指定",style:"氛圍",file:"audio/library/039-abstraction-acf636f80c650a22f3f885d3.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:56},{id:"abstraction-d7d18f07f39094c591df7967",name:"Ludum Dare 38 05",en:"Ludum Dare 38 05",mood:"未指定",style:"氛圍",file:"audio/library/040-abstraction-d7d18f07f39094c591df7967.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:56},{id:"abstraction-d1984968ebc23adf8e086da3",name:"Sketchbook 2024-01-24_02",en:"Sketchbook 2024-01-24_02",mood:"未指定",style:"爵士",file:"audio/library/041-abstraction-d1984968ebc23adf8e086da3.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:56},{id:"abstraction-9f0088d23b8792aa7e9b933e",name:"Sketchbook 2024-05-15",en:"Sketchbook 2024-05-15",mood:"未指定",style:"詼諧",file:"audio/library/042-abstraction-9f0088d23b8792aa7e9b933e.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:56},{id:"abstraction-ab023b86b7656e6a6b5a9fd5",name:"Sketchbook 2024-08-07",en:"Sketchbook 2024-08-07",mood:"未指定",style:"鼓打貝斯",file:"audio/library/043-abstraction-ab023b86b7656e6a6b5a9fd5.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:56},{id:"abstraction-01bff13f05e762766741d30c",name:"Sketchbook 2024-12-18",en:"Sketchbook 2024-12-18",mood:"未指定",style:"電子",file:"audio/library/044-abstraction-01bff13f05e762766741d30c.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:57},{id:"abstraction-65011fe3656ae45a20fc4eca",name:"Patreon Challenge 01",en:"Patreon Challenge 01",mood:"未指定",style:"氛圍",file:"audio/library/045-abstraction-65011fe3656ae45a20fc4eca.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:58},{id:"abstraction-b1eea75318d5df6b564a8b63",name:"Sketchbook 2024-07-04",en:"Sketchbook 2024-07-04",mood:"未指定",style:"電子",file:"audio/library/046-abstraction-b1eea75318d5df6b564a8b63.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:59},{id:"abstraction-d20307161d504210a0dd287e",name:"Sketchbook 2024-12-04",en:"Sketchbook 2024-12-04",mood:"未指定",style:"爵士",file:"audio/library/047-abstraction-d20307161d504210a0dd287e.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:59},{id:"abstraction-ba9d4f506da2eeb54b90650e",name:"Ludum Dare 30 04",en:"Ludum Dare 30 04",mood:"未指定",style:"氛圍",file:"audio/library/048-abstraction-ba9d4f506da2eeb54b90650e.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:59},{id:"abstraction-2b35cc0da1cd91fd39fb97b2",name:"Patreon Challenge 03",en:"Patreon Challenge 03",mood:"未指定",style:"放克",file:"audio/library/049-abstraction-2b35cc0da1cd91fd39fb97b2.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:60},{id:"abstraction-48c0afc43396d4848ac55f72",name:"Sketchbook 2024-03-20_01",en:"Sketchbook 2024-03-20_01",mood:"未指定",style:"氛圍",file:"audio/library/050-abstraction-48c0afc43396d4848ac55f72.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:60},{id:"abstraction-697e27f1877faadf79297a05",name:"Ludum Dare 38 06",en:"Ludum Dare 38 06",mood:"未指定",style:"未指定",file:"audio/library/051-abstraction-697e27f1877faadf79297a05.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:60},{id:"abstraction-77714daf9535c97397a6c564",name:"Sketchbook 2024-10-23",en:"Sketchbook 2024-10-23",mood:"未指定",style:"鼓打貝斯",file:"audio/library/052-abstraction-77714daf9535c97397a6c564.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:60},{id:"abstraction-847a4ac6e2513f295fcfa44f",name:"Ludum Dare 38 07",en:"Ludum Dare 38 07",mood:"未指定",style:"詭異",file:"audio/library/053-abstraction-847a4ac6e2513f295fcfa44f.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:60},{id:"abstraction-b4910ff43f4c78548ab131f1",name:"Sketchbook 2024-04-24_02",en:"Sketchbook 2024-04-24_02",mood:"未指定",style:"詼諧",file:"audio/library/054-abstraction-b4910ff43f4c78548ab131f1.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:60},{id:"abstraction-89630b0f4468f7f959e36ec0",name:"Sketchbook 2024-12-21",en:"Sketchbook 2024-12-21",mood:"未指定",style:"電子",file:"audio/library/055-abstraction-89630b0f4468f7f959e36ec0.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:61},{id:"abstraction-f23d9e696a256a1881c5d216",name:"Sketchbook 2024-07-03",en:"Sketchbook 2024-07-03",mood:"未指定",style:"爵士",file:"audio/library/056-abstraction-f23d9e696a256a1881c5d216.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:61},{id:"abstraction-19820782cc037983afcb0bbf",name:"Sketchbook 2024-06-19",en:"Sketchbook 2024-06-19",mood:"未指定",style:"沙漠",file:"audio/library/057-abstraction-19820782cc037983afcb0bbf.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:62},{id:"abstraction-b70e3121eb127f7991f11c65",name:"Ludum Dare 38 03",en:"Ludum Dare 38 03",mood:"未指定",style:"電子",file:"audio/library/058-abstraction-b70e3121eb127f7991f11c65.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:62},{id:"abstraction-d24b2fc54f8f5cc12465fdc4",name:"Patreon Challenge 14",en:"Patreon Challenge 14",mood:"未指定",style:"未指定",file:"audio/library/059-abstraction-d24b2fc54f8f5cc12465fdc4.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:62},{id:"abstraction-fe0be50849c38fd4c1dc88de",name:"Patreon Challenge 08",en:"Patreon Challenge 08",mood:"未指定",style:"電子",file:"audio/library/060-abstraction-fe0be50849c38fd4c1dc88de.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:62},{id:"abstraction-9e5c350d3e66baa56b4b806d",name:"Ludum Dare 32 05",en:"Ludum Dare 32 05",mood:"未指定",style:"氛圍",file:"audio/library/061-abstraction-9e5c350d3e66baa56b4b806d.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:64},{id:"abstraction-261059f19b4352047ea7bcb3",name:"Patreon Challenge 02",en:"Patreon Challenge 02",mood:"未指定",style:"放克",file:"audio/library/062-abstraction-261059f19b4352047ea7bcb3.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:64},{id:"abstraction-485c2342c9a329e48dfcce91",name:"Ludum Dare 38 02",en:"Ludum Dare 38 02",mood:"未指定",style:"電子",file:"audio/library/063-abstraction-485c2342c9a329e48dfcce91.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:64},{id:"abstraction-60b62ec497e3862fbb6871ba",name:"Ludum Dare 32 03",en:"Ludum Dare 32 03",mood:"未指定",style:"電子",file:"audio/library/064-abstraction-60b62ec497e3862fbb6871ba.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:64},{id:"abstraction-9858b87007c41a4dfe66b437",name:"Patreon Challenge 05",en:"Patreon Challenge 05",mood:"未指定",style:"氛圍",file:"audio/library/065-abstraction-9858b87007c41a4dfe66b437.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:64},{id:"abstraction-a0192b0f37ebd32ccf86ba4b",name:"Sketchbook 2024-12-26",en:"Sketchbook 2024-12-26",mood:"未指定",style:"芯片音樂",file:"audio/library/066-abstraction-a0192b0f37ebd32ccf86ba4b.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:64},{id:"abstraction-a5f8e96841acf650a1563bc6",name:"Ludum Dare 38 10",en:"Ludum Dare 38 10",mood:"未指定",style:"詭異",file:"audio/library/067-abstraction-a5f8e96841acf650a1563bc6.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:64},{id:"abstraction-d59a68c17577a03de3385912",name:"Ludum Dare 30 07",en:"Ludum Dare 30 07",mood:"未指定",style:"芯片音樂",file:"audio/library/068-abstraction-d59a68c17577a03de3385912.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:65},{id:"abstraction-63416340171aeb04a4ec672d",name:"Sketchbook 2024-08-21",en:"Sketchbook 2024-08-21",mood:"未指定",style:"電子",file:"audio/library/069-abstraction-63416340171aeb04a4ec672d.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:65},{id:"blue-meadow-in-green-sky",name:"綠空藍色草甸",en:"Blue Meadow In Green Sky",mood:"冒險",style:"振盪器合成樂",file:"audio/library/070-blue-meadow-in-green-sky.ogg",author:"yd",duration:67},{id:"abstraction-d5f1287e8f571f4ef4848914",name:"Patreon Challenge 11",en:"Patreon Challenge 11",mood:"未指定",style:"芯片音樂",file:"audio/library/071-abstraction-d5f1287e8f571f4ef4848914.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:67},{id:"abstraction-5c72fc0919a9fa4c2d291eae",name:"Ludum Dare 38 01",en:"Ludum Dare 38 01",mood:"未指定",style:"電子",file:"audio/library/072-abstraction-5c72fc0919a9fa4c2d291eae.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:67},{id:"abstraction-9ccab202734d1e91a94d3042",name:"Sketchbook 2024-11-30",en:"Sketchbook 2024-11-30",mood:"未指定",style:"爵士",file:"audio/library/073-abstraction-9ccab202734d1e91a94d3042.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:68},{id:"abstraction-1d66697cf4be45cc42790e5c",name:"Sketchbook 2024-05-01_01",en:"Sketchbook 2024-05-01_01",mood:"未指定",style:"氛圍",file:"audio/library/074-abstraction-1d66697cf4be45cc42790e5c.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:68},{id:"abstraction-49e6725f0c1cc61bcfda36c5",name:"Sketchbook 2024-09-22",en:"Sketchbook 2024-09-22",mood:"未指定",style:"電子",file:"audio/library/075-abstraction-49e6725f0c1cc61bcfda36c5.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:68},{id:"abstraction-3d3afd3623e069fbd0d6bd18",name:"Ludum Dare 38 08",en:"Ludum Dare 38 08",mood:"未指定",style:"詭異",file:"audio/library/076-abstraction-3d3afd3623e069fbd0d6bd18.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:69},{id:"abstraction-bf39c38204f8beba23115aa8",name:"Sketchbook 2024-03-06_02",en:"Sketchbook 2024-03-06_02",mood:"未指定",style:"氛圍",file:"audio/library/077-abstraction-bf39c38204f8beba23115aa8.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:70},{id:"abstraction-e0ec39d94eec6de3a0f38550",name:"Sketchbook 2024-04-24_01",en:"Sketchbook 2024-04-24_01",mood:"未指定",style:"詼諧",file:"audio/library/078-abstraction-e0ec39d94eec6de3a0f38550.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:72},{id:"abstraction-ef1eec8282f434eaad86dde1",name:"Sketchbook 2024-02-21_01",en:"Sketchbook 2024-02-21_01",mood:"未指定",style:"詼諧",file:"audio/library/079-abstraction-ef1eec8282f434eaad86dde1.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:72},{id:"the-journey-begins",name:"旅程啟程",en:"the journey begins",mood:"影視",style:"冒險樂曲",file:"audio/library/080-the-journey-begins.ogg",author:"Igor Gundarev",duration:74},{id:"abstraction-4818ca6a5b5c7b602fbf9eb7",name:"Sketchbook 2024-10-16",en:"Sketchbook 2024-10-16",mood:"未指定",style:"氛圍",file:"audio/library/081-abstraction-4818ca6a5b5c7b602fbf9eb7.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:75},{id:"abstraction-74f0cf483217e76032f13ed4",name:"Sketchbook 2024-11-20",en:"Sketchbook 2024-11-20",mood:"未指定",style:"爵士",file:"audio/library/082-abstraction-74f0cf483217e76032f13ed4.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:76},{id:"abstraction-379e9ed152721fe63d7d9380",name:"Patreon Challenge 07",en:"Patreon Challenge 07",mood:"未指定",style:"爵士",file:"audio/library/083-abstraction-379e9ed152721fe63d7d9380.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:77},{id:"challenge-accepted",name:"接受挑戰",en:"Challenge Accepted",mood:"動感",style:"動作芯片音樂",file:"audio/library/084-challenge-accepted.ogg",author:"DJ CrisP",duration:78},{id:"abstraction-18d847ce7af1d0230a733358",name:"Ludum Dare 32 02",en:"Ludum Dare 32 02",mood:"未指定",style:"氛圍",file:"audio/library/085-abstraction-18d847ce7af1d0230a733358.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:78},{id:"abstraction-26cf0c4f51458714e6d8cde7",name:"Sketchbook 2024-06-26",en:"Sketchbook 2024-06-26",mood:"未指定",style:"氛圍",file:"audio/library/086-abstraction-26cf0c4f51458714e6d8cde7.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:79},{id:"abstraction-110c843f2885eabd0a9d814c",name:"Sketchbook 2024-02-28_02",en:"Sketchbook 2024-02-28_02",mood:"未指定",style:"氛圍",file:"audio/library/087-abstraction-110c843f2885eabd0a9d814c.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:79},{id:"abstraction-4a26538e864fc80eff0c5e75",name:"Ludum Dare 30 08",en:"Ludum Dare 30 08",mood:"未指定",style:"電子",file:"audio/library/088-abstraction-4a26538e864fc80eff0c5e75.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:83},{id:"abstraction-cbab25ec294d006d878da66d",name:"Sketchbook 2024-02-07",en:"Sketchbook 2024-02-07",mood:"未指定",style:"鼓打貝斯",file:"audio/library/089-abstraction-cbab25ec294d006d878da66d.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:85},{id:"abstraction-8871daf0339f800fbe198a5b",name:"Sketchbook 2024-03-20_02",en:"Sketchbook 2024-03-20_02",mood:"未指定",style:"氛圍",file:"audio/library/090-abstraction-8871daf0339f800fbe198a5b.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:85},{id:"abstraction-8c2b64234b241112c8d54382",name:"Ludum Dare 30 03",en:"Ludum Dare 30 03",mood:"未指定",style:"詭異",file:"audio/library/091-abstraction-8c2b64234b241112c8d54382.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:86},{id:"abstraction-ea7ef5046ecf080c734c5257",name:"Sketchbook 2024-08-13",en:"Sketchbook 2024-08-13",mood:"未指定",style:"氛圍",file:"audio/library/092-abstraction-ea7ef5046ecf080c734c5257.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:89},{id:"abstraction-010fad54d780f3cb3ad6e8cc",name:"Sketchbook 2024-03-30_02",en:"Sketchbook 2024-03-30_02",mood:"未指定",style:"氛圍",file:"audio/library/093-abstraction-010fad54d780f3cb3ad6e8cc.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:90},{id:"abstraction-4e6836606331898f144502c1",name:"Sketchbook 2024-09-25",en:"Sketchbook 2024-09-25",mood:"未指定",style:"低保真",file:"audio/library/094-abstraction-4e6836606331898f144502c1.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:90},{id:"abstraction-ca1b59609b9f64504fb1c035",name:"Sketchbook 2024-03-06_01",en:"Sketchbook 2024-03-06_01",mood:"未指定",style:"氛圍",file:"audio/library/095-abstraction-ca1b59609b9f64504fb1c035.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:90},{id:"abstraction-3916654edca95b5dd7e4afc3",name:"Sketchbook 2024-01-24_01",en:"Sketchbook 2024-01-24_01",mood:"未指定",style:"氛圍",file:"audio/library/096-abstraction-3916654edca95b5dd7e4afc3.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:98},{id:"abstraction-2bd74cd8b63648ee01b5866d",name:"Ludum Dare 30 01",en:"Ludum Dare 30 01",mood:"未指定",style:"未指定",file:"audio/library/097-abstraction-2bd74cd8b63648ee01b5866d.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:100},{id:"abstraction-0edd5955f1182cf768701769",name:"Sketchbook 2024-02-28_01",en:"Sketchbook 2024-02-28_01",mood:"未指定",style:"動態",file:"audio/library/098-abstraction-0edd5955f1182cf768701769.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:100},{id:"abstraction-555d119bfb231cfe250b76e3",name:"Sketchbook 2024-04-10",en:"Sketchbook 2024-04-10",mood:"未指定",style:"爵士",file:"audio/library/099-abstraction-555d119bfb231cfe250b76e3.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:102},{id:"abstraction-1b02d180e9e102a6a28aa30f",name:"Sketchbook 2024-11-13",en:"Sketchbook 2024-11-13",mood:"未指定",style:"氛圍",file:"audio/library/100-abstraction-1b02d180e9e102a6a28aa30f.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:102}],rc=new Map(Cd.map(t=>[t.id,t])),la="./",dh={title:{src:`${la}audio/title-empty-city.ogg`,volume:.42},city:{src:`${la}audio/city-mirrorshade.mp3`,volume:.38},tension:{src:`${la}audio/tension-dark-shrine.ogg`,volume:.4},battle:{src:`${la}audio/battle-cynic.ogg`,volume:.46},ending:{src:`${la}audio/ending-whispers.ogg`,volume:.38}};class uh{constructor(e){ct(this,"ctx",null);ct(this,"master",null);ct(this,"muted",!1);ct(this,"started",!1);ct(this,"bgm",null);ct(this,"mood","title");ct(this,"variant",0);ct(this,"libraryId",null);this.muted=e}async unlock(){if(this.started){this.bgm?.paused&&this.playBgm(),this.ctx?.state==="suspended"&&await this.ctx.resume();return}if(!this.started){this.started=!0;try{const e=window.AudioContext||window.webkitAudioContext;if(e){const n=new e;this.ctx=n;const i=n.createGain();i.gain.value=this.muted?0:.7,i.connect(n.destination),this.master=i,n.state==="suspended"&&await n.resume()}}catch{this.ctx=null}this.libraryId?this.playLibraryTrack(this.libraryId):this.playBgm()}this.ctx?.state==="suspended"&&await this.ctx.resume()}setMuted(e){this.muted=e,this.bgm&&(this.bgm.muted=e),this.master&&this.ctx&&this.master.gain.setTargetAtTime(e?0:.7,this.ctx.currentTime,.08)}setIntensity(e){}sfx(e){if(!this.ctx||!this.master||this.muted)return;const n=this.ctx,i=n.currentTime,a=n.createGain();if(a.connect(this.master),e==="click"){const r=n.createOscillator();r.type="square",r.frequency.setValueAtTime(320,i),r.frequency.exponentialRampToValueAtTime(160,i+.05),a.gain.setValueAtTime(.035,i),a.gain.exponentialRampToValueAtTime(.001,i+.06),r.connect(a),r.start(i),r.stop(i+.07);return}if(e==="confirm"){const r=n.createOscillator();r.type="triangle",r.frequency.setValueAtTime(220,i),r.frequency.exponentialRampToValueAtTime(440,i+.12),a.gain.setValueAtTime(.05,i),a.gain.exponentialRampToValueAtTime(.001,i+.35),r.connect(a),r.start(i),r.stop(i+.36);return}if(e==="danger"){const r=n.createOscillator();r.type="sawtooth",r.frequency.setValueAtTime(90,i),r.frequency.linearRampToValueAtTime(70,i+.5);const s=n.createBiquadFilter();s.type="lowpass",s.frequency.value=500,a.gain.setValueAtTime(.08,i),a.gain.exponentialRampToValueAtTime(.001,i+.55),r.connect(s),s.connect(a),r.start(i),r.stop(i+.56);return}if(e==="miss"){const r=n.createBuffer(1,Math.floor(n.sampleRate*.18),n.sampleRate),s=r.getChannelData(0);for(let c=0;c<s.length;c++){const d=c/s.length;s[c]=(Math.random()*2-1)*(1-d)*.55}const o=n.createBufferSource();o.buffer=r;const l=n.createBiquadFilter();l.type="bandpass",l.frequency.setValueAtTime(900,i),l.frequency.exponentialRampToValueAtTime(260,i+.16),l.Q.value=1.4,a.gain.setValueAtTime(.06,i),a.gain.exponentialRampToValueAtTime(.001,i+.18),o.connect(l),l.connect(a),o.start(i);return}if(e==="dice"){for(let r=0;r<3;r++){const s=i+r*.045,o=n.createOscillator();o.type="square",o.frequency.setValueAtTime(700+r*90,s);const l=n.createGain();l.gain.setValueAtTime(.02,s),l.gain.exponentialRampToValueAtTime(.001,s+.035),o.connect(l),l.connect(this.master),o.start(s),o.stop(s+.04)}return}if(e==="mark"||e==="bond"){const r=n.createOscillator();r.type="sine",r.frequency.setValueAtTime(e==="mark"?520:392,i),r.frequency.exponentialRampToValueAtTime(e==="mark"?760:523,i+.18),a.gain.setValueAtTime(.04,i),a.gain.exponentialRampToValueAtTime(.001,i+.4),r.connect(a),r.start(i),r.stop(i+.41)}}setMood(e,n=0){this.libraryId===null&&this.mood===e&&this.variant===n||(this.libraryId=null,this.mood=e,this.variant=n,this.playBgm())}setLibraryTrack(e){rc.get(e)&&(this.libraryId===e&&this.bgm&&!this.bgm.paused||(this.libraryId=e,this.started&&this.playLibraryTrack(e)))}playLibraryTrack(e){const n=rc.get(e);n&&this.playSource(`${la}${n.file}`,.42,`library:${e}`)}playBgm(){if(!this.started)return;const e=dh[this.mood];e&&this.playSource(e.src,e.volume,this.mood)}playSource(e,n,i){if(!this.started||this.bgm&&this.bgm.dataset.trackKey===i&&!this.bgm.paused)return;this.bgm&&(this.bgm.pause(),this.bgm.currentTime=0,this.bgm.removeAttribute("src"));const a=new Audio;a.dataset.trackKey=i,a.src=e,a.loop=!0,a.preload="auto",a.volume=n,a.muted=this.muted,this.bgm=a,a.play().catch(()=>{})}level(){return this.bgm&&!this.bgm.paused?1:0}currentTrack(){return this.bgm?.src??""}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bl="186",hh=0,sc=1,fh=2,Kr=1,ph=2,Oa=3,Ui=0,rn=1,Yn=2,jn=0,Ha=1,oc=2,lc=3,cc=4,mh=5,ca=100,gh=101,_h=102,vh=103,bh=104,xh=200,yh=201,Sh=202,Mh=203,Ld=204,Pd=205,Eh=206,Th=207,Ah=208,wh=209,Rh=210,Ch=211,Lh=212,Ph=213,Ih=214,Mo=0,Eo=1,To=2,Za=3,Ao=4,wo=5,Ro=6,Co=7,Id=0,Dh=1,Nh=2,kn=0,Dd=1,Nd=2,Ud=3,xl=4,kd=5,Fd=6,Od=7,Bd=300,ki=301,ma=302,Ls=303,Ps=304,vs=306,Lo=1e3,Jn=1001,Po=1002,Bt=1003,Uh=1004,vr=1005,Wt=1006,Is=1007,Li=1008,un=1009,$d=1010,zd=1011,Ka=1012,yl=1013,On=1014,Nn=1015,Bn=1016,Sl=1017,Ml=1018,Ja=1020,Hd=35902,Gd=35899,Vd=1021,Wd=1022,Mn=1023,ti=1026,Pi=1027,Xd=1028,El=1029,Fi=1030,Tl=1031,Al=1033,Jr=33776,Qr=33777,jr=33778,es=33779,Io=35840,Do=35841,No=35842,Uo=35843,ko=36196,Fo=37492,Oo=37496,Bo=37488,$o=37489,ns=37490,zo=37491,Ho=37808,Go=37809,Vo=37810,Wo=37811,Xo=37812,qo=37813,Yo=37814,Zo=37815,Ko=37816,Jo=37817,Qo=37818,jo=37819,el=37820,tl=37821,nl=36492,il=36494,al=36495,rl=36283,sl=36284,is=36285,ol=36286,kh=3200,ll=0,Fh=1,pi="",tn="srgb",as="srgb-linear",rs="linear",ut="srgb",Ds=7680,Oh=519,Bh=512,$h=513,zh=514,wl=515,Hh=516,Gh=517,Rl=518,Vh=519,qd=35044,dc="300 es",Un=2e3,Qa=2001;function Wh(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ss(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Xh(){const t=ss("canvas");return t.style.display="block",t}const uc={};function os(...t){const e="THREE."+t.shift();console.log(e,...t)}function Yd(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ne(...t){t=Yd(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function nt(...t){t=Yd(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function ha(...t){const e=t.join(" ");e in uc||(uc[e]=!0,Ne(...t))}function qh(t,e,n){return new Promise(function(i,a){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:a();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const Yh={[Mo]:Eo,[To]:Ro,[Ao]:Co,[Za]:wo,[Eo]:Mo,[Ro]:To,[Co]:Ao,[wo]:Za};class $i{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const r=a.indexOf(n);r!==-1&&a.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ns=Math.PI/180,cl=180/Math.PI;function gi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function Ke(t,e,n){return Math.max(e,Math.min(n,t))}function Zh(t,e){return(t%e+e)%e}function Us(t,e,n){return(1-n)*t+n*e}function Dn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function pt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Vl=class Vl{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),a=Math.sin(n),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*a+e.x,this.y=r*a+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vl.prototype.isVector2=!0;let ze=Vl;class Sa{constructor(e=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=a}static slerpFlat(e,n,i,a,r,s,o){let l=i[a+0],c=i[a+1],d=i[a+2],f=i[a+3],u=r[s+0],p=r[s+1],v=r[s+2],x=r[s+3];if(f!==x||l!==u||c!==p||d!==v){let g=l*u+c*p+d*v+f*x;g<0&&(u=-u,p=-p,v=-v,x=-x,g=-g);let h=1-o;if(g<.9995){const T=Math.acos(g),P=Math.sin(T);h=Math.sin(h*T)/P,o=Math.sin(o*T)/P,l=l*h+u*o,c=c*h+p*o,d=d*h+v*o,f=f*h+x*o}else{l=l*h+u*o,c=c*h+p*o,d=d*h+v*o,f=f*h+x*o;const T=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=T,c*=T,d*=T,f*=T}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,a,r,s){const o=i[a],l=i[a+1],c=i[a+2],d=i[a+3],f=r[s],u=r[s+1],p=r[s+2],v=r[s+3];return e[n]=o*v+d*f+l*p-c*u,e[n+1]=l*v+d*u+c*f-o*p,e[n+2]=c*v+d*p+o*u-l*f,e[n+3]=d*v-o*f-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,a){return this._x=e,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(a/2),f=o(r/2),u=l(i/2),p=l(a/2),v=l(r/2);switch(s){case"XYZ":this._x=u*d*f+c*p*v,this._y=c*p*f-u*d*v,this._z=c*d*v+u*p*f,this._w=c*d*f-u*p*v;break;case"YXZ":this._x=u*d*f+c*p*v,this._y=c*p*f-u*d*v,this._z=c*d*v-u*p*f,this._w=c*d*f+u*p*v;break;case"ZXY":this._x=u*d*f-c*p*v,this._y=c*p*f+u*d*v,this._z=c*d*v+u*p*f,this._w=c*d*f-u*p*v;break;case"ZYX":this._x=u*d*f-c*p*v,this._y=c*p*f+u*d*v,this._z=c*d*v-u*p*f,this._w=c*d*f+u*p*v;break;case"YZX":this._x=u*d*f+c*p*v,this._y=c*p*f+u*d*v,this._z=c*d*v-u*p*f,this._w=c*d*f-u*p*v;break;case"XZY":this._x=u*d*f-c*p*v,this._y=c*p*f-u*d*v,this._z=c*d*v+u*p*f,this._w=c*d*f+u*p*v;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],a=n[4],r=n[8],s=n[1],o=n[5],l=n[9],c=n[2],d=n[6],f=n[10],u=i+o+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(s-a)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(d-l)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(r-c)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(s-a)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,a=e._y,r=e._z,s=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+s*o+a*c-r*l,this._y=a*d+s*l+r*o-i*c,this._z=r*d+s*c+i*l-a*o,this._w=s*d-i*o-a*l-r*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,a=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,a=-a,r=-r,s=-s,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,n=Math.sin(n*c)/d,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+r*n,this._w=this._w*l+s*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+r*n,this._w=this._w*l+s*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Wl=class Wl{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(hc.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(hc.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*a,this.y=r[1]*n+r[4]*i+r[7]*a,this.z=r[2]*n+r[5]*i+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,r=e.elements,s=1/(r[3]*n+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*n+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*n+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,a=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*a-o*i),d=2*(o*n-r*a),f=2*(r*i-s*n);return this.x=n+l*c+s*f-o*d,this.y=i+l*d+o*c-r*f,this.z=a+l*f+r*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*a,this.y=r[1]*n+r[5]*i+r[9]*a,this.z=r[2]*n+r[6]*i+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,a=e.y,r=e.z,s=n.x,o=n.y,l=n.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ks.copy(this).projectOnVector(e),this.sub(ks)}reflect(e){return this.sub(ks.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return n*n+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const a=Math.sin(n)*e;return this.x=a*Math.sin(i),this.y=Math.cos(n)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wl.prototype.isVector3=!0;let F=Wl;const ks=new F,hc=new Sa,Xl=class Xl{constructor(e,n,i,a,r,s,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,a,r,s,o,l,c)}set(e,n,i,a,r,s,o,l,c){const d=this.elements;return d[0]=e,d[1]=a,d[2]=o,d[3]=n,d[4]=r,d[5]=l,d[6]=i,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,r=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],d=i[4],f=i[7],u=i[2],p=i[5],v=i[8],x=a[0],g=a[3],h=a[6],T=a[1],P=a[4],y=a[7],M=a[2],E=a[5],R=a[8];return r[0]=s*x+o*T+l*M,r[3]=s*g+o*P+l*E,r[6]=s*h+o*y+l*R,r[1]=c*x+d*T+f*M,r[4]=c*g+d*P+f*E,r[7]=c*h+d*y+f*R,r[2]=u*x+p*T+v*M,r[5]=u*g+p*P+v*E,r[8]=u*h+p*y+v*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*s*d-n*o*c-i*r*d+i*o*l+a*r*c-a*s*l}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*s-o*c,u=o*l-d*r,p=c*r-s*l,v=n*f+i*u+a*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=f*x,e[1]=(a*c-d*i)*x,e[2]=(o*i-a*s)*x,e[3]=u*x,e[4]=(d*n-a*l)*x,e[5]=(a*r-o*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(s*n-i*r)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,a,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-a*c,a*l,-a*(-c*s+l*o)+o+n,0,0,1),this}scale(e,n){return ha("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fs.makeScale(e,n)),this}rotate(e){return ha("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fs.makeRotation(-e)),this}translate(e,n){return ha("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fs.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Xl.prototype.isMatrix3=!0;let Be=Xl;const Fs=new Be,fc=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pc=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kh(){const t={enabled:!0,workingColorSpace:as,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===ut&&(a.r=ei(a.r),a.g=ei(a.g),a.b=ei(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ut&&(a.r=fa(a.r),a.g=fa(a.g),a.b=fa(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===pi?rs:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return ha("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return ha("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(a,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[as]:{primaries:e,whitePoint:i,transfer:rs,toXYZ:fc,fromXYZ:pc,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:fc,fromXYZ:pc,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),t}const et=Kh();function ei(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function fa(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Vi;class Jh{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Vi===void 0&&(Vi=ss("canvas")),Vi.width=e.width,Vi.height=e.height;const a=Vi.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=Vi}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ss("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=ei(r[s]/255)*255;return i.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ei(n[i]/255)*255):n[i]=ei(n[i]);return{data:n,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qh=0;class Cl{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=gi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(Os(a[s].image)):r.push(Os(a[s]))}else r=Os(a);i.url=r}return n||(e.images[this.uuid]=i),i}}function Os(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Jh.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let jh=0;const Bs=new F;class qt extends $i{constructor(e=qt.DEFAULT_IMAGE,n=qt.DEFAULT_MAPPING,i=Jn,a=Jn,r=Wt,s=Li,o=Mn,l=un,c=qt.DEFAULT_ANISOTROPY,d=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=gi(),this.name="",this.source=new Cl(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Bs).x}get height(){return this.source.getSize(Bs).y}get depth(){return this.source.getSize(Bs).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ne(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Ne(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lo:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case Po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lo:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case Po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Bd;qt.DEFAULT_ANISOTROPY=1;const ql=class ql{constructor(e=0,n=0,i=0,a=1){this.x=e,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,a){return this.x=e,this.y=n,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*n+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*n+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*n+s[7]*i+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,a,r;const l=e.elements,c=l[0],d=l[4],f=l[8],u=l[1],p=l[5],v=l[9],x=l[2],g=l[6],h=l[10];if(Math.abs(d-u)<.01&&Math.abs(f-x)<.01&&Math.abs(v-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+x)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const P=(c+1)/2,y=(p+1)/2,M=(h+1)/2,E=(d+u)/4,R=(f+x)/4,m=(v+g)/4;return P>y&&P>M?P<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(P),a=E/i,r=R/i):y>M?y<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(y),i=E/a,r=m/a):M<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(M),i=R/r,a=m/r),this.set(i,a,r,n),this}let T=Math.sqrt((g-v)*(g-v)+(f-x)*(f-x)+(u-d)*(u-d));return Math.abs(T)<.001&&(T=1),this.x=(g-v)/T,this.y=(f-x)/T,this.z=(u-d)/T,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this.w=Ke(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this.w=Ke(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ql.prototype.isVector4=!0;let wt=ql;class ef extends $i{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new wt(0,0,e,n),this.scissorTest=!1,this.viewport=new wt(0,0,e,n),this.textures=[];const a={width:e,height:n,depth:i.depth},r=new qt(a),s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new Cl(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class En extends ef{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Zd extends qt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tf extends qt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const _s=class _s{constructor(e,n,i,a,r,s,o,l,c,d,f,u,p,v,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,a,r,s,o,l,c,d,f,u,p,v,x,g)}set(e,n,i,a,r,s,o,l,c,d,f,u,p,v,x,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=a,h[1]=r,h[5]=s,h[9]=o,h[13]=l,h[2]=c,h[6]=d,h[10]=f,h[14]=u,h[3]=p,h[7]=v,h[11]=x,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _s().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,a=1/Wi.setFromMatrixColumn(e,0).length(),r=1/Wi.setFromMatrixColumn(e,1).length(),s=1/Wi.setFromMatrixColumn(e,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,a=e.y,r=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const u=s*d,p=s*f,v=o*d,x=o*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=p+v*c,n[5]=u-x*c,n[9]=-o*l,n[2]=x-u*c,n[6]=v+p*c,n[10]=s*l}else if(e.order==="YXZ"){const u=l*d,p=l*f,v=c*d,x=c*f;n[0]=u+x*o,n[4]=v*o-p,n[8]=s*c,n[1]=s*f,n[5]=s*d,n[9]=-o,n[2]=p*o-v,n[6]=x+u*o,n[10]=s*l}else if(e.order==="ZXY"){const u=l*d,p=l*f,v=c*d,x=c*f;n[0]=u-x*o,n[4]=-s*f,n[8]=v+p*o,n[1]=p+v*o,n[5]=s*d,n[9]=x-u*o,n[2]=-s*c,n[6]=o,n[10]=s*l}else if(e.order==="ZYX"){const u=s*d,p=s*f,v=o*d,x=o*f;n[0]=l*d,n[4]=v*c-p,n[8]=u*c+x,n[1]=l*f,n[5]=x*c+u,n[9]=p*c-v,n[2]=-c,n[6]=o*l,n[10]=s*l}else if(e.order==="YZX"){const u=s*l,p=s*c,v=o*l,x=o*c;n[0]=l*d,n[4]=x-u*f,n[8]=v*f+p,n[1]=f,n[5]=s*d,n[9]=-o*d,n[2]=-c*d,n[6]=p*f+v,n[10]=u-x*f}else if(e.order==="XZY"){const u=s*l,p=s*c,v=o*l,x=o*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=u*f+x,n[5]=s*d,n[9]=p*f-v,n[2]=v*f-p,n[6]=o*d,n[10]=x*f+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nf,e,af)}lookAt(e,n,i){const a=this.elements;return on.subVectors(e,n),on.lengthSq()===0&&(on.z=1),on.normalize(),oi.crossVectors(i,on),oi.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),oi.crossVectors(i,on)),oi.normalize(),br.crossVectors(on,oi),a[0]=oi.x,a[4]=br.x,a[8]=on.x,a[1]=oi.y,a[5]=br.y,a[9]=on.y,a[2]=oi.z,a[6]=br.z,a[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,r=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],d=i[1],f=i[5],u=i[9],p=i[13],v=i[2],x=i[6],g=i[10],h=i[14],T=i[3],P=i[7],y=i[11],M=i[15],E=a[0],R=a[4],m=a[8],S=a[12],C=a[1],I=a[5],w=a[9],O=a[13],U=a[2],$=a[6],Y=a[10],V=a[14],ne=a[3],X=a[7],Q=a[11],te=a[15];return r[0]=s*E+o*C+l*U+c*ne,r[4]=s*R+o*I+l*$+c*X,r[8]=s*m+o*w+l*Y+c*Q,r[12]=s*S+o*O+l*V+c*te,r[1]=d*E+f*C+u*U+p*ne,r[5]=d*R+f*I+u*$+p*X,r[9]=d*m+f*w+u*Y+p*Q,r[13]=d*S+f*O+u*V+p*te,r[2]=v*E+x*C+g*U+h*ne,r[6]=v*R+x*I+g*$+h*X,r[10]=v*m+x*w+g*Y+h*Q,r[14]=v*S+x*O+g*V+h*te,r[3]=T*E+P*C+y*U+M*ne,r[7]=T*R+P*I+y*$+M*X,r[11]=T*m+P*w+y*Y+M*Q,r[15]=T*S+P*O+y*V+M*te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],a=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],u=e[10],p=e[14],v=e[3],x=e[7],g=e[11],h=e[15],T=l*p-c*u,P=o*p-c*f,y=o*u-l*f,M=s*p-c*d,E=s*u-l*d,R=s*f-o*d;return n*(x*T-g*P+h*y)-i*(v*T-g*M+h*E)+a*(v*P-x*M+h*R)-r*(v*y-x*E+g*R)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],a=e[8],r=e[1],s=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return n*(s*d-o*c)-i*(r*d-o*l)+a*(r*c-s*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],u=e[10],p=e[11],v=e[12],x=e[13],g=e[14],h=e[15],T=n*o-i*s,P=n*l-a*s,y=n*c-r*s,M=i*l-a*o,E=i*c-r*o,R=a*c-r*l,m=d*x-f*v,S=d*g-u*v,C=d*h-p*v,I=f*g-u*x,w=f*h-p*x,O=u*h-p*g,U=T*O-P*w+y*I+M*C-E*S+R*m;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/U;return e[0]=(o*O-l*w+c*I)*$,e[1]=(a*w-i*O-r*I)*$,e[2]=(x*R-g*E+h*M)*$,e[3]=(u*E-f*R-p*M)*$,e[4]=(l*C-s*O-c*S)*$,e[5]=(n*O-a*C+r*S)*$,e[6]=(g*y-v*R-h*P)*$,e[7]=(d*R-u*y+p*P)*$,e[8]=(s*w-o*C+c*m)*$,e[9]=(i*C-n*w-r*m)*$,e[10]=(v*E-x*y+h*T)*$,e[11]=(f*y-d*E-p*T)*$,e[12]=(o*S-s*I-l*m)*$,e[13]=(n*I-i*S+a*m)*$,e[14]=(x*P-v*M-g*T)*$,e[15]=(d*M-f*P+u*T)*$,this}scale(e){const n=this.elements,i=e.x,a=e.y,r=e.z;return n[0]*=i,n[4]*=a,n[8]*=r,n[1]*=i,n[5]*=a,n[9]*=r,n[2]*=i,n[6]*=a,n[10]*=r,n[3]*=i,n[7]*=a,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),a=Math.sin(n),r=1-i,s=e.x,o=e.y,l=e.z,c=r*s,d=r*o;return this.set(c*s+i,c*o-a*l,c*l+a*o,0,c*o+a*l,d*o+i,d*l-a*s,0,c*l-a*o,d*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,a,r,s){return this.set(1,i,r,0,e,1,s,0,n,a,1,0,0,0,0,1),this}compose(e,n,i){const a=this.elements,r=n._x,s=n._y,o=n._z,l=n._w,c=r+r,d=s+s,f=o+o,u=r*c,p=r*d,v=r*f,x=s*d,g=s*f,h=o*f,T=l*c,P=l*d,y=l*f,M=i.x,E=i.y,R=i.z;return a[0]=(1-(x+h))*M,a[1]=(p+y)*M,a[2]=(v-P)*M,a[3]=0,a[4]=(p-y)*E,a[5]=(1-(u+h))*E,a[6]=(g+T)*E,a[7]=0,a[8]=(v+P)*R,a[9]=(g-T)*R,a[10]=(1-(u+x))*R,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let s=Wi.set(a[0],a[1],a[2]).length();const o=Wi.set(a[4],a[5],a[6]).length(),l=Wi.set(a[8],a[9],a[10]).length();r<0&&(s=-s),bn.copy(this);const c=1/s,d=1/o,f=1/l;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=d,bn.elements[5]*=d,bn.elements[6]*=d,bn.elements[8]*=f,bn.elements[9]*=f,bn.elements[10]*=f,n.setFromRotationMatrix(bn),i.x=s,i.y=o,i.z=l,this}makePerspective(e,n,i,a,r,s,o=Un,l=!1){const c=this.elements,d=2*r/(n-e),f=2*r/(i-a),u=(n+e)/(n-e),p=(i+a)/(i-a);let v,x;if(l)v=r/(s-r),x=s*r/(s-r);else if(o===Un)v=-(s+r)/(s-r),x=-2*s*r/(s-r);else if(o===Qa)v=-s/(s-r),x=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,a,r,s,o=Un,l=!1){const c=this.elements,d=2/(n-e),f=2/(i-a),u=-(n+e)/(n-e),p=-(i+a)/(i-a);let v,x;if(l)v=1/(s-r),x=s/(s-r);else if(o===Un)v=-2/(s-r),x=-(s+r)/(s-r);else if(o===Qa)v=-1/(s-r),x=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};_s.prototype.isMatrix4=!0;let Mt=_s;const Wi=new F,bn=new Mt,nf=new F(0,0,0),af=new F(1,1,1),oi=new F,br=new F,on=new F,mc=new Mt,gc=new Sa;class xi{constructor(e=0,n=0,i=0,a=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,a=this._order){return this._x=e,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const a=e.elements,r=a[0],s=a[4],o=a[8],l=a[1],c=a[5],d=a[9],f=a[2],u=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ke(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return mc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mc,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return gc.setFromEuler(this),this.setFromQuaternion(gc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class Kd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rf=0;const _c=new F,Xi=new Sa,Hn=new Mt,xr=new F,Aa=new F,sf=new F,of=new Sa,vc=new F(1,0,0),bc=new F(0,1,0),xc=new F(0,0,1),yc={type:"added"},lf={type:"removed"},qi={type:"childadded",child:null},$s={type:"childremoved",child:null};class Ot extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new F,n=new xi,i=new Sa,a=new F(1,1,1);function r(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Be}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Xi.setFromAxisAngle(e,n),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,n){return Xi.setFromAxisAngle(e,n),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(vc,e)}rotateY(e){return this.rotateOnAxis(bc,e)}rotateZ(e){return this.rotateOnAxis(xc,e)}translateOnAxis(e,n){return _c.copy(e).applyQuaternion(this.quaternion),this.position.add(_c.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(vc,e)}translateY(e){return this.translateOnAxis(bc,e)}translateZ(e){return this.translateOnAxis(xc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?xr.copy(e):xr.set(e,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Aa,xr,this.up):Hn.lookAt(xr,Aa,this.up),this.quaternion.setFromRotationMatrix(Hn),a&&(Hn.extractRotation(a.matrixWorld),Xi.setFromRotationMatrix(Hn),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yc),qi.child=e,this.dispatchEvent(qi),qi.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(lf),$s.child=e,this.dispatchEvent($s),$s.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yc),qi.child=e,this.dispatchEvent(qi),qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,e,sf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,of,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,a=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*a,r[13]+=i-r[1]*n-r[5]*i-r[9]*a,r[14]+=a-r[2]*n-r[6]*i-r[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(r(e.animations,l))}}if(n){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),f=s(e.shapes),u=s(e.skeletons),p=s(e.animations),v=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=a,i;function s(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ot.DEFAULT_UP=new F(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ba extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cf={type:"move"};class zs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ba,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ba,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ba,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let a=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const x of e.hand.values()){const g=n.getJointPose(x,i),h=this._getHandJoint(c,x);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=d.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&u>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=n.getPose(e.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cf)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ba;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},yr={h:0,s:0,l:0};function Hs(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,n),this}setRGB(e,n,i,a=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.colorSpaceToWorking(this,a),this}setHSL(e,n,i,a=et.workingColorSpace){if(e=Zh(e,1),n=Ke(n,0,1),i=Ke(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=Hs(s,r,e+1/3),this.g=Hs(s,r,e),this.b=Hs(s,r,e-1/3)}return et.colorSpaceToWorking(this,a),this}setStyle(e,n=tn){function i(r){r!==void 0&&parseFloat(r)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Ne("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(r,16),n);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=tn){const i=Jd[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=fa(e.r),this.g=fa(e.g),this.b=fa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return et.workingToColorSpace(Gt.copy(this),e),Math.round(Ke(Gt.r*255,0,255))*65536+Math.round(Ke(Gt.g*255,0,255))*256+Math.round(Ke(Gt.b*255,0,255))}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.workingToColorSpace(Gt.copy(this),n);const i=Gt.r,a=Gt.g,r=Gt.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let l,c;const d=(o+s)/2;if(o===s)l=0,c=0;else{const f=s-o;switch(c=d<=.5?f/(s+o):f/(2-s-o),s){case i:l=(a-r)/f+(a<r?6:0);break;case a:l=(r-i)/f+2;break;case r:l=(i-a)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=et.workingColorSpace){return et.workingToColorSpace(Gt.copy(this),n),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=tn){et.workingToColorSpace(Gt.copy(this),e);const n=Gt.r,i=Gt.g,a=Gt.b;return e!==tn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,n,i){return this.getHSL(li),this.setHSL(li.h+e,li.s+n,li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(li),e.getHSL(yr);const i=Us(li.h,yr.h,n),a=Us(li.s,yr.s,n),r=Us(li.l,yr.l,n);return this.setHSL(i,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,a=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*a,this.g=r[1]*n+r[4]*i+r[7]*a,this.b=r[2]*n+r[5]*i+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Xe;Xe.NAMES=Jd;class Ll{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xe(e),this.density=n}clone(){return new Ll(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class df extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const xn=new F,Gn=new F,Gs=new F,Vn=new F,Yi=new F,Zi=new F,Sc=new F,Vs=new F,Ws=new F,Xs=new F,qs=new wt,Ys=new wt,Zs=new wt;class mn{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,a){a.subVectors(i,n),xn.subVectors(e,n),a.cross(xn);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,n,i,a,r){xn.subVectors(a,n),Gn.subVectors(i,n),Gs.subVectors(e,n);const s=xn.dot(xn),o=xn.dot(Gn),l=xn.dot(Gs),c=Gn.dot(Gn),d=Gn.dot(Gs),f=s*c-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,p=(c*l-o*d)*u,v=(s*d-o*l)*u;return r.set(1-p-v,v,p)}static containsPoint(e,n,i,a){return this.getBarycoord(e,n,i,a,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,n,i,a,r,s,o,l){return this.getBarycoord(e,n,i,a,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vn.x),l.addScaledVector(s,Vn.y),l.addScaledVector(o,Vn.z),l)}static getInterpolatedAttribute(e,n,i,a,r,s){return qs.setScalar(0),Ys.setScalar(0),Zs.setScalar(0),qs.fromBufferAttribute(e,n),Ys.fromBufferAttribute(e,i),Zs.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(qs,r.x),s.addScaledVector(Ys,r.y),s.addScaledVector(Zs,r.z),s}static isFrontFacing(e,n,i,a){return xn.subVectors(i,n),Gn.subVectors(e,n),xn.cross(Gn).dot(a)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,a){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,i,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),xn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return mn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,a,r){return mn.getInterpolation(e,this.a,this.b,this.c,n,i,a,r)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,a=this.b,r=this.c;let s,o;Yi.subVectors(a,i),Zi.subVectors(r,i),Vs.subVectors(e,i);const l=Yi.dot(Vs),c=Zi.dot(Vs);if(l<=0&&c<=0)return n.copy(i);Ws.subVectors(e,a);const d=Yi.dot(Ws),f=Zi.dot(Ws);if(d>=0&&f<=d)return n.copy(a);const u=l*f-d*c;if(u<=0&&l>=0&&d<=0)return s=l/(l-d),n.copy(i).addScaledVector(Yi,s);Xs.subVectors(e,r);const p=Yi.dot(Xs),v=Zi.dot(Xs);if(v>=0&&p<=v)return n.copy(r);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(Zi,o);const g=d*v-p*f;if(g<=0&&f-d>=0&&p-v>=0)return Sc.subVectors(r,a),o=(f-d)/(f-d+(p-v)),n.copy(a).addScaledVector(Sc,o);const h=1/(g+x+u);return s=x*h,o=u*h,n.copy(i).addScaledVector(Yi,s).addScaledVector(Zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class or{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(yn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(yn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=yn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,yn):yn.fromBufferAttribute(r,s),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sr.copy(i.boundingBox)),Sr.applyMatrix4(e.matrixWorld),this.union(Sr)}const a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wa),Mr.subVectors(this.max,wa),Ki.subVectors(e.a,wa),Ji.subVectors(e.b,wa),Qi.subVectors(e.c,wa),ci.subVectors(Ji,Ki),di.subVectors(Qi,Ji),Ei.subVectors(Ki,Qi);let n=[0,-ci.z,ci.y,0,-di.z,di.y,0,-Ei.z,Ei.y,ci.z,0,-ci.x,di.z,0,-di.x,Ei.z,0,-Ei.x,-ci.y,ci.x,0,-di.y,di.x,0,-Ei.y,Ei.x,0];return!Ks(n,Ki,Ji,Qi,Mr)||(n=[1,0,0,0,1,0,0,0,1],!Ks(n,Ki,Ji,Qi,Mr))?!1:(Er.crossVectors(ci,di),n=[Er.x,Er.y,Er.z],Ks(n,Ki,Ji,Qi,Mr))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Wn=[new F,new F,new F,new F,new F,new F,new F,new F],yn=new F,Sr=new or,Ki=new F,Ji=new F,Qi=new F,ci=new F,di=new F,Ei=new F,wa=new F,Mr=new F,Er=new F,Ti=new F;function Ks(t,e,n,i,a){for(let r=0,s=t.length-3;r<=s;r+=3){Ti.fromArray(t,r);const o=a.x*Math.abs(Ti.x)+a.y*Math.abs(Ti.y)+a.z*Math.abs(Ti.z),l=e.dot(Ti),c=n.dot(Ti),d=i.dot(Ti);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Pt=new F,Tr=new ze;let uf=0;class Tn extends $i{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uf++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=qd,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=n.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Tr.fromBufferAttribute(this,n),Tr.applyMatrix3(e),this.setXY(n,Tr.x,Tr.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Dn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=pt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Dn(n,this.array)),n}setX(e,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Dn(n,this.array)),n}setY(e,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Dn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Dn(n,this.array)),n}setW(e,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=pt(n,this.array),i=pt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,a){return e*=this.itemSize,this.normalized&&(n=pt(n,this.array),i=pt(i,this.array),a=pt(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,n,i,a,r){return e*=this.itemSize,this.normalized&&(n=pt(n,this.array),i=pt(i,this.array),a=pt(a,this.array),r=pt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Qd extends Tn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class jd extends Tn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Yt extends Tn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const hf=new or,Ra=new F,Js=new F;class lr{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):hf.setFromPoints(e).getCenter(i);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ra.subVectors(e,this.center);const n=Ra.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Ra,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Js.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ra.copy(e.center).add(Js)),this.expandByPoint(Ra.copy(e.center).sub(Js))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ff=0;const fn=new Mt,Qs=new Ot,ji=new F,ln=new or,Ca=new or,Ft=new F;class Jt extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wh(e)?jd:Qd)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Be().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,n,i){return fn.makeTranslation(e,n,i),this.applyMatrix4(fn),this}scale(e,n,i){return fn.makeScale(e,n,i),this.applyMatrix4(fn),this}lookAt(e){return Qs.lookAt(e),Qs.updateMatrix(),this.applyMatrix4(Qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,r=e.length;a<r;a++){const s=e[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Yt(i,3))}else{const i=Math.min(e.length,n.count);for(let a=0;a<i;a++){const r=e[a];n.setXYZ(a,r.x,r.y,r.z||0)}e.length>n.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new or);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,a=n.length;i<a;i++){const r=n[i];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),n)for(let r=0,s=n.length;r<s;r++){const o=n[r];Ca.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(ln.min,Ca.min),ln.expandByPoint(Ft),Ft.addVectors(ln.max,Ca.max),ln.expandByPoint(Ft)):(ln.expandByPoint(Ca.min),ln.expandByPoint(Ca.max))}ln.getCenter(i);let a=0;for(let r=0,s=e.count;r<s;r++)Ft.fromBufferAttribute(e,r),a=Math.max(a,i.distanceToSquared(Ft));if(n)for(let r=0,s=n.length;r<s;r++){const o=n[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Ft.fromBufferAttribute(o,c),l&&(ji.fromBufferAttribute(e,c),Ft.add(ji)),a=Math.max(a,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,r=n.uv;let s=this.getAttribute("tangent");(s===void 0||s.count!==i.count)&&(s=new Tn(new Float32Array(4*i.count),4),this.setAttribute("tangent",s));const o=[],l=[];for(let m=0;m<i.count;m++)o[m]=new F,l[m]=new F;const c=new F,d=new F,f=new F,u=new ze,p=new ze,v=new ze,x=new F,g=new F;function h(m,S,C){c.fromBufferAttribute(i,m),d.fromBufferAttribute(i,S),f.fromBufferAttribute(i,C),u.fromBufferAttribute(r,m),p.fromBufferAttribute(r,S),v.fromBufferAttribute(r,C),d.sub(c),f.sub(c),p.sub(u),v.sub(u);const I=1/(p.x*v.y-v.x*p.y);isFinite(I)&&(x.copy(d).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(I),g.copy(f).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(I),o[m].add(x),o[S].add(x),o[C].add(x),l[m].add(g),l[S].add(g),l[C].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let m=0,S=T.length;m<S;++m){const C=T[m],I=C.start,w=C.count;for(let O=I,U=I+w;O<U;O+=3)h(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const P=new F,y=new F,M=new F,E=new F;function R(m){M.fromBufferAttribute(a,m),E.copy(M);const S=o[m];P.copy(S),P.sub(M.multiplyScalar(M.dot(S))).normalize(),y.crossVectors(E,S);const I=y.dot(l[m])<0?-1:1;s.setXYZW(m,P.x,P.y,P.z,I)}for(let m=0,S=T.length;m<S;++m){const C=T[m],I=C.start,w=C.count;for(let O=I,U=I+w;O<U;O+=3)R(e.getX(O+0)),R(e.getX(O+1)),R(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Tn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const a=new F,r=new F,s=new F,o=new F,l=new F,c=new F,d=new F,f=new F;if(e)for(let u=0,p=e.count;u<p;u+=3){const v=e.getX(u+0),x=e.getX(u+1),g=e.getX(u+2);a.fromBufferAttribute(n,v),r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,g),d.subVectors(s,r),f.subVectors(a,r),d.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),o.add(d),l.add(d),c.add(d),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)a.fromBufferAttribute(n,u+0),r.fromBufferAttribute(n,u+1),s.fromBufferAttribute(n,u+2),d.subVectors(s,r),f.subVectors(a,r),d.cross(f),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ft.fromBufferAttribute(e,n),Ft.normalize(),e.setXYZ(n,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,u=new c.constructor(l.length*d);let p=0,v=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*d;for(let h=0;h<d;h++)u[v++]=c[p++]}return new Tn(u,d,f)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Jt,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,i);n.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,f=c.length;d<f;d++){const u=c[d],p=e(u,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,u=c.length;f<u;f++){const p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(a[l]=d,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(n))}const r=e.morphAttributes;for(const c in r){const d=[],f=r[c];for(let u=0,p=f.length;u<p;u++)d.push(f[u].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pf{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=qd,this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let a=0,r=this.stride;a<r;a++)this.array[e+a]=n.array[i+a];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const n={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}const jt=new F;class ls{constructor(e,n,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix4(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)jt.fromBufferAttribute(this,n),jt.applyNormalMatrix(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)jt.fromBufferAttribute(this,n),jt.transformDirection(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Dn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=pt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Dn(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Dn(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Dn(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Dn(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=pt(n,this.array),i=pt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=pt(n,this.array),i=pt(i,this.array),a=pt(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,n,i,a,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=pt(n,this.array),i=pt(i,this.array),a=pt(a,this.array),r=pt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=r,this}clone(e){if(e===void 0){os("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[a+r])}return new Tn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ls(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){os("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[a+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const js=new F,mf=new F,gf=new Be;class hi{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,a){return this.normal.set(e,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const a=js.subVectors(i,n).cross(mf.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const a=e.delta(js),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(s<0||s>1)?null:n.copy(e.start).addScaledVector(a,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||gf.getNormalMatrix(e),a=this.coplanarPoint(js).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let _f=0;class Si extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=Ha,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ld,this.blendDst=Pd,this.blendEquation=ca,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ne(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Ne(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(n){const r=a(e.textures),s=a(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new hi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ze().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ze().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class eu extends Si{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ea;const La=new F,ta=new F,na=new F,ia=new ze,Pa=new ze,tu=new Mt,Ar=new F,Ia=new F,wr=new F,Mc=new ze,eo=new ze,Ec=new ze;class vf extends Ot{constructor(e=new eu){if(super(),this.isSprite=!0,this.type="Sprite",ea===void 0){ea=new Jt;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new pf(n,5);ea.setIndex([0,1,2,0,2,3]),ea.setAttribute("position",new ls(i,3,0,!1)),ea.setAttribute("uv",new ls(i,2,3,!1))}this.geometry=ea,this.material=e,this.center=new ze(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,n){e.camera===null&&nt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ta.setFromMatrixScale(this.matrixWorld),tu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),na.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ta.multiplyScalar(-na.z);const i=this.material.rotation;let a,r;i!==0&&(r=Math.cos(i),a=Math.sin(i));const s=this.center;Rr(Ar.set(-.5,-.5,0),na,s,ta,a,r),Rr(Ia.set(.5,-.5,0),na,s,ta,a,r),Rr(wr.set(.5,.5,0),na,s,ta,a,r),Mc.set(0,0),eo.set(1,0),Ec.set(1,1);let o=e.ray.intersectTriangle(Ar,Ia,wr,!1,La);if(o===null&&(Rr(Ia.set(-.5,.5,0),na,s,ta,a,r),eo.set(0,1),o=e.ray.intersectTriangle(Ar,wr,Ia,!1,La),o===null))return;const l=e.ray.origin.distanceTo(La);l<e.near||l>e.far||n.push({distance:l,point:La.clone(),uv:mn.getInterpolation(La,Ar,Ia,wr,Mc,eo,Ec,new ze),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Rr(t,e,n,i,a,r){ia.subVectors(t,n).addScalar(.5).multiply(i),a!==void 0?(Pa.x=r*ia.x-a*ia.y,Pa.y=a*ia.x+r*ia.y):Pa.copy(ia),t.copy(e),t.x+=Pa.x,t.y+=Pa.y,t.applyMatrix4(tu)}const Xn=new F,to=new F,Cr=new F,Lr=new F;class Pl{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Xn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,n),Xn.distanceToSquared(e))}distanceSqToSegment(e,n,i,a){to.copy(e).add(n).multiplyScalar(.5),Cr.copy(n).sub(e).normalize(),Lr.copy(this.origin).sub(to);const r=e.distanceTo(n)*.5,s=-this.direction.dot(Cr),o=Lr.dot(this.direction),l=-Lr.dot(Cr),c=Lr.lengthSq(),d=Math.abs(1-s*s);let f,u,p,v;if(d>0)if(f=s*l-o,u=s*o-l,v=r*d,f>=0)if(u>=-v)if(u<=v){const x=1/d;f*=x,u*=x,p=f*(f+s*u+2*o)+u*(s*f+u+2*l)+c}else u=r,f=Math.max(0,-(s*u+o)),p=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(s*u+o)),p=-f*f+u*(u+2*l)+c;else u<=-v?(f=Math.max(0,-(-s*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c):u<=v?(f=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(f=Math.max(0,-(s*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c);else u=s>0?-r:r,f=Math.max(0,-(s*u+o)),p=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),a&&a.copy(to).addScaledVector(Cr,u),p}intersectSphere(e,n){if(e.radius<0)return null;Xn.subVectors(e.center,this.origin);const i=Xn.dot(this.direction),a=Xn.dot(Xn)-i*i,r=e.radius*e.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,a,r,s,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,a=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,a=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,s=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,s=(e.min.y-u.y)*d),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,n,i,a,r){const s=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,f=e.x-s.x,u=e.y-s.y,p=e.z-s.z,v=n.x-s.x,x=n.y-s.y,g=n.z-s.z,h=i.x-s.x,T=i.y-s.y,P=i.z-s.z,y=Math.abs(l),M=Math.abs(c),E=Math.abs(d);let R,m,S,C,I,w,O,U,$,Y,V,ne;if(y>=M&&y>=E?(S=l,w=f,$=v,ne=h,l>=0?(R=c,m=d,C=u,I=p,O=x,U=g,Y=T,V=P):(R=d,m=c,C=p,I=u,O=g,U=x,Y=P,V=T)):M>=E?(S=c,w=u,$=x,ne=T,c>=0?(R=d,m=l,C=p,I=f,O=g,U=v,Y=P,V=h):(R=l,m=d,C=f,I=p,O=v,U=g,Y=h,V=P)):(S=d,w=p,$=g,ne=P,d>=0?(R=l,m=c,C=f,I=u,O=v,U=x,Y=h,V=T):(R=c,m=l,C=u,I=f,O=x,U=v,Y=T,V=h)),S===0)return null;const X=R/S,Q=m/S,te=1/S,Re=C-X*w,re=I-Q*w,st=O-X*$,je=U-Q*$,at=Y-X*ne,Z=V-Q*ne,ee=at*je-Z*st,ye=Re*Z-re*at,Oe=st*re-je*Re;if(a){if(ee<0||ye<0||Oe<0)return null}else if((ee<0||ye<0||Oe<0)&&(ee>0||ye>0||Oe>0))return null;const be=ee+ye+Oe;if(be===0)return null;const qe=te*(ee*w+ye*$+Oe*ne);return(be>0?qe<0:qe>0)?null:this.at(qe/be,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fi extends Si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tc=new Mt,Ai=new Pl,Pr=new lr,Ac=new F,Ir=new F,Dr=new F,Nr=new F,no=new F,Ur=new F,wc=new F,kr=new F;class _t extends Ot{constructor(e=new Jt,n=new fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,n){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(r&&o){Ur.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],f=r[l];d!==0&&(no.fromBufferAttribute(f,e),s?Ur.addScaledVector(no,d):Ur.addScaledVector(no.sub(n),d))}n.add(Ur)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Pr.copy(i.boundingSphere),Pr.applyMatrix4(r),Ai.copy(e.ray).recast(e.near),!(Pr.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Pr,Ac)===null||Ai.origin.distanceToSquared(Ac)>(e.far-e.near)**2))&&(Tc.copy(r).invert(),Ai.copy(e.ray).applyMatrix4(Tc),!(i.boundingBox!==null&&Ai.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ai)))}_computeIntersections(e,n,i){let a;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,x=u.length;v<x;v++){const g=u[v],h=s[g.materialIndex],T=Math.max(g.start,p.start),P=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let y=T,M=P;y<M;y+=3){const E=o.getX(y),R=o.getX(y+1),m=o.getX(y+2);a=Fr(this,h,e,i,c,d,f,E,R,m),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const v=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let g=v,h=x;g<h;g+=3){const T=o.getX(g),P=o.getX(g+1),y=o.getX(g+2);a=Fr(this,s,e,i,c,d,f,T,P,y),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,x=u.length;v<x;v++){const g=u[v],h=s[g.materialIndex],T=Math.max(g.start,p.start),P=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=T,M=P;y<M;y+=3){const E=y,R=y+1,m=y+2;a=Fr(this,h,e,i,c,d,f,E,R,m),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=v,h=x;g<h;g+=3){const T=g,P=g+1,y=g+2;a=Fr(this,s,e,i,c,d,f,T,P,y),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}}}function bf(t,e,n,i,a,r,s,o){let l;if(e.side===rn?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,e.side===Ui,o),l===null)return null;kr.copy(o),kr.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(kr);return c<n.near||c>n.far?null:{distance:c,point:kr.clone(),object:t}}function Fr(t,e,n,i,a,r,s,o,l,c){t.getVertexPosition(o,Ir),t.getVertexPosition(l,Dr),t.getVertexPosition(c,Nr);const d=bf(t,e,n,i,Ir,Dr,Nr,wc);if(d){const f=new F;mn.getBarycoord(wc,Ir,Dr,Nr,f),a&&(d.uv=mn.getInterpolatedAttribute(a,o,l,c,f,new ze)),r&&(d.uv1=mn.getInterpolatedAttribute(r,o,l,c,f,new ze)),s&&(d.normal=mn.getInterpolatedAttribute(s,o,l,c,f,new F),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new F,materialIndex:0};mn.getNormal(Ir,Dr,Nr,u.normal),d.face=u,d.barycoord=f}return d}class xf extends qt{constructor(e=null,n=1,i=1,a,r,s,o,l,c=Bt,d=Bt,f,u){super(null,s,o,l,c,d,a,r,f,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wi=new lr,yf=new ze(.5,.5),Or=new F;class Il{constructor(e=new hi,n=new hi,i=new hi,a=new hi,r=new hi,s=new hi){this.planes=[e,n,i,a,r,s]}set(e,n,i,a,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Un,i=!1){const a=this.planes,r=e.elements,s=r[0],o=r[1],l=r[2],c=r[3],d=r[4],f=r[5],u=r[6],p=r[7],v=r[8],x=r[9],g=r[10],h=r[11],T=r[12],P=r[13],y=r[14],M=r[15];if(a[0].setComponents(c-s,p-d,h-v,M-T).normalize(),a[1].setComponents(c+s,p+d,h+v,M+T).normalize(),a[2].setComponents(c+o,p+f,h+x,M+P).normalize(),a[3].setComponents(c-o,p-f,h-x,M-P).normalize(),i)a[4].setComponents(l,u,g,y).normalize(),a[5].setComponents(c-l,p-u,h-g,M-y).normalize();else if(a[4].setComponents(c-l,p-u,h-g,M-y).normalize(),n===Un)a[5].setComponents(c+l,p+u,h+g,M+y).normalize();else if(n===Qa)a[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),wi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(e){wi.center.set(0,0,0);const n=yf.distanceTo(e.center);return wi.radius=.7071067811865476+n,wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(e){const n=this.planes,i=e.center,a=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Or.x=a.normal.x>0?e.max.x:e.min.x,Or.y=a.normal.y>0?e.max.y:e.min.y,Or.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Or)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class nu extends Si{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const cs=new F,ds=new F,Rc=new Mt,Da=new Pl,Br=new lr,io=new F,Cc=new F;class Lc extends Ot{constructor(e=new Jt,n=new nu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let a=1,r=n.count;a<r;a++)cs.fromBufferAttribute(n,a-1),ds.fromBufferAttribute(n,a),i[a]=i[a-1],i[a]+=cs.distanceTo(ds);e.setAttribute("lineDistance",new Yt(i,1))}else Ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,a=this.matrixWorld,r=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Br.copy(i.boundingSphere),Br.applyMatrix4(a),Br.radius+=r,e.ray.intersectsSphere(Br)===!1)return;Rc.copy(a).invert(),Da.copy(e.ray).applyMatrix4(Rc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){const p=Math.max(0,s.start),v=Math.min(d.count,s.start+s.count);for(let x=p,g=v-1;x<g;x+=c){const h=d.getX(x),T=d.getX(x+1),P=$r(this,e,Da,l,h,T,x);P&&n.push(P)}if(this.isLineLoop){const x=d.getX(v-1),g=d.getX(p),h=$r(this,e,Da,l,x,g,v-1);h&&n.push(h)}}else{const p=Math.max(0,s.start),v=Math.min(u.count,s.start+s.count);for(let x=p,g=v-1;x<g;x+=c){const h=$r(this,e,Da,l,x,x+1,x);h&&n.push(h)}if(this.isLineLoop){const x=$r(this,e,Da,l,v-1,p,v-1);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function $r(t,e,n,i,a,r,s){const o=t.geometry.attributes.position;if(cs.fromBufferAttribute(o,a),ds.fromBufferAttribute(o,r),n.distanceSqToSegment(cs,ds,io,Cc)>i)return;io.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(io);if(!(c<e.near||c>e.far))return{distance:c,point:Cc.clone().applyMatrix4(t.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:t}}class iu extends Si{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pc=new Mt,dl=new Pl,zr=new lr,Hr=new F;class Ic extends Ot{constructor(e=new Jt,n=new iu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,a=this.matrixWorld,r=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zr.copy(i.boundingSphere),zr.applyMatrix4(a),zr.radius+=r,e.ray.intersectsSphere(zr)===!1)return;Pc.copy(a).invert(),dl.copy(e.ray).applyMatrix4(Pc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const u=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let v=u,x=p;v<x;v++){const g=c.getX(v);Hr.fromBufferAttribute(f,g),Dc(Hr,g,l,a,e,n,this)}}else{const u=Math.max(0,s.start),p=Math.min(f.count,s.start+s.count);for(let v=u,x=p;v<x;v++)Hr.fromBufferAttribute(f,v),Dc(Hr,v,l,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Dc(t,e,n,i,a,r,s){const o=dl.distanceSqToPoint(t);if(o<n){const l=new F;dl.closestPointToPoint(t,l),l.applyMatrix4(i);const c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class au extends qt{constructor(e=[],n=ki,i,a,r,s,o,l,c,d){super(e,n,i,a,r,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ru extends qt{constructor(e,n,i,a,r,s,o,l,c){super(e,n,i,a,r,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ja extends qt{constructor(e,n,i=On,a,r,s,o=Bt,l=Bt,c,d=ti,f=1){if(d!==ti&&d!==Pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:f};super(u,a,r,s,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Cl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class Sf extends ja{constructor(e,n=On,i=ki,a,r,s=Bt,o=Bt,l,c=ti){const d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,n,i,a,r,s,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class su extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class pn extends Jt{constructor(e=1,n=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],d=[],f=[];let u=0,p=0;v("z","y","x",-1,-1,i,n,e,s,r,0),v("z","y","x",1,-1,i,n,-e,s,r,1),v("x","z","y",1,1,e,i,n,a,s,2),v("x","z","y",1,-1,e,i,-n,a,s,3),v("x","y","z",1,-1,e,n,i,a,r,4),v("x","y","z",-1,-1,e,n,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(d,3)),this.setAttribute("uv",new Yt(f,2));function v(x,g,h,T,P,y,M,E,R,m,S){const C=y/R,I=M/m,w=y/2,O=M/2,U=E/2,$=R+1,Y=m+1;let V=0,ne=0;const X=new F;for(let Q=0;Q<Y;Q++){const te=Q*I-O;for(let Re=0;Re<$;Re++){const re=Re*C-w;X[x]=re*T,X[g]=te*P,X[h]=U,c.push(X.x,X.y,X.z),X[x]=0,X[g]=0,X[h]=E>0?1:-1,d.push(X.x,X.y,X.z),f.push(Re/R),f.push(1-Q/m),V+=1}}for(let Q=0;Q<m;Q++)for(let te=0;te<R;te++){const Re=u+te+$*Q,re=u+te+$*(Q+1),st=u+(te+1)+$*(Q+1),je=u+(te+1)+$*Q;l.push(Re,re,je),l.push(re,st,je),ne+=6}o.addGroup(p,ne,S),p+=ne,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class us extends Jt{constructor(e=1,n=1,i=1,a=32,r=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:a,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:l};const c=this;a=Math.floor(a),r=Math.floor(r);const d=[],f=[],u=[],p=[];let v=0;const x=[],g=i/2;let h=0;T(),s===!1&&(e>0&&P(!0),n>0&&P(!1)),this.setIndex(d),this.setAttribute("position",new Yt(f,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(p,2));function T(){const y=new F,M=new F;let E=0;const R=(n-e)/i;for(let m=0;m<=r;m++){const S=[],C=m/r,I=C*(n-e)+e;for(let w=0;w<=a;w++){const O=w/a,U=O*l+o,$=Math.sin(U),Y=Math.cos(U);M.x=I*$,M.y=-C*i+g,M.z=I*Y,f.push(M.x,M.y,M.z),y.set($,R,Y).normalize(),u.push(y.x,y.y,y.z),p.push(O,1-C),S.push(v++)}x.push(S)}for(let m=0;m<a;m++)for(let S=0;S<r;S++){const C=x[S][m],I=x[S+1][m],w=x[S+1][m+1],O=x[S][m+1];(e>0||S!==0)&&(d.push(C,I,O),E+=3),(n>0||S!==r-1)&&(d.push(I,w,O),E+=3)}c.addGroup(h,E,0),h+=E}function P(y){const M=v,E=new ze,R=new F;let m=0;const S=y===!0?e:n,C=y===!0?1:-1;for(let w=1;w<=a;w++)f.push(0,g*C,0),u.push(0,C,0),p.push(.5,.5),v++;const I=v;for(let w=0;w<=a;w++){const U=w/a*l+o,$=Math.cos(U),Y=Math.sin(U);R.x=S*Y,R.y=g*C,R.z=S*$,f.push(R.x,R.y,R.z),u.push(0,C,0),E.x=$*.5+.5,E.y=Y*.5*C+.5,p.push(E.x,E.y),v++}for(let w=0;w<a;w++){const O=M+w,U=I+w;y===!0?d.push(U,U+1,O):d.push(U+1,U,O),m+=3}c.addGroup(h,m,y===!0?1:2),h+=m}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new us(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Mf{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ne("Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,a=this.getPoint(0),r=0;n.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),r+=i.distanceTo(a),n.push(r),a=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let a=0;const r=i.length;let s;n?s=n:s=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(a=Math.floor(o+(l-o)/2),c=i[a]-s,c<0)o=a+1;else if(c>0)l=a-1;else{l=a;break}if(a=l,i[a]===s)return a/(r-1);const d=i[a],u=i[a+1]-d,p=(s-d)/u;return(a+p)/(r-1)}getTangent(e,n){let a=e-1e-4,r=e+1e-4;a<0&&(a=0),r>1&&(r=1);const s=this.getPoint(a),o=this.getPoint(r),l=n||(s.isVector2?new ze:new F);return l.copy(o).sub(s).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new F,a=[],r=[],s=[],o=new F,l=new Mt;for(let p=0;p<=e;p++){const v=p/e;a[p]=this.getTangentAt(v,new F)}r[0]=new F,s[0]=new F;let c=Number.MAX_VALUE;const d=Math.abs(a[0].x),f=Math.abs(a[0].y),u=Math.abs(a[0].z);d<=c&&(c=d,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(a[0],i).normalize(),r[0].crossVectors(a[0],o),s[0].crossVectors(a[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),s[p]=s[p-1].clone(),o.crossVectors(a[p-1],a[p]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(Ke(a[p-1].dot(a[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,v))}s[p].crossVectors(a[p],r[p])}if(n===!0){let p=Math.acos(Ke(r[0].dot(r[e]),-1,1));p/=e,a[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let v=1;v<=e;v++)r[v].applyMatrix4(l.makeRotationAxis(a[v],p*v)),s[v].crossVectors(a[v],r[v])}return{tangents:a,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Dl(){let t=0,e=0,n=0,i=0;function a(r,s,o,l){t=r,e=o,n=-3*r+3*s-2*o-l,i=2*r-2*s+o+l}return{initCatmullRom:function(r,s,o,l,c){a(s,o,c*(o-r),c*(l-s))},initNonuniformCatmullRom:function(r,s,o,l,c,d,f){let u=(s-r)/c-(o-r)/(c+d)+(o-s)/d,p=(o-s)/d-(l-s)/(d+f)+(l-o)/f;u*=d,p*=d,a(s,o,u,p)},calc:function(r){const s=r*r,o=s*r;return t+e*r+n*s+i*o}}}const Nc=new F,Uc=new F,ao=new Dl,ro=new Dl,so=new Dl;class Ef extends Mf{constructor(e=[],n=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=a}getPoint(e,n=new F){const i=n,a=this.points,r=a.length,s=(r-(this.closed?0:1))*e;let o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,d;this.closed||o>0?c=a[(o-1)%r]:(Uc.subVectors(a[0],a[1]).add(a[0]),c=Uc);const f=a[o%r],u=a[(o+1)%r];if(this.closed||o+2<r?d=a[(o+2)%r]:(Nc.subVectors(a[r-1],a[r-2]).add(a[r-1]),d=Nc),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(d),p);x<1e-4&&(x=1),v<1e-4&&(v=x),g<1e-4&&(g=x),ao.initNonuniformCatmullRom(c.x,f.x,u.x,d.x,v,x,g),ro.initNonuniformCatmullRom(c.y,f.y,u.y,d.y,v,x,g),so.initNonuniformCatmullRom(c.z,f.z,u.z,d.z,v,x,g)}else this.curveType==="catmullrom"&&(ao.initCatmullRom(c.x,f.x,u.x,d.x,this.tension),ro.initCatmullRom(c.y,f.y,u.y,d.y,this.tension),so.initCatmullRom(c.z,f.z,u.z,d.z,this.tension));return i.set(ao.calc(l),ro.calc(l),so.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const a=e.points[n];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const a=this.points[n];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const a=e.points[n];this.points.push(new F().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Zn extends Jt{constructor(e=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:a};const r=e/2,s=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,d=l+1,f=e/o,u=n/l,p=[],v=[],x=[],g=[];for(let h=0;h<d;h++){const T=h*u-s;for(let P=0;P<c;P++){const y=P*f-r;v.push(y,-T,0),x.push(0,0,1),g.push(P/o),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let T=0;T<o;T++){const P=T+c*h,y=T+c*(h+1),M=T+1+c*(h+1),E=T+1+c*h;p.push(P,y,E),p.push(y,M,E)}this.setIndex(p),this.setAttribute("position",new Yt(v,3)),this.setAttribute("normal",new Yt(x,3)),this.setAttribute("uv",new Yt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ga extends Jt{constructor(e=1,n=32,i=16,a=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:a,phiLength:r,thetaStart:s,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(s+o,Math.PI);let c=0;const d=[],f=new F,u=new F,p=[],v=[],x=[],g=[];for(let h=0;h<=i;h++){const T=[],P=h/i,y=s+P*o,M=e*Math.cos(y),E=Math.sqrt(e*e-M*M);let R=0;h===0&&s===0?R=.5/n:h===i&&l===Math.PI&&(R=-.5/n);for(let m=0;m<=n;m++){const S=m/n,C=a+S*r;f.x=-E*Math.cos(C),f.y=M,f.z=E*Math.sin(C),v.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),g.push(S+R,1-P),T.push(c++)}d.push(T)}for(let h=0;h<i;h++)for(let T=0;T<n;T++){const P=d[h][T+1],y=d[h][T],M=d[h+1][T],E=d[h+1][T+1];(h!==0||s>0)&&p.push(P,y,E),(h!==i-1||l<Math.PI)&&p.push(y,M,E)}this.setIndex(p),this.setAttribute("position",new Yt(v,3)),this.setAttribute("normal",new Yt(x,3)),this.setAttribute("uv",new Yt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ga(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const a=t[n][i];if(kc(a))a.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=a.clone();else if(Array.isArray(a))if(kc(a[0])){const r=[];for(let s=0,o=a.length;s<o;s++)r[s]=a[s].clone();e[n][i]=r}else e[n][i]=a.slice();else e[n][i]=a}}return e}function en(t){const e={};for(let n=0;n<t.length;n++){const i=ga(t[n]);for(const a in i)e[a]=i[a]}return e}function kc(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Tf(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function ou(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Af={clone:ga,merge:en};var wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends Si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wf,this.fragmentShader=Rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ga(e.uniforms),this.uniformsGroups=Tf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?n.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[a]={type:"m4",value:s.toArray()}:n.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=n[a.value]||null;break;case"c":this.uniforms[i].value=new Xe().setHex(a.value);break;case"v2":this.uniforms[i].value=new ze().fromArray(a.value);break;case"v3":this.uniforms[i].value=new F().fromArray(a.value);break;case"v4":this.uniforms[i].value=new wt().fromArray(a.value);break;case"m3":this.uniforms[i].value=new Be().fromArray(a.value);break;case"m4":this.uniforms[i].value=new Mt().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Cf extends $n{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qn extends Si{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ll,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lf extends Si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Pf extends Si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Nl extends Ot{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class If extends Nl{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const oo=new Mt,Fc=new F,Oc=new F;class Df{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Il,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;Fc.setFromMatrixPosition(e.matrixWorld),n.position.copy(Fc),Oc.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Oc),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,a){oo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(oo,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,s=a?a.z/r.x:1,o=a?a.w/r.y:1,l=a?a.x/r.x:0,c=a?a.y/r.y:0;e.coordinateSystem===Qa||e.reversedDepth?n.set(.5*s,0,0,.5*s+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*s,0,0,.5*s+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(oo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Gr=new F,Vr=new Sa,Rn=new F;class lu extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Gr,Vr,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gr,Vr,Rn.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Gr,Vr,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gr,Vr,Rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ui=new F,Bc=new ze,$c=new ze;class dn extends lu{constructor(e=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=cl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cl*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-e/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ui.x,ui.y).multiplyScalar(-e/ui.z)}getViewSize(e,n){return this.getViewBounds(e,Bc,$c),n.subVectors($c,Bc)}setViewOffset(e,n,i,a,r,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ns*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/l,n-=s.offsetY*i/c,a*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Nf extends Df{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0}}class aa extends Nl{constructor(e,n,i=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new Nf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class cu extends lu{constructor(e=-1,n=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-e,s=i+e,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Uf extends Nl{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const ra=-90,sa=1;class kf extends Ot{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new dn(ra,sa,e,n);a.layers=this.layers,this.add(a);const r=new dn(ra,sa,e,n);r.layers=this.layers,this.add(r);const s=new dn(ra,sa,e,n);s.layers=this.layers,this.add(s);const o=new dn(ra,sa,e,n);o.layers=this.layers,this.add(o);const l=new dn(ra,sa,e,n);l.layers=this.layers,this.add(l);const c=new dn(ra,sa,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,a,r,s,o,l]=n;for(const c of n)this.remove(c);if(e===Un)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qa)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,2,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(f,u,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Ff extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Of{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ne("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const Yl=class Yl{constructor(e,n,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,a){const r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=a,this}};Yl.prototype.isMatrix2=!0;let zc=Yl;function Hc(t,e,n,i){const a=Bf(i);switch(n){case Vd:return t*e;case Xd:return t*e/a.components*a.byteLength;case El:return t*e/a.components*a.byteLength;case Fi:return t*e*2/a.components*a.byteLength;case Tl:return t*e*2/a.components*a.byteLength;case Wd:return t*e*3/a.components*a.byteLength;case Mn:return t*e*4/a.components*a.byteLength;case Al:return t*e*4/a.components*a.byteLength;case Jr:case Qr:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case jr:case es:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Do:case Uo:return Math.max(t,16)*Math.max(e,8)/4;case Io:case No:return Math.max(t,8)*Math.max(e,8)/2;case ko:case Fo:case Bo:case $o:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Oo:case ns:case zo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ho:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Go:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Vo:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Wo:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Xo:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case qo:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Zo:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ko:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Jo:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Qo:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case jo:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case el:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case tl:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case nl:case il:case al:return Math.ceil(t/4)*Math.ceil(e/4)*16;case rl:case sl:return Math.ceil(t/4)*Math.ceil(e/4)*8;case is:case ol:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Bf(t){switch(t){case un:case $d:return{byteLength:1,components:1};case Ka:case zd:case Bn:return{byteLength:2,components:1};case Sl:case Ml:return{byteLength:2,components:4};case On:case yl:case Nn:return{byteLength:4,components:1};case Hd:case Gd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bl}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function du(){let t=null,e=!1,n=null,i=null;function a(r,s){i=t.requestAnimationFrame(a),n(r,s)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(a),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function $f(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,f=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,d);else{f.sort((p,v)=>p.start-v.start);let u=0;for(let p=1;p<f.length;p++){const v=f[u],x=f[p];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++u,f[u]=x)}f.length=u+1;for(let p=0,v=f.length;p<v;p++){const x=f[p];t.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:r,update:s}}var zf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Kf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ep=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,dp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,up=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,fp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_p="gl_FragColor = linearToOutputTexel( gl_FragColor );",vp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ep=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ap=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ip=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Dp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Np=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Up=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Op=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Bp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$p=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Vp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,em=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,im=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,am=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,dm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,um=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,_m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ym=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Am=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Pm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Um=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,km=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ym=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Km=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ng=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ig=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ag=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_g=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:zf,alphahash_pars_fragment:Hf,alphamap_fragment:Gf,alphamap_pars_fragment:Vf,alphatest_fragment:Wf,alphatest_pars_fragment:Xf,aomap_fragment:qf,aomap_pars_fragment:Yf,batching_pars_vertex:Zf,batching_vertex:Kf,begin_vertex:Jf,beginnormal_vertex:Qf,bsdfs:jf,iridescence_fragment:ep,bumpmap_pars_fragment:tp,clipping_planes_fragment:np,clipping_planes_pars_fragment:ip,clipping_planes_pars_vertex:ap,clipping_planes_vertex:rp,color_fragment:sp,color_pars_fragment:op,color_pars_vertex:lp,color_vertex:cp,common:dp,cube_uv_reflection_fragment:up,defaultnormal_vertex:hp,displacementmap_pars_vertex:fp,displacementmap_vertex:pp,emissivemap_fragment:mp,emissivemap_pars_fragment:gp,colorspace_fragment:_p,colorspace_pars_fragment:vp,envmap_fragment:bp,envmap_common_pars_fragment:xp,envmap_pars_fragment:yp,envmap_pars_vertex:Sp,envmap_physical_pars_fragment:Dp,envmap_vertex:Mp,fog_vertex:Ep,fog_pars_vertex:Tp,fog_fragment:Ap,fog_pars_fragment:wp,gradientmap_pars_fragment:Rp,lightmap_pars_fragment:Cp,lights_lambert_fragment:Lp,lights_lambert_pars_fragment:Pp,lights_pars_begin:Ip,lights_toon_fragment:Np,lights_toon_pars_fragment:Up,lights_phong_fragment:kp,lights_phong_pars_fragment:Fp,lights_physical_fragment:Op,lights_physical_pars_fragment:Bp,lights_fragment_begin:$p,lights_fragment_maps:zp,lights_fragment_end:Hp,lightprobes_pars_fragment:Gp,logdepthbuf_fragment:Vp,logdepthbuf_pars_fragment:Wp,logdepthbuf_pars_vertex:Xp,logdepthbuf_vertex:qp,map_fragment:Yp,map_pars_fragment:Zp,map_particle_fragment:Kp,map_particle_pars_fragment:Jp,metalnessmap_fragment:Qp,metalnessmap_pars_fragment:jp,morphinstance_vertex:em,morphcolor_vertex:tm,morphnormal_vertex:nm,morphtarget_pars_vertex:im,morphtarget_vertex:am,normal_fragment_begin:rm,normal_fragment_maps:sm,normal_pars_fragment:om,normal_pars_vertex:lm,normal_vertex:cm,normalmap_pars_fragment:dm,clearcoat_normal_fragment_begin:um,clearcoat_normal_fragment_maps:hm,clearcoat_pars_fragment:fm,iridescence_pars_fragment:pm,opaque_fragment:mm,packing:gm,premultiplied_alpha_fragment:_m,project_vertex:vm,dithering_fragment:bm,dithering_pars_fragment:xm,roughnessmap_fragment:ym,roughnessmap_pars_fragment:Sm,shadowmap_pars_fragment:Mm,shadowmap_pars_vertex:Em,shadowmap_vertex:Tm,shadowmask_pars_fragment:Am,skinbase_vertex:wm,skinning_pars_vertex:Rm,skinning_vertex:Cm,skinnormal_vertex:Lm,specularmap_fragment:Pm,specularmap_pars_fragment:Im,tonemapping_fragment:Dm,tonemapping_pars_fragment:Nm,transmission_fragment:Um,transmission_pars_fragment:km,uv_pars_fragment:Fm,uv_pars_vertex:Om,uv_vertex:Bm,worldpos_vertex:$m,background_vert:zm,background_frag:Hm,backgroundCube_vert:Gm,backgroundCube_frag:Vm,cube_vert:Wm,cube_frag:Xm,depth_vert:qm,depth_frag:Ym,distance_vert:Zm,distance_frag:Km,equirect_vert:Jm,equirect_frag:Qm,linedashed_vert:jm,linedashed_frag:eg,meshbasic_vert:tg,meshbasic_frag:ng,meshlambert_vert:ig,meshlambert_frag:ag,meshmatcap_vert:rg,meshmatcap_frag:sg,meshnormal_vert:og,meshnormal_frag:lg,meshphong_vert:cg,meshphong_frag:dg,meshphysical_vert:ug,meshphysical_frag:hg,meshtoon_vert:fg,meshtoon_frag:pg,points_vert:mg,points_frag:gg,shadow_vert:_g,shadow_frag:vg,sprite_vert:bg,sprite_frag:xg},pe={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Pn={basic:{uniforms:en([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:en([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:en([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:en([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:en([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:en([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:en([pe.points,pe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:en([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:en([pe.common,pe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:en([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:en([pe.sprite,pe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:en([pe.common,pe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:en([pe.lights,pe.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Pn.physical={uniforms:en([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Wr={r:0,b:0,g:0},yg=new Mt,uu=new Be;uu.set(-1,0,0,0,1,0,0,0,1);function Sg(t,e,n,i,a,r){const s=new Xe(0);let o=a===!0?0:1,l,c,d=null,f=0,u=null;function p(T){let P=T.isScene===!0?T.background:null;if(P&&P.isTexture){const y=T.backgroundBlurriness>0;P=e.get(P,y)}return P}function v(T){let P=!1;const y=p(T);y===null?g(s,o):y&&y.isColor&&(g(y,1),P=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||P)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(T,P){const y=p(P);y&&(y.isCubeTexture||y.mapping===vs)?(c===void 0&&(c=new _t(new pn(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:ga(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(yg.makeRotationFromEuler(P.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(uu),c.material.toneMapped=et.getTransfer(y.colorSpace)!==ut,(d!==y||f!==y.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,d=y,f=y.version,u=t.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new _t(new Zn(2,2),new $n({name:"BackgroundMaterial",uniforms:ga(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.toneMapped=et.getTransfer(y.colorSpace)!==ut,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,d=y,f=y.version,u=t.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function g(T,P){T.getRGB(Wr,ou(t)),n.buffers.color.setClear(Wr.r,Wr.g,Wr.b,P,r)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(T,P=1){s.set(T),o=P,g(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,g(s,o)},render:v,addToRenderList:x,dispose:h}}function Mg(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},a=u(null);let r=a,s=!1;function o(I,w,O,U,$){let Y=!1;const V=f(I,U,O,w);r!==V&&(r=V,c(r.object)),Y=p(I,U,O,$),Y&&v(I,U,O,$),$!==null&&e.update($,t.ELEMENT_ARRAY_BUFFER),(Y||s)&&(s=!1,y(I,w,O,U),$!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return t.createVertexArray()}function c(I){return t.bindVertexArray(I)}function d(I){return t.deleteVertexArray(I)}function f(I,w,O,U){const $=U.wireframe===!0;let Y=i[w.id];Y===void 0&&(Y={},i[w.id]=Y);const V=I.isInstancedMesh===!0?I.id:0;let ne=Y[V];ne===void 0&&(ne={},Y[V]=ne);let X=ne[O.id];X===void 0&&(X={},ne[O.id]=X);let Q=X[$];return Q===void 0&&(Q=u(l()),X[$]=Q),Q}function u(I){const w=[],O=[],U=[];for(let $=0;$<n;$++)w[$]=0,O[$]=0,U[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:O,attributeDivisors:U,object:I,attributes:{},index:null}}function p(I,w,O,U){const $=r.attributes,Y=w.attributes;let V=0;const ne=O.getAttributes();for(const X in ne)if(ne[X].location>=0){const te=$[X];let Re=Y[X];if(Re===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(Re=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(Re=I.instanceColor)),te===void 0||te.attribute!==Re||Re&&te.data!==Re.data)return!0;V++}return r.attributesNum!==V||r.index!==U}function v(I,w,O,U){const $={},Y=w.attributes;let V=0;const ne=O.getAttributes();for(const X in ne)if(ne[X].location>=0){let te=Y[X];te===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(te=I.instanceColor));const Re={};Re.attribute=te,te&&te.data&&(Re.data=te.data),$[X]=Re,V++}r.attributes=$,r.attributesNum=V,r.index=U}function x(){const I=r.newAttributes;for(let w=0,O=I.length;w<O;w++)I[w]=0}function g(I){h(I,0)}function h(I,w){const O=r.newAttributes,U=r.enabledAttributes,$=r.attributeDivisors;O[I]=1,U[I]===0&&(t.enableVertexAttribArray(I),U[I]=1),$[I]!==w&&(t.vertexAttribDivisor(I,w),$[I]=w)}function T(){const I=r.newAttributes,w=r.enabledAttributes;for(let O=0,U=w.length;O<U;O++)w[O]!==I[O]&&(t.disableVertexAttribArray(O),w[O]=0)}function P(I,w,O,U,$,Y,V){V===!0?t.vertexAttribIPointer(I,w,O,$,Y):t.vertexAttribPointer(I,w,O,U,$,Y)}function y(I,w,O,U){x();const $=U.attributes,Y=O.getAttributes(),V=w.defaultAttributeValues;for(const ne in Y){const X=Y[ne];if(X.location>=0){let Q=$[ne];if(Q===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor)),Q!==void 0){const te=Q.normalized,Re=Q.itemSize,re=e.get(Q);if(re===void 0)continue;const st=re.buffer,je=re.type,at=re.bytesPerElement,Z=je===t.INT||je===t.UNSIGNED_INT||Q.gpuType===yl;if(Q.isInterleavedBufferAttribute){const ee=Q.data,ye=ee.stride,Oe=Q.offset;if(ee.isInstancedInterleavedBuffer){for(let be=0;be<X.locationSize;be++)h(X.location+be,ee.meshPerAttribute);I.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let be=0;be<X.locationSize;be++)g(X.location+be);t.bindBuffer(t.ARRAY_BUFFER,st);for(let be=0;be<X.locationSize;be++)P(X.location+be,Re/X.locationSize,je,te,ye*at,(Oe+Re/X.locationSize*be)*at,Z)}else{if(Q.isInstancedBufferAttribute){for(let ee=0;ee<X.locationSize;ee++)h(X.location+ee,Q.meshPerAttribute);I.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ee=0;ee<X.locationSize;ee++)g(X.location+ee);t.bindBuffer(t.ARRAY_BUFFER,st);for(let ee=0;ee<X.locationSize;ee++)P(X.location+ee,Re/X.locationSize,je,te,Re*at,Re/X.locationSize*ee*at,Z)}}else if(V!==void 0){const te=V[ne];if(te!==void 0)switch(te.length){case 2:t.vertexAttrib2fv(X.location,te);break;case 3:t.vertexAttrib3fv(X.location,te);break;case 4:t.vertexAttrib4fv(X.location,te);break;default:t.vertexAttrib1fv(X.location,te)}}}}T()}function M(){S();for(const I in i){const w=i[I];for(const O in w){const U=w[O];for(const $ in U){const Y=U[$];for(const V in Y)d(Y[V].object),delete Y[V];delete U[$]}}delete i[I]}}function E(I){if(i[I.id]===void 0)return;const w=i[I.id];for(const O in w){const U=w[O];for(const $ in U){const Y=U[$];for(const V in Y)d(Y[V].object),delete Y[V];delete U[$]}}delete i[I.id]}function R(I){for(const w in i){const O=i[w];for(const U in O){const $=O[U];if($[I.id]===void 0)continue;const Y=$[I.id];for(const V in Y)d(Y[V].object),delete Y[V];delete $[I.id]}}}function m(I){for(const w in i){const O=i[w],U=I.isInstancedMesh===!0?I.id:0,$=O[U];if($!==void 0){for(const Y in $){const V=$[Y];for(const ne in V)d(V[ne].object),delete V[ne];delete $[Y]}delete O[U],Object.keys(O).length===0&&delete i[w]}}}function S(){C(),s=!0,r!==a&&(r=a,c(r.object))}function C(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:S,resetDefaultState:C,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfObject:m,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:T}}function Eg(t,e,n){let i;function a(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function s(l,c,d){d!==0&&(t.drawArraysInstanced(i,l,c,d),n.update(c,i,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let u=0;for(let p=0;p<d;p++)u+=c[p];n.update(u,i,1)}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o}function Tg(t,e,n,i){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");a=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(R){return!(R!==Mn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const m=R===Bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==un&&R!==Nn&&!m&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(Ne("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),T=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),P=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=t.getParameter(t.MAX_SAMPLES),E=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:T,maxVaryings:P,maxFragmentUniforms:y,maxSamples:M,samples:E}}function Ag(t){const e=this;let n=null,i=0,a=!1,r=!1;const s=new hi,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||i!==0||a;return a=u,i=f.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){n=d(f,u,0)},this.setState=function(f,u,p){const v=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,h=t.get(f);if(!a||v===null||v.length===0||r&&!g)r?d(null):c();else{const T=r?0:i,P=T*4;let y=h.clippingState||null;l.value=y,y=d(v,u,P,p);for(let M=0;M!==P;++M)y[M]=n[M];h.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,u,p,v){const x=f!==null?f.length:0;let g=null;if(x!==0){if(g=l.value,v!==!0||g===null){const h=p+x*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(g===null||g.length<h)&&(g=new Float32Array(h));for(let P=0,y=p;P!==x;++P,y+=4)s.copy(f[P]).applyMatrix4(T,o),s.normal.toArray(g,y),g[y+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}const ua=4,wg=6,Rg=20,Cg=256,Na=new cu,Gc=new Xe;let lo=null,co=0,uo=0,ho=!1;const Lg=new F,Ri=new F;class Vc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,a=100,r={}){const{size:s=256,position:o=Lg}=r;lo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel(),ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(lo,co,uo),this._renderer.xr.enabled=ho,e.scissorTest=!1,oa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ki||e.mapping===ma?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel(),ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:Bn,format:Mn,colorSpace:as,depthBuffer:!1},a=Wc(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wc(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Pg(r)),this._blurMaterial=Dg(r,e,n),this._ggxMaterial=Ig(r,e,n)}return a}_compileMaterial(e){const n=new _t(new Jt,e);this._renderer.compile(n,Na)}_sceneToCubeUV(e,n,i,a,r){const l=new dn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,p=f.toneMapping;f.getClearColor(Gc),f.toneMapping=kn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(a),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _t(new pn,new fi({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let h=!1;const T=e.background;T?T.isColor&&(g.color.copy(T),e.background=null,h=!0):(g.color.copy(Gc),h=!0);for(let P=0;P<6;P++){const y=P%3;y===0?(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[P],r.y,r.z)):y===1?(l.up.set(0,0,c[P]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[P],r.z)):(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[P]));const M=this._cubeSize;oa(a,y*M,P>2?M:0,M,M),f.setRenderTarget(a),h&&f.render(x,l),f.render(e,l)}f.toneMapping=p,f.autoClear=u,e.background=T}_textureToCubeUV(e,n){const i=this._renderer,a=e.mapping===ki||e.mapping===ma;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xc());const r=a?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;oa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Na)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let r=1;r<a;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const a=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;const l=s.uniforms,c=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-d*d),u=c*1.25,p=f*u,{_lodMax:v}=this,x=this._sizeLods[i],g=3*x*(i>v-ua?i-v+ua:0),h=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-n,oa(r,g,h,3*x,2*x),a.setRenderTarget(r),a.render(o,Na),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=v-i,oa(e,g,h,3*x,2*x),a.setRenderTarget(e),a.render(o,Na)}_blur(e,n,i,a){const r=this._pingPongRenderTarget,s=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(e,r,n,i,s),this._blurPass(r,e,i,i,s)}_blurPass(e,n,i,a,r){const s=this._renderer,o=this._blurMaterial,l=this._lodMeshes[a];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;const d=this._sizeLods[a],f=3*d*(a>this._lodMax-ua?a-this._lodMax+ua:0),u=4*(this._cubeSize-d);oa(n,f,u,3*d,2*d),s.setRenderTarget(n),s.render(l,Na)}}function Pg(t){const e=[],n=[];let i=t;const a=t-ua+1+wg;for(let r=0;r<a;r++){const s=Math.pow(2,i);e.push(s);const o=1/(s-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,p=3,v=new Float32Array(p*u*f),x=new Float32Array(p*u*f);for(let h=0;h<f;h++){const T=h%3*2/3-1,P=h>2?0:-1,y=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];v.set(y,p*u*h);for(let M=0;M<u;M++){const E=d[M*2]*2-1,R=d[M*2+1]*2-1;h===0?Ri.set(1,R,E):h===1?Ri.set(-E,1,-R):h===2?Ri.set(-E,R,1):h===3?Ri.set(-1,R,-E):h===4?Ri.set(-E,-1,R):Ri.set(E,R,-1),Ri.toArray(x,(h*u+M)*p)}}const g=new Jt;g.setAttribute("position",new Tn(v,p)),g.setAttribute("outputDirection",new Tn(x,p)),n.push(new _t(g,null)),i>ua&&i--}return{lodMeshes:n,sizeLods:e}}function Wc(t,e,n){const i=new En(t,e,n);return i.texture.mapping=vs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function oa(t,e,n,i,a){t.viewport.set(e,n,i,a),t.scissor.set(e,n,i,a)}function Ig(t,e,n){return new $n({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Cg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Dg(t,e,n){return new $n({name:"SphericalGaussianBlur",defines:{SAMPLES:Rg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:bs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Xc(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function qc(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function bs(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class hu extends En{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new au(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new pn(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:ga(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:jn});r.uniforms.tEquirect.value=n;const s=new _t(a,r),o=n.minFilter;return n.minFilter===Li&&(n.minFilter=Wt),new kf(1,10,this).update(e,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,n=!0,i=!0,a=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,a);e.setRenderTarget(r)}}function Ng(t){let e=new WeakMap,n=new WeakMap,i=null;function a(u,p=!1){return u==null?null:p?s(u):r(u)}function r(u){if(u&&u.isTexture){const p=u.mapping;if(p===Ls||p===Ps)if(e.has(u)){const v=e.get(u).texture;return o(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const x=new hu(v.height);return x.fromEquirectangularTexture(t,u),e.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){const p=u.mapping,v=p===Ls||p===Ps,x=p===ki||p===ma;if(v||x){let g=n.get(u);const h=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new Vc(t)),g=v?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{const T=u.image;return v&&T&&T.height>0||x&&T&&l(T)?(i===null&&(i=new Vc(t)),g=v?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",d),g.texture):null}}}return u}function o(u,p){return p===Ls?u.mapping=ki:p===Ps&&(u.mapping=ma),u}function l(u){let p=0;const v=6;for(let x=0;x<v;x++)u[x]!==void 0&&p++;return p===v}function c(u){const p=u.target;p.removeEventListener("dispose",c);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function d(u){const p=u.target;p.removeEventListener("dispose",d);const v=n.get(p);v!==void 0&&(n.delete(p),v.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:f}}function Ug(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const a=t.getExtension(i);return e[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&ha("WebGLRenderer: "+i+" extension not supported."),a}}}function kg(t,e,n,i){const a={},r=new WeakMap;function s(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);u.removeEventListener("dispose",s),delete a[u.id];const p=r.get(u);p&&(e.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(f,u){return a[u.id]===!0||(u.addEventListener("dispose",s),a[u.id]=!0,n.memory.geometries++),u}function l(f){const u=f.attributes;for(const p in u)e.update(u[p],t.ARRAY_BUFFER)}function c(f){const u=[],p=f.index,v=f.attributes.position;let x=0;if(v===void 0)return;if(p!==null){const T=p.array;x=p.version;for(let P=0,y=T.length;P<y;P+=3){const M=T[P+0],E=T[P+1],R=T[P+2];u.push(M,E,E,R,R,M)}}else{const T=v.array;x=v.version;for(let P=0,y=T.length/3-1;P<y;P+=3){const M=P+0,E=P+1,R=P+2;u.push(M,E,E,R,R,M)}}const g=new(v.count>=65535?jd:Qd)(u,1);g.version=x;const h=r.get(f);h&&e.remove(h),r.set(f,g)}function d(f){const u=r.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function Fg(t,e,n){let i;function a(f){i=f}let r,s;function o(f){r=f.type,s=f.bytesPerElement}function l(f,u){t.drawElements(i,u,r,f*s),n.update(u,i,1)}function c(f,u,p){p!==0&&(t.drawElementsInstanced(i,u,r,f*s,p),n.update(u,i,p))}function d(f,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,p);let x=0;for(let g=0;g<p;g++)x+=u[g];n.update(x,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function Og(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:nt("WebGLInfo: Unknown draw mode:",s);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:i}}function Bg(t,e,n){const i=new WeakMap,a=new wt;function r(s,o,l){const c=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==f){let C=function(){m.dispose(),i.delete(o),o.removeEventListener("dispose",C)};var p=C;u!==void 0&&u.texture.dispose();const v=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],P=o.morphAttributes.color||[];let y=0;v===!0&&(y=1),x===!0&&(y=2),g===!0&&(y=3);let M=o.attributes.position.count*y,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const R=new Float32Array(M*E*4*f),m=new Zd(R,M,E,f);m.type=Nn,m.needsUpdate=!0;const S=y*4;for(let I=0;I<f;I++){const w=h[I],O=T[I],U=P[I],$=M*E*4*I;for(let Y=0;Y<w.count;Y++){const V=Y*S;v===!0&&(a.fromBufferAttribute(w,Y),R[$+V+0]=a.x,R[$+V+1]=a.y,R[$+V+2]=a.z,R[$+V+3]=0),x===!0&&(a.fromBufferAttribute(O,Y),R[$+V+4]=a.x,R[$+V+5]=a.y,R[$+V+6]=a.z,R[$+V+7]=0),g===!0&&(a.fromBufferAttribute(U,Y),R[$+V+8]=a.x,R[$+V+9]=a.y,R[$+V+10]=a.z,R[$+V+11]=U.itemSize===4?a.w:1)}}u={count:f,texture:m,size:new ze(M,E)},i.set(o,u),o.addEventListener("dispose",C)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const x=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:r}}function $g(t,e,n,i,a){let r=new WeakMap;function s(c){const d=a.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==d&&(p.update(),r.set(p,d))}return u}function o(){r=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:s,dispose:o}}const zg={[Dd]:"LINEAR_TONE_MAPPING",[Nd]:"REINHARD_TONE_MAPPING",[Ud]:"CINEON_TONE_MAPPING",[xl]:"ACES_FILMIC_TONE_MAPPING",[Fd]:"AGX_TONE_MAPPING",[Od]:"NEUTRAL_TONE_MAPPING",[kd]:"CUSTOM_TONE_MAPPING"};function Hg(t,e,n,i,a,r){const s=new En(e,n,{type:t,depthBuffer:a,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Jt;c.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Yt([0,2,0,0,2,0],2));const d=new Cf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new _t(c,d),u=new cu(-1,1,1,-1,0,1);let p=null,v=null,x=!1,g,h=null,T=[],P=!1;this.setSize=function(y,M){s.setSize(y,M),o!==null&&o.setSize(y,M),l!==null&&l.setSize(y,M);for(let E=0;E<T.length;E++){const R=T[E];R.setSize&&R.setSize(y,M)}},this.setEffects=function(y){T=y,P=T.length>0&&T[0].isRenderPass===!0;const M=s.width,E=s.height;T.length>0&&o===null&&(o=new En(M,E,{type:Bn,depthBuffer:!1,stencilBuffer:!1}),l=new En(M,E,{type:Bn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<T.length;R++){const m=T[R];m.setSize&&m.setSize(M,E)}},this.begin=function(y,M){if(x||y.toneMapping===kn&&T.length===0)return!1;if(h=M,M!==null){const E=M.width,R=M.height;(s.width!==E||s.height!==R)&&this.setSize(E,R)}return P===!1&&y.setRenderTarget(s),g=y.toneMapping,y.toneMapping=kn,!0},this.hasRenderPass=function(){return P},this.end=function(y,M){y.toneMapping=g,x=!0;let E=s,R=o;for(let m=0;m<T.length;m++){const S=T[m];S.enabled!==!1&&(S.render(y,R,E,M),S.needsSwap!==!1&&(E=R,R=R===o?l:o))}if(p!==y.outputColorSpace||v!==y.toneMapping){p=y.outputColorSpace,v=y.toneMapping,d.defines={},et.getTransfer(p)===ut&&(d.defines.SRGB_TRANSFER="");const m=zg[v];m&&(d.defines[m]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(h),y.render(f,u),h=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}const fu=new qt,ul=new ja(1,1),pu=new Zd,mu=new tf,gu=new au,Yc=[],Zc=[],Kc=new Float32Array(16),Jc=new Float32Array(9),Qc=new Float32Array(4);function Ma(t,e,n){const i=t[0];if(i<=0||i>0)return t;const a=e*n;let r=Yc[a];if(r===void 0&&(r=new Float32Array(a),Yc[a]=r),e!==0){i.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=n,t[s].toArray(r,o)}return r}function Nt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ut(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function xs(t,e){let n=Zc[e];n===void 0&&(n=new Int32Array(e),Zc[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Gg(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Vg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2fv(this.addr,e),Ut(n,e)}}function Wg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Nt(n,e))return;t.uniform3fv(this.addr,e),Ut(n,e)}}function Xg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4fv(this.addr,e),Ut(n,e)}}function qg(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ut(n,e)}else{if(Nt(n,i))return;Qc.set(i),t.uniformMatrix2fv(this.addr,!1,Qc),Ut(n,i)}}function Yg(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ut(n,e)}else{if(Nt(n,i))return;Jc.set(i),t.uniformMatrix3fv(this.addr,!1,Jc),Ut(n,i)}}function Zg(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ut(n,e)}else{if(Nt(n,i))return;Kc.set(i),t.uniformMatrix4fv(this.addr,!1,Kc),Ut(n,i)}}function Kg(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Jg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2iv(this.addr,e),Ut(n,e)}}function Qg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3iv(this.addr,e),Ut(n,e)}}function jg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4iv(this.addr,e),Ut(n,e)}}function e0(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function t0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2uiv(this.addr,e),Ut(n,e)}}function n0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3uiv(this.addr,e),Ut(n,e)}}function i0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4uiv(this.addr,e),Ut(n,e)}}function a0(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a);let r;this.type===t.SAMPLER_2D_SHADOW?(ul.compareFunction=n.isReversedDepthBuffer()?Rl:wl,r=ul):r=fu,n.setTexture2D(e||r,a)}function r0(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(e||mu,a)}function s0(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(e||gu,a)}function o0(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(e||pu,a)}function l0(t){switch(t){case 5126:return Gg;case 35664:return Vg;case 35665:return Wg;case 35666:return Xg;case 35674:return qg;case 35675:return Yg;case 35676:return Zg;case 5124:case 35670:return Kg;case 35667:case 35671:return Jg;case 35668:case 35672:return Qg;case 35669:case 35673:return jg;case 5125:return e0;case 36294:return t0;case 36295:return n0;case 36296:return i0;case 35678:case 36198:case 36298:case 36306:case 35682:return a0;case 35679:case 36299:case 36307:return r0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return o0}}function c0(t,e){t.uniform1fv(this.addr,e)}function d0(t,e){const n=Ma(e,this.size,2);t.uniform2fv(this.addr,n)}function u0(t,e){const n=Ma(e,this.size,3);t.uniform3fv(this.addr,n)}function h0(t,e){const n=Ma(e,this.size,4);t.uniform4fv(this.addr,n)}function f0(t,e){const n=Ma(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function p0(t,e){const n=Ma(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function m0(t,e){const n=Ma(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function g0(t,e){t.uniform1iv(this.addr,e)}function _0(t,e){t.uniform2iv(this.addr,e)}function v0(t,e){t.uniform3iv(this.addr,e)}function b0(t,e){t.uniform4iv(this.addr,e)}function x0(t,e){t.uniform1uiv(this.addr,e)}function y0(t,e){t.uniform2uiv(this.addr,e)}function S0(t,e){t.uniform3uiv(this.addr,e)}function M0(t,e){t.uniform4uiv(this.addr,e)}function E0(t,e,n){const i=this.cache,a=e.length,r=xs(n,a);Nt(i,r)||(t.uniform1iv(this.addr,r),Ut(i,r));let s;this.type===t.SAMPLER_2D_SHADOW?s=ul:s=fu;for(let o=0;o!==a;++o)n.setTexture2D(e[o]||s,r[o])}function T0(t,e,n){const i=this.cache,a=e.length,r=xs(n,a);Nt(i,r)||(t.uniform1iv(this.addr,r),Ut(i,r));for(let s=0;s!==a;++s)n.setTexture3D(e[s]||mu,r[s])}function A0(t,e,n){const i=this.cache,a=e.length,r=xs(n,a);Nt(i,r)||(t.uniform1iv(this.addr,r),Ut(i,r));for(let s=0;s!==a;++s)n.setTextureCube(e[s]||gu,r[s])}function w0(t,e,n){const i=this.cache,a=e.length,r=xs(n,a);Nt(i,r)||(t.uniform1iv(this.addr,r),Ut(i,r));for(let s=0;s!==a;++s)n.setTexture2DArray(e[s]||pu,r[s])}function R0(t){switch(t){case 5126:return c0;case 35664:return d0;case 35665:return u0;case 35666:return h0;case 35674:return f0;case 35675:return p0;case 35676:return m0;case 5124:case 35670:return g0;case 35667:case 35671:return _0;case 35668:case 35672:return v0;case 35669:case 35673:return b0;case 5125:return x0;case 36294:return y0;case 36295:return S0;case 36296:return M0;case 35678:case 36198:case 36298:case 36306:case 35682:return E0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return w0}}class C0{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=l0(n.type)}}class L0{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=R0(n.type)}}class P0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(e,n[o.id],i)}}}const fo=/(\w+)(\])?(\[|\.)?/g;function jc(t,e){t.seq.push(e),t.map[e.id]=e}function I0(t,e,n){const i=t.name,a=i.length;for(fo.lastIndex=0;;){const r=fo.exec(i),s=fo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){jc(n,c===void 0?new C0(o,t,e):new L0(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new P0(o),jc(n,f)),n=f}}}class ts{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(n,s),l=e.getUniformLocation(n,o.name);I0(o,l,this)}const a=[],r=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(s):r.push(s);a.length>0&&(this.seq=a.concat(r))}setValue(e,n,i,a){const r=this.map[n];r!==void 0&&r.setValue(e,i,a)}setOptional(e,n,i){const a=n[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,n,i,a){for(let r=0,s=n.length;r!==s;++r){const o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,n){const i=[];for(let a=0,r=e.length;a!==r;++a){const s=e[a];s.id in n&&i.push(s)}return i}}function ed(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const D0=37297;let N0=0;function U0(t,e){const n=t.split(`
`),i=[],a=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}const td=new Be;function k0(t){et._getMatrix(td,et.workingColorSpace,t);const e=`mat3( ${td.elements.map(n=>n.toFixed(4))} )`;switch(et.getTransfer(t)){case rs:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function nd(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+U0(t.getShaderSource(e),o)}else return r}function F0(t,e){const n=k0(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const O0={[Dd]:"Linear",[Nd]:"Reinhard",[Ud]:"Cineon",[xl]:"ACESFilmic",[Fd]:"AgX",[Od]:"Neutral",[kd]:"Custom"};function B0(t,e){const n=O0[e];return n===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Xr=new F;function $0(){et.getLuminanceCoefficients(Xr);const t=Xr.x.toFixed(4),e=Xr.y.toFixed(4),n=Xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function z0(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($a).join(`
`)}function H0(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function G0(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=t.getActiveAttrib(e,a),s=r.name;let o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),n[s]={type:r.type,location:t.getAttribLocation(e,s),locationSize:o}}return n}function $a(t){return t!==""}function id(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ad(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const V0=/^[ \t]*#include +<([\w\d./]+)>/gm;function hl(t){return t.replace(V0,X0)}const W0=new Map;function X0(t,e){let n=We[e];if(n===void 0){const i=W0.get(e);if(i!==void 0)n=We[i],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return hl(n)}const q0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rd(t){return t.replace(q0,Y0)}function Y0(t,e,n,i){let a="";for(let r=parseInt(e);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function sd(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Z0={[Kr]:"SHADOWMAP_TYPE_PCF",[Oa]:"SHADOWMAP_TYPE_VSM"};function K0(t){return Z0[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const J0={[ki]:"ENVMAP_TYPE_CUBE",[ma]:"ENVMAP_TYPE_CUBE",[vs]:"ENVMAP_TYPE_CUBE_UV"};function Q0(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":J0[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const j0={[ma]:"ENVMAP_MODE_REFRACTION"};function e_(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":j0[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const t_={[Id]:"ENVMAP_BLENDING_MULTIPLY",[Dh]:"ENVMAP_BLENDING_MIX",[Nh]:"ENVMAP_BLENDING_ADD"};function n_(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":t_[t.combine]||"ENVMAP_BLENDING_NONE"}function i_(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function a_(t,e,n,i){const a=t.getContext(),r=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=K0(n),c=Q0(n),d=e_(n),f=n_(n),u=i_(n),p=z0(n),v=H0(r),x=a.createProgram();let g,h,T=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter($a).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter($a).join(`
`),h.length>0&&(h+=`
`)):(g=[sd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($a).join(`
`),h=[sd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==kn?"#define TONE_MAPPING":"",n.toneMapping!==kn?We.tonemapping_pars_fragment:"",n.toneMapping!==kn?B0("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,F0("linearToOutputTexel",n.outputColorSpace),$0(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter($a).join(`
`)),s=hl(s),s=id(s,n),s=ad(s,n),o=hl(o),o=id(o,n),o=ad(o,n),s=rd(s),o=rd(o),n.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const P=T+g+s,y=T+h+o,M=ed(a,a.VERTEX_SHADER,P),E=ed(a,a.FRAGMENT_SHADER,y);a.attachShader(x,M),a.attachShader(x,E),n.index0AttributeName!==void 0?a.bindAttribLocation(x,0,n.index0AttributeName):n.hasPositionAttribute===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function R(I){if(t.debug.checkShaderErrors){const w=a.getProgramInfoLog(x)||"",O=a.getShaderInfoLog(M)||"",U=a.getShaderInfoLog(E)||"",$=w.trim(),Y=O.trim(),V=U.trim();let ne=!0,X=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(ne=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(a,x,M,E);else{const Q=nd(a,M,"vertex"),te=nd(a,E,"fragment");nt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+$+`
`+Q+`
`+te)}else $!==""?Ne("WebGLProgram: Program Info Log:",$):(Y===""||V==="")&&(X=!1);X&&(I.diagnostics={runnable:ne,programLog:$,vertexShader:{log:Y,prefix:g},fragmentShader:{log:V,prefix:h}})}a.deleteShader(M),a.deleteShader(E),m=new ts(a,x),S=G0(a,x)}let m;this.getUniforms=function(){return m===void 0&&R(this),m};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(x,D0)),C},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=N0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=E,this}let r_=0;class s_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new o_(e),n.set(e,i)),i}}class o_{constructor(e){this.id=r_++,this.code=e,this.usedTimes=0}}function l_(t){return t===Fi||t===ns||t===is}function c_(t,e,n,i,a,r){const s=new Kd,o=new s_,l=new Set,c=[],d=new Map,f=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(m){return l.add(m),m===0?"uv":`uv${m}`}function x(m,S,C,I,w,O){const U=I.fog,$=w.geometry,Y=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?I.environment:null,V=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,ne=e.get(m.envMap||Y,V),X=ne&&ne.mapping===vs?ne.image.height:null,Q=p[m.type];m.precision!==null&&(u=i.getMaxPrecision(m.precision),u!==m.precision&&Ne("WebGLProgram.getParameters:",m.precision,"not supported, using",u,"instead."));const te=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Re=te!==void 0?te.length:0;let re=0;$.morphAttributes.position!==void 0&&(re=1),$.morphAttributes.normal!==void 0&&(re=2),$.morphAttributes.color!==void 0&&(re=3);let st,je,at,Z;if(Q){const xt=Pn[Q];st=xt.vertexShader,je=xt.fragmentShader}else{st=m.vertexShader,je=m.fragmentShader;const xt=o.getVertexShaderStage(m),ot=o.getFragmentShaderStage(m);o.update(m,xt,ot),at=xt.id,Z=ot.id}const ee=t.getRenderTarget(),ye=t.state.buffers.depth.getReversed(),Oe=w.isInstancedMesh===!0,be=w.isBatchedMesh===!0,qe=!!m.map,Dt=!!m.matcap,Ye=!!ne,it=!!m.aoMap,bt=!!m.lightMap,Je=!!m.bumpMap&&m.wireframe===!1,Tt=!!m.normalMap,kt=!!m.displacementMap,an=!!m.emissiveMap,At=!!m.metalnessMap,Ct=!!m.roughnessMap,k=m.anisotropy>0,$t=m.clearcoat>0,dt=m.dispersion>0,A=m.retroreflectivity>0,_=m.iridescence>0,B=m.sheen>0,G=m.transmission>0,q=k&&!!m.anisotropyMap,oe=$t&&!!m.clearcoatMap,le=$t&&!!m.clearcoatNormalMap,K=$t&&!!m.clearcoatRoughnessMap,j=_&&!!m.iridescenceMap,ce=_&&!!m.iridescenceThicknessMap,Ae=B&&!!m.sheenColorMap,fe=B&&!!m.sheenRoughnessMap,de=!!m.specularMap,we=!!m.specularColorMap,Pe=!!m.specularIntensityMap,He=G&&!!m.transmissionMap,N=G&&!!m.thicknessMap,ue=!!m.gradientMap,J=!!m.alphaMap,he=m.alphaTest>0,_e=!!m.alphaHash,ie=!!m.extensions;let Ce=kn;m.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ce=t.toneMapping);const Ee={shaderID:Q,shaderType:m.type,shaderName:m.name,vertexShader:st,fragmentShader:je,defines:m.defines,customVertexShaderID:at,customFragmentShaderID:Z,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:u,batching:be,batchingColor:be&&w._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&w.instanceColor!==null,instancingMorph:Oe&&w.morphTexture!==null,outputColorSpace:ee===null?t.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:qe,matcap:Dt,envMap:Ye,envMapMode:Ye&&ne.mapping,envMapCubeUVHeight:X,aoMap:it,lightMap:bt,bumpMap:Je,normalMap:Tt,displacementMap:kt,emissiveMap:an,normalMapObjectSpace:Tt&&m.normalMapType===Fh,normalMapTangentSpace:Tt&&m.normalMapType===ll,packedNormalMap:Tt&&m.normalMapType===ll&&l_(m.normalMap.format),metalnessMap:At,roughnessMap:Ct,anisotropy:k,anisotropyMap:q,clearcoat:$t,clearcoatMap:oe,clearcoatNormalMap:le,clearcoatRoughnessMap:K,dispersion:dt,retroreflection:A,iridescence:_,iridescenceMap:j,iridescenceThicknessMap:ce,sheen:B,sheenColorMap:Ae,sheenRoughnessMap:fe,specularMap:de,specularColorMap:we,specularIntensityMap:Pe,transmission:G,transmissionMap:He,thicknessMap:N,gradientMap:ue,opaque:m.transparent===!1&&m.blending===Ha&&m.alphaToCoverage===!1,alphaMap:J,alphaTest:he,alphaHash:_e,combine:m.combine,mapUv:qe&&v(m.map.channel),aoMapUv:it&&v(m.aoMap.channel),lightMapUv:bt&&v(m.lightMap.channel),bumpMapUv:Je&&v(m.bumpMap.channel),normalMapUv:Tt&&v(m.normalMap.channel),displacementMapUv:kt&&v(m.displacementMap.channel),emissiveMapUv:an&&v(m.emissiveMap.channel),metalnessMapUv:At&&v(m.metalnessMap.channel),roughnessMapUv:Ct&&v(m.roughnessMap.channel),anisotropyMapUv:q&&v(m.anisotropyMap.channel),clearcoatMapUv:oe&&v(m.clearcoatMap.channel),clearcoatNormalMapUv:le&&v(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&v(m.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&v(m.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&v(m.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&v(m.sheenColorMap.channel),sheenRoughnessMapUv:fe&&v(m.sheenRoughnessMap.channel),specularMapUv:de&&v(m.specularMap.channel),specularColorMapUv:we&&v(m.specularColorMap.channel),specularIntensityMapUv:Pe&&v(m.specularIntensityMap.channel),transmissionMapUv:He&&v(m.transmissionMap.channel),thicknessMapUv:N&&v(m.thicknessMap.channel),alphaMapUv:J&&v(m.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Tt||k),vertexNormals:!!$.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!$.attributes.uv&&(qe||J),fog:!!U,useFog:m.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||$.attributes.normal===void 0&&Tt===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ye,skinning:w.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:re,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:m.dithering,shadowMapEnabled:t.shadowMap.enabled&&C.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ce,decodeVideoTexture:qe&&m.map.isVideoTexture===!0&&et.getTransfer(m.map.colorSpace)===ut,decodeVideoTextureEmissive:an&&m.emissiveMap.isVideoTexture===!0&&et.getTransfer(m.emissiveMap.colorSpace)===ut,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===Yn,flipSided:m.side===rn,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:ie&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&m.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee}function g(m){const S=[];if(m.shaderID?S.push(m.shaderID):(S.push(m.customVertexShaderID),S.push(m.customFragmentShaderID)),m.defines!==void 0)for(const C in m.defines)S.push(C),S.push(m.defines[C]);return m.isRawShaderMaterial===!1&&(h(S,m),T(S,m),S.push(t.outputColorSpace)),S.push(m.customProgramCacheKey),S.join()}function h(m,S){m.push(S.precision),m.push(S.outputColorSpace),m.push(S.envMapMode),m.push(S.envMapCubeUVHeight),m.push(S.mapUv),m.push(S.alphaMapUv),m.push(S.lightMapUv),m.push(S.aoMapUv),m.push(S.bumpMapUv),m.push(S.normalMapUv),m.push(S.displacementMapUv),m.push(S.emissiveMapUv),m.push(S.metalnessMapUv),m.push(S.roughnessMapUv),m.push(S.anisotropyMapUv),m.push(S.clearcoatMapUv),m.push(S.clearcoatNormalMapUv),m.push(S.clearcoatRoughnessMapUv),m.push(S.iridescenceMapUv),m.push(S.iridescenceThicknessMapUv),m.push(S.sheenColorMapUv),m.push(S.sheenRoughnessMapUv),m.push(S.specularMapUv),m.push(S.specularColorMapUv),m.push(S.specularIntensityMapUv),m.push(S.transmissionMapUv),m.push(S.thicknessMapUv),m.push(S.combine),m.push(S.fogExp2),m.push(S.sizeAttenuation),m.push(S.morphTargetsCount),m.push(S.morphAttributeCount),m.push(S.numSunLights),m.push(S.numDirLights),m.push(S.numPointLights),m.push(S.numSpotLights),m.push(S.numSpotLightMaps),m.push(S.numHemiLights),m.push(S.numRectAreaLights),m.push(S.numSunLightShadows),m.push(S.numDirLightShadows),m.push(S.numPointLightShadows),m.push(S.numSpotLightShadows),m.push(S.numSpotLightShadowsWithMaps),m.push(S.numLightProbes),m.push(S.shadowMapType),m.push(S.toneMapping),m.push(S.numClippingPlanes),m.push(S.numClipIntersection),m.push(S.depthPacking)}function T(m,S){s.disableAll(),S.instancing&&s.enable(0),S.instancingColor&&s.enable(1),S.instancingMorph&&s.enable(2),S.matcap&&s.enable(3),S.envMap&&s.enable(4),S.normalMapObjectSpace&&s.enable(5),S.normalMapTangentSpace&&s.enable(6),S.clearcoat&&s.enable(7),S.iridescence&&s.enable(8),S.alphaTest&&s.enable(9),S.vertexColors&&s.enable(10),S.vertexAlphas&&s.enable(11),S.vertexUv1s&&s.enable(12),S.vertexUv2s&&s.enable(13),S.vertexUv3s&&s.enable(14),S.vertexTangents&&s.enable(15),S.anisotropy&&s.enable(16),S.alphaHash&&s.enable(17),S.batching&&s.enable(18),S.dispersion&&s.enable(19),S.retroreflection&&s.enable(24),S.batchingColor&&s.enable(20),S.gradientMap&&s.enable(21),S.packedNormalMap&&s.enable(22),S.vertexNormals&&s.enable(23),m.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.reversedDepthBuffer&&s.enable(4),S.skinning&&s.enable(5),S.morphTargets&&s.enable(6),S.morphNormals&&s.enable(7),S.morphColors&&s.enable(8),S.premultipliedAlpha&&s.enable(9),S.shadowMapEnabled&&s.enable(10),S.doubleSided&&s.enable(11),S.flipSided&&s.enable(12),S.useDepthPacking&&s.enable(13),S.dithering&&s.enable(14),S.transmission&&s.enable(15),S.sheen&&s.enable(16),S.opaque&&s.enable(17),S.pointsUvs&&s.enable(18),S.decodeVideoTexture&&s.enable(19),S.decodeVideoTextureEmissive&&s.enable(20),S.alphaToCoverage&&s.enable(21),S.numLightProbeGrids>0&&s.enable(22),S.hasPositionAttribute&&s.enable(23),m.push(s.mask)}function P(m){const S=p[m.type];let C;if(S){const I=Pn[S];C=Af.clone(I.uniforms)}else C=m.uniforms;return C}function y(m,S){let C=d.get(S);return C!==void 0?++C.usedTimes:(C=new a_(t,S,m,a),c.push(C),d.set(S,C)),C}function M(m){if(--m.usedTimes===0){const S=c.indexOf(m);c[S]=c[c.length-1],c.pop(),d.delete(m.cacheKey),m.destroy()}}function E(m){o.remove(m)}function R(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:P,acquireProgram:y,releaseProgram:M,releaseShaderCache:E,programs:c,dispose:R}}function d_(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function i(s){t.delete(s)}function a(s,o,l){t.get(s)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:a,dispose:r}}function u_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function od(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ld(){const t=[];let e=0;const n=[],i=[],a=[];function r(){e=0,n.length=0,i.length=0,a.length=0}function s(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,v,x,g,h){let T=t[e];return T===void 0?(T={id:u.id,object:u,geometry:p,material:v,materialVariant:s(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:h},t[e]=T):(T.id=u.id,T.object=u,T.geometry=p,T.material=v,T.materialVariant=s(u),T.groupOrder=x,T.renderOrder=u.renderOrder,T.z=g,T.group=h),e++,T}function l(u,p,v,x,g,h,T){T.reversedDepth===!0&&(g=-g);const P=o(u,p,v,x,g,h);v.transmission>0?i.push(P):v.transparent===!0?a.push(P):n.push(P)}function c(u,p,v,x,g,h){const T=o(u,p,v,x,g,h);v.transmission>0?i.unshift(T):v.transparent===!0?a.unshift(T):n.unshift(T)}function d(u,p){n.length>1&&n.sort(u||u_),i.length>1&&i.sort(p||od),a.length>1&&a.sort(p||od)}function f(){for(let u=e,p=t.length;u<p;u++){const v=t[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:l,unshift:c,finish:f,sort:d}}function h_(){let t=new WeakMap;function e(i,a){const r=t.get(i);let s;return r===void 0?(s=new ld,t.set(i,[s])):a>=r.length?(s=new ld,r.push(s)):s=r[a],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function f_(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new F,color:new Xe};break;case"SpotLight":n={position:new F,direction:new F,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function p_(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let m_=0;function g_(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function __(t){const e=new f_,n=p_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const a=new F,r=new Mt,s=new Mt;function o(c){let d=0,f=0,u=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,v=0,x=0,g=0,h=0,T=0,P=0,y=0,M=0,E=0,R=0,m=0,S=0,C=0;c.sort(g_);for(let w=0,O=c.length;w<O;w++){const U=c[w],$=U.color,Y=U.intensity,V=U.distance;let ne=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Fi?ne=U.shadow.map.texture:ne=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)d+=$.r*Y,f+=$.g*Y,u+=$.b*Y;else if(U.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(U.sh.coefficients[X],Y);C++}else if(U.isSunLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const Q=U.shadow,te=n.get(U);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[v]=te,i.sunShadowMap[v]=ne;const Re=Q.getViewportCount();for(let re=0;re<Re;re++)i.sunShadowMatrix[x+re]=Q.getMatrix(re),i.sunShadowCascade[x+re]=Q._cascadeData[re];x+=Re,v++}i.sun[p]=X,p++}else if(U.isDirectionalLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const Q=U.shadow,te=n.get(U);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,i.directionalShadow[g]=te,i.directionalShadowMap[g]=ne,i.directionalShadowMatrix[g]=U.shadow.matrix,M++}i.directional[g]=X,g++}else if(U.isSpotLight){const X=e.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy($).multiplyScalar(Y),X.distance=V,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,i.spot[T]=X;const Q=U.shadow;if(U.map&&(i.spotLightMap[m]=U.map,m++,Q.updateMatrices(U),U.castShadow&&S++),i.spotLightMatrix[T]=Q.matrix,U.castShadow){const te=n.get(U);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,i.spotShadow[T]=te,i.spotShadowMap[T]=ne,R++}T++}else if(U.isRectAreaLight){const X=e.get(U);X.color.copy($).multiplyScalar(Y),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),i.rectArea[P]=X,P++}else if(U.isPointLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),X.distance=U.distance,X.decay=U.decay,U.castShadow){const Q=U.shadow,te=n.get(U);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,te.shadowCameraNear=Q.camera.near,te.shadowCameraFar=Q.camera.far,i.pointShadow[h]=te,i.pointShadowMap[h]=ne,i.pointShadowMatrix[h]=U.shadow.matrix,E++}i.point[h]=X,h++}else if(U.isHemisphereLight){const X=e.get(U);X.skyColor.copy(U.color).multiplyScalar(Y),X.groundColor.copy(U.groundColor).multiplyScalar(Y),i.hemi[y]=X,y++}}P>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=u;const I=i.hash;(I.sunLength!==p||I.directionalLength!==g||I.pointLength!==h||I.spotLength!==T||I.rectAreaLength!==P||I.hemiLength!==y||I.numSunShadows!==v||I.numDirectionalShadows!==M||I.numPointShadows!==E||I.numSpotShadows!==R||I.numSpotMaps!==m||I.numLightProbes!==C)&&(i.sun.length=p,i.directional.length=g,i.spot.length=T,i.rectArea.length=P,i.point.length=h,i.hemi.length=y,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+m-S,i.spotLightMap.length=m,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=C,I.sunLength=p,I.directionalLength=g,I.pointLength=h,I.spotLength=T,I.rectAreaLength=P,I.hemiLength=y,I.numSunShadows=v,I.numDirectionalShadows=M,I.numPointShadows=E,I.numSpotShadows=R,I.numSpotMaps=m,I.numLightProbes=C,i.version=m_++)}function l(c,d){let f=0,u=0,p=0,v=0,x=0,g=0;const h=d.matrixWorldInverse;for(let T=0,P=c.length;T<P;T++){const y=c[T];if(y.isSunLight){const M=i.sun[f];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(h),f++}else if(y.isDirectionalLight){const M=i.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(h),u++}else if(y.isSpotLight){const M=i.spot[v];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(h),M.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(h),v++}else if(y.isRectAreaLight){const M=i.rectArea[x];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(h),s.identity(),r.copy(y.matrixWorld),r.premultiply(h),s.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),x++}else if(y.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(h),p++}else if(y.isHemisphereLight){const M=i.hemi[g];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(h),g++}}}return{setup:o,setupView:l,state:i}}function cd(t){const e=new __(t),n=[],i=[],a=[];function r(u){f.camera=u,n.length=0,i.length=0,a.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function l(u){a.push(u)}function c(){e.setup(n)}function d(u){e.setupView(n,u)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:d,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function v_(t){let e=new WeakMap;function n(a,r=0){const s=e.get(a);let o;return s===void 0?(o=new cd(t),e.set(a,[o])):r>=s.length?(o=new cd(t),s.push(o)):o=s[r],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const b_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,y_=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],S_=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],dd=new Mt,Ua=new F,po=new F;function M_(t,e,n){let i=new Il;const a=new ze,r=new ze,s=new wt,o=new Lf,l=new Pf,c={},d=n.maxTextureSize,f={[Ui]:rn,[rn]:Ui,[Yn]:Yn},u=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:b_,fragmentShader:x_}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const v=new Jt;v.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new _t(v,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kr;let h=this.type;this.render=function(E,R,m){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===ph&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Kr);const S=t.getRenderTarget(),C=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),w=t.state;w.setBlending(jn),w.buffers.depth.getReversed()===!0?w.buffers.color.setClear(0,0,0,0):w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);const O=h!==this.type;O&&R.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach($=>$.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,$=E.length;U<$;U++){const Y=E[U],V=Y.shadow;if(V===void 0){Ne("WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;a.copy(V.mapSize);const ne=V.getFrameExtents();a.multiply(ne),r.copy(V.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(r.x=Math.floor(d/ne.x),a.x=r.x*ne.x,V.mapSize.x=r.x),a.y>d&&(r.y=Math.floor(d/ne.y),a.y=r.y*ne.y,V.mapSize.y=r.y));const X=t.state.buffers.depth.getReversed();if(V.camera._reversedDepth=X,V.map===null||O===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Oa){if(Y.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new En(a.x,a.y,{format:Fi,type:Bn,minFilter:Wt,magFilter:Wt,generateMipmaps:!1}),V.map.texture.name=Y.name+".shadowMap",V.map.depthTexture=new ja(a.x,a.y,Nn),V.map.depthTexture.name=Y.name+".shadowMapDepth",V.map.depthTexture.format=ti,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Bt,V.map.depthTexture.magFilter=Bt}else Y.isPointLight?(V.map=new hu(a.x),V.map.depthTexture=new Sf(a.x,On)):(V.map=new En(a.x,a.y),V.map.depthTexture=new ja(a.x,a.y,On)),V.map.depthTexture.name=Y.name+".shadowMap",V.map.depthTexture.format=ti,this.type===Kr?(V.map.depthTexture.compareFunction=X?Rl:wl,V.map.depthTexture.minFilter=Wt,V.map.depthTexture.magFilter=Wt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Bt,V.map.depthTexture.magFilter=Bt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==a.x||V.map.height!==a.y)&&V.map.setSize(a.x,a.y);const Q=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();Y.isPointLight!==!0&&V.updateMatrices(Y,m);for(let te=0;te<Q;te++){const Re=V.getCamera(te);if(Y.isPointLight){const re=V.camera,st=V.matrix,je=Y.distance||re.far;je!==re.far&&(re.far=je,re.updateProjectionMatrix()),Ua.setFromMatrixPosition(Y.matrixWorld),re.position.copy(Ua),po.copy(re.position),po.add(y_[te]),re.up.copy(S_[te]),re.lookAt(po),re.updateMatrixWorld(),st.makeTranslation(-Ua.x,-Ua.y,-Ua.z),dd.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),V._frustum.setFromProjectionMatrix(dd,re.coordinateSystem,re.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)t.setRenderTarget(V.map,te),t.clear();else{te===0&&(t.setRenderTarget(V.map),t.clear());const re=V.getViewport(te);s.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),w.viewport(s)}i=V.getFrustum(te),y(R,m,Re,Y,this.type)}V.isPointLightShadow!==!0&&this.type===Oa&&T(V,m),V.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(S,C,I)};function T(E,R){const m=e.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null?E.mapPass=new En(a.x,a.y,{format:Fi,type:Bn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(R,null,m,u,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value.set(E.map.width,E.map.height),p.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(R,null,m,p,x,null)}function P(E,R,m,S){let C=null;const I=m.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)C=I;else if(C=m.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const w=C.uuid,O=R.uuid;let U=c[w];U===void 0&&(U={},c[w]=U);let $=U[O];$===void 0&&($=C.clone(),U[O]=$,R.addEventListener("dispose",M)),C=$}if(C.visible=R.visible,C.wireframe=R.wireframe,S===Oa?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:f[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,m.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const w=t.properties.get(C);w.light=m}return C}function y(E,R,m,S,C){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===Oa)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,E.matrixWorld);const O=e.update(E),U=E.material;if(Array.isArray(U)){const $=O.groups;for(let Y=0,V=$.length;Y<V;Y++){const ne=$[Y],X=U[ne.materialIndex];if(X&&X.visible){const Q=P(E,X,S,C);E.onBeforeShadow(t,E,R,m,O,Q,ne),t.renderBufferDirect(m,null,O,Q,E,ne),E.onAfterShadow(t,E,R,m,O,Q,ne)}}}else if(U.visible){const $=P(E,U,S,C);E.onBeforeShadow(t,E,R,m,O,$,null),t.renderBufferDirect(m,null,O,$,E,null),E.onAfterShadow(t,E,R,m,O,$,null)}}const w=E.children;for(let O=0,U=w.length;O<U;O++)y(w[O],R,m,S,C)}function M(E){E.target.removeEventListener("dispose",M);for(const m in c){const S=c[m],C=E.target.uuid;C in S&&(S[C].dispose(),delete S[C])}}}function E_(t,e){function n(){let N=!1;const ue=new wt;let J=null;const he=new wt(0,0,0,0);return{setMask:function(_e){J!==_e&&!N&&(t.colorMask(_e,_e,_e,_e),J=_e)},setLocked:function(_e){N=_e},setClear:function(_e,ie,Ce,Ee,xt){xt===!0&&(_e*=Ee,ie*=Ee,Ce*=Ee),ue.set(_e,ie,Ce,Ee),he.equals(ue)===!1&&(t.clearColor(_e,ie,Ce,Ee),he.copy(ue))},reset:function(){N=!1,J=null,he.set(-1,0,0,0)}}}function i(){let N=!1,ue=!1,J=null,he=null,_e=null;return{setReversed:function(ie){if(ue!==ie){const Ce=e.get("EXT_clip_control");ie?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),ue=ie;const Ee=_e;_e=null,this.setClear(Ee)}},getReversed:function(){return ue},setTest:function(ie){ie?ee(t.DEPTH_TEST):ye(t.DEPTH_TEST)},setMask:function(ie){J!==ie&&!N&&(t.depthMask(ie),J=ie)},setFunc:function(ie){if(ue&&(ie=Yh[ie]),he!==ie){switch(ie){case Mo:t.depthFunc(t.NEVER);break;case Eo:t.depthFunc(t.ALWAYS);break;case To:t.depthFunc(t.LESS);break;case Za:t.depthFunc(t.LEQUAL);break;case Ao:t.depthFunc(t.EQUAL);break;case wo:t.depthFunc(t.GEQUAL);break;case Ro:t.depthFunc(t.GREATER);break;case Co:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=ie}},setLocked:function(ie){N=ie},setClear:function(ie){_e!==ie&&(_e=ie,ue&&(ie=1-ie),t.clearDepth(ie))},reset:function(){N=!1,J=null,he=null,_e=null,ue=!1}}}function a(){let N=!1,ue=null,J=null,he=null,_e=null,ie=null,Ce=null,Ee=null,xt=null;return{setTest:function(ot){N||(ot?ee(t.STENCIL_TEST):ye(t.STENCIL_TEST))},setMask:function(ot){ue!==ot&&!N&&(t.stencilMask(ot),ue=ot)},setFunc:function(ot,vn,An){(J!==ot||he!==vn||_e!==An)&&(t.stencilFunc(ot,vn,An),J=ot,he=vn,_e=An)},setOp:function(ot,vn,An){(ie!==ot||Ce!==vn||Ee!==An)&&(t.stencilOp(ot,vn,An),ie=ot,Ce=vn,Ee=An)},setLocked:function(ot){N=ot},setClear:function(ot){xt!==ot&&(t.clearStencil(ot),xt=ot)},reset:function(){N=!1,ue=null,J=null,he=null,_e=null,ie=null,Ce=null,Ee=null,xt=null}}}const r=new n,s=new i,o=new a,l=new WeakMap,c=new WeakMap;let d={},f={},u={},p=new WeakMap,v=[],x=null,g=!1,h=null,T=null,P=null,y=null,M=null,E=null,R=null,m=new Xe(0,0,0),S=0,C=!1,I=null,w=null,O=null,U=null,$=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,ne=0;const X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=ne>=1):X.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=ne>=2);let Q=null,te={};const Re=t.getParameter(t.SCISSOR_BOX),re=t.getParameter(t.VIEWPORT),st=new wt().fromArray(Re),je=new wt().fromArray(re);function at(N,ue,J,he){const _e=new Uint8Array(4),ie=t.createTexture();t.bindTexture(N,ie),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ce=0;Ce<J;Ce++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,_e):t.texImage2D(ue+Ce,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,_e);return ie}const Z={};Z[t.TEXTURE_2D]=at(t.TEXTURE_2D,t.TEXTURE_2D,1),Z[t.TEXTURE_CUBE_MAP]=at(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[t.TEXTURE_2D_ARRAY]=at(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Z[t.TEXTURE_3D]=at(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ee(t.DEPTH_TEST),s.setFunc(Za),Je(!1),Tt(sc),ee(t.CULL_FACE),it(jn);function ee(N){d[N]!==!0&&(t.enable(N),d[N]=!0)}function ye(N){d[N]!==!1&&(t.disable(N),d[N]=!1)}function Oe(N,ue){return u[N]!==ue?(t.bindFramebuffer(N,ue),u[N]=ue,N===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ue),N===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function be(N,ue){let J=v,he=!1;if(N){J=p.get(ue),J===void 0&&(J=[],p.set(ue,J));const _e=N.textures;if(J.length!==_e.length||J[0]!==t.COLOR_ATTACHMENT0){for(let ie=0,Ce=_e.length;ie<Ce;ie++)J[ie]=t.COLOR_ATTACHMENT0+ie;J.length=_e.length,he=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,he=!0);he&&t.drawBuffers(J)}function qe(N){return x!==N?(t.useProgram(N),x=N,!0):!1}const Dt={[ca]:t.FUNC_ADD,[gh]:t.FUNC_SUBTRACT,[_h]:t.FUNC_REVERSE_SUBTRACT};Dt[vh]=t.MIN,Dt[bh]=t.MAX;const Ye={[xh]:t.ZERO,[yh]:t.ONE,[Sh]:t.SRC_COLOR,[Ld]:t.SRC_ALPHA,[Rh]:t.SRC_ALPHA_SATURATE,[Ah]:t.DST_COLOR,[Eh]:t.DST_ALPHA,[Mh]:t.ONE_MINUS_SRC_COLOR,[Pd]:t.ONE_MINUS_SRC_ALPHA,[wh]:t.ONE_MINUS_DST_COLOR,[Th]:t.ONE_MINUS_DST_ALPHA,[Ch]:t.CONSTANT_COLOR,[Lh]:t.ONE_MINUS_CONSTANT_COLOR,[Ph]:t.CONSTANT_ALPHA,[Ih]:t.ONE_MINUS_CONSTANT_ALPHA};function it(N,ue,J,he,_e,ie,Ce,Ee,xt,ot){if(N===jn){g===!0&&(ye(t.BLEND),g=!1);return}if(g===!1&&(ee(t.BLEND),g=!0),N!==mh){if(N!==h||ot!==C){if((T!==ca||M!==ca)&&(t.blendEquation(t.FUNC_ADD),T=ca,M=ca),ot)switch(N){case Ha:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case oc:t.blendFunc(t.ONE,t.ONE);break;case lc:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case cc:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:nt("WebGLState: Invalid blending: ",N);break}else switch(N){case Ha:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case oc:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case lc:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cc:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",N);break}P=null,y=null,E=null,R=null,m.set(0,0,0),S=0,h=N,C=ot}return}_e=_e||ue,ie=ie||J,Ce=Ce||he,(ue!==T||_e!==M)&&(t.blendEquationSeparate(Dt[ue],Dt[_e]),T=ue,M=_e),(J!==P||he!==y||ie!==E||Ce!==R)&&(t.blendFuncSeparate(Ye[J],Ye[he],Ye[ie],Ye[Ce]),P=J,y=he,E=ie,R=Ce),(Ee.equals(m)===!1||xt!==S)&&(t.blendColor(Ee.r,Ee.g,Ee.b,xt),m.copy(Ee),S=xt),h=N,C=!1}function bt(N,ue){N.side===Yn?ye(t.CULL_FACE):ee(t.CULL_FACE);let J=N.side===rn;ue&&(J=!J),Je(J),N.blending===Ha&&N.transparent===!1?it(jn):it(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);const he=N.stencilWrite;o.setTest(he),he&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),an(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ee(t.SAMPLE_ALPHA_TO_COVERAGE):ye(t.SAMPLE_ALPHA_TO_COVERAGE)}function Je(N){I!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),I=N)}function Tt(N){N!==hh?(ee(t.CULL_FACE),N!==w&&(N===sc?t.cullFace(t.BACK):N===fh?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ye(t.CULL_FACE),w=N}function kt(N){N!==O&&(V&&t.lineWidth(N),O=N)}function an(N,ue,J){N?(ee(t.POLYGON_OFFSET_FILL),(U!==ue||$!==J)&&(U=ue,$=J,s.getReversed()&&(ue=-ue),t.polygonOffset(ue,J))):ye(t.POLYGON_OFFSET_FILL)}function At(N){N?ee(t.SCISSOR_TEST):ye(t.SCISSOR_TEST)}function Ct(N){N===void 0&&(N=t.TEXTURE0+Y-1),Q!==N&&(t.activeTexture(N),Q=N)}function k(N,ue,J){J===void 0&&(Q===null?J=t.TEXTURE0+Y-1:J=Q);let he=te[J];he===void 0&&(he={type:void 0,texture:void 0},te[J]=he),(he.type!==N||he.texture!==ue)&&(Q!==J&&(t.activeTexture(J),Q=J),t.bindTexture(N,ue||Z[N]),he.type=N,he.texture=ue)}function $t(){const N=te[Q];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function dt(){try{t.compressedTexImage2D(...arguments)}catch(N){nt("WebGLState:",N)}}function A(){try{t.compressedTexImage3D(...arguments)}catch(N){nt("WebGLState:",N)}}function _(){try{t.texSubImage2D(...arguments)}catch(N){nt("WebGLState:",N)}}function B(){try{t.texSubImage3D(...arguments)}catch(N){nt("WebGLState:",N)}}function G(){try{t.compressedTexSubImage2D(...arguments)}catch(N){nt("WebGLState:",N)}}function q(){try{t.compressedTexSubImage3D(...arguments)}catch(N){nt("WebGLState:",N)}}function oe(){try{t.texStorage2D(...arguments)}catch(N){nt("WebGLState:",N)}}function le(){try{t.texStorage3D(...arguments)}catch(N){nt("WebGLState:",N)}}function K(){try{t.texImage2D(...arguments)}catch(N){nt("WebGLState:",N)}}function j(){try{t.texImage3D(...arguments)}catch(N){nt("WebGLState:",N)}}function ce(N){return f[N]!==void 0?f[N]:t.getParameter(N)}function Ae(N,ue){f[N]!==ue&&(t.pixelStorei(N,ue),f[N]=ue)}function fe(N){st.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),st.copy(N))}function de(N){je.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),je.copy(N))}function we(N,ue){let J=c.get(ue);J===void 0&&(J=new WeakMap,c.set(ue,J));let he=J.get(N);he===void 0&&(he=t.getUniformBlockIndex(ue,N.name),J.set(N,he))}function Pe(N,ue){const he=c.get(ue).get(N);l.get(ue)!==he&&(t.uniformBlockBinding(ue,he,N.__bindingPointIndex),l.set(ue,he))}function He(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},f={},Q=null,te={},u={},p=new WeakMap,v=[],x=null,g=!1,h=null,T=null,P=null,y=null,M=null,E=null,R=null,m=new Xe(0,0,0),S=0,C=!1,I=null,w=null,O=null,U=null,$=null,st.set(0,0,t.canvas.width,t.canvas.height),je.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ee,disable:ye,bindFramebuffer:Oe,drawBuffers:be,useProgram:qe,setBlending:it,setMaterial:bt,setFlipSided:Je,setCullFace:Tt,setLineWidth:kt,setPolygonOffset:an,setScissorTest:At,activeTexture:Ct,bindTexture:k,unbindTexture:$t,compressedTexImage2D:dt,compressedTexImage3D:A,texImage2D:K,texImage3D:j,pixelStorei:Ae,getParameter:ce,updateUBOMapping:we,uniformBlockBinding:Pe,texStorage2D:oe,texStorage3D:le,texSubImage2D:_,texSubImage3D:B,compressedTexSubImage2D:G,compressedTexSubImage3D:q,scissor:fe,viewport:de,reset:He}}function T_(t,e,n,i,a,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,d=new WeakMap,f=new Set;let u;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,_){return v?new OffscreenCanvas(A,_):ss("canvas")}function g(A,_,B){let G=1;const q=dt(A);if((q.width>B||q.height>B)&&(G=B/Math.max(q.width,q.height)),G<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const oe=Math.floor(G*q.width),le=Math.floor(G*q.height);u===void 0&&(u=x(oe,le));const K=_?x(oe,le):u;return K.width=oe,K.height=le,K.getContext("2d").drawImage(A,0,0,oe,le),Ne("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+oe+"x"+le+")."),K}else return"data"in A&&Ne("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),A;return A}function h(A){return A.generateMipmaps}function T(A){t.generateMipmap(A)}function P(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(A,_,B,G,q,oe=!1){if(A!==null){if(t[A]!==void 0)return t[A];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let le;G&&(le=e.get("EXT_texture_norm16"),le||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=_;if(_===t.RED&&(B===t.FLOAT&&(K=t.R32F),B===t.HALF_FLOAT&&(K=t.R16F),B===t.UNSIGNED_BYTE&&(K=t.R8),B===t.UNSIGNED_SHORT&&le&&(K=le.R16_EXT),B===t.SHORT&&le&&(K=le.R16_SNORM_EXT)),_===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(K=t.R8UI),B===t.UNSIGNED_SHORT&&(K=t.R16UI),B===t.UNSIGNED_INT&&(K=t.R32UI),B===t.BYTE&&(K=t.R8I),B===t.SHORT&&(K=t.R16I),B===t.INT&&(K=t.R32I)),_===t.RG&&(B===t.FLOAT&&(K=t.RG32F),B===t.HALF_FLOAT&&(K=t.RG16F),B===t.UNSIGNED_BYTE&&(K=t.RG8),B===t.UNSIGNED_SHORT&&le&&(K=le.RG16_EXT),B===t.SHORT&&le&&(K=le.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(K=t.RG8UI),B===t.UNSIGNED_SHORT&&(K=t.RG16UI),B===t.UNSIGNED_INT&&(K=t.RG32UI),B===t.BYTE&&(K=t.RG8I),B===t.SHORT&&(K=t.RG16I),B===t.INT&&(K=t.RG32I)),_===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(K=t.RGB8UI),B===t.UNSIGNED_SHORT&&(K=t.RGB16UI),B===t.UNSIGNED_INT&&(K=t.RGB32UI),B===t.BYTE&&(K=t.RGB8I),B===t.SHORT&&(K=t.RGB16I),B===t.INT&&(K=t.RGB32I)),_===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),B===t.UNSIGNED_INT&&(K=t.RGBA32UI),B===t.BYTE&&(K=t.RGBA8I),B===t.SHORT&&(K=t.RGBA16I),B===t.INT&&(K=t.RGBA32I)),_===t.RGB&&(B===t.UNSIGNED_SHORT&&le&&(K=le.RGB16_EXT),B===t.SHORT&&le&&(K=le.RGB16_SNORM_EXT),B===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&(K=t.R11F_G11F_B10F)),_===t.RGBA){const j=oe?rs:et.getTransfer(q);B===t.FLOAT&&(K=t.RGBA32F),B===t.HALF_FLOAT&&(K=t.RGBA16F),B===t.UNSIGNED_BYTE&&(K=j===ut?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT&&le&&(K=le.RGBA16_EXT),B===t.SHORT&&le&&(K=le.RGBA16_SNORM_EXT),B===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function M(A,_){let B;return A?_===null||_===On||_===Ja?B=t.DEPTH24_STENCIL8:_===Nn?B=t.DEPTH32F_STENCIL8:_===Ka&&(B=t.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===On||_===Ja?B=t.DEPTH_COMPONENT24:_===Nn?B=t.DEPTH_COMPONENT32F:_===Ka&&(B=t.DEPTH_COMPONENT16),B}function E(A,_){return h(A)===!0||A.isFramebufferTexture&&A.minFilter!==Bt&&A.minFilter!==Wt?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function R(A){const _=A.target;_.removeEventListener("dispose",R),S(_),_.isVideoTexture&&d.delete(_),_.isHTMLTexture&&f.delete(_)}function m(A){const _=A.target;_.removeEventListener("dispose",m),I(_)}function S(A){const _=i.get(A);if(_.__webglInit===void 0)return;const B=A.source,G=p.get(B);if(G){const q=G[_.__cacheKey];q.usedTimes--,q.usedTimes===0&&C(A),Object.keys(G).length===0&&p.delete(B)}i.remove(A)}function C(A){const _=i.get(A);t.deleteTexture(_.__webglTexture);const B=A.source,G=p.get(B);delete G[_.__cacheKey],s.memory.textures--}function I(A){const _=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let q=0;q<_.__webglFramebuffer[G].length;q++)t.deleteFramebuffer(_.__webglFramebuffer[G][q]);else t.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)t.deleteFramebuffer(_.__webglFramebuffer[G]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const B=A.textures;for(let G=0,q=B.length;G<q;G++){const oe=i.get(B[G]);oe.__webglTexture&&(t.deleteTexture(oe.__webglTexture),s.memory.textures--),i.remove(B[G])}i.remove(A)}let w=0;function O(){w=0}function U(){return w}function $(A){w=A}function Y(){const A=w;return A>=a.maxTextures&&Ne("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+a.maxTextures),w+=1,A}function V(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function ne(A,_){const B=i.get(A);if(A.isVideoTexture&&k(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){const G=A.image;if(G===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(B,A,_);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+_)}function X(A,_){const B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){ye(B,A,_);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+_)}function Q(A,_){const B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){ye(B,A,_);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+_)}function te(A,_){const B=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&B.__version!==A.version){Oe(B,A,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+_)}const Re={[Lo]:t.REPEAT,[Jn]:t.CLAMP_TO_EDGE,[Po]:t.MIRRORED_REPEAT},re={[Bt]:t.NEAREST,[Uh]:t.NEAREST_MIPMAP_NEAREST,[vr]:t.NEAREST_MIPMAP_LINEAR,[Wt]:t.LINEAR,[Is]:t.LINEAR_MIPMAP_NEAREST,[Li]:t.LINEAR_MIPMAP_LINEAR},st={[Bh]:t.NEVER,[Vh]:t.ALWAYS,[$h]:t.LESS,[wl]:t.LEQUAL,[zh]:t.EQUAL,[Rl]:t.GEQUAL,[Hh]:t.GREATER,[Gh]:t.NOTEQUAL};function je(A,_){if(_.type===Nn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Wt||_.magFilter===Is||_.magFilter===vr||_.magFilter===Li||_.minFilter===Wt||_.minFilter===Is||_.minFilter===vr||_.minFilter===Li)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,Re[_.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,Re[_.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,Re[_.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,re[_.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,re[_.minFilter]),_.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,st[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Bt||_.minFilter!==vr&&_.minFilter!==Li||_.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,a.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function at(A,_){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",R));const G=_.source;let q=p.get(G);q===void 0&&(q={},p.set(G,q));const oe=V(_);if(oe!==A.__cacheKey){q[oe]===void 0&&(q[oe]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,B=!0),q[oe].usedTimes++;const le=q[A.__cacheKey];le!==void 0&&(q[A.__cacheKey].usedTimes--,le.usedTimes===0&&C(_)),A.__cacheKey=oe,A.__webglTexture=q[oe].texture}return B}function Z(A,_,B){return Math.floor(Math.floor(A/B)/_)}function ee(A,_,B,G){const oe=A.updateRanges;if(oe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,B,G,_.data);else{oe.sort((Ae,fe)=>Ae.start-fe.start);let le=0;for(let Ae=1;Ae<oe.length;Ae++){const fe=oe[le],de=oe[Ae],we=fe.start+fe.count,Pe=Z(de.start,_.width,4),He=Z(fe.start,_.width,4);de.start<=we+1&&Pe===He&&Z(de.start+de.count-1,_.width,4)===Pe?fe.count=Math.max(fe.count,de.start+de.count-fe.start):(++le,oe[le]=de)}oe.length=le+1;const K=n.getParameter(t.UNPACK_ROW_LENGTH),j=n.getParameter(t.UNPACK_SKIP_PIXELS),ce=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let Ae=0,fe=oe.length;Ae<fe;Ae++){const de=oe[Ae],we=Math.floor(de.start/4),Pe=Math.ceil(de.count/4),He=we%_.width,N=Math.floor(we/_.width),ue=Pe,J=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,He),n.pixelStorei(t.UNPACK_SKIP_ROWS,N),n.texSubImage2D(t.TEXTURE_2D,0,He,N,ue,J,B,G,_.data)}A.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,K),n.pixelStorei(t.UNPACK_SKIP_PIXELS,j),n.pixelStorei(t.UNPACK_SKIP_ROWS,ce)}}function ye(A,_,B){let G=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=t.TEXTURE_3D);const q=at(A,_),oe=_.source;n.bindTexture(G,A.__webglTexture,t.TEXTURE0+B);const le=i.get(oe);if(oe.version!==le.__version||q===!0){if(n.activeTexture(t.TEXTURE0+B),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const J=et.getPrimaries(et.workingColorSpace),he=_.colorSpace===pi?null:et.getPrimaries(_.colorSpace),_e=_.colorSpace===pi||J===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let j=g(_.image,!1,a.maxTextureSize);j=$t(_,j);const ce=r.convert(_.format,_.colorSpace),Ae=r.convert(_.type);let fe=y(_.internalFormat,ce,Ae,_.normalized,_.colorSpace,_.isVideoTexture);je(G,_);let de;const we=_.mipmaps,Pe=_.isVideoTexture!==!0,He=le.__version===void 0||q===!0,N=oe.dataReady,ue=E(_,j);if(_.isDepthTexture)fe=M(_.format===Pi,_.type),He&&(Pe?n.texStorage2D(t.TEXTURE_2D,1,fe,j.width,j.height):n.texImage2D(t.TEXTURE_2D,0,fe,j.width,j.height,0,ce,Ae,null));else if(_.isDataTexture)if(we.length>0){Pe&&He&&n.texStorage2D(t.TEXTURE_2D,ue,fe,we[0].width,we[0].height);for(let J=0,he=we.length;J<he;J++)de=we[J],Pe?N&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,de.width,de.height,ce,Ae,de.data):n.texImage2D(t.TEXTURE_2D,J,fe,de.width,de.height,0,ce,Ae,de.data);_.generateMipmaps=!1}else Pe?(He&&n.texStorage2D(t.TEXTURE_2D,ue,fe,j.width,j.height),N&&ee(_,j,ce,Ae)):n.texImage2D(t.TEXTURE_2D,0,fe,j.width,j.height,0,ce,Ae,j.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Pe&&He&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,fe,we[0].width,we[0].height,j.depth);for(let J=0,he=we.length;J<he;J++)if(de=we[J],_.format!==Mn)if(ce!==null)if(Pe){if(N)if(_.layerUpdates.size>0){const _e=Hc(de.width,de.height,_.format,_.type);for(const ie of _.layerUpdates){const Ce=de.data.subarray(ie*_e/de.data.BYTES_PER_ELEMENT,(ie+1)*_e/de.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,ie,de.width,de.height,1,ce,Ce)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,de.width,de.height,j.depth,ce,de.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,fe,de.width,de.height,j.depth,0,de.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,de.width,de.height,j.depth,ce,Ae,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,fe,de.width,de.height,j.depth,0,ce,Ae,de.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Pe&&He&&n.texStorage2D(t.TEXTURE_2D,ue,fe,we[0].width,we[0].height);for(let J=0,he=we.length;J<he;J++)de=we[J],_.format!==Mn?ce!==null?Pe?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,de.width,de.height,ce,de.data):n.compressedTexImage2D(t.TEXTURE_2D,J,fe,de.width,de.height,0,de.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?N&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,de.width,de.height,ce,Ae,de.data):n.texImage2D(t.TEXTURE_2D,J,fe,de.width,de.height,0,ce,Ae,de.data)}else if(_.isDataArrayTexture)if(Pe){if(He&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,fe,j.width,j.height,j.depth),N)if(_.layerUpdates.size>0){const J=Hc(j.width,j.height,_.format,_.type);for(const he of _.layerUpdates){const _e=j.data.subarray(he*J/j.data.BYTES_PER_ELEMENT,(he+1)*J/j.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,j.width,j.height,1,ce,Ae,_e)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ce,Ae,j.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,fe,j.width,j.height,j.depth,0,ce,Ae,j.data);else if(_.isData3DTexture)Pe?(He&&n.texStorage3D(t.TEXTURE_3D,ue,fe,j.width,j.height,j.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ce,Ae,j.data)):n.texImage3D(t.TEXTURE_3D,0,fe,j.width,j.height,j.depth,0,ce,Ae,j.data);else if(_.isFramebufferTexture){if(He)if(Pe)n.texStorage2D(t.TEXTURE_2D,ue,fe,j.width,j.height);else{let J=j.width,he=j.height;for(let _e=0;_e<ue;_e++)n.texImage2D(t.TEXTURE_2D,_e,fe,J,he,0,ce,Ae,null),J>>=1,he>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){const J=t.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),j.parentNode!==J){J.appendChild(j),f.add(_),J.onpaint=he=>{const _e=he.changedElements;for(const ie of f)_e.includes(ie.image)&&(ie.needsUpdate=!0)},J.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,j);else{const _e=t.RGBA,ie=t.RGBA,Ce=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,_e,ie,Ce,j)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(we.length>0){if(Pe&&He){const J=dt(we[0]);n.texStorage2D(t.TEXTURE_2D,ue,fe,J.width,J.height)}for(let J=0,he=we.length;J<he;J++)de=we[J],Pe?N&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,ce,Ae,de):n.texImage2D(t.TEXTURE_2D,J,fe,ce,Ae,de);_.generateMipmaps=!1}else if(Pe){if(He){const J=dt(j);n.texStorage2D(t.TEXTURE_2D,ue,fe,J.width,J.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce,Ae,j)}else n.texImage2D(t.TEXTURE_2D,0,fe,ce,Ae,j);h(_)&&T(G),le.__version=oe.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Oe(A,_,B){if(_.image.length!==6)return;const G=at(A,_),q=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+B);const oe=i.get(q);if(q.version!==oe.__version||G===!0){n.activeTexture(t.TEXTURE0+B);const le=et.getPrimaries(et.workingColorSpace),K=_.colorSpace===pi?null:et.getPrimaries(_.colorSpace),j=_.colorSpace===pi||le===K?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const ce=_.isCompressedTexture||_.image[0].isCompressedTexture,Ae=_.image[0]&&_.image[0].isDataTexture,fe=[];for(let ie=0;ie<6;ie++)!ce&&!Ae?fe[ie]=g(_.image[ie],!0,a.maxCubemapSize):fe[ie]=Ae?_.image[ie].image:_.image[ie],fe[ie]=$t(_,fe[ie]);const de=fe[0],we=r.convert(_.format,_.colorSpace),Pe=r.convert(_.type),He=y(_.internalFormat,we,Pe,_.normalized,_.colorSpace),N=_.isVideoTexture!==!0,ue=oe.__version===void 0||G===!0,J=q.dataReady;let he=E(_,de);je(t.TEXTURE_CUBE_MAP,_);let _e;if(ce){N&&ue&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,He,de.width,de.height);for(let ie=0;ie<6;ie++){_e=fe[ie].mipmaps;for(let Ce=0;Ce<_e.length;Ce++){const Ee=_e[Ce];_.format!==Mn?we!==null?N?J&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,0,0,Ee.width,Ee.height,we,Ee.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,He,Ee.width,Ee.height,0,Ee.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,0,0,Ee.width,Ee.height,we,Pe,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,He,Ee.width,Ee.height,0,we,Pe,Ee.data)}}}else{if(_e=_.mipmaps,N&&ue){_e.length>0&&he++;const ie=dt(fe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,He,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Ae){N?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,fe[ie].width,fe[ie].height,we,Pe,fe[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,He,fe[ie].width,fe[ie].height,0,we,Pe,fe[ie].data);for(let Ce=0;Ce<_e.length;Ce++){const xt=_e[Ce].image[ie].image;N?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,0,0,xt.width,xt.height,we,Pe,xt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,He,xt.width,xt.height,0,we,Pe,xt.data)}}else{N?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,we,Pe,fe[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,He,we,Pe,fe[ie]);for(let Ce=0;Ce<_e.length;Ce++){const Ee=_e[Ce];N?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,0,0,we,Pe,Ee.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,He,we,Pe,Ee.image[ie])}}}h(_)&&T(t.TEXTURE_CUBE_MAP),oe.__version=q.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function be(A,_,B,G,q,oe){const le=r.convert(B.format,B.colorSpace),K=r.convert(B.type),j=y(B.internalFormat,le,K,B.normalized,B.colorSpace),ce=i.get(_),Ae=i.get(B);if(Ae.__renderTarget=_,!ce.__hasExternalTextures){const fe=Math.max(1,_.width>>oe),de=Math.max(1,_.height>>oe);q===t.TEXTURE_3D||q===t.TEXTURE_2D_ARRAY?n.texImage3D(q,oe,j,fe,de,_.depth,0,le,K,null):n.texImage2D(q,oe,j,fe,de,0,le,K,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Ct(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,G,q,Ae.__webglTexture,0,At(_)):(q===t.TEXTURE_2D||q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,G,q,Ae.__webglTexture,oe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function qe(A,_,B){if(t.bindRenderbuffer(t.RENDERBUFFER,A),_.depthBuffer){const G=_.depthTexture,q=G&&G.isDepthTexture?G.type:null,oe=M(_.stencilBuffer,q),le=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ct(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,At(_),oe,_.width,_.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,At(_),oe,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,oe,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,A)}else{const G=_.textures;for(let q=0;q<G.length;q++){const oe=G[q],le=r.convert(oe.format,oe.colorSpace),K=r.convert(oe.type),j=y(oe.internalFormat,le,K,oe.normalized,oe.colorSpace);Ct(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,At(_),j,_.width,_.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,At(_),j,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,j,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Dt(A,_,B){const G=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const q=i.get(_.depthTexture);if(q.__renderTarget=_,(!q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G){if(q.__webglInit===void 0&&(q.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),q.__webglTexture===void 0){q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),je(t.TEXTURE_CUBE_MAP,_.depthTexture);const ce=r.convert(_.depthTexture.format),Ae=r.convert(_.depthTexture.type);let fe;_.depthTexture.format===ti?fe=t.DEPTH_COMPONENT24:_.depthTexture.format===Pi&&(fe=t.DEPTH24_STENCIL8);for(let de=0;de<6;de++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,fe,_.width,_.height,0,ce,Ae,null)}}else ne(_.depthTexture,0);const oe=q.__webglTexture,le=At(_),K=G?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,j=_.depthTexture.format===Pi?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===ti)Ct(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,K,oe,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,j,K,oe,0);else if(_.depthTexture.format===Pi)Ct(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,K,oe,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,j,K,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ye(A){const _=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const G=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){const q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",q)};G.addEventListener("dispose",q),_.__depthDisposeCallback=q}_.__boundDepthTexture=G}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(B)for(let G=0;G<6;G++)Dt(_.__webglFramebuffer[G],A,G);else{const G=A.texture.mipmaps;G&&G.length>0?Dt(_.__webglFramebuffer[0],A,0):Dt(_.__webglFramebuffer,A,0)}else if(B){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=t.createRenderbuffer(),qe(_.__webglDepthbuffer[G],A,!1);else{const q=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=_.__webglDepthbuffer[G];t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,oe)}}else{const G=A.texture.mipmaps;if(G&&G.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),qe(_.__webglDepthbuffer,A,!1);else{const q=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,oe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function it(A,_,B){const G=i.get(A);_!==void 0&&be(G.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Ye(A)}function bt(A){const _=A.texture,B=i.get(A),G=i.get(_);A.addEventListener("dispose",m);const q=A.textures,oe=A.isWebGLCubeRenderTarget===!0,le=q.length>1;if(le||(G.__webglTexture===void 0&&(G.__webglTexture=t.createTexture()),G.__version=_.version,s.memory.textures++),oe){B.__webglFramebuffer=[];for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[K]=[];for(let j=0;j<_.mipmaps.length;j++)B.__webglFramebuffer[K][j]=t.createFramebuffer()}else B.__webglFramebuffer[K]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let K=0;K<_.mipmaps.length;K++)B.__webglFramebuffer[K]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(le)for(let K=0,j=q.length;K<j;K++){const ce=i.get(q[K]);ce.__webglTexture===void 0&&(ce.__webglTexture=t.createTexture(),s.memory.textures++)}if(A.samples>0&&Ct(A)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let K=0;K<q.length;K++){const j=q[K];B.__webglColorRenderbuffer[K]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[K]);const ce=r.convert(j.format,j.colorSpace),Ae=r.convert(j.type),fe=y(j.internalFormat,ce,Ae,j.normalized,j.colorSpace,A.isXRRenderTarget===!0),de=At(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,de,fe,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+K,t.RENDERBUFFER,B.__webglColorRenderbuffer[K])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),qe(B.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture),je(t.TEXTURE_CUBE_MAP,_);for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)be(B.__webglFramebuffer[K][j],A,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,j);else be(B.__webglFramebuffer[K],A,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);h(_)&&T(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){for(let K=0,j=q.length;K<j;K++){const ce=q[K],Ae=i.get(ce);let fe=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(fe=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,Ae.__webglTexture),je(fe,ce),be(B.__webglFramebuffer,A,ce,t.COLOR_ATTACHMENT0+K,fe,0),h(ce)&&T(fe)}n.unbindTexture()}else{let K=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(K,G.__webglTexture),je(K,_),_.mipmaps&&_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)be(B.__webglFramebuffer[j],A,_,t.COLOR_ATTACHMENT0,K,j);else be(B.__webglFramebuffer,A,_,t.COLOR_ATTACHMENT0,K,0);h(_)&&T(K),n.unbindTexture()}A.depthBuffer&&Ye(A)}function Je(A){const _=A.textures;for(let B=0,G=_.length;B<G;B++){const q=_[B];if(h(q)){const oe=P(A),le=i.get(q).__webglTexture;n.bindTexture(oe,le),T(oe),n.unbindTexture()}}}const Tt=[],kt=[];function an(A){if(A.samples>0){if(Ct(A)===!1){const _=A.textures,B=A.width,G=A.height;let q=t.COLOR_BUFFER_BIT;const oe=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(A),K=_.length>1;if(K)for(let ce=0;ce<_.length;ce++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const j=A.texture.mipmaps;j&&j.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ce=0;ce<_.length;ce++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(q|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(q|=t.STENCIL_BUFFER_BIT)),K){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);const Ae=i.get(_[ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ae,0)}t.blitFramebuffer(0,0,B,G,0,0,B,G,q,t.NEAREST),l===!0&&(Tt.length=0,kt.length=0,Tt.push(t.COLOR_ATTACHMENT0+ce),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(Tt.push(oe),kt.push(oe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,kt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Tt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),K)for(let ce=0;ce<_.length;ce++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);const Ae=i.get(_[ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,Ae,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const _=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function At(A){return Math.min(a.maxSamples,A.samples)}function Ct(A){const _=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function k(A){const _=s.render.frame;d.get(A)!==_&&(d.set(A,_),A.update())}function $t(A,_){const B=A.colorSpace,G=A.format,q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==as&&B!==pi&&(et.getTransfer(B)===ut?(G!==Mn||q!==un)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",B)),_}function dt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=O,this.getTextureUnits=U,this.setTextureUnits=$,this.setTexture2D=ne,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=te,this.rebindTextures=it,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=an,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Ct,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function A_(t,e){function n(i,a=pi){let r;const s=et.getTransfer(a);if(i===un)return t.UNSIGNED_BYTE;if(i===Sl)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Ml)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Hd)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Gd)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===$d)return t.BYTE;if(i===zd)return t.SHORT;if(i===Ka)return t.UNSIGNED_SHORT;if(i===yl)return t.INT;if(i===On)return t.UNSIGNED_INT;if(i===Nn)return t.FLOAT;if(i===Bn)return t.HALF_FLOAT;if(i===Vd)return t.ALPHA;if(i===Wd)return t.RGB;if(i===Mn)return t.RGBA;if(i===ti)return t.DEPTH_COMPONENT;if(i===Pi)return t.DEPTH_STENCIL;if(i===Xd)return t.RED;if(i===El)return t.RED_INTEGER;if(i===Fi)return t.RG;if(i===Tl)return t.RG_INTEGER;if(i===Al)return t.RGBA_INTEGER;if(i===Jr||i===Qr||i===jr||i===es)if(s===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===es)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===es)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Io||i===Do||i===No||i===Uo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Io)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Do)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===No)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Uo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ko||i===Fo||i===Oo||i===Bo||i===$o||i===ns||i===zo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ko||i===Fo)return s===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Oo)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Bo)return r.COMPRESSED_R11_EAC;if(i===$o)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ns)return r.COMPRESSED_RG11_EAC;if(i===zo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ho||i===Go||i===Vo||i===Wo||i===Xo||i===qo||i===Yo||i===Zo||i===Ko||i===Jo||i===Qo||i===jo||i===el||i===tl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ho)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Go)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vo)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wo)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xo)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qo)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yo)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zo)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ko)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jo)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qo)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jo)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===el)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===tl)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===nl||i===il||i===al)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===nl)return s===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rl||i===sl||i===is||i===ol)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===rl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===is)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ol)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ja?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const w_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class C_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new su(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new $n({vertexShader:w_,fragmentShader:R_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new _t(new Zn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class L_ extends $i{constructor(e,n){super();const i=this;let a=null,r=1,s=null,o="local-floor",l=1,c=null,d=null,f=null,u=null,p=null,v=null;const x=typeof XRWebGLBinding<"u",g=new C_,h={},T=n.getContextAttributes();let P=null,y=null;const M=[],E=[],R=new ze;let m=null,S=null;const C=new dn;C.viewport=new wt;const I=new dn;I.viewport=new wt;const w=[C,I],O=new Ff;let U=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ee=M[Z];return ee===void 0&&(ee=new zs,M[Z]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Z){let ee=M[Z];return ee===void 0&&(ee=new zs,M[Z]=ee),ee.getGripSpace()},this.getHand=function(Z){let ee=M[Z];return ee===void 0&&(ee=new zs,M[Z]=ee),ee.getHandSpace()};function Y(Z){const ee=E.indexOf(Z.inputSource);if(ee===-1)return;const ye=M[ee];ye!==void 0&&(ye.update(Z.inputSource,Z.frame,c||s),ye.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){a.removeEventListener("select",Y),a.removeEventListener("selectstart",Y),a.removeEventListener("selectend",Y),a.removeEventListener("squeeze",Y),a.removeEventListener("squeezestart",Y),a.removeEventListener("squeezeend",Y),a.removeEventListener("end",V),a.removeEventListener("inputsourceschange",ne);for(let Z=0;Z<M.length;Z++){const ee=E[Z];ee!==null&&(E[Z]=null,M[Z].disconnect(ee))}U=null,$=null,g.reset();for(const Z in h)delete h[Z];if(e.setRenderTarget(P),p=null,u=null,f=null,a=null,y=null,at.stop(),i.isPresenting=!1,e.setPixelRatio(m),e.setSize(R.width,R.height,!1),S!==null){const Z=S.camera;Z.fov=S.fov,Z.zoom=S.zoom,Z.updateProjectionMatrix(),S=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(a,n)),f},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(P=e.getRenderTarget(),a.addEventListener("select",Y),a.addEventListener("selectstart",Y),a.addEventListener("selectend",Y),a.addEventListener("squeeze",Y),a.addEventListener("squeezestart",Y),a.addEventListener("squeezeend",Y),a.addEventListener("end",V),a.addEventListener("inputsourceschange",ne),T.xrCompatible!==!0&&await n.makeXRCompatible(),m=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Oe=null,be=null;T.depth&&(be=T.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ye=T.stencil?Pi:ti,Oe=T.stencil?Ja:On);const qe={colorFormat:n.RGBA8,depthFormat:be,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(qe),a.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new En(u.textureWidth,u.textureHeight,{format:Mn,type:un,depthTexture:new ja(u.textureWidth,u.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const ye={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,n,ye),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new En(p.framebufferWidth,p.framebufferHeight,{format:Mn,type:un,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),at.setContext(a),at.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ne(Z){for(let ee=0;ee<Z.removed.length;ee++){const ye=Z.removed[ee],Oe=E.indexOf(ye);Oe>=0&&(E[Oe]=null,M[Oe].disconnect(ye))}for(let ee=0;ee<Z.added.length;ee++){const ye=Z.added[ee];let Oe=E.indexOf(ye);if(Oe===-1){for(let qe=0;qe<M.length;qe++)if(qe>=E.length){E.push(ye),Oe=qe;break}else if(E[qe]===null){E[qe]=ye,Oe=qe;break}if(Oe===-1)break}const be=M[Oe];be&&be.connect(ye)}}const X=new F,Q=new F;function te(Z,ee,ye){X.setFromMatrixPosition(ee.matrixWorld),Q.setFromMatrixPosition(ye.matrixWorld);const Oe=X.distanceTo(Q),be=ee.projectionMatrix.elements,qe=ye.projectionMatrix.elements,Dt=be[14]/(be[10]-1),Ye=be[14]/(be[10]+1),it=(be[9]+1)/be[5],bt=(be[9]-1)/be[5],Je=(be[8]-1)/be[0],Tt=(qe[8]+1)/qe[0],kt=Dt*Je,an=Dt*Tt,At=Oe/(-Je+Tt),Ct=At*-Je;if(ee.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ct),Z.translateZ(At),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),be[10]===-1)Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const k=Dt+At,$t=Ye+At,dt=kt-Ct,A=an+(Oe-Ct),_=it*Ye/$t*k,B=bt*Ye/$t*k;Z.projectionMatrix.makePerspective(dt,A,_,B,k,$t),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Re(Z,ee){ee===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ee.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let ee=Z.near,ye=Z.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),O.near=I.near=C.near=ee,O.far=I.far=C.far=ye,(U!==O.near||$!==O.far)&&(a.updateRenderState({depthNear:O.near,depthFar:O.far}),U=O.near,$=O.far),O.layers.mask=Z.layers.mask|6,C.layers.mask=O.layers.mask&-5,I.layers.mask=O.layers.mask&-3;const Oe=Z.parent,be=O.cameras;Re(O,Oe);for(let qe=0;qe<be.length;qe++)Re(be[qe],Oe);be.length===2?te(O,C,I):O.projectionMatrix.copy(C.projectionMatrix),S===null&&Z.isPerspectiveCamera&&(S={camera:Z,fov:Z.fov,zoom:Z.zoom}),re(Z,O,Oe)};function re(Z,ee,ye){ye===null?Z.matrix.copy(ee.matrixWorld):(Z.matrix.copy(ye.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ee.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=cl*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(Z){return h[Z]};let st=null;function je(Z,ee){if(d=ee.getViewerPose(c||s),v=ee,d!==null){const ye=d.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Oe=!1;ye.length!==O.cameras.length&&(O.cameras.length=0,Oe=!0);for(let Ye=0;Ye<ye.length;Ye++){const it=ye[Ye];let bt=null;if(p!==null)bt=p.getViewport(it);else{const Tt=f.getViewSubImage(u,it);bt=Tt.viewport,Ye===0&&(e.setRenderTargetTextures(y,Tt.colorTexture,Tt.depthStencilTexture),e.setRenderTarget(y))}let Je=w[Ye];Je===void 0&&(Je=new dn,Je.layers.enable(Ye),Je.viewport=new wt,w[Ye]=Je),Je.matrix.fromArray(it.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(it.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(bt.x,bt.y,bt.width,bt.height),Ye===0&&(O.matrix.copy(Je.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Oe===!0&&O.cameras.push(Je)}const be=a.enabledFeatures;if(be&&be.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&x){f=i.getBinding();const Ye=f.getDepthInformation(ye[0]);Ye&&Ye.isValid&&Ye.texture&&g.init(Ye,a.renderState)}if(be&&be.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let Ye=0;Ye<ye.length;Ye++){const it=ye[Ye].camera;if(it){let bt=h[it];bt||(bt=new su,h[it]=bt);const Je=f.getCameraImage(it);bt.sourceTexture=Je}}}}for(let ye=0;ye<M.length;ye++){const Oe=E[ye],be=M[ye];Oe!==null&&be!==void 0&&be.update(Oe,ee,c||s)}st&&st(Z,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),v=null}const at=new du;at.setAnimationLoop(je),this.setAnimationLoop=function(Z){st=Z},this.dispose=function(){}}}const P_=new Mt,_u=new Be;_u.set(-1,0,0,0,1,0,0,0,1);function I_(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,ou(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function a(g,h,T,P,y){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?r(g,h):h.isMeshLambertMaterial?(r(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(g,h),f(g,h)):h.isMeshPhongMaterial?(r(g,h),d(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(g,h),u(g,h),h.isMeshPhysicalMaterial&&p(g,h,y)):h.isMeshMatcapMaterial?(r(g,h),v(g,h)):h.isMeshDepthMaterial?r(g,h):h.isMeshDistanceMaterial?(r(g,h),x(g,h)):h.isMeshNormalMaterial?r(g,h):h.isLineBasicMaterial?(s(g,h),h.isLineDashedMaterial&&o(g,h)):h.isPointsMaterial?l(g,h,T,P):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===rn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===rn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const T=e.get(h),P=T.envMap,y=T.envMapRotation;P&&(g.envMap.value=P,g.envMapRotation.value.setFromMatrix4(P_.makeRotationFromEuler(y)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(_u),g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function s(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function o(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,T,P){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*T,g.scale.value=P*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function d(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function f(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function u(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,T){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===rn&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.retroreflectivity>0&&(g.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,h){h.matcap&&(g.matcap.value=h.matcap)}function x(g,h){const T=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function D_(t,e,n,i){let a={},r={},s=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const E=M.program;i.uniformBlockBinding(y,E)}function c(y,M){let E=a[y.id];E===void 0&&(g(y),E=d(y),a[y.id]=E,y.addEventListener("dispose",T));const R=M.program;i.updateUBOMapping(y,R);const m=e.render.frame;r[y.id]!==m&&(u(y),r[y.id]=m)}function d(y){const M=f();y.__bindingPointIndex=M;const E=t.createBuffer(),R=y.__size,m=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,R,m),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,E),E}function f(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const M=a[y.id],E=y.uniforms,R=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let m=0,S=E.length;m<S;m++){const C=E[m];if(Array.isArray(C))for(let I=0,w=C.length;I<w;I++)p(C[I],m,I,R);else p(C,m,0,R)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(y,M,E,R){if(x(y,M,E,R)===!0){const m=y.__offset,S=y.value;if(Array.isArray(S)){let C=0;for(let I=0;I<S.length;I++){const w=S[I],O=h(w);v(w,y.__data,C),typeof w!="number"&&typeof w!="boolean"&&!w.isMatrix3&&!ArrayBuffer.isView(w)&&(C+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(S,y.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,m,y.__data)}}function v(y,M,E){typeof y=="number"||typeof y=="boolean"?M[0]=y:y.isMatrix3?(M[0]=y.elements[0],M[1]=y.elements[1],M[2]=y.elements[2],M[3]=0,M[4]=y.elements[3],M[5]=y.elements[4],M[6]=y.elements[5],M[7]=0,M[8]=y.elements[6],M[9]=y.elements[7],M[10]=y.elements[8],M[11]=0):ArrayBuffer.isView(y)?M.set(new y.constructor(y.buffer,y.byteOffset,M.length)):y.toArray(M,E)}function x(y,M,E,R){const m=y.value,S=M+"_"+E;if(R[S]===void 0)return typeof m=="number"||typeof m=="boolean"?R[S]=m:ArrayBuffer.isView(m)?R[S]=m.slice():R[S]=m.clone(),!0;{const C=R[S];if(typeof m=="number"||typeof m=="boolean"){if(C!==m)return R[S]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(C.equals(m)===!1)return C.copy(m),!0}}return!1}function g(y){const M=y.uniforms;let E=0;const R=16;for(let S=0,C=M.length;S<C;S++){const I=Array.isArray(M[S])?M[S]:[M[S]];for(let w=0,O=I.length;w<O;w++){const U=I[w],$=Array.isArray(U.value)?U.value:[U.value];for(let Y=0,V=$.length;Y<V;Y++){const ne=$[Y],X=h(ne),Q=E%R,te=Q%X.boundary,Re=Q+te;E+=te,Re!==0&&R-Re<X.storage&&(E+=R-Re),U.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=E,E+=X.storage}}}const m=E%R;return m>0&&(E+=R-m),y.__size=E,y.__cache={},this}function h(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",y),M}function T(y){const M=y.target;M.removeEventListener("dispose",T);const E=s.indexOf(M.__bindingPointIndex);s.splice(E,1),t.deleteBuffer(a[M.id]),delete a[M.id],delete r[M.id]}function P(){for(const y in a)t.deleteBuffer(a[y]);s=[],a={},r={}}return{bind:l,update:c,dispose:P}}const N_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Cn=null;function U_(){return Cn===null&&(Cn=new xf(N_,16,16,Fi,Bn),Cn.name="DFG_LUT",Cn.minFilter=Wt,Cn.magFilter=Wt,Cn.wrapS=Jn,Cn.wrapT=Jn,Cn.generateMipmaps=!1,Cn.needsUpdate=!0),Cn}class k_{constructor(e={}){const{canvas:n=Xh(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=un}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=s;const x=p,g=new Set([Al,Tl,El]),h=new Set([un,On,Ka,Ja,Sl,Ml]),T=new Uint32Array(4),P=new Int32Array(4),y=new F;let M=null,E=null;const R=[],m=[];let S=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let I=!1,w=null,O=null,U=null,$=null;this._outputColorSpace=tn;let Y=0,V=0,ne=null,X=-1,Q=null;const te=new wt,Re=new wt;let re=null;const st=new Xe(0);let je=0,at=n.width,Z=n.height,ee=1,ye=null,Oe=null;const be=new wt(0,0,at,Z),qe=new wt(0,0,at,Z);let Dt=!1;const Ye=new Il;let it=!1,bt=!1;const Je=new Mt,Tt=new F,kt=new wt,an={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let At=!1;function Ct(){return ne===null?ee:1}let k=i;function $t(b,D){return n.getContext(b,D)}let dt,A,_,B,G,q,oe,le,K,j,ce,Ae,fe,de,we,Pe,He,N,ue,J,he,_e,ie;try{const b={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${bl}`),n.addEventListener("webglcontextlost",xt,!1),n.addEventListener("webglcontextrestored",ot,!1),n.addEventListener("webglcontextcreationerror",vn,!1),k===null){const D="webgl2";if(k=$t(D,b),k===null)throw $t(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ce()}catch(b){throw n.removeEventListener("webglcontextlost",xt,!1),n.removeEventListener("webglcontextrestored",ot,!1),n.removeEventListener("webglcontextcreationerror",vn,!1),nt("WebGLRenderer: "+b.message),b}function Ce(){dt=new Ug(k),dt.init(),he=new A_(k,dt),A=new Tg(k,dt,e,he),_=new E_(k,dt),A.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),O=k.createFramebuffer(),U=k.createFramebuffer(),$=k.createFramebuffer(),B=new Og(k),G=new d_,q=new T_(k,dt,_,G,A,he,B),oe=new Ng(C),le=new $f(k),_e=new Mg(k,le),K=new kg(k,le,B,_e),j=new $g(k,K,le,_e,B),N=new Bg(k,A,q),we=new Ag(G),ce=new c_(C,oe,dt,A,_e,we),Ae=new I_(C,G),fe=new h_,de=new v_(dt),He=new Sg(C,oe,_,j,v,l),Pe=new M_(C,j,A),ie=new D_(k,B,A,_),ue=new Eg(k,dt,B),J=new Fg(k,dt,B),B.programs=ce.programs,C.capabilities=A,C.extensions=dt,C.properties=G,C.renderLists=fe,C.shadowMap=Pe,C.state=_,C.info=B}x!==un&&(S=new Hg(x,n.width,n.height,o,a,r));const Ee=new L_(C,k);this.xr=Ee,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const b=dt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=dt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(b){b!==void 0&&(ee=b,this.setSize(at,Z,!1))},this.getSize=function(b){return b.set(at,Z)},this.setSize=function(b,D,W=!0){if(Ee.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}at=b,Z=D,n.width=Math.floor(b*ee),n.height=Math.floor(D*ee),W===!0&&(n.style.width=b+"px",n.style.height=D+"px"),S!==null&&S.setSize(n.width,n.height),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(at*ee,Z*ee).floor()},this.setDrawingBufferSize=function(b,D,W){at=b,Z=D,ee=W,n.width=Math.floor(b*W),n.height=Math.floor(D*W),this.setViewport(0,0,b,D)},this.setEffects=function(b){if(x===un){nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let D=0;D<b.length;D++)if(b[D].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(te)},this.getViewport=function(b){return b.copy(be)},this.setViewport=function(b,D,W,z){b.isVector4?be.set(b.x,b.y,b.z,b.w):be.set(b,D,W,z),_.viewport(te.copy(be).multiplyScalar(ee).round())},this.getScissor=function(b){return b.copy(qe)},this.setScissor=function(b,D,W,z){b.isVector4?qe.set(b.x,b.y,b.z,b.w):qe.set(b,D,W,z),_.scissor(Re.copy(qe).multiplyScalar(ee).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(b){_.setScissorTest(Dt=b)},this.setOpaqueSort=function(b){ye=b},this.setTransparentSort=function(b){Oe=b},this.getClearColor=function(b){return b.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(b=!0,D=!0,W=!0){let z=0;if(b){let H=!1;if(ne!==null){const ge=ne.texture.format;H=g.has(ge)}if(H){const ge=ne.texture.type,xe=h.has(ge),me=He.getClearColor(),Se=He.getClearAlpha(),Te=me.r,Ve=me.g,Ze=me.b;xe?(T[0]=Te,T[1]=Ve,T[2]=Ze,T[3]=Se,k.clearBufferuiv(k.COLOR,0,T)):(P[0]=Te,P[1]=Ve,P[2]=Ze,P[3]=Se,k.clearBufferiv(k.COLOR,0,P))}else z|=k.COLOR_BUFFER_BIT}D&&(z|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&k.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),w=b},this.dispose=function(){n.removeEventListener("webglcontextlost",xt,!1),n.removeEventListener("webglcontextrestored",ot,!1),n.removeEventListener("webglcontextcreationerror",vn,!1),He.dispose(),fe.dispose(),de.dispose(),G.dispose(),oe.dispose(),j.dispose(),_e.dispose(),ie.dispose(),ce.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Kl),Ee.removeEventListener("sessionend",Jl),Mi.stop()};function xt(b){b.preventDefault(),os("WebGLRenderer: Context Lost."),I=!0}function ot(){os("WebGLRenderer: Context Restored."),I=!1;const b=B.autoReset,D=Pe.enabled,W=Pe.autoUpdate,z=Pe.needsUpdate,H=Pe.type;Ce(),B.autoReset=b,Pe.enabled=D,Pe.autoUpdate=W,Pe.needsUpdate=z,Pe.type=H}function vn(b){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function An(b){const D=b.target;D.removeEventListener("dispose",An),th(D)}function th(b){nh(b),G.remove(b)}function nh(b){const D=G.get(b).programs;D!==void 0&&(D.forEach(function(W){ce.releaseProgram(W)}),b.isShaderMaterial&&ce.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,W,z,H,ge){D===null&&(D=an);const xe=H.isMesh&&H.matrixWorld.determinantAffine()<0,me=rh(b,D,W,z,H);_.setMaterial(z,xe);let Se=W.index,Te=1;if(z.wireframe===!0){if(Se=K.getWireframeAttribute(W),Se===void 0)return;Te=2}const Ve=W.drawRange,Ze=W.attributes.position;let Me=Ve.start*Te,lt=(Ve.start+Ve.count)*Te;ge!==null&&(Me=Math.max(Me,ge.start*Te),lt=Math.min(lt,(ge.start+ge.count)*Te)),Se!==null?(Me=Math.max(Me,0),lt=Math.min(lt,Se.count)):Ze!=null&&(Me=Math.max(Me,0),lt=Math.min(lt,Ze.count));const Lt=lt-Me;if(Lt<0||Lt===1/0)return;_e.setup(H,z,me,W,Se);let Et,gt=ue;if(Se!==null&&(Et=le.get(Se),gt=J,gt.setIndex(Et)),H.isMesh)z.wireframe===!0?(_.setLineWidth(z.wireframeLinewidth*Ct()),gt.setMode(k.LINES)):gt.setMode(k.TRIANGLES);else if(H.isLine){let zt=z.linewidth;zt===void 0&&(zt=1),_.setLineWidth(zt*Ct()),H.isLineSegments?gt.setMode(k.LINES):H.isLineLoop?gt.setMode(k.LINE_LOOP):gt.setMode(k.LINE_STRIP)}else H.isPoints?gt.setMode(k.POINTS):H.isSprite&&gt.setMode(k.TRIANGLES);if(H.isBatchedMesh)if(dt.get("WEBGL_multi_draw"))gt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const zt=H._multiDrawStarts,ve=H._multiDrawCounts,Qt=H._multiDrawCount,tt=Se?le.get(Se).bytesPerElement:1,hn=G.get(z).currentProgram.getUniforms();for(let wn=0;wn<Qt;wn++)hn.setValue(k,"_gl_DrawID",wn),gt.render(zt[wn]/tt,ve[wn])}else if(H.isInstancedMesh)gt.renderInstances(Me,Lt,H.count);else if(W.isInstancedBufferGeometry){const zt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ve=Math.min(W.instanceCount,zt);gt.renderInstances(Me,Lt,ve)}else gt.render(Me,Lt)};function Zl(b,D,W,z){w!==null&&b.isNodeMaterial&&w.setObject(z,b),it===!0&&we.setState(b,W,!1),b.transparent===!0&&b.side===Yn&&b.forceSinglePass===!1?(b.side=rn,b.needsUpdate=!0,_r(b,D,z),b.side=Ui,b.needsUpdate=!0,_r(b,D,z),b.side=Yn):_r(b,D,z)}this.compile=function(b,D,W=null){W===null&&(W=b),w!==null&&w.renderStart(b,D,W),E=de.get(W),E.init(D),m.push(E),W.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),b!==W&&b.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),E.setupLights(),w!==null&&w.updateLights(E.state.lightsArray),bt=this.localClippingEnabled,it=we.init(this.clippingPlanes,bt),it===!0&&we.setGlobalState(this.clippingPlanes,D),w!==null&&Pe.render(E.state.shadowsArray,W,D);const z=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ge=H.material;if(ge)if(Array.isArray(ge))for(let xe=0;xe<ge.length;xe++){const me=ge[xe];Zl(me,W,D,H),z.add(me)}else Zl(ge,W,D,H),z.add(ge)}),E=m.pop(),w!==null&&w.renderEnd(),z},this.compileAsync=function(b,D,W=null){const z=this.compile(b,D,W);return new Promise(H=>{function ge(){if(z.forEach(function(xe){const Se=G.get(xe).currentProgram;(Se===void 0||Se.isReady())&&z.delete(xe)}),z.size===0){H(b);return}setTimeout(ge,10)}dt.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Rs=null;function ih(b){Rs&&Rs(b)}function Kl(){Mi.stop()}function Jl(){Mi.start()}const Mi=new du;Mi.setAnimationLoop(ih),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(b){Rs=b,Ee.setAnimationLoop(b),b===null?Mi.stop():Mi.start()},Ee.addEventListener("sessionstart",Kl),Ee.addEventListener("sessionend",Jl),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;w!==null&&w.renderStart(b,D);const W=Ee.enabled===!0&&Ee.isPresenting===!0,z=S!==null&&(ne===null||W)&&S.begin(C,ne);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(D),D=Ee.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,D,ne),E=de.get(b,m.length),E.init(D),E.state.textureUnits=q.getTextureUnits(),m.push(E),Je.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Ye.setFromProjectionMatrix(Je,Un,D.reversedDepth),bt=this.localClippingEnabled,it=we.init(this.clippingPlanes,bt),M=fe.get(b,R.length),M.init(),R.push(M),Ee.enabled===!0&&Ee.isPresenting===!0){const xe=C.xr.getDepthSensingMesh();xe!==null&&Cs(xe,D,-1/0,C.sortObjects)}Cs(b,D,0,C.sortObjects),M.finish(),w!==null&&w.updateLights(E.state.lightsArray),C.sortObjects===!0&&M.sort(ye,Oe),At=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,At&&He.addToRenderList(M,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),it===!0&&we.beginShadows();const H=E.state.shadowsArray;if(Pe.render(H,b,D),it===!0&&we.endShadows(),(z&&S.hasRenderPass())===!1){const xe=M.opaque,me=M.transmissive;if(E.setupLights(),D.isArrayCamera){const Se=D.cameras;if(me.length>0)for(let Te=0,Ve=Se.length;Te<Ve;Te++){const Ze=Se[Te];jl(xe,me,b,Ze)}At&&He.render(b);for(let Te=0,Ve=Se.length;Te<Ve;Te++){const Ze=Se[Te];Ql(M,b,Ze,Ze.viewport)}}else me.length>0&&jl(xe,me,b,D),At&&He.render(b),Ql(M,b,D)}ne!==null&&V===0&&(q.updateMultisampleRenderTarget(ne),q.updateRenderTargetMipmap(ne)),z&&S.end(C),b.isScene===!0&&b.onAfterRender(C,b,D),_e.resetDefaultState(),X=-1,Q=null,m.pop(),m.length>0?(E=m[m.length-1],q.setTextureUnits(E.state.textureUnits),it===!0&&we.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?M=R[R.length-1]:M=null,w!==null&&w.renderEnd()};function Cs(b,D,W,z){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLightProbeGrid)E.pushLightProbeGrid(b);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(Ye)){z&&kt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Je);const xe=j.update(b),me=b.material;me.visible&&M.push(b,xe,me,W,kt.z,null,D)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(Ye))){const xe=j.update(b),me=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),kt.copy(b.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),kt.copy(xe.boundingSphere.center)),kt.applyMatrix4(b.matrixWorld).applyMatrix4(Je)),Array.isArray(me)){const Se=xe.groups;for(let Te=0,Ve=Se.length;Te<Ve;Te++){const Ze=Se[Te],Me=me[Ze.materialIndex];Me&&Me.visible&&M.push(b,xe,Me,W,kt.z,Ze,D)}}else me.visible&&M.push(b,xe,me,W,kt.z,null,D)}}const ge=b.children;for(let xe=0,me=ge.length;xe<me;xe++)Cs(ge[xe],D,W,z)}function Ql(b,D,W,z){const{opaque:H,transmissive:ge,transparent:xe}=b;E.setupLightsView(W),it===!0&&we.setGlobalState(C.clippingPlanes,W),z&&_.viewport(te.copy(z)),H.length>0&&gr(H,D,W),ge.length>0&&gr(ge,D,W),xe.length>0&&gr(xe,D,W),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function jl(b,D,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[z.id]===void 0){const Me=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[z.id]=new En(1,1,{generateMipmaps:!0,type:Me?Bn:un,minFilter:Li,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:et.workingColorSpace})}const ge=E.state.transmissionRenderTarget[z.id],xe=z.viewport||te;ge.setSize(xe.z*C.transmissionResolutionScale,xe.w*C.transmissionResolutionScale);const me=C.getRenderTarget(),Se=C.getActiveCubeFace(),Te=C.getActiveMipmapLevel();C.setRenderTarget(ge),C.getClearColor(st),je=C.getClearAlpha(),je<1&&C.setClearColor(16777215,.5),C.clear(),At&&He.render(W);const Ve=C.toneMapping;C.toneMapping=kn;const Ze=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),E.setupLightsView(z),it===!0&&we.setGlobalState(C.clippingPlanes,z),gr(b,W,z),q.updateMultisampleRenderTarget(ge),q.updateRenderTargetMipmap(ge),dt.has("WEBGL_multisampled_render_to_texture")===!1){let Me=!1;for(let lt=0,Lt=D.length;lt<Lt;lt++){const Et=D[lt],{object:gt,geometry:zt,material:ve,group:Qt}=Et;if(ve.side===Yn&&gt.layers.test(z.layers)){const tt=ve.side;ve.side=rn,ve.needsUpdate=!0,ec(gt,W,z,zt,ve,Qt),ve.side=tt,ve.needsUpdate=!0,Me=!0}}Me===!0&&(q.updateMultisampleRenderTarget(ge),q.updateRenderTargetMipmap(ge))}C.setRenderTarget(me,Se,Te),C.setClearColor(st,je),Ze!==void 0&&(z.viewport=Ze),C.toneMapping=Ve}function gr(b,D,W){const z=D.isScene===!0?D.overrideMaterial:null;for(let H=0,ge=b.length;H<ge;H++){const xe=b[H],{object:me,geometry:Se,group:Te}=xe;let Ve=xe.material;Ve.allowOverride===!0&&z!==null&&(Ve=z),me.layers.test(W.layers)&&ec(me,D,W,Se,Ve,Te)}}function ec(b,D,W,z,H,ge){w!==null&&H.isNodeMaterial&&w.setObject(b,H),b.onBeforeRender(C,D,W,z,H,ge),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(C,D,W,z,b,ge),H.transparent===!0&&H.side===Yn&&H.forceSinglePass===!1?(H.side=rn,H.needsUpdate=!0,C.renderBufferDirect(W,D,z,H,b,ge),H.side=Ui,H.needsUpdate=!0,C.renderBufferDirect(W,D,z,H,b,ge),H.side=Yn):C.renderBufferDirect(W,D,z,H,b,ge),b.onAfterRender(C,D,W,z,H,ge)}function _r(b,D,W){D.isScene!==!0&&(D=an);const z=G.get(b),H=E.state.lights,ge=E.state.shadowsArray,xe=H.state.version,me=ce.getParameters(b,H.state,ge,D,W,E.state.lightProbeGridArray),Se=ce.getProgramCacheKey(me);let Te=z.programs;z.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?D.environment:null,z.fog=D.fog;const Ve=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;z.envMap=oe.get(b.envMap||z.environment,Ve),z.envMapRotation=z.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,Te===void 0&&(b.addEventListener("dispose",An),Te=new Map,z.programs=Te);let Ze=Te.get(Se);if(Ze!==void 0){if(z.currentProgram===Ze&&z.lightsStateVersion===xe)return nc(b,me),Ze}else me.uniforms=ce.getUniforms(b),w!==null&&b.isNodeMaterial&&w.build(b,W,me),b.onBeforeCompile(me,C),Ze=ce.acquireProgram(me,Se),Te.set(Se,Ze),z.uniforms=me.uniforms;const Me=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Me.clippingPlanes=we.uniform),nc(b,me),z.needsLights=oh(b),z.lightsStateVersion=xe,z.needsLights&&(Me.ambientLightColor.value=H.state.ambient,Me.lightProbe.value=H.state.probe,Me.sunLights.value=H.state.sun,Me.sunLightShadows.value=H.state.sunShadow,Me.directionalLights.value=H.state.directional,Me.directionalLightShadows.value=H.state.directionalShadow,Me.spotLights.value=H.state.spot,Me.spotLightShadows.value=H.state.spotShadow,Me.rectAreaLights.value=H.state.rectArea,Me.ltc_1.value=H.state.rectAreaLTC1,Me.ltc_2.value=H.state.rectAreaLTC2,Me.pointLights.value=H.state.point,Me.pointLightShadows.value=H.state.pointShadow,Me.hemisphereLights.value=H.state.hemi,Me.sunShadowMatrix.value=H.state.sunShadowMatrix,Me.sunShadowCascade.value=H.state.sunShadowCascade,Me.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Me.spotLightMatrix.value=H.state.spotLightMatrix,Me.spotLightMap.value=H.state.spotLightMap,Me.pointShadowMatrix.value=H.state.pointShadowMatrix),z.lightProbeGrid=E.state.lightProbeGridArray.length>0,z.currentProgram=Ze,z.uniformsList=null,Ze}function tc(b){if(b.uniformsList===null){const D=b.currentProgram.getUniforms();b.uniformsList=ts.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function nc(b,D){const W=G.get(b);W.outputColorSpace=D.outputColorSpace,W.batching=D.batching,W.batchingColor=D.batchingColor,W.instancing=D.instancing,W.instancingColor=D.instancingColor,W.instancingMorph=D.instancingMorph,W.skinning=D.skinning,W.morphTargets=D.morphTargets,W.morphNormals=D.morphNormals,W.morphColors=D.morphColors,W.morphTargetsCount=D.morphTargetsCount,W.numClippingPlanes=D.numClippingPlanes,W.numIntersection=D.numClipIntersection,W.vertexAlphas=D.vertexAlphas,W.vertexTangents=D.vertexTangents,W.toneMapping=D.toneMapping}function ah(b,D){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;y.setFromMatrixPosition(D.matrixWorld);for(let W=0,z=b.length;W<z;W++){const H=b[W];if(H.texture!==null&&H.boundingBox.containsPoint(y))return H}return null}function rh(b,D,W,z,H){D.isScene!==!0&&(D=an),q.resetTextureUnits();const ge=D.fog,xe=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?D.environment:null,me=ne===null?C.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:et.workingColorSpace,Se=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Te=oe.get(z.envMap||xe,Se),Ve=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ze=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Me=!!W.morphAttributes.position,lt=!!W.morphAttributes.normal,Lt=!!W.morphAttributes.color;let Et=kn;z.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Et=C.toneMapping);const gt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,zt=gt!==void 0?gt.length:0,ve=G.get(z),Qt=E.state.lights;if(it===!0&&(bt===!0||b!==Q)){const yt=b===Q&&z.id===X;we.setState(z,b,yt)}let tt=!1;z.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==Qt.state.version||ve.outputColorSpace!==me||H.isBatchedMesh&&ve.batching===!1||!H.isBatchedMesh&&ve.batching===!0||H.isBatchedMesh&&ve.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&ve.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&ve.instancing===!1||!H.isInstancedMesh&&ve.instancing===!0||H.isSkinnedMesh&&ve.skinning===!1||!H.isSkinnedMesh&&ve.skinning===!0||H.isInstancedMesh&&ve.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ve.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ve.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ve.instancingMorph===!1&&H.morphTexture!==null||ve.envMap!==Te||z.fog===!0&&ve.fog!==ge||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==we.numPlanes||ve.numIntersection!==we.numIntersection)||ve.vertexAlphas!==Ve||ve.vertexTangents!==Ze||ve.morphTargets!==Me||ve.morphNormals!==lt||ve.morphColors!==Lt||ve.toneMapping!==Et||ve.morphTargetsCount!==zt||!!ve.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(tt=!0):(tt=!0,ve.__version=z.version);let hn=ve.currentProgram;tt===!0&&(hn=_r(z,D,H),w&&z.isNodeMaterial&&w.onUpdateProgram(z,hn,ve));let wn=!1,ai=!1,Hi=!1;const ft=hn.getUniforms(),Rt=ve.uniforms;if(_.useProgram(hn.program)&&(wn=!0,ai=!0,Hi=!0),z.id!==X&&(X=z.id,ai=!0),ve.needsLights){const yt=ah(E.state.lightProbeGridArray,H);ve.lightProbeGrid!==yt&&(ve.lightProbeGrid=yt,ai=!0)}if(wn||Q!==b){_.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ft.setValue(k,"projectionMatrix",b.projectionMatrix),ft.setValue(k,"viewMatrix",b.matrixWorldInverse);const si=ft.map.cameraPosition;si!==void 0&&si.setValue(k,Tt.setFromMatrixPosition(b.matrixWorld)),A.logarithmicDepthBuffer&&ft.setValue(k,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ft.setValue(k,"isOrthographic",b.isOrthographicCamera===!0),Q!==b&&(Q=b,ai=!0,Hi=!0)}if(ve.needsLights&&(Qt.state.sunShadowMap.length>0&&ft.setValue(k,"sunShadowMap",Qt.state.sunShadowMap,q),Qt.state.directionalShadowMap.length>0&&ft.setValue(k,"directionalShadowMap",Qt.state.directionalShadowMap,q),Qt.state.spotShadowMap.length>0&&ft.setValue(k,"spotShadowMap",Qt.state.spotShadowMap,q),Qt.state.pointShadowMap.length>0&&ft.setValue(k,"pointShadowMap",Qt.state.pointShadowMap,q)),H.isSkinnedMesh){ft.setOptional(k,H,"bindMatrix"),ft.setOptional(k,H,"bindMatrixInverse");const yt=H.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),ft.setValue(k,"boneTexture",yt.boneTexture,q))}H.isBatchedMesh&&(ft.setOptional(k,H,"batchingTexture"),ft.setValue(k,"batchingTexture",H._matricesTexture,q),ft.setOptional(k,H,"batchingIdTexture"),ft.setValue(k,"batchingIdTexture",H._indirectTexture,q),ft.setOptional(k,H,"batchingColorTexture"),H._colorsTexture!==null&&ft.setValue(k,"batchingColorTexture",H._colorsTexture,q));const ri=W.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&N.update(H,W,hn),(ai||ve.receiveShadow!==H.receiveShadow)&&(ve.receiveShadow=H.receiveShadow,ft.setValue(k,"receiveShadow",H.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&D.environment!==null&&(Rt.envMapIntensity.value=D.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=U_()),ai){if(ft.setValue(k,"toneMappingExposure",C.toneMappingExposure),ve.needsLights&&sh(Rt,Hi),ge&&z.fog===!0&&Ae.refreshFogUniforms(Rt,ge),Ae.refreshMaterialUniforms(Rt,z,ee,Z,E.state.transmissionRenderTarget[b.id]),ve.needsLights&&ve.lightProbeGrid){const yt=ve.lightProbeGrid;Rt.probesSH.value=yt.texture,Rt.probesMin.value.copy(yt.boundingBox.min),Rt.probesMax.value.copy(yt.boundingBox.max),Rt.probesResolution.value.copy(yt.resolution)}ts.upload(k,tc(ve),Rt,q)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ts.upload(k,tc(ve),Rt,q),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ft.setValue(k,"center",H.center),ft.setValue(k,"modelViewMatrix",H.modelViewMatrix),ft.setValue(k,"normalMatrix",H.normalMatrix),ft.setValue(k,"modelMatrix",H.matrixWorld),z.uniformsGroups!==void 0){const yt=z.uniformsGroups;for(let si=0,Gi=yt.length;si<Gi;si++){const ac=yt[si];ie.update(ac,hn),ie.bind(ac,hn)}}return hn}function sh(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.sunLights.needsUpdate=D,b.sunLightShadows.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function oh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(b,D,W){const z=G.get(b);z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),G.get(b.texture).__webglTexture=D,G.get(b.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,D){const W=G.get(b);W.__webglFramebuffer=D,W.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,W=0){ne=b,Y=D,V=W;let z=null,H=!1,ge=!1;if(b){const me=G.get(b);if(me.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(k.FRAMEBUFFER,me.__webglFramebuffer),te.copy(b.viewport),Re.copy(b.scissor),re=b.scissorTest,_.viewport(te),_.scissor(Re),_.setScissorTest(re),X=-1;return}else if(me.__webglFramebuffer===void 0)q.setupRenderTarget(b);else if(me.__hasExternalTextures)q.rebindTextures(b,G.get(b.texture).__webglTexture,G.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ve=b.depthTexture;if(me.__boundDepthTexture!==Ve){if(Ve!==null&&G.has(Ve)&&(b.width!==Ve.image.width||b.height!==Ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(b)}}const Se=b.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(ge=!0);const Te=G.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Te[D])?z=Te[D][W]:z=Te[D],H=!0):b.samples>0&&q.useMultisampledRTT(b)===!1?z=G.get(b).__webglMultisampledFramebuffer:Array.isArray(Te)?z=Te[W]:z=Te,te.copy(b.viewport),Re.copy(b.scissor),re=b.scissorTest}else te.copy(be).multiplyScalar(ee).floor(),Re.copy(qe).multiplyScalar(ee).floor(),re=Dt;if(W!==0&&(z=O),_.bindFramebuffer(k.FRAMEBUFFER,z)&&_.drawBuffers(b,z),_.viewport(te),_.scissor(Re),_.setScissorTest(re),H){const me=G.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+D,me.__webglTexture,W)}else if(ge){const me=D;for(let Se=0;Se<b.textures.length;Se++){const Te=G.get(b.textures[Se]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Se,Te.__webglTexture,W,me)}}else if(b!==null&&W!==0){const me=G.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,me.__webglTexture,W)}X=-1};function ic(b){const D=G.get(b);return(D.__readFormat!==b.format||D.__readType!==b.type)&&(D.__readFormat=b.format,D.__readType=b.type,D.__formatReadable=A.textureFormatReadable(b.format),D.__typeReadable=A.textureTypeReadable(b.type)),D}this.readRenderTargetPixels=function(b,D,W,z,H,ge,xe,me=0){if(!(b&&b.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=G.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xe!==void 0&&(Se=Se[xe]),Se){_.bindFramebuffer(k.FRAMEBUFFER,Se);try{const Te=b.textures[me],Ve=Te.format,Ze=Te.type;b.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+me);const Me=ic(Te);if(Me.__formatReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Me.__typeReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-z&&W>=0&&W<=b.height-H&&k.readPixels(D,W,z,H,he.convert(Ve),he.convert(Ze),ge)}finally{const Te=ne!==null?G.get(ne).__webglFramebuffer:null;_.bindFramebuffer(k.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(b,D,W,z,H,ge,xe,me=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=G.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xe!==void 0&&(Se=Se[xe]),Se)if(D>=0&&D<=b.width-z&&W>=0&&W<=b.height-H){_.bindFramebuffer(k.FRAMEBUFFER,Se);const Te=b.textures[me],Ve=Te.format,Ze=Te.type;b.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+me);const Me=ic(Te);if(Me.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Me.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const lt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,lt),k.bufferData(k.PIXEL_PACK_BUFFER,ge.byteLength,k.STREAM_READ),k.readPixels(D,W,z,H,he.convert(Ve),he.convert(Ze),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);const Lt=ne!==null?G.get(ne).__webglFramebuffer:null;_.bindFramebuffer(k.FRAMEBUFFER,Lt);const Et=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await qh(k,Et,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,lt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ge),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(lt),k.deleteSync(Et),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,D=null,W=0){const z=Math.pow(2,-W),H=Math.floor(b.image.width*z),ge=Math.floor(b.image.height*z),xe=D!==null?D.x:0,me=D!==null?D.y:0;q.setTexture2D(b,0),k.copyTexSubImage2D(k.TEXTURE_2D,W,0,0,xe,me,H,ge),_.unbindTexture()},this.copyTextureToTexture=function(b,D,W=null,z=null,H=0,ge=0){let xe,me,Se,Te,Ve,Ze,Me,lt,Lt;const Et=b.isCompressedTexture?b.mipmaps[ge]:b.image;if(W!==null)xe=W.max.x-W.min.x,me=W.max.y-W.min.y,Se=W.isBox3?W.max.z-W.min.z:1,Te=W.min.x,Ve=W.min.y,Ze=W.isBox3?W.min.z:0;else{const Rt=Math.pow(2,-H);xe=Math.floor(Et.width*Rt),me=Math.floor(Et.height*Rt),b.isDataArrayTexture?Se=Et.depth:b.isData3DTexture?Se=Math.floor(Et.depth*Rt):Se=1,Te=0,Ve=0,Ze=0}z!==null?(Me=z.x,lt=z.y,Lt=z.z):(Me=0,lt=0,Lt=0);const gt=he.convert(D.format),zt=he.convert(D.type);let ve;D.isData3DTexture?(q.setTexture3D(D,0),ve=k.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(q.setTexture2DArray(D,0),ve=k.TEXTURE_2D_ARRAY):(q.setTexture2D(D,0),ve=k.TEXTURE_2D),_.activeTexture(k.TEXTURE0),_.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,D.flipY),_.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),_.pixelStorei(k.UNPACK_ALIGNMENT,D.unpackAlignment);const Qt=_.getParameter(k.UNPACK_ROW_LENGTH),tt=_.getParameter(k.UNPACK_IMAGE_HEIGHT),hn=_.getParameter(k.UNPACK_SKIP_PIXELS),wn=_.getParameter(k.UNPACK_SKIP_ROWS),ai=_.getParameter(k.UNPACK_SKIP_IMAGES);_.pixelStorei(k.UNPACK_ROW_LENGTH,Et.width),_.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Et.height),_.pixelStorei(k.UNPACK_SKIP_PIXELS,Te),_.pixelStorei(k.UNPACK_SKIP_ROWS,Ve),_.pixelStorei(k.UNPACK_SKIP_IMAGES,Ze);const Hi=b.isDataArrayTexture||b.isData3DTexture,ft=D.isDataArrayTexture||D.isData3DTexture;if(b.isDepthTexture){const Rt=G.get(b),ri=G.get(D),yt=G.get(Rt.__renderTarget),si=G.get(ri.__renderTarget);_.bindFramebuffer(k.READ_FRAMEBUFFER,yt.__webglFramebuffer),_.bindFramebuffer(k.DRAW_FRAMEBUFFER,si.__webglFramebuffer);for(let Gi=0;Gi<Se;Gi++)Hi&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,G.get(b).__webglTexture,H,Ze+Gi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,G.get(D).__webglTexture,ge,Lt+Gi)),k.blitFramebuffer(Te,Ve,xe,me,Me,lt,xe,me,k.DEPTH_BUFFER_BIT,k.NEAREST);_.bindFramebuffer(k.READ_FRAMEBUFFER,null),_.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(H!==0||b.isRenderTargetTexture||G.has(b)){const Rt=G.get(b),ri=G.get(D);_.bindFramebuffer(k.READ_FRAMEBUFFER,U),_.bindFramebuffer(k.DRAW_FRAMEBUFFER,$);for(let yt=0;yt<Se;yt++)Hi?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Rt.__webglTexture,H,Ze+yt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Rt.__webglTexture,H),ft?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ri.__webglTexture,ge,Lt+yt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ri.__webglTexture,ge),H!==0?k.blitFramebuffer(Te,Ve,xe,me,Me,lt,xe,me,k.COLOR_BUFFER_BIT,k.NEAREST):ft?k.copyTexSubImage3D(ve,ge,Me,lt,Lt+yt,Te,Ve,xe,me):k.copyTexSubImage2D(ve,ge,Me,lt,Te,Ve,xe,me);_.bindFramebuffer(k.READ_FRAMEBUFFER,null),_.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ft?b.isDataTexture||b.isData3DTexture?k.texSubImage3D(ve,ge,Me,lt,Lt,xe,me,Se,gt,zt,Et.data):D.isCompressedArrayTexture?k.compressedTexSubImage3D(ve,ge,Me,lt,Lt,xe,me,Se,gt,Et.data):k.texSubImage3D(ve,ge,Me,lt,Lt,xe,me,Se,gt,zt,Et):b.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,ge,Me,lt,xe,me,gt,zt,Et.data):b.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,ge,Me,lt,Et.width,Et.height,gt,Et.data):k.texSubImage2D(k.TEXTURE_2D,ge,Me,lt,xe,me,gt,zt,Et);_.pixelStorei(k.UNPACK_ROW_LENGTH,Qt),_.pixelStorei(k.UNPACK_IMAGE_HEIGHT,tt),_.pixelStorei(k.UNPACK_SKIP_PIXELS,hn),_.pixelStorei(k.UNPACK_SKIP_ROWS,wn),_.pixelStorei(k.UNPACK_SKIP_IMAGES,ai),ge===0&&D.generateMipmaps&&k.generateMipmap(ve),_.unbindTexture()},this.initRenderTarget=function(b){G.get(b).__webglFramebuffer===void 0&&q.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?q.setTextureCube(b,0):b.isData3DTexture?q.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?q.setTexture2DArray(b,0):q.setTexture2D(b,0),_.unbindTexture()},this.resetState=function(){Y=0,V=0,ne=null,_.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),n.unpackColorSpace=et._getUnpackColorSpace()}}const mo={shinminato:{sky:658702,fog:1054489,ground:790802,building:["#0e1414","#111919","#0a1010"],window:["#d7c9a9","#c94835","#4c7773"],neon:[14170154,4951945],accent:14170154,ambient:5069915,fogDensity:.018,rain:.9},kirimi:{sky:724236,fog:1711386,ground:856078,building:["#111511","#171b16","#0b0f0c"],window:["#d4c7aa","#a44632","#5b7364"],neon:[12008748,6130546],accent:12864052,ambient:5464154,fogDensity:.032,rain:.55},tokoyo:{sky:789003,fog:1577242,ground:1117457,building:["#171016","#1d121b","#100b10"],window:["#e1d3b7","#d84935","#b24b9c","#4e7f9a"],neon:[14826029,13912730,5020592],accent:14826029,ambient:5982811,fogDensity:.015,rain:1.1},tetsuhara:{sky:723721,fog:1775891,ground:1184013,building:["#15130f","#1c1913","#0e0d0a"],window:["#cdbf9d","#b34a2c","#7c6b42"],neon:[13060138,12687941],accent:13060138,ambient:6051141,fogDensity:.021,rain:.6},shirasagi:{sky:658446,fog:1317149,ground:856339,building:["#101519","#141b20","#0a0e11"],window:["#dfd3b9","#b44d3d","#4d7d9c"],neon:[13582640,6000552],accent:13582640,ambient:5201768,fogDensity:.016,rain:.7},amatsuka:{sky:723723,fog:1513237,ground:921100,building:["#121210","#171714","#0b0b0a"],window:["#d6c8a9","#b94a33","#54716d"],neon:[13386288,5340279],accent:13386288,ambient:5264721,fogDensity:.026,rain:1.4}},F_={shinminato:"docks",kirimi:"alley",tokoyo:"street",tetsuhara:"docks",shirasagi:"street",amatsuka:"alley"};function O_(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}function B_(t){let e=t>>>0;return()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function qr(t,e){const n=document.createElement("canvas");n.width=128,n.height=256;const i=n.getContext("2d");i.fillStyle=t.building[Math.floor(e()*t.building.length)],i.fillRect(0,0,128,256),i.fillStyle="rgba(0,0,0,0.32)";for(let r=0;r<256;r+=18)i.fillRect(0,r,128,2);for(let r=14;r<246;r+=22)for(let s=10;s<118;s+=18)if(e()<.56){const o=t.window[Math.floor(e()*t.window.length)];i.globalAlpha=.3+e()*.7,i.fillStyle=o,i.fillRect(s,r,8,10)}i.globalAlpha=.5,i.fillStyle=t.window[1],i.fillRect(6,0,2,256),i.globalAlpha=1;const a=new ru(n);return a.colorSpace=tn,a.anisotropy=2,a}function $_(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d"),n=e.createRadialGradient(64,64,2,64,64,62);n.addColorStop(0,"rgba(233,224,207,0.95)"),n.addColorStop(.7,"rgba(233,224,207,0.75)"),n.addColorStop(1,"rgba(233,224,207,0)"),e.fillStyle=n,e.fillRect(0,0,128,128);const i=new ru(t);return i.colorSpace=tn,i}class z_{constructor(){ct(this,"renderer");ct(this,"scene",new df);ct(this,"camera");ct(this,"clock",new Of);ct(this,"group",new Ba);ct(this,"rain",null);ct(this,"rainPositions",null);ct(this,"rainSpeed",.04);ct(this,"container",null);ct(this,"cityKey","");ct(this,"encroachment",0);ct(this,"reduced",!1);ct(this,"raf",0);ct(this,"redLight",null);ct(this,"textureCache",[]);ct(this,"disposed",!1);ct(this,"pointer",{x:0,y:0});ct(this,"baseCamera",new F(0,3.4,11));ct(this,"palette",mo.shinminato);ct(this,"onPointer",e=>{this.reduced||(this.pointer.x=(e.clientX/Math.max(1,window.innerWidth)-.5)*2,this.pointer.y=(e.clientY/Math.max(1,window.innerHeight)-.5)*2)});ct(this,"animate",()=>{if(this.disposed||(this.raf=requestAnimationFrame(this.animate),!this.container||!this.renderer.domElement.isConnected))return;const e=Math.min(.05,this.clock.getDelta()),n=this.clock.elapsedTime;if(this.reduced||(this.camera.position.x=this.baseCamera.x+Math.sin(n*.08)*.6+this.pointer.x*.7,this.camera.position.y=this.baseCamera.y+Math.cos(n*.11)*.18-this.pointer.y*.25,this.camera.lookAt(this.pointer.x*2.2,4.2+this.pointer.y*.4,-42)),this.rain&&this.rainPositions){const i=this.rainPositions;for(let a=0;a<i.length;a+=3)i[a+1]-=this.rainSpeed*(this.reduced?0:60)*e,i[a+1]<-.5&&(i[a+1]=34,i[a]=(Math.random()-.5)*70);this.rain.geometry.getAttribute("position").needsUpdate=!0}this.redLight&&(this.redLight.intensity=2.2+Math.min(this.encroachment,140)/32+(this.encroachment>=100?Math.sin(n*9)*.6:0)),this.renderer.render(this.scene,this.camera)});this.renderer=new k_({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.outputColorSpace=tn,this.renderer.toneMapping=xl,this.renderer.toneMappingExposure=1.05,this.camera=new dn(55,1,.1,260),this.camera.position.copy(this.baseCamera),this.camera.lookAt(0,4.2,-40),this.scene.add(this.group),window.addEventListener("pointermove",this.onPointer,{passive:!0}),this.animate()}mount(e,n,i,a,r){this.disposed||(this.container!==e&&(this.container=e,e.appendChild(this.renderer.domElement),this.resize()),this.cityKey!==`${n}:${i}`&&(this.cityKey=`${n}:${i}`,this.build(n,i)),this.encroachment=a,this.reduced=r,this.redLight&&(this.redLight.intensity=2.2+Math.min(a,140)/32),this.resize())}resize(){if(!this.container)return;const e=this.container.getBoundingClientRect(),n=Math.max(1,Math.floor(e.width)),i=Math.max(1,Math.floor(e.height));(this.renderer.domElement.width!==n*this.renderer.getPixelRatio()||this.renderer.domElement.height!==i*this.renderer.getPixelRatio())&&(this.renderer.setSize(n,i,!1),this.camera.aspect=n/i,this.camera.updateProjectionMatrix())}build(e,n){for(;this.group.children.length;)this.group.children.pop().traverse(T=>{if(T instanceof _t||T instanceof Lc||T instanceof Ic){T.geometry?.dispose();const P=T.material;Array.isArray(P)?P.forEach(y=>y.dispose()):P?.dispose()}});for(const h of this.textureCache)h.dispose();this.textureCache=[],this.scene.fog=null,this.redLight=null,this.rain=null,this.rainPositions=null;const i=mo[e]??mo.shinminato;this.palette=i;const a=F_[e]??"street",r=B_(O_(`${e}:${n}`));this.scene.background=new Xe(i.sky),this.scene.fog=new Ll(i.fog,i.fogDensity);const s=new If(14670024,658187,.42);this.scene.add(s),this.group.add(s);const o=new Uf(i.ambient,.4);this.group.add(o);const l=$_();this.textureCache.push(l);const c=new eu({map:l,transparent:!0,depthWrite:!1,opacity:a==="docks"?.6:.38}),d=new vf(c);d.scale.set(a==="docks"?26:18,a==="docks"?26:18,1),d.position.set(a==="docks"?2:-16,a==="docks"?17:22,-85),this.group.add(d);const f=new _t(new Zn(220,280,1,1),new qn({color:i.ground,roughness:.28,metalness:.55}));f.rotation.x=-Math.PI/2,f.position.set(0,0,-60),this.group.add(f);const u=a==="alley"?8:a==="docks"?26:15,p=new _t(new Zn(u,240),new qn({color:a==="docks"?592651:855051,roughness:.18,metalness:.7}));if(p.rotation.x=-Math.PI/2,p.position.set(0,.02,-60),this.group.add(p),a!=="alley"){const h=new fi({color:14208181,transparent:!0,opacity:.3});for(let T=8;T>-150;T-=16){const P=new _t(new Zn(.16,7),h);P.rotation.x=-Math.PI/2,P.position.set(0,.04,T),this.group.add(P)}}const v=[qr(i,r),qr(i,r),qr(i,r),qr(i,r)];this.textureCache.push(...v);const x=v.map(h=>new qn({map:h,emissiveMap:h,emissive:16777215,emissiveIntensity:a==="alley"?.55:.7,roughness:.78,metalness:.12,color:14078148})),g=a==="alley"?26:64;for(let h=0;h<g;h++){const T=h%2===0?-1:1,P=3+r()*6,y=4+r()*9,M=a==="alley"?12+r()*25:8+r()*46,E=12-r()*150,R=T*(u/2+2.5+r()*(a==="docks"?22:14)+P/2),m=new _t(new pn(P,M,y),x[Math.floor(r()*x.length)]);if(m.position.set(R,M/2,E),m.rotation.y=(r()-.5)*.12,this.group.add(m),r()<.34){const S=i.neon[Math.floor(r()*i.neon.length)],C=new _t(new pn(.18,1.2+r()*5,.7+r()*1.4),new fi({color:S}));if(C.position.set(R-T*(P/2+.15),3+r()*Math.max(1,M-5),E+(r()-.5)*y),this.group.add(C),r()<.5){const I=new aa(S,1.4,13,2);I.position.copy(C.position),this.group.add(I)}}}this.redLight=new aa(i.accent,2.2,34,2),this.redLight.position.set(-5,4.5,-8),this.group.add(this.redLight),a==="docks"?this.buildDocks(r,i):a==="alley"?this.buildAlley(r,i):this.buildStreet(r,i),this.buildRain(r,i,a)}buildStreet(e,n){const i=new nu({color:657672,transparent:!0,opacity:.8});for(let r=0;r<4;r++){const s=9+r*2.2,o=[new F(-24,s,10-r*14),new F(0,s-1.1,-15-r*18),new F(24,s,-42-r*20)],l=new Ef(o),c=new Jt().setFromPoints(l.getPoints(24));this.group.add(new Lc(c,i))}const a=new qn({color:789258,roughness:.9});for(let r=0;r<5;r++){const s=new _t(new us(.08,.1,9,6),a);s.position.set(r%2===0?-10:10,4.5,-8-r*22),this.group.add(s);const o=new _t(new Ga(.22,8,8),new fi({color:n.window[0]}));o.position.set(s.position.x,9.2,s.position.z),this.group.add(o);const l=new aa(n.window[0],1.2,15,2);l.position.copy(o.position),this.group.add(l)}}buildAlley(e,n){const i=new qn({color:657672,roughness:.85});for(let r=0;r<8;r++){const s=new _t(new us(.09,.09,18,6),i);s.rotation.x=Math.PI/2,s.position.set(r%2===0?-4.1:4.1,3+e()*10,-10-r*14),this.group.add(s)}for(let r=0;r<3;r++){const s=new _t(new pn(1.15,2.2,.8),new qn({color:1315344,roughness:.65,metalness:.25}));s.position.set(r%2===0?-3.4:3.4,1.1,-14-r*26),this.group.add(s);const o=new _t(new Zn(.9,1.2),new fi({color:n.window[0],transparent:!0,opacity:.55}));o.position.set(s.position.x,1.35,s.position.z+.41),this.group.add(o);const l=new aa(n.window[0],1.3,8,2);l.position.set(s.position.x,1.6,s.position.z+.8),this.group.add(l)}const a=new fi({color:14170154});for(let r=0;r<4;r++){const s=new _t(new Ga(.24,10,10),a);s.position.set(r%2===0?-3.8:3.8,5+e()*3,-20-r*20),this.group.add(s);const o=new aa(14170154,2,10,2);o.position.copy(s.position),this.group.add(o)}}buildDocks(e,n){const i=new _t(new Zn(160,120,1,1),new qn({color:461580,roughness:.08,metalness:.9}));i.rotation.x=-Math.PI/2,i.position.set(-42,-.3,-60),this.group.add(i);const a=[1581087,1971988,2235158,1186332];for(let o=0;o<22;o++){const l=new _t(new pn(4.3,2.3,2.2),new qn({color:a[Math.floor(e()*a.length)],roughness:.8,metalness:.2})),c=Math.floor(e()*3);l.position.set(-15-e()*30,1.15+c*2.35,-20-e()*80),l.rotation.y=(e()-.5)*.2,this.group.add(l)}const r=new qn({color:724236,roughness:.85});for(let o=0;o<3;o++){const l=-12-o*18,c=-30-o*25,d=new _t(new pn(.45,25,.45),r);d.position.set(l-2,12.5,c),this.group.add(d);const f=new _t(new pn(.45,25,.45),r);f.position.set(l+2,12.5,c),this.group.add(f);const u=new _t(new pn(20,.5,.5),r);u.position.set(l+6,24,c),this.group.add(u);const p=new aa(14170154,2,18,2);p.position.set(l+15,24,c),this.group.add(p)}const s=new _t(new Ga(.2,8,8),new fi({color:n.accent}));s.position.set(8,6,-45),this.group.add(s)}buildRain(e,n,i){const a=i==="docks"?1200:1800,r=new Float32Array(a*3);for(let l=0;l<a;l++)r[l*3]=(e()-.5)*70,r[l*3+1]=e()*38,r[l*3+2]=10-e()*100;const s=new Jt;s.setAttribute("position",new Tn(r,3));const o=new iu({color:14208181,size:.055,transparent:!0,opacity:.55,depthWrite:!1,sizeAttenuation:!0});this.rain=new Ic(s,o),this.rainPositions=r,this.rainSpeed=(n.rain??1)*.055,this.group.add(this.rain)}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),window.removeEventListener("pointermove",this.onPointer),this.renderer.dispose(),this.renderer.domElement.remove()}}const Kn={strength:"STR 力量",dexterity:"DEX 敏捷",constitution:"CON 體質",intelligence:"INT 智力",wisdom:"WIS 感知",charisma:"CHA 魅力"},ud={strength:"力量。近戰攻擊、攀爬、破壞與負重。",dexterity:"敏捷。遠程攻擊、閃避、追擊與脫身。",constitution:"體質。決定最大肉體 HP，並抵抗侵蝕與毒素。",intelligence:"智力。推理、資訊處理、調查與滅證。",wisdom:"感知。觀察、直覺、發現謊言與伏擊。",charisma:"魅力。交涉、隱藏、操縱與氣場。"},vu=["strength","dexterity","constitution","intelligence","wisdom","charisma"],H_=[{id:"blade",name:"斷罪之刃",kana:"ダンザイノハ",rarity:"Ⅲ",type:"攻擊",tagline:"把侵蝕鍛造成一把不該存在的刀。",description:"你從脊椎抽出黑色的薄刃。它切開的不是肉體，而是「存在」本身。每次揮刀，刀刃都會多記住你一點。",passive:"體魄 +2。",active:"戰鬥與狩獵檢定 +3；可將一次攻擊化為必殺。",cost:8,statBonus:{strength:2},combat:3,tags:["combat","blade"]},{id:"flash",name:"瞬絕",kana:"シュンゼツ",rarity:"Ⅱ",type:"速度",tagline:"在世界反應過來之前，你已經不在原地。",description:"零點三秒的空白。你穿過雨、子彈與監視器，只留下一個正在崩塌的殘影。",passive:"敏捷 +2。",active:"戰鬥或逃離檢定 +2；遭遇神田時可強制脫身一次。",cost:7,statBonus:{dexterity:2},combat:1,tags:["escape","combat"]},{id:"mindeye",name:"讀心之瞳",kana:"ドクシンノヒトミ",rarity:"Ⅱ",type:"精神",tagline:"每個人都在心裡小聲說出秘密。",description:"你能看見情緒的顏色。恐懼是鏽紅，算計是墨綠，而神田隼人是沒有顏色的。",passive:"感知 +2，調查所得情報 +1。",active:"閱讀目標表層思維，解鎖部分事件的真相。",cost:6,statBonus:{wisdom:2},combat:0,tags:["mind","intel"]},{id:"ash",name:"灰燼領域",kana:"カイジンリョウイキ",rarity:"Ⅲ",type:"異形",tagline:"半徑三十公尺內，一切歸於灰。",description:"你的影子張開，像一頁被火燒穿的紙。街道、車子、人，都從邊緣開始剝落。",passive:"知性 +1。顯現獵殺與破壞額外 +1 刻印。",active:"大範圍殲滅。警戒指數大幅上升。",cost:12,statBonus:{intelligence:1},combat:2,tags:["destroy","area"]},{id:"regen",name:"不死再生",kana:"フシサイセイ",rarity:"Ⅱ",type:"異形",tagline:"骨頭會自己找到回家的路。",description:"你死過一次。心臟停擺的十七秒裡，你聽見有人在很遠的地方叫你的名字，於是你決定爬回來。",passive:"體魄 +1。肉體歸零時自動以 3 點復活一次。",active:"立即回復 4 點肉體。",cost:10,statBonus:{strength:1},combat:0,tags:["heal","revive"]},{id:"siren",name:"魅惑之聲",kana:"ミワクノコエ",rarity:"Ⅱ",type:"精神",tagline:"你說的每一句話，都會變成對方最想聽的話。",description:"聲音先於意義抵達。你能讓盤問變成閒聊，讓追捕變成護送，讓恨你的人暫時忘記理由。",passive:"魅力 +2，交涉類檢定 +1。",active:"壓低警戒指數、轉移懷疑，或讓敵人放下武器。",cost:6,statBonus:{charisma:2},combat:0,tags:["social","heat"]},{id:"thunder",name:"雷牙",kana:"ライガ",rarity:"Ⅱ",type:"攻擊",tagline:"雨還沒落下，閃電已經穿過你。",description:"你的神經變成導體。指尖彈出的白色電弧能在混凝土上留下焦黑的樹根。",passive:"敏捷 +1，戰鬥檢定 +2。",active:"遠距離擊穿目標，或癱瘓一整條街的電眼。",cost:8,statBonus:{dexterity:1},combat:2,tags:["combat","tech"]},{id:"memory",name:"記憶篡改",kana:"キオクテンカイ",rarity:"Ⅲ",type:"精神",tagline:"證據不在現場，在別人的腦裡。",description:"你能剪掉目擊者的一分鐘，也能把一段不存在的記憶縫回去。用越多次，你越不確定哪些回憶是自己的。",passive:"知性 +2，滅證與調查檢定 +2。",active:"抹除監視紀錄、目擊者記憶與現場痕跡。",cost:6,statBonus:{intelligence:2},combat:0,tags:["erase","intel"]},{id:"beast",name:"獸化",kana:"ジュウカ",rarity:"Ⅲ",type:"異形",tagline:"你不再需要理由，只需要氣味。",description:"皮膚裂開，牙齒變長，世界突然變得簡單：獵物、威脅、同類。最可怕的是，你喜歡這種簡單。",passive:"體魄 +3。所有警戒指數增加 15%。",active:"戰鬥與狩獵檢定 +4；結束後侵蝕額外 +3。",cost:9,statBonus:{strength:3},combat:4,tags:["combat","beast"]},{id:"limit",name:"界限突破",kana:"カイゲントッパ",rarity:"Ⅲ",type:"支援",tagline:"把「不可能」當成一個可以談判的數字。",description:"你能短暫改寫自己的極限。心跳、肌力、思考速度全部超頻。代價是，突破之後你會忘記自己原本的樣子。",passive:"意志 +2。所有抵抗侵蝕檢定 +2。",active:"一次檢定 +5；或從必敗局面中強行拖住對手。",cost:15,statBonus:{constitution:2},combat:2,tags:["fate","constitution"]},{id:"shell",name:"空蟬",kana:"ウツセミ",rarity:"Ⅱ",type:"速度",tagline:"你留下的不是殘影，是一個替你死的自己。",description:"一具空殼從你身上剝落，帶著你的體溫與恐懼逃跑。真正的你只能站在原地，看它被殺死。",passive:"敏捷 +1。遭遇神田時可強制脫身一次。",active:"製造完美的替身，轉移追捕與一次致命傷。",cost:8,statBonus:{dexterity:1},combat:0,tags:["escape","decoy"]},{id:"resonance",name:"共鳴",kana:"キョウメイ",rarity:"Ⅰ",type:"支援",tagline:"有人還記得你原本的聲音。",description:"你的顯現不是武器，是一條看不見的線。線的另一端連著你仍在乎的人；只要他們還在，你就能被拉回來。",passive:"意志 +1。聯絡羈絆時額外降低 4 點侵蝕。",active:"透過羈絆穩定精神，把一次失控推回去。",cost:4,statBonus:{constitution:1},combat:0,tags:["bond","calm"]}],G_={flash:{acBonus:1},mindeye:{acBonus:1},ash:{acBonus:1},regen:{acBonus:1},thunder:{acBonus:1},memory:{acBonus:1},beast:{acStat:"strength",acBonus:2},limit:{acBonus:1},shell:{acBonus:2}},bu=H_.map(t=>({...t,kind:"manifest",...G_[t.id]??{}})),fl=[{id:"core_array",name:"演算迴廊",kana:"エンザンカイロウ",rarity:"Ⅳ",type:"精神",kind:"core",tagline:"把世界拆成可以計算的變數，再把自己算進去。",description:"你開始看得見子彈的路徑、對方的重心、自己下一次心跳的間隔。它們全都變成可計算的變數。用得越久，你越難確定哪些念頭原本屬於你。",passive:"知性 +2。AC 改用知性計算。",active:"以思考覆寫肉體：戰鬥或調查檢定 +2。",cost:9,statBonus:{intelligence:2},combat:2,tags:["core","mind","intel","ac"],acStat:"intelligence",acBonus:1},{id:"core_revive",name:"殘響回生",kana:"ザンキョウカイセイ",rarity:"Ⅳ",type:"異形",kind:"core",tagline:"死不是終點，只是一次比較長的停頓。",description:"你的細胞記得自己死過。骨頭斷了會自己找路，心臟停了會重新點火。每次回來，都會少一點東西——有時是記憶，有時是名字。",passive:"體魄 +1。肉體歸零時自動以 3 點復活一次；AC +1。",active:"立即回復 4 點肉體。",cost:10,statBonus:{strength:1},combat:0,tags:["core","heal","revive"],acBonus:1},{id:"core_ward",name:"境界編織",kana:"キョウカイヘンショク",rarity:"Ⅳ",type:"支援",kind:"core",tagline:"把「不想失去」變成一堵看不見的牆。",description:"你無法阻止世界傷害你，但可以讓某些東西暫時不被世界碰到。結界越強，你越能聽見牆外那些正在死去的聲音。",passive:"意志 +2。AC +2；聯絡羈絆時額外降低侵蝕。",active:"張開結界，替羈絆者或平民承受一次攻擊。",cost:7,statBonus:{constitution:2},combat:0,tags:["core","bond","ward","calm"],acBonus:2},{id:"core_market",name:"暗盤交易",kana:"アンバイコウエキ",rarity:"Ⅳ",type:"支援",kind:"core",tagline:"只要價格正確，連裏八咫的名單都能買到。",description:"你天生知道誰手裡有東西、誰急著脫手、誰的謊話值多少錢。這不是超能力，是另一種更古老的顯現：供需。",passive:"魅力 +1、知性 +1。調查與交易檢定 +1。",active:"在事件中取得裝備、情報或降低警戒指數。",cost:6,statBonus:{charisma:1,intelligence:1},combat:0,tags:["core","social","heat","intel"]},{id:"core_multi",name:"兵裝並列",kana:"ヘイソウヘイレツ",rarity:"Ⅳ",type:"攻擊",kind:"core",tagline:"一隻手不夠，那就讓每一根骨頭都握住武器。",description:"你能同時操作多件武器，把它們的軌跡疊成一條不合理的攻擊線。顯現會在你身上長出額外的關節；它們不痛，只是睡著時會自己動。",passive:"體魄 +1、敏捷 +1。戰鬥檢定 +2，AC +1。",active:"合併兩件武器的攻擊，無視一次防禦。",cost:9,statBonus:{strength:1,dexterity:1},combat:3,tags:["core","combat","ac"],acBonus:1},{id:"core_variable",name:"形態改寫",kana:"ケイタイカイシャ",rarity:"Ⅳ",type:"攻擊",kind:"core",tagline:"你的武器沒有固定形狀，只有固定目的。",description:"刀、槍、盾、鑰匙——你的顯現會隨著需要改變外形。每次變形都會帶走一點記憶，所以你開始把重要的事寫在皮膚上。",passive:"敏捷 +1。戰鬥檢定 +2；可切換攻擊或防禦形態。",active:"將一次戰鬥檢定改為遠程或近戰中最有利的形式。",cost:8,statBonus:{dexterity:1},combat:2,tags:["core","combat","ac"],acBonus:1},{id:"core_combat",name:"戰術矩陣",kana:"センジュツギョジン",rarity:"Ⅳ",type:"速度",kind:"core",tagline:"你像一段被寫好的戰鬥程式，正確得令人害怕。",description:"身體會自動執行最優解。閃避、反擊、換位、補刀，全都在意識下達命令之前完成。問題是，程式不會告訴你什麼時候該停。",passive:"敏捷 +1。戰鬥檢定 +3，AC +2。",active:"進入戰鬥模式：本小時的狩獵與逃避檢定 +2。",cost:8,statBonus:{dexterity:1},combat:3,tags:["core","combat","ac"],acBonus:2},{id:"core_focus",name:"零點凝縮",kana:"レイテンギョウシュク",rarity:"Ⅳ",type:"精神",kind:"core",tagline:"世界很吵。你只需要留下一個聲音。",description:"你能把所有注意力壓縮成一個點。那個點以外的東西會暫時消失：雨聲、痛覺、別人的名字。回神時，你會發現自己錯過了很多。",passive:"意志 +1、感知 +1。抵抗侵蝕檢定 +2。",active:"重擲一次剛失敗的檢定；每次使用侵蝕 +5。",cost:6,statBonus:{constitution:1,wisdom:1},combat:1,tags:["core","constitution","fate"],acBonus:1}],V_=["鏽蝕的","第七相的","無名的","雨蝕的","未登錄的","灰燼的","零時的","白夜的","逆流的","霧中的","斷裂的","殘月的"],W_=["心臟","迴路","殘響","器官","禱詞","火種","裂縫","紀錄","王座","雨聲","脈搏","鏡像"],hs=[{value:0,name:"常速",jp:"MUNDANE",fumble:0,note:"普通人的時間。神田也停在這裡。"},{value:1,name:"幽步",jp:"GHOST STEP",fumble:1,note:"比常人快半步。自然 1 失敗。"},{value:2,name:"影走",jp:"SHADOW RUN",fumble:2,note:"殘影開始追上本體。1–2 失敗。"},{value:3,name:"思速",jp:"NEURAL",fumble:3,note:"思考與動作同時完成。1–3 失敗。"},{value:4,name:"音速",jp:"SONIC",fumble:4,note:"空氣來不及讓開。1–4 失敗。"},{value:5,name:"彈速",jp:"BULLET",fumble:5,note:"子彈看起來像靜止。1–5 失敗。"},{value:6,name:"光速",jp:"LIGHT",fumble:6,note:"影子被留在原地。1–6 失敗。"},{value:7,name:"超光速",jp:"FTL",fumble:7,note:"只有特殊顯現能抵達。1–7 失敗。"}],X_=[{id:"street",name:"日常服",base:10,dexCap:5,description:"沒有防護，只有一點體面。",tone:"none"},{id:"jacket",name:"防風外套",base:11,dexCap:5,description:"城市裡最普通的裝備。至少能擋住一次刀背。",tone:"light"},{id:"trench",name:"強化風衣",base:12,dexCap:4,description:"內襯編入抗撕裂纖維。低調，適合不想被看見的人。",tone:"light"},{id:"vest",name:"防彈背心",base:13,dexCap:2,description:"裏八咫補給品。擋得住手槍，擋不住顯現。",tone:"medium"},{id:"crystal",name:"結晶外殼",base:14,dexCap:1,description:"從死去的超越者身上剝下的結晶。冷得像另一個人。",tone:"medium"},{id:"exo",name:"機動裝甲",base:15,dexCap:0,description:"軍規外骨骼。神田的特製校服內襯就是這種東西。",tone:"heavy"}],er=new Map(X_.map(t=>[t.id,t])),cr=[{id:"shinminato",name:"新湊市",kana:"しんみなと",tag:"港灣・黑市",description:"面向黑潮的貿易港。戰後靠走私與倉儲重新站起來，警察管不到碼頭深處。這裡的人習慣半夜的警笛，也習慣不多看一眼。",stat:"strength",heatMod:.9,scene:"docks",weather:"長雨",landmark:"第七號貨櫃碼頭"},{id:"kirimi",name:"霧見市",kana:"きりみ",tag:"山霧・舊城",description:"被兩座山夾住的老城。一年有三分之一的日子起霧，監視器拍不到十公尺外。居民說，霧裡還有另一座城市。",stat:"wisdom",heatMod:.85,scene:"alley",weather:"濃霧",landmark:"霧見坂商店街"},{id:"tokoyo",name:"常夜町",kana:"とこよ",tag:"不夜・直播",description:"亞洲最大的娛樂街區。霓虹燈從不熄滅，直播鏡頭比路燈還多。任何一點異常，三分鐘內就會變成熱搜。",stat:"charisma",heatMod:1.2,scene:"street",weather:"霓虹雨",landmark:"常夜中央通"},{id:"tetsuhara",name:"鐵原市",kana:"てつはら",tag:"工業・鏽蝕",description:"戰時留下的重工業帶。高爐停了，鏽蝕還在。空氣裡有金屬味，孩子們的肺裡都有細小的鐵粉。",stat:"strength",heatMod:1,scene:"docks",weather:"鐵灰陰天",landmark:"第三高爐遺址"},{id:"shirasagi",name:"白鷺市",kana:"しらさぎ",tag:"學園・監視",description:"戰後重建的模範都市。街道乾淨，志工很多，每根電線桿上都有治安攝影機。市民滿意度連續十年全國第一。",stat:"intelligence",heatMod:1.15,scene:"street",weather:"晴朗夜色",landmark:"白鷺中央廣場"},{id:"amatsuka",name:"雨塚市",kana:"あまつか",tag:"盆地・長雨",description:"一年下三百天雨的小盆地。雨聲蓋住槍聲、哭聲與顯現的低鳴。這裡的人相信，雨會把人的秘密沖到地底。",stat:"constitution",heatMod:.95,scene:"alley",weather:"連日大雨",landmark:"雨塚車站前"}],q_=[{id:"ayase",trueNameKnown:!1,name:"綾瀬凍",codename:"冰棺聖母",epithet:"玻璃聖母",ability:"結晶／凍結",marks:12,rate:.55,status:"active",portrait:"ayase",note:"排名第二。冷靜、守規則，似乎在等某個人先犯錯。"},{id:"kurokawa",trueNameKnown:!1,name:"黑川巌",codename:"鐵血縛鎖",epithet:"絞肉機",ability:"肉體強化",marks:15,rate:.9,status:"active",portrait:"kurokawa",note:"殺意沒有底線。裏八咫很喜歡他，神田也是。"},{id:"shiratori",trueNameKnown:!1,name:"白鳥理世",codename:"偽神歌姬",epithet:"舞臺女王",ability:"魅惑／暗示",marks:8,rate:.5,status:"active",portrait:"shiratori",note:"從不親自弄髒手。她的刻印大多來自別人的自願。"},{id:"tetsu",trueNameKnown:!1,name:"鐵十兵衛",codename:"鏽蝕英雄",epithet:"鐵屑",ability:"金屬操作",marks:2,rate:.18,status:"active",portrait:"crown",note:"五十歲才顯現的男人。只想活著回去見孫女。"}],ka={lie_low:{label:"潛伏",icon:"伏",desc:"躲進人群與陰影。降低警戒指數，讓傷口慢慢癒合。",risk:"警戒指數 -3／每兩小時回復 1 肉體",tone:"calm"},hunt_normal:{label:"獵殺常人",icon:"人",desc:"用刀、石頭或雙手。不碰顯現，只碰人命。",risk:"刻印 +1／警戒指數 +5",tone:"danger"},power_hunt:{label:"顯現獵殺",icon:"蝕",desc:"讓顯現替你完成工作。乾淨、迅速，代價寫在骨頭裡。",risk:"刻印 +2／警戒指數 +7／侵蝕 +顯現代價",tone:"danger"},hunt_overman:{label:"狩獵同類",icon:"獵",desc:"找出落單的超越者。這才是裏八咫真正想要的分數。",risk:"成功 +10 刻印／失敗重傷／必定侵蝕",tone:"danger"},investigate:{label:"調查",icon:"查",desc:"查線路、問人、看監視器。情報不能吃，但能救命。",risk:"情報 +1／警戒指數 +1",tone:"calm"},contact:{label:"聯絡羈絆",icon:"絆",desc:"打一通電話，見一面，確認自己還是人。",risk:"侵蝕大幅下降／監視上升，羈絆者可能被盯上",tone:"bond"},destroy:{label:"破壞",icon:"壞",desc:"讓城市記住你。裏八咫會把混亂折算成刻印。",risk:"刻印 +2／警戒指數 +9／侵蝕 +6",tone:"danger"}},pl={monster:{title:"侵蝕完遂",subtitle:"你終於不用再忍耐了",stamp:"怪物",text:`最後一根名為「人」的線，斷了。

你記得自己的名字，卻想不起為什麼要記得。

雨水落在你裂開的皮膚上，像一個很遠的、與你無關的問候。

神田隼人站在街的另一端，手裡握著一把漆黑的劍。

他只是看著你，像在看一份終於完成的病歷。

「你不是怪物。」

他說。

「你只是一直沒有人拉住。」

然後，世界安靜了。`,tone:"dark"},dead:{title:"無人認領",subtitle:"七十二小時，沒有誰替你倒數",stamp:"死亡",text:`你倒在一條沒有監視器的小巷裡。

雨把你的血沖進排水溝，一路帶進海裡，和這座城市其他被遺忘的東西一起。

裏八咫的終端在三分鐘後停止顯示你的代號。

沒有葬禮，沒有新聞。

只有某個人在很久以後，還會偶爾撥打一支無人接聽的號碼。

撥到第四聲，就掛掉。`,tone:"dark"},caught:{title:"神田隼人",subtitle:"勝率 0.0%",stamp:"逮捕",text:`你甚至沒有看清他什麼時候動的。

手銬扣上時，你才發現自己一直屏著呼吸。

神田隼人蹲下來，與你平視。

「我知道你不是自願的。」

他的語氣很平，像在讀一份天氣預報。

「但你也知道，這不能成為理由。」

他把你從雨裡拉起來。

這是你七十二小時裡，第一次被人當成一個人對待。`,tone:"neutral"},recycled:{title:"回收",subtitle:"沒有達到最低分數的零件",stamp:"回收",text:`閉幕的鐘聲響起時，你的刻印停在 100 以下。

裏八咫的工作人員很有禮貌。

他們替你披上外套，說會通知家屬，說這是一場意外。其中一個人的手在抖——你可能只是看見了，也可能是希望自己看見了。

你想起黑信封上那行字。

——不得告知任何人。

原來那句話保護的從來不是你。

城市照常亮起。便利商店的燈還亮著，關東煮的湯還在滾。

沒有人知道，今晚少了一個超越者。`,tone:"bad"},throne:{title:"王座",subtitle:"你贏了遊戲，輸掉了所有觀眾",stamp:"赦免",text:`刻印數第一。

裏八咫替你準備了一間看得見海的房間。

桌上有一份新的身分、一筆錢，和一支沒有通訊錄的手機。

「恭喜。」

西裝男說。

「你現在是普通人了。」

你看著窗玻璃裡的自己。

侵蝕的痕跡淡了，眼睛卻還是紅的。

你想打給誰，卻發現所有號碼都被自己刪掉了。

你贏了。

這座城市再也沒有你的名字。`,tone:"dark"},survivor:{title:"合格者",subtitle:"活下來，但沒有人替你鼓掌",stamp:"生還",text:`刻印達標，排名卻不是第一。

裏八咫兌現了承諾。

你被移出名單，獲得一個新的戶籍，搬進一間沒有窗的公寓。

每個月有人送來生活費。

每一季有人確認你沒有對外說話。他們很有禮貌，會先按門鈴，等三秒，再自己開門。

你活下來了。

但有時候，你會在半夜醒來，聽見雨水打在同一片鐵皮屋頂上，然後想起某個曾經和你一起倒數的人。

你沒有贏。

你只是還沒被回收。`,tone:"neutral"},escape:{title:"逃亡者",subtitle:"世界上從此多了一個沒有代號的人",stamp:"離脫",text:`你沒有去閉幕會場。

凌晨四點，你帶著僅剩的羈絆，從貨櫃碼頭的缺口鑽了出去。

海風很鹹。天快要亮了。

身後的警笛越來越遠。

前面沒有路，只有一條被雨洗過的防波堤。

「你會後悔嗎？」

那個人問。

你想了很久。

「會。」

你說。

「但不是現在。」

你們往前走。

裏八咫的名單上，你的代號變成了灰色。`,tone:"good"},confess:{title:"證人",subtitle:"你活了下來，以一個人的身分",stamp:"自首",text:`你把證據放在神田隼人面前。

他沒有立刻拿起來，只是先看了你很久。

「你知道這意味著什麼嗎？」

「知道。」

你說。

「我會坐牢。」

「不。」

他把錄音筆推回來。

「你會活著。活著把他們拖下來。」

三個月後，Project Ignis 第一次出現在國會質詢裡。

你在保護室看電視。窗外下雨。

你想起妹妹的晚餐照片，終於按下回覆鍵。`,tone:"good"},nameless:{title:"無名之人",subtitle:"沒有分數，沒有赦免，也沒有變成怪物",stamp:"未完",text:`閉幕時，你的刻印不到 30，侵蝕也沒有越過那條線。

裏八咫本來要回收你。

但那天晚上，神田隼人先一步走進了指揮部，把一份名單放在桌上。

沒有人知道他們談了什麼。

第二天，你被放上離開城市的巴士。

沒有新身分，沒有錢，只有一張單程票。

你坐在最後一排，看著雨中的城市縮小。

你沒有贏。

但你還記得自己的名字。`,tone:"neutral"}},Y_={text:`白髮，藍金異色瞳，黑色立領制服，金色鈕扣。

十七歲。警視廳搜查一課的「特別顧問」，被稱為最強現代智人。

不是超越者。沒有顯現，沒有改造，DNA 仍屬於 Homo sapiens。六項能力值全部停在人類極限：基礎 18，再以全屬性作為主屬性 +2，合計 20。體脂長期維持在 5% 到 7%，肩背與胸腔呈現極端的倒三角，關節與肌腱比常人粗厚；肺活量超過 8000cc，靜止心率每分鐘 30 次，百米能跑進九秒，硬舉超過 500 公斤。

但他仍然是人類。會疲倦，會受傷，會死。

他沒有任何特殊能力。所有判斷都來自刑警的觀察、紀錄與推理；他能十分鐘讀完整本卷宗，也能在對手抬手之前，從肌肉的微小動作推測下一步。

真正的異常，是那八把魔劍。

八把「大罪」級軌道兵器，平時停泊在低軌衛星「天刑」上。戰鬥時，他以警方權限呼叫其中一把，讓它從軌道直接落在戰場；劍體由超導金屬、動能控制與自主推進器構成，沒有任何超自然成分。戰後，魔劍會自行點火返回衛星。

他不需要把武器帶進城市。

因為武器在天空。

同一回合，他只能呼叫一把。這是裏八咫寫進權限裡的安全鎖，也是他唯一願意接受的限制。

小田川知世——他的童年好友，也是唯一讓他願意過普通生活的人——在十年前的「霧見集體失蹤」中下落不明。

裏八咫內部對他的評價只有一行字：

「不可交戰。不可接觸。不可成為他的案件。」`},Z_=[...fl,...bu],_a=new Map(Z_.map(t=>[t.id,t])),dr=new Map(cr.map(t=>[t.id,t]));function va(t){return Math.floor((t-10)/2)}function xu(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}function K_(t){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}function J_(t){return t.rngCount+=1,K_(xu(t.seed+":"+t.rngCount))}function Xt(t,e,n){return e+Math.floor(J_(t)*(n-e+1))}function Vt(t){return Xt(t,1,20)}function Q_(t){const e=[Xt(t,1,6),Xt(t,1,6),Xt(t,1,6),Xt(t,1,6)];return e.sort((n,i)=>i-n),e[0]+e[1]+e[2]}function gn(t,e){return e[Xt(t,0,e.length-1)]}function j_(t,e){const n=[...e];for(let i=n.length-1;i>0;i--){const a=Xt(t,0,i);[n[i],n[a]]=[n[a],n[i]]}return n}function tr(){return Math.random().toString(36).slice(2,8)+Math.random().toString(36).slice(2,6)}function cn(t){return dr.get(t.cityId)?.name??"這座城市"}function ev(t){return t.bonds.filter(e=>e.alive).reduce((e,n)=>e+n.level,0)}function da(t,e){return t.bonds.filter(i=>i.alive&&(!e||i.category===e)).sort((i,a)=>a.level-i.level)[0]??null}function tv(t){return da(t)?.name??"那個人"}const ys=[{id:"ash",base:"monster",title:"灰燼王座",subtitle:"你成為了這座城市最後一個活著的怪物",stamp:"侵蝕",tone:"dark",condition:"侵蝕率 ≥100，或失控 ≥3 次",body:t=>`你的名字先從別人的記憶裡脫落。

然後是街道的名字，便利商店的位置，海的方向。

最後，你低下頭，看見自己的手已經不是手，而是一小片會呼吸的焦炭。你卻不再害怕。

終端還在運作。它用一個很平的女聲說：

「Project Ignis，完遂。個體已成為新種。」

${cn(t)} 的燈火在你眼裡變成了一條條可以吞下去的線。你張開嘴，卻沒有發出聲音。

因為你已經不需要語言了。`},{id:"vessel",base:"monster",title:"容器",subtitle:"你沒有變成怪物；你讓怪物住進了身體",stamp:"顯現",tone:"dark",condition:"侵蝕 ≥100，且曾接受顯現增生或與王冠共鳴",extraCondition:t=>t.player.encroachment>=100&&(!!t.player.flags.accepted||!!t.player.flags.crown_injured),body:t=>`王冠的碎片在你胸口裡發亮，像一顆借來的第二心臟。

你記得自己曾經拒絕過它。你也記得自己後來為什麼點頭。

「不是你控制它，」王冠的聲音從很遠的地方傳來，「是你們終於願意承認，你們本來就是同一種東西。」

你站在 ${cn(t)} 最高的地方，讓整座城市的雨停下來。

底下有人抬頭。他們看見的不是怪物，而是一個終於被填滿的人。

你伸出手。城市跟著你一起呼吸。

這一刻，你比任何時候都更像人。也比任何時候都更危險。`},{id:"unclaimed",base:"dead",title:"無人認領",subtitle:"七十二小時，沒有誰替你倒數",stamp:"死亡",tone:"dark",condition:"肉體歸零",body:t=>`你倒在一條沒有監視器的小巷裡。

雨把你的血沖進排水溝，一路帶進海裡，和這座城市其他被遺忘的東西一起。

裏八咫的終端在三分鐘後停止顯示你的代號。那個代號很短，短得像一個沒有寫完的句子。

${cn(t)} 的早晨照常到來。有人牽著狗經過巷口，狗停了半秒，又跟著主人走了。

你最後想起的是一通沒有接的電話。

鈴聲響了很久。久到對方以為你只是睡著了。`},{id:"arrest",base:"caught",title:"神田隼人",subtitle:"勝率 0.0%",stamp:"逮捕",tone:"neutral",condition:"被神田隼人制伏、投降或遭遇失敗",body:t=>`手銬扣上時，你才發現自己一直屏著呼吸。

神田隼人蹲下來，與你平視。

「我知道你不是自願的。」

他的語氣很平，像在讀一份天氣預報。

「但你也知道，這不能成為理由。」

他把你從雨裡拉起來。你以為他會用力，結果沒有。

警車的後座有一股很淡的咖啡味。你看著 ${cn(t)} 從車窗外倒退，第一次發現這座城市原來有這麼多沒有關掉的燈。

「你會告訴我裏八咫的事。」神田說。

不是問句。

你沒有回答。他也沒有再問。`},{id:"execution",base:"caught",title:"黑服執行",subtitle:"裏八咫不需要法庭",stamp:"處決",tone:"dark",condition:"警戒指數 ≥80、洩露規則或屠殺平民，且被裏八咫攔截",extraCondition:t=>!!t.player.flags.leaked||!!t.player.flags.massacre||t.player.heat>=80,body:t=>`黑色的廂型車停在巷口。沒有標誌，沒有車牌。

三個人下車，穿一樣的黑西裝，動作像同一個人在鏡子裡被複製了三遍。

「Project Ignis 第七次選別，個體 ${t.player.codename}。」中間那個人說。「你已不具備可回收價值。」

你認出他的聲音。你曾在終端的語音提示裡聽過。

你試著解釋。你試著問是誰下的命令。你試著說自己只是為了活下去。

他們沒有打斷你。他們只是等你說完。

然後其中一個人抬手，像在關掉一盞不需要的燈。

${cn(t)} 的雨繼續下。第二天，沒有人在新聞裡看見你的名字。`},{id:"recycled",base:"recycled",title:"回收編號",subtitle:"沒有達到最低分數的零件",stamp:"回收",tone:"bad",condition:"閉幕時刻印未達門檻",body:t=>`閉幕的鐘聲響起時，你的刻印停在門檻以下。

裏八咫的工作人員很有禮貌。

他們替你披上外套，說會通知家屬，說這是一場意外。其中一個人的手在抖。你可能只是看見了，也可能是希望自己看見了。

你想起黑信封上那行字。

——不得告知任何人。

原來那句話保護的從來不是你。

城市照常亮起。便利商店的燈還亮著，關東煮的湯還在滾。

沒有人知道，今晚少了一個超越者。也沒有人知道，你曾經離赦免只差幾枚刻印。`},{id:"throne",base:"throne",title:"王座",subtitle:"你贏了遊戲，輸掉了所有觀眾",stamp:"赦免",tone:"neutral",condition:"刻印達標、排名第一、警戒 <80",body:t=>`「第一名。」

裏八咫的廣播說。

「恭喜你成為普通人。」

終端上的刻印數字停了下來。你的身體沒有變。你的名字也沒有變。變的是世界看你的方式。

他們給你一張新的身分證，一個新的住址，一份不需要再躲藏的工作。

你走進便利商店，買了一瓶水。店員沒有多看你一眼。

你站在 ${cn(t)} 的街口，忽然不知道自己該去哪裡。

沒有人追你。沒有人等你。沒有人恨你。

你贏了。這就是贏的樣子。`},{id:"survivor",base:"survivor",title:"合格者",subtitle:"你拿到了生存資格，代價是別人的名字",stamp:"生存",tone:"neutral",condition:"刻印達標但排名非第一",body:t=>`「刻印達標。排名未達第一。授予生存資格。」

終端說完這句話，就恢復成一支普通的手機。

你花了很久才適應它不再震動。

${cn(t)} 的早晨很安靜。你坐在車站前的長椅上，看著上班族走進票口，看著學生低頭滑手機，看著一個母親把孩子抱起來。

你想起那些被你寫進刻印數字裡的人。你甚至記不清其中幾張臉。

生存資格不是赦免。它比較像一張收據。

證明你付過錢。證明你曾經被允許活下去。`},{id:"artificial",base:"survivor",title:"人造黎明",subtitle:"財團 Z 沒有救你，只是把你買回來",stamp:"回收",tone:"bad",condition:"刻印達標、排名非第一，且接觸過財團 Z 的秘密",extraCondition:t=>!!(t.player.flags.riya_secret||t.player.flags.kanda_partial||t.player.flags.told_kotone),body:t=>`你沒有回到街上。

醒來時，天花板是白色的。空氣裡有一股消毒水和金屬的氣味。

「專案編號 ${t.player.codename}。」一個穿白袍的人說。「恭喜。你通過了野外測試。」

你想問這是哪裡。你想問自己是不是死了。

但你的身體先回答了：它認得這個地方。

財團 Z 的科學家把 Project Ignis 叫做「自然選別」。他們不關心誰贏。他們只關心誰能在瀕臨侵蝕的狀態下，仍然記得怎麼服從。

「你做得很好。」白袍的人說。「現在，我們要開始真正的實驗。」

窗外，${cn(t)} 的燈火被玻璃切成整齊的方格。

你忽然明白：裏八咫不是這座城市最深的地方。它只是最上面那一層。`},{id:"escape",base:"escape",title:"海岸線",subtitle:"你沒有贏，但你也沒有被算進分數",stamp:"逃亡",tone:"good",condition:"閉幕前成功離開城市，且警戒 <70",body:t=>`你沒有回頭。

碼頭的盡頭有一艘很舊的漁船，船身漆著一個你看不懂的名字。船主收了你的錢，沒有問你要去哪裡。

${cn(t)} 的燈火在身後變成一條很細的線，最後被霧吞掉。

終端被你丟進海裡。它下沉的時候還亮著，像一顆不願意閉上的眼睛。

船艙裡有一張舊報紙、一包受潮的菸、一個壞掉的收音機。

你把它們一件一件收好。你忽然有很多時間。

海風很冷。天邊已經泛白。

你活下來了。不是因為你比較強，只是因為你在正確的時候，選擇了離開。`},{id:"confess",base:"confess",title:"證人",subtitle:"你把真相交出去，然後成為真相的一部分",stamp:"自首",tone:"good",condition:"持有證據並交給神田，或選擇自首",body:t=>`你把終端放在神田的報告上。

他抬頭看了你一眼，然後合上報告。

「上車吧。」他說。「我們有很多事要談。」

警車沒有開回警署。它穿過 ${cn(t)} 的清晨，停在一棟沒有門牌的大樓前。

裡面的人穿著黑西裝，和裏八咫執行官一樣。但他們看見神田時，全部站了起來。

你把 Project Ignis 的規則、刻印、回收名單、城市名單，一件一件說出來。

你說得很慢。慢到你開始相信自己真的記得每一個字。

神田坐在你旁邊，沒有打斷你。

天亮時，他遞給你一杯很苦的咖啡。

「你現在是證人了。」他說。「這不代表你自由。但至少，你不再是他們的數字。」

你握著那杯咖啡，第一次覺得自己還有一個名字。`},{id:"nameless",base:"nameless",title:"無名之人",subtitle:"你沒有達到門檻，但有人替你按住了終端",stamp:"未登錄",tone:"good",condition:"刻印不足，但侵蝕 <40 且羈絆 ≥6，神田介入",body:t=>`終端顯示：「未達標。回收名單確認中。」

然後，一隻手按住了螢幕。

不是裏八咫的手。也不是神田的。

是 ${tv(t)}。

「夠了。」那個人說。聲音很輕，卻讓整條街安靜下來。

你看著對方，忽然想起自己已經很久沒有被人叫過名字。不是代號，不是編號，不是「個體」。

「你沒有贏。」那個人說。「但你也沒有變成他們要你變成的人。」

遠處，神田靠在車門旁，沒有走過來。他只是看著，像在確認一件終於歸位的事。

裡八咫的直升機在頭頂盤旋。探照燈掃過屋頂，又掃回去。

你沒有被赦免。你只是被記住了。`}],Va=[{id:"family",title:"家書",subtitle:"還有人在家裡等你",condition:"家人羈絆 ≥6",check:t=>(da(t,"family")?.level??0)>=6,body:t=>{const e=da(t,"family");return`你最後一次聽見${e?.name??"家人"}的聲音，是在一通很短的通話裡。

對方沒有問你在做什麼。只說：「回來的時候，記得先吃飯。」

你一直記得這句話。

後來，${e?.name??"家人"}在桌上多放了一副碗筷。一天、兩天、很多天。

沒有人解釋那副碗筷是給誰的。`}},{id:"friend",title:"同行",subtitle:"有人替你記得原本的你",condition:"朋友羈絆 ≥6",check:t=>(da(t,"friend")?.level??0)>=6,body:t=>{const e=da(t,"friend");return`${e?.name??"那個人"}沒有叫你英雄，也沒有叫你怪物。

他只是把外套丟到你頭上，說：「你這樣會感冒。」

你想笑，卻先咳了一聲。

後來你們誰都沒有再提那七十二小時。

但每次下雨，${e?.name??"那個人"}都會多帶一把傘。`}},{id:"community",title:"街燈",subtitle:"一條街替你留了位置",condition:"共同體羈絆 ≥6",check:t=>(da(t,"community")?.level??0)>=6,body:t=>`那條街的人沒有問你去了哪裡。

他們只是把店門口的燈留著，把最後一份關東煮放進保溫箱，把一張椅子搬到騎樓下。

「坐啊。」有人說。「站在那裡幹嘛。」

你坐下來。椅子有點矮，燈有點亮。

車流從面前經過。沒有人知道你昨天差點殺死一個人，或者差點被一個人殺死。

他們只知道你回來了。

有時候，這樣就夠了。`},{id:"kanda",title:"目擊者",subtitle:"神田隼人記住了你的臉",condition:"與神田對峙、說出真相，或被他放過",check:t=>!!(t.player.flags.confront_kanda||t.player.flags.talked_kanda||t.player.evidence),body:t=>`神田隼人沒有忘記你。

他記得你走路的聲音，記得你左手無名指上那道舊傷，記得你在說謊時會先眨一次眼。

他把這些寫進報告，又在交出報告前刪掉。

「為什麼？」你問。

「因為你不是案件。」他說。

他把手銬收進口袋，轉身走進 ${cn(t)} 的雨裡。

你站在原地，忽然覺得被一個最強的人記住，比被整座城市遺忘更可怕。

也更像活著。`},{id:"kin",title:"同類",subtitle:"你留下的傷口還在別人的身體裡",condition:"擊倒 ≥2 名超限者，或曾屠殺",check:t=>t.player.killsOverman>=2||!!t.player.flags.massacre,body:t=>`你殺過的人沒有全部消失。

他們出現在終端的延遲通知裡，出現在你閉眼後的黑暗裡，出現在每一場沒有聲音的雨裡。

「你以為你贏了。」其中一個說。

你沒有回答。你已經學會不跟死者爭論。

但你知道他們是對的。刻印不會說謊。它只是把名字換成數字。

而你，已經開始習慣用數字記人。`},{id:"city",title:"城市餘生",subtitle:"這座城市記得所有被刪除的紀錄",condition:"情報 ≥5，或掌握財團 Z 的秘密",check:t=>t.player.intel>=5||!!t.player.flags.riya_secret,body:t=>`${cn(t)} 有很多層。

地面上的便利商店、車站、公寓；地面下的配電室、舊地鐵、沒有門牌的辦公室。

你曾經以為自己只在最上面那一層逃亡。

後來你才知道，這座城市一直在替裏八咫保存檔案。每一條被刪除的街道，每一個被回收的個體，都在某個沒有窗戶的房間裡，靜靜地亮著。

你沒有把那些檔案全部帶走。

你只是記住了幾個名字。

這座城市也是。`},{id:"crowd",title:"圍觀",subtitle:"群眾看見了怪物，也看見了你",condition:"警戒 ≥60",check:t=>t.player.heat>=60,body:t=>`有人用手機拍下你。

影片在幾個小時內傳遍城市。標題寫著：「新宿出現超人類殺人事件」。留言說你是怪物，說你應該被處決，說政府終於要做事了。

也有人說：他看起來很害怕。

那條留言很快被洗掉。

你沒有再看第二次。

但你知道，在某個你不知道的地方，有一個人記得你當時的表情。

記得你不是生來就是怪物。`},{id:"distant",title:"遠方",subtitle:"有人保持距離，但沒有掛斷",condition:"仍有至少一條羈絆，但未達 6",check:t=>ev(t)>=2,body:t=>`通話接通的時候，對面沉默了很久。

「你還好嗎？」

你說還好。

「你騙人。」

你沒有否認。

你們聊了一些沒有用的事：天氣、工作、某個共同認識的人。誰都沒有提起那七十二小時。

掛斷前，對方說：「下次再打給我。」

你看著黑掉的手機，忽然發現自己一直在等這句話。

你沒有立刻回撥。但你把它記住了。`},{id:"nobody",title:"無名",subtitle:"沒有人來接你，也沒有人來送你",condition:"沒有有效羈絆",check:()=>!0,body:t=>`沒有人來接你。

也沒有人來送你。

這不是誰的錯。你只是在該留下聯絡方式的時候，把手機關了；在該回頭的時候，走得太快。

${cn(t)} 的雨下了一整夜。第二天早上，路面乾得像是什麼都沒有發生。

你站在車站前，看著人群走進票口。

你忽然想，如果自己現在消失，會不會有人多看一眼。

答案是沒有。

你把手插進口袋，跟著人群走了進去。`}];ys.map(({body:t,extraCondition:e,...n})=>n);const Wa=ys.flatMap(t=>Va.map(e=>({id:`${t.id}__${e.id}`,familyId:t.id,variantId:e.id,title:`${t.title}・${e.title}`,subtitle:`${t.subtitle}／${e.subtitle}`,stamp:t.stamp,tone:t.tone,condition:`${t.condition}；且${e.condition}`,familyTitle:t.title,variantTitle:e.title}))),yu=Object.fromEntries(Wa.map(t=>[t.id,t]));function nv(t,e){const n=ys.filter(s=>s.base===e),i=n.find(s=>s.extraCondition?.(t))??n[0],a=Va.find(s=>s.check(t))??Va[Va.length-1],r=yu[`${i.id}__${a.id}`]??Wa[0];return{...r,...r?{}:{}}}function iv(t,e){const n=ys.find(a=>a.id===e.familyId),i=Va.find(a=>a.id===e.variantId);return!n||!i?pl[t.ending??"nameless"].text:`${n.body(t)}

${i.body(t)}`}const Su="overman-erosion-city.endings.v1";function Ss(){try{if(typeof localStorage>"u")return[];const t=localStorage.getItem(Su),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}catch{return[]}}function av(t){const e=Ss();if(e.includes(t))return e;const n=[...e,t];try{typeof localStorage<"u"&&localStorage.setItem(Su,JSON.stringify(n))}catch{}return n}const Mu=[{id:"basic_melee",name:"近身攻擊",style:"melee",stat:"strength",range:1,power:2,cost:0,tagline:"每個人都有的一拳。",description:"最基本的近身攻擊。用 STR 判定；速度 0 的目標不受射程限制。"},{id:"basic_ranged",name:"射擊",style:"ranged",stat:"dexterity",range:2,power:2,cost:0,tagline:"距離是弱者最後的護甲。",description:"最基本的遠程攻擊。用 DEX 判定；間合 3 以內有效。"},{id:"bone_break",name:"裂骨拳",style:"melee",stat:"strength",range:1,power:2,cost:0,tagline:"先打斷支撐，再打斷人。",description:"貼近後以掌根砸向鎖骨。命中時對方這一回合的架勢會塌下來。"},{id:"guillotine",name:"斷頸刃",style:"melee",stat:"strength",range:1,power:3,cost:0,tagline:"一刀，只有一刀。",description:"把全身重量壓進一記橫斬。距離太遠時，刀尖只會劃到空氣。"},{id:"iron_shoulder",name:"鐵山靠",style:"melee",stat:"strength",range:1,power:2,cost:0,tagline:"牆壁是最後的對手。",description:"以肩甲撞進對方胸口。命中後能穩住自己的重心。",effect:"guard"},{id:"strangle",name:"絞殺",style:"melee",stat:"strength",range:1,power:2,cost:2,tagline:"呼吸是最昂貴的東西。",description:"從背後扣住喉嚨。對方下一次攻擊會失去準頭。",effect:"expose"},{id:"reverse_scale",name:"逆鱗突",style:"melee",stat:"strength",range:1,power:3,cost:2,tagline:"每個人身上都有一片不能碰的鱗。",description:"短距離爆發的肘擊。需要先承受對方的節奏。"},{id:"iai",name:"居合",style:"melee",stat:"strength",range:1,power:2,cost:1,tagline:"拔刀的時間比呼吸短。",description:"在接觸的一瞬間拔刀。若對方比你快，這一刀會落空。"},{id:"rail_nail",name:"磁軌釘",style:"ranged",stat:"dexterity",range:2,power:2,cost:0,tagline:"把釘子送進下一個街區。",description:"以電磁加速射出金屬釘。間合 3 以內都能瞄準。"},{id:"rain_needle",name:"雨針",style:"ranged",stat:"dexterity",range:2,power:1,cost:0,tagline:"雨落下來之前，針已經到了。",description:"從袖口灑出細針。傷害低，但很容易命中。"},{id:"piercer",name:"穿甲彈",style:"ranged",stat:"dexterity",range:2,power:3,cost:1,tagline:"護甲只是比較慢的鐵。",description:"為長距離準備的子彈。間合 4 以內有效。"},{id:"wire",name:"絲線",style:"ranged",stat:"dexterity",range:2,power:1,cost:0,tagline:"看不見的東西最難躲。",description:"甩出細線纏住對方的腳。命中後能為下一擊製造空隙。",effect:"momentum"},{id:"throwing_blade",name:"投擲刃",style:"ranged",stat:"dexterity",range:2,power:2,cost:0,tagline:"刀離開手之後，仍然記得方向。",description:"短距離投擲。比槍安靜，也比槍慢。"},{id:"mortar",name:"迫擊",style:"ranged",stat:"dexterity",range:2,power:3,cost:2,tagline:"把整條街的距離摺成一發。",description:"拋射爆炸物。射程最遠，但會留下很大的聲音。"},{id:"tactical_mark",name:"戰術標定",style:"support",stat:"intelligence",range:3,power:0,cost:0,tagline:"先畫出對方會犯錯的地方。",description:"標定目標。下一擊 +3，並無視一部分掩護。",effect:"momentum"},{id:"adrenaline",name:"腎上腺素",style:"support",stat:"constitution",range:0,power:0,cost:0,tagline:"身體比意志更想活下去。",description:"強行穩住傷勢。回復 2 點肉體，代價是下一回合的 fumble 風險。",effect:"heal"},{id:"fear_whisper",name:"恐懼低語",style:"support",stat:"charisma",range:2,power:0,cost:1,tagline:"說出對方最不想聽的那句話。",description:"動搖目標。目標下一次攻擊 -2。",effect:"expose"},{id:"smoke",name:"煙幕",style:"support",stat:"wisdom",range:2,power:0,cost:0,tagline:"看不見的敵人，暫時不需要處理。",description:"拉開距離。這回合 AC +3，下一次移動更容易。",effect:"guard"},{id:"phase_read",name:"譜線預判",style:"support",stat:"wisdom",range:1,power:0,cost:0,tagline:"他不是比你快，只是比你早決定。",description:"讀出對方的速度宣告。下一擊 +2，並讓對方這回合的 fumble 範圍 +1。",effect:"momentum"},{id:"blood_drain",name:"血償",style:"melee",stat:"strength",range:1,power:2,cost:3,tagline:"用一點自己的血，換對方更多。",description:"以傷換傷。命中時回復 1 點肉體。",effect:"drain"}],Ul=new Map(Mu.map(t=>[t.id,t]));function rv(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}const Xa=["basic_melee","basic_ranged"];function fs(t,e=4,n=[]){const i=Math.max(2,e),a=Mu.filter(c=>!Xa.includes(c.id)),r=n.length?a.filter(c=>n.includes(c.stat)):a,s=a.filter(c=>!r.some(d=>d.id===c.id)),o=c=>c.map((d,f)=>({id:d.id,key:rv(`${t}:${d.id}:${f}`)})).sort((d,f)=>d.key-f.key).map(d=>d.id),l=[...o(r),...o(s)].slice(0,Math.max(0,i-Xa.length));return[...Xa,...l]}function Eu(t,e=[]){return{core_array:["intelligence","wisdom"],core_revive:["constitution","wisdom"],core_ward:["wisdom","constitution"],core_market:["charisma","intelligence"],core_multi:["dexterity","intelligence"],core_variable:["strength","constitution"],core_combat:["strength","dexterity"],core_focus:["wisdom","dexterity"],blade:["strength","dexterity"],flash:["dexterity","strength"],mindeye:["wisdom","intelligence"],ash:["intelligence","constitution"],regen:["constitution","strength"],siren:["charisma","wisdom"],thunder:["dexterity","strength"]}[t]??e}function sv(t){return t==="kurokawa"||t==="thug"?["strength","constitution"]:t==="ayase"||t==="shard"?["dexterity","wisdom"]:t==="crown"||t==="crownShard"?["constitution","charisma"]:t==="kanda"?["strength","dexterity"]:[]}function ov(t){const e=[...Xa,...(t??[]).filter(n=>!Xa.includes(n))];return[...new Set(e)].slice(0,4)}function nr(t){return(t??[]).map(e=>Ul.get(e)).filter(e=>!!e)}const Tu=[{id:"edge",name:"絕影一閃",en:"SEVERING FLASH",type:"melee",range:1,tagline:"一刀，把終點畫在對方身上。",description:"近戰必殺。無視 fumble，命中加值極高，單體高傷害。只能攻擊間合 ±1 內的目標。"},{id:"rain",name:"萬象灰雨",en:"ASHEN RAIN",type:"ranged",range:2,tagline:"整片天空落下來，沒有人能只被淋濕。",description:"遠程全體必殺。攻擊間合 ±2 內的所有敵人，傷害較低，但一次覆蓋全場。"},{id:"aegis",name:"絕對城塞",en:"ABSOLUTE AEGIS",type:"shield",range:0,tagline:"世界可以壞，但不可以穿過你。",description:"強力護盾。整場戰鬥吸收 9 點傷害；每場只能發動一次。"},{id:"exchange",name:"零刻交換",en:"ZERO EXCHANGE",type:"extra",range:0,tagline:"把下一秒借來，現在就用掉。",description:"立刻獲得一次額外行動。不推進回合，但本場奧義次數會被消耗。"},{id:"entropy",name:"熵印焚身",en:"ENTROPY BRAND",type:"true",range:1,tagline:"用自己的血，換一個必然的傷口。",description:"支付 2 點肉體，對間合 ±1 內的單一目標造成 6 點無視 AC 的真實傷害。可能把自己燒死。"},{id:"gravity",name:"重力井",en:"GRAVITY WELL",type:"gravity",range:0,tagline:"所有人都會落到同一個速度。",description:"把所有存活敵人的 PLOT 拉到你目前的數值，讓近戰／遠程間合重新成立。"},{id:"reversal",name:"因果逆行",en:"CAUSAL REVERSAL",type:"heal",range:0,tagline:"把已經發生的痛，倒轉一點點。",description:"回復 5 點肉體，侵蝕率 -5。每場只能發動一次。"}],ps=new Map(Tu.map(t=>[t.id,t])),ir=[{id:"q1",title:"夜間巡邏",text:`深夜的車站月台，一名受傷的陌生超越者倒在你面前。月台上沒有監視器，只有一個正在靠近的站務員。

你先做什麼？`,options:[{label:"先確認逃生路線與監視死角。",hint:"先觀察，再判斷。",axis:"I",backgrounds:["journalist","urchin"]},{label:"蹲下去，先壓住傷口。",hint:"先救人，之後再說。",axis:"E",backgrounds:["medic","store"]}]},{id:"q2",title:"你相信什麼",text:`「顯現」到底是什麼？

記者會上，專家爭論不休。你坐在電視前，心裡浮現第一個答案。`,options:[{label:"一種可以用科學解釋、也能被利用的現象。",hint:"能測量，就能對付。",axis:"S",backgrounds:["veteran","underworld"]},{label:"人類還沒準備好承認的下一種可能。",hint:"有些東西不該被歸類。",axis:"N",backgrounds:["shrine","musician"]}]},{id:"q3",title:"代價",text:`裏八咫要你交出一個無辜的人，換取自己的安全。

對方的臉模糊不清，但你知道那個人真的存在。`,options:[{label:"先問清楚代價、成功率與退路。",hint:"活下來才有資格談對錯。",axis:"T",backgrounds:["underworld","journalist"]},{label:"拒絕。就算這會讓自己活不下去。",hint:"有些答案不需要計算。",axis:"F",backgrounds:["medic","shrine"]}]},{id:"q4",title:"72小時",text:`倒數開始。城市在你面前攤開，像一張沒有標記的地圖。

你會怎麼走？`,options:[{label:"先畫出時間表、路線與備用計畫。",hint:"把未知拆成可以處理的格子。",axis:"J",backgrounds:["store","veteran"]},{label:"先走上街，讓城市告訴你答案。",hint:"計畫永遠趕不上變化。",axis:"P",backgrounds:["musician","urchin"]}]},{id:"q5",title:"人群",text:`你剛做完一件事，那件事不能被人記住。

街角有兩條路：一條通往車站前的夜市，燈很亮，人很吵；一條通往沒有路燈的河堤。

你會怎麼離開？`,options:[{label:"混進人群，讓自己變成背景的一部分。",hint:"人多的地方最安全。",axis:"E",backgrounds:["store","musician"]},{label:"走沒有人的路，確認沒有人跟上。",hint:"安靜比熱鬧可靠。",axis:"I",backgrounds:["journalist","urchin"]}]},{id:"q6",title:"稱讚",text:`有人稱讚你做得好。

那個人你只見過兩次。稱讚裡有一半是好意，另一半是試探——你自己也常做一樣的事。`,options:[{label:"順著話題聊下去，讓氣氛輕鬆一點。",hint:"關係也是一種資源。",axis:"E",backgrounds:["musician","store"]},{label:"簡短道謝，然後繼續觀察對方。",hint:"先看清楚他想要什麼。",axis:"I",backgrounds:["veteran","shrine"]}]},{id:"q7",title:"研究",text:`你拿到一份關於顯現的研究報告，厚度像一本電話簿，封面沒有任何機構的標誌。

你會先翻哪一頁？`,options:[{label:"先看數據、樣本與重現方式。",hint:"能被重複的才叫線索。",axis:"S",backgrounds:["journalist","veteran"]},{label:"先看作者為什麼要研究這個。",hint:"動機比數字更誠實。",axis:"N",backgrounds:["shrine","musician"]}]},{id:"q8",title:"夢",text:"你夢見一座城市。醒來後，記得最清楚的是什麼？",options:[{label:"街道的坡度、雨聲、便利商店的燈。",hint:"細節讓夢變成地點。",axis:"S",backgrounds:["store","urchin"]},{label:"一個沒有臉的人，站在很遠的地方。",hint:"有些畫面只是某種預感。",axis:"N",backgrounds:["shrine","underworld"]}]},{id:"q9",title:"拖累",text:`同伴的腿斷了，追兵在兩條街外。

他叫你走。他說他會自己想辦法——他說這句話的時候沒有看你。`,options:[{label:"先計算兩個人都活下來的機率。",hint:"救不了兩個人，至少要活一個。",axis:"T",backgrounds:["veteran","underworld"]},{label:"先拉他一把。之後再想辦法。",hint:"有些手不能放。",axis:"F",backgrounds:["medic","musician"]}]},{id:"q10",title:"謊言",text:`一個陌生人對你說謊。你聽出來了。

但天亮之前，只有他能把那批貨交到你手上。`,options:[{label:"當場拆穿，讓他重新談條件。",hint:"資訊不對等才是真正的危險。",axis:"T",backgrounds:["journalist","underworld"]},{label:"假裝相信，給彼此留一條路。",hint:"有些謊言是用來維持秩序的。",axis:"F",backgrounds:["store","medic"]}]},{id:"q11",title:"行李",text:"你只有三分鐘能離開住處。",options:[{label:"照清單拿：證件、藥、現金、備用終端。",hint:"先保住能讓自己活下去的東西。",axis:"J",backgrounds:["store","veteran"]},{label:"抓最重要的那一樣就走。",hint:"剩下來的都可以再找。",axis:"P",backgrounds:["musician","urchin"]}]},{id:"q12",title:"變數",text:"計畫被打亂了。",options:[{label:"先回到原本的計畫，找出哪一步錯了。",hint:"混亂裡更需要順序。",axis:"J",backgrounds:["journalist","shrine"]},{label:"直接換一條路，邊走邊修正。",hint:"活著比照計畫重要。",axis:"P",backgrounds:["musician","underworld"]}]}],lv=new Map(ir.map(t=>[t.id,t]));function Au(t){const e=[],n=(i,a)=>{const r=[...i];for(let s=0;s<a&&r.length;s++){const o=Math.floor(t()*r.length);e.push(r[o].id),r.splice(o,1)}};for(const i of["E","S","T","J"])n(ir.filter(a=>a.options[0]?.axis===i),2);n(ir.filter(i=>!e.includes(i.id)),2);for(let i=e.length-1;i>0;i--){const a=Math.floor(t()*(i+1));[e[i],e[a]]=[e[a],e[i]]}return e}function kl(t){return lv.get(t)}const cv={INTJ:"獨行的棋手",INTP:"拆解世界的旁觀者",ENTJ:"把人群當成棋盤的人",ENTP:"點火者",INFJ:"安靜的守夜人",INFP:"把夢藏進口袋的人",ENFJ:"讓別人相信自己的人",ENFP:"追著光跑的人",ISTJ:"把承諾寫成紀錄的人",ISFJ:"默默收拾殘局的人",ESTJ:"先立規矩的人",ESFJ:"讓房間亮起來的人",ISTP:"在混亂裡找手感的人",ISFP:"用身體記住世界的人",ESTP:"先跳下去再說的人",ESFP:"把今天活成節日的人"},Ms=[{id:"medic",name:"急救志工",tagline:"在別人倒下時，手會先動起來。",description:"你在夜間診所與災害現場之間長大。見識過太多來不及救的人，也學會了怎麼在沒有燈的地方止血。",statBonus:{constitution:1,wisdom:1},feature:"急救常識：休息時額外回復 1 點肉體。",start:{flags:["field_medicine"]},bondId:"saya"},{id:"store",name:"便利店夜班",tagline:"整座城市的深夜，都會經過你的櫃檯。",description:"你值過太多大夜班。誰在凌晨三點買酒、誰帶著血走進店裡、誰再也沒有出現，你都知道，只是不說。",statBonus:{charisma:1,dexterity:1},feature:"城市耳目：初始情報 +1，警戒指數 -5。",start:{intel:1,heat:-5},bondId:"kuga"},{id:"musician",name:"地下樂手",tagline:"你有把沉默唱成聲音的本事。",description:"你在車站前、在地下室、在沒有人記得的Live House裡唱過歌。掌聲很少，但你記得每一個留下來聽完的人。",statBonus:{charisma:1,wisdom:1},feature:"共鳴：聯絡羈絆時額外降低 2 點侵蝕。",start:{flags:["resonance"]},bondId:"kiritani"},{id:"journalist",name:"網路記者",tagline:"真相不是被找到的，是被追出來的。",description:"你替一家快倒閉的網路媒體跑新聞。你學會了怎麼問問題、怎麼查戶籍、怎麼在被跟蹤時甩掉對方。",statBonus:{intelligence:1,wisdom:1},feature:"追線：初始情報 +2。",start:{intel:2},bondId:"soma"},{id:"shrine",name:"神社之子",tagline:"你從小就知道，看不見的東西不代表不存在。",description:"你替家裡的神社掃落葉、遞御守、聽老人說完那些沒有人信的故事。你沒有顯現，卻比誰都習慣和未知共處。",statBonus:{constitution:1,charisma:1},feature:"鎮魂：初始侵蝕 -4。",start:{encroachment:-4},bondId:"chishiki"},{id:"underworld",name:"黑市跑腿",tagline:"你認識的城市，和地圖上的不是同一個。",description:"你替人送過不該送的東西，也替人保守過不該知道的秘密。你活到今天，靠的不是拳頭，是知道誰能信。",statBonus:{strength:1,dexterity:1},feature:"門路：初始獲得強化風衣，情報 +1。",start:{armorId:"trench",intel:1},bondId:"kuroda"},{id:"veteran",name:"自衛隊退役",tagline:"你離開部隊，卻沒有離開戰場。",description:"你待過災害派遣、待過離島警戒。你學會在噪音裡分辨腳步、在黑暗裡保持呼吸。戰爭結束了，你的身體還沒。",statBonus:{strength:1,constitution:1},feature:"戰術：AC +1。",start:{flags:["background_tactics"]},bondId:"makabe"},{id:"urchin",name:"無戶籍街童",tagline:"城市不是你的家，但你比誰都熟。",description:"你沒有戶籍，沒有畢業證書，只有一群同樣被漏掉的人。你學會睡在監視器照不到的地方，也學會不留下名字。",statBonus:{dexterity:1,wisdom:1},feature:"生存直覺：初始警戒指數 -8，潛伏時額外降低警戒指數。",start:{heat:-8,flags:["streetwise"]},bondId:"hoshino"}],Fl=new Map(Ms.map(t=>[t.id,t])),wu=[{id:"mio",name:"水島澪",relation:"妹妹・19",category:"family",pronoun:"她",description:"你最後的家人。她以為你在外地工作，每週仍會傳一張晚餐照片給你。"},{id:"minato",name:"神谷湊",relation:"弟弟・16",category:"family",pronoun:"他",description:"還在讀高中的弟弟。他把你當成英雄，每次傳訊息都用同一隻舉著拳頭的貓貼圖。他不知道你正在變成什麼。"},{id:"chihiro",name:"藤原千尋",relation:"母親・46",category:"family",pronoun:"她",description:"她總是把擔心藏進便當裡。便當盒是同一款，用了十年，蓋子上有一道被刀刮出來的白痕。你已經很久沒有回家吃晚飯。"},{id:"soichiro",name:"葛城宗一郎",relation:"父親・52",category:"family",pronoun:"他",description:"沉默的父親。你們最後一次說話是在醫院的走廊上，他說「沒事了」。你沒有問是誰沒事。"},{id:"suzu",name:"雨宮鈴",relation:"祖母・73",category:"family",pronoun:"她",description:"她記得你小時候的每一個夏天，也記得你第一次說謊的那天。她從不拆穿，只是多給你一顆糖。"},{id:"daichi",name:"佐倉大地",relation:"童年好友・27",category:"friend",pronoun:"他",description:"在城市裡開了一間 24 小時便利商店。他總說你小時候替他擋過一輛車。"},{id:"yu",name:"高瀬悠",relation:"高中同學・20",category:"friend",pronoun:"他",description:"你們一起逃過課、打過架、說過要離開這座城市。他留下來了，因為他母親那年病了。你走的時候沒有問過。"},{id:"ken",name:"三浦健",relation:"前同事・31",category:"friend",pronoun:"他",description:"你上一份工作的搭檔。他替你背過一次黑鍋，你一直沒有還。他現在在便利商店打工，見到你會先看你的手。"},{id:"rin",name:"早川凛",relation:"鄰居・24",category:"friend",pronoun:"她",description:"住在你隔壁房的女孩。她會在雨天把傘放在你門口，假裝不是她。你把那句謝謝留到今天還沒說。"},{id:"makabe",name:"真壁透",relation:"自衛隊同袍・29",category:"friend",pronoun:"他",description:"和你一起熬過災害派遣的人。他從不問你為什麼離開，只問你還活著嗎。"},{id:"kotone",name:"白石琴音",relation:"街頭樂手・22",category:"community",pronoun:"她",description:"在車站前唱歌的女孩。你曾在雨裡聽她唱完一整首，卻沒有留下名字。"},{id:"saya",name:"桐生沙耶",relation:"護士・26",category:"community",pronoun:"她",description:"急診室的夜班護士。她見過太多不能說的名字，也知道什麼時候該裝作沒看見。"},{id:"kuga",name:"久我修",relation:"便利商店店長・34",category:"community",pronoun:"他",description:"總是把快過期的飯糰留給你的店長。他說你像一隻淋濕的貓。"},{id:"aoi",name:"小鳥遊葵",relation:"咖啡師・23",category:"community",pronoun:"她",description:"凌晨還開著的咖啡店店員。她記得你每次點的咖啡，也記得你第一次沒有回來的那天。"},{id:"kuroda",name:"黑田鐵平",relation:"黑市仲介・41",category:"community",pronoun:"他",description:"什麼都賣、什麼都不問的男人。他救過你一次，也從此把你當成資產。"},{id:"chishiki",name:"神代千景",relation:"神社巫女・25",category:"community",pronoun:"她",description:"在霧見神社替人除厄的巫女。她說你身上有「不乾淨的線」，卻還是替你綁了御守。"},{id:"soma",name:"相馬遼",relation:"網路編輯・30",category:"community",pronoun:"他",description:"你以前的編輯。他相信真相，也相信點閱率；這兩件事常常打架。談到最後，他會把錄音筆放在桌上，讓你自己決定要不要關。"},{id:"hoshino",name:"星野燈",relation:"流浪少年・17",category:"community",pronoun:"他",description:"在車站地下街睡覺的少年。他替你望過風，也偷過你的錢。"},{id:"kiritani",name:"桐谷硯",relation:"地下樂團鼓手・21",category:"community",pronoun:"他",description:"你以前的團員。他總說你的歌太安靜，卻每一場都站在最前面。"}],dv=new Map(wu.map(t=>[t.id,t]));function uv(t,e,n){const i={E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0},a={};for(const d of Ms)a[d.id]=0;t.forEach((d,f)=>{const p=kl(e[f]??"")?.options[d];if(p){i[p.axis]=(i[p.axis]??0)+1;for(const v of p.backgrounds)a[v]=(a[v]??0)+1}});const r=(d,f)=>i[d]===i[f]?n()%2===0?d:f:i[d]>i[f]?d:f,s=[r("E","I"),r("S","N"),r("T","F"),r("J","P")].join(""),o=Math.max(...Object.values(a)),l=Object.keys(a).filter(d=>a[d]===o),c=l[n()%l.length]??"store";return{mbti:s,backgroundId:c}}const Ru=72,zn=100,hv=3,ml=1e4;function Es(){return{strength:0,dexterity:0,intelligence:0,constitution:0,wisdom:0,charisma:0}}function Cu(){return{codename:"鴉",codenameEn:"",gender:"unspecified",avatar:null,ultimateId:"edge",ultimateName:"絕影一閃",ultimateNameEn:"SEVERING FLASH",stats:Es(),abilityId:"core_array",skills:[],coreEpithet:"未登錄的迴路",mainStat:"strength",mbti:"ISTJ",backgroundId:"store",manifested:[],armorId:"jacket",hp:10,maxHp:10,encroachment:10,marks:0,heat:0,intel:0,surveillance:0,evidence:!1,killsNormal:0,killsOverman:0,collapse:0,wanted:!1,wantedAt:0,reviveUsed:!1,flags:{}}}function ar(t){return{version:1,phase:"title",seed:t,rngCount:0,hour:0,cityId:"shinminato",creation:{step:"questions",questionIndex:0,questionIds:[],answers:[],mbti:"ISTJ",backgroundId:"store",codename:"",codenameEn:"",gender:"unspecified",avatar:null,ultimateId:null,ultimateChoices:[],ultimateName:"",ultimateNameEn:"",stats:Es(),abilityChoices:[],abilityId:null,mainStat:null,coreEpithet:"未登錄的迴路",cityId:"shinminato",rolled:!1,selected:!1},player:Cu(),bonds:[],rivals:[],log:[],stance:"lie_low",contactTarget:null,speed:0,pending:null,eventsDone:[],ending:null,endingCombo:null,endingText:null,randomNextHour:6,manifestOffers:[],battle:null,lastRoll:null,startedAt:0}}const fv=["OBSIDIAN","NIGHTFALL","HOLLOW","CROWNLESS","ASHEN","RED","ABYSSAL","THIRTEENTH","BROKEN","FINAL","GODBURIED","SILENT","CRIMSON","ZERO","PALE","LAST"],pv=["ORACLE","SEAL","SAINT","PILGRIM","WRAITH","ECLIPSE","MESSIAH","SEAT","GAZER","SIGNAL","HALO","PSALM","CROWN","VESSEL","WITNESS","REQUIEM"];function rr(t){return`${gn(t,fv)} ${gn(t,pv)}`}const mv=["蝕目的觀測者","替神明收屍的第九人","空禱的聖女","黑帳的拾骨者","末日赴約者","零度聖骸","空席的偽神","末路的鏽刃","終末冠者","雨夜數屍者","無影十三席","弒神信徒","絕望觀測者","退貨救世主","末日醒者","非人怪物"];function Lu(t){const e={};for(const n of Object.keys(Es()))e[n]=Q_(t);return e}const gv=["零時","灰燼","第七","無名","終末","逆鱗","血月","虛數","神葬","空白"],_v=["斷界","灰雨","城塞","交換","焚身","重力井","逆行","殘響","王座","一閃"],vv=["ZERO","ASHEN","SEVENTH","NAMELESS","TERMINAL","BLOOD","IMAGINARY","GODBURIED","HOLLOW","LAST"],bv=["EDGE","RAIN","AEGIS","EXCHANGE","BRAND","WELL","REVERSAL","ECHO","THRONE","FLASH"];function xv(t){const e=j_(t,Tu).slice(0,3),n=new Set,i=new Set;return e.map((a,r)=>{let s=`${gn(t,gv)}・${gn(t,_v)}`,o=`${gn(t,vv)} ${gn(t,bv)}`;for(;n.has(s);)s=`${s}・${r+1}`;for(;i.has(o);)o=`${o} ${r+1}`;return n.add(s),i.add(o),{id:a.id,name:s,en:o}})}function Ts(t,e){const n=Lu(t),i=fl.filter(c=>c.id!==e),a=gn(t,i.length?i:fl),r=xu(`${t.seed}:${a.id}`)%999+1,s=`${gn(t,V_)}${gn(t,W_)}・第${r}相`,o=gn(t,cr),l=t.creation;t.creation={step:"roll",questionIndex:l.questionIds?.length??10,questionIds:l.questionIds??[],answers:l.answers??[],mbti:l.mbti||"ISTJ",backgroundId:l.backgroundId||"store",codename:l.codename||gn(t,mv),codenameEn:l.codenameEn||rr(t),gender:l.gender??"unspecified",avatar:l.avatar??null,ultimateId:null,ultimateChoices:xv(t),ultimateName:"",ultimateNameEn:"",stats:n,abilityChoices:[],abilityId:a.id,mainStat:null,coreEpithet:s,cityId:o.id,rolled:!0,selected:!1},t.bonds=Iu(t)}function yv(t,e){if(t.phase!=="creation"||t.creation.step!=="questions")return;const n=kl(t.creation.questionIds[t.creation.questionIndex]??"");if(!n||!n.options[e])return;if(t.creation.answers=[...t.creation.answers??[],e],t.creation.answers.length<t.creation.questionIds.length){t.creation.questionIndex=t.creation.answers.length;return}const i=uv(t.creation.answers,t.creation.questionIds,()=>Xt(t,0,999));t.creation.mbti=i.mbti,t.creation.backgroundId=i.backgroundId,Ts(t)}function Pu(t){t.creation.step="questions",t.creation.questionIndex=0,t.creation.questionIds=Au(()=>Xt(t,0,1e5)/1e5),t.creation.answers=[],t.creation.mbti="ISTJ",t.creation.backgroundId="store",t.creation.abilityId=null,t.creation.rolled=!1,t.creation.stats=Es(),t.bonds=[]}function Iu(t){const e=Fl.get(t.creation.backgroundId)??Ms[0],n=[],i=(s,o)=>{const l=dv.get(s);return l?{...l,level:Math.max(1,Math.min(5,o)),alive:!0,lastContact:-20}:null},a=i(e.bondId,Xt(t,2,3)+1);a&&n.push(a);for(const s of["family","friend","community"]){if(n.length>=3)break;if(n.some(d=>d.category===s))continue;const o=wu.filter(d=>d.category===s&&!n.some(f=>f.id===d.id));if(!o.length)continue;const l=gn(t,o),c=i(l.id,Xt(t,1,3));c&&n.push(c)}const r=(t.creation.mbti?.[0]??"I")==="E";for(const s of n)r&&(s.category==="friend"||s.category==="community")&&(s.level=Math.min(5,s.level+1)),!r&&s.category==="family"&&(s.level=Math.min(5,s.level+1));return n.sort((s,o)=>{const l={family:0,friend:1,community:2};return l[s.category]-l[o.category]})}function Du(t,e){return t.bonds.find(n=>n.alive&&n.category===e)??null}function Sv(t){t.creation.stats=Lu(t),t.creation.rolled=!0}function Mv(t,e){t.creation.mainStat=e}function Nu(t){const e=t.creation;if(!e.abilityId)return;const n=dr.get(e.cityId)??cr[0],i=_a.get(e.abilityId),a=Fl.get(e.backgroundId)??Ms[0],r=e.mainStat??Object.keys(e.stats).sort((d,f)=>e.stats[f]-e.stats[d])[0],s={...e.stats};for(const[d,f]of Object.entries(a.statBonus))s[d]=Math.min(20,s[d]+(f??0));s[r]=Math.min(20,s[r]+2);const o=Math.max(6,10+va(s.constitution+(i.statBonus.constitution??0))),l=t.bonds.length?t.bonds:Iu(t),c={};for(const d of a.start.flags??[])c[d]=!0;t.cityId=n.id,t.hour=0,t.player={...Cu(),codename:e.codename.trim()||"鴉",codenameEn:(e.codenameEn??"").trim()||rr(t),gender:e.gender??"unspecified",avatar:e.avatar??null,ultimateId:e.ultimateId??"edge",ultimateName:e.ultimateName||"絕影一閃",ultimateNameEn:e.ultimateNameEn||"SEVERING FLASH",stats:s,abilityId:i.id,coreEpithet:e.coreEpithet,mainStat:r,mbti:e.mbti||"ISTJ",backgroundId:a.id,manifested:[],armorId:a.start.armorId??"jacket",hp:o,maxHp:o,skills:fs(`${t.seed}:${e.codename.trim()||"鴉"}:${t.rngCount}`,4,Eu(i.id,[r])),encroachment:Math.max(0,Math.min(200,Xt(t,8,16)+(a.start.encroachment??0))),heat:Math.max(0,Math.min(100,a.start.heat??0)),marks:0,intel:a.start.intel??0,surveillance:0,flags:c},t.bonds=l,t.rivals=q_.map(d=>({...d})),t.phase="play",t.stance="lie_low",t.contactTarget=l[0].id,t.log=[],t.eventsDone=[],t.ending=null,t.endingText=null,t.pending={id:"opening"},t.randomNextHour=Xt(t,5,8),t.manifestOffers=[],t.speed=1,t.startedAt=Date.now(),Ue(t,"story",`Project Ignis 第七次選別開始。城市：${n.name}。刻印目標：${zn}。`),Ue(t,"story",`顯現真名：〈${e.coreEpithet}〉。MBTI：${t.player.mbti}。背景：${a.name}。`),Ue(t,"story",`背景特典：${a.feature}`)}function zi(t){return dr.get(t.cityId)??cr[0]}function ba(t){return _a.get(t.player.abilityId)??_a.get("core_array")}function gl(t){return(t.player.manifested??[]).map(e=>_a.get(e)).filter(e=>!!e)}function ur(t){return[ba(t),...gl(t)]}function _i(t){const e=new Set;for(const n of ur(t))for(const i of n.tags)e.add(i);return e}function pa(t,e){const n=t.player.stats[e]??10;let i=0;for(const a of ur(t))i+=a.statBonus[e]??0;return Math.min(24,n+i)}function mi(t,e){return va(pa(t,e))}function Oi(t){const e=t.player.encroachment;return e>=160?4:e>=120?3:e>=90?2:e>=60?1:0}const Ev=new Set(["flash","shell","thunder","beast","limit","core_combat","core_variable","core_focus"]);function Tv(t){return ur(t).some(e=>Ev.has(e.id))}function za(t){return Tv(t)?7:6}function Di(t){return hs[Math.min(7,Math.max(0,Math.floor(t)))]}function Av(t){const e=Oi(t);return e>0?`顯現增幅 +${e}`:"顯現增幅 ±0"}function wv(t){return er.get(t.player.armorId)??er.get("jacket")}function ni(t){const e=wv(t);let n="dexterity",i=0,a=0;for(const l of ur(t))l.acStat&&(n=l.acStat),i+=l.acBonus??0,a+=l.acCapBonus??0;t.player.flags?.background_tactics&&(i+=1);const r=mi(t,n),s=e.dexCap+a,o=Math.min(r,s);return{value:e.base+o+i,armor:e,stat:n,statMod:r,usedMod:o,cap:s,abilityBonus:i}}function Rv(t){const e=ni(t);return`${e.armor.name} ${e.armor.base} + ${Kn[e.stat]} ${e.usedMod>=0?"+":""}${e.usedMod} + 顯現 ${e.abilityBonus} = AC ${e.value}`}function Uu(t,e,n){const i=er.get(e);i&&(t.player.armorId=e,Ue(t,"system",`${n??"更換護甲"}：${i.name}（AC 基礎 ${i.base}，敏捷上限 ${i.dexCap}）。`))}function ku(t,e,n,i){const a=ni(t),r=Vt(t),s=r+e;r===20||r!==1&&s>=a.value?(Ue(t,"danger",`${i}：d20 ${r} + ${e} = ${s} ≥ AC ${a.value}，命中。`),sn(t,n,i)):Ue(t,"action",`${i}：d20 ${r} + ${e} = ${s} < AC ${a.value}，攻擊被護甲與步伐避開。`)}function Cv(t){const e=new Set([t.player.abilityId,...t.player.manifested??[]]),n=bu.filter(r=>!e.has(r.id)),i=[],a=[...n];for(;i.length<3&&a.length;){const r=Xt(t,0,a.length-1);i.push(a[r].id),a.splice(r,1)}return t.manifestOffers=i,i}function Lv(t,e){return zi(t).stat===e?1:0}function Pv(t){return t>=100?{label:"暴走",tone:"monster",index:5}:t>=90?{label:"崩壞",tone:"critical",index:4}:t>=70?{label:"臨界",tone:"danger",index:3}:t>=40?{label:"侵蝕",tone:"warn",index:2}:t>=20?{label:"不安定",tone:"uneasy",index:1}:{label:"穩定",tone:"stable",index:0}}function Fu(t,e){return e?t>=90?"立即逮捕":t>=70?"指名手配":t>=45?"列管對象":t>=20?"被注意到":"尚未入檔":t>=60?"謠言四起":t>=35?"有人報警":t>=15?"街頭耳語":"無聲"}function Ue(t,e,n){t.log.push({hour:t.hour,kind:e,text:n}),t.log.length>160&&(t.log=t.log.slice(-160))}function St(t,e,n,i,a=0,r=!1){const s=Vt(t),o=mi(t,e),l=Lv(t,e);let c=0;(e==="constitution"||e==="charisma")&&t.player.encroachment>=80&&(c=t.player.encroachment>=100?-4:-2),t.player.encroachment>=100&&e==="intelligence"&&(c-=1);const d=s+o+a+l+c,f=s===20,u=s===1,p=f||!u&&d>=n,v=`${i}：d20 ${s} ${o>=0?"+":""}${o}${a?` ${a>=0?"+":""}${a}`:""}${l?` +${l}城市`:""}${c?` ${c}侵蝕`:""} = ${d} / DC ${n} ─ ${p?"成功":"失敗"}`;return t.lastRoll={label:i,roll:s,statMod:o,extra:a+l+c,total:d,dc:n,success:p,nat20:f,nat1:u},r||Ue(t,f?"story":p?"roll":"danger",v),{ok:p,roll:s,total:d,dc:n,statMod:o,extra:a+l+c,nat20:f,nat1:u,line:v}}function As(t){const e=[["strength",pa(t,"strength")],["dexterity",pa(t,"dexterity")],["intelligence",pa(t,"intelligence")]];return e.sort((n,i)=>i[1]-n[1]),e[0][0]}function hr(t){return Math.max(0,...ur(t).map(e=>e.combat))+Oi(t)}function It(t,e,n){if(e<=0)return;const i=e*hv;t.player.marks+=i,Ue(t,"action",`${n} 刻印 +${i}（${t.player.marks}）。`)}function ae(t,e,n){if(e===0)return;let i=e;e>0&&(i=Math.ceil(e*zi(t).heatMod*(_i(t).has("beast")?1.15:1))),t.player.heat=Bi(t.player.heat+i,0,100),n&&Ue(t,i>0?"danger":"action",`${n} 警戒指數 ${i>0?"+":""}${i}（${t.player.heat}）。`),t.player.heat>=100&&!t.player.wanted&&t.hour>=48&&(t.player.wanted=!0,t.player.wantedAt=t.hour)}function ke(t,e,n){if(e===0)return;const i=t.player.encroachment;t.player.encroachment=Bi(t.player.encroachment+e,0,200),n&&Ue(t,e>0?"danger":"bond",`${n} 侵蝕 ${e>0?"+":""}${e}（${i} → ${t.player.encroachment}）。`);for(const a of[60,90,120,160])i<a&&t.player.encroachment>=a&&Ue(t,"danger",`侵蝕率突破 ${a}%。顯現增幅提升（+${Oi(t)}）：你的力量變得更清楚，也更不像人。`);i<100&&t.player.encroachment>=100&&Ue(t,"danger","侵蝕率突破 100%。你聽見自己的名字被某種東西咬碎。")}function Zt(t,e,n){const i=e??ba(t).cost+(t.player.manifested?.length??0);return ke(t,i,n??`發動「${ba(t).name}」`),i}function ht(t,e,n){if(e<=0)return;const i=_i(t).has("intel")?1:0;t.player.intel+=e+i,Ue(t,"action",`${n??"取得情報"} 情報 +${e+i}（${t.player.intel}）。`)}function sn(t,e,n){if(!(e<=0)){if(t.player.hp-e<=0&&_i(t).has("revive")&&!t.player.reviveUsed){t.player.reviveUsed=!0,t.player.hp=3,t.player.encroachment=Bi(t.player.encroachment+8,0,200),Ue(t,"danger",`${n} 肉體歸零。再生顯現強行把你拼回來（HP 3／侵蝕 +8）。`);return}t.player.hp=Bi(t.player.hp-e,0,t.player.maxHp),Ue(t,"danger",`${n} 肉體 -${e}（${t.player.hp}/${t.player.maxHp}）。`),t.player.hp<=0&&t.phase==="play"&&nn(t,"dead")}}function xa(t,e,n){if(e<=0)return;const i=t.player.hp;t.player.hp=Bi(t.player.hp+e,0,t.player.maxHp),t.player.hp!==i&&Ue(t,"action",`${n??"包紮傷口"} 肉體 +${t.player.hp-i}（${t.player.hp}/${t.player.maxHp}）。`)}function sr(t,e,n){const i=t.bonds.find(r=>r.id===e);if(!i||!i.alive)return;const a=i.level;i.level=Bi(i.level+n,1,5),i.level!==a&&Ue(t,n>0?"bond":"danger",`${i.name} 的羈絆 ${n>0?"+":""}${i.level-a}（${i.level}）。`)}function Fn(t){return t.bonds.filter(e=>e.alive).reduce((e,n)=>e+n.level,0)}function fr(t,e){const n=t.bonds.find(r=>r.id===e);if(!n||!n.alive)return"那條線已經斷了。";if(t.hour-n.lastContact<6)return`${n.name} 才剛掛上電話。再打一次，只會讓對方更擔心。`;const i=8+n.level*2+(_i(t).has("bond")?4:0)+(t.player.flags?.resonance?2:0);n.lastContact=t.hour,ke(t,-i,`與${n.name}說話`),sr(t,e,1),t.player.surveillance+=3,t.player.heat=Bi(t.player.heat+1,0,100),t.player.encroachment>=80?Ue(t,"bond",`${n.name} 在電話那頭沉默很久。「你的聲音……聽起來不太一樣。」`):Ue(t,"bond",`${n.name} 的聲音把你從懸崖邊拉回來一點。`),t.player.surveillance>=9&&Ue(t,"danger","裏八咫注意到你仍與外界保持聯繫。");const a=["你們聊了一些沒有用的話。你發現自己一直在聽。",`「你那邊還好嗎？」${n.name}問。你說還好。`,`${n.name}講了一件很小的事，你笑了。笑完才想起自己在什麼地方。`,"通話很短。掛斷之後，你多站了一會兒。"][(t.hour+n.level)%4];return`你與${n.name}短暫地回到了原本的世界。侵蝕 -${i}。

${a}`}function ii(t){const e=[{name:t.player.codename,marks:t.player.marks,you:!0},...t.rivals.filter(i=>i.status==="active").map(i=>({name:i.name,marks:i.marks,you:!1}))].sort((i,a)=>a.marks-i.marks);return{rank:e.findIndex(i=>i.you)+1,total:e.length,list:e}}function nn(t,e){if(t.phase==="ending")return;t.phase="ending",t.ending=e;const n=nv(t,e);t.endingCombo=n.id,t.endingText=iv(t,n),av(n.id),t.pending=null,t.speed=0}function Bi(t,e,n){return Math.max(e,Math.min(n,t))}const Ln={kurokawa:{key:"kurokawa",name:"黑川巌",title:"絞肉機・肉體強化",portrait:"kurokawa",hp:7,ac:13,attack:7,damage:2,speed:6,ultimateName:"斷骨絞刑",ultimateEn:"BONE GALLOWS",ultimateDamage:4},thug:{key:"thug",name:"路人",title:"被捲入的普通人",portrait:"thug",hp:3,ac:11,attack:5,damage:1,speed:0},ayase:{key:"ayase",name:"綾瀬凍",title:"玻璃聖母・結晶",portrait:"ayase",hp:6,ac:15,attack:6,damage:2,speed:6,ultimateName:"絕對零域",ultimateEn:"ABSOLUTE ZERO",ultimateDamage:3},shard:{key:"shard",name:"冰晶殘影",title:"被留下來的結晶",portrait:"shard",hp:3,ac:14,attack:4,damage:1,speed:4},crown:{key:"crown",name:"王冠",title:"最終首領・侵蝕率 100%",portrait:"crown",hp:10,ac:17,attack:10,damage:3,speed:7,ultimateName:"終末冠冕",ultimateEn:"TERMINAL CORONATION",ultimateDamage:5},crownShard:{key:"crownShard",name:"王冠的結晶",title:"會自己尋找獵物的碎片",portrait:"crownShard",hp:4,ac:14,attack:6,damage:1,speed:3},kanda:{key:"kanda",name:"神田隼人",title:"最強現代智人・刑警",portrait:"kanda",hp:999,ac:24,attack:99,damage:3,speed:0,unbeatable:!0}},Iv={kurokawa:{enemies:[Ln.kurokawa,Ln.thug,Ln.thug],reward:"kurokawa",intro:["鐵鍊在手裡繞了兩圈。","「代號，」他說，「『鐵血縛鎖』。」","兩個路人被他從人群裡推出來，一個堵住巷口，一個被迫爬上防火梯。","「真名？等我覺得你有資格知道，再講。」","他笑得很開心。"].join(`

`)},ayase:{enemies:[Ln.ayase,Ln.shard,Ln.shard],reward:"ayase",intro:["她沒有立刻動手。","「冰棺聖母。」","她把手套拉緊，讓空氣中的水氣凝成三片薄冰。","「你可以用這個代號記住我。真名不是給陌生人聽的。」","「我給過你機會。」"].join(`

`)},crown:{enemies:[Ln.crown,Ln.crownShard,Ln.crownShard],reward:"crown",final:!0,intro:["他站在浮起的貨櫃之間。","「終末冠者。」","兩塊結晶從他的身體剝落，落地後自己站了起來。","「這是我給世界的最後一個代號。來吧，讓我看看人類能走到哪裡。」"].join(`

`)},kanda:{enemies:[Ln.kanda],reward:null,endingOnLoss:"caught",unbeatable:!0,final:!0,intro:["神田把傘靠在牆邊。","他抬起手，一把漆黑的劍刃從天而降，穩穩落進掌心。","「我討厭打架。」","他看了一眼手錶。","「所以我不會花太久。」"].join(`

`)}};function Kt(t){return t.enemies.filter(e=>e.alive)}function De(t,e,n="neutral"){t.battle?.log.push({text:e,tone:n}),(t.battle?.log.length??0)>48&&(t.battle.log=t.battle.log.slice(-48))}function Sn(t,e,n){const i=t.battle;if(i){if(i.shield>0){const a=Math.min(i.shield,e);if(i.shield-=a,e-=a,De(t,`絕對城塞吸收 ${a} 點傷害。${i.shield>0?`剩餘護盾 ${i.shield}。`:"護盾碎裂。"}`,"good"),e<=0)return}t.player.hp=Math.max(0,t.player.hp-e),De(t,`${n} 肉體 -${e}（${t.player.hp}/${t.player.maxHp}）。`,"danger"),t.player.hp<=0&&Fv(t,`你倒了下去。

視野邊緣變成黑色，最後一個聲音是自己心跳停下來的回音。`)}}function vi(t,e,n,i){const a=t.battle;if(!(!a||e.unbeatable||!e.alive)&&(e.hp=Math.max(0,e.hp-n),De(t,`${i} ${e.name} -${n}（${e.hp}/${e.maxHp}）。`,"good"),e.hp<=0)){e.alive=!1,De(t,`${e.name} 倒下了。`,"good");const r=Kt(a)[0];r&&(a.targetId=r.id),Kt(a).length||mr(t)}}function Dv(t,e){const n=t.battle;if(!n||n.status!=="active"||!e.alive)return;if(e.unbeatable){Sn(t,3,`${e.name}甚至沒有認真。`);return}if(e.ultimateName&&!e.ultimateUsed&&e.hp<=Math.ceil(e.maxHp/2)){e.ultimateUsed=!0;const g=Vt(t),h=ni(t).value+n.guard,T=g+e.attack+3;g===20||T>=h?(n.guard=0,Sn(t,e.ultimateDamage??4,`${e.name}展開必殺奧義「${e.ultimateName}」。d20 ${g} + ${e.attack} + 3 ≥ AC ${h}。`)):De(t,`${e.name}的必殺奧義「${e.ultimateName}」落空。d20 ${g} + ${e.attack} + 3 < AC ${h}。`,"good");return}const i=(n.playerPlot??0)===0?0:Math.abs((e.plot??0)-(n.playerPlot??0)),r=nr(e.skills).filter(g=>g.power>0).map(g=>({skill:g,reach:g.style==="melee"?1:g.style==="ranged"?2:g.range})).filter(({reach:g})=>i<=g).sort((g,h)=>h.skill.power-g.skill.power)[0];if(!r){De(t,`${e.name}找不到能穿過間合的攻擊角度。`,"good");return}const s=r.skill,o=Vt(t),l=e.plot??0;if(l>0&&o<=l){De(t,`${e.name}的${s.name}快到失控。d20 ${o} ≤ 宣告速度 ${l}，fumble。`,"good");return}const d=va(s.stat==="strength"?e.strength:e.dexterity),f=e.attack+d+(s.style==="melee"?Math.max(0,(e.plot??0)-(n.playerPlot??0)):0),u=ni(t).value+n.guard,p=o+f;if(!(o===20||o!==1&&p>=u)){De(t,`${e.name}的${s.name}落空。d20 ${o} + ${f} < AC ${u}。`,"good"),n.guard=0;return}n.guard=0;const x=s.power+Math.floor(d/3);Sn(t,Math.max(1,x),`${e.name}使出${s.name}（${s.style==="melee"?"STR":"DEX"}）。d20 ${o} + ${f} ≥ AC ${u}。`)}function Nv(t,e){const n=t.battle;!n||n.status!=="active"||n.phase!=="action"||!n.awaiting||Ul.has(e)&&(n.selectedSkill=n.selectedSkill===e?null:e)}function Uv(t,e,n){const i=t.battle;if(!i||i.status!=="active"||i.phase!=="action"||!i.awaiting)return;const a=Ul.get(e);if(!a)return;const r=i.enemies.find(g=>g.id===(n??i.targetId)&&g.alive)??Kt(i)[0];if(!r){mr(t);return}n&&(i.targetId=r.id),i.selectedSkill=null;const s=(r.plot??0)===0?0:Math.abs((i.playerPlot??0)-(r.plot??0)),o=(r.plot??0)===0||a.style==="support"&&a.power===0&&a.range===0?99:a.style==="melee"?1:a.style==="ranged"?2:a.range;if(s>o){De(t,`${a.name}的射程不足：間合 ${s} > ${o}。`,"bad");return}i.awaiting=!1;const l=a.stat,c=mi(t,l),d=hr(t),f=Vt(t),u=i.playerPlot??0,p=u>0&&f<=u,v=()=>{i.status==="active"&&(i.queueIndex+=1,pr(t))};if(a.cost>0&&Zt(t,a.cost,`使用${a.name}`),p){De(t,`${a.name}在速度 ${u} 失控。d20 ${f} ≤ ${u}，fumble。`,"bad"),Sn(t,1,"你被自己的動作甩了出去。"),v();return}if(a.effect==="heal"){const g=t.player.hp;t.player.hp=Math.min(t.player.maxHp,t.player.hp+2),De(t,`${a.name}：肉體 +${t.player.hp-g}。`,"good"),v();return}if(a.effect==="guard"){i.guard=3,De(t,`${a.name}：本回合 AC +3。`,"good"),v();return}if(a.effect==="momentum"){i.momentum=Math.max(i.momentum,3),De(t,`${a.name}：下一擊 +3。`,"good"),v();return}if(a.effect==="expose"){r.plot=Math.max(0,(r.plot??0)-1),De(t,`${a.name}：${r.name}的架勢被撕開。`,"good"),v();return}const x=f+c+d+i.momentum;if(i.momentum=0,f===20||f!==1&&x>=r.ac){const g=a.power+Math.floor(c/3)+(a.effect==="drain"?1:0);vi(t,r,Math.max(1,g),`${a.name}命中（${l==="strength"?"STR":"DEX"}）。d20 ${f} + ${c} + ${d} = ${x}。`),a.effect==="drain"&&i.status==="active"&&(t.player.hp=Math.min(t.player.maxHp,t.player.hp+1),De(t,`${a.name}奪回 1 點肉體。`,"good"))}else De(t,`${a.name}落空。d20 ${f} + ${c} + ${d} = ${x} < AC ${r.ac}。`,"bad");i.status==="active"&&v()}function kv(t,e){const n=[{id:"player",speed:e.playerPlot??0,tie:Vt(t)},...e.allies.filter(i=>i.alive).map(i=>({id:`ally:${i.id}`,speed:i.plot??0,tie:Vt(t)})),...Kt(e).map(i=>({id:i.id,speed:i.plot??0,tie:Vt(t)}))];n.sort((i,a)=>a.speed-i.speed||a.tie-i.tie||(i.id==="player"?-1:1)),e.queue=n.map(i=>i.id),e.queueIndex=0}function pr(t){const e=t.battle;if(!e||e.status!=="active")return;let n=0;for(;n++<32&&e.status==="active";){if(!Kt(e).length){mr(t);return}if(e.queueIndex>=e.queue.length){if(e.maxRounds!==null&&e.round>=e.maxRounds){e.status="lost",e.awaiting=!1,e.result=`戰鬥拖得太久。第 ${e.round} 回合結束時，裏八咫的封鎖線已經收緊。

你只能趁監視空隙退出去。沒有刻印，沒有勝利。`,e.reward=null,Ue(t,"danger","戰鬥超過回合上限，強制脫離。");return}e.round+=1,e.awaiting=!1,e.phase="plot",e.playerPlot=null;for(const r of Kt(e))r.plot=null;for(const r of e.allies)r.plot=null;return}const i=e.queue[e.queueIndex];if(i.startsWith("ally:")){const r=e.allies.find(o=>`ally:${o.id}`===i&&o.alive);if(e.queueIndex+=1,!r)continue;const s=Kt(e)[0];s&&e.status==="active"&&(s.unbeatable?De(t,`${r.name}試著替你擋住神田，但只換來半秒。`,"neutral"):vi(t,s,2,`${r.name}從側面支援，擊中${s.name}。`));continue}if(i==="player"){e.awaiting=!0;return}const a=e.enemies.find(r=>r.id===i);e.queueIndex+=1,!(!a||!a.alive)&&Dv(t,a)}}function mr(t){const e=t.battle;!e||e.status!=="active"||(e.status="won",e.awaiting=!1,e.result=Ov(e.reward),Ue(t,"story",`戰鬥勝利：${e.enemies.map(n=>n.name).join("、")}。`))}function Fv(t,e){const n=t.battle;!n||n.status!=="active"||(n.status="lost",n.awaiting=!1,n.result=`${e}

${n.endingOnLoss?"你被神田隼人制伏了。":"你勉強保住一口氣，退出了戰場。"}`,Ue(t,"danger",`戰鬥失利：${n.enemies.map(i=>i.name).join("、")}。`))}function Ov(t){return t==="kurokawa"?`黑川跪在地上，鐵鍊從手裡滑落。

那兩個路人早就跑了。

他還在笑，笑得像一個終於玩夠的孩子。

「你比我……更適合這遊戲。」

終端震動。刻印 +45。`:t==="ayase"?`綾瀬的冰晶碎了一地。

她低頭看著穿過胸口的那一擊，表情不是憤怒，而是失望。

「你原本……可以不用變成這樣的。」

終端震動。刻印 +60。`:t==="crown"?`王冠的結晶裂開一道縫。

兩塊碎片同時停止活動，落回地面。

他低頭看著傷口，笑了。

「原來我還會痛。」

他沒有倒下。

但你已經在他身上留下了記號。`:"對手倒下了。"}function yi(t,e){const n=Iv[e];if(!n)return;const i=Math.max(0,t.player.hp);t.pending=null,t.lastRoll=null,t.player.skills=ov(t.player.skills?.length?t.player.skills:fs(`${t.seed}:${t.player.codename}:${t.rngCount}`));const a=t.bonds.filter(c=>c.alive&&c.level>=6).sort((c,d)=>d.level-c.level)[0],r=a?[{id:`ally-${a.id}`,name:a.name,bondId:a.id,hp:5+Math.min(3,Math.floor(a.level/3)),maxHp:5+Math.min(3,Math.floor(a.level/3)),speed:6,plot:null,alive:!0}]:[],s=["末永","小宮","橋本","阿南","三浦"],o=e==="kanda"?[]:[{id:`civilian-${t.rngCount}`,name:s[t.rngCount%s.length],alive:!0,status:"hiding"}],l={id:`${e}-${t.hour}-${t.rngCount}`,enemies:n.enemies.map((c,d)=>({id:`${c.key}-${d}`,name:c.name,title:c.title,portrait:c.portrait,hp:c.hp,maxHp:c.hp,ac:c.ac,attack:c.attack,damage:c.damage,speed:c.speed,strength:c.strength??c.attack,dexterity:c.dexterity??c.attack,skills:fs(`${t.seed}:${e}:${c.key}:${d}:${t.hour}`,4,sv(e)),ultimateName:c.ultimateName,ultimateEn:c.ultimateEn,ultimateDamage:c.ultimateDamage,ultimateUsed:!1,plot:null,alive:!0,unbeatable:c.unbeatable})),allies:r,civilians:o,targetId:null,playerSpeed:za(t),playerPlot:null,phase:"plot",round:1,queue:[],queueIndex:0,awaiting:!1,guard:0,momentum:0,ultimateUsed:!1,shield:0,log:[{text:n.intro,tone:"danger"}],status:"active",result:null,unbeatable:!!n.unbeatable,introSeen:!1,maxRounds:n.final?null:1+n.enemies.length+r.length+o.length+1,finalBattle:!!n.final,selectedSkill:null,reward:n.reward,endingOnLoss:n.endingOnLoss??null};t.battle=l,l.targetId=Kt(l)[0]?.id??null,t.player.hp=i}function Bv(t){t.battle&&(t.battle.introSeen=!0)}function $v(t,e){const n=t.battle;if(!n||n.phase!=="plot"||n.status!=="active")return;const i=Math.floor(e);i<0||i>n.playerSpeed||(n.playerPlot=i)}function zv(t){const e=t.battle;if(!e||e.phase!=="plot"||e.status!=="active"||e.playerPlot===null)return;for(const i of Kt(e)){const a=Math.max(0,i.speed),r=Math.random();i.plot=a===0?0:Math.min(a,Math.floor(r*(a+1)))}for(const i of e.allies)i.plot=0;e.phase="action",e.selectedSkill=null,e.queue=[];const n=[`你 ${e.playerPlot}`,...Kt(e).map(i=>`${i.name} ${i.plot??0}`)].join("／");De(t,`速度公開：${n}。`,"neutral");for(const i of Kt(e))i.ultimateName&&!i.ultimateUsed&&i.hp<=Math.ceil(i.maxHp/2)&&De(t,`${i.name}的奧義「${i.ultimateName}」開始凝聚。`,"danger");kv(t,e),e.awaiting=!1,pr(t)}function hd(t,e){const n=t.battle;if(!n||n.status!=="active"||!n.awaiting)return;const i=n.enemies.find(a=>a.id===e&&a.alive);i&&(n.targetId=i.id)}function Hv(t,e){const n=t.battle;if(!n||n.status!=="active"||n.phase!=="action"||!n.awaiting)return;const i=n.enemies.find(p=>p.id===n.targetId&&p.alive)??Kt(n)[0];if(!i){mr(t);return}const a=mi(t,As(t)),r=hr(t),s=mi(t,"charisma"),o=mi(t,"dexterity"),l=mi(t,"wisdom"),c=n.playerPlot??0,d=Di(c);n.awaiting=!1;const f=p=>c>0&&p<=c,u=()=>{n.status==="active"&&(n.queueIndex+=1,pr(t))};if(n.unbeatable){if(e==="talk"){n.status="lost",n.result=`你舉起手。

神田看著你，沒有立刻上前。

「你做得很好。」

「什麼？」

「活到現在。」

他把手銬收起來，改為抓住你的手臂。`,n.endingOnLoss="caught";return}if(e==="flee"){const p=Vt(t);if(f(p))De(t,`你在 ${d.name} 的速度下失去平衡。d20 ${p} ≤ ${c}。`,"bad"),Sn(t,2,"神田沒有追。他只是等你摔倒。");else if(p+o>=18){n.status="escaped",n.result=`你沒有回頭。

身後的腳步聲停了半拍，然後又開始。

但這一次，它沒有跟上你。`,n.reward="kanda_escape",De(t,"你從神田手裡逃了出去。","good");return}else De(t,`你試著逃。d20 ${p} + ${o} < DC 18。`,"bad"),Sn(t,3,"神田在巷口等你。");u();return}if(e==="power"){if(_i(t).has("escape")||_i(t).has("fate")){Zt(t,10,"在神田面前發動顯現"),n.status="escaped",n.result=`你讓顯現替自己爭取了零點幾秒。

神田的手穿過殘影，抓住一把雨。

你已經不在那裡了。`,n.reward="kanda_escape",ae(t,-15,"你從神田手裡脫身");return}De(t,"你的顯現在他面前像一張濕掉的紙。","bad"),Sn(t,4,"神田單手扣住你的喉嚨。"),u();return}De(t,e==="guard"?"你擺出防禦姿勢。神田沒有急著進攻。":"你的攻擊穿過殘影。神田甚至沒有移動腳步。","neutral"),e!=="guard"&&Sn(t,1,"他等你出手完，才動手。"),u();return}if(e==="strike"){const p=Vt(t),v=f(p),x=p+a+r+n.momentum;n.momentum=0,v?(De(t,`強攻在 ${d.name} 的速度下失控。d20 ${p} ≤ ${c}，fumble。`,"bad"),Sn(t,1,"你衝過了頭。")):p===20||p!==1&&x>=i.ac?vi(t,i,p===20?3:2,`強攻命中（宣告 ${c}）。d20 ${p} + ${a} + ${r} = ${x}。`):De(t,`強攻落空。d20 ${p} + ${a} + ${r} = ${x} < AC ${i.ac}。`,"bad")}else if(e==="probe"){const p=Vt(t);f(p)?De(t,`試探時失去平衡。d20 ${p} ≤ ${c}。`,"bad"):p+l>=11?(n.momentum=2,De(t,"你看清對方的重心。下一擊 +2。","good"),vi(t,i,1,"你抓住空隙，劃出一道淺傷。")):De(t,"你看不出破綻。","bad")}else if(e==="guard")n.guard=3,t.player.hp<t.player.maxHp&&(t.player.hp+=1),De(t,"你穩住呼吸，把弱點收起來。本回合 AC +3，肉體 +1。","neutral");else if(e==="power"){const p=Zt(t),v=Vt(t);if(f(v))De(t,`顯現把你甩了出去。d20 ${v} ≤ ${c}，fumble。`,"bad"),Sn(t,1,"你自己的速度傷到了自己。");else{const g=_i(t).has("area")?Kt(n):[i];for(const h of g){const T=v+a+r+Oi(t);v===20||T>=h.ac?vi(t,h,3+Math.floor(Oi(t)/2),`顯現命中。d20 ${v} + ${a} + ${r} = ${T}。`):De(t,`顯現被 ${h.name} 閃開。d20 ${v} + ${a} + ${r} = ${T}。`,"bad")}}De(t,`顯現代價：侵蝕 +${p}。`,"danger")}else if(e==="talk"){const p=Vt(t);f(p)?De(t,`你說話的速度快過了思考。d20 ${p} ≤ ${c}。`,"bad"):p+s>=13?(n.momentum=1,De(t,"你說了幾句話。對方的動作慢了半拍。","good")):De(t,"對方沒有興趣聽你說話。","bad")}else if(e==="flee"){const p=Vt(t);if(f(p))De(t,`你跑得比自己的身體還快。d20 ${p} ≤ ${c}。`,"bad"),Sn(t,1,"你摔了出去。");else if(p+o>=13){n.status="escaped",n.result=`你轉身跑進雨裡。

身後沒有追擊。

至少今晚沒有。`,n.reward="escape";return}else De(t,"你沒能拉開距離。","bad")}n.status==="active"&&u()}function Gv(t){const e=t.battle;!e||!e.selectedSkill||Uv(t,e.selectedSkill,e.targetId??void 0)}function Vv(t){const e=t.battle;if(!e||e.status!=="active"||e.phase!=="action"||!e.awaiting||e.ultimateUsed)return;const n=ps.get(t.player.ultimateId??"edge")??ps.get("edge"),i=e.enemies.find(d=>d.id===e.targetId&&d.alive)??Kt(e)[0];if(!i&&n.type!=="heal"&&n.type!=="shield"){mr(t);return}const a=i?.plot??0,r=a===0?0:Math.abs((e.playerPlot??0)-a);if((n.type==="melee"||n.type==="true")&&r>1){De(t,`${n.name}的間合不足：目標在 ${r} 階之外。`,"bad");return}const s=n.type==="ranged"?Kt(e).filter(d=>((d.plot??0)===0?0:Math.abs((e.playerPlot??0)-(d.plot??0)))<=2||(d.plot??0)===0):[];if(n.type==="ranged"&&s.length===0){De(t,"萬象灰雨找不到落在間合內的目標。","bad");return}e.ultimateUsed=!0,e.awaiting=!1;const o=mi(t,As(t)),l=hr(t);let c=!1;if(n.type==="shield")e.shield=Math.max(e.shield,9),De(t,"絕對城塞展開。九點護盾吸收所有傷害，直到破碎。","good");else if(n.type==="extra")c=!0,e.awaiting=!0,e.playerPlot=e.playerPlot??0,De(t,"零刻交換。時間沒有前進，但你多了一次行動。","good");else if(n.type==="true"&&i)sn(t,2,"熵印焚身的代價"),t.player.hp<=0?(e.status="lost",e.result="你把自己的血燒乾了。熵印焚身完成，但你沒有剩下能看見結果的眼睛。",e.awaiting=!1):(vi(t,i,6,"熵印焚身造成 6 點無視 AC 的真實傷害。"),De(t,"熵印焚身：以血換取必然的傷口。","danger"));else if(n.type==="gravity"){for(const d of Kt(e))d.plot=e.playerPlot??0;e.momentum=Math.max(e.momentum,2),c=!0,e.awaiting=!0,De(t,"重力井把所有人的 PLOT 壓到同一階。下一次攻擊 +2。","good")}else if(n.type==="heal"){const d=t.player.hp;t.player.hp=Math.min(t.player.maxHp,t.player.hp+5),t.player.encroachment=Math.max(0,t.player.encroachment-5),De(t,`因果逆行：肉體 +${t.player.hp-d}，侵蝕 -5。`,"good")}else if(n.type==="melee"&&i){const d=Vt(t),f=d+o+l+6;d===20||f>=i.ac?vi(t,i,5+Math.floor(l/2),`絕影一閃命中（無視 fumble）。d20 ${d} + ${o} + ${l} + 6 = ${f}。`):De(t,`絕影一閃落空。d20 ${d} + ${o} + ${l} + 6 = ${f} < AC ${i.ac}。`,"bad")}else if(n.type==="ranged"){for(const d of s){const f=Vt(t),u=f+o+l;f===20||u>=d.ac?vi(t,d,2,`萬象灰雨命中 ${d.name}。d20 ${f} + ${o} + ${l} = ${u}。`):De(t,`萬象灰雨被 ${d.name} 閃開。d20 ${f} + ${o} + ${l} = ${u}。`,"bad")}De(t,"萬象灰雨覆蓋了整個間合。","danger")}e.status==="active"&&!c&&(e.queueIndex+=1,pr(t))}function Wv(t,e){const n=t.battle;if(!n||n.status!=="active"||n.phase!=="action"||!n.awaiting)return;const i=n.civilians.find(a=>a.alive&&a.status==="hiding");i&&(n.awaiting=!1,n.selectedSkill=null,e==="protect"?(i.status="saved",t.player.flags.saved_civilian=!0,ae(t,-4,`你把${i.name}藏到安全的地方`),De(t,`你掩護${i.name}離開。警戒 -4。`,"good")):(i.status="killed",t.player.killsNormal+=1,It(t,1,`你殺死了一個普通人（${i.name}）`),ae(t,10,`你在戰鬥中殺死${i.name}`),ke(t,3,"你跨過了那條線"),De(t,`你殺了${i.name}。終端記下 +3 刻印。`,"bad")),n.queueIndex+=1,pr(t))}function Xv(t){const e=t.battle;if(e){if(e.status==="won"&&e.reward)if(e.reward==="kurokawa"){It(t,15,"你擊倒了黑川巌與他的保鑣"),ae(t,5,"鬧區發生超越者戰鬥"),t.player.killsOverman+=1,t.player.flags.kurokawa_defeated=!0;const n=t.rivals.find(i=>i.id==="kurokawa");n&&(n.status="dead",n.trueNameKnown=!0,Ue(t,"story","黑川在倒下前說出了自己的真名：黑川巌。"))}else if(e.reward==="ayase"){It(t,20,"你擊倒了綾瀬凍"),ae(t,7,"頂樓發生超越者戰鬥"),t.player.killsOverman+=1,t.player.flags.ayase_dead=!0;const n=t.rivals.find(i=>i.id==="ayase");n&&(n.status="dead",n.trueNameKnown=!0,Ue(t,"story","綾瀬在冰晶散去後，低聲說出了真名：綾瀬凍。"))}else e.reward==="crown"?(It(t,30,"你重創了王冠"),ae(t,10,"碼頭發生大規模顯現戰"),t.player.flags.crown_injured=!0,t.player.flags.crown_name_known=!0,Ue(t,"story","王冠在碎裂前露出真名：王冠。")):e.reward==="kanda_escape"&&(t.player.wanted=!1);if(e.status==="lost"&&e.endingOnLoss){nn(t,e.endingOnLoss),t.battle=null;return}if(e.status==="lost"&&t.player.hp<=0){nn(t,"dead"),t.battle=null;return}Ue(t,"story",`戰鬥結束：${e.enemies.map(n=>n.name).join("、")}（${e.status==="won"?"勝利":e.status==="escaped"?"脫離":"敗北"}）。`),t.battle=null,t.speed=t.speed||1}}const qv={opening:`十一月的雨沒有停過。你抵達新湊市的時候，鞋裡已經進了水，每走一步都發出很輕的、像有人在後面跟著的聲音。

口袋裡有一封黑信封。沒有寄件人，沒有郵票，只有一行銀色的字，印得比信封本身還深。

「於十一月三日零時前抵達指定城市。不得告知任何人。」

零時整，手腕上的終端亮了起來。

螢幕上沒有你的名字。只有代號、刻印目標，和一個正在減少的數字。

72:00:00。

最下面還有一行小字，字級比其他的都小，像是後來補上去的：

「本次選別由裏八咫監督。違規者，與其羈絆者，一併處理。」

你把終端翻過來，想看背面有沒有別的什麼。沒有。只有你的體溫留在玻璃上，慢慢變成霧。

雨落上去，把霧洗掉。

你忽然有種錯覺：這座城市不是你的目的地，而是一個早就替你準備好的牢籠——連門都替你關好了。`,first_night:`便利商店後巷的燈壞了一盞，另一盞在閃。

一個穿西裝的男人把女人按在牆上。他的右手從手腕開始裂開，皮膚像壞掉的傘骨一樣一節一節撐起，露出底下的刃。

不是變形。是生長。

女人沒有尖叫。

她的喉嚨已經發不出聲音了。你看見她的腳尖在地上刮，刮出一小道白痕。

男人的手腕上有一圈紅光。和你的終端一模一樣，連跳動的頻率都一樣。

——他也是超越者。

雨打在你後頸。你數著自己的呼吸，數到第四下才發現，自己一直沒有退。

不是不想退。

是這座城市從你踏進來的那一刻，就把你的退路一併算進去了。`,mio_call:`手機在凌晨三點震動。

來電顯示：澪。

你盯著螢幕看了很久，久到鈴聲停了，隔兩秒又響起來。終端沒有禁止接聽，只禁止說出真相。

「哥。」

她的聲音有點啞，像剛哭過又裝作沒事。

「你做夢了嗎？我剛剛夢到你在雨裡站著，一動也不動。我叫你，你也不回頭。」

你張了張嘴，發現自己不知道該先說哪一句——先說我沒事，還是先問她現在幾點。

「嗯。」你說。「做夢了。」

「夢到什麼？」

「……便利商店。」

她在電話那頭笑了一聲，很短。「哥，你連做夢都很沒出息。」

你聽見她那邊有人翻身，床架吱了一聲。然後她把聲音壓低：

「你什麼時候回來？」

雨打在窗上，一下一下，很規律。你聽著，忽然覺得自己可以就這樣聽下去，聽到天亮。`,convenience_store:`凌晨四點，你走進街角的便利商店。

自動門的聲音大得嚇人，像有人在耳邊撕開一張紙。

櫃檯後的人抬起頭，愣了一下，然後笑了。

「你怎麼會在這裡？」

是老朋友。你們小時候一起在河堤放過煙火，一起被警察送回家，後來各自走散。他現在穿著店長的藍色圍裙，名牌歪在一邊，寫著「見習」。

電視正在播昨晚的連續殺人案。主播說，警方不排除有「特殊能力者」涉案——這五個字她唸得特別慢，像怕咬到舌頭。

他把音量轉小，眼睛卻沒有離開螢幕。

「你最近晚上不要一個人走。」他說。

你看著他圍裙口袋裡露出半截的護身符。新的，紅繩還沒起毛。

「你也小心。」

他愣了一下，好像想問你為什麼這樣講。但最後只是點頭，把找零放在你掌心，多放了一顆糖。`,shiratori_invite:`終端收到一則沒有寄件人的訊息。

「今晚十一點，常夜大樓頂樓。帶上你的刻印，或你的命。」

署名是白鳥理世。

你查了這個名字。三筆新聞，兩筆是失蹤案，一筆是慈善拍賣。照片裡她穿著白裙，對著鏡頭笑，像是知道鏡頭後面有人在看她。

頂樓鋪著紅毯，被雨水泡得發黑。十幾個超越者站在雨裡，沒有人撐傘——不是不怕濕，是不想讓別人以為自己需要保護。

白鳥坐在唯一的椅子上，白色狐狸面具推到耳邊。

「歡迎。」她笑得很輕，像在唸一句排練過的台詞。

「今晚拍賣的不是東西，是情報。」

她停了一下，讓這句話在雨裡站穩。

「而你們每一個人，都是商品。」`,kurokawa_massacre:`常夜中央通的監視器同時黑了十二秒。

十二秒後，街上多了九具屍體。

黑川巌站在便利商店的招牌下，拳頭上的鐵鍊還在滴血。他對著監視器鏡頭笑，抬手比了個手勢——不是挑釁，更像在跟熟人打招呼。

終端彈出公告。

「超越者黑川巌，刻印 +9。目擊者處理中。」

「處理中」，用的是進行式。

你忽然理解了一件事：這不是獵殺。

這是廣告。`,ink_rain:`你在走路，卻突然發現雨是黑色的。

不是汙水。是墨。

整條街的牆面都在滲出黑色的字，密密麻麻，寫滿同一個名字。有些字被雨水拖出長長的尾巴，像還沒乾就被人擦過。

你的名字。

然後你看見自己的手。

皮膚底下的血管亮著紅光，像一張正在燃燒的地圖，從手腕一路燒向手肘。

不痛。

最可怕的就是不痛。

——流變正在加速。`,midpoint:`裏八咫的無人機在頭頂盤旋三圈，丟下一個灰色箱子。

箱子上印著你的代號，還有一句印刷體：

「恭喜存活 20 小時。距離下次回收，還有 52 小時。」

箱子裡只能拿一樣東西。你蹲下來看了很久，像在超市挑一個晚餐。

最後你選了最沒用的一樣。你自己也說不清為什麼。

遠方的港口響起汽笛，長長的一聲，接著是貨櫃落地的悶響。

你忽然意識到，這座城市每一天都在正常運作。有人上班，有人下班，有人在陽台收衣服，有人為了明天要交的報告熬夜。

只有你的人生，被按下了倒數。`,tetsu_dead:`你在第七號碼頭找到鐵十兵衛。

他坐在貨櫃旁邊，眼睛睜著，胸口有一個乾淨的圓洞。乾淨得不像傷口，像有人替他開了一扇窗。

終端上，他的代號已經變灰。

最後一筆紀錄是：「刻印 13。已回收。」

他口袋裡有一張被血浸濕的照片。血乾了，照片上的人像浮在褐色的水痕裡。

照片上是一個穿水手服的小女孩，比著勝利手勢。背景是學校的鐵門，門上還貼著運動會的海報，日期是上個月。

背面寫著：「爺爺，這次一定要回來。」

你把照片放回他口袋，替他闔上眼睛。手指碰到他臉的時候，還有一點溫度。

你把手收得很慢，像怕吵醒他。`,kanda_rumor:`電視牆臨時插播記者會。

「警視廳今日證實，已針對近日連續超常死亡事件成立專案小組。負責人是搜查一課的特別顧問，神田隼人。」

畫面切到一個少年。

白得近乎透明的頭髮，黑色立領制服，金色鈕扣。左眼藍，右眼金。

他沒有看鏡頭，正低頭翻一份資料，翻頁的動作很慢，像在確認每一個字。

記者問他，是否相信「特殊能力者」的存在。

他抬起頭。

「我相信證據。」

停了一拍。

「而證據告訴我，有人在替你們數人頭。」

會場安靜了兩秒，然後是二十幾支麥克風同時往前伸的聲音。

跑馬燈從畫面下方滑過：神田隼人，十七歲。無顯現。Homo sapiens。

記者會結束後，網路上開始流傳另一個名字。

——最強現代智人。

有人說，他從來不帶武器進城。

因為他的八把武器都在軌道上。`,ayase_proposal:`綾瀬凍在頂樓等你。

她沒有撐傘。雨落在她頭頂三公分處，凝成細小的冰晶，然後沿著看不見的弧面滑開。

「你應該已經發現了。」

她把終端投影打開。三十個代號，只剩三個還亮著。光點懸在雨裡，像三隻還沒熄的螢火蟲。

「這場遊戲不是給我們贏的。」

「王冠也在這座城市。侵蝕率 100%，裏八咫卻不敢回收他。」

她停頓了一下，不是為了效果，是在算數。

「聯手吧。先殺王冠，再處理神田。」

雨聲忽然變得很近。

「或者，你現在就可以殺我。排名會上升。」`,kotone_song:`車站前的廣場空無一人。

你在那裡遇見了那名社區羈絆。

對方坐在濕透的塑膠椅上，耳機只戴一邊，另一邊垂在胸前。手機裡放著一首你沒聽過的歌。

歌詞是關於一個人在雨天出門，忘了帶傘，也忘了為什麼要出門。

對方看見你，沒有停。只是把耳機分了一半給你，像在留一個位置給你。

你坐下來。塑膠椅發出很響的一聲，兩個人都笑了。

你忽然想起，自己已經三天沒有坐下來了。

歌放到第二段的時候，你發現自己跟著哼了一句。走音了。對方沒有說什麼，只是把音量調大了一點。`,detective_shadow:`便利商店的玻璃反射裡，多了一個人影。

神田隼人站在對街，正在問一個賣傘的老人。他微微彎著腰聽，那個角度剛好讓老人不必抬頭。

他沒有穿制服。但方圓十公尺內的人，都自動讓開，像水流繞過一塊石頭。

然後他抬起頭。

視線穿過雨幕，準確地落在你的倒影上。

他沒有走過來。只是把手插進風衣口袋，像在等一個很慢的綠燈。

終端跳出提示。

神田隼人，距離 18 公尺。交戰評估 0.0%。

你數了三次呼吸，才想起自己可以動。`,blackout:`凌晨兩點，整座城市同時停電。

不是意外。

裏八咫把電網切斷了，好讓某些事情在黑暗裡發生。

街上開始有人砸玻璃。消防車的鳴笛從三個方向靠近，聲音互相追著跑。有人在樓上喊一個名字，喊了兩次，沒有人回答。

終端亮起臨時規則。

「停電期間，刻印價值 ×2。破壞行為不計入違規。」

黑暗裡，有人開始尖叫。

你站在原地，第一次發現：原來停電的時候，聽得到這麼多東西。`,evidence:`你在裏八咫補給箱的夾層裡，找到一份不該存在的文件。

標題是「Project Ignis・第七次適性選別・執行紀錄」。

裡面有所有參賽者的名單、家屬住址、回收順序。每個名字後面都有一個編號，編號後面的欄位空著——等你死的時候再填。

最後一頁釘著一張照片。

神田隼人站在霧見市的舊車站前，身邊是一個與你年紀相仿的女孩。他沒有看鏡頭，側著臉在跟她說話，嘴角有一點很不像他的東西。

照片背面寫著：

「小田川知世／霧見集體失蹤／未回收。」

照片的邊角被摸得起毛。有人反覆拿出來看，看了很多年。

你終於知道，他為什麼會來。`,kanda_arrives:`第四十八小時。

雨忽然停了。

新湊站前，一輛黑色轎車停下。

車門打開。先出現的是一把黑傘，然後是一雙擦得很乾淨的皮鞋。

最後，是一個少年。

白得近乎透明的頭髮被風吹亂。黑色立領制服，金色鈕扣。左眼藍，右眼金。

他看起來頂多十七歲。

你卻在那一瞬間明白了——自己正在被某種大型掠食者注視。

神田隼人。

他沒有帶隊，也沒有鳴笛。只有一個裝著資料的公事包。

他站在車站廣場中央，抬頭看了一眼天空。

不是看監視器。

是看更高、更遠的地方。

那裡有一顆肉眼看不見的衛星。

「天刑」。

八把大罪，靜靜停在那裡。

一個回合，只能落下一把。

終端跳出評估。

交戰評估 0.0%。
勝率 0.0%。

「好大的雨。」

他把傘收起來，甩了甩水，像在跟誰聊天。`,interrogation:`你走進一家凌晨還開著的咖啡店。

店裡只有兩個人。

你，和坐在角落的神田隼人。

他面前有兩杯咖啡。他把其中一杯推向你，杯口朝你，把手朝自己——很標準的動作，像做過很多次。

「坐吧。」

「我不認識你。」

「但你認識這個。」

他把一個終端放在桌上。是你昨晚丟掉的那一個。

「我在垃圾回收場找到的。你以為丟進海裡就沒事了？」

他沒有提高音量。

「我不是來抓你的。」

停頓。

「我是來問你，想不想活著離開這座城市。」`,kurokawa_arrested:`城市各處的螢幕同時亮起同一則通知。

「超越者黑川巌，刻印 62。已由警視廳逮捕。刻印回收完畢。」

畫面裡，黑川被兩名刑警押上車。

他沒有反抗。

只是對著鏡頭笑。

他的手腕上，紅色的光已經熄滅。

終端更新排名。你上升了一位。

下方附註：

「神田隼人主導。全員注意：勿與其交戰。」

黑川是所有超越者裡最強壯的一個。

他被抓了。

而神田隼人沒有受傷。`,quiet_call:`終端顯示，你暫時沒有被列為優先目標。

這意味著，你有幾個小時的空檔。

手機響起。是澪。

「哥，家裡的櫻花開了。」

「現在是十一月。」

「所以才奇怪啊。」她笑。「你什麼時候回來？我留了一枝給你。」

你看著窗外。雨還在下。

「快了。」

你說。

自己都不太相信。`,wanted:`終端發出從未聽過的聲音。

低沉、規律，像醫院裡某台機器停止運轉。

紅色字樣跳出來。

「對象已列為指名手配。執行者：神田隼人。剩餘時間：3 小時。」

街角的公共螢幕出現你的代號。

不是照片，不是真名。

但你知道，他已經知道你是誰。

雨裡傳來腳步聲。

不急，不慢。

像一個早就知道終點在哪裡的人。`,crown_stage:`第七號貨櫃碼頭。凌晨三點。

所有的路燈同時亮起，照出一條通往海面的白色光帶。

王冠站在光帶盡頭。

破損的白色西裝，銀色長髮，頭上戴著一頂用斷裂鋼筋與紅色玻璃拼成的王冠。

他的一半身體已經不再是人的形狀。

黑色的結晶從胸口長出，像一座正在生長的教堂。

「歡迎。」

他的聲音溫柔得像在主持婚禮。

「你們都是來看我成為新物種的嗎？」

他抬起手。

整座碼頭的貨櫃同時浮起。

「裏八咫說我是失敗品。」

他笑。

「但失敗品，通常最接近真相。」

終端顯示。

超越者王冠／侵蝕率 100%／刻印 87／交戰評估：不可能。`,crown_fall:`王冠把整座碼頭舉了起來。

貨櫃、起重機、海水，全部浮在半空。他的身體已經看不出人形，只剩那頂王冠還亮著。

「你看見了嗎？」

他對著走過來的人說。

「這就是新物種。這就是人類的下一步。」

神田隼人停下腳步。

他手上沒有槍。

他抬頭，看向天空。

下一秒，雲層被一道紅線切開。

不是雷。

是某個從軌道落下的東西。

大氣被燒成白色，一枚漆黑的劍刃穿透雲層，精準地釘在王冠面前。地面沒有爆炸，只有一聲沉悶的、像整個世界被按住的聲響。

「第一魔劍，傲慢。」

神田抬手。

劍刃自己折返，像被看不見的線牽回天上。

——一個回合，只能呼叫一把。

王冠笑了。

黑色的結晶像海嘯一樣撲過去。

神田側身避開。第二回合。

「第二魔劍，憤怒。」

第二道紅線落下。

這一次，劍刃穿過結晶海，切斷了王冠的影子。

王冠的動作停了半拍。

「不可能……我已經不是人了……」

「我知道。」

神田說。

「但你也沒有變成別的東西。」

第三回合。

「第三魔劍，嫉妒。」

劍刃落在王冠胸口。

那一擊沒有光，沒有風，沒有任何超常現象。

只有一個人類，呼叫了人類造出來的武器，把一個自稱神的怪物，釘回地面。

王冠倒下了。

終端顯示。

超越者王冠／已回收。
執行者：神田隼人。

距離閉幕，還有四小時。`,last_choice:`距離閉幕，還有兩小時。

碼頭的燈一盞一盞熄滅。

神田隼人站在警車旁，正在寫報告。王冠被銬在後座，像一件終於歸位的證物。

你的終端顯示：

刻印、排名、侵蝕率、羈絆。

所有數字都在那裡，安靜得像一份遺囑。

神田沒有看你。

但你知道，他在等。

遠處，裏八咫的直升機正在靠近。

你還有最後一次選擇。`,kanda_ambush:`你走進一條死巷時，後方傳來傘尖點地的聲音。

神田隼人站在巷口。

雨水從他的風衣下襬滴落。

「我查了三個小時。」

他說。

「你留下來的東西，比你想像中多。」

他手裡握著一把漆黑的劍。

終端瘋狂震動。

交戰評估：0.0%。
勝率：0.0%。
建議：放棄抵抗。

「我不喜歡追人。」

神田說。

「所以我們把這件事結束掉。」

你退後一步。

背後的牆很冷。

天空上，有一顆紅色的光點一閃而過。

——衛星。

你只剩一次選擇。`,manifest_35:`侵蝕率突破 35%。

你在洗手台的鏡子裡，看見自己的眼睛多了一層顏色。

不是血絲。

是某種更深的東西，正在瞳孔後面重新排列。

終端彈出一行字。

「顯現增生檢測。請選擇要讓哪一部分留下。」

三個名字浮現在腦中。

它們都像你。

又都不完全是你。`,manifest_60:`侵蝕率突破 60%。

你的影子開始比動作慢半拍。

有時它會自己停下來，看著你。

終端沒有發出警告。

只是列出三個新的顯現名稱，像餐廳的菜單。

你聞到鐵鏽味。

不確定是城市的，還是你的。`,manifest_85:`侵蝕率突破 85%。

你已經記不清自己原本有幾隻手。

鏡子裡的倒影不再同步。它在你抬手之前先抬了手，在你眨眼之後才眨眼。

終端亮起第三次選擇。

「個體邊界不穩定。建議：讓某一部份變得更強。」

這一次，你沒有拒絕的力氣。`,r_witness:`一個高中生舉著手機，鏡頭正對著你。

他看起來比你還害怕，但手指沒有放下。

「你……你剛才那是什麼？」

螢幕上的直播觀看人數正在上升。

3、7、12。

你的臉還沒有完全入鏡。`,r_stray:`自動販賣機旁邊，縮著一個十六、七歲的男孩。

他的手臂上有一道剛覺醒的紅色裂紋，還不會控制。

他看見你手腕上的終端，眼睛一亮。

「你也是……那個遊戲的嗎？」

「我不想殺人。」

他低下頭。

「我只是想回家。」

終端顯示：超越者，刻印 3。`,r_checkpoint:`前方路口拉起封鎖線。

兩名警察逐一盤查行人，桌上放著一台讀取終端的機器。

你的終端沒有違規紀錄。

但機器可能會讀出別的東西。

排在前面的人陸續通過。

輪到你了。`,r_bond_danger:`你收到一張照片。

照片裡，羈絆者站在平常會出現的地方。身後有一輛黑色廂型車。

照片下面只有一行字。

「協議期間，請保持距離。下一次，不會只是照片。」

裏八咫。

他們在提醒你——羈絆不是弱點。

是抵押品。`,r_collapse:`你醒來時，發現自己站在一座天橋上。

不記得怎麼走上來的。

橋下的車流像發光的河。你的手扶著欄杆，欄杆正在融化。

手機有七通未接來電。全部來自同一個號碼。

終端顯示：侵蝕率持續上升。

耳邊有人說：

「跳下去就不痛了。」

那聲音很像你自己。`,r_blackmarket:`碼頭邊的冷凍倉庫裡，有人在賣東西。

不是藥，不是槍。

是「刻印」。

一個戴著防毒面具的男人坐在冰櫃上，面前擺著十幾個終端。

「你要買，還是要賣？」

他敲了敲其中一個。

「我這裡有裏八咫的醫療紀錄、偽造通行證，還有上一個客人的運氣。」`,r_supply:`天空傳來無人機的低鳴。

一個灰色箱子落在你面前，編號被刻意刮花。

打開後，裡面不是補給，而是一張紙條。

「我們知道你在哪裡。
我們知道你殺了誰。
我們只是還不想回收你。」

——裏八咫

紙條下面壓著一支鎮靜劑，和一枚刻印晶片。`},Yv={opening:{accept:`你把信封點燃。

火光照亮掌心的裂紋，像一張早就簽好的契約。

雨沒有停。

你卻覺得，從這一刻開始，這座城市終於開始注意你了。`,call_mio:`電話只響了一聲就被接起。

「哥？你那邊怎麼這麼吵？」

「只是下雨。」

你說。

她信了。

你卻在掛斷之後，才發現自己的手一直在抖。`,crack:`終端外殼彈開。

你記下了裏八咫的通訊頻率，也看見一行不該存在的備註：

「神田對策：迴避。」

然後，終端炸出一串藍白火花。

你的手指麻了半小時。`},first_night:{ambush:`刀刃穿過他的後頸時，他還在笑。

「你……也是啊。」

終端震動。

刻印 +10。

女人已經斷氣了。

你沒有救到她。

只殺了一個和你一樣的人。`,intervene:`你抓住他的手腕。

刃在你掌心劃出一道深口，但他退了。

「你瘋了嗎？」

他看著你的終端。

「我們是同一邊的。」

他翻牆逃走。

女人活了下來。

而你記住了他的臉。`,watch:`你看著那條命被抽乾，像看著一盞路燈熄滅。

男人離開時看了你一眼，沒有說話。

終端彈出提示。

「目擊未處理。風險：低。」

你忽然覺得，那個「低」字很刺眼。`,leave:`你走進雨裡。

身後的尖叫被車聲蓋過。

這座城市今晚會死很多人。

你決定先讓自己活著。`},kanda_arrives:{walk:`你從他身邊走過。

距離最近的時候，不到一步。

你聞到他身上的雨味和咖啡味。

他沒有看你。

走出車站廣場後，你的腿才開始發抖。`,hide:`你讓自己的存在變薄。

神田的視線穿過你原本站的位置，落在你身後。

「奇怪。」

他低聲說。

你已經不在那裡了。`,approach:`「不好意思，車站怎麼走？」

他看著你，看了三秒。

「你已經站在它前面了。」

他從公事包裡抽出一張照片。

「不過，既然你問了——你看過這個人嗎？」

照片上是黑川巌。

你搖頭。

「謝謝。」

他把照片收回去。

「你手上有血的味道，先生。記得洗乾淨。」`,flee:`你轉身的動作太明顯。

神田沒有追上來。

但當你回頭時，他正舉著手機，對著你的背影。`},interrogation:{lie:`他盯著你看了一會，然後把終端收回口袋。

「好。」

他說。

「當我沒問。」

他站起來，把咖啡錢放在桌上。

走到門口時，他停下來。

「如果你改變主意，號碼在杯墊下面。」`,silent:`你什麼也沒說。

他等了五分鐘，然後點了點頭。

「沉默也是一種回答。」

他走了。

咖啡還冒著熱氣。`,partial:`你提到霧見市。

神田第一次出現表情變化。

不是驚訝，是疲憊。

「你從哪裡知道這個名字？」

「文件上。」

他沉默很久。

「小田川知世也在那份名單上。」

他把咖啡喝完，站起來。

「別死。你可能是唯一能作證的人。」`,attack:`你動了。

然後你發現自己已經在地板上。

神田隼人一隻手扣著你的手腕，另一隻手拿著你掉出來的終端。

他甚至沒有站起來。

「我給過你機會。」`},crown_fall:{run:`你沿著貨櫃之間的縫隙往後退。

神田沒有追。他正蹲在王冠旁邊，讀著什麼。

你聽見他說：

「告訴我，霧見市那晚發生了什麼。」

王冠笑了。`,watch:`王冠躺在地上，看著夜空。

「他們把我們叫做怪物。」

他說。

「然後要我們互相證明誰更不像人。」

神田沒有回答。

只是把手銬扣上，動作很輕。

「小田川知世……」

王冠說。

「在霧見市，對吧？」

神田的手停了半秒。`,approach:`你從陰影裡走出來。

神田沒有轉身。

「你終於肯出來了。」

「我有證據。」

你說。

「Project Ignis。裏八咫。全部。」

他看著你，看了很久。

「你知道交出來之後，你會怎樣嗎？」

「知道。」

「那就別在這裡交。」

他說。

「閉幕之後，到車站找我。」`}};function Zv(t,e){return qv[t]??e()}function Kv(t,e,n){return Yv[t]?.[e]??n}function Ou(t,e){return typeof t.choices=="function"?t.choices(e):t.choices}function Jv(t,e){return Zv(t.id,()=>typeof t.text=="function"?t.text(e):t.text)}function _n(t,e,n){const i=Du(t,e);i&&sr(t,i.id,n)}function Bu(t,e){const n=Du(t,e);return n?fr(t,n.id):"那條線已經斷了。"}function bi(t,...e){return e.some(n=>t.player.abilityId===n||(t.player.manifested??[]).includes(n))}function $e(t){return{text:t,tone:"good"}}function mt(t){return{text:t,tone:"bad"}}function rt(t){return{text:t,tone:"danger"}}function Le(t){return{text:t,tone:"neutral"}}const Qv={store:"你剛把最後一份關東煮倒掉，圍裙上還沾著湯汁。黑信封就壓在收銀機下面。",medic:"你剛替一個陌生人包紮完，手套上還有沒乾的血。黑信封夾在救護紀錄裡。",musician:"你剛從地下Live House後門出來，耳朵還在嗡嗡作響。黑信封貼在音箱上。",journalist:"你剛刪掉一篇不會被刊登的報導，電腦右下角彈出黑信封的掃描檔。",shrine:"你剛替神社關上最後一扇門，石階下的黑信封被雨打濕了一角。",runner:"你剛替黑市送完最後一個包裹，客戶沒有付錢，只留下一封黑信封。",exsdf:"你剛把舊軍證收進抽屜，黑信封壓在退伍令上面。",street:"你剛在天橋下醒來，黑信封墊在頭底下，像有人怕你著涼。"},jv={id:"opening",at:0,chapter:"序章",title:"黑信封",scene:"street",text:t=>{const e=dr.get(t.cityId)?.name??"這座城市";return`${Qv[t.player.backgroundId]??"你剛結束一件不重要的事，黑信封卻像等了很久。"}

十一月三日，凌晨零時。

你抵達${e}時，雨正下著。

口袋裡的黑信封沒有寄件人，只有一行燙銀的字：

「於十一月三日零時前抵達指定城市。不得告知任何人。」

手腕上的黑色終端已經啟動。螢幕只有三個欄位：你的代號、刻印目標 ${zn}、倒數 72:00。

首頁最上方印著兩行字：

「Homo transscendens（Overman）／Project Ignis 第七次適性選別」

「癌細胞不會自己停止分裂。」

下方還有一行小字：

「本次協議由裏八咫監督。違規者與其羈絆者，將一併處理。」

城市另一端，有人已經開始獵殺。`},choices:[{id:"accept",label:"點燃信封，接受規則。",hint:"「那就開始吧。」",apply:t=>(t.player.flags.accepted=!0,ke(t,2,"你讓顯現回應了終端"),$e(`信封在指間捲起，火沿著紙邊走，走得比你想像中慢。

掌心的裂紋被照亮。那不是傷口，是一張早就簽好的契約。`))},{id:"call_mio",label:"先確認家人是否安全。",hint:"羈絆 +1／監視 +2",apply:t=>(_n(t,"family",1),t.player.surveillance+=2,ke(t,-4,"聽見家人的聲音"),$e(`電話只響了一聲就被接起。

「哥？你那邊怎麼這麼吵？」

「下雨。」

她嗯了一聲，沒有再問。你聽見她那頭的電視聲，夜間新聞，音量開得很小。

掛斷之後你才發現，自己剛才一直屏著呼吸。`))},{id:"crack",label:"嘗試拆開手腕上的終端。",hint:"知性檢定 DC 16／失敗會觸電",apply:t=>St(t,"intelligence",16,"拆解裏八咫終端").ok?(ht(t,1,"你讀到終端的內部頻道"),$e(`外殼「喀」一聲彈開，比預期中容易。

裡面沒有炸彈，只有一張薄晶片，和一張貼紙。貼紙上印著：

「神田對策：迴避。」

裏八咫要自己的職員迴避他。你把貼紙撕下來，收進口袋。`)):(sn(t,2,"終端釋放防拆電擊"),t.player.surveillance+=3,mt(`一串藍白火花從接縫噴出來。

你的手指麻了半個小時，左袖燒出一個洞。

更麻煩的是，裏八咫收到了一次「異常接觸」通知。`))}]},eb={id:"first_night",at:2,chapter:"第一夜",title:"第一條命",scene:"alley",text:`你在便利商店後巷看見一個穿西裝的男人。他把一個女人按在牆上，右手從手腕開始裂開，變成一片薄得不像金屬的刃。

女人沒有尖叫。她的喉嚨已經發不出聲音。

男人手腕上有一圈紅色的光——和你的終端一樣。

他也是超越者。`,choices:[{id:"ambush",label:"從背後偷襲他。",hint:"顯現攻擊／刻印 +10／警戒指數 +5",apply:t=>(Zt(t,void 0,"從死角發動偷襲"),It(t,10,"你補上最後一刀"),ae(t,5,"巷口留下大量血跡"),t.player.killsOverman+=1,t.player.flags.first_kill=!0,rt(`刀刃穿過他後頸的時候，他還在笑。

「你……也是啊。」

終端震了一下。刻印 +10。

女人靠著牆滑下去，已經沒有呼吸。

你誰也沒有救到。你只是殺了一個和你一樣的人。`))},{id:"intervene",label:"出聲阻止。",hint:"體魄檢定 DC 13",apply:t=>St(t,"strength",13,"赤手阻止超越者").ok?(ht(t,1,"你記住了他的臉"),ae(t,2,"巷子裡有人報警"),t.player.flags.spared_first=!0,$e(`你抓住他的手腕，握得很緊，緊到刃劃開掌心時，你才發現自己沒有放開。

「你瘋了嗎？」

他看了一眼你的終端，退了一步。

「我們是同一邊的。」

他翻牆走了。女人活下來了，一直在道歉——道歉的對象是你。

你記住了他的臉。`)):(sn(t,2,"刃劃開你的側腹"),ae(t,3,"血跡引來巡邏車"),mt(`你慢了半拍。

刃從側腹劃過，熱的東西流進褲腰。男人趁機消失在雨裡。

女人還在哭。你沒有留下來。那件外套擋了一點，擋得不夠多。`))},{id:"watch",label:"冷眼旁觀，記下規則。",hint:"情報 +1／侵蝕 +2",apply:t=>(ht(t,1,"你觀察到超越者獵殺的模式"),ke(t,2,"你壓抑住出手的衝動"),Le(`你看著那條命被抽乾，像看著一盞路燈慢慢熄滅。

男人離開時看了你一眼，沒有說話，也沒有記下你。

終端彈出提示：「目擊未處理。風險：低。」

「低」這個字在你眼前停了很久。`))},{id:"leave",label:"轉身離開。",hint:"警戒指數 -2",apply:t=>(ae(t,-2,"你避開了監視器"),ke(t,1),Le(`你走進雨裡。

身後的尖叫被車聲蓋過，蓋得很乾淨。

這座城市今晚會死很多人。你決定先讓自己活著。`))}]},tb={id:"mio_call",at:5,chapter:"第一天",title:"家人的來電",speaker:"水島澪",scene:"alley",text:`手機在凌晨三點震動。來電顯示：澪。

你盯著螢幕看了很久。終端沒有禁止接聽，只禁止說出真相。

「哥，你做夢了嗎？我剛剛夢到你在雨裡站著，一動也不動。」

她的聲音很近，像隔著一扇沒關緊的門。`,choices:t=>[{id:"lie",label:"說謊。說你只是加班。",hint:"意志檢定 DC 12／失敗侵蝕 +4",apply:e=>St(e,"constitution",12,"對家人說謊").ok?(ke(e,-6,"你暫時把怪物關回身體裡"),_n(e,"family",1),$e(`你聽見自己用很正常的聲音說話：加班、同事、明天會早點睡。

掛上電話之後，你在雨裡站了很久。

是雨聲太吵，你才發現自己一直沒有呼吸。`)):(ke(e,4,"謊言在喉嚨裡裂開"),mt(`你說到一半停住了。

「哥，你旁邊有人嗎？」

「沒有。」

她沒有再問。電話裡只剩下她那邊很輕的呼吸聲，一直沒有掛。`))},{id:"truth",label:"違反命令，告訴她一點點。",hint:"羈絆 +2／監視 +8／警戒指數 +5",apply:e=>(_n(e,"family",2),e.player.surveillance+=8,ae(e,5,"裏八咫攔截到通話關鍵字"),e.player.flags.told_mio=!0,rt(`「如果我沒有回來，」你說，「不要找我。」

電話那頭安靜了五秒。你數得到她的呼吸，一次，兩次。

「你在哪裡？」

你掛斷了。

終端立刻亮起紅字：「偵測到協議外通訊。」`))},{id:"silent",label:"接起，但不說話。",hint:"羈絆 +1／侵蝕 +3",apply:e=>(_n(e,"family",1),ke(e,3,"沉默比謊言更難"),Le(`你聽著她呼吸。她也聽著你。

「好了，」她最後說，「我知道你在。」

她先掛了電話。`))},{id:"hangup",label:"掛斷。現在不能有任何牽掛。",hint:"羈絆 -1／侵蝕 +5",apply:e=>(_n(e,"family",-1),ke(e,5,"你主動剪斷一條線"),mt(`你按下紅色按鈕。

世界安靜了，安靜得像有人把耳朵捂起來。

但你知道，有些線不是掛斷就會消失的。`))}]},nb={id:"convenience_store",at:8,chapter:"第一天",title:"便利商店的燈",speaker:"老朋友",scene:"street",text:`凌晨四點，你走進街角的便利商店。自動門的聲音太大。

櫃檯後的人抬頭，愣了一下，然後笑出來。

「你怎麼會在這裡？」

佐倉大地。你小時候替他擋過一輛車的那個人。他現在穿著店長的藍色圍裙，胸前的名牌歪了。

電視正在播報昨晚的連續殺人案。主播說，警方不排除有「特殊能力者」涉案。`,choices:[{id:"help",label:"留下來幫他搬貨。",hint:"侵蝕 -8／羈絆 +1",apply:t=>(Bu(t,"friend"),xa(t,1,"熱騰騰的關東煮"),$e(`你們把一箱箱飲料搬進冷藏櫃。他搬錯了一箱，把啤酒放到牛奶旁邊，自己笑了很久。

他講了一堆無關緊要的事：房東、女友、隔壁那隻不會回家的貓。

你發現自己一直在聽，手裡還握著一罐沒開的可樂。

離開時，他把一罐熱咖啡塞進你口袋。「你臉色很差。多睡一點。」`))},{id:"ask",label:"問他有沒有看到可疑的人。",hint:"情報 +1／羈絆 +1",apply:t=>(ht(t,1,"大地提供了目擊情報"),_n(t,"friend",1),Le(`「最近半夜常有一輛黑色廂型車停在對面。」他把音量轉到最小。「下來的人穿西裝，手腕都戴著黑色的錶。不講話，買東西也不講話。」

他停了一下。

「有一次其中一個看了我一眼。就一眼。我那天晚上沒睡。」

裏八咫。你記住了。`))},{id:"warn",label:"警告他這幾天不要開店。",hint:"羈絆 +1／警戒指數 -2／監視 +2",apply:t=>(_n(t,"friend",1),ae(t,-2,"你讓一條街提早熄燈"),t.player.surveillance+=2,$e(`「為什麼？」他問。

「因為我會經過。」

他看了你很久，久到微波爐「叮」了一聲。

最後他把鐵門拉下一半，留了一道剛好夠人側身進來的縫。

「那你至少進來躲雨。」`))},{id:"leave",label:"買一包菸，什麼都不說。",hint:"情報 +1",apply:t=>(ht(t,1,"你從店裡的監視器畫面看見了什麼"),Le(`你把零錢放在桌上，拿了一包最便宜的菸。

他沒有找錢，只是看著你。

「下次來，」他說，「別挑這種時間。」

自動門在你身後關上時，你聽見他把電視音量調回去了。`))}]},ib={id:"shiratori_invite",at:11,chapter:"第一天",title:"屋頂拍賣會",speaker:"白鳥理世",portrait:"shiratori",scene:"street",text:`終端收到一則沒有寄件人的訊息：

「今晚十一點，常夜大樓頂樓。帶上你的刻印，或你的命。——白鳥理世」

頂樓鋪著紅毯。十幾名超越者站在雨裡，像一群等待上場的演員。

白鳥理世坐在唯一的椅子上，白色狐狸面具推到耳邊。

「歡迎，」她說，「今晚拍賣的不是東西，是情報。而你們每一個人，都是商品。」`,choices:t=>[{id:"trade",label:"留下來交換情報。",hint:"情報 +2／警戒指數 +2",apply:e=>(ht(e,2,"你買到兩份名單"),ae(e,2,"拍賣會的位置被警方掌握"),e.player.flags.met_shiratori=!0,Le(`你得到兩份名單：一份是裏八咫的回收路線，一份是神田隼人過去偵破的案件，連卷宗編號都抄得整整齊齊。

白鳥收下你的情報費，數都沒數。

「你比我想像中還有趣。」她把面具戴回去。「有趣的人通常活不久，所以我會記得你。」`))},{id:"read",label:"用讀心之瞳看她的真正目的。",hint:"需要讀心之瞳／情報 +3",requires:e=>bi(e,"mindeye"),apply:e=>(Zt(e),ht(e,3,"你看見白鳥記憶裡的一間空房間"),e.player.flags.riya_secret=!0,rt(`她心裡有一間上鎖的房間。

房間裡沒有金銀財寶，只有一張全家福，和一份名單。名單最後一行寫著：「白鳥理世／已回收」。

她注意到你的視線。笑容第一次出現裂縫，像面具先裂，人才跟上。

「看見了？」她問。「那就不能讓你活著離開了。」

但她沒有動手。她只是把這件事記進去了。`))},{id:"decline",label:"不進場，在對街觀察。",hint:"警戒指數 -3／情報 +1",apply:e=>(ae(e,-3,"你避開了公開場合"),ht(e,1,"你記下了與會者的臉"),Le(`你站在對街便利商店的屋簷下，看著那些超越者一個接一個走進大樓。沒有人回頭。

凌晨兩點，只有七個人走出來。

警衛在門口抽菸，什麼也沒看見。`))},{id:"rob",label:"等她落單，搶走她的終端。",hint:"敏捷檢定 DC 16／成功大量刻印",apply:e=>St(e,"dexterity",16,"偷走白鳥的終端").ok?(It(e,15,"你轉走了白鳥理世的刻印"),ae(e,6,"白鳥發布了懸賞"),e.player.flags.riya_enemy=!0,rt(`她的終端比你想像中輕，輕得像裡面什麼都沒有。

你翻過屋頂時，聽見她在身後笑。

「拿去吧。」她說。「反正那些刻印本來就該是你的。」

你跑了三條街才停下來。停下來的時候，你才想到要檢查裡面到底有什麼。`)):(sn(e,3,"白鳥的追隨者堵住逃生口"),ae(e,5,"拍賣會爆發衝突"),e.player.flags.riya_enemy=!0,mt(`你才碰到她的手腕，整層樓的燈同時熄滅。

三個人從不同方向撲上來，動作整齊得像排練過。

你逃了出去，肋骨斷了兩根。

第二天早上，你發現口袋裡多了一張拍賣會的邀請卡。`))}]},ab={id:"kurokawa_massacre",at:14,chapter:"第二天",title:"絞肉機",speaker:"黑川巌",portrait:"kurokawa",scene:"street",text:`常夜中央通的監視器同時黑了十二秒。

十二秒後，街上多了九具屍體。

黑川巌站在便利商店的招牌下，拳頭上的鐵鍊滴著血。他對著監視器鏡頭笑，像在跟誰打招呼。

終端彈出公告：「超越者黑川巌，刻印 +9。目擊者處理中。」

這不是獵殺。這是廣告。`,choices:[{id:"fight",label:"正面攔住他。",hint:"回合制戰鬥／勝利 +15 刻印",apply:t=>(yi(t,"kurokawa"),Le(`你把外套脫下來，丟進水窪。

雨水在布料上浮成一層薄薄的光。

「喂。」你說。

他回頭了。`))},{id:"ambush",label:"藏在高處，用顯現偷襲。",hint:"顯現／+10 刻印／警戒指數 +7",apply:t=>(Zt(t),It(t,10,"你偷襲了黑川巌"),ae(t,7,"整條街的玻璃同時碎裂"),t.player.killsOverman+=1,t.player.flags.kurokawa_injured=!0,rt(`你的攻擊從天而降。黑川只來得及抬頭。

他沒有躲。他張開雙臂接住那一擊，像在擁抱一輛失控的卡車。

煙塵散去後，他跪在地上，胸口多了一個洞。

「再來。」他說。

「再來啊。」

你走了。走到街口時，你聽見他開始笑。`))},{id:"save",label:"衝進火場，把倖存者拖出來。",hint:"警戒指數 +2／侵蝕 -5／拯救一條命",apply:t=>(ae(t,2,"你在現場留下了腳印"),ke(t,-5,"你記得自己為什麼要跑"),t.player.flags.saved_civilian=!0,t.player.flags.saved_child=!0,$e(`你在倒塌的招牌下找到一個小女孩。她抓著你的外套不放，指甲陷進布料裡。

你把她抱出來的時候，她一直問：「我媽媽呢？」

你沒有回答。你不能回答。

救護車來的時候，你已經走了。她沒有看見你的臉，只記得你手腕上有紅色的光。`))},{id:"leave",label:"不要捲入。讓他成為誘餌。",hint:"情報 +1／侵蝕 +2",apply:t=>(ht(t,1,"你觀察到黑川的行動模式"),ke(t,2),Le(`你退到街角，記下黑川離開的方向。

他會引來神田。這是好事。

至少你是這麼告訴自己的。`))}]},rb={id:"ink_rain",at:17,chapter:"第二天",title:"墨雨",scene:"alley",text:`你在走路，突然發現雨是黑色的。

不是汙水。是墨。整條街的牆面都在滲出黑色的字，密密麻麻，寫滿同一個名字。

你的名字。

然後你看見自己的手：皮膚底下的血管亮著紅光，像一張正在燃燒的地圖。

侵蝕正在加速。`,choices:[{id:"endure",label:"咬破舌頭，撐住。",hint:"意志檢定 DC 14",apply:t=>St(t,"constitution",14,"抵抗侵蝕幻覺",bi(t,"limit")?2:0).ok?(ke(t,-4,"你把幻覺壓回視線邊緣"),$e(`你數著自己的心跳。一百二十下之後，雨恢復成透明的。

牆上的字不見了，只剩下水痕。

只有你記得它們寫了什麼。`)):(ke(t,8,"幻覺撕開了一道缺口"),sn(t,1,"你在牆上撞傷了肩膀"),mt(`你回過神時，自己正用額頭撞牆。

血順著眉骨流進眼睛，世界變成紅色的。

手機螢幕顯示：侵蝕率上升中。

旁邊有一個撐傘的路人站著看你，看了兩秒，然後繞路走開。`))},{id:"suppress",label:"用顯現強行壓制。",hint:"侵蝕 +8／自動成功",apply:t=>(Zt(t,8,"用顯現鎮壓失控"),ke(t,3,"壓制反過來餵養了侵蝕"),Le(`你讓顯現張開，把所有幻覺吞回去。

雨停了。至少在你站立的半徑三公尺內停了。

代價是，你現在能清楚聽見牆裡有人在說話。`))},{id:"call",label:"打給羈絆者。讓熟悉的聲音定位你。",hint:"羈絆／侵蝕 -12",apply:t=>{const e=t.bonds.filter(i=>i.alive).sort((i,a)=>a.level-i.level)[0]??t.bonds[0],n=fr(t,e.id);return $e(n+`

你看著自己的手慢慢恢復成皮膚的顏色。`)}},{id:"surrender",label:"放手。讓它佔領你一部分。",hint:"侵蝕 +12／獲得力量",apply:t=>(ke(t,12,"你主動讓侵蝕前進"),t.player.flags.let_go=!0,rt(`你停止抵抗。

黑色的雨穿透皮膚，溫度像一碗放涼的湯。

你突然能看見這條街所有人的死期。

這很方便。你討厭自己覺得方便。`))}]},sb={id:"midpoint",at:20,chapter:"第二天",title:"中場補給",scene:"docks",text:`裏八咫的無人機在頭頂盤旋三圈，丟下一個灰色箱子。

箱子上印著你的代號，還有一句印刷體：

「恭喜存活 20 小時。距離下次回收，還有 52 小時。」

箱子裡只能拿一樣東西。

遠方的港口響起汽笛。你突然意識到，這座城市每一天都在正常運作，只有你的人生被按下了倒數。`,choices:[{id:"medkit",label:"醫療包。",hint:"肉體回復 5",apply:t=>(xa(t,5,"裏八咫的軍規醫療包"),Le("你把止血凝膠打進傷口。痛覺被一層冰冷的東西蓋住。"))},{id:"chip",label:"情報晶片。",hint:"情報 +3",apply:t=>(ht(t,3,"晶片裡有參賽者座標"),Le("晶片裡有所有超越者的初始座標，以及一條被標紅的路線：通往第七號貨櫃碼頭。"))},{id:"cleaner",label:"偽造終端。",hint:"警戒指數 -20",apply:t=>(ae(t,-20,"你換上偽造終端"),$e(`你把舊終端丟進海裡。新的終端顯示同一個代號，但所有犯罪紀錄都變成空白。

至少裏八咫的電腦會這麼認為。`))},{id:"booster",label:"強化劑。",hint:"肉體上限 +2／侵蝕 +8",apply:t=>(t.player.maxHp+=2,xa(t,2),ke(t,8,"你讓顯現改寫自己的身體"),rt(`藥劑沿著血管燒過去。你看見自己的影子多了一雙手。

肉體上限提升。代價寫在侵蝕率上。`))},{id:"armor",label:"防彈背心。",hint:"裝備護甲／AC 基礎 13／敏捷上限 +2",apply:t=>(Uu(t,"vest","你換上裏八咫的防彈背心"),$e(`背心比想像中輕。你活動了一下肩膀，確認它不會妨礙顯現。

「擋得住手槍。」箱子上的標籤寫著。「擋不住奇蹟。」`))}]},ob={id:"tetsu_dead",at:23,chapter:"第二天",title:"鐵屑",scene:"docks",text:`你在第七號碼頭找到鐵十兵衛。

他坐在貨櫃旁邊，眼睛睜著，胸口有一個乾淨的圓洞。

終端上他的代號已經變灰。最後一筆紀錄是：「刻印 13。已回收。」

他口袋裡有一張被血浸濕的照片。照片上是一個小女孩，穿著水手服，比著勝利手勢。

背面寫著：「爺爺，這次一定要回來。」`,choices:[{id:"investigate",label:"檢查傷口與現場。",hint:"情報 +2",apply:t=>(ht(t,2,"你從傷口推斷出兇手的手法"),ae(t,1,"你在現場停留太久"),Le(`傷口太乾淨了。沒有掙扎，沒有防禦傷。

這不是超越者能做出的切口。

你想起新聞裡那個名字：神田隼人。`))},{id:"take",label:"拿走他的刻印。",hint:"刻印 +4／侵蝕 +3",apply:t=>(It(t,4,"你接收了鐵十兵衛的刻印"),ke(t,3,"你碰觸了死者的終端"),rt(`終端在你手裡震了一下，像一顆還在跳的心。

刻印轉移完成。

你沒有看那張照片第二眼。`))},{id:"mourn",label:"替他蓋上外套。",hint:"侵蝕 -3／羈絆感",apply:t=>(ke(t,-3,"你為一個陌生人停了下來"),t.player.flags.mourned_tetsu=!0,$e(`你把外套蓋在他臉上。

照片放回他胸口。

「回去看看吧。」你說。雖然你知道他回不去了。`))}]},lb={id:"kanda_rumor",at:26,chapter:"第二天",title:"那個刑警",speaker:"神田隼人",portrait:"kanda",scene:"street",text:t=>`電視牆上臨時插播一則記者會。

「警視廳今日證實，已針對近日連續超常死亡事件成立專案小組，由搜查一課的特別顧問・神田隼人負責。」

畫面切到一個穿黑色風衣的男人。他沒有看鏡頭，正在低頭翻一份資料。

記者問他是否相信「特殊能力者」的存在。

他抬起頭。

「我相信證據。」他說。「而證據告訴我，有人在替你們數人頭。」

畫面下方跑馬燈：神田隼人，17 歲，無顯現／Homo sapiens。

${Y_.text}`,choices:[{id:"research",label:"蒐集神田的資料。",hint:"情報 +3",apply:t=>(ht(t,3,"你找到神田的舊案卷"),Le(`七起案件，七個超越者。三個在逮捕前侵蝕率突破 100%，兩個自殺，兩個至今沒有交代動機。

所有案件都有一個共同點：神田隼人走進現場時，沒有人逃得掉。`))},{id:"escape_plan",label:"去車站確認離開城市的路線。",hint:"知性檢定 DC 15／解鎖逃亡路線",apply:t=>St(t,"intelligence",15,"規劃離開城市的路線").ok?(t.player.flags.exit_route=!0,ae(t,-2,"你避開主要道路"),$e(`你找到一條不在裏八咫地圖上的舊貨運線。

終點是隔壁縣的一座小站。

你把路線記在腦裡，沒有寫下來。`)):(ae(t,5,"你在車站被盤查"),mt(`車站的便衣比旅客多。你買了一張票，又在上車前把票撕掉。

有人記下了你的臉。`))},{id:"dismiss",label:"一個普通人而已。不需要在意。",hint:"侵蝕 +2",apply:t=>(ke(t,2),Le(`你把電視牆留在身後。

雨又開始下了。

你沒有注意到，畫面裡的神田隼人，正看著監視器的方向。`))}]},cb={id:"ayase_proposal",at:29,chapter:"第二天",title:"玻璃聖母",speaker:"綾瀬凍",portrait:"ayase",scene:"street",text:`綾瀬凍在頂樓等你。她沒有撐傘，雨在她頭頂三公分處凝成細小的冰晶。

「你應該已經發現了，」她說，「這場遊戲不是給我們贏的。」

她把終端投影打開。上面是一份裏八咫內部名單，三十個代號，只有三個還亮著。

「王冠也在這座城市。他侵蝕率 100%，裏八咫卻不敢回收他。」

「我們聯手，先殺王冠，再處理神田。」

她停頓了一下。

「或者，你可以現在殺我。排名會上升。」`,choices:t=>[{id:"ally",label:"結盟。先活過今晚。",hint:"同盟／情報 +2／警戒指數 -2",apply:e=>(e.player.flags.ayase_ally=!0,ht(e,2,"綾瀬分享王冠的情報"),ae(e,-2,"綾瀬替你抹掉一組監視紀錄"),$e(`她伸出戴著黑色手套的手。你握住。

她的手很冷，但沒有結冰。

「記住，」她說，「我不是在救你。我是在提高我們兩個的存活率。」`))},{id:"decline",label:"拒絕。我不相信任何人。",hint:"情報 +1",apply:e=>(ht(e,1,"你記住王冠的弱點"),Le(`「隨你。」她把終端收起來。「但王冠出現時，不要站在我前面。」

她走進雨裡。冰晶在身後碎成一地。`))},{id:"betray",label:"趁她轉身，偷襲。",hint:"回合制戰鬥／勝利 +20 刻印",apply:e=>(e.player.flags.ayase_enemy=!0,yi(e,"ayase"),Le("你踏出一步，冰面在腳下裂開。"))}]},db={id:"kotone_song",at:32,chapter:"第三天",title:"雨中的歌",speaker:"街角的人",scene:"alley",text:`車站前的廣場空無一人。

白石琴音坐在濕透的塑膠椅上，抱著一把便宜的木吉他，唱一首你沒聽過的歌。

歌詞是關於一個人在雨天出門，忘了帶傘，也忘了為什麼要出門。

她看見你，沒有停。只是把下一段唱得小聲一點，像在留一個位置給你。

你突然想起，自己已經三天沒有坐下來了。`,choices:[{id:"listen",label:"坐下來，聽完。",hint:"侵蝕 -10／羈絆 +1",apply:t=>(Bu(t,"community"),ke(t,-4,"你把整首歌聽完"),$e(`她唱完最後一句，吉他弦還在震。

「你每次都只聽一半。」她說。

「這次聽完了。」

她笑了。雨聲突然變得很遠。`))},{id:"truth",label:"告訴她，你可能活不過明天。",hint:"羈絆 +2／監視 +5",apply:t=>(_n(t,"community",2),t.player.surveillance+=5,t.player.flags.told_kotone=!0,rt(`她聽完，沒有問「什麼遊戲」，也沒有報警。

她只是把吉他放下，走過來抱住你。

「那你今天不要走。」

你在她肩膀上聞到雨和廉價洗髮精的味道。

終端在口袋裡震動。你沒有看。`))},{id:"coin",label:"把錢放進吉他盒，離開。",hint:"侵蝕 -3",apply:t=>(ke(t,-3,"你留下了一點什麼"),Le(`硬幣落在吉他盒裡，聲音很清脆。

她沒有抬頭。

你走到街角時，聽見她重新開始唱同一首歌。`))}]},ub={id:"detective_shadow",at:36,chapter:"第三天",title:"影子",speaker:"神田隼人",portrait:"kanda",scene:"street",text:`你在便利商店的玻璃反射裡看見他。

神田隼人站在對街，正在問一個賣傘的老人。他沒有穿制服，但方圓十公尺內的人都自動讓開。

然後他抬起頭，視線穿過雨幕，準確地落在你的倒影上。

他沒有走過來。

只是把手插進風衣口袋，像在等一個很慢的綠燈。

你的終端顯示：神田隼人，距離 18 公尺，交戰評估 0.0%。`,choices:[{id:"act_normal",label:"假裝路人，繼續買東西。",hint:"魅力檢定 DC 14",apply:t=>St(t,"charisma",14,"在神田面前演一個普通人").ok?(ae(t,-4,"神田沒有把你列入名單"),$e(`你拿起一罐咖啡，走到櫃檯結帳。手沒有抖。

走出店門時，神田已經不在對街了。

你鬆了一口氣，才發現咖啡罐被你捏凹了。`)):(ae(t,7,"神田記住了你的臉"),t.player.wantedAt=Math.max(t.player.wantedAt,t.hour),mt(`你付錢時，店員問：「先生，你還好嗎？」

你抬頭，發現神田就站在你身後。

「他看起來很好。」神田替你回答。「只是有點累。」

他拿走你手上的咖啡，付了錢，然後走了。`))},{id:"leave_fast",label:"立刻離開這個街區。",hint:"警戒指數 +3／安全",apply:t=>(ae(t,3,"你匆忙離開引起注意"),Le(`你拐進巷子，走了三個街區才停下來。

回頭時，雨裡沒有人。`))},{id:"confront",label:"主動走過去。",hint:"情報 +2／警戒指數 +8／危險",apply:t=>(ht(t,2,"你和神田說上了話"),ae(t,8,"你主動接近神田"),t.player.flags.talked_kanda=!0,rt(`你走到他面前。他沒有驚訝。

「你知道我在查什麼。」他說，不是問句。

「知道。」

「那你應該也知道，我抓過比你更難抓的東西。」

他把一張名片放進你的口袋。「想說的時候，打這個號碼。」

你低頭看名片。上面只有一個名字：神田隼人。`))},{id:"erase",label:"用顯現抹掉他周圍的監視紀錄。",hint:"需要記憶篡改／警戒指數 -10",requires:t=>bi(t,"memory"),apply:t=>(Zt(t),ae(t,-10,"你改寫了整條街的監視紀錄"),Le(`你讓雨聲蓋過電子訊號。監視器裡，神田身邊的畫面變成一片雪花。

他抬頭看了一眼鏡頭。

然後笑了。`))}]},hb={id:"blackout",at:40,chapter:"第三天",title:"停電",scene:"docks",text:`凌晨兩點，整座城市同時停電。

不是意外。裏八咫把電網切斷了，好讓某些事情在黑暗裡發生。

街上開始有人砸玻璃。消防車的鳴笛從三個方向靠近。

你的終端顯示：

「臨時規則：停電期間，刻印價值 ×2。破壞行為不計入違規。」

黑暗裡，有人開始尖叫。`,choices:[{id:"hunt",label:"趁亂狩獵。",hint:"刻印 +8／警戒指數 +12／侵蝕 +5",apply:t=>(It(t,8,"你在停電中收割刻印"),ae(t,12,"整條街陷入混亂"),ke(t,5,"你在黑暗裡放開了手"),t.player.killsNormal+=3,rt(`你分不清自己殺了幾個人。

終端只顯示：刻印 +8。

電力恢復時，街上多了幾具屍體。你已經不在那裡了。`))},{id:"protect",label:"留在便利商店，幫大地守住店。",hint:"警戒指數 -6／羈絆 +1／侵蝕 -6",apply:t=>(ae(t,-6,"你沒有參與停電騷亂"),_n(t,"friend",1),ke(t,-6,"你選擇站在門口"),t.player.flags.protected_store=!0,$e(`你和大地把鐵門拉下，只留一道縫。

外面有人砸門。大地拿著掃把站在你旁邊，手在抖。

「你會沒事的。」你說。

你沒有告訴他，這句話是對你自己說的。`))},{id:"hide",label:"躲進地下停車場。",hint:"警戒指數 -8",apply:t=>(ae(t,-8,"你在黑暗裡消失"),Le(`你在地下三樓坐了一整夜。

手機沒有訊號。終端顯示刻印目標不變。

上方不時傳來跑步聲。你沒有動。`))}]},fb={id:"evidence",at:44,chapter:"第三天",title:"不該存在的文件",scene:"alley",text:`你在裏八咫補給箱的夾層裡，找到一份不該存在的文件。

標題是「Project Ignis・第七次適性選別・執行紀錄」。

裡面有所有參賽者的名單、家屬住址、回收順序。每個名字後面都有一個編號，編號後面的欄位空著——等你死的時候再填。

最後一頁釘著一張照片。神田隼人站在霧見市的舊車站前，身邊是一個與你年紀相仿的女孩。他沒有看鏡頭，側著臉在跟她說話，嘴角有一點很不像他的東西。

照片背面寫著：「小田川知世／霧見集體失蹤／未回收。」

照片的邊角被摸得起毛。有人反覆拿出來看，看了很多年。

你終於知道，他為什麼會來。`,choices:[{id:"copy",label:"複製證據。以備不時之需。",hint:"證據／情報 +2／監視 +3",apply:t=>(t.player.evidence=!0,ht(t,2,"你複製了Project Ignis的完整紀錄"),t.player.surveillance+=3,$e(`你把檔案傳進終端的加密區。

這份東西能毀掉裏八咫，也能毀掉你。

你決定先留著。`))},{id:"burn",label:"燒掉。知道太多隻會死得更快。",hint:"警戒指數 -5／侵蝕 +3",apply:t=>(ae(t,-5,"你銷毀了裏八咫的文件"),ke(t,3),Le(`紙張燒得很慢。

你看著小田川知世的照片捲曲、變黑，最後消失。

你告訴自己，這是在保護他。`))},{id:"leak",label:"匿名傳給電視臺。",hint:"警戒指數 +15／監視 +10／公開真相",apply:t=>(t.player.evidence=!0,ae(t,15,"Project Ignis的片段在網路上流傳"),t.player.surveillance+=10,t.player.flags.leaked=!0,rt(`三分鐘後，一個匿名帳號發布了文件截圖。

五分鐘後，影片被下架。

但已經有人備份了。

你的終端響起裏八咫的警告音：「來源追蹤中。」`))}]},pb={id:"kanda_arrives",at:48,chapter:"第三天",title:"他到了",speaker:"神田隼人",portrait:"kanda",scene:"street",text:t=>`第 48 小時。

雨突然停了。

新湊站前，一輛黑色轎車停下。車門打開，先出現的是一把黑色的傘，然後是一雙擦得很乾淨的皮鞋。

神田隼人。

他沒有帶隊，沒有鳴笛，只有一個裝著資料的公事包。

他站在車站前的廣場中央，抬頭看了一眼監視器。

你離他不到三十公尺。

他沒有看你，卻像已經把你的骨骼、心跳與逃跑路線全部讀完。

終端顯示：

交戰評估 0.0%
勝率 0.0%
AC 24

逃離機率 14%

神田把傘收起來，甩了甩水。

「好大的雨。」他說，像在跟誰聊天。

${t.player.heat>=45?"他的視線在人群中掃過，停在你身上半秒。":"他的視線越過你，落在一個賣傘的老人身上。"}`,choices:t=>[{id:"walk",label:"低頭，走過去。",hint:"意志檢定 DC 12 + 警戒指數壓力",apply:e=>{const n=12+Math.floor(e.player.heat/25);return St(e,"constitution",n,"在神田面前保持鎮定").ok?(ae(e,-3,"神田暫時沒有把你列入名單"),$e(`你從他身邊走過。距離最近的時候，不到一步。

你聞到他身上的雨味和咖啡味。

他沒有看你。

走出車站廣場後，你的腿才開始發抖。`)):(ae(e,8,"你的視線引起神田注意"),mt(`你在經過時看了他一眼。

只有一眼。

神田微微側頭。「我們見過嗎？」

你搖頭。他沒有追問，但你知道，他記住了。`))}},{id:"hide",label:"用顯現隱藏自己。",hint:"顯現／自動脫離視線",apply:e=>(Zt(e,void 0,"在神田面前啟動隱匿"),ae(e,-6,"你從監視畫面裡消失"),Le(`你讓自己的存在變薄。

神田的視線穿過你原本站的位置，落在你身後。

「奇怪。」他低聲說。

你已經不在那裡了。`))},{id:"approach",label:"主動走過去，假裝問路。",hint:"情報 +2／極高風險",apply:e=>(ht(e,2,"你從神田口中得到一條線索"),ae(e,5,"你和神田面對面交談"),e.player.flags.talked_kanda=!0,rt(`「不好意思，車站怎麼走？」

他看著你，看了三秒。

「你已經站在它前面了。」

他從公事包裡抽出一張照片。「不過，既然你問了——你看過這個人嗎？」

照片上是黑川巌。

你搖頭。

「謝謝。」他把照片收回去。「你手上有血的味道，先生。記得洗乾淨。」`))},{id:"flee",label:"立刻轉身離開。",hint:"警戒指數 +5",apply:e=>(ae(e,5,"你在車站前突然奔跑"),mt(`你轉身的動作太明顯。

神田沒有追上來。

但當你回頭時，他正舉著手機，對著你的背影。`))}]},mb={id:"interrogation",at:51,chapter:"第三天",title:"盤問",speaker:"神田隼人",portrait:"kanda",scene:"alley",text:`你走進一家凌晨還開著的咖啡店。店裡只有兩個人。

你，和坐在角落的神田隼人。

他面前有兩杯咖啡。他把其中一杯推向你。

「坐吧。」

「我不認識你。」

「但你認識這個。」他把你昨晚丟掉的終端放在桌上。「我在垃圾回收場找到的。你以為把它丟進海裡就沒事了？」

他沒有提高音量。

「我不是來抓你的。」他說。「我是來問你，你想不想活著離開這座城市。」`,choices:t=>[{id:"lie",label:"裝傻。什麼終端？",hint:"魅力檢定 DC 15",apply:e=>St(e,"charisma",15,"對神田說謊").ok?(ae(e,-2,"神田暫時接受你的說法"),$e(`他盯著你看了一會，然後把終端收回口袋。

「好。」他說。「當我沒問。」

他站起來，把咖啡錢放在桌上。

走到門口時，他停下來。「如果你改變主意，號碼在杯墊下面。」`)):(ae(e,10,"神田識破你的謊言"),e.player.wanted=!0,e.player.wantedAt=e.hour,mt(`「你剛才說你沒見過終端。」他指著你的手腕。「那為什麼你在發抖？」

他拿起手機，按了一個號碼。

「搜查一課。幫我查一個代號。」`))},{id:"silent",label:"保持沉默。",hint:"意志檢定 DC 14",apply:e=>St(e,"constitution",14,"在神田面前保持沉默").ok?Le(`你什麼也沒說。

他等了五分鐘，然後點了點頭。「沉默也是一種回答。」

他走了。咖啡還冒著熱氣。`):(ke(e,4,"沉默讓侵蝕有機可乘"),ae(e,4,"你的異常反應被記錄"),mt(`你咬著牙，卻聽見自己手腕上的終端發出低鳴。

神田低頭看了一眼。「它不喜歡沉默，對吧？」`))},{id:"partial",label:"承認一部分。問小田川知世的事。",hint:"情報 +2／警戒指數 +4",apply:e=>(ht(e,2,"神田證實了霧見集體失蹤與裏八咫的關聯"),ae(e,4,"你承認自己知道內情"),e.player.flags.kanda_partial=!0,Le(`你提到霧見市。

神田第一次出現表情變化。不是驚訝，是疲憊。

「你從哪裡知道這個名字？」

「文件上。」

他沉默很久。「小田川知世也在那份名單上。」

他把咖啡喝完，站起來。「別死。你可能是唯一能作證的人。」`))},{id:"attack",label:"攻擊他。現在，趁他沒有防備。",hint:"勝率 0.0%／回合制",apply:e=>(yi(e,"kanda"),Le("你站起來，把咖啡杯推開。"))}]},gb={id:"kurokawa_arrested",at:54,chapter:"第三天",title:"回收通知",scene:"street",text:`城市各處的螢幕同時亮起同一則通知。

「超越者黑川巌，刻印 62。已由警視廳逮捕。刻印回收完畢。」

畫面裡，黑川被兩名刑警押上車。他沒有反抗，只是對著鏡頭笑。

他的手腕上，紅色的光已經熄滅。

終端更新排名。你上升了一位。

下方附註：「神田隼人主導。全員注意：勿與其交戰。」

黑川是所有超越者裡最強壯的一個。

他被抓了。

而神田隼人沒有受傷。`,choices:t=>[{id:"hunt_gap",label:"利用黑川留下的空檔，狩獵他的地盤。",hint:"刻印 +5／警戒指數 +5",apply:e=>(It(e,5,"你接收了黑川地盤上的刻印"),ae(e,5,"你出現在黑川的地盤"),rt(`黑川的據點沒有人防守。

你拿走他留下的補給與兩個落單的超越者。

終端排名上升。你沒有感到高興。`))},{id:"erase",label:"趁警方注意力轉移，銷毀自己的痕跡。",hint:"警戒指數 -15",apply:e=>(ae(e,-15,"你把痕跡藏進黑川的案子裡"),$e(`你把兩起案件嫁禍給黑川。

裏八咫的系統接受了。

死人不會辯解。`))},{id:"visit_ayase",label:"去找綾瀬凍。她應該也看到了。",hint:"情報 +1／同盟",apply:e=>(ht(e,1,"綾瀬分析神田的手法"),e.player.flags.ayase_ally?(_n(e,"family",1),Le(`綾瀬在頂樓等你。

「他一次都沒有用武器。」她說。「黑川不是被打敗的。他是被讀完的。」

她看向你。「王冠出現的時候，不要看他的眼睛。神田也是。」`)):Le(`頂樓沒有人。

只有地上用冰晶排成的一行字：「還來得及。選一邊。」`))}]},_b={id:"quiet_call",at:57,chapter:"第三天",title:"櫻花開了",speaker:"水島澪",condition:t=>!t.player.wanted&&t.player.heat<70,scene:"alley",text:`終端顯示你暫時沒有被列為優先目標。

這意味著你有幾個小時的空檔。

手機響起。是澪。

「哥，家裡的櫻花開了。」

「現在是十一月。」

「所以才奇怪啊。」她笑。「你什麼時候回來？我留了一枝給你。」

你看著窗外。雨還在下。

「快了。」你說。`,choices:[{id:"promise",label:"承諾一定會回去。",hint:"羈絆 +2／侵蝕 -8",apply:t=>(_n(t,"family",2),ke(t,-8,"你給了自己一個必須回去的理由"),$e(`「嗯。」她說。「我等你。」

掛上電話後，你把額頭靠在冰冷的玻璃上。

第一次覺得，「回去」這兩個字有重量。`))},{id:"honest",label:"告訴她，你可能會變成不是人的東西。",hint:"羈絆 +1／侵蝕 -12／監視 +4",apply:t=>(_n(t,"family",1),ke(t,-12,"你把最害怕的事說出口"),t.player.surveillance+=4,Le(`電話那頭安靜了很久。

「那你就回來讓我看看。」她說。「如果認不出來，我會打你一巴掌。」

你笑了。這是三天來第一次。`))},{id:"cut",label:"說你會盡量。然後掛斷。",hint:"侵蝕 +2",apply:t=>(ke(t,2),Le(`「盡量」是一個很方便的詞。

它聽起來像承諾，實際上什麼都沒有。

她說好。你聽見她還想說什麼，但你掛斷了。`))}]},vb={id:"wanted",at:57,chapter:"第三天",title:"指名手配",speaker:"神田隼人",portrait:"kanda",scene:"street",text:`你的終端發出從未聽過的聲音。

低沉、規律，像醫院裡某臺機器停止運轉。

螢幕上跳出紅色字樣：

「對象已列為指名手配。
執行者：神田隼人。
剩餘時間：3 小時。」

街角的公共螢幕出現你的代號。不是照片，不是真名。但你知道，神田已經知道你是誰。

雨裡傳來腳步聲。

不急，不慢。像一個已經知道終點在哪裡的人。`,condition:t=>t.player.wanted||t.player.heat>=70,choices:t=>[{id:"run",label:"逃。趁他還沒鎖定位置。",hint:"敏捷檢定 DC 16／降低警戒指數",apply:e=>St(e,"dexterity",16,"甩開神田的包圍網").ok?(ae(e,-18,"你換了三個藏身處"),e.player.wanted=!1,$e(`你穿過三條後巷、一座停車場、一間打烊的居酒屋。

腳步聲消失了。

你蹲在垃圾箱後面，聽見自己的心跳比雨聲還大。`)):(ae(e,5,"你被迫往市中心移動"),e.player.wanted=!0,e.player.wantedAt=e.hour,mt(`你跑進了一條死巷。

腳步聲在巷口停下。

「我不急。」神田說。「你也跑不了三個小時。」`))},{id:"hide_deep",label:"躲進地下。切斷所有訊號。",hint:"警戒指數 -20／肉體 -2",apply:e=>(ae(e,-20,"你從城市表面消失"),sn(e,2,"地下骯髒的環境讓傷口惡化"),e.player.wanted=!1,Le(`你鑽進廢棄的下水道。

水淹到小腿，空氣裡有鐵鏽味。

終端失去訊號。你第一次覺得，被城市遺忘也是一種保護。`))},{id:"surrender_talk",label:"主動聯絡神田，要求談判。",hint:"情報 +2／高風險",apply:e=>(ht(e,2,"神田在電話裡給了你一個地址"),ae(e,-8,"你主動聯絡神田"),e.player.flags.kanda_contact=!0,rt(`電話只響了一聲。

「你終於打來了。」

「我要談條件。」

「碼頭，第七號倉庫。天亮前。」

他掛斷了。你看著手機，不確定這是不是另一種逮捕令。`))}]},bb={id:"reckoning",at:60,chapter:"第三天",title:"清算前夜",scene:"docks",text:t=>{const e=ii(t);return`第六十小時。

終端把成績單攤在你面前，字體和平常一樣冷。

刻印：${t.player.marks}／${zn}。
排名：${e.rank}／${e.total}。

${t.player.marks>=zn?"「已達標。剩餘 12 小時。請維持排名。」":"「未達標。剩餘 12 小時。建議：提高效率。」"}

港口那邊，最後一艘貨輪正在離港，船身壓得很低。

城市的另一頭傳來爆炸聲。

不是雷。這個季節沒有雷。

王冠要來了。

你只剩下十二個小時，決定自己要不要繼續當人。`},choices:t=>[{id:"spree",label:"走上街。把所有還能殺的都算進分數。",hint:"刻印 +8／警戒指數 +18／侵蝕 +12",apply:e=>(It(e,8,"你在最後的夜晚大開殺戒"),ae(e,18,"屠殺規模失控"),ke(e,12,"你讓顯現整晚沒有休息"),e.player.killsNormal+=8,e.player.flags.massacre=!0,rt(`你不記得自己走了幾條街。

終端不停震動，像在替你數拍子。

天亮前，你停在一個十字路口。

四面的監視器都對準你。你沒有躲。`))},{id:"hunt_rival",label:"找出排名在你前面的超越者。",hint:"狩獵檢定 DC 15／成功 +10",apply:e=>St(e,As(e),15,"狩獵排名前段超越者",hr(e)).ok?(Zt(e),It(e,10,"你獵殺了一名排名前段的超越者"),ae(e,4,"碼頭發生戰鬥"),e.player.killsOverman+=1,rt(`你在他補給的時候找到他。

戰鬥沒有超過一分鐘。

終端排名更新。你上升了。

他掉進海裡，沒有濺起太大的水花。`)):(ku(e,9,3,"獵物的反擊"),ae(e,4,"碼頭發生戰鬥"),mt(`你低估了他。

他逃進貨櫃之間，留下一道血跡和一句話：「你也是被算好的。」`))},{id:"hide",label:"躲起來。分數不重要了。",hint:"警戒指數 -12／侵蝕 -3",apply:e=>(ae(e,-12,"你放棄了最後的狩獵"),ke(e,-3,"你選擇不再弄髒手"),Le(`你找了一個沒有監視器的倉庫，坐在角落裡。

外面有人在跑，有人在叫，有人死了。

你沒有出去。

這是三天來第一次，你覺得安靜是好的。`))},{id:"bond",label:"打最後一通電話。",hint:"侵蝕 -15／羈絆 +1",apply:e=>{const n=e.bonds.filter(a=>a.alive).sort((a,r)=>r.level-a.level)[0],i=n?fr(e,n.id):"所有號碼都已無人接聽。";return $e(i+`

你把手機收進口袋。

如果明天還能醒來，你想再聽一次。`)}}]},xb={id:"crown_stage",at:63,chapter:"終章",title:"王冠",speaker:"王冠",portrait:"crown",scene:"docks",text:`第七號貨櫃碼頭。凌晨三點。

所有的路燈同時亮起，照出一條通往海面的白色光帶。

王冠站在光帶盡頭。

他穿著一套破損的白色西裝，銀色長髮被海風吹起，頭上戴著一頂用斷裂鋼筋與紅色玻璃拼成的王冠。

他的一半身體已經不再是人的形狀：黑色的結晶從胸口長出，像一座正在生長的教堂。

「歡迎。」他說，聲音溫柔得像在主持婚禮。「你們都是來看我成為新物種的嗎？」

他抬起手。整座碼頭的貨櫃同時浮起。

「裏八咫說我是失敗品。」他笑。「但失敗品，通常最接近真相。」

終端顯示：

超越者王冠／侵蝕率 100%／刻印 87／交戰評估：不可能`,choices:t=>[{id:"ally_ayase",label:"和綾瀬聯手。",hint:"需要同盟／回合制戰鬥",requires:e=>!!e.player.flags.ayase_ally,apply:e=>(yi(e,"crown"),Le("綾瀬的冰牆在你身旁升起。"))},{id:"solo",label:"獨自挑戰。",hint:"回合制戰鬥／高風險",apply:e=>(yi(e,"crown"),Le("你獨自走向光帶盡頭。"))},{id:"side_crown",label:"跪下。選擇站在王冠這邊。",hint:"刻印 +15／警戒指數 +10／走向另一種結局",apply:e=>(e.player.flags.crown_ally=!0,It(e,15,"王冠分給你一部分刻印"),ae(e,10,"你公開與王冠並肩"),ke(e,10,"你接受了王冠的邀請"),rt(`你單膝跪下。

王冠把手放在你的頭上。黑色的結晶順著他的手指爬進你的頭髮。

「很好。」他說。「那就一起看看，人能不能審判神。」

終端發出警告。你關掉了它。`))},{id:"hide",label:"不要進場。讓他和神田相遇。",hint:"警戒指數 -10／情報 +2",apply:e=>(ae(e,-10,"你從碼頭撤退"),ht(e,2,"你觀察到王冠與神田的動線"),Le(`你退到起重機後面。

王冠沒有追你。他的視線越過整座碼頭，落在一個正走過來的人身上。

那個人沒有撐傘。

神田隼人。`))}]},yb={id:"crown_fall",at:68,chapter:"終章",title:"一擊",speaker:"神田隼人",portrait:"kanda",scene:"docks",text:t=>`王冠把整座碼頭舉了起來。

貨櫃、起重機、海水，全部浮在半空。他的身體已經看不出人形，只有那頂王冠還亮著。

「你看見了嗎？」他對著走過來的人說。「這就是新物種。這就是人類的下一步。」

神田隼人停下腳步。

他手上沒有槍。

他只是從口袋裡拿出一副手銬。

王冠笑了。黑色的結晶像海嘯一樣撲過去。

然後，一切停了。

神田站在王冠面前，右手扣住他的手腕，左腳踩住他的影子。

「你說完了嗎？」

王冠的結晶開始碎裂。從指尖，到胸口，到那頂王冠。

「不可能……」王冠說。「我已經不是人了……」

「我知道。」神田說。「但你也沒有變成別的東西。」

他一拳打在王冠的胸口。

那一拳沒有光，沒有風，沒有任何超常現象。

只有一個普通人，把一個自稱神的怪物，打回原形。

王冠倒在地上。終端顯示：

超越者王冠／已回收。
執行者：神田隼人。

${t.player.flags.crown_injured?`你看見王冠胸口的舊傷。那是你留下的。

神田順著傷口的方向看過來。

「原來如此。」他說。「你也出了手。」`:`神田甩了甩手，像剛做完一件不怎麼費力的事。

他抬頭，看向你藏身的方向。`}

距離閉幕，還有 4 小時。`,choices:[{id:"run",label:"趁神田處理王冠，立刻撤退。",hint:"解鎖逃亡時機／警戒指數 +3",apply:t=>(t.player.flags.escape_ready=!0,ae(t,3,"你從碼頭消失"),Le(`你沿著貨櫃之間的縫隙往後退。

神田沒有追。他正蹲在王冠旁邊，讀著什麼。

你聽見他說：「告訴我，霧見市那晚發生了什麼。」

王冠笑了。`))},{id:"watch",label:"留下來，看完。",hint:"情報 +2／侵蝕 -3",apply:t=>(ht(t,2,"你聽見王冠說出裏八咫的秘密"),ke(t,-3,"你看見怪物被當成人對待"),Le(`王冠躺在地上，看著夜空。

「他們把我們叫做怪物，」他說，「然後要我們互相證明誰更不像人。」

神田沒有回答。

他只是把手銬扣上，動作很輕。

「小田川知世……」王冠說，「在霧見市，對吧？」

神田的手停了半秒。`))},{id:"approach",label:"走向神田。",hint:"需要證據或高羈絆",requires:t=>t.player.evidence||Fn(t)>=6,apply:t=>(t.player.flags.confront_kanda=!0,ae(t,-5,"你主動走向神田"),rt(`你從陰影裡走出來。

神田沒有轉身。「你終於肯出來了。」

「我有證據。」你說。「Project Ignis。裏八咫。全部。」

他看著你，看了很久。

「你知道交出來之後，你會怎樣嗎？」

「知道。」

「那就別在這裡交。」他說。「閉幕之後，到車站找我。」`))}]},Sb={id:"last_choice",at:70,chapter:"終章",title:"最後的選擇",speaker:"神田隼人",portrait:"kanda",scene:"docks",text:t=>{const e=ii(t);return`距離閉幕，還有兩小時。

碼頭的燈一盞一盞熄滅。神田隼人站在警車旁，正在寫報告。王冠被銬在後座，像一件終於歸位的證物。

你的終端顯示：

刻印 ${t.player.marks}／${zn}
排名 ${e.rank}／${e.total}
侵蝕 ${t.player.encroachment}%
羈絆 ${Fn(t)}

神田沒有看你，但你知道他在等。

遠處，裏八咫的直升機正在靠近。

你還有最後一次選擇。`},choices:t=>[{id:"escape_now",label:"現在就走。離開這座城市。",hint:"需要羈絆 ≥8 或已規劃路線／警戒指數 <70",requires:e=>Fn(e)>=8||!!e.player.flags.exit_route,apply:e=>e.player.heat>=70?(ae(e,5,"警方在出口攔截"),nn(e,"caught"),rt(`你走到檢查站時，警察已經在那裡等了。

神田從車裡下來，替你關上車門。

「我以為你會選另一條路。」`)):(nn(e,"escape"),$e(`你沒有回頭。

海風很冷，天邊已經泛白。`))},{id:"confess",label:"把證據交給神田。",hint:"需要證據與情報 ≥5，或羈絆 ≥6",requires:e=>e.player.evidence&&(e.player.intel>=5||Fn(e)>=6),apply:e=>(nn(e,"confess"),$e(`你走到神田面前，把終端放在他的報告上。

他抬頭看了你一眼，然後合上報告。

「上車吧。」他說。「我們有很多事要談。」`))},{id:"close",label:"迎接閉幕。讓裏八咫算分。",hint:"依刻印、排名、侵蝕與警戒指數決定結局",apply:e=>(e.player.flags.accept_close=!0,Le(`你站在原地，看著碼頭外的城市燈火一盞一盞亮起。

終端開始倒數。

00:59:59。`))},{id:"fight_kanda",label:"挑戰神田隼人。",hint:"勝率 0.0%／回合制",apply:e=>(yi(e,"kanda"),Le("你朝他走過去。"))}]},Mb={id:"kanda_ambush",at:48,chapter:"第三天",title:"無法戰勝的人",speaker:"神田隼人",portrait:"kanda",scene:"alley",condition:t=>t.player.wanted&&t.hour>=t.player.wantedAt+3&&t.hour<72,text:t=>`你走進一條死巷時，後方傳來傘尖點地的聲音。

神田隼人站在巷口，雨水從他的風衣下襬滴落。

「我查了三個小時。」他說。「你留下來的東西比你想像中多。」

他抬起手，一把漆黑的劍刃從雲層間落下，靜靜停在他掌中。

終端瘋狂震動：

交戰評估：0.0%
勝率：0.0%
建議：放棄抵抗

「我不喜歡追人。」神田說。「所以我們把這件事結束掉。」

你退後一步。背後的牆很冷。

侵蝕率 ${t.player.encroachment}%。警戒指數 ${t.player.heat}。

你只剩一次選擇。`,choices:t=>[{id:"fight",label:"應戰。",hint:"勝率 0.0%／回合制",apply:e=>(yi(e,"kanda"),Le("你沒有退路。"))},{id:"flee",label:"全力逃跑。",hint:"敏捷檢定 DC 18 + 警戒指數壓力",apply:e=>St(e,"dexterity",18+Math.floor(e.player.heat/25),"從神田手中逃脫").ok?(e.player.wanted=!1,ae(e,-25,"你甩開了神田的包圍"),sn(e,1,"你從二樓窗戶摔下去"),$e(`你衝向巷底的鐵門，肩膀撞開門栓。

身後的腳步聲停了一拍。

只有一拍。但那已經夠了。

你翻過兩道牆，跳進河裡。神田沒有追上來。`)):(nn(e,"caught"),rt(`你跑出三步。

神田的手從背後扣住你的脖子，把你按在牆上。

「我說過，」他的聲音很輕，「我不喜歡追人。」`))},{id:"power",label:"用顯現脫身。",hint:"需要瞬絕、空蟬、界限突破或記憶篡改",requires:e=>bi(e,"flash","shell","limit","memory"),apply:e=>(Zt(e,10,"在神田面前全力發動顯現"),e.player.wanted=!1,ae(e,-15,"你從神田的視線裡消失"),bi(e,"memory")?rt(`你看著他的眼睛，把「你」從他的記憶裡剪掉。

神田的表情空白了半秒。

「奇怪。」他低聲說。「我剛才在追誰？」

你貼著牆，慢慢後退。

他看了你一眼，視線穿過你，走了。`):bi(e,"limit")?rt(`你強行突破身體極限，抓住他的手，把他摔向牆壁。

神田穩住身體，第一次露出訝異。

那零點五秒的破綻，足夠你消失在雨裡。`):rt(`你留下一個空殼。

神田一腳踩碎它，低頭看著地上不屬於任何人的臉。

「不錯的把戲。」他說。「下次，我會先確認心跳。」`))},{id:"bond_rescue",label:"發出求救訊號。",hint:"需要羈絆 ≥8",requires:e=>Fn(e)>=8,apply:e=>{const n=e.bonds.filter(i=>i.alive).sort((i,a)=>a.level-i.level)[0];return sr(e,n.id,-1),e.player.wanted=!1,ae(e,-12,"一輛車衝進巷口，把你載走"),sn(e,1,"你摔進車後座"),rt(`巷口亮起車燈。

${n.name}把油門踩到底，車子擦著神田的身側衝過去。

你抓住車門，被拖行了十幾公尺才爬進後座。

後照鏡裡，神田站在原地，記下了車牌。

「你瘋了嗎？」${n.name}喊。

「對。」你說。「但謝謝你。」`)}},{id:"surrender",label:"投降。",hint:"結束逃亡",apply:e=>(nn(e,"caught"),Le(`你舉起手。

神田看著你，沒有立刻上前。

「你做得很好。」他說。

「什麼？」

「活到現在。」他把手銬收起來，改為抓住你的手臂。「走吧。你有很多事要告訴我。」`))}]},Eb={id:"closing",at:72,chapter:"閉幕",title:"第七十二小時",scene:"docks",text:t=>{const e=ii(t);return`零時整。

城市上空的烏雲裂開一道縫，第一束晨光落在海面上，像有人終於把這座城市打開。

終端停止倒數。

「Project Ignis，結束。」

刻印：${t.player.marks}。
排名：${e.rank}。
侵蝕率：${t.player.encroachment}%。
羈絆：${Fn(t)}。

海風把你的衣服吹得貼在背上。遠處有清潔車的聲音，很日常。

最終判定中。`},choices:[{id:"finish",label:"等待判定。",hint:"接受一切後果",apply:t=>{if(t.player.encroachment>=100||t.player.collapse>=3)return nn(t,"monster"),rt(`終端沒有給出判定。

它只是發出一聲很長的雜訊。

你低頭，看見自己的手已經不再是手。`);if(t.player.wanted&&t.player.heat>=80)return nn(t,"caught"),rt(`直升機的探照燈打在碼頭上。

神田隼人從光裡走出來。`);const e=ii(t);return t.player.marks>=zn&&e.rank===1&&t.player.heat<80?(nn(t,"throne"),Le("「第一名。」裏八咫的廣播說。「恭喜你成為普通人。」")):t.player.marks>=zn?(nn(t,"survivor"),Le("「刻印達標。排名未達第一。授予生存資格。」")):t.player.encroachment<40&&Fn(t)>=6?(nn(t,"nameless"),$e(`終端顯示：「未達標。回收名單確認中。」

然後，一隻手按住了螢幕。`)):(nn(t,"recycled"),mt("「刻印未達標。回收程序啟動。」"))}}]},ms=[{id:"r_witness",at:0,random:!0,chapter:"插曲",title:"鏡頭",scene:"street",text:`一個高中生舉著手機，鏡頭正對著你。

他看起來比你還害怕，但他的手指沒有放下。

「你……你剛才那是什麼？」

螢幕上的直播觀看人數正在上升。3、7、12。

你的臉還沒有完全入鏡。`,choices:[{id:"talk",label:"放下手，告訴他不要拍。",hint:"魅力檢定 DC 12",apply:t=>St(t,"charisma",12,"安撫目擊學生").ok?(ae(t,-2,"直播被關掉"),$e(`他放下手機，反覆道歉。

你看著他跑遠，慶幸自己還記得怎麼對人說話。`)):(ae(t,7,"直播片段開始流傳"),mt(`他越退越遠，鏡頭始終對著你。

等你離開時，那支影片已經有三千次觀看。`))},{id:"erase",label:"用顯現抹掉影片。",hint:"需要記憶篡改或灰燼領域",requires:t=>bi(t,"memory","ash"),apply:t=>(Zt(t),ae(t,-6,"你抹除了影片與記憶"),Le(`你讓他的手機黑屏三秒。

再亮起時，相簿裡什麼都沒有。

他愣在原地，然後慢慢放下手。`))},{id:"threat",label:"威脅他。",hint:"警戒指數 +5／羈絆 -?",apply:t=>(ae(t,5,"你的威脅被路人聽見"),ke(t,2),mt(`你說出那句話時，自己都覺得陌生。

他跑了。

但他的手機還留在地上，錄影鍵亮著。`))}]},{id:"r_stray",at:0,random:!0,chapter:"插曲",title:"同類",scene:"alley",text:`一個十六、七歲的男孩縮在自動販賣機旁邊。

他的手臂上有一道剛覺醒的紅色裂紋，還不會控制。

他看見你手腕上的終端，眼睛一亮。

「你也是……那個遊戲的嗎？」

「我不想殺人。我只是想回家。」

終端顯示：超越者，刻印 3。`,choices:[{id:"help",label:"幫他藏起來。",hint:"侵蝕 -6／羈絆感／情報 +1",apply:t=>(ke(t,-6,"你幫一個陌生人藏身"),ht(t,1,"男孩告訴你一條裏八咫的路線"),t.player.flags.helped_stray=!0,$e(`你把他帶到車站置物櫃，給了他一點錢。

「往北走。不要用顯現。不要相信穿西裝的人。」

他點頭，跑進人群。

你不知道他能不能活下來。`))},{id:"kill",label:"完成你的工作。",hint:"刻印 +10／警戒指數 +6",apply:t=>(It(t,10,"你結束了一個新生的超越者"),ae(t,6,"販賣機旁留下血跡"),t.player.killsOverman+=1,ke(t,3,"你沒有猶豫"),rt(`他沒有反抗。

甚至在你動手之前，就閉上了眼睛。

終端震動。刻印 +10。

你把他放進販賣機後面的空隙，用紙箱蓋住。`))},{id:"ignore",label:"假裝沒看見。",hint:"侵蝕 +2",apply:t=>(ke(t,2),Le(`你走過去。

他在背後叫你。「等等！你知道怎麼離開這裡嗎？」

你沒有回頭。`))}]},{id:"r_checkpoint",at:0,random:!0,chapter:"插曲",title:"臨檢",scene:"street",text:`前方路口拉起封鎖線。兩名警察逐一盤查行人，桌上放著一臺讀取終端的機器。

你的終端沒有違規紀錄，但機器可能會讀出別的東西。

排在前面的人陸續通過。

輪到你了。`,choices:[{id:"bluff",label:"拿出普通上班族的口氣應對。",hint:"魅力檢定 DC 13",apply:t=>St(t,"charisma",13,"應付警方臨檢").ok?(ae(t,-2,"你順利通過臨檢"),$e(`警察看了一眼你的證件，揮手放行。

「早點回家。」他說。

你點頭。這座城市裡，還有人以為你有家。`)):(ae(t,7,"你的證件被標記"),mt(`機器響了一聲。

警察抬頭看你。「先生，跟我們來一下。」

你退後一步，鑽進巷子。`))},{id:"sneak",label:"繞路。走後巷。",hint:"敏捷檢定 DC 12",apply:t=>St(t,"dexterity",12,"避開臨檢").ok?(ae(t,-1),$e(`你翻過一道矮牆，從洗衣店後門穿出去。

封鎖線被你甩在身後。`)):(ae(t,4,"你被發現繞路"),sn(t,1,"你從牆上摔下來"),mt(`你落地時踩到鐵皮。

兩束手電筒同時照過來。你拼命跑，身後的哨聲越來越遠。`))},{id:"erase",label:"用顯現讓機器讀不到你。",hint:"顯現／警戒指數 -5",apply:t=>(Zt(t),ae(t,-5,"你幹擾了臨檢設備"),Le(`機器螢幕閃了一下，顯示「讀取錯誤」。

警察拍了拍機器，皺眉。「又壞了。」

他讓你過去了。`))}]},{id:"r_bond_danger",at:0,random:!0,chapter:"插曲",title:"被盯上的人",condition:t=>t.player.surveillance>=9&&t.bonds.some(e=>e.alive),scene:"alley",text:t=>`你收到一張照片。

${t.bonds.filter(n=>n.alive).sort((n,i)=>i.level-n.level)[0].name}站在平常會出現的地方，身後有一輛黑色廂型車。

照片下面只有一行字：

「協議期間，請保持距離。
下一次，不會只是照片。」

裏八咫。

他們在提醒你，羈絆不是弱點，是抵押品。`,choices:t=>[{id:"protect",label:"立刻去見他／她，把監視引開。",hint:"警戒指數 +8／監視 -6／羈絆 +1",apply:e=>{const n=e.bonds.filter(i=>i.alive).sort((i,a)=>a.level-i.level)[0];return sr(e,n.id,1),ae(e,8,"你把裏八咫的注意力引回自己身上"),e.player.surveillance=Math.max(0,e.player.surveillance-6),rt(`你故意走進便利商店的監視範圍，對著鏡頭比了一個手勢。

${n.name}看見你，愣了一下。

「你怎麼——」

「不要跟我說話。」你說。「假裝不認識我。」

你轉身離開。裏八咫的車跟上來了。`)}},{id:"cut",label:"刪掉所有聯絡方式。現在。",hint:"羈絆 -2／侵蝕 +6／監視 -4",apply:e=>{e.player.surveillance=Math.max(0,e.player.surveillance-4);const n=e.bonds.filter(i=>i.alive).sort((i,a)=>a.level-i.level)[0];return sr(e,n.id,-2),ke(e,6,"你親手刪掉最後幾條線"),mt(`你把通訊錄一個一個刪掉。

刪到最後一個名字時，手指停了很久。

最後你還是按了下去。

世界變得很安靜。`)}},{id:"bait",label:"把裏八咫的車引向別的超越者。",hint:"智力檢定 DC 14／成功監視大降",apply:e=>St(e,"intelligence",14,"誤導裏八咫的監視小組").ok?(e.player.surveillance=Math.max(0,e.player.surveillance-8),ae(e,2,"你把監視小組引向別處"),$e(`你讓裏八咫的車跟著一輛錯誤的計程車開了三個街區。

照片不會再來了。至少今晚不會。`)):(ae(e,5,"裏八咫識破你的誤導"),mt(`黑色廂型車在路口停下。

車窗降下一半，有人朝你點了點頭。

他們知道你在做什麼。`))}]},{id:"r_collapse",at:0,random:!0,chapter:"插曲",title:"你在哪裡",condition:t=>t.player.encroachment>=70,scene:"alley",text:`你醒來時，發現自己站在一座天橋上。

不記得怎麼走上來的。

橋下的車流像發光的河。你的手扶著欄杆，欄杆正在融化。

手機有七通未接來電。全部來自同一個號碼。

終端顯示：侵蝕率持續上升。

耳邊有人說：「跳下去就不痛了。」

那聲音很像你自己。`,choices:[{id:"hold",label:"抓緊欄杆，數到一百。",hint:"意志檢定 DC 16",apply:t=>St(t,"constitution",16,"抵抗侵蝕的低語",bi(t,"limit")?2:0).ok?(ke(t,-5,"你把自己拉回天橋上"),$e(`你數到八十七時，欄杆恢復了。

你跌坐在人行道上，嘔吐。

但你在這裡。`)):(ke(t,6,"你差一點放手"),t.player.collapse+=1,mt(`你回過神時，自己已經翻過欄杆。

一隻手抓住你的外套。

是個不認識的上班族。「你還好嗎？」

你點頭。你不好。`))},{id:"call",label:"打給羈絆者。",hint:"侵蝕 -12",apply:t=>{const e=t.bonds.filter(i=>i.alive).sort((i,a)=>a.level-i.level)[0];if(!e)return mt(`通訊錄是空的。

你把手機放回口袋，自己走下天橋。`);const n=fr(t,e.id);return $e(n+`

「你在哪裡？」她問。

「天橋。」你說。「現在沒事了。」`)}},{id:"jump",label:"鬆手。",hint:"侵蝕 +15／肉體 -4",apply:t=>(ke(t,15,"你向侵蝕讓步"),sn(t,4,"你從天橋墜落"),rt(`你沒有死。

顯現在落地前一刻接管了身體。

你躺在破碎的柏油路面上，聽見自己的骨頭重新排列。

路人尖叫。你站起來，走了。`))}]},{id:"r_blackmarket",at:0,random:!0,chapter:"插曲",title:"黑市",scene:"docks",text:`碼頭邊的冷凍倉庫裡，有人在賣東西。

不是藥，不是槍。是「刻印」。

一個戴著防毒面具的男人坐在冰櫃上，面前擺著十幾個終端。

「你要買，還是要賣？」

「我這裡有裏八咫的醫療紀錄、偽造通行證，還有——」他敲了敲其中一個終端，「上一個客人的運氣。」`,choices:[{id:"buy_med",label:"用刻印換醫療補給。",hint:"刻印 -3／肉體全滿",requires:t=>t.player.marks>=3,apply:t=>(t.player.marks-=3,xa(t,99,"黑市醫療補給"),Ue(t,"action","黑市交易：刻印 -3。"),$e(`他把一組沒有標籤的點滴掛在鐵架上。

「十分鐘。」他說。「你會覺得自己重新出生一次。」

他沒有說謊。`))},{id:"buy_id",label:"用刻印換偽造通行證。",hint:"刻印 -4／解鎖逃亡路線",requires:t=>t.player.marks>=4,apply:t=>(t.player.marks-=4,t.player.flags.exit_route=!0,ae(t,-5,"你取得偽造通行證"),$e(`通行證上的照片是別人的，名字也是。

但條碼是真的。

「往北。」男人說。「別回頭。」`))},{id:"buy_armor",label:"用刻印換結晶外殼。",hint:"刻印 -6／AC 基礎 14／敏捷上限 +1",requires:t=>t.player.marks>=6,apply:t=>(t.player.marks-=6,Uu(t,"crystal","你買下死者的結晶外殼"),Le(`外殼貼上胸口時，你聽見一個不屬於自己的呼吸聲。

「上一個客人留下的。」男人說。「他很安靜。」`))},{id:"rob",label:"搶走他的貨。",hint:"敏捷檢定 DC 15／風險",apply:t=>St(t,"dexterity",15,"搶劫黑市商人").ok?(t.player.flags.exit_route=!0,xa(t,4,"黑市補給"),ae(t,6,"黑市發生搶案"),rt(`你抓起兩組補給和通行證就跑。

身後傳來防毒面具下的笑聲。

「你會後悔的。」`)):(sn(t,3,"黑市的保鑣圍住你"),ae(t,4,"黑市發生衝突"),mt(`冰櫃後面走出三個人。

你打倒了兩個，第三個在你背上留下了一道電擊燒傷。`))},{id:"leave",label:"不交易，離開。",hint:"情報 +1",apply:t=>(ht(t,1,"你記住了黑市的位置"),Le(`你退出去，記下冷凍倉庫的編號。

以後也許用得上。`))}]},{id:"r_supply",at:0,random:!0,chapter:"插曲",title:"補給空投",scene:"docks",text:`天空傳來無人機的低鳴。

一個灰色箱子落在你面前，上面的編號被刻意刮花。

打開後，裡面不是補給，而是一張紙條：

「我們知道你在哪裡。
我們知道你殺了誰。
我們只是還不想回收你。
——裏八咫」

紙條下面壓著一支鎮靜劑和一枚刻印晶片。`,choices:[{id:"take",label:"拿走補給。",hint:"刻印 +3／警戒指數 +3",apply:t=>(It(t,3,"你收下裏八咫的刻印晶片"),ae(t,3,"你被裏八咫標記為配合對象"),Le(`晶片插進終端，刻印 +3。

鎮靜劑你沒有用。你不想欠他們更多。`))},{id:"destroy",label:"踩碎晶片，留下鎮靜劑。",hint:"警戒指數 -3／侵蝕 -4",apply:t=>(ae(t,-3,"你拒絕了裏八咫的施捨"),ke(t,-4,"你告訴自己還能選"),$e(`你把晶片踩碎。

碎片在雨裡閃了一下，像一顆很小的星星。

鎮靜劑你留下了。以備不時之需。`))},{id:"trace",label:"追蹤無人機的來源。",hint:"感知檢定 DC 14／情報 +2",apply:t=>St(t,"wisdom",14,"追蹤裏八咫無人機").ok?(ht(t,2,"你找到裏八咫的臨時指揮點"),ae(t,2,"你靠近了裏八咫的指揮點"),$e(`無人機往港區飛。

你跟著它，找到一棟沒有招牌的倉庫。

門口停著三輛黑色廂型車。`)):(ae(t,4,"你追丟了無人機"),mt(`無人機升高，消失在雲層裡。

你站在空蕩的碼頭上，手裡只剩一張紙條。`))}]}];function Tb(t){return!t.manifestOffers||t.manifestOffers.length===0?[{id:"manifest_hold",label:"壓抑這次分裂。",hint:"不取得新顯現／侵蝕 -3",apply:e=>(ke(e,-3,"你壓抑了顯現的增生"),Le(`你把它壓回骨頭裡。

它沒有消失，只是暫時安靜了。`))}]:t.manifestOffers.map(e=>{const n=_a.get(e);return n?{id:`pick_${e}`,label:`${n.name}／${n.type}`,hint:`${n.passive} ${n.active}`,apply:i=>(i.player.manifested.push(e),i.manifestOffers=[],Ue(i,"story",`顯現增生：「${n.name}」。${n.passive}`),$e(`新的顯現沿著舊的傷口長出來。

你獲得了「${n.name}」。

${n.tagline}

它會留下來，直到你不再是現在的你。`))}:{id:`pick_${e}`,label:e,hint:"未知顯現",apply:i=>Le("什麼都沒有發生。")}})}function go(t,e,n,i){return{id:t,at:0,chapter:"顯現",title:n,scene:"alley",condition:a=>a.player.encroachment>=e&&!a.eventsDone.includes(t),text:i,choices:a=>Tb(a)}}const Ab=[go("manifest_35",35,"第一次分裂",`侵蝕率突破 35%。

你在洗手台的鏡子裡看見自己的眼睛多了一層顏色。

不是血絲，是某種更深的東西，正在瞳孔後面重新排列。

終端彈出一行字：

「顯現增生檢測。請選擇要讓哪一部分留下。」

三個名字浮現在腦中。它們都像你，又都不完全是你。`),go("manifest_60",60,"第二次分裂",`侵蝕率突破 60%。

你的影子開始比動作慢半拍。

有時它會自己停下來，看著你。

終端沒有發出警告。它只是列出三個新的顯現名稱，像餐廳的菜單。

你聞到鐵鏽味。不確定是城市的，還是你的。`),go("manifest_85",85,"第三次分裂",`侵蝕率突破 85%。

你已經記不清自己原本有幾隻手。

鏡子裡的倒影不再同步。它在你抬手之前先抬了手，在你眨眼之後才眨眼。

終端亮起第三次選擇：

「個體邊界不穩定。建議：讓某一部份變得更強。」

這一次，你沒有拒絕的力氣。`)],_l=[jv,eb,tb,nb,ib,ab,rb,sb,ob,lb,cb,db,ub,hb,fb,pb,mb,gb,_b,vb,Mb,bb,xb,yb,Sb,Eb,...Ab];ms.push({id:"r_skirmish",at:0,random:!0,chapter:"插曲",title:"不屬於你的戰鬥",scene:"street",text:"街角的自動販賣機被撞翻。兩個超越者正在雨裡互相撕扯，路過的人全都低下頭。其中一個看見你，咧嘴笑了。「喂。要加入嗎？」另一個人的血已經流到你的鞋尖。",choices:[{id:"join",label:"加入戰鬥。",hint:"進入戰鬥／可獲得刻印",apply:t=>(yi(t,"kurokawa"),Le("你踏進水窪。「現在，」你說，「輪到我了。」"))},{id:"evade",label:"避開這場戰鬥。",hint:"敏捷檢定 DC 14／失敗會受傷",apply:t=>St(t,"dexterity",14,"在混戰中穿過街角").ok?(ae(t,-2,"你沒有留下痕跡"),$e("你貼著牆走過去。身後的碰撞聲很遠，像另一個城市的事。")):(sn(t,1,"你被飛來的碎玻璃劃傷"),mt("你退得太慢。一塊碎玻璃擦過你的臉，血混進雨裡。"))},{id:"watch",label:"站在暗處看完。",hint:"情報 +1／警戒 +2",apply:t=>(ht(t,1,"你記下了兩個超越者的戰鬥方式"),ae(t,2,"你停留在現場"),Le("你沒有出手。你看見其中一個人怎麼倒下，也看見另一個人怎麼補上最後一腳。這些都會有用。"))}]});const fd=[{name:"邁卡",codename:"剪接室的亡靈",faction:"無所屬"},{name:"安古爾",codename:"玻色子同調者",faction:"財團 Z"},{name:"悟空·孫",codename:"第七號神造實驗體",faction:"財團 Z"},{name:"費維斯",codename:"爆破藝術家",faction:"財團 Z"},{name:"安德魯神父",codename:"第七代行者",faction:"異端審判庭"},{name:"陳大文",codename:"無名的拾荒者",faction:"無所屬"},{name:"吳謙",codename:"蒼白的金屬聖徒",faction:"財團 Z"},{name:"白鳥理世",codename:"偽神歌姬",faction:"黑市同盟"},{name:"綾瀬凍",codename:"冰棺聖母",faction:"至高智人學院"},{name:"黑川巌",codename:"鐵血縛鎖",faction:"裏八咫"}],pd=["雨塚站前","第七碼頭","舊地鐵月台","黑市拍賣場","至高智人學院後門","財團 Z 實驗樓","異端審判庭地下堂","熄燈商店街","焚毀公寓","城郊淨水廠"],md=[{title:"被追殺的貨車",action:"攔下貨車",stat:"strength",text:"一輛沒有車牌的貨車撞進路邊，後車廂傳來敲擊聲。",success:"你撬開車門，裡面不是貨物，而是被綁住的人。",failure:"車廂裡的人比你還快，先一步把刀送進你的肩膀。"},{title:"沒有出口的電車",action:"進入車廂",stat:"wisdom",text:"末班電車停在不存在於路線圖的月台，車門卻自己打開。",success:"你記下車廂裡的每一張臉，這些臉不屬於活人。",failure:"車門在你身後合上，玻璃另一側的人開始微笑。"},{title:"失火的公寓",action:"衝進火場",stat:"constitution",text:"公寓三樓起火，窗口有一個孩子在拍玻璃。",success:"你把人抱出來，代價是肺裡留下一層灰。",failure:"天花板在你頭頂塌下，火焰替你記住這次失敗。"},{title:"黑市拍賣",action:"混入拍賣",stat:"charisma",text:"拍賣師舉起一個裝著超越者器官的玻璃罐。",success:"你買到一個不該存在的名字，以及它的主人。",failure:"你的代號被拍賣師念出來，全場同時回頭。"},{title:"失蹤的兒童",action:"追查線索",stat:"intelligence",text:"牆上貼滿同一個孩子的尋人啟事，日期卻都是明天。",success:"你找到印刷廠，也找到印出這些紙張的人。",failure:"你走進印刷廠，發現尋人啟事上的人是你。"},{title:"終端拍賣",action:"搶走終端",stat:"dexterity",text:"桌上排著十幾個黑色終端，每一個都還亮著別人的名字。",success:"你拿走其中一個，裡面有一段不屬於你的倒數。",failure:"終端在你手裡爆炸，碎片替你留下新的代號。"},{title:"被標記的平民",action:"保護平民",stat:"constitution",text:"一個普通人被畫上超越者的刻印，正在被獵人追趕。",success:"你把他藏起來。他問你為什麼，你答不出來。",failure:"獵人先找到你們，子彈擦過你的肋骨。"},{title:"偽造的通緝令",action:"撕下通緝令",stat:"intelligence",text:"車站柱子上貼著你的通緝令，照片卻不是你的臉。",success:"你找到偽造者，對方說有人希望你先死。",failure:"監視器拍下你撕紙的手，裏八咫收到通知。"},{title:"無主的刻印",action:"接收刻印",stat:"constitution",text:"地鐵座椅上留著一枚還在發熱的刻印，周圍沒有人。",success:"你把它收進口袋，卻聽見有人在耳邊說謝謝。",failure:"刻印燙穿你的掌心，留下一個不屬於你的編號。"},{title:"不該存在的實驗",action:"打開實驗艙",stat:"strength",text:"實驗艙裡的人有你的臉，醒來第一句話是「你遲到了」。",success:"你記下艙門上的編號，財團 Z 的秘密又多了一頁。",failure:"複製體比你更熟悉這具身體，先一步掐住你的喉嚨。"}],gd=["其中一個人其實是同類。","現場有神田隼人留下的監視器。","貨物裡裝的是活人。","其中一個人是你的羈絆者。","終端從頭到尾都在說謊。","裏八咫的黑服已經在場。","財團 Z 正在和某人交易。","目標是另一個人的複製體。","城市將在十分鐘後封鎖。","時間只剩十分鐘。"];if(ms.length<10037)for(let t=0;t<fd.length;t++)for(let e=0;e<md.length;e++)for(let n=0;n<pd.length;n++)for(let i=0;i<gd.length;i++){const a=fd[t],r=md[e],s=pd[n],o=gd[i],l=`proc_${t}_${e}_${n}_${i}`;ms.push({id:l,at:0,random:!0,chapter:"異常插曲",title:`${r.title}・${a.codename}・${s}・${["同類","監視","活人","羈絆","謊言","黑服","交易","複製","封鎖","十分鐘"][i]}`,scene:["street","alley","docks"][(t+e+i)%3],text:`${s}。${r.text}

${a.codename}（${a.faction}）站在雨裡，沒有撐傘。

${o}

你的終端沒有跳出警告，只顯示一個很短的倒數。`,choices:[{id:"intervene",label:r.action,hint:`${Kn[r.stat]}檢定 DC 13`,apply:c=>St(c,r.stat,13,`${r.title}：${r.action}`).ok?(ht(c,1,`你處理了${r.title}`),ae(c,2,`${s}留下你的痕跡`),$e(`${r.success}

${a.codename}看了你一眼，像在確認你值不值得記住。`)):(sn(c,1,`${r.title}的反擊`),ae(c,3,`${s}的騷動`),mt(`${r.failure}

你退進雨裡，${a.codename}沒有追上來。`))},{id:"negotiate",label:"試著和對方談條件。",hint:"魅力檢定 DC 14／成功可降低警戒",apply:c=>St(c,"charisma",14,`與${a.codename}交涉`).ok?(ht(c,1,`${a.codename}透露了一部分內幕`),ae(c,-1,"你沒有把事情鬧大"),$e(`「你比我想像中聰明。」${a.codename}說。

你們交換了一個不完整的名字，各自保留最致命的那一半。`)):(ae(c,4,"交涉破裂"),mt(`「代號不是拿來交朋友的。」${a.codename}說完，轉身走進${s}的雨裡。`))},{id:"leave",label:"不介入，離開現場。",hint:"警戒 -1／情報不變",apply:c=>(ae(c,-1,"你避開了異常插曲"),Le(`你沒有回頭。

${s}的燈在身後一盞一盞熄滅，${a.codename}的名字被你留在雨裡。`))}]})}const $u=ms,Ol=new Map([..._l,...$u].map(t=>[t.id,t]));function zu(t,e){t.phase!=="play"||t.pending||(t.stance=e)}function wb(t,e){t.phase==="play"&&t.bonds.some(n=>n.id===e&&n.alive)&&(t.contactTarget=e,t.stance="contact")}function vl(t,e){[0,1,2,4,8].includes(e)&&(t.speed=e)}function Rb(t){for(const e of _l)if(!(e.random||t.eventsDone.includes(e.id))&&e.at===t.hour&&(!e.condition||e.condition(t)))return e;for(const e of _l)if(!(e.random||t.eventsDone.includes(e.id))&&e.at<t.hour&&e.condition&&e.condition(t))return e;return null}function Cb(t){const e=$u.filter(n=>!t.eventsDone.includes(n.id)&&(!n.condition||n.condition(t)));return e.length?e[Xt(t,0,e.length-1)]:null}function Bl(t){if(t.phase!=="play"||t.pending||t.battle||t.ending)return;if(t.hour>=Ru){_o(t,Ol.get("closing"));return}t.hour+=1,Lb(t);const e=Rb(t);if(e){_o(t,e),vo(t);return}if(t.hour>=t.randomNextHour){const n=Cb(t);if(n){_o(t,n),t.randomNextHour=t.hour+Xt(t,5,9),vo(t);return}t.randomNextHour=t.hour+3}Db(t),vo(t)}function Lb(t){for(const e of t.rivals)e.status==="active"&&(e.marks=Math.round((e.marks+e.rate)*10)/10)}function _o(t,e){if(t.pending={id:e.id},e.id.startsWith("manifest_")&&(!t.manifestOffers||t.manifestOffers.length===0)&&Cv(t),e.id==="tetsu_dead"){const n=t.rivals.find(i=>i.id==="tetsu");n&&(n.status="dead",n.note="死在第七號碼頭。刻印被裏八咫回收。")}if(e.id==="kurokawa_arrested"){const n=t.rivals.find(i=>i.id==="kurokawa");n&&(n.status="arrested",n.note="被神田隼人逮捕。刻印全數回收。")}if(e.id==="kurokawa_massacre"){const n=t.rivals.find(i=>i.id==="kurokawa");n&&t.player.flags.kurokawa_defeated&&(n.status="dead",n.note="倒在常夜中央通。至死都在笑。")}if(e.id==="ayase_proposal"){const n=t.rivals.find(i=>i.id==="ayase");n&&t.player.flags.ayase_dead&&(n.status="dead")}}function vo(t){if(t.phase==="play"&&(t.player.encroachment>=100&&Pb(t),t.phase==="play")){if(t.hour>=48&&(!t.player.wanted&&t.player.heat>=70&&(t.player.wanted=!0,t.player.wantedAt=t.hour,Ue(t,"danger","神田隼人已將你列為指名手配。包圍網開始收縮。")),t.player.wanted&&t.player.heat<35&&(t.player.wanted=!1,Ue(t,"system","警戒指數降到閾值以下。神田暫時撤回對你的直接追捕。"))),t.hour===24||t.hour===48||t.hour===60){const e=ii(t);Ue(t,"rival",`排名更新：第 ${e.rank}／${e.total}。領先者 ${e.list[0].name}（${Math.floor(e.list[0].marks)} 刻印）。`)}Ib(t)}}function Pb(t){const e=15+Math.floor((t.player.encroachment-100)/5);St(t,"constitution",e,"抵抗侵蝕失控",_i(t).has("constitution")?2:0).ok?Ue(t,"bond","你把那個聲音壓回去了。至少這一小時。"):(t.player.collapse+=1,Ue(t,"danger",`失控 ${t.player.collapse}/3。你的身體做了你不記得的事。`),t.player.collapse>=3&&nn(t,"monster"))}function Ib(t){t.player.heat>=70&&!t.player.flags.warn70&&(t.player.flags.warn70=!0,Ue(t,"danger",t.hour>=48?"警戒指數 70：神田的檔案上出現了你的代號。":"警戒指數 70：你的代號開始在參賽者之間流傳。")),t.player.heat>=90&&!t.player.flags.warn90&&(t.player.flags.warn90=!0,Ue(t,"danger","警戒指數 90：裏八咫已將你標記為優先回收對象。")),t.player.encroachment>=100&&!t.player.flags.warn100&&(t.player.flags.warn100=!0,Ue(t,"danger","侵蝕率 100%：每一小時，你都要重新說服自己還是人。"))}const _d=["城市沒有因為你的倒數而停下來。上班族撐著傘走過，沒有人抬頭。","便利商店的自動門反覆開合。店員在補貨，電視在播天氣。","遠處有警笛，但沒有往這個方向來。暫時。","雨水把牆上的塗鴉沖成一片模糊的紅。","一隻烏鴉停在電線上，歪著頭看你，像在看一份不太有趣的報告。","你經過一面玻璃，發現自己已經習慣不去看倒影。","車站廣播念著陌生的站名。每一班車都通往這座城市的其他角落。","清潔隊正在沖洗昨晚的血跡。水混著泡沫流進排水溝。","有人在騎樓下賣傘。他一個晚上沒賣出幾把，因為雨已經下得太久。","早餐店的鐵門拉開一半，蒸氣湧出來，帶著醬油和豆漿的味道。","一台提款機吐出一張收據，被風吹到你腳邊。上面的餘額不夠住一晚旅館。","兩個高中生蹲在便利商店門口分一碗關東煮。他們說話的聲音很小，笑聲很大。","你數了三個路口、四個監視器，沒有一個對著你。這讓你更不安。","醫院的急診燈亮著。門口有人抽菸，抽到一半就哭了，然後又點了一根。","計程車司機把窗搖下來問你要不要搭車。你說不用。他把窗搖回去，沒有多問。","天橋下有人在睡覺，被子是拆開的紙箱。他的呼吸很穩。"];function Db(t){const e=zi(t);switch(t.stance){case"lie_low":{ae(t,t.player.flags?.streetwise?-4:-3,"你避開主要街道"),t.hour%2===0&&xa(t,t.player.flags?.field_medicine?2:1,"你在廢棄網咖睡了兩小時"),Ue(t,"action",`你躲進${e.tag.split("・")[1]??"城市"}的陰影裡。終端上的警戒指數慢慢下降。`);break}case"hunt_normal":{It(t,1,"你處理了一個落單的普通人"),ae(t,5,"屍體被發現"),t.player.killsNormal+=1,t.player.encroachment>=100&&(It(t,2,"你回過神時，現場已經沒有活人"),ae(t,5,"失控殺戮留下大量痕跡"),ke(t,2)),Ue(t,"action","你沒有用顯現。只是刀，和一個來不及喊出聲的人。");break}case"power_hunt":{const n=Zt(t),i=t.player.abilityId==="ash"||(t.player.manifested??[]).includes("ash")?3:2;It(t,i,"顯現獵殺完成"),ae(t,7,"顯現的殘留痕跡"),t.player.killsNormal+=1,Ue(t,"action",`「${e.name}」的某一條街安靜了。刻印 +${i}，侵蝕 +${n}。`);break}case"hunt_overman":{const n=Zt(t),i=13+Math.floor(t.hour/30),a=St(t,As(t),i,"狩獵落單超越者",hr(t));if(a.ok){const r=a.nat20?15:10;It(t,r,a.nat20?"你壓倒性擊殺了一名超越者":"你殺死了一名超越者"),ae(t,4,"超越者屍體被發現"),t.player.killsOverman+=1,Ue(t,"action","對方的顯現在你身上留下灼痕。你拿走他的刻印，也拿走他的終端。")}else ku(t,5+Math.floor(t.hour/20),2,"超越者的反擊"),ae(t,4,"戰鬥留下血跡"),Ue(t,"danger","對方比你更快。你逃走了，但傷口還在流血。");Ue(t,"system",`這次狩獵消耗了 ${n} 點侵蝕。`);break}case"investigate":{const n=11+(t.player.heat>=50?2:0);St(t,"wisdom",n,"調查城市異象").ok?(ht(t,1,"你拼湊出一條線索"),ae(t,1,"你出現在不該出現的地方"),Ue(t,"action","你找到了另一名超越者的移動路線，還有一張被撕掉一半的裏八咫地圖。")):(ae(t,2,"你問了太多問題"),Ue(t,"action","你花了一整個小時，只確認了一件事：有人比你更早來過。"));break}case"contact":{let n=t.contactTarget;if(n||(n=t.bonds.filter(i=>i.alive).sort((i,a)=>a.level-i.level)[0]?.id??null),n){const i=fr(t,n);Ue(t,"action",i)}else Ue(t,"danger","你打開通訊錄，發現沒有任何一個號碼還能撥通。");break}case"destroy":{const n=Zt(t,6),i=t.player.abilityId==="ash"||(t.player.manifested??[]).includes("ash")?3:2;It(t,i,"城市破壞被折算為刻印"),ae(t,9,"大規模破壞"),Ue(t,"action",`你讓一棟無人建築倒下。裏八咫把混亂記成 ${i} 枚刻印。侵蝕 +${n}。`);break}}t.hour%3===0&&Ue(t,"story",_d[(t.hour/3+t.cityId.length)%_d.length].replace("城市",e.name))}function Nb(t,e,n){if(t.phase!=="play"||!t.pending||t.pending.id!==e||t.pending.result)return;const i=Ol.get(e);if(!i)return;const a=Ou(i,t).find(s=>s.id===n);if(!a||a.requires&&!a.requires(t))return;t.lastRoll=null;const r=a.apply(t);if(t.eventsDone.push(e),t.battle){t.pending=null;return}t.ending||(t.pending={id:e,result:Kv(e,n,r.text),resultTone:r.tone,title:i.title})}function Ub(t){t.pending?.result&&(t.pending=null)}function $l(t){if(!t.pending||t.battle)return null;const e=Ol.get(t.pending.id);if(!e)return null;const n=Ou(e,t).map(i=>({id:i.id,label:i.label,hint:i.hint,disabled:!!i.requires&&!i.requires(t)}));return{id:e.id,chapter:e.chapter,title:e.title,speaker:e.speaker,portrait:e.portrait,scene:e.scene,text:Jv(e,t),choices:n,result:t.pending.result,resultTone:t.pending.resultTone}}function ya(t){const e=Math.floor(t/24)+1,n=t%24,i=`${String(n).padStart(2,"0")}:00`;return{day:e,time:i,full:`第 ${e} 天 ${i}`}}function Qe(t){try{if(typeof localStorage>"u")return;localStorage.setItem("overman-erosion-city.save.v1",JSON.stringify(t))}catch{}}function zl(){var t,e,n,i,a,r,s,o,l,c,d,f,u,p,v,x,g,h,T,P,y,M,E,R,m,S,C;try{if(typeof localStorage>"u")return null;const I=localStorage.getItem("overman-erosion-city.save.v1");if(!I)return null;const w=JSON.parse(I);if(!w||w.version!==1||!w.phase||w.phase==="play"&&!w.player)return null;if(w.creation&&((t=w.creation).mainStat??(t.mainStat=null),(e=w.creation).coreEpithet??(e.coreEpithet="未登錄的迴路"),(n=w.creation).abilityChoices??(n.abilityChoices=[]),w.creation.step==="questions"&&(!w.creation.questionIds||w.creation.questionIds.length===0)&&(w.creation.questionIds=Au(()=>Math.random())),(i=w.creation).questionIds??(i.questionIds=[])),w.player){(a=w.player).manifested??(a.manifested=[]),(r=w.player).armorId??(r.armorId="jacket"),(s=w.player).coreEpithet??(s.coreEpithet="未登錄的迴路");const O={body:"strength",reflex:"dexterity",intellect:"intelligence",will:"constitution",perception:"wisdom",charm:"charisma",strength:"strength",dexterity:"dexterity",constitution:"constitution",intelligence:"intelligence",wisdom:"wisdom",charisma:"charisma"},U=V=>{const ne={strength:0,dexterity:0,constitution:0,intelligence:0,wisdom:0,charisma:0};for(const[X,Q]of Object.entries(V??{})){const te=O[X];te&&(ne[te]=Number(Q)||0)}return ne};w.player.stats=U(w.player.stats),(o=w.player).skills??(o.skills=[]),(l=w.player).codenameEn||(l.codenameEn=rr(w)),(c=w.player).gender??(c.gender="unspecified"),(d=w.player).avatar??(d.avatar=null),(f=w.player).ultimateId??(f.ultimateId="edge"),w.creation&&((u=w.creation).codenameEn||(u.codenameEn=rr(w)),(p=w.creation).gender??(p.gender="unspecified"),(v=w.creation).avatar??(v.avatar=null),(x=w.creation).ultimateId??(x.ultimateId="edge"),(g=w.creation).ultimateChoices??(g.ultimateChoices=[])),w.creation&&(w.creation.stats=U(w.creation.stats));const $=String(w.player.mainStat??"strength");w.player.mainStat=O[$]??"strength";const Y=String(w.creation?.mainStat??"");w.creation&&(w.creation.mainStat=Y?O[Y]??null:null),(h=w.player).mainStat??(h.mainStat=Object.keys(w.player.stats).sort((V,ne)=>w.player.stats[ne]-w.player.stats[V])[0]),(T=w.player).flags??(T.flags={})}if(w.manifestOffers??(w.manifestOffers=[]),w.battle??(w.battle=null),w.endingCombo??(w.endingCombo=null),w.battle){(P=w.battle).introSeen??(P.introSeen=!0),(y=w.battle).allies??(y.allies=[]),(M=w.battle).civilians??(M.civilians=[]),(E=w.battle).maxRounds??(E.maxRounds=null),(R=w.battle).finalBattle??(R.finalBattle=!1),(m=w.battle).ultimateUsed??(m.ultimateUsed=!1),(S=w.battle).shield??(S.shield=0),(C=w.battle).selectedSkill??(C.selectedSkill=null);for(const O of w.battle.enemies??[])O.skills??(O.skills=[]),O.strength??(O.strength=O.attack),O.dexterity??(O.dexterity=O.attack)}return w.battle&&!Array.isArray(w.battle.enemies)&&(w.battle=null),w}catch{return null}}function Hl(){try{typeof localStorage<"u"&&localStorage.removeItem("overman-erosion-city.save.v1")}catch{}}function kb(t){const e=t.endingCombo?yu[t.endingCombo]:null;return e?{title:e.title,subtitle:e.subtitle,stamp:e.stamp,text:t.endingText??pl[t.ending??"nameless"].text,tone:e.tone}:pl[t.ending??"nameless"]}const vd=["雨宮","黑川","綾瀬","白鳥","神田","久我","三浦","末永","小宮","橋本"],Fb=["澪","巌","凍","理世","隼人","千歲","湊","燈","朔","雪"],bd=["裏八咫","財團 Z","至高智人學院","異端審判庭","無所屬","第七區自治會","黑市同盟","海岸自衛隊","代行者","流浪者"],xd=["執行官","研究者","賞金獵人","情報販子","護衛","醫療兵","記者","學生","黑市商人","逃亡者"],yd=["肉體強化","結晶操縱","記憶篡改","電磁加速","影子搬運","體溫掠奪","聲音暗示","金屬操作","創傷共鳴","空間折疊"],Sd=["INTJ","INTP","ENTJ","ENTP","INFJ","INFP","ENFJ","ENFP","ISTJ","ISFJ","ESTJ","ESFJ","ISTP","ISFP","ESTP","ESFP"],Md=["雨中的刀","沒有影子的人","玻璃聖母","舞臺女王","最強現代智人","第七區的幽靈","黑色迴路","不會說話的證人","編號 13","灰燼收藏家"],Ed=["記得所有見過的面孔，卻不記得自己的生日。","把每一次交易都寫在一本沒有頁碼的筆記本上。","相信裏八咫最終會留下一個位置給自己。","從財團 Z 的實驗室逃出來，身上還有編號。","不擅長說謊，所以選擇不說話。","把殺人當成一種需要準時完成的工作。","在找一個已經被回收的家人。","對神田隼人抱持近乎宗教的敬意。","擁有一把不屬於這個時代的鑰匙。","每天都會去同一家便利店買同一種飯糰。"],Hu=["神田隼人","黑川巌","綾瀬凍","白鳥理世","王冠"],Ob=["最強現代智人","絞肉機","玻璃聖母","舞臺女王","侵蝕王冠"],Td=["岳","冰","玲","迅","煌"];function Bb(t){const e=`${vd[Math.floor(t/10)]}${Fb[t%10]}`;return Hu.includes(e)?`${vd[Math.floor(t/10)]}${Td[t%Td.length]}`:e}const Gu=Array.from({length:100},(t,e)=>{const n=e<5,i=n?Hu[e]:Bb(e);return{id:`npc-${String(e+1).padStart(3,"0")}`,name:i,alias:n?Ob[e]:Md[e*3%Md.length],faction:bd[e%bd.length],role:xd[e*7%xd.length],mbti:Sd[e*11%Sd.length],ability:yd[e*5%yd.length],threat:e*7%5+1,affection:e*17%101,note:Ed[e%Ed.length],spriteSeed:`roster:${e}:${i}`,portrait:n?["kanda","kurokawa","ayase","shiratori","crown"][e]:void 0,important:n}});Gu.filter(t=>t.important);const $b=new Set(["kurokawa","ayase","crown","kanda","shiratori"]);function zb(t,e){const n=`<ellipse cx="50" cy="111" rx="31" ry="8" fill="#0b0a09" opacity=".28"/>
    <ellipse cx="50" cy="108" rx="29" ry="7" fill="#1b1714" stroke="#141210" stroke-width="2"/>
    <ellipse cx="50" cy="105" rx="22" ry="3.5" fill="#3a332d" opacity=".55"/>`,i=`<path d="M37 92 L41 104 L34 107 L28 94Z" fill="#1c1b1b" stroke="#141210" stroke-width="2.5"/>
    <path d="M63 92 L59 104 L66 107 L72 94Z" fill="#1c1b1b" stroke="#141210" stroke-width="2.5"/>`,a=` role="img" aria-label="${e.name}"`;return t==="kurokawa"?`<svg class="chibi-svg" viewBox="0 0 100 124"${a}>
      ${n}${i}
      <path d="M24 65 Q50 52 76 65 L79 94 Q50 103 21 94Z" fill="#151515" stroke="#141210" stroke-width="3"/>
      <path d="M43 60 L50 76 L57 60 Q50 56 43 60Z" fill="#3b2c25" stroke="#141210" stroke-width="2"/>
      <path d="M22 67 Q10 78 14 94 L25 94 L31 76Z" fill="#c98d68" stroke="#141210" stroke-width="3"/>
      <path d="M78 67 Q90 78 86 94 L75 94 L69 76Z" fill="#c98d68" stroke="#141210" stroke-width="3"/>
      <path d="M18 82 L30 76 M82 82 L70 76" stroke="#141210" stroke-width="2.5"/>
      <circle cx="50" cy="43" r="24" fill="#c98d68" stroke="#141210" stroke-width="3"/>
      <path d="M27 43 Q27 18 50 17 Q73 18 73 43" fill="none" stroke="#141210" stroke-width="3"/>
      <path d="M32 50 Q39 56 46 51 Q50 55 54 51 Q61 56 68 50" fill="#3a2620" opacity=".65"/>
      <path d="M35 34 L44 42 M44 32 L35 40" stroke="#9e3a32" stroke-width="2"/>
      <path d="M36 47 Q41 44 46 47" fill="none" stroke="#141210" stroke-width="2"/>
      <path d="M54 47 Q59 44 64 47" fill="none" stroke="#141210" stroke-width="2"/>
      <circle cx="41" cy="45" r="2.6" fill="#a62f2b"/><circle cx="59" cy="45" r="2.6" fill="#a62f2b"/>
      <path d="M43 57 Q50 64 57 57" fill="none" stroke="#141210" stroke-width="2.5"/>
      <path d="M37 70 L49 92 M63 70 L51 92" stroke="#8e969c" stroke-width="2"/>
      <circle cx="45" cy="81" r="3" fill="none" stroke="#8e969c" stroke-width="1.5"/>
      <circle cx="53" cy="82" r="3" fill="none" stroke="#8e969c" stroke-width="1.5"/>
      <path d="M29 72 L34 96 M71 72 L66 96" stroke="#141210" stroke-width="2" opacity=".5"/>
    </svg>`:t==="ayase"?`<svg class="chibi-svg" viewBox="0 0 100 124"${a}>
      ${n}${i}
      <path d="M33 62 Q50 52 67 62 L71 95 Q50 101 29 95Z" fill="#e8f3f5" stroke="#141210" stroke-width="3"/>
      <path d="M43 61 L50 78 L57 61Z" fill="#7fb2c9" stroke="#141210" stroke-width="2"/>
      <path d="M26 68 Q18 80 21 94 L31 94 L36 76Z" fill="#e8f3f5" stroke="#141210" stroke-width="3"/>
      <path d="M74 68 Q82 80 79 94 L69 94 L64 76Z" fill="#e8f3f5" stroke="#141210" stroke-width="3"/>
      <path d="M28 43 Q24 20 50 15 Q76 20 72 44 L69 36 Q62 28 50 28 Q38 28 31 36Z" fill="#cfe4e8" stroke="#141210" stroke-width="3"/>
      <path d="M28 40 Q18 60 24 83 L33 62Z" fill="#cfe4e8" stroke="#141210" stroke-width="3"/>
      <path d="M72 40 Q82 60 76 83 L67 62Z" fill="#cfe4e8" stroke="#141210" stroke-width="3"/>
      <circle cx="50" cy="44" r="22" fill="#f2c9a5" stroke="#141210" stroke-width="3"/>
      <circle cx="41" cy="44" r="2.8" fill="#5c8194"/><circle cx="59" cy="44" r="2.8" fill="#5c8194"/>
      <path d="M45 56 Q50 58 55 56" fill="none" stroke="#8a4b4b" stroke-width="2"/>
      <path d="M75 72 L84 62 L88 68 L78 79Z" fill="#bfe9f2" stroke="#141210" stroke-width="2"/>
    </svg>`:t==="crown"?`<svg class="chibi-svg" viewBox="0 0 100 124"${a}>
      ${n}${i}
      <path d="M30 62 Q50 50 70 62 L76 96 Q50 105 24 96Z" fill="#151318" stroke="#141210" stroke-width="3"/>
      <path d="M43 60 L50 77 L57 60Z" fill="#e8b53a" stroke="#141210" stroke-width="2"/>
      <path d="M25 67 Q15 78 18 94 L29 94 L35 77Z" fill="#151318" stroke="#141210" stroke-width="3"/>
      <path d="M75 67 Q85 78 82 94 L71 94 L65 77Z" fill="#151318" stroke="#141210" stroke-width="3"/>
      <circle cx="50" cy="43" r="23" fill="#d7b79d" stroke="#141210" stroke-width="3"/>
      <path d="M29 46 Q24 20 50 15 Q76 20 71 46 L66 33 Q58 28 50 30 Q42 28 34 33Z" fill="#2a2530" stroke="#141210" stroke-width="3"/>
      <path d="M31 25 L36 11 L44 23 L50 8 L56 23 L64 11 L69 25Z" fill="#e8b53a" stroke="#141210" stroke-width="2.5"/>
      <circle cx="41" cy="45" r="2.8" fill="#a62f2b"/><circle cx="59" cy="45" r="2.8" fill="#a62f2b"/>
      <path d="M43 57 Q50 63 57 57" fill="none" stroke="#141210" stroke-width="2.5"/>
      <path d="M20 76 L10 66 L17 60 L26 71 M80 76 L90 66 L83 60 L74 71" fill="#7a2f57" stroke="#141210" stroke-width="2"/>
    </svg>`:t==="kanda"?`<svg class="chibi-svg" viewBox="0 0 100 124"${a}>
      ${n}${i}
      <path d="M31 62 Q50 52 69 62 L73 94 Q50 101 27 94Z" fill="#17191c" stroke="#141210" stroke-width="3"/>
      <path d="M44 61 L50 77 L56 61Z" fill="#e9e0cf" stroke="#141210" stroke-width="2"/>
      <path d="M25 68 Q17 80 20 94 L31 94 L36 76Z" fill="#17191c" stroke="#141210" stroke-width="3"/>
      <path d="M75 68 Q83 80 80 94 L69 94 L64 76Z" fill="#17191c" stroke="#141210" stroke-width="3"/>
      <circle cx="50" cy="43" r="23" fill="#f2c9a5" stroke="#141210" stroke-width="3"/>
      <path d="M25 44 Q20 17 50 13 Q80 17 75 44 L70 30 L61 37 L54 24 L46 37 L39 28 L32 38Z" fill="#e9e0cf" stroke="#141210" stroke-width="3"/>
      <circle cx="41" cy="44" r="2.8" fill="#a62f2b"/><circle cx="59" cy="44" r="2.8" fill="#5c8194"/>
      <path d="M44 56 Q50 58 56 56" fill="none" stroke="#8a4b4b" stroke-width="2"/>
      <path d="M22 82 L13 70 L17 65 L27 77Z M78 82 L87 70 L83 65 L73 77Z" fill="#2f3b45" stroke="#141210" stroke-width="2"/>
      <path d="M74 62 L86 108" stroke="#101014" stroke-width="4"/><path d="M72 66 L88 104" stroke="#8e969c" stroke-width="1"/>
    </svg>`:`<svg class="chibi-svg" viewBox="0 0 100 124"${a}>
    ${n}${i}
    <path d="M34 62 Q50 53 66 62 L70 94 Q50 101 30 94Z" fill="#7a1f2b" stroke="#141210" stroke-width="3"/>
    <path d="M41 60 L50 76 L59 60Z" fill="#f4e8d1" stroke="#141210" stroke-width="2"/>
    <path d="M29 67 Q21 79 24 94 L34 94 L38 76Z" fill="#7a1f2b" stroke="#141210" stroke-width="3"/>
    <path d="M71 67 Q79 79 76 94 L66 94 L62 76Z" fill="#7a1f2b" stroke="#141210" stroke-width="3"/>
    <circle cx="50" cy="43" r="23" fill="#f2c9a5" stroke="#141210" stroke-width="3"/>
    <path d="M26 43 Q23 17 50 14 Q77 17 74 44 L69 33 Q61 27 50 28 Q39 27 31 33Z" fill="#e9e0cf" stroke="#141210" stroke-width="3"/>
    <path d="M27 39 Q17 60 23 84 L33 62Z M73 39 Q83 60 77 84 L67 62Z" fill="#e9e0cf" stroke="#141210" stroke-width="3"/>
    <circle cx="41" cy="44" r="2.8" fill="#513b4a"/><circle cx="59" cy="44" r="2.8" fill="#513b4a"/>
    <path d="M43 56 Q50 61 57 56" fill="none" stroke="#a62f2b" stroke-width="2.5"/>
    <path d="M67 76 L78 62" stroke="#141210" stroke-width="2"/><circle cx="79" cy="60" r="4" fill="#e8b53a" stroke="#141210" stroke-width="1.5"/>
  </svg>`}function Hb(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}const Gb=["#f2c9a5","#e6b58d","#d79a72","#f5d5b8","#c98d68"],Vb=["#171412","#3a2620","#5b3b2b","#c9b7a2","#d9d4ca","#7a2f2f","#2e4a5a","#6b4b7a"],Wb=["#171412","#2b2521","#3b4148","#4b2b2b","#243a3d","#5c4a35","#6b1f24","#1f2d46"],Xb=["#d8382a","#e8b53a","#7fb2c9","#b7c6a0","#d9d4ca","#9e6bb0"];function Yr(t,e){return t[e%t.length]}function Qn(t,e){if(e.variant&&$b.has(e.variant))return zb(e.variant,e);const n=Hb(t),i=Yr(Gb,n),a=Yr(Vb,n>>3),r=e.role==="civilian"?"#5a5148":Yr(Wb,n>>5),s=e.accent??Yr(Xb,n>>7),o=n%6,l=(n>>11)%5,c=n%3,d=(n>>13)%2?"#e9e0cf":"#1b1714",f=e.role==="enemy"?"#d8382a":"#f4e8d1",u=o===0?`<path d="M26 46 Q22 20 50 16 Q78 20 74 48 L69 38 Q64 26 50 25 Q36 26 31 38Z" fill="${a}" stroke="#141210" stroke-width="3"/>`:o===1?`<path d="M23 48 Q18 18 48 14 Q80 16 77 50 L70 33 L64 43 L58 29 L50 41 L42 29 L36 44 L30 35Z" fill="${a}" stroke="#141210" stroke-width="3"/>`:o===2?`<path d="M28 48 Q24 18 50 15 Q76 18 72 46 Q64 32 50 31 Q36 32 28 48Z" fill="${a}" stroke="#141210" stroke-width="3"/><path d="M28 33 Q20 48 26 63 L32 42Z" fill="${a}" stroke="#141210" stroke-width="3"/><path d="M72 33 Q80 48 74 63 L68 42Z" fill="${a}" stroke="#141210" stroke-width="3"/>`:o===3?`<path d="M26 50 Q20 16 50 13 Q82 18 74 48 L70 26 L60 36 L54 24 L46 36 L40 24 L33 38Z" fill="${a}" stroke="#141210" stroke-width="3"/>`:o===4?`<path d="M25 49 Q22 20 50 16 Q79 18 75 50 L68 30 Q60 27 50 28 Q39 27 32 31Z" fill="${a}" stroke="#141210" stroke-width="3"/><path d="M66 22 Q82 14 86 26 Q76 25 70 34Z" fill="${a}" stroke="#141210" stroke-width="3"/>`:`<path d="M27 46 Q25 18 50 15 Q77 18 73 47 Q68 28 58 31 L55 20 L47 32 L40 24 L35 38Z" fill="${a}" stroke="#141210" stroke-width="3"/>`,p=l===0?`<path d="M68 48 L83 42" stroke="${s}" stroke-width="2"/><circle cx="84" cy="41" r="3" fill="${s}" stroke="#141210" stroke-width="1.5"/>`:l===1?`<path d="M30 57 Q50 66 70 57" fill="none" stroke="${s}" stroke-width="3"/>`:l===2?'<path d="M33 60 L27 92" stroke="#141210" stroke-width="2" opacity=".65"/>':l===3?`<rect x="39" y="48" width="22" height="4" fill="${s}" stroke="#141210" stroke-width="1.5"/>`:"";return`<svg class="chibi-svg" viewBox="0 0 100 124" role="img" aria-label="${e.name}">
    <ellipse cx="50" cy="111" rx="31" ry="8" fill="#0b0a09" opacity=".28"/>
    <ellipse cx="50" cy="108" rx="29" ry="7" fill="#1b1714" stroke="#141210" stroke-width="2"/>
    <ellipse cx="50" cy="105" rx="22" ry="3.5" fill="#3a332d" opacity=".55"/>
    <path d="M38 91 L41 103 L35 106 L30 94Z" fill="#1c1b1b" stroke="#141210" stroke-width="2.5"/>
    <path d="M62 91 L59 103 L65 106 L70 94Z" fill="#1c1b1b" stroke="#141210" stroke-width="2.5"/>
    <path d="M36 62 Q50 53 64 62 L68 91 Q50 98 32 91Z" fill="${r}" stroke="#141210" stroke-width="3"/>
    <path d="M44 60 L50 76 L56 60 Q50 56 44 60Z" fill="${d}" stroke="#141210" stroke-width="2"/>
    <path d="M31 66 Q22 74 24 88 L33 90 L38 73Z" fill="${r}" stroke="#141210" stroke-width="3"/>
    <path d="M69 66 Q78 74 76 88 L67 90 L62 73Z" fill="${r}" stroke="#141210" stroke-width="3"/>
    <circle cx="50" cy="43" r="23" fill="${i}" stroke="#141210" stroke-width="3"/>
    ${u}
    <ellipse cx="41" cy="44" rx="3.2" ry="4.6" fill="${c===0?"#141210":"#42576a"}"/>
    <ellipse cx="59" cy="44" rx="3.2" ry="4.6" fill="${c===2?"#8a2e36":"#141210"}"/>
    <circle cx="42" cy="42.5" r="1.1" fill="${f}"/>
    <circle cx="60" cy="42.5" r="1.1" fill="${f}"/>
    <path d="M45 55 Q50 58 55 55" fill="none" stroke="#7a3b35" stroke-width="2" stroke-linecap="round"/>
    <path d="M35 35 Q41 31 46 34" fill="none" stroke="#141210" stroke-width="1.6" opacity=".7"/>
    <path d="M54 34 Q59 31 65 35" fill="none" stroke="#141210" stroke-width="1.6" opacity=".7"/>
    ${p}
    ${e.role==="player"?`<path d="M34 78 L50 84 L66 78" fill="none" stroke="${s}" stroke-width="3"/>`:""}
    ${e.role==="civilian"?'<path d="M42 70 L50 78 L58 70" fill="none" stroke="#d9d4ca" stroke-width="2"/>':""}
  </svg>`}const qb={core_array:"CAUSAL ARRAY",core_revive:"ECHO REVIVAL",core_ward:"BOUNDARY WEAVE",core_market:"SHADOW BARGAIN",core_multi:"ARMORY PARALLEL",core_variable:"FORM REWRITE",core_combat:"TACTICAL MATRIX",core_focus:"ZERO CONDENSATION",blade:"BLADE OF CONDEMNATION",flash:"FLASH ZERO",mindeye:"MIND EYE",ash:"ASHEN DOMAIN",regen:"UNDYING REGEN",siren:"SIREN VOICE",thunder:"THUNDER FANG",memory:"MEMORY EDIT",beast:"BEAST FORM",limit:"LIMIT BREAK",shell:"HOLLOW SHELL",resonance:"RESONANCE"},Vu=[{id:"male",label:"男",en:"MALE"},{id:"female",label:"女",en:"FEMALE"},{id:"nonbinary",label:"非二元",en:"NON-BINARY"},{id:"unspecified",label:"不公開",en:"UNSPECIFIED"}],Ni=document.getElementById("app");document.getElementById("fx");const Wu="overman-erosion-city.settings.v1",Yb="./";function Zb(){try{const t=localStorage.getItem(Wu);if(t)return{muted:!1,reduceMotion:!1,bgm:"auto",...JSON.parse(t)}}catch{}return{muted:!1,reduceMotion:!1,bgm:"auto"}}const vt=Zb(),Ge=new uh(vt.muted);let Fa=null,bo=!1;const Fe={modal:null,drawer:null,toast:null,toastTimer:null,statAnimated:!1,lastEventFocus:null,logScroll:0,logNearBottom:!0};let gs=null,L=zl()??ar(tr());L.phase==="creation"&&!L.creation.rolled&&Ts(L);vt.reduceMotion&&document.documentElement.classList.add("reduce-motion");function Gl(){try{localStorage.setItem(Wu,JSON.stringify(vt))}catch{}}function qa(t){return`${Yb}art/${t}`}function Ea(t){return t==="kanda"?qa("kanda.png"):["ayase","kurokawa","shiratori","crown"].includes(t)?qa(`${t}.webp`):qa(`${t}.svg`)}function In(t){return["title","street","alley","docks"].includes(t)?qa(`${t}.webp`):qa(`${t}.svg`)}function se(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function Ta(t){return t.split(/\n{2,}/).map(e=>`<p>${se(e).replace(/\n/g,"<br>")}</p>`).join("")}function Kb(t){return String(Math.floor(t))}function Xu(t){return t>=0?`+${t}`:`${t}`}function Jb(t){return Xu(va(t))}function Ya(t,e="neutral"){Fe.toastTimer&&window.clearTimeout(Fe.toastTimer),Fe.toast={text:t,tone:e},Fe.toastTimer=window.setTimeout(()=>{Fe.toast=null,Ie()},2200)}function Qb(){const t=zl();return!!t&&(t.phase==="play"||t.phase==="creation"||t.phase==="ending")}function jb(t){return t<2?"序章・黑信封":t<24?"第一夜・獵場":t<48?"第二天・侵蝕":t<60?"第三天・他到了":"終章・一擊"}function ex(t){switch(t){case"monster":return In("crown");case"caught":return In("street");case"throne":return In("title");case"dead":return In("alley");case"escape":case"confess":return In("docks");default:return In("title")}}function tx(t){for(let e=t.log.length-1;e>=0;e--){const n=t.log[e];if(n.kind==="story"||n.kind==="action"||n.kind==="bond")return n.text}return"城市在雨裡繼續運作。你的倒數也在繼續。"}function Ie(){const t=document.querySelector("[data-log]");t&&(Fe.logScroll=t.scrollTop,Fe.logNearBottom=t.scrollHeight-t.scrollTop-t.clientHeight<48);const e=L.phase==="title"?ax():L.phase==="creation"?sx():L.phase==="ending"?yx():ox();Ni.innerHTML=e,document.body.dataset.phase=L.phase;const n=L.phase==="title"||L.phase==="creation"?0:L.player.encroachment;document.documentElement.style.setProperty("--encroach",String(Math.min(100,n))),Ni.classList.toggle("encroach-high",n>=70&&L.phase==="play"),Ni.classList.toggle("encroach-critical",n>=100&&L.phase==="play"),ix(),Ge.setIntensity(L.phase==="title"?0:L.player.encroachment);const i=L.phase==="ending"?"ending":L.phase!=="play"?"title":L.battle?"battle":L.player.heat>=60||L.player.encroachment>=70?"tension":"city";if(vt.bgm?.startsWith("library:"))Ge.setLibraryTrack(vt.bgm.slice(8));else{const a=vt.bgm==="auto"?i:vt.bgm;Ge.setMood(a,Math.floor(Date.now()/75e3)%3)}nx()}function nx(){if(L.phase!=="play")return;const t=document.querySelector("#city3d");if(t){if(!Fa){if(bo)return;try{Fa=new z_}catch{bo=!0;return}}try{Fa.mount(t,L.cityId,L.seed,L.player.encroachment,vt.reduceMotion)}catch{bo=!0,Fa?.dispose(),Fa=null}}}function ix(){const t=document.querySelector("[data-log]");t&&(t.scrollTop=Fe.logNearBottom?t.scrollHeight:Fe.logScroll);const e=L.phase==="play"?$l(L):null;e?Fe.lastEventFocus!==e.id+(e.result?"-r":"-c")&&(Fe.lastEventFocus=e.id+(e.result?"-r":"-c"),document.querySelector(e.result?"[data-action='dismiss-result']":"[data-choice]:not([disabled])")?.focus({preventScroll:!0})):Fe.lastEventFocus=null,L.phase==="creation"&&!Fe.statAnimated&&(Fe.statAnimated=!0,document.querySelectorAll("[data-stat-value]").forEach((n,i)=>{n.style.animationDelay=`${i*55}ms`,n.classList.add("stat-pop")})),Fe.modal&&document.querySelector("[data-modal-panel] button")?.focus({preventScroll:!0})}function ax(){const t=Qb();return`
  <div class="screen title-screen">
    <div class="title-bg" style="background-image:url('${In("title")}')"></div>
    <div class="title-ink"></div>
    <div class="title-grain"></div>
    <div class="title-top">
      <span class="micro">裏八咫／PROJECT IGNIS</span>
      <span class="micro">機密等級：黑</span>
    </div>
    <div class="title-mast">
      <p class="eyebrow">當人開始改寫自己，世界便開始流變。</p>
      <h1>
        <span class="title-cn">流變計畫</span>
        <span class="title-en">PROJECT IGNIS</span>
      </h1>
      <p class="title-sub">72小時・超越者獵殺遊戲</p>
      <div class="title-stamp">第七次選別</div>
    </div>
    <div class="title-menu panel paper">
      <div class="menu-head">
        <span>第七次選別</span>
        <span class="mono">72:00:00</span>
      </div>
      <p class="menu-copy">
        超越者（Homo transscendens／Overman），又稱新人類，被歸類為一種不該繼續分裂的癌細胞。
        <br><br>
        你醒在一座不屬於你的城市。手腕上多了一個黑色終端，口袋裡有一封不能告訴任何人的信。街上還有其他和你一樣的人。他們也在倒數。
      </p>
      <div class="menu-actions">
        <button class="btn btn-primary" data-action="new-game">
          <span>開始新的一局</span><small>抽取能力值、核心顯現與城市</small>
        </button>
        <button class="btn btn-ghost" data-action="continue" ${t?"":"disabled"}>
          <span>繼續</span><small>${t?"載入上一次的存檔":"沒有存檔"}</small>
        </button>
      </div>
      <div class="menu-links">
        <button class="link" data-action="modal" data-modal="help">遊戲說明</button>
        <button class="link" data-action="modal" data-modal="about">內容提醒</button>
        <button class="link" data-action="modal" data-modal="roster">人物名鑑 100</button>
        <button class="link" data-action="modal" data-modal="endings">結局檔案 ${Ss().length}/108</button>
        <button class="link" data-action="modal" data-modal="bgm">BGM 選擇</button>
        <button class="link" data-action="toggle-mute">${vt.muted?"開啟音效":"靜音"}</button>
      </div>
    </div>
    <div class="title-footer">
      <span>繁體中文</span>
      <span>暴力／死亡／精神侵蝕描寫</span>
      <span>v1.0</span>
    </div>
  </div>
  ${ws()}`}function rx(){const t=L.creation,e=t.questionIds.length?t.questionIds:ir.slice(0,10).map(a=>a.id),n=kl(e[t.questionIndex]??e[0])??ir[0],i=Math.min(t.questionIndex,e.length-1);return`
  <div class="screen creation-screen questions-screen">
    <header class="creation-header">
      <div>
        <span class="micro">裏八咫／PROJECT IGNIS・適性訪談</span>
        <h1>你是誰？</h1>
      </div>
      <div class="creation-header-right">
        <span class="mono">${String(i+1).padStart(2,"0")} / ${String(e.length).padStart(2,"0")}</span>
        <button class="icon-btn" data-action="modal" data-modal="help" aria-label="說明">?</button>
      </div>
    </header>
    <div class="questions-wrap">
      <div class="question-progress" aria-hidden="true">
        ${e.map((a,r)=>`<i class="${r<i?"done":r===i?"now":""}"></i>`).join("")}
      </div>
      <section class="panel paper question-panel">
        <span class="micro">適性訪談 / ${n.title}</span>
        <h2>${n.title}</h2>
        <p class="question-text">${Ta(n.text)}</p>
        <div class="question-options">
          ${n.options.map((a,r)=>`<button class="question-option" data-action="answer-question" data-index="${r}">
                <span class="option-letter">${r===0?"A":"B"}</span>
                <span><strong>${se(a.label)}</strong>${a.hint?`<small>${se(a.hint)}</small>`:""}</span>
              </button>`).join("")}
        </div>
      </section>
      <p class="question-note">這不是能力測驗。答案會決定你的 MBTI、背景，以及你一開始就放不下的人。</p>
    </div>
    ${ws()}
  </div>`}function sx(){const t=L.creation;if(t.step==="questions")return rx();const e=dr.get(t.cityId)??cr[0],n=t.abilityId?_a.get(t.abilityId):null,i=Fl.get(t.backgroundId),a=t.mainStat,r=l=>a===l?2:0,s=l=>i?.statBonus[l]??0,o=er.get(i?.start.armorId??"jacket")??er.get("jacket");return`
  <div class="screen creation-screen">
    <header class="creation-header">
      <div>
        <span class="micro">裏八咫／PROJECT IGNIS・第七次選別</span>
        <h1>抽樣</h1>
      </div>
      <div class="creation-header-right">
        <span class="mono">D20 / 4D6</span>
        <button class="icon-btn" data-action="modal" data-modal="help" aria-label="說明">?</button>
      </div>
    </header>

    <main class="creation-grid">
      <section class="creation-left">
        <div class="panel paper identity-card">
          <div class="panel-label">代號 / CODE NAME</div>
          <input id="codename-en" class="codename-en-input" maxlength="28" value="${se(t.codenameEn??"")}" aria-label="English codename" autocomplete="off" spellcheck="false" placeholder="ENGLISH CODENAME" />
          <input id="codename" class="codename-input" maxlength="8" value="${se(t.codename)}" aria-label="中文代號" autocomplete="off" spellcheck="false" />
          <div class="gender-field">
            <span class="gender-label">性別 / GENDER</span>
            <div class="gender-options">
              ${Vu.map(l=>`<button class="gender-btn ${t.gender===l.id?"selected":""}" data-action="gender" data-gender="${l.id}"><span>${l.label}</span><small>${l.en}</small></button>`).join("")}
            </div>
          </div>
          <p class="fine">不得使用真名。英文代號在上，中文代號在下，兩者都會公開。</p>
        </div>

        <div class="panel paper stats-card">
          <div class="panel-heading">
            <h2>能力值</h2>
            <button class="link" data-action="reroll-stats">重擲能力值</button>
          </div>
          <div class="stat-grid">
            ${vu.map(l=>{const c=Math.min(20,t.stats[l]+r(l)+s(l)),d=a===l;return`
              <button class="stat-cell ${d?"is-main":""}" data-action="main-stat" data-stat="${l}" title="${ud[l]}" aria-pressed="${d}">
                <div class="stat-top"><span>${Kn[l]}</span><em>${Jb(c)}</em></div>
                <strong data-stat-value data-stat="${l}">${c}</strong>
                <div class="stat-track"><i style="width:${c/20*100}%"></i></div>
                <p>${ud[l]}</p>
                <span class="main-badge">${d?"主屬性 +2":"選為主屬性"}</span>
                ${s(l)?`<span class="bg-badge">背景 +${s(l)}</span>`:""}
              </button>`}).join("")}
          </div>
          <div class="roll-note">
            <span class="dice-mark">d20</span>
            <p>4d6 取三擲出六項能力值。點選一項作為主屬性，最終值 +2。d20 檢定＝d20＋能力修正＋情境修正。</p>
          </div>
          ${(()=>{const l=n?.statBonus.constitution??0,c=t.stats.constitution+r("constitution")+s("constitution")+l,d=t.stats.dexterity+r("dexterity")+s("dexterity")+(n?.statBonus.dexterity??0),f=Math.max(6,10+va(c)),u=o.base+Math.min(va(d),o.dexCap)+(n?.acBonus??0),p=nr(fs(`${L.seed}:${t.codename.trim()||"鴉"}:${L.rngCount}`,4,Eu(n?.id??"",[t.mainStat??"strength"])));return`<div class="derived-panel">
              <div class="derived-head"><span class="micro">STARTING STATUS / 初始狀態</span><small>依目前選擇即時計算</small></div>
              <div class="derived-grid">
                <div class="derived-stat"><span>HP</span><strong>${f}</strong><small>10＋CON 修正</small></div>
                <div class="derived-stat"><span>AC</span><strong>${u}</strong><small>${o.name}</small></div>
                <div class="derived-stat"><span>CON</span><strong>${c}</strong><small>決定 HP</small></div>
                <div class="derived-stat"><span>DEX</span><strong>${d}</strong><small>遠程／閃避</small></div>
              </div>
              <div class="derived-skills"><strong>戰鬥異能・4</strong>${p.map(v=>{const x=`${v.name}｜${v.style==="melee"?"近戰・STR":v.style==="ranged"?"遠程・DEX":"支援"}｜${v.power?`傷害 ${v.power}`:"支援"}${v.cost?`・侵蝕 +${v.cost}`:""}｜${v.description}`;return`<span class="derived-skill" tabindex="0" title="${se(x)}" data-tip="${se(x)}">${se(v.name)}<small>${v.style==="melee"?"STR":v.style==="ranged"?"DEX":"SUP"}</small></span>`}).join("")}</div>
            </div>`})()}
        </div>

        <div class="panel paper city-card">
          <div class="city-visual" style="background-image:url('${In(e.scene)}')">
            <div class="city-shade"></div>
            <div class="city-title">
              <span class="micro">指定城市 / ASSIGNED CITY</span>
              <h2>${e.name}</h2>
              <p>${e.tag}</p>
            </div>
            <div class="city-stamp">不可<br>離開</div>
          </div>
          <p class="city-desc">${e.description}</p>
          <div class="city-mods">
            <span>${Kn[e.stat]}檢定 +1</span>
            <span>警戒係數 ×${e.heatMod.toFixed(2)}</span>
            <span>${e.weather}</span>
          </div>
        </div>

        ${i?`<div class="panel paper background-card">
                <div class="panel-heading compact">
                  <span class="micro">背景 / MBTI</span>
                  <button class="link" data-action="restart-questions">重答心理測驗</button>
                </div>
                <div class="background-name">
                  <h2>${i.name}</h2>
                  <span class="mbti-chip">${t.mbti}・${cv[t.mbti]??""}</span>
                </div>
                <p class="background-tagline">${i.tagline}</p>
                <p class="background-desc">${i.description}</p>
                <div class="background-feature"><strong>特典</strong><span>${i.feature}</span></div>
                <div class="background-stats">
                  ${Object.entries(i.statBonus).map(([l,c])=>`<span>${Kn[l]} +${c}</span>`).join("")}
                </div>
              </div>`:""}
      </section>

      <section class="creation-right">
        <div class="panel paper avatar-panel">
          <div class="panel-heading compact">
            <span class="micro">頭像 / PORTRAIT</span>
            <span class="mono">可上傳</span>
          </div>
          <div class="avatar-picker">
            <div class="avatar-preview ${t.avatar?"has-image":""}" ${t.avatar?`style="background-image:url('${t.avatar}')"`:""}>
              ${t.avatar?"":`<div class="avatar-fallback">${Qn(`${L.seed}:${t.codename||"鴉"}`,{name:t.codename||"鴉",role:"player"})}</div>`}
            </div>
            <div class="avatar-copy">
              <strong>選擇你的角色圖像</strong>
              <p>可上傳 PNG／JPG。圖片會壓縮成小頭像並存進這一局存檔；不影響戰鬥數值。</p>
              <label class="avatar-upload">上傳圖片<input id="avatar-upload" type="file" accept="image/png,image/jpeg,image/webp" /></label>
              ${t.avatar?'<button class="link" data-action="clear-avatar">清除頭像</button>':""}
            </div>
          </div>
        </div>

        <div class="panel paper ability-panel core-panel">
          <div class="panel-heading">
            <h2>核心顯現</h2>
            <span class="fine">Project Ignis 已寫入・無法選擇</span>
          </div>
          <p class="ability-intro">每個超越者出生時都帶著一項獨有的核心顯現。它定義你如何改寫世界，也定義世界會先從哪裡開始吃掉你。</p>
          ${n?`<div class="ability-card selected core-card">
                  <div class="ability-top">
                    <span class="ability-type">核心／${n.type}</span>
                    <span class="ability-rarity">${n.rarity}</span>
                  </div>
                  <p class="ability-en">${se(qb[n.id]??"OVERMAN ABILITY")}</p>
                  <h3>${n.name}</h3>
                  <p class="ability-tagline">${n.tagline}</p>
                  <div class="core-epithet"><span class="epithet-en">TRUE NAME</span>顯現真名：〈${se(t.coreEpithet)}〉</div>
                  <div class="ability-stats">
                    <span>侵蝕 +${n.cost}</span>
                    <span>${Object.entries(n.statBonus).map(([l,c])=>`${Kn[l]} +${c}`).join("／")||"無被動加值"}</span>
                    <span>AC +${n.acBonus??0}</span>
                  </div>
                  <p class="ability-passive">${n.passive}</p>
                  <p class="ability-active">${n.active}</p>
                  <span class="selected-mark">本次個體</span>
                </div>
                <p class="core-note">核心顯現無法更換。當侵蝕率突破 35%／60%／85%，會再長出新的顯現，每次三選一。</p>
                <div class="manifest-slots">
                  <span>35% 顯現增生</span><span>60% 顯現增生</span><span>85% 顯現增生</span>
                </div>`:'<p class="bad">核心顯現抽取失敗。請重新開始。</p>'}
        </div>

        <div class="panel paper ultimate-panel">
          <div class="panel-heading compact">
            <span class="micro">必殺奧義 / FINISHER</span>
            <span class="mono">每場一次</span>
          </div>
          <p class="ability-intro">七種奧義效果中隨機抽出三張，每張的名稱每次創角都會重新生成。選一種寫入終端；每場戰鬥只能發動一次。</p>
          <div class="ultimate-options">
            ${(t.ultimateChoices??[]).map(l=>{const c=ps.get(l.id);return`<button class="ultimate-choice ${t.ultimateId===l.id?"selected":""}" data-action="ultimate" data-id="${l.id}">
                <span class="ultimate-en">${se(l.en)}</span>
                <strong>${se(l.name)}</strong>
                <small>${se(c.tagline)}</small>
                <em>${se(c.description)}</em>
                <i>${t.ultimateId===l.id?"已選定":"選擇"}</i>
              </button>`}).join("")}
          </div>
        </div>

        <div class="panel paper bonds-preview">
          <div class="panel-heading compact">
            <span class="micro">初始羈絆 / BONDS</span>
            <span class="mono">${L.bonds.length}</span>
          </div>
          <div class="bond-preview-list">
            ${L.bonds.map(l=>`<div class="bond-preview-row">
                  <span class="bond-avatar">${se(l.name.slice(0,1))}</span>
                  <span><strong>${se(l.name)}</strong><small>${l.relation}・羈絆 ${l.level}</small></span>
                  <em>${l.category==="family"?"家人":l.category==="friend"?"友人":"社區"}</em>
                </div>`).join("")}
          </div>
          <p class="fine">羈絆由你的 MBTI 與背景決定，每次開局都會重新抽樣。</p>
        </div>

        <div class="panel paper start-panel">
          <div class="start-summary">
            <div><span>背景</span><strong>${i?.name??"—"}</strong></div>
            <div><span>MBTI</span><strong>${t.mbti}</strong></div>
            <div><span>主屬性</span><strong>${a?Kn[a]+" +2":"尚未選擇"}</strong></div>
          </div>
          ${i?`<p class="background-brief"><strong>${i.name}特典</strong>${i.feature}</p>`:""}
          <div class="start-armor">
            <span>初始護甲：${o.name}</span>
            <span>AC＝護甲基礎＋敏捷修正（上限 ${o.dexCap}）＋顯現加值</span>
          </div>
          <button class="btn btn-primary btn-wide" data-action="start-run" ${n&&a?"":"disabled"}>
            <span>${a?"簽下黑信封":"選擇主屬性"}</span>
            <small>${a?"開始 72 小時倒數":"先點選一項能力值"}</small>
          </button>
          <p class="fine center">重擲能力值會保留核心顯現與城市；主屬性選擇不會自動重設。</p>
        </div>

        <div class="creation-aside">
          <div class="aside-quote">
            「你不需要知道規則。<br>你只需要活到最後。」
          </div>
          <div class="aside-cite">— 裏八咫・招募手冊</div>
        </div>
      </section>
    </main>
    ${ws()}
  </div>`}function ox(){const t=L,e=zi(t),n=ya(t.hour),i=Pv(t.player.encroachment),a=ii(t),r=Math.min(100,Math.round(t.player.marks/zn*100)),s=Fn(t),o=t.hour>=48,l=ba(t),c=t.player;return`
  <div class="screen game-screen ${i.tone}">
    <header class="game-header">
      <div class="brand">
        <span class="brand-cn">流變計畫</span>
        <span class="brand-en">PROJECT IGNIS</span>
      </div>
      <div class="clock">
        <span class="day">DAY ${String(n.day).padStart(2,"0")}</span>
        <span class="time">${n.time}</span>
        <span class="weather">${e.name}／${e.weather}</span>
      </div>
      <div class="header-actions">
        <button class="icon-btn only-mobile" data-action="drawer" data-drawer="bonds" aria-label="羈絆">絆</button>
        <button class="icon-btn only-mobile" data-action="drawer" data-drawer="rank" aria-label="排名">位</button>
        <button class="icon-btn only-mobile" data-action="drawer" data-drawer="log" aria-label="紀錄">錄</button>
        <button class="icon-btn only-desktop" data-action="modal" data-modal="help" aria-label="遊戲說明">?</button>
        <button class="icon-btn only-desktop" data-action="toggle-mute" aria-label="音效">${vt.muted?"靜":"聲"}</button>
        <button class="icon-btn" data-action="modal" data-modal="restart" aria-label="選單">☰</button>
      </div>
    </header>

    <div class="game-grid">
      <aside class="left-rail">
        <section class="player-card panel paper">
          <div class="player-line">
            <span class="player-avatar" ${c.avatar?`style="background-image:url('${c.avatar}')"`:""}>${c.avatar?"":`<span class="player-avatar-fallback">${Qn(`${t.seed}:${c.codename}`,{name:c.codename,role:"player"})}</span>`}</span>
            <div>
              <span class="micro">代號</span>
              <span class="player-codename-en">${se(c.codenameEn||"")}</span>
              <h2>${se(c.codename)}</h2>
              <span class="player-gender">${se(Vu.find(d=>d.id===c.gender)?.label??"不公開")}</span>
            </div>
            <div class="vitals">
              <div class="ac-box" title="${Rv(t)}">
                <span class="micro">AC</span>
                <strong>${ni(t).value}</strong>
              </div>
              <div class="hp-box" title="肉體">
                <span class="micro">肉體</span>
                <div class="pips hp">
                  ${Array.from({length:c.maxHp},(d,f)=>`<i class="${f<c.hp?"on":""}"></i>`).join("")}
                </div>
                <strong>${c.hp}<small>/${c.maxHp}</small></strong>
              </div>
            </div>
          </div>
          <div class="ability-mini">
            <span class="ability-type">核心</span>
            <strong>${l.name}</strong>
            <span class="mono">侵蝕 +${l.cost}</span>
          </div>
          <div class="true-name-banner">
            <span class="true-name-en">TRUE NAME</span>
            <span class="true-name-cn">顯現真名</span>
            <strong>〈${se(c.coreEpithet)}〉</strong>
          </div>
          <div class="core-line">${ni(t).armor.name}</div>
          <div class="speed-line">速度 <b>${za(t)}</b>・${Di(za(t)).name}${Di(za(t)).fumble?`（fumble 1–${Di(za(t)).fumble}）`:"（無 fumble）"}</div>
          ${gl(t).length?`<div class="manifest-chips">${gl(t).map(d=>`<span title="${se(d.passive)}">${d.name}</span>`).join("")}</div>`:'<div class="manifest-chips empty">尚未增生顯現</div>'}
          <div class="mini-stats">
            ${vu.map(d=>`<span class="${d===c.mainStat?"main-stat":""}" title="${Kn[d]} ${pa(t,d)}${d===c.mainStat?"（主屬性 +2）":""}">${Kn[d]}${d===c.mainStat?"★":""}<b>${pa(t,d)}</b></span>`).join("")}
          </div>
        </section>

        <section class="panel paper encroach-card ${i.tone}">
          <div class="panel-heading compact">
            <span class="micro">侵蝕率 / ENCROACHMENT</span>
            <span class="tag tag-${i.tone}">${i.label}</span>
          </div>
          <div class="encroach-number">
            <strong>${c.encroachment}</strong><span>%</span>
            ${c.encroachment>=100?'<em class="danger-note">失控 '+c.collapse+"/3</em>":""}
          </div>
          <div class="segment-bar" style="--pct:${Math.min(100,c.encroachment)}%">
            ${Array.from({length:20},(d,f)=>`<i class="${f<Math.ceil(Math.min(100,c.encroachment)/5)?"on":""}"></i>`).join("")}
          </div>
          <div class="power-tier ${Oi(t)>0?"on":""}">${Av(t)}<span>顯現等級 ${Oi(t)+1}</span></div>
          <p class="fine">
            ${c.encroachment>=100?"每小時意志檢定。失敗三次，永久怪物化。聯絡羈絆可拉回。":"使用顯現會推高侵蝕。歸零不是解脫，破百才是懸崖。"}
          </p>
        </section>

        <section class="panel paper score-card">
          <div class="score-row">
            <div>
              <span class="micro">刻印 / MARKS</span>
              <strong class="big-number">${c.marks}<small>/${zn}</small></strong>
            </div>
            <div class="rank-seal" title="目前排名">
              <span>RANK</span><strong>${a.rank}</strong>
            </div>
          </div>
          <div class="bar marks"><i style="width:${r}%"></i></div>
          <div class="fine-row"><span>${t.player.killsNormal} 常人</span><span>${t.player.killsOverman} 超越者</span></div>
        </section>

        <section class="panel paper heat-card">
          <div class="panel-heading compact">
            <span class="micro">警戒指數 / ALERT</span>
            <span class="tag ${o?"tag-danger":""}">${Fu(c.heat,o)}</span>
          </div>
          <div class="heat-line">
            <strong>${c.heat}</strong>
            <div class="bar heat"><i style="width:${c.heat}%"></i></div>
          </div>
          <div class="intel-row">
            <span title="情報">情報 <b>${c.intel}</b></span>
            <span title="裏八咫監視">監視 <b>${c.surveillance}</b></span>
            <span title="證據">證據 <b>${c.evidence?"有":"無"}</b></span>
          </div>
          ${c.wanted?'<div class="wanted-banner">指名手配・神田隼人</div>':""}
        </section>

        <section class="panel paper bonds-card">
          <div class="panel-heading compact">
            <span class="micro">羈絆 / BONDS</span>
            <span class="mono">${s}</span>
          </div>
          <div class="bond-list">
            ${t.bonds.map(d=>{const f=Math.max(0,6-(t.hour-d.lastContact)),u=t.contactTarget===d.id;return`
                <button class="bond-row ${u?"selected":""} ${d.alive?"":"dead"}" data-action="contact-bond" data-id="${d.id}" title="${se(d.description)}">
                  <span class="bond-avatar">${se(d.name.slice(0,1))}</span>
                  <span class="bond-info">
                    <strong>${d.name}</strong>
                    <small>${d.relation}${f>0?`・${f}h 後可聯絡`:""}</small>
                    <span class="pips bond">${Array.from({length:5},(p,v)=>`<i class="${v<d.level?"on":""}"></i>`).join("")}</span>
                  </span>
                  ${u?'<em class="bond-target">聯絡對象</em>':""}
                </button>`}).join("")}
          </div>
          <p class="fine">「聯絡」每小時最多一次，降低侵蝕，但提高裏八咫監視。</p>
        </section>
      </aside>

      <section class="stage">
        <div class="scene scene-${e.scene}">
          <div class="scene-bg" style="background-image:url('${In(e.scene)}')"></div>
          <div id="city3d" class="city-3d" aria-hidden="true"></div>
          <div class="scene-shade"></div>
          <div class="scene-halftone"></div>
          <div class="scene-head">
            <span class="micro">${jb(t.hour)}</span>
            <span class="scene-clock">${n.day}日目 ${n.time}</span>
          </div>
          <div class="scene-city">${e.name}</div>
          <div class="scene-status">
            <span class="status-mark">▶</span>
            <p>${se(tx(t))}</p>
          </div>
          <div class="scene-weather"><span>${e.weather}</span><span>${e.landmark}</span></div>
          <div class="scene-stamp">${i.label}<br><span>${c.encroachment}%</span></div>
          <div class="rain-layer"></div>
          ${c.encroachment>=100?'<div class="corruption-layer"></div>':""}
        </div>

        <div class="stance-panel panel paper">
          <div class="stance-head">
            <div>
              <span class="micro">本小時行動 / STANCE</span>
              <h2>${ka[t.stance].label}</h2>
              <p>${ka[t.stance].desc}</p>
            </div>
            <span class="stance-risk">${ka[t.stance].risk}</span>
          </div>
          <div class="stance-grid">
            ${Object.keys(ka).map(d=>{const f=ka[d];return`<button class="stance-btn ${t.stance===d?"active":""} ${f.tone}" data-action="set-stance" data-stance="${d}" ${t.pending?"disabled":""} title="${se(f.desc)}">
                  <span class="stance-icon">${f.icon}</span>
                  <span>${f.label}</span>
                  ${d==="contact"&&t.contactTarget?`<small>${se(t.bonds.find(p=>p.id===t.contactTarget)?.name??"")}</small>`:""}
                </button>`}).join("")}
          </div>
        </div>

        <div class="time-bar panel paper">
          <div class="time-controls">
            <button class="play-btn" data-action="toggle-pause" ${t.pending?"disabled":""}>
              <span>${t.pending||t.speed>0?"❚❚":"▶"}</span>
              <em>${t.pending?"事件中":t.speed>0?"暫停":"開始"}</em>
            </button>
            <div class="speed-group" role="group" aria-label="速度">
              ${[1,2,4,8].map(d=>`<button class="speed-btn ${t.speed===d?"active":""}" data-action="speed" data-speed="${d}" ${t.pending?"disabled":""}>${d}×</button>`).join("")}
            </div>
            <button class="btn btn-ghost btn-small" data-action="advance" ${t.pending?"disabled":""}>+1 小時</button>
          </div>
          <div class="time-status">
            <span class="dot ${t.pending?"paused":t.speed>0?"live":"idle"}"></span>
            <span>${t.pending?"時間暫停・處理事件":t.speed>0?"時間推進中":"時間已暫停"}</span>
            <span class="autosave">自動存檔</span>
          </div>
        </div>
      </section>

      <aside class="right-rail">
        ${Zu(t)}
        ${Ku(t)}
        <section class="panel paper log-card">
          <div class="panel-heading compact">
            <span class="micro">72 小時紀錄 / LOG</span>
            <span class="mono">${t.log.length}</span>
          </div>
          <div class="log-list" data-log>
            ${qu(t)}
          </div>
        </section>
      </aside>
    </div>
    ${hx()}
    ${ux()}
    ${px()}
    ${ws()}
    ${Fe.toast?`<div class="toast ${Fe.toast.tone}">${se(Fe.toast.text)}</div>`:""}
  </div>`}function qu(t,e=70){return t.log.slice(-e).map(n=>{const i=ya(n.hour);return`<div class="log-entry ${n.kind}">
        <span class="log-hour">${String(i.day).padStart(2,"0")}/${i.time}</span>
        <p>${se(n.text)}</p>
      </div>`}).join("")}const lx="終末冠者",cx={黑川巌:"GEHENNA CHAIN",綾瀬凍:"GLASS MADONNA",白鳥理世:"FALSE IDOL",鐵十兵衛:"RUSTED HERO",王冠:"CROWNED PROPHET",神田隼人:"RUNELORD",路人:"BYSTANDER",冰晶殘影:"CRYSTAL ECHO",王冠的結晶:"CROWN SHARD"};function Ad(t){return cx[t]??"OVERMAN"}function Ii(t,e){if(e==="神田隼人")return"魔劍士";if(e==="王冠")return lx;const n=t.rivals.find(i=>i.name===e);return n?n.codename??n.name:e}function Yu(t,e){let n=e;for(const i of t.rivals)if(!i.trueNameKnown){n=n.split(i.name).join(i.codename??i.name);const a=i.name.slice(0,2);a.length>=2&&(n=n.split(a).join(i.codename))}return n}function Zu(t){const e=ii(t);return`
  <section class="panel paper rank-card">
    <div class="panel-heading compact">
      <span class="micro">刻印排名 / LEADERBOARD</span>
      <span class="mono">${e.rank}/${e.total}</span>
    </div>
    <div class="rank-list">
      ${e.list.map((n,i)=>{const a=t.rivals.find(c=>c.name===n.name),r=a?a.status:"active",o=(n.you?n.name:a?Ii(t,a.name):n.name)??n.name??"—",l=n.you?"你。":a?.trueNameKnown?`真名：${a.name}`:a?.note??"";return`<div class="rank-row ${n.you?"you":""} ${r}">
            <span class="rank-index">${String(i+1).padStart(2,"0")}</span>
            <span class="rank-face" style="background-image:url('${Ea(a?.portrait??"crown")}')"></span>
            <span class="rank-name">
              <strong>${se(o)}</strong>
              <small>${r==="active"?se(l).slice(0,20):r==="arrested"?"已逮捕":r==="dead"?"已死亡":"退出"}</small>
            </span>
            <strong class="rank-marks">${Kb(n.marks)}</strong>
          </div>`}).join("")}
    </div>
    <p class="fine">閉幕時排名第一且刻印達 ${zn}，才能獲得赦免。</p>
  </section>`}function Ku(t){const e=t.hour>=48,n=Math.min(100,t.player.heat+(t.player.wanted?20:0));return`
  <section class="panel paper kanda-card ${e?"arrived":""}">
    <div class="kanda-mini" style="background-image:url('${Ea("kanda")}')"></div>
    <div class="kanda-info">
      <span class="micro">${e?"搜查一課・已抵達":"搜查一課・接近中"}</span>
      <span class="kanda-en">RUNELORD</span>
      <h3>魔劍士</h3>
      <p>神田隼人／勝率 <strong>0.0%</strong></p>
      <div class="bar kanda"><i style="width:${n}%"></i></div>
      <small>${e?Fu(t.player.heat,!0):"他會在第四十八小時抵達。"}</small>
    </div>
    <div class="kanda-seal">無<br>顯<br>現</div>
  </section>`}function xo(t,e,n,i){return i===0?99:t==="melee"?1:t==="ranged"?2:e}function yo(t,e){return t==="melee"?"近戰・STR・±1":t==="ranged"?"遠程・DEX・±2":`支援・射程 ${e}`}function dx(){const t=L.battle;if(!t)return"";const e=L,n=t.enemies.find(l=>l.alive)??t.enemies[0];if(!n)return"";const i=Qn(`${e.seed}:${e.player.codename}`,{name:e.player.codename,role:"player"}),a=t.enemies.filter(l=>l.alive).slice(0,3).map(l=>`<figure class="cutscene-standee enemy">${Qn(`${e.seed}:${l.id}`,{name:l.name,role:"enemy",accent:"#d8382a",variant:l.portrait})}<figcaption class="fighter-name"><span class="fighter-en">${se(Ad(l.name))}</span><span class="fighter-cn">${se(Ii(e,l.name))}</span></figcaption></figure>`).join(""),r=t.allies.map(l=>`<figure class="cutscene-standee ally">${Qn(`${e.seed}:${l.id}`,{name:l.name,role:"ally",accent:"#e8b53a"})}<figcaption class="fighter-name"><span class="fighter-en">ALLY</span><span class="fighter-cn">${se(l.name)}</span></figcaption></figure>`).join(""),s=t.civilians.filter(l=>l.alive).map(l=>`<figure class="cutscene-standee civilian">${Qn(`${e.seed}:${l.id}`,{name:l.name,role:"civilian"})}<figcaption class="fighter-name"><span class="fighter-en">BYSTANDER</span><span class="fighter-cn">${se(l.name)}</span></figcaption></figure>`).join(""),o=(t.log[0]?.text??"戰鬥開始。").split(`
`).filter(l=>!l.startsWith("你的速度：")).join(`
`).trim();return`
  <div class="battle-overlay" role="dialog" aria-modal="true" aria-label="遭遇">
    <div class="battle-cutscene">
      <div class="cutscene-hero">
        <div class="cutscene-portrait" style="background-image:url('${Ea(n.portrait)}')"></div>
        <div class="avatar-skill-panel">
          <span class="avatar-skill-label">對手異能 / 4＋奧義</span>
          <div class="avatar-skill-list">
            ${nr(n.skills).map(l=>`<span class="avatar-skill" title="${se(`${l.name}：${l.description}`)}" data-tip="${se(`${l.name}：${l.description}`)}" tabindex="0">${se(l.name)}</span>`).join("")}
            ${n.ultimateName?`<span class="avatar-skill ultimate" title="${se(`${n.ultimateName}：必殺奧義，一場一次`)}" data-tip="${se(`${n.ultimateName}：必殺奧義，一場一次`)}" tabindex="0">必殺・${se(n.ultimateName)}</span>`:""}
          </div>
        </div>
      </div>
      <div class="cutscene-vignette"></div>
      <div class="cutscene-copy">
        <span class="micro">${t.unbeatable?"UNBEATABLE / 勝率 0.0%":"ENCOUNTER / 遭遇"}</span>
        <span class="cutscene-en">${se(Ad(n.name))}</span>
        <h2>${se(Ii(e,n.name))}</h2>
        <p class="cutscene-title">${se(n.title)}</p>
        <div class="cutscene-prose">${Ta(o)}</div>
        <div class="cutscene-lineup">
          <figure class="cutscene-standee player">${i}<figcaption class="fighter-name"><span class="fighter-en">${se(e.player.codenameEn||"")}</span><span class="fighter-cn">${se(e.player.codename)}</span></figcaption></figure>
          <span class="cutscene-vs">VS</span>
          ${a}
          ${r}
        </div>
        ${s?`<div class="cutscene-casualties"><span class="casualties-label">被捲入</span><div class="casualties-list">${s}</div></div>`:""}
        <button class="battle-start-btn" data-action="battle-begin"><span>BATTLE START</span><small>戰鬥開始・頭像只會出現一次</small></button>
      </div>
    </div>
  </div>`}function So(t){return(L.battle?.log.slice(t)??[]).some(n=>/落空|閃開|射程不足|間合不足|fumble/.test(n.text))?"miss":"danger"}function ux(){const t=L.battle;if(!t)return"";if(!t.introSeen)return dx();const e=L,n=t.enemies.filter(m=>m.alive),i=t.enemies.find(m=>m.id===t.targetId&&m.alive)??n[0],a=t.unbeatable,r=Math.max(0,Math.round(e.player.hp/e.player.maxHp*100)),s=t.status==="active",o=s&&t.phase==="plot",l=s&&t.phase==="action"&&t.awaiting,c=t.status==="won"?"戰鬥勝利":t.status==="escaped"?"脫離戰鬥":"戰鬥敗北",d=Di(t.playerPlot??t.playerSpeed),f=["零","壹","貳","參","肆","伍","陸","柒"],u=(m,S,C,I,w,O=!1,U)=>C==="enemy"&&l?`<button type="button" class="velocity-figure-unit target-figure ${O?"in-range":""} ${t.targetId===w?"aimed":""}" data-action="battle-avatar" data-id="${w??""}"><span class="velocity-figure">${Qn(m,{name:S,role:C,accent:I,variant:U})}</span><span class="velocity-name">${se(S)}</span><span class="aim-icon" aria-hidden="true">◎</span></button>`:`<span class="velocity-figure-unit"><span class="velocity-figure">${Qn(m,{name:S,role:C,accent:I,variant:U})}</span><span class="velocity-name">${se(S)}</span></span>`,p=`
    <div class="velocity-board">
      <div class="velocity-head"><span>PLOT / プロット</span><span>プロット表 / 0–7${t.playerSpeed<7?"・7 需特殊顯現":""}</span></div>
      <div class="velocity-grid">
        ${hs.map((m,S)=>{const C=m.value<=t.playerSpeed,I=t.playerPlot===m.value,w=t.playerPlot===m.value,O=t.enemies.filter(re=>re.alive&&re.plot===m.value),U=t.allies.filter(re=>re.alive&&re.plot===m.value),$=t.civilians.filter(re=>re.alive&&re.status==="hiding"&&m.value===0),Y=[...w?[{id:"player",seed:`${e.seed}:${e.player.codename}`,name:e.player.codename,role:"player",accent:"#d8382a"}]:[],...O.map(re=>({id:re.id,seed:`${e.seed}:${re.id}`,name:re.name,role:"enemy",accent:"#d8382a",variant:re.portrait})),...U.map(re=>({id:re.id,seed:`${e.seed}:${re.id}`,name:re.name,role:"ally",accent:"#e8b53a"})),...$.map(re=>({id:re.id,seed:`${e.seed}:${re.id}`,name:re.name,role:"civilian",accent:void 0}))],V=Y.slice(0,2),ne=Y.length-V.length,X=t.selectedSkill,Q=X?nr(e.player.skills).find(re=>re.id===X):null,te=O.some(re=>re.id===t.targetId),Re=Q?O.some(re=>{const st=re.plot??0;return(st===0?0:Math.abs((t.playerPlot??0)-st))<=xo(Q.style,Q.range,t.playerPlot??0,st)}):!1;return`<div class="velocity-cell ${I?"selected":""} ${C?"":"locked"} ${Re&&l?"range-target":""} ${te&&l?"target-cell":""}" data-action="${o?"battle-plot":"noop"}" data-speed="${m.value}" aria-disabled="${!o||!C}" title="${C?m.note:"速度 7 只有特殊顯現能抵達"}">
            <span class="velocity-figure-wrap">
              ${V.map(re=>u(re.seed,re.name,re.role,re.accent,re.id,Re,re.variant)).join("")}
              ${ne>0?`<span class="velocity-overflow">+${ne}</span>`:""}
            </span>
            <span class="velocity-kanji">${f[S]}</span>
            <span class="velocity-num">${m.value}</span>
            <span class="velocity-en">${m.jp}</span>
            <span class="velocity-cn">${m.name}</span>
            <span class="velocity-fumble">${m.fumble?`fumble 1–${m.fumble}`:"無 fumble"}</span>
            <span class="velocity-tokens">${Y.length?`<i class="speed-token ${Y.some(re=>re.role==="player")?"you":"enemy"}">${Y.length} 人</i>`:""}</span>
          </div>`}).join("")}
      </div>
    </div>`,v=hs.map(m=>{const S=[];t.playerPlot===m.value&&S.push({id:"player",name:e.player.codename,role:"你",cls:"player"});for(const C of t.enemies.filter(I=>I.alive&&I.plot===m.value))S.push({id:C.id,name:Ii(e,C.name),role:"敵",cls:"enemy"});for(const C of t.allies.filter(I=>I.alive&&I.plot===m.value))S.push({id:C.id,name:C.name,role:"隊友",cls:"ally"});for(const C of t.civilians.filter(I=>I.alive&&I.status==="hiding"&&m.value===0))S.push({id:C.id,name:C.name,role:"被捲入",cls:"civilian"});return{t:m,entries:S}}).filter(m=>m.entries.length),x=v.length?`<div class="phase-roster">
    <span class="roster-title">PLOT 名冊 / 點名字瞄準</span>
    ${v.map(m=>`<div class="roster-group"><span class="roster-speed">${m.t.value}・${m.t.name}</span><div class="roster-chips">${m.entries.map(S=>S.cls==="enemy"?`<button type="button" class="roster-chip enemy ${t.targetId===S.id?"aimed":""}" data-action="battle-target" data-id="${S.id}"><i></i>${se(S.name)}<small>${S.role}</small></button>`:`<span class="roster-chip ${S.cls}"><i></i>${se(S.name)}<small>${S.role}</small></span>`).join("")}</div></div>`).join("")}
  </div>`:"",g=nr(e.player.skills),h=t.selectedSkill?g.find(m=>m.id===t.selectedSkill)??null:null,T=i?.plot??0,P=T===0?0:Math.abs((t.playerPlot??0)-T),y=h?T===0||h.style==="support"&&h.range===0?99:xo(h.style,h.range,t.playerPlot??0,T):0,M=!!h&&!!i&&P<=y,E=[{name:e.player.codename,role:"你",alive:!0,cls:"player"},...t.enemies.map(m=>({name:Ii(e,m.name),role:"敵",alive:m.alive,cls:"enemy"})),...t.allies.map(m=>({name:m.name,role:"隊友",alive:m.alive,cls:"ally"})),...t.civilians.map(m=>({name:m.name,role:m.status==="saved"?"已庇護":m.status==="killed"?"死亡":"被捲入",alive:m.status!=="killed",cls:"civilian"}))],R=g.map(m=>{const S=T===0?99:xo(m.style,m.range,t.playerPlot??0,T),C=P<=S,I=`${m.name}｜${yo(m.style,m.range)}｜${m.power?`傷害 ${m.power}`:"支援"}${m.cost?`・侵蝕 +${m.cost}`:""}｜${m.description}`;return`<button class="battle-skill ${m.style} ${C?"":"out-of-range"} ${t.selectedSkill===m.id?"selected":""}" data-action="battle-skill" data-id="${m.id}" ${l?"":"disabled"} title="${se(m.description)}" data-tip="${se(I)}" aria-label="${se(I)}">
        <span class="skill-range">${yo(m.style,m.range)}</span>
        <strong>${se(m.name)}</strong>
        <small>${m.power?`傷害 ${m.power}`:"支援"}${m.cost?`・侵蝕 +${m.cost}`:""}${C?"":`・差 ${P}`}</small>
      </button>`}).join("");return`
  <div class="battle-overlay" role="dialog" aria-modal="true" aria-label="戰鬥">
    <div class="battle-panel battle-panel-wide">
      <div class="battle-main battle-main-v3">
        <div class="battle-top">
          <div>
            <span class="micro">第 ${t.round} / ${t.maxRounds??"∞"} 回合${t.finalBattle?"・最終戰":""} / 速度上限 ${t.playerSpeed}・${Di(t.playerSpeed).name}</span>
            <h2>${n.length>1?"多對一":se(n[0]?.name??"戰鬥")}</h2>
          </div>
          <div class="battle-verdict ${t.status}">${s?o?"宣告速度":l?"你的行動":"敵人行動":c}</div>
        </div>

        <div class="battle-board-column">
          ${p}
          ${x}
          <div class="battle-log">
            ${t.log.slice(-10).map(m=>`<p class="${m.tone}">${se(Yu(e,m.text))}</p>`).join("")}
          </div>
        </div>
        <div class="battle-console-column">
        <div class="battle-vitals">
          <div class="battle-vital">
            <div class="battle-vital-head"><span>${se(e.player.codename)}<small class="player-en">${se(e.player.codenameEn||"")}</small></span><strong>${e.player.hp} / ${e.player.maxHp}</strong></div>
            <div class="bar hp"><i style="width:${r}%"></i></div>
            <small>AC ${ni(e).value}・宣告 ${t.playerPlot??"—"}（fumble ${d.fumble?`1–${d.fumble}`:"無"}）</small>
          </div>
          <div class="battle-vital enemy">
            <div class="battle-vital-head"><span>${se(i?Ii(e,i.name):"—")}</span><strong>${a?"∞":`${i?.hp??0} / ${i?.maxHp??0}`}</strong></div>
            <div class="bar enemy"><i style="width:${a?100:Math.max(0,Math.round((i?.hp??0)/(i?.maxHp||1)*100))}%"></i></div>
            <small>AC ${i?.ac??0}・速度上限 ${i?.speed??0}・宣告 ${i?.plot??"?"}</small>
          </div>
        </div>

        <div class="battle-enemy-list">
          ${t.enemies.map(m=>`<button class="battle-enemy ${m.alive?"":"down"} ${m.id===i?.id?"targeted":""}" data-action="battle-target" data-id="${m.id}" ${!l||!m.alive?"disabled":""}>
                <span class="battle-enemy-face mark">${se(m.name.slice(0,1))}</span>
                <span class="battle-enemy-name"><strong>${se(Ii(e,m.name))}</strong><small>速度 ${m.speed}・宣告 ${m.plot??"?"}・AC ${m.ac}</small></span>
                <span class="battle-enemy-hp">${m.alive?m.unbeatable?"∞":`${m.hp}/${m.maxHp}`:"倒下"}</span>
              </button>`).join("")}
        </div>

        ${(()=>{const m=t.civilians.find(S=>S.alive);return m?m.status==="saved"?`<div class="battle-civilian saved"><span class="micro">被捲入 / 已庇護</span><strong>${se(m.name)}</strong><small>你讓這個人活了下來。警戒下降。</small></div>`:m.status==="killed"?`<div class="battle-civilian killed"><span class="micro">被捲入 / 已死亡</span><strong>${se(m.name)}</strong><small>刻印已記錄。沒有人會為此鼓掌。</small></div>`:`<div class="battle-civilian">
            <div><span class="micro">被捲入</span><strong>${se(m.name)}</strong><small>縮在掩體後。任何速度都能攻擊速度 0。</small></div>
            ${l?'<div class="civilian-actions"><button class="civilian-btn protect" data-action="battle-civilian" data-mode="protect">保護<small>警戒 -4</small></button><button class="civilian-btn kill" data-action="battle-civilian" data-mode="kill">殺害<small>刻印 +3・警戒 +10</small></button></div>':""}
          </div>`:""})()}


        ${s?o?`<div class="battle-plot-panel">
                  <div class="plot-copy">
                    <span class="micro">PLOT / 暗盤宣告</span>
                    <strong>${t.playerPlot===null?"選擇本回合速度":`宣告速度 ${t.playerPlot}・${Di(t.playerPlot).name}`}</strong>
                    <small>速度愈高愈先行動，但 d20 ≤ 宣告值 會 fumble。對手的速度在你確定前不會公開。</small>
                  </div>
                  <div class="plot-field-status">
                    <span class="plot-field-label">戰場狀態 / FIELD</span>
                    ${E.map(m=>`<span class="field-chip ${m.cls} ${m.alive?"alive":"down"}">${se(m.name)}<small>${m.alive?m.role:"倒下"}</small></span>`).join("")}
                  </div>
                  <div class="plot-actions">
                    <span class="plot-hidden">對手：???</span>
                    <button class="btn btn-primary btn-small" data-action="battle-confirm-plot" ${t.playerPlot===null?"disabled":""}>確定速度</button>
                  </div>
                </div>`:l?`${h?`<div class="battle-range-panel">
                    <div><span class="micro">RANGE / 射程預覽</span><strong>${se(h.name)}・${yo(h.style,h.range)}</strong><small>${h.style==="melee"?"只能攻擊與你速度相同或相差 1 的目標；速度 0 例外。":h.style==="ranged"?"只能攻擊與你速度相同或相差 2 的目標；速度 0 例外。":"支援異能；速度 0 例外。"} 點擊敵人站姿或下方名字出招。</small></div>
                    <button class="execute-btn" data-action="battle-use-skill" ${M?"":"disabled"}><span>EXECUTE</span><small>${i?M?`執行 → ${se(i.name)}`:"目標超出間合":"未瞄準"}</small></button>
                    <button class="btn btn-ghost btn-small" data-action="battle-cancel-skill">取消</button>
                  </div>`:""}
                  <div class="battle-skills-head"><span class="micro">你的異能 / 4</span><small>近戰用 STR・遠程用 DEX・速度 0 無視射程</small></div>
                  <div class="battle-skills">${R}</div>
                  ${(()=>{const m=ps.get(e.player.ultimateId??"edge");return`<button class="battle-ultimate-btn ${t.ultimateUsed?"used":""}" data-action="battle-ultimate" ${!l||t.ultimateUsed?"disabled":""}>
                      <span>必殺奧義 / ONCE PER BATTLE</span>
                      <strong>${se(e.player.ultimateName||m.name)}</strong>
                      <small>${se(e.player.ultimateNameEn||m.en)}・${t.ultimateUsed?"本場已使用":se(m.tagline)}</small>
                    </button>`})()}
                  <div class="battle-actions battle-actions-secondary">
                    <button class="battle-action" data-action="battle-action" data-id="guard"><strong>防禦</strong><small>AC +3／回復 1 肉體</small></button>
                    <button class="battle-action danger" data-action="battle-action" data-id="power"><strong>顯現</strong><small>侵蝕 +${ba(e).cost}／群體或高傷害</small></button>
                    <button class="battle-action" data-action="battle-action" data-id="talk"><strong>交涉</strong><small>魅力／延遲對手・不穩定</small></button>
                    <button class="battle-action" data-action="battle-action" data-id="flee"><strong>撤退</strong><small>敏捷／失敗被追擊</small></button>
                  </div>
                  <p class="battle-note">${a?"這個人沒有顯現。他不需要。所有攻擊選項的勝率都是 0.0%。":`本回合宣告 ${t.playerPlot}（${d.name}）／目標 ${i?.plot??0}，間合 ${P}。近戰只能打 ±1，遠程 ±2；速度 0 例外。d20 若為 ${d.fumble?`1–${d.fumble}`:"——"} 會 fumble。`}</p>`:'<div class="battle-wait"><span class="live-dot"></span>敵人行動中……</div>':`<div class="battle-result ${t.status}">
                <span class="micro">${c}</span>
                <div class="event-text">${Ta(t.result??"戰鬥結束。")}</div>
                <button class="battle-end-button" data-action="battle-continue"><span>END OF BATTLE</span><small>結束戰鬥・時間恢復流動</small></button>
              </div>`}
        </div>
      </div>
    </div>
  </div>`}function hx(){const t=$l(L);if(!t)return"";const e=L,n=zi(e),i=t.portrait?Ea(t.portrait):In(t.scene??n.scene),a=t.id==="kanda_ambush"||t.id==="interrogation"||t.id==="last_choice"||t.id==="kanda_arrives",r=!!t.result,s=e.lastRoll;return`
  <div class="event-overlay ${r?"result-mode":""}" role="dialog" aria-modal="true" aria-label="${se(t.title)}">
    <div class="event-panel ${t.portrait?"portrait-centered":""}">
      <div class="event-side ${t.portrait?"has-portrait":"no-portrait"}">
        <div class="event-art" style="background-image:url('${i}')"></div>
        <div class="event-side-shade"></div>
        <div class="event-chapter">${se(t.chapter)}</div>
        ${t.speaker?`<div class="event-speaker"><span>${se(t.speaker)}</span><small>${t.portrait==="kanda"?"現代智人・刑警":"超越者"}</small></div>`:""}
        <div class="event-art-stamp">${r?"判定":"事件"}</div>
      </div>
      <div class="event-main">
        <div class="event-kicker">
          <span>${se(t.chapter)}</span>
          <span class="mono">${String(ya(e.hour).day).padStart(2,"0")}日目 ${ya(e.hour).time}</span>
          ${t.portrait==="kanda"?'<span class="kanda-meta">最強現代智人</span>':""}
          ${a?'<span class="lethal">交戰評估 0.0%</span>':""}
        </div>
        <div class="event-top">
          <h2>${se(t.title)}</h2>
        </div>
        <div class="event-scroll">
          ${r?fx(t.result,t.resultTone??"neutral",s):`<div class="event-text">${Ta(Yu(e,t.text))}</div>`}
        </div>
        <div class="event-choice-area">
        ${r?'<div class="event-actions"><button class="btn btn-primary btn-wide" data-action="dismiss-result"><span>繼續</span><small>時間將恢復流動</small></button></div>':`<div class="event-choices">
                ${t.choices.map((o,l)=>`<button class="choice ${o.disabled?"disabled":""}" data-action="choose" data-event="${t.id}" data-choice="${o.id}" data-choice-index="${l}" ${o.disabled?"disabled":""}>
                      <span class="choice-index">${String(l+1).padStart(2,"0")}</span>
                      <span class="choice-strength"><strong>${se(o.label)}</strong>${o.hint?`<small>${se(o.hint)}</small>`:""}</span>
                    </button>`).join("")}
              </div>
              <div class="event-foot">
                <span class="live-dot"></span><span>時間暫停中</span><span>選擇會留下紀錄</span>
              </div>`}
        </div>
      </div>
    </div>
  </div>`}function fx(t,e,n){return`
    <div class="result-box ${e}">
      <span class="result-label">${e==="danger"?"代價":e==="good"?"結果":"之後"}</span>
      <div class="event-text">${Ta(t)}</div>
    </div>
    ${n?`<div class="roll-card ${n.success?"success":"fail"}">
            <div class="roll-die">d20<strong>${n.roll}</strong></div>
            <div class="roll-math">
              <strong>${se(n.label)}</strong>
              <span>${n.roll} ${Xu(n.statMod)} ${n.extra>=0?"+":""}${n.extra} = <b>${n.total}</b> / DC ${n.dc}</span>
            </div>
            <span class="roll-verdict">${n.success?"成功":"失敗"}</span>
          </div>`:""}`}function px(){if(!Fe.drawer)return"";const t=L;let e="資訊",n="";return Fe.drawer==="log"?(e="72 小時紀錄",n=`<div class="drawer-log">${qu(t,120)}</div>`):Fe.drawer==="rank"?(e="排名與神田",n=`${Zu(t)}${Ku(t)}`):(e="羈絆",n=`
      <div class="drawer-bonds">
        ${t.bonds.map(i=>`
          <button class="drawer-bond ${t.contactTarget===i.id?"selected":""}" data-action="contact-bond" data-id="${i.id}">
            <span class="bond-avatar">${se(i.name.slice(0,1))}</span>
            <span><strong>${i.name}</strong><small>${i.relation}・好感度 ${i.level*10}／100${i.level>=6?"・可參戰":""}</small><em>${se(i.description)}</em></span>
          </button>`).join("")}
        <p class="fine">連絡可降低侵蝕 ${8+(t.bonds.find(i=>i.id===t.contactTarget)?.level??1)*2} 左右，但會增加裏八咫監視。</p>
      </div>`),`
  <div class="drawer-backdrop" data-action="close-drawer">
    <aside class="drawer panel paper" role="dialog" aria-modal="true" aria-label="${e}" data-drawer-panel>
      <header class="drawer-head"><h2>${e}</h2><button class="icon-btn" data-action="close-drawer" aria-label="關閉">×</button></header>
      <div class="drawer-strength">${n}</div>
    </aside>
  </div>`}function ws(){return Fe.modal?`
    <div class="modal-backdrop" data-action="close-modal">
      <div class="modal panel paper" role="dialog" aria-modal="true" data-modal-panel>
        <button class="icon-btn modal-close" data-action="close-modal" aria-label="關閉">×</button>
        ${Fe.modal==="help"?mx():Fe.modal==="about"?gx():Fe.modal==="bgm"?_x():Fe.modal==="endings"?bx():Fe.modal==="roster"?vx():xx()}
      </div>
    </div>`:""}function mx(){return`
    <div class="modal-head"><span class="micro">規則 / RULES</span><h2>72小時</h2></div>
    <div class="help-strength">
      <p class="lead">你是「超越者」——學名 Homo transscendens，英語 Overman，又叫新人類。世界把你們歸類為癌細胞；裏八咫的 Project Ignis 負責決定哪一顆癌細胞還能繼續分裂。<br><br>活到閉幕，累積 100 枚刻印，站上第一名。</p>
      <div class="help-grid">
        <div><h3>刻印</h3><p>殺死普通人 +3；殺死超越者 +30；破壞城市 +6。閉幕時未達 100 枚者會被回收。</p></div>
        <div><h3>侵蝕</h3><p>每次使用顯現都會推動「流變」、提高侵蝕率。60% 起獲得顯現增幅；破 100% 後每小時意志檢定，失敗三次就永久怪物化。</p></div>
        <div><h3>顯現增生</h3><p>侵蝕率突破 35%／60%／85% 時，會長出新的顯現。每次從三個隨機能力中選一個；核心顯現則在出生時隨機寫入，無法更換。</p></div>
        <div><h3>羈絆</h3><p>連絡羈絆能降低侵蝕，但會提高裏八咫監視。羈絆 ≥8 可解鎖逃亡。失去羈絆會讓你更難回頭。</p></div>
        <div><h3>AC／護甲</h3><p>AC＝護甲基礎＋敏捷修正（受護甲上限）＋顯現加值。部分核心顯現會改用知性或體魄計算 AC。防彈背心、結晶外殼可在事件中取得。</p></div>
        <div><h3>警戒指數</h3><p>殺戮與破壞會提高警戒指數。第 48 小時，神田隼人抵達。警戒指數高到一定程度，他會開始找你。</p></div>
        <div><h3>神田隼人</h3><p>被稱為最強現代智人的人類。沒有顯現，沒有改造。表面身分是警視廳刑警，交戰勝率 0.0%。</p></div>
        <div><h3>d20</h3><p>檢定為 d20 + 能力修正 + 情境修正。自然 20 必成功，自然 1 必失敗。主屬性在創角時 +2。</p></div>
      </div>
      <div class="help-note">
        <strong>速度表</strong>
        <span>${hs.map(t=>`${t.value} ${t.name}（${t.fumble?`1–${t.fumble}`:"無 fumble"}）`).join("／")}</span>
      </div>
      <div class="help-note">
        <strong>神田的衛星</strong>
        <span>據說他擁有一顆衛星，能從軌道投放名為「魔劍」的高科技武器。沒有人知道完整的運作方式——只知道被他盯上的人，從來沒有贏過。有人說那不是武器，是一整套寫在天上的程序：當你抬頭，判決已經下來了。</span>
      </div>
      <div class="help-note warning">
        <strong>裏八咫的處置</strong>
        <span>敗給神田，或向外界洩露 Project Ignis 規則的超越者，會立刻被裏八咫處決。因此，神田幾乎沒有關於超越者的情報，只把這些案件當成「使用超人類力量的殺人事件」。他不需要理解你們；他只需要逮捕你們。</span>
      </div>
      <div class="help-note">
        <strong>操作</strong>
        <span>點選行動方針 → 時間自動推進；事件發生時時間暫停。可切換 1×–8× 或手動 +1 小時。空白鍵可暫停／繼續。</span>
      </div>
      <div class="help-note warning">
        <strong>內容提醒</strong>
        <span>本作包含暴力、死亡、精神侵蝕、制度性暴力與對人性的剝奪。所有角色與機構均為虛構。</span>
      </div>
    </div>`}function gx(){return`
    <div class="modal-head"><span class="micro">內容提醒 / CONTENT</span><h2>這不是英雄故事</h2></div>
    <div class="help-strength">
      <p class="lead">《流變計畫》Project Ignis 是一款繁體中文的 72 小時生存模擬。你會被隨機分配能力值、核心顯現與城市，然後被丟進一個不能對外求助的獵殺遊戲。</p>
      <p>遊戲討論權力如何把「異常」變成可拋棄的資源，也討論一個人如何在被要求變成怪物的時候，仍然抓住幾條名為羈絆的線。超越者被視為癌細胞；神田隼人則被稱為最強現代智人。</p>
      <p>本作借用《Double Cross》TRPG 的侵蝕率、顯現與角色卡語彙作為靈感，並將之改寫成原創規則與世界觀；未重製任何官方規則文字。角色與機構均為虛構。</p>
      <div class="help-note"><strong>建議</strong><span>第一次遊玩請先看「遊戲說明」。如果你不想看到暴力或精神崩壞描寫，請不要開始。</span></div>
      <div class="about-actions">
        <button class="link" data-action="modal" data-modal="help">查看規則</button>
        <button class="link" data-action="toggle-motion">${vt.reduceMotion?"開啟動態效果":"減少動態效果"}</button>
        <button class="link" data-action="toggle-mute">${vt.muted?"開啟音效":"靜音"}</button>
      </div>
    </div>`}function _x(){const t=[{id:"auto",name:"自動",en:"AUTO",note:"依場景切換：標題／城市／警戒／戰鬥／結局。"},{id:"title",name:"Empty City／空城",en:"CC0",note:"yd。慢速、荒涼的城市主題；適合標題與角色創建。"},{id:"city",name:"Mirrorshade／鏡影",en:"CC0",note:"cinameng。短循環 dub techno，適合雨夜城市探索。"},{id:"tension",name:"Dark Shrine／暗祠",en:"CC0",note:"qubodup／yd。低頻、壓迫的警戒與事件曲。"},{id:"battle",name:"Cynic Battle／冷眼之戰",en:"CC0",note:"Ferk／cynicmusic。92 秒無縫戰鬥循環。"},{id:"ending",name:"Whispers in the Fog／霧中低語",en:"CC0",note:"Ruhinre。短而安靜的結局／廢墟循環。"}];return`
    <div class="modal-head"><span class="micro">音訊 / BGM</span><h2>選擇背景音樂</h2></div>
    <div class="help-strength">
      <p class="lead">設定了 5 首場景曲，另加 100 首 CC0 曲庫；全部可商用，也可直接放進 RPG Maker 專案。選擇會立即套用並記住。</p>
      <div class="bgm-presets">
        ${t.map(e=>`<button class="bgm-preset ${vt.bgm===e.id?"active":""}" data-action="set-bgm" data-bgm="${e.id}">
          <strong>${e.name}</strong>
          <small>${e.en}</small>
        </button>`).join("")}
      </div>
      <p class="bgm-selected-note">${se(t.find(e=>e.id===vt.bgm)?.note??"選擇自動或手動指定場景曲。")}</p>
      <div class="music-library">
        <div class="music-library-head"><span>100 首 CC0 曲庫 / LIBRARY</span><small>點選立即播放</small></div>
        <div class="music-library-grid">
          ${Cd.map(e=>`<button class="library-track ${vt.bgm===`library:${e.id}`?"active":""}" data-action="set-bgm" data-bgm="library:${e.id}" title="${se(e.en)} / ${e.duration}s">
            <span>${se(e.name)}</span>
            <small>${se(e.en)}・${e.duration}s</small>
          </button>`).join("")}
        </div>
      </div>
      <div class="help-note"><strong>注意</strong><span>「自動」會跟隨遊戲狀態；手動選擇後會固定播放，直到你改回自動。一次只會播放一首，切換時舊曲會先停止。音效仍受右上角「靜音」控制。完整授權見 <code>public/audio/CREDITS.md</code> 與 <code>public/audio/library/CREDITS.md</code>。</span></div>
      <div class="about-actions"><button class="link" data-action="close-modal">回到遊戲</button></div>
    </div>`}function vx(){return`
    <div class="modal-head"><span class="micro">PERSONNEL / 100 NAMES</span><h2>人物名鑑</h2></div>
    <div class="help-body">
      <div class="archive-progress"><strong>100<small>人</small></strong><div class="bar"><i style="width:100%"></i></div><span>10 姓 × 10 名・含 5 名重要敵人</span></div>
      <p class="lead">名鑑中的每個人都有一個名字、一個陣營，以及一個可能在任何城市遇見你理由。重要敵人保留生成式頭像；其餘以程序化站姿呈現。</p>
      <div class="roster-grid">
        ${Gu.map(t=>`<article class="roster-card ${t.important?"important":""}">
          <div class="roster-portrait">${t.portrait?`<span class="roster-face" style="background-image:url('${Ea(t.portrait)}')"></span>`:Qn(t.spriteSeed,{name:t.name,role:t.threat>=4?"enemy":"civilian",variant:t.portrait})}</div>
          <div class="roster-info">
            <span class="micro">${t.important?"重要敵對者":t.faction}</span>
            <strong>${se(t.name)}</strong>
            <small>${se(t.alias)}・${se(t.role)}</small>
            <div class="roster-tags"><span>${t.mbti}</span><span>${se(t.ability)}</span><span>威脅 ${t.threat}/5</span></div>
            <em>${se(t.note)}</em>
          </div>
        </article>`).join("")}
      </div>
      <div class="about-actions"><button class="link" data-action="close-modal">回到遊戲</button></div>
    </div>`}function bx(){const t=new Set(Ss()),e=Wa.filter(i=>t.has(i.id)).length,n=[...new Set(Wa.map(i=>i.familyTitle))];return`
    <div class="modal-head"><span class="micro">ARCHIVE / 108 ENDINGS</span><h2>結局檔案館</h2></div>
    <div class="help-strength">
      <div class="archive-progress">
        <strong>${e}<small>/108</small></strong>
        <div class="bar"><i style="width:${e/108*100}%"></i></div>
        <span>12 個命運家族 × 9 名見證者</span>
      </div>
      <p class="lead">同一個結局，會因為最後還留在你身邊的人是誰，而成為不同的故事。</p>
      <div class="archive-families">
        ${n.map(i=>{const a=Wa.filter(r=>r.familyTitle===i);return`<section class="archive-family">
            <h3>${se(i)}<small>${a.filter(r=>t.has(r.id)).length}/9</small></h3>
            <div class="archive-grid">
              ${a.map(r=>{const s=t.has(r.id);return`<article class="archive-card ${s?"unlocked":"locked"}">
                  <span class="archive-stamp">${s?se(r.stamp):"？"}</span>
                  <strong>${s?se(r.title):"未解鎖"}</strong>
                  <small>${s?se(r.condition):`${se(r.variantTitle)}・條件未知`}</small>
                  <i>${s?"已記錄":"未達成"}</i>
                </article>`}).join("")}
            </div>
          </section>`}).join("")}
      </div>
      <div class="about-actions"><button class="link" data-action="close-modal">回到遊戲</button></div>
    </div>`}function xx(){return`
    <div class="modal-head"><span class="micro">選單 / MENU</span><h2>要放棄這一局嗎？</h2></div>
    <div class="help-strength">
      <p>目前進度會保留在存檔中；你可以回到標題後再繼續。若選擇重新開始，本次存檔會被覆蓋。</p>
      <div class="restart-actions">
        <button class="btn btn-ghost" data-action="close-modal"><span>繼續遊戲</span></button>
        <button class="btn btn-ghost" data-action="go-title"><span>回到標題</span></button>
        <button class="btn btn-danger" data-action="confirm-restart"><span>重新開始</span><small>覆蓋存檔</small></button>
      </div>
      <div class="restart-meta">
        <span>存檔：${L.phase==="play"?"自動":"—"}</span>
        <span>音效：${vt.muted?"關":"開"}</span>
        <span>動態：${vt.reduceMotion?"減弱":"完整"}</span>
      </div>
      <div class="restart-links">
        <button class="link" data-action="modal" data-modal="help">遊戲說明</button>
        <button class="link" data-action="toggle-mute">${vt.muted?"開啟音效":"靜音"}</button>
        <button class="link" data-action="toggle-motion">${vt.reduceMotion?"開啟動態":"減少動態"}</button>
      </div>
    </div>`}function yx(){const t=L,e=kb(t),n=ii(t),i=ex(t.ending);return`
  <div class="screen ending-screen tone-${e.tone}">
    <div class="ending-bg" style="background-image:url('${i}')"></div>
    <div class="ending-shade"></div>
    <div class="ending-panel">
      <div class="ending-kicker"><span>PROJECT IGNIS・閉幕</span><span class="mono">${Ru}:00:00</span></div>
      <div class="ending-stamp">${e.stamp}</div>
      <h1>${e.title}</h1>
      <h2>${e.subtitle}</h2>
      <div class="ending-text">${Ta(t.endingText??e.text)}</div>
      <div class="ending-stats">
        <div><span>刻印</span><strong>${t.player.marks}</strong></div>
        <div><span>排名</span><strong>${n.rank}<small>/${n.total}</small></strong></div>
        <div><span>侵蝕</span><strong>${t.player.encroachment}%</strong></div>
        <div><span>警戒指數</span><strong>${t.player.heat}</strong></div>
        <div><span>羈絆</span><strong>${Fn(t)}</strong></div>
        <div><span>城市</span><strong class="small">${zi(t).name}</strong></div>
      </div>
      <div class="ending-actions">
        <button class="btn btn-primary" data-action="new-game"><span>再抽一次</span><small>新的能力值、核心顯現與城市</small></button>
        <button class="btn btn-ghost" data-action="modal" data-modal="endings"><span>結局檔案</span><small>${Ss().length} / 108</small></button>
        <button class="btn btn-ghost" data-action="go-title"><span>回到標題</span></button>
      </div>
      <p class="ending-foot">你走了 ${t.player.killsNormal} 條普通人的命，${t.player.killsOverman} 個同類。神田隼人從未敗北。</p>
    </div>
    <div class="ending-side">
      <div class="ending-side-art" style="background-image:url('${Ea("kanda")}')"></div>
      <p>「你活下來了。<br>這不代表你贏了。」</p>
      <span>— 神田隼人</span>
    </div>
  </div>`}function wd(){const t=gs??tr();gs=null,Hl(),L=ar(t),L.phase="creation",Pu(L),Fe.statAnimated=!1,Qe(L),Ge.unlock(),Ge.sfx("confirm"),Ie()}function Sx(){const t=zl();if(!t){Ya("找不到存檔","danger"),Ie();return}L=t,L.phase==="creation"&&!L.creation.rolled&&Ts(L),L.phase==="play"&&(L.speed=1),Ge.unlock(),Ie()}function Mx(){if(!L.creation.abilityId){Ya("請先選擇一項顯現","danger");return}if(L.creation.codename.trim()||(L.creation.codename="鴉"),(L.creation.codenameEn??"").trim()||(L.creation.codenameEn=rr(L)),!L.creation.ultimateId){Ya("請先選擇必殺奧義","danger");return}if(!L.creation.mainStat){Ya("請先選擇一項主屬性","danger");return}Nu(L),Qe(L),Ge.unlock(),Ge.sfx("confirm"),Ie()}function Ju(t,e){Nb(L,t,e),Qe(L),L.ending?Ge.sfx("danger"):Ge.sfx("dice"),Ie()}function Qu(){Ub(L),L.speed===0&&(L.speed=1),Qe(L),Ge.sfx("click"),Ie()}function Ex(){L.phase!=="play"||L.pending||(Bl(L),Qe(L),Ge.sfx(L.ending?"danger":"click"),Ie())}function Tx(){Hl(),L=ar(tr()),Fe.modal=null,Fe.drawer=null,L.phase="title",Ie()}function Ax(){vt.muted=!vt.muted,Gl(),Ge.setMuted(vt.muted),vt.muted||Ge.unlock(),Ie()}function wx(){vt.reduceMotion=!vt.reduceMotion,document.documentElement.classList.toggle("reduce-motion",vt.reduceMotion),Gl(),Ie()}Ni.addEventListener("click",t=>{const e=t.target.closest("[data-action]");if(!e)return;const n=e.dataset.action;if(n&&!e.hasAttribute("disabled"))switch(n){case"new-game":wd();break;case"continue":Sx();break;case"start-run":Mx();break;case"select-ability":{L.creation.abilityId=e.dataset.id??null,Qe(L),Ge.unlock(),Ge.sfx("click"),Ie();break}case"answer-question":{yv(L,Number(e.dataset.index??0)),Fe.statAnimated=!1,Qe(L),Ge.sfx(L.creation.step==="roll"?"confirm":"click"),Ie();break}case"restart-questions":{Pu(L),L.creation.codename=L.creation.codename||"鴉",Qe(L),Ge.sfx("click"),Ie();break}case"reroll-stats":{Sv(L),Fe.statAnimated=!1,Qe(L),Ge.sfx("dice"),Ie();break}case"clear-avatar":{L.phase==="creation"&&(L.creation.avatar=null,Qe(L),Ie());break}case"gender":{L.phase==="creation"&&(L.creation.gender=e.dataset.gender??"unspecified",Qe(L),Ge.sfx("click"),Ie());break}case"ultimate":{if(L.phase==="creation"){const i=L.creation.ultimateChoices.find(a=>a.id===e.dataset.id);i&&(L.creation.ultimateId=i.id,L.creation.ultimateName=i.name,L.creation.ultimateNameEn=i.en,Qe(L),Ge.sfx("click"),Ie())}break}case"main-stat":{const i=e.dataset.stat;Mv(L,i),Qe(L),Ge.sfx("click"),Ie();break}case"set-stance":{const i=e.dataset.stance;zu(L,i),Qe(L),Ge.sfx("click"),Ie();break}case"contact-bond":{const i=e.dataset.id;i&&(wb(L,i),Qe(L),Ge.sfx("bond"),Ie());break}case"speed":{vl(L,Number(e.dataset.speed??1)),Qe(L),Ge.sfx("click"),Ie();break}case"toggle-pause":{vl(L,L.speed>0?0:1),Qe(L),Ge.sfx("click"),Ie();break}case"advance":Ex();break;case"choose":Ju(e.dataset.event??"",e.dataset.choice??"");break;case"battle-begin":{Bv(L),Qe(L),Ge.sfx("danger"),Ie();break}case"battle-ultimate":{const i=L.battle?.log.length??0;Vv(L),Qe(L),Ge.sfx(So(i)),Ie();break}case"battle-civilian":{Wv(L,e.dataset.mode==="kill"?"kill":"protect"),Qe(L),Ge.sfx(e.dataset.mode==="kill"?"danger":"bond"),Ie();break}case"battle-skill":{Nv(L,e.dataset.id??""),Qe(L),Ge.sfx("click"),Ie();break}case"battle-avatar":{hd(L,e.dataset.id??""),Qe(L),Ge.sfx("click"),Ie();break}case"battle-use-skill":{const i=L.battle?.log.length??0;Gv(L),Qe(L),Ge.sfx(So(i)),Ie();break}case"battle-cancel-skill":{L.battle&&(L.battle.selectedSkill=null),Qe(L),Ie();break}case"battle-target":{hd(L,e.dataset.id??""),Qe(L),Ge.sfx("click"),Ie();break}case"battle-plot":{$v(L,Number(e.dataset.speed??0)),Qe(L),Ge.sfx("click"),Ie();break}case"battle-confirm-plot":{zv(L),Qe(L),Ge.sfx("confirm"),Ie();break}case"battle-action":{const i=L.battle?.log.length??0;Hv(L,e.dataset.id??""),Qe(L),Ge.sfx(So(i)),Ie();break}case"battle-continue":{Xv(L),Qe(L),Ge.sfx("confirm"),Ie();break}case"dismiss-result":Qu();break;case"modal":Fe.modal=e.dataset.modal??null,Fe.drawer=null,Ie();break;case"close-modal":Fe.modal=null,Ie();break;case"confirm-restart":Fe.modal=null,wd();break;case"go-title":Tx();break;case"drawer":Fe.drawer=e.dataset.drawer??null,Ie();break;case"close-drawer":Fe.drawer=null,Ie();break;case"toggle-mute":Ax();break;case"toggle-motion":wx();break;case"set-bgm":{vt.bgm=e.dataset.bgm??"auto",Gl(),Ge.unlock(),Ie();break}}});function Rx(t){if(L.phase!=="creation")return;if(!t.type.startsWith("image/")){Ya("請選擇圖片檔","danger");return}const e=new FileReader;e.onload=()=>{const n=new Image;n.onload=()=>{const a=document.createElement("canvas");a.width=320,a.height=320;const r=a.getContext("2d");if(!r)return;const s=Math.max(320/n.width,320/n.height),o=n.width*s,l=n.height*s;r.drawImage(n,(320-o)/2,(320-l)/2,o,l),L.creation.avatar=a.toDataURL("image/jpeg",.82),Qe(L),Ie()},n.src=String(e.result)},e.readAsDataURL(t)}Ni.addEventListener("change",t=>{const e=t.target;e.id==="avatar-upload"&&e.files?.[0]&&Rx(e.files[0])});Ni.addEventListener("input",t=>{const e=t.target;e.id==="codename"&&L.phase==="creation"&&(L.creation.codename=e.value.slice(0,8)),e.id==="codename-en"&&L.phase==="creation"&&(L.creation.codenameEn=e.value.slice(0,28))});Ni.addEventListener("change",()=>{L.phase==="creation"&&Qe(L)});document.addEventListener("keydown",t=>{if(t.key==="Escape"){Fe.modal?(Fe.modal=null,Ie()):Fe.drawer&&(Fe.drawer=null,Ie());return}if(t.code==="Space"&&L.phase==="play"&&!L.pending){const e=t.target.tagName;if(e==="INPUT"||e==="TEXTAREA"||e==="BUTTON")return;t.preventDefault(),vl(L,L.speed>0?0:1),Qe(L),Ie()}});function ju(){Ge.unlock()}document.addEventListener("pointerdown",ju);document.addEventListener("keydown",ju);let Rd=performance.now(),Zr=0;function eh(t){const e=Math.min(250,t-Rd);if(Rd=t,L.phase==="play"&&!L.pending&&!L.battle&&L.speed>0&&!Fe.modal){Zr+=e*L.speed;let n=0;for(;Zr>=ml&&L.phase==="play"&&!L.pending&&n++<12&&(Zr-=ml,Bl(L),Qe(L),Ie(),!L.ending););}else Zr=0;requestAnimationFrame(eh)}function Ci(){const t=L.phase==="play"?$l(L):null,e=L.phase==="play"?ii(L):null;return{phase:L.phase,hour:L.hour,day:ya(L.hour).day,time:ya(L.hour).time,city:L.phase==="play"?zi(L).name:null,ability:L.phase==="play"?ba(L).name:L.creation.abilityId,marks:L.phase==="play"?L.player.marks:null,encroachment:L.phase==="play"?L.player.encroachment:null,heat:L.phase==="play"?L.player.heat:null,hp:L.phase==="play"?`${L.player.hp}/${L.player.maxHp}`:null,armor:L.phase==="play"?ni(L).armor.name:null,ac:L.phase==="play"?ni(L).value:null,mainStat:L.phase==="play"?L.player.mainStat:L.creation.mainStat,manifested:L.phase==="play"?L.player.manifested:[],bonds:L.phase==="play"?Fn(L):null,rank:e?.rank??null,ending:L.ending,battle:L.battle?{enemies:L.battle.enemies.map(n=>({name:n.name,hp:n.hp,speed:n.speed,alive:n.alive})),target:L.battle.targetId,playerSpeed:L.battle.playerSpeed,status:L.battle.status,round:L.battle.round,playerHp:L.player.hp,actions:["strike","probe","guard","power","talk","flee"]}:null,pending:t?{id:t.id,title:t.title,result:t.result??null,choices:t.choices.map(n=>({id:n.id,label:n.label,disabled:n.disabled}))}:null,logCount:L.log.length}}const Cx={snapshot:Ci,reset(t){return Hl(),L=ar(t??tr()),L.phase="title",gs=null,Fe.modal=null,Fe.drawer=null,Ie(),Ci()},setSeed(t){return gs=t,{seed:t}},step(t){const e=Math.max(1,Math.min(24,Math.round(t/ml)));let n=0;for(;n<e&&L.phase==="play"&&!L.pending;)Bl(L),n++;return Qe(L),Ie(),{...Ci(),advanced:n}},choose(t,e){return Ju(t,e),Ci()},dismiss(){return Qu(),Ci()},setStance(t){return zu(L,t),Qe(L),Ie(),Ci()},unlockAudio(){return Ge.unlock().then(()=>Ge.level())},audioLevel(){return Ge.level()},quickStart(t){const e=ar(t??tr());Ts(e);const n=e.creation;n.abilityId=n.abilityId??"core_array",n.mainStat=Object.keys(n.stats).sort((a,r)=>n.stats[r]-n.stats[a])[0],n.codename="測試";const i=n.ultimateChoices[0];return i&&(n.ultimateId=i.id,n.ultimateName=i.name,n.ultimateNameEn=i.en),Nu(e),L=e,Qe(L),Ie(),Ci()}};globalThis.__OHMYGAME_PLAYTEST__=Cx;Ie();requestAnimationFrame(eh);
