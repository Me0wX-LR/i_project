var Ih=Object.defineProperty;var Dh=(t,e,n)=>e in t?Ih(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ze=(t,e,n)=>Dh(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();const Jd=[{id:"underwater-ambient-pad",name:"水下氛圍鋪底",en:"Underwater Ambient Pad",mood:"水下",style:"氛圍",file:"audio/library/001-underwater-ambient-pad.ogg",author:"isaiah658",duration:17},{id:"ambient-relaxing-loop",name:"寧靜氛圍循環",en:"Ambient Relaxing Loop",mood:"舒緩",style:"氛圍",file:"audio/library/002-ambient-relaxing-loop.ogg",author:"isaiah658",duration:25},{id:"abstraction-4ee6896a70defe43375a8518",name:"Sketchbook 2024-02-21_02",en:"Sketchbook 2024-02-21_02",mood:"未指定",style:"詼諧",file:"audio/library/003-abstraction-4ee6896a70defe43375a8518.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:30},{id:"abstraction-8050c41087b975e7bd74e5df",name:"Sketchbook 2024-08-01",en:"Sketchbook 2024-08-01",mood:"未指定",style:"芯片音樂",file:"audio/library/004-abstraction-8050c41087b975e7bd74e5df.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:30},{id:"abstraction-cd749f11dd097e915b4107ac",name:"VGMA Challenge 29",en:"VGMA Challenge 29",mood:"未指定",style:"電子",file:"audio/library/005-abstraction-cd749f11dd097e915b4107ac.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:30},{id:"abstraction-a02d499b250e3a92fdba66ed",name:"VGMA Challenge 05",en:"VGMA Challenge 05",mood:"未指定",style:"爵士",file:"audio/library/006-abstraction-a02d499b250e3a92fdba66ed.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:30},{id:"abstraction-a536fa50aec4ddfea7dde032",name:"VGMA Challenge 18",en:"VGMA Challenge 18",mood:"未指定",style:"未指定",file:"audio/library/007-abstraction-a536fa50aec4ddfea7dde032.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:31},{id:"abstraction-bbe4c30e22403b677f526e45",name:"Ludum Dare 32 04",en:"Ludum Dare 32 04",mood:"未指定",style:"電子",file:"audio/library/008-abstraction-bbe4c30e22403b677f526e45.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:32},{id:"abstraction-cfc56edbe16dc83cde0d0344",name:"Ludum Dare 38 09",en:"Ludum Dare 38 09",mood:"未指定",style:"芯片音樂",file:"audio/library/009-abstraction-cfc56edbe16dc83cde0d0344.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:32},{id:"heavenly-loop",name:"天境循環",en:"Heavenly Loop",mood:"夢幻",style:"氛圍",file:"audio/library/010-heavenly-loop.ogg",author:"isaiah658",duration:34},{id:"abstraction-3be812f737982a33fe28dc04",name:"VGMA Challenge 17",en:"VGMA Challenge 17",mood:"未指定",style:"未指定",file:"audio/library/011-abstraction-3be812f737982a33fe28dc04.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:34},{id:"abstraction-660328d005f5c812d0f52f63",name:"Patreon Challenge 12",en:"Patreon Challenge 12",mood:"未指定",style:"芯片音樂",file:"audio/library/012-abstraction-660328d005f5c812d0f52f63.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:36},{id:"happy-end-music",name:"快樂結尾",en:"happy end music",mood:"歡快",style:"合成樂曲",file:"audio/library/013-happy-end-music.ogg",author:"Igor Gundarev",duration:36},{id:"abstraction-75394c5b688daa78e5f73459",name:"Sketchbook 2024-10-14",en:"Sketchbook 2024-10-14",mood:"未指定",style:"鼓打貝斯",file:"audio/library/014-abstraction-75394c5b688daa78e5f73459.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:36},{id:"abstraction-a51cb573a413fd5a835ec6c2",name:"VGMA Challenge 28",en:"VGMA Challenge 28",mood:"未指定",style:"電子",file:"audio/library/015-abstraction-a51cb573a413fd5a835ec6c2.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:37},{id:"abstraction-b99be066361b26e25c07b3ad",name:"VGMA Challenge 01",en:"VGMA Challenge 01",mood:"未指定",style:"未指定",file:"audio/library/016-abstraction-b99be066361b26e25c07b3ad.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:39},{id:"abstraction-42d521c3eff005c80eb52792",name:"Sketchbook 2024-12-05",en:"Sketchbook 2024-12-05",mood:"未指定",style:"電子",file:"audio/library/017-abstraction-42d521c3eff005c80eb52792.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:39},{id:"abstraction-11f4db37c1809ac3fcead6ce",name:"VGMA Challenge 22",en:"VGMA Challenge 22",mood:"未指定",style:"詭異",file:"audio/library/018-abstraction-11f4db37c1809ac3fcead6ce.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:40},{id:"abstraction-587c74506a27fe4d51be8e7b",name:"Sketchbook 2024-04-24_03",en:"Sketchbook 2024-04-24_03",mood:"未指定",style:"氛圍",file:"audio/library/019-abstraction-587c74506a27fe4d51be8e7b.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:40},{id:"abstraction-5fa7326d9c740c438d185e07",name:"Ludum Dare 38 04",en:"Ludum Dare 38 04",mood:"未指定",style:"電子",file:"audio/library/020-abstraction-5fa7326d9c740c438d185e07.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:41},{id:"abstraction-65a04612ce40c711696d075b",name:"VGMA Challenge 20",en:"VGMA Challenge 20",mood:"未指定",style:"電子",file:"audio/library/021-abstraction-65a04612ce40c711696d075b.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:41},{id:"abstraction-0fa2b58312c2b15c4a6a0b08",name:"Patreon Challenge 13",en:"Patreon Challenge 13",mood:"未指定",style:"未指定",file:"audio/library/022-abstraction-0fa2b58312c2b15c4a6a0b08.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:43},{id:"abstraction-c70e608321db9b8dfe18784e",name:"Sketchbook 2024-05-01_02",en:"Sketchbook 2024-05-01_02",mood:"未指定",style:"詼諧",file:"audio/library/023-abstraction-c70e608321db9b8dfe18784e.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:44},{id:"abstraction-56b67c93c59de869834bd4a5",name:"Sketchbook 2024-05-29",en:"Sketchbook 2024-05-29",mood:"未指定",style:"放克",file:"audio/library/024-abstraction-56b67c93c59de869834bd4a5.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:44},{id:"abstraction-e90988e89ad0951cea816394",name:"Sketchbook 2024-06-16",en:"Sketchbook 2024-06-16",mood:"未指定",style:"氛圍",file:"audio/library/025-abstraction-e90988e89ad0951cea816394.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:45},{id:"abstraction-f1de31eeaca529c17c906dde",name:"Sketchbook 2024-12-15",en:"Sketchbook 2024-12-15",mood:"未指定",style:"未指定",file:"audio/library/026-abstraction-f1de31eeaca529c17c906dde.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:45},{id:"unsolved-investigation",name:"未解調查",en:"Unsolved Investigation",mood:"懸疑",style:"氛圍",file:"audio/library/027-unsolved-investigation.ogg",author:"isaiah658",duration:48},{id:"abstraction-38586ba5ee0890062c76b591",name:"Patreon Challenge 06",en:"Patreon Challenge 06",mood:"未指定",style:"詼諧",file:"audio/library/028-abstraction-38586ba5ee0890062c76b591.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:48},{id:"abstraction-3dfe3354a4cce53ab5ddcb82",name:"Sketchbook 2024-10-26",en:"Sketchbook 2024-10-26",mood:"未指定",style:"電子",file:"audio/library/029-abstraction-3dfe3354a4cce53ab5ddcb82.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:48},{id:"abstraction-6b13391bc1b3862dbf2cd5c9",name:"Sketchbook 2024-06-12",en:"Sketchbook 2024-06-12",mood:"未指定",style:"氛圍",file:"audio/library/030-abstraction-6b13391bc1b3862dbf2cd5c9.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:48},{id:"abstraction-dba2c0aae3bc394bac5622e5",name:"Ludum Dare 32 01",en:"Ludum Dare 32 01",mood:"未指定",style:"芯片音樂",file:"audio/library/031-abstraction-dba2c0aae3bc394bac5622e5.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:48},{id:"abstraction-36d4672d475a362f4c61d313",name:"Sketchbook 2024-05-22",en:"Sketchbook 2024-05-22",mood:"未指定",style:"放克",file:"audio/library/032-abstraction-36d4672d475a362f4c61d313.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:50},{id:"abstraction-c9405661a0c582a20bca1b45",name:"Sketchbook 2024-05-08",en:"Sketchbook 2024-05-08",mood:"未指定",style:"電子",file:"audio/library/033-abstraction-c9405661a0c582a20bca1b45.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:51},{id:"abstraction-9822a148da5254c79b75edd2",name:"Sketchbook 2024-11-29",en:"Sketchbook 2024-11-29",mood:"未指定",style:"電子",file:"audio/library/034-abstraction-9822a148da5254c79b75edd2.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:53},{id:"abstraction-417fa91b83fab8b8be52a4e5",name:"Sketchbook 2024-10-30",en:"Sketchbook 2024-10-30",mood:"未指定",style:"電子",file:"audio/library/035-abstraction-417fa91b83fab8b8be52a4e5.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:54},{id:"shrine",name:"神殿",en:"Shrine",mood:"神秘",style:"合成氛圍",file:"audio/library/036-shrine.ogg",author:"yd",duration:54},{id:"abstraction-b4976a7c25c1b112b43c16e1",name:"Sketchbook 2024-09-18",en:"Sketchbook 2024-09-18",mood:"未指定",style:"爵士",file:"audio/library/037-abstraction-b4976a7c25c1b112b43c16e1.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:55},{id:"abstraction-d32cba3e070abffb8c45fc60",name:"Ludum Dare 30 09",en:"Ludum Dare 30 09",mood:"未指定",style:"電子",file:"audio/library/038-abstraction-d32cba3e070abffb8c45fc60.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:56},{id:"abstraction-acf636f80c650a22f3f885d3",name:"Sketchbook 2024-07-07",en:"Sketchbook 2024-07-07",mood:"未指定",style:"氛圍",file:"audio/library/039-abstraction-acf636f80c650a22f3f885d3.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:56},{id:"abstraction-d7d18f07f39094c591df7967",name:"Ludum Dare 38 05",en:"Ludum Dare 38 05",mood:"未指定",style:"氛圍",file:"audio/library/040-abstraction-d7d18f07f39094c591df7967.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:56},{id:"abstraction-d1984968ebc23adf8e086da3",name:"Sketchbook 2024-01-24_02",en:"Sketchbook 2024-01-24_02",mood:"未指定",style:"爵士",file:"audio/library/041-abstraction-d1984968ebc23adf8e086da3.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:56},{id:"abstraction-9f0088d23b8792aa7e9b933e",name:"Sketchbook 2024-05-15",en:"Sketchbook 2024-05-15",mood:"未指定",style:"詼諧",file:"audio/library/042-abstraction-9f0088d23b8792aa7e9b933e.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:56},{id:"abstraction-ab023b86b7656e6a6b5a9fd5",name:"Sketchbook 2024-08-07",en:"Sketchbook 2024-08-07",mood:"未指定",style:"鼓打貝斯",file:"audio/library/043-abstraction-ab023b86b7656e6a6b5a9fd5.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:56},{id:"abstraction-01bff13f05e762766741d30c",name:"Sketchbook 2024-12-18",en:"Sketchbook 2024-12-18",mood:"未指定",style:"電子",file:"audio/library/044-abstraction-01bff13f05e762766741d30c.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:57},{id:"abstraction-65011fe3656ae45a20fc4eca",name:"Patreon Challenge 01",en:"Patreon Challenge 01",mood:"未指定",style:"氛圍",file:"audio/library/045-abstraction-65011fe3656ae45a20fc4eca.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:58},{id:"abstraction-b1eea75318d5df6b564a8b63",name:"Sketchbook 2024-07-04",en:"Sketchbook 2024-07-04",mood:"未指定",style:"電子",file:"audio/library/046-abstraction-b1eea75318d5df6b564a8b63.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:59},{id:"abstraction-d20307161d504210a0dd287e",name:"Sketchbook 2024-12-04",en:"Sketchbook 2024-12-04",mood:"未指定",style:"爵士",file:"audio/library/047-abstraction-d20307161d504210a0dd287e.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:59},{id:"abstraction-ba9d4f506da2eeb54b90650e",name:"Ludum Dare 30 04",en:"Ludum Dare 30 04",mood:"未指定",style:"氛圍",file:"audio/library/048-abstraction-ba9d4f506da2eeb54b90650e.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:59},{id:"abstraction-2b35cc0da1cd91fd39fb97b2",name:"Patreon Challenge 03",en:"Patreon Challenge 03",mood:"未指定",style:"放克",file:"audio/library/049-abstraction-2b35cc0da1cd91fd39fb97b2.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:60},{id:"abstraction-48c0afc43396d4848ac55f72",name:"Sketchbook 2024-03-20_01",en:"Sketchbook 2024-03-20_01",mood:"未指定",style:"氛圍",file:"audio/library/050-abstraction-48c0afc43396d4848ac55f72.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:60},{id:"abstraction-697e27f1877faadf79297a05",name:"Ludum Dare 38 06",en:"Ludum Dare 38 06",mood:"未指定",style:"未指定",file:"audio/library/051-abstraction-697e27f1877faadf79297a05.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:60},{id:"abstraction-77714daf9535c97397a6c564",name:"Sketchbook 2024-10-23",en:"Sketchbook 2024-10-23",mood:"未指定",style:"鼓打貝斯",file:"audio/library/052-abstraction-77714daf9535c97397a6c564.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:60},{id:"abstraction-847a4ac6e2513f295fcfa44f",name:"Ludum Dare 38 07",en:"Ludum Dare 38 07",mood:"未指定",style:"詭異",file:"audio/library/053-abstraction-847a4ac6e2513f295fcfa44f.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:60},{id:"abstraction-b4910ff43f4c78548ab131f1",name:"Sketchbook 2024-04-24_02",en:"Sketchbook 2024-04-24_02",mood:"未指定",style:"詼諧",file:"audio/library/054-abstraction-b4910ff43f4c78548ab131f1.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:60},{id:"abstraction-89630b0f4468f7f959e36ec0",name:"Sketchbook 2024-12-21",en:"Sketchbook 2024-12-21",mood:"未指定",style:"電子",file:"audio/library/055-abstraction-89630b0f4468f7f959e36ec0.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:61},{id:"abstraction-f23d9e696a256a1881c5d216",name:"Sketchbook 2024-07-03",en:"Sketchbook 2024-07-03",mood:"未指定",style:"爵士",file:"audio/library/056-abstraction-f23d9e696a256a1881c5d216.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:61},{id:"abstraction-19820782cc037983afcb0bbf",name:"Sketchbook 2024-06-19",en:"Sketchbook 2024-06-19",mood:"未指定",style:"沙漠",file:"audio/library/057-abstraction-19820782cc037983afcb0bbf.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:62},{id:"abstraction-b70e3121eb127f7991f11c65",name:"Ludum Dare 38 03",en:"Ludum Dare 38 03",mood:"未指定",style:"電子",file:"audio/library/058-abstraction-b70e3121eb127f7991f11c65.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:62},{id:"abstraction-d24b2fc54f8f5cc12465fdc4",name:"Patreon Challenge 14",en:"Patreon Challenge 14",mood:"未指定",style:"未指定",file:"audio/library/059-abstraction-d24b2fc54f8f5cc12465fdc4.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:62},{id:"abstraction-fe0be50849c38fd4c1dc88de",name:"Patreon Challenge 08",en:"Patreon Challenge 08",mood:"未指定",style:"電子",file:"audio/library/060-abstraction-fe0be50849c38fd4c1dc88de.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:62},{id:"abstraction-9e5c350d3e66baa56b4b806d",name:"Ludum Dare 32 05",en:"Ludum Dare 32 05",mood:"未指定",style:"氛圍",file:"audio/library/061-abstraction-9e5c350d3e66baa56b4b806d.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:64},{id:"abstraction-261059f19b4352047ea7bcb3",name:"Patreon Challenge 02",en:"Patreon Challenge 02",mood:"未指定",style:"放克",file:"audio/library/062-abstraction-261059f19b4352047ea7bcb3.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:64},{id:"abstraction-485c2342c9a329e48dfcce91",name:"Ludum Dare 38 02",en:"Ludum Dare 38 02",mood:"未指定",style:"電子",file:"audio/library/063-abstraction-485c2342c9a329e48dfcce91.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:64},{id:"abstraction-60b62ec497e3862fbb6871ba",name:"Ludum Dare 32 03",en:"Ludum Dare 32 03",mood:"未指定",style:"電子",file:"audio/library/064-abstraction-60b62ec497e3862fbb6871ba.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:64},{id:"abstraction-9858b87007c41a4dfe66b437",name:"Patreon Challenge 05",en:"Patreon Challenge 05",mood:"未指定",style:"氛圍",file:"audio/library/065-abstraction-9858b87007c41a4dfe66b437.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:64},{id:"abstraction-a0192b0f37ebd32ccf86ba4b",name:"Sketchbook 2024-12-26",en:"Sketchbook 2024-12-26",mood:"未指定",style:"芯片音樂",file:"audio/library/066-abstraction-a0192b0f37ebd32ccf86ba4b.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:64},{id:"abstraction-a5f8e96841acf650a1563bc6",name:"Ludum Dare 38 10",en:"Ludum Dare 38 10",mood:"未指定",style:"詭異",file:"audio/library/067-abstraction-a5f8e96841acf650a1563bc6.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:64},{id:"abstraction-d59a68c17577a03de3385912",name:"Ludum Dare 30 07",en:"Ludum Dare 30 07",mood:"未指定",style:"芯片音樂",file:"audio/library/068-abstraction-d59a68c17577a03de3385912.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:65},{id:"abstraction-63416340171aeb04a4ec672d",name:"Sketchbook 2024-08-21",en:"Sketchbook 2024-08-21",mood:"未指定",style:"電子",file:"audio/library/069-abstraction-63416340171aeb04a4ec672d.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:65},{id:"blue-meadow-in-green-sky",name:"綠空藍色草甸",en:"Blue Meadow In Green Sky",mood:"冒險",style:"振盪器合成樂",file:"audio/library/070-blue-meadow-in-green-sky.ogg",author:"yd",duration:67},{id:"abstraction-d5f1287e8f571f4ef4848914",name:"Patreon Challenge 11",en:"Patreon Challenge 11",mood:"未指定",style:"芯片音樂",file:"audio/library/071-abstraction-d5f1287e8f571f4ef4848914.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:67},{id:"abstraction-5c72fc0919a9fa4c2d291eae",name:"Ludum Dare 38 01",en:"Ludum Dare 38 01",mood:"未指定",style:"電子",file:"audio/library/072-abstraction-5c72fc0919a9fa4c2d291eae.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:67},{id:"abstraction-9ccab202734d1e91a94d3042",name:"Sketchbook 2024-11-30",en:"Sketchbook 2024-11-30",mood:"未指定",style:"爵士",file:"audio/library/073-abstraction-9ccab202734d1e91a94d3042.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:68},{id:"abstraction-1d66697cf4be45cc42790e5c",name:"Sketchbook 2024-05-01_01",en:"Sketchbook 2024-05-01_01",mood:"未指定",style:"氛圍",file:"audio/library/074-abstraction-1d66697cf4be45cc42790e5c.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:68},{id:"abstraction-49e6725f0c1cc61bcfda36c5",name:"Sketchbook 2024-09-22",en:"Sketchbook 2024-09-22",mood:"未指定",style:"電子",file:"audio/library/075-abstraction-49e6725f0c1cc61bcfda36c5.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:68},{id:"abstraction-3d3afd3623e069fbd0d6bd18",name:"Ludum Dare 38 08",en:"Ludum Dare 38 08",mood:"未指定",style:"詭異",file:"audio/library/076-abstraction-3d3afd3623e069fbd0d6bd18.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:69},{id:"abstraction-bf39c38204f8beba23115aa8",name:"Sketchbook 2024-03-06_02",en:"Sketchbook 2024-03-06_02",mood:"未指定",style:"氛圍",file:"audio/library/077-abstraction-bf39c38204f8beba23115aa8.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:70},{id:"abstraction-e0ec39d94eec6de3a0f38550",name:"Sketchbook 2024-04-24_01",en:"Sketchbook 2024-04-24_01",mood:"未指定",style:"詼諧",file:"audio/library/078-abstraction-e0ec39d94eec6de3a0f38550.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:72},{id:"abstraction-ef1eec8282f434eaad86dde1",name:"Sketchbook 2024-02-21_01",en:"Sketchbook 2024-02-21_01",mood:"未指定",style:"詼諧",file:"audio/library/079-abstraction-ef1eec8282f434eaad86dde1.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:72},{id:"the-journey-begins",name:"旅程啟程",en:"the journey begins",mood:"影視",style:"冒險樂曲",file:"audio/library/080-the-journey-begins.ogg",author:"Igor Gundarev",duration:74},{id:"abstraction-4818ca6a5b5c7b602fbf9eb7",name:"Sketchbook 2024-10-16",en:"Sketchbook 2024-10-16",mood:"未指定",style:"氛圍",file:"audio/library/081-abstraction-4818ca6a5b5c7b602fbf9eb7.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:75},{id:"abstraction-74f0cf483217e76032f13ed4",name:"Sketchbook 2024-11-20",en:"Sketchbook 2024-11-20",mood:"未指定",style:"爵士",file:"audio/library/082-abstraction-74f0cf483217e76032f13ed4.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:76},{id:"abstraction-379e9ed152721fe63d7d9380",name:"Patreon Challenge 07",en:"Patreon Challenge 07",mood:"未指定",style:"爵士",file:"audio/library/083-abstraction-379e9ed152721fe63d7d9380.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:77},{id:"challenge-accepted",name:"接受挑戰",en:"Challenge Accepted",mood:"動感",style:"動作芯片音樂",file:"audio/library/084-challenge-accepted.ogg",author:"DJ CrisP",duration:78},{id:"abstraction-18d847ce7af1d0230a733358",name:"Ludum Dare 32 02",en:"Ludum Dare 32 02",mood:"未指定",style:"氛圍",file:"audio/library/085-abstraction-18d847ce7af1d0230a733358.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:78},{id:"abstraction-26cf0c4f51458714e6d8cde7",name:"Sketchbook 2024-06-26",en:"Sketchbook 2024-06-26",mood:"未指定",style:"氛圍",file:"audio/library/086-abstraction-26cf0c4f51458714e6d8cde7.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:79},{id:"abstraction-110c843f2885eabd0a9d814c",name:"Sketchbook 2024-02-28_02",en:"Sketchbook 2024-02-28_02",mood:"未指定",style:"氛圍",file:"audio/library/087-abstraction-110c843f2885eabd0a9d814c.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:79},{id:"abstraction-4a26538e864fc80eff0c5e75",name:"Ludum Dare 30 08",en:"Ludum Dare 30 08",mood:"未指定",style:"電子",file:"audio/library/088-abstraction-4a26538e864fc80eff0c5e75.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:83},{id:"abstraction-cbab25ec294d006d878da66d",name:"Sketchbook 2024-02-07",en:"Sketchbook 2024-02-07",mood:"未指定",style:"鼓打貝斯",file:"audio/library/089-abstraction-cbab25ec294d006d878da66d.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:85},{id:"abstraction-8871daf0339f800fbe198a5b",name:"Sketchbook 2024-03-20_02",en:"Sketchbook 2024-03-20_02",mood:"未指定",style:"氛圍",file:"audio/library/090-abstraction-8871daf0339f800fbe198a5b.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:85},{id:"abstraction-8c2b64234b241112c8d54382",name:"Ludum Dare 30 03",en:"Ludum Dare 30 03",mood:"未指定",style:"詭異",file:"audio/library/091-abstraction-8c2b64234b241112c8d54382.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:86},{id:"abstraction-ea7ef5046ecf080c734c5257",name:"Sketchbook 2024-08-13",en:"Sketchbook 2024-08-13",mood:"未指定",style:"氛圍",file:"audio/library/092-abstraction-ea7ef5046ecf080c734c5257.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:89},{id:"abstraction-010fad54d780f3cb3ad6e8cc",name:"Sketchbook 2024-03-30_02",en:"Sketchbook 2024-03-30_02",mood:"未指定",style:"氛圍",file:"audio/library/093-abstraction-010fad54d780f3cb3ad6e8cc.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:90},{id:"abstraction-4e6836606331898f144502c1",name:"Sketchbook 2024-09-25",en:"Sketchbook 2024-09-25",mood:"未指定",style:"低保真",file:"audio/library/094-abstraction-4e6836606331898f144502c1.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:90},{id:"abstraction-ca1b59609b9f64504fb1c035",name:"Sketchbook 2024-03-06_01",en:"Sketchbook 2024-03-06_01",mood:"未指定",style:"氛圍",file:"audio/library/095-abstraction-ca1b59609b9f64504fb1c035.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:90},{id:"abstraction-3916654edca95b5dd7e4afc3",name:"Sketchbook 2024-01-24_01",en:"Sketchbook 2024-01-24_01",mood:"未指定",style:"氛圍",file:"audio/library/096-abstraction-3916654edca95b5dd7e4afc3.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:98},{id:"abstraction-2bd74cd8b63648ee01b5866d",name:"Ludum Dare 30 01",en:"Ludum Dare 30 01",mood:"未指定",style:"未指定",file:"audio/library/097-abstraction-2bd74cd8b63648ee01b5866d.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:100},{id:"abstraction-0edd5955f1182cf768701769",name:"Sketchbook 2024-02-28_01",en:"Sketchbook 2024-02-28_01",mood:"未指定",style:"動態",file:"audio/library/098-abstraction-0edd5955f1182cf768701769.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:100},{id:"abstraction-555d119bfb231cfe250b76e3",name:"Sketchbook 2024-04-10",en:"Sketchbook 2024-04-10",mood:"未指定",style:"爵士",file:"audio/library/099-abstraction-555d119bfb231cfe250b76e3.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:102},{id:"abstraction-1b02d180e9e102a6a28aa30f",name:"Sketchbook 2024-11-13",en:"Sketchbook 2024-11-13",mood:"未指定",style:"氛圍",file:"audio/library/100-abstraction-1b02d180e9e102a6a28aa30f.ogg",author:"Abstraction / Tallbeard Studios (Ben Burnes)",duration:102}],Tc=new Map(Jd.map(t=>[t.id,t])),fa="./",Nh={title:{src:`${fa}audio/title-empty-city.ogg`,volume:.42},city:{src:`${fa}audio/city-mirrorshade.mp3`,volume:.38},tension:{src:`${fa}audio/tension-dark-shrine.ogg`,volume:.4},battle:{src:`${fa}audio/battle-cynic.ogg`,volume:.46},ending:{src:`${fa}audio/ending-whispers.ogg`,volume:.38}};class Uh{constructor(e){ze(this,"ctx",null);ze(this,"master",null);ze(this,"muted",!1);ze(this,"started",!1);ze(this,"bgm",null);ze(this,"mood","title");ze(this,"variant",0);ze(this,"libraryId",null);this.muted=e}async unlock(){if(this.started){this.bgm?.paused&&this.playBgm(),this.ctx?.state==="suspended"&&await this.ctx.resume();return}if(!this.started){this.started=!0;try{const e=window.AudioContext||window.webkitAudioContext;if(e){const n=new e;this.ctx=n;const i=n.createGain();i.gain.value=this.muted?0:.7,i.connect(n.destination),this.master=i,n.state==="suspended"&&await n.resume()}}catch{this.ctx=null}this.libraryId?this.playLibraryTrack(this.libraryId):this.playBgm()}this.ctx?.state==="suspended"&&await this.ctx.resume()}setMuted(e){this.muted=e,this.bgm&&(this.bgm.muted=e),this.master&&this.ctx&&this.master.gain.setTargetAtTime(e?0:.7,this.ctx.currentTime,.08)}setIntensity(e){}sfx(e){if(!this.ctx||!this.master||this.muted)return;const n=this.ctx,i=n.currentTime,a=n.createGain();if(a.connect(this.master),e==="click"){const r=n.createOscillator();r.type="square",r.frequency.setValueAtTime(320,i),r.frequency.exponentialRampToValueAtTime(160,i+.05),a.gain.setValueAtTime(.035,i),a.gain.exponentialRampToValueAtTime(.001,i+.06),r.connect(a),r.start(i),r.stop(i+.07);return}if(e==="confirm"){const r=n.createOscillator();r.type="triangle",r.frequency.setValueAtTime(220,i),r.frequency.exponentialRampToValueAtTime(440,i+.12),a.gain.setValueAtTime(.05,i),a.gain.exponentialRampToValueAtTime(.001,i+.35),r.connect(a),r.start(i),r.stop(i+.36);return}if(e==="danger"){const r=n.createOscillator();r.type="sawtooth",r.frequency.setValueAtTime(90,i),r.frequency.linearRampToValueAtTime(70,i+.5);const s=n.createBiquadFilter();s.type="lowpass",s.frequency.value=500,a.gain.setValueAtTime(.08,i),a.gain.exponentialRampToValueAtTime(.001,i+.55),r.connect(s),s.connect(a),r.start(i),r.stop(i+.56);return}if(e==="miss"){const r=n.createBuffer(1,Math.floor(n.sampleRate*.18),n.sampleRate),s=r.getChannelData(0);for(let c=0;c<s.length;c++){const d=c/s.length;s[c]=(Math.random()*2-1)*(1-d)*.55}const o=n.createBufferSource();o.buffer=r;const l=n.createBiquadFilter();l.type="bandpass",l.frequency.setValueAtTime(900,i),l.frequency.exponentialRampToValueAtTime(260,i+.16),l.Q.value=1.4,a.gain.setValueAtTime(.06,i),a.gain.exponentialRampToValueAtTime(.001,i+.18),o.connect(l),l.connect(a),o.start(i);return}if(e==="dice"){for(let r=0;r<3;r++){const s=i+r*.045,o=n.createOscillator();o.type="square",o.frequency.setValueAtTime(700+r*90,s);const l=n.createGain();l.gain.setValueAtTime(.02,s),l.gain.exponentialRampToValueAtTime(.001,s+.035),o.connect(l),l.connect(this.master),o.start(s),o.stop(s+.04)}return}if(e==="mark"||e==="bond"){const r=n.createOscillator();r.type="sine",r.frequency.setValueAtTime(e==="mark"?520:392,i),r.frequency.exponentialRampToValueAtTime(e==="mark"?760:523,i+.18),a.gain.setValueAtTime(.04,i),a.gain.exponentialRampToValueAtTime(.001,i+.4),r.connect(a),r.start(i),r.stop(i+.41)}}setMood(e,n=0){this.libraryId===null&&this.mood===e&&this.variant===n||(this.libraryId=null,this.mood=e,this.variant=n,this.playBgm())}setLibraryTrack(e){Tc.get(e)&&(this.libraryId===e&&this.bgm&&!this.bgm.paused||(this.libraryId=e,this.started&&this.playLibraryTrack(e)))}playLibraryTrack(e){const n=Tc.get(e);n&&this.playSource(`${fa}${n.file}`,.42,`library:${e}`)}playBgm(){if(!this.started)return;const e=Nh[this.mood];e&&this.playSource(e.src,e.volume,this.mood)}playSource(e,n,i){if(!this.started||this.bgm&&this.bgm.dataset.trackKey===i&&!this.bgm.paused)return;this.bgm&&(this.bgm.pause(),this.bgm.currentTime=0,this.bgm.removeAttribute("src"));const a=new Audio;a.dataset.trackKey=i,a.src=e,a.loop=!0,a.preload="auto",a.volume=n,a.muted=this.muted,this.bgm=a,a.play().catch(()=>{})}level(){return this.bgm&&!this.bgm.paused?1:0}currentTrack(){return this.bgm?.src??""}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dl="186",kh=0,Ac=1,Oh=2,ns=1,Fh=2,Ya=3,$i=0,un=1,Bn=2,ti=0,Ja=1,wc=2,Rc=3,Cc=4,Bh=5,pa=100,$h=101,zh=102,Hh=103,Gh=104,Vh=200,Wh=201,Xh=202,qh=203,Qd=204,jd=205,Yh=206,Zh=207,Kh=208,Jh=209,Qh=210,jh=211,ef=212,tf=213,nf=214,Do=0,No=1,Uo=2,ir=3,ko=4,Oo=5,Fo=6,Bo=7,eu=0,af=1,rf=2,Gn=0,tu=1,nu=2,iu=3,Nl=4,au=5,ru=6,su=7,ou=300,zi=301,Sa=302,$s=303,zs=304,Ts=306,$o=1e3,jn=1001,zo=1002,Gt=1003,sf=1004,Mr=1005,Jt=1006,Hs=1007,Ni=1008,vn=1009,lu=1010,cu=1011,ar=1012,Ul=1013,Wn=1014,zn=1015,Xn=1016,kl=1017,Ol=1018,rr=1020,du=35902,uu=35899,hu=1021,fu=1022,Cn=1023,ai=1026,Ui=1027,pu=1028,Fl=1029,Hi=1030,Bl=1031,$l=1033,is=33776,as=33777,rs=33778,ss=33779,Ho=35840,Go=35841,Vo=35842,Wo=35843,Xo=36196,qo=37492,Yo=37496,Zo=37488,Ko=37489,cs=37490,Jo=37491,Qo=37808,jo=37809,el=37810,tl=37811,nl=37812,il=37813,al=37814,rl=37815,sl=37816,ol=37817,ll=37818,cl=37819,dl=37820,ul=37821,hl=36492,fl=36494,pl=36495,ml=36283,gl=36284,ds=36285,vl=36286,of=3200,_l=0,lf=1,gi="",Kt="srgb",us="srgb-linear",hs="linear",mt="srgb",Gs=7680,cf=519,df=512,uf=513,hf=514,zl=515,ff=516,pf=517,Hl=518,mf=519,mu=35044,Lc="300 es",Hn=2e3,sr=2001;function gf(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function fs(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function vf(){const t=fs("canvas");return t.style.display="block",t}const Pc={};function ps(...t){const e="THREE."+t.shift();console.log(e,...t)}function gu(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function $e(...t){t=gu(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ot(...t){t=gu(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function ba(...t){const e=t.join(" ");e in Pc||(Pc[e]=!0,$e(...t))}function _f(t,e,n){return new Promise(function(i,a){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:a();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const bf={[Do]:No,[Uo]:Fo,[ko]:Bo,[ir]:Oo,[No]:Do,[Fo]:Uo,[Bo]:ko,[Oo]:ir};class Wi{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const r=a.indexOf(n);r!==-1&&a.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vs=Math.PI/180,bl=180/Math.PI;function _i(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[t&255]+qt[t>>8&255]+qt[t>>16&255]+qt[t>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[n&63|128]+qt[n>>8&255]+"-"+qt[n>>16&255]+qt[n>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function it(t,e,n){return Math.max(e,Math.min(n,t))}function yf(t,e){return(t%e+e)%e}function Ws(t,e,n){return(1-n)*t+n*e}function $n(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function vt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const dc=class dc{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),a=Math.sin(n),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*a+e.x,this.y=r*a+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};dc.prototype.isVector2=!0;let Xe=dc;class Ca{constructor(e=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=a}static slerpFlat(e,n,i,a,r,s,o){let l=i[a+0],c=i[a+1],d=i[a+2],h=i[a+3],u=r[s+0],p=r[s+1],_=r[s+2],y=r[s+3];if(h!==y||l!==u||c!==p||d!==_){let g=l*u+c*p+d*_+h*y;g<0&&(u=-u,p=-p,_=-_,y=-y,g=-g);let f=1-o;if(g<.9995){const T=Math.acos(g),D=Math.sin(T);f=Math.sin(f*T)/D,o=Math.sin(o*T)/D,l=l*f+u*o,c=c*f+p*o,d=d*f+_*o,h=h*f+y*o}else{l=l*f+u*o,c=c*f+p*o,d=d*f+_*o,h=h*f+y*o;const T=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=T,c*=T,d*=T,h*=T}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,a,r,s){const o=i[a],l=i[a+1],c=i[a+2],d=i[a+3],h=r[s],u=r[s+1],p=r[s+2],_=r[s+3];return e[n]=o*_+d*h+l*p-c*u,e[n+1]=l*_+d*u+c*h-o*p,e[n+2]=c*_+d*p+o*u-l*h,e[n+3]=d*_-o*h-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,a){return this._x=e,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(a/2),h=o(r/2),u=l(i/2),p=l(a/2),_=l(r/2);switch(s){case"XYZ":this._x=u*d*h+c*p*_,this._y=c*p*h-u*d*_,this._z=c*d*_+u*p*h,this._w=c*d*h-u*p*_;break;case"YXZ":this._x=u*d*h+c*p*_,this._y=c*p*h-u*d*_,this._z=c*d*_-u*p*h,this._w=c*d*h+u*p*_;break;case"ZXY":this._x=u*d*h-c*p*_,this._y=c*p*h+u*d*_,this._z=c*d*_+u*p*h,this._w=c*d*h-u*p*_;break;case"ZYX":this._x=u*d*h-c*p*_,this._y=c*p*h+u*d*_,this._z=c*d*_-u*p*h,this._w=c*d*h+u*p*_;break;case"YZX":this._x=u*d*h+c*p*_,this._y=c*p*h+u*d*_,this._z=c*d*_-u*p*h,this._w=c*d*h-u*p*_;break;case"XZY":this._x=u*d*h-c*p*_,this._y=c*p*h-u*d*_,this._z=c*d*_+u*p*h,this._w=c*d*h+u*p*_;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],a=n[4],r=n[8],s=n[1],o=n[5],l=n[9],c=n[2],d=n[6],h=n[10],u=i+o+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(s-a)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(d-l)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(r-c)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(s-a)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,a=e._y,r=e._z,s=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+s*o+a*c-r*l,this._y=a*d+s*l+r*o-i*c,this._z=r*d+s*c+i*l-a*o,this._w=s*d-i*o-a*l-r*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,a=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,a=-a,r=-r,s=-s,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,n=Math.sin(n*c)/d,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+r*n,this._w=this._w*l+s*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+r*n,this._w=this._w*l+s*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const uc=class uc{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ic.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ic.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*a,this.y=r[1]*n+r[4]*i+r[7]*a,this.z=r[2]*n+r[5]*i+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,r=e.elements,s=1/(r[3]*n+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*n+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*n+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,a=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*a-o*i),d=2*(o*n-r*a),h=2*(r*i-s*n);return this.x=n+l*c+s*h-o*d,this.y=i+l*d+o*c-r*h,this.z=a+l*h+r*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*a,this.y=r[1]*n+r[5]*i+r[9]*a,this.z=r[2]*n+r[6]*i+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this.z=it(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this.z=it(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,a=e.y,r=e.z,s=n.x,o=n.y,l=n.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xs.copy(this).projectOnVector(e),this.sub(Xs)}reflect(e){return this.sub(Xs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return n*n+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const a=Math.sin(n)*e;return this.x=a*Math.sin(i),this.y=Math.cos(n)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};uc.prototype.isVector3=!0;let B=uc;const Xs=new B,Ic=new Ca,hc=class hc{constructor(e,n,i,a,r,s,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,a,r,s,o,l,c)}set(e,n,i,a,r,s,o,l,c){const d=this.elements;return d[0]=e,d[1]=a,d[2]=o,d[3]=n,d[4]=r,d[5]=l,d[6]=i,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,r=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],u=i[2],p=i[5],_=i[8],y=a[0],g=a[3],f=a[6],T=a[1],D=a[4],x=a[7],E=a[2],A=a[5],C=a[8];return r[0]=s*y+o*T+l*E,r[3]=s*g+o*D+l*A,r[6]=s*f+o*x+l*C,r[1]=c*y+d*T+h*E,r[4]=c*g+d*D+h*A,r[7]=c*f+d*x+h*C,r[2]=u*y+p*T+_*E,r[5]=u*g+p*D+_*A,r[8]=u*f+p*x+_*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*s*d-n*o*c-i*r*d+i*o*l+a*r*c-a*s*l}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*s-o*c,u=o*l-d*r,p=c*r-s*l,_=n*h+i*u+a*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=h*y,e[1]=(a*c-d*i)*y,e[2]=(o*i-a*s)*y,e[3]=u*y,e[4]=(d*n-a*l)*y,e[5]=(a*r-o*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(s*n-i*r)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,a,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-a*c,a*l,-a*(-c*s+l*o)+o+n,0,0,1),this}scale(e,n){return ba("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qs.makeScale(e,n)),this}rotate(e){return ba("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qs.makeRotation(-e)),this}translate(e,n){return ba("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qs.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};hc.prototype.isMatrix3=!0;let We=hc;const qs=new We,Dc=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nc=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xf(){const t={enabled:!0,workingColorSpace:us,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===mt&&(a.r=ni(a.r),a.g=ni(a.g),a.b=ni(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===mt&&(a.r=ya(a.r),a.g=ya(a.g),a.b=ya(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===gi?hs:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return ba("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return ba("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(a,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[us]:{primaries:e,whitePoint:i,transfer:hs,toXYZ:Dc,fromXYZ:Nc,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:Dc,fromXYZ:Nc,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),t}const st=xf();function ni(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ya(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ki;class Sf{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ki===void 0&&(Ki=fs("canvas")),Ki.width=e.width,Ki.height=e.height;const a=Ki.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=Ki}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=fs("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=ni(r[s]/255)*255;return i.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ni(n[i]/255)*255):n[i]=ni(n[i]);return{data:n,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Mf=0;class Gl{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=_i(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(Ys(a[s].image)):r.push(Ys(a[s]))}else r=Ys(a);i.url=r}return n||(e.images[this.uuid]=i),i}}function Ys(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Sf.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}let Ef=0;const Zs=new B;class Qt extends Wi{constructor(e=Qt.DEFAULT_IMAGE,n=Qt.DEFAULT_MAPPING,i=jn,a=jn,r=Jt,s=Ni,o=Cn,l=vn,c=Qt.DEFAULT_ANISOTROPY,d=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=_i(),this.name="",this.source=new Gl(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Zs).x}get height(){return this.source.getSize(Zs).y}get depth(){return this.source.getSize(Zs).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){$e(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){$e(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ou)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $o:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case zo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $o:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case zo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=ou;Qt.DEFAULT_ANISOTROPY=1;const fc=class fc{constructor(e=0,n=0,i=0,a=1){this.x=e,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,a){return this.x=e,this.y=n,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*n+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*n+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*n+s[7]*i+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,a,r;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],p=l[5],_=l[9],y=l[2],g=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-y)<.01&&Math.abs(_-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+y)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(c+1)/2,x=(p+1)/2,E=(f+1)/2,A=(d+u)/4,C=(h+y)/4,m=(_+g)/4;return D>x&&D>E?D<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(D),a=A/i,r=C/i):x>E?x<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(x),i=A/a,r=m/a):E<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(E),i=C/r,a=m/r),this.set(i,a,r,n),this}let T=Math.sqrt((g-_)*(g-_)+(h-y)*(h-y)+(u-d)*(u-d));return Math.abs(T)<.001&&(T=1),this.x=(g-_)/T,this.y=(h-y)/T,this.z=(u-d)/T,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this.z=it(this.z,e.z,n.z),this.w=it(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this.z=it(this.z,e,n),this.w=it(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fc.prototype.isVector4=!0;let Ct=fc;class Tf extends Wi{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n),this.textures=[];const a={width:e,height:n,depth:i.depth},r=new Qt(a),s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new Gl(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ln extends Tf{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class vu extends Qt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Af extends Qt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Es=class Es{constructor(e,n,i,a,r,s,o,l,c,d,h,u,p,_,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,a,r,s,o,l,c,d,h,u,p,_,y,g)}set(e,n,i,a,r,s,o,l,c,d,h,u,p,_,y,g){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=a,f[1]=r,f[5]=s,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=h,f[14]=u,f[3]=p,f[7]=_,f[11]=y,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Es().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,a=1/Ji.setFromMatrixColumn(e,0).length(),r=1/Ji.setFromMatrixColumn(e,1).length(),s=1/Ji.setFromMatrixColumn(e,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,a=e.y,r=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const u=s*d,p=s*h,_=o*d,y=o*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=p+_*c,n[5]=u-y*c,n[9]=-o*l,n[2]=y-u*c,n[6]=_+p*c,n[10]=s*l}else if(e.order==="YXZ"){const u=l*d,p=l*h,_=c*d,y=c*h;n[0]=u+y*o,n[4]=_*o-p,n[8]=s*c,n[1]=s*h,n[5]=s*d,n[9]=-o,n[2]=p*o-_,n[6]=y+u*o,n[10]=s*l}else if(e.order==="ZXY"){const u=l*d,p=l*h,_=c*d,y=c*h;n[0]=u-y*o,n[4]=-s*h,n[8]=_+p*o,n[1]=p+_*o,n[5]=s*d,n[9]=y-u*o,n[2]=-s*c,n[6]=o,n[10]=s*l}else if(e.order==="ZYX"){const u=s*d,p=s*h,_=o*d,y=o*h;n[0]=l*d,n[4]=_*c-p,n[8]=u*c+y,n[1]=l*h,n[5]=y*c+u,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=s*l}else if(e.order==="YZX"){const u=s*l,p=s*c,_=o*l,y=o*c;n[0]=l*d,n[4]=y-u*h,n[8]=_*h+p,n[1]=h,n[5]=s*d,n[9]=-o*d,n[2]=-c*d,n[6]=p*h+_,n[10]=u-y*h}else if(e.order==="XZY"){const u=s*l,p=s*c,_=o*l,y=o*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=u*h+y,n[5]=s*d,n[9]=p*h-_,n[2]=_*h-p,n[6]=o*d,n[10]=y*h+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wf,e,Rf)}lookAt(e,n,i){const a=this.elements;return hn.subVectors(e,n),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),di.crossVectors(i,hn),di.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),di.crossVectors(i,hn)),di.normalize(),Er.crossVectors(hn,di),a[0]=di.x,a[4]=Er.x,a[8]=hn.x,a[1]=di.y,a[5]=Er.y,a[9]=hn.y,a[2]=di.z,a[6]=Er.z,a[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,r=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],u=i[9],p=i[13],_=i[2],y=i[6],g=i[10],f=i[14],T=i[3],D=i[7],x=i[11],E=i[15],A=a[0],C=a[4],m=a[8],S=a[12],L=a[1],R=a[5],I=a[9],O=a[13],M=a[2],U=a[6],Y=a[10],V=a[14],te=a[3],q=a[7],Q=a[11],ie=a[15];return r[0]=s*A+o*L+l*M+c*te,r[4]=s*C+o*R+l*U+c*q,r[8]=s*m+o*I+l*Y+c*Q,r[12]=s*S+o*O+l*V+c*ie,r[1]=d*A+h*L+u*M+p*te,r[5]=d*C+h*R+u*U+p*q,r[9]=d*m+h*I+u*Y+p*Q,r[13]=d*S+h*O+u*V+p*ie,r[2]=_*A+y*L+g*M+f*te,r[6]=_*C+y*R+g*U+f*q,r[10]=_*m+y*I+g*Y+f*Q,r[14]=_*S+y*O+g*V+f*ie,r[3]=T*A+D*L+x*M+E*te,r[7]=T*C+D*R+x*U+E*q,r[11]=T*m+D*I+x*Y+E*Q,r[15]=T*S+D*O+x*V+E*ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],a=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],p=e[14],_=e[3],y=e[7],g=e[11],f=e[15],T=l*p-c*u,D=o*p-c*h,x=o*u-l*h,E=s*p-c*d,A=s*u-l*d,C=s*h-o*d;return n*(y*T-g*D+f*x)-i*(_*T-g*E+f*A)+a*(_*D-y*E+f*C)-r*(_*x-y*A+g*C)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],a=e[8],r=e[1],s=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return n*(s*d-o*c)-i*(r*d-o*l)+a*(r*c-s*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],p=e[11],_=e[12],y=e[13],g=e[14],f=e[15],T=n*o-i*s,D=n*l-a*s,x=n*c-r*s,E=i*l-a*o,A=i*c-r*o,C=a*c-r*l,m=d*y-h*_,S=d*g-u*_,L=d*f-p*_,R=h*g-u*y,I=h*f-p*y,O=u*f-p*g,M=T*O-D*I+x*R+E*L-A*S+C*m;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/M;return e[0]=(o*O-l*I+c*R)*U,e[1]=(a*I-i*O-r*R)*U,e[2]=(y*C-g*A+f*E)*U,e[3]=(u*A-h*C-p*E)*U,e[4]=(l*L-s*O-c*S)*U,e[5]=(n*O-a*L+r*S)*U,e[6]=(g*x-_*C-f*D)*U,e[7]=(d*C-u*x+p*D)*U,e[8]=(s*I-o*L+c*m)*U,e[9]=(i*L-n*I-r*m)*U,e[10]=(_*A-y*x+f*T)*U,e[11]=(h*x-d*A-p*T)*U,e[12]=(o*S-s*R-l*m)*U,e[13]=(n*R-i*S+a*m)*U,e[14]=(y*D-_*E-g*T)*U,e[15]=(d*E-h*D+u*T)*U,this}scale(e){const n=this.elements,i=e.x,a=e.y,r=e.z;return n[0]*=i,n[4]*=a,n[8]*=r,n[1]*=i,n[5]*=a,n[9]*=r,n[2]*=i,n[6]*=a,n[10]*=r,n[3]*=i,n[7]*=a,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),a=Math.sin(n),r=1-i,s=e.x,o=e.y,l=e.z,c=r*s,d=r*o;return this.set(c*s+i,c*o-a*l,c*l+a*o,0,c*o+a*l,d*o+i,d*l-a*s,0,c*l-a*o,d*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,a,r,s){return this.set(1,i,r,0,e,1,s,0,n,a,1,0,0,0,0,1),this}compose(e,n,i){const a=this.elements,r=n._x,s=n._y,o=n._z,l=n._w,c=r+r,d=s+s,h=o+o,u=r*c,p=r*d,_=r*h,y=s*d,g=s*h,f=o*h,T=l*c,D=l*d,x=l*h,E=i.x,A=i.y,C=i.z;return a[0]=(1-(y+f))*E,a[1]=(p+x)*E,a[2]=(_-D)*E,a[3]=0,a[4]=(p-x)*A,a[5]=(1-(u+f))*A,a[6]=(g+T)*A,a[7]=0,a[8]=(_+D)*C,a[9]=(g-T)*C,a[10]=(1-(u+y))*C,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let s=Ji.set(a[0],a[1],a[2]).length();const o=Ji.set(a[4],a[5],a[6]).length(),l=Ji.set(a[8],a[9],a[10]).length();r<0&&(s=-s),Tn.copy(this);const c=1/s,d=1/o,h=1/l;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=d,Tn.elements[5]*=d,Tn.elements[6]*=d,Tn.elements[8]*=h,Tn.elements[9]*=h,Tn.elements[10]*=h,n.setFromRotationMatrix(Tn),i.x=s,i.y=o,i.z=l,this}makePerspective(e,n,i,a,r,s,o=Hn,l=!1){const c=this.elements,d=2*r/(n-e),h=2*r/(i-a),u=(n+e)/(n-e),p=(i+a)/(i-a);let _,y;if(l)_=r/(s-r),y=s*r/(s-r);else if(o===Hn)_=-(s+r)/(s-r),y=-2*s*r/(s-r);else if(o===sr)_=-s/(s-r),y=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,a,r,s,o=Hn,l=!1){const c=this.elements,d=2/(n-e),h=2/(i-a),u=-(n+e)/(n-e),p=-(i+a)/(i-a);let _,y;if(l)_=1/(s-r),y=s/(s-r);else if(o===Hn)_=-2/(s-r),y=-(s+r)/(s-r);else if(o===sr)_=-1/(s-r),y=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Es.prototype.isMatrix4=!0;let yt=Es;const Ji=new B,Tn=new yt,wf=new B(0,0,0),Rf=new B(1,1,1),di=new B,Er=new B,hn=new B,Uc=new yt,kc=new Ca;class xi{constructor(e=0,n=0,i=0,a=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,a=this._order){return this._x=e,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const a=e.elements,r=a[0],s=a[4],o=a[8],l=a[1],c=a[5],d=a[9],h=a[2],u=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-it(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Uc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uc,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return kc.setFromEuler(this),this.setFromQuaternion(kc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class Vl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cf=0;const Oc=new B,Qi=new Ca,Yn=new yt,Tr=new B,Na=new B,Lf=new B,Pf=new Ca,Fc=new B(1,0,0),Bc=new B(0,1,0),$c=new B(0,0,1),zc={type:"added"},If={type:"removed"},ji={type:"childadded",child:null},Ks={type:"childremoved",child:null};class Nt extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new B,n=new xi,i=new Ca,a=new B(1,1,1);function r(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new yt},normalMatrix:{value:new We}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Qi.setFromAxisAngle(e,n),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(e,n){return Qi.setFromAxisAngle(e,n),this.quaternion.premultiply(Qi),this}rotateX(e){return this.rotateOnAxis(Fc,e)}rotateY(e){return this.rotateOnAxis(Bc,e)}rotateZ(e){return this.rotateOnAxis($c,e)}translateOnAxis(e,n){return Oc.copy(e).applyQuaternion(this.quaternion),this.position.add(Oc.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Fc,e)}translateY(e){return this.translateOnAxis(Bc,e)}translateZ(e){return this.translateOnAxis($c,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Tr.copy(e):Tr.set(e,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Na,Tr,this.up):Yn.lookAt(Tr,Na,this.up),this.quaternion.setFromRotationMatrix(Yn),a&&(Yn.extractRotation(a.matrixWorld),Qi.setFromRotationMatrix(Yn),this.quaternion.premultiply(Qi.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zc),ji.child=e,this.dispatchEvent(ji),ji.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(If),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zc),ji.child=e,this.dispatchEvent(ji),ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,e,Lf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,Pf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,a=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*a,r[13]+=i-r[1]*n-r[5]*i-r[9]*a,r[14]+=a-r[2]*n-r[6]*i-r[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(r(e.animations,l))}}if(n){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),h=s(e.shapes),u=s(e.skeletons),p=s(e.animations),_=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=a,i;function s(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Nt.DEFAULT_UP=new B(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ga extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Df={type:"move"};class Js{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ga,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ga,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ga,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let a=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),f=this._getHandJoint(c,y);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&u>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=n.getPose(e.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Df)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ga;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const _u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function Qs(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,n),this}setRGB(e,n,i,a=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.colorSpaceToWorking(this,a),this}setHSL(e,n,i,a=st.workingColorSpace){if(e=yf(e,1),n=it(n,0,1),i=it(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=Qs(s,r,e+1/3),this.g=Qs(s,r,e),this.b=Qs(s,r,e-1/3)}return st.colorSpaceToWorking(this,a),this}setStyle(e,n=Kt){function i(r){r!==void 0&&parseFloat(r)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:$e("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(r,16),n);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Kt){const i=_u[e.toLowerCase()];return i!==void 0?this.setHex(i,n):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ni(e.r),this.g=ni(e.g),this.b=ni(e.b),this}copyLinearToSRGB(e){return this.r=ya(e.r),this.g=ya(e.g),this.b=ya(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return st.workingToColorSpace(Yt.copy(this),e),Math.round(it(Yt.r*255,0,255))*65536+Math.round(it(Yt.g*255,0,255))*256+Math.round(it(Yt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.workingToColorSpace(Yt.copy(this),n);const i=Yt.r,a=Yt.g,r=Yt.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let l,c;const d=(o+s)/2;if(o===s)l=0,c=0;else{const h=s-o;switch(c=d<=.5?h/(s+o):h/(2-s-o),s){case i:l=(a-r)/h+(a<r?6:0);break;case a:l=(r-i)/h+2;break;case r:l=(i-a)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=st.workingColorSpace){return st.workingToColorSpace(Yt.copy(this),n),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Kt){st.workingToColorSpace(Yt.copy(this),e);const n=Yt.r,i=Yt.g,a=Yt.b;return e!==Kt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,n,i){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+n,ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ui),e.getHSL(Ar);const i=Ws(ui.h,Ar.h,n),a=Ws(ui.s,Ar.s,n),r=Ws(ui.l,Ar.l,n);return this.setHSL(i,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,a=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*a,this.g=r[1]*n+r[4]*i+r[7]*a,this.b=r[2]*n+r[5]*i+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new je;je.NAMES=_u;class Wl{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new je(e),this.density=n}clone(){return new Wl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Nf extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const An=new B,Zn=new B,js=new B,Kn=new B,ea=new B,ta=new B,Hc=new B,eo=new B,to=new B,no=new B,io=new Ct,ao=new Ct,ro=new Ct;class xn{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,a){a.subVectors(i,n),An.subVectors(e,n),a.cross(An);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,n,i,a,r){An.subVectors(a,n),Zn.subVectors(i,n),js.subVectors(e,n);const s=An.dot(An),o=An.dot(Zn),l=An.dot(js),c=Zn.dot(Zn),d=Zn.dot(js),h=s*c-o*o;if(h===0)return r.set(0,0,0),null;const u=1/h,p=(c*l-o*d)*u,_=(s*d-o*l)*u;return r.set(1-p-_,_,p)}static containsPoint(e,n,i,a){return this.getBarycoord(e,n,i,a,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,n,i,a,r,s,o,l){return this.getBarycoord(e,n,i,a,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Kn.x),l.addScaledVector(s,Kn.y),l.addScaledVector(o,Kn.z),l)}static getInterpolatedAttribute(e,n,i,a,r,s){return io.setScalar(0),ao.setScalar(0),ro.setScalar(0),io.fromBufferAttribute(e,n),ao.fromBufferAttribute(e,i),ro.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(io,r.x),s.addScaledVector(ao,r.y),s.addScaledVector(ro,r.z),s}static isFrontFacing(e,n,i,a){return An.subVectors(i,n),Zn.subVectors(e,n),An.cross(Zn).dot(a)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,a){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,i,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),An.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return xn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,a,r){return xn.getInterpolation(e,this.a,this.b,this.c,n,i,a,r)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,a=this.b,r=this.c;let s,o;ea.subVectors(a,i),ta.subVectors(r,i),eo.subVectors(e,i);const l=ea.dot(eo),c=ta.dot(eo);if(l<=0&&c<=0)return n.copy(i);to.subVectors(e,a);const d=ea.dot(to),h=ta.dot(to);if(d>=0&&h<=d)return n.copy(a);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return s=l/(l-d),n.copy(i).addScaledVector(ea,s);no.subVectors(e,r);const p=ea.dot(no),_=ta.dot(no);if(_>=0&&p<=_)return n.copy(r);const y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(ta,o);const g=d*_-p*h;if(g<=0&&h-d>=0&&p-_>=0)return Hc.subVectors(r,a),o=(h-d)/(h-d+(p-_)),n.copy(a).addScaledVector(Hc,o);const f=1/(g+y+u);return s=y*f,o=u*f,n.copy(i).addScaledVector(ea,s).addScaledVector(ta,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class fr{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(wn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(wn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=wn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,wn):wn.fromBufferAttribute(r,s),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wr.copy(i.boundingBox)),wr.applyMatrix4(e.matrixWorld),this.union(wr)}const a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ua),Rr.subVectors(this.max,Ua),na.subVectors(e.a,Ua),ia.subVectors(e.b,Ua),aa.subVectors(e.c,Ua),hi.subVectors(ia,na),fi.subVectors(aa,ia),Ai.subVectors(na,aa);let n=[0,-hi.z,hi.y,0,-fi.z,fi.y,0,-Ai.z,Ai.y,hi.z,0,-hi.x,fi.z,0,-fi.x,Ai.z,0,-Ai.x,-hi.y,hi.x,0,-fi.y,fi.x,0,-Ai.y,Ai.x,0];return!so(n,na,ia,aa,Rr)||(n=[1,0,0,0,1,0,0,0,1],!so(n,na,ia,aa,Rr))?!1:(Cr.crossVectors(hi,fi),n=[Cr.x,Cr.y,Cr.z],so(n,na,ia,aa,Rr))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Jn=[new B,new B,new B,new B,new B,new B,new B,new B],wn=new B,wr=new fr,na=new B,ia=new B,aa=new B,hi=new B,fi=new B,Ai=new B,Ua=new B,Rr=new B,Cr=new B,wi=new B;function so(t,e,n,i,a){for(let r=0,s=t.length-3;r<=s;r+=3){wi.fromArray(t,r);const o=a.x*Math.abs(wi.x)+a.y*Math.abs(wi.y)+a.z*Math.abs(wi.z),l=e.dot(wi),c=n.dot(wi),d=i.dot(wi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Dt=new B,Lr=new Xe;let Uf=0;class Pn extends Wi{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Uf++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=mu,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=n.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Lr.fromBufferAttribute(this,n),Lr.applyMatrix3(e),this.setXY(n,Lr.x,Lr.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix3(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix4(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyNormalMatrix(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.transformDirection(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=$n(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=vt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=$n(n,this.array)),n}setX(e,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=$n(n,this.array)),n}setY(e,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=$n(n,this.array)),n}setZ(e,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=$n(n,this.array)),n}setW(e,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=vt(n,this.array),i=vt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,a){return e*=this.itemSize,this.normalized&&(n=vt(n,this.array),i=vt(i,this.array),a=vt(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,n,i,a,r){return e*=this.itemSize,this.normalized&&(n=vt(n,this.array),i=vt(i,this.array),a=vt(a,this.array),r=vt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class bu extends Pn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class yu extends Pn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ot extends Pn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const kf=new fr,ka=new B,oo=new B;class pr{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):kf.setFromPoints(e).getCenter(i);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ka.subVectors(e,this.center);const n=ka.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(ka,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ka.copy(e.center).add(oo)),this.expandByPoint(ka.copy(e.center).sub(oo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Of=0;const bn=new yt,lo=new Nt,ra=new B,fn=new fr,Oa=new fr,zt=new B;class Vt extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gf(e)?yu:bu)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new We().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,n,i){return bn.makeTranslation(e,n,i),this.applyMatrix4(bn),this}scale(e,n,i){return bn.makeScale(e,n,i),this.applyMatrix4(bn),this}lookAt(e){return lo.lookAt(e),lo.updateMatrix(),this.applyMatrix4(lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ra).negate(),this.translate(ra.x,ra.y,ra.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,r=e.length;a<r;a++){const s=e[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ot(i,3))}else{const i=Math.min(e.length,n.count);for(let a=0;a<i;a++){const r=e[a];n.setXYZ(a,r.x,r.y,r.z||0)}e.length>n.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,a=n.length;i<a;i++){const r=n[i];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),n)for(let r=0,s=n.length;r<s;r++){const o=n[r];Oa.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(fn.min,Oa.min),fn.expandByPoint(zt),zt.addVectors(fn.max,Oa.max),fn.expandByPoint(zt)):(fn.expandByPoint(Oa.min),fn.expandByPoint(Oa.max))}fn.getCenter(i);let a=0;for(let r=0,s=e.count;r<s;r++)zt.fromBufferAttribute(e,r),a=Math.max(a,i.distanceToSquared(zt));if(n)for(let r=0,s=n.length;r<s;r++){const o=n[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)zt.fromBufferAttribute(o,c),l&&(ra.fromBufferAttribute(e,c),zt.add(ra)),a=Math.max(a,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,r=n.uv;let s=this.getAttribute("tangent");(s===void 0||s.count!==i.count)&&(s=new Pn(new Float32Array(4*i.count),4),this.setAttribute("tangent",s));const o=[],l=[];for(let m=0;m<i.count;m++)o[m]=new B,l[m]=new B;const c=new B,d=new B,h=new B,u=new Xe,p=new Xe,_=new Xe,y=new B,g=new B;function f(m,S,L){c.fromBufferAttribute(i,m),d.fromBufferAttribute(i,S),h.fromBufferAttribute(i,L),u.fromBufferAttribute(r,m),p.fromBufferAttribute(r,S),_.fromBufferAttribute(r,L),d.sub(c),h.sub(c),p.sub(u),_.sub(u);const R=1/(p.x*_.y-_.x*p.y);isFinite(R)&&(y.copy(d).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(R),g.copy(h).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(R),o[m].add(y),o[S].add(y),o[L].add(y),l[m].add(g),l[S].add(g),l[L].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let m=0,S=T.length;m<S;++m){const L=T[m],R=L.start,I=L.count;for(let O=R,M=R+I;O<M;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const D=new B,x=new B,E=new B,A=new B;function C(m){E.fromBufferAttribute(a,m),A.copy(E);const S=o[m];D.copy(S),D.sub(E.multiplyScalar(E.dot(S))).normalize(),x.crossVectors(A,S);const R=x.dot(l[m])<0?-1:1;s.setXYZW(m,D.x,D.y,D.z,R)}for(let m=0,S=T.length;m<S;++m){const L=T[m],R=L.start,I=L.count;for(let O=R,M=R+I;O<M;O+=3)C(e.getX(O+0)),C(e.getX(O+1)),C(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Pn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const a=new B,r=new B,s=new B,o=new B,l=new B,c=new B,d=new B,h=new B;if(e)for(let u=0,p=e.count;u<p;u+=3){const _=e.getX(u+0),y=e.getX(u+1),g=e.getX(u+2);a.fromBufferAttribute(n,_),r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,g),d.subVectors(s,r),h.subVectors(a,r),d.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),o.add(d),l.add(d),c.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)a.fromBufferAttribute(n,u+0),r.fromBufferAttribute(n,u+1),s.fromBufferAttribute(n,u+2),d.subVectors(s,r),h.subVectors(a,r),d.cross(h),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)zt.fromBufferAttribute(e,n),zt.normalize(),e.setXYZ(n,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d);let p=0,_=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*d;for(let f=0;f<d;f++)u[_++]=c[p++]}return new Pn(u,d,h)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Vt,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,i);n.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,h=c.length;d<h;d++){const u=c[d],p=e(u,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(a[l]=d,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(n))}const r=e.morphAttributes;for(const c in r){const d=[],h=r[c];for(let u=0,p=h.length;u<p;u++)d.push(h[u].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ff{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=mu,this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let a=0,r=this.stride;a<r;a++)this.array[e+a]=n.array[i+a];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const n={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}const nn=new B;class ms{constructor(e,n,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix4(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyNormalMatrix(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.transformDirection(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=$n(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=vt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=$n(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=$n(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=$n(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=$n(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=vt(n,this.array),i=vt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=vt(n,this.array),i=vt(i,this.array),a=vt(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,n,i,a,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=vt(n,this.array),i=vt(i,this.array),a=vt(a,this.array),r=vt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ps("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[a+r])}return new Pn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ms(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ps("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[a+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const co=new B,Bf=new B,$f=new We;class mi{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,a){return this.normal.set(e,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const a=co.subVectors(i,n).cross(Bf.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const a=e.delta(co),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(s<0||s>1)?null:n.copy(e.start).addScaledVector(a,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||$f.getNormalMatrix(e),a=this.coplanarPoint(co).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let zf=0;class Ei extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=Ja,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qd,this.blendDst=jd,this.blendEquation=pa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){$e(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){$e(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(n){const r=a(e.textures),s=a(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new mi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Xe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yl extends Ei{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let sa;const Fa=new B,oa=new B,la=new B,ca=new Xe,Ba=new Xe,xu=new yt,Pr=new B,$a=new B,Ir=new B,Gc=new Xe,uo=new Xe,Vc=new Xe;class Wc extends Nt{constructor(e=new yl){if(super(),this.isSprite=!0,this.type="Sprite",sa===void 0){sa=new Vt;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ff(n,5);sa.setIndex([0,1,2,0,2,3]),sa.setAttribute("position",new ms(i,3,0,!1)),sa.setAttribute("uv",new ms(i,2,3,!1))}this.geometry=sa,this.material=e,this.center=new Xe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,n){e.camera===null&&ot('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),oa.setFromMatrixScale(this.matrixWorld),xu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),la.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&oa.multiplyScalar(-la.z);const i=this.material.rotation;let a,r;i!==0&&(r=Math.cos(i),a=Math.sin(i));const s=this.center;Dr(Pr.set(-.5,-.5,0),la,s,oa,a,r),Dr($a.set(.5,-.5,0),la,s,oa,a,r),Dr(Ir.set(.5,.5,0),la,s,oa,a,r),Gc.set(0,0),uo.set(1,0),Vc.set(1,1);let o=e.ray.intersectTriangle(Pr,$a,Ir,!1,Fa);if(o===null&&(Dr($a.set(-.5,.5,0),la,s,oa,a,r),uo.set(0,1),o=e.ray.intersectTriangle(Pr,Ir,$a,!1,Fa),o===null))return;const l=e.ray.origin.distanceTo(Fa);l<e.near||l>e.far||n.push({distance:l,point:Fa.clone(),uv:xn.getInterpolation(Fa,Pr,$a,Ir,Gc,uo,Vc,new Xe),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Dr(t,e,n,i,a,r){ca.subVectors(t,n).addScalar(.5).multiply(i),a!==void 0?(Ba.x=r*ca.x-a*ca.y,Ba.y=a*ca.x+r*ca.y):Ba.copy(ca),t.copy(e),t.x+=Ba.x,t.y+=Ba.y,t.applyMatrix4(xu)}const Qn=new B,ho=new B,Nr=new B,Ur=new B;class As{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Qn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,n),Qn.distanceToSquared(e))}distanceSqToSegment(e,n,i,a){ho.copy(e).add(n).multiplyScalar(.5),Nr.copy(n).sub(e).normalize(),Ur.copy(this.origin).sub(ho);const r=e.distanceTo(n)*.5,s=-this.direction.dot(Nr),o=Ur.dot(this.direction),l=-Ur.dot(Nr),c=Ur.lengthSq(),d=Math.abs(1-s*s);let h,u,p,_;if(d>0)if(h=s*l-o,u=s*o-l,_=r*d,h>=0)if(u>=-_)if(u<=_){const y=1/d;h*=y,u*=y,p=h*(h+s*u+2*o)+u*(s*h+u+2*l)+c}else u=r,h=Math.max(0,-(s*u+o)),p=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(s*u+o)),p=-h*h+u*(u+2*l)+c;else u<=-_?(h=Math.max(0,-(-s*r+o)),u=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+u*(u+2*l)+c):u<=_?(h=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(h=Math.max(0,-(s*r+o)),u=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+u*(u+2*l)+c);else u=s>0?-r:r,h=Math.max(0,-(s*u+o)),p=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),a&&a.copy(ho).addScaledVector(Nr,u),p}intersectSphere(e,n){if(e.radius<0)return null;Qn.subVectors(e.center,this.origin);const i=Qn.dot(this.direction),a=Qn.dot(Qn)-i*i,r=e.radius*e.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,a,r,s,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,a=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,a=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,s=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,s=(e.min.y-u.y)*d),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,n,i,a,r){const s=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,h=e.x-s.x,u=e.y-s.y,p=e.z-s.z,_=n.x-s.x,y=n.y-s.y,g=n.z-s.z,f=i.x-s.x,T=i.y-s.y,D=i.z-s.z,x=Math.abs(l),E=Math.abs(c),A=Math.abs(d);let C,m,S,L,R,I,O,M,U,Y,V,te;if(x>=E&&x>=A?(S=l,I=h,U=_,te=f,l>=0?(C=c,m=d,L=u,R=p,O=y,M=g,Y=T,V=D):(C=d,m=c,L=p,R=u,O=g,M=y,Y=D,V=T)):E>=A?(S=c,I=u,U=y,te=T,c>=0?(C=d,m=l,L=p,R=h,O=g,M=_,Y=D,V=f):(C=l,m=d,L=h,R=p,O=_,M=g,Y=f,V=D)):(S=d,I=p,U=g,te=D,d>=0?(C=l,m=c,L=h,R=u,O=_,M=y,Y=f,V=T):(C=c,m=l,L=u,R=h,O=y,M=_,Y=T,V=f)),S===0)return null;const q=C/S,Q=m/S,ie=1/S,Re=L-q*I,se=R-Q*I,ut=O-q*U,rt=M-Q*U,dt=Y-q*te,K=V-Q*te,ne=dt*rt-K*ut,Ee=Re*K-se*dt,Ve=ut*se-rt*Re;if(a){if(ne<0||Ee<0||Ve<0)return null}else if((ne<0||Ee<0||Ve<0)&&(ne>0||Ee>0||Ve>0))return null;const Se=ne+Ee+Ve;if(Se===0)return null;const et=ie*(ne*I+Ee*U+Ve*te);return(Se>0?et<0:et>0)?null:this.at(et/Se,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yn extends Ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=eu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xc=new yt,Ri=new As,kr=new pr,qc=new B,Or=new B,Fr=new B,Br=new B,fo=new B,$r=new B,Yc=new B,zr=new B;class Je extends Nt{constructor(e=new Vt,n=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,n){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(r&&o){$r.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],h=r[l];d!==0&&(fo.fromBufferAttribute(h,e),s?$r.addScaledVector(fo,d):$r.addScaledVector(fo.sub(n),d))}n.add($r)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),kr.copy(i.boundingSphere),kr.applyMatrix4(r),Ri.copy(e.ray).recast(e.near),!(kr.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(kr,qc)===null||Ri.origin.distanceToSquared(qc)>(e.far-e.near)**2))&&(Xc.copy(r).invert(),Ri.copy(e.ray).applyMatrix4(Xc),!(i.boundingBox!==null&&Ri.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ri)))}_computeIntersections(e,n,i){let a;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,y=u.length;_<y;_++){const g=u[_],f=s[g.materialIndex],T=Math.max(g.start,p.start),D=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let x=T,E=D;x<E;x+=3){const A=o.getX(x),C=o.getX(x+1),m=o.getX(x+2);a=Hr(this,f,e,i,c,d,h,A,C,m),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const _=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let g=_,f=y;g<f;g+=3){const T=o.getX(g),D=o.getX(g+1),x=o.getX(g+2);a=Hr(this,s,e,i,c,d,h,T,D,x),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,y=u.length;_<y;_++){const g=u[_],f=s[g.materialIndex],T=Math.max(g.start,p.start),D=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let x=T,E=D;x<E;x+=3){const A=x,C=x+1,m=x+2;a=Hr(this,f,e,i,c,d,h,A,C,m),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=_,f=y;g<f;g+=3){const T=g,D=g+1,x=g+2;a=Hr(this,s,e,i,c,d,h,T,D,x),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}}}function Hf(t,e,n,i,a,r,s,o){let l;if(e.side===un?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,e.side===$i,o),l===null)return null;zr.copy(o),zr.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(zr);return c<n.near||c>n.far?null:{distance:c,point:zr.clone(),object:t}}function Hr(t,e,n,i,a,r,s,o,l,c){t.getVertexPosition(o,Or),t.getVertexPosition(l,Fr),t.getVertexPosition(c,Br);const d=Hf(t,e,n,i,Or,Fr,Br,Yc);if(d){const h=new B;xn.getBarycoord(Yc,Or,Fr,Br,h),a&&(d.uv=xn.getInterpolatedAttribute(a,o,l,c,h,new Xe)),r&&(d.uv1=xn.getInterpolatedAttribute(r,o,l,c,h,new Xe)),s&&(d.normal=xn.getInterpolatedAttribute(s,o,l,c,h,new B),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new B,materialIndex:0};xn.getNormal(Or,Fr,Br,u.normal),d.face=u,d.barycoord=h}return d}class Gf extends Qt{constructor(e=null,n=1,i=1,a,r,s,o,l,c=Gt,d=Gt,h,u){super(null,s,o,l,c,d,a,r,h,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ci=new pr,Vf=new Xe(.5,.5),Gr=new B;class Xl{constructor(e=new mi,n=new mi,i=new mi,a=new mi,r=new mi,s=new mi){this.planes=[e,n,i,a,r,s]}set(e,n,i,a,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Hn,i=!1){const a=this.planes,r=e.elements,s=r[0],o=r[1],l=r[2],c=r[3],d=r[4],h=r[5],u=r[6],p=r[7],_=r[8],y=r[9],g=r[10],f=r[11],T=r[12],D=r[13],x=r[14],E=r[15];if(a[0].setComponents(c-s,p-d,f-_,E-T).normalize(),a[1].setComponents(c+s,p+d,f+_,E+T).normalize(),a[2].setComponents(c+o,p+h,f+y,E+D).normalize(),a[3].setComponents(c-o,p-h,f-y,E-D).normalize(),i)a[4].setComponents(l,u,g,x).normalize(),a[5].setComponents(c-l,p-u,f-g,E-x).normalize();else if(a[4].setComponents(c-l,p-u,f-g,E-x).normalize(),n===Hn)a[5].setComponents(c+l,p+u,f+g,E+x).normalize();else if(n===sr)a[5].setComponents(l,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ci.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){Ci.center.set(0,0,0);const n=Vf.distanceTo(e.center);return Ci.radius=.7071067811865476+n,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){const n=this.planes,i=e.center,a=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Gr.x=a.normal.x>0?e.max.x:e.min.x,Gr.y=a.normal.y>0?e.max.y:e.min.y,Gr.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Gr)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Su extends Ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const gs=new B,vs=new B,Zc=new yt,za=new As,Vr=new pr,po=new B,Kc=new B;class Jc extends Nt{constructor(e=new Vt,n=new Su){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let a=1,r=n.count;a<r;a++)gs.fromBufferAttribute(n,a-1),vs.fromBufferAttribute(n,a),i[a]=i[a-1],i[a]+=gs.distanceTo(vs);e.setAttribute("lineDistance",new Ot(i,1))}else $e("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,a=this.matrixWorld,r=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vr.copy(i.boundingSphere),Vr.applyMatrix4(a),Vr.radius+=r,e.ray.intersectsSphere(Vr)===!1)return;Zc.copy(a).invert(),za.copy(e.ray).applyMatrix4(Zc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){const p=Math.max(0,s.start),_=Math.min(d.count,s.start+s.count);for(let y=p,g=_-1;y<g;y+=c){const f=d.getX(y),T=d.getX(y+1),D=Wr(this,e,za,l,f,T,y);D&&n.push(D)}if(this.isLineLoop){const y=d.getX(_-1),g=d.getX(p),f=Wr(this,e,za,l,y,g,_-1);f&&n.push(f)}}else{const p=Math.max(0,s.start),_=Math.min(u.count,s.start+s.count);for(let y=p,g=_-1;y<g;y+=c){const f=Wr(this,e,za,l,y,y+1,y);f&&n.push(f)}if(this.isLineLoop){const y=Wr(this,e,za,l,_-1,p,_-1);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Wr(t,e,n,i,a,r,s){const o=t.geometry.attributes.position;if(gs.fromBufferAttribute(o,a),vs.fromBufferAttribute(o,r),n.distanceSqToSegment(gs,vs,po,Kc)>i)return;po.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(po);if(!(c<e.near||c>e.far))return{distance:c,point:Kc.clone().applyMatrix4(t.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:t}}class Mu extends Ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qc=new yt,xl=new As,Xr=new pr,qr=new B;class jc extends Nt{constructor(e=new Vt,n=new Mu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,a=this.matrixWorld,r=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xr.copy(i.boundingSphere),Xr.applyMatrix4(a),Xr.radius+=r,e.ray.intersectsSphere(Xr)===!1)return;Qc.copy(a).invert(),xl.copy(e.ray).applyMatrix4(Qc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const u=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let _=u,y=p;_<y;_++){const g=c.getX(_);qr.fromBufferAttribute(h,g),ed(qr,g,l,a,e,n,this)}}else{const u=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let _=u,y=p;_<y;_++)qr.fromBufferAttribute(h,_),ed(qr,_,l,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ed(t,e,n,i,a,r,s){const o=xl.distanceSqToPoint(t);if(o<n){const l=new B;xl.closestPointToPoint(t,l),l.applyMatrix4(i);const c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class Eu extends Qt{constructor(e=[],n=zi,i,a,r,s,o,l,c,d){super(e,n,i,a,r,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ql extends Qt{constructor(e,n,i,a,r,s,o,l,c){super(e,n,i,a,r,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class or extends Qt{constructor(e,n,i=Wn,a,r,s,o=Gt,l=Gt,c,d=ai,h=1){if(d!==ai&&d!==Ui)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:h};super(u,a,r,s,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class Wf extends or{constructor(e,n=Wn,i=zi,a,r,s=Gt,o=Gt,l,c=ai){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,n,i,a,r,s,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Tu extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class rn extends Vt{constructor(e=1,n=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],d=[],h=[];let u=0,p=0;_("z","y","x",-1,-1,i,n,e,s,r,0),_("z","y","x",1,-1,i,n,-e,s,r,1),_("x","z","y",1,1,e,i,n,a,s,2),_("x","z","y",1,-1,e,i,-n,a,s,3),_("x","y","z",1,-1,e,n,i,a,r,4),_("x","y","z",-1,-1,e,n,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(d,3)),this.setAttribute("uv",new Ot(h,2));function _(y,g,f,T,D,x,E,A,C,m,S){const L=x/C,R=E/m,I=x/2,O=E/2,M=A/2,U=C+1,Y=m+1;let V=0,te=0;const q=new B;for(let Q=0;Q<Y;Q++){const ie=Q*R-O;for(let Re=0;Re<U;Re++){const se=Re*L-I;q[y]=se*T,q[g]=ie*D,q[f]=M,c.push(q.x,q.y,q.z),q[y]=0,q[g]=0,q[f]=A>0?1:-1,d.push(q.x,q.y,q.z),h.push(Re/C),h.push(1-Q/m),V+=1}}for(let Q=0;Q<m;Q++)for(let ie=0;ie<C;ie++){const Re=u+ie+U*Q,se=u+ie+U*(Q+1),ut=u+(ie+1)+U*(Q+1),rt=u+(ie+1)+U*Q;l.push(Re,se,rt),l.push(se,ut,rt),te+=6}o.addGroup(p,te,S),p+=te,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ki extends Vt{constructor(e=1,n=1,i=1,a=32,r=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:a,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:l};const c=this;a=Math.floor(a),r=Math.floor(r);const d=[],h=[],u=[],p=[];let _=0;const y=[],g=i/2;let f=0;T(),s===!1&&(e>0&&D(!0),n>0&&D(!1)),this.setIndex(d),this.setAttribute("position",new Ot(h,3)),this.setAttribute("normal",new Ot(u,3)),this.setAttribute("uv",new Ot(p,2));function T(){const x=new B,E=new B;let A=0;const C=(n-e)/i;for(let m=0;m<=r;m++){const S=[],L=m/r,R=L*(n-e)+e;for(let I=0;I<=a;I++){const O=I/a,M=O*l+o,U=Math.sin(M),Y=Math.cos(M);E.x=R*U,E.y=-L*i+g,E.z=R*Y,h.push(E.x,E.y,E.z),x.set(U,C,Y).normalize(),u.push(x.x,x.y,x.z),p.push(O,1-L),S.push(_++)}y.push(S)}for(let m=0;m<a;m++)for(let S=0;S<r;S++){const L=y[S][m],R=y[S+1][m],I=y[S+1][m+1],O=y[S][m+1];(e>0||S!==0)&&(d.push(L,R,O),A+=3),(n>0||S!==r-1)&&(d.push(R,I,O),A+=3)}c.addGroup(f,A,0),f+=A}function D(x){const E=_,A=new Xe,C=new B;let m=0;const S=x===!0?e:n,L=x===!0?1:-1;for(let I=1;I<=a;I++)h.push(0,g*L,0),u.push(0,L,0),p.push(.5,.5),_++;const R=_;for(let I=0;I<=a;I++){const M=I/a*l+o,U=Math.cos(M),Y=Math.sin(M);C.x=S*Y,C.y=g*L,C.z=S*U,h.push(C.x,C.y,C.z),u.push(0,L,0),A.x=U*.5+.5,A.y=Y*.5*L+.5,p.push(A.x,A.y),_++}for(let I=0;I<a;I++){const O=E+I,M=R+I;x===!0?d.push(M,M+1,O):d.push(M+1,M,O),m+=3}c.addGroup(f,m,x===!0?1:2),f+=m}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ki(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yl extends ki{constructor(e=1,n=1,i=32,a=1,r=!1,s=0,o=Math.PI*2){super(0,e,n,i,a,r,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:a,openEnded:r,thetaStart:s,thetaLength:o}}static fromJSON(e){return new Yl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xf{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$e("Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,a=this.getPoint(0),r=0;n.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),r+=i.distanceTo(a),n.push(r),a=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let a=0;const r=i.length;let s;n?s=n:s=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(a=Math.floor(o+(l-o)/2),c=i[a]-s,c<0)o=a+1;else if(c>0)l=a-1;else{l=a;break}if(a=l,i[a]===s)return a/(r-1);const d=i[a],u=i[a+1]-d,p=(s-d)/u;return(a+p)/(r-1)}getTangent(e,n){let a=e-1e-4,r=e+1e-4;a<0&&(a=0),r>1&&(r=1);const s=this.getPoint(a),o=this.getPoint(r),l=n||(s.isVector2?new Xe:new B);return l.copy(o).sub(s).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new B,a=[],r=[],s=[],o=new B,l=new yt;for(let p=0;p<=e;p++){const _=p/e;a[p]=this.getTangentAt(_,new B)}r[0]=new B,s[0]=new B;let c=Number.MAX_VALUE;const d=Math.abs(a[0].x),h=Math.abs(a[0].y),u=Math.abs(a[0].z);d<=c&&(c=d,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(a[0],i).normalize(),r[0].crossVectors(a[0],o),s[0].crossVectors(a[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),s[p]=s[p-1].clone(),o.crossVectors(a[p-1],a[p]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(it(a[p-1].dot(a[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,_))}s[p].crossVectors(a[p],r[p])}if(n===!0){let p=Math.acos(it(r[0].dot(r[e]),-1,1));p/=e,a[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(a[_],p*_)),s[_].crossVectors(a[_],r[_])}return{tangents:a,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Zl(){let t=0,e=0,n=0,i=0;function a(r,s,o,l){t=r,e=o,n=-3*r+3*s-2*o-l,i=2*r-2*s+o+l}return{initCatmullRom:function(r,s,o,l,c){a(s,o,c*(o-r),c*(l-s))},initNonuniformCatmullRom:function(r,s,o,l,c,d,h){let u=(s-r)/c-(o-r)/(c+d)+(o-s)/d,p=(o-s)/d-(l-s)/(d+h)+(l-o)/h;u*=d,p*=d,a(s,o,u,p)},calc:function(r){const s=r*r,o=s*r;return t+e*r+n*s+i*o}}}const td=new B,nd=new B,mo=new Zl,go=new Zl,vo=new Zl;class qf extends Xf{constructor(e=[],n=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=a}getPoint(e,n=new B){const i=n,a=this.points,r=a.length,s=(r-(this.closed?0:1))*e;let o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,d;this.closed||o>0?c=a[(o-1)%r]:(nd.subVectors(a[0],a[1]).add(a[0]),c=nd);const h=a[o%r],u=a[(o+1)%r];if(this.closed||o+2<r?d=a[(o+2)%r]:(td.subVectors(a[r-1],a[r-2]).add(a[r-1]),d=td),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),p),y=Math.pow(h.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(d),p);y<1e-4&&(y=1),_<1e-4&&(_=y),g<1e-4&&(g=y),mo.initNonuniformCatmullRom(c.x,h.x,u.x,d.x,_,y,g),go.initNonuniformCatmullRom(c.y,h.y,u.y,d.y,_,y,g),vo.initNonuniformCatmullRom(c.z,h.z,u.z,d.z,_,y,g)}else this.curveType==="catmullrom"&&(mo.initCatmullRom(c.x,h.x,u.x,d.x,this.tension),go.initCatmullRom(c.y,h.y,u.y,d.y,this.tension),vo.initCatmullRom(c.z,h.z,u.z,d.z,this.tension));return i.set(mo.calc(l),go.calc(l),vo.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const a=e.points[n];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const a=this.points[n];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const a=e.points[n];this.points.push(new B().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class cn extends Vt{constructor(e=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:a};const r=e/2,s=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,d=l+1,h=e/o,u=n/l,p=[],_=[],y=[],g=[];for(let f=0;f<d;f++){const T=f*u-s;for(let D=0;D<c;D++){const x=D*h-r;_.push(x,-T,0),y.push(0,0,1),g.push(D/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<o;T++){const D=T+c*f,x=T+c*(f+1),E=T+1+c*(f+1),A=T+1+c*f;p.push(D,x,A),p.push(x,E,A)}this.setIndex(p),this.setAttribute("position",new Ot(_,3)),this.setAttribute("normal",new Ot(y,3)),this.setAttribute("uv",new Ot(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cn(e.width,e.height,e.widthSegments,e.heightSegments)}}class va extends Vt{constructor(e=1,n=32,i=16,a=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:a,phiLength:r,thetaStart:s,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(s+o,Math.PI);let c=0;const d=[],h=new B,u=new B,p=[],_=[],y=[],g=[];for(let f=0;f<=i;f++){const T=[],D=f/i,x=s+D*o,E=e*Math.cos(x),A=Math.sqrt(e*e-E*E);let C=0;f===0&&s===0?C=.5/n:f===i&&l===Math.PI&&(C=-.5/n);for(let m=0;m<=n;m++){const S=m/n,L=a+S*r;h.x=-A*Math.cos(L),h.y=E,h.z=A*Math.sin(L),_.push(h.x,h.y,h.z),u.copy(h).normalize(),y.push(u.x,u.y,u.z),g.push(S+C,1-D),T.push(c++)}d.push(T)}for(let f=0;f<i;f++)for(let T=0;T<n;T++){const D=d[f][T+1],x=d[f][T],E=d[f+1][T],A=d[f+1][T+1];(f!==0||s>0)&&p.push(D,x,A),(f!==i-1||l<Math.PI)&&p.push(x,E,A)}this.setIndex(p),this.setAttribute("position",new Ot(_,3)),this.setAttribute("normal",new Ot(y,3)),this.setAttribute("uv",new Ot(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new va(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Kl extends Vt{constructor(e=1,n=.4,i=12,a=48,r=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:a,arc:r,thetaStart:s,thetaLength:o},i=Math.floor(i),a=Math.floor(a);const l=[],c=[],d=[],h=[],u=new B,p=new B,_=new B;for(let y=0;y<=i;y++){const g=s+y/i*o;for(let f=0;f<=a;f++){const T=f/a*r;p.x=(e+n*Math.cos(g))*Math.cos(T),p.y=(e+n*Math.cos(g))*Math.sin(T),p.z=n*Math.sin(g),c.push(p.x,p.y,p.z),u.x=e*Math.cos(T),u.y=e*Math.sin(T),_.subVectors(p,u).normalize(),d.push(_.x,_.y,_.z),h.push(f/a),h.push(y/i)}}for(let y=1;y<=i;y++)for(let g=1;g<=a;g++){const f=(a+1)*y+g-1,T=(a+1)*(y-1)+g-1,D=(a+1)*(y-1)+g,x=(a+1)*y+g;l.push(f,T,x),l.push(T,D,x)}this.setIndex(l),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(d,3)),this.setAttribute("uv",new Ot(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Ma(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const a=t[n][i];if(id(a))a.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=a.clone();else if(Array.isArray(a))if(id(a[0])){const r=[];for(let s=0,o=a.length;s<o;s++)r[s]=a[s].clone();e[n][i]=r}else e[n][i]=a.slice();else e[n][i]=a}}return e}function an(t){const e={};for(let n=0;n<t.length;n++){const i=Ma(t[n]);for(const a in i)e[a]=i[a]}return e}function id(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Yf(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Au(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const Zf={clone:Ma,merge:an};var Kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends Ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kf,this.fragmentShader=Jf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ma(e.uniforms),this.uniformsGroups=Yf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?n.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[a]={type:"m4",value:s.toArray()}:n.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=n[a.value]||null;break;case"c":this.uniforms[i].value=new je().setHex(a.value);break;case"v2":this.uniforms[i].value=new Xe().fromArray(a.value);break;case"v3":this.uniforms[i].value=new B().fromArray(a.value);break;case"v4":this.uniforms[i].value=new Ct().fromArray(a.value);break;case"m3":this.uniforms[i].value=new We().fromArray(a.value);break;case"m4":this.uniforms[i].value=new yt().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Qf extends qn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Zt extends Ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_l,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jf extends Ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=of,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ep extends Ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ws extends Nt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class tp extends ws{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const _o=new yt,ad=new B,rd=new B;class wu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xl,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;ad.setFromMatrixPosition(e.matrixWorld),n.position.copy(ad),rd.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(rd),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,a){_o.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(_o,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,s=a?a.z/r.x:1,o=a?a.w/r.y:1,l=a?a.x/r.x:0,c=a?a.y/r.y:0;e.coordinateSystem===sr||e.reversedDepth?n.set(.5*s,0,0,.5*s+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*s,0,0,.5*s+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(_o)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Yr=new B,Zr=new Ca,Nn=new B;class Ru extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Yr,Zr,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,Zr,Nn.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Yr,Zr,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,Zr,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const pi=new B,sd=new Xe,od=new Xe;class gn extends Ru{constructor(e=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=bl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bl*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,n){return this.getViewBounds(e,sd,od),n.subVectors(od,sd)}setViewOffset(e,n,i,a,r,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Vs*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/l,n-=s.offsetY*i/c,a*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class np extends wu{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0}}class Ha extends ws{constructor(e,n,i=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new np}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Jl extends Ru{constructor(e=-1,n=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-e,s=i+e,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class ip extends wu{constructor(){super(new Jl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ap extends ws{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new ip}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class rp extends ws{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const da=-90,ua=1;class sp extends Nt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new gn(da,ua,e,n);a.layers=this.layers,this.add(a);const r=new gn(da,ua,e,n);r.layers=this.layers,this.add(r);const s=new gn(da,ua,e,n);s.layers=this.layers,this.add(s);const o=new gn(da,ua,e,n);o.layers=this.layers,this.add(o);const l=new gn(da,ua,e,n);l.layers=this.layers,this.add(l);const c=new gn(da,ua,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,a,r,s,o,l]=n;for(const c of n)this.remove(c);if(e===Hn)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sr)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,2,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(h,u,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class op extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ld=new yt;class lp{constructor(e,n,i=0,a=1/0){this.ray=new As(e,n),this.near=i,this.far=a,this.camera=null,this.layers=new Vl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):ot("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return ld.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ld),this}intersectObject(e,n=!0,i=[]){return Sl(e,this,i,n),i.sort(cd),i}intersectObjects(e,n=!0,i=[]){for(let a=0,r=e.length;a<r;a++)Sl(e[a],this,i,n);return i.sort(cd),i}}function cd(t,e){return t.distance-e.distance}function Sl(t,e,n,i){let a=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(a=!1),a===!0&&i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)Sl(r[s],e,n,!0)}}class cp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,$e("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const pc=class pc{constructor(e,n,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,a){const r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=a,this}};pc.prototype.isMatrix2=!0;let dd=pc;function ud(t,e,n,i){const a=dp(i);switch(n){case hu:return t*e;case pu:return t*e/a.components*a.byteLength;case Fl:return t*e/a.components*a.byteLength;case Hi:return t*e*2/a.components*a.byteLength;case Bl:return t*e*2/a.components*a.byteLength;case fu:return t*e*3/a.components*a.byteLength;case Cn:return t*e*4/a.components*a.byteLength;case $l:return t*e*4/a.components*a.byteLength;case is:case as:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case rs:case ss:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Go:case Wo:return Math.max(t,16)*Math.max(e,8)/4;case Ho:case Vo:return Math.max(t,8)*Math.max(e,8)/2;case Xo:case qo:case Zo:case Ko:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Yo:case cs:case Jo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jo:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case el:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case tl:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case nl:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case il:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case al:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case rl:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case sl:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ol:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case ll:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case cl:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case dl:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ul:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case hl:case fl:case pl:return Math.ceil(t/4)*Math.ceil(e/4)*16;case ml:case gl:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ds:case vl:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function dp(t){switch(t){case vn:case lu:return{byteLength:1,components:1};case ar:case cu:case Xn:return{byteLength:2,components:1};case kl:case Ol:return{byteLength:2,components:4};case Wn:case Ul:case zn:return{byteLength:4,components:1};case du:case uu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dl}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cu(){let t=null,e=!1,n=null,i=null;function a(r,s){i=t.requestAnimationFrame(a),n(r,s)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(a),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function up(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,h=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const d=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,d);else{h.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<h.length;p++){const _=h[u],y=h[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++u,h[u]=y)}h.length=u+1;for(let p=0,_=h.length;p<_;p++){const y=h[p];t.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:r,update:s}}var hp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fp=`#ifdef USE_ALPHAHASH
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
#endif`,pp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_p=`#ifdef USE_AOMAP
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
#endif`,bp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yp=`#ifdef USE_BATCHING
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
#endif`,xp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ep=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tp=`#ifdef USE_IRIDESCENCE
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
#endif`,Ap=`#ifdef USE_BUMPMAP
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
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ip=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Dp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Np=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Up=`#define PI 3.141592653589793
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
} // validated`,kp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Op=`vec3 transformedNormal = objectNormal;
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
#endif`,Fp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$p=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
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
#endif`,qp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yp=`#ifdef USE_ENVMAP
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
#endif`,Zp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jp=`#ifdef USE_GRADIENTMAP
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
}`,em=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,im=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,am=`#ifdef USE_ENVMAP
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
#endif`,rm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,om=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cm=`PhysicalMaterial material;
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
#endif`,dm=`uniform sampler2D dfgLUT;
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
}`,um=`
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
#endif`,hm=`#if defined( RE_IndirectDiffuse )
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
#endif`,fm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,mm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_m=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ym=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sm=`#if defined( USE_POINTS_UV )
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
#endif`,Mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Am=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rm=`#ifdef USE_MORPHTARGETS
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
#endif`,Cm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Um=`#ifdef USE_NORMALMAP
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
#endif`,km=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Om=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ym=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Km=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jm=`float getShadowMask() {
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
}`,Qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jm=`#ifdef USE_SKINNING
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
#endif`,eg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tg=`#ifdef USE_SKINNING
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
#endif`,ng=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ig=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ag=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sg=`#ifdef USE_TRANSMISSION
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
#endif`,og=`#ifdef USE_TRANSMISSION
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
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ug=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fg=`uniform sampler2D t2D;
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
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`#include <common>
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
}`,bg=`#if DEPTH_PACKING == 3200
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
}`,yg=`#define DISTANCE
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
}`,xg=`#define DISTANCE
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
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`uniform float scale;
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
}`,Tg=`uniform vec3 diffuse;
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
}`,Ag=`#include <common>
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
}`,wg=`uniform vec3 diffuse;
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
}`,Rg=`#define LAMBERT
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
}`,Cg=`#define LAMBERT
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
}`,Lg=`#define MATCAP
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
}`,Pg=`#define MATCAP
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
}`,Ig=`#define NORMAL
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
}`,Dg=`#define NORMAL
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
}`,Ng=`#define PHONG
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
}`,Ug=`#define PHONG
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
}`,kg=`#define STANDARD
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
}`,Og=`#define STANDARD
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
}`,Fg=`#define TOON
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
}`,Bg=`#define TOON
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
}`,$g=`uniform float size;
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
}`,zg=`uniform vec3 diffuse;
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
}`,Hg=`#include <common>
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
}`,Gg=`uniform vec3 color;
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
}`,Vg=`uniform float rotation;
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
}`,Wg=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:hp,alphahash_pars_fragment:fp,alphamap_fragment:pp,alphamap_pars_fragment:mp,alphatest_fragment:gp,alphatest_pars_fragment:vp,aomap_fragment:_p,aomap_pars_fragment:bp,batching_pars_vertex:yp,batching_vertex:xp,begin_vertex:Sp,beginnormal_vertex:Mp,bsdfs:Ep,iridescence_fragment:Tp,bumpmap_pars_fragment:Ap,clipping_planes_fragment:wp,clipping_planes_pars_fragment:Rp,clipping_planes_pars_vertex:Cp,clipping_planes_vertex:Lp,color_fragment:Pp,color_pars_fragment:Ip,color_pars_vertex:Dp,color_vertex:Np,common:Up,cube_uv_reflection_fragment:kp,defaultnormal_vertex:Op,displacementmap_pars_vertex:Fp,displacementmap_vertex:Bp,emissivemap_fragment:$p,emissivemap_pars_fragment:zp,colorspace_fragment:Hp,colorspace_pars_fragment:Gp,envmap_fragment:Vp,envmap_common_pars_fragment:Wp,envmap_pars_fragment:Xp,envmap_pars_vertex:qp,envmap_physical_pars_fragment:am,envmap_vertex:Yp,fog_vertex:Zp,fog_pars_vertex:Kp,fog_fragment:Jp,fog_pars_fragment:Qp,gradientmap_pars_fragment:jp,lightmap_pars_fragment:em,lights_lambert_fragment:tm,lights_lambert_pars_fragment:nm,lights_pars_begin:im,lights_toon_fragment:rm,lights_toon_pars_fragment:sm,lights_phong_fragment:om,lights_phong_pars_fragment:lm,lights_physical_fragment:cm,lights_physical_pars_fragment:dm,lights_fragment_begin:um,lights_fragment_maps:hm,lights_fragment_end:fm,lightprobes_pars_fragment:pm,logdepthbuf_fragment:mm,logdepthbuf_pars_fragment:gm,logdepthbuf_pars_vertex:vm,logdepthbuf_vertex:_m,map_fragment:bm,map_pars_fragment:ym,map_particle_fragment:xm,map_particle_pars_fragment:Sm,metalnessmap_fragment:Mm,metalnessmap_pars_fragment:Em,morphinstance_vertex:Tm,morphcolor_vertex:Am,morphnormal_vertex:wm,morphtarget_pars_vertex:Rm,morphtarget_vertex:Cm,normal_fragment_begin:Lm,normal_fragment_maps:Pm,normal_pars_fragment:Im,normal_pars_vertex:Dm,normal_vertex:Nm,normalmap_pars_fragment:Um,clearcoat_normal_fragment_begin:km,clearcoat_normal_fragment_maps:Om,clearcoat_pars_fragment:Fm,iridescence_pars_fragment:Bm,opaque_fragment:$m,packing:zm,premultiplied_alpha_fragment:Hm,project_vertex:Gm,dithering_fragment:Vm,dithering_pars_fragment:Wm,roughnessmap_fragment:Xm,roughnessmap_pars_fragment:qm,shadowmap_pars_fragment:Ym,shadowmap_pars_vertex:Zm,shadowmap_vertex:Km,shadowmask_pars_fragment:Jm,skinbase_vertex:Qm,skinning_pars_vertex:jm,skinning_vertex:eg,skinnormal_vertex:tg,specularmap_fragment:ng,specularmap_pars_fragment:ig,tonemapping_fragment:ag,tonemapping_pars_fragment:rg,transmission_fragment:sg,transmission_pars_fragment:og,uv_pars_fragment:lg,uv_pars_vertex:cg,uv_vertex:dg,worldpos_vertex:ug,background_vert:hg,background_frag:fg,backgroundCube_vert:pg,backgroundCube_frag:mg,cube_vert:gg,cube_frag:vg,depth_vert:_g,depth_frag:bg,distance_vert:yg,distance_frag:xg,equirect_vert:Sg,equirect_frag:Mg,linedashed_vert:Eg,linedashed_frag:Tg,meshbasic_vert:Ag,meshbasic_frag:wg,meshlambert_vert:Rg,meshlambert_frag:Cg,meshmatcap_vert:Lg,meshmatcap_frag:Pg,meshnormal_vert:Ig,meshnormal_frag:Dg,meshphong_vert:Ng,meshphong_frag:Ug,meshphysical_vert:kg,meshphysical_frag:Og,meshtoon_vert:Fg,meshtoon_frag:Bg,points_vert:$g,points_frag:zg,shadow_vert:Hg,shadow_frag:Gg,sprite_vert:Vg,sprite_frag:Wg},ge={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},On={basic:{uniforms:an([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:an([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:an([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:an([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:an([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new je(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:an([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:an([ge.points,ge.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:an([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:an([ge.common,ge.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:an([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:an([ge.sprite,ge.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:an([ge.common,ge.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:an([ge.lights,ge.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};On.physical={uniforms:an([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Kr={r:0,b:0,g:0},Xg=new yt,Lu=new We;Lu.set(-1,0,0,0,1,0,0,0,1);function qg(t,e,n,i,a,r){const s=new je(0);let o=a===!0?0:1,l,c,d=null,h=0,u=null;function p(T){let D=T.isScene===!0?T.background:null;if(D&&D.isTexture){const x=T.backgroundBlurriness>0;D=e.get(D,x)}return D}function _(T){let D=!1;const x=p(T);x===null?g(s,o):x&&x.isColor&&(g(x,1),D=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||D)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(T,D){const x=p(D);x&&(x.isCubeTexture||x.mapping===Ts)?(c===void 0&&(c=new Je(new rn(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Ma(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Xg.makeRotationFromEuler(D.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Lu),c.material.toneMapped=st.getTransfer(x.colorSpace)!==mt,(d!==x||h!==x.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,d=x,h=x.version,u=t.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Je(new cn(2,2),new qn({name:"BackgroundMaterial",uniforms:Ma(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,l.material.toneMapped=st.getTransfer(x.colorSpace)!==mt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||h!==x.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,d=x,h=x.version,u=t.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function g(T,D){T.getRGB(Kr,Au(t)),n.buffers.color.setClear(Kr.r,Kr.g,Kr.b,D,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(T,D=1){s.set(T),o=D,g(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,g(s,o)},render:_,addToRenderList:y,dispose:f}}function Yg(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},a=u(null);let r=a,s=!1;function o(R,I,O,M,U){let Y=!1;const V=h(R,M,O,I);r!==V&&(r=V,c(r.object)),Y=p(R,M,O,U),Y&&_(R,M,O,U),U!==null&&e.update(U,t.ELEMENT_ARRAY_BUFFER),(Y||s)&&(s=!1,x(R,I,O,M),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return t.createVertexArray()}function c(R){return t.bindVertexArray(R)}function d(R){return t.deleteVertexArray(R)}function h(R,I,O,M){const U=M.wireframe===!0;let Y=i[I.id];Y===void 0&&(Y={},i[I.id]=Y);const V=R.isInstancedMesh===!0?R.id:0;let te=Y[V];te===void 0&&(te={},Y[V]=te);let q=te[O.id];q===void 0&&(q={},te[O.id]=q);let Q=q[U];return Q===void 0&&(Q=u(l()),q[U]=Q),Q}function u(R){const I=[],O=[],M=[];for(let U=0;U<n;U++)I[U]=0,O[U]=0,M[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:M,object:R,attributes:{},index:null}}function p(R,I,O,M){const U=r.attributes,Y=I.attributes;let V=0;const te=O.getAttributes();for(const q in te)if(te[q].location>=0){const ie=U[q];let Re=Y[q];if(Re===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(Re=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(Re=R.instanceColor)),ie===void 0||ie.attribute!==Re||Re&&ie.data!==Re.data)return!0;V++}return r.attributesNum!==V||r.index!==M}function _(R,I,O,M){const U={},Y=I.attributes;let V=0;const te=O.getAttributes();for(const q in te)if(te[q].location>=0){let ie=Y[q];ie===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor));const Re={};Re.attribute=ie,ie&&ie.data&&(Re.data=ie.data),U[q]=Re,V++}r.attributes=U,r.attributesNum=V,r.index=M}function y(){const R=r.newAttributes;for(let I=0,O=R.length;I<O;I++)R[I]=0}function g(R){f(R,0)}function f(R,I){const O=r.newAttributes,M=r.enabledAttributes,U=r.attributeDivisors;O[R]=1,M[R]===0&&(t.enableVertexAttribArray(R),M[R]=1),U[R]!==I&&(t.vertexAttribDivisor(R,I),U[R]=I)}function T(){const R=r.newAttributes,I=r.enabledAttributes;for(let O=0,M=I.length;O<M;O++)I[O]!==R[O]&&(t.disableVertexAttribArray(O),I[O]=0)}function D(R,I,O,M,U,Y,V){V===!0?t.vertexAttribIPointer(R,I,O,U,Y):t.vertexAttribPointer(R,I,O,M,U,Y)}function x(R,I,O,M){y();const U=M.attributes,Y=O.getAttributes(),V=I.defaultAttributeValues;for(const te in Y){const q=Y[te];if(q.location>=0){let Q=U[te];if(Q===void 0&&(te==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),te==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor)),Q!==void 0){const ie=Q.normalized,Re=Q.itemSize,se=e.get(Q);if(se===void 0)continue;const ut=se.buffer,rt=se.type,dt=se.bytesPerElement,K=rt===t.INT||rt===t.UNSIGNED_INT||Q.gpuType===Ul;if(Q.isInterleavedBufferAttribute){const ne=Q.data,Ee=ne.stride,Ve=Q.offset;if(ne.isInstancedInterleavedBuffer){for(let Se=0;Se<q.locationSize;Se++)f(q.location+Se,ne.meshPerAttribute);R.isInstancedMesh!==!0&&M._maxInstanceCount===void 0&&(M._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Se=0;Se<q.locationSize;Se++)g(q.location+Se);t.bindBuffer(t.ARRAY_BUFFER,ut);for(let Se=0;Se<q.locationSize;Se++)D(q.location+Se,Re/q.locationSize,rt,ie,Ee*dt,(Ve+Re/q.locationSize*Se)*dt,K)}else{if(Q.isInstancedBufferAttribute){for(let ne=0;ne<q.locationSize;ne++)f(q.location+ne,Q.meshPerAttribute);R.isInstancedMesh!==!0&&M._maxInstanceCount===void 0&&(M._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ne=0;ne<q.locationSize;ne++)g(q.location+ne);t.bindBuffer(t.ARRAY_BUFFER,ut);for(let ne=0;ne<q.locationSize;ne++)D(q.location+ne,Re/q.locationSize,rt,ie,Re*dt,Re/q.locationSize*ne*dt,K)}}else if(V!==void 0){const ie=V[te];if(ie!==void 0)switch(ie.length){case 2:t.vertexAttrib2fv(q.location,ie);break;case 3:t.vertexAttrib3fv(q.location,ie);break;case 4:t.vertexAttrib4fv(q.location,ie);break;default:t.vertexAttrib1fv(q.location,ie)}}}}T()}function E(){S();for(const R in i){const I=i[R];for(const O in I){const M=I[O];for(const U in M){const Y=M[U];for(const V in Y)d(Y[V].object),delete Y[V];delete M[U]}}delete i[R]}}function A(R){if(i[R.id]===void 0)return;const I=i[R.id];for(const O in I){const M=I[O];for(const U in M){const Y=M[U];for(const V in Y)d(Y[V].object),delete Y[V];delete M[U]}}delete i[R.id]}function C(R){for(const I in i){const O=i[I];for(const M in O){const U=O[M];if(U[R.id]===void 0)continue;const Y=U[R.id];for(const V in Y)d(Y[V].object),delete Y[V];delete U[R.id]}}}function m(R){for(const I in i){const O=i[I],M=R.isInstancedMesh===!0?R.id:0,U=O[M];if(U!==void 0){for(const Y in U){const V=U[Y];for(const te in V)d(V[te].object),delete V[te];delete U[Y]}delete O[M],Object.keys(O).length===0&&delete i[I]}}}function S(){L(),s=!0,r!==a&&(r=a,c(r.object))}function L(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:S,resetDefaultState:L,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:m,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:g,disableUnusedAttributes:T}}function Zg(t,e,n){let i;function a(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function s(l,c,d){d!==0&&(t.drawArraysInstanced(i,l,c,d),n.update(c,i,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let u=0;for(let p=0;p<d;p++)u+=c[p];n.update(u,i,1)}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o}function Kg(t,e,n,i){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");a=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(C){return!(C!==Cn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const m=C===Xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==vn&&C!==zn&&!m&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&($e("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&$e("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),T=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),D=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:T,maxVaryings:D,maxFragmentUniforms:x,maxSamples:E,samples:A}}function Jg(t){const e=this;let n=null,i=0,a=!1,r=!1;const s=new mi,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||i!==0||a;return a=u,i=h.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){n=d(h,u,0)},this.setState=function(h,u,p){const _=h.clippingPlanes,y=h.clipIntersection,g=h.clipShadows,f=t.get(h);if(!a||_===null||_.length===0||r&&!g)r?d(null):c();else{const T=r?0:i,D=T*4;let x=f.clippingState||null;l.value=x,x=d(_,u,D,p);for(let E=0;E!==D;++E)x[E]=n[E];f.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,u,p,_){const y=h!==null?h.length:0;let g=null;if(y!==0){if(g=l.value,_!==!0||g===null){const f=p+y*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(g===null||g.length<f)&&(g=new Float32Array(f));for(let D=0,x=p;D!==y;++D,x+=4)s.copy(h[D]).applyMatrix4(T,o),s.normal.toArray(g,x),g[x+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}const _a=4,Qg=6,jg=20,e0=256,Ga=new Jl,hd=new je;let bo=null,yo=0,xo=0,So=!1;const t0=new B,Li=new B;class fd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,a=100,r={}){const{size:s=256,position:o=t0}=r;bo=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),So=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=md(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(bo,yo,xo),this._renderer.xr.enabled=So,e.scissorTest=!1,ha(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===zi||e.mapping===Sa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bo=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),So=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:Xn,format:Cn,colorSpace:us,depthBuffer:!1},a=pd(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pd(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=n0(r)),this._blurMaterial=a0(r,e,n),this._ggxMaterial=i0(r,e,n)}return a}_compileMaterial(e){const n=new Je(new Vt,e);this._renderer.compile(n,Ga)}_sceneToCubeUV(e,n,i,a,r){const l=new gn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(hd),h.toneMapping=Gn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(a),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Je(new rn,new yn({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,g=y.material;let f=!1;const T=e.background;T?T.isColor&&(g.color.copy(T),e.background=null,f=!0):(g.color.copy(hd),f=!0);for(let D=0;D<6;D++){const x=D%3;x===0?(l.up.set(0,c[D],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[D],r.y,r.z)):x===1?(l.up.set(0,0,c[D]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[D],r.z)):(l.up.set(0,c[D],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[D]));const E=this._cubeSize;ha(a,x*E,D>2?E:0,E,E),h.setRenderTarget(a),f&&h.render(y,l),h.render(e,l)}h.toneMapping=p,h.autoClear=u,e.background=T}_textureToCubeUV(e,n){const i=this._renderer,a=e.mapping===zi||e.mapping===Sa;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=md());const r=a?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ha(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Ga)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let r=1;r<a;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const a=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;const l=s.uniforms,c=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),u=c*1.25,p=h*u,{_lodMax:_}=this,y=this._sizeLods[i],g=3*y*(i>_-_a?i-_+_a:0),f=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-n,ha(r,g,f,3*y,2*y),a.setRenderTarget(r),a.render(o,Ga),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,ha(e,g,f,3*y,2*y),a.setRenderTarget(e),a.render(o,Ga)}_blur(e,n,i,a){const r=this._pingPongRenderTarget,s=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(e,r,n,i,s),this._blurPass(r,e,i,i,s)}_blurPass(e,n,i,a,r){const s=this._renderer,o=this._blurMaterial,l=this._lodMeshes[a];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;const d=this._sizeLods[a],h=3*d*(a>this._lodMax-_a?a-this._lodMax+_a:0),u=4*(this._cubeSize-d);ha(n,h,u,3*d,2*d),s.setRenderTarget(n),s.render(l,Ga)}}function n0(t){const e=[],n=[];let i=t;const a=t-_a+1+Qg;for(let r=0;r<a;r++){const s=Math.pow(2,i);e.push(s);const o=1/(s-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,u=6,p=3,_=new Float32Array(p*u*h),y=new Float32Array(p*u*h);for(let f=0;f<h;f++){const T=f%3*2/3-1,D=f>2?0:-1,x=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];_.set(x,p*u*f);for(let E=0;E<u;E++){const A=d[E*2]*2-1,C=d[E*2+1]*2-1;f===0?Li.set(1,C,A):f===1?Li.set(-A,1,-C):f===2?Li.set(-A,C,1):f===3?Li.set(-1,C,-A):f===4?Li.set(-A,-1,C):Li.set(A,C,-1),Li.toArray(y,(f*u+E)*p)}}const g=new Vt;g.setAttribute("position",new Pn(_,p)),g.setAttribute("outputDirection",new Pn(y,p)),n.push(new Je(g,null)),i>_a&&i--}return{lodMeshes:n,sizeLods:e}}function pd(t,e,n){const i=new Ln(t,e,n);return i.texture.mapping=Ts,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ha(t,e,n,i,a){t.viewport.set(e,n,i,a),t.scissor.set(e,n,i,a)}function i0(t,e,n){return new qn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:e0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rs(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function a0(t,e,n){return new qn({name:"SphericalGaussianBlur",defines:{SAMPLES:jg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Rs(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function md(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rs(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function gd(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Rs(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Pu extends Ln{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new Eu(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new rn(5,5,5),r=new qn({name:"CubemapFromEquirect",uniforms:Ma(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:ti});r.uniforms.tEquirect.value=n;const s=new Je(a,r),o=n.minFilter;return n.minFilter===Ni&&(n.minFilter=Jt),new sp(1,10,this).update(e,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,n=!0,i=!0,a=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,a);e.setRenderTarget(r)}}function r0(t){let e=new WeakMap,n=new WeakMap,i=null;function a(u,p=!1){return u==null?null:p?s(u):r(u)}function r(u){if(u&&u.isTexture){const p=u.mapping;if(p===$s||p===zs)if(e.has(u)){const _=e.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const y=new Pu(_.height);return y.fromEquirectangularTexture(t,u),e.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){const p=u.mapping,_=p===$s||p===zs,y=p===zi||p===Sa;if(_||y){let g=n.get(u);const f=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new fd(t)),g=_?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{const T=u.image;return _&&T&&T.height>0||y&&T&&l(T)?(i===null&&(i=new fd(t)),g=_?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",d),g.texture):null}}}return u}function o(u,p){return p===$s?u.mapping=zi:p===zs&&(u.mapping=Sa),u}function l(u){let p=0;const _=6;for(let y=0;y<_;y++)u[y]!==void 0&&p++;return p===_}function c(u){const p=u.target;p.removeEventListener("dispose",c);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function d(u){const p=u.target;p.removeEventListener("dispose",d);const _=n.get(p);_!==void 0&&(n.delete(p),_.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:h}}function s0(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const a=t.getExtension(i);return e[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&ba("WebGLRenderer: "+i+" extension not supported."),a}}}function o0(t,e,n,i){const a={},r=new WeakMap;function s(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",s),delete a[u.id];const p=r.get(u);p&&(e.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(h,u){return a[u.id]===!0||(u.addEventListener("dispose",s),a[u.id]=!0,n.memory.geometries++),u}function l(h){const u=h.attributes;for(const p in u)e.update(u[p],t.ARRAY_BUFFER)}function c(h){const u=[],p=h.index,_=h.attributes.position;let y=0;if(_===void 0)return;if(p!==null){const T=p.array;y=p.version;for(let D=0,x=T.length;D<x;D+=3){const E=T[D+0],A=T[D+1],C=T[D+2];u.push(E,A,A,C,C,E)}}else{const T=_.array;y=_.version;for(let D=0,x=T.length/3-1;D<x;D+=3){const E=D+0,A=D+1,C=D+2;u.push(E,A,A,C,C,E)}}const g=new(_.count>=65535?yu:bu)(u,1);g.version=y;const f=r.get(h);f&&e.remove(f),r.set(h,g)}function d(h){const u=r.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function l0(t,e,n){let i;function a(h){i=h}let r,s;function o(h){r=h.type,s=h.bytesPerElement}function l(h,u){t.drawElements(i,u,r,h*s),n.update(u,i,1)}function c(h,u,p){p!==0&&(t.drawElementsInstanced(i,u,r,h*s,p),n.update(u,i,p))}function d(h,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,h,0,p);let y=0;for(let g=0;g<p;g++)y+=u[g];n.update(y,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function c0(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:ot("WebGLInfo: Unknown draw mode:",s);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:i}}function d0(t,e,n){const i=new WeakMap,a=new Ct;function r(s,o,l){const c=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==h){let L=function(){m.dispose(),i.delete(o),o.removeEventListener("dispose",L)};var p=L;u!==void 0&&u.texture.dispose();const _=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],D=o.morphAttributes.color||[];let x=0;_===!0&&(x=1),y===!0&&(x=2),g===!0&&(x=3);let E=o.attributes.position.count*x,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const C=new Float32Array(E*A*4*h),m=new vu(C,E,A,h);m.type=zn,m.needsUpdate=!0;const S=x*4;for(let R=0;R<h;R++){const I=f[R],O=T[R],M=D[R],U=E*A*4*R;for(let Y=0;Y<I.count;Y++){const V=Y*S;_===!0&&(a.fromBufferAttribute(I,Y),C[U+V+0]=a.x,C[U+V+1]=a.y,C[U+V+2]=a.z,C[U+V+3]=0),y===!0&&(a.fromBufferAttribute(O,Y),C[U+V+4]=a.x,C[U+V+5]=a.y,C[U+V+6]=a.z,C[U+V+7]=0),g===!0&&(a.fromBufferAttribute(M,Y),C[U+V+8]=a.x,C[U+V+9]=a.y,C[U+V+10]=a.z,C[U+V+11]=M.itemSize===4?a.w:1)}}u={count:h,texture:m,size:new Xe(E,A)},i.set(o,u),o.addEventListener("dispose",L)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const y=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:r}}function u0(t,e,n,i,a){let r=new WeakMap;function s(c){const d=a.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==d&&(p.update(),r.set(p,d))}return u}function o(){r=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:s,dispose:o}}const h0={[tu]:"LINEAR_TONE_MAPPING",[nu]:"REINHARD_TONE_MAPPING",[iu]:"CINEON_TONE_MAPPING",[Nl]:"ACES_FILMIC_TONE_MAPPING",[ru]:"AGX_TONE_MAPPING",[su]:"NEUTRAL_TONE_MAPPING",[au]:"CUSTOM_TONE_MAPPING"};function f0(t,e,n,i,a,r){const s=new Ln(e,n,{type:t,depthBuffer:a,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Vt;c.setAttribute("position",new Ot([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ot([0,2,0,0,2,0],2));const d=new Qf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Je(c,d),u=new Jl(-1,1,1,-1,0,1);let p=null,_=null,y=!1,g,f=null,T=[],D=!1;this.setSize=function(x,E){s.setSize(x,E),o!==null&&o.setSize(x,E),l!==null&&l.setSize(x,E);for(let A=0;A<T.length;A++){const C=T[A];C.setSize&&C.setSize(x,E)}},this.setEffects=function(x){T=x,D=T.length>0&&T[0].isRenderPass===!0;const E=s.width,A=s.height;T.length>0&&o===null&&(o=new Ln(E,A,{type:Xn,depthBuffer:!1,stencilBuffer:!1}),l=new Ln(E,A,{type:Xn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<T.length;C++){const m=T[C];m.setSize&&m.setSize(E,A)}},this.begin=function(x,E){if(y||x.toneMapping===Gn&&T.length===0)return!1;if(f=E,E!==null){const A=E.width,C=E.height;(s.width!==A||s.height!==C)&&this.setSize(A,C)}return D===!1&&x.setRenderTarget(s),g=x.toneMapping,x.toneMapping=Gn,!0},this.hasRenderPass=function(){return D},this.end=function(x,E){x.toneMapping=g,y=!0;let A=s,C=o;for(let m=0;m<T.length;m++){const S=T[m];S.enabled!==!1&&(S.render(x,C,A,E),S.needsSwap!==!1&&(A=C,C=C===o?l:o))}if(p!==x.outputColorSpace||_!==x.toneMapping){p=x.outputColorSpace,_=x.toneMapping,d.defines={},st.getTransfer(p)===mt&&(d.defines.SRGB_TRANSFER="");const m=h0[_];m&&(d.defines[m]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=A.texture,x.setRenderTarget(f),x.render(h,u),f=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}const Iu=new Qt,Ml=new or(1,1),Du=new vu,Nu=new Af,Uu=new Eu,vd=[],_d=[],bd=new Float32Array(16),yd=new Float32Array(9),xd=new Float32Array(4);function La(t,e,n){const i=t[0];if(i<=0||i>0)return t;const a=e*n;let r=vd[a];if(r===void 0&&(r=new Float32Array(a),vd[a]=r),e!==0){i.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=n,t[s].toArray(r,o)}return r}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Cs(t,e){let n=_d[e];n===void 0&&(n=new Int32Array(e),_d[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function p0(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function m0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),Bt(n,e)}}function g0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),Bt(n,e)}}function v0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),Bt(n,e)}}function _0(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Bt(n,e)}else{if(Ft(n,i))return;xd.set(i),t.uniformMatrix2fv(this.addr,!1,xd),Bt(n,i)}}function b0(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Bt(n,e)}else{if(Ft(n,i))return;yd.set(i),t.uniformMatrix3fv(this.addr,!1,yd),Bt(n,i)}}function y0(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Bt(n,e)}else{if(Ft(n,i))return;bd.set(i),t.uniformMatrix4fv(this.addr,!1,bd),Bt(n,i)}}function x0(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function S0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),Bt(n,e)}}function M0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),Bt(n,e)}}function E0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),Bt(n,e)}}function T0(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function A0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),Bt(n,e)}}function w0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),Bt(n,e)}}function R0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),Bt(n,e)}}function C0(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a);let r;this.type===t.SAMPLER_2D_SHADOW?(Ml.compareFunction=n.isReversedDepthBuffer()?Hl:zl,r=Ml):r=Iu,n.setTexture2D(e||r,a)}function L0(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(e||Nu,a)}function P0(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(e||Uu,a)}function I0(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(e||Du,a)}function D0(t){switch(t){case 5126:return p0;case 35664:return m0;case 35665:return g0;case 35666:return v0;case 35674:return _0;case 35675:return b0;case 35676:return y0;case 5124:case 35670:return x0;case 35667:case 35671:return S0;case 35668:case 35672:return M0;case 35669:case 35673:return E0;case 5125:return T0;case 36294:return A0;case 36295:return w0;case 36296:return R0;case 35678:case 36198:case 36298:case 36306:case 35682:return C0;case 35679:case 36299:case 36307:return L0;case 35680:case 36300:case 36308:case 36293:return P0;case 36289:case 36303:case 36311:case 36292:return I0}}function N0(t,e){t.uniform1fv(this.addr,e)}function U0(t,e){const n=La(e,this.size,2);t.uniform2fv(this.addr,n)}function k0(t,e){const n=La(e,this.size,3);t.uniform3fv(this.addr,n)}function O0(t,e){const n=La(e,this.size,4);t.uniform4fv(this.addr,n)}function F0(t,e){const n=La(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function B0(t,e){const n=La(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function $0(t,e){const n=La(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function z0(t,e){t.uniform1iv(this.addr,e)}function H0(t,e){t.uniform2iv(this.addr,e)}function G0(t,e){t.uniform3iv(this.addr,e)}function V0(t,e){t.uniform4iv(this.addr,e)}function W0(t,e){t.uniform1uiv(this.addr,e)}function X0(t,e){t.uniform2uiv(this.addr,e)}function q0(t,e){t.uniform3uiv(this.addr,e)}function Y0(t,e){t.uniform4uiv(this.addr,e)}function Z0(t,e,n){const i=this.cache,a=e.length,r=Cs(n,a);Ft(i,r)||(t.uniform1iv(this.addr,r),Bt(i,r));let s;this.type===t.SAMPLER_2D_SHADOW?s=Ml:s=Iu;for(let o=0;o!==a;++o)n.setTexture2D(e[o]||s,r[o])}function K0(t,e,n){const i=this.cache,a=e.length,r=Cs(n,a);Ft(i,r)||(t.uniform1iv(this.addr,r),Bt(i,r));for(let s=0;s!==a;++s)n.setTexture3D(e[s]||Nu,r[s])}function J0(t,e,n){const i=this.cache,a=e.length,r=Cs(n,a);Ft(i,r)||(t.uniform1iv(this.addr,r),Bt(i,r));for(let s=0;s!==a;++s)n.setTextureCube(e[s]||Uu,r[s])}function Q0(t,e,n){const i=this.cache,a=e.length,r=Cs(n,a);Ft(i,r)||(t.uniform1iv(this.addr,r),Bt(i,r));for(let s=0;s!==a;++s)n.setTexture2DArray(e[s]||Du,r[s])}function j0(t){switch(t){case 5126:return N0;case 35664:return U0;case 35665:return k0;case 35666:return O0;case 35674:return F0;case 35675:return B0;case 35676:return $0;case 5124:case 35670:return z0;case 35667:case 35671:return H0;case 35668:case 35672:return G0;case 35669:case 35673:return V0;case 5125:return W0;case 36294:return X0;case 36295:return q0;case 36296:return Y0;case 35678:case 36198:case 36298:case 36306:case 35682:return Z0;case 35679:case 36299:case 36307:return K0;case 35680:case 36300:case 36308:case 36293:return J0;case 36289:case 36303:case 36311:case 36292:return Q0}}class ev{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=D0(n.type)}}class tv{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=j0(n.type)}}class nv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(e,n[o.id],i)}}}const Mo=/(\w+)(\])?(\[|\.)?/g;function Sd(t,e){t.seq.push(e),t.map[e.id]=e}function iv(t,e,n){const i=t.name,a=i.length;for(Mo.lastIndex=0;;){const r=Mo.exec(i),s=Mo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){Sd(n,c===void 0?new ev(o,t,e):new tv(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new nv(o),Sd(n,h)),n=h}}}class os{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(n,s),l=e.getUniformLocation(n,o.name);iv(o,l,this)}const a=[],r=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(s):r.push(s);a.length>0&&(this.seq=a.concat(r))}setValue(e,n,i,a){const r=this.map[n];r!==void 0&&r.setValue(e,i,a)}setOptional(e,n,i){const a=n[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,n,i,a){for(let r=0,s=n.length;r!==s;++r){const o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,n){const i=[];for(let a=0,r=e.length;a!==r;++a){const s=e[a];s.id in n&&i.push(s)}return i}}function Md(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const av=37297;let rv=0;function sv(t,e){const n=t.split(`
`),i=[],a=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}const Ed=new We;function ov(t){st._getMatrix(Ed,st.workingColorSpace,t);const e=`mat3( ${Ed.elements.map(n=>n.toFixed(4))} )`;switch(st.getTransfer(t)){case hs:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Td(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+sv(t.getShaderSource(e),o)}else return r}function lv(t,e){const n=ov(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const cv={[tu]:"Linear",[nu]:"Reinhard",[iu]:"Cineon",[Nl]:"ACESFilmic",[ru]:"AgX",[su]:"Neutral",[au]:"Custom"};function dv(t,e){const n=cv[e];return n===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Jr=new B;function uv(){st.getLuminanceCoefficients(Jr);const t=Jr.x.toFixed(4),e=Jr.y.toFixed(4),n=Jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hv(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Za).join(`
`)}function fv(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function pv(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=t.getActiveAttrib(e,a),s=r.name;let o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),n[s]={type:r.type,location:t.getAttribLocation(e,s),locationSize:o}}return n}function Za(t){return t!==""}function Ad(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wd(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mv=/^[ \t]*#include +<([\w\d./]+)>/gm;function El(t){return t.replace(mv,vv)}const gv=new Map;function vv(t,e){let n=Ke[e];if(n===void 0){const i=gv.get(e);if(i!==void 0)n=Ke[i],$e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return El(n)}const _v=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rd(t){return t.replace(_v,bv)}function bv(t,e,n,i){let a="";for(let r=parseInt(e);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Cd(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const yv={[ns]:"SHADOWMAP_TYPE_PCF",[Ya]:"SHADOWMAP_TYPE_VSM"};function xv(t){return yv[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Sv={[zi]:"ENVMAP_TYPE_CUBE",[Sa]:"ENVMAP_TYPE_CUBE",[Ts]:"ENVMAP_TYPE_CUBE_UV"};function Mv(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":Sv[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const Ev={[Sa]:"ENVMAP_MODE_REFRACTION"};function Tv(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":Ev[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Av={[eu]:"ENVMAP_BLENDING_MULTIPLY",[af]:"ENVMAP_BLENDING_MIX",[rf]:"ENVMAP_BLENDING_ADD"};function wv(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Av[t.combine]||"ENVMAP_BLENDING_NONE"}function Rv(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function Cv(t,e,n,i){const a=t.getContext(),r=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=xv(n),c=Mv(n),d=Tv(n),h=wv(n),u=Rv(n),p=hv(n),_=fv(r),y=a.createProgram();let g,f,T=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Za).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Za).join(`
`),f.length>0&&(f+=`
`)):(g=[Cd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Za).join(`
`),f=[Cd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Gn?"#define TONE_MAPPING":"",n.toneMapping!==Gn?Ke.tonemapping_pars_fragment:"",n.toneMapping!==Gn?dv("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,lv("linearToOutputTexel",n.outputColorSpace),uv(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Za).join(`
`)),s=El(s),s=Ad(s,n),s=wd(s,n),o=El(o),o=Ad(o,n),o=wd(o,n),s=Rd(s),o=Rd(o),n.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===Lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const D=T+g+s,x=T+f+o,E=Md(a,a.VERTEX_SHADER,D),A=Md(a,a.FRAGMENT_SHADER,x);a.attachShader(y,E),a.attachShader(y,A),n.index0AttributeName!==void 0?a.bindAttribLocation(y,0,n.index0AttributeName):n.hasPositionAttribute===!0&&a.bindAttribLocation(y,0,"position"),a.linkProgram(y);function C(R){if(t.debug.checkShaderErrors){const I=a.getProgramInfoLog(y)||"",O=a.getShaderInfoLog(E)||"",M=a.getShaderInfoLog(A)||"",U=I.trim(),Y=O.trim(),V=M.trim();let te=!0,q=!0;if(a.getProgramParameter(y,a.LINK_STATUS)===!1)if(te=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(a,y,E,A);else{const Q=Td(a,E,"vertex"),ie=Td(a,A,"fragment");ot("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(y,a.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+U+`
`+Q+`
`+ie)}else U!==""?$e("WebGLProgram: Program Info Log:",U):(Y===""||V==="")&&(q=!1);q&&(R.diagnostics={runnable:te,programLog:U,vertexShader:{log:Y,prefix:g},fragmentShader:{log:V,prefix:f}})}a.deleteShader(E),a.deleteShader(A),m=new os(a,y),S=pv(a,y)}let m;this.getUniforms=function(){return m===void 0&&C(this),m};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=a.getProgramParameter(y,av)),L},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=rv++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=A,this}let Lv=0;class Pv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Iv(e),n.set(e,i)),i}}class Iv{constructor(e){this.id=Lv++,this.code=e,this.usedTimes=0}}function Dv(t){return t===Hi||t===cs||t===ds}function Nv(t,e,n,i,a,r){const s=new Vl,o=new Pv,l=new Set,c=[],d=new Map,h=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(m){return l.add(m),m===0?"uv":`uv${m}`}function y(m,S,L,R,I,O){const M=R.fog,U=I.geometry,Y=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?R.environment:null,V=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,te=e.get(m.envMap||Y,V),q=te&&te.mapping===Ts?te.image.height:null,Q=p[m.type];m.precision!==null&&(u=i.getMaxPrecision(m.precision),u!==m.precision&&$e("WebGLProgram.getParameters:",m.precision,"not supported, using",u,"instead."));const ie=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Re=ie!==void 0?ie.length:0;let se=0;U.morphAttributes.position!==void 0&&(se=1),U.morphAttributes.normal!==void 0&&(se=2),U.morphAttributes.color!==void 0&&(se=3);let ut,rt,dt,K;if(Q){const St=On[Q];ut=St.vertexShader,rt=St.fragmentShader}else{ut=m.vertexShader,rt=m.fragmentShader;const St=o.getVertexShaderStage(m),ht=o.getFragmentShaderStage(m);o.update(m,St,ht),dt=St.id,K=ht.id}const ne=t.getRenderTarget(),Ee=t.state.buffers.depth.getReversed(),Ve=I.isInstancedMesh===!0,Se=I.isBatchedMesh===!0,et=!!m.map,Ut=!!m.matcap,tt=!!te,ct=!!m.aoMap,xt=!!m.lightMap,at=!!m.bumpMap&&m.wireframe===!1,At=!!m.normalMap,$t=!!m.displacementMap,ln=!!m.emissiveMap,Rt=!!m.metalnessMap,Pt=!!m.roughnessMap,F=m.anisotropy>0,Wt=m.clearcoat>0,pt=m.dispersion>0,w=m.retroreflectivity>0,v=m.iridescence>0,$=m.sheen>0,W=m.transmission>0,Z=F&&!!m.anisotropyMap,le=Wt&&!!m.clearcoatMap,de=Wt&&!!m.clearcoatNormalMap,J=Wt&&!!m.clearcoatRoughnessMap,ee=v&&!!m.iridescenceMap,ue=v&&!!m.iridescenceThicknessMap,De=$&&!!m.sheenColorMap,me=$&&!!m.sheenRoughnessMap,he=!!m.specularMap,Ne=!!m.specularColorMap,Fe=!!m.specularIntensityMap,qe=W&&!!m.transmissionMap,k=W&&!!m.thicknessMap,fe=!!m.gradientMap,j=!!m.alphaMap,pe=m.alphaTest>0,be=!!m.alphaHash,re=!!m.extensions;let ke=Gn;m.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(ke=t.toneMapping);const Ce={shaderID:Q,shaderType:m.type,shaderName:m.name,vertexShader:ut,fragmentShader:rt,defines:m.defines,customVertexShaderID:dt,customFragmentShaderID:K,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:u,batching:Se,batchingColor:Se&&I._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&I.instanceColor!==null,instancingMorph:Ve&&I.morphTexture!==null,outputColorSpace:ne===null?t.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:et,matcap:Ut,envMap:tt,envMapMode:tt&&te.mapping,envMapCubeUVHeight:q,aoMap:ct,lightMap:xt,bumpMap:at,normalMap:At,displacementMap:$t,emissiveMap:ln,normalMapObjectSpace:At&&m.normalMapType===lf,normalMapTangentSpace:At&&m.normalMapType===_l,packedNormalMap:At&&m.normalMapType===_l&&Dv(m.normalMap.format),metalnessMap:Rt,roughnessMap:Pt,anisotropy:F,anisotropyMap:Z,clearcoat:Wt,clearcoatMap:le,clearcoatNormalMap:de,clearcoatRoughnessMap:J,dispersion:pt,retroreflection:w,iridescence:v,iridescenceMap:ee,iridescenceThicknessMap:ue,sheen:$,sheenColorMap:De,sheenRoughnessMap:me,specularMap:he,specularColorMap:Ne,specularIntensityMap:Fe,transmission:W,transmissionMap:qe,thicknessMap:k,gradientMap:fe,opaque:m.transparent===!1&&m.blending===Ja&&m.alphaToCoverage===!1,alphaMap:j,alphaTest:pe,alphaHash:be,combine:m.combine,mapUv:et&&_(m.map.channel),aoMapUv:ct&&_(m.aoMap.channel),lightMapUv:xt&&_(m.lightMap.channel),bumpMapUv:at&&_(m.bumpMap.channel),normalMapUv:At&&_(m.normalMap.channel),displacementMapUv:$t&&_(m.displacementMap.channel),emissiveMapUv:ln&&_(m.emissiveMap.channel),metalnessMapUv:Rt&&_(m.metalnessMap.channel),roughnessMapUv:Pt&&_(m.roughnessMap.channel),anisotropyMapUv:Z&&_(m.anisotropyMap.channel),clearcoatMapUv:le&&_(m.clearcoatMap.channel),clearcoatNormalMapUv:de&&_(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(m.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&_(m.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&_(m.iridescenceThicknessMap.channel),sheenColorMapUv:De&&_(m.sheenColorMap.channel),sheenRoughnessMapUv:me&&_(m.sheenRoughnessMap.channel),specularMapUv:he&&_(m.specularMap.channel),specularColorMapUv:Ne&&_(m.specularColorMap.channel),specularIntensityMapUv:Fe&&_(m.specularIntensityMap.channel),transmissionMapUv:qe&&_(m.transmissionMap.channel),thicknessMapUv:k&&_(m.thicknessMap.channel),alphaMapUv:j&&_(m.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(At||F),vertexNormals:!!U.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!U.attributes.uv&&(et||j),fog:!!M,useFog:m.fog===!0,fogExp2:!!M&&M.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||U.attributes.normal===void 0&&At===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ee,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:se,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:m.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:ke,decodeVideoTexture:et&&m.map.isVideoTexture===!0&&st.getTransfer(m.map.colorSpace)===mt,decodeVideoTextureEmissive:ln&&m.emissiveMap.isVideoTexture===!0&&st.getTransfer(m.emissiveMap.colorSpace)===mt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===Bn,flipSided:m.side===un,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:re&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&m.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Ce.vertexUv1s=l.has(1),Ce.vertexUv2s=l.has(2),Ce.vertexUv3s=l.has(3),l.clear(),Ce}function g(m){const S=[];if(m.shaderID?S.push(m.shaderID):(S.push(m.customVertexShaderID),S.push(m.customFragmentShaderID)),m.defines!==void 0)for(const L in m.defines)S.push(L),S.push(m.defines[L]);return m.isRawShaderMaterial===!1&&(f(S,m),T(S,m),S.push(t.outputColorSpace)),S.push(m.customProgramCacheKey),S.join()}function f(m,S){m.push(S.precision),m.push(S.outputColorSpace),m.push(S.envMapMode),m.push(S.envMapCubeUVHeight),m.push(S.mapUv),m.push(S.alphaMapUv),m.push(S.lightMapUv),m.push(S.aoMapUv),m.push(S.bumpMapUv),m.push(S.normalMapUv),m.push(S.displacementMapUv),m.push(S.emissiveMapUv),m.push(S.metalnessMapUv),m.push(S.roughnessMapUv),m.push(S.anisotropyMapUv),m.push(S.clearcoatMapUv),m.push(S.clearcoatNormalMapUv),m.push(S.clearcoatRoughnessMapUv),m.push(S.iridescenceMapUv),m.push(S.iridescenceThicknessMapUv),m.push(S.sheenColorMapUv),m.push(S.sheenRoughnessMapUv),m.push(S.specularMapUv),m.push(S.specularColorMapUv),m.push(S.specularIntensityMapUv),m.push(S.transmissionMapUv),m.push(S.thicknessMapUv),m.push(S.combine),m.push(S.fogExp2),m.push(S.sizeAttenuation),m.push(S.morphTargetsCount),m.push(S.morphAttributeCount),m.push(S.numSunLights),m.push(S.numDirLights),m.push(S.numPointLights),m.push(S.numSpotLights),m.push(S.numSpotLightMaps),m.push(S.numHemiLights),m.push(S.numRectAreaLights),m.push(S.numSunLightShadows),m.push(S.numDirLightShadows),m.push(S.numPointLightShadows),m.push(S.numSpotLightShadows),m.push(S.numSpotLightShadowsWithMaps),m.push(S.numLightProbes),m.push(S.shadowMapType),m.push(S.toneMapping),m.push(S.numClippingPlanes),m.push(S.numClipIntersection),m.push(S.depthPacking)}function T(m,S){s.disableAll(),S.instancing&&s.enable(0),S.instancingColor&&s.enable(1),S.instancingMorph&&s.enable(2),S.matcap&&s.enable(3),S.envMap&&s.enable(4),S.normalMapObjectSpace&&s.enable(5),S.normalMapTangentSpace&&s.enable(6),S.clearcoat&&s.enable(7),S.iridescence&&s.enable(8),S.alphaTest&&s.enable(9),S.vertexColors&&s.enable(10),S.vertexAlphas&&s.enable(11),S.vertexUv1s&&s.enable(12),S.vertexUv2s&&s.enable(13),S.vertexUv3s&&s.enable(14),S.vertexTangents&&s.enable(15),S.anisotropy&&s.enable(16),S.alphaHash&&s.enable(17),S.batching&&s.enable(18),S.dispersion&&s.enable(19),S.retroreflection&&s.enable(24),S.batchingColor&&s.enable(20),S.gradientMap&&s.enable(21),S.packedNormalMap&&s.enable(22),S.vertexNormals&&s.enable(23),m.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.reversedDepthBuffer&&s.enable(4),S.skinning&&s.enable(5),S.morphTargets&&s.enable(6),S.morphNormals&&s.enable(7),S.morphColors&&s.enable(8),S.premultipliedAlpha&&s.enable(9),S.shadowMapEnabled&&s.enable(10),S.doubleSided&&s.enable(11),S.flipSided&&s.enable(12),S.useDepthPacking&&s.enable(13),S.dithering&&s.enable(14),S.transmission&&s.enable(15),S.sheen&&s.enable(16),S.opaque&&s.enable(17),S.pointsUvs&&s.enable(18),S.decodeVideoTexture&&s.enable(19),S.decodeVideoTextureEmissive&&s.enable(20),S.alphaToCoverage&&s.enable(21),S.numLightProbeGrids>0&&s.enable(22),S.hasPositionAttribute&&s.enable(23),m.push(s.mask)}function D(m){const S=p[m.type];let L;if(S){const R=On[S];L=Zf.clone(R.uniforms)}else L=m.uniforms;return L}function x(m,S){let L=d.get(S);return L!==void 0?++L.usedTimes:(L=new Cv(t,S,m,a),c.push(L),d.set(S,L)),L}function E(m){if(--m.usedTimes===0){const S=c.indexOf(m);c[S]=c[c.length-1],c.pop(),d.delete(m.cacheKey),m.destroy()}}function A(m){o.remove(m)}function C(){o.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:D,acquireProgram:x,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:C}}function Uv(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function i(s){t.delete(s)}function a(s,o,l){t.get(s)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:a,dispose:r}}function kv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Ld(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Pd(){const t=[];let e=0;const n=[],i=[],a=[];function r(){e=0,n.length=0,i.length=0,a.length=0}function s(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,_,y,g,f){let T=t[e];return T===void 0?(T={id:u.id,object:u,geometry:p,material:_,materialVariant:s(u),groupOrder:y,renderOrder:u.renderOrder,z:g,group:f},t[e]=T):(T.id=u.id,T.object=u,T.geometry=p,T.material=_,T.materialVariant=s(u),T.groupOrder=y,T.renderOrder=u.renderOrder,T.z=g,T.group=f),e++,T}function l(u,p,_,y,g,f,T){T.reversedDepth===!0&&(g=-g);const D=o(u,p,_,y,g,f);_.transmission>0?i.push(D):_.transparent===!0?a.push(D):n.push(D)}function c(u,p,_,y,g,f){const T=o(u,p,_,y,g,f);_.transmission>0?i.unshift(T):_.transparent===!0?a.unshift(T):n.unshift(T)}function d(u,p){n.length>1&&n.sort(u||kv),i.length>1&&i.sort(p||Ld),a.length>1&&a.sort(p||Ld)}function h(){for(let u=e,p=t.length;u<p;u++){const _=t[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:l,unshift:c,finish:h,sort:d}}function Ov(){let t=new WeakMap;function e(i,a){const r=t.get(i);let s;return r===void 0?(s=new Pd,t.set(i,[s])):a>=r.length?(s=new Pd,r.push(s)):s=r[a],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function Fv(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new B,color:new je};break;case"SpotLight":n={position:new B,direction:new B,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new je,groundColor:new je};break;case"RectAreaLight":n={color:new je,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function Bv(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let $v=0;function zv(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Hv(t){const e=new Fv,n=Bv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const a=new B,r=new yt,s=new yt;function o(c){let d=0,h=0,u=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let p=0,_=0,y=0,g=0,f=0,T=0,D=0,x=0,E=0,A=0,C=0,m=0,S=0,L=0;c.sort(zv);for(let I=0,O=c.length;I<O;I++){const M=c[I],U=M.color,Y=M.intensity,V=M.distance;let te=null;if(M.shadow&&M.shadow.map&&(M.shadow.map.texture.format===Hi?te=M.shadow.map.texture:te=M.shadow.map.depthTexture||M.shadow.map.texture),M.isAmbientLight)d+=U.r*Y,h+=U.g*Y,u+=U.b*Y;else if(M.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(M.sh.coefficients[q],Y);L++}else if(M.isSunLight){const q=e.get(M);if(q.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const Q=M.shadow,ie=n.get(M);ie.shadowIntensity=Q.intensity,ie.shadowBias=Q.bias,ie.shadowNormalBias=Q.normalBias,ie.shadowRadius=Q.radius,ie.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[_]=ie,i.sunShadowMap[_]=te;const Re=Q.getViewportCount();for(let se=0;se<Re;se++)i.sunShadowMatrix[y+se]=Q.getMatrix(se),i.sunShadowCascade[y+se]=Q._cascadeData[se];y+=Re,_++}i.sun[p]=q,p++}else if(M.isDirectionalLight){const q=e.get(M);if(q.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const Q=M.shadow,ie=n.get(M);ie.shadowIntensity=Q.intensity,ie.shadowBias=Q.bias,ie.shadowNormalBias=Q.normalBias,ie.shadowRadius=Q.radius,ie.shadowMapSize=Q.mapSize,i.directionalShadow[g]=ie,i.directionalShadowMap[g]=te,i.directionalShadowMatrix[g]=M.shadow.matrix,E++}i.directional[g]=q,g++}else if(M.isSpotLight){const q=e.get(M);q.position.setFromMatrixPosition(M.matrixWorld),q.color.copy(U).multiplyScalar(Y),q.distance=V,q.coneCos=Math.cos(M.angle),q.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),q.decay=M.decay,i.spot[T]=q;const Q=M.shadow;if(M.map&&(i.spotLightMap[m]=M.map,m++,Q.updateMatrices(M),M.castShadow&&S++),i.spotLightMatrix[T]=Q.matrix,M.castShadow){const ie=n.get(M);ie.shadowIntensity=Q.intensity,ie.shadowBias=Q.bias,ie.shadowNormalBias=Q.normalBias,ie.shadowRadius=Q.radius,ie.shadowMapSize=Q.mapSize,i.spotShadow[T]=ie,i.spotShadowMap[T]=te,C++}T++}else if(M.isRectAreaLight){const q=e.get(M);q.color.copy(U).multiplyScalar(Y),q.halfWidth.set(M.width*.5,0,0),q.halfHeight.set(0,M.height*.5,0),i.rectArea[D]=q,D++}else if(M.isPointLight){const q=e.get(M);if(q.color.copy(M.color).multiplyScalar(M.intensity),q.distance=M.distance,q.decay=M.decay,M.castShadow){const Q=M.shadow,ie=n.get(M);ie.shadowIntensity=Q.intensity,ie.shadowBias=Q.bias,ie.shadowNormalBias=Q.normalBias,ie.shadowRadius=Q.radius,ie.shadowMapSize=Q.mapSize,ie.shadowCameraNear=Q.camera.near,ie.shadowCameraFar=Q.camera.far,i.pointShadow[f]=ie,i.pointShadowMap[f]=te,i.pointShadowMatrix[f]=M.shadow.matrix,A++}i.point[f]=q,f++}else if(M.isHemisphereLight){const q=e.get(M);q.skyColor.copy(M.color).multiplyScalar(Y),q.groundColor.copy(M.groundColor).multiplyScalar(Y),i.hemi[x]=q,x++}}D>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=u;const R=i.hash;(R.sunLength!==p||R.directionalLength!==g||R.pointLength!==f||R.spotLength!==T||R.rectAreaLength!==D||R.hemiLength!==x||R.numSunShadows!==_||R.numDirectionalShadows!==E||R.numPointShadows!==A||R.numSpotShadows!==C||R.numSpotMaps!==m||R.numLightProbes!==L)&&(i.sun.length=p,i.directional.length=g,i.spot.length=T,i.rectArea.length=D,i.point.length=f,i.hemi.length=x,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+m-S,i.spotLightMap.length=m,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=L,R.sunLength=p,R.directionalLength=g,R.pointLength=f,R.spotLength=T,R.rectAreaLength=D,R.hemiLength=x,R.numSunShadows=_,R.numDirectionalShadows=E,R.numPointShadows=A,R.numSpotShadows=C,R.numSpotMaps=m,R.numLightProbes=L,i.version=$v++)}function l(c,d){let h=0,u=0,p=0,_=0,y=0,g=0;const f=d.matrixWorldInverse;for(let T=0,D=c.length;T<D;T++){const x=c[T];if(x.isSunLight){const E=i.sun[h];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(f),h++}else if(x.isDirectionalLight){const E=i.directional[u];E.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(f),u++}else if(x.isSpotLight){const E=i.spot[_];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(f),_++}else if(x.isRectAreaLight){const E=i.rectArea[y];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(f),s.identity(),r.copy(x.matrixWorld),r.premultiply(f),s.extractRotation(r),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),y++}else if(x.isPointLight){const E=i.point[p];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(f),p++}else if(x.isHemisphereLight){const E=i.hemi[g];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(f),g++}}}return{setup:o,setupView:l,state:i}}function Id(t){const e=new Hv(t),n=[],i=[],a=[];function r(u){h.camera=u,n.length=0,i.length=0,a.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function l(u){a.push(u)}function c(){e.setup(n)}function d(u){e.setupView(n,u)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:d,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function Gv(t){let e=new WeakMap;function n(a,r=0){const s=e.get(a);let o;return s===void 0?(o=new Id(t),e.set(a,[o])):r>=s.length?(o=new Id(t),s.push(o)):o=s[r],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const Vv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wv=`uniform sampler2D shadow_pass;
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
}`,Xv=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],qv=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Dd=new yt,Va=new B,Eo=new B;function Yv(t,e,n){let i=new Xl;const a=new Xe,r=new Xe,s=new Ct,o=new jf,l=new ep,c={},d=n.maxTextureSize,h={[$i]:un,[un]:$i,[Bn]:Bn},u=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:Vv,fragmentShader:Wv}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const _=new Vt;_.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Je(_,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ns;let f=this.type;this.render=function(A,C,m){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===Fh&&($e("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ns);const S=t.getRenderTarget(),L=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),I=t.state;I.setBlending(ti),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const O=f!==this.type;O&&C.traverse(function(M){M.material&&(Array.isArray(M.material)?M.material.forEach(U=>U.needsUpdate=!0):M.material.needsUpdate=!0)});for(let M=0,U=A.length;M<U;M++){const Y=A[M],V=Y.shadow;if(V===void 0){$e("WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;a.copy(V.mapSize);const te=V.getFrameExtents();a.multiply(te),r.copy(V.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(r.x=Math.floor(d/te.x),a.x=r.x*te.x,V.mapSize.x=r.x),a.y>d&&(r.y=Math.floor(d/te.y),a.y=r.y*te.y,V.mapSize.y=r.y));const q=t.state.buffers.depth.getReversed();if(V.camera._reversedDepth=q,V.map===null||O===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Ya){if(Y.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Ln(a.x,a.y,{format:Hi,type:Xn,minFilter:Jt,magFilter:Jt,generateMipmaps:!1}),V.map.texture.name=Y.name+".shadowMap",V.map.depthTexture=new or(a.x,a.y,zn),V.map.depthTexture.name=Y.name+".shadowMapDepth",V.map.depthTexture.format=ai,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Gt,V.map.depthTexture.magFilter=Gt}else Y.isPointLight?(V.map=new Pu(a.x),V.map.depthTexture=new Wf(a.x,Wn)):(V.map=new Ln(a.x,a.y),V.map.depthTexture=new or(a.x,a.y,Wn)),V.map.depthTexture.name=Y.name+".shadowMap",V.map.depthTexture.format=ai,this.type===ns?(V.map.depthTexture.compareFunction=q?Hl:zl,V.map.depthTexture.minFilter=Jt,V.map.depthTexture.magFilter=Jt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Gt,V.map.depthTexture.magFilter=Gt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==a.x||V.map.height!==a.y)&&V.map.setSize(a.x,a.y);const Q=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();Y.isPointLight!==!0&&V.updateMatrices(Y,m);for(let ie=0;ie<Q;ie++){const Re=V.getCamera(ie);if(Y.isPointLight){const se=V.camera,ut=V.matrix,rt=Y.distance||se.far;rt!==se.far&&(se.far=rt,se.updateProjectionMatrix()),Va.setFromMatrixPosition(Y.matrixWorld),se.position.copy(Va),Eo.copy(se.position),Eo.add(Xv[ie]),se.up.copy(qv[ie]),se.lookAt(Eo),se.updateMatrixWorld(),ut.makeTranslation(-Va.x,-Va.y,-Va.z),Dd.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Dd,se.coordinateSystem,se.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)t.setRenderTarget(V.map,ie),t.clear();else{ie===0&&(t.setRenderTarget(V.map),t.clear());const se=V.getViewport(ie);s.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),I.viewport(s)}i=V.getFrustum(ie),x(C,m,Re,Y,this.type)}V.isPointLightShadow!==!0&&this.type===Ya&&T(V,m),V.needsUpdate=!1}f=this.type,g.needsUpdate=!1,t.setRenderTarget(S,L,R)};function T(A,C){const m=e.update(y);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null?A.mapPass=new Ln(a.x,a.y,{format:Hi,type:Xn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(C,null,m,u,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value.set(A.map.width,A.map.height),p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(C,null,m,p,y,null)}function D(A,C,m,S){let L=null;const R=m.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)L=R;else if(L=m.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const I=L.uuid,O=C.uuid;let M=c[I];M===void 0&&(M={},c[I]=M);let U=M[O];U===void 0&&(U=L.clone(),M[O]=U,C.addEventListener("dispose",E)),L=U}if(L.visible=C.visible,L.wireframe=C.wireframe,S===Ya?L.side=C.shadowSide!==null?C.shadowSide:C.side:L.side=C.shadowSide!==null?C.shadowSide:h[C.side],L.alphaMap=C.alphaMap,L.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,L.map=C.map,L.clipShadows=C.clipShadows,L.clippingPlanes=C.clippingPlanes,L.clipIntersection=C.clipIntersection,L.displacementMap=C.displacementMap,L.displacementScale=C.displacementScale,L.displacementBias=C.displacementBias,L.wireframeLinewidth=C.wireframeLinewidth,L.linewidth=C.linewidth,m.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const I=t.properties.get(L);I.light=m}return L}function x(A,C,m,S,L){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&L===Ya)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,A.matrixWorld);const O=e.update(A),M=A.material;if(Array.isArray(M)){const U=O.groups;for(let Y=0,V=U.length;Y<V;Y++){const te=U[Y],q=M[te.materialIndex];if(q&&q.visible){const Q=D(A,q,S,L);A.onBeforeShadow(t,A,C,m,O,Q,te),t.renderBufferDirect(m,null,O,Q,A,te),A.onAfterShadow(t,A,C,m,O,Q,te)}}}else if(M.visible){const U=D(A,M,S,L);A.onBeforeShadow(t,A,C,m,O,U,null),t.renderBufferDirect(m,null,O,U,A,null),A.onAfterShadow(t,A,C,m,O,U,null)}}const I=A.children;for(let O=0,M=I.length;O<M;O++)x(I[O],C,m,S,L)}function E(A){A.target.removeEventListener("dispose",E);for(const m in c){const S=c[m],L=A.target.uuid;L in S&&(S[L].dispose(),delete S[L])}}}function Zv(t,e){function n(){let k=!1;const fe=new Ct;let j=null;const pe=new Ct(0,0,0,0);return{setMask:function(be){j!==be&&!k&&(t.colorMask(be,be,be,be),j=be)},setLocked:function(be){k=be},setClear:function(be,re,ke,Ce,St){St===!0&&(be*=Ce,re*=Ce,ke*=Ce),fe.set(be,re,ke,Ce),pe.equals(fe)===!1&&(t.clearColor(be,re,ke,Ce),pe.copy(fe))},reset:function(){k=!1,j=null,pe.set(-1,0,0,0)}}}function i(){let k=!1,fe=!1,j=null,pe=null,be=null;return{setReversed:function(re){if(fe!==re){const ke=e.get("EXT_clip_control");re?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),fe=re;const Ce=be;be=null,this.setClear(Ce)}},getReversed:function(){return fe},setTest:function(re){re?ne(t.DEPTH_TEST):Ee(t.DEPTH_TEST)},setMask:function(re){j!==re&&!k&&(t.depthMask(re),j=re)},setFunc:function(re){if(fe&&(re=bf[re]),pe!==re){switch(re){case Do:t.depthFunc(t.NEVER);break;case No:t.depthFunc(t.ALWAYS);break;case Uo:t.depthFunc(t.LESS);break;case ir:t.depthFunc(t.LEQUAL);break;case ko:t.depthFunc(t.EQUAL);break;case Oo:t.depthFunc(t.GEQUAL);break;case Fo:t.depthFunc(t.GREATER);break;case Bo:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}pe=re}},setLocked:function(re){k=re},setClear:function(re){be!==re&&(be=re,fe&&(re=1-re),t.clearDepth(re))},reset:function(){k=!1,j=null,pe=null,be=null,fe=!1}}}function a(){let k=!1,fe=null,j=null,pe=null,be=null,re=null,ke=null,Ce=null,St=null;return{setTest:function(ht){k||(ht?ne(t.STENCIL_TEST):Ee(t.STENCIL_TEST))},setMask:function(ht){fe!==ht&&!k&&(t.stencilMask(ht),fe=ht)},setFunc:function(ht,En,In){(j!==ht||pe!==En||be!==In)&&(t.stencilFunc(ht,En,In),j=ht,pe=En,be=In)},setOp:function(ht,En,In){(re!==ht||ke!==En||Ce!==In)&&(t.stencilOp(ht,En,In),re=ht,ke=En,Ce=In)},setLocked:function(ht){k=ht},setClear:function(ht){St!==ht&&(t.clearStencil(ht),St=ht)},reset:function(){k=!1,fe=null,j=null,pe=null,be=null,re=null,ke=null,Ce=null,St=null}}}const r=new n,s=new i,o=new a,l=new WeakMap,c=new WeakMap;let d={},h={},u={},p=new WeakMap,_=[],y=null,g=!1,f=null,T=null,D=null,x=null,E=null,A=null,C=null,m=new je(0,0,0),S=0,L=!1,R=null,I=null,O=null,M=null,U=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,te=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(q)[1]),V=te>=1):q.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),V=te>=2);let Q=null,ie={};const Re=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),ut=new Ct().fromArray(Re),rt=new Ct().fromArray(se);function dt(k,fe,j,pe){const be=new Uint8Array(4),re=t.createTexture();t.bindTexture(k,re),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ke=0;ke<j;ke++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,pe,0,t.RGBA,t.UNSIGNED_BYTE,be):t.texImage2D(fe+ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,be);return re}const K={};K[t.TEXTURE_2D]=dt(t.TEXTURE_2D,t.TEXTURE_2D,1),K[t.TEXTURE_CUBE_MAP]=dt(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[t.TEXTURE_2D_ARRAY]=dt(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),K[t.TEXTURE_3D]=dt(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ne(t.DEPTH_TEST),s.setFunc(ir),at(!1),At(Ac),ne(t.CULL_FACE),ct(ti);function ne(k){d[k]!==!0&&(t.enable(k),d[k]=!0)}function Ee(k){d[k]!==!1&&(t.disable(k),d[k]=!1)}function Ve(k,fe){return u[k]!==fe?(t.bindFramebuffer(k,fe),u[k]=fe,k===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=fe),k===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function Se(k,fe){let j=_,pe=!1;if(k){j=p.get(fe),j===void 0&&(j=[],p.set(fe,j));const be=k.textures;if(j.length!==be.length||j[0]!==t.COLOR_ATTACHMENT0){for(let re=0,ke=be.length;re<ke;re++)j[re]=t.COLOR_ATTACHMENT0+re;j.length=be.length,pe=!0}}else j[0]!==t.BACK&&(j[0]=t.BACK,pe=!0);pe&&t.drawBuffers(j)}function et(k){return y!==k?(t.useProgram(k),y=k,!0):!1}const Ut={[pa]:t.FUNC_ADD,[$h]:t.FUNC_SUBTRACT,[zh]:t.FUNC_REVERSE_SUBTRACT};Ut[Hh]=t.MIN,Ut[Gh]=t.MAX;const tt={[Vh]:t.ZERO,[Wh]:t.ONE,[Xh]:t.SRC_COLOR,[Qd]:t.SRC_ALPHA,[Qh]:t.SRC_ALPHA_SATURATE,[Kh]:t.DST_COLOR,[Yh]:t.DST_ALPHA,[qh]:t.ONE_MINUS_SRC_COLOR,[jd]:t.ONE_MINUS_SRC_ALPHA,[Jh]:t.ONE_MINUS_DST_COLOR,[Zh]:t.ONE_MINUS_DST_ALPHA,[jh]:t.CONSTANT_COLOR,[ef]:t.ONE_MINUS_CONSTANT_COLOR,[tf]:t.CONSTANT_ALPHA,[nf]:t.ONE_MINUS_CONSTANT_ALPHA};function ct(k,fe,j,pe,be,re,ke,Ce,St,ht){if(k===ti){g===!0&&(Ee(t.BLEND),g=!1);return}if(g===!1&&(ne(t.BLEND),g=!0),k!==Bh){if(k!==f||ht!==L){if((T!==pa||E!==pa)&&(t.blendEquation(t.FUNC_ADD),T=pa,E=pa),ht)switch(k){case Ja:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wc:t.blendFunc(t.ONE,t.ONE);break;case Rc:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Cc:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ot("WebGLState: Invalid blending: ",k);break}else switch(k){case Ja:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wc:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Rc:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cc:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",k);break}D=null,x=null,A=null,C=null,m.set(0,0,0),S=0,f=k,L=ht}return}be=be||fe,re=re||j,ke=ke||pe,(fe!==T||be!==E)&&(t.blendEquationSeparate(Ut[fe],Ut[be]),T=fe,E=be),(j!==D||pe!==x||re!==A||ke!==C)&&(t.blendFuncSeparate(tt[j],tt[pe],tt[re],tt[ke]),D=j,x=pe,A=re,C=ke),(Ce.equals(m)===!1||St!==S)&&(t.blendColor(Ce.r,Ce.g,Ce.b,St),m.copy(Ce),S=St),f=k,L=!1}function xt(k,fe){k.side===Bn?Ee(t.CULL_FACE):ne(t.CULL_FACE);let j=k.side===un;fe&&(j=!j),at(j),k.blending===Ja&&k.transparent===!1?ct(ti):ct(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),r.setMask(k.colorWrite);const pe=k.stencilWrite;o.setTest(pe),pe&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ln(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ne(t.SAMPLE_ALPHA_TO_COVERAGE):Ee(t.SAMPLE_ALPHA_TO_COVERAGE)}function at(k){R!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),R=k)}function At(k){k!==kh?(ne(t.CULL_FACE),k!==I&&(k===Ac?t.cullFace(t.BACK):k===Oh?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ee(t.CULL_FACE),I=k}function $t(k){k!==O&&(V&&t.lineWidth(k),O=k)}function ln(k,fe,j){k?(ne(t.POLYGON_OFFSET_FILL),(M!==fe||U!==j)&&(M=fe,U=j,s.getReversed()&&(fe=-fe),t.polygonOffset(fe,j))):Ee(t.POLYGON_OFFSET_FILL)}function Rt(k){k?ne(t.SCISSOR_TEST):Ee(t.SCISSOR_TEST)}function Pt(k){k===void 0&&(k=t.TEXTURE0+Y-1),Q!==k&&(t.activeTexture(k),Q=k)}function F(k,fe,j){j===void 0&&(Q===null?j=t.TEXTURE0+Y-1:j=Q);let pe=ie[j];pe===void 0&&(pe={type:void 0,texture:void 0},ie[j]=pe),(pe.type!==k||pe.texture!==fe)&&(Q!==j&&(t.activeTexture(j),Q=j),t.bindTexture(k,fe||K[k]),pe.type=k,pe.texture=fe)}function Wt(){const k=ie[Q];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function pt(){try{t.compressedTexImage2D(...arguments)}catch(k){ot("WebGLState:",k)}}function w(){try{t.compressedTexImage3D(...arguments)}catch(k){ot("WebGLState:",k)}}function v(){try{t.texSubImage2D(...arguments)}catch(k){ot("WebGLState:",k)}}function $(){try{t.texSubImage3D(...arguments)}catch(k){ot("WebGLState:",k)}}function W(){try{t.compressedTexSubImage2D(...arguments)}catch(k){ot("WebGLState:",k)}}function Z(){try{t.compressedTexSubImage3D(...arguments)}catch(k){ot("WebGLState:",k)}}function le(){try{t.texStorage2D(...arguments)}catch(k){ot("WebGLState:",k)}}function de(){try{t.texStorage3D(...arguments)}catch(k){ot("WebGLState:",k)}}function J(){try{t.texImage2D(...arguments)}catch(k){ot("WebGLState:",k)}}function ee(){try{t.texImage3D(...arguments)}catch(k){ot("WebGLState:",k)}}function ue(k){return h[k]!==void 0?h[k]:t.getParameter(k)}function De(k,fe){h[k]!==fe&&(t.pixelStorei(k,fe),h[k]=fe)}function me(k){ut.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),ut.copy(k))}function he(k){rt.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),rt.copy(k))}function Ne(k,fe){let j=c.get(fe);j===void 0&&(j=new WeakMap,c.set(fe,j));let pe=j.get(k);pe===void 0&&(pe=t.getUniformBlockIndex(fe,k.name),j.set(k,pe))}function Fe(k,fe){const pe=c.get(fe).get(k);l.get(fe)!==pe&&(t.uniformBlockBinding(fe,pe,k.__bindingPointIndex),l.set(fe,pe))}function qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},h={},Q=null,ie={},u={},p=new WeakMap,_=[],y=null,g=!1,f=null,T=null,D=null,x=null,E=null,A=null,C=null,m=new je(0,0,0),S=0,L=!1,R=null,I=null,O=null,M=null,U=null,ut.set(0,0,t.canvas.width,t.canvas.height),rt.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ne,disable:Ee,bindFramebuffer:Ve,drawBuffers:Se,useProgram:et,setBlending:ct,setMaterial:xt,setFlipSided:at,setCullFace:At,setLineWidth:$t,setPolygonOffset:ln,setScissorTest:Rt,activeTexture:Pt,bindTexture:F,unbindTexture:Wt,compressedTexImage2D:pt,compressedTexImage3D:w,texImage2D:J,texImage3D:ee,pixelStorei:De,getParameter:ue,updateUBOMapping:Ne,uniformBlockBinding:Fe,texStorage2D:le,texStorage3D:de,texSubImage2D:v,texSubImage3D:$,compressedTexSubImage2D:W,compressedTexSubImage3D:Z,scissor:me,viewport:he,reset:qe}}function Kv(t,e,n,i,a,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,d=new WeakMap,h=new Set;let u;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(w,v){return _?new OffscreenCanvas(w,v):fs("canvas")}function g(w,v,$){let W=1;const Z=pt(w);if((Z.width>$||Z.height>$)&&(W=$/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const le=Math.floor(W*Z.width),de=Math.floor(W*Z.height);u===void 0&&(u=y(le,de));const J=v?y(le,de):u;return J.width=le,J.height=de,J.getContext("2d").drawImage(w,0,0,le,de),$e("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+le+"x"+de+")."),J}else return"data"in w&&$e("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),w;return w}function f(w){return w.generateMipmaps}function T(w){t.generateMipmap(w)}function D(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(w,v,$,W,Z,le=!1){if(w!==null){if(t[w]!==void 0)return t[w];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let de;W&&(de=e.get("EXT_texture_norm16"),de||$e("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=v;if(v===t.RED&&($===t.FLOAT&&(J=t.R32F),$===t.HALF_FLOAT&&(J=t.R16F),$===t.UNSIGNED_BYTE&&(J=t.R8),$===t.UNSIGNED_SHORT&&de&&(J=de.R16_EXT),$===t.SHORT&&de&&(J=de.R16_SNORM_EXT)),v===t.RED_INTEGER&&($===t.UNSIGNED_BYTE&&(J=t.R8UI),$===t.UNSIGNED_SHORT&&(J=t.R16UI),$===t.UNSIGNED_INT&&(J=t.R32UI),$===t.BYTE&&(J=t.R8I),$===t.SHORT&&(J=t.R16I),$===t.INT&&(J=t.R32I)),v===t.RG&&($===t.FLOAT&&(J=t.RG32F),$===t.HALF_FLOAT&&(J=t.RG16F),$===t.UNSIGNED_BYTE&&(J=t.RG8),$===t.UNSIGNED_SHORT&&de&&(J=de.RG16_EXT),$===t.SHORT&&de&&(J=de.RG16_SNORM_EXT)),v===t.RG_INTEGER&&($===t.UNSIGNED_BYTE&&(J=t.RG8UI),$===t.UNSIGNED_SHORT&&(J=t.RG16UI),$===t.UNSIGNED_INT&&(J=t.RG32UI),$===t.BYTE&&(J=t.RG8I),$===t.SHORT&&(J=t.RG16I),$===t.INT&&(J=t.RG32I)),v===t.RGB_INTEGER&&($===t.UNSIGNED_BYTE&&(J=t.RGB8UI),$===t.UNSIGNED_SHORT&&(J=t.RGB16UI),$===t.UNSIGNED_INT&&(J=t.RGB32UI),$===t.BYTE&&(J=t.RGB8I),$===t.SHORT&&(J=t.RGB16I),$===t.INT&&(J=t.RGB32I)),v===t.RGBA_INTEGER&&($===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),$===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),$===t.UNSIGNED_INT&&(J=t.RGBA32UI),$===t.BYTE&&(J=t.RGBA8I),$===t.SHORT&&(J=t.RGBA16I),$===t.INT&&(J=t.RGBA32I)),v===t.RGB&&($===t.UNSIGNED_SHORT&&de&&(J=de.RGB16_EXT),$===t.SHORT&&de&&(J=de.RGB16_SNORM_EXT),$===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),$===t.UNSIGNED_INT_10F_11F_11F_REV&&(J=t.R11F_G11F_B10F)),v===t.RGBA){const ee=le?hs:st.getTransfer(Z);$===t.FLOAT&&(J=t.RGBA32F),$===t.HALF_FLOAT&&(J=t.RGBA16F),$===t.UNSIGNED_BYTE&&(J=ee===mt?t.SRGB8_ALPHA8:t.RGBA8),$===t.UNSIGNED_SHORT&&de&&(J=de.RGBA16_EXT),$===t.SHORT&&de&&(J=de.RGBA16_SNORM_EXT),$===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),$===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function E(w,v){let $;return w?v===null||v===Wn||v===rr?$=t.DEPTH24_STENCIL8:v===zn?$=t.DEPTH32F_STENCIL8:v===ar&&($=t.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Wn||v===rr?$=t.DEPTH_COMPONENT24:v===zn?$=t.DEPTH_COMPONENT32F:v===ar&&($=t.DEPTH_COMPONENT16),$}function A(w,v){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==Gt&&w.minFilter!==Jt?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function C(w){const v=w.target;v.removeEventListener("dispose",C),S(v),v.isVideoTexture&&d.delete(v),v.isHTMLTexture&&h.delete(v)}function m(w){const v=w.target;v.removeEventListener("dispose",m),R(v)}function S(w){const v=i.get(w);if(v.__webglInit===void 0)return;const $=w.source,W=p.get($);if(W){const Z=W[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&L(w),Object.keys(W).length===0&&p.delete($)}i.remove(w)}function L(w){const v=i.get(w);t.deleteTexture(v.__webglTexture);const $=w.source,W=p.get($);delete W[v.__cacheKey],s.memory.textures--}function R(w){const v=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let Z=0;Z<v.__webglFramebuffer[W].length;Z++)t.deleteFramebuffer(v.__webglFramebuffer[W][Z]);else t.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)t.deleteFramebuffer(v.__webglFramebuffer[W]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const $=w.textures;for(let W=0,Z=$.length;W<Z;W++){const le=i.get($[W]);le.__webglTexture&&(t.deleteTexture(le.__webglTexture),s.memory.textures--),i.remove($[W])}i.remove(w)}let I=0;function O(){I=0}function M(){return I}function U(w){I=w}function Y(){const w=I;return w>=a.maxTextures&&$e("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+a.maxTextures),I+=1,w}function V(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function te(w,v){const $=i.get(w);if(w.isVideoTexture&&F(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&$.__version!==w.version){const W=w.image;if(W===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee($,w,v);return}}else w.isExternalTexture&&($.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,$.__webglTexture,t.TEXTURE0+v)}function q(w,v){const $=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&$.__version!==w.version){Ee($,w,v);return}else w.isExternalTexture&&($.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,$.__webglTexture,t.TEXTURE0+v)}function Q(w,v){const $=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&$.__version!==w.version){Ee($,w,v);return}n.bindTexture(t.TEXTURE_3D,$.__webglTexture,t.TEXTURE0+v)}function ie(w,v){const $=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&$.__version!==w.version){Ve($,w,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture,t.TEXTURE0+v)}const Re={[$o]:t.REPEAT,[jn]:t.CLAMP_TO_EDGE,[zo]:t.MIRRORED_REPEAT},se={[Gt]:t.NEAREST,[sf]:t.NEAREST_MIPMAP_NEAREST,[Mr]:t.NEAREST_MIPMAP_LINEAR,[Jt]:t.LINEAR,[Hs]:t.LINEAR_MIPMAP_NEAREST,[Ni]:t.LINEAR_MIPMAP_LINEAR},ut={[df]:t.NEVER,[mf]:t.ALWAYS,[uf]:t.LESS,[zl]:t.LEQUAL,[hf]:t.EQUAL,[Hl]:t.GEQUAL,[ff]:t.GREATER,[pf]:t.NOTEQUAL};function rt(w,v){if(v.type===zn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Jt||v.magFilter===Hs||v.magFilter===Mr||v.magFilter===Ni||v.minFilter===Jt||v.minFilter===Hs||v.minFilter===Mr||v.minFilter===Ni)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,Re[v.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,Re[v.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,Re[v.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,se[v.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,se[v.minFilter]),v.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,ut[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Gt||v.minFilter!==Mr&&v.minFilter!==Ni||v.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,a.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function dt(w,v){let $=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",C));const W=v.source;let Z=p.get(W);Z===void 0&&(Z={},p.set(W,Z));const le=V(v);if(le!==w.__cacheKey){Z[le]===void 0&&(Z[le]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,$=!0),Z[le].usedTimes++;const de=Z[w.__cacheKey];de!==void 0&&(Z[w.__cacheKey].usedTimes--,de.usedTimes===0&&L(v)),w.__cacheKey=le,w.__webglTexture=Z[le].texture}return $}function K(w,v,$){return Math.floor(Math.floor(w/$)/v)}function ne(w,v,$,W){const le=w.updateRanges;if(le.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,v.width,v.height,$,W,v.data);else{le.sort((De,me)=>De.start-me.start);let de=0;for(let De=1;De<le.length;De++){const me=le[de],he=le[De],Ne=me.start+me.count,Fe=K(he.start,v.width,4),qe=K(me.start,v.width,4);he.start<=Ne+1&&Fe===qe&&K(he.start+he.count-1,v.width,4)===Fe?me.count=Math.max(me.count,he.start+he.count-me.start):(++de,le[de]=he)}le.length=de+1;const J=n.getParameter(t.UNPACK_ROW_LENGTH),ee=n.getParameter(t.UNPACK_SKIP_PIXELS),ue=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,v.width);for(let De=0,me=le.length;De<me;De++){const he=le[De],Ne=Math.floor(he.start/4),Fe=Math.ceil(he.count/4),qe=Ne%v.width,k=Math.floor(Ne/v.width),fe=Fe,j=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,qe),n.pixelStorei(t.UNPACK_SKIP_ROWS,k),n.texSubImage2D(t.TEXTURE_2D,0,qe,k,fe,j,$,W,v.data)}w.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,J),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ee),n.pixelStorei(t.UNPACK_SKIP_ROWS,ue)}}function Ee(w,v,$){let W=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=t.TEXTURE_3D);const Z=dt(w,v),le=v.source;n.bindTexture(W,w.__webglTexture,t.TEXTURE0+$);const de=i.get(le);if(le.version!==de.__version||Z===!0){if(n.activeTexture(t.TEXTURE0+$),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const j=st.getPrimaries(st.workingColorSpace),pe=v.colorSpace===gi?null:st.getPrimaries(v.colorSpace),be=v.colorSpace===gi||j===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment);let ee=g(v.image,!1,a.maxTextureSize);ee=Wt(v,ee);const ue=r.convert(v.format,v.colorSpace),De=r.convert(v.type);let me=x(v.internalFormat,ue,De,v.normalized,v.colorSpace,v.isVideoTexture);rt(W,v);let he;const Ne=v.mipmaps,Fe=v.isVideoTexture!==!0,qe=de.__version===void 0||Z===!0,k=le.dataReady,fe=A(v,ee);if(v.isDepthTexture)me=E(v.format===Ui,v.type),qe&&(Fe?n.texStorage2D(t.TEXTURE_2D,1,me,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,me,ee.width,ee.height,0,ue,De,null));else if(v.isDataTexture)if(Ne.length>0){Fe&&qe&&n.texStorage2D(t.TEXTURE_2D,fe,me,Ne[0].width,Ne[0].height);for(let j=0,pe=Ne.length;j<pe;j++)he=Ne[j],Fe?k&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,he.width,he.height,ue,De,he.data):n.texImage2D(t.TEXTURE_2D,j,me,he.width,he.height,0,ue,De,he.data);v.generateMipmaps=!1}else Fe?(qe&&n.texStorage2D(t.TEXTURE_2D,fe,me,ee.width,ee.height),k&&ne(v,ee,ue,De)):n.texImage2D(t.TEXTURE_2D,0,me,ee.width,ee.height,0,ue,De,ee.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Fe&&qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,me,Ne[0].width,Ne[0].height,ee.depth);for(let j=0,pe=Ne.length;j<pe;j++)if(he=Ne[j],v.format!==Cn)if(ue!==null)if(Fe){if(k)if(v.layerUpdates.size>0){const be=ud(he.width,he.height,v.format,v.type);for(const re of v.layerUpdates){const ke=he.data.subarray(re*be/he.data.BYTES_PER_ELEMENT,(re+1)*be/he.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,re,he.width,he.height,1,ue,ke)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,he.width,he.height,ee.depth,ue,he.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,j,me,he.width,he.height,ee.depth,0,he.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?k&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,he.width,he.height,ee.depth,ue,De,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,j,me,he.width,he.height,ee.depth,0,ue,De,he.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Fe&&qe&&n.texStorage2D(t.TEXTURE_2D,fe,me,Ne[0].width,Ne[0].height);for(let j=0,pe=Ne.length;j<pe;j++)he=Ne[j],v.format!==Cn?ue!==null?Fe?k&&n.compressedTexSubImage2D(t.TEXTURE_2D,j,0,0,he.width,he.height,ue,he.data):n.compressedTexImage2D(t.TEXTURE_2D,j,me,he.width,he.height,0,he.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?k&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,he.width,he.height,ue,De,he.data):n.texImage2D(t.TEXTURE_2D,j,me,he.width,he.height,0,ue,De,he.data)}else if(v.isDataArrayTexture)if(Fe){if(qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,me,ee.width,ee.height,ee.depth),k)if(v.layerUpdates.size>0){const j=ud(ee.width,ee.height,v.format,v.type);for(const pe of v.layerUpdates){const be=ee.data.subarray(pe*j/ee.data.BYTES_PER_ELEMENT,(pe+1)*j/ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,pe,ee.width,ee.height,1,ue,De,be)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ue,De,ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,me,ee.width,ee.height,ee.depth,0,ue,De,ee.data);else if(v.isData3DTexture)Fe?(qe&&n.texStorage3D(t.TEXTURE_3D,fe,me,ee.width,ee.height,ee.depth),k&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ue,De,ee.data)):n.texImage3D(t.TEXTURE_3D,0,me,ee.width,ee.height,ee.depth,0,ue,De,ee.data);else if(v.isFramebufferTexture){if(qe)if(Fe)n.texStorage2D(t.TEXTURE_2D,fe,me,ee.width,ee.height);else{let j=ee.width,pe=ee.height;for(let be=0;be<fe;be++)n.texImage2D(t.TEXTURE_2D,be,me,j,pe,0,ue,De,null),j>>=1,pe>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in t){const j=t.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),ee.parentNode!==j){j.appendChild(ee),h.add(v),j.onpaint=pe=>{const be=pe.changedElements;for(const re of h)be.includes(re.image)&&(re.needsUpdate=!0)},j.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ee);else{const be=t.RGBA,re=t.RGBA,ke=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,be,re,ke,ee)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(Fe&&qe){const j=pt(Ne[0]);n.texStorage2D(t.TEXTURE_2D,fe,me,j.width,j.height)}for(let j=0,pe=Ne.length;j<pe;j++)he=Ne[j],Fe?k&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,ue,De,he):n.texImage2D(t.TEXTURE_2D,j,me,ue,De,he);v.generateMipmaps=!1}else if(Fe){if(qe){const j=pt(ee);n.texStorage2D(t.TEXTURE_2D,fe,me,j.width,j.height)}k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue,De,ee)}else n.texImage2D(t.TEXTURE_2D,0,me,ue,De,ee);f(v)&&T(W),de.__version=le.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Ve(w,v,$){if(v.image.length!==6)return;const W=dt(w,v),Z=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+$);const le=i.get(Z);if(Z.version!==le.__version||W===!0){n.activeTexture(t.TEXTURE0+$);const de=st.getPrimaries(st.workingColorSpace),J=v.colorSpace===gi?null:st.getPrimaries(v.colorSpace),ee=v.colorSpace===gi||de===J?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const ue=v.isCompressedTexture||v.image[0].isCompressedTexture,De=v.image[0]&&v.image[0].isDataTexture,me=[];for(let re=0;re<6;re++)!ue&&!De?me[re]=g(v.image[re],!0,a.maxCubemapSize):me[re]=De?v.image[re].image:v.image[re],me[re]=Wt(v,me[re]);const he=me[0],Ne=r.convert(v.format,v.colorSpace),Fe=r.convert(v.type),qe=x(v.internalFormat,Ne,Fe,v.normalized,v.colorSpace),k=v.isVideoTexture!==!0,fe=le.__version===void 0||W===!0,j=Z.dataReady;let pe=A(v,he);rt(t.TEXTURE_CUBE_MAP,v);let be;if(ue){k&&fe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,qe,he.width,he.height);for(let re=0;re<6;re++){be=me[re].mipmaps;for(let ke=0;ke<be.length;ke++){const Ce=be[ke];v.format!==Cn?Ne!==null?k?j&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ke,0,0,Ce.width,Ce.height,Ne,Ce.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ke,qe,Ce.width,Ce.height,0,Ce.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?j&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ke,0,0,Ce.width,Ce.height,Ne,Fe,Ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ke,qe,Ce.width,Ce.height,0,Ne,Fe,Ce.data)}}}else{if(be=v.mipmaps,k&&fe){be.length>0&&pe++;const re=pt(me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,qe,re.width,re.height)}for(let re=0;re<6;re++)if(De){k?j&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,me[re].width,me[re].height,Ne,Fe,me[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,qe,me[re].width,me[re].height,0,Ne,Fe,me[re].data);for(let ke=0;ke<be.length;ke++){const St=be[ke].image[re].image;k?j&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ke+1,0,0,St.width,St.height,Ne,Fe,St.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ke+1,qe,St.width,St.height,0,Ne,Fe,St.data)}}else{k?j&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ne,Fe,me[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,qe,Ne,Fe,me[re]);for(let ke=0;ke<be.length;ke++){const Ce=be[ke];k?j&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ke+1,0,0,Ne,Fe,Ce.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ke+1,qe,Ne,Fe,Ce.image[re])}}}f(v)&&T(t.TEXTURE_CUBE_MAP),le.__version=Z.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Se(w,v,$,W,Z,le){const de=r.convert($.format,$.colorSpace),J=r.convert($.type),ee=x($.internalFormat,de,J,$.normalized,$.colorSpace),ue=i.get(v),De=i.get($);if(De.__renderTarget=v,!ue.__hasExternalTextures){const me=Math.max(1,v.width>>le),he=Math.max(1,v.height>>le);Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?n.texImage3D(Z,le,ee,me,he,v.depth,0,de,J,null):n.texImage2D(Z,le,ee,me,he,0,de,J,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),Pt(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,W,Z,De.__webglTexture,0,Rt(v)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,W,Z,De.__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function et(w,v,$){if(t.bindRenderbuffer(t.RENDERBUFFER,w),v.depthBuffer){const W=v.depthTexture,Z=W&&W.isDepthTexture?W.type:null,le=E(v.stencilBuffer,Z),de=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Pt(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Rt(v),le,v.width,v.height):$?t.renderbufferStorageMultisample(t.RENDERBUFFER,Rt(v),le,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,le,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,de,t.RENDERBUFFER,w)}else{const W=v.textures;for(let Z=0;Z<W.length;Z++){const le=W[Z],de=r.convert(le.format,le.colorSpace),J=r.convert(le.type),ee=x(le.internalFormat,de,J,le.normalized,le.colorSpace);Pt(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Rt(v),ee,v.width,v.height):$?t.renderbufferStorageMultisample(t.RENDERBUFFER,Rt(v),ee,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,ee,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ut(w,v,$){const W=v.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=i.get(v.depthTexture);if(Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,v.depthTexture.addEventListener("dispose",C)),Z.__webglTexture===void 0){Z.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),rt(t.TEXTURE_CUBE_MAP,v.depthTexture);const ue=r.convert(v.depthTexture.format),De=r.convert(v.depthTexture.type);let me;v.depthTexture.format===ai?me=t.DEPTH_COMPONENT24:v.depthTexture.format===Ui&&(me=t.DEPTH24_STENCIL8);for(let he=0;he<6;he++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,me,v.width,v.height,0,ue,De,null)}}else te(v.depthTexture,0);const le=Z.__webglTexture,de=Rt(v),J=W?t.TEXTURE_CUBE_MAP_POSITIVE_X+$:t.TEXTURE_2D,ee=v.depthTexture.format===Ui?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(v.depthTexture.format===ai)Pt(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,J,le,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,ee,J,le,0);else if(v.depthTexture.format===Ui)Pt(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,J,le,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,ee,J,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function tt(w){const v=i.get(w),$=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const W=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=W}if(w.depthTexture&&!v.__autoAllocateDepthBuffer)if($)for(let W=0;W<6;W++)Ut(v.__webglFramebuffer[W],w,W);else{const W=w.texture.mipmaps;W&&W.length>0?Ut(v.__webglFramebuffer[0],w,0):Ut(v.__webglFramebuffer,w,0)}else if($){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=t.createRenderbuffer(),et(v.__webglDepthbuffer[W],w,!1);else{const Z=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=v.__webglDepthbuffer[W];t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,le)}}else{const W=w.texture.mipmaps;if(W&&W.length>0?n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),et(v.__webglDepthbuffer,w,!1);else{const Z=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,le)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ct(w,v,$){const W=i.get(w);v!==void 0&&Se(W.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),$!==void 0&&tt(w)}function xt(w){const v=w.texture,$=i.get(w),W=i.get(v);w.addEventListener("dispose",m);const Z=w.textures,le=w.isWebGLCubeRenderTarget===!0,de=Z.length>1;if(de||(W.__webglTexture===void 0&&(W.__webglTexture=t.createTexture()),W.__version=v.version,s.memory.textures++),le){$.__webglFramebuffer=[];for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0){$.__webglFramebuffer[J]=[];for(let ee=0;ee<v.mipmaps.length;ee++)$.__webglFramebuffer[J][ee]=t.createFramebuffer()}else $.__webglFramebuffer[J]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){$.__webglFramebuffer=[];for(let J=0;J<v.mipmaps.length;J++)$.__webglFramebuffer[J]=t.createFramebuffer()}else $.__webglFramebuffer=t.createFramebuffer();if(de)for(let J=0,ee=Z.length;J<ee;J++){const ue=i.get(Z[J]);ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture(),s.memory.textures++)}if(w.samples>0&&Pt(w)===!1){$.__webglMultisampledFramebuffer=t.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){const ee=Z[J];$.__webglColorRenderbuffer[J]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,$.__webglColorRenderbuffer[J]);const ue=r.convert(ee.format,ee.colorSpace),De=r.convert(ee.type),me=x(ee.internalFormat,ue,De,ee.normalized,ee.colorSpace,w.isXRRenderTarget===!0),he=Rt(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,he,me,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+J,t.RENDERBUFFER,$.__webglColorRenderbuffer[J])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&($.__webglDepthRenderbuffer=t.createRenderbuffer(),et($.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(le){n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture),rt(t.TEXTURE_CUBE_MAP,v);for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0)for(let ee=0;ee<v.mipmaps.length;ee++)Se($.__webglFramebuffer[J][ee],w,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ee);else Se($.__webglFramebuffer[J],w,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);f(v)&&T(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(de){for(let J=0,ee=Z.length;J<ee;J++){const ue=Z[J],De=i.get(ue);let me=t.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(me=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(me,De.__webglTexture),rt(me,ue),Se($.__webglFramebuffer,w,ue,t.COLOR_ATTACHMENT0+J,me,0),f(ue)&&T(me)}n.unbindTexture()}else{let J=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(J=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(J,W.__webglTexture),rt(J,v),v.mipmaps&&v.mipmaps.length>0)for(let ee=0;ee<v.mipmaps.length;ee++)Se($.__webglFramebuffer[ee],w,v,t.COLOR_ATTACHMENT0,J,ee);else Se($.__webglFramebuffer,w,v,t.COLOR_ATTACHMENT0,J,0);f(v)&&T(J),n.unbindTexture()}w.depthBuffer&&tt(w)}function at(w){const v=w.textures;for(let $=0,W=v.length;$<W;$++){const Z=v[$];if(f(Z)){const le=D(w),de=i.get(Z).__webglTexture;n.bindTexture(le,de),T(le),n.unbindTexture()}}}const At=[],$t=[];function ln(w){if(w.samples>0){if(Pt(w)===!1){const v=w.textures,$=w.width,W=w.height;let Z=t.COLOR_BUFFER_BIT;const le=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=i.get(w),J=v.length>1;if(J)for(let ue=0;ue<v.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const ee=w.texture.mipmaps;ee&&ee.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ue=0;ue<v.length;ue++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),J){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,de.__webglColorRenderbuffer[ue]);const De=i.get(v[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,De,0)}t.blitFramebuffer(0,0,$,W,0,0,$,W,Z,t.NEAREST),l===!0&&(At.length=0,$t.length=0,At.push(t.COLOR_ATTACHMENT0+ue),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(At.push(le),$t.push(le),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,$t)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,At))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),J)for(let ue=0;ue<v.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,de.__webglColorRenderbuffer[ue]);const De=i.get(v[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,De,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){const v=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function Rt(w){return Math.min(a.maxSamples,w.samples)}function Pt(w){const v=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function F(w){const v=s.render.frame;d.get(w)!==v&&(d.set(w,v),w.update())}function Wt(w,v){const $=w.colorSpace,W=w.format,Z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||$!==us&&$!==gi&&(st.getTransfer($)===mt?(W!==Cn||Z!==vn)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",$)),v}function pt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=O,this.getTextureUnits=M,this.setTextureUnits=U,this.setTexture2D=te,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=ie,this.rebindTextures=ct,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Pt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Jv(t,e){function n(i,a=gi){let r;const s=st.getTransfer(a);if(i===vn)return t.UNSIGNED_BYTE;if(i===kl)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Ol)return t.UNSIGNED_SHORT_5_5_5_1;if(i===du)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===uu)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===lu)return t.BYTE;if(i===cu)return t.SHORT;if(i===ar)return t.UNSIGNED_SHORT;if(i===Ul)return t.INT;if(i===Wn)return t.UNSIGNED_INT;if(i===zn)return t.FLOAT;if(i===Xn)return t.HALF_FLOAT;if(i===hu)return t.ALPHA;if(i===fu)return t.RGB;if(i===Cn)return t.RGBA;if(i===ai)return t.DEPTH_COMPONENT;if(i===Ui)return t.DEPTH_STENCIL;if(i===pu)return t.RED;if(i===Fl)return t.RED_INTEGER;if(i===Hi)return t.RG;if(i===Bl)return t.RG_INTEGER;if(i===$l)return t.RGBA_INTEGER;if(i===is||i===as||i===rs||i===ss)if(s===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===is)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===as)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ss)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===is)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===as)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===rs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ss)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ho||i===Go||i===Vo||i===Wo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ho)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Go)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xo||i===qo||i===Yo||i===Zo||i===Ko||i===cs||i===Jo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Xo||i===qo)return s===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Yo)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Zo)return r.COMPRESSED_R11_EAC;if(i===Ko)return r.COMPRESSED_SIGNED_R11_EAC;if(i===cs)return r.COMPRESSED_RG11_EAC;if(i===Jo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Qo||i===jo||i===el||i===tl||i===nl||i===il||i===al||i===rl||i===sl||i===ol||i===ll||i===cl||i===dl||i===ul)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Qo)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===jo)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===el)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===tl)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nl)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===il)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===al)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===rl)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sl)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ol)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ll)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===cl)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dl)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ul)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hl||i===fl||i===pl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===hl)return s===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ml||i===gl||i===ds||i===vl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ml)return r.COMPRESSED_RED_RGTC1_EXT;if(i===gl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ds)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rr?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const Qv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jv=`
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

}`;class e_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Tu(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new qn({vertexShader:Qv,fragmentShader:jv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Je(new cn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class t_ extends Wi{constructor(e,n){super();const i=this;let a=null,r=1,s=null,o="local-floor",l=1,c=null,d=null,h=null,u=null,p=null,_=null;const y=typeof XRWebGLBinding<"u",g=new e_,f={},T=n.getContextAttributes();let D=null,x=null;const E=[],A=[],C=new Xe;let m=null,S=null;const L=new gn;L.viewport=new Ct;const R=new gn;R.viewport=new Ct;const I=[L,R],O=new op;let M=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=E[K];return ne===void 0&&(ne=new Js,E[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=E[K];return ne===void 0&&(ne=new Js,E[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=E[K];return ne===void 0&&(ne=new Js,E[K]=ne),ne.getHandSpace()};function Y(K){const ne=A.indexOf(K.inputSource);if(ne===-1)return;const Ee=E[ne];Ee!==void 0&&(Ee.update(K.inputSource,K.frame,c||s),Ee.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){a.removeEventListener("select",Y),a.removeEventListener("selectstart",Y),a.removeEventListener("selectend",Y),a.removeEventListener("squeeze",Y),a.removeEventListener("squeezestart",Y),a.removeEventListener("squeezeend",Y),a.removeEventListener("end",V),a.removeEventListener("inputsourceschange",te);for(let K=0;K<E.length;K++){const ne=A[K];ne!==null&&(A[K]=null,E[K].disconnect(ne))}M=null,U=null,g.reset();for(const K in f)delete f[K];if(e.setRenderTarget(D),p=null,u=null,h=null,a=null,x=null,dt.stop(),i.isPresenting=!1,e.setPixelRatio(m),e.setSize(C.width,C.height,!1),S!==null){const K=S.camera;K.fov=S.fov,K.zoom=S.zoom,K.updateProjectionMatrix(),S=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(a,n)),h},this.getFrame=function(){return _},this.getSession=function(){return a},this.setSession=async function(K){if(a=K,a!==null){if(D=e.getRenderTarget(),a.addEventListener("select",Y),a.addEventListener("selectstart",Y),a.addEventListener("selectend",Y),a.addEventListener("squeeze",Y),a.addEventListener("squeezestart",Y),a.addEventListener("squeezeend",Y),a.addEventListener("end",V),a.addEventListener("inputsourceschange",te),T.xrCompatible!==!0&&await n.makeXRCompatible(),m=e.getPixelRatio(),e.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Ve=null,Se=null;T.depth&&(Se=T.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ee=T.stencil?Ui:ai,Ve=T.stencil?rr:Wn);const et={colorFormat:n.RGBA8,depthFormat:Se,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(et),a.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new Ln(u.textureWidth,u.textureHeight,{format:Cn,type:vn,depthTexture:new or(u.textureWidth,u.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const Ee={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,n,Ee),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Ln(p.framebufferWidth,p.framebufferHeight,{format:Cn,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),dt.setContext(a),dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function te(K){for(let ne=0;ne<K.removed.length;ne++){const Ee=K.removed[ne],Ve=A.indexOf(Ee);Ve>=0&&(A[Ve]=null,E[Ve].disconnect(Ee))}for(let ne=0;ne<K.added.length;ne++){const Ee=K.added[ne];let Ve=A.indexOf(Ee);if(Ve===-1){for(let et=0;et<E.length;et++)if(et>=A.length){A.push(Ee),Ve=et;break}else if(A[et]===null){A[et]=Ee,Ve=et;break}if(Ve===-1)break}const Se=E[Ve];Se&&Se.connect(Ee)}}const q=new B,Q=new B;function ie(K,ne,Ee){q.setFromMatrixPosition(ne.matrixWorld),Q.setFromMatrixPosition(Ee.matrixWorld);const Ve=q.distanceTo(Q),Se=ne.projectionMatrix.elements,et=Ee.projectionMatrix.elements,Ut=Se[14]/(Se[10]-1),tt=Se[14]/(Se[10]+1),ct=(Se[9]+1)/Se[5],xt=(Se[9]-1)/Se[5],at=(Se[8]-1)/Se[0],At=(et[8]+1)/et[0],$t=Ut*at,ln=Ut*At,Rt=Ve/(-at+At),Pt=Rt*-at;if(ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Pt),K.translateZ(Rt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Se[10]===-1)K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const F=Ut+Rt,Wt=tt+Rt,pt=$t-Pt,w=ln+(Ve-Pt),v=ct*tt/Wt*F,$=xt*tt/Wt*F;K.projectionMatrix.makePerspective(pt,w,v,$,F,Wt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Re(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(a===null)return;let ne=K.near,Ee=K.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(Ee=g.depthFar)),O.near=R.near=L.near=ne,O.far=R.far=L.far=Ee,(M!==O.near||U!==O.far)&&(a.updateRenderState({depthNear:O.near,depthFar:O.far}),M=O.near,U=O.far),O.layers.mask=K.layers.mask|6,L.layers.mask=O.layers.mask&-5,R.layers.mask=O.layers.mask&-3;const Ve=K.parent,Se=O.cameras;Re(O,Ve);for(let et=0;et<Se.length;et++)Re(Se[et],Ve);Se.length===2?ie(O,L,R):O.projectionMatrix.copy(L.projectionMatrix),S===null&&K.isPerspectiveCamera&&(S={camera:K,fov:K.fov,zoom:K.zoom}),se(K,O,Ve)};function se(K,ne,Ee){Ee===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(Ee.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=bl*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(K){return f[K]};let ut=null;function rt(K,ne){if(d=ne.getViewerPose(c||s),_=ne,d!==null){const Ee=d.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let Ve=!1;Ee.length!==O.cameras.length&&(O.cameras.length=0,Ve=!0);for(let tt=0;tt<Ee.length;tt++){const ct=Ee[tt];let xt=null;if(p!==null)xt=p.getViewport(ct);else{const At=h.getViewSubImage(u,ct);xt=At.viewport,tt===0&&(e.setRenderTargetTextures(x,At.colorTexture,At.depthStencilTexture),e.setRenderTarget(x))}let at=I[tt];at===void 0&&(at=new gn,at.layers.enable(tt),at.viewport=new Ct,I[tt]=at),at.matrix.fromArray(ct.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(ct.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(xt.x,xt.y,xt.width,xt.height),tt===0&&(O.matrix.copy(at.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ve===!0&&O.cameras.push(at)}const Se=a.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&y){h=i.getBinding();const tt=h.getDepthInformation(Ee[0]);tt&&tt.isValid&&tt.texture&&g.init(tt,a.renderState)}if(Se&&Se.includes("camera-access")&&y){e.state.unbindTexture(),h=i.getBinding();for(let tt=0;tt<Ee.length;tt++){const ct=Ee[tt].camera;if(ct){let xt=f[ct];xt||(xt=new Tu,f[ct]=xt);const at=h.getCameraImage(ct);xt.sourceTexture=at}}}}for(let Ee=0;Ee<E.length;Ee++){const Ve=A[Ee],Se=E[Ee];Ve!==null&&Se!==void 0&&Se.update(Ve,ne,c||s)}ut&&ut(K,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),_=null}const dt=new Cu;dt.setAnimationLoop(rt),this.setAnimationLoop=function(K){ut=K},this.dispose=function(){}}}const n_=new yt,ku=new We;ku.set(-1,0,0,0,1,0,0,0,1);function i_(t,e){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,Au(t)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function a(g,f,T,D,x){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(g,f):f.isMeshLambertMaterial?(r(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(g,f),h(g,f)):f.isMeshPhongMaterial?(r(g,f),d(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(g,f),u(g,f),f.isMeshPhysicalMaterial&&p(g,f,x)):f.isMeshMatcapMaterial?(r(g,f),_(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),y(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(s(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,T,D):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===un&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===un&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const T=e.get(f),D=T.envMap,x=T.envMapRotation;D&&(g.envMap.value=D,g.envMapRotation.value.setFromMatrix4(n_.makeRotationFromEuler(x)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(ku),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function s(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,T,D){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*T,g.scale.value=D*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function d(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function h(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function u(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,T){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===un&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.retroreflectivity>0&&(g.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,f){f.matcap&&(g.matcap.value=f.matcap)}function y(g,f){const T=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function a_(t,e,n,i){let a={},r={},s=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,E){const A=E.program;i.uniformBlockBinding(x,A)}function c(x,E){let A=a[x.id];A===void 0&&(g(x),A=d(x),a[x.id]=A,x.addEventListener("dispose",T));const C=E.program;i.updateUBOMapping(x,C);const m=e.render.frame;r[x.id]!==m&&(u(x),r[x.id]=m)}function d(x){const E=h();x.__bindingPointIndex=E;const A=t.createBuffer(),C=x.__size,m=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,C,m),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,A),A}function h(){for(let x=0;x<o;x++)if(s.indexOf(x)===-1)return s.push(x),x;return ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const E=a[x.id],A=x.uniforms,C=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let m=0,S=A.length;m<S;m++){const L=A[m];if(Array.isArray(L))for(let R=0,I=L.length;R<I;R++)p(L[R],m,R,C);else p(L,m,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(x,E,A,C){if(y(x,E,A,C)===!0){const m=x.__offset,S=x.value;if(Array.isArray(S)){let L=0;for(let R=0;R<S.length;R++){const I=S[R],O=f(I);_(I,x.__data,L),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(L+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(S,x.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,m,x.__data)}}function _(x,E,A){typeof x=="number"||typeof x=="boolean"?E[0]=x:x.isMatrix3?(E[0]=x.elements[0],E[1]=x.elements[1],E[2]=x.elements[2],E[3]=0,E[4]=x.elements[3],E[5]=x.elements[4],E[6]=x.elements[5],E[7]=0,E[8]=x.elements[6],E[9]=x.elements[7],E[10]=x.elements[8],E[11]=0):ArrayBuffer.isView(x)?E.set(new x.constructor(x.buffer,x.byteOffset,E.length)):x.toArray(E,A)}function y(x,E,A,C){const m=x.value,S=E+"_"+A;if(C[S]===void 0)return typeof m=="number"||typeof m=="boolean"?C[S]=m:ArrayBuffer.isView(m)?C[S]=m.slice():C[S]=m.clone(),!0;{const L=C[S];if(typeof m=="number"||typeof m=="boolean"){if(L!==m)return C[S]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(L.equals(m)===!1)return L.copy(m),!0}}return!1}function g(x){const E=x.uniforms;let A=0;const C=16;for(let S=0,L=E.length;S<L;S++){const R=Array.isArray(E[S])?E[S]:[E[S]];for(let I=0,O=R.length;I<O;I++){const M=R[I],U=Array.isArray(M.value)?M.value:[M.value];for(let Y=0,V=U.length;Y<V;Y++){const te=U[Y],q=f(te),Q=A%C,ie=Q%q.boundary,Re=Q+ie;A+=ie,Re!==0&&C-Re<q.storage&&(A+=C-Re),M.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=A,A+=q.storage}}}const m=A%C;return m>0&&(A+=C-m),x.__size=A,x.__cache={},this}function f(x){const E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(E.boundary=16,E.storage=x.byteLength):$e("WebGLRenderer: Unsupported uniform value type.",x),E}function T(x){const E=x.target;E.removeEventListener("dispose",T);const A=s.indexOf(E.__bindingPointIndex);s.splice(A,1),t.deleteBuffer(a[E.id]),delete a[E.id],delete r[E.id]}function D(){for(const x in a)t.deleteBuffer(a[x]);s=[],a={},r={}}return{bind:l,update:c,dispose:D}}const r_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Un=null;function s_(){return Un===null&&(Un=new Gf(r_,16,16,Hi,Xn),Un.name="DFG_LUT",Un.minFilter=Jt,Un.magFilter=Jt,Un.wrapS=jn,Un.wrapT=jn,Un.generateMipmaps=!1,Un.needsUpdate=!0),Un}class o_{constructor(e={}){const{canvas:n=vf(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:p=vn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=s;const y=p,g=new Set([$l,Bl,Fl]),f=new Set([vn,Wn,ar,rr,kl,Ol]),T=new Uint32Array(4),D=new Int32Array(4),x=new B;let E=null,A=null;const C=[],m=[];let S=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let R=!1,I=null,O=null,M=null,U=null;this._outputColorSpace=Kt;let Y=0,V=0,te=null,q=-1,Q=null;const ie=new Ct,Re=new Ct;let se=null;const ut=new je(0);let rt=0,dt=n.width,K=n.height,ne=1,Ee=null,Ve=null;const Se=new Ct(0,0,dt,K),et=new Ct(0,0,dt,K);let Ut=!1;const tt=new Xl;let ct=!1,xt=!1;const at=new yt,At=new B,$t=new Ct,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function Pt(){return te===null?ne:1}let F=i;function Wt(b,N){return n.getContext(b,N)}let pt,w,v,$,W,Z,le,de,J,ee,ue,De,me,he,Ne,Fe,qe,k,fe,j,pe,be,re;try{const b={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Dl}`),n.addEventListener("webglcontextlost",St,!1),n.addEventListener("webglcontextrestored",ht,!1),n.addEventListener("webglcontextcreationerror",En,!1),F===null){const N="webgl2";if(F=Wt(N,b),F===null)throw Wt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ke()}catch(b){throw n.removeEventListener("webglcontextlost",St,!1),n.removeEventListener("webglcontextrestored",ht,!1),n.removeEventListener("webglcontextcreationerror",En,!1),ot("WebGLRenderer: "+b.message),b}function ke(){pt=new s0(F),pt.init(),pe=new Jv(F,pt),w=new Kg(F,pt,e,pe),v=new Zv(F,pt),w.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),O=F.createFramebuffer(),M=F.createFramebuffer(),U=F.createFramebuffer(),$=new c0(F),W=new Uv,Z=new Kv(F,pt,v,W,w,pe,$),le=new r0(L),de=new up(F),be=new Yg(F,de),J=new o0(F,de,$,be),ee=new u0(F,J,de,be,$),k=new d0(F,w,Z),Ne=new Jg(W),ue=new Nv(L,le,pt,w,be,Ne),De=new i_(L,W),me=new Ov,he=new Gv(pt),qe=new qg(L,le,v,ee,_,l),Fe=new Yv(L,ee,w),re=new a_(F,$,w,v),fe=new Zg(F,pt,$),j=new l0(F,pt,$),$.programs=ue.programs,L.capabilities=w,L.extensions=pt,L.properties=W,L.renderLists=me,L.shadowMap=Fe,L.state=v,L.info=$}y!==vn&&(S=new f0(y,n.width,n.height,o,a,r));const Ce=new t_(L,F);this.xr=Ce,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=pt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=pt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(b){b!==void 0&&(ne=b,this.setSize(dt,K,!1))},this.getSize=function(b){return b.set(dt,K)},this.setSize=function(b,N,X=!0){if(Ce.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}dt=b,K=N,n.width=Math.floor(b*ne),n.height=Math.floor(N*ne),X===!0&&(n.style.width=b+"px",n.style.height=N+"px"),S!==null&&S.setSize(n.width,n.height),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(dt*ne,K*ne).floor()},this.setDrawingBufferSize=function(b,N,X){dt=b,K=N,ne=X,n.width=Math.floor(b*X),n.height=Math.floor(N*X),this.setViewport(0,0,b,N)},this.setEffects=function(b){if(y===vn){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let N=0;N<b.length;N++)if(b[N].isOutputPass===!0){$e("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ie)},this.getViewport=function(b){return b.copy(Se)},this.setViewport=function(b,N,X,H){b.isVector4?Se.set(b.x,b.y,b.z,b.w):Se.set(b,N,X,H),v.viewport(ie.copy(Se).multiplyScalar(ne).round())},this.getScissor=function(b){return b.copy(et)},this.setScissor=function(b,N,X,H){b.isVector4?et.set(b.x,b.y,b.z,b.w):et.set(b,N,X,H),v.scissor(Re.copy(et).multiplyScalar(ne).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(b){v.setScissorTest(Ut=b)},this.setOpaqueSort=function(b){Ee=b},this.setTransparentSort=function(b){Ve=b},this.getClearColor=function(b){return b.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(b=!0,N=!0,X=!0){let H=0;if(b){let G=!1;if(te!==null){const _e=te.texture.format;G=g.has(_e)}if(G){const _e=te.texture.type,Me=f.has(_e),ve=qe.getClearColor(),Te=qe.getClearAlpha(),Le=ve.r,Ze=ve.g,nt=ve.b;Me?(T[0]=Le,T[1]=Ze,T[2]=nt,T[3]=Te,F.clearBufferuiv(F.COLOR,0,T)):(D[0]=Le,D[1]=Ze,D[2]=nt,D[3]=Te,F.clearBufferiv(F.COLOR,0,D))}else H|=F.COLOR_BUFFER_BIT}N&&(H|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),I=b},this.dispose=function(){n.removeEventListener("webglcontextlost",St,!1),n.removeEventListener("webglcontextrestored",ht,!1),n.removeEventListener("webglcontextcreationerror",En,!1),qe.dispose(),me.dispose(),he.dispose(),W.dispose(),le.dispose(),ee.dispose(),be.dispose(),re.dispose(),ue.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",gc),Ce.removeEventListener("sessionend",vc),Ti.stop()};function St(b){b.preventDefault(),ps("WebGLRenderer: Context Lost."),R=!0}function ht(){ps("WebGLRenderer: Context Restored."),R=!1;const b=$.autoReset,N=Fe.enabled,X=Fe.autoUpdate,H=Fe.needsUpdate,G=Fe.type;ke(),$.autoReset=b,Fe.enabled=N,Fe.autoUpdate=X,Fe.needsUpdate=H,Fe.type=G}function En(b){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function In(b){const N=b.target;N.removeEventListener("dispose",In),Th(N)}function Th(b){Ah(b),W.remove(b)}function Ah(b){const N=W.get(b).programs;N!==void 0&&(N.forEach(function(X){ue.releaseProgram(X)}),b.isShaderMaterial&&ue.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,X,H,G,_e){N===null&&(N=ln);const Me=G.isMesh&&G.matrixWorld.determinantAffine()<0,ve=Ch(b,N,X,H,G);v.setMaterial(H,Me);let Te=X.index,Le=1;if(H.wireframe===!0){if(Te=J.getWireframeAttribute(X),Te===void 0)return;Le=2}const Ze=X.drawRange,nt=X.attributes.position;let Ae=Ze.start*Le,ft=(Ze.start+Ze.count)*Le;_e!==null&&(Ae=Math.max(Ae,_e.start*Le),ft=Math.min(ft,(_e.start+_e.count)*Le)),Te!==null?(Ae=Math.max(Ae,0),ft=Math.min(ft,Te.count)):nt!=null&&(Ae=Math.max(Ae,0),ft=Math.min(ft,nt.count));const It=ft-Ae;if(It<0||It===1/0)return;be.setup(G,H,ve,X,Te);let Et,_t=fe;if(Te!==null&&(Et=de.get(Te),_t=j,_t.setIndex(Et)),G.isMesh)H.wireframe===!0?(v.setLineWidth(H.wireframeLinewidth*Pt()),_t.setMode(F.LINES)):_t.setMode(F.TRIANGLES);else if(G.isLine){let Xt=H.linewidth;Xt===void 0&&(Xt=1),v.setLineWidth(Xt*Pt()),G.isLineSegments?_t.setMode(F.LINES):G.isLineLoop?_t.setMode(F.LINE_LOOP):_t.setMode(F.LINE_STRIP)}else G.isPoints?_t.setMode(F.POINTS):G.isSprite&&_t.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))_t.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Xt=G._multiDrawStarts,xe=G._multiDrawCounts,tn=G._multiDrawCount,lt=Te?de.get(Te).bytesPerElement:1,_n=W.get(H).currentProgram.getUniforms();for(let Dn=0;Dn<tn;Dn++)_n.setValue(F,"_gl_DrawID",Dn),_t.render(Xt[Dn]/lt,xe[Dn])}else if(G.isInstancedMesh)_t.renderInstances(Ae,It,G.count);else if(X.isInstancedBufferGeometry){const Xt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,xe=Math.min(X.instanceCount,Xt);_t.renderInstances(Ae,It,xe)}else _t.render(Ae,It)};function mc(b,N,X,H){I!==null&&b.isNodeMaterial&&I.setObject(H,b),ct===!0&&Ne.setState(b,X,!1),b.transparent===!0&&b.side===Bn&&b.forceSinglePass===!1?(b.side=un,b.needsUpdate=!0,Sr(b,N,H),b.side=$i,b.needsUpdate=!0,Sr(b,N,H),b.side=Bn):Sr(b,N,H)}this.compile=function(b,N,X=null){X===null&&(X=b),I!==null&&I.renderStart(b,N,X),A=he.get(X),A.init(N),m.push(A),X.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),b!==X&&b.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),A.setupLights(),I!==null&&I.updateLights(A.state.lightsArray),xt=this.localClippingEnabled,ct=Ne.init(this.clippingPlanes,xt),ct===!0&&Ne.setGlobalState(this.clippingPlanes,N),I!==null&&Fe.render(A.state.shadowsArray,X,N);const H=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const _e=G.material;if(_e)if(Array.isArray(_e))for(let Me=0;Me<_e.length;Me++){const ve=_e[Me];mc(ve,X,N,G),H.add(ve)}else mc(_e,X,N,G),H.add(_e)}),A=m.pop(),I!==null&&I.renderEnd(),H},this.compileAsync=function(b,N,X=null){const H=this.compile(b,N,X);return new Promise(G=>{function _e(){if(H.forEach(function(Me){const Te=W.get(Me).currentProgram;(Te===void 0||Te.isReady())&&H.delete(Me)}),H.size===0){G(b);return}setTimeout(_e,10)}pt.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Fs=null;function wh(b){Fs&&Fs(b)}function gc(){Ti.stop()}function vc(){Ti.start()}const Ti=new Cu;Ti.setAnimationLoop(wh),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(b){Fs=b,Ce.setAnimationLoop(b),b===null?Ti.stop():Ti.start()},Ce.addEventListener("sessionstart",gc),Ce.addEventListener("sessionend",vc),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;I!==null&&I.renderStart(b,N);const X=Ce.enabled===!0&&Ce.isPresenting===!0,H=S!==null&&(te===null||X)&&S.begin(L,te);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(N),N=Ce.getCamera()),b.isScene===!0&&b.onBeforeRender(L,b,N,te),A=he.get(b,m.length),A.init(N),A.state.textureUnits=Z.getTextureUnits(),m.push(A),at.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),tt.setFromProjectionMatrix(at,Hn,N.reversedDepth),xt=this.localClippingEnabled,ct=Ne.init(this.clippingPlanes,xt),E=me.get(b,C.length),E.init(),C.push(E),Ce.enabled===!0&&Ce.isPresenting===!0){const Me=L.xr.getDepthSensingMesh();Me!==null&&Bs(Me,N,-1/0,L.sortObjects)}Bs(b,N,0,L.sortObjects),E.finish(),I!==null&&I.updateLights(A.state.lightsArray),L.sortObjects===!0&&E.sort(Ee,Ve),Rt=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,Rt&&qe.addToRenderList(E,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ct===!0&&Ne.beginShadows();const G=A.state.shadowsArray;if(Fe.render(G,b,N),ct===!0&&Ne.endShadows(),(H&&S.hasRenderPass())===!1){const Me=E.opaque,ve=E.transmissive;if(A.setupLights(),N.isArrayCamera){const Te=N.cameras;if(ve.length>0)for(let Le=0,Ze=Te.length;Le<Ze;Le++){const nt=Te[Le];bc(Me,ve,b,nt)}Rt&&qe.render(b);for(let Le=0,Ze=Te.length;Le<Ze;Le++){const nt=Te[Le];_c(E,b,nt,nt.viewport)}}else ve.length>0&&bc(Me,ve,b,N),Rt&&qe.render(b),_c(E,b,N)}te!==null&&V===0&&(Z.updateMultisampleRenderTarget(te),Z.updateRenderTargetMipmap(te)),H&&S.end(L),b.isScene===!0&&b.onAfterRender(L,b,N),be.resetDefaultState(),q=-1,Q=null,m.pop(),m.length>0?(A=m[m.length-1],Z.setTextureUnits(A.state.textureUnits),ct===!0&&Ne.setGlobalState(L.clippingPlanes,A.state.camera)):A=null,C.pop(),C.length>0?E=C[C.length-1]:E=null,I!==null&&I.renderEnd()};function Bs(b,N,X,H){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLightProbeGrid)A.pushLightProbeGrid(b);else if(b.isLight)A.pushLight(b),b.castShadow&&A.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(tt)){H&&$t.setFromMatrixPosition(b.matrixWorld).applyMatrix4(at);const Me=ee.update(b),ve=b.material;ve.visible&&E.push(b,Me,ve,X,$t.z,null,N)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(tt))){const Me=ee.update(b),ve=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),$t.copy(b.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),$t.copy(Me.boundingSphere.center)),$t.applyMatrix4(b.matrixWorld).applyMatrix4(at)),Array.isArray(ve)){const Te=Me.groups;for(let Le=0,Ze=Te.length;Le<Ze;Le++){const nt=Te[Le],Ae=ve[nt.materialIndex];Ae&&Ae.visible&&E.push(b,Me,Ae,X,$t.z,nt,N)}}else ve.visible&&E.push(b,Me,ve,X,$t.z,null,N)}}const _e=b.children;for(let Me=0,ve=_e.length;Me<ve;Me++)Bs(_e[Me],N,X,H)}function _c(b,N,X,H){const{opaque:G,transmissive:_e,transparent:Me}=b;A.setupLightsView(X),ct===!0&&Ne.setGlobalState(L.clippingPlanes,X),H&&v.viewport(ie.copy(H)),G.length>0&&xr(G,N,X),_e.length>0&&xr(_e,N,X),Me.length>0&&xr(Me,N,X),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function bc(b,N,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[H.id]===void 0){const Ae=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[H.id]=new Ln(1,1,{generateMipmaps:!0,type:Ae?Xn:vn,minFilter:Ni,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}const _e=A.state.transmissionRenderTarget[H.id],Me=H.viewport||ie;_e.setSize(Me.z*L.transmissionResolutionScale,Me.w*L.transmissionResolutionScale);const ve=L.getRenderTarget(),Te=L.getActiveCubeFace(),Le=L.getActiveMipmapLevel();L.setRenderTarget(_e),L.getClearColor(ut),rt=L.getClearAlpha(),rt<1&&L.setClearColor(16777215,.5),L.clear(),Rt&&qe.render(X);const Ze=L.toneMapping;L.toneMapping=Gn;const nt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),A.setupLightsView(H),ct===!0&&Ne.setGlobalState(L.clippingPlanes,H),xr(b,X,H),Z.updateMultisampleRenderTarget(_e),Z.updateRenderTargetMipmap(_e),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let ft=0,It=N.length;ft<It;ft++){const Et=N[ft],{object:_t,geometry:Xt,material:xe,group:tn}=Et;if(xe.side===Bn&&_t.layers.test(H.layers)){const lt=xe.side;xe.side=un,xe.needsUpdate=!0,yc(_t,X,H,Xt,xe,tn),xe.side=lt,xe.needsUpdate=!0,Ae=!0}}Ae===!0&&(Z.updateMultisampleRenderTarget(_e),Z.updateRenderTargetMipmap(_e))}L.setRenderTarget(ve,Te,Le),L.setClearColor(ut,rt),nt!==void 0&&(H.viewport=nt),L.toneMapping=Ze}function xr(b,N,X){const H=N.isScene===!0?N.overrideMaterial:null;for(let G=0,_e=b.length;G<_e;G++){const Me=b[G],{object:ve,geometry:Te,group:Le}=Me;let Ze=Me.material;Ze.allowOverride===!0&&H!==null&&(Ze=H),ve.layers.test(X.layers)&&yc(ve,N,X,Te,Ze,Le)}}function yc(b,N,X,H,G,_e){I!==null&&G.isNodeMaterial&&I.setObject(b,G),b.onBeforeRender(L,N,X,H,G,_e),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(L,N,X,H,b,_e),G.transparent===!0&&G.side===Bn&&G.forceSinglePass===!1?(G.side=un,G.needsUpdate=!0,L.renderBufferDirect(X,N,H,G,b,_e),G.side=$i,G.needsUpdate=!0,L.renderBufferDirect(X,N,H,G,b,_e),G.side=Bn):L.renderBufferDirect(X,N,H,G,b,_e),b.onAfterRender(L,N,X,H,G,_e)}function Sr(b,N,X){N.isScene!==!0&&(N=ln);const H=W.get(b),G=A.state.lights,_e=A.state.shadowsArray,Me=G.state.version,ve=ue.getParameters(b,G.state,_e,N,X,A.state.lightProbeGridArray),Te=ue.getProgramCacheKey(ve);let Le=H.programs;H.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?N.environment:null,H.fog=N.fog;const Ze=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;H.envMap=le.get(b.envMap||H.environment,Ze),H.envMapRotation=H.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Le===void 0&&(b.addEventListener("dispose",In),Le=new Map,H.programs=Le);let nt=Le.get(Te);if(nt!==void 0){if(H.currentProgram===nt&&H.lightsStateVersion===Me)return Sc(b,ve),nt}else ve.uniforms=ue.getUniforms(b),I!==null&&b.isNodeMaterial&&I.build(b,X,ve),b.onBeforeCompile(ve,L),nt=ue.acquireProgram(ve,Te),Le.set(Te,nt),H.uniforms=ve.uniforms;const Ae=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ae.clippingPlanes=Ne.uniform),Sc(b,ve),H.needsLights=Ph(b),H.lightsStateVersion=Me,H.needsLights&&(Ae.ambientLightColor.value=G.state.ambient,Ae.lightProbe.value=G.state.probe,Ae.sunLights.value=G.state.sun,Ae.sunLightShadows.value=G.state.sunShadow,Ae.directionalLights.value=G.state.directional,Ae.directionalLightShadows.value=G.state.directionalShadow,Ae.spotLights.value=G.state.spot,Ae.spotLightShadows.value=G.state.spotShadow,Ae.rectAreaLights.value=G.state.rectArea,Ae.ltc_1.value=G.state.rectAreaLTC1,Ae.ltc_2.value=G.state.rectAreaLTC2,Ae.pointLights.value=G.state.point,Ae.pointLightShadows.value=G.state.pointShadow,Ae.hemisphereLights.value=G.state.hemi,Ae.sunShadowMatrix.value=G.state.sunShadowMatrix,Ae.sunShadowCascade.value=G.state.sunShadowCascade,Ae.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ae.spotLightMatrix.value=G.state.spotLightMatrix,Ae.spotLightMap.value=G.state.spotLightMap,Ae.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=A.state.lightProbeGridArray.length>0,H.currentProgram=nt,H.uniformsList=null,nt}function xc(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=os.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function Sc(b,N){const X=W.get(b);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function Rh(b,N){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;x.setFromMatrixPosition(N.matrixWorld);for(let X=0,H=b.length;X<H;X++){const G=b[X];if(G.texture!==null&&G.boundingBox.containsPoint(x))return G}return null}function Ch(b,N,X,H,G){N.isScene!==!0&&(N=ln),Z.resetTextureUnits();const _e=N.fog,Me=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?N.environment:null,ve=te===null?L.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:st.workingColorSpace,Te=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Le=le.get(H.envMap||Me,Te),Ze=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,nt=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ae=!!X.morphAttributes.position,ft=!!X.morphAttributes.normal,It=!!X.morphAttributes.color;let Et=Gn;H.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Et=L.toneMapping);const _t=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Xt=_t!==void 0?_t.length:0,xe=W.get(H),tn=A.state.lights;if(ct===!0&&(xt===!0||b!==Q)){const Mt=b===Q&&H.id===q;Ne.setState(H,b,Mt)}let lt=!1;H.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==tn.state.version||xe.outputColorSpace!==ve||G.isBatchedMesh&&xe.batching===!1||!G.isBatchedMesh&&xe.batching===!0||G.isBatchedMesh&&xe.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&xe.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&xe.instancing===!1||!G.isInstancedMesh&&xe.instancing===!0||G.isSkinnedMesh&&xe.skinning===!1||!G.isSkinnedMesh&&xe.skinning===!0||G.isInstancedMesh&&xe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&xe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&xe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&xe.instancingMorph===!1&&G.morphTexture!==null||xe.envMap!==Le||H.fog===!0&&xe.fog!==_e||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Ne.numPlanes||xe.numIntersection!==Ne.numIntersection)||xe.vertexAlphas!==Ze||xe.vertexTangents!==nt||xe.morphTargets!==Ae||xe.morphNormals!==ft||xe.morphColors!==It||xe.toneMapping!==Et||xe.morphTargetsCount!==Xt||!!xe.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(lt=!0):(lt=!0,xe.__version=H.version);let _n=xe.currentProgram;lt===!0&&(_n=Sr(H,N,G),I&&H.isNodeMaterial&&I.onUpdateProgram(H,_n,xe));let Dn=!1,oi=!1,Yi=!1;const gt=_n.getUniforms(),Lt=xe.uniforms;if(v.useProgram(_n.program)&&(Dn=!0,oi=!0,Yi=!0),H.id!==q&&(q=H.id,oi=!0),xe.needsLights){const Mt=Rh(A.state.lightProbeGridArray,G);xe.lightProbeGrid!==Mt&&(xe.lightProbeGrid=Mt,oi=!0)}if(Dn||Q!==b){v.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),gt.setValue(F,"projectionMatrix",b.projectionMatrix),gt.setValue(F,"viewMatrix",b.matrixWorldInverse);const ci=gt.map.cameraPosition;ci!==void 0&&ci.setValue(F,At.setFromMatrixPosition(b.matrixWorld)),w.logarithmicDepthBuffer&&gt.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&gt.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),Q!==b&&(Q=b,oi=!0,Yi=!0)}if(xe.needsLights&&(tn.state.sunShadowMap.length>0&&gt.setValue(F,"sunShadowMap",tn.state.sunShadowMap,Z),tn.state.directionalShadowMap.length>0&&gt.setValue(F,"directionalShadowMap",tn.state.directionalShadowMap,Z),tn.state.spotShadowMap.length>0&&gt.setValue(F,"spotShadowMap",tn.state.spotShadowMap,Z),tn.state.pointShadowMap.length>0&&gt.setValue(F,"pointShadowMap",tn.state.pointShadowMap,Z)),G.isSkinnedMesh){gt.setOptional(F,G,"bindMatrix"),gt.setOptional(F,G,"bindMatrixInverse");const Mt=G.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),gt.setValue(F,"boneTexture",Mt.boneTexture,Z))}G.isBatchedMesh&&(gt.setOptional(F,G,"batchingTexture"),gt.setValue(F,"batchingTexture",G._matricesTexture,Z),gt.setOptional(F,G,"batchingIdTexture"),gt.setValue(F,"batchingIdTexture",G._indirectTexture,Z),gt.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&gt.setValue(F,"batchingColorTexture",G._colorsTexture,Z));const li=X.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&k.update(G,X,_n),(oi||xe.receiveShadow!==G.receiveShadow)&&(xe.receiveShadow=G.receiveShadow,gt.setValue(F,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&N.environment!==null&&(Lt.envMapIntensity.value=N.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=s_()),oi){if(gt.setValue(F,"toneMappingExposure",L.toneMappingExposure),xe.needsLights&&Lh(Lt,Yi),_e&&H.fog===!0&&De.refreshFogUniforms(Lt,_e),De.refreshMaterialUniforms(Lt,H,ne,K,A.state.transmissionRenderTarget[b.id]),xe.needsLights&&xe.lightProbeGrid){const Mt=xe.lightProbeGrid;Lt.probesSH.value=Mt.texture,Lt.probesMin.value.copy(Mt.boundingBox.min),Lt.probesMax.value.copy(Mt.boundingBox.max),Lt.probesResolution.value.copy(Mt.resolution)}os.upload(F,xc(xe),Lt,Z)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(os.upload(F,xc(xe),Lt,Z),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&gt.setValue(F,"center",G.center),gt.setValue(F,"modelViewMatrix",G.modelViewMatrix),gt.setValue(F,"normalMatrix",G.normalMatrix),gt.setValue(F,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){const Mt=H.uniformsGroups;for(let ci=0,Zi=Mt.length;ci<Zi;ci++){const Ec=Mt[ci];re.update(Ec,_n),re.bind(Ec,_n)}}return _n}function Lh(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.sunLights.needsUpdate=N,b.sunLightShadows.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Ph(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(b,N,X){const H=W.get(b);H.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),W.get(b.texture).__webglTexture=N,W.get(b.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,N){const X=W.get(b);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,X=0){te=b,Y=N,V=X;let H=null,G=!1,_e=!1;if(b){const ve=W.get(b);if(ve.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(F.FRAMEBUFFER,ve.__webglFramebuffer),ie.copy(b.viewport),Re.copy(b.scissor),se=b.scissorTest,v.viewport(ie),v.scissor(Re),v.setScissorTest(se),q=-1;return}else if(ve.__webglFramebuffer===void 0)Z.setupRenderTarget(b);else if(ve.__hasExternalTextures)Z.rebindTextures(b,W.get(b.texture).__webglTexture,W.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ze=b.depthTexture;if(ve.__boundDepthTexture!==Ze){if(Ze!==null&&W.has(Ze)&&(b.width!==Ze.image.width||b.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(b)}}const Te=b.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(_e=!0);const Le=W.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Le[N])?H=Le[N][X]:H=Le[N],G=!0):b.samples>0&&Z.useMultisampledRTT(b)===!1?H=W.get(b).__webglMultisampledFramebuffer:Array.isArray(Le)?H=Le[X]:H=Le,ie.copy(b.viewport),Re.copy(b.scissor),se=b.scissorTest}else ie.copy(Se).multiplyScalar(ne).floor(),Re.copy(et).multiplyScalar(ne).floor(),se=Ut;if(X!==0&&(H=O),v.bindFramebuffer(F.FRAMEBUFFER,H)&&v.drawBuffers(b,H),v.viewport(ie),v.scissor(Re),v.setScissorTest(se),G){const ve=W.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,ve.__webglTexture,X)}else if(_e){const ve=N;for(let Te=0;Te<b.textures.length;Te++){const Le=W.get(b.textures[Te]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Te,Le.__webglTexture,X,ve)}}else if(b!==null&&X!==0){const ve=W.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ve.__webglTexture,X)}q=-1};function Mc(b){const N=W.get(b);return(N.__readFormat!==b.format||N.__readType!==b.type)&&(N.__readFormat=b.format,N.__readType=b.type,N.__formatReadable=w.textureFormatReadable(b.format),N.__typeReadable=w.textureTypeReadable(b.type)),N}this.readRenderTargetPixels=function(b,N,X,H,G,_e,Me,ve=0){if(!(b&&b.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){v.bindFramebuffer(F.FRAMEBUFFER,Te);try{const Le=b.textures[ve],Ze=Le.format,nt=Le.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ve);const Ae=Mc(Le);if(Ae.__formatReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-H&&X>=0&&X<=b.height-G&&F.readPixels(N,X,H,G,pe.convert(Ze),pe.convert(nt),_e)}finally{const Le=te!==null?W.get(te).__webglFramebuffer:null;v.bindFramebuffer(F.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(b,N,X,H,G,_e,Me,ve=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te)if(N>=0&&N<=b.width-H&&X>=0&&X<=b.height-G){v.bindFramebuffer(F.FRAMEBUFFER,Te);const Le=b.textures[ve],Ze=Le.format,nt=Le.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ve);const Ae=Mc(Le);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ft=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ft),F.bufferData(F.PIXEL_PACK_BUFFER,_e.byteLength,F.STREAM_READ),F.readPixels(N,X,H,G,pe.convert(Ze),pe.convert(nt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const It=te!==null?W.get(te).__webglFramebuffer:null;v.bindFramebuffer(F.FRAMEBUFFER,It);const Et=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await _f(F,Et,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ft),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,_e),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ft),F.deleteSync(Et),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,N=null,X=0){const H=Math.pow(2,-X),G=Math.floor(b.image.width*H),_e=Math.floor(b.image.height*H),Me=N!==null?N.x:0,ve=N!==null?N.y:0;Z.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,Me,ve,G,_e),v.unbindTexture()},this.copyTextureToTexture=function(b,N,X=null,H=null,G=0,_e=0){let Me,ve,Te,Le,Ze,nt,Ae,ft,It;const Et=b.isCompressedTexture?b.mipmaps[_e]:b.image;if(X!==null)Me=X.max.x-X.min.x,ve=X.max.y-X.min.y,Te=X.isBox3?X.max.z-X.min.z:1,Le=X.min.x,Ze=X.min.y,nt=X.isBox3?X.min.z:0;else{const Lt=Math.pow(2,-G);Me=Math.floor(Et.width*Lt),ve=Math.floor(Et.height*Lt),b.isDataArrayTexture?Te=Et.depth:b.isData3DTexture?Te=Math.floor(Et.depth*Lt):Te=1,Le=0,Ze=0,nt=0}H!==null?(Ae=H.x,ft=H.y,It=H.z):(Ae=0,ft=0,It=0);const _t=pe.convert(N.format),Xt=pe.convert(N.type);let xe;N.isData3DTexture?(Z.setTexture3D(N,0),xe=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Z.setTexture2DArray(N,0),xe=F.TEXTURE_2D_ARRAY):(Z.setTexture2D(N,0),xe=F.TEXTURE_2D),v.activeTexture(F.TEXTURE0),v.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),v.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),v.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);const tn=v.getParameter(F.UNPACK_ROW_LENGTH),lt=v.getParameter(F.UNPACK_IMAGE_HEIGHT),_n=v.getParameter(F.UNPACK_SKIP_PIXELS),Dn=v.getParameter(F.UNPACK_SKIP_ROWS),oi=v.getParameter(F.UNPACK_SKIP_IMAGES);v.pixelStorei(F.UNPACK_ROW_LENGTH,Et.width),v.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Et.height),v.pixelStorei(F.UNPACK_SKIP_PIXELS,Le),v.pixelStorei(F.UNPACK_SKIP_ROWS,Ze),v.pixelStorei(F.UNPACK_SKIP_IMAGES,nt);const Yi=b.isDataArrayTexture||b.isData3DTexture,gt=N.isDataArrayTexture||N.isData3DTexture;if(b.isDepthTexture){const Lt=W.get(b),li=W.get(N),Mt=W.get(Lt.__renderTarget),ci=W.get(li.__renderTarget);v.bindFramebuffer(F.READ_FRAMEBUFFER,Mt.__webglFramebuffer),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let Zi=0;Zi<Te;Zi++)Yi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(b).__webglTexture,G,nt+Zi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(N).__webglTexture,_e,It+Zi)),F.blitFramebuffer(Le,Ze,Me,ve,Ae,ft,Me,ve,F.DEPTH_BUFFER_BIT,F.NEAREST);v.bindFramebuffer(F.READ_FRAMEBUFFER,null),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||W.has(b)){const Lt=W.get(b),li=W.get(N);v.bindFramebuffer(F.READ_FRAMEBUFFER,M),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,U);for(let Mt=0;Mt<Te;Mt++)Yi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Lt.__webglTexture,G,nt+Mt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Lt.__webglTexture,G),gt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,li.__webglTexture,_e,It+Mt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,li.__webglTexture,_e),G!==0?F.blitFramebuffer(Le,Ze,Me,ve,Ae,ft,Me,ve,F.COLOR_BUFFER_BIT,F.NEAREST):gt?F.copyTexSubImage3D(xe,_e,Ae,ft,It+Mt,Le,Ze,Me,ve):F.copyTexSubImage2D(xe,_e,Ae,ft,Le,Ze,Me,ve);v.bindFramebuffer(F.READ_FRAMEBUFFER,null),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else gt?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(xe,_e,Ae,ft,It,Me,ve,Te,_t,Xt,Et.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(xe,_e,Ae,ft,It,Me,ve,Te,_t,Et.data):F.texSubImage3D(xe,_e,Ae,ft,It,Me,ve,Te,_t,Xt,Et):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,_e,Ae,ft,Me,ve,_t,Xt,Et.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,_e,Ae,ft,Et.width,Et.height,_t,Et.data):F.texSubImage2D(F.TEXTURE_2D,_e,Ae,ft,Me,ve,_t,Xt,Et);v.pixelStorei(F.UNPACK_ROW_LENGTH,tn),v.pixelStorei(F.UNPACK_IMAGE_HEIGHT,lt),v.pixelStorei(F.UNPACK_SKIP_PIXELS,_n),v.pixelStorei(F.UNPACK_SKIP_ROWS,Dn),v.pixelStorei(F.UNPACK_SKIP_IMAGES,oi),_e===0&&N.generateMipmaps&&F.generateMipmap(xe),v.unbindTexture()},this.initRenderTarget=function(b){W.get(b).__webglFramebuffer===void 0&&Z.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Z.setTextureCube(b,0):b.isData3DTexture?Z.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Z.setTexture2DArray(b,0):Z.setTexture2D(b,0),v.unbindTexture()},this.resetState=function(){Y=0,V=0,te=null,v.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),n.unpackColorSpace=st._getUnpackColorSpace()}}const vi={strength:"STR 力量",dexterity:"DEX 敏捷",constitution:"CON 體質",intelligence:"INT 智力",wisdom:"WIS 感知",charisma:"CHA 魅力"},Nd={strength:"力量。近戰攻擊、攀爬、破壞與負重。",dexterity:"敏捷。遠程攻擊、閃避、追擊與脫身。",constitution:"體質。決定最大肉體 HP，並抵抗侵蝕與毒素。",intelligence:"智力。推理、資訊處理、調查與滅證。",wisdom:"感知。觀察、直覺、發現謊言與伏擊。",charisma:"魅力。交涉、隱藏、操縱與氣場。"},Ou=["strength","dexterity","constitution","intelligence","wisdom","charisma"],l_=[{id:"blade",name:"斷罪之刃",kana:"ダンザイノハ",rarity:"Ⅲ",type:"攻擊",tagline:"把侵蝕鍛造成一把不該存在的刀。",description:"你從脊椎抽出黑色的薄刃。它切開的不是肉體，而是「存在」本身。每次揮刀，刀刃都會多記住你一點。",passive:"體魄 +2。",active:"戰鬥與狩獵檢定 +3；可將一次攻擊化為必殺。",cost:8,statBonus:{strength:2},combat:3,tags:["combat","blade"]},{id:"flash",name:"瞬絕",kana:"シュンゼツ",rarity:"Ⅱ",type:"速度",tagline:"在世界反應過來之前，你已經不在原地。",description:"零點三秒的空白。你穿過雨、子彈與監視器，只留下一個正在崩塌的殘影。",passive:"敏捷 +2。",active:"戰鬥或逃離檢定 +2；遭遇神田時可強制脫身一次。",cost:7,statBonus:{dexterity:2},combat:1,tags:["escape","combat"]},{id:"mindeye",name:"讀心之瞳",kana:"ドクシンノヒトミ",rarity:"Ⅱ",type:"精神",tagline:"每個人都在心裡小聲說出秘密。",description:"你能看見情緒的顏色。恐懼是鏽紅，算計是墨綠，而神田隼人是沒有顏色的。",passive:"感知 +2，調查所得情報 +1。",active:"閱讀目標表層思維，解鎖部分事件的真相。",cost:6,statBonus:{wisdom:2},combat:0,tags:["mind","intel"]},{id:"ash",name:"灰燼領域",kana:"カイジンリョウイキ",rarity:"Ⅲ",type:"異形",tagline:"半徑三十公尺內，一切歸於灰。",description:"你的影子張開，像一頁被火燒穿的紙。街道、車子、人，都從邊緣開始剝落。",passive:"知性 +1。顯現獵殺與破壞額外 +1 刻印。",active:"大範圍殲滅。警戒指數大幅上升。",cost:12,statBonus:{intelligence:1},combat:2,tags:["destroy","area"]},{id:"regen",name:"不死再生",kana:"フシサイセイ",rarity:"Ⅱ",type:"異形",tagline:"骨頭會自己找到回家的路。",description:"你死過一次。心臟停擺的十七秒裡，你聽見有人在很遠的地方叫你的名字，於是你決定爬回來。",passive:"體魄 +1。肉體歸零時自動以 3 點復活一次。",active:"立即回復 4 點肉體。",cost:10,statBonus:{strength:1},combat:0,tags:["heal","revive"]},{id:"siren",name:"魅惑之聲",kana:"ミワクノコエ",rarity:"Ⅱ",type:"精神",tagline:"你說的每一句話，都會變成對方最想聽的話。",description:"聲音先於意義抵達。你能讓盤問變成閒聊，讓追捕變成護送，讓恨你的人暫時忘記理由。",passive:"魅力 +2，交涉類檢定 +1。",active:"壓低警戒指數、轉移懷疑，或讓敵人放下武器。",cost:6,statBonus:{charisma:2},combat:0,tags:["social","heat"]},{id:"thunder",name:"雷牙",kana:"ライガ",rarity:"Ⅱ",type:"攻擊",tagline:"雨還沒落下，閃電已經穿過你。",description:"你的神經變成導體。指尖彈出的白色電弧能在混凝土上留下焦黑的樹根。",passive:"敏捷 +1，戰鬥檢定 +2。",active:"遠距離擊穿目標，或癱瘓一整條街的電眼。",cost:8,statBonus:{dexterity:1},combat:2,tags:["combat","tech"]},{id:"memory",name:"記憶篡改",kana:"キオクテンカイ",rarity:"Ⅲ",type:"精神",tagline:"證據不在現場，在別人的腦裡。",description:"你能剪掉目擊者的一分鐘，也能把一段不存在的記憶縫回去。用越多次，你越不確定哪些回憶是自己的。",passive:"知性 +2，滅證與調查檢定 +2。",active:"抹除監視紀錄、目擊者記憶與現場痕跡。",cost:6,statBonus:{intelligence:2},combat:0,tags:["erase","intel"]},{id:"beast",name:"獸化",kana:"ジュウカ",rarity:"Ⅲ",type:"異形",tagline:"你不再需要理由，只需要氣味。",description:"皮膚裂開，牙齒變長，世界突然變得簡單：獵物、威脅、同類。最可怕的是，你喜歡這種簡單。",passive:"體魄 +3。所有警戒指數增加 15%。",active:"戰鬥與狩獵檢定 +4；結束後侵蝕額外 +3。",cost:9,statBonus:{strength:3},combat:4,tags:["combat","beast"]},{id:"limit",name:"界限突破",kana:"カイゲントッパ",rarity:"Ⅲ",type:"支援",tagline:"把「不可能」當成一個可以談判的數字。",description:"你能短暫改寫自己的極限。心跳、肌力、思考速度全部超頻。代價是，突破之後你會忘記自己原本的樣子。",passive:"意志 +2。所有抵抗侵蝕檢定 +2。",active:"一次檢定 +5；或從必敗局面中強行拖住對手。",cost:15,statBonus:{constitution:2},combat:2,tags:["fate","constitution"]},{id:"shell",name:"空蟬",kana:"ウツセミ",rarity:"Ⅱ",type:"速度",tagline:"你留下的不是殘影，是一個替你死的自己。",description:"一具空殼從你身上剝落，帶著你的體溫與恐懼逃跑。真正的你只能站在原地，看它被殺死。",passive:"敏捷 +1。遭遇神田時可強制脫身一次。",active:"製造完美的替身，轉移追捕與一次致命傷。",cost:8,statBonus:{dexterity:1},combat:0,tags:["escape","decoy"]},{id:"resonance",name:"共鳴",kana:"キョウメイ",rarity:"Ⅰ",type:"支援",tagline:"有人還記得你原本的聲音。",description:"你的顯現不是武器，是一條看不見的線。線的另一端連著你仍在乎的人；只要他們還在，你就能被拉回來。",passive:"意志 +1。聯絡羈絆時額外降低 4 點侵蝕。",active:"透過羈絆穩定精神，把一次失控推回去。",cost:4,statBonus:{constitution:1},combat:0,tags:["bond","calm"]}],c_={flash:{acBonus:1},mindeye:{acBonus:1},ash:{acBonus:1},regen:{acBonus:1},thunder:{acBonus:1},memory:{acBonus:1},beast:{acStat:"strength",acBonus:2},limit:{acBonus:1},shell:{acBonus:2}},Fu=l_.map(t=>({...t,kind:"manifest",...c_[t.id]??{}})),Tl=[{id:"core_array",name:"演算迴廊",kana:"エンザンカイロウ",rarity:"Ⅳ",type:"精神",kind:"core",tagline:"把世界拆成可以計算的變數，再把自己算進去。",description:"你開始看得見子彈的路徑、對方的重心、自己下一次心跳的間隔。它們全都變成可計算的變數。用得越久，你越難確定哪些念頭原本屬於你。",passive:"知性 +2。AC 改用知性計算。",active:"以思考覆寫肉體：戰鬥或調查檢定 +2。",cost:9,statBonus:{intelligence:2},combat:2,tags:["core","mind","intel","ac"],acStat:"intelligence",acBonus:1},{id:"core_revive",name:"殘響回生",kana:"ザンキョウカイセイ",rarity:"Ⅳ",type:"異形",kind:"core",tagline:"死不是終點，只是一次比較長的停頓。",description:"你的細胞記得自己死過。骨頭斷了會自己找路，心臟停了會重新點火。每次回來，都會少一點東西——有時是記憶，有時是名字。",passive:"體魄 +1。肉體歸零時自動以 3 點復活一次；AC +1。",active:"立即回復 4 點肉體。",cost:10,statBonus:{strength:1},combat:0,tags:["core","heal","revive"],acBonus:1},{id:"core_ward",name:"境界編織",kana:"キョウカイヘンショク",rarity:"Ⅳ",type:"支援",kind:"core",tagline:"把「不想失去」變成一堵看不見的牆。",description:"你無法阻止世界傷害你，但可以讓某些東西暫時不被世界碰到。結界越強，你越能聽見牆外那些正在死去的聲音。",passive:"意志 +2。AC +2；聯絡羈絆時額外降低侵蝕。",active:"張開結界，替羈絆者或平民承受一次攻擊。",cost:7,statBonus:{constitution:2},combat:0,tags:["core","bond","ward","calm"],acBonus:2},{id:"core_market",name:"暗盤交易",kana:"アンバイコウエキ",rarity:"Ⅳ",type:"支援",kind:"core",tagline:"只要價格正確，連裏八咫的名單都能買到。",description:"你天生知道誰手裡有東西、誰急著脫手、誰的謊話值多少錢。這不是超能力，是另一種更古老的顯現：供需。",passive:"魅力 +1、知性 +1。調查與交易檢定 +1。",active:"在事件中取得裝備、情報或降低警戒指數。",cost:6,statBonus:{charisma:1,intelligence:1},combat:0,tags:["core","social","heat","intel"]},{id:"core_multi",name:"兵裝並列",kana:"ヘイソウヘイレツ",rarity:"Ⅳ",type:"攻擊",kind:"core",tagline:"一隻手不夠，那就讓每一根骨頭都握住武器。",description:"你能同時操作多件武器，把它們的軌跡疊成一條不合理的攻擊線。顯現會在你身上長出額外的關節；它們不痛，只是睡著時會自己動。",passive:"體魄 +1、敏捷 +1。戰鬥檢定 +2，AC +1。",active:"合併兩件武器的攻擊，無視一次防禦。",cost:9,statBonus:{strength:1,dexterity:1},combat:3,tags:["core","combat","ac"],acBonus:1},{id:"core_variable",name:"形態改寫",kana:"ケイタイカイシャ",rarity:"Ⅳ",type:"攻擊",kind:"core",tagline:"你的武器沒有固定形狀，只有固定目的。",description:"刀、槍、盾、鑰匙——你的顯現會隨著需要改變外形。每次變形都會帶走一點記憶，所以你開始把重要的事寫在皮膚上。",passive:"敏捷 +1。戰鬥檢定 +2；可切換攻擊或防禦形態。",active:"將一次戰鬥檢定改為遠程或近戰中最有利的形式。",cost:8,statBonus:{dexterity:1},combat:2,tags:["core","combat","ac"],acBonus:1},{id:"core_combat",name:"戰術矩陣",kana:"センジュツギョジン",rarity:"Ⅳ",type:"速度",kind:"core",tagline:"你像一段被寫好的戰鬥程式，正確得令人害怕。",description:"身體會自動執行最優解。閃避、反擊、換位、補刀，全都在意識下達命令之前完成。問題是，程式不會告訴你什麼時候該停。",passive:"敏捷 +1。戰鬥檢定 +3，AC +2。",active:"進入戰鬥模式：本小時的狩獵與逃避檢定 +2。",cost:8,statBonus:{dexterity:1},combat:3,tags:["core","combat","ac"],acBonus:2},{id:"core_focus",name:"零點凝縮",kana:"レイテンギョウシュク",rarity:"Ⅳ",type:"精神",kind:"core",tagline:"世界很吵。你只需要留下一個聲音。",description:"你能把所有注意力壓縮成一個點。那個點以外的東西會暫時消失：雨聲、痛覺、別人的名字。回神時，你會發現自己錯過了很多。",passive:"意志 +1、感知 +1。抵抗侵蝕檢定 +2。",active:"重擲一次剛失敗的檢定；每次使用侵蝕 +5。",cost:6,statBonus:{constitution:1,wisdom:1},combat:1,tags:["core","constitution","fate"],acBonus:1}],d_=["鏽蝕的","第七相的","無名的","雨蝕的","未登錄的","灰燼的","零時的","白夜的","逆流的","霧中的","斷裂的","殘月的"],u_=["心臟","迴路","殘響","器官","禱詞","火種","裂縫","紀錄","王座","雨聲","脈搏","鏡像"],_s=[{value:0,name:"常速",jp:"MUNDANE",fumble:0,note:"普通人的時間。神田也停在這裡。"},{value:1,name:"幽步",jp:"GHOST STEP",fumble:1,note:"比常人快半步。自然 1 失敗。"},{value:2,name:"影走",jp:"SHADOW RUN",fumble:2,note:"殘影開始追上本體。1–2 失敗。"},{value:3,name:"思速",jp:"NEURAL",fumble:3,note:"思考與動作同時完成。1–3 失敗。"},{value:4,name:"音速",jp:"SONIC",fumble:4,note:"空氣來不及讓開。1–4 失敗。"},{value:5,name:"彈速",jp:"BULLET",fumble:5,note:"子彈看起來像靜止。1–5 失敗。"},{value:6,name:"光速",jp:"LIGHT",fumble:6,note:"影子被留在原地。1–6 失敗。"},{value:7,name:"超光速",jp:"FTL",fumble:7,note:"只有特殊顯現能抵達。1–7 失敗。"}],h_=[{id:"street",name:"日常服",base:10,dexCap:5,description:"沒有防護，只有一點體面。",tone:"none"},{id:"jacket",name:"防風外套",base:11,dexCap:5,description:"城市裡最普通的裝備。至少能擋住一次刀背。",tone:"light"},{id:"trench",name:"強化風衣",base:12,dexCap:4,description:"內襯編入抗撕裂纖維。低調，適合不想被看見的人。",tone:"light"},{id:"vest",name:"防彈背心",base:13,dexCap:2,description:"裏八咫補給品。擋得住手槍，擋不住顯現。",tone:"medium"},{id:"crystal",name:"結晶外殼",base:14,dexCap:1,description:"從死去的超越者身上剝下的結晶。冷得像另一個人。",tone:"medium"},{id:"exo",name:"機動裝甲",base:15,dexCap:0,description:"軍規外骨骼。神田的特製校服內襯就是這種東西。",tone:"heavy"}],lr=new Map(h_.map(t=>[t.id,t])),mr=[{id:"shinminato",name:"新湊市",kana:"しんみなと",tag:"港灣・黑市",description:"面向黑潮的貿易港。戰後靠走私與倉儲重新站起來，警察管不到碼頭深處。這裡的人習慣半夜的警笛，也習慣不多看一眼。",stat:"strength",heatMod:.9,scene:"docks",weather:"長雨",landmark:"第七號貨櫃碼頭"},{id:"kirimi",name:"霧見市",kana:"きりみ",tag:"山霧・舊城",description:"被兩座山夾住的老城。一年有三分之一的日子起霧，監視器拍不到十公尺外。居民說，霧裡還有另一座城市。",stat:"wisdom",heatMod:.85,scene:"alley",weather:"濃霧",landmark:"霧見坂商店街"},{id:"tokoyo",name:"常夜町",kana:"とこよ",tag:"不夜・直播",description:"亞洲最大的娛樂街區。霓虹燈從不熄滅，直播鏡頭比路燈還多。任何一點異常，三分鐘內就會變成熱搜。",stat:"charisma",heatMod:1.2,scene:"street",weather:"霓虹雨",landmark:"常夜中央通"},{id:"tetsuhara",name:"鐵原市",kana:"てつはら",tag:"工業・鏽蝕",description:"戰時留下的重工業帶。高爐停了，鏽蝕還在。空氣裡有金屬味，孩子們的肺裡都有細小的鐵粉。",stat:"strength",heatMod:1,scene:"docks",weather:"鐵灰陰天",landmark:"第三高爐遺址"},{id:"shirasagi",name:"白鷺市",kana:"しらさぎ",tag:"學園・監視",description:"戰後重建的模範都市。街道乾淨，志工很多，每根電線桿上都有治安攝影機。市民滿意度連續十年全國第一。",stat:"intelligence",heatMod:1.15,scene:"street",weather:"晴朗夜色",landmark:"白鷺中央廣場"},{id:"amatsuka",name:"雨塚市",kana:"あまつか",tag:"盆地・長雨",description:"一年下三百天雨的小盆地。雨聲蓋住槍聲、哭聲與顯現的低鳴。這裡的人相信，雨會把人的秘密沖到地底。",stat:"constitution",heatMod:.95,scene:"alley",weather:"連日大雨",landmark:"雨塚車站前"}],Bu=[{id:"station",name:"站前商圈",en:"STATION FRONT",tag:"人流・監視",description:"車站、便利店與監視器密度最高的地方。有人在看你，也有人在錯過你。",effect:"調查 +1 情報；警戒 +1",intel:1,marks:0,heat:1},{id:"residential",name:"舊住宅區",en:"OLD RESIDENTIAL",tag:"陰影・羈絆",description:"沒有監視器的巷弄與還亮著燈的窗。適合躲藏，也適合把不該帶回家的東西藏起來。",effect:"潛伏額外 -1 警戒；聯絡羈絆更安全",intel:0,marks:0,heat:-1},{id:"docks",name:"第七碼頭",en:"PIER SEVEN",tag:"獵場・走私",description:"貨櫃、海水與沒有登記的船。裏八咫把很多東西丟進海裡，也把很多東西從海裡撈回來。",effect:"狩獵／破壞 +1 刻印；警戒 +2",intel:0,marks:1,heat:2},{id:"market",name:"黑市橫丁",en:"BLACK MARKET",tag:"交易・情報",description:"雨棚下的攤位只收現金與祕密。沒有招牌的店，通常才是真正的店。",effect:"調查 +1 情報；警戒 +1",intel:1,marks:0,heat:1},{id:"academy",name:"學院特區",en:"ACADEMY DISTRICT",tag:"顯現・研究",description:"至高智人學院的灰色圍牆。裡面上課、實驗，也處理不聽話的實驗體。",effect:"顯現獵殺額外 +1 刻印；侵蝕 +1",intel:0,marks:1,heat:0}],$u=new Map(Bu.map(t=>[t.id,t])),f_=[{id:"ayase",trueNameKnown:!1,name:"綾瀬凍",codename:"冰棺聖母",epithet:"玻璃聖母",ability:"結晶／凍結",marks:12,rate:.55,status:"active",portrait:"ayase",note:"排名第二。冷靜、守規則，似乎在等某個人先犯錯。"},{id:"kurokawa",trueNameKnown:!1,name:"黑川巌",codename:"鐵血縛鎖",epithet:"絞肉機",ability:"肉體強化",marks:15,rate:.9,status:"active",portrait:"kurokawa",note:"殺意沒有底線。裏八咫很喜歡他，神田也是。"},{id:"shiratori",trueNameKnown:!1,name:"白鳥理世",codename:"偽神歌姬",epithet:"舞臺女王",ability:"魅惑／暗示",marks:8,rate:.5,status:"active",portrait:"shiratori",note:"從不親自弄髒手。她的刻印大多來自別人的自願。"},{id:"tetsu",trueNameKnown:!1,name:"鐵十兵衛",codename:"鏽蝕英雄",epithet:"鐵屑",ability:"金屬操作",marks:2,rate:.18,status:"active",portrait:"crown",note:"五十歲才顯現的男人。只想活著回去見孫女。"}],Wa={lie_low:{label:"潛伏",icon:"伏",desc:"躲進人群與陰影。降低警戒指數，讓傷口慢慢癒合。",risk:"警戒指數 -3／每兩小時回復 1 肉體",tone:"calm"},hunt_normal:{label:"獵殺常人",icon:"人",desc:"用刀、石頭或雙手。不碰顯現，只碰人命。",risk:"刻印 +1／警戒指數 +5",tone:"danger"},power_hunt:{label:"顯現獵殺",icon:"蝕",desc:"讓顯現替你完成工作。乾淨、迅速，代價寫在骨頭裡。",risk:"刻印 +2／警戒指數 +7／侵蝕 +顯現代價",tone:"danger"},hunt_overman:{label:"狩獵同類",icon:"獵",desc:"找出落單的超越者。這才是裏八咫真正想要的分數。",risk:"成功 +10 刻印／失敗重傷／必定侵蝕",tone:"danger"},investigate:{label:"調查",icon:"查",desc:"查線路、問人、看監視器。情報不能吃，但能救命。",risk:"情報 +1／警戒指數 +1",tone:"calm"},contact:{label:"聯絡羈絆",icon:"絆",desc:"打一通電話，見一面，確認自己還是人。",risk:"侵蝕大幅下降／監視上升，羈絆者可能被盯上",tone:"bond"},destroy:{label:"破壞",icon:"壞",desc:"讓城市記住你。裏八咫會把混亂折算成刻印。",risk:"刻印 +2／警戒指數 +9／侵蝕 +6",tone:"danger"}},Al={monster:{title:"侵蝕完遂",subtitle:"你終於不用再忍耐了",stamp:"怪物",text:`最後一根名為「人」的線，斷了。

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

撥到第四聲，就掛掉。`,tone:"dark"},caught:{title:"神田隼人",subtitle:"最強對手",stamp:"逮捕",text:`你甚至沒有看清他什麼時候動的。

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

但你還記得自己的名字。`,tone:"neutral"}},p_={text:`白髮，藍金異色瞳，黑色立領制服，金色鈕扣。

十七歲。無所屬的刑警。他是你所能遇見的最強對手；即使是史上最強的超限者，也無法在正面戰鬥中勝過他。

不是超越者。DNA 仍屬於 Homo sapiens。六項能力值全部停在人類極限：基礎 18，再以全屬性作為主屬性 +2，合計 20。體脂長期維持在 5% 到 7%，肩背與胸腔呈現極端的倒三角，關節與肌腱比常人粗厚；肺活量超過 8000cc，靜止心率每分鐘 30 次，百米能跑進九秒，硬舉超過 500 公斤。

但他仍然是人類。會疲倦，會受傷，會死。

他沒有任何特殊能力。所有判斷都來自刑警的觀察、紀錄與推理；他能十分鐘讀完整本卷宗，也能在對手抬手之前，從肌肉的微小動作推測下一步。

真正的異常，是那八把魔劍。

八把「大罪」級軌道兵器，平時停泊在低軌衛星「天刑」上。戰鬥時，他以警方權限呼叫其中一把，讓它從軌道直接落在戰場；劍體由超導金屬、動能控制與自主推進器構成，沒有任何超自然成分。戰後，魔劍會自行點火返回衛星。

他不需要把武器帶進城市。

因為武器在天空。

同一回合，他只能呼叫一把。這是裏八咫寫進權限裡的安全鎖，也是他唯一願意接受的限制。

小田川知世——他的童年好友，也是唯一讓他願意過普通生活的人——在十年前的「霧見集體失蹤」中下落不明。

裏八咫內部對他的評價只有一行字：

「不可交戰。不可接觸。不可成為他的案件。」`},m_=[...Tl,...Fu],Ea=new Map(m_.map(t=>[t.id,t])),gr=new Map(mr.map(t=>[t.id,t]));function Ta(t){return Math.floor((t-10)/2)}const To={shinminato:{sky:658702,fog:1054489,ground:790802,building:["#0e1414","#111919","#0a1010"],window:["#d7c9a9","#c94835","#4c7773"],neon:[14170154,4951945],accent:14170154,ambient:5069915,fogDensity:.018,rain:.9},kirimi:{sky:724236,fog:1711386,ground:856078,building:["#111511","#171b16","#0b0f0c"],window:["#d4c7aa","#a44632","#5b7364"],neon:[12008748,6130546],accent:12864052,ambient:5464154,fogDensity:.032,rain:.55},tokoyo:{sky:789003,fog:1577242,ground:1117457,building:["#171016","#1d121b","#100b10"],window:["#e1d3b7","#d84935","#b24b9c","#4e7f9a"],neon:[14826029,13912730,5020592],accent:14826029,ambient:5982811,fogDensity:.015,rain:1.1},tetsuhara:{sky:723721,fog:1775891,ground:1184013,building:["#15130f","#1c1913","#0e0d0a"],window:["#cdbf9d","#b34a2c","#7c6b42"],neon:[13060138,12687941],accent:13060138,ambient:6051141,fogDensity:.021,rain:.6},shirasagi:{sky:658446,fog:1317149,ground:856339,building:["#101519","#141b20","#0a0e11"],window:["#dfd3b9","#b44d3d","#4d7d9c"],neon:[13582640,6000552],accent:13582640,ambient:5201768,fogDensity:.016,rain:.7},amatsuka:{sky:723723,fog:1513237,ground:921100,building:["#121210","#171714","#0b0b0a"],window:["#d6c8a9","#b94a33","#54716d"],neon:[13386288,5340279],accent:13386288,ambient:5264721,fogDensity:.026,rain:1.4}},g_={shinminato:"docks",kirimi:"alley",tokoyo:"street",tetsuhara:"docks",shirasagi:"street",amatsuka:"alley"};function v_(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}function __(t){let e=t>>>0;return()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function Qr(t,e){const n=document.createElement("canvas");n.width=128,n.height=256;const i=n.getContext("2d");i.fillStyle=t.building[Math.floor(e()*t.building.length)],i.fillRect(0,0,128,256),i.fillStyle="rgba(0,0,0,0.32)";for(let r=0;r<256;r+=18)i.fillRect(0,r,128,2);for(let r=14;r<246;r+=22)for(let s=10;s<118;s+=18)if(e()<.56){const o=t.window[Math.floor(e()*t.window.length)];i.globalAlpha=.3+e()*.7,i.fillStyle=o,i.fillRect(s,r,8,10)}i.globalAlpha=.5,i.fillStyle=t.window[1],i.fillRect(6,0,2,256),i.globalAlpha=1;const a=new ql(n);return a.colorSpace=Kt,a.anisotropy=2,a}function b_(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d"),n=e.createRadialGradient(64,64,2,64,64,62);n.addColorStop(0,"rgba(233,224,207,0.95)"),n.addColorStop(.7,"rgba(233,224,207,0.75)"),n.addColorStop(1,"rgba(233,224,207,0)"),e.fillStyle=n,e.fillRect(0,0,128,128);const i=new ql(t);return i.colorSpace=Kt,i}class y_{constructor(){ze(this,"renderer");ze(this,"scene",new Nf);ze(this,"camera");ze(this,"clock",new cp);ze(this,"group",new ga);ze(this,"rain",null);ze(this,"rainPositions",null);ze(this,"rainSpeed",.04);ze(this,"container",null);ze(this,"cityKey","");ze(this,"encroachment",0);ze(this,"reduced",!1);ze(this,"raf",0);ze(this,"redLight",null);ze(this,"textureCache",[]);ze(this,"disposed",!1);ze(this,"pointer",{x:0,y:0});ze(this,"mapTarget",new B(0,0,-18));ze(this,"mapDistance",92);ze(this,"mapAzimuth",0);ze(this,"mapPolar",Math.PI/3.05);ze(this,"dragging",!1);ze(this,"dragButton",0);ze(this,"dragX",0);ze(this,"dragY",0);ze(this,"dragTravel",0);ze(this,"palette",To.shinminato);ze(this,"districtNodes",new Map);ze(this,"pinLayer",null);ze(this,"pinEls",new Map);ze(this,"currentDistrict","station");ze(this,"districtSelect",null);ze(this,"raycaster",new lp);ze(this,"onPointer",e=>{if(!this.dragging)return;const n=e.clientX-this.dragX,i=e.clientY-this.dragY;if(this.dragX=e.clientX,this.dragY=e.clientY,this.dragTravel+=Math.abs(n)+Math.abs(i),this.dragButton===2||e.shiftKey)this.mapAzimuth-=n*.005;else{const a=this.mapDistance*.0022;this.mapTarget.x=Math.max(-34,Math.min(34,this.mapTarget.x-n*a)),this.mapTarget.z=Math.max(-52,Math.min(16,this.mapTarget.z-i*a))}this.updateMapCamera(),e.preventDefault()});ze(this,"onCanvasDown",e=>{e.button!==0&&e.button!==2||(this.dragging=!0,this.dragButton=e.button,this.dragX=e.clientX,this.dragY=e.clientY,this.dragTravel=0,this.renderer.domElement.setPointerCapture(e.pointerId),this.renderer.domElement.style.cursor="grabbing",e.preventDefault())});ze(this,"onCanvasUp",e=>{this.dragging=!1,this.renderer.domElement.style.cursor="grab",this.dragTravel<=6&&this.onCanvasClick(e)});ze(this,"onCanvasWheel",e=>{this.mapDistance=Math.max(22,Math.min(72,this.mapDistance+e.deltaY*.035)),this.updateMapCamera(),e.preventDefault()});ze(this,"onCanvasClick",e=>{if(!this.districtSelect||this.dragTravel>6)return;const n=this.renderer.domElement.getBoundingClientRect(),i=new Xe((e.clientX-n.left)/Math.max(1,n.width)*2-1,-((e.clientY-n.top)/Math.max(1,n.height))*2+1);this.raycaster.setFromCamera(i,this.camera);const r=this.raycaster.intersectObjects([...this.districtNodes.values()].map(s=>s.target),!1)[0]?.object?.userData?.districtId;r&&this.districtSelect(r)});ze(this,"animate",()=>{if(this.disposed||(this.raf=requestAnimationFrame(this.animate),!this.container||!this.renderer.domElement.isConnected))return;const e=Math.min(.05,this.clock.getDelta()),n=this.clock.elapsedTime;if(this.dragging||this.camera.lookAt(this.mapTarget),this.rain&&this.rainPositions){const i=this.rainPositions;for(let a=0;a<i.length;a+=3)i[a+1]-=this.rainSpeed*(this.reduced?0:60)*e,i[a+1]<-.5&&(i[a+1]=34,i[a]=(Math.random()-.5)*70);this.rain.geometry.getAttribute("position").needsUpdate=!0}this.redLight&&(this.redLight.intensity=2.2+Math.min(this.encroachment,140)/32+(this.encroachment>=100?Math.sin(n*9)*.6:0)),this.updatePinPositions(),this.renderer.render(this.scene,this.camera)});this.renderer=new o_({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.outputColorSpace=Kt,this.renderer.toneMapping=Nl,this.renderer.toneMappingExposure=1.2,this.camera=new gn(42,1,.1,300),this.updateMapCamera(),this.scene.add(this.group),this.renderer.domElement.addEventListener("pointerdown",this.onCanvasDown,{passive:!1}),this.renderer.domElement.addEventListener("pointermove",this.onPointer,{passive:!1}),this.renderer.domElement.addEventListener("pointerup",this.onCanvasUp,{passive:!0}),this.renderer.domElement.addEventListener("pointercancel",this.onCanvasUp,{passive:!0}),this.renderer.domElement.addEventListener("wheel",this.onCanvasWheel,{passive:!1}),this.renderer.domElement.addEventListener("contextmenu",e=>e.preventDefault()),this.animate()}updateMapCamera(){const e=Math.cos(this.mapPolar)*this.mapDistance;this.camera.position.set(this.mapTarget.x+Math.sin(this.mapAzimuth)*e,Math.sin(this.mapPolar)*this.mapDistance,this.mapTarget.z+Math.cos(this.mapAzimuth)*e),this.camera.lookAt(this.mapTarget),this.camera.updateMatrixWorld()}setDistrict(e){this.currentDistrict=e;for(const[n,i]of this.districtNodes){const a=n===e;i.ring.material.color.set(a?16727357:6219775),i.ring.material.opacity=a?.95:.48,i.beam.material.opacity=a?.32:.12,i.target.userData.active=a;const r=this.pinEls.get(n);r&&r.classList.toggle("current",a)}}mount(e,n,i,a,r,s="station",o){this.disposed||(this.container!==e&&(this.container=e,e.appendChild(this.renderer.domElement),this.pinLayer&&e.appendChild(this.pinLayer),this.resize()),this.cityKey!==`${n}:${i}`&&(this.cityKey=`${n}:${i}`,this.build(n,i),this.buildDistricts()),this.encroachment=a,this.reduced=r,this.districtSelect=o??null,this.setDistrict(s),this.redLight&&(this.redLight.intensity=2.2+Math.min(a,140)/32),this.resize())}resize(){if(!this.container)return;const e=this.container.getBoundingClientRect(),n=Math.max(1,Math.floor(e.width)),i=Math.max(1,Math.floor(e.height));(this.renderer.domElement.width!==n*this.renderer.getPixelRatio()||this.renderer.domElement.height!==i*this.renderer.getPixelRatio())&&(this.renderer.setSize(n,i,!1),this.camera.aspect=n/i,this.camera.updateProjectionMatrix())}build(e,n){for(;this.group.children.length;)this.group.children.pop().traverse(I=>{if(I instanceof Je||I instanceof Jc||I instanceof jc){I.geometry?.dispose();const O=I.material;Array.isArray(O)?O.forEach(M=>M.dispose()):O?.dispose()}});for(const R of this.textureCache)R.dispose();this.textureCache=[],this.scene.fog=null,this.redLight=null,this.rain=null,this.rainPositions=null;const i=To[e]??To.shinminato;this.palette=i;const a=g_[e]??"street",r=__(v_(`${e}:${n}`));this.scene.background=new je(i.sky),this.scene.fog=new Wl(i.fog,Math.min(.009,i.fogDensity*.5));const s=new tp(15924221,2504764,1.45);this.scene.add(s),this.group.add(s);const o=new rp(i.ambient,1.1);this.group.add(o);const l=new ap(15924223,1.25);l.position.set(26,55,24),l.target.position.set(0,0,-18),this.group.add(l,l.target);const c=b_();this.textureCache.push(c);const d=new yl({map:c,transparent:!0,depthWrite:!1,opacity:a==="docks"?.6:.38}),h=new Wc(d);h.scale.set(a==="docks"?26:18,a==="docks"?26:18,1),h.position.set(a==="docks"?2:-16,a==="docks"?17:22,-85),this.group.add(h);const u=new Je(new cn(150,138,1,1),new Zt({color:2635836,roughness:.65,metalness:.18}));u.rotation.x=-Math.PI/2,u.position.set(0,0,-18),this.group.add(u);const p=new Zt({color:5859949,roughness:.5,metalness:.2}),_=new Zt({color:8096396,roughness:.75,metalness:.1}),y=[-30,-18,-6,6,18,30],g=[10,-2,-14,-26,-38];for(const R of y){const I=new Je(new cn(7.2,112),_);I.rotation.x=-Math.PI/2,I.position.set(R,.025,-18),this.group.add(I);const O=new Je(new cn(5.2,112),p);O.rotation.x=-Math.PI/2,O.position.set(R,.04,-18),this.group.add(O)}for(const R of g){const I=new Je(new cn(124,7.2),_);I.rotation.x=-Math.PI/2,I.position.set(0,.026,R),this.group.add(I);const O=new Je(new cn(124,5.2),p);O.rotation.x=-Math.PI/2,O.position.set(0,.045,R),this.group.add(O)}const f=new yn({color:15332594,transparent:!0,opacity:.75});for(const R of y)for(let I=10;I>-44;I-=7){if(g.some(M=>Math.abs(I-M)<4))continue;const O=new Je(new cn(.15,3.2),f);O.rotation.x=-Math.PI/2,O.position.set(R,.06,I),this.group.add(O)}for(const R of g)for(let I=-30;I<31;I+=7){if(y.some(M=>Math.abs(I-M)<4))continue;const O=new Je(new cn(3.2,.15),f);O.rotation.x=-Math.PI/2,O.position.set(I,.06,R),this.group.add(O)}const T=new Zt({color:3495501,roughness:.9}),D=[{x:-12,z:-14,w:26,d:18},{x:12,z:-38,w:22,d:16},{x:18,z:8,w:18,d:14}];for(const R of D){const I=new Je(new cn(R.w,R.d),T);I.rotation.x=-Math.PI/2,I.position.set(R.x,.05,R.z),this.group.add(I);for(let O=0;O<26;O++){const M=new Je(new ki(.08,.12,.7,5),new Zt({color:6113589})),U=R.x+(r()-.5)*(R.w-2),Y=R.z+(r()-.5)*(R.d-2);M.position.set(U,.38,Y),this.group.add(M);const V=new Je(new Yl(.45+r()*.35,1.5+r()*1.1,6),new Zt({color:r()<.5?3960928:2972242}));V.position.set(U,1.25+r()*.4,Y),this.group.add(V)}}const x=[Qr(i,r),Qr(i,r),Qr(i,r),Qr(i,r)];this.textureCache.push(...x);const E=x.map(R=>new Zt({map:R,emissiveMap:R,emissive:16777215,emissiveIntensity:.24,roughness:.82,metalness:.08,color:11057333})),A=new Zt({color:2504506,roughness:.8}),C=new Zt({color:9023152,emissive:1985616,emissiveIntensity:.5,roughness:.3,metalness:.45}),m=[-24,-12,0,12,24],S=[4,-8,-20,-32];for(const R of m)for(const I of S)if(!D.some(O=>Math.abs(R-O.x)<O.w/2+2&&Math.abs(I-O.z)<O.d/2+2))for(const O of[-1.9,1.9])for(const M of[-1.9,1.9]){if(r()<.14)continue;const U=1.5+r()*1,Y=1.5+r()*1,V=3+r()*11,te=R+O+(r()-.5)*.4,q=I+M+(r()-.5)*.4,Q=new Je(new rn(U,V,Y),r()<.2?C:E[Math.floor(r()*E.length)]);Q.position.set(te,V/2,q),this.group.add(Q);const ie=new Je(new rn(U+.1,.14,Y+.1),A);if(ie.position.set(te,V+.08,q),this.group.add(ie),r()<.24){const Re=i.neon[Math.floor(r()*i.neon.length)],se=new Je(new rn(.12,.7+r()*1.2,.45),new yn({color:Re}));se.position.set(te+U/2+.06,V*.55,q),this.group.add(se)}}const L=(R,I,O,M,U,Y)=>{const V=new Zt({color:Y,emissive:Y,emissiveIntensity:.12,roughness:.45,metalness:.3}),te=new Je(new rn(O,M,U),V);te.position.set(R,M/2,I),this.group.add(te);const q=new Je(new rn(O*.55,.5,.12),new yn({color:16314319}));q.position.set(R,M*.72,I+U/2+.08),this.group.add(q)};L(-24,1,4.2,15,4.2,13083466),L(24,-20,5.2,11,4.8,13083466),L(6,-32,4.4,9,4.4,6066116),L(-6,9,4.4,8,4.4,6066116),this.redLight=new Ha(i.accent,2.2,34,2),this.redLight.position.set(-5,4.5,-8),this.group.add(this.redLight),this.buildRain(r,i,a)}buildStreet(e,n){const i=new Su({color:657672,transparent:!0,opacity:.8});for(let r=0;r<4;r++){const s=9+r*2.2,o=[new B(-24,s,10-r*14),new B(0,s-1.1,-15-r*18),new B(24,s,-42-r*20)],l=new qf(o),c=new Vt().setFromPoints(l.getPoints(24));this.group.add(new Jc(c,i))}const a=new Zt({color:789258,roughness:.9});for(let r=0;r<5;r++){const s=new Je(new ki(.08,.1,9,6),a);s.position.set(r%2===0?-10:10,4.5,-8-r*22),this.group.add(s);const o=new Je(new va(.22,8,8),new yn({color:n.window[0]}));o.position.set(s.position.x,9.2,s.position.z),this.group.add(o);const l=new Ha(n.window[0],1.2,15,2);l.position.copy(o.position),this.group.add(l)}}buildAlley(e,n){const i=new Zt({color:657672,roughness:.85});for(let r=0;r<8;r++){const s=new Je(new ki(.09,.09,18,6),i);s.rotation.x=Math.PI/2,s.position.set(r%2===0?-4.1:4.1,3+e()*10,-10-r*14),this.group.add(s)}for(let r=0;r<3;r++){const s=new Je(new rn(1.15,2.2,.8),new Zt({color:1315344,roughness:.65,metalness:.25}));s.position.set(r%2===0?-3.4:3.4,1.1,-14-r*26),this.group.add(s);const o=new Je(new cn(.9,1.2),new yn({color:n.window[0],transparent:!0,opacity:.55}));o.position.set(s.position.x,1.35,s.position.z+.41),this.group.add(o);const l=new Ha(n.window[0],1.3,8,2);l.position.set(s.position.x,1.6,s.position.z+.8),this.group.add(l)}const a=new yn({color:14170154});for(let r=0;r<4;r++){const s=new Je(new va(.24,10,10),a);s.position.set(r%2===0?-3.8:3.8,5+e()*3,-20-r*20),this.group.add(s);const o=new Ha(14170154,2,10,2);o.position.copy(s.position),this.group.add(o)}}buildDocks(e,n){const i=new Je(new cn(160,120,1,1),new Zt({color:461580,roughness:.08,metalness:.9}));i.rotation.x=-Math.PI/2,i.position.set(-42,-.3,-60),this.group.add(i);const a=[1581087,1971988,2235158,1186332];for(let o=0;o<22;o++){const l=new Je(new rn(4.3,2.3,2.2),new Zt({color:a[Math.floor(e()*a.length)],roughness:.8,metalness:.2})),c=Math.floor(e()*3);l.position.set(-15-e()*30,1.15+c*2.35,-20-e()*80),l.rotation.y=(e()-.5)*.2,this.group.add(l)}const r=new Zt({color:724236,roughness:.85});for(let o=0;o<3;o++){const l=-12-o*18,c=-30-o*25,d=new Je(new rn(.45,25,.45),r);d.position.set(l-2,12.5,c),this.group.add(d);const h=new Je(new rn(.45,25,.45),r);h.position.set(l+2,12.5,c),this.group.add(h);const u=new Je(new rn(20,.5,.5),r);u.position.set(l+6,24,c),this.group.add(u);const p=new Ha(14170154,2,18,2);p.position.set(l+15,24,c),this.group.add(p)}const s=new Je(new va(.2,8,8),new yn({color:n.accent}));s.position.set(8,6,-45),this.group.add(s)}buildRain(e,n,i){const a=i==="docks"?1200:1800,r=new Float32Array(a*3);for(let l=0;l<a;l++)r[l*3]=(e()-.5)*70,r[l*3+1]=e()*38,r[l*3+2]=10-e()*100;const s=new Vt;s.setAttribute("position",new Pn(r,3));const o=new Mu({color:14208181,size:.055,transparent:!0,opacity:.55,depthWrite:!1,sizeAttenuation:!0});this.rain=new jc(s,o),this.rainPositions=r,this.rainSpeed=(n.rain??1)*.055,this.group.add(this.rain)}makeDistrictLabel(e,n,i){const a=document.createElement("canvas");a.width=512,a.height=128;const r=a.getContext("2d");r.fillStyle=i?"rgba(216,56,42,0.94)":"rgba(5,12,14,0.9)",r.fillRect(0,0,512,128),r.strokeStyle=i?"#ffffff":"#5ee7ff",r.lineWidth=4,r.strokeRect(3,3,506,122),r.fillStyle="#ffffff",r.font="800 29px 'Noto Sans TC', sans-serif",r.fillText(e,22,51),r.fillStyle=i?"#ffffff":"#5ee7ff",r.font="700 19px monospace",r.fillText(n,22,89);const s=new ql(a);return s.colorSpace=Kt,this.textureCache.push(s),new Wc(new yl({map:s,transparent:!0,depthWrite:!1}))}buildDistricts(){this.districtNodes.clear();const e=[{id:"station",name:"站前商圈",en:"STATION",x:0,z:-6},{id:"residential",name:"舊住宅區",en:"RESIDENTIAL",x:-14,z:-18},{id:"docks",name:"第七碼頭",en:"PIER 7",x:14,z:-18},{id:"market",name:"黑市橫丁",en:"BLACK MARKET",x:-12,z:-28},{id:"academy",name:"學院特區",en:"ACADEMY",x:12,z:-28}];for(const n of e){const i=new ga,a=n.id===this.currentDistrict,r=new Je(new Kl(1.5,.1,8,32),new yn({color:a?16727357:6219775,transparent:!0,opacity:a?.95:.48,depthWrite:!1}));r.rotation.x=Math.PI/2,r.position.y=.25;const s=new Je(new ki(.06,1.3,5,16,1,!0),new yn({color:a?16727357:6219775,transparent:!0,opacity:a?.22:.07,depthWrite:!1,side:Bn}));s.position.y=2.5;const o=this.makeDistrictLabel(n.name,n.en,a);o.visible=!1,o.scale.set(5.4,1.35,1),o.position.set(0,5.1,0);const l=new Je(new va(2.2,12,8),new yn({transparent:!0,opacity:0,depthWrite:!1}));l.position.y=2,l.userData.districtId=n.id,i.position.set(n.x,0,n.z),i.add(r,s,o,l),this.group.add(i),this.districtNodes.set(n.id,{group:i,ring:r,beam:s,target:l,label:o})}this.pinLayer?.remove(),this.pinLayer=document.createElement("div"),this.pinLayer.className="district-pins",this.container?.appendChild(this.pinLayer),this.pinEls.clear();for(const n of e){const i=Bu.find(r=>r.id===n.id),a=document.createElement("button");a.type="button",a.className="district-pin",a.dataset.district=n.id,a.title=i?.description??n.name,a.innerHTML=`<span class="pin-index">${String(e.indexOf(n)+1).padStart(2,"0")}</span><strong>${n.name}</strong><small>${n.en}</small><em>${i?.effect??""}</em>`,a.addEventListener("click",r=>{r.stopPropagation(),this.districtSelect?.(n.id)}),this.pinLayer.appendChild(a),this.pinEls.set(n.id,a)}this.setDistrict(this.currentDistrict)}updatePinPositions(){if(!this.container||!this.camera)return;const e=this.container.getBoundingClientRect();for(const[n,i]of this.districtNodes){const a=this.pinEls.get(n);if(!a)continue;const r=new B;i.group.getWorldPosition(r),r.y+=5.2,r.project(this.camera);const s=(r.x*.5+.5)*e.width,o=(-r.y*.5+.5)*e.height,l={station:{x:0,y:-18},residential:{x:-120,y:-72},docks:{x:120,y:-72},market:{x:-40,y:78},academy:{x:40,y:78}}[n]??{x:0,y:0};a.style.left=`${s+l.x}px`,a.style.top=`${o+l.y}px`,a.style.display=r.z<1?"":"none"}}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.renderer.domElement.removeEventListener("pointerdown",this.onCanvasDown),this.renderer.domElement.removeEventListener("pointermove",this.onPointer),this.renderer.domElement.removeEventListener("pointerup",this.onCanvasUp),this.renderer.domElement.removeEventListener("pointercancel",this.onCanvasUp),this.renderer.domElement.removeEventListener("wheel",this.onCanvasWheel),this.pinLayer?.remove(),this.renderer.dispose(),this.renderer.domElement.remove()}}const zu="overman-erosion-city.meta.v1",Ql=[{id:"vitality",name:"殘存肉體",en:"SURVIVAL FLESH",description:"每級開局最大肉體 +2。",max:3,baseCost:2},{id:"will",name:"殘留意志",en:"RESIDUAL WILL",description:"每級開局侵蝕 -5。",max:3,baseCost:3},{id:"intel",name:"前世耳語",en:"PAST WHISPER",description:"每級開局情報 +1。",max:3,baseCost:2}],wl=[{id:"eighth_sword",title:"第八把劍",en:"THE EIGHTH BLADE",cost:2,text:"神田隼人的八把軌道魔劍並非武器，而是八個監視節點。每一把都記得一個被他逮捕過的超越者。第八把仍然空著。"},{id:"kotone",title:"小田川知世",en:"KOTONE ODAGAWA",cost:3,text:"霧見市事件中唯一沒有被回收的證人。她的名字出現在神田的私人筆記裡，也出現在 Project Ignis 的刪除名單上。"},{id:"z_project",title:"神造計劃",en:"PROJECT DEUS",cost:4,text:"財團 Z 試圖複製神明與英雄，製造可控的超越者。Code：Wukong 是第七個仍在運作的實驗體；前六個都被標記為「已理解死亡」。"},{id:"black_coat",title:"裏八咫黑服",en:"THE BLACK COAT",cost:3,text:"裏八咫的處決部隊沒有名字，只有編號。他們不參與選別，只負責讓選別維持在可以被計算的範圍內。"},{id:"twelve",title:"十二席代行者",en:"THE TWELVE",cost:4,text:"異端審判庭同時最多存在十二名代行者。他們能行使神怒，也能把神恩借給將死之人；代價是每一次行使都會讓自己的名字從記錄中消失一筆。"},{id:"seventh",title:"第七次選別",en:"THE SEVENTH SELECTION",cost:2,text:"Project Ignis 每數年舉行一次。前六次沒有留下公開記錄；第七次被允許留下城市、刻印與 108 種結局，因為裏八咫需要有人記住。"},{id:"flow",title:"流變的真相",en:"THE FLOW",cost:5,text:"顯現不是能力，而是世界對「不該存在之物」的排斥反應。侵蝕率不是代價，而是你被世界退貨的進度。"},{id:"nameless",title:"無名超越者",en:"THE NAMELESS",cost:3,text:"有一批超越者沒有代號、沒有城市、沒有刻印。裏八咫稱他們為「空白樣本」。他們可能才是 Project Ignis 真正的目的。"}];function Ao(){return{memory:0,runs:0,upgrades:{},lore:[]}}function Xi(){try{if(typeof localStorage>"u")return Ao();const t=localStorage.getItem(zu);if(!t)return Ao();const e=JSON.parse(t);return{memory:Number(e.memory)||0,runs:Number(e.runs)||0,upgrades:e.upgrades&&typeof e.upgrades=="object"?e.upgrades:{},lore:Array.isArray(e.lore)?e.lore.filter(n=>typeof n=="string"):[]}}catch{return Ao()}}function jl(t){try{typeof localStorage<"u"&&localStorage.setItem(zu,JSON.stringify(t))}catch{}}function x_(t){const e=Xi();return e.memory+=Math.max(0,Math.floor(t)),e.runs+=1,jl(e),e.memory}function S_(){const t=Xi();return{maxHp:(t.upgrades.vitality??0)*2,encroachment:(t.upgrades.will??0)*5,intel:(t.upgrades.intel??0)*1}}function M_(t){const e=Xi(),n=Ql.find(a=>a.id===t),i=e.upgrades[t]??0;return n.baseCost+i*2}function E_(t){const e=Xi(),n=Ql.find(r=>r.id===t),i=e.upgrades[t]??0,a=n.baseCost+i*2;return i>=n.max||e.memory<a?!1:(e.memory-=a,e.upgrades[t]=i+1,jl(e),!0)}function T_(t){const e=Xi(),n=wl.find(i=>i.id===t);return!n||e.lore.includes(t)||e.memory<n.cost?!1:(e.memory-=n.cost,e.lore.push(t),jl(e),!0)}function Hu(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}function A_(t){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}function w_(t){return t.rngCount+=1,A_(Hu(t.seed+":"+t.rngCount))}function on(t,e,n){return e+Math.floor(w_(t)*(n-e+1))}function kt(t){return on(t,1,20)}function R_(t){const e=[on(t,1,6),on(t,1,6),on(t,1,6),on(t,1,6)];return e.sort((n,i)=>i-n),e[0]+e[1]+e[2]}function Sn(t,e){return e[on(t,0,e.length-1)]}function C_(t,e){const n=[...e];for(let i=n.length-1;i>0;i--){const a=on(t,0,i);[n[i],n[a]]=[n[a],n[i]]}return n}function cr(){return Math.random().toString(36).slice(2,8)+Math.random().toString(36).slice(2,6)}function mn(t){return gr.get(t.cityId)?.name??"這座城市"}function L_(t){return t.bonds.filter(e=>e.alive).reduce((e,n)=>e+n.level,0)}function ma(t,e){return t.bonds.filter(i=>i.alive&&(!e||i.category===e)).sort((i,a)=>a.level-i.level)[0]??null}function P_(t){return ma(t)?.name??"那個人"}const Ls=[{id:"ash",base:"monster",title:"灰燼王座",subtitle:"你成為了這座城市最後一個活著的怪物",stamp:"侵蝕",tone:"dark",condition:"侵蝕率 ≥100，或失控 ≥3 次",body:t=>`你的名字先從別人的記憶裡脫落。

然後是街道的名字，便利商店的位置，海的方向。

最後，你低下頭，看見自己的手已經不是手，而是一小片會呼吸的焦炭。你卻不再害怕。

終端還在運作。它用一個很平的女聲說：

「Project Ignis，完遂。個體已成為新種。」

${mn(t)} 的燈火在你眼裡變成了一條條可以吞下去的線。你張開嘴，卻沒有發出聲音。

因為你已經不需要語言了。`},{id:"vessel",base:"monster",title:"容器",subtitle:"你沒有變成怪物；你讓怪物住進了身體",stamp:"顯現",tone:"dark",condition:"侵蝕 ≥100，且曾接受顯現增生或與王冠共鳴",extraCondition:t=>t.player.encroachment>=100&&(!!t.player.flags.accepted||!!t.player.flags.crown_injured),body:t=>`王冠的碎片在你胸口裡發亮，像一顆借來的第二心臟。

你記得自己曾經拒絕過它。你也記得自己後來為什麼點頭。

「不是你控制它，」王冠的聲音從很遠的地方傳來，「是你們終於願意承認，你們本來就是同一種東西。」

你站在 ${mn(t)} 最高的地方，讓整座城市的雨停下來。

底下有人抬頭。他們看見的不是怪物，而是一個終於被填滿的人。

你伸出手。城市跟著你一起呼吸。

這一刻，你比任何時候都更像人。也比任何時候都更危險。`},{id:"unclaimed",base:"dead",title:"無人認領",subtitle:"七十二小時，沒有誰替你倒數",stamp:"死亡",tone:"dark",condition:"肉體歸零",body:t=>`你倒在一條沒有監視器的小巷裡。

雨把你的血沖進排水溝，一路帶進海裡，和這座城市其他被遺忘的東西一起。

裏八咫的終端在三分鐘後停止顯示你的代號。那個代號很短，短得像一個沒有寫完的句子。

${mn(t)} 的早晨照常到來。有人牽著狗經過巷口，狗停了半秒，又跟著主人走了。

你最後想起的是一通沒有接的電話。

鈴聲響了很久。久到對方以為你只是睡著了。`},{id:"arrest",base:"caught",title:"神田隼人",subtitle:"最強對手",stamp:"逮捕",tone:"neutral",condition:"被神田隼人制伏、投降或遭遇失敗",body:t=>`手銬扣上時，你才發現自己一直屏著呼吸。

神田隼人蹲下來，與你平視。

「我知道你不是自願的。」

他的語氣很平，像在讀一份天氣預報。

「但你也知道，這不能成為理由。」

他把你從雨裡拉起來。你以為他會用力，結果沒有。

警車的後座有一股很淡的咖啡味。你看著 ${mn(t)} 從車窗外倒退，第一次發現這座城市原來有這麼多沒有關掉的燈。

「你會告訴我裏八咫的事。」神田說。

不是問句。

你沒有回答。他也沒有再問。`},{id:"execution",base:"caught",title:"黑服執行",subtitle:"裏八咫不需要法庭",stamp:"處決",tone:"dark",condition:"警戒指數 ≥80、洩露規則或屠殺平民，且被裏八咫攔截",extraCondition:t=>!!t.player.flags.leaked||!!t.player.flags.massacre||t.player.heat>=80,body:t=>`黑色的廂型車停在巷口。沒有標誌，沒有車牌。

三個人下車，穿一樣的黑西裝，動作像同一個人在鏡子裡被複製了三遍。

「Project Ignis 第七次選別，個體 ${t.player.codename}。」中間那個人說。「你已不具備可回收價值。」

你認出他的聲音。你曾在終端的語音提示裡聽過。

你試著解釋。你試著問是誰下的命令。你試著說自己只是為了活下去。

他們沒有打斷你。他們只是等你說完。

然後其中一個人抬手，像在關掉一盞不需要的燈。

${mn(t)} 的雨繼續下。第二天，沒有人在新聞裡看見你的名字。`},{id:"recycled",base:"recycled",title:"回收編號",subtitle:"沒有達到最低分數的零件",stamp:"回收",tone:"bad",condition:"閉幕時刻印未達門檻",body:t=>`閉幕的鐘聲響起時，你的刻印停在門檻以下。

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

你站在 ${mn(t)} 的街口，忽然不知道自己該去哪裡。

沒有人追你。沒有人等你。沒有人恨你。

你贏了。這就是贏的樣子。`},{id:"survivor",base:"survivor",title:"合格者",subtitle:"你拿到了生存資格，代價是別人的名字",stamp:"生存",tone:"neutral",condition:"刻印達標但排名非第一",body:t=>`「刻印達標。排名未達第一。授予生存資格。」

終端說完這句話，就恢復成一支普通的手機。

你花了很久才適應它不再震動。

${mn(t)} 的早晨很安靜。你坐在車站前的長椅上，看著上班族走進票口，看著學生低頭滑手機，看著一個母親把孩子抱起來。

你想起那些被你寫進刻印數字裡的人。你甚至記不清其中幾張臉。

生存資格不是赦免。它比較像一張收據。

證明你付過錢。證明你曾經被允許活下去。`},{id:"artificial",base:"survivor",title:"人造黎明",subtitle:"財團 Z 沒有救你，只是把你買回來",stamp:"回收",tone:"bad",condition:"刻印達標、排名非第一，且接觸過財團 Z 的秘密",extraCondition:t=>!!(t.player.flags.riya_secret||t.player.flags.kanda_partial||t.player.flags.told_kotone),body:t=>`你沒有回到街上。

醒來時，天花板是白色的。空氣裡有一股消毒水和金屬的氣味。

「專案編號 ${t.player.codename}。」一個穿白袍的人說。「恭喜。你通過了野外測試。」

你想問這是哪裡。你想問自己是不是死了。

但你的身體先回答了：它認得這個地方。

財團 Z 的科學家把 Project Ignis 叫做「自然選別」。他們不關心誰贏。他們只關心誰能在瀕臨侵蝕的狀態下，仍然記得怎麼服從。

「你做得很好。」白袍的人說。「現在，我們要開始真正的實驗。」

窗外，${mn(t)} 的燈火被玻璃切成整齊的方格。

你忽然明白：裏八咫不是這座城市最深的地方。它只是最上面那一層。`},{id:"escape",base:"escape",title:"海岸線",subtitle:"你沒有贏，但你也沒有被算進分數",stamp:"逃亡",tone:"good",condition:"閉幕前成功離開城市，且警戒 <70",body:t=>`你沒有回頭。

碼頭的盡頭有一艘很舊的漁船，船身漆著一個你看不懂的名字。船主收了你的錢，沒有問你要去哪裡。

${mn(t)} 的燈火在身後變成一條很細的線，最後被霧吞掉。

終端被你丟進海裡。它下沉的時候還亮著，像一顆不願意閉上的眼睛。

船艙裡有一張舊報紙、一包受潮的菸、一個壞掉的收音機。

你把它們一件一件收好。你忽然有很多時間。

海風很冷。天邊已經泛白。

你活下來了。不是因為你比較強，只是因為你在正確的時候，選擇了離開。`},{id:"confess",base:"confess",title:"證人",subtitle:"你把真相交出去，然後成為真相的一部分",stamp:"自首",tone:"good",condition:"持有證據並交給神田，或選擇自首",body:t=>`你把終端放在神田的報告上。

他抬頭看了你一眼，然後合上報告。

「上車吧。」他說。「我們有很多事要談。」

警車沒有開回警署。它穿過 ${mn(t)} 的清晨，停在一棟沒有門牌的大樓前。

裡面的人穿著黑西裝，和裏八咫執行官一樣。但他們看見神田時，全部站了起來。

你把 Project Ignis 的規則、刻印、回收名單、城市名單，一件一件說出來。

你說得很慢。慢到你開始相信自己真的記得每一個字。

神田坐在你旁邊，沒有打斷你。

天亮時，他遞給你一杯很苦的咖啡。

「你現在是證人了。」他說。「這不代表你自由。但至少，你不再是他們的數字。」

你握著那杯咖啡，第一次覺得自己還有一個名字。`},{id:"nameless",base:"nameless",title:"無名之人",subtitle:"你沒有達到門檻，但有人替你按住了終端",stamp:"未登錄",tone:"good",condition:"刻印不足，但侵蝕 <40 且羈絆 ≥6，神田介入",body:t=>`終端顯示：「未達標。回收名單確認中。」

然後，一隻手按住了螢幕。

不是裏八咫的手。也不是神田的。

是 ${P_(t)}。

「夠了。」那個人說。聲音很輕，卻讓整條街安靜下來。

你看著對方，忽然想起自己已經很久沒有被人叫過名字。不是代號，不是編號，不是「個體」。

「你沒有贏。」那個人說。「但你也沒有變成他們要你變成的人。」

遠處，神田靠在車門旁，沒有走過來。他只是看著，像在確認一件終於歸位的事。

裡八咫的直升機在頭頂盤旋。探照燈掃過屋頂，又掃回去。

你沒有被赦免。你只是被記住了。`}],Qa=[{id:"family",title:"家書",subtitle:"還有人在家裡等你",condition:"家人羈絆 ≥6",check:t=>(ma(t,"family")?.level??0)>=6,body:t=>{const e=ma(t,"family");return`你最後一次聽見${e?.name??"家人"}的聲音，是在一通很短的通話裡。

對方沒有問你在做什麼。只說：「回來的時候，記得先吃飯。」

你一直記得這句話。

後來，${e?.name??"家人"}在桌上多放了一副碗筷。一天、兩天、很多天。

沒有人解釋那副碗筷是給誰的。`}},{id:"friend",title:"同行",subtitle:"有人替你記得原本的你",condition:"朋友羈絆 ≥6",check:t=>(ma(t,"friend")?.level??0)>=6,body:t=>{const e=ma(t,"friend");return`${e?.name??"那個人"}沒有叫你英雄，也沒有叫你怪物。

他只是把外套丟到你頭上，說：「你這樣會感冒。」

你想笑，卻先咳了一聲。

後來你們誰都沒有再提那七十二小時。

但每次下雨，${e?.name??"那個人"}都會多帶一把傘。`}},{id:"community",title:"街燈",subtitle:"一條街替你留了位置",condition:"共同體羈絆 ≥6",check:t=>(ma(t,"community")?.level??0)>=6,body:t=>`那條街的人沒有問你去了哪裡。

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

他把手銬收進口袋，轉身走進 ${mn(t)} 的雨裡。

你站在原地，忽然覺得被一個最強的人記住，比被整座城市遺忘更可怕。

也更像活著。`},{id:"kin",title:"同類",subtitle:"你留下的傷口還在別人的身體裡",condition:"擊倒 ≥2 名超限者，或曾屠殺",check:t=>t.player.killsOverman>=2||!!t.player.flags.massacre,body:t=>`你殺過的人沒有全部消失。

他們出現在終端的延遲通知裡，出現在你閉眼後的黑暗裡，出現在每一場沒有聲音的雨裡。

「你以為你贏了。」其中一個說。

你沒有回答。你已經學會不跟死者爭論。

但你知道他們是對的。刻印不會說謊。它只是把名字換成數字。

而你，已經開始習慣用數字記人。`},{id:"city",title:"城市餘生",subtitle:"這座城市記得所有被刪除的紀錄",condition:"情報 ≥5，或掌握財團 Z 的秘密",check:t=>t.player.intel>=5||!!t.player.flags.riya_secret,body:t=>`${mn(t)} 有很多層。

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

記得你不是生來就是怪物。`},{id:"distant",title:"遠方",subtitle:"有人保持距離，但沒有掛斷",condition:"仍有至少一條羈絆，但未達 6",check:t=>L_(t)>=2,body:t=>`通話接通的時候，對面沉默了很久。

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

${mn(t)} 的雨下了一整夜。第二天早上，路面乾得像是什麼都沒有發生。

你站在車站前，看著人群走進票口。

你忽然想，如果自己現在消失，會不會有人多看一眼。

答案是沒有。

你把手插進口袋，跟著人群走了進去。`}];Ls.map(({body:t,extraCondition:e,...n})=>n);const ja=Ls.flatMap(t=>Qa.map(e=>({id:`${t.id}__${e.id}`,familyId:t.id,variantId:e.id,title:`${t.title}・${e.title}`,subtitle:`${t.subtitle}／${e.subtitle}`,stamp:t.stamp,tone:t.tone,condition:`${t.condition}；且${e.condition}`,familyTitle:t.title,variantTitle:e.title}))),Gu=Object.fromEntries(ja.map(t=>[t.id,t]));function I_(t,e){const n=Ls.filter(s=>s.base===e),i=n.find(s=>s.extraCondition?.(t))??n[0],a=Qa.find(s=>s.check(t))??Qa[Qa.length-1],r=Gu[`${i.id}__${a.id}`]??ja[0];return{...r,...r?{}:{}}}function D_(t,e){const n=Ls.find(a=>a.id===e.familyId),i=Qa.find(a=>a.id===e.variantId);return!n||!i?Al[t.ending??"nameless"].text:`${n.body(t)}

${i.body(t)}`}const Vu="overman-erosion-city.endings.v1";function Ps(){try{if(typeof localStorage>"u")return[];const t=localStorage.getItem(Vu),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}catch{return[]}}function N_(t){const e=Ps();if(e.includes(t))return e;const n=[...e,t];try{typeof localStorage<"u"&&localStorage.setItem(Vu,JSON.stringify(n))}catch{}return n}const Wu=[{id:"basic_melee",name:"近身攻擊",style:"melee",stat:"strength",range:1,power:2,cost:0,tagline:"每個人都有的一拳。",description:"最基本的近身攻擊。用 STR 判定；速度 0 的目標不受射程限制。"},{id:"basic_ranged",name:"射擊",style:"ranged",stat:"dexterity",range:2,power:2,cost:0,tagline:"距離是弱者最後的護甲。",description:"最基本的遠程攻擊。用 DEX 判定；間合 3 以內有效。"},{id:"bone_break",name:"裂骨拳",style:"melee",stat:"strength",range:1,power:2,cost:0,tagline:"先打斷支撐，再打斷人。",description:"貼近後以掌根砸向鎖骨。命中時對方這一回合的架勢會塌下來。"},{id:"guillotine",name:"斷頸刃",style:"melee",stat:"strength",range:1,power:3,cost:0,tagline:"一刀，只有一刀。",description:"把全身重量壓進一記橫斬。距離太遠時，刀尖只會劃到空氣。"},{id:"iron_shoulder",name:"鐵山靠",style:"melee",stat:"strength",range:1,power:2,cost:0,tagline:"牆壁是最後的對手。",description:"以肩甲撞進對方胸口。命中後能穩住自己的重心。",effect:"guard"},{id:"strangle",name:"絞殺",style:"melee",stat:"strength",range:1,power:2,cost:2,tagline:"呼吸是最昂貴的東西。",description:"從背後扣住喉嚨。對方下一次攻擊會失去準頭。",effect:"expose"},{id:"reverse_scale",name:"逆鱗突",style:"melee",stat:"strength",range:1,power:3,cost:2,tagline:"每個人身上都有一片不能碰的鱗。",description:"短距離爆發的肘擊。需要先承受對方的節奏。"},{id:"iai",name:"居合",style:"melee",stat:"strength",range:1,power:2,cost:1,tagline:"拔刀的時間比呼吸短。",description:"在接觸的一瞬間拔刀。若對方比你快，這一刀會落空。"},{id:"rail_nail",name:"磁軌釘",style:"ranged",stat:"dexterity",range:2,power:2,cost:0,tagline:"把釘子送進下一個街區。",description:"以電磁加速射出金屬釘。間合 3 以內都能瞄準。"},{id:"rain_needle",name:"雨針",style:"ranged",stat:"dexterity",range:2,power:1,cost:0,tagline:"雨落下來之前，針已經到了。",description:"從袖口灑出細針。傷害低，但很容易命中。"},{id:"piercer",name:"穿甲彈",style:"ranged",stat:"dexterity",range:2,power:3,cost:1,tagline:"護甲只是比較慢的鐵。",description:"為長距離準備的子彈。間合 4 以內有效。"},{id:"wire",name:"絲線",style:"ranged",stat:"dexterity",range:2,power:1,cost:0,tagline:"看不見的東西最難躲。",description:"甩出細線纏住對方的腳。命中後能為下一擊製造空隙。",effect:"momentum"},{id:"throwing_blade",name:"投擲刃",style:"ranged",stat:"dexterity",range:2,power:2,cost:0,tagline:"刀離開手之後，仍然記得方向。",description:"短距離投擲。比槍安靜，也比槍慢。"},{id:"mortar",name:"迫擊",style:"ranged",stat:"dexterity",range:2,power:3,cost:2,tagline:"把整條街的距離摺成一發。",description:"拋射爆炸物。射程最遠，但會留下很大的聲音。"},{id:"tactical_mark",name:"戰術標定",style:"support",stat:"intelligence",range:3,power:0,cost:0,tagline:"先畫出對方會犯錯的地方。",description:"標定目標。下一擊 +3，並無視一部分掩護。",effect:"momentum"},{id:"adrenaline",name:"腎上腺素",style:"support",stat:"constitution",range:0,power:0,cost:0,tagline:"身體比意志更想活下去。",description:"強行穩住傷勢。回復 2 點肉體，代價是下一回合的 fumble 風險。",effect:"heal"},{id:"fear_whisper",name:"恐懼低語",style:"support",stat:"charisma",range:2,power:0,cost:1,tagline:"說出對方最不想聽的那句話。",description:"動搖目標。目標下一次攻擊 -2。",effect:"expose"},{id:"smoke",name:"煙幕",style:"support",stat:"wisdom",range:2,power:0,cost:0,tagline:"看不見的敵人，暫時不需要處理。",description:"拉開距離。這回合 AC +3，下一次移動更容易。",effect:"guard"},{id:"phase_read",name:"譜線預判",style:"support",stat:"wisdom",range:1,power:0,cost:0,tagline:"他不是比你快，只是比你早決定。",description:"讀出對方的速度宣告。下一擊 +2，並讓對方這回合的 fumble 範圍 +1。",effect:"momentum"},{id:"blood_drain",name:"血償",style:"melee",stat:"strength",range:1,power:2,cost:3,tagline:"用一點自己的血，換對方更多。",description:"以傷換傷。命中時回復 1 點肉體。",effect:"drain"}],Is=new Map(Wu.map(t=>[t.id,t]));function U_(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}const er=["basic_melee","basic_ranged"];function bs(t,e=4,n=[]){const i=Math.max(2,e),a=Wu.filter(c=>!er.includes(c.id)),r=n.length?a.filter(c=>n.includes(c.stat)):a,s=a.filter(c=>!r.some(d=>d.id===c.id)),o=c=>c.map((d,h)=>({id:d.id,key:U_(`${t}:${d.id}:${h}`)})).sort((d,h)=>d.key-h.key).map(d=>d.id),l=[...o(r),...o(s)].slice(0,Math.max(0,i-er.length));return[...er,...l]}function Xu(t,e=[]){return{core_array:["intelligence","wisdom"],core_revive:["constitution","wisdom"],core_ward:["wisdom","constitution"],core_market:["charisma","intelligence"],core_multi:["dexterity","intelligence"],core_variable:["strength","constitution"],core_combat:["strength","dexterity"],core_focus:["wisdom","dexterity"],blade:["strength","dexterity"],flash:["dexterity","strength"],mindeye:["wisdom","intelligence"],ash:["intelligence","constitution"],regen:["constitution","strength"],siren:["charisma","wisdom"],thunder:["dexterity","strength"]}[t]??e}function k_(t){return t==="kurokawa"||t==="thug"?["strength","constitution"]:t==="ayase"||t==="shard"?["dexterity","wisdom"]:t==="crown"||t==="crownShard"?["constitution","charisma"]:t==="kanda"?["strength","dexterity"]:[]}function O_(t){const e=[...er,...(t??[]).filter(n=>!er.includes(n))];return[...new Set(e)].slice(0,4)}function Aa(t){return(t??[]).map(e=>Is.get(e)).filter(e=>!!e)}const qu=[{id:"edge",name:"絕影一閃",en:"SEVERING FLASH",type:"melee",range:1,tagline:"一刀，把終點畫在對方身上。",description:"近戰必殺。無視 fumble，命中加值極高，單體高傷害。只能攻擊間合 ±1 內的目標。"},{id:"rain",name:"萬象灰雨",en:"ASHEN RAIN",type:"ranged",range:2,tagline:"整片天空落下來，沒有人能只被淋濕。",description:"遠程全體必殺。攻擊間合 ±2 內的所有敵人，傷害較低，但一次覆蓋全場。"},{id:"aegis",name:"絕對城塞",en:"ABSOLUTE AEGIS",type:"shield",range:0,tagline:"世界可以壞，但不可以穿過你。",description:"強力護盾。整場戰鬥吸收 9 點傷害；每場只能發動一次。"},{id:"exchange",name:"零刻交換",en:"ZERO EXCHANGE",type:"extra",range:0,tagline:"把下一秒借來，現在就用掉。",description:"立刻獲得一次額外行動。不推進回合，但本場奧義次數會被消耗。"},{id:"entropy",name:"熵印焚身",en:"ENTROPY BRAND",type:"true",range:1,tagline:"用自己的血，換一個必然的傷口。",description:"支付 2 點肉體，對間合 ±1 內的單一目標造成 6 點無視 AC 的真實傷害。可能把自己燒死。"},{id:"gravity",name:"重力井",en:"GRAVITY WELL",type:"gravity",range:0,tagline:"所有人都會落到同一個速度。",description:"把所有存活敵人的 PLOT 拉到你目前的數值，讓近戰／遠程間合重新成立。"},{id:"reversal",name:"因果逆行",en:"CAUSAL REVERSAL",type:"heal",range:0,tagline:"把已經發生的痛，倒轉一點點。",description:"回復 5 點肉體，侵蝕率 -5。每場只能發動一次。"}],ys=new Map(qu.map(t=>[t.id,t])),Yu=[{id:"q1",title:"夜間巡邏",text:`深夜的車站月台，一名受傷的陌生超越者倒在你面前。月台上沒有監視器，只有一個正在靠近的站務員。

你先做什麼？`,options:[{label:"先確認逃生路線與監視死角。",hint:"先觀察，再判斷。",axis:"I",backgrounds:["journalist","urchin"]},{label:"蹲下去，先壓住傷口。",hint:"先救人，之後再說。",axis:"E",backgrounds:["medic","store"]}]},{id:"q2",title:"你相信什麼",text:`「顯現」到底是什麼？

記者會上，專家爭論不休。你坐在電視前，心裡浮現第一個答案。`,options:[{label:"一種可以用科學解釋、也能被利用的現象。",hint:"能測量，就能對付。",axis:"S",backgrounds:["veteran","underworld"]},{label:"人類還沒準備好承認的下一種可能。",hint:"有些東西不該被歸類。",axis:"N",backgrounds:["shrine","musician"]}]},{id:"q3",title:"代價",text:`裏八咫要你交出一個無辜的人，換取自己的安全。

對方的臉模糊不清，但你知道那個人真的存在。`,options:[{label:"先問清楚代價、成功率與退路。",hint:"活下來才有資格談對錯。",axis:"T",backgrounds:["underworld","journalist"]},{label:"拒絕。就算這會讓自己活不下去。",hint:"有些答案不需要計算。",axis:"F",backgrounds:["medic","shrine"]}]},{id:"q4",title:"72小時",text:`倒數開始。城市在你面前攤開，像一張沒有標記的地圖。

你會怎麼走？`,options:[{label:"先畫出時間表、路線與備用計畫。",hint:"把未知拆成可以處理的格子。",axis:"J",backgrounds:["store","veteran"]},{label:"先走上街，讓城市告訴你答案。",hint:"計畫永遠趕不上變化。",axis:"P",backgrounds:["musician","urchin"]}]},{id:"q5",title:"人群",text:`你剛做完一件事，那件事不能被人記住。

街角有兩條路：一條通往車站前的夜市，燈很亮，人很吵；一條通往沒有路燈的河堤。

你會怎麼離開？`,options:[{label:"混進人群，讓自己變成背景的一部分。",hint:"人多的地方最安全。",axis:"E",backgrounds:["store","musician"]},{label:"走沒有人的路，確認沒有人跟上。",hint:"安靜比熱鬧可靠。",axis:"I",backgrounds:["journalist","urchin"]}]},{id:"q6",title:"稱讚",text:`有人稱讚你做得好。

那個人你只見過兩次。稱讚裡有一半是好意，另一半是試探——你自己也常做一樣的事。`,options:[{label:"順著話題聊下去，讓氣氛輕鬆一點。",hint:"關係也是一種資源。",axis:"E",backgrounds:["musician","store"]},{label:"簡短道謝，然後繼續觀察對方。",hint:"先看清楚他想要什麼。",axis:"I",backgrounds:["veteran","shrine"]}]},{id:"q7",title:"研究",text:`你拿到一份關於顯現的研究報告，厚度像一本電話簿，封面沒有任何機構的標誌。

你會先翻哪一頁？`,options:[{label:"先看數據、樣本與重現方式。",hint:"能被重複的才叫線索。",axis:"S",backgrounds:["journalist","veteran"]},{label:"先看作者為什麼要研究這個。",hint:"動機比數字更誠實。",axis:"N",backgrounds:["shrine","musician"]}]},{id:"q8",title:"夢",text:"你夢見一座城市。醒來後，記得最清楚的是什麼？",options:[{label:"街道的坡度、雨聲、便利商店的燈。",hint:"細節讓夢變成地點。",axis:"S",backgrounds:["store","urchin"]},{label:"一個沒有臉的人，站在很遠的地方。",hint:"有些畫面只是某種預感。",axis:"N",backgrounds:["shrine","underworld"]}]},{id:"q9",title:"拖累",text:`同伴的腿斷了，追兵在兩條街外。

他叫你走。他說他會自己想辦法——他說這句話的時候沒有看你。`,options:[{label:"先計算兩個人都活下來的機率。",hint:"救不了兩個人，至少要活一個。",axis:"T",backgrounds:["veteran","underworld"]},{label:"先拉他一把。之後再想辦法。",hint:"有些手不能放。",axis:"F",backgrounds:["medic","musician"]}]},{id:"q10",title:"謊言",text:`一個陌生人對你說謊。你聽出來了。

但天亮之前，只有他能把那批貨交到你手上。`,options:[{label:"當場拆穿，讓他重新談條件。",hint:"資訊不對等才是真正的危險。",axis:"T",backgrounds:["journalist","underworld"]},{label:"假裝相信，給彼此留一條路。",hint:"有些謊言是用來維持秩序的。",axis:"F",backgrounds:["store","medic"]}]},{id:"q11",title:"行李",text:"你只有三分鐘能離開住處。",options:[{label:"照清單拿：證件、藥、現金、備用終端。",hint:"先保住能讓自己活下去的東西。",axis:"J",backgrounds:["store","veteran"]},{label:"抓最重要的那一樣就走。",hint:"剩下來的都可以再找。",axis:"P",backgrounds:["musician","urchin"]}]},{id:"q12",title:"變數",text:"計畫被打亂了。",options:[{label:"先回到原本的計畫，找出哪一步錯了。",hint:"混亂裡更需要順序。",axis:"J",backgrounds:["journalist","shrine"]},{label:"直接換一條路，邊走邊修正。",hint:"活著比照計畫重要。",axis:"P",backgrounds:["musician","underworld"]}]}],ec=[{id:"c1",title:"第一小時",text:`十一月三日，凌晨零時。你抵達新湊市，鞋裡已經進了水。

口袋裡有一封黑信封，上面只有一行字：於零時前抵達指定城市，不得告知任何人。

雨沒有停。車站前的燈一盞壞了，一盞在閃。

第一件事，你會做什麼？`,options:[{label:"走進人群。人多的地方，最不容易被記住。",hint:"你相信城市會替你藏起來。",axis:"E",backgrounds:["store","underworld"]},{label:"先找一個能看見所有出入口的位置，坐下來。",hint:"先看清楚，再決定要不要動。",axis:"I",backgrounds:["journalist","urchin"]}]},{id:"c2",title:"三行規則",text:`終端亮了。螢幕上只有三行：

殺死普通人，一枚刻印。殺死超越者，十枚。
閉幕時未達門檻者，回收。
不得離開這座城市。

你把那三行讀了第二次。`,options:[{label:"照字面做。規則寫得這麼短，就代表它不打算解釋。",hint:"能執行的東西才算規則。",axis:"S",backgrounds:["veteran","medic"]},{label:"寫規則的人漏掉了什麼。短，是因為有些事不能寫。",hint:"三行字後面，應該有一份更長的版本。",axis:"N",backgrounds:["shrine","musician"]}]},{id:"c3",title:"第一夜",text:`凌晨三點。你還活著，終端提醒你：距離閉幕，還有六十九個小時。

便利商店的燈還亮著。遠處有人在跑，不是往這個方向。

第一個夜晚，你要怎麼過完？`,options:[{label:"把明天的路線寫下來，風險一條一條排。",hint:"先有順序，才有明天。",axis:"T",axes:["T","J"],backgrounds:["veteran","store"]},{label:"先打一通電話回家。有些事現在不做，之後就沒機會。",hint:"你還記得那個號碼。",axis:"F",axes:["F","J"],backgrounds:["medic","musician"]},{label:"上街走。走到哪算哪，計畫永遠趕不上變化。",hint:"活著比照計畫重要。",axis:"T",axes:["T","P"],backgrounds:["urchin","underworld"]},{label:"找一個人一起走。一個人活不到閉幕。",hint:"你需要有人知道你還在。",axis:"F",axes:["F","P"],backgrounds:["journalist","shrine"]}]}],F_=new Map([...Yu,...ec].map(t=>[t.id,t]));function Zu(t){return ec.map(e=>e.id)}function tc(t){return F_.get(t)}const B_={INTJ:"獨行的棋手",INTP:"拆解世界的旁觀者",ENTJ:"把人群當成棋盤的人",ENTP:"點火者",INFJ:"安靜的守夜人",INFP:"把夢藏進口袋的人",ENFJ:"讓別人相信自己的人",ENFP:"追著光跑的人",ISTJ:"把承諾寫成紀錄的人",ISFJ:"默默收拾殘局的人",ESTJ:"先立規矩的人",ESFJ:"讓房間亮起來的人",ISTP:"在混亂裡找手感的人",ISFP:"用身體記住世界的人",ESTP:"先跳下去再說的人",ESFP:"把今天活成節日的人"},Ds=[{id:"medic",name:"急救志工",tagline:"在別人倒下時，手會先動起來。",description:"你在夜間診所與災害現場之間長大。見識過太多來不及救的人，也學會了怎麼在沒有燈的地方止血。",statBonus:{constitution:1,wisdom:1},feature:"急救常識：休息時額外回復 1 點肉體。",start:{flags:["field_medicine"]},bondId:"saya"},{id:"store",name:"便利店夜班",tagline:"整座城市的深夜，都會經過你的櫃檯。",description:"你值過太多大夜班。誰在凌晨三點買酒、誰帶著血走進店裡、誰再也沒有出現，你都知道，只是不說。",statBonus:{charisma:1,dexterity:1},feature:"城市耳目：初始情報 +1，警戒指數 -5。",start:{intel:1,heat:-5},bondId:"kuga"},{id:"musician",name:"地下樂手",tagline:"你有把沉默唱成聲音的本事。",description:"你在車站前、在地下室、在沒有人記得的Live House裡唱過歌。掌聲很少，但你記得每一個留下來聽完的人。",statBonus:{charisma:1,wisdom:1},feature:"共鳴：聯絡羈絆時額外降低 2 點侵蝕。",start:{flags:["resonance"]},bondId:"kiritani"},{id:"journalist",name:"網路記者",tagline:"真相不是被找到的，是被追出來的。",description:"你替一家快倒閉的網路媒體跑新聞。你學會了怎麼問問題、怎麼查戶籍、怎麼在被跟蹤時甩掉對方。",statBonus:{intelligence:1,wisdom:1},feature:"追線：初始情報 +2。",start:{intel:2},bondId:"soma"},{id:"shrine",name:"神社之子",tagline:"你從小就知道，看不見的東西不代表不存在。",description:"你替家裡的神社掃落葉、遞御守、聽老人說完那些沒有人信的故事。你沒有顯現，卻比誰都習慣和未知共處。",statBonus:{constitution:1,charisma:1},feature:"鎮魂：初始侵蝕 -4。",start:{encroachment:-4},bondId:"chishiki"},{id:"underworld",name:"黑市跑腿",tagline:"你認識的城市，和地圖上的不是同一個。",description:"你替人送過不該送的東西，也替人保守過不該知道的秘密。你活到今天，靠的不是拳頭，是知道誰能信。",statBonus:{strength:1,dexterity:1},feature:"門路：初始獲得強化風衣，情報 +1。",start:{armorId:"trench",intel:1},bondId:"kuroda"},{id:"veteran",name:"自衛隊退役",tagline:"你離開部隊，卻沒有離開戰場。",description:"你待過災害派遣、待過離島警戒。你學會在噪音裡分辨腳步、在黑暗裡保持呼吸。戰爭結束了，你的身體還沒。",statBonus:{strength:1,constitution:1},feature:"戰術：AC +1。",start:{flags:["background_tactics"]},bondId:"makabe"},{id:"urchin",name:"無戶籍街童",tagline:"城市不是你的家，但你比誰都熟。",description:"你沒有戶籍，沒有畢業證書，只有一群同樣被漏掉的人。你學會睡在監視器照不到的地方，也學會不留下名字。",statBonus:{dexterity:1,wisdom:1},feature:"生存直覺：初始警戒指數 -8，潛伏時額外降低警戒指數。",start:{heat:-8,flags:["streetwise"]},bondId:"hoshino"}],nc=new Map(Ds.map(t=>[t.id,t])),Ku=[{id:"mio",name:"水島澪",relation:"妹妹・19",category:"family",pronoun:"她",description:"你最後的家人。她以為你在外地工作，每週仍會傳一張晚餐照片給你。"},{id:"minato",name:"神谷湊",relation:"弟弟・16",category:"family",pronoun:"他",description:"還在讀高中的弟弟。他把你當成英雄，每次傳訊息都用同一隻舉著拳頭的貓貼圖。他不知道你正在變成什麼。"},{id:"chihiro",name:"藤原千尋",relation:"母親・46",category:"family",pronoun:"她",description:"她總是把擔心藏進便當裡。便當盒是同一款，用了十年，蓋子上有一道被刀刮出來的白痕。你已經很久沒有回家吃晚飯。"},{id:"soichiro",name:"葛城宗一郎",relation:"父親・52",category:"family",pronoun:"他",description:"沉默的父親。你們最後一次說話是在醫院的走廊上，他說「沒事了」。你沒有問是誰沒事。"},{id:"suzu",name:"雨宮鈴",relation:"祖母・73",category:"family",pronoun:"她",description:"她記得你小時候的每一個夏天，也記得你第一次說謊的那天。她從不拆穿，只是多給你一顆糖。"},{id:"daichi",name:"佐倉大地",relation:"童年好友・27",category:"friend",pronoun:"他",description:"在城市裡開了一間 24 小時便利商店。他總說你小時候替他擋過一輛車。"},{id:"yu",name:"高瀬悠",relation:"高中同學・20",category:"friend",pronoun:"他",description:"你們一起逃過課、打過架、說過要離開這座城市。他留下來了，因為他母親那年病了。你走的時候沒有問過。"},{id:"ken",name:"三浦健",relation:"前同事・31",category:"friend",pronoun:"他",description:"你上一份工作的搭檔。他替你背過一次黑鍋，你一直沒有還。他現在在便利商店打工，見到你會先看你的手。"},{id:"rin",name:"早川凛",relation:"鄰居・24",category:"friend",pronoun:"她",description:"住在你隔壁房的女孩。她會在雨天把傘放在你門口，假裝不是她。你把那句謝謝留到今天還沒說。"},{id:"makabe",name:"真壁透",relation:"自衛隊同袍・29",category:"friend",pronoun:"他",description:"和你一起熬過災害派遣的人。他從不問你為什麼離開，只問你還活著嗎。"},{id:"kotone",name:"白石琴音",relation:"街頭樂手・22",category:"community",pronoun:"她",description:"在車站前唱歌的女孩。你曾在雨裡聽她唱完一整首，卻沒有留下名字。"},{id:"saya",name:"桐生沙耶",relation:"護士・26",category:"community",pronoun:"她",description:"急診室的夜班護士。她見過太多不能說的名字，也知道什麼時候該裝作沒看見。"},{id:"kuga",name:"久我修",relation:"便利商店店長・34",category:"community",pronoun:"他",description:"總是把快過期的飯糰留給你的店長。他說你像一隻淋濕的貓。"},{id:"aoi",name:"小鳥遊葵",relation:"咖啡師・23",category:"community",pronoun:"她",description:"凌晨還開著的咖啡店店員。她記得你每次點的咖啡，也記得你第一次沒有回來的那天。"},{id:"kuroda",name:"黑田鐵平",relation:"黑市仲介・41",category:"community",pronoun:"他",description:"什麼都賣、什麼都不問的男人。他救過你一次，也從此把你當成資產。"},{id:"chishiki",name:"神代千景",relation:"神社巫女・25",category:"community",pronoun:"她",description:"在霧見神社替人除厄的巫女。她說你身上有「不乾淨的線」，卻還是替你綁了御守。"},{id:"soma",name:"相馬遼",relation:"網路編輯・30",category:"community",pronoun:"他",description:"你以前的編輯。他相信真相，也相信點閱率；這兩件事常常打架。談到最後，他會把錄音筆放在桌上，讓你自己決定要不要關。"},{id:"hoshino",name:"星野燈",relation:"流浪少年・17",category:"community",pronoun:"他",description:"在車站地下街睡覺的少年。他替你望過風，也偷過你的錢。"},{id:"kiritani",name:"桐谷硯",relation:"地下樂團鼓手・21",category:"community",pronoun:"他",description:"你以前的團員。他總說你的歌太安靜，卻每一場都站在最前面。"}],$_=new Map(Ku.map(t=>[t.id,t]));function z_(t,e,n){const i={E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0},a={};for(const d of Ds)a[d.id]=0;t.forEach((d,h)=>{const p=tc(e[h]??"")?.options[d];if(!p)return;const _=p.axes?.length?p.axes:[p.axis];for(const y of _)i[y]=(i[y]??0)+1;for(const y of p.backgrounds)a[y]=(a[y]??0)+1});const r=(d,h)=>i[d]===i[h]?n()%2===0?d:h:i[d]>i[h]?d:h,s=[r("E","I"),r("S","N"),r("T","F"),r("J","P")].join(""),o=Math.max(...Object.values(a)),l=Object.keys(a).filter(d=>a[d]===o),c=l[n()%l.length]??"store";return{mbti:s,backgroundId:c}}const xs=72,H_=3,G_=1e4;function Ns(){return{strength:0,dexterity:0,intelligence:0,constitution:0,wisdom:0,charisma:0}}function Ju(){return{codename:"鴉",codenameEn:"",gender:"unspecified",avatar:null,ultimateId:"edge",ultimateName:"絕影一閃",ultimateNameEn:"SEVERING FLASH",stats:Ns(),abilityId:"core_array",skills:[],coreEpithet:"未登錄的迴路",mainStat:"strength",mbti:"ISTJ",backgroundId:"store",manifested:[],armorId:"jacket",hp:10,maxHp:10,encroachment:10,marks:0,heat:0,intel:0,surveillance:0,evidence:!1,killsNormal:0,killsOverman:0,collapse:0,wanted:!1,wantedAt:0,reviveUsed:!1,flags:{}}}function dr(t){return{version:1,phase:"title",seed:t,rngCount:0,hour:0,cityId:"shinminato",districtId:"station",creation:{step:"questions",questionIndex:0,questionIds:[],answers:[],mbti:"ISTJ",backgroundId:"store",codename:"",codenameEn:"",gender:"unspecified",avatar:null,ultimateId:null,ultimateChoices:[],ultimateName:"",ultimateNameEn:"",stats:Ns(),abilityChoices:[],abilityId:null,mainStat:null,coreEpithet:"未登錄的迴路",cityId:"shinminato",rolled:!1,selected:!1},player:Ju(),bonds:[],rivals:[],log:[],stance:"lie_low",contactTarget:null,speed:0,pending:null,eventsDone:[],ending:null,endingCombo:null,endingText:null,endingMemory:0,randomNextHour:6,manifestOffers:[],battle:null,lastRoll:null,startedAt:0}}const V_=["OBSIDIAN","NIGHTFALL","HOLLOW","CROWNLESS","ASHEN","RED","ABYSSAL","THIRTEENTH","BROKEN","FINAL","GODBURIED","SILENT","CRIMSON","ZERO","PALE","LAST"],W_=["ORACLE","SEAL","SAINT","PILGRIM","WRAITH","ECLIPSE","MESSIAH","SEAT","GAZER","SIGNAL","HALO","PSALM","CROWN","VESSEL","WITNESS","REQUIEM"];function ur(t){return`${Sn(t,V_)} ${Sn(t,W_)}`}const X_=["蝕目的觀測者","替神明收屍的第九人","空禱的聖女","黑帳的拾骨者","末日赴約者","零度聖骸","空席的偽神","末路的鏽刃","終末冠者","雨夜數屍者","無影十三席","弒神信徒","絕望觀測者","退貨救世主","末日醒者","非人怪物"];function Qu(t){const e={};for(const n of Object.keys(Ns()))e[n]=R_(t);return e}const q_=["零時","灰燼","第七","無名","終末","逆鱗","血月","虛數","神葬","空白"],Y_=["斷界","灰雨","城塞","交換","焚身","重力井","逆行","殘響","王座","一閃"],Z_=["ZERO","ASHEN","SEVENTH","NAMELESS","TERMINAL","BLOOD","IMAGINARY","GODBURIED","HOLLOW","LAST"],K_=["EDGE","RAIN","AEGIS","EXCHANGE","BRAND","WELL","REVERSAL","ECHO","THRONE","FLASH"];function J_(t){const e=C_(t,qu).slice(0,3),n=new Set,i=new Set;return e.map((a,r)=>{let s=`${Sn(t,q_)}・${Sn(t,Y_)}`,o=`${Sn(t,Z_)} ${Sn(t,K_)}`;for(;n.has(s);)s=`${s}・${r+1}`;for(;i.has(o);)o=`${o} ${r+1}`;return n.add(s),i.add(o),{id:a.id,name:s,en:o}})}function Us(t,e){const n=Qu(t),i=Tl.filter(c=>c.id!==e),a=Sn(t,i.length?i:Tl),r=Hu(`${t.seed}:${a.id}`)%999+1,s=`${Sn(t,d_)}${Sn(t,u_)}・第${r}相`,o=Sn(t,mr),l=t.creation;t.creation={step:"roll",questionIndex:l.questionIds?.length??10,questionIds:l.questionIds??[],answers:l.answers??[],mbti:l.mbti||"ISTJ",backgroundId:l.backgroundId||"store",codename:l.codename||Sn(t,X_),codenameEn:l.codenameEn||ur(t),gender:l.gender??"unspecified",avatar:l.avatar??null,ultimateId:null,ultimateChoices:J_(t),ultimateName:"",ultimateNameEn:"",stats:n,abilityChoices:[],abilityId:a.id,mainStat:null,coreEpithet:s,cityId:o.id,rolled:!0,selected:!1},t.bonds=eh(t)}function Q_(t,e){if(t.phase!=="creation"||t.creation.step!=="questions")return;const n=tc(t.creation.questionIds[t.creation.questionIndex]??"");if(!n||!n.options[e])return;if(t.creation.answers=[...t.creation.answers??[],e],t.creation.answers.length<t.creation.questionIds.length){t.creation.questionIndex=t.creation.answers.length;return}const i=z_(t.creation.answers,t.creation.questionIds,()=>on(t,0,999));t.creation.mbti=i.mbti,t.creation.backgroundId=i.backgroundId,Us(t)}function ju(t){t.creation.step="questions",t.creation.questionIndex=0,t.creation.questionIds=Zu(),t.creation.answers=[],t.creation.mbti="ISTJ",t.creation.backgroundId="store",t.creation.abilityId=null,t.creation.rolled=!1,t.creation.stats=Ns(),t.bonds=[]}function eh(t){const e=nc.get(t.creation.backgroundId)??Ds[0],n=[],i=(s,o)=>{const l=$_.get(s);return l?{...l,level:Math.max(1,Math.min(5,o)),alive:!0,lastContact:-20}:null},a=i(e.bondId,on(t,2,3)+1);a&&n.push(a);for(const s of["family","friend","community"]){if(n.length>=3)break;if(n.some(d=>d.category===s))continue;const o=Ku.filter(d=>d.category===s&&!n.some(h=>h.id===d.id));if(!o.length)continue;const l=Sn(t,o),c=i(l.id,on(t,1,3));c&&n.push(c)}const r=(t.creation.mbti?.[0]??"I")==="E";for(const s of n)r&&(s.category==="friend"||s.category==="community")&&(s.level=Math.min(5,s.level+1)),!r&&s.category==="family"&&(s.level=Math.min(5,s.level+1));return n.sort((s,o)=>{const l={family:0,friend:1,community:2};return l[s.category]-l[o.category]})}function th(t,e){return t.bonds.find(n=>n.alive&&n.category===e)??null}function j_(t){t.creation.stats=Qu(t),t.creation.rolled=!0}function eb(t,e){t.creation.mainStat=e}function nh(t){const e=t.creation;if(!e.abilityId)return;const n=gr.get(e.cityId)??mr[0],i=Ea.get(e.abilityId),a=nc.get(e.backgroundId)??Ds[0],r=e.mainStat??Object.keys(e.stats).sort((h,u)=>e.stats[u]-e.stats[h])[0],s={...e.stats};for(const[h,u]of Object.entries(a.statBonus))s[h]=Math.min(20,s[h]+(u??0));s[r]=Math.min(20,s[r]+2);const o=S_(),l=Math.max(6,10+Ta(s.constitution+(i.statBonus.constitution??0))+o.maxHp),c=t.bonds.length?t.bonds:eh(t),d={};for(const h of a.start.flags??[])d[h]=!0;t.cityId=n.id,t.districtId="station",t.hour=0,t.player={...Ju(),codename:e.codename.trim()||"鴉",codenameEn:(e.codenameEn??"").trim()||ur(t),gender:e.gender??"unspecified",avatar:e.avatar??null,ultimateId:e.ultimateId??"edge",ultimateName:e.ultimateName||"絕影一閃",ultimateNameEn:e.ultimateNameEn||"SEVERING FLASH",stats:s,abilityId:i.id,coreEpithet:e.coreEpithet,mainStat:r,mbti:e.mbti||"ISTJ",backgroundId:a.id,manifested:[],armorId:a.start.armorId??"jacket",hp:l,maxHp:l,skills:bs(`${t.seed}:${e.codename.trim()||"鴉"}:${t.rngCount}`,4,Xu(i.id,[r])),encroachment:Math.max(0,Math.min(200,on(t,8,16)+(a.start.encroachment??0)-o.encroachment)),heat:Math.max(0,Math.min(100,a.start.heat??0)),marks:0,intel:(a.start.intel??0)+o.intel,surveillance:0,flags:d},t.bonds=c,t.rivals=f_.map(h=>({...h})),t.phase="play",t.stance="lie_low",t.contactTarget=c[0].id,t.log=[],t.eventsDone=[],t.ending=null,t.endingText=null,t.pending={id:"opening"},t.randomNextHour=on(t,5,8),t.manifestOffers=[],t.speed=1,t.startedAt=Date.now(),Be(t,"story",`Project Ignis 第七次選別開始。城市：${n.name}。存活條件：活到閉幕。`),Be(t,"story",`顯現真名：〈${e.coreEpithet}〉。MBTI：${t.player.mbti}。背景：${a.name}。`),Be(t,"story",`背景特典：${a.feature}`)}function qi(t){return gr.get(t.cityId)??mr[0]}function wa(t){return Ea.get(t.player.abilityId)??Ea.get("core_array")}function Rl(t){return(t.player.manifested??[]).map(e=>Ea.get(e)).filter(e=>!!e)}function vr(t){return[wa(t),...Rl(t)]}function bi(t){const e=new Set;for(const n of vr(t))for(const i of n.tags)e.add(i);return e}function xa(t,e){const n=t.player.stats[e]??10;let i=0;for(const a of vr(t))i+=a.statBonus[e]??0;return Math.min(24,n+i)}function Mn(t,e){return Ta(xa(t,e))}function Gi(t){const e=t.player.encroachment;return e>=160?4:e>=120?3:e>=90?2:e>=60?1:0}const tb=new Set(["flash","shell","thunder","beast","limit","core_combat","core_variable","core_focus"]);function nb(t){return vr(t).some(e=>tb.has(e.id))}function Ka(t){return nb(t)?7:6}function Fi(t){return _s[Math.min(7,Math.max(0,Math.floor(t)))]}function ib(t){const e=Gi(t);return e>0?`顯現增幅 +${e}`:"顯現增幅 ±0"}function ab(t){return lr.get(t.player.armorId)??lr.get("jacket")}function ri(t){const e=ab(t);let n="dexterity",i=0,a=0;for(const l of vr(t))l.acStat&&(n=l.acStat),i+=l.acBonus??0,a+=l.acCapBonus??0;t.player.flags?.background_tactics&&(i+=1);const r=Mn(t,n),s=e.dexCap+a,o=Math.min(r,s);return{value:e.base+o+i,armor:e,stat:n,statMod:r,usedMod:o,cap:s,abilityBonus:i}}function rb(t){const e=ri(t);return`${e.armor.name} ${e.armor.base} + ${vi[e.stat]} ${e.usedMod>=0?"+":""}${e.usedMod} + 顯現 ${e.abilityBonus} = AC ${e.value}`}function ih(t,e,n){const i=lr.get(e);i&&(t.player.armorId=e,Be(t,"system",`${n??"更換護甲"}：${i.name}（AC 基礎 ${i.base}，敏捷上限 ${i.dexCap}）。`))}function ah(t,e,n,i){const a=ri(t),r=kt(t),s=r+e;r===20||r!==1&&s>=a.value?(Be(t,"danger",`${i}：d20 ${r} + ${e} = ${s} ≥ AC ${a.value}，命中。`),en(t,n,i)):Be(t,"action",`${i}：d20 ${r} + ${e} = ${s} < AC ${a.value}，攻擊被護甲與步伐避開。`)}function sb(t){const e=new Set([t.player.abilityId,...t.player.manifested??[]]),n=Fu.filter(r=>!e.has(r.id)),i=[],a=[...n];for(;i.length<3&&a.length;){const r=on(t,0,a.length-1);i.push(a[r].id),a.splice(r,1)}return t.manifestOffers=i,i}function ob(t,e){return qi(t).stat===e?1:0}function lb(t){return t>=100?{label:"暴走",tone:"monster",index:5}:t>=90?{label:"崩壞",tone:"critical",index:4}:t>=70?{label:"臨界",tone:"danger",index:3}:t>=40?{label:"侵蝕",tone:"warn",index:2}:t>=20?{label:"不安定",tone:"uneasy",index:1}:{label:"穩定",tone:"stable",index:0}}function rh(t,e){return e?t>=90?"立即逮捕":t>=70?"指名手配":t>=45?"列管對象":t>=20?"被注意到":"尚未入檔":t>=60?"謠言四起":t>=35?"有人報警":t>=15?"街頭耳語":"無聲"}function Be(t,e,n){t.log.push({hour:t.hour,kind:e,text:n}),t.log.length>160&&(t.log=t.log.slice(-160))}function He(t,e,n,i,a=0,r=!1){const s=kt(t),o=Mn(t,e),l=ob(t,e);let c=0;(e==="constitution"||e==="charisma")&&t.player.encroachment>=80&&(c=t.player.encroachment>=100?-4:-2),t.player.encroachment>=100&&e==="intelligence"&&(c-=1);const d=s+o+a+l+c,h=s===20,u=s===1,p=h||!u&&d>=n,_=`${i}：d20 ${s} ${o>=0?"+":""}${o}${a?` ${a>=0?"+":""}${a}`:""}${l?` +${l}城市`:""}${c?` ${c}侵蝕`:""} = ${d} / DC ${n} ─ ${p?"成功":"失敗"}`;return t.lastRoll={label:i,roll:s,statMod:o,extra:a+l+c,total:d,dc:n,success:p,nat20:h,nat1:u},r||Be(t,h?"story":p?"roll":"danger",_),{ok:p,roll:s,total:d,dc:n,statMod:o,extra:a+l+c,nat20:h,nat1:u,line:_}}function ks(t){const e=[["strength",xa(t,"strength")],["dexterity",xa(t,"dexterity")],["intelligence",xa(t,"intelligence")]];return e.sort((n,i)=>i[1]-n[1]),e[0][0]}function _r(t){return Math.max(0,...vr(t).map(e=>e.combat))+Gi(t)}function Tt(t,e,n){if(e<=0)return;const i=e*H_;t.player.marks+=i,Be(t,"action",`${n} 刻印 +${i}（${t.player.marks}）。`)}function z(t,e,n){if(e===0)return;let i=e;e>0&&(i=Math.ceil(e*qi(t).heatMod*(bi(t).has("beast")?1.15:1))),t.player.heat=Vi(t.player.heat+i,0,100),n&&Be(t,i>0?"danger":"action",`${n} 警戒指數 ${i>0?"+":""}${i}（${t.player.heat}）。`),t.player.heat>=100&&!t.player.wanted&&t.hour>=48&&(t.player.wanted=!0,t.player.wantedAt=t.hour)}function ye(t,e,n){if(e===0)return;const i=t.player.encroachment;t.player.encroachment=Vi(t.player.encroachment+e,0,200),n&&Be(t,e>0?"danger":"bond",`${n} 侵蝕 ${e>0?"+":""}${e}（${i} → ${t.player.encroachment}）。`);for(const a of[60,90,120,160])i<a&&t.player.encroachment>=a&&Be(t,"danger",`侵蝕率突破 ${a}%。顯現增幅提升（+${Gi(t)}）：你的力量變得更清楚，也更不像人。`);i<100&&t.player.encroachment>=100&&Be(t,"danger","侵蝕率突破 100%。你聽見自己的名字被某種東西咬碎。")}function jt(t,e,n){const i=e??wa(t).cost+(t.player.manifested?.length??0);return ye(t,i,n??`發動「${wa(t).name}」`),i}function ce(t,e,n){if(e<=0)return;const i=bi(t).has("intel")?1:0;t.player.intel+=e+i,Be(t,"action",`${n??"取得情報"} 情報 +${e+i}（${t.player.intel}）。`)}function en(t,e,n){if(!(e<=0)){if(t.player.hp-e<=0&&bi(t).has("revive")&&!t.player.reviveUsed){t.player.reviveUsed=!0,t.player.hp=3,t.player.encroachment=Vi(t.player.encroachment+8,0,200),Be(t,"danger",`${n} 肉體歸零。再生顯現強行把你拼回來（HP 3／侵蝕 +8）。`);return}t.player.hp=Vi(t.player.hp-e,0,t.player.maxHp),Be(t,"danger",`${n} 肉體 -${e}（${t.player.hp}/${t.player.maxHp}）。`),t.player.hp<=0&&t.phase==="play"&&sn(t,"dead")}}function Si(t,e,n){if(e<=0)return;const i=t.player.hp;t.player.hp=Vi(t.player.hp+e,0,t.player.maxHp),t.player.hp!==i&&Be(t,"action",`${n??"包紮傷口"} 肉體 +${t.player.hp-i}（${t.player.hp}/${t.player.maxHp}）。`)}function hr(t,e,n){const i=t.bonds.find(r=>r.id===e);if(!i||!i.alive)return;const a=i.level;i.level=Vi(i.level+n,1,5),i.level!==a&&Be(t,n>0?"bond":"danger",`${i.name} 的羈絆 ${n>0?"+":""}${i.level-a}（${i.level}）。`)}function Vn(t){return t.bonds.filter(e=>e.alive).reduce((e,n)=>e+n.level,0)}function br(t,e){const n=t.bonds.find(r=>r.id===e);if(!n||!n.alive)return"那條線已經斷了。";if(t.hour-n.lastContact<6)return`${n.name} 才剛掛上電話。再打一次，只會讓對方更擔心。`;const i=8+n.level*2+(bi(t).has("bond")?4:0)+(t.player.flags?.resonance?2:0);n.lastContact=t.hour,ye(t,-i,`與${n.name}說話`),hr(t,e,1),t.player.surveillance+=3,t.player.heat=Vi(t.player.heat+1,0,100),t.player.encroachment>=80?Be(t,"bond",`${n.name} 在電話那頭沉默很久。「你的聲音……聽起來不太一樣。」`):Be(t,"bond",`${n.name} 的聲音把你從懸崖邊拉回來一點。`),t.player.surveillance>=9&&Be(t,"danger","裏八咫注意到你仍與外界保持聯繫。");const a=["你們聊了一些沒有用的話。你發現自己一直在聽。",`「你那邊還好嗎？」${n.name}問。你說還好。`,`${n.name}講了一件很小的事，你笑了。笑完才想起自己在什麼地方。`,"通話很短。掛斷之後，你多站了一會兒。"][(t.hour+n.level)%4];return`你與${n.name}短暫地回到了原本的世界。侵蝕 -${i}。

${a}`}function si(t){const e=[{name:t.player.codename,marks:t.player.marks,you:!0},...t.rivals.filter(i=>i.status==="active").map(i=>({name:i.name,marks:i.marks,you:!1}))].sort((i,a)=>a.marks-i.marks);return{rank:e.findIndex(i=>i.you)+1,total:e.length,list:e}}function sn(t,e){if(t.phase==="ending")return;t.phase="ending",t.ending=e;const n=I_(t,e);t.endingCombo=n.id,t.endingText=D_(t,n),t.endingMemory=Math.max(1,1+Math.floor(t.player.marks/50)+(e==="throne"?3:0)+(t.player.killsOverman>=2?1:0)),x_(t.endingMemory),N_(n.id),t.pending=null,t.speed=0}function Vi(t,e,n){return Math.max(e,Math.min(n,t))}const Cl=3,Ss=3,cb={card_strike:{id:"card_strike",name:"攻擊",kind:"attack",cost:1,power:4,hint:"傷害 4"},card_guard:{id:"card_guard",name:"防禦",kind:"guard",cost:1,power:4,hint:"格擋 4"},card_move:{id:"card_move",name:"移動",kind:"move",cost:0,power:0,hint:"抽 1 張"},card_power:{id:"card_power",name:"顯現",kind:"power",cost:2,power:8,hint:"傷害 8・侵蝕 +8"},card_ultimate:{id:"card_ultimate",name:"必殺",kind:"ultimate",cost:3,power:12,hint:"傷害 12・無視格擋・每場一次",once:!0},card_escape:{id:"card_escape",name:"撤退",kind:"escape",cost:0,power:0,hint:"離開這場不可能的戰鬥"}};function db(t){return t.cards||(t.cards={deck:[],hand:[],discard:[],energy:Ss,block:0,played:[]}),t.cards}function sh(t){return cb[t]??{id:t,name:t,kind:"skill",cost:1,power:2,hint:""}}function ub(t){const n=["card_strike","card_strike","card_guard","card_guard","card_move","card_power",...(t.player.skills??[]).slice(0,4)];return oh(n,()=>kt(t))}function oh(t,e){const n=[...t];for(let i=n.length-1;i>0;i--){const a=Math.abs(e())%(i+1);[n[i],n[a]]=[n[a],n[i]]}return n}function hb(t){const e=t.battle;if(!e)return;const n=e.enemies.some(i=>i.unbeatable);e.cards={deck:n?["card_escape","card_escape","card_escape","card_escape"]:ub(t),hand:[],discard:[],energy:Ss,block:0,played:[]},e.phase="action",e.awaiting=!0,e.round=1;for(const i of e.enemies)i.maxHp=i.maxHp*2,i.hp=i.maxHp,i.block=0,i.alive&&Ll(t,i);ic(t,Cl),e.log.push({text:`遭遇開始。手牌 ${Cl} 張，能量 ${Ss}。`,tone:"neutral"})}function Ll(t,e){const n=kt(t),i=Math.max(3,(e.damage??2)*2+1);if(e.unbeatable){e.intentInfo={kind:"unbeatable",value:99,label:"不可能"};return}if(n>=19){e.intentInfo={kind:"guard",value:5,label:"架勢・格擋 5"};return}if(n>=16){e.intentInfo={kind:"charge",value:i+3,label:`蓄力・下回合 ${i+3}`};return}e.intentInfo={kind:"attack",value:i,label:`攻擊 ${i}`}}function ic(t,e){const n=t.battle;if(!n)return;const i=db(n);for(let a=0;a<e;a++){if(i.deck.length===0){if(i.discard.length===0)return;i.deck=oh(i.discard,()=>kt(t)),i.discard=[]}const r=i.deck.pop();r&&i.hand.push(r)}}function lh(t){return t.enemies.find(e=>e.alive)??null}function jr(t,e,n=!1){const i=t.battle,a=i?lh(i):null;if(!i||!a)return 0;let r=e;if(!n&&(a.block??0)>0){const s=Math.min(a.block??0,r);a.block=(a.block??0)-s,r-=s}return a.hp=Math.max(0,a.hp-r),a.hp<=0&&(a.alive=!1,i.log.push({text:`${a.name} 倒下了。`,tone:"good"})),r}function fb(t,e){const n=t.battle;if(!n||n.status!=="active"||!n.cards)return;const i=n.cards,a=i.hand[e];if(!a)return;const r=sh(a);if(r.kind==="ultimate"&&i.played.includes(a))return;if(i.energy<r.cost){n.log.push({text:"能量不足。",tone:"bad"});return}i.hand.splice(e,1),i.energy-=r.cost,i.played.push(a);const s=lh(n);if(s){if(r.kind==="escape"){n.status="escaped",n.phase="resolved",n.result=`你沒有回頭。

身後的腳步聲停了半拍，然後又開始。

但這一次，它沒有跟上你。`,n.reward=n.reward??"kanda_escape";return}if(r.kind==="guard")i.block+=r.power,n.log.push({text:`防禦。格擋 ${i.block}。`,tone:"neutral"});else if(r.kind==="move")ic(t,1),n.log.push({text:"移動。抽 1 張。",tone:"neutral"});else if(r.kind==="power"){const o=Math.floor((t.player.encroachment??0)/40),l=r.power+o*2+Mn(t,"wisdom");ye(t,8,"在戰鬥中發動顯現"),jr(t,l,!0),n.log.push({text:`顯現。傷害 ${l}，侵蝕 +8。`,tone:"danger"})}else if(r.kind==="ultimate")jr(t,r.power+Mn(t,"strength"),!0),n.log.push({text:`必殺。傷害 ${r.power}，無視格擋。`,tone:"danger"});else if(r.kind==="skill"){const o=Is.get(a),l=o?.power??2,c=o?.stat??"strength",d=l*2+Mn(t,c);jr(t,d),o?.effect==="guard"&&(i.block+=2),o?.effect==="heal"&&(t.player.hp=Math.min(t.player.maxHp,t.player.hp+2)),o?.effect==="drain"&&(t.player.hp=Math.min(t.player.maxHp,t.player.hp+1)),o?.effect==="expose"&&s&&(s.block=0),n.log.push({text:`${r.name}。傷害 ${d}。`,tone:"good"})}else jr(t,r.power+Mn(t,"strength")),n.log.push({text:`攻擊。傷害 ${r.power}。`,tone:"good"});n.enemies.some(o=>o.alive)||mb(t)}}function pb(t){const e=t.battle;if(!e||e.status!=="active"||!e.cards)return;const n=e.cards;for(const i of e.enemies){if(!i.alive||!e.status||e.status!=="active")continue;const a=i.intentInfo??{kind:"attack",value:2};if(i.unbeatable){e.log.push({text:"神田沒有攻擊。他只是在等。",tone:"danger"}),Ll(t,i);continue}if(a.kind==="guard")i.block=(i.block??0)+a.value,e.log.push({text:`${i.name}：架勢。`,tone:"neutral"});else if(a.kind==="charge"){e.log.push({text:`${i.name}：蓄力。`,tone:"danger"}),i.intentInfo={kind:"attack",value:a.value,label:`重擊 ${a.value}`};continue}else{let r=a.value;const s=Math.min(n.block,r);n.block-=s,r-=s,r>0?(t.player.hp=Math.max(0,t.player.hp-r),e.log.push({text:`${i.name}命中。你受 ${r} 點傷害。`,tone:"bad"})):e.log.push({text:`${i.name}的攻擊被格擋。`,tone:"good"})}if(Ll(t,i),t.player.hp<=0){gb(t);return}}n.discard.push(...n.hand),n.hand=[],n.block=0,n.energy=Ss,e.round+=1,ic(t,Cl),n.hand.length||e.log.push({text:"牌堆與棄牌堆都空了。",tone:"bad"})}function mb(t){const e=t.battle;e&&(e.status="won",e.phase="resolved",e.result="對手倒下了。你的手還在抖，但不是因為恐懼。")}function gb(t){const e=t.battle;e&&(e.status="lost",e.phase="resolved",e.result="你倒了下去。視野邊緣變成黑色。",e.endingOnLoss=e.endingOnLoss??"dead")}const kn={kurokawa:{key:"kurokawa",name:"黑川巌",title:"絞肉機・肉體強化",portrait:"kurokawa",hp:7,ac:13,attack:7,damage:2,speed:6,ultimateName:"斷骨絞刑",ultimateEn:"BONE GALLOWS",ultimateDamage:4},thug:{key:"thug",name:"路人",title:"被捲入的普通人",portrait:"thug",hp:3,ac:11,attack:5,damage:1,speed:0},ayase:{key:"ayase",name:"綾瀬凍",title:"玻璃聖母・結晶",portrait:"ayase",hp:6,ac:15,attack:6,damage:2,speed:6,ultimateName:"絕對零域",ultimateEn:"ABSOLUTE ZERO",ultimateDamage:3},shard:{key:"shard",name:"冰晶殘影",title:"被留下來的結晶",portrait:"shard",hp:3,ac:14,attack:4,damage:1,speed:4},crown:{key:"crown",name:"王冠",title:"最終首領・侵蝕率 100%",portrait:"crown",hp:10,ac:17,attack:10,damage:3,speed:7,ultimateName:"終末冠冕",ultimateEn:"TERMINAL CORONATION",ultimateDamage:5},crownShard:{key:"crownShard",name:"王冠的結晶",title:"會自己尋找獵物的碎片",portrait:"crownShard",hp:4,ac:14,attack:6,damage:1,speed:3},kanda:{key:"kanda",name:"神田隼人",title:"最強對手・刑警",portrait:"kanda",hp:999,ac:24,attack:99,damage:3,speed:0,unbeatable:!0}},vb={kurokawa:{enemies:[kn.kurokawa,kn.thug,kn.thug],reward:"kurokawa",intro:["鐵鍊在手裡繞了兩圈。","「代號，」他說，「『鐵血縛鎖』。」","兩個路人被他從人群裡推出來，一個堵住巷口，一個被迫爬上防火梯。","「真名？等我覺得你有資格知道，再講。」","他笑得很開心。"].join(`

`)},ayase:{enemies:[kn.ayase,kn.shard,kn.shard],reward:"ayase",intro:["她沒有立刻動手。","「冰棺聖母。」","她把手套拉緊，讓空氣中的水氣凝成三片薄冰。","「你可以用這個代號記住我。真名不是給陌生人聽的。」","「我給過你機會。」"].join(`

`)},crown:{enemies:[kn.crown,kn.crownShard,kn.crownShard],reward:"crown",final:!0,intro:["他站在浮起的貨櫃之間。","「終末冠者。」","兩塊結晶從他的身體剝落，落地後自己站了起來。","「這是我給世界的最後一個代號。來吧，讓我看看人類能走到哪裡。」"].join(`

`)},kanda:{enemies:[kn.kanda],reward:null,endingOnLoss:"caught",unbeatable:!0,final:!0,intro:["神田把傘靠在牆邊。","他抬起手，一把漆黑的劍刃從天而降，穩穩落進掌心。","「我討厭打架。」","他看了一眼手錶。","「所以我不會花太久。」"].join(`

`)}};function Ht(t){return t.enemies.filter(e=>e.alive)}function Oe(t,e,n="neutral"){t.battle?.log.push({text:e,tone:n}),(t.battle?.log.length??0)>48&&(t.battle.log=t.battle.log.slice(-48))}function Rn(t,e,n){const i=t.battle;if(i){if(i.shield>0){const a=Math.min(i.shield,e);if(i.shield-=a,e-=a,Oe(t,`絕對城塞吸收 ${a} 點傷害。${i.shield>0?`剩餘護盾 ${i.shield}。`:"護盾碎裂。"}`,"good"),e<=0)return}t.player.hp=Math.max(0,t.player.hp-e),Oe(t,`${n} 肉體 -${e}（${t.player.hp}/${t.player.maxHp}）。`,"danger"),t.player.hp<=0&&Mb(t,`你倒了下去。

視野邊緣變成黑色，最後一個聲音是自己心跳停下來的回音。`)}}function ii(t,e,n,i){const a=t.battle;if(!(!a||e.unbeatable||!e.alive)&&(e.hp=Math.max(0,e.hp-n),Oe(t,`${i} ${e.name} -${n}（${e.hp}/${e.maxHp}）。`,"good"),e.hp<=0)){e.alive=!1,Oe(t,`${e.name} 倒下了。`,"good");const r=Ht(a)[0];r&&(a.targetId=r.id),Ht(a).length||yr(t)}}function _b(t,e){const n=t.battle;if(!n||n.status!=="active"||!e.alive)return;if(e.unbeatable){Rn(t,3,`${e.name}甚至沒有認真。`);return}if(e.ultimateName&&!e.ultimateUsed&&e.hp<=Math.ceil(e.maxHp/2)){e.ultimateUsed=!0;const f=kt(t),T=ri(t).value+n.guard,D=f+e.attack+3;f===20||D>=T?(n.guard=0,n.combo=0,Rn(t,e.ultimateDamage??4,`${e.name}展開必殺奧義「${e.ultimateName}」。d20 ${f} + ${e.attack} + 3 ≥ AC ${T}。CHAIN 中斷。`)):Oe(t,`${e.name}的必殺奧義「${e.ultimateName}」落空。d20 ${f} + ${e.attack} + 3 < AC ${T}。`,"good");return}const i=(n.playerPlot??0)===0?0:Math.abs((e.plot??0)-(n.playerPlot??0)),a=Aa(e.skills).filter(f=>f.power>0),r=e.intent?a.find(f=>f.name===e.intent):null,s=r?{skill:r}:a.map(f=>({skill:f,reach:f.style==="melee"?1:f.style==="ranged"?2:f.range})).filter(({reach:f})=>i<=f).sort((f,T)=>T.skill.power-f.skill.power)[0];if(!s){Oe(t,`${e.name}找不到能穿過間合的攻擊角度。`,"good");return}const o=s.skill,l=kt(t),c=e.plot??0;if(c>0&&l<=c){Oe(t,`${e.name}的${o.name}快到失控。d20 ${l} ≤ 宣告速度 ${c}，fumble。`,"good");return}const h=Ta(o.stat==="strength"?e.strength:e.dexterity),u=e.attack+h+(o.style==="melee"?Math.max(0,(e.plot??0)-(n.playerPlot??0)):0),p=ri(t).value+n.guard,_=l+u;if(!(l===20||l!==1&&_>=p)){Oe(t,`${e.name}的${o.name}落空。d20 ${l} + ${u} < AC ${p}。`,"good"),n.guard=0;return}n.guard=0,n.combo=0;const g=o.power+Math.floor(h/3);Rn(t,Math.max(1,g),`${e.name}使出${o.name}（${o.style==="melee"?"STR":"DEX"}）。d20 ${l} + ${u} ≥ AC ${p}。CHAIN 中斷。`)}function bb(t){const e=t.battle;if(!e||e.status!=="active"||e.phase!=="action"||!e.awaiting||e.overdrive<3)return;const n=e.enemies.find(a=>a.id===e.targetId&&a.alive)??Ht(e)[0];if(!n)return;e.awaiting=!1,e.overdrive=0;const i=6+Math.min(3,e.combo)+(n.broken?2:0);e.combo=0,e.selectedSkill=null,ii(t,n,i,`OVERDRIVE 終結。你把三格爆發壓進一擊，${n.name}正面承受。`),e.status==="active"&&(e.queueIndex+=1,Pa(t))}function yb(t,e){const n=t.battle;!n||n.status!=="active"||n.phase!=="action"||!n.awaiting||Is.has(e)&&(n.selectedSkill=n.selectedSkill===e?null:e)}function xb(t,e,n){const i=t.battle;if(!i||i.status!=="active"||i.phase!=="action"||!i.awaiting)return;const a=Is.get(e);if(!a)return;const r=i.enemies.find(g=>g.id===(n??i.targetId)&&g.alive)??Ht(i)[0];if(!r){yr(t);return}n&&(i.targetId=r.id),i.selectedSkill=null;const s=(r.plot??0)===0?0:Math.abs((i.playerPlot??0)-(r.plot??0)),o=(r.plot??0)===0||a.style==="support"&&a.power===0&&a.range===0?99:a.style==="melee"?1:a.style==="ranged"?2:a.range;if(s>o){Oe(t,`${a.name}的射程不足：間合 ${s} > ${o}。`,"bad");return}i.awaiting=!1;const l=a.stat,c=Mn(t,l),d=_r(t),h=kt(t),u=i.playerPlot??0,p=u>0&&h<=u,_=()=>{i.status==="active"&&(i.queueIndex+=1,Pa(t))};if(a.cost>0&&jt(t,a.cost,`使用${a.name}`),p){Oe(t,`${a.name}在速度 ${u} 失控。d20 ${h} ≤ ${u}，fumble。`,"bad"),Rn(t,1,"你被自己的動作甩了出去。"),_();return}if(a.effect==="heal"){const g=t.player.hp;t.player.hp=Math.min(t.player.maxHp,t.player.hp+2),Oe(t,`${a.name}：肉體 +${t.player.hp-g}。`,"good"),_();return}if(a.effect==="guard"){i.guard=3,Oe(t,`${a.name}：本回合 AC +3。`,"good"),_();return}if(a.effect==="momentum"){i.momentum=Math.max(i.momentum,3),Oe(t,`${a.name}：下一擊 +3。`,"good"),_();return}if(a.effect==="expose"){r.plot=Math.max(0,(r.plot??0)-1),Oe(t,`${a.name}：${r.name}的架勢被撕開。`,"good"),_();return}const y=h+c+d+i.momentum;if(i.momentum=0,h===20||h!==1&&y>=r.ac){const g=Math.min(3,i.combo),f=r.broken?2:0,T=a.power+Math.floor(c/3)+(a.effect==="drain"?1:0)+g+f;if(ii(t,r,Math.max(1,T),`${a.name}命中（${l==="strength"?"STR":"DEX"}）。d20 ${h} + ${c} + ${d} = ${y}。`),i.combo=Math.min(5,i.combo+1),Oe(t,`CHAIN ${i.combo}／5。連擊加成 +${Math.min(3,i.combo)} 傷害。`,"good"),r.alive&&!r.broken){const D=s===0?2:1;r.breakGauge+=D,r.breakGauge>=2?(r.breakGauge=0,r.broken=!0,i.overdrive=Math.min(3,i.overdrive+1),Oe(t,`BREAK！${r.name}的架勢被打穿。下一次行動無效，並獲得 1 格 OVERDRIVE。`,"good")):Oe(t,`BREAK ${r.breakGauge}/2。${s===0?"同速命中，額外削減架勢。":""}`,"neutral")}a.effect==="drain"&&i.status==="active"&&(t.player.hp=Math.min(t.player.maxHp,t.player.hp+1),Oe(t,`${a.name}奪回 1 點肉體。`,"good"))}else i.combo=0,Oe(t,`${a.name}落空。d20 ${h} + ${c} + ${d} = ${y} < AC ${r.ac}。CHAIN 中斷。`,"bad");i.status==="active"&&_()}function Sb(t,e){const n=[{id:"player",speed:e.playerPlot??0,tie:kt(t)},...e.allies.filter(i=>i.alive).map(i=>({id:`ally:${i.id}`,speed:i.plot??0,tie:kt(t)})),...Ht(e).map(i=>({id:i.id,speed:i.plot??0,tie:kt(t)}))];n.sort((i,a)=>a.speed-i.speed||a.tie-i.tie||(i.id==="player"?-1:1)),e.queue=n.map(i=>i.id),e.queueIndex=0}function Pa(t){const e=t.battle;if(!e||e.status!=="active")return;let n=0;for(;n++<32&&e.status==="active";){if(!Ht(e).length){yr(t);return}if(e.queueIndex>=e.queue.length){if(e.maxRounds!==null&&e.round>=e.maxRounds){e.status="lost",e.awaiting=!1,e.result=`戰鬥拖得太久。第 ${e.round} 回合結束時，裏八咫的封鎖線已經收緊。

你只能趁監視空隙退出去。沒有刻印，沒有勝利。`,e.reward=null,Be(t,"danger","戰鬥超過回合上限，強制脫離。");return}e.round+=1,e.awaiting=!1,e.phase="plot",e.playerPlot=null;for(const r of Ht(e))r.plot=null;for(const r of e.allies)r.plot=null;return}const i=e.queue[e.queueIndex];if(i.startsWith("ally:")){const r=e.allies.find(o=>`ally:${o.id}`===i&&o.alive);if(e.queueIndex+=1,!r)continue;const s=Ht(e)[0];s&&e.status==="active"&&(s.unbeatable?Oe(t,`${r.name}試著替你擋住神田，但只換來半秒。`,"neutral"):ii(t,s,2,`${r.name}從側面支援，擊中${s.name}。`));continue}if(i==="player"){e.awaiting=!0;return}const a=e.enemies.find(r=>r.id===i);if(e.queueIndex+=1,!(!a||!a.alive)){if(a.broken){a.broken=!1,a.breakGauge=0,Oe(t,`${a.name}仍處於 BREAK 失衡，這回合無法行動。`,"good");continue}_b(t,a)}}}function yr(t){const e=t.battle;!e||e.status!=="active"||(e.status="won",e.awaiting=!1,e.result=Eb(e.reward),Be(t,"story",`戰鬥勝利：${e.enemies.map(n=>n.name).join("、")}。`))}function Mb(t,e){const n=t.battle;!n||n.status!=="active"||(n.status="lost",n.awaiting=!1,n.result=`${e}

${n.endingOnLoss?"你被神田隼人制伏了。":"你勉強保住一口氣，退出了戰場。"}`,Be(t,"danger",`戰鬥失利：${n.enemies.map(i=>i.name).join("、")}。`))}function Eb(t){return t==="kurokawa"?`黑川跪在地上，鐵鍊從手裡滑落。

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

但你已經在他身上留下了記號。`:"對手倒下了。"}function Mi(t,e){const n=vb[e];if(!n)return;const i=Math.max(0,t.player.hp);t.pending=null,t.lastRoll=null,t.player.skills=O_(t.player.skills?.length?t.player.skills:bs(`${t.seed}:${t.player.codename}:${t.rngCount}`));const a=t.bonds.filter(c=>c.alive&&c.level>=6).sort((c,d)=>d.level-c.level)[0],r=a?[{id:`ally-${a.id}`,name:a.name,bondId:a.id,hp:5+Math.min(3,Math.floor(a.level/3)),maxHp:5+Math.min(3,Math.floor(a.level/3)),speed:6,plot:null,alive:!0}]:[],s=["末永","小宮","橋本","阿南","三浦"],o=e==="kanda"?[]:[{id:`civilian-${t.rngCount}`,name:s[t.rngCount%s.length],alive:!0,status:"hiding"}],l={id:`${e}-${t.hour}-${t.rngCount}`,enemies:n.enemies.map((c,d)=>({id:`${c.key}-${d}`,name:c.name,title:c.title,portrait:c.portrait,hp:c.hp,maxHp:c.hp,ac:c.ac,attack:c.attack,damage:c.damage,speed:c.speed,strength:c.strength??c.attack,dexterity:c.dexterity??c.attack,skills:bs(`${t.seed}:${e}:${c.key}:${d}:${t.hour}`,4,k_(e)),ultimateName:c.ultimateName,ultimateEn:c.ultimateEn,ultimateDamage:c.ultimateDamage,ultimateUsed:!1,plot:null,alive:!0,breakGauge:0,broken:!1,intent:null,unbeatable:c.unbeatable})),allies:r,civilians:o,targetId:null,playerSpeed:Ka(t),playerPlot:null,phase:"plot",round:1,queue:[],queueIndex:0,awaiting:!1,guard:0,momentum:0,combo:0,overdrive:0,ultimateUsed:!1,shield:0,log:[{text:n.intro,tone:"danger"}],status:"active",result:null,unbeatable:!!n.unbeatable,introSeen:!1,maxRounds:n.final?null:1+n.enemies.length+r.length+o.length+1,finalBattle:!!n.final,selectedSkill:null,reward:n.reward,endingOnLoss:n.endingOnLoss??null};t.battle=l,l.targetId=Ht(l)[0]?.id??null,t.player.hp=i}function Tb(t){t.battle&&(t.battle.introSeen=!0,hb(t))}function Ab(t,e){const n=t.battle;if(!n||n.phase!=="plot"||n.status!=="active")return;const i=Math.floor(e);i<0||i>n.playerSpeed||(n.playerPlot=i)}function wb(t){const e=t.battle;if(!e||e.phase!=="plot"||e.status!=="active"||e.playerPlot===null)return;for(const a of Ht(e)){const r=Math.max(0,a.speed),s=Math.random();a.plot=r===0?0:Math.min(r,Math.floor(s*(r+1)))}const n=e.playerPlot;for(const a of Ht(e)){const r=n===0?0:Math.abs((a.plot??0)-n),s=Aa(a.skills).filter(o=>o.power>0).map(o=>({skill:o,reach:o.style==="melee"?1:o.style==="ranged"?2:o.range})).filter(({reach:o})=>r<=o).sort((o,l)=>l.skill.power-o.skill.power);a.intent=s[0]?.skill.name??null}for(const a of e.allies)a.plot=0;e.phase="action",e.selectedSkill=null,e.queue=[];const i=[`你 ${e.playerPlot}`,...Ht(e).map(a=>`${a.name} ${a.plot??0}`)].join("／");Oe(t,`速度公開：${i}。`,"neutral");for(const a of Ht(e))a.ultimateName&&!a.ultimateUsed&&a.hp<=Math.ceil(a.maxHp/2)&&Oe(t,`${a.name}的奧義「${a.ultimateName}」開始凝聚。`,"danger");Sb(t,e),e.awaiting=!1,Pa(t)}function Ud(t,e){const n=t.battle;if(!n||n.status!=="active"||!n.awaiting)return;const i=n.enemies.find(a=>a.id===e&&a.alive);i&&(n.targetId=i.id)}function Rb(t,e){const n=t.battle;if(!n||n.status!=="active"||n.phase!=="action"||!n.awaiting)return;const i=n.enemies.find(p=>p.id===n.targetId&&p.alive)??Ht(n)[0];if(!i){yr(t);return}const a=Mn(t,ks(t)),r=_r(t),s=Mn(t,"charisma"),o=Mn(t,"dexterity"),l=Mn(t,"wisdom"),c=n.playerPlot??0,d=Fi(c);n.awaiting=!1;const h=p=>c>0&&p<=c,u=()=>{n.status==="active"&&(n.queueIndex+=1,Pa(t))};if(n.unbeatable){if(e==="talk"){n.status="lost",n.result=`你舉起手。

神田看著你，沒有立刻上前。

「你做得很好。」

「什麼？」

「活到現在。」

他把手銬收起來，改為抓住你的手臂。`,n.endingOnLoss="caught";return}if(e==="flee"){const p=kt(t);if(h(p))Oe(t,`你在 ${d.name} 的速度下失去平衡。d20 ${p} ≤ ${c}。`,"bad"),Rn(t,2,"神田沒有追。他只是等你摔倒。");else if(p+o>=18){n.status="escaped",n.result=`你沒有回頭。

身後的腳步聲停了半拍，然後又開始。

但這一次，它沒有跟上你。`,n.reward="kanda_escape",Oe(t,"你從神田手裡逃了出去。","good");return}else Oe(t,`你試著逃。d20 ${p} + ${o} < DC 18。`,"bad"),Rn(t,3,"神田在巷口等你。");u();return}if(e==="power"){if(bi(t).has("escape")||bi(t).has("fate")){jt(t,10,"在神田面前發動顯現"),n.status="escaped",n.result=`你讓顯現替自己爭取了零點幾秒。

神田的手穿過殘影，抓住一把雨。

你已經不在那裡了。`,n.reward="kanda_escape",z(t,-15,"你從神田手裡脫身");return}Oe(t,"你的顯現在他面前像一張濕掉的紙。","bad"),Rn(t,4,"神田單手扣住你的喉嚨。"),u();return}Oe(t,e==="guard"?"你擺出防禦姿勢。神田沒有急著進攻。":"你的攻擊穿過殘影。神田甚至沒有移動腳步。","neutral"),e!=="guard"&&Rn(t,1,"他等你出手完，才動手。"),u();return}if(e==="strike"){const p=kt(t),_=h(p),y=p+a+r+n.momentum;n.momentum=0,_?(Oe(t,`強攻在 ${d.name} 的速度下失控。d20 ${p} ≤ ${c}，fumble。`,"bad"),Rn(t,1,"你衝過了頭。")):p===20||p!==1&&y>=i.ac?ii(t,i,p===20?3:2,`強攻命中（宣告 ${c}）。d20 ${p} + ${a} + ${r} = ${y}。`):Oe(t,`強攻落空。d20 ${p} + ${a} + ${r} = ${y} < AC ${i.ac}。`,"bad")}else if(e==="probe"){const p=kt(t);h(p)?Oe(t,`試探時失去平衡。d20 ${p} ≤ ${c}。`,"bad"):p+l>=11?(n.momentum=2,Oe(t,"你看清對方的重心。下一擊 +2。","good"),ii(t,i,1,"你抓住空隙，劃出一道淺傷。")):Oe(t,"你看不出破綻。","bad")}else if(e==="guard")n.guard=3,t.player.hp<t.player.maxHp&&(t.player.hp+=1),Oe(t,"你穩住呼吸，把弱點收起來。本回合 AC +3，肉體 +1。","neutral");else if(e==="power"){const p=jt(t),_=kt(t);if(h(_))Oe(t,`顯現把你甩了出去。d20 ${_} ≤ ${c}，fumble。`,"bad"),Rn(t,1,"你自己的速度傷到了自己。");else{const g=bi(t).has("area")?Ht(n):[i];for(const f of g){const T=_+a+r+Gi(t);_===20||T>=f.ac?ii(t,f,3+Math.floor(Gi(t)/2),`顯現命中。d20 ${_} + ${a} + ${r} = ${T}。`):Oe(t,`顯現被 ${f.name} 閃開。d20 ${_} + ${a} + ${r} = ${T}。`,"bad")}}Oe(t,`顯現代價：侵蝕 +${p}。`,"danger")}else if(e==="talk"){const p=kt(t);h(p)?Oe(t,`你說話的速度快過了思考。d20 ${p} ≤ ${c}。`,"bad"):p+s>=13?(n.momentum=1,Oe(t,"你說了幾句話。對方的動作慢了半拍。","good")):Oe(t,"對方沒有興趣聽你說話。","bad")}else if(e==="flee"){const p=kt(t);if(h(p))Oe(t,`你跑得比自己的身體還快。d20 ${p} ≤ ${c}。`,"bad"),Rn(t,1,"你摔了出去。");else if(p+o>=13){n.status="escaped",n.result=`你轉身跑進雨裡。

身後沒有追擊。

至少今晚沒有。`,n.reward="escape";return}else Oe(t,"你沒能拉開距離。","bad")}n.status==="active"&&u()}function Cb(t){const e=t.battle;!e||!e.selectedSkill||xb(t,e.selectedSkill,e.targetId??void 0)}function Lb(t){const e=t.battle;if(!e||e.status!=="active"||e.phase!=="action"||!e.awaiting||e.ultimateUsed)return;const n=ys.get(t.player.ultimateId??"edge")??ys.get("edge"),i=e.enemies.find(d=>d.id===e.targetId&&d.alive)??Ht(e)[0];if(!i&&n.type!=="heal"&&n.type!=="shield"){yr(t);return}const a=i?.plot??0,r=a===0?0:Math.abs((e.playerPlot??0)-a);if((n.type==="melee"||n.type==="true")&&r>1){Oe(t,`${n.name}的間合不足：目標在 ${r} 階之外。`,"bad");return}const s=n.type==="ranged"?Ht(e).filter(d=>((d.plot??0)===0?0:Math.abs((e.playerPlot??0)-(d.plot??0)))<=2||(d.plot??0)===0):[];if(n.type==="ranged"&&s.length===0){Oe(t,"萬象灰雨找不到落在間合內的目標。","bad");return}e.ultimateUsed=!0,e.awaiting=!1;const o=Mn(t,ks(t)),l=_r(t);let c=!1;if(n.type==="shield")e.shield=Math.max(e.shield,9),Oe(t,"絕對城塞展開。九點護盾吸收所有傷害，直到破碎。","good");else if(n.type==="extra")c=!0,e.awaiting=!0,e.playerPlot=e.playerPlot??0,Oe(t,"零刻交換。時間沒有前進，但你多了一次行動。","good");else if(n.type==="true"&&i)en(t,2,"熵印焚身的代價"),t.player.hp<=0?(e.status="lost",e.result="你把自己的血燒乾了。熵印焚身完成，但你沒有剩下能看見結果的眼睛。",e.awaiting=!1):(ii(t,i,6,"熵印焚身造成 6 點無視 AC 的真實傷害。"),Oe(t,"熵印焚身：以血換取必然的傷口。","danger"));else if(n.type==="gravity"){for(const d of Ht(e))d.plot=e.playerPlot??0;e.momentum=Math.max(e.momentum,2),c=!0,e.awaiting=!0,Oe(t,"重力井把所有人的 PLOT 壓到同一階。下一次攻擊 +2。","good")}else if(n.type==="heal"){const d=t.player.hp;t.player.hp=Math.min(t.player.maxHp,t.player.hp+5),t.player.encroachment=Math.max(0,t.player.encroachment-5),Oe(t,`因果逆行：肉體 +${t.player.hp-d}，侵蝕 -5。`,"good")}else if(n.type==="melee"&&i){const d=kt(t),h=d+o+l+6;d===20||h>=i.ac?ii(t,i,5+Math.floor(l/2),`絕影一閃命中（無視 fumble）。d20 ${d} + ${o} + ${l} + 6 = ${h}。`):Oe(t,`絕影一閃落空。d20 ${d} + ${o} + ${l} + 6 = ${h} < AC ${i.ac}。`,"bad")}else if(n.type==="ranged"){for(const d of s){const h=kt(t),u=h+o+l;h===20||u>=d.ac?ii(t,d,2,`萬象灰雨命中 ${d.name}。d20 ${h} + ${o} + ${l} = ${u}。`):Oe(t,`萬象灰雨被 ${d.name} 閃開。d20 ${h} + ${o} + ${l} = ${u}。`,"bad")}Oe(t,"萬象灰雨覆蓋了整個間合。","danger")}e.status==="active"&&!c&&(e.queueIndex+=1,Pa(t))}function Pb(t,e){const n=t.battle;if(!n||n.status!=="active"||n.phase!=="action"||!n.awaiting)return;const i=n.civilians.find(a=>a.alive&&a.status==="hiding");i&&(n.awaiting=!1,n.selectedSkill=null,e==="protect"?(i.status="saved",t.player.flags.saved_civilian=!0,z(t,-4,`你把${i.name}藏到安全的地方`),Oe(t,`你掩護${i.name}離開。警戒 -4。`,"good")):(i.status="killed",t.player.killsNormal+=1,Tt(t,1,`你殺死了一個普通人（${i.name}）`),z(t,10,`你在戰鬥中殺死${i.name}`),ye(t,3,"你跨過了那條線"),Oe(t,`你殺了${i.name}。終端記下 +3 刻印。`,"bad")),n.queueIndex+=1,Pa(t))}function Ib(t){const e=t.battle;if(e){if(e.status==="won"&&e.reward)if(e.reward==="kurokawa"){Tt(t,15,"你擊倒了黑川巌與他的保鑣"),z(t,5,"鬧區發生超越者戰鬥"),t.player.killsOverman+=1,t.player.flags.kurokawa_defeated=!0;const n=t.rivals.find(i=>i.id==="kurokawa");n&&(n.status="dead",n.trueNameKnown=!0,Be(t,"story","黑川在倒下前說出了自己的真名：黑川巌。"))}else if(e.reward==="ayase"){Tt(t,20,"你擊倒了綾瀬凍"),z(t,7,"頂樓發生超越者戰鬥"),t.player.killsOverman+=1,t.player.flags.ayase_dead=!0;const n=t.rivals.find(i=>i.id==="ayase");n&&(n.status="dead",n.trueNameKnown=!0,Be(t,"story","綾瀬在冰晶散去後，低聲說出了真名：綾瀬凍。"))}else e.reward==="crown"?(Tt(t,30,"你重創了王冠"),z(t,10,"碼頭發生大規模顯現戰"),t.player.flags.crown_injured=!0,t.player.flags.crown_name_known=!0,Be(t,"story","王冠在碎裂前露出真名：王冠。")):e.reward==="kanda_escape"&&(t.player.wanted=!1);if(e.status==="lost"&&e.endingOnLoss){sn(t,e.endingOnLoss),t.battle=null;return}if(e.status==="lost"&&t.player.hp<=0){sn(t,"dead"),t.battle=null;return}Be(t,"story",`戰鬥結束：${e.enemies.map(n=>n.name).join("、")}（${e.status==="won"?"勝利":e.status==="escaped"?"脫離":"敗北"}）。`),t.battle=null,t.speed=t.speed||1}}const Di=t=>t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),Db=t=>t.split(/\n{2,}/).filter(e=>e.trim().length>0).map(e=>`<p>${Di(e).replace(/\n/g,"<br>")}</p>`).join("");function Nb(t,e){const n=e.cards,i=e.status==="active",a=e.enemies.filter(c=>c.alive||c.hp>0),r=e.enemies.find(c=>c.alive)??e.enemies[0],s=a.map(c=>{const d=c.intentInfo,h=Math.max(0,Math.round(c.hp/(c.maxHp||1)*100));return`<div class="card-enemy ${c.alive?"":"down"}">
        <div class="card-enemy-head">
          <strong>${Di(c.name)}</strong>
          <span class="card-intent ${d?.kind??"attack"}">${Di(d?.label??"不明")}</span>
        </div>
        <div class="bar enemy"><i style="width:${h}%"></i></div>
        <small>${c.unbeatable?"∞":`${c.hp} / ${c.maxHp}`}${(c.block??0)>0?`・格擋 ${c.block}`:""}</small>
      </div>`}).join(""),o=n.hand.map((c,d)=>{const h=sh(c),u=n.energy>=h.cost;return`<button class="card ${h.kind} ${u?"":"unaffordable"}" data-action="card-play" data-index="${d}" ${i&&u?"":"disabled"}>
        <span class="card-cost">${h.cost}</span>
        <strong>${Di(h.name)}</strong>
        <small>${Di(h.hint)}</small>
      </button>`}).join(""),l=i?`<div class="card-controls">
        <button class="btn btn-ghost" data-action="card-end" ${i?"":"disabled"}>結束回合<small>敵人行動</small></button>
      </div>`:`<div class="battle-result ${e.status}">
        <span class="micro">戰鬥結束</span>
        <div class="event-text">${Db(e.result??"戰鬥結束。")}</div>
        <button class="battle-end-button" data-action="battle-continue"><span>END OF BATTLE</span><small>結束戰鬥・時間恢復流動</small></button>
      </div>`;return`<div class="battle-overlay card-battle" role="dialog" aria-modal="true" aria-label="遭遇">
    <div class="card-battle-inner">
      <header class="card-battle-top">
        <span class="micro">第 ${e.round} 回合</span>
        <h2>${Di(r?r.name:"戰鬥")}</h2>
        <div class="card-vitals">
          <span class="card-hp">肉體 ${t.player.hp} / ${t.player.maxHp}</span>
          <span class="card-block">格擋 ${n.block}</span>
          <span class="card-energy">能量 ${n.energy} / 3</span>
        </div>
      </header>

      <div class="card-enemies">${s}</div>

      <div class="card-hand">${o||'<p class="card-empty">手牌空了。結束回合。</p>'}</div>

      <div class="battle-log">
        ${e.log.slice(-6).map(c=>`<p class="${c.tone}">${Di(c.text)}</p>`).join("")}
      </div>

      ${l}
    </div>
  </div>`}const Ub={opening:`十一月的雨沒有停過。你抵達新湊市的時候，鞋裡已經進了水，每走一步都發出很輕的、像有人在後面跟著的聲音。

車站前的電子鐘停在 23:47。你看著它跳了一分鐘，才確定它沒有壞，只是慢。

口袋裡有一封黑信封。沒有寄件人，沒有郵票，只有一行銀色的字，印得比信封本身還深。

「於十一月三日零時前抵達指定城市。不得告知任何人。」

零時整，手腕上的終端亮了起來。

螢幕上沒有你的名字。只有代號、存活條件，和一個正在減少的數字。

72:00:00。

最下面還有一行小字，字級比其他的都小，像是後來補上去的：

「本次選別由裏八咫監督。違規者，與其羈絆者，一併處理。」

你查過「裏八咫」這個名字。戶籍、公司登記、公開財報，什麼都沒有。它像一個只存在於公文上的機構。

你把終端翻過來，想看背面有沒有別的什麼。沒有。只有你的體溫留在玻璃上，慢慢變成霧。

旁邊有個上班族走過，撐著傘，看了你一眼，又很快移開視線。

那種眼神你看過很多次。不是害怕，是「不想知道」。

雨落上去，把霧洗掉。

你忽然有種錯覺：這座城市不是你的目的地，而是一個早就替你準備好的牢籠——連門都替你關好了。`,first_night:`便利商店後巷的燈壞了一盞，另一盞在閃。

一個穿西裝的男人把女人按在牆上。他的右手從手腕開始裂開，皮膚像壞掉的傘骨一樣一節一節撐起，露出底下的刃。

不是變形。是生長。

空氣裡的雨珠在他手邊偏了半公分，像被看不見的磁鐵推開。那是魔素被覆寫的痕跡——你在新聞裡看過一次，只有一次。

女人沒有尖叫。

她的喉嚨已經發不出聲音了。你看見她的腳尖在地上刮，刮出一小道白痕。

男人的手腕上有一圈紅光，和你的終端一模一樣，連跳動的頻率都一樣。

——他也是超越者。

終端彈出一行極小的字：「目標 Level 3。你的 Level：不詳。」

不詳。這個詞比三更可怕。

雨打在你後頸。你數著自己的呼吸，數到第四下才發現，自己一直沒有退。

不是不想退。

是這座城市從你踏進來的那一刻，就把你的退路一併算進去了。`,mio_call:`手機在凌晨三點震動。

來電顯示：澪。

你盯著螢幕看了很久，久到鈴聲停了，隔兩秒又響起來。終端沒有禁止接聽，只禁止說出真相——它的麥克風一直亮著一個很小的紅點。

「哥。」

她的聲音有點啞，像剛哭過又裝作沒事。

「你做夢了嗎？我剛剛夢到你在雨裡站著，一動也不動。我叫你，你也不回頭。」

你張了張嘴，發現自己不知道該先說哪一句——先說我沒事，還是先問她現在幾點。

「嗯。」你說。「做夢了。」

「夢到什麼？」

「……便利商店。」

她在電話那頭笑了一聲，很短。「哥，你連做夢都很沒出息。」

你聽見她那邊有人翻身，床架吱了一聲。然後她把聲音壓低，低到你幾乎要貼緊螢幕：

「你什麼時候回來？」

雨打在窗上，一下一下，很規律。終端的紅點還在亮。

你忽然覺得，只要自己一直聽下去，這通電話就不會結束，那個紅點就永遠只是紅點。

「很快。」你說。

掛斷之後，你在浴室的水聲裡站了很久，才發現自己在說謊這件事上，已經越來越熟練。`,convenience_store:`凌晨四點，你走進街角的便利商店。

自動門的聲音大得嚇人，像有人在耳邊撕開一張紙。

櫃檯後的人抬起頭，愣了一下，然後笑了。

「你怎麼會在這裡？」

是佐倉大地。你們小時候一起在河堤放過煙火，一起被警察送回家，後來各自走散。他現在穿著店長的藍色圍裙，名牌歪在一邊，寫著「見習」。

電視正在播昨晚的連續殺人案。主播說，警方不排除有「特殊能力者」涉案——這五個字她唸得特別慢，像怕咬到舌頭。

畫面下方跑著一行廣告字幕：財團Z・六型化合物，門市同步販售。

貨架上真的擺著，淡紅色的液體，一瓶兩百八十圓。

你把視線移開。

大地把音量轉小，眼睛卻沒有離開螢幕。

「你最近晚上不要一個人走。」他說。

你看著他圍裙口袋裡露出半截的護身符。新的，紅繩還沒起毛。

「你也小心。」

他愣了一下，好像想問你為什麼這樣講。但最後只是點頭，把找零放在你掌心，多放了一顆糖。

糖果包裝上印著一隻舉著拳頭的貓。`,shiratori_invite:`終端收到一則沒有寄件人的訊息。

「今晚十一點，常夜大樓頂樓。帶上你的刻印，或你的命。」

署名是白鳥理世。

你查了這個名字。三筆新聞：兩筆是失蹤案，一筆是慈善拍賣。照片裡她穿白裙，對著鏡頭笑，像是知道鏡頭後面有人在看她。

頂樓鋪著紅毯，被雨水泡得發黑。十幾個超越者站在雨裡，沒有人撐傘——不是不怕濕，是不想讓別人以為自己需要保護。

有人在角落交換終端，有人在數自己手腕上的傷。

白鳥坐在唯一的椅子上，白色狐狸面具推到耳邊。

「歡迎。」她笑得很輕，像在唸一句排練過的台詞。

「今晚拍賣的不是東西，是情報。」

她停了一下，讓這句話在雨裡站穩。

「而你們每一個人，都是商品。」

有人笑出聲。笑聲在頂樓繞了一圈，沒有人接。

你注意到她身後站著兩個黑衣人，手腕上沒有紅光。

他們不是超越者。他們是買家。`,kurokawa_massacre:`常夜中央通的監視器同時黑了十二秒。

十二秒後，街上多了九具屍體。

黑川巌站在便利商店的招牌下，拳頭上的鐵鍊還在滴血。他對著監視器鏡頭笑，抬手比了個手勢——不是挑釁，更像在跟熟人打招呼。

終端彈出公告。

「超越者黑川巌，刻印 +9。目擊者處理中。」

「處理中」，用的是進行式。

你蹲在騎樓的柱子後面，數著他還站著幾秒。十七秒。他等監視器恢復，才慢慢走開。

這不是失控。

這是行程表上的一格。

你忽然理解了一件事：這不是獵殺。

這是廣告。`,ink_rain:`你在走路，卻突然發現雨是黑色的。

不是汙水。是墨。

整條街的牆面都在滲出黑色的字，密密麻麻，寫滿同一個名字。有些字被雨水拖出長長的尾巴，像還沒乾就被人擦過。

你的名字。

路燈下的水窪裡，那些字開始彼此覆蓋、修改，像有人在很遠的地方重新排版。

然後你看見自己的手。

皮膚底下的血管亮著紅光，像一張正在燃燒的地圖，從手腕一路燒向手肘。

不痛。

最可怕的就是不痛。

——流變正在加速。`,midpoint:`裏八咫的無人機在頭頂盤旋三圈，丟下一個灰色箱子。

箱子上印著你的代號，還有一句印刷體：

「恭喜存活 20 小時。距離下次回收，還有 52 小時。」

箱子裡只能拿一樣東西。你蹲下來看了很久，像在超市挑一個晚餐。

最後你選了最沒用的一樣。你自己也說不清為什麼——也許因為它是唯一不需要理由的。

遠方的港口響起汽笛，長長的一聲，接著是貨櫃落地的悶響。

你忽然意識到，這座城市每一天都在正常運作。有人上班，有人下班，有人在陽台收衣服，有人為了明天要交的報告熬夜。

只有你的人生，被按下了倒數。`,tetsu_dead:`你在第七號碼頭找到鐵十兵衛。

他坐在貨櫃旁邊，眼睛睜著，胸口有一個乾淨的圓洞。乾淨得不像傷口，像有人替他開了一扇窗。

他的手還握著一截斷掉的鐵鍊。鏈子上有刻痕，一道一道，像在算日子。

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

有記者在推文裡寫：上一個被這樣形容的人，是劉千軍。

那條推文五分鐘後被刪了。

記者會結束後，網路上開始流傳另一個名字。

——他是你所能遇見的最強對手。

有人說，他從來不帶武器進城。

因為他的八把武器都在軌道上。`,ayase_proposal:`綾瀬凍在頂樓等你。

她沒有撐傘。雨落在她頭頂三公分處，凝成細小的冰晶，然後沿著看不見的弧面滑開。

「你應該已經發現了。」

她把終端投影打開。三十個代號，只剩三個還亮著。光點懸在雨裡，像三隻還沒熄的螢火蟲。

「學院給我的評級是九。」她說。「你的？不用回答，我看得出來。」

「這場遊戲不是給我們贏的。」

「裏八咫要的不是冠軍。它要的是樣本。」

「王冠也在這座城市。侵蝕率 100%，裏八咫卻不敢回收他——因為他已經是他們想要的東西了。」

她停頓了一下，不是為了效果，是在算數。

「聯手吧。先殺王冠，再處理神田。」

雨聲忽然變得很近。

「或者，你現在就可以殺我。排名會上升。」

她把手套拉緊，等你的回答。手套底下的指節是白的。`,kotone_song:`車站前的廣場空無一人。

你在那裡遇見了白石琴音。

她坐在濕透的塑膠椅上，吉他盒靠在旁邊，拉鍊沒拉。耳機只戴一邊，另一邊垂在胸前，手機裡放著一首你沒聽過的歌。

歌詞是關於一個人在雨天出門，忘了帶傘，也忘了為什麼要出門。

她看見你，沒有停。只是把耳機分了一半給你，像在留一個位置給你。

你坐下來。塑膠椅發出很響的一聲，兩個人都笑了。

你忽然想起，自己已經三天沒有坐下來了。

歌放到第二段的時候，你發現自己跟著哼了一句。走音了。她沒有說什麼，只是把音量調大了一點。

廣場另一頭有人在擦地上的血。刷子刮過磁磚，聲音很規律。`,detective_shadow:`便利商店的玻璃反射裡，多了一個人影。

神田隼人站在對街，正在問一個賣傘的老人。他微微彎著腰聽，那個角度剛好讓老人不必抬頭。

他沒有穿制服。但方圓十公尺內的人，都自動讓開，像水流繞過一塊石頭。

然後他抬起頭。

視線穿過雨幕，準確地落在你的倒影上。

他沒有走過來。只是把手插進風衣口袋，像在等一個很慢的綠燈。

終端跳出提示。

神田隼人，距離 18 公尺。他是你所能遇見的最強對手；即使是史上最強的超限者，也無法在正面戰鬥中勝過他。

你數了三次呼吸，才想起自己可以動。

走出五步之後，你才發現自己一直沒有眨眼。

玻璃門上的倒影在你離開之後還站了一會。

不是他——是你自己。`,blackout:`凌晨兩點，整座城市同時停電。

不是意外。

裏八咫把電網切斷了，好讓某些事情在黑暗裡發生。

街上開始有人砸玻璃。消防車的鳴笛從三個方向靠近，聲音互相追著跑。有人在樓上喊一個名字，喊了兩次，沒有人回答。

終端亮起臨時規則。

「停電期間，刻印價值 ×2。破壞行為不計入違規。」

黑暗裡，有人開始尖叫。

你站在原地，第一次發現：原來停電的時候，聽得到這麼多東西。

冰箱停止運轉的嗡鳴、水塔滴水的節奏、遠處鐵捲門被拉開的摩擦聲。

你數了七種聲音，然後停下。

因為第八種是你自己的心跳。`,evidence:`你在裏八咫補給箱的夾層裡，找到一份不該存在的文件。

標題是「Project Ignis・第七次適性選別・執行紀錄」。

紙很薄，邊緣有裁切過的痕跡——是從更厚的一份裡抽出來的。

裡面有所有參賽者的名單、家屬住址、回收順序。每個名字後面都有一個編號，編號後面的欄位空著——等你死的時候再填。

你看見鐵十兵衛的名字，後面已經填好了。墨跡很清楚，不是事後補的。

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

神田隼人。無顯現。不自願參與本次選別。正面交戰勝率 0.0%。

你把終端翻過去，不想再看那個數字。

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

牆上的時鐘走到四點十七分，秒針卡了一下才過去。

「我不是來抓你的。」

停頓。

「我是來問你，想不想活著離開這座城市。」

他從口袋拿出一張名片，放在咖啡杯旁邊，沒有推過來。

名片上只有一個號碼，和一間機構的名字。不是裏八咫。`,kurokawa_arrested:`城市各處的螢幕同時亮起同一則通知。

「超越者黑川巌，刻印 62。已由警視廳逮捕。刻印回收完畢。」

畫面裡，黑川被兩名刑警押上車。他沒有反抗，只是對著鏡頭笑。

他的手腕上，紅色的光已經熄滅。不是變暗，是熄滅——像有人伸手把一盞燈按掉。

終端更新排名。你上升了一位。

下方附註：

「神田隼人主導。全員注意：勿與其交戰。」

附註下面還有一行更小的字，很快就消失了：

「處理時間：四十一秒。」

你重看了一次畫面。黑川的鐵鍊還掛在車門上，沒人敢去拿。

後來那條鐵鍊在網拍上被拍賣，標題寫著「絞肉機的最後一條鍊子」。有人出價。

他是所有超越者裡最強壯的一個。

他被抓了。

而神田隼人沒有受傷。`,quiet_call:`終端顯示，你暫時沒有被列為優先目標。

這意味著，你有幾個小時的空檔。

這幾個小時裡，沒有人會來殺你，你也不用去殺人。這種空白比戰鬥更難捱。

手機響起。是澪。

「哥，家裡的櫻花開了。」

「現在是十一月。」

「所以才奇怪啊。」她笑，笑聲有點雜訊。「你什麼時候回來？我留了一枝給你。」

你看著窗外。雨還在下。

「快了。」

你說。

掛斷之後，你把手機貼在額頭上，讓它慢慢變涼。

額頭的溫度降下來的時候，你才發現自己在發抖。

不是冷的那種。`,wanted:`終端發出從未聽過的聲音。

低沉、規律，像醫院裡某台機器停止運轉。

紅色字樣跳出來。

「對象已列為指名手配。執行者：神田隼人。剩餘時間：3 小時。」

街角的公共螢幕出現你的代號。

不是照片，不是真名。

但你知道，他已經知道你是誰——他大概在你第一次走過這條街的時候就知道了。

雨裡傳來腳步聲。

不急，不慢。

像一個早就知道終點在哪裡的人，正在走一條他走過很多次的路。

你把手伸進口袋，摸到那顆印著貓的糖果。

包裝紙已經被雨浸軟了。`,crown_stage:`第七號貨櫃碼頭。凌晨三點。

所有的路燈同時亮起，照出一條通往海面的白色光帶。

王冠站在光帶盡頭。

破損的白色西裝，銀色長髮，頭上戴著一頂用斷裂鋼筋與紅色玻璃拼成的王冠。

他的一半身體已經不再是人的形狀。黑色的結晶從胸口長出，像一座正在生長的教堂，尖頂朝著天空。

碼頭上還有別人。幾個參賽者躲在貨櫃後面，沒有人敢動，包含兩個 Level 5。

「歡迎。」

他的聲音溫柔得像在主持婚禮。

「你們都是來看我成為新物種的嗎？」

他抬起手。

整座碼頭的貨櫃同時浮起，海面凹下去一個淺淺的碗。

「裏八咫說我是失敗品。」

他笑。

「但失敗品，通常最接近真相。」

終端顯示。

超越者王冠／侵蝕率 100%／刻印 87／交戰評估：不可能。

你把終端收進口袋。它還在震，像在抗議你沒有立刻逃跑。

你想起那格空白的分級表，想起 20 這個數字。

然後你把那個念頭收起來，和終端一起放進口袋。`,crown_fall:`王冠把整座碼頭舉了起來。

貨櫃、起重機、海水，全部浮在半空。他的身體已經看不出人形，只剩那頂王冠還亮著。

「你看見了嗎？」

他對著走過來的人說。

「這就是新物種。這就是人類的下一步。」

神田隼人停下腳步。

他手上沒有槍。

他抬頭，看向天空。雨停了之後，天空黑得很乾淨，能看見幾顆星。

「天刑」在上面。

下一秒，雲層被一道紅線切開。

不是雷。

是某個從軌道落下的東西。

大氣被燒成白色，一枚漆黑的劍刃穿透雲層，精準地釘在王冠面前。地面沒有爆炸，只有一聲沉悶的、像整個世界被按住的聲響。

你覺得自己的耳膜被按了一下。

「第一魔劍，傲慢。」

神田抬手。

劍刃自己折返，像被看不見的線牽回天上。

——一個回合，只能呼叫一把。這是裏八咫寫進權限裡的安全鎖，也是他唯一接受的限制。

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

碼頭上那幾個參賽者，不知道什麼時候已經走了。

王冠倒下了。

他的手指還在動，像在數什麼。

終端顯示。

超越者王冠／已回收。
執行者：神田隼人。

距離閉幕，還有四小時。`,last_choice:`距離閉幕，還有兩小時。

碼頭的燈一盞一盞熄滅。

神田隼人站在警車旁，正在寫報告。王冠被銬在後座，像一件終於歸位的證物。他寫字很慢，一筆一畫，像在抄一份不屬於自己的東西。

你的終端顯示：

刻印、排名、侵蝕率、羈絆。

所有數字都在那裡，安靜得像一份遺囑。

神田沒有看你。

但你知道，他在等。

直升機的聲音從海面那邊過來，很遠，但越來越近。

你還有最後一次選擇。`,kanda_ambush:`你走進一條死巷時，後方傳來傘尖點地的聲音。

神田隼人站在巷口。

雨水從他的風衣下襬滴落。

「我查了三個小時。」

他說。

「你留下來的東西，比你想像中多。」

他手裡握著一把漆黑的劍。劍身上沒有血，乾淨得像剛從盒子裡拿出來。

終端瘋狂震動。

神田隼人。無顯現。正面交戰勝率 0.0%。
建議：放棄抵抗。

「我不喜歡追人。」

神田說。

「所以我們把這件事結束掉。」

你退後一步。

背後的牆很冷。牆上有一張被雨泡爛的傳單，還看得見「自然主義者」四個字。

天空上，有一顆紅色的光點一閃而過。

——衛星。

你只剩一次選擇。`,manifest_35:`侵蝕率突破 35%。

你在洗手台的鏡子裡看見自己的眼睛多了一層顏色。

不是血絲。是某種更深的東西，正在瞳孔後面重新排列，像有人在調整焦距。

水龍頭沒有關，水一直流。

終端彈出一行字：

「顯現增生檢測。請選擇要讓哪一部分留下。」

三個名字浮現在腦中。它們的輪廓都像你，但呼吸的節奏不一樣。

你伸手關掉水龍頭。手指在抖。

不是因為害怕。

是因為其中一個名字，正試著回答你。

鏡子裡的人跟著你眨眼，慢了半拍。

你決定不告訴任何人這件事。`,manifest_60:`侵蝕率突破 60%。

你的影子開始比動作慢半拍。

有時它會自己停下來，看著你——不是看向你，是看著你。

終端沒有發出警告，只列出三個新的顯現名稱，像餐廳的菜單。

你聞到鐵鏽味。

不確定是這座城市的，還是你自己的。

電車從地下經過，整條街震了一下。

你的影子沒有跟著震。

你蹲下來，把手貼在地上。地面是冷的，影子是熱的。

「再一下下就好。」你對它說。

它沒有回答，但它動了。`,manifest_85:`侵蝕率突破 85%。

你已經記不清自己原本有幾隻手。

鏡子裡的倒影不再同步：它在你抬手之前先抬了手，在你眨眼之後才眨眼。

你數過一次。數到第三隻就停了。

終端亮起第三次選擇。

「個體邊界不穩定。建議：讓某一部份變得更強。」

這一次，你沒有拒絕的力氣。

你只希望留下來的那一部分，還記得澪的電話號碼。

號碼有十一位。你在心裡默唸了三次。

第三次的時候，你發現自己唸錯了一個數字。

你不敢再唸第四次。`,r_witness:`一個高中生舉著手機，鏡頭正對著你。

他比你還害怕，手卻沒有放下。

「你……你剛才那是什麼？」

螢幕上的直播觀看人數正在上升。3、7、12。

他穿著校服，制服外套太大，袖口捲了三折。

你的臉還沒有完全入鏡。

操場邊的擴音器正在播放學時間，聲音在雨裡有點失真。

他退了一步，又停住。

「我可以刪掉。」他說。「你要我刪掉嗎？」

他身後還有兩個同學，撐著同一把傘，不敢過來，也沒有走。

他們在等他。

你忽然發現，這是他第一次自己決定一件事。`,r_stray:`自動販賣機旁邊縮著一個十六、七歲的男孩。

他的手臂上有一道剛覺醒的紅色裂紋，還不會控制，光順著血管一跳一跳。

他看見你手腕上的終端，眼睛亮了一下，又暗回去。

「你也是……那個遊戲的嗎？」

「我不想殺人。」

他低頭，把破掉的球鞋並在一起。

「我只是想回家。我媽還不知道我在這裡。」

終端顯示：超越者，刻印 3。

他沒有武裝。連一把刀都沒有。

販賣機的燈照著他的臉，把裂紋照成一條橘紅色的線。

「你餓嗎？」你問。

他愣了一下，然後點頭，很小力地。`,r_checkpoint:`前方路口拉起封鎖線。

兩名警察逐一盤查行人，桌上放著一台讀取終端的機器。

你的終端沒有違規紀錄。

但機器可能會讀出別的東西——那些沒有被記錄下來的東西。

排在前面的人陸續通過。有一個人的手一直在抖，警察沒有多問。

輪到你了。

警察抬頭看你，眼神很疲倦。

「下一個。」

機器響了一聲，螢幕上跳出你的代號。

他看了兩秒，然後把螢幕轉向自己，按了清除。

「走吧。」

他沒有解釋。`,r_bond_danger:`你收到一張照片。

照片裡，羈絆者站在平常會出現的地方。身後有一輛黑色廂型車，車窗半開。

照片下面只有一行字。

「協議期間，請保持距離。下一次，不會只是照片。」

裏八咫。

他們在提醒你——羈絆不是弱點。

是抵押品。

你把照片放大，看見背景那家店還亮著燈。她應該還沒回家。

照片的角落有時間戳：三分鐘前。

也就是說，她現在可能還站在那裡。

你把手機放下，又拿起來。`,r_collapse:`你醒來時，發現自己站在一座天橋上。

不記得怎麼走上來的。

橋下的車流像發光的河。你的手扶著欄杆，欄杆正在融化，指尖陷進去半公分。

手機有七通未接來電。全部來自同一個號碼。

終端顯示：侵蝕率持續上升。

耳邊有人說：

「跳下去就不痛了。」

那聲音很像你自己。像到讓你花了三秒才確定，自己沒有說出口。

你把手從欄杆上拔出來，掌心黏著一層鐵。

橋下的第七輛車是計程車，車頂的燈亮著。

它開過去的時候，你想起自己已經很久沒有坐過計程車了。`,r_blackmarket:`碼頭邊的冷凍倉庫裡，有人在賣東西。

不是藥，不是槍。

是「刻印」。

一個戴著防毒面具的男人坐在冰櫃上，面前擺著十幾個終端，像在擺攤賣錶。

「你要買，還是要賣？」

他敲了敲其中一個。

「我這裡有裏八咫的醫療紀錄、偽造通行證，還有上一個客人的運氣。」

冰櫃的壓縮機忽然啟動，整間倉庫一起震。

「運氣那種東西，」他補了一句，「保質期很短。」

他掀開其中一個終端的背蓋，裡面貼著一張小照片。

「這是上一個客人。」他說。「他買了運氣，然後用掉了。」`,r_supply:`天空傳來無人機的低鳴。

一個灰色箱子落在你面前，編號被刻意刮花。

打開後，裡面不是補給，而是一張紙條。

「我們知道你在哪裡。
我們知道你殺了誰。
我們只是還不想回收你。」

——裏八咫

紙條下面壓著一支鎮靜劑，和一枚刻印晶片。

鎮靜劑的標籤被人撕掉了。晶片上用刀刻了一個字：活。

你把兩樣東西分開放進口袋。

走了兩條街，你才發現自己一直在摸那枚晶片的邊緣。`},kb={opening:{accept:`你把信封點燃。

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

「閉幕之後，到車站找我。」`}};function Ob(t,e){return Ub[t]??e()}function Fb(t,e,n){return kb[t]?.[e]??n}const pn=t=>({text:t,tone:"good"}),Pi=t=>({text:t,tone:"bad"}),Xa=t=>({text:t,tone:"danger"}),wt=t=>({text:t,tone:"neutral"}),Bb=[{id:"a2_night_shift",at:24,chapter:"第二天",title:"研修生",scene:"street",text:`便利商店的夜班換人了。

新的店員看起來不到二十歲，名牌上寫著「研修」。她補貨的動作很慢，每一排飲料都要對齊。

你買了一瓶水。她掃條碼，抬頭看你，眼神在你手腕上停了一秒。

「先生，」她把找零放在你手上，「你的手在發光。」

你低頭。終端的邊緣確實透出一點紅。

「燈光的關係。」你說。

她點頭，沒有再問，把下一排的飯糰轉正。

走出自動門時，你聽見她在後面小聲說：「……是嗎。」

她大概不會記得你。這對你們兩個都好。`,choices:[{id:"leave",label:"直接離開。",hint:"警戒 -1",apply:t=>(z(t,-1,"你沒有在店裡停留"),wt(`你走進雨裡。

身後的音樂換了一首，是那種便利店永遠在播、沒有人知道歌名的曲子。`))},{id:"warn",label:"回頭告訴她這幾天別值夜班。",hint:"警戒 +2／侵蝕 -3",apply:t=>(z(t,2,"你與便利店店員交談"),ye(t,-3,"你提醒了一個陌生人"),pn(`她愣了一下，然後笑了。

「打工的人哪有資格挑班。」

她把一顆糖放在櫃檯上，推向你。「不過謝謝。」`))},{id:"pay",label:"多買一瓶熱咖啡，放在櫃檯上。",hint:"侵蝕 -2",apply:t=>(ye(t,-2,"你為一個陌生人多買了一瓶咖啡"),wt(`「這瓶不是我的。」她說。

「是給你的。」

她看著那瓶咖啡，看了很久，像在確認它是不是真的。`))}]},{id:"a2_second_call",at:33,chapter:"第二天",title:"第二次點名",scene:"street",text:`終端在整點發出聲音。

「第二次點名。」

「生存人數：二十六。」

「提醒：刻印排行僅供參考。最終判定以閉幕時的生存狀態為準。」

二十六。四個人。

你想起第一天那份表格上的三十個代號，想起那個唸貨單的聲音。

「另外，」聲音停了一下，「有一項數據提供給各位參考。」

「本次選別的平均存活時間：三十一小時。」

「各位已超過平均。」

廣播停了。

你不知道這句話是安慰還是威脅。`,choices:[{id:"record",label:"記下數字。三十、二十六。",hint:"情報 +1",apply:t=>(ce(t,1,"你記錄了生存人數的變化"),wt(`你寫在終端背面：30、26。

中間隔了三十三小時。

你算到一半就停下來，沒有把除法做完。`))},{id:"ask",label:"按回報鍵，問一句：平均數字怎麼算的？",hint:"魅力檢定 DC 15",apply:t=>He(t,"charisma",15,"向裏八咫提問").ok?(ce(t,2,"裏八咫回答了你"),Xa(`終端沉默了十秒。

然後回覆：「已回收個體的存活時間除以人數。」

「追問原因。」

「因為有人問過。」`)):(z(t,2,"你向裏八咫發問"),Pi(`終端只回了一行字：

「非必要通訊。已記錄。」`))},{id:"silence",label:"什麼都不做。",hint:"警戒 -1",apply:t=>(z(t,-1,"你沒有回應廣播"),wt(`你站在原地，等擴音器的餘音散掉。

遠處有人在跑，腳步聲很急，然後停了。

你沒有過去。`))}]},{id:"a2_z_offer",at:35,chapter:"第二天",title:"面試",scene:"street",text:`一個穿西裝的人在咖啡店等你，桌上放著兩杯水。

「財團Z，人力資源部。」他遞出名片，上面沒有名字，只有一個編號。

「我們注意到你的數據。」

「什麼數據？」

「存活時間、刻印效率、對抗紀錄。」他微笑。「如果你活到閉幕，我們有一個職位。」

「如果我沒活到？」

「那就沒有面試。」他把水推向你。「但我們可以先聊。」

你看著那杯水，沒有碰。

「你們連這種時候都在招人？」

「尤其是這種時候。」他說。「選別本身，就是一場很長的面試。」`,choices:[{id:"listen",label:"讓他說完。",hint:"情報 +1",apply:t=>(ce(t,1,"你知道了財團Z 的招募條件"),wt(`他講了二十分鐘。

薪水、住房、家屬安置、保密條款。

最後他說：「職位不保證。名額只有一個。」

「那另一個人怎麼辦？」

他沒有回答，只是把水喝完。`))},{id:"decline",label:"把名片推回去。",hint:"警戒 -1",apply:t=>(z(t,-1,"你拒絕了財團Z"),pn(`他看著名片，沒有收回。

「留著吧。」他說。「改變主意的時候，我們不會問你為什麼。」

他起身，把兩杯水的錢都結了，包括你那一杯。`))},{id:"ask",label:"問他：你們怎麼知道我的數據？",hint:"知性檢定 DC 15",apply:t=>He(t,"intelligence",15,"追問財團Z 的資料來源").ok?(ce(t,2,"你發現財團Z 與裏八咫共用人員資料"),Xa(`他笑了，這次是真的笑。

「終端是我們做的。」

「你們不是主辦方。」

「我們是供應商。」他站起來。「裏八咫是客戶。」`)):(z(t,2,"你的問題讓對方警覺"),Pi(`「商業機密。」

他把名片留在桌上，走了。

你拿起名片，發現背面多了一行手寫的字：「考慮一下。」`))}]},{id:"a2_ayase_warning",at:37,chapter:"第二天",title:"不要看他的眼睛",scene:"alley",text:`綾瀬凍在便利商店的傘架旁等你，手裡轉著一把沒有打開的傘。

「王冠在動。」她說。「他開始往市中心移動。」

「那又怎樣？」

「裏八咫的評估是『不可能』，但他們沒有阻止他。」

她把傘放回架上，動作很輕。

「他們在等。」

「等什麼？」

「等神田。」她看著你。「或者等你。」

雨從她的外套上滑下來，沒有停留。

「如果你見到他，」她說，「不要看他的眼睛。」

「為什麼？」

「他會讓你覺得，變成他那樣是件好事。」`,choices:[{id:"accept",label:"點頭。",hint:"情報 +1",apply:t=>(ce(t,1,"綾瀬警告你不要直視王冠"),wt(`「還有，」她補了一句，「不要相信他說的話。」

「就算他是對的？」

她沒有回答。`))},{id:"doubt",label:"反問：你見過他？",hint:"魅力檢定 DC 14",apply:t=>He(t,"charisma",14,"追問綾瀬與王冠的關係").ok?(ce(t,2,"綾瀬承認她見過王冠"),Xa(`「上一個選別。」她說。

「第七次之前，還有第六次。」

「那一次，他是跟我一起進來的人。」

她把手套拉緊。「他活下來了。」`)):(z(t,1,"綾瀬不願多說"),Pi(`「這不重要。」

她把傘拿起來，撐開，走進雨裡。

你看著她的背影，覺得她走得比剛才快。`))},{id:"dismiss",label:"「我不需要你的警告。」",hint:"警戒 -2",apply:t=>(z(t,-2,"你拒絕了綾瀬的好意"),wt(`她看了你一眼，把傘放回去。

「也對。」

「你這種人，通常活不到需要警告的時候。」

她走了。語氣很平，不像在生氣。`))}]},{id:"a2_shrine",at:39,chapter:"第二天",title:"結緣",scene:"alley",text:`你在巷子裡找到一間小神社，鳥居只有一人高。

供桌上擺著幾枚硬幣，和一條被雨打濕的紅線。

紅線的一端繫在欄杆上，另一端垂在半空。

旁邊的牌子寫著：「結緣。請自取。」

你拿起紅線，發現上面已經有一個結，綁得很緊，像有人試過又放棄。

你把線放回去。

走遠之後，你突然想到：這種時候還有人來拜拜，拜的會是什麼。

然後你想到，也許就是你這種人。`,choices:[{id:"take",label:"拿走一條新的紅線，綁在手腕上。",hint:"侵蝕 -3",apply:t=>(ye(t,-3,"你把一條紅線綁在手腕上"),pn(`線很細，綁起來不痛。

你把終端往上推，讓紅線蓋住那圈光。

看起來像某種護身符。也許它就是。`))},{id:"offer",label:"丟一枚硬幣，替某個人祈禱。",hint:"侵蝕 -4",apply:t=>(ye(t,-4,"你替別人祈禱了一次"),wt(`你不知道該怎麼祈禱。

最後你只是站著，把那個人的名字在心裡唸了一遍。

硬幣落在木箱裡，聲音很實。`))},{id:"leave",label:"離開。這種東西沒有用。",hint:"警戒 -1",apply:t=>(z(t,-1,"你沒有在神社停留"),wt(`你走出巷子。

身後傳來風鈴的聲音，很輕。

你沒有回頭確認那是風，還是有人在。`))}]},{id:"a2_evac",at:43,chapter:"第二天",title:"空街",scene:"street",text:`你回到第一天住的那條街，發現它空了。

鐵門全部拉下，窗戶貼著膠帶，騎樓下堆著沒人收的垃圾。

一台收音機還在店裡響，音量很小，播著老歌。

你站在門口聽了一會。

這條街三天前還有早餐店、有補貨的店員、有撐著傘上班的人。

現在只剩那台收音機。

巡邏車從街尾經過，探照燈掃過鐵門，沒有停。

你退進騎樓的陰影裡，忽然發現自己在跟著那首歌哼。`,choices:[{id:"listen",label:"把歌聽完。",hint:"侵蝕 -4",apply:t=>(ye(t,-4,"你把一首歌聽完"),pn(`歌有四段，最後一段重複了兩次。

你靠在鐵門上，聽完，然後發現自己的肩膀放鬆了一點。

原來你可以放鬆。`))},{id:"enter",label:"推門進去。也許還有人。",hint:"感知檢定 DC 13",apply:t=>He(t,"wisdom",13,"進入空店查看").ok?(ce(t,1,"你在店裡找到了留下來的補給"),wt(`店裡沒有人，但櫃檯後面放著一個沒開的紙箱。

裡面是礦泉水、繃帶，和一張手寫的紙條：「給還會回來的人。」`)):(z(t,2,"你在空店裡留下痕跡"),Pi(`門推開時發出一聲很長的吱呀。

裡面很暗，什麼都沒有。

你退出來，發現對街有個人正看著你。`))},{id:"leave",label:"離開。空街沒有東西給你。",hint:"警戒 -1",apply:t=>(z(t,-1,"你沒有在空街停留"),wt(`你走回大路。

身後的收音機還在唱，聲音越來越小，最後被雨聲蓋過。`))}]},{id:"a2_note",at:45,chapter:"第二天",title:"紙條",scene:"alley",text:`你的住處門縫裡夾著一張紙。

紙上是手寫字，很工整：

「我知道你住在這裡。我沒有進去。」

「我們都是被丟進來的人。我不欠你，你也不欠我。」

「但如果你擋我的路，我不會猶豫。希望你也是。」

沒有署名。紙的右下角畫了一個很小的記號，像一隻眼睛。

你把紙折好，收進口袋。

那天晚上你沒有睡，坐在門後，聽樓梯間的聲音。

什麼都沒有。`,choices:[{id:"reply",label:"在門上貼一張回覆。",hint:"警戒 +2／情報 +1",apply:t=>(z(t,2,"你在門上留下了回覆"),ce(t,1,"你用紙條和對方建立了聯繫"),Xa(`你寫：「我也不會猶豫。」

貼上去，退後兩步看。

第二天早上，紙條不見了。

門縫裡多了一張新的，只有一個字：「好。」`))},{id:"move",label:"當晚換一個住處。",hint:"警戒 -3",apply:t=>(z(t,-3,"你換了住處"),wt(`你收好東西，從後門離開。

新的住處沒有窗，只有一張床和一個插座。

你躺下來，第一次覺得牆壁是好事。`))},{id:"ignore",label:"當作沒看到。",hint:"侵蝕 +2",apply:t=>(ye(t,2,"你把那張紙條留在口袋裡"),wt(`紙條在你口袋裡，跟著你走了一整天。

晚上你把它拿出來看第三次，才發現背面還有一行更小的字：

「如果你是那種會回覆的人，我很期待。」`))}]},{id:"a2_rain_thin",at:47,chapter:"第二天",title:"雨變薄了",scene:"street",text:`雨在第四十七小時變薄了。

不是停，是變成一種幾乎看不見的霧。

街上的人開始出來走動，像在確認天氣。

有個小孩在騎樓下踢一顆濕掉的球，母親在旁邊看著。

你經過時，球滾到你腳邊。

你把它撿起來，遞回去。小孩接過，沒有說謝謝，跑回母親身邊。

母親對你點頭，眼神很快移開。

你繼續走。

身後傳來球落地的聲音，一下，一下，很有規律。

那聲音很像倒數。`,choices:[{id:"watch",label:"停下來，看他們玩。",hint:"侵蝕 -5",apply:t=>(ye(t,-5,"你看了五分鐘的球"),pn(`球撞在牆上，彈回來，再撞。

小孩笑了一聲。

你忽然發現自己也在笑，很小的那種笑，連自己都沒注意到。`))},{id:"warn",label:"過去告訴那位母親，今晚之前要離開。",hint:"魅力檢定 DC 14",apply:t=>He(t,"charisma",14,"勸離一對母子").ok?(z(t,2,"你勸離了一對母子"),ye(t,-4,"你做了一件與選別無關的事"),pn(`她看了你很久，然後點頭。

「我先生也說過一樣的話。」

她抱起小孩，往車站的方向走。

小孩回頭看你，手裡還抱著那顆球。`)):(z(t,3,"你的勸告引起注意"),Pi(`「你是誰？」她問。

你答不出來。

她抱緊小孩，快步走開。`))},{id:"leave",label:"繼續走。",hint:"警戒 -1",apply:t=>(z(t,-1,"你沒有介入"),wt(`你走過那個街口。

球落地的聲音在身後繼續，一下，一下。`))}]},{id:"a1_sleep",at:22,chapter:"第二天",title:"睡著的五小時",scene:"alley",text:`你在一個一小時兩千圓的房間裡睡著了。

房間沒有窗，床單有消毒水的味道。牆上貼著一張褪色的注意事項：「請勿在房內使用顯現。」

你睡了五個小時。

夢裡你在排隊，隊伍很長。前面的人一個一個走進一扇門，沒有人回頭。

輪到你的時候，門後面是一片雨。

你醒來，發現終端在響。不是通知，是心跳偵測。

「個體休眠狀態已記錄。」

你坐起來，忽然發現自己很討厭那個詞：個體。`,choices:[{id:"rest",label:"再躺一會。你需要這個。",hint:"肉體 +2",apply:t=>pn(`你又躺了二十分鐘。

沒有睡著，只是躺著，聽隔壁房間的電視聲。

那是一種很正常的聲音。`)},{id:"leave",label:"立刻離開。這裡不安全。",hint:"警戒 -1",apply:t=>(z(t,-1,"你提前離開旅館"),wt(`你把鑰匙放在櫃檯上。

櫃檯後面沒有人。

你走出門，雨比昨晚更冷。`))},{id:"search",label:"檢查房間。這種地方通常有別人的東西。",hint:"感知檢定 DC 13",apply:t=>He(t,"wisdom",13,"搜索旅館房間").ok?(ce(t,1,"你在床墊下找到了上一個房客留下的東西"),wt(`床墊和床架之間夾著一張紙，上面寫著三個代號，最後一個被劃掉了。

你把紙收進口袋。`)):(z(t,1,"你在房間裡留下痕跡"),Pi(`你翻遍了抽屜和床底，什麼都沒有。

只有那張注意事項，被人用指甲在「顯現」兩個字上刮了很多次。`))}]},{id:"a2_patrol",at:28,chapter:"第二天",title:"夜巡",scene:"street",text:`兩名警察在路口設了崗。

他們不是一般的巡警——制服上有裏八咫的臂章，腰間掛著讀取器。

其中一個正在和便利商店的店員說話，語氣很客氣。

另一個站著，什麼都沒做，只是看著街上每一個人。

你從對街走過。他的視線跟著你，一直跟到街角。

然後他抬手，按了一下耳機。

你沒有回頭。

但你知道，從這一刻開始，這條街上有一個人記住了你的走路方式。`,choices:[{id:"blend",label:"走進人群，把速度放慢。",hint:"魅力檢定 DC 13",apply:t=>He(t,"charisma",13,"混入人群避開注意").ok?(z(t,-2,"你成功混入人群"),pn(`你跟在一個下班的人後面，學他的步伐。

過了兩個路口，你回頭看，那個位置已經換了另一個人。`)):(z(t,3,"你的動作引來注意"),Pi(`你走得太慢，慢到不像在趕路。

那個人的視線一直跟著你，沒有移開。`))},{id:"walk",label:"直接走過去。你没有做錯事。",hint:"警戒 +3",apply:t=>(z(t,3,"你直接走過裏八咫的崗哨"),Xa(`你從他面前走過，距離不到兩步。

他沒有攔你。

但你聽見耳機裡傳來很小的聲音，然後他低頭看了一眼讀取器。`))},{id:"detour",label:"繞路。",hint:"警戒 -1",apply:t=>(z(t,-1,"你繞開了崗哨"),wt(`你多走了十五分鐘。

那條路上有一間還沒關的麵店，老闆在收拾桌椅，湯鍋還冒著煙。

你忽然很想吃一碗麵。`))}]},{id:"a2_cache",at:31,chapter:"第二天",title:"藏東西的地方",scene:"alley",text:`你在廢棄的地鐵維修間找到一個鐵櫃。

櫃子沒鎖。裡面有幾瓶水、一包繃帶、半盒火柴，還有一本筆記。

筆記只寫了三頁：

「第一天：找到這裡。」
「第二天：不要相信排行榜。」
「第三天：如果有人在看，就把這本燒掉。」

字跡到第三頁就斷了，紙上有褐色的斑。

你把水拿走，把筆記留在原位。

離開時你在門上畫了一個記號，跟那本筆記的作者一樣。`,choices:[{id:"take_all",label:"全部拿走。",hint:"情報 +1／警戒 +1",apply:t=>(ce(t,1,"你拿走了補給與筆記"),z(t,1,"你清空了那個鐵櫃"),wt(`你把筆記也帶走了。

看完第三頁，你在後面補了一行：

「第四天：（還沒到）」`))},{id:"water",label:"只拿水。",hint:"侵蝕 -2",apply:t=>(ye(t,-2,"你只拿了需要的東西"),pn(`你拿了兩瓶水，把櫃門關好。

走出去幾步，又回來，把其中一瓶放回去。`))},{id:"leave_supply",label:"留下自己的東西，換走一瓶水。",hint:"侵蝕 -4",apply:t=>(ye(t,-4,"你留下補給給下一個人"),pn(`你放下一包餅乾和一個打火機。

在門上的記號旁邊，你又畫了一個更小的記號。

沒有人會知道那是什麼意思。`))}]},{id:"a1_first_walk",at:3,chapter:"第一天",title:"走一遍這座城",scene:"street",text:`你決定先走一遍這座城市。

從車站出發，往港口的方向。

路上經過兩間便利商店、一間打烊的電器行、一個沒有人的公園。

公園的鞦韆在風裡晃，幅度很小。

你停在鞦韆前面，看了很久。

雨落在鐵鍊上，發出很細的聲音。

終端顯示：距離閉幕，還有 69 小時。

你忽然想到：三天之後，不管你活著還是死了，這個鞦韆都會繼續晃。

你伸手把它按住。鐵鍊很冰。

鬆手之後，它又開始晃。`,choices:[{id:"sit",label:"坐上去。你小時候也坐過。",hint:"侵蝕 -3",apply:t=>(ye(t,-3,"你在鞦韆上坐了一會"),pn(`你坐上去，腳離地。

椅子發出很舊的摩擦聲。

你沒有盪，只是坐著，讓雨打在手背上。`))},{id:"walk",label:"繼續走。",hint:"警戒 -1",apply:t=>(z(t,-1,"你沒有停留"),wt(`你離開公園。

身後的鞦韆還在晃。`))},{id:"map",label:"記下路線與捷徑。",hint:"情報 +1",apply:t=>(ce(t,1,"你記下了城市的幾個死角"),wt(`你在終端上畫了三條路：一條通往港口，一條通往車站，一條通往沒有監視器的地方。

第三條最短。`))}]},{id:"a1_rain_gauge",at:7,chapter:"第一天",title:"雨量計",scene:"street",text:`加油站旁的雨量計滿了。

塑膠管裡的水位停在最上面那條線，浮著一片樹葉。

你看著它，忽然想不起自己上一次看到晴天是什麼時候。

新聞說這場雨是這個季節最長的一次。

新聞沒說的是：這場雨剛好從選別開始的那天落下。

你在雨量計前站了一會。

然後你伸手，把那片樹葉撈出來。

水位沒有下降。

對面的加油站沒有營業，招牌還亮著，把雨照成一種淡藍色。`,choices:[{id:"note",label:"記下日期與時間。",hint:"情報 +1",apply:t=>(ce(t,1,"你記錄了雨開始的時間"),wt(`你在終端上寫：十一月三日，零時。

然後你補了一句：不是巧合。`))},{id:"leave",label:"繼續走。",hint:"警戒 -1",apply:t=>(z(t,-1,"你沒有停留"),wt(`你走過加油站。

身後的招牌在你走出十幾步後熄了。`))},{id:"watch",label:"站在那裡，看雨落進管子裡。",hint:"侵蝕 -2",apply:t=>(ye(t,-2,"你看著雨發了一會呆"),pn(`雨落進管子的速度很慢，慢到幾乎看不出水位在變。

你看了大約五分鐘。

這是這三天裡，你第一次什麼都沒想。`))}]},{id:"a1_insomnia",at:16,chapter:"第一夜",title:"裂縫",scene:"alley",text:`旅館的天花板有一道裂縫，從燈座一路延伸到牆角。

你躺在床上看著它，數自己的呼吸。

隔壁房間有人在看電視，聲音很小，聽不出節目。

樓下有人在講電話，講了很久，語氣越來越低。

你想起終端上那行字：30 名超越者。

三十個人，現在都醒著嗎？

你翻了個身。

裂縫在黑暗裡看起來像一條河的支流。

你想起小時候住的地方，天花板也有一道裂縫，你曾經沿著它數到一百。

這次你數到四十七就睡著了。`,choices:[{id:"sleep",label:"繼續睡。",hint:"肉體 +1",apply:t=>pn(`你睡著了，沒有做夢。

醒來時天還沒亮，雨聲比睡前小一點。`)},{id:"check",label:"起來檢查終端。",hint:"情報 +1",apply:t=>(ce(t,1,"你在夜裡讀完了終端的說明"),wt(`說明書有十七頁，前面十六頁都是免責條款。

第十七頁只有一行：

「本機構不保證選別過程中的任何結果。」`))},{id:"listen",label:"聽隔壁的電視。",hint:"侵蝕 -2",apply:t=>(ye(t,-2,"你聽著鄰居的電視聲睡著"),wt(`是重播的老綜藝節目。

主持人的笑聲很假，但你聽著，居然覺得安心。`))}]}];function ch(t,e){return typeof t.choices=="function"?t.choices(e):t.choices}function $b(t,e){return Ob(t.id,()=>typeof t.text=="function"?t.text(e):t.text)}function dn(t,e,n){const i=th(t,e);i&&hr(t,i.id,n)}function dh(t,e){const n=th(t,e);return n?br(t,n.id):"那條線已經斷了。"}function yi(t,...e){return e.some(n=>t.player.abilityId===n||(t.player.manifested??[]).includes(n))}function we(t){return{text:t,tone:"good"}}function Ye(t){return{text:t,tone:"bad"}}function Ue(t){return{text:t,tone:"danger"}}function oe(t){return{text:t,tone:"neutral"}}const zb={store:"你剛把最後一份關東煮倒掉，圍裙上還沾著湯汁。黑信封就壓在收銀機下面。",medic:"你剛替一個陌生人包紮完，手套上還有沒乾的血。黑信封夾在救護紀錄裡。",musician:"你剛從地下Live House後門出來，耳朵還在嗡嗡作響。黑信封貼在音箱上。",journalist:"你剛刪掉一篇不會被刊登的報導，電腦右下角彈出黑信封的掃描檔。",shrine:"你剛替神社關上最後一扇門，石階下的黑信封被雨打濕了一角。",runner:"你剛替黑市送完最後一個包裹，客戶沒有付錢，只留下一封黑信封。",exsdf:"你剛把舊軍證收進抽屜，黑信封壓在退伍令上面。",street:"你剛在天橋下醒來，黑信封墊在頭底下，像有人怕你著涼。"},Hb={id:"opening",at:0,chapter:"序章",title:"黑信封",scene:"street",text:t=>{const e=gr.get(t.cityId)?.name??"這座城市";return`${zb[t.player.backgroundId]??"你剛結束一件不重要的事，黑信封卻像等了很久。"}

十一月三日，凌晨零時。

你抵達${e}時，雨正下著。

口袋裡的黑信封沒有寄件人，只有一行燙銀的字：

「於十一月三日零時前抵達指定城市。不得告知任何人。」

手腕上的黑色終端已經啟動。螢幕只有三個欄位：你的代號、存活條件、倒數 72:00。

首頁最上方印著兩行字：

「Homo transscendens（Overman）／Project Ignis 第七次適性選別」

「癌細胞不會自己停止分裂。」

下方還有一行小字：

「本次協議由裏八咫監督。違規者與其羈絆者，將一併處理。」

城市另一端，有人已經開始獵殺。`},choices:[{id:"accept",label:"點燃信封，接受規則。",hint:"「那就開始吧。」",apply:t=>(t.player.flags.accepted=!0,ye(t,2,"你讓顯現回應了終端"),we(`信封在指間捲起，火沿著紙邊走，走得比你想像中慢。

掌心的裂紋被照亮。那不是傷口，是一張早就簽好的契約。`))},{id:"call_mio",label:"先確認家人是否安全。",hint:"羈絆 +1／監視 +2",apply:t=>(dn(t,"family",1),t.player.surveillance+=2,ye(t,-4,"聽見家人的聲音"),we(`電話只響了一聲就被接起。

「哥？你那邊怎麼這麼吵？」

「下雨。」

她嗯了一聲，沒有再問。你聽見她那頭的電視聲，夜間新聞，音量開得很小。

掛斷之後你才發現，自己剛才一直屏著呼吸。`))},{id:"crack",label:"嘗試拆開手腕上的終端。",hint:"知性檢定 DC 16／失敗會觸電",apply:t=>He(t,"intelligence",16,"拆解裏八咫終端").ok?(ce(t,1,"你讀到終端的內部頻道"),we(`外殼「喀」一聲彈開，比預期中容易。

裡面沒有炸彈，只有一張薄晶片，和一張貼紙。貼紙上印著：

「神田對策：迴避。」

裏八咫要自己的職員迴避他。你把貼紙撕下來，收進口袋。`)):(en(t,2,"終端釋放防拆電擊"),t.player.surveillance+=3,Ye(`一串藍白火花從接縫噴出來。

你的手指麻了半個小時，左袖燒出一個洞。

更麻煩的是，裏八咫收到了一次「異常接觸」通知。`))}]},Gb={id:"first_night",at:2,chapter:"第一夜",title:"第一條命",scene:"alley",text:`你在便利商店後巷看見一個穿西裝的男人。他把一個女人按在牆上，右手從手腕開始裂開，變成一片薄得不像金屬的刃。

女人沒有尖叫。她的喉嚨已經發不出聲音。

男人手腕上有一圈紅色的光——和你的終端一樣。

他也是超越者。`,choices:[{id:"ambush",label:"從背後偷襲他。",hint:"顯現攻擊／刻印 +10／警戒指數 +5",apply:t=>(jt(t,void 0,"從死角發動偷襲"),Tt(t,10,"你補上最後一刀"),z(t,5,"巷口留下大量血跡"),t.player.killsOverman+=1,t.player.flags.first_kill=!0,Ue(`刀刃穿過他後頸的時候，他還在笑。

「你……也是啊。」

終端震了一下。刻印 +10。

女人靠著牆滑下去，已經沒有呼吸。

你誰也沒有救到。你只是殺了一個和你一樣的人。`))},{id:"intervene",label:"出聲阻止。",hint:"體魄檢定 DC 13",apply:t=>He(t,"strength",13,"赤手阻止超越者").ok?(ce(t,1,"你記住了他的臉"),z(t,2,"巷子裡有人報警"),t.player.flags.spared_first=!0,we(`你抓住他的手腕，握得很緊，緊到刃劃開掌心時，你才發現自己沒有放開。

「你瘋了嗎？」

他看了一眼你的終端，退了一步。

「我們是同一邊的。」

他翻牆走了。女人活下來了，一直在道歉——道歉的對象是你。

你記住了他的臉。`)):(en(t,2,"刃劃開你的側腹"),z(t,3,"血跡引來巡邏車"),Ye(`你慢了半拍。

刃從側腹劃過，熱的東西流進褲腰。男人趁機消失在雨裡。

女人還在哭。你沒有留下來。那件外套擋了一點，擋得不夠多。`))},{id:"watch",label:"冷眼旁觀，記下規則。",hint:"情報 +1／侵蝕 +2",apply:t=>(ce(t,1,"你觀察到超越者獵殺的模式"),ye(t,2,"你壓抑住出手的衝動"),oe(`你看著那條命被抽乾，像看著一盞路燈慢慢熄滅。

男人離開時看了你一眼，沒有說話，也沒有記下你。

終端彈出提示：「目擊未處理。風險：低。」

「低」這個字在你眼前停了很久。`))},{id:"leave",label:"轉身離開。",hint:"警戒指數 -2",apply:t=>(z(t,-2,"你避開了監視器"),ye(t,1),oe(`你走進雨裡。

身後的尖叫被車聲蓋過，蓋得很乾淨。

這座城市今晚會死很多人。你決定先讓自己活著。`))}]},Vb={id:"mio_call",at:5,chapter:"第一天",title:"家人的來電",speaker:"水島澪",scene:"alley",text:`手機在凌晨三點震動。來電顯示：澪。

你盯著螢幕看了很久。終端沒有禁止接聽，只禁止說出真相。

「哥，你做夢了嗎？我剛剛夢到你在雨裡站著，一動也不動。」

她的聲音很近，像隔著一扇沒關緊的門。`,choices:t=>[{id:"lie",label:"說謊。說你只是加班。",hint:"意志檢定 DC 12／失敗侵蝕 +4",apply:e=>He(e,"constitution",12,"對家人說謊").ok?(ye(e,-6,"你暫時把怪物關回身體裡"),dn(e,"family",1),we(`你聽見自己用很正常的聲音說話：加班、同事、明天會早點睡。

掛上電話之後，你在雨裡站了很久。

是雨聲太吵，你才發現自己一直沒有呼吸。`)):(ye(e,4,"謊言在喉嚨裡裂開"),Ye(`你說到一半停住了。

「哥，你旁邊有人嗎？」

「沒有。」

她沒有再問。電話裡只剩下她那邊很輕的呼吸聲，一直沒有掛。`))},{id:"truth",label:"違反命令，告訴她一點點。",hint:"羈絆 +2／監視 +8／警戒指數 +5",apply:e=>(dn(e,"family",2),e.player.surveillance+=8,z(e,5,"裏八咫攔截到通話關鍵字"),e.player.flags.told_mio=!0,Ue(`「如果我沒有回來，」你說，「不要找我。」

電話那頭安靜了五秒。你數得到她的呼吸，一次，兩次。

「你在哪裡？」

你掛斷了。

終端立刻亮起紅字：「偵測到協議外通訊。」`))},{id:"silent",label:"接起，但不說話。",hint:"羈絆 +1／侵蝕 +3",apply:e=>(dn(e,"family",1),ye(e,3,"沉默比謊言更難"),oe(`你聽著她呼吸。她也聽著你。

「好了，」她最後說，「我知道你在。」

她先掛了電話。`))},{id:"hangup",label:"掛斷。現在不能有任何牽掛。",hint:"羈絆 -1／侵蝕 +5",apply:e=>(dn(e,"family",-1),ye(e,5,"你主動剪斷一條線"),Ye(`你按下紅色按鈕。

世界安靜了，安靜得像有人把耳朵捂起來。

但你知道，有些線不是掛斷就會消失的。`))}]},Wb={id:"convenience_store",at:8,chapter:"第一天",title:"便利商店的燈",speaker:"老朋友",scene:"street",text:`凌晨四點，你走進街角的便利商店。自動門的聲音太大。

櫃檯後的人抬頭，愣了一下，然後笑出來。

「你怎麼會在這裡？」

佐倉大地。你小時候替他擋過一輛車的那個人。他現在穿著店長的藍色圍裙，胸前的名牌歪了。

電視正在播報昨晚的連續殺人案。主播說，警方不排除有「特殊能力者」涉案。`,choices:[{id:"help",label:"留下來幫他搬貨。",hint:"侵蝕 -8／羈絆 +1",apply:t=>(dh(t,"friend"),Si(t,1,"熱騰騰的關東煮"),we(`你們把一箱箱飲料搬進冷藏櫃。他搬錯了一箱，把啤酒放到牛奶旁邊，自己笑了很久。

他講了一堆無關緊要的事：房東、女友、隔壁那隻不會回家的貓。

你發現自己一直在聽，手裡還握著一罐沒開的可樂。

離開時，他把一罐熱咖啡塞進你口袋。「你臉色很差。多睡一點。」`))},{id:"ask",label:"問他有沒有看到可疑的人。",hint:"情報 +1／羈絆 +1",apply:t=>(ce(t,1,"大地提供了目擊情報"),dn(t,"friend",1),oe(`「最近半夜常有一輛黑色廂型車停在對面。」他把音量轉到最小。「下來的人穿西裝，手腕都戴著黑色的錶。不講話，買東西也不講話。」

他停了一下。

「有一次其中一個看了我一眼。就一眼。我那天晚上沒睡。」

裏八咫。你記住了。`))},{id:"warn",label:"警告他這幾天不要開店。",hint:"羈絆 +1／警戒指數 -2／監視 +2",apply:t=>(dn(t,"friend",1),z(t,-2,"你讓一條街提早熄燈"),t.player.surveillance+=2,we(`「為什麼？」他問。

「因為我會經過。」

他看了你很久，久到微波爐「叮」了一聲。

最後他把鐵門拉下一半，留了一道剛好夠人側身進來的縫。

「那你至少進來躲雨。」`))},{id:"leave",label:"買一包菸，什麼都不說。",hint:"情報 +1",apply:t=>(ce(t,1,"你從店裡的監視器畫面看見了什麼"),oe(`你把零錢放在桌上，拿了一包最便宜的菸。

他沒有找錢，只是看著你。

「下次來，」他說，「別挑這種時間。」

自動門在你身後關上時，你聽見他把電視音量調回去了。`))}]},Xb={id:"shiratori_invite",at:11,chapter:"第一天",title:"屋頂拍賣會",speaker:"白鳥理世",portrait:"shiratori",scene:"street",text:`終端收到一則沒有寄件人的訊息：

「今晚十一點，常夜大樓頂樓。帶上你的刻印，或你的命。——白鳥理世」

頂樓鋪著紅毯。十幾名超越者站在雨裡，像一群等待上場的演員。

白鳥理世坐在唯一的椅子上，白色狐狸面具推到耳邊。

「歡迎，」她說，「今晚拍賣的不是東西，是情報。而你們每一個人，都是商品。」`,choices:t=>[{id:"trade",label:"留下來交換情報。",hint:"情報 +2／警戒指數 +2",apply:e=>(ce(e,2,"你買到兩份名單"),z(e,2,"拍賣會的位置被警方掌握"),e.player.flags.met_shiratori=!0,oe(`你得到兩份名單：一份是裏八咫的回收路線，一份是神田隼人過去偵破的案件，連卷宗編號都抄得整整齊齊。

白鳥收下你的情報費，數都沒數。

「你比我想像中還有趣。」她把面具戴回去。「有趣的人通常活不久，所以我會記得你。」`))},{id:"read",label:"用讀心之瞳看她的真正目的。",hint:"需要讀心之瞳／情報 +3",requires:e=>yi(e,"mindeye"),apply:e=>(jt(e),ce(e,3,"你看見白鳥記憶裡的一間空房間"),e.player.flags.riya_secret=!0,Ue(`她心裡有一間上鎖的房間。

房間裡沒有金銀財寶，只有一張全家福，和一份名單。名單最後一行寫著：「白鳥理世／已回收」。

她注意到你的視線。笑容第一次出現裂縫，像面具先裂，人才跟上。

「看見了？」她問。「那就不能讓你活著離開了。」

但她沒有動手。她只是把這件事記進去了。`))},{id:"decline",label:"不進場，在對街觀察。",hint:"警戒指數 -3／情報 +1",apply:e=>(z(e,-3,"你避開了公開場合"),ce(e,1,"你記下了與會者的臉"),oe(`你站在對街便利商店的屋簷下，看著那些超越者一個接一個走進大樓。沒有人回頭。

凌晨兩點，只有七個人走出來。

警衛在門口抽菸，什麼也沒看見。`))},{id:"rob",label:"等她落單，搶走她的終端。",hint:"敏捷檢定 DC 16／成功大量刻印",apply:e=>He(e,"dexterity",16,"偷走白鳥的終端").ok?(Tt(e,15,"你轉走了白鳥理世的刻印"),z(e,6,"白鳥發布了懸賞"),e.player.flags.riya_enemy=!0,Ue(`她的終端比你想像中輕，輕得像裡面什麼都沒有。

你翻過屋頂時，聽見她在身後笑。

「拿去吧。」她說。「反正那些刻印本來就該是你的。」

你跑了三條街才停下來。停下來的時候，你才想到要檢查裡面到底有什麼。`)):(en(e,3,"白鳥的追隨者堵住逃生口"),z(e,5,"拍賣會爆發衝突"),e.player.flags.riya_enemy=!0,Ye(`你才碰到她的手腕，整層樓的燈同時熄滅。

三個人從不同方向撲上來，動作整齊得像排練過。

你逃了出去，肋骨斷了兩根。

第二天早上，你發現口袋裡多了一張拍賣會的邀請卡。`))}]},qb={id:"kurokawa_massacre",at:14,chapter:"第二天",title:"絞肉機",speaker:"黑川巌",portrait:"kurokawa",scene:"street",text:`常夜中央通的監視器同時黑了十二秒。

十二秒後，街上多了九具屍體。

黑川巌站在便利商店的招牌下，拳頭上的鐵鍊滴著血。他對著監視器鏡頭笑，像在跟誰打招呼。

終端彈出公告：「超越者黑川巌，刻印 +9。目擊者處理中。」

這不是獵殺。這是廣告。`,choices:[{id:"fight",label:"正面攔住他。",hint:"回合制戰鬥／勝利 +15 刻印",apply:t=>(Mi(t,"kurokawa"),oe(`你把外套脫下來，丟進水窪。

雨水在布料上浮成一層薄薄的光。

「喂。」你說。

他回頭了。`))},{id:"ambush",label:"藏在高處，用顯現偷襲。",hint:"顯現／+10 刻印／警戒指數 +7",apply:t=>(jt(t),Tt(t,10,"你偷襲了黑川巌"),z(t,7,"整條街的玻璃同時碎裂"),t.player.killsOverman+=1,t.player.flags.kurokawa_injured=!0,Ue(`你的攻擊從天而降。黑川只來得及抬頭。

他沒有躲。他張開雙臂接住那一擊，像在擁抱一輛失控的卡車。

煙塵散去後，他跪在地上，胸口多了一個洞。

「再來。」他說。

「再來啊。」

你走了。走到街口時，你聽見他開始笑。`))},{id:"save",label:"衝進火場，把倖存者拖出來。",hint:"警戒指數 +2／侵蝕 -5／拯救一條命",apply:t=>(z(t,2,"你在現場留下了腳印"),ye(t,-5,"你記得自己為什麼要跑"),t.player.flags.saved_civilian=!0,t.player.flags.saved_child=!0,we(`你在倒塌的招牌下找到一個小女孩。她抓著你的外套不放，指甲陷進布料裡。

你把她抱出來的時候，她一直問：「我媽媽呢？」

你沒有回答。你不能回答。

救護車來的時候，你已經走了。她沒有看見你的臉，只記得你手腕上有紅色的光。`))},{id:"leave",label:"不要捲入。讓他成為誘餌。",hint:"情報 +1／侵蝕 +2",apply:t=>(ce(t,1,"你觀察到黑川的行動模式"),ye(t,2),oe(`你退到街角，記下黑川離開的方向。

他會引來神田。這是好事。

至少你是這麼告訴自己的。`))}]},Yb={id:"ink_rain",at:17,chapter:"第二天",title:"墨雨",scene:"alley",text:`你在走路，突然發現雨是黑色的。

不是汙水。是墨。整條街的牆面都在滲出黑色的字，密密麻麻，寫滿同一個名字。

你的名字。

然後你看見自己的手：皮膚底下的血管亮著紅光，像一張正在燃燒的地圖。

侵蝕正在加速。`,choices:[{id:"endure",label:"咬破舌頭，撐住。",hint:"意志檢定 DC 14",apply:t=>He(t,"constitution",14,"抵抗侵蝕幻覺",yi(t,"limit")?2:0).ok?(ye(t,-4,"你把幻覺壓回視線邊緣"),we(`你數著自己的心跳。一百二十下之後，雨恢復成透明的。

牆上的字不見了，只剩下水痕。

只有你記得它們寫了什麼。`)):(ye(t,8,"幻覺撕開了一道缺口"),en(t,1,"你在牆上撞傷了肩膀"),Ye(`你回過神時，自己正用額頭撞牆。

血順著眉骨流進眼睛，世界變成紅色的。

手機螢幕顯示：侵蝕率上升中。

旁邊有一個撐傘的路人站著看你，看了兩秒，然後繞路走開。`))},{id:"suppress",label:"用顯現強行壓制。",hint:"侵蝕 +8／自動成功",apply:t=>(jt(t,8,"用顯現鎮壓失控"),ye(t,3,"壓制反過來餵養了侵蝕"),oe(`你讓顯現張開，把所有幻覺吞回去。

雨停了。至少在你站立的半徑三公尺內停了。

代價是，你現在能清楚聽見牆裡有人在說話。`))},{id:"call",label:"打給羈絆者。讓熟悉的聲音定位你。",hint:"羈絆／侵蝕 -12",apply:t=>{const e=t.bonds.filter(i=>i.alive).sort((i,a)=>a.level-i.level)[0]??t.bonds[0],n=br(t,e.id);return we(n+`

你看著自己的手慢慢恢復成皮膚的顏色。`)}},{id:"surrender",label:"放手。讓它佔領你一部分。",hint:"侵蝕 +12／獲得力量",apply:t=>(ye(t,12,"你主動讓侵蝕前進"),t.player.flags.let_go=!0,Ue(`你停止抵抗。

黑色的雨穿透皮膚，溫度像一碗放涼的湯。

你突然能看見這條街所有人的死期。

這很方便。你討厭自己覺得方便。`))}]},Zb={id:"midpoint",at:20,chapter:"第二天",title:"中場補給",scene:"docks",text:`裏八咫的無人機在頭頂盤旋三圈，丟下一個灰色箱子。

箱子上印著你的代號，還有一句印刷體：

「恭喜存活 20 小時。距離下次回收，還有 52 小時。」

箱子裡只能拿一樣東西。

遠方的港口響起汽笛。你突然意識到，這座城市每一天都在正常運作，只有你的人生被按下了倒數。`,choices:[{id:"medkit",label:"醫療包。",hint:"肉體回復 5",apply:t=>(Si(t,5,"裏八咫的軍規醫療包"),oe("你把止血凝膠打進傷口。痛覺被一層冰冷的東西蓋住。"))},{id:"chip",label:"情報晶片。",hint:"情報 +3",apply:t=>(ce(t,3,"晶片裡有參賽者座標"),oe("晶片裡有所有超越者的初始座標，以及一條被標紅的路線：通往第七號貨櫃碼頭。"))},{id:"cleaner",label:"偽造終端。",hint:"警戒指數 -20",apply:t=>(z(t,-20,"你換上偽造終端"),we(`你把舊終端丟進海裡。新的終端顯示同一個代號，但所有犯罪紀錄都變成空白。

至少裏八咫的電腦會這麼認為。`))},{id:"booster",label:"強化劑。",hint:"肉體上限 +2／侵蝕 +8",apply:t=>(t.player.maxHp+=2,Si(t,2),ye(t,8,"你讓顯現改寫自己的身體"),Ue(`藥劑沿著血管燒過去。你看見自己的影子多了一雙手。

肉體上限提升。代價寫在侵蝕率上。`))},{id:"armor",label:"防彈背心。",hint:"裝備護甲／AC 基礎 13／敏捷上限 +2",apply:t=>(ih(t,"vest","你換上裏八咫的防彈背心"),we(`背心比想像中輕。你活動了一下肩膀，確認它不會妨礙顯現。

「擋得住手槍。」箱子上的標籤寫著。「擋不住奇蹟。」`))}]},Kb={id:"tetsu_dead",at:23,chapter:"第二天",title:"鐵屑",scene:"docks",text:`你在第七號碼頭找到鐵十兵衛。

他坐在貨櫃旁邊，眼睛睜著，胸口有一個乾淨的圓洞。

終端上他的代號已經變灰。最後一筆紀錄是：「刻印 13。已回收。」

他口袋裡有一張被血浸濕的照片。照片上是一個小女孩，穿著水手服，比著勝利手勢。

背面寫著：「爺爺，這次一定要回來。」`,choices:[{id:"investigate",label:"檢查傷口與現場。",hint:"情報 +2",apply:t=>(ce(t,2,"你從傷口推斷出兇手的手法"),z(t,1,"你在現場停留太久"),oe(`傷口太乾淨了。沒有掙扎，沒有防禦傷。

這不是超越者能做出的切口。

你想起新聞裡那個名字：神田隼人。`))},{id:"take",label:"拿走他的刻印。",hint:"刻印 +4／侵蝕 +3",apply:t=>(Tt(t,4,"你接收了鐵十兵衛的刻印"),ye(t,3,"你碰觸了死者的終端"),Ue(`終端在你手裡震了一下，像一顆還在跳的心。

刻印轉移完成。

你沒有看那張照片第二眼。`))},{id:"mourn",label:"替他蓋上外套。",hint:"侵蝕 -3／羈絆感",apply:t=>(ye(t,-3,"你為一個陌生人停了下來"),t.player.flags.mourned_tetsu=!0,we(`你把外套蓋在他臉上。

照片放回他胸口。

「回去看看吧。」你說。雖然你知道他回不去了。`))}]},Jb={id:"kanda_rumor",at:26,chapter:"第二天",title:"那個刑警",speaker:"神田隼人",portrait:"kanda",scene:"street",text:t=>`電視牆上臨時插播一則記者會。

「警視廳今日證實，已針對近日連續超常死亡事件成立專案小組，由搜查一課的特別顧問・神田隼人負責。」

畫面切到一個穿黑色風衣的男人。他沒有看鏡頭，正在低頭翻一份資料。

記者問他是否相信「特殊能力者」的存在。

他抬起頭。

「我相信證據。」他說。「而證據告訴我，有人在替你們數人頭。」

畫面下方跑馬燈：神田隼人，17 歲，Homo sapiens。

${p_.text}`,choices:[{id:"research",label:"蒐集神田的資料。",hint:"情報 +3",apply:t=>(ce(t,3,"你找到神田的舊案卷"),oe(`七起案件，七個超越者。三個在逮捕前侵蝕率突破 100%，兩個自殺，兩個至今沒有交代動機。

所有案件都有一個共同點：神田隼人走進現場時，沒有人逃得掉。`))},{id:"escape_plan",label:"去車站確認離開城市的路線。",hint:"知性檢定 DC 15／解鎖逃亡路線",apply:t=>He(t,"intelligence",15,"規劃離開城市的路線").ok?(t.player.flags.exit_route=!0,z(t,-2,"你避開主要道路"),we(`你找到一條不在裏八咫地圖上的舊貨運線。

終點是隔壁縣的一座小站。

你把路線記在腦裡，沒有寫下來。`)):(z(t,5,"你在車站被盤查"),Ye(`車站的便衣比旅客多。你買了一張票，又在上車前把票撕掉。

有人記下了你的臉。`))},{id:"dismiss",label:"一個普通人而已。不需要在意。",hint:"侵蝕 +2",apply:t=>(ye(t,2),oe(`你把電視牆留在身後。

雨又開始下了。

你沒有注意到，畫面裡的神田隼人，正看著監視器的方向。`))}]},Qb={id:"ayase_proposal",at:29,chapter:"第二天",title:"玻璃聖母",speaker:"綾瀬凍",portrait:"ayase",scene:"street",text:`綾瀬凍在頂樓等你。她沒有撐傘，雨在她頭頂三公分處凝成細小的冰晶。

「你應該已經發現了，」她說，「這場遊戲不是給我們贏的。」

她把終端投影打開。上面是一份裏八咫內部名單，三十個代號，只有三個還亮著。

「王冠也在這座城市。他侵蝕率 100%，裏八咫卻不敢回收他。」

「我們聯手，先殺王冠，再處理神田。」

她停頓了一下。

「或者，你可以現在殺我。排名會上升。」`,choices:t=>[{id:"ally",label:"結盟。先活過今晚。",hint:"同盟／情報 +2／警戒指數 -2",apply:e=>(e.player.flags.ayase_ally=!0,ce(e,2,"綾瀬分享王冠的情報"),z(e,-2,"綾瀬替你抹掉一組監視紀錄"),we(`她伸出戴著黑色手套的手。你握住。

她的手很冷，但沒有結冰。

「記住，」她說，「我不是在救你。我是在提高我們兩個的存活率。」`))},{id:"decline",label:"拒絕。我不相信任何人。",hint:"情報 +1",apply:e=>(ce(e,1,"你記住王冠的弱點"),oe(`「隨你。」她把終端收起來。「但王冠出現時，不要站在我前面。」

她走進雨裡。冰晶在身後碎成一地。`))},{id:"betray",label:"趁她轉身，偷襲。",hint:"回合制戰鬥／勝利 +20 刻印",apply:e=>(e.player.flags.ayase_enemy=!0,Mi(e,"ayase"),oe("你踏出一步，冰面在腳下裂開。"))}]},jb={id:"kotone_song",at:32,chapter:"第三天",title:"雨中的歌",speaker:"街角的人",scene:"alley",text:`車站前的廣場空無一人。

白石琴音坐在濕透的塑膠椅上，抱著一把便宜的木吉他，唱一首你沒聽過的歌。

歌詞是關於一個人在雨天出門，忘了帶傘，也忘了為什麼要出門。

她看見你，沒有停。只是把下一段唱得小聲一點，像在留一個位置給你。

你突然想起，自己已經三天沒有坐下來了。`,choices:[{id:"listen",label:"坐下來，聽完。",hint:"侵蝕 -10／羈絆 +1",apply:t=>(dh(t,"community"),ye(t,-4,"你把整首歌聽完"),we(`她唱完最後一句，吉他弦還在震。

「你每次都只聽一半。」她說。

「這次聽完了。」

她笑了。雨聲突然變得很遠。`))},{id:"truth",label:"告訴她，你可能活不過明天。",hint:"羈絆 +2／監視 +5",apply:t=>(dn(t,"community",2),t.player.surveillance+=5,t.player.flags.told_kotone=!0,Ue(`她聽完，沒有問「什麼遊戲」，也沒有報警。

她只是把吉他放下，走過來抱住你。

「那你今天不要走。」

你在她肩膀上聞到雨和廉價洗髮精的味道。

終端在口袋裡震動。你沒有看。`))},{id:"coin",label:"把錢放進吉他盒，離開。",hint:"侵蝕 -3",apply:t=>(ye(t,-3,"你留下了一點什麼"),oe(`硬幣落在吉他盒裡，聲音很清脆。

她沒有抬頭。

你走到街角時，聽見她重新開始唱同一首歌。`))}]},ey={id:"detective_shadow",at:36,chapter:"第三天",title:"影子",speaker:"神田隼人",portrait:"kanda",scene:"street",text:`你在便利商店的玻璃反射裡看見他。

神田隼人站在對街，正在問一個賣傘的老人。他沒有穿制服，但方圓十公尺內的人都自動讓開。

然後他抬起頭，視線穿過雨幕，準確地落在你的倒影上。

他沒有走過來。

只是把手插進風衣口袋，像在等一個很慢的綠燈。

你的終端顯示：神田隼人，距離 18 公尺，他是你所能遇見的最強對手；即使是史上最強的超限者，也無法在正面戰鬥中勝過他。`,choices:[{id:"act_normal",label:"假裝路人，繼續買東西。",hint:"魅力檢定 DC 14",apply:t=>He(t,"charisma",14,"在神田面前演一個普通人").ok?(z(t,-4,"神田沒有把你列入名單"),we(`你拿起一罐咖啡，走到櫃檯結帳。手沒有抖。

走出店門時，神田已經不在對街了。

你鬆了一口氣，才發現咖啡罐被你捏凹了。`)):(z(t,7,"神田記住了你的臉"),t.player.wantedAt=Math.max(t.player.wantedAt,t.hour),Ye(`你付錢時，店員問：「先生，你還好嗎？」

你抬頭，發現神田就站在你身後。

「他看起來很好。」神田替你回答。「只是有點累。」

他拿走你手上的咖啡，付了錢，然後走了。`))},{id:"leave_fast",label:"立刻離開這個街區。",hint:"警戒指數 +3／安全",apply:t=>(z(t,3,"你匆忙離開引起注意"),oe(`你拐進巷子，走了三個街區才停下來。

回頭時，雨裡沒有人。`))},{id:"confront",label:"主動走過去。",hint:"情報 +2／警戒指數 +8／危險",apply:t=>(ce(t,2,"你和神田說上了話"),z(t,8,"你主動接近神田"),t.player.flags.talked_kanda=!0,Ue(`你走到他面前。他沒有驚訝。

「你知道我在查什麼。」他說，不是問句。

「知道。」

「那你應該也知道，我抓過比你更難抓的東西。」

他把一張名片放進你的口袋。「想說的時候，打這個號碼。」

你低頭看名片。上面只有一個名字：神田隼人。`))},{id:"erase",label:"用顯現抹掉他周圍的監視紀錄。",hint:"需要記憶篡改／警戒指數 -10",requires:t=>yi(t,"memory"),apply:t=>(jt(t),z(t,-10,"你改寫了整條街的監視紀錄"),oe(`你讓雨聲蓋過電子訊號。監視器裡，神田身邊的畫面變成一片雪花。

他抬頭看了一眼鏡頭。

然後笑了。`))}]},ty={id:"blackout",at:40,chapter:"第三天",title:"停電",scene:"docks",text:`凌晨兩點，整座城市同時停電。

不是意外。裏八咫把電網切斷了，好讓某些事情在黑暗裡發生。

街上開始有人砸玻璃。消防車的鳴笛從三個方向靠近。

你的終端顯示：

「臨時規則：停電期間，刻印價值 ×2。破壞行為不計入違規。」

黑暗裡，有人開始尖叫。`,choices:[{id:"hunt",label:"趁亂狩獵。",hint:"刻印 +8／警戒指數 +12／侵蝕 +5",apply:t=>(Tt(t,8,"你在停電中收割刻印"),z(t,12,"整條街陷入混亂"),ye(t,5,"你在黑暗裡放開了手"),t.player.killsNormal+=3,Ue(`你分不清自己殺了幾個人。

終端只顯示：刻印 +8。

電力恢復時，街上多了幾具屍體。你已經不在那裡了。`))},{id:"protect",label:"留在便利商店，幫大地守住店。",hint:"警戒指數 -6／羈絆 +1／侵蝕 -6",apply:t=>(z(t,-6,"你沒有參與停電騷亂"),dn(t,"friend",1),ye(t,-6,"你選擇站在門口"),t.player.flags.protected_store=!0,we(`你和大地把鐵門拉下，只留一道縫。

外面有人砸門。大地拿著掃把站在你旁邊，手在抖。

「你會沒事的。」你說。

你沒有告訴他，這句話是對你自己說的。`))},{id:"hide",label:"躲進地下停車場。",hint:"警戒指數 -8",apply:t=>(z(t,-8,"你在黑暗裡消失"),oe(`你在地下三樓坐了一整夜。

手機沒有訊號。終端顯示存活條件不變。

上方不時傳來跑步聲。你沒有動。`))}]},ny={id:"evidence",at:44,chapter:"第三天",title:"不該存在的文件",scene:"alley",text:`你在裏八咫補給箱的夾層裡，找到一份不該存在的文件。

標題是「Project Ignis・第七次適性選別・執行紀錄」。

裡面有所有參賽者的名單、家屬住址、回收順序。每個名字後面都有一個編號，編號後面的欄位空著——等你死的時候再填。

最後一頁釘著一張照片。神田隼人站在霧見市的舊車站前，身邊是一個與你年紀相仿的女孩。他沒有看鏡頭，側著臉在跟她說話，嘴角有一點很不像他的東西。

照片背面寫著：「小田川知世／霧見集體失蹤／未回收。」

照片的邊角被摸得起毛。有人反覆拿出來看，看了很多年。

你終於知道，他為什麼會來。`,choices:[{id:"copy",label:"複製證據。以備不時之需。",hint:"證據／情報 +2／監視 +3",apply:t=>(t.player.evidence=!0,ce(t,2,"你複製了Project Ignis的完整紀錄"),t.player.surveillance+=3,we(`你把檔案傳進終端的加密區。

這份東西能毀掉裏八咫，也能毀掉你。

你決定先留著。`))},{id:"burn",label:"燒掉。知道太多隻會死得更快。",hint:"警戒指數 -5／侵蝕 +3",apply:t=>(z(t,-5,"你銷毀了裏八咫的文件"),ye(t,3),oe(`紙張燒得很慢。

你看著小田川知世的照片捲曲、變黑，最後消失。

你告訴自己，這是在保護他。`))},{id:"leak",label:"匿名傳給電視臺。",hint:"警戒指數 +15／監視 +10／公開真相",apply:t=>(t.player.evidence=!0,z(t,15,"Project Ignis的片段在網路上流傳"),t.player.surveillance+=10,t.player.flags.leaked=!0,Ue(`三分鐘後，一個匿名帳號發布了文件截圖。

五分鐘後，影片被下架。

但已經有人備份了。

你的終端響起裏八咫的警告音：「來源追蹤中。」`))}]},iy={id:"kanda_arrives",at:48,chapter:"第三天",title:"他到了",speaker:"神田隼人",portrait:"kanda",scene:"street",text:t=>`第 48 小時。

雨突然停了。

新湊站前，一輛黑色轎車停下。車門打開，先出現的是一把黑色的傘，然後是一雙擦得很乾淨的皮鞋。

神田隼人。

他沒有帶隊，沒有鳴笛，只有一個裝著資料的公事包。

他站在車站前的廣場中央，抬頭看了一眼監視器。

你離他不到三十公尺。

他沒有看你，卻像已經把你的骨骼、心跳與逃跑路線全部讀完。

終端顯示：

最強對手
AC 24

逃離機率 14%

神田把傘收起來，甩了甩水。

「好大的雨。」他說，像在跟誰聊天。

${t.player.heat>=45?"他的視線在人群中掃過，停在你身上半秒。":"他的視線越過你，落在一個賣傘的老人身上。"}`,choices:t=>[{id:"walk",label:"低頭，走過去。",hint:"意志檢定 DC 12 + 警戒指數壓力",apply:e=>{const n=12+Math.floor(e.player.heat/25);return He(e,"constitution",n,"在神田面前保持鎮定").ok?(z(e,-3,"神田暫時沒有把你列入名單"),we(`你從他身邊走過。距離最近的時候，不到一步。

你聞到他身上的雨味和咖啡味。

他沒有看你。

走出車站廣場後，你的腿才開始發抖。`)):(z(e,8,"你的視線引起神田注意"),Ye(`你在經過時看了他一眼。

只有一眼。

神田微微側頭。「我們見過嗎？」

你搖頭。他沒有追問，但你知道，他記住了。`))}},{id:"hide",label:"用顯現隱藏自己。",hint:"顯現／自動脫離視線",apply:e=>(jt(e,void 0,"在神田面前啟動隱匿"),z(e,-6,"你從監視畫面裡消失"),oe(`你讓自己的存在變薄。

神田的視線穿過你原本站的位置，落在你身後。

「奇怪。」他低聲說。

你已經不在那裡了。`))},{id:"approach",label:"主動走過去，假裝問路。",hint:"情報 +2／極高風險",apply:e=>(ce(e,2,"你從神田口中得到一條線索"),z(e,5,"你和神田面對面交談"),e.player.flags.talked_kanda=!0,Ue(`「不好意思，車站怎麼走？」

他看著你，看了三秒。

「你已經站在它前面了。」

他從公事包裡抽出一張照片。「不過，既然你問了——你看過這個人嗎？」

照片上是黑川巌。

你搖頭。

「謝謝。」他把照片收回去。「你手上有血的味道，先生。記得洗乾淨。」`))},{id:"flee",label:"立刻轉身離開。",hint:"警戒指數 +5",apply:e=>(z(e,5,"你在車站前突然奔跑"),Ye(`你轉身的動作太明顯。

神田沒有追上來。

但當你回頭時，他正舉著手機，對著你的背影。`))}]},ay={id:"interrogation",at:51,chapter:"第三天",title:"盤問",speaker:"神田隼人",portrait:"kanda",scene:"alley",text:`你走進一家凌晨還開著的咖啡店。店裡只有兩個人。

你，和坐在角落的神田隼人。

他面前有兩杯咖啡。他把其中一杯推向你。

「坐吧。」

「我不認識你。」

「但你認識這個。」他把你昨晚丟掉的終端放在桌上。「我在垃圾回收場找到的。你以為把它丟進海裡就沒事了？」

他沒有提高音量。

「我不是來抓你的。」他說。「我是來問你，你想不想活著離開這座城市。」`,choices:t=>[{id:"lie",label:"裝傻。什麼終端？",hint:"魅力檢定 DC 15",apply:e=>He(e,"charisma",15,"對神田說謊").ok?(z(e,-2,"神田暫時接受你的說法"),we(`他盯著你看了一會，然後把終端收回口袋。

「好。」他說。「當我沒問。」

他站起來，把咖啡錢放在桌上。

走到門口時，他停下來。「如果你改變主意，號碼在杯墊下面。」`)):(z(e,10,"神田識破你的謊言"),e.player.wanted=!0,e.player.wantedAt=e.hour,Ye(`「你剛才說你沒見過終端。」他指著你的手腕。「那為什麼你在發抖？」

他拿起手機，按了一個號碼。

「搜查一課。幫我查一個代號。」`))},{id:"silent",label:"保持沉默。",hint:"意志檢定 DC 14",apply:e=>He(e,"constitution",14,"在神田面前保持沉默").ok?oe(`你什麼也沒說。

他等了五分鐘，然後點了點頭。「沉默也是一種回答。」

他走了。咖啡還冒著熱氣。`):(ye(e,4,"沉默讓侵蝕有機可乘"),z(e,4,"你的異常反應被記錄"),Ye(`你咬著牙，卻聽見自己手腕上的終端發出低鳴。

神田低頭看了一眼。「它不喜歡沉默，對吧？」`))},{id:"partial",label:"承認一部分。問小田川知世的事。",hint:"情報 +2／警戒指數 +4",apply:e=>(ce(e,2,"神田證實了霧見集體失蹤與裏八咫的關聯"),z(e,4,"你承認自己知道內情"),e.player.flags.kanda_partial=!0,oe(`你提到霧見市。

神田第一次出現表情變化。不是驚訝，是疲憊。

「你從哪裡知道這個名字？」

「文件上。」

他沉默很久。「小田川知世也在那份名單上。」

他把咖啡喝完，站起來。「別死。你可能是唯一能作證的人。」`))},{id:"attack",label:"攻擊他。現在，趁他沒有防備。",hint:"最強對手／回合制",apply:e=>(Mi(e,"kanda"),oe("你站起來，把咖啡杯推開。"))}]},ry={id:"kurokawa_arrested",at:54,chapter:"第三天",title:"回收通知",scene:"street",text:`城市各處的螢幕同時亮起同一則通知。

「超越者黑川巌，刻印 62。已由警視廳逮捕。刻印回收完畢。」

畫面裡，黑川被兩名刑警押上車。他沒有反抗，只是對著鏡頭笑。

他的手腕上，紅色的光已經熄滅。

終端更新排名。你上升了一位。

下方附註：「神田隼人主導。全員注意：勿與其交戰。」

黑川是所有超越者裡最強壯的一個。

他被抓了。

而神田隼人沒有受傷。`,choices:t=>[{id:"hunt_gap",label:"利用黑川留下的空檔，狩獵他的地盤。",hint:"刻印 +5／警戒指數 +5",apply:e=>(Tt(e,5,"你接收了黑川地盤上的刻印"),z(e,5,"你出現在黑川的地盤"),Ue(`黑川的據點沒有人防守。

你拿走他留下的補給與兩個落單的超越者。

終端排名上升。你沒有感到高興。`))},{id:"erase",label:"趁警方注意力轉移，銷毀自己的痕跡。",hint:"警戒指數 -15",apply:e=>(z(e,-15,"你把痕跡藏進黑川的案子裡"),we(`你把兩起案件嫁禍給黑川。

裏八咫的系統接受了。

死人不會辯解。`))},{id:"visit_ayase",label:"去找綾瀬凍。她應該也看到了。",hint:"情報 +1／同盟",apply:e=>(ce(e,1,"綾瀬分析神田的手法"),e.player.flags.ayase_ally?(dn(e,"family",1),oe(`綾瀬在頂樓等你。

「他一次都沒有用武器。」她說。「黑川不是被打敗的。他是被讀完的。」

她看向你。「王冠出現的時候，不要看他的眼睛。神田也是。」`)):oe(`頂樓沒有人。

只有地上用冰晶排成的一行字：「還來得及。選一邊。」`))}]},sy={id:"quiet_call",at:57,chapter:"第三天",title:"櫻花開了",speaker:"水島澪",condition:t=>!t.player.wanted&&t.player.heat<70,scene:"alley",text:`終端顯示你暫時沒有被列為優先目標。

這意味著你有幾個小時的空檔。

手機響起。是澪。

「哥，家裡的櫻花開了。」

「現在是十一月。」

「所以才奇怪啊。」她笑。「你什麼時候回來？我留了一枝給你。」

你看著窗外。雨還在下。

「快了。」你說。`,choices:[{id:"promise",label:"承諾一定會回去。",hint:"羈絆 +2／侵蝕 -8",apply:t=>(dn(t,"family",2),ye(t,-8,"你給了自己一個必須回去的理由"),we(`「嗯。」她說。「我等你。」

掛上電話後，你把額頭靠在冰冷的玻璃上。

第一次覺得，「回去」這兩個字有重量。`))},{id:"honest",label:"告訴她，你可能會變成不是人的東西。",hint:"羈絆 +1／侵蝕 -12／監視 +4",apply:t=>(dn(t,"family",1),ye(t,-12,"你把最害怕的事說出口"),t.player.surveillance+=4,oe(`電話那頭安靜了很久。

「那你就回來讓我看看。」她說。「如果認不出來，我會打你一巴掌。」

你笑了。這是三天來第一次。`))},{id:"cut",label:"說你會盡量。然後掛斷。",hint:"侵蝕 +2",apply:t=>(ye(t,2),oe(`「盡量」是一個很方便的詞。

它聽起來像承諾，實際上什麼都沒有。

她說好。你聽見她還想說什麼，但你掛斷了。`))}]},oy={id:"wanted",at:57,chapter:"第三天",title:"指名手配",speaker:"神田隼人",portrait:"kanda",scene:"street",text:`你的終端發出從未聽過的聲音。

低沉、規律，像醫院裡某臺機器停止運轉。

螢幕上跳出紅色字樣：

「對象已列為指名手配。
執行者：神田隼人。
剩餘時間：3 小時。」

街角的公共螢幕出現你的代號。不是照片，不是真名。但你知道，神田已經知道你是誰。

雨裡傳來腳步聲。

不急，不慢。像一個已經知道終點在哪裡的人。`,condition:t=>t.player.wanted||t.player.heat>=70,choices:t=>[{id:"run",label:"逃。趁他還沒鎖定位置。",hint:"敏捷檢定 DC 16／降低警戒指數",apply:e=>He(e,"dexterity",16,"甩開神田的包圍網").ok?(z(e,-18,"你換了三個藏身處"),e.player.wanted=!1,we(`你穿過三條後巷、一座停車場、一間打烊的居酒屋。

腳步聲消失了。

你蹲在垃圾箱後面，聽見自己的心跳比雨聲還大。`)):(z(e,5,"你被迫往市中心移動"),e.player.wanted=!0,e.player.wantedAt=e.hour,Ye(`你跑進了一條死巷。

腳步聲在巷口停下。

「我不急。」神田說。「你也跑不了三個小時。」`))},{id:"hide_deep",label:"躲進地下。切斷所有訊號。",hint:"警戒指數 -20／肉體 -2",apply:e=>(z(e,-20,"你從城市表面消失"),en(e,2,"地下骯髒的環境讓傷口惡化"),e.player.wanted=!1,oe(`你鑽進廢棄的下水道。

水淹到小腿，空氣裡有鐵鏽味。

終端失去訊號。你第一次覺得，被城市遺忘也是一種保護。`))},{id:"surrender_talk",label:"主動聯絡神田，要求談判。",hint:"情報 +2／高風險",apply:e=>(ce(e,2,"神田在電話裡給了你一個地址"),z(e,-8,"你主動聯絡神田"),e.player.flags.kanda_contact=!0,Ue(`電話只響了一聲。

「你終於打來了。」

「我要談條件。」

「碼頭，第七號倉庫。天亮前。」

他掛斷了。你看著手機，不確定這是不是另一種逮捕令。`))}]},ly={id:"reckoning",at:60,chapter:"第三天",title:"清算前夜",scene:"docks",text:t=>{const e=si(t);return`第六十小時。

終端把成績單攤在你面前，字體和平常一樣冷。

刻印：${t.player.marks}。
排名：${e.rank}／${e.total}。
還活著的人：${t.rivals.filter(n=>n.status==="active").length+1}。

「再撐十二個小時。」終端說。「活著的人，就是答案。」

你把終端翻過去，螢幕的光在雨裡散開，照亮了一小塊柏油路。

港口那邊，最後一艘貨輪正在離港，船身壓得很低，吃水線幾乎碰到海面。

城市的另一頭傳來爆炸聲。

不是雷。這個季節沒有雷。

王冠要來了。

遠處的樓頂有一個紅點閃了一下，然後熄滅。

你只剩十二個小時，決定自己要不要繼續當人。`},choices:t=>[{id:"spree",label:"走上街。把所有還能殺的都算進分數。",hint:"刻印 +8／警戒指數 +18／侵蝕 +12",apply:e=>(Tt(e,8,"你在最後的夜晚大開殺戒"),z(e,18,"屠殺規模失控"),ye(e,12,"你讓顯現整晚沒有休息"),e.player.killsNormal+=8,e.player.flags.massacre=!0,Ue(`你不記得自己走了幾條街。

終端不停震動，像在替你數拍子。

天亮前，你停在一個十字路口。

四面的監視器都對準你。你沒有躲。`))},{id:"hunt_rival",label:"找出排名在你前面的超越者。",hint:"狩獵檢定 DC 15／成功 +10",apply:e=>He(e,ks(e),15,"狩獵排名前段超越者",_r(e)).ok?(jt(e),Tt(e,10,"你獵殺了一名排名前段的超越者"),z(e,4,"碼頭發生戰鬥"),e.player.killsOverman+=1,Ue(`你在他補給的時候找到他。

戰鬥沒有超過一分鐘。

終端排名更新。你上升了。

他掉進海裡，沒有濺起太大的水花。`)):(ah(e,9,3,"獵物的反擊"),z(e,4,"碼頭發生戰鬥"),Ye(`你低估了他。

他逃進貨櫃之間，留下一道血跡和一句話：「你也是被算好的。」`))},{id:"hide",label:"躲起來。分數不重要了。",hint:"警戒指數 -12／侵蝕 -3",apply:e=>(z(e,-12,"你放棄了最後的狩獵"),ye(e,-3,"你選擇不再弄髒手"),oe(`你找了一個沒有監視器的倉庫，坐在角落裡。

外面有人在跑，有人在叫，有人死了。

你沒有出去。

這是三天來第一次，你覺得安靜是好的。`))},{id:"bond",label:"打最後一通電話。",hint:"侵蝕 -15／羈絆 +1",apply:e=>{const n=e.bonds.filter(a=>a.alive).sort((a,r)=>r.level-a.level)[0],i=n?br(e,n.id):"所有號碼都已無人接聽。";return we(i+`

你把手機收進口袋。

如果明天還能醒來，你想再聽一次。`)}}]},cy={id:"crown_stage",at:63,chapter:"終章",title:"王冠",speaker:"王冠",portrait:"crown",scene:"docks",text:`第七號貨櫃碼頭。凌晨三點。

所有的路燈同時亮起，照出一條通往海面的白色光帶。

王冠站在光帶盡頭。

他穿著一套破損的白色西裝，銀色長髮被海風吹起，頭上戴著一頂用斷裂鋼筋與紅色玻璃拼成的王冠。

他的一半身體已經不再是人的形狀：黑色的結晶從胸口長出，像一座正在生長的教堂。

「歡迎。」他說，聲音溫柔得像在主持婚禮。「你們都是來看我成為新物種的嗎？」

他抬起手。整座碼頭的貨櫃同時浮起。

「裏八咫說我是失敗品。」他笑。「但失敗品，通常最接近真相。」

終端顯示：

超越者王冠／侵蝕率 100%／刻印 87／交戰評估：不可能`,choices:t=>[{id:"ally_ayase",label:"和綾瀬聯手。",hint:"需要同盟／回合制戰鬥",requires:e=>!!e.player.flags.ayase_ally,apply:e=>(Mi(e,"crown"),oe("綾瀬的冰牆在你身旁升起。"))},{id:"solo",label:"獨自挑戰。",hint:"回合制戰鬥／高風險",apply:e=>(Mi(e,"crown"),oe("你獨自走向光帶盡頭。"))},{id:"side_crown",label:"跪下。選擇站在王冠這邊。",hint:"刻印 +15／警戒指數 +10／走向另一種結局",apply:e=>(e.player.flags.crown_ally=!0,Tt(e,15,"王冠分給你一部分刻印"),z(e,10,"你公開與王冠並肩"),ye(e,10,"你接受了王冠的邀請"),Ue(`你單膝跪下。

王冠把手放在你的頭上。黑色的結晶順著他的手指爬進你的頭髮。

「很好。」他說。「那就一起看看，人能不能審判神。」

終端發出警告。你關掉了它。`))},{id:"hide",label:"不要進場。讓他和神田相遇。",hint:"警戒指數 -10／情報 +2",apply:e=>(z(e,-10,"你從碼頭撤退"),ce(e,2,"你觀察到王冠與神田的動線"),oe(`你退到起重機後面。

王冠沒有追你。他的視線越過整座碼頭，落在一個正走過來的人身上。

那個人沒有撐傘。

神田隼人。`))}]},dy={id:"crown_fall",at:68,chapter:"終章",title:"一擊",speaker:"神田隼人",portrait:"kanda",scene:"docks",text:t=>`王冠把整座碼頭舉了起來。

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

距離閉幕，還有 4 小時。`,choices:[{id:"run",label:"趁神田處理王冠，立刻撤退。",hint:"解鎖逃亡時機／警戒指數 +3",apply:t=>(t.player.flags.escape_ready=!0,z(t,3,"你從碼頭消失"),oe(`你沿著貨櫃之間的縫隙往後退。

神田沒有追。他正蹲在王冠旁邊，讀著什麼。

你聽見他說：「告訴我，霧見市那晚發生了什麼。」

王冠笑了。`))},{id:"watch",label:"留下來，看完。",hint:"情報 +2／侵蝕 -3",apply:t=>(ce(t,2,"你聽見王冠說出裏八咫的秘密"),ye(t,-3,"你看見怪物被當成人對待"),oe(`王冠躺在地上，看著夜空。

「他們把我們叫做怪物，」他說，「然後要我們互相證明誰更不像人。」

神田沒有回答。

他只是把手銬扣上，動作很輕。

「小田川知世……」王冠說，「在霧見市，對吧？」

神田的手停了半秒。`))},{id:"approach",label:"走向神田。",hint:"需要證據或高羈絆",requires:t=>t.player.evidence||Vn(t)>=6,apply:t=>(t.player.flags.confront_kanda=!0,z(t,-5,"你主動走向神田"),Ue(`你從陰影裡走出來。

神田沒有轉身。「你終於肯出來了。」

「我有證據。」你說。「Project Ignis。裏八咫。全部。」

他看著你，看了很久。

「你知道交出來之後，你會怎樣嗎？」

「知道。」

「那就別在這裡交。」他說。「閉幕之後，到車站找我。」`))}]},uy={id:"last_choice",at:70,chapter:"終章",title:"最後的選擇",speaker:"神田隼人",portrait:"kanda",scene:"docks",text:t=>{const e=si(t);return`距離閉幕，還有兩小時。

碼頭的燈一盞一盞熄滅。神田隼人站在警車旁，正在寫報告。王冠被銬在後座，像一件終於歸位的證物。

你的終端顯示：

刻印 ${t.player.marks}
排名 ${e.rank}／${e.total}
侵蝕 ${t.player.encroachment}%
羈絆 ${Vn(t)}

神田沒有看你，但你知道他在等。

遠處，裏八咫的直升機正在靠近。

你還有最後一次選擇。`},choices:t=>[{id:"escape_now",label:"現在就走。離開這座城市。",hint:"需要羈絆 ≥8 或已規劃路線／警戒指數 <70",requires:e=>Vn(e)>=8||!!e.player.flags.exit_route,apply:e=>e.player.heat>=70?(z(e,5,"警方在出口攔截"),sn(e,"caught"),Ue(`你走到檢查站時，警察已經在那裡等了。

神田從車裡下來，替你關上車門。

「我以為你會選另一條路。」`)):(sn(e,"escape"),we(`你沒有回頭。

海風很冷，天邊已經泛白。`))},{id:"confess",label:"把證據交給神田。",hint:"需要證據與情報 ≥5，或羈絆 ≥6",requires:e=>e.player.evidence&&(e.player.intel>=5||Vn(e)>=6),apply:e=>(sn(e,"confess"),we(`你走到神田面前，把終端放在他的報告上。

他抬頭看了你一眼，然後合上報告。

「上車吧。」他說。「我們有很多事要談。」`))},{id:"close",label:"迎接閉幕。讓裏八咫算分。",hint:"依刻印、排名、侵蝕與警戒指數決定結局",apply:e=>(e.player.flags.accept_close=!0,oe(`你站在原地，看著碼頭外的城市燈火一盞一盞亮起。

終端開始倒數。

00:59:59。`))},{id:"fight_kanda",label:"挑戰神田隼人。",hint:"最強對手／回合制",apply:e=>(Mi(e,"kanda"),oe("你朝他走過去。"))}]},hy={id:"kanda_ambush",at:48,chapter:"第三天",title:"無法戰勝的人",speaker:"神田隼人",portrait:"kanda",scene:"alley",condition:t=>t.player.wanted&&t.hour>=t.player.wantedAt+1&&t.hour<72,text:t=>`你走進一條死巷時，後方傳來傘尖點地的聲音。

神田隼人站在巷口，雨水從他的風衣下襬滴落。

「我查了三個小時。」他說。「你留下來的東西比你想像中多。」

他抬起手，一把漆黑的劍刃從雲層間落下，靜靜停在他掌中。

終端瘋狂震動：

最強對手
最強對手
建議：放棄抵抗

「我不喜歡追人。」神田說。「所以我們把這件事結束掉。」

你退後一步。背後的牆很冷。

侵蝕率 ${t.player.encroachment}%。警戒指數 ${t.player.heat}。

你只剩一次選擇。`,choices:t=>[{id:"fight",label:"應戰。",hint:"最強對手／回合制",apply:e=>(Mi(e,"kanda"),oe("你沒有退路。"))},{id:"flee",label:"全力逃跑。",hint:"敏捷檢定 DC 18 + 警戒指數壓力",apply:e=>He(e,"dexterity",18+Math.floor(e.player.heat/25),"從神田手中逃脫").ok?(e.player.wanted=!1,z(e,-25,"你甩開了神田的包圍"),en(e,1,"你從二樓窗戶摔下去"),we(`你衝向巷底的鐵門，肩膀撞開門栓。

身後的腳步聲停了一拍。

只有一拍。但那已經夠了。

你翻過兩道牆，跳進河裡。神田沒有追上來。`)):(sn(e,"caught"),Ue(`你跑出三步。

神田的手從背後扣住你的脖子，把你按在牆上。

「我說過，」他的聲音很輕，「我不喜歡追人。」`))},{id:"power",label:"用顯現脫身。",hint:"需要瞬絕、空蟬、界限突破或記憶篡改",requires:e=>yi(e,"flash","shell","limit","memory"),apply:e=>(jt(e,10,"在神田面前全力發動顯現"),e.player.wanted=!1,z(e,-15,"你從神田的視線裡消失"),yi(e,"memory")?Ue(`你看著他的眼睛，把「你」從他的記憶裡剪掉。

神田的表情空白了半秒。

「奇怪。」他低聲說。「我剛才在追誰？」

你貼著牆，慢慢後退。

他看了你一眼，視線穿過你，走了。`):yi(e,"limit")?Ue(`你強行突破身體極限，抓住他的手，把他摔向牆壁。

神田穩住身體，第一次露出訝異。

那零點五秒的破綻，足夠你消失在雨裡。`):Ue(`你留下一個空殼。

神田一腳踩碎它，低頭看著地上不屬於任何人的臉。

「不錯的把戲。」他說。「下次，我會先確認心跳。」`))},{id:"bond_rescue",label:"發出求救訊號。",hint:"需要羈絆 ≥8",requires:e=>Vn(e)>=8,apply:e=>{const n=e.bonds.filter(i=>i.alive).sort((i,a)=>a.level-i.level)[0];return hr(e,n.id,-1),e.player.wanted=!1,z(e,-12,"一輛車衝進巷口，把你載走"),en(e,1,"你摔進車後座"),Ue(`巷口亮起車燈。

${n.name}把油門踩到底，車子擦著神田的身側衝過去。

你抓住車門，被拖行了十幾公尺才爬進後座。

後照鏡裡，神田站在原地，記下了車牌。

「你瘋了嗎？」${n.name}喊。

「對。」你說。「但謝謝你。」`)}},{id:"surrender",label:"投降。",hint:"結束逃亡",apply:e=>(sn(e,"caught"),oe(`你舉起手。

神田看著你，沒有立刻上前。

「你做得很好。」他說。

「什麼？」

「活到現在。」他把手銬收起來，改為抓住你的手臂。「走吧。你有很多事要告訴我。」`))}]},fy={id:"closing",at:72,chapter:"閉幕",title:"第七十二小時",scene:"docks",text:t=>{const e=si(t);return`零時整。

城市上空的烏雲裂開一道縫，第一束晨光落在海面上，像有人終於把這座城市打開。

終端停止倒數。

「Project Ignis，結束。」

刻印：${t.player.marks}。
排名：${e.rank}。
侵蝕率：${t.player.encroachment}%。
羈絆：${Vn(t)}。

海風把你的衣服吹得貼在背上。遠處有清潔車的聲音，很日常。

有人在收昨夜的垃圾，有人在打開店門，有人在陽台抽今天的第一根菸。

這座城市不知道這裡發生過什麼。

這也是規則的一部分。

終端的光暗了一格。

最終判定中。`},choices:[{id:"finish",label:"等待判定。",hint:"接受一切後果",apply:t=>{if(t.player.encroachment>=100||t.player.collapse>=3)return sn(t,"monster"),Ue(`終端沒有給出判定。

它只是發出一聲很長的雜訊。

你低頭，看見自己的手已經不再是手。`);if(t.player.wanted&&t.player.heat>=80)return sn(t,"caught"),Ue(`直升機的探照燈打在碼頭上。

神田隼人從光裡走出來。`);si(t);const e=t.rivals.filter(n=>n.status==="active").length;return e===0&&t.player.heat<80?(sn(t,"throne"),oe("「最後一個還站著的人。」裏八咫的廣播說。「你就是答案。」")):e===0?(sn(t,"survivor"),oe("「你是唯一活著的。但你的警戒數字太難看了。」")):t.player.encroachment<40&&Vn(t)>=6?(sn(t,"nameless"),we(`終端顯示：「生存確認。未列入優先回收。」

然後，一隻手按住了螢幕。`)):(sn(t,"survivor"),oe(`「生存確認。」廣播說。「活著的人還有 ${e+1} 個。」`))}}]},uh=[{id:"r_witness",at:0,random:!0,chapter:"插曲",title:"鏡頭",scene:"street",text:`一個高中生舉著手機，鏡頭正對著你。

他看起來比你還害怕，但他的手指沒有放下。

「你……你剛才那是什麼？」

螢幕上的直播觀看人數正在上升。3、7、12。

你的臉還沒有完全入鏡。`,choices:[{id:"talk",label:"放下手，告訴他不要拍。",hint:"魅力檢定 DC 12",apply:t=>He(t,"charisma",12,"安撫目擊學生").ok?(z(t,-2,"直播被關掉"),we(`他放下手機，反覆道歉。

你看著他跑遠，慶幸自己還記得怎麼對人說話。`)):(z(t,7,"直播片段開始流傳"),Ye(`他越退越遠，鏡頭始終對著你。

等你離開時，那支影片已經有三千次觀看。`))},{id:"erase",label:"用顯現抹掉影片。",hint:"需要記憶篡改或灰燼領域",requires:t=>yi(t,"memory","ash"),apply:t=>(jt(t),z(t,-6,"你抹除了影片與記憶"),oe(`你讓他的手機黑屏三秒。

再亮起時，相簿裡什麼都沒有。

他愣在原地，然後慢慢放下手。`))},{id:"threat",label:"威脅他。",hint:"警戒指數 +5／羈絆 -?",apply:t=>(z(t,5,"你的威脅被路人聽見"),ye(t,2),Ye(`你說出那句話時，自己都覺得陌生。

他跑了。

但他的手機還留在地上，錄影鍵亮著。`))}]},{id:"r_stray",at:0,random:!0,chapter:"插曲",title:"同類",scene:"alley",text:`一個十六、七歲的男孩縮在自動販賣機旁邊。

他的手臂上有一道剛覺醒的紅色裂紋，還不會控制。

他看見你手腕上的終端，眼睛一亮。

「你也是……那個遊戲的嗎？」

「我不想殺人。我只是想回家。」

終端顯示：超越者，刻印 3。`,choices:[{id:"help",label:"幫他藏起來。",hint:"侵蝕 -6／羈絆感／情報 +1",apply:t=>(ye(t,-6,"你幫一個陌生人藏身"),ce(t,1,"男孩告訴你一條裏八咫的路線"),t.player.flags.helped_stray=!0,we(`你把他帶到車站置物櫃，給了他一點錢。

「往北走。不要用顯現。不要相信穿西裝的人。」

他點頭，跑進人群。

你不知道他能不能活下來。`))},{id:"kill",label:"完成你的工作。",hint:"刻印 +10／警戒指數 +6",apply:t=>(Tt(t,10,"你結束了一個新生的超越者"),z(t,6,"販賣機旁留下血跡"),t.player.killsOverman+=1,ye(t,3,"你沒有猶豫"),Ue(`他沒有反抗。

甚至在你動手之前，就閉上了眼睛。

終端震動。刻印 +10。

你把他放進販賣機後面的空隙，用紙箱蓋住。`))},{id:"ignore",label:"假裝沒看見。",hint:"侵蝕 +2",apply:t=>(ye(t,2),oe(`你走過去。

他在背後叫你。「等等！你知道怎麼離開這裡嗎？」

你沒有回頭。`))}]},{id:"r_checkpoint",at:0,random:!0,chapter:"插曲",title:"臨檢",scene:"street",text:`前方路口拉起封鎖線。兩名警察逐一盤查行人，桌上放著一臺讀取終端的機器。

你的終端沒有違規紀錄，但機器可能會讀出別的東西。

排在前面的人陸續通過。

輪到你了。`,choices:[{id:"bluff",label:"拿出普通上班族的口氣應對。",hint:"魅力檢定 DC 13",apply:t=>He(t,"charisma",13,"應付警方臨檢").ok?(z(t,-2,"你順利通過臨檢"),we(`警察看了一眼你的證件，揮手放行。

「早點回家。」他說。

你點頭。這座城市裡，還有人以為你有家。`)):(z(t,7,"你的證件被標記"),Ye(`機器響了一聲。

警察抬頭看你。「先生，跟我們來一下。」

你退後一步，鑽進巷子。`))},{id:"sneak",label:"繞路。走後巷。",hint:"敏捷檢定 DC 12",apply:t=>He(t,"dexterity",12,"避開臨檢").ok?(z(t,-1),we(`你翻過一道矮牆，從洗衣店後門穿出去。

封鎖線被你甩在身後。`)):(z(t,4,"你被發現繞路"),en(t,1,"你從牆上摔下來"),Ye(`你落地時踩到鐵皮。

兩束手電筒同時照過來。你拼命跑，身後的哨聲越來越遠。`))},{id:"erase",label:"用顯現讓機器讀不到你。",hint:"顯現／警戒指數 -5",apply:t=>(jt(t),z(t,-5,"你幹擾了臨檢設備"),oe(`機器螢幕閃了一下，顯示「讀取錯誤」。

警察拍了拍機器，皺眉。「又壞了。」

他讓你過去了。`))}]},{id:"r_bond_danger",at:0,random:!0,chapter:"插曲",title:"被盯上的人",condition:t=>t.player.surveillance>=9&&t.bonds.some(e=>e.alive),scene:"alley",text:t=>`你收到一張照片。

${t.bonds.filter(n=>n.alive).sort((n,i)=>i.level-n.level)[0].name}站在平常會出現的地方，身後有一輛黑色廂型車。

照片下面只有一行字：

「協議期間，請保持距離。
下一次，不會只是照片。」

裏八咫。

他們在提醒你，羈絆不是弱點，是抵押品。`,choices:t=>[{id:"protect",label:"立刻去見他／她，把監視引開。",hint:"警戒指數 +8／監視 -6／羈絆 +1",apply:e=>{const n=e.bonds.filter(i=>i.alive).sort((i,a)=>a.level-i.level)[0];return hr(e,n.id,1),z(e,8,"你把裏八咫的注意力引回自己身上"),e.player.surveillance=Math.max(0,e.player.surveillance-6),Ue(`你故意走進便利商店的監視範圍，對著鏡頭比了一個手勢。

${n.name}看見你，愣了一下。

「你怎麼——」

「不要跟我說話。」你說。「假裝不認識我。」

你轉身離開。裏八咫的車跟上來了。`)}},{id:"cut",label:"刪掉所有聯絡方式。現在。",hint:"羈絆 -2／侵蝕 +6／監視 -4",apply:e=>{e.player.surveillance=Math.max(0,e.player.surveillance-4);const n=e.bonds.filter(i=>i.alive).sort((i,a)=>a.level-i.level)[0];return hr(e,n.id,-2),ye(e,6,"你親手刪掉最後幾條線"),Ye(`你把通訊錄一個一個刪掉。

刪到最後一個名字時，手指停了很久。

最後你還是按了下去。

世界變得很安靜。`)}},{id:"bait",label:"把裏八咫的車引向別的超越者。",hint:"智力檢定 DC 14／成功監視大降",apply:e=>He(e,"intelligence",14,"誤導裏八咫的監視小組").ok?(e.player.surveillance=Math.max(0,e.player.surveillance-8),z(e,2,"你把監視小組引向別處"),we(`你讓裏八咫的車跟著一輛錯誤的計程車開了三個街區。

照片不會再來了。至少今晚不會。`)):(z(e,5,"裏八咫識破你的誤導"),Ye(`黑色廂型車在路口停下。

車窗降下一半，有人朝你點了點頭。

他們知道你在做什麼。`))}]},{id:"r_collapse",at:0,random:!0,chapter:"插曲",title:"你在哪裡",condition:t=>t.player.encroachment>=70,scene:"alley",text:`你醒來時，發現自己站在一座天橋上。

不記得怎麼走上來的。

橋下的車流像發光的河。你的手扶著欄杆，欄杆正在融化。

手機有七通未接來電。全部來自同一個號碼。

終端顯示：侵蝕率持續上升。

耳邊有人說：「跳下去就不痛了。」

那聲音很像你自己。`,choices:[{id:"hold",label:"抓緊欄杆，數到一百。",hint:"意志檢定 DC 16",apply:t=>He(t,"constitution",16,"抵抗侵蝕的低語",yi(t,"limit")?2:0).ok?(ye(t,-5,"你把自己拉回天橋上"),we(`你數到八十七時，欄杆恢復了。

你跌坐在人行道上，嘔吐。

但你在這裡。`)):(ye(t,6,"你差一點放手"),t.player.collapse+=1,Ye(`你回過神時，自己已經翻過欄杆。

一隻手抓住你的外套。

是個不認識的上班族。「你還好嗎？」

你點頭。你不好。`))},{id:"call",label:"打給羈絆者。",hint:"侵蝕 -12",apply:t=>{const e=t.bonds.filter(i=>i.alive).sort((i,a)=>a.level-i.level)[0];if(!e)return Ye(`通訊錄是空的。

你把手機放回口袋，自己走下天橋。`);const n=br(t,e.id);return we(n+`

「你在哪裡？」她問。

「天橋。」你說。「現在沒事了。」`)}},{id:"jump",label:"鬆手。",hint:"侵蝕 +15／肉體 -4",apply:t=>(ye(t,15,"你向侵蝕讓步"),en(t,4,"你從天橋墜落"),Ue(`你沒有死。

顯現在落地前一刻接管了身體。

你躺在破碎的柏油路面上，聽見自己的骨頭重新排列。

路人尖叫。你站起來，走了。`))}]},{id:"r_blackmarket",at:0,random:!0,chapter:"插曲",title:"黑市",scene:"docks",text:`碼頭邊的冷凍倉庫裡，有人在賣東西。

不是藥，不是槍。是「刻印」。

一個戴著防毒面具的男人坐在冰櫃上，面前擺著十幾個終端。

「你要買，還是要賣？」

「我這裡有裏八咫的醫療紀錄、偽造通行證，還有——」他敲了敲其中一個終端，「上一個客人的運氣。」`,choices:[{id:"buy_med",label:"用刻印換醫療補給。",hint:"刻印 -3／肉體全滿",requires:t=>t.player.marks>=3,apply:t=>(t.player.marks-=3,Si(t,99,"黑市醫療補給"),Be(t,"action","黑市交易：刻印 -3。"),we(`他把一組沒有標籤的點滴掛在鐵架上。

「十分鐘。」他說。「你會覺得自己重新出生一次。」

他沒有說謊。`))},{id:"buy_id",label:"用刻印換偽造通行證。",hint:"刻印 -4／解鎖逃亡路線",requires:t=>t.player.marks>=4,apply:t=>(t.player.marks-=4,t.player.flags.exit_route=!0,z(t,-5,"你取得偽造通行證"),we(`通行證上的照片是別人的，名字也是。

但條碼是真的。

「往北。」男人說。「別回頭。」`))},{id:"buy_armor",label:"用刻印換結晶外殼。",hint:"刻印 -6／AC 基礎 14／敏捷上限 +1",requires:t=>t.player.marks>=6,apply:t=>(t.player.marks-=6,ih(t,"crystal","你買下死者的結晶外殼"),oe(`外殼貼上胸口時，你聽見一個不屬於自己的呼吸聲。

「上一個客人留下的。」男人說。「他很安靜。」`))},{id:"rob",label:"搶走他的貨。",hint:"敏捷檢定 DC 15／風險",apply:t=>He(t,"dexterity",15,"搶劫黑市商人").ok?(t.player.flags.exit_route=!0,Si(t,4,"黑市補給"),z(t,6,"黑市發生搶案"),Ue(`你抓起兩組補給和通行證就跑。

身後傳來防毒面具下的笑聲。

「你會後悔的。」`)):(en(t,3,"黑市的保鑣圍住你"),z(t,4,"黑市發生衝突"),Ye(`冰櫃後面走出三個人。

你打倒了兩個，第三個在你背上留下了一道電擊燒傷。`))},{id:"leave",label:"不交易，離開。",hint:"情報 +1",apply:t=>(ce(t,1,"你記住了黑市的位置"),oe(`你退出去，記下冷凍倉庫的編號。

以後也許用得上。`))}]},{id:"r_supply",at:0,random:!0,chapter:"插曲",title:"補給空投",scene:"docks",text:`天空傳來無人機的低鳴。

一個灰色箱子落在你面前，上面的編號被刻意刮花。

打開後，裡面不是補給，而是一張紙條：

「我們知道你在哪裡。
我們知道你殺了誰。
我們只是還不想回收你。
——裏八咫」

紙條下面壓著一支鎮靜劑和一枚刻印晶片。`,choices:[{id:"take",label:"拿走補給。",hint:"刻印 +3／警戒指數 +3",apply:t=>(Tt(t,3,"你收下裏八咫的刻印晶片"),z(t,3,"你被裏八咫標記為配合對象"),oe(`晶片插進終端，刻印 +3。

鎮靜劑你沒有用。你不想欠他們更多。`))},{id:"destroy",label:"踩碎晶片，留下鎮靜劑。",hint:"警戒指數 -3／侵蝕 -4",apply:t=>(z(t,-3,"你拒絕了裏八咫的施捨"),ye(t,-4,"你告訴自己還能選"),we(`你把晶片踩碎。

碎片在雨裡閃了一下，像一顆很小的星星。

鎮靜劑你留下了。以備不時之需。`))},{id:"trace",label:"追蹤無人機的來源。",hint:"感知檢定 DC 14／情報 +2",apply:t=>He(t,"wisdom",14,"追蹤裏八咫無人機").ok?(ce(t,2,"你找到裏八咫的臨時指揮點"),z(t,2,"你靠近了裏八咫的指揮點"),we(`無人機往港區飛。

你跟著它，找到一棟沒有招牌的倉庫。

門口停著三輛黑色廂型車。`)):(z(t,4,"你追丟了無人機"),Ye(`無人機升高，消失在雲層裡。

你站在空蕩的碼頭上，手裡只剩一張紙條。`))}]}];function py(t){return!t.manifestOffers||t.manifestOffers.length===0?[{id:"manifest_hold",label:"壓抑這次分裂。",hint:"不取得新顯現／侵蝕 -3",apply:e=>(ye(e,-3,"你壓抑了顯現的增生"),oe(`你把它壓回骨頭裡。

它沒有消失，只是暫時安靜了。`))}]:t.manifestOffers.map(e=>{const n=Ea.get(e);return n?{id:`pick_${e}`,label:`${n.name}／${n.type}`,hint:`${n.passive} ${n.active}`,apply:i=>(i.player.manifested.push(e),i.manifestOffers=[],Be(i,"story",`顯現增生：「${n.name}」。${n.passive}`),we(`新的顯現沿著舊的傷口長出來。

你獲得了「${n.name}」。

${n.tagline}

它會留下來，直到你不再是現在的你。`))}:{id:`pick_${e}`,label:e,hint:"未知顯現",apply:i=>oe("什麼都沒有發生。")}})}function wo(t,e,n,i){return{id:t,at:0,chapter:"顯現",title:n,scene:"alley",condition:a=>a.player.encroachment>=e&&!a.eventsDone.includes(t),text:i,choices:a=>py(a)}}const my=[wo("manifest_35",35,"第一次分裂",`侵蝕率突破 35%。

你在洗手台的鏡子裡看見自己的眼睛多了一層顏色。

不是血絲，是某種更深的東西，正在瞳孔後面重新排列。

終端彈出一行字：

「顯現增生檢測。請選擇要讓哪一部分留下。」

三個名字浮現在腦中。它們都像你，又都不完全是你。`),wo("manifest_60",60,"第二次分裂",`侵蝕率突破 60%。

你的影子開始比動作慢半拍。

有時它會自己停下來，看著你。

終端沒有發出警告。它只是列出三個新的顯現名稱，像餐廳的菜單。

你聞到鐵鏽味。不確定是城市的，還是你的。`),wo("manifest_85",85,"第三次分裂",`侵蝕率突破 85%。

你已經記不清自己原本有幾隻手。

鏡子裡的倒影不再同步。它在你抬手之前先抬了手，在你眨眼之後才眨眼。

終端亮起第三次選擇：

「個體邊界不穩定。建議：讓某一部份變得更強。」

這一次，你沒有拒絕的力氣。`)],gy={id:"a1_terminal",at:1,chapter:"第一天",title:"個體登錄",scene:"alley",text:`終端在凌晨一點重新亮起。

螢幕上是一份表格，標題寫著「個體登錄」。

你的名字不在上面。上面只有代號，和一個小得可笑的數字：

Level 0.0001。

下面一行註解：「超越者出現率。你是那個零點零零零一。」

表格最底下還有三行，字體比其他的都小：

「本城共有 30 名超越者。閉幕時仍然活著的人，通過選別。」
「刻印只記錄戰績，不記錄分數。」
「不要試著離開。」

你把手放在終端上，感覺到它在發熱。

旅館的電視沒有關，正在播氣象。明天降雨機率百分之百。

你忽然想到一件很蠢的事：如果這座城市所有人都淋著同一場雨，那這場雨算不算一種共同經驗。

然後你想到，三十個人裡，有多少人會活著看到雨停。`,choices:[{id:"memorize",label:"把每一行都讀完，記住數字。",hint:"情報 +1",apply:t=>(ce(t,1,"你記下了選別的完整規則"),oe(`三十名。你默念了一次。

這是這座城市裡，跟你一樣的人數。也是閉幕前可能死掉的人數。`))},{id:"probe",label:"檢查終端的接縫。",hint:"知性檢定 DC 13",apply:t=>He(t,"intelligence",13,"拆解選別終端").ok?(ce(t,1,"你發現終端背面有一組內部編號"),we(`接縫處有一組雷射刻的編號，不是你的代號。

你把它抄在手背上。以後也許用得上。`)):(z(t,2,"終端發出一次錯誤回報"),Ye(`外殼比你以為的硬。指甲刮出一道白痕，終端震了一下，螢幕上閃過「異常操作」。

你把手收回來。`))},{id:"ignore",label:"關掉它。你已經知道了。",hint:"侵蝕 -2",apply:t=>(ye(t,-2,"你拒絕讓那份表格進入腦袋"),oe(`螢幕暗下去。

你把手插進口袋，走進雨裡。

有些規則讀一次就夠了，讀第二次只會讓人開始計算自己的機率。`))}]},vy={id:"a1_morning",at:6,chapter:"第一天",title:"第一個清晨",scene:"street",text:`天亮了，但雨沒有停。

早餐店拉開鐵門，老闆把蒸籠搬出來，蒸氣在騎樓下散開，帶著醬油和塑膠袋的味道。

電線桿上貼著一張傳單，被雨泡得發皺：

「如果世界是一台電腦，物理法則就是程式碼。
而超越者，是病毒。」

底下印著一個小小的標誌：自然主義者。

你把傳單撕下一角，放進口袋。

街對面，有人正在把另一張撕下來——一個穿制服的學生，動作很熟練。他撕完之後，把紙對折兩次，收進內袋。

你看過那種手法。那是蒐集，不是清理。

他抬頭，和你對上眼。

你們都沒有說話。他先移開視線，走進雨裡。`,choices:[{id:"read",label:"把整張傳單撕下來讀完。",hint:"情報 +1",apply:t=>(ce(t,1,"你讀完了自然主義者的小冊子"),oe(`背面還有一頁，是入會申請。

「你身邊是否有人擁有無法解釋的力量？」

他們在徵召的不是會員，是線人。`))},{id:"ask",label:"問早餐店老闆，這些傳單是誰貼的。",hint:"魅力檢定 DC 12",apply:t=>He(t,"charisma",12,"向老闆打聽傳單").ok?(ce(t,1,"老闆說傳單是半夜貼的"),we(`「半夜來的，三個人，穿一樣的雨衣。」老闆壓低聲音。「有一次我看見他們在數車牌。」

他遞給你一杯豆漿，沒有收錢。`)):(z(t,1,"你在早餐店問了太多問題"),Ye("「不知道。」老闆把蒸籠蓋上，聲音比剛才大。「要吃什麼？不吃就別擋路。」"))},{id:"ignore",label:"當作沒看見，繼續走。",hint:"警戒 -1",apply:t=>(z(t,-1,"你沒有在街上停留"),oe(`你從傳單旁邊走過去。

那個學生看了你一眼，把手上的紙揉成一團。

你們都假裝沒有看見對方。`))}]},_y={id:"a1_rollcall",at:9,chapter:"第一天",title:"第一次點名",scene:"street",text:`凌晨五點，洗衣店的燈還亮著。

終端忽然出聲——不是通知音，是一個人的聲音，平得像在唸貨單。

「第一次點名。」

「代號：灰。Level 3。」
「代號：梟。Level 5。」
「代號：無名。Level 2。」

三十個代號，唸了兩分鐘。你聽見自己的代號也被唸出來，後面跟著一個數字。

三。或者五。你記不清了，只記得那個數字比你想的小。

「缺席者，視同退出。」

廣播停了。

旁邊的洗衣機轟轟作響，滾筒裡的衣服轉個不停。沒有人來收。

你盯著那台機器，忽然想到：如果「退出」是那個意思，那這間洗衣店裡大概還有別人的衣服，永遠不會有人來拿了。`,choices:[{id:"record",label:"把每一個代號記下來。",hint:"情報 +1",apply:t=>(ce(t,1,"你記下了參賽者的代號與等級"),oe(`你把它們寫在終端背面，用指甲刻。

三十行。你數了一次，發現有兩個代號被唸了兩遍。

有人改了名字，或者有人從頭到尾都不是人。`))},{id:"rest",label:"關掉終端，把衣服洗完。",hint:"侵蝕 -3",apply:t=>(ye(t,-3,"你讓自己聽了十分鐘洗衣機的聲音"),we(`你把終端塞進口袋，坐在塑膠椅上。

洗衣機轉到脫水，整台機器開始震。你看著那個節奏，什麼都不想。

這是三天裡最正常的十分鐘。`))},{id:"report",label:"用自己的代號回報位置。",hint:"警戒 +2／情報 +1",apply:t=>(z(t,2,"你主動回報了位置"),ce(t,1,"回報之後，終端多顯示了一行座標"),Ue(`你按下回報鍵。

終端多了一行字：「已記錄。附近有 2 名參賽者。」

原來只要你說話，裏八咫就會告訴你附近有誰。

也可能是在告訴別人，你在這裡。`))}]},by={id:"a1_errand",at:12,chapter:"第一天",title:"跑一趟腿",scene:"street",text:`中午，一個穿快遞制服的人在便利商店門口叫住你。

「有一個箱子，送到第三高爐遺址。不用問內容。」

他遞來一張紙條。上面只有座標，和一個六碼編號。紙條右下角印著財團Z 的標誌——一個被切開的圓。

「送到就好。不要打開。不要遲到。」

他把另一張紙條塞進你手裡，上面是一串可以在黑市兌換的號碼。

「你這種人，」他補了一句，「比我們準時。」

你看著他的制服。燙得很平，領口沒有汗漬，鞋也是新的。

送貨的人不會穿成這樣。

他等的不是你去送貨。他等的是有人替他在那張紙上簽名。`,choices:[{id:"accept",label:"接下來。",hint:"情報 +1／警戒 +1",apply:t=>(ce(t,1,"你記下了財團Z 的物流路線"),z(t,1,"你出現在第三高爐遺址"),oe(`箱子比想像中輕。

你把它放在遺址的鐵門前，回頭看了一眼——門上的鏽被擦乾淨了一小塊，像有人經常來。`))},{id:"refuse",label:"拒絕。你不想替任何人跑腿。",hint:"警戒 -1",apply:t=>(z(t,-1,"你沒有接下那個箱子"),we(`「隨你。」他把紙條收回口袋，沒有生氣。

「明天還會有別的人來問。」

他走進雨裡，制服的背影看起來跟普通快遞沒有兩樣。`))},{id:"peek",label:"接下來，然後打開看。",hint:"知性檢定 DC 14",apply:t=>He(t,"intelligence",14,"拆開財團Z 的封條").ok?(ce(t,2,"你看見箱子裡的人造超越者編號"),z(t,2,"封條被動過"),Ue(`封條裂開一條縫。

裡面不是貨物，是一份人體規格表：身高、體重、魔素耐受度、預估 Level。

最後一欄寫著「是否仍具備人格」。勾選欄是空的。`)):(z(t,4,"封條損毀被發現"),Ye(`封條上有一層你看不見的塗料。

手指才碰到，箱子就震了一下。終端同時亮起：「物品狀態：異常。」

你把箱子放回原位，假裝什麼都沒發生。`))}]},yy={id:"a1_z_ad",at:15,chapter:"第一天",title:"財團Z 的廣告",scene:"street",text:`傍晚，中央通的巨型螢幕換了畫面。

一個穿白西裝的男人站在鏡頭前，語氣溫和得像在介紹家電。

「每個人，都應該擁有同等的力量。」

字幕滑過：財團Z・人造超越者計畫。執行長，澤巴迪亞。

畫面切到一個玻璃管，裡面有個模糊的人形，胸口亮著紅光，像有人在裡面點了一盞燈。

「六型化合物，讓奇蹟變得可以量產。」

街上的行人停下來看。有人鼓掌，有人拍照，有人低頭繼續走。

你也停了下來。

螢幕右下角有一行小字，跑得很快：

「本計畫受國際超越者管理機構監督。」

你想起那張分級表，想起第 20 格是空的。`,choices:[{id:"watch",label:"看完。你想知道他們在賣什麼。",hint:"情報 +1",apply:t=>(ce(t,1,"你記住了人造超越者計畫的宣傳詞"),oe(`廣告最後一句是：「力量不該是少數人的特權。」

你旁邊有個上班族小聲說：「那你們賣多少錢？」

沒有人回答他。`))},{id:"contact",label:"記下螢幕上的聯絡方式。",hint:"情報 +1／警戒 +1",apply:t=>(ce(t,1,"你抄下了財團Z 的招募專線"),z(t,1,"你在螢幕前停留太久"),Ue(`號碼很短，短得像內部專線。

你抄在掌心，汗一出來就糊了一半。

你想起那個快遞說的話：你這種人，比我們準時。`))},{id:"leave",label:"走開。這種廣告你見過太多。",hint:"侵蝕 -2",apply:t=>(ye(t,-2,"你沒有讓那句話留在腦子裡"),oe(`你走進人群。

身後的螢幕還在播，聲音被雨聲切碎，只剩下「同等」兩個字，反覆出現。`))}]},xy={id:"a1_ayase_scout",at:19,chapter:"第一天",title:"冰棺的丈量",scene:"alley",text:`深夜，你回到住處，門口站著一個人。

白髮，黑色手套，呼吸在冷空氣裡凝成很細的冰。她站的位置剛好是監視器的死角。

「綾瀬凍。」她說。「我不會問你的名字。」

她的視線從你手腕的終端移到你的眼睛，停了很久。

「你還能撐多久？」

雨落在她頭頂三公分處就停了。

「這不是關心。」她補了一句。「我在評估。」

你注意到她制服上的徽章被外套遮住一半，只看得到「至高」兩個字。

「學院派你來的？」

「學院派我來看數據。」她說。「你現在是數據。」`,choices:[{id:"show",label:"讓她看。反正藏不住。",hint:"情報 +1",apply:t=>(ce(t,1,"你觀察到綾瀬的評估方式"),oe(`她看了十秒，然後點頭。

「三十分。」她說。「滿分一百。」

「不是你的力量。是你還能活多久的估計。」

她走進雨裡，冰晶在身後碎成一地。`))},{id:"refuse",label:"關上門。你不接受評估。",hint:"警戒 -1",apply:t=>(z(t,-1,"你沒有和綾瀬交談"),we(`門關上時，你聽見她在門外說：

「明天你會想找我。」

你沒有回應。透過貓眼，她站了一會兒才離開，走得很慢，像在数自己的腳步。`))},{id:"ask",label:"反問她：你的 Level 是多少？",hint:"魅力檢定 DC 13",apply:t=>He(t,"charisma",13,"向綾瀬追問等級").ok?(ce(t,1,"綾瀬透露了自己的等級"),Ue(`「九。」她說得很乾脆。

「學院給的評級。真實數字裏八咫不會告訴我們。」

她看著你：「你問這個，代表你還以為等級決定誰能活著。」`)):(z(t,1,"你的問題讓綾瀬提高警覺"),Ye(`她沒有回答，只是把手套拉緊。

「你在浪費我的時間。」

門口的冰晶碎了一地。她走了。`))}]},Sy={id:"a1_inquisitor",at:21,chapter:"第一天",title:"黑色名片",scene:"street",text:`凌晨，你在便利商店的傘架上看到一張黑色的卡片。

不是傳單，是名片。上面只有一行字：

「神的審判，不屬於人的遊戲。」

背面是一個十字，十字的下端被削尖成刀。

店員說，剛才有一個穿黑衣的人留下來，什麼都沒買。

「他問我，」店員壓低聲音，「最近有沒有看見手腕上有紅光的人。」

「你怎麼回答？」

「我說沒有。」他看著你，眼神很平。「我每天都要說很多次沒有。」

他把那張名片推回你面前。

「你要就拿走。這種東西，我這裡還有很多。」`,choices:[{id:"keep",label:"讀完，收進口袋。",hint:"情報 +1",apply:t=>(ce(t,1,"你記下了審判庭的記號"),oe(`卡片比一般的名片厚，邊緣有毛邊，像是自己裁的。

你把它夾進終端和手腕之間，剛好蓋住那圈紅光。`))},{id:"ask",label:"問店員那個人的樣子。",hint:"魅力檢定 DC 12",apply:t=>He(t,"charisma",12,"向店員打聽黑衣人的樣貌").ok?(ce(t,1,"店員描述了黑衣人的特徵"),we(`「很高，很瘦，講話有口音。」店員想了想。「他左手少一根手指。」

「還有，他走的時候在唸東西。像禱告。」`)):(z(t,1,"店員開始留意你"),Ye(`「我沒看清楚。」店員突然改口，眼睛看向你身後。

你回頭。街上沒有人。`))},{id:"burn",label:"拿到後巷燒掉。",hint:"警戒 -1",apply:t=>(z(t,-1,"你處理掉了那張名片"),oe(`打火機的火很小，卡片燒得比紙慢。

灰燼落在水裡，十字和刀一起散開。

你看著那個圖案消失，心裡有一種說不出的輕鬆。`))}]},My={id:"a2_academy",at:27,chapter:"第二天",title:"觀察員",scene:"street",text:`中午，一輛白色的車停在路口。車身沒有標誌，只有一排很細的字：至高智人學院・觀察用。

車上下來四個人，穿同樣的深藍制服，年紀比你小。最前面那個拿著平板，一邊走一邊掃視街上的行人。

「打擾了。」他對你微微鞠躬。「我們在記錄，不會妨礙你。」

平板上是一張表格。第一欄是代號，第二欄是 Level，第三欄是狀態。

最後一欄寫著：預估存活。

他的手停在你的那一列，沒有按下去。

「學姐說，要尊重樣本。」他說，聲音很小，像在說給自己聽。

雨打在他的平板上，他用手掌抹掉，動作很輕。

他們只待了六分鐘。車開走時，你發現路口多了一根新的監視器。`,choices:[{id:"allow",label:"讓他記錄。反正你也想知道自己值多少。",hint:"情報 +1",apply:t=>(ce(t,1,"你看見學院對你的評估"),oe(`他按了一下。

「二十二小時。」他唸出來，然後抬頭看你，像在確認你有沒有生氣。

「這只是統計。」他補了一句。「不是預言。」`))},{id:"refuse",label:"伸手擋住平板。",hint:"警戒 -1",apply:t=>(z(t,-1,"你沒有被學院記錄"),we(`他把平板收回去，鞠躬的角度比剛才深。

「了解。我們會標記為拒絕受訪。」

四個人退回車上。車開走之後，你才發現他們從頭到尾沒有問過你的名字。`))},{id:"peek",label:"偷看平板上的其他資料。",hint:"感知檢定 DC 14",apply:t=>He(t,"wisdom",14,"偷看學院的平板").ok?(ce(t,2,"你看見全城參賽者的預估存活表"),Ue(`表格往下滑了一格。

你看見自己的名字旁邊寫著「樣本 A」，再往下是「樣本 B」「樣本 C」……

最底下一行被反白了：「對照組：神田隼人。」`)):(z(t,2,"觀察員注意到你在看"),Ye(`他忽然把平板轉向自己。

「不好意思。」他笑著說，但笑容沒有到眼睛。「這部分不對外公開。」`))}]},Ey={id:"a2_bounty",at:30,chapter:"第二天",title:"懸賞",scene:"street",text:`傍晚，街角的螢幕換成了另一種東西：一張懸賞榜。

照片是模糊的，但代號很清楚。灰、梟、無名、凍……每個名字後面都跟著一個金額。

最上面一行寫著：財團Z 收購戰績。活的比死的貴。

有人在榜前拍照，有人在抄號碼。沒有人覺得這有什麼不對。

你找到自己的代號。金額比你想的高。

旁邊有個穿西裝的人一直在看你，手裡拿著一個信封。

「你是本人嗎？」他問。

「不是。」

「沒關係。」他把信封遞過來。「名字寫在裡面，你自己填。」

你接過來。信封很薄，摸得到裡面有一張卡片。

他沒有等你回答，撐開傘就走了。`,choices:[{id:"take",label:"接下那封委託。",hint:"刻印 +3／警戒 +3",apply:t=>(Tt(t,3,"你接了財團Z 的懸賞"),z(t,3,"你的名字開始出現在懸賞榜上"),Ue(`信封裡是三個座標，和一張空白收據。

「簽名就好。」西裝男說。「上面會自己填上內容。」

你沒有問，誰會替你填。`))},{id:"tear",label:"把榜單撕下來。",hint:"警戒 +1",apply:t=>(z(t,1,"你撕掉了懸賞榜"),oe(`紙比你想的厚，撕的時候發出一聲很脆的響。

旁邊的人看著你，沒有人阻止。

十分鐘後，新的榜單印好了，金額一模一樣。`))},{id:"scan",label:"抄下其他人的懸賞金額。",hint:"情報 +1",apply:t=>(ce(t,1,"你記下了競爭者的價碼"),oe(`你把金額和代號抄在一起。

抄到第三個的時候你發現：金額高的都是 Level 5 以上。

財團Z 買的不是戰績，是風險。`))}]},Ty={id:"a2_naturalist",at:34,chapter:"第二天",title:"病毒論",scene:"street",text:`一個男人在你旁邊坐下來。他穿普通的外套，手上有機油的味道。

「你看那個榜了嗎？」他問，語氣像在聊天氣。

「他們把人標價。你也覺得那很正常吧。」

他沒有等你回答。

「如果世界是一台電腦，你們就是病毒。病毒不會覺得自己有問題——病毒只會覺得自己在活著。」

他從口袋拿出一張傳單，放在你們之間。

「我們不是恨你。我們是怕你。」

「你會怕你自己嗎？」

他等著，沒有催。

你注意到他左手的小指少了一截，傷口很舊，像被什麼東西整齊地切掉。

他順著你的視線看下去，把手收進袖子裡。

「這是工作傷害。」他說。「不是你們做的。」`,choices:[{id:"listen",label:"聽完。",hint:"情報 +1",apply:t=>(ce(t,1,"你理解自然主義者的想法"),oe(`他說了很久。

最後他站起來，把傳單留在椅子上。

「如果你哪天覺得自己快變成別的東西，」他說，「打這個電話。」

傳單背面寫著一個號碼，沒有印標誌。`))},{id:"argue",label:"反駁他：病毒也會死。",hint:"魅力檢定 DC 14",apply:t=>He(t,"charisma",14,"反駁自然主義者").ok?(ce(t,1,"你逼出了他的一點真心話"),we(`「那你告訴我，」你說，「你們清除病毒的時候，會先問病毒想不想活嗎？」

他沉默了很久。

「不會。」他說。「但我會記得我問過你這個問題。」`)):(z(t,2,"你們的爭執引起注意"),Ye(`「說得好。」他笑了。「那你就好好證明給我看。」

他起身離開。你發現自己剛才說得太用力，喉嚨有點痛。`))},{id:"leave",label:"站起來走開。",hint:"警戒 -1",apply:t=>(z(t,-1,"你避開了意識形態的爭執"),oe(`你沒有回頭。

走了兩條街之後，你才發現自己一直把手腕的終端藏在袖子裡。`))}]},Ay={id:"a2_tighten",at:38,chapter:"第二天",title:"規則修正",scene:"alley",text:`終端在午夜準時亮起。不是點名，是一行新的規則。

「第七次選別・規則修正（第二次）」

「一、夜間十一時至五時，不得在主要道路活動。」
「二、刻印價值提升為兩倍。」
「三、生存人數：二十一人。」

「修正即刻生效。」

你讀到第三行時，才發現自己一直在心裡算：二十一。

從三十到二十一，過了三十八個小時。

沒有人告訴你那九個人是怎麼被「減少」的。

你把終端翻面放在桌上，讓螢幕朝下。

三秒後你又把它翻回來。

你發現自己開始害怕錯過通知——這比通知本身更讓你害怕。`,choices:[{id:"memorize",label:"把新規則記下來，連時間一起。",hint:"情報 +1",apply:t=>(ce(t,1,"你記錄了選別規則的變化"),oe(`你發現一件奇怪的事：每一條新規則，都讓這座城市變得更像一座監獄。

但沒有一條規則說，不能活著。`))},{id:"comply",label:"立刻回住處。今晚不出去。",hint:"警戒 -1",apply:t=>(z(t,-1,"你遵守了宵禁"),we(`你繞開主要道路，走小巷回去。

經過便利商店時，店裡的燈還亮著。你想起那個見習店長，不知道他有沒有被算進那九個人。`))},{id:"defy",label:"繼續走。規則不是為你寫的。",hint:"警戒 +3／刻印 +2",apply:t=>(z(t,3,"你在宵禁時段外出"),Tt(t,2,"你在宵禁的街上找到兩個落單的參賽者"),Ue(`街上真的沒有人。

只有監視器的紅點，一盞一盞跟著你。

你走到第三個路口時，終端跳出一行字：「違規記錄已建立。」`))}]},wy={id:"a2_crown_trace",at:42,chapter:"第二天",title:"結晶巷",scene:"alley",text:`你走進一條沒有名字的巷子。

整條巷子的牆都覆著一層透明的結晶，像有人把雨凍在半空。

一隻貓停在路中央，也被凍住了。牠還在呼吸。

巷子深處有人蹲著，對著牆說話。

「他說要來看我們。」那個人回頭，眼睛是白的。「他說我們都是失敗品，失敗品最接近真相。」

終端顯示：侵蝕反應 100%。

不是你的。

你注意到巷口的門牌還在，字被結晶包住，只看得出「常夜」兩個字。

蹲著的人開始用額頭撞牆，一下，一下，節奏很穩。

結晶沒有碎。他的額頭也沒有流血。

你退了出去。身後的牆發出一聲很輕的、像冰塊擠壓的聲音。`,choices:[{id:"investigate",label:"檢查牆上的結晶。",hint:"知性檢定 DC 14",apply:t=>He(t,"intelligence",14,"分析異常結晶").ok?(ce(t,2,"你推斷出王冠的能力性質"),Ue(`結晶裡有指紋。

不是人的指紋，是很多人的，一個疊一個，像有人把整條巷子的人都握進手裡。

你退了一步。結晶跟著你的動作長了一小截。`)):(en(t,1,"結晶割傷你的手背"),Ye(`你伸手碰了一下。

結晶沒有碎，卻順著你的皮膚長了半公分。你把皮刮掉，血滴在晶面上，停住不動。`))},{id:"save",label:"把蹲著的那個人拉走。",hint:"意志檢定 DC 13",apply:t=>He(t,"wisdom",13,"把倖存者從結晶巷帶走").ok?(ce(t,1,"倖存者說出了王冠的名字"),we(`他比你輕。你半拖半抱把他帶出巷子。

「他叫王冠。」他一直在重複這句。「他說他最強，所以他要來。」`)):(en(t,1,"你的手掌被結晶劃開"),Ye(`你抓住他的手臂，他卻反過來抓住你。

「你也是失敗品。」他笑著說。

你甩開他，退出巷子。他沒有追出來。`))},{id:"retreat",label:"離開。這裡不是你該來的地方。",hint:"警戒 -1",apply:t=>(z(t,-1,"你沒有在結晶巷停留"),oe(`你退回大路上。回頭看，巷口窄得像一條裂縫。

那隻貓還在原地。牠的尾巴動了一下，很慢。`))}]},Ry={id:"a2_kanda_file",at:46,chapter:"第二天",title:"檔案：Level 20",scene:"street",text:`地鐵站的失物招領櫃沒鎖。裡面有一個公文夾。

你打開它。

第一頁是人事檔案。姓名欄：神田隼人。年齡：十七。

沒有顯現。沒有改造。六項能力值：20/20/20/20/20/20。

附註寫著：「人類極限。不作戰力分級。」

後面釘著一張影印本，紙更黃，字更舊：

「修羅神槍・劉千軍。Level 20。評估：不可接觸。」

兩份檔案被同一根釘書針釘在一起。

你翻到最後一頁，發現還有一行手寫的字，墨水顏色不一樣：

「如果這兩個人都無法阻止，那就不是我們的問題了。」

沒有署名。字跡很漂亮，像練過的。`,choices:[{id:"read",label:"讀完，包括附錄。",hint:"情報 +2",apply:t=>(ce(t,2,"你讀完了神田與劉千軍的對照檔案"),Ue(`附錄只有一頁：

「若 Project Ignis 出現 Level 15 以上個體，啟動神田隼人。」

「若出現 Level 20 個體，啟動全部權限。」

底下蓋著一個印章，不是裏八咫的。是財團Z 的。`))},{id:"take",label:"把整份檔案帶走。",hint:"警戒 +2／情報 +1",apply:t=>(ce(t,1,"你帶走了神田的檔案"),z(t,2,"失物招領櫃被翻動過"),Ue(`你把檔案塞進外套內側。

走出車站時，月台的廣播剛好在唸：「遺失物品請至服務台認領。」

你沒有回頭。`))},{id:"return",label:"放回去。有些東西不該被帶走。",hint:"警戒 -1",apply:t=>(z(t,-1,"你沒有拿走檔案"),oe(`你把公文夾放回原位，角度擺得跟原本一樣。

走出車站時，你發現自己在想那個數字：20。

不是二十級，是二十項能力值。六項全部。`))}]},Cy={id:"a3_curfew",at:50,chapter:"第三天",title:"宵禁",scene:"street",text:`凌晨，城市的聲音變了。

不是變安靜，是變成一種規律：軍靴、擴音器、鐵門拉下的聲音。

擴音器重複同一句：「居民請於三十分鐘內撤離本區。」

路口的裝甲車沒有標誌。車頂站著一個穿風衣的人，正在看手錶。

他知道誰還沒走。

你隔著一條街看著他。他沒有看你，只是把手插進口袋，像在等一個很慢的綠燈。

撤離的人排成一列，每個人手上都拿著一個袋子。有人帶了棉被，有人帶了相框，有人什麼都沒帶。

一個老太太走到封鎖線前停下來，回頭看自己的房子。

然後她轉回來，繼續往前走。`,choices:[{id:"help",label:"幫還在搬東西的住戶撤離。",hint:"羈絆感／警戒 -2",apply:t=>(z(t,-2,"你幫居民撤離，沒有人記得你的臉"),ye(t,-4,"你花了一個小時當一個普通人"),we(`你替一個老太太搬了兩箱書。她一直說不好意思，說這些書是她先生的。

「他走的時候說，書比人記得久。」

你幫她把箱子放上車，關上門。`))},{id:"slip",label:"趁封鎖的縫隙移動到下一區。",hint:"敏捷檢定 DC 14",apply:t=>He(t,"dexterity",14,"穿過封鎖線").ok?(ce(t,1,"你摸清了封鎖線的輪換時間"),we(`你貼著騎樓走，在兩輛裝甲車之間的空檔穿過去。

輪換是每二十分鐘。你把這件事記下來。`)):(z(t,4,"你被探照燈掃到"),en(t,1,"你翻越鐵絲網時割傷小腿"),Ye(`探照燈掃過來的時候，你正卡在鐵絲網上。

你跳下來，滾進排水溝。燈光在你剛才的位置停了很久。`))},{id:"watch",label:"留在原地，看清楚他們怎麼運作。",hint:"情報 +1",apply:t=>(ce(t,1,"你記錄了裏八咫的撤離流程"),oe(`他們先撤人，再斷網，最後才進場。

每一區都一樣。像一份寫好的 SOP。

你想起那個快遞說的話：你這種人，比我們準時。`))}]},Ly={id:"a3_trial",at:55,chapter:"第三天",title:"神判",scene:"street",text:`審判庭的人來得比神田安靜。

三個黑衣人站在封鎖線前，中間那個左手少一根手指。

「裏八咫。」他說，聲音不大，卻讓擴音器停了下來。「你們在神的土地上辦遊戲。」

他舉起一張紙，上面蓋著十字的印。

「把參賽者交出來。全部。」

封鎖線後面的裝甲車沒有動。擴音器也沒有再響。

整條街只剩下雨聲，和一個人在等回答。

少一根手指的人等了大約十秒，然後把紙折好，收回懷裡。

「那就當你們拒絕了。」

他轉身，三個人在雨裡走成一個很整齊的橫排。

走到街角時，其中一個回頭看了你一眼。`,choices:[{id:"observe",label:"躲在騎樓下看。",hint:"情報 +1",apply:t=>(ce(t,1,"你看見裏八咫與審判庭的對峙"),Ue(`裏八咫的回答只有一句，透過擴音器：

「選別進行中。不予受理。」

黑衣人點了點頭，像早就知道答案。

「那我們自己來。」`))},{id:"approach",label:"走上前，問他們憑什麼。",hint:"魅力檢定 DC 15",apply:t=>He(t,"charisma",15,"質問審判庭").ok?(ce(t,2,"審判庭的人透露了他們的目標"),Ue(`少一根手指的人轉頭看你，眼神不帶怒氣。

「你身上有魔素的味道。」他說。「跟那個已經變成東西的人一樣。」

「我們不是來審判你的。我們是來審判那個把你們聚在一起的人。」`)):(z(t,5,"你被審判庭盯上"),Ye(`他才看了你一眼，你身邊的雨就停了。

「退下。」他說。

你的膝蓋自己軟了下去。`))},{id:"flee",label:"趁對峙離開這條街。",hint:"警戒 -2",apply:t=>(z(t,-2,"你避開了審判庭的視線"),oe(`你退進巷子。

身後傳來玻璃碎裂的聲音，不是槍。

你沒有回頭。`))}]},Py={id:"a3_survivors",at:58,chapter:"第三天",title:"剩下的人",scene:"street",text:`你在車站地下街遇見一個參賽者。

他坐在售票機旁邊，腿上有一道很深的傷口，血已經乾成黑色。

「不用看了。」他說。「我跑不動。」

他把終端放在地上，推向你。

「你要就拿去。刻印還在。」

「我只想知道一件事。」他抬頭，眼睛很亮。「你覺得活下來的那個人，還算是人嗎？」

他等著，很有耐心，像這個問題比他的腿更重要。

售票機的螢幕在他身後亮著，顯示下一班車還有四分鐘。

你注意到那班車永遠不會來。這條線三天前就停了。`,choices:[{id:"take",label:"拿走終端。",hint:"刻印 +4／侵蝕 +3",apply:t=>(Tt(t,4,"你接收了一個垂死參賽者的刻印"),ye(t,3,"你拿了不該拿的東西"),Ue(`終端在你手裡震了一下。

他看著你收下，居然笑了。

「謝了。」他說。「至少有人會記得我死在哪裡。」`))},{id:"patch",label:"替他包紮。",hint:"肉體 +2／侵蝕 -4",apply:t=>(Si(t,2,"你替他包紮，也整理了自己的傷"),ye(t,-4,"你做了一件不需要理由的事"),we(`你把外套撕成布條，纏住他的腿。

「你為什麼要這樣做？」他問。

「因為我還有布。」你說。

他笑出聲，然後咳了很久。`))},{id:"sit",label:"坐下來，陪他一會。",hint:"侵蝕 -6",apply:t=>(ye(t,-6,"你陪一個陌生人坐到天亮"),oe(`你們沒有再說話。

地下街的燈一盞一盞熄，只剩售票機的螢幕還亮著。

天亮的時候，他已經沒有呼吸了。

你替他闔上眼睛，把終端留在他手裡。`))}]},Iy={id:"a3_bond_leverage",at:61,chapter:"第三天",title:"抵押品",scene:"alley",text:`終端彈出一張照片。

照片裡，澪站在家門口，手上提著便利商店的袋子。拍攝角度是對街的車裡。

下面一行字：

「協議期間，請保持距離。下一次，不會只是照片。」

沒有署名。也不需要。

你放大照片，看見她家門口的傘架——你去年買的那把還在。

她的頭髮長了一點。

背景那家店的招牌換了新的，燈管比之前亮。

你想著她今天大概又買了什麼，想著那家店的老闆會不會記得她。

然後你想著，這些事情現在都被人拍下來了。

你把照片存下來，沒有刪。`,choices:[{id:"warn",label:"打電話叫她立刻離開。",hint:"羈絆 +2／警戒 +5",apply:t=>(dn(t,"family",2),z(t,5,"你打了那通電話"),Ue(`「哥？」

「聽我說。現在收拾東西，去阿姨家。不要問為什麼。」

她安靜了三秒。

「好。」她說。然後又補了一句：「你也要回來。」`))},{id:"ignore",label:"把照片刪掉。他們只是在嚇你。",hint:"侵蝕 +5",apply:t=>(ye(t,5,"你把那張照片刪掉，卻刪不掉裡面的臉"),Ye(`你按下刪除。

照片消失了，但你知道它還存在於某個你看不到的地方。

這就是「抵押品」的意思：它不屬於你，卻壓在你身上。`))},{id:"reply",label:"回傳一張自己的照片，站在監視器下。",hint:"警戒 +8／情報 +1",apply:t=>(z(t,8,"你主動向裏八咫示威"),ce(t,1,"你逼裏八咫回應了一次"),Ue(`你站在便利商店的監視器下，舉起終端，自拍。

三秒後，終端回覆：

「已記錄。請注意，你正在提高自己的回收優先級。」

你把終端收進口袋。手在抖，但你在笑。`))}]},Dy={id:"a3_kanda_offer",at:66,chapter:"第三天",title:"一次機會",scene:"docks",text:`神田隼人站在貨櫃之間，手裡沒有劍。

「我給你一次機會。」他說。「不是逃跑的那種。」

他把一份文件放在地上，退後三步。

「裡面的東西可以讓這場選別停下來。但只要你交出去，裏八咫會先殺你，再殺你身邊的人。」

雨順著他的下巴滴下來。

「你可以不交。」他補了一句。「我不會阻止你活著。」

你看著地上的文件。紙角被雨打濕，慢慢變軟。

他退到三步之外，手插在口袋裡，像在等一班不會來的車。

你忽然發現，這是三天以來第一次有人把選擇權完整地交到你手上。

這讓你更難選。`,choices:[{id:"take",label:"拿起文件。",hint:"取得證據／警戒 +6",apply:t=>(z(t,6,"你拿走了神田給的文件"),ce(t,2,"你取得了可以終止選別的證據"),t.player.flags.has_evidence=!0,Ue(`文件只有四頁。第一頁是選別名單，最後一頁是處分順序。

你的名字在第三頁，編號第七。

神田沒有看你。他转身走進雨裡，背影像一句還沒說完的話。`))},{id:"ask",label:"問他：你為什麼要幫我？",hint:"魅力檢定 DC 14",apply:t=>He(t,"charisma",14,"問神田理由").ok?(ce(t,1,"神田說出了他的名字"),oe(`他沉默了很久。

「十年前，霧見市。」他說。「有一個人在那份名單上。」

「我不是在幫你。我是在找她。」

他走了。文件還在地上。`)):(z(t,2,"神田不願多說"),Ye(`「你不需要知道。」

他把文件收回口袋，動作很輕。

「我以為你會問別的問題。」`))},{id:"refuse",label:"不拿。你不想欠他。",hint:"警戒 -3",apply:t=>(z(t,-3,"你沒有拿走文件"),we(`你退後一步。

他看著你，點了點頭，沒有失望，也沒有讚許。

「那我們在閉幕見。」`))}]},Ny={id:"a3_last_hour",at:69,chapter:"第三天",title:"還活著的人",scene:"street",text:`第七十小時。

城市安靜得不正常。便利商店的燈還亮著，但沒有人。

你在玻璃門上看到自己的倒影，發現自己已經不太確定那是不是你。

終端顯示：距離閉幕，還有兩小時。

還活著的人：4。

街上沒有任何聲音。連雨都停了。

你想起剛到這座城市的那個晚上，鞋裡進水，電子鐘停在 23:47。那個時候你還會數自己的呼吸。

現在你連自己走了幾步都不記得。

遠處有一盞路燈閃了一下，然後熄掉。

你發現自己在等它再亮起來。它沒有。`,choices:[{id:"hunt",label:"去找剩下的三個人。",hint:"警戒 +6／刻印 +5",apply:t=>(z(t,6,"你在最後兩小時主動出擊"),Tt(t,5,"你在閉幕前解決了一名參賽者"),Ue(`你在第三條街找到第一個。

他沒有反抗，只是看著你，像在看一個終於到來的答案。

終端更新：還活著的人，3。`))},{id:"hide",label:"找個地方躲到最後。",hint:"警戒 -4",apply:t=>(z(t,-4,"你躲過了最後兩小時"),we(`你躲進一間打烊的書店，坐在童書區的地板上。

外面有腳步聲經過，停了幾秒，又走遠。

你看著書架上一本給小孩的圖畫書，封面是一隻貓。`))},{id:"rest",label:"整理傷口，準備面對閉幕。",hint:"肉體 +3",apply:t=>(Si(t,3,"你在最後兩小時處理了傷口"),oe(`你把剩下的止血凝膠全部擠出來，塗在最深的那道傷口上。

痛覺被一層冰冷的東西蓋住。

你活動了一下手指，還能握拳。`))}]},Uy={id:"a3_broadcast",at:64,chapter:"第三天",title:"最後一次廣播",scene:"street",text:`凌晨兩點，全城的廣播同時打開。

不是終端，是真正的廣播——街燈上的、便利商店天花板的、車站月台的。

「第七次選別，最後階段。」

「生存人數：十一。」

「刻印排行前三名將獲得赦免。其餘存活者，通過選別。」

「閉幕時間不變。」

廣播結束後，城市安靜了兩秒，然後是所有喇叭同時關閉的雜音。

十一。你在心裡數：三十、二十一、十一。

每一次廣播，數字都少一半。

你開始懷疑這不是淘汰，是被挑選。

街角的擴音器又響了一次，這次只有很短的一句：

「恭喜各位走到這裡。」

那句話聽起來，像有人真的在恭喜你。`,choices:[{id:"record",label:"記下排行與剩下的時間。",hint:"情報 +1",apply:t=>(ce(t,1,"你記下了最後階段的規則"),oe(`你把三個數字寫在牆上，用石頭刻：30、21、11。

刻完之後你退後一步看，發現它們排成一個很整齊的斜線。

像一份成績表。`))},{id:"hunt_leaders",label:"去找排名前三的人。",hint:"警戒 +4",apply:t=>(z(t,4,"你在尋找排名前三的參賽者"),Ue(`終端顯示他們的大致方位：三個光點，集中在港區。

你走了兩條街就停下來。

三個光點裡，有一個正朝你移動。`))},{id:"hide",label:"找個地方躲起來。",hint:"警戒 -2",apply:t=>(z(t,-2,"你躲過了最後階段的第一次廣播"),we(`你躲進一棟停工的大樓，坐在二樓的樓梯間。

外面的廣播又響了一次，聲音被牆吃掉一半。

你把外套拉緊，發現自己開始習慣這種安靜。`))}]},ky={id:"a3_kanda_question",at:59,chapter:"第三天",title:"一個問題",scene:"street",text:`神田隼人在便利商店的停車場等你。

他沒有帶傘，雨落在肩上，把風衣的顏色壓深。

「我問你一個問題。」

他沒有說「如果你回答」，也沒有說「不回答我就抓你」。

「如果這場選別結束，你活下來了，你會做什麼？」

停車場的燈管閃了一下。

你發現自己沒有答案。

他也沒有催你。雨水從他的下顎滴下來，落在柏油路上。

「我問過很多人這個問題。」他說。「大部分的人回答『活下去』。」

「那不是答案。」

「那也是答案。」他說。「只是很短的答案。」

他把手插進口袋。「想清楚了再回答我。不急。」

他走了。地上留著一個沒有被雨淋濕的鞋印。`,choices:[{id:"honest",label:"說實話：不知道。",hint:"侵蝕 -5",apply:t=>(ye(t,-5,"你對一個人類說了實話"),we(`「不知道。」你說。

他點頭，像這個答案在他的預期之內。

「那就先活下來。」他說。「答案之後再找。」

他转身走了。你站在原地，覺得比剛才輕了一點。`))},{id:"ask_back",label:"反問他：那你呢？",hint:"魅力檢定 DC 14",apply:t=>He(t,"charisma",14,"反問神田").ok?(ce(t,1,"神田說出了他的答案"),Ue(`「找到一個人。」他說得很慢。「十年前沒有找到，現在還在找。」

「如果找不到呢？」

「那就繼續找。」

他看了你一眼。「這就是我的答案。」`)):(z(t,2,"神田不願回答"),Ye(`他看著你，看了很久。

「問題是我問的。」

他轉身走了。`))},{id:"silent",label:"沉默。",hint:"警戒 -1",apply:t=>(z(t,-1,"你沒有回答神田"),oe(`你沒有說話。

他等了一分鐘，然後從口袋拿出一包菸，抽了一根，沒有點。

「也好。」他說。「有些答案說出來就變質了。」`))}]},Oy={id:"a3_priest_choice",at:56,chapter:"第三天",title:"審判庭的條件",scene:"alley",text:`少一根手指的人在你住處樓下等你。

「我不是來殺你的。」他說。「我是來給你一個選擇。」

他把一份文件遞過來。上面是選別的名單，與處分順序。

「把這個交給外面的世界。審判庭可以保住你。」

「但你要在法庭上作證，說出你殺過的每一個人。」

他等著。

「或者，你拿著它活到閉幕。沒有人會知道發生過什麼。」

雨落在文件上，他沒有收回去。

「你為什麼要幫我？」

「我不幫你。」他說。「我幫那些名字。」

他指了指名單最下面幾行——那些已經被劃掉的名字。

「他們沒有親人。沒有人會替他們問。」

他把手收回長袍裡。「所以只能由我來問。」`,choices:[{id:"accept",label:"接下文件。",hint:"取得證據／警戒 +6",apply:t=>(ce(t,2,"你取得了審判庭需要的證據"),z(t,6,"你與審判庭達成協議"),t.player.flags.has_evidence=!0,Ue(`文件只有三頁。

他看著你收下，點了點頭。

「選別結束後，會有人來接你。」

「如果你活得到那個時候。」`))},{id:"refuse",label:"拒絕。你不想在法庭上說出那些名字。",hint:"警戒 -2",apply:t=>(z(t,-2,"你拒絕了審判庭"),oe(`他把文件收回長袍裡。

「我明白。」

「審判不會因為你拒絕而停止。」

他走進雨裡。你注意到他的靴子上有泥。`))},{id:"price",label:"問他：代價是什麼？",hint:"魅力檢定 DC 13",apply:t=>He(t,"charisma",13,"追問審判庭的代價").ok?(ce(t,1,"你問出了審判庭的真正目的"),Ue(`「代價是，你會知道自己是什麼。」

「選別不是裏八咫發明的。它是一份更古老的儀式的複製品。」

「我們想知道的，從來不是誰最強。」

「是誰還願意當人。」`)):(z(t,1,"審判庭對你提高警覺"),Ye(`「你沒有資格問代價。」

他的語氣沒有變，但雨在他身邊停了。

「等你有資格的時候，再來問。」`))}]},Fy={id:"a3_crown_whisper",at:62,chapter:"第三天",title:"王冠的低語",scene:"alley",text:`你在巷口聽見有人叫你的代號。

回頭，沒有人。

「你會來看我嗎？」

聲音從排水溝裡傳出來，溫柔得像主持婚禮的那種溫柔。

「最後一個小時，碼頭。我請你看一樣東西。」

你認得這個聲音。你只在終端裡聽過一次。

終端顯示：王冠。侵蝕率 100%。距離 1.2 公里。

排水溝的水面浮著一層薄薄的結晶，映出你的臉——比你記得的樣子年輕一點。

「你也是失敗品。」那個聲音說。「失敗品最接近真相，因為失敗品知道自己缺什麼。」

「你缺什麼？」你問。

水面的倒影笑了，比你慢了半秒。

「一個活著的見證人。」`,choices:[{id:"go",label:"去碼頭。你想知道他請你看什麼。",hint:"警戒 +3／情報 +1",apply:t=>(z(t,3,"你朝碼頭方向移動"),ce(t,1,"你知道王冠在等你"),Ue(`你走了三步，終端就跳出新的提示：

「目標移動中。方向：第七號碼頭。」

他把自己的位置公開了。

像一個不怕被找到的人。`))},{id:"away",label:"往反方向走。",hint:"警戒 -2",apply:t=>(z(t,-2,"你遠離了碼頭"),oe(`你往城市的內陸走。

走了十分鐘，聲音又來了，這次在手機的聽筒裡：

「每個人最後都會來。」

「你也會。」`))},{id:"report",label:"把位置回報給裏八咫。",hint:"情報 +2／警戒 +1",apply:t=>(ce(t,2,"你把王冠的位置交給了裏八咫"),z(t,1,"你主動與裏八咫通訊"),Ue(`你按下回報鍵。

終端回覆得很快，快得像早就準備好：

「已收到。請勿接近。王冠為最終處置對象。」

「由神田隼人執行。」`))}]},By={id:"a1_gossip",at:13,chapter:"第一天",title:"那一格是空的",scene:"street",text:`便利商店的電視在播另一則新聞。

「國際超越者管理機構今日公布最新分級——」

畫面切到一張表格，Level 1 到 20，每一格都寫著對應的戰力描述。

你看到 20 那一格是空的。

主播說，那一格屬於一個已經不在名單上的人。

「劉千軍。」她唸這個名字的時候，聲音低了半度。「最後一次出現是十年前，摧毀了一座城市之後。」

旁邊有個男人也在看同一則新聞。他低聲說：「假的吧。」

沒有人回答他。

你看著那格空白，忽然想到一件更奇怪的事：

空白不是因為他在 20，是因為沒有人敢替他填 21。`,choices:[{id:"remember",label:"記下那個名字。",hint:"情報 +1",apply:t=>(ce(t,1,"你記下了修羅神槍的名字"),oe(`劉千軍。

你在心裡唸了一次，像在確認這個名字有沒有重量。

有。而且比你想像的重。`))},{id:"ask",label:"問那個男人：你相信嗎？",hint:"魅力檢定 DC 12",apply:t=>He(t,"charisma",12,"問路人關於劉千軍").ok?(ce(t,1,"路人說出了自己的版本"),we(`「我叔叔在那一區當兵。」他沒有看你。「他說那天沒有人聽見爆炸。整座城就只是——不見了。」

他把菸按熄在牆上，走了。`)):(z(t,1,"你問了不該問的問題"),Ye(`他看了你一眼，把菸收進口袋。

「當我沒說。」

他走進便利商店，沒有再出來。`))},{id:"leave",label:"離開。這跟你無關。",hint:"警戒 -1",apply:t=>(z(t,-1,"你沒有在電視前停留"),oe(`你走出便利商店。

身後的電視還在播，主播換了下一個話題。

那一格空白只出現了七秒。`))}]},$y={id:"a2_reclaim",at:41,chapter:"第二天",title:"回收隊",scene:"alley",text:`一輛沒有標誌的貨車停在巷口。

三個人下車，穿財團Z 的白色防護衣，動作熟練。他們把一具屍體抬上擔架，蓋上布。

「回收第幾件？」其中一個問。

「第七。」

「刻印呢？」

「已經轉走了。」

他們把屍體推進車裡，關上門。整個過程不到兩分鐘，沒有任何人多看一眼。

你在對街看完了全程。

終端彈出一行字：「感謝您的配合。」

貨車開走前，其中一個人停下來，朝你的方向看了一眼。

他沒有走過來，只是舉起手，做了一個很輕的、像打招呼的動作。

然後上車。門關上。車走了。`,choices:[{id:"follow",label:"跟蹤那輛貨車。",hint:"敏捷檢定 DC 14",apply:t=>He(t,"dexterity",14,"跟蹤回收車").ok?(ce(t,2,"你找到了財團Z 的回收站"),Ue(`貨車開進港區一棟沒有招牌的倉庫。

門口停著七輛同樣的車。

你在對街數了一下，整排擔架都蓋著布。`)):(z(t,3,"你跟蹤時被發現"),Ye(`貨車在下一個路口突然停下來。

你閃進騎樓，看見後照鏡裡有一張臉正在看你。

車子重新啟動，走了。`))},{id:"plate",label:"記下車牌與時間。",hint:"情報 +1",apply:t=>(ce(t,1,"你記錄了回收隊的車牌"),oe(`車牌是新的，字體比一般的車牌細。

你把號碼寫在終端背面，和之前那組編號並排。

兩組號碼之間，只差一個數字。`))},{id:"leave",label:"離開。不要看。",hint:"警戒 -2",apply:t=>(z(t,-2,"你沒有介入回收作業"),oe(`你轉進另一條巷子。

身後傳來擔架輪子壓過水窪的聲音，很輕。

你沒有回頭。`))}]},zy={id:"a3_room",at:65,chapter:"第三天",title:"結算程序",scene:"street",text:`裏八咫的廣播換了一個聲音。不是之前那個唸貨單的聲音，是另一個，年輕一點。

「結算程序啟動。」

「存活確認：四人。」

「赦免名額：一名。」

「其餘三人：回收。」

廣播停了兩秒。

「你們可以選擇現在放棄。放棄者會得到一個比較乾淨的處理方式。」

城市裡沒有人回答。

你聽見遠處有玻璃碎裂的聲音，然後是槍聲，很遠。

那個年輕的聲音又開口了，語氣幾乎稱得上溫和：

「提醒各位，放棄不是懦弱。放棄是一種合作。」

你想起那份文件上「是否仍具備人格」的勾選欄。

那一欄到現在還是空的。`,choices:[{id:"continue",label:"繼續。你已經走到這裡了。",hint:"警戒 +2",apply:t=>(z(t,2,"你選擇留在選別裡"),Ue(`你按下終端的確認鍵。

螢幕顯示：「選別繼續。祝你好運。」

那是這三天裡，裏八咫第一次對你說「祝你好運」。`))},{id:"probe",label:"查另外三個人在哪裡。",hint:"情報 +1",apply:t=>(ce(t,1,"你定位了剩下的參賽者"),oe(`終端給出三個座標，都在港區。

其中一個座標在移動，速度很快。

另一個，從剛才到現在都沒有動過。`))},{id:"hide",label:"找地方躲到最後。",hint:"警戒 -2",apply:t=>(z(t,-2,"你決定躲到結算"),we(`你找到一間廢棄的牙醫診所，二樓的診療椅還在。

你坐上去，椅背往後倒了一點。

天花板的燈管壞了，只剩一盞還在閃。`))}]},Hy={id:"a3_last_call",at:67,chapter:"第三天",title:"最後一通電話",scene:"alley",text:`距離閉幕，還有五小時。

你撥了那個號碼。

響了七聲她才接。

「哥？」

「嗯。」

「你那邊好安靜。」

「嗯。」

你聽見她吸了一口氣，像要說什麼，又吞回去。

「我在阿姨家。」她說。「窗外有棵樹。春天會開花。」

「好。」

「你會回來看嗎？」

你看著碼頭的方向。那裡有一顆紅色的光點，正在緩慢移動。

「會。」

這次你說得很穩。

掛斷之後，你把終端貼在耳邊，聽了一段時間的忙音。

忙音比人聲老實。`,choices:[{id:"more",label:"再多說一點。",hint:"羈絆 +2／警戒 +3",apply:t=>(dn(t,"family",2),z(t,3,"通話時間過長，被記錄"),Ue(`你跟她說了那家便利商店的見習店長、說了下雨的頻率、說了碼頭的燈。

她安靜地聽，偶爾應一聲。

掛斷前她說：「哥，你講話的方式變了。」

「哪裡變了？」

「你以前不會講這麼多。」`))},{id:"hangup",label:"掛斷。",hint:"侵蝕 -4",apply:t=>(ye(t,-4,"你主動結束了通話"),oe(`「我要去忙了。」你說。

「嗯。」她說。「小心。」

你掛斷，把手機收進口袋。

口袋裡還有那顆印著貓的糖果。`))},{id:"silence",label:"什麼都不說，聽她呼吸。",hint:"侵蝕 -6",apply:t=>(ye(t,-6,"你只是聽著她的呼吸"),we(`你沒有說話。她也沒有。

通話時間跳到四分鐘、五分鐘。

最後是她先開口：「好了，我知道你在。」

「嗯。」

她掛了電話。`))}]},Pl=[Hb,gy,vy,_y,by,yy,xy,Sy,My,Ey,Ty,Ay,wy,Ry,Cy,Ly,Py,Iy,Dy,Ny,Uy,ky,Oy,Fy,By,$y,zy,Hy,Gb,Vb,Wb,Xb,qb,Yb,Zb,Kb,Jb,Qb,jb,ey,ty,ny,iy,ay,ry,sy,oy,hy,ly,cy,dy,uy,fy,...my,...Bb];uh.push({id:"r_skirmish",at:0,random:!0,chapter:"插曲",title:"不屬於你的戰鬥",scene:"street",text:`街角的自動販賣機被撞翻。

兩個超越者正在雨裡互相撕扯，路過的人全都低下頭。

其中一個看見你，咧嘴笑了。「喂。要加入嗎？」

另一個人的血已經流到你的鞋尖。

他們的動作都很粗糙，像剛覺醒不久的人——招式沒有練過，全靠本能。

販賣機裡的飲料滾了一地，有一罐在你腳邊停下，標籤上印著財團Z 的標誌。

你注意到他們的終端：一個還亮著，一個已經黑了。

黑掉的那個，手腕上沒有紅光。

他已經死了，還在被拖著打。`,choices:[{id:"join",label:"加入戰鬥。",hint:"進入戰鬥／可獲得刻印",apply:t=>(Mi(t,"kurokawa"),oe("你踏進水窪。「現在，」你說，「輪到我了。」"))},{id:"evade",label:"避開這場戰鬥。",hint:"敏捷檢定 DC 14／失敗會受傷",apply:t=>He(t,"dexterity",14,"在混戰中穿過街角").ok?(z(t,-2,"你沒有留下痕跡"),we("你貼著牆走過去。身後的碰撞聲很遠，像另一個城市的事。")):(en(t,1,"你被飛來的碎玻璃劃傷"),Ye("你退得太慢。一塊碎玻璃擦過你的臉，血混進雨裡。"))},{id:"watch",label:"站在暗處看完。",hint:"情報 +1／警戒 +2",apply:t=>(ce(t,1,"你記下了兩個超越者的戰鬥方式"),z(t,2,"你停留在現場"),oe("你沒有出手。你看見其中一個人怎麼倒下，也看見另一個人怎麼補上最後一腳。這些都會有用。"))}]});const hh=uh,ac=new Map([...Pl,...hh].map(t=>[t.id,t]));function fh(t,e){t.phase!=="play"||t.pending||(t.stance=e)}function kd(t,e){t.phase!=="play"||t.pending||t.battle||t.ending||(t.stance=e,rc(t))}function Gy(t,e){t.phase==="play"&&t.bonds.some(n=>n.id===e&&n.alive)&&(t.contactTarget=e,t.stance="contact")}function Od(t,e){[0,1,2,4,8].includes(e)&&(t.speed=e)}function Vy(t){for(const e of Pl)if(!(e.random||t.eventsDone.includes(e.id))&&e.at===t.hour&&(!e.condition||e.condition(t)))return e;for(const e of Pl)if(!(e.random||t.eventsDone.includes(e.id))&&e.at<=t.hour&&e.condition&&e.condition(t))return e;return null}function Wy(t){const e=hh.filter(n=>!t.eventsDone.includes(n.id)&&(!n.condition||n.condition(t)));return e.length?e[on(t,0,e.length-1)]:null}function rc(t){if(t.phase!=="play"||t.pending||t.battle||t.ending)return;if(t.hour>=xs){Ro(t,ac.get("closing"));return}t.hour+=1,Xy(t);const e=Vy(t);if(e){Ro(t,e),Co(t);return}if(t.hour>=t.randomNextHour){const n=Wy(t);if(n){Ro(t,n),t.randomNextHour=t.hour+on(t,8,11),Co(t);return}t.randomNextHour=t.hour+3}Ky(t),Co(t)}function Xy(t){for(const e of t.rivals)e.status==="active"&&(e.marks=Math.round((e.marks+e.rate)*10)/10)}function Ro(t,e){if(t.pending={id:e.id},e.id.startsWith("manifest_")&&(!t.manifestOffers||t.manifestOffers.length===0)&&sb(t),e.id==="tetsu_dead"){const n=t.rivals.find(i=>i.id==="tetsu");n&&(n.status="dead",n.note="死在第七號碼頭。刻印被裏八咫回收。")}if(e.id==="kurokawa_arrested"){const n=t.rivals.find(i=>i.id==="kurokawa");n&&(n.status="arrested",n.note="被神田隼人逮捕。刻印全數回收。")}if(e.id==="kurokawa_massacre"){const n=t.rivals.find(i=>i.id==="kurokawa");n&&t.player.flags.kurokawa_defeated&&(n.status="dead",n.note="倒在常夜中央通。至死都在笑。")}if(e.id==="ayase_proposal"){const n=t.rivals.find(i=>i.id==="ayase");n&&t.player.flags.ayase_dead&&(n.status="dead")}}function Co(t){if(t.phase==="play"&&(t.player.encroachment>=100&&qy(t),t.phase==="play")){if(t.hour>=48&&(!t.player.wanted&&t.player.heat>=70&&(t.player.wanted=!0,t.player.wantedAt=t.hour,Be(t,"danger","神田隼人已將你列為指名手配。包圍網開始收縮。")),t.player.wanted&&t.player.heat<35&&(t.player.wanted=!1,Be(t,"system","警戒指數降到閾值以下。神田暫時撤回對你的直接追捕。"))),t.hour===24||t.hour===48||t.hour===60){const e=si(t);Be(t,"rival",`排名更新：第 ${e.rank}／${e.total}。領先者 ${e.list[0].name}（${Math.floor(e.list[0].marks)} 刻印）。`)}Yy(t)}}function qy(t){const e=15+Math.floor((t.player.encroachment-100)/5);He(t,"constitution",e,"抵抗侵蝕失控",bi(t).has("constitution")?2:0).ok?Be(t,"bond","你把那個聲音壓回去了。至少這一小時。"):(t.player.collapse+=1,Be(t,"danger",`失控 ${t.player.collapse}/3。你的身體做了你不記得的事。`),t.player.collapse>=3&&sn(t,"monster"))}function Yy(t){t.player.heat>=70&&!t.player.flags.warn70&&(t.player.flags.warn70=!0,Be(t,"danger",t.hour>=48?"警戒指數 70：神田的檔案上出現了你的代號。":"警戒指數 70：你的代號開始在參賽者之間流傳。")),t.player.heat>=90&&!t.player.flags.warn90&&(t.player.flags.warn90=!0,Be(t,"danger","警戒指數 90：裏八咫已將你標記為優先回收對象。")),t.player.encroachment>=100&&!t.player.flags.warn100&&(t.player.flags.warn100=!0,Be(t,"danger","侵蝕率 100%：每一小時，你都要重新說服自己還是人。"))}const Fd=["城市沒有因為你的倒數而停下來。上班族撐著傘走過，沒有人抬頭。","便利商店的自動門反覆開合。店員在補貨，電視在播天氣。","遠處有警笛，但沒有往這個方向來。暫時。","雨水把牆上的塗鴉沖成一片模糊的紅。","一隻烏鴉停在電線上，歪著頭看你，像在看一份不太有趣的報告。","你經過一面玻璃，發現自己已經習慣不去看倒影。","車站廣播念著陌生的站名。每一班車都通往這座城市的其他角落。","清潔隊正在沖洗昨晚的血跡。水混著泡沫流進排水溝。","有人在騎樓下賣傘。他一個晚上沒賣出幾把，因為雨已經下得太久。","早餐店的鐵門拉開一半，蒸氣湧出來，帶著醬油和豆漿的味道。","一台提款機吐出一張收據，被風吹到你腳邊。上面的餘額不夠住一晚旅館。","兩個高中生蹲在便利商店門口分一碗關東煮。他們說話的聲音很小，笑聲很大。","你數了三個路口、四個監視器，沒有一個對著你。這讓你更不安。","醫院的急診燈亮著。門口有人抽菸，抽到一半就哭了，然後又點了一根。","計程車司機把窗搖下來問你要不要搭車。你說不用。他把窗搖回去，沒有多問。","天橋下有人在睡覺，被子是拆開的紙箱。他的呼吸很穩。"];function Zy(t,e){const n=$u.get(e);!n||t.phase!=="play"||(t.districtId=e,Be(t,"system",`移動到${n.name}（${n.en}）。${n.effect}`))}function Ky(t){const e=qi(t);switch(t.stance){case"lie_low":{z(t,t.player.flags?.streetwise?-4:-3,"你避開主要街道"),t.hour%2===0&&Si(t,t.player.flags?.field_medicine?2:1,"你在廢棄網咖睡了兩小時"),Be(t,"action",`你躲進${e.tag.split("・")[1]??"城市"}的陰影裡。終端上的警戒指數慢慢下降。`);break}case"hunt_normal":{Tt(t,1,"你處理了一個落單的普通人"),z(t,5,"屍體被發現"),t.player.killsNormal+=1,t.player.encroachment>=100&&(Tt(t,2,"你回過神時，現場已經沒有活人"),z(t,5,"失控殺戮留下大量痕跡"),ye(t,2)),Be(t,"action","你沒有用顯現。只是刀，和一個來不及喊出聲的人。");break}case"power_hunt":{const i=jt(t),a=t.player.abilityId==="ash"||(t.player.manifested??[]).includes("ash")?3:2;Tt(t,a,"顯現獵殺完成"),z(t,7,"顯現的殘留痕跡"),t.player.killsNormal+=1,Be(t,"action",`「${e.name}」的某一條街安靜了。刻印 +${a}，侵蝕 +${i}。`);break}case"hunt_overman":{const i=jt(t),a=13+Math.floor(t.hour/30),r=He(t,ks(t),a,"狩獵落單超越者",_r(t));if(r.ok){const s=r.nat20?15:10;Tt(t,s,r.nat20?"你壓倒性擊殺了一名超越者":"你殺死了一名超越者"),z(t,4,"超越者屍體被發現"),t.player.killsOverman+=1,Be(t,"action","對方的顯現在你身上留下灼痕。你拿走他的刻印，也拿走他的終端。")}else ah(t,5+Math.floor(t.hour/20),2,"超越者的反擊"),z(t,4,"戰鬥留下血跡"),Be(t,"danger","對方比你更快。你逃走了，但傷口還在流血。");Be(t,"system",`這次狩獵消耗了 ${i} 點侵蝕。`);break}case"investigate":{const i=11+(t.player.heat>=50?2:0);He(t,"wisdom",i,"調查城市異象").ok?(ce(t,1,"你拼湊出一條線索"),z(t,1,"你出現在不該出現的地方"),Be(t,"action","你找到了另一名超越者的移動路線，還有一張被撕掉一半的裏八咫地圖。")):(z(t,2,"你問了太多問題"),Be(t,"action","你花了一整個小時，只確認了一件事：有人比你更早來過。"));break}case"contact":{let i=t.contactTarget;if(i||(i=t.bonds.filter(a=>a.alive).sort((a,r)=>r.level-a.level)[0]?.id??null),i){const a=br(t,i);Be(t,"action",a)}else Be(t,"danger","你打開通訊錄，發現沒有任何一個號碼還能撥通。");break}case"destroy":{const i=jt(t,6),a=t.player.abilityId==="ash"||(t.player.manifested??[]).includes("ash")?3:2;Tt(t,a,"城市破壞被折算為刻印"),z(t,9,"大規模破壞"),Be(t,"action",`你讓一棟無人建築倒下。裏八咫把混亂記成 ${a} 枚刻印。侵蝕 +${i}。`);break}}const n=$u.get(t.districtId);n&&(n.intel>0&&t.stance==="investigate"&&ce(t,n.intel,`${n.name}的額外線索`),n.marks>0&&(t.stance==="hunt_normal"||t.stance==="hunt_overman"||t.stance==="destroy")&&Tt(t,n.marks,`${n.name}的獵場加成`),n.heat!==0&&z(t,n.heat,`${n.name}的區域風險`),t.stance==="lie_low"&&n.id==="residential"&&z(t,-1,"舊住宅區沒有監視器"),n.id==="academy"&&t.stance==="power_hunt"&&ye(t,1,"學院特區的實驗殘留")),t.hour%3===0&&Be(t,"story",Fd[(t.hour/3+t.cityId.length)%Fd.length].replace("城市",e.name))}function Jy(t,e,n){if(t.phase!=="play"||!t.pending||t.pending.id!==e||t.pending.result)return;const i=ac.get(e);if(!i)return;const a=ch(i,t).find(s=>s.id===n);if(!a||a.requires&&!a.requires(t))return;t.lastRoll=null;const r=a.apply(t);if(t.eventsDone.push(e),t.battle){t.pending=null;return}t.ending||(t.pending={id:e,result:Fb(e,n,r.text),resultTone:r.tone,title:i.title})}function Qy(t){t.pending?.result&&(t.pending=null)}function sc(t){if(!t.pending||t.battle)return null;const e=ac.get(t.pending.id);if(!e)return null;const n=ch(e,t).map(i=>({id:i.id,label:i.label,hint:i.hint,disabled:!!i.requires&&!i.requires(t)}));return{id:e.id,chapter:e.chapter,title:e.title,speaker:e.speaker,portrait:e.portrait,scene:e.scene,text:$b(e,t),choices:n,result:t.pending.result,resultTone:t.pending.resultTone}}function Ra(t){const e=Math.floor(t/24)+1,n=t%24,i=`${String(n).padStart(2,"0")}:00`;return{day:e,time:i,full:`第 ${e} 天 ${i}`}}function Qe(t){try{if(typeof localStorage>"u")return;localStorage.setItem("overman-erosion-city.save.v1",JSON.stringify(t))}catch{}}function oc(){var t,e,n,i,a,r,s,o,l,c,d,h,u,p,_,y,g,f,T,D,x,E,A,C,m,S,L,R,I;try{if(typeof localStorage>"u")return null;const O=localStorage.getItem("overman-erosion-city.save.v1");if(!O)return null;const M=JSON.parse(O);if(!M||M.version!==1||!M.phase||M.phase==="play"&&!M.player)return null;if(M.creation&&((t=M.creation).mainStat??(t.mainStat=null),(e=M.creation).coreEpithet??(e.coreEpithet="未登錄的迴路"),(n=M.creation).abilityChoices??(n.abilityChoices=[]),M.creation.step==="questions"&&(!M.creation.questionIds||M.creation.questionIds.length===0)&&(M.creation.questionIds=Zu(()=>Math.random())),(i=M.creation).questionIds??(i.questionIds=[])),M.player){(a=M.player).manifested??(a.manifested=[]),(r=M.player).armorId??(r.armorId="jacket"),(s=M.player).coreEpithet??(s.coreEpithet="未登錄的迴路");const U={body:"strength",reflex:"dexterity",intellect:"intelligence",will:"constitution",perception:"wisdom",charm:"charisma",strength:"strength",dexterity:"dexterity",constitution:"constitution",intelligence:"intelligence",wisdom:"wisdom",charisma:"charisma"},Y=q=>{const Q={strength:0,dexterity:0,constitution:0,intelligence:0,wisdom:0,charisma:0};for(const[ie,Re]of Object.entries(q??{})){const se=U[ie];se&&(Q[se]=Number(Re)||0)}return Q};M.player.stats=Y(M.player.stats),(o=M.player).skills??(o.skills=[]),(l=M.player).codenameEn||(l.codenameEn=ur(M)),(c=M.player).gender??(c.gender="unspecified"),(d=M.player).avatar??(d.avatar=null),(h=M.player).ultimateId??(h.ultimateId="edge"),M.creation&&((u=M.creation).codenameEn||(u.codenameEn=ur(M)),(p=M.creation).gender??(p.gender="unspecified"),(_=M.creation).avatar??(_.avatar=null),(y=M.creation).ultimateId??(y.ultimateId="edge"),(g=M.creation).ultimateChoices??(g.ultimateChoices=[])),M.creation&&(M.creation.stats=Y(M.creation.stats));const V=String(M.player.mainStat??"strength");M.player.mainStat=U[V]??"strength";const te=String(M.creation?.mainStat??"");M.creation&&(M.creation.mainStat=te?U[te]??null:null),(f=M.player).mainStat??(f.mainStat=Object.keys(M.player.stats).sort((q,Q)=>M.player.stats[Q]-M.player.stats[q])[0]),(T=M.player).flags??(T.flags={})}if(M.manifestOffers??(M.manifestOffers=[]),M.battle??(M.battle=null),M.districtId??(M.districtId="station"),M.endingMemory??(M.endingMemory=0),M.endingCombo??(M.endingCombo=null),M.battle){(D=M.battle).introSeen??(D.introSeen=!0),(x=M.battle).allies??(x.allies=[]),(E=M.battle).civilians??(E.civilians=[]),(A=M.battle).maxRounds??(A.maxRounds=null),(C=M.battle).finalBattle??(C.finalBattle=!1),(m=M.battle).combo??(m.combo=0),(S=M.battle).overdrive??(S.overdrive=0),(L=M.battle).ultimateUsed??(L.ultimateUsed=!1),(R=M.battle).shield??(R.shield=0),(I=M.battle).selectedSkill??(I.selectedSkill=null);for(const U of M.battle.enemies??[])U.skills??(U.skills=[]),U.strength??(U.strength=U.attack),U.dexterity??(U.dexterity=U.attack),U.breakGauge??(U.breakGauge=0),U.broken??(U.broken=!1),U.intent??(U.intent=null)}return M.battle&&!Array.isArray(M.battle.enemies)&&(M.battle=null),M}catch{return null}}function lc(){try{typeof localStorage<"u"&&localStorage.removeItem("overman-erosion-city.save.v1")}catch{}}function jy(t){const e=t.endingCombo?Gu[t.endingCombo]:null;return e?{title:e.title,subtitle:e.subtitle,stamp:e.stamp,text:t.endingText??Al[t.ending??"nameless"].text,tone:e.tone}:Al[t.ending??"nameless"]}const Il=["裏八咫","財團 Z","至高智人學院","異端審判庭","無所屬","第七區自治會","黑市同盟","海岸自衛隊","代行者","流浪者"],Bd={裏八咫:"Project Ignis 的執行機構。負責選別、刻印、回收與封鎖消息；黑服是它的處決部隊。","財團 Z":"把超越者當成資產與武器的巨型企業。進行人造超越者、玻色子同調與神造計劃。",至高智人學院:"財團 Z 培養兵器的教育機構，將選別視為野外測試，而非犯罪。",異端審判庭:"直屬教皇的秘密組織，處理最墮落的異端。表面已消失，實際仍行走於黑暗。",無所屬:"不屬於任何正式組織的人。刑警、殺人鬼、逃亡者與最終首領都可能在此。",第七區自治會:"在裏八咫與財團 Z 之間維持灰色秩序的地方組織。",黑市同盟:"拍賣器官、終端與情報的地下網絡。白鳥理世是其中最有名的舞台。",海岸自衛隊:"負責封鎖港口與處理海上回收物的武裝單位。",代行者:"異端審判庭的特殊超越者，被視為神怒與神恩的代理人。同一時間不超過十二人。",流浪者:"沒有登記城市、沒有固定終端的人。他們通常比任何人都更早察覺封鎖線。"},$d=["雨宮","黑川","綾瀬","白鳥","神田","久我","三浦","末永","小宮","橋本"],ex=["澪","巌","凍","理世","隼人","千歲","湊","燈","朔","雪"],zd=["執行官","研究者","賞金獵人","情報販子","護衛","醫療兵","記者","學生","黑市商人","逃亡者"],Hd=["肉體強化","結晶操縱","記憶篡改","電磁加速","影子搬運","體溫掠奪","聲音暗示","金屬操作","創傷共鳴","空間折疊"],Gd=["INTJ","INTP","ENTJ","ENTP","INFJ","INFP","ENFJ","ENFP","ISTJ","ISFJ","ESTJ","ESFJ","ISTP","ISFP","ESTP","ESFP"],Vd=["雨中的刀","沒有影子的人","玻璃聖母","舞臺女王","無冕的最強對手","第七區的幽靈","黑色迴路","不會說話的證人","編號 13","灰燼收藏家"],Wd=["記得所有見過的面孔，卻不記得自己的生日。","把每一次交易都寫在一本沒有頁碼的筆記本上。","相信裏八咫最終會留下一個位置給自己。","從財團 Z 的實驗室逃出來，身上還有編號。","不擅長說謊，所以選擇不說話。","把殺人當成一種需要準時完成的工作。","在找一個已經被回收的家人。","對神田隼人抱持近乎宗教的敬意。","擁有一把不屬於這個時代的鑰匙。","每天都會去同一家便利店買同一種飯糰。"],ph=["神田隼人","黑川巌","綾瀬凍","白鳥理世","王冠"],tx=["最強對手","絞肉機","玻璃聖母","舞臺女王","侵蝕王冠"],nx=["魔劍士","鐵血縛鎖","冰棺聖母","偽神歌姬","終末冠者"],ix=["無所屬","無所屬","至高智人學院","黑市同盟","無所屬"],ax=["刑警","殺人鬼","結晶使","情報商人","最終首領"],rx=["RUNELORD","GEHENNA CHAIN","GLASS MADONNA","FALSE IDOL","CROWNED PROPHET"],sx=["以普通人的身分終結超越者犯罪，並找出小田川知世事件的真相。","享受被裏八咫承認的殺戮，證明自己的肉體比任何顯現都更適合這個世界。","帶妹妹離開選別，即使必須把整座城市凍成一座沒有出口的棺。","把群眾的愛變成武器，讓所有人都自願走進她準備好的舞台。","證明新人類不需要人類的許可，讓舊世界在自己的王冠下結束。"],ox=["黃昏","零時","黑帳","白晝","鏽蝕","空席","第七","無名","逆鱗","終末"],lx=["觀測者","拾骨者","行刑人","收藏家","引路人","守夜人","背叛者","殘響","聖徒","記錄者"],cx=["DUSK","ZERO","BLACKLEDGER","DAYBREAK","RUSTED","EMPTY","SEVENTH","NAMELESS","REVERSE","TERMINAL"],dx=["OBSERVER","BONEPICKER","EXECUTIONER","COLLECTOR","GUIDE","NIGHTWATCH","TRAITOR","ECHO","SAINT","RECORDER"],Xd=["想活著離開，但更想帶走一個能證明自己存在過的人。","相信只要殺夠多人，裏八咫就會給自己一個真正的名字。","在找一個被回收的家人，願意為此出賣任何秘密。","想讓財團 Z 付出代價，即使自己也會被一起燒掉。","只想確認神田隼人是不是也會流血。","把每一次交易都當成最後一次，因為她從不相信明天。","想建立一個沒有選別的城市，哪怕要先把城市燒空。","在記錄所有死者的名字，因為沒有人會替他們記。","想證明顯現不是病，而是一種更高級的人類。","已經沒有想做的事，只剩下不想讓別人如願。"],qd=["因此主動接近每一位外來者。","因此從不拒絕任何一場戰鬥。","因此把情報當成唯一可靠的貨幣。","因此在最後一刻總會留下不該留的破綻。","因此對所有權力都抱持同一種冷淡的恨。","因此把善意當成一種需要驗證的陷阱。","因此比任何人更害怕安靜下來的時刻。","因此相信只要名字被記住，就不算真的死去。","因此一次又一次回到同一個地方。","因此在雨停之前不會離開。"],Yd=["岳","冰","玲","迅","煌"];function ux(t){const e=`${$d[Math.floor(t/10)]}${ex[t%10]}`;return ph.includes(e)?`${$d[Math.floor(t/10)]}${Yd[t%Yd.length]}`:e}const ls=Array.from({length:100},(t,e)=>{const n=e<5,i=n?ph[e]:ux(e);return{id:`npc-${String(e+1).padStart(3,"0")}`,name:i,codename:n?nx[e]:`${ox[Math.floor(e/10)]}・${lx[e%10]}`,codenameEn:n?rx[e]:`${cx[Math.floor(e/10)]} ${dx[e%10]}`,intention:n?sx[e]:`${Xd[e%Xd.length]}${qd[Math.floor(e/10)%qd.length]}`,alias:n?tx[e]:Vd[e*3%Vd.length],faction:n?ix[e]:Il[e%Il.length],role:n?ax[e]:zd[e*7%zd.length],mbti:Gd[e*11%Gd.length],ability:n&&e===0?"最強對手":Hd[e*5%Hd.length],threat:n&&e===0?5:e*7%5+1,affection:e*17%101,note:n&&e===0?"他是你所能遇見的最強對手；即使是史上最強的超限者，也無法在正面戰鬥中勝過他。":Wd[e%Wd.length],spriteSeed:`roster:${e}:${i}`,portrait:n?["kanda","kurokawa","ayase","shiratori","crown"][e]:void 0,important:n}});ls.filter(t=>t.important);const hx=new Set(["kurokawa","ayase","crown","kanda","shiratori"]);function fx(t,e){const n=`<ellipse cx="50" cy="111" rx="31" ry="8" fill="#0b0a09" opacity=".28"/>
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
  </svg>`}function px(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}const mx=["#f2c9a5","#e6b58d","#d79a72","#f5d5b8","#c98d68"],gx=["#171412","#3a2620","#5b3b2b","#c9b7a2","#d9d4ca","#7a2f2f","#2e4a5a","#6b4b7a"],vx=["#171412","#2b2521","#3b4148","#4b2b2b","#243a3d","#5c4a35","#6b1f24","#1f2d46"],_x=["#d8382a","#e8b53a","#7fb2c9","#b7c6a0","#d9d4ca","#9e6bb0"];function es(t,e){return t[e%t.length]}function ei(t,e){if(e.variant&&hx.has(e.variant))return fx(e.variant,e);const n=px(t),i=es(mx,n),a=es(gx,n>>3),r=e.role==="civilian"?"#5a5148":es(vx,n>>5),s=e.accent??es(_x,n>>7),o=n%6,l=(n>>11)%5,c=n%3,d=(n>>13)%2?"#e9e0cf":"#1b1714",h=e.role==="enemy"?"#d8382a":"#f4e8d1",u=o===0?`<path d="M26 46 Q22 20 50 16 Q78 20 74 48 L69 38 Q64 26 50 25 Q36 26 31 38Z" fill="${a}" stroke="#141210" stroke-width="3"/>`:o===1?`<path d="M23 48 Q18 18 48 14 Q80 16 77 50 L70 33 L64 43 L58 29 L50 41 L42 29 L36 44 L30 35Z" fill="${a}" stroke="#141210" stroke-width="3"/>`:o===2?`<path d="M28 48 Q24 18 50 15 Q76 18 72 46 Q64 32 50 31 Q36 32 28 48Z" fill="${a}" stroke="#141210" stroke-width="3"/><path d="M28 33 Q20 48 26 63 L32 42Z" fill="${a}" stroke="#141210" stroke-width="3"/><path d="M72 33 Q80 48 74 63 L68 42Z" fill="${a}" stroke="#141210" stroke-width="3"/>`:o===3?`<path d="M26 50 Q20 16 50 13 Q82 18 74 48 L70 26 L60 36 L54 24 L46 36 L40 24 L33 38Z" fill="${a}" stroke="#141210" stroke-width="3"/>`:o===4?`<path d="M25 49 Q22 20 50 16 Q79 18 75 50 L68 30 Q60 27 50 28 Q39 27 32 31Z" fill="${a}" stroke="#141210" stroke-width="3"/><path d="M66 22 Q82 14 86 26 Q76 25 70 34Z" fill="${a}" stroke="#141210" stroke-width="3"/>`:`<path d="M27 46 Q25 18 50 15 Q77 18 73 47 Q68 28 58 31 L55 20 L47 32 L40 24 L35 38Z" fill="${a}" stroke="#141210" stroke-width="3"/>`,p=l===0?`<path d="M68 48 L83 42" stroke="${s}" stroke-width="2"/><circle cx="84" cy="41" r="3" fill="${s}" stroke="#141210" stroke-width="1.5"/>`:l===1?`<path d="M30 57 Q50 66 70 57" fill="none" stroke="${s}" stroke-width="3"/>`:l===2?'<path d="M33 60 L27 92" stroke="#141210" stroke-width="2" opacity=".65"/>':l===3?`<rect x="39" y="48" width="22" height="4" fill="${s}" stroke="#141210" stroke-width="1.5"/>`:"";return`<svg class="chibi-svg" viewBox="0 0 100 124" role="img" aria-label="${e.name}">
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
    <circle cx="42" cy="42.5" r="1.1" fill="${h}"/>
    <circle cx="60" cy="42.5" r="1.1" fill="${h}"/>
    <path d="M45 55 Q50 58 55 55" fill="none" stroke="#7a3b35" stroke-width="2" stroke-linecap="round"/>
    <path d="M35 35 Q41 31 46 34" fill="none" stroke="#141210" stroke-width="1.6" opacity=".7"/>
    <path d="M54 34 Q59 31 65 35" fill="none" stroke="#141210" stroke-width="1.6" opacity=".7"/>
    ${p}
    ${e.role==="player"?`<path d="M34 78 L50 84 L66 78" fill="none" stroke="${s}" stroke-width="3"/>`:""}
    ${e.role==="civilian"?'<path d="M42 70 L50 78 L58 70" fill="none" stroke="#d9d4ca" stroke-width="2"/>':""}
  </svg>`}const bx={core_array:"CAUSAL ARRAY",core_revive:"ECHO REVIVAL",core_ward:"BOUNDARY WEAVE",core_market:"SHADOW BARGAIN",core_multi:"ARMORY PARALLEL",core_variable:"FORM REWRITE",core_combat:"TACTICAL MATRIX",core_focus:"ZERO CONDENSATION",blade:"BLADE OF CONDEMNATION",flash:"FLASH ZERO",mindeye:"MIND EYE",ash:"ASHEN DOMAIN",regen:"UNDYING REGEN",siren:"SIREN VOICE",thunder:"THUNDER FANG",memory:"MEMORY EDIT",beast:"BEAST FORM",limit:"LIMIT BREAK",shell:"HOLLOW SHELL",resonance:"RESONANCE"},mh=[{id:"male",label:"男",en:"MALE"},{id:"female",label:"女",en:"FEMALE"},{id:"nonbinary",label:"非二元",en:"NON-BINARY"},{id:"unspecified",label:"不公開",en:"UNSPECIFIED"}],Bi=document.getElementById("app");document.getElementById("fx");const gh="overman-erosion-city.settings.v1",yx="./";function xx(){try{const t=localStorage.getItem(gh);if(t)return{muted:!1,reduceMotion:!1,bgm:"auto",...JSON.parse(t)}}catch{}return{muted:!1,reduceMotion:!1,bgm:"auto"}}const bt=xx(),Ge=new Uh(bt.muted);let qa=null,Lo=!1;const Ie={modal:null,drawer:null,toast:null,toastTimer:null,statAnimated:!1,loreTab:"world",lastEventFocus:null,logScroll:0,logNearBottom:!0,rosterFaction:null,rosterSort:"default"};let Ms=null,P=oc()??dr(cr());P.phase==="creation"&&!P.creation.rolled&&Us(P);bt.reduceMotion&&document.documentElement.classList.add("reduce-motion");function cc(){try{localStorage.setItem(gh,JSON.stringify(bt))}catch{}}function tr(t){return`${yx}art/${t}`}function Ia(t){return t==="kanda"?tr("kanda.png"):["ayase","kurokawa","shiratori","crown"].includes(t)?tr(`${t}.webp`):tr(`${t}.svg`)}function Fn(t){return["title","street","alley","docks"].includes(t)?tr(`${t}.webp`):tr(`${t}.svg`)}function ae(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function Da(t){return t.split(/\n{2,}/).map(e=>`<p>${ae(e).replace(/\n/g,"<br>")}</p>`).join("")}function Sx(t){return String(Math.floor(t))}function vh(t){return t>=0?`+${t}`:`${t}`}function Mx(t){return vh(Ta(t))}function nr(t,e="neutral"){Ie.toastTimer&&window.clearTimeout(Ie.toastTimer),Ie.toast={text:t,tone:e},Ie.toastTimer=window.setTimeout(()=>{Ie.toast=null,Pe()},2200)}function Ex(){const t=oc();return!!t&&(t.phase==="play"||t.phase==="creation"||t.phase==="ending")}function Tx(t){return t<2?"序章・黑信封":t<24?"第一夜・獵場":t<48?"第二天・侵蝕":t<60?"第三天・他到了":"終章・一擊"}function Ax(t){switch(t){case"monster":return Fn("crown");case"caught":return Fn("street");case"throne":return Fn("title");case"dead":return Fn("alley");case"escape":case"confess":return Fn("docks");default:return Fn("title")}}function wx(t){for(let e=t.log.length-1;e>=0;e--){const n=t.log[e];if(n.kind==="story"||n.kind==="action"||n.kind==="bond")return n.text}return"城市在雨裡繼續運作。你的倒數也在繼續。"}function Pe(){const t=document.querySelector("[data-log]");t&&(Ie.logScroll=t.scrollTop,Ie.logNearBottom=t.scrollHeight-t.scrollTop-t.clientHeight<48);const e=P.phase==="title"?Lx():P.phase==="creation"?Ix():P.phase==="ending"?Jx():Dx();Bi.innerHTML=e,document.body.dataset.phase=P.phase;const n=P.phase==="title"||P.phase==="creation"?0:P.player.encroachment;document.documentElement.style.setProperty("--encroach",String(Math.min(100,n))),Bi.classList.toggle("encroach-high",n>=70&&P.phase==="play"),Bi.classList.toggle("encroach-critical",n>=100&&P.phase==="play"),Cx(),Ge.setIntensity(P.phase==="title"?0:P.player.encroachment);const i=P.phase==="ending"?"ending":P.phase!=="play"?"title":P.battle?"battle":P.player.heat>=60||P.player.encroachment>=70?"tension":"city";if(bt.bgm?.startsWith("library:"))Ge.setLibraryTrack(bt.bgm.slice(8));else{const a=bt.bgm==="auto"?i:bt.bgm;Ge.setMood(a,Math.floor(Date.now()/75e3)%3)}Rx()}function Rx(){if(P.phase!=="play")return;const t=document.querySelector("#city3d");if(t){if(!qa){if(Lo)return;try{qa=new y_}catch{Lo=!0;return}}try{qa.mount(t,P.cityId,P.seed,P.player.encroachment,bt.reduceMotion,P.districtId,e=>{Zy(P,e),Qe(P),Pe()})}catch{Lo=!0,qa?.dispose(),qa=null}}}function Cx(){const t=document.querySelector("[data-log]");t&&(t.scrollTop=Ie.logNearBottom?t.scrollHeight:Ie.logScroll);const e=P.phase==="play"?sc(P):null;e?Ie.lastEventFocus!==e.id+(e.result?"-r":"-c")&&(Ie.lastEventFocus=e.id+(e.result?"-r":"-c"),document.querySelector(e.result?"[data-action='dismiss-result']":"[data-choice]:not([disabled])")?.focus({preventScroll:!0})):Ie.lastEventFocus=null,P.phase==="creation"&&!Ie.statAnimated&&(Ie.statAnimated=!0,document.querySelectorAll("[data-stat-value]").forEach((n,i)=>{n.style.animationDelay=`${i*55}ms`,n.classList.add("stat-pop")})),Ie.modal&&document.querySelector("[data-modal-panel] button")?.focus({preventScroll:!0})}function Lx(){const t=Ex();return`
  <div class="screen title-screen">
    <div class="title-bg" style="background-image:url('${Fn("title")}')"></div>
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
        <button class="link" data-action="modal" data-modal="lore">設定詞彙</button>
        <button class="link" data-action="modal" data-modal="roster">人物名鑑 100</button>
        <button class="link" data-action="modal" data-modal="endings">結局檔案 ${Ps().length}/108</button>
        <button class="link" data-action="modal" data-modal="meta">輪迴記憶・${Xi().memory} 碎片</button>
        <button class="link" data-action="modal" data-modal="bgm">BGM 選擇</button>
        <button class="link" data-action="toggle-mute">${bt.muted?"開啟音效":"靜音"}</button>
      </div>
    </div>
    <div class="title-footer">
      <span>繁體中文</span>
      <span>暴力／死亡／精神侵蝕描寫</span>
      <span>v1.0</span>
    </div>
  </div>
  ${Os()}`}function Px(){const t=P.creation,e=t.questionIds.length?t.questionIds:ec.map(a=>a.id),n=tc(e[t.questionIndex]??e[0])??Yu[0],i=Math.min(t.questionIndex,e.length-1);return`
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
        <p class="question-text">${Da(n.text)}</p>
        <div class="question-options">
          ${n.options.map((a,r)=>`<button class="question-option" data-action="answer-question" data-index="${r}">
                <span class="option-letter">${r===0?"A":"B"}</span>
                <span><strong>${ae(a.label)}</strong>${a.hint?`<small>${ae(a.hint)}</small>`:""}</span>
              </button>`).join("")}
        </div>
      </section>
      <p class="question-note">這不是能力測驗。答案會決定你的 MBTI、背景，以及你一開始就放不下的人。</p>
    </div>
    ${Os()}
  </div>`}function Ix(){const t=P.creation;if(t.step==="questions")return Px();const e=gr.get(t.cityId)??mr[0],n=t.abilityId?Ea.get(t.abilityId):null,i=nc.get(t.backgroundId),a=t.mainStat,r=l=>a===l?2:0,s=l=>i?.statBonus[l]??0,o=lr.get(i?.start.armorId??"jacket")??lr.get("jacket");return`
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
          <input id="codename-en" class="codename-en-input" maxlength="28" value="${ae(t.codenameEn??"")}" aria-label="English codename" autocomplete="off" spellcheck="false" placeholder="ENGLISH CODENAME" />
          <input id="codename" class="codename-input" maxlength="8" value="${ae(t.codename)}" aria-label="中文代號" autocomplete="off" spellcheck="false" />
          <div class="gender-field">
            <span class="gender-label">性別 / GENDER</span>
            <div class="gender-options">
              ${mh.map(l=>`<button class="gender-btn ${t.gender===l.id?"selected":""}" data-action="gender" data-gender="${l.id}"><span>${l.label}</span><small>${l.en}</small></button>`).join("")}
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
            ${Ou.map(l=>{const c=Math.min(20,t.stats[l]+r(l)+s(l)),d=a===l;return`
              <button class="stat-cell ${d?"is-main":""}" data-action="main-stat" data-stat="${l}" title="${Nd[l]}" aria-pressed="${d}">
                <div class="stat-top"><span>${vi[l]}</span><em>${Mx(c)}</em></div>
                <strong data-stat-value data-stat="${l}">${c}</strong>
                <div class="stat-track"><i style="width:${c/20*100}%"></i></div>
                <p>${Nd[l]}</p>
                <span class="main-badge">${d?"主屬性 +2":"選為主屬性"}</span>
                ${s(l)?`<span class="bg-badge">背景 +${s(l)}</span>`:""}
              </button>`}).join("")}
          </div>
          <div class="roll-note">
            <span class="dice-mark">d20</span>
            <p>4d6 取三擲出六項能力值。點選一項作為主屬性，最終值 +2。d20 檢定＝d20＋能力修正＋情境修正。</p>
          </div>
          ${(()=>{const l=n?.statBonus.constitution??0,c=t.stats.constitution+r("constitution")+s("constitution")+l,d=t.stats.dexterity+r("dexterity")+s("dexterity")+(n?.statBonus.dexterity??0),h=Math.max(6,10+Ta(c)),u=o.base+Math.min(Ta(d),o.dexCap)+(n?.acBonus??0),p=Aa(bs(`${P.seed}:${t.codename.trim()||"鴉"}:${P.rngCount}`,4,Xu(n?.id??"",[t.mainStat??"strength"])));return`<div class="derived-panel">
              <div class="derived-head"><span class="micro">STARTING STATUS / 初始狀態</span><small>依目前選擇即時計算</small></div>
              <div class="derived-grid">
                <div class="derived-stat"><span>HP</span><strong>${h}</strong><small>10＋CON 修正</small></div>
                <div class="derived-stat"><span>AC</span><strong>${u}</strong><small>${o.name}</small></div>
                <div class="derived-stat"><span>CON</span><strong>${c}</strong><small>決定 HP</small></div>
                <div class="derived-stat"><span>DEX</span><strong>${d}</strong><small>遠程／閃避</small></div>
              </div>
              <div class="derived-skills"><strong>戰鬥異能・4</strong>${p.map(_=>{const y=`${_.name}｜${_.style==="melee"?"近戰・STR":_.style==="ranged"?"遠程・DEX":"支援"}｜${_.power?`傷害 ${_.power}`:"支援"}${_.cost?`・侵蝕 +${_.cost}`:""}｜${_.description}`;return`<span class="derived-skill" tabindex="0" title="${ae(y)}" data-tip="${ae(y)}">${ae(_.name)}<small>${_.style==="melee"?"STR":_.style==="ranged"?"DEX":"SUP"}</small></span>`}).join("")}</div>
            </div>`})()}
        </div>

        <div class="panel paper city-card">
          <div class="city-visual" style="background-image:url('${Fn(e.scene)}')">
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
            <span>${vi[e.stat]}檢定 +1</span>
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
                  <span class="mbti-chip">${t.mbti}・${B_[t.mbti]??""}</span>
                </div>
                <p class="background-tagline">${i.tagline}</p>
                <p class="background-desc">${i.description}</p>
                <div class="background-feature"><strong>特典</strong><span>${i.feature}</span></div>
                <div class="background-stats">
                  ${Object.entries(i.statBonus).map(([l,c])=>`<span>${vi[l]} +${c}</span>`).join("")}
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
              ${t.avatar?"":`<div class="avatar-fallback">${ei(`${P.seed}:${t.codename||"鴉"}`,{name:t.codename||"鴉",role:"player"})}</div>`}
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
                  <p class="ability-en">${ae(bx[n.id]??"OVERMAN ABILITY")}</p>
                  <h3>${n.name}</h3>
                  <p class="ability-tagline">${n.tagline}</p>
                  <div class="core-epithet"><span class="epithet-en">TRUE NAME</span>顯現真名：〈${ae(t.coreEpithet)}〉</div>
                  <div class="ability-stats">
                    <span>侵蝕 +${n.cost}</span>
                    <span>${Object.entries(n.statBonus).map(([l,c])=>`${vi[l]} +${c}`).join("／")||"無被動加值"}</span>
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
            ${(t.ultimateChoices??[]).map(l=>{const c=ys.get(l.id);return`<button class="ultimate-choice ${t.ultimateId===l.id?"selected":""}" data-action="ultimate" data-id="${l.id}">
                <span class="ultimate-en">${ae(l.en)}</span>
                <strong>${ae(l.name)}</strong>
                <small>${ae(c.tagline)}</small>
                <em>${ae(c.description)}</em>
                <i>${t.ultimateId===l.id?"已選定":"選擇"}</i>
              </button>`}).join("")}
          </div>
        </div>

        <div class="panel paper bonds-preview">
          <div class="panel-heading compact">
            <span class="micro">初始羈絆 / BONDS</span>
            <span class="mono">${P.bonds.length}</span>
          </div>
          <div class="bond-preview-list">
            ${P.bonds.map(l=>`<div class="bond-preview-row">
                  <span class="bond-avatar">${ae(l.name.slice(0,1))}</span>
                  <span><strong>${ae(l.name)}</strong><small>${l.relation}・羈絆 ${l.level}</small></span>
                  <em>${l.category==="family"?"家人":l.category==="friend"?"友人":"社區"}</em>
                </div>`).join("")}
          </div>
          <p class="fine">羈絆由你的 MBTI 與背景決定，每次開局都會重新抽樣。</p>
        </div>

        <div class="panel paper start-panel">
          <div class="start-summary">
            <div><span>背景</span><strong>${i?.name??"—"}</strong></div>
            <div><span>MBTI</span><strong>${t.mbti}</strong></div>
            <div><span>主屬性</span><strong>${a?vi[a]+" +2":"尚未選擇"}</strong></div>
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
    ${Os()}
  </div>`}function Dx(){const t=P,e=qi(t),n=Ra(t.hour),i=lb(t.player.encroachment),a=si(t),r=Math.max(1,...t.rivals.filter(h=>h.status==="active").map(h=>h.marks)),s=Math.min(100,Math.round(t.player.marks/r*100)),o=Vn(t),l=t.hour>=48,c=wa(t),d=t.player;return`
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
        <button class="icon-btn only-desktop" data-action="toggle-mute" aria-label="音效">${bt.muted?"靜":"聲"}</button>
        <button class="icon-btn" data-action="modal" data-modal="restart" aria-label="選單">☰</button>
      </div>
    </header>

    <div class="game-grid">
      <aside class="left-rail">
        <section class="player-card panel paper">
          <div class="player-line">
            <span class="player-avatar" ${d.avatar?`style="background-image:url('${d.avatar}')"`:""}>${d.avatar?"":`<span class="player-avatar-fallback">${ei(`${t.seed}:${d.codename}`,{name:d.codename,role:"player"})}</span>`}</span>
            <div>
              <span class="micro">代號</span>
              <span class="player-codename-en">${ae(d.codenameEn||"")}</span>
              <h2>${ae(d.codename)}</h2>
              <span class="player-gender">${ae(mh.find(h=>h.id===d.gender)?.label??"不公開")}</span>
            </div>
            <div class="vitals">
              <div class="ac-box" title="${rb(t)}">
                <span class="micro">AC</span>
                <strong>${ri(t).value}</strong>
              </div>
              <div class="hp-box" title="肉體">
                <span class="micro">肉體</span>
                <div class="pips hp">
                  ${Array.from({length:d.maxHp},(h,u)=>`<i class="${u<d.hp?"on":""}"></i>`).join("")}
                </div>
                <strong>${d.hp}<small>/${d.maxHp}</small></strong>
              </div>
            </div>
          </div>
          <div class="ability-mini">
            <span class="ability-type">核心</span>
            <strong>${c.name}</strong>
            <span class="mono">侵蝕 +${c.cost}</span>
          </div>
          <div class="true-name-banner">
            <span class="true-name-en">TRUE NAME</span>
            <span class="true-name-cn">顯現真名</span>
            <strong>〈${ae(d.coreEpithet)}〉</strong>
          </div>
          <div class="core-line">${ri(t).armor.name}</div>
          <div class="speed-line">速度 <b>${Ka(t)}</b>・${Fi(Ka(t)).name}${Fi(Ka(t)).fumble?`（fumble 1–${Fi(Ka(t)).fumble}）`:"（無 fumble）"}</div>
          ${Rl(t).length?`<div class="manifest-chips">${Rl(t).map(h=>`<span title="${ae(h.passive)}">${h.name}</span>`).join("")}</div>`:'<div class="manifest-chips empty">尚未增生顯現</div>'}
          <div class="mini-stats">
            ${Ou.map(h=>`<span class="${h===d.mainStat?"main-stat":""}" title="${vi[h]} ${xa(t,h)}${h===d.mainStat?"（主屬性 +2）":""}">${vi[h]}${h===d.mainStat?"★":""}<b>${xa(t,h)}</b></span>`).join("")}
          </div>
        </section>

        <section class="panel paper encroach-card ${i.tone}">
          <div class="panel-heading compact">
            <span class="micro">侵蝕率 / ENCROACHMENT</span>
            <span class="tag tag-${i.tone}">${i.label}</span>
          </div>
          <div class="encroach-number">
            <strong>${d.encroachment}</strong><span>%</span>
            ${d.encroachment>=100?'<em class="danger-note">失控 '+d.collapse+"/3</em>":""}
          </div>
          <div class="segment-bar" style="--pct:${Math.min(100,d.encroachment)}%">
            ${Array.from({length:20},(h,u)=>`<i class="${u<Math.ceil(Math.min(100,d.encroachment)/5)?"on":""}"></i>`).join("")}
          </div>
          <div class="power-tier ${Gi(t)>0?"on":""}">${ib(t)}<span>顯現等級 ${Gi(t)+1}</span></div>
          <p class="fine">
            ${d.encroachment>=100?"每小時意志檢定。失敗三次，永久怪物化。聯絡羈絆可拉回。":"使用顯現會推高侵蝕。歸零不是解脫，破百才是懸崖。"}
          </p>
        </section>

        <section class="panel paper score-card">
          <div class="score-row">
            <div>
              <span class="micro">刻印 / MARKS</span>
              <strong class="big-number">${d.marks}</strong>
            </div>
            <div class="rank-seal" title="目前排名">
              <span>RANK</span><strong>${a.rank}</strong>
            </div>
          </div>
          <div class="bar marks"><i style="width:${s}%"></i></div>
          <div class="fine-row"><span>${t.player.killsNormal} 常人</span><span>${t.player.killsOverman} 超越者</span></div>
        </section>

        <section class="panel paper heat-card">
          <div class="panel-heading compact">
            <span class="micro">警戒指數 / ALERT</span>
            <span class="tag ${l?"tag-danger":""}">${rh(d.heat,l)}</span>
          </div>
          <div class="heat-line">
            <strong>${d.heat}</strong>
            <div class="bar heat"><i style="width:${d.heat}%"></i></div>
          </div>
          <div class="intel-row">
            <span title="情報">情報 <b>${d.intel}</b></span>
            <span title="裏八咫監視">監視 <b>${d.surveillance}</b></span>
            <span title="證據">證據 <b>${d.evidence?"有":"無"}</b></span>
          </div>
          ${d.wanted?'<div class="wanted-banner">指名手配・神田隼人</div>':""}
        </section>

        <section class="panel paper bonds-card">
          <div class="panel-heading compact">
            <span class="micro">羈絆 / BONDS</span>
            <span class="mono">${o}</span>
          </div>
          <div class="bond-list">
            ${t.bonds.map(h=>{const u=Math.max(0,6-(t.hour-h.lastContact)),p=t.contactTarget===h.id;return`
                <button class="bond-row ${p?"selected":""} ${h.alive?"":"dead"}" data-action="contact-bond" data-id="${h.id}" title="${ae(h.description)}">
                  <span class="bond-avatar">${ae(h.name.slice(0,1))}</span>
                  <span class="bond-info">
                    <strong>${h.name}</strong>
                    <small>${h.relation}${u>0?`・${u}h 後可聯絡`:""}</small>
                    <span class="pips bond">${Array.from({length:5},(_,y)=>`<i class="${y<h.level?"on":""}"></i>`).join("")}</span>
                  </span>
                  ${p?'<em class="bond-target">聯絡對象</em>':""}
                </button>`}).join("")}
          </div>
          <p class="fine">「聯絡」每小時最多一次，降低侵蝕，但提高裏八咫監視。</p>
        </section>
      </aside>

      <section class="stage">
        <div class="scene scene-${e.scene}">
          <div class="scene-bg" style="background-image:url('${Fn(e.scene)}')"></div>
          <div id="city3d" class="city-3d" aria-hidden="true"></div>
          <div class="scene-shade"></div>
          <div class="scene-halftone"></div>
          <div class="scene-head">
            <span class="micro">${Tx(t.hour)}</span>
            <span class="scene-clock">${n.day}日目 ${n.time}</span>
          </div>
          <div class="scene-city">${e.name}</div>
          <div class="scene-map-hint"><span>都市節點</span>拖曳平移・右鍵旋轉・滾輪縮放・點擊區域</div>
          <div class="scene-status">
            <span class="status-mark">▶</span>
            <p>${ae(wx(t))}</p>
          </div>
          <div class="scene-weather"><span>${e.weather}</span><span>${e.landmark}</span></div>
          <div class="scene-stamp">${i.label}<br><span>${d.encroachment}%</span></div>
          <div class="rain-layer"></div>
          ${d.encroachment>=100?'<div class="corruption-layer"></div>':""}
        </div>

        <div class="stance-panel panel paper">
          <div class="stance-head">
            <div>
              <span class="micro">選擇行動 / STANCE・點擊即消耗 1 小時</span>
              <h2>${Wa[t.stance].label}</h2>
              <p>${Wa[t.stance].desc} 時間不會自動前進；你按下哪個方針，城市才往前走一小時。</p>
            </div>
            <span class="stance-risk">${Wa[t.stance].risk}</span>
          </div>
          <div class="stance-grid">
            ${Object.keys(Wa).map(h=>{const u=Wa[h];return`<button class="stance-btn ${t.stance===h?"active":""} ${u.tone}" data-action="set-stance" data-stance="${h}" ${t.pending?"disabled":""} title="${ae(u.desc)}">
                  <span class="stance-icon">${u.icon}</span>
                  <span>${u.label}</span>
                  ${h==="contact"&&t.contactTarget?`<small>${ae(t.bonds.find(_=>_.id===t.contactTarget)?.name??"")}</small>`:""}
                </button>`}).join("")}
          </div>
        </div>

        <div class="time-bar action-bar panel paper">
          <div class="action-clock">
            <span class="micro">行動制 / ACTION</span>
            <strong>${Math.max(0,xs-t.hour)}</strong>
            <small>小時殘餘</small>
          </div>
          <div class="action-copy">
            <strong>每次選擇方針，時間前進 1 小時。</strong>
            <p>${t.pending?"事件處理中；時間已停下，等你做出選擇。":"沒有自動計時。你可以停在這裡思考，直到按下下一個行動。"}</p>
          </div>
          <div class="action-ledger">
            <span>${t.hour}<small> / ${xs}</small></span>
            <em>已消耗</em>
            <span class="autosave">自動存檔</span>
          </div>
        </div>
      </section>

      <aside class="right-rail">
        ${yh(t)}
        ${xh(t)}
        <section class="panel paper log-card">
          <div class="panel-heading compact">
            <span class="micro">72 小時紀錄 / LOG</span>
            <span class="mono">${t.log.length}</span>
          </div>
          <div class="log-list" data-log>
            ${_h(t)}
          </div>
        </section>
      </aside>
    </div>
    ${Fx()}
    ${Ox()}
    ${$x()}
    ${Os()}
    ${Ie.toast?`<div class="toast ${Ie.toast.tone}">${ae(Ie.toast.text)}</div>`:""}
  </div>`}function _h(t,e=70){return t.log.slice(-e).map(n=>{const i=Ra(n.hour);return`<div class="log-entry ${n.kind}">
        <span class="log-hour">${String(i.day).padStart(2,"0")}/${i.time}</span>
        <p>${ae(n.text)}</p>
      </div>`}).join("")}const Nx="終末冠者",Ux={黑川巌:"GEHENNA CHAIN",綾瀬凍:"GLASS MADONNA",白鳥理世:"FALSE IDOL",鐵十兵衛:"RUSTED HERO",王冠:"CROWNED PROPHET",神田隼人:"RUNELORD",路人:"BYSTANDER",冰晶殘影:"CRYSTAL ECHO",王冠的結晶:"CROWN SHARD"};function Zd(t){return Ux[t]??"OVERMAN"}function Oi(t,e){if(e==="神田隼人")return"魔劍士";if(e==="王冠")return Nx;const n=t.rivals.find(i=>i.name===e);return n?n.codename??n.name:e}function bh(t,e){let n=e;for(const i of t.rivals)if(!i.trueNameKnown){n=n.split(i.name).join(i.codename??i.name);const a=i.name.slice(0,2);a.length>=2&&(n=n.split(a).join(i.codename))}return n}function yh(t){const e=si(t);return`
  <section class="panel paper rank-card">
    <div class="panel-heading compact">
      <span class="micro">刻印排名 / LEADERBOARD</span>
      <span class="mono">${e.rank}/${e.total}</span>
    </div>
    <div class="rank-list">
      ${e.list.map((n,i)=>{const a=t.rivals.find(c=>c.name===n.name),r=a?a.status:"active",o=(n.you?n.name:a?Oi(t,a.name):n.name)??n.name??"—",l=n.you?"你。":a?.trueNameKnown?`真名：${a.name}`:a?.note??"";return`<div class="rank-row ${n.you?"you":""} ${r}">
            <span class="rank-index">${String(i+1).padStart(2,"0")}</span>
            <span class="rank-face" style="background-image:url('${Ia(a?.portrait??"crown")}')"></span>
            <span class="rank-name">
              <strong>${ae(o)}</strong>
              <small>${r==="active"?ae(l).slice(0,20):r==="arrested"?"已逮捕":r==="dead"?"已死亡":"退出"}</small>
            </span>
            <strong class="rank-marks">${Sx(n.marks)}</strong>
          </div>`}).join("")}
    </div>
    <p class="fine">閉幕時還活著，就是通過選別；刻印排名決定裏八咫怎麼稱呼你。</p>
  </section>`}function xh(t){const e=t.hour>=48,n=Math.min(100,t.player.heat+(t.player.wanted?20:0));return`
  <section class="panel paper kanda-card ${e?"arrived":""}">
    <div class="kanda-mini" style="background-image:url('${Ia("kanda")}')"></div>
    <div class="kanda-info">
      <span class="micro">${e?"無所屬・已抵達":"無所屬・接近中"}</span>
      <span class="kanda-en">RUNELORD</span>
      <h3>魔劍士</h3>
      <p>神田隼人。他是你所能遇見的最強對手；即使是史上最強的超限者，也無法在正面戰鬥中勝過他。</p>
      <div class="bar kanda"><i style="width:${n}%"></i></div>
      <small>${e?rh(t.player.heat,!0):"他會在第四十八小時抵達。"}</small>
    </div>
  </section>`}function Po(t,e,n,i){return i===0?99:t==="melee"?1:t==="ranged"?2:e}function Io(t,e){return t==="melee"?"近戰・STR・±1":t==="ranged"?"遠程・DEX・±2":`支援・射程 ${e}`}function kx(){const t=P.battle;if(!t)return"";const e=P,n=t.enemies.find(l=>l.alive)??t.enemies[0];if(!n)return"";const i=ei(`${e.seed}:${e.player.codename}`,{name:e.player.codename,role:"player"}),a=t.enemies.filter(l=>l.alive).slice(0,3).map(l=>`<figure class="cutscene-standee enemy">${ei(`${e.seed}:${l.id}`,{name:l.name,role:"enemy",accent:"#d8382a",variant:l.portrait})}<figcaption class="fighter-name"><span class="fighter-en">${ae(Zd(l.name))}</span><span class="fighter-cn">${ae(Oi(e,l.name))}</span></figcaption></figure>`).join(""),r=t.allies.map(l=>`<figure class="cutscene-standee ally">${ei(`${e.seed}:${l.id}`,{name:l.name,role:"ally",accent:"#e8b53a"})}<figcaption class="fighter-name"><span class="fighter-en">ALLY</span><span class="fighter-cn">${ae(l.name)}</span></figcaption></figure>`).join(""),s=t.civilians.filter(l=>l.alive).map(l=>`<figure class="cutscene-standee civilian">${ei(`${e.seed}:${l.id}`,{name:l.name,role:"civilian"})}<figcaption class="fighter-name"><span class="fighter-en">BYSTANDER</span><span class="fighter-cn">${ae(l.name)}</span></figcaption></figure>`).join(""),o=(t.log[0]?.text??"戰鬥開始。").split(`
`).filter(l=>!l.startsWith("你的速度：")).join(`
`).trim();return`
  <div class="battle-overlay" role="dialog" aria-modal="true" aria-label="遭遇">
    <div class="battle-cutscene">
      <div class="cutscene-hero">
        <div class="cutscene-portrait" style="background-image:url('${Ia(n.portrait)}')"></div>
        <div class="avatar-skill-panel">
          <span class="avatar-skill-label">對手異能 / 4＋奧義</span>
          <div class="avatar-skill-list">
            ${Aa(n.skills).map(l=>`<span class="avatar-skill" title="${ae(`${l.name}：${l.description}`)}" data-tip="${ae(`${l.name}：${l.description}`)}" tabindex="0">${ae(l.name)}</span>`).join("")}
            ${n.ultimateName?`<span class="avatar-skill ultimate" title="${ae(`${n.ultimateName}：必殺奧義，一場一次`)}" data-tip="${ae(`${n.ultimateName}：必殺奧義，一場一次`)}" tabindex="0">必殺・${ae(n.ultimateName)}</span>`:""}
          </div>
        </div>
      </div>
      <div class="cutscene-vignette"></div>
      <div class="cutscene-copy">
        <span class="micro">${t.unbeatable?"UNBEATABLE / 最強對手":"ENCOUNTER / 遭遇"}</span>
        <span class="cutscene-en">${ae(Zd(n.name))}</span>
        <h2>${ae(Oi(e,n.name))}</h2>
        <p class="cutscene-title">${ae(n.title)}</p>
        <div class="cutscene-prose">${Da(o)}</div>
        <div class="cutscene-lineup">
          <figure class="cutscene-standee player">${i}<figcaption class="fighter-name"><span class="fighter-en">${ae(e.player.codenameEn||"")}</span><span class="fighter-cn">${ae(e.player.codename)}</span></figcaption></figure>
          <span class="cutscene-vs">VS</span>
          ${a}
          ${r}
        </div>
        ${s?`<div class="cutscene-casualties"><span class="casualties-label">被捲入</span><div class="casualties-list">${s}</div></div>`:""}
        <button class="battle-start-btn" data-action="battle-begin"><span>BATTLE START</span><small>戰鬥開始・頭像只會出現一次</small></button>
      </div>
    </div>
  </div>`}function ts(t){return(P.battle?.log.slice(t)??[]).some(n=>/落空|閃開|射程不足|間合不足|fumble/.test(n.text))?"miss":"danger"}function Ox(){const t=P.battle;if(!t)return"";if(!t.introSeen)return kx();if(t.cards)return Nb(P,t);const e=P,n=t.enemies.filter(m=>m.alive),i=t.enemies.find(m=>m.id===t.targetId&&m.alive)??n[0],a=t.unbeatable,r=Math.max(0,Math.round(e.player.hp/e.player.maxHp*100)),s=t.status==="active",o=s&&t.phase==="plot",l=s&&t.phase==="action"&&t.awaiting,c=t.status==="won"?"戰鬥勝利":t.status==="escaped"?"脫離戰鬥":"戰鬥敗北",d=Fi(t.playerPlot??t.playerSpeed),h=["零","壹","貳","參","肆","伍","陸","柒"],u=(m,S,L,R,I,O=!1,M)=>L==="enemy"&&l?`<button type="button" class="velocity-figure-unit target-figure ${O?"in-range":""} ${t.targetId===I?"aimed":""}" data-action="battle-avatar" data-id="${I??""}"><span class="velocity-figure">${ei(m,{name:S,role:L,accent:R,variant:M})}</span><span class="velocity-name">${ae(S)}</span><span class="aim-icon" aria-hidden="true">◎</span></button>`:`<span class="velocity-figure-unit"><span class="velocity-figure">${ei(m,{name:S,role:L,accent:R,variant:M})}</span><span class="velocity-name">${ae(S)}</span></span>`,p=`
    <div class="velocity-board">
      <div class="velocity-head"><span>PLOT / プロット</span><span>プロット表 / 0–7${t.playerSpeed<7?"・7 需特殊顯現":""}</span></div>
      <div class="velocity-grid">
        ${_s.map((m,S)=>{const L=m.value<=t.playerSpeed,R=t.playerPlot===m.value,I=t.playerPlot===m.value,O=t.enemies.filter(se=>se.alive&&se.plot===m.value),M=t.allies.filter(se=>se.alive&&se.plot===m.value),U=t.civilians.filter(se=>se.alive&&se.status==="hiding"&&m.value===0),Y=[...I?[{id:"player",seed:`${e.seed}:${e.player.codename}`,name:e.player.codename,role:"player",accent:"#d8382a"}]:[],...O.map(se=>({id:se.id,seed:`${e.seed}:${se.id}`,name:se.name,role:"enemy",accent:"#d8382a",variant:se.portrait})),...M.map(se=>({id:se.id,seed:`${e.seed}:${se.id}`,name:se.name,role:"ally",accent:"#e8b53a"})),...U.map(se=>({id:se.id,seed:`${e.seed}:${se.id}`,name:se.name,role:"civilian",accent:void 0}))],V=Y.slice(0,2),te=Y.length-V.length,q=t.selectedSkill,Q=q?Aa(e.player.skills).find(se=>se.id===q):null,ie=O.some(se=>se.id===t.targetId),Re=Q?O.some(se=>{const ut=se.plot??0;return(ut===0?0:Math.abs((t.playerPlot??0)-ut))<=Po(Q.style,Q.range,t.playerPlot??0,ut)}):!1;return`<div class="velocity-cell ${R?"selected":""} ${L?"":"locked"} ${Re&&l?"range-target":""} ${ie&&l?"target-cell":""}" data-action="${o?"battle-plot":"noop"}" data-speed="${m.value}" aria-disabled="${!o||!L}" title="${L?m.note:"速度 7 只有特殊顯現能抵達"}">
            <span class="velocity-figure-wrap">
              ${V.map(se=>u(se.seed,se.name,se.role,se.accent,se.id,Re,se.variant)).join("")}
              ${te>0?`<span class="velocity-overflow">+${te}</span>`:""}
            </span>
            <span class="velocity-kanji">${h[S]}</span>
            <span class="velocity-num">${m.value}</span>
            <span class="velocity-en">${m.jp}</span>
            <span class="velocity-cn">${m.name}</span>
            <span class="velocity-fumble">${m.fumble?`fumble 1–${m.fumble}`:"無 fumble"}</span>
            <span class="velocity-tokens">${Y.length?`<i class="speed-token ${Y.some(se=>se.role==="player")?"you":"enemy"}">${Y.length} 人</i>`:""}</span>
          </div>`}).join("")}
      </div>
    </div>`,_=_s.map(m=>{const S=[];t.playerPlot===m.value&&S.push({id:"player",name:e.player.codename,role:"你",cls:"player"});for(const L of t.enemies.filter(R=>R.alive&&R.plot===m.value))S.push({id:L.id,name:Oi(e,L.name),role:"敵",cls:"enemy"});for(const L of t.allies.filter(R=>R.alive&&R.plot===m.value))S.push({id:L.id,name:L.name,role:"隊友",cls:"ally"});for(const L of t.civilians.filter(R=>R.alive&&R.status==="hiding"&&m.value===0))S.push({id:L.id,name:L.name,role:"被捲入",cls:"civilian"});return{t:m,entries:S}}).filter(m=>m.entries.length),y=_.length?`<div class="phase-roster">
    <span class="roster-title">PLOT 名冊 / 點名字瞄準</span>
    ${_.map(m=>`<div class="roster-group"><span class="roster-speed">${m.t.value}・${m.t.name}</span><div class="roster-chips">${m.entries.map(S=>S.cls==="enemy"?`<button type="button" class="roster-chip enemy ${t.targetId===S.id?"aimed":""}" data-action="battle-target" data-id="${S.id}"><i></i>${ae(S.name)}<small>${S.role}</small></button>`:`<span class="roster-chip ${S.cls}"><i></i>${ae(S.name)}<small>${S.role}</small></span>`).join("")}</div></div>`).join("")}
  </div>`:"",g=Aa(e.player.skills),f=t.selectedSkill?g.find(m=>m.id===t.selectedSkill)??null:null,T=i?.plot??0,D=T===0?0:Math.abs((t.playerPlot??0)-T),x=f?T===0||f.style==="support"&&f.range===0?99:Po(f.style,f.range,t.playerPlot??0,T):0,E=!!f&&!!i&&D<=x,A=[{name:e.player.codename,role:"你",alive:!0,cls:"player"},...t.enemies.map(m=>({name:Oi(e,m.name),role:"敵",alive:m.alive,cls:"enemy"})),...t.allies.map(m=>({name:m.name,role:"隊友",alive:m.alive,cls:"ally"})),...t.civilians.map(m=>({name:m.name,role:m.status==="saved"?"已庇護":m.status==="killed"?"死亡":"被捲入",alive:m.status!=="killed",cls:"civilian"}))],C=g.map(m=>{const S=T===0?99:Po(m.style,m.range,t.playerPlot??0,T),L=D<=S,R=`${m.name}｜${Io(m.style,m.range)}｜${m.power?`傷害 ${m.power}`:"支援"}${m.cost?`・侵蝕 +${m.cost}`:""}｜${m.description}`;return`<button class="battle-skill ${m.style} ${L?"":"out-of-range"} ${t.selectedSkill===m.id?"selected":""}" data-action="battle-skill" data-id="${m.id}" ${l?"":"disabled"} title="${ae(m.description)}" data-tip="${ae(R)}" aria-label="${ae(R)}">
        <span class="skill-range">${Io(m.style,m.range)}</span>
        <strong>${ae(m.name)}</strong>
        <small>${m.power?`傷害 ${m.power}`:"支援"}${m.cost?`・侵蝕 +${m.cost}`:""}${L?"":`・差 ${D}`}</small>
      </button>`}).join("");return`
  <div class="battle-overlay" role="dialog" aria-modal="true" aria-label="戰鬥">
    <div class="battle-panel battle-panel-wide">
      <div class="battle-main battle-main-v3">
        <div class="battle-top">
          <div>
            <span class="micro">第 ${t.round} / ${t.maxRounds??"∞"} 回合${t.finalBattle?"・最終戰":""} / 速度上限 ${t.playerSpeed}・${Fi(t.playerSpeed).name}</span>
            <h2>${n.length>1?"多對一":ae(n[0]?.name??"戰鬥")}</h2>
          </div>
          <div class="battle-verdict ${t.status}">${s?o?"宣告速度":l?"你的行動":"敵人行動":c}</div>
        </div>

        <div class="battle-board-column">
          ${p}
          ${y}
          <div class="battle-log">
            ${t.log.slice(-10).map(m=>`<p class="${m.tone}">${ae(bh(e,m.text))}</p>`).join("")}
          </div>
        </div>
        <div class="battle-console-column">
        <div class="battle-vitals">
          <div class="battle-vital">
            <div class="battle-vital-head"><span>${ae(e.player.codename)}<small class="player-en">${ae(e.player.codenameEn||"")}</small></span><strong>${e.player.hp} / ${e.player.maxHp}</strong></div>
            <div class="bar hp"><i style="width:${r}%"></i></div>
            <small>AC ${ri(e).value}・宣告 ${t.playerPlot??"—"}（fumble ${d.fumble?`1–${d.fumble}`:"無"}）</small>
          </div>
          <div class="battle-vital enemy">
            <div class="battle-vital-head"><span>${ae(i?Oi(e,i.name):"—")}</span><strong>${a?"∞":`${i?.hp??0} / ${i?.maxHp??0}`}</strong></div>
            <div class="bar enemy"><i style="width:${a?100:Math.max(0,Math.round((i?.hp??0)/(i?.maxHp||1)*100))}%"></i></div>
            <small>AC ${i?.ac??0}・速度上限 ${i?.speed??0}・宣告 ${i?.plot??"?"}</small>
          </div>
        </div>

        <div class="battle-enemy-list">
          ${t.enemies.map(m=>`<button class="battle-enemy ${m.alive?"":"down"} ${m.id===i?.id?"targeted":""}" data-action="battle-target" data-id="${m.id}" ${!l||!m.alive?"disabled":""}>
                <span class="battle-enemy-face mark">${ae(m.name.slice(0,1))}</span>
                <span class="battle-enemy-name"><strong>${ae(Oi(e,m.name))}</strong><small>速度 ${m.speed}・宣告 ${m.plot??"?"}・AC ${m.ac}</small><span class="enemy-break">${m.broken?"BREAK":`BREAK ${m.breakGauge}/2`}</span><span class="enemy-intent">意圖 ${m.intent?ae(m.intent):"不明"}</span></span>
                <span class="battle-enemy-hp">${m.alive?m.unbeatable?"∞":`${m.hp}/${m.maxHp}`:"倒下"}</span>
              </button>`).join("")}
        </div>

        ${(()=>{const m=t.civilians.find(S=>S.alive);return m?m.status==="saved"?`<div class="battle-civilian saved"><span class="micro">被捲入 / 已庇護</span><strong>${ae(m.name)}</strong><small>你讓這個人活了下來。警戒下降。</small></div>`:m.status==="killed"?`<div class="battle-civilian killed"><span class="micro">被捲入 / 已死亡</span><strong>${ae(m.name)}</strong><small>刻印已記錄。沒有人會為此鼓掌。</small></div>`:`<div class="battle-civilian">
            <div><span class="micro">被捲入</span><strong>${ae(m.name)}</strong><small>縮在掩體後。任何速度都能攻擊速度 0。</small></div>
            ${l?'<div class="civilian-actions"><button class="civilian-btn protect" data-action="battle-civilian" data-mode="protect">保護<small>警戒 -4</small></button><button class="civilian-btn kill" data-action="battle-civilian" data-mode="kill">殺害<small>刻印 +3・警戒 +10</small></button></div>':""}
          </div>`:""})()}


        ${s?o?`<div class="battle-plot-panel">
                  <div class="plot-copy">
                    <span class="micro">PLOT / 暗盤宣告</span>
                    <strong>${t.playerPlot===null?"選擇本回合速度":`宣告速度 ${t.playerPlot}・${Fi(t.playerPlot).name}`}</strong>
                    <small>速度愈高愈先行動，但 d20 ≤ 宣告值 會 fumble。對手的速度在你確定前不會公開。</small>
                  </div>
                  <div class="plot-field-status">
                    <span class="plot-field-label">戰場狀態 / FIELD</span>
                    ${A.map(m=>`<span class="field-chip ${m.cls} ${m.alive?"alive":"down"}">${ae(m.name)}<small>${m.alive?m.role:"倒下"}</small></span>`).join("")}
                  </div>
                  <div class="plot-actions">
                    <span class="plot-hidden">對手：???</span>
                    <button class="btn btn-primary btn-small" data-action="battle-confirm-plot" ${t.playerPlot===null?"disabled":""}>確定速度</button>
                  </div>
                </div>`:l?`${f?`<div class="battle-range-panel">
                    <div><span class="micro">RANGE / 射程預覽</span><strong>${ae(f.name)}・${Io(f.style,f.range)}</strong><small>${f.style==="melee"?"只能攻擊與你速度相同或相差 1 的目標；速度 0 例外。":f.style==="ranged"?"只能攻擊與你速度相同或相差 2 的目標；速度 0 例外。":"支援異能；速度 0 例外。"} 點擊敵人站姿或下方名字出招。</small></div>
                    <button class="execute-btn" data-action="battle-use-skill" ${E?"":"disabled"}><span>EXECUTE</span><small>${i?E?`執行 → ${ae(i.name)}`:"目標超出間合":"未瞄準"}</small></button>
                    <button class="btn btn-ghost btn-small" data-action="battle-cancel-skill">取消</button>
                  </div>`:""}
                  <div class="battle-break-strip">
                    <div class="break-meter"><span>BREAK</span><i class="${i&&i.breakGauge>=1?"on":""}"></i><i class="${i&&i.broken?"burst":""}"></i><small>${i?.broken?"失衡／下一行動無效":`${i?.breakGauge??0}/2・同速命中 +2`}</small></div>
                    <div class="chain-meter"><span>CHAIN</span><strong>${t.combo}</strong><small>命中 +1・受傷歸零</small></div>
                    <div class="overdrive-meter ${t.overdrive>=3?"ready":""}"><span>OVERDRIVE</span><strong>${t.overdrive}/3</strong><small>BREAK 集氣・滿 3 可終結</small>${t.overdrive>=3&&l?'<button class="overdrive-inline" data-action="battle-overdrive">終結</button>':""}</div>
                  </div>
                  <div class="battle-skills-head"><span class="micro">你的異能 / 4</span><small>近戰用 STR・遠程用 DEX・速度 0 無視射程</small></div>
                  <div class="battle-skills">${C}</div>
                  ${(()=>{const m=ys.get(e.player.ultimateId??"edge");return`<button class="battle-ultimate-btn ${t.ultimateUsed?"used":""}" data-action="battle-ultimate" ${!l||t.ultimateUsed?"disabled":""}>
                      <span>必殺奧義 / ONCE PER BATTLE</span>
                      <strong>${ae(e.player.ultimateName||m.name)}</strong>
                      <small>${ae(e.player.ultimateNameEn||m.en)}・${t.ultimateUsed?"本場已使用":ae(m.tagline)}</small>
                    </button>`})()}
                  <button class="battle-overdrive-btn ${t.overdrive>=3?"ready":""}" data-action="battle-overdrive" ${!l||t.overdrive<3?"disabled":""}>
                    <span>OVERDRIVE FINISHER / 3 BREAK</span>
                    <strong>${t.overdrive>=3?"終結・六連崩壞":`集氣 ${t.overdrive}/3`}</strong>
                    <small>${t.overdrive>=3?"消耗全部 OVERDRIVE，無視命中判定造成大傷害。":"每次 BREAK 獲得 1 格。"}</small>
                  </button>
                  <div class="battle-actions battle-actions-secondary">
                    <button class="battle-action" data-action="battle-action" data-id="guard"><strong>防禦</strong><small>AC +3／回復 1 肉體</small></button>
                    <button class="battle-action danger" data-action="battle-action" data-id="power"><strong>顯現</strong><small>侵蝕 +${wa(e).cost}／群體或高傷害</small></button>
                    <button class="battle-action" data-action="battle-action" data-id="talk"><strong>交涉</strong><small>魅力／延遲對手・不穩定</small></button>
                    <button class="battle-action" data-action="battle-action" data-id="flee"><strong>撤退</strong><small>敏捷／失敗被追擊</small></button>
                  </div>
                  <p class="battle-note">${a?"他是你所能遇見的最強對手。即使是史上最強的超限者，也無法在正面戰鬥中勝過他。":`本回合宣告 ${t.playerPlot}（${d.name}）／目標 ${i?.plot??0}，間合 ${D}。近戰只能打 ±1，遠程 ±2；速度 0 例外。d20 若為 ${d.fumble?`1–${d.fumble}`:"——"} 會 fumble。`}</p>`:'<div class="battle-wait"><span class="live-dot"></span>敵人行動中……</div>':`<div class="battle-result ${t.status}">
                <span class="micro">${c}</span>
                <div class="event-text">${Da(t.result??"戰鬥結束。")}</div>
                <button class="battle-end-button" data-action="battle-continue"><span>END OF BATTLE</span><small>結束戰鬥・時間恢復流動</small></button>
              </div>`}
        </div>
      </div>
    </div>
  </div>`}function Fx(){const t=sc(P);if(!t)return"";const e=P,n=qi(e),i=t.portrait?Ia(t.portrait):Fn(t.scene??n.scene),a=t.id==="kanda_ambush"||t.id==="interrogation"||t.id==="last_choice"||t.id==="kanda_arrives",r=!!t.result,s=e.lastRoll;return`
  <div class="event-overlay ${r?"result-mode":""}" role="dialog" aria-modal="true" aria-label="${ae(t.title)}">
    <div class="event-panel ${t.portrait?"portrait-centered":""}">
      <div class="event-side ${t.portrait?"has-portrait":"no-portrait"}">
        <div class="event-art" style="background-image:url('${i}')"></div>
        <div class="event-side-shade"></div>
        <div class="event-chapter">${ae(t.chapter)}</div>
        ${t.speaker?`<div class="event-speaker"><span>${ae(t.speaker)}</span><small>${t.portrait==="kanda"?"現代智人・刑警":"超越者"}</small></div>`:""}
        <div class="event-art-stamp">${r?"判定":"事件"}</div>
      </div>
      <div class="event-main">
        <div class="event-kicker">
          <span>${ae(t.chapter)}</span>
          <span class="mono">${String(Ra(e.hour).day).padStart(2,"0")}日目 ${Ra(e.hour).time}</span>
          ${t.portrait==="kanda"?'<span class="kanda-meta">最強對手</span>':""}
          ${a?'<span class="lethal">最強對手</span>':""}
        </div>
        <div class="event-top">
          <h2>${ae(t.title)}</h2>
        </div>
        <div class="event-scroll">
          ${r?Bx(t.result,t.resultTone??"neutral",s):`<div class="event-text">${Da(bh(e,t.text))}</div>`}
        </div>
        <div class="event-choice-area">
        ${r?'<div class="event-actions"><button class="btn btn-primary btn-wide" data-action="dismiss-result"><span>繼續</span><small>時間將恢復流動</small></button></div>':`<div class="event-choices">
                ${t.choices.map((o,l)=>`<button class="choice ${o.disabled?"disabled":""}" data-action="choose" data-event="${t.id}" data-choice="${o.id}" data-choice-index="${l}" ${o.disabled?"disabled":""}>
                      <span class="choice-index">${String(l+1).padStart(2,"0")}</span>
                      <span class="choice-strength"><strong>${ae(o.label)}</strong>${o.hint?`<small>${ae(o.hint)}</small>`:""}</span>
                    </button>`).join("")}
              </div>
              <div class="event-foot">
                <span class="live-dot"></span><span>時間暫停中</span><span>選擇會留下紀錄</span>
              </div>`}
        </div>
      </div>
    </div>
  </div>`}function Bx(t,e,n){return`
    <div class="result-box ${e}">
      <span class="result-label">${e==="danger"?"代價":e==="good"?"結果":"之後"}</span>
      <div class="event-text">${Da(t)}</div>
    </div>
    ${n?`<div class="roll-card ${n.success?"success":"fail"}">
            <div class="roll-die">d20<strong>${n.roll}</strong></div>
            <div class="roll-math">
              <strong>${ae(n.label)}</strong>
              <span>${n.roll} ${vh(n.statMod)} ${n.extra>=0?"+":""}${n.extra} = <b>${n.total}</b> / DC ${n.dc}</span>
            </div>
            <span class="roll-verdict">${n.success?"成功":"失敗"}</span>
          </div>`:""}`}function $x(){if(!Ie.drawer)return"";const t=P;let e="資訊",n="";return Ie.drawer==="log"?(e="72 小時紀錄",n=`<div class="drawer-log">${_h(t,120)}</div>`):Ie.drawer==="rank"?(e="排名與神田",n=`${yh(t)}${xh(t)}`):(e="羈絆",n=`
      <div class="drawer-bonds">
        ${t.bonds.map(i=>`
          <button class="drawer-bond ${t.contactTarget===i.id?"selected":""}" data-action="contact-bond" data-id="${i.id}">
            <span class="bond-avatar">${ae(i.name.slice(0,1))}</span>
            <span><strong>${i.name}</strong><small>${i.relation}・好感度 ${i.level*10}／100${i.level>=6?"・可參戰":""}</small><em>${ae(i.description)}</em></span>
          </button>`).join("")}
        <p class="fine">連絡可降低侵蝕 ${8+(t.bonds.find(i=>i.id===t.contactTarget)?.level??1)*2} 左右，但會增加裏八咫監視。</p>
      </div>`),`
  <div class="drawer-backdrop" data-action="close-drawer">
    <aside class="drawer panel paper" role="dialog" aria-modal="true" aria-label="${e}" data-drawer-panel>
      <header class="drawer-head"><h2>${e}</h2><button class="icon-btn" data-action="close-drawer" aria-label="關閉">×</button></header>
      <div class="drawer-strength">${n}</div>
    </aside>
  </div>`}function Os(){return Ie.modal?`
    <div class="modal-backdrop" data-action="close-modal">
      <div class="modal panel paper" role="dialog" aria-modal="true" data-modal-panel>
        <button class="icon-btn modal-close" data-action="close-modal" aria-label="關閉">×</button>
        ${Ie.modal==="help"?zx():Ie.modal==="about"?Hx():Ie.modal==="bgm"?Gx():Ie.modal==="endings"?Yx():Ie.modal==="roster"?qx():Ie.modal==="lore"?Wx():Ie.modal==="meta"?Zx():Kx()}
      </div>
    </div>`:""}function zx(){return`
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
        <div><h3>神田隼人</h3><p>無所屬的刑警。他是你所能遇見的最強對手；即使是史上最強的超限者，也無法在正面戰鬥中勝過他。</p></div>
        <div><h3>BREAK／OVERDRIVE</h3><p>每名敵人有 2 格 BREAK：命中 +1，同速命中 +2。滿 2 格後敵人失衡、下一次行動無效，並在失衡期間承受額外傷害。每次 BREAK 獲得 1 格 OVERDRIVE；滿 3 格可消耗全部，使用無視命中的終結一擊。</p></div>
        <div><h3>CHAIN</h3><p>連續命中會累積 CHAIN（最多 5），提高傷害；落空或受到攻擊會清零。CHAIN 是 BREAK 前的暖機，不是單純的數字獎勵。</p></div>
        <div><h3>輪迴記憶</h3><p>每次閉幕獲得記憶碎片，可永久強化下一局或解鎖世界觀檔案。失敗也有收穫；這是跨局進度，不會改寫已發生的結局。</p></div>
        <div><h3>d20</h3><p>檢定為 d20 + 能力修正 + 情境修正。自然 20 必成功，自然 1 必失敗。主屬性在創角時 +2。</p></div>
      </div>
      <div class="help-note">
        <strong>速度表</strong>
        <span>${_s.map(t=>`${t.value} ${t.name}（${t.fumble?`1–${t.fumble}`:"無 fumble"}）`).join("／")}</span>
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
        <span>World of Horror 式行動制：時間不會自動前進。點選一個行動方針，城市才前進 1 小時，然後結算該行動；事件會優先打斷。你可以停在畫面上思考，沒有倒數計時在背後跑。</span>
      </div>
      <div class="help-note warning">
        <strong>內容提醒</strong>
        <span>本作包含暴力、死亡、精神侵蝕、制度性暴力與對人性的剝奪。所有角色與機構均為虛構。</span>
      </div>
    </div>`}function Hx(){return`
    <div class="modal-head"><span class="micro">內容提醒 / CONTENT</span><h2>這不是英雄故事</h2></div>
    <div class="help-strength">
      <p class="lead">《流變計畫》Project Ignis 是一款繁體中文的 72 小時生存模擬。你會被隨機分配能力值、核心顯現與城市，然後被丟進一個不能對外求助的獵殺遊戲。</p>
      <p>遊戲討論權力如何把「異常」變成可拋棄的資源，也討論一個人如何在被要求變成怪物的時候，仍然抓住幾條名為羈絆的線。超越者被視為癌細胞；神田隼人則是你所能遇見的最強對手；即使是史上最強的超限者，也無法在正面戰鬥中勝過他。</p>
      <p>本作借用《Double Cross》TRPG 的侵蝕率、顯現與角色卡語彙作為靈感，並將之改寫成原創規則與世界觀；未重製任何官方規則文字。角色與機構均為虛構。</p>
      <div class="help-note"><strong>建議</strong><span>第一次遊玩請先看「遊戲說明」。如果你不想看到暴力或精神崩壞描寫，請不要開始。</span></div>
      <div class="about-actions">
        <button class="link" data-action="modal" data-modal="help">查看規則</button>
        <button class="link" data-action="toggle-motion">${bt.reduceMotion?"開啟動態效果":"減少動態效果"}</button>
        <button class="link" data-action="toggle-mute">${bt.muted?"開啟音效":"靜音"}</button>
      </div>
    </div>`}function Gx(){const t=[{id:"auto",name:"自動",en:"AUTO",note:"依場景切換：標題／城市／警戒／戰鬥／結局。"},{id:"title",name:"Empty City／空城",en:"CC0",note:"yd。慢速、荒涼的城市主題；適合標題與角色創建。"},{id:"city",name:"Mirrorshade／鏡影",en:"CC0",note:"cinameng。短循環 dub techno，適合雨夜城市探索。"},{id:"tension",name:"Dark Shrine／暗祠",en:"CC0",note:"qubodup／yd。低頻、壓迫的警戒與事件曲。"},{id:"battle",name:"Cynic Battle／冷眼之戰",en:"CC0",note:"Ferk／cynicmusic。92 秒無縫戰鬥循環。"},{id:"ending",name:"Whispers in the Fog／霧中低語",en:"CC0",note:"Ruhinre。短而安靜的結局／廢墟循環。"}];return`
    <div class="modal-head"><span class="micro">音訊 / BGM</span><h2>選擇背景音樂</h2></div>
    <div class="help-strength">
      <p class="lead">設定了 5 首場景曲，另加 100 首 CC0 曲庫；全部可商用，也可直接放進 RPG Maker 專案。選擇會立即套用並記住。</p>
      <div class="bgm-presets">
        ${t.map(e=>`<button class="bgm-preset ${bt.bgm===e.id?"active":""}" data-action="set-bgm" data-bgm="${e.id}">
          <strong>${e.name}</strong>
          <small>${e.en}</small>
        </button>`).join("")}
      </div>
      <p class="bgm-selected-note">${ae(t.find(e=>e.id===bt.bgm)?.note??"選擇自動或手動指定場景曲。")}</p>
      <div class="music-library">
        <div class="music-library-head"><span>100 首 CC0 曲庫 / LIBRARY</span><small>點選立即播放</small></div>
        <div class="music-library-grid">
          ${Jd.map(e=>`<button class="library-track ${bt.bgm===`library:${e.id}`?"active":""}" data-action="set-bgm" data-bgm="library:${e.id}" title="${ae(e.en)} / ${e.duration}s">
            <span>${ae(e.name)}</span>
            <small>${ae(e.en)}・${e.duration}s</small>
          </button>`).join("")}
        </div>
      </div>
      <div class="help-note"><strong>注意</strong><span>「自動」會跟隨遊戲狀態；手動選擇後會固定播放，直到你改回自動。一次只會播放一首，切換時舊曲會先停止。音效仍受右上角「靜音」控制。完整授權見 <code>public/audio/CREDITS.md</code> 與 <code>public/audio/library/CREDITS.md</code>。</span></div>
      <div class="about-actions"><button class="link" data-action="close-modal">回到遊戲</button></div>
    </div>`}const Vx={world:[["超越者 / Homo transscendens","被世界稱為 Overman、新人類。顯現能力覺醒者，被官方歸類為必須管理的「癌細胞」。"],["裏八咫","Project Ignis 的執行機構。負責選別、刻印、回收與封鎖消息；黑服是它的處決部隊。"],["Project Ignis","每數年舉行一次的 72 小時生存選別。參與者被丟進封閉城市，以刻印排名換取「成為普通人」的資格。"],["刻印","殺死普通人、超越者或破壞城市可取得的計分。本作閉幕門檻為 100 枚。"],["被捲入","沒有顯現、卻被戰鬥或選別牽連的普通人。可以保護、忽視，或殺害換取刻印。"]],rules:[["顯現","超越者的核心能力。核心顯現固定，侵蝕率突破 35%／60%／85% 時可再增生一次。"],["侵蝕","使用顯現會累積侵蝕。過高會顯現怪物化；聯絡羈絆可降低。"],["プロット","每回合暗盤宣告的速度值 0–7。公開後依數值排序，宣告值同時是 fumble 範圍。"],["間合","近戰只能攻擊速度相同或相差 1 的目標；遠程為 2。速度 0 例外，任何速度都能攻擊。"],["必殺奧義","每場戰鬥限用一次。七種效果中每次創角抽三張，名稱每次重新生成。"],["警告 / 警戒","殺戮、破壞與顯現痕跡會提高警戒；神田抵達後會轉化為盤問、通緝與遭遇。"]],factions:[["財團 Z","把超越者當成資產與武器的巨型企業。進行人造超越者、玻色子同調與神造計劃。"],["至高智人學院","財團 Z 培養兵器的教育機構。將選別視為野外測試，而非犯罪。"],["異端審判庭","直屬教皇的秘密組織，處理最墮落的異端。表面已消失，實際仍行走於黑暗。"],["代行者","異端審判庭的特殊超越者，被視為神怒與神恩的代理人。同一時間不超過十二人。"],["黑市同盟","拍賣器官、終端與情報的地下網絡。白鳥理世是其中最有名的舞台。"],["第七區自治會","在裏八咫與財團 Z 之間維持灰色秩序的地方組織。"],["海岸自衛隊","負責封鎖港口與處理海上回收物的武裝單位。"]]};function Wx(){return`
    <div class="modal-head"><span class="micro">GLOSSARY / SETTING</span><h2>設定詞彙</h2></div>
    <div class="help-body">
      <div class="lore-tabs">
        ${[{id:"world",label:"世界觀",en:"WORLD"},{id:"rules",label:"戰鬥規則",en:"RULES"},{id:"factions",label:"勢力",en:"FACTIONS"}].map(e=>`<button class="lore-tab ${Ie.loreTab===e.id?"active":""}" data-action="lore-tab" data-tab="${e.id}"><small>${e.en}</small>${e.label}</button>`).join("")}
      </div>
      <dl class="lore-list">
        ${Vx[Ie.loreTab].map(([e,n])=>`<div class="lore-entry"><dt>${ae(e)}</dt><dd>${ae(n)}</dd></div>`).join("")}
      </dl>
      <div class="about-actions"><button class="link" data-action="close-modal">回到遊戲</button></div>
    </div>`}function Xx(t){return`<article class="roster-card ${t.important?"important":""}">
    <div class="roster-portrait">${t.portrait?`<span class="roster-face" style="background-image:url('${Ia(t.portrait)}')"></span>`:ei(t.spriteSeed,{name:t.name,role:t.threat>=4?"enemy":"civilian",variant:t.portrait})}</div>
    <div class="roster-info">
      <div class="roster-head"><span class="roster-faction">${ae(t.faction)}</span><span class="roster-role">${ae(t.role)}</span></div>
      <span class="roster-en">${ae(t.codenameEn)}</span>
      <strong class="roster-codename">${ae(t.codename)}</strong>
      <div class="roster-realname">真名：${ae(t.name)}</div>
      <div class="roster-tags"><span>${t.mbti}</span><span>${ae(t.ability)}</span><span>威脅 ${t.threat}/5</span></div>
      <em class="roster-intention">動機：${ae(t.intention)}</em>
    </div>
  </article>`}function qx(){if(Ie.rosterFaction===null)return`
    <div class="modal-head"><span class="micro">PERSONNEL / FACTIONS</span><h2>人物名鑑</h2></div>
    <div class="help-body">
      <div class="archive-progress"><strong>100<small>人</small></strong><div class="bar"><i style="width:100%"></i></div><span>10 個陣營・含 5 名重要敵人</span></div>
      <p class="lead">先選一個陣營。每個陣營都有自己的位置、手段，以及與 Project Ignis 的距離。</p>
      <div class="faction-grid">
        ${Il.map(r=>{const s=ls.filter(o=>o.faction===r);return`<button class="faction-card" data-action="roster-faction" data-faction="${ae(r)}">
            <span class="faction-count">${s.length} 人</span>
            <strong>${ae(r)}</strong>
            <small>${ae(Bd[r]??"")}</small>
            <i>查看成員 →</i>
          </button>`}).join("")}
      </div>
      <button class="faction-all" data-action="roster-faction" data-faction="__all">瀏覽全部 100 人 →</button>
      <div class="about-actions"><button class="link" data-action="close-modal">回到遊戲</button></div>
    </div>`;const t=Ie.rosterFaction,e=t==="__all"?ls:ls.filter(r=>r.faction===t),n=[...e].sort((r,s)=>Ie.rosterSort==="threat"?s.threat-r.threat:Ie.rosterSort==="affection"?s.affection-r.affection:Ie.rosterSort==="name"?r.codename.localeCompare(s.codename,"zh-Hant"):0),i=t==="__all"?"全部角色":t,a=t==="__all"?"所有已登錄的 100 名角色。":Bd[t]??"";return`
    <div class="modal-head"><span class="micro">PERSONNEL / ${e.length} NAMES</span><h2>${ae(i)}</h2></div>
    <div class="help-body">
      <p class="lead">${ae(a)}</p>
      <div class="roster-toolbar">
        <button class="link" data-action="roster-faction" data-faction="">← 所有陣營</button>
        <div class="roster-sorts">
          ${[["default","預設"],["threat","威脅"],["affection","好感"],["name","代號"]].map(([r,s])=>`<button class="sort-btn ${Ie.rosterSort===r?"active":""}" data-action="roster-sort" data-sort="${r}">${s}</button>`).join("")}
        </div>
        <span class="mono">${e.length} 人</span>
      </div>
      <div class="roster-grid">${n.map(Xx).join("")}</div>
      <div class="about-actions"><button class="link" data-action="close-modal">回到遊戲</button></div>
    </div>`}function Yx(){const t=new Set(Ps()),e=ja.filter(i=>t.has(i.id)).length,n=[...new Set(ja.map(i=>i.familyTitle))];return`
    <div class="modal-head"><span class="micro">ARCHIVE / 108 ENDINGS</span><h2>結局檔案館</h2></div>
    <div class="help-strength">
      <div class="archive-progress">
        <strong>${e}<small>/108</small></strong>
        <div class="bar"><i style="width:${e/108*100}%"></i></div>
        <span>12 個命運家族 × 9 名見證者</span>
      </div>
      <p class="lead">同一個結局，會因為最後還留在你身邊的人是誰，而成為不同的故事。</p>
      <div class="archive-families">
        ${n.map(i=>{const a=ja.filter(r=>r.familyTitle===i);return`<section class="archive-family">
            <h3>${ae(i)}<small>${a.filter(r=>t.has(r.id)).length}/9</small></h3>
            <div class="archive-grid">
              ${a.map(r=>{const s=t.has(r.id);return`<article class="archive-card ${s?"unlocked":"locked"}">
                  <span class="archive-stamp">${s?ae(r.stamp):"？"}</span>
                  <strong>${s?ae(r.title):"未解鎖"}</strong>
                  <small>${s?ae(r.condition):`${ae(r.variantTitle)}・條件未知`}</small>
                  <i>${s?"已記錄":"未達成"}</i>
                </article>`}).join("")}
            </div>
          </section>`}).join("")}
      </div>
      <div class="about-actions"><button class="link" data-action="close-modal">回到遊戲</button></div>
    </div>`}function Zx(){const t=Xi();return`
    <div class="modal-head"><span class="micro">META / 輪迴記憶</span><h2>你記得上一輪。</h2></div>
    <div class="help-strength">
      <div class="meta-bank">
        <div><span>記憶碎片</span><strong>${t.memory}</strong></div>
        <div><span>完成輪迴</span><strong>${t.runs}</strong></div>
        <div><span>已解鎖檔案</span><strong>${t.lore.length}/${wl.length}</strong></div>
      </div>
      <p class="lead">每次閉幕都會留下碎片。它們不改變這一局已經發生的事，但會讓下一局的你稍微不那麼容易死。</p>
      <h3 class="meta-heading">永久強化 / UPGRADES</h3>
      <div class="meta-upgrades">
        ${Ql.map(e=>{const n=t.upgrades[e.id]??0,i=M_(e.id),a=n>=e.max;return`<article class="meta-upgrade ${a?"maxed":""}">
            <div><span class="micro">${ae(e.en)}</span><strong>${ae(e.name)}</strong><small>${ae(e.description)}</small></div>
            <div class="meta-upgrade-level">${Array.from({length:e.max},(r,s)=>`<i class="${s<n?"on":""}"></i>`).join("")}</div>
            <button class="meta-buy" data-action="meta-buy" data-id="${e.id}" ${a||t.memory<i?"disabled":""}>
              ${a?"MAX":`解鎖 ${i} 碎片`}
            </button>
          </article>`}).join("")}
      </div>
      <h3 class="meta-heading">世界觀檔案 / LORE</h3>
      <div class="meta-lore">
        ${wl.map(e=>{const n=t.lore.includes(e.id);return`<article class="meta-lore-card ${n?"unlocked":"locked"}">
            <span class="micro">${ae(e.en)}</span>
            <strong>${ae(e.title)}</strong>
            ${n?`<p>${ae(e.text)}</p>`:`<p class="locked-copy">未解鎖。需要 ${e.cost} 記憶碎片。</p>`}
            ${n?"<i>已記錄</i>":`<button class="meta-buy" data-action="meta-unlock" data-id="${e.id}" ${t.memory<e.cost?"disabled":""}>解鎖 ${e.cost} 碎片</button>`}
          </article>`}).join("")}
      </div>
      <div class="about-actions"><button class="link" data-action="close-modal">回到遊戲</button></div>
    </div>`}function Kx(){return`
    <div class="modal-head"><span class="micro">選單 / MENU</span><h2>要放棄這一局嗎？</h2></div>
    <div class="help-strength">
      <p>目前進度會保留在存檔中；你可以回到標題後再繼續。若選擇重新開始，本次存檔會被覆蓋。</p>
      <div class="restart-actions">
        <button class="btn btn-ghost" data-action="close-modal"><span>繼續遊戲</span></button>
        <button class="btn btn-ghost" data-action="go-title"><span>回到標題</span></button>
        <button class="btn btn-danger" data-action="confirm-restart"><span>重新開始</span><small>覆蓋存檔</small></button>
      </div>
      <div class="restart-meta">
        <span>存檔：${P.phase==="play"?"自動":"—"}</span>
        <span>音效：${bt.muted?"關":"開"}</span>
        <span>動態：${bt.reduceMotion?"減弱":"完整"}</span>
      </div>
      <div class="restart-links">
        <button class="link" data-action="modal" data-modal="help">遊戲說明</button>
        <button class="link" data-action="toggle-mute">${bt.muted?"開啟音效":"靜音"}</button>
        <button class="link" data-action="toggle-motion">${bt.reduceMotion?"開啟動態":"減少動態"}</button>
      </div>
    </div>`}function Jx(){const t=P,e=jy(t),n=si(t),i=Ax(t.ending);return`
  <div class="screen ending-screen tone-${e.tone}">
    <div class="ending-bg" style="background-image:url('${i}')"></div>
    <div class="ending-shade"></div>
    <div class="ending-panel">
      <div class="ending-kicker"><span>PROJECT IGNIS・閉幕</span><span class="mono">${xs}:00:00</span></div>
      <div class="ending-stamp">${e.stamp}</div>
      <h1>${e.title}</h1>
      <h2>${e.subtitle}</h2>
      <div class="ending-text">${Da(t.endingText??e.text)}</div>
      <div class="ending-stats">
        <div><span>刻印</span><strong>${t.player.marks}</strong></div>
        <div><span>排名</span><strong>${n.rank}<small>/${n.total}</small></strong></div>
        <div><span>侵蝕</span><strong>${t.player.encroachment}%</strong></div>
        <div><span>警戒指數</span><strong>${t.player.heat}</strong></div>
        <div><span>羈絆</span><strong>${Vn(t)}</strong></div>
        <div><span>城市</span><strong class="small">${qi(t).name}</strong></div>
        <div class="ending-memory"><span>記憶碎片</span><strong>+${t.endingMemory}</strong></div>
      </div>
      <p class="ending-memory-note">記憶碎片已存入輪迴。可永久強化下一局，或解鎖世界觀檔案。</p>
      <div class="ending-actions">
        <button class="btn btn-primary" data-action="new-game"><span>再抽一次</span><small>新的能力值、核心顯現與城市</small></button>
        <button class="btn btn-ghost" data-action="modal" data-modal="endings"><span>結局檔案</span><small>${Ps().length} / 108</small></button>
        <button class="btn btn-ghost" data-action="modal" data-modal="meta"><span>輪迴記憶</span><small>永久強化與世界觀</small></button>
        <button class="btn btn-ghost" data-action="go-title"><span>回到標題</span></button>
      </div>
      <p class="ending-foot">你走了 ${t.player.killsNormal} 條普通人的命，${t.player.killsOverman} 個同類。神田隼人從未敗北。</p>
    </div>
    <div class="ending-side">
      <div class="ending-side-art" style="background-image:url('${Ia("kanda")}')"></div>
      <p>「你活下來了。<br>這不代表你贏了。」</p>
      <span>— 神田隼人</span>
    </div>
  </div>`}function Kd(){const t=Ms??cr();Ms=null,lc(),P=dr(t),P.phase="creation",ju(P),Ie.statAnimated=!1,Qe(P),Ge.unlock(),Ge.sfx("confirm"),Pe()}function Qx(){const t=oc();if(!t){nr("找不到存檔","danger"),Pe();return}P=t,P.phase==="creation"&&!P.creation.rolled&&Us(P),P.phase==="play"&&(P.speed=1),Ge.unlock(),Pe()}function jx(){if(!P.creation.abilityId){nr("請先選擇一項顯現","danger");return}if(P.creation.codename.trim()||(P.creation.codename="鴉"),(P.creation.codenameEn??"").trim()||(P.creation.codenameEn=ur(P)),!P.creation.ultimateId){nr("請先選擇必殺奧義","danger");return}if(!P.creation.mainStat){nr("請先選擇一項主屬性","danger");return}nh(P),Qe(P),Ge.unlock(),Ge.sfx("confirm"),Pe()}function Sh(t,e){Jy(P,t,e),Qe(P),P.ending?Ge.sfx("danger"):Ge.sfx("dice"),Pe()}function Mh(){Qy(P),P.speed===0&&(P.speed=1),Qe(P),Ge.sfx("click"),Pe()}function eS(){P.phase!=="play"||P.pending||(rc(P),Qe(P),Ge.sfx(P.ending?"danger":"click"),Pe())}function tS(){lc(),P=dr(cr()),Ie.modal=null,Ie.drawer=null,P.phase="title",Pe()}function nS(){bt.muted=!bt.muted,cc(),Ge.setMuted(bt.muted),bt.muted||Ge.unlock(),Pe()}function iS(){bt.reduceMotion=!bt.reduceMotion,document.documentElement.classList.toggle("reduce-motion",bt.reduceMotion),cc(),Pe()}Bi.addEventListener("click",t=>{const e=t.target.closest("[data-action]");if(!e)return;const n=e.dataset.action;if(n&&!e.hasAttribute("disabled"))switch(n){case"new-game":Kd();break;case"continue":Qx();break;case"start-run":jx();break;case"select-ability":{P.creation.abilityId=e.dataset.id??null,Qe(P),Ge.unlock(),Ge.sfx("click"),Pe();break}case"answer-question":{Q_(P,Number(e.dataset.index??0)),Ie.statAnimated=!1,Qe(P),Ge.sfx(P.creation.step==="roll"?"confirm":"click"),Pe();break}case"restart-questions":{ju(P),P.creation.codename=P.creation.codename||"鴉",Qe(P),Ge.sfx("click"),Pe();break}case"reroll-stats":{j_(P),Ie.statAnimated=!1,Qe(P),Ge.sfx("dice"),Pe();break}case"clear-avatar":{P.phase==="creation"&&(P.creation.avatar=null,Qe(P),Pe());break}case"gender":{P.phase==="creation"&&(P.creation.gender=e.dataset.gender??"unspecified",Qe(P),Ge.sfx("click"),Pe());break}case"ultimate":{if(P.phase==="creation"){const i=P.creation.ultimateChoices.find(a=>a.id===e.dataset.id);i&&(P.creation.ultimateId=i.id,P.creation.ultimateName=i.name,P.creation.ultimateNameEn=i.en,Qe(P),Ge.sfx("click"),Pe())}break}case"main-stat":{const i=e.dataset.stat;eb(P,i),Qe(P),Ge.sfx("click"),Pe();break}case"set-stance":{const i=e.dataset.stance;if(i==="contact"&&!P.contactTarget){fh(P,i),Ie.drawer="bonds",Qe(P),Ge.sfx("click"),Pe();break}kd(P,i),Qe(P),Ge.sfx(P.ending?"danger":"click"),Pe();break}case"contact-bond":{const i=e.dataset.id;i&&(Gy(P,i),kd(P,"contact"),Qe(P),Ge.sfx("bond"),Pe());break}case"speed":{Od(P,Number(e.dataset.speed??1)),Qe(P),Ge.sfx("click"),Pe();break}case"toggle-pause":{Od(P,P.speed>0?0:1),Qe(P),Ge.sfx("click"),Pe();break}case"advance":eS();break;case"choose":Sh(e.dataset.event??"",e.dataset.choice??"");break;case"card-play":{const i=Number(e.dataset.index??-1);i>=0&&(fb(P,i),Qe(P),Pe());break}case"card-end":{pb(P),Qe(P),Pe();break}case"battle-begin":{Tb(P),Qe(P),Ge.sfx("danger"),Pe();break}case"battle-ultimate":{const i=P.battle?.log.length??0;Lb(P),Qe(P),Ge.sfx(ts(i)),Pe();break}case"battle-civilian":{Pb(P,e.dataset.mode==="kill"?"kill":"protect"),Qe(P),Ge.sfx(e.dataset.mode==="kill"?"danger":"bond"),Pe();break}case"battle-skill":{yb(P,e.dataset.id??""),Qe(P),Ge.sfx("click"),Pe();break}case"battle-overdrive":{const i=P.battle?.log.length??0;bb(P),Qe(P),Ge.sfx(ts(i)),Pe();break}case"meta-buy":{E_(e.dataset.id)&&(Ge.sfx("confirm"),Pe());break}case"meta-unlock":{T_(e.dataset.id??"")&&(Ge.sfx("confirm"),Pe());break}case"battle-avatar":{Ud(P,e.dataset.id??""),Qe(P),Ge.sfx("click"),Pe();break}case"battle-use-skill":{const i=P.battle?.log.length??0;Cb(P),Qe(P),Ge.sfx(ts(i)),Pe();break}case"battle-cancel-skill":{P.battle&&(P.battle.selectedSkill=null),Qe(P),Pe();break}case"battle-target":{Ud(P,e.dataset.id??""),Qe(P),Ge.sfx("click"),Pe();break}case"battle-plot":{Ab(P,Number(e.dataset.speed??0)),Qe(P),Ge.sfx("click"),Pe();break}case"battle-confirm-plot":{wb(P),Qe(P),Ge.sfx("confirm"),Pe();break}case"battle-action":{const i=P.battle?.log.length??0;Rb(P,e.dataset.id??""),Qe(P),Ge.sfx(ts(i)),Pe();break}case"battle-continue":{Ib(P),Qe(P),Ge.sfx("confirm"),Pe();break}case"dismiss-result":Mh();break;case"roster-faction":{Ie.rosterFaction=e.dataset.faction||null,Pe();break}case"roster-sort":{Ie.rosterSort=e.dataset.sort??"default",Pe();break}case"lore-tab":{Ie.loreTab=e.dataset.tab??"world",Pe();break}case"modal":Ie.modal=e.dataset.modal??null,Ie.drawer=null,Pe();break;case"close-modal":Ie.modal=null,Pe();break;case"confirm-restart":Ie.modal=null,Kd();break;case"go-title":tS();break;case"drawer":Ie.drawer=e.dataset.drawer??null,Pe();break;case"close-drawer":Ie.drawer=null,Pe();break;case"toggle-mute":nS();break;case"toggle-motion":iS();break;case"set-bgm":{bt.bgm=e.dataset.bgm??"auto",cc(),Ge.unlock(),Pe();break}}});function aS(t){if(P.phase!=="creation")return;if(!t.type.startsWith("image/")){nr("請選擇圖片檔","danger");return}const e=new FileReader;e.onload=()=>{const n=new Image;n.onload=()=>{const a=document.createElement("canvas");a.width=320,a.height=320;const r=a.getContext("2d");if(!r)return;const s=Math.max(320/n.width,320/n.height),o=n.width*s,l=n.height*s;r.drawImage(n,(320-o)/2,(320-l)/2,o,l),P.creation.avatar=a.toDataURL("image/jpeg",.82),Qe(P),Pe()},n.src=String(e.result)},e.readAsDataURL(t)}Bi.addEventListener("change",t=>{const e=t.target;e.id==="avatar-upload"&&e.files?.[0]&&aS(e.files[0])});Bi.addEventListener("input",t=>{const e=t.target;e.id==="codename"&&P.phase==="creation"&&(P.creation.codename=e.value.slice(0,8)),e.id==="codename-en"&&P.phase==="creation"&&(P.creation.codenameEn=e.value.slice(0,28))});Bi.addEventListener("change",()=>{P.phase==="creation"&&Qe(P)});document.addEventListener("keydown",t=>{if(t.key==="Escape"){Ie.modal?(Ie.modal=null,Pe()):Ie.drawer&&(Ie.drawer=null,Pe());return}});function Eh(){Ge.unlock()}document.addEventListener("pointerdown",Eh);document.addEventListener("keydown",Eh);function Ii(){const t=P.phase==="play"?sc(P):null,e=P.phase==="play"?si(P):null;return{phase:P.phase,hour:P.hour,day:Ra(P.hour).day,time:Ra(P.hour).time,city:P.phase==="play"?qi(P).name:null,ability:P.phase==="play"?wa(P).name:P.creation.abilityId,marks:P.phase==="play"?P.player.marks:null,encroachment:P.phase==="play"?P.player.encroachment:null,heat:P.phase==="play"?P.player.heat:null,hp:P.phase==="play"?`${P.player.hp}/${P.player.maxHp}`:null,armor:P.phase==="play"?ri(P).armor.name:null,ac:P.phase==="play"?ri(P).value:null,mainStat:P.phase==="play"?P.player.mainStat:P.creation.mainStat,manifested:P.phase==="play"?P.player.manifested:[],bonds:P.phase==="play"?Vn(P):null,rank:e?.rank??null,ending:P.ending,battle:P.battle?{enemies:P.battle.enemies.map(n=>({name:n.name,hp:n.hp,speed:n.speed,alive:n.alive})),target:P.battle.targetId,playerSpeed:P.battle.playerSpeed,status:P.battle.status,round:P.battle.round,playerHp:P.player.hp,actions:["strike","probe","guard","power","talk","flee"]}:null,pending:t?{id:t.id,title:t.title,result:t.result??null,choices:t.choices.map(n=>({id:n.id,label:n.label,disabled:n.disabled}))}:null,logCount:P.log.length}}const rS={snapshot:Ii,reset(t){return lc(),P=dr(t??cr()),P.phase="title",Ms=null,Ie.modal=null,Ie.drawer=null,Pe(),Ii()},setSeed(t){return Ms=t,{seed:t}},step(t){const e=Math.max(1,Math.min(24,Math.round(t/G_)));let n=0;for(;n<e&&P.phase==="play"&&!P.pending;)rc(P),n++;return Qe(P),Pe(),{...Ii(),advanced:n}},choose(t,e){return Sh(t,e),Ii()},dismiss(){return Mh(),Ii()},setStance(t){return fh(P,t),Qe(P),Pe(),Ii()},unlockAudio(){return Ge.unlock().then(()=>Ge.level())},audioLevel(){return Ge.level()},quickStart(t){const e=dr(t??cr());Us(e);const n=e.creation;n.abilityId=n.abilityId??"core_array",n.mainStat=Object.keys(n.stats).sort((a,r)=>n.stats[r]-n.stats[a])[0],n.codename="測試";const i=n.ultimateChoices[0];return i&&(n.ultimateId=i.id,n.ultimateName=i.name,n.ultimateNameEn=i.en),nh(e),P=e,Qe(P),Pe(),Ii()}};globalThis.__OHMYGAME_PLAYTEST__=rS;Pe();
