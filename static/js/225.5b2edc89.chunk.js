"use strict";(self.webpackChunkproject_5_frontend=self.webpackChunkproject_5_frontend||[]).push([[225],{858:function(e,t,r){r.r(t),r.d(t,{default:function(){return Ne}});var n=r(7689),a=r(9434),s=r(4396),i="Header_header__ybruX",o="Header_title__KifY5",c="Header_burgerIcon__ugs+P",l="Header_textCalendarHeader__YmFrm",A="Header_textColor__NWH8m",u="Header_burgerButton__+6-aS",d="Header_calendar__wQXua",f="Header_calendarGoose__90DWX",h="Header_info__EXEu+",g=r(1213),m=r(9439),j=r(5861),v=r(4687),b=r.n(v),p=r(2791),x="ThemeToggler_ThemeIcon__VbMbu",I="ThemeToggler_ThemeButton__sRcmG";var y=r.p+"static/media/moon.274b87fd0220fd4706b15133808a5a11.svg";var F,C,B,E,k=r.p+"static/media/sun.94eca2a74e19d7acb9387b06efd610e0.svg",N=r(1243),w=r(184),S=function(){var e=(0,j.Z)(b().mark((function e(t){return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.Z.patch("/users/theme",{theme:t});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=(0,p.useState)(localStorage.getItem("theme")||"light"),t=(0,m.Z)(e,2),r=t[0],n=t[1];(0,p.useEffect)((function(){document.body.setAttribute("data-theme",r),localStorage.setItem("theme",r),S(r).then()}),[r]);return(0,w.jsx)("button",{className:I,type:"button",onClick:function(){n("light"===r?"dark":"light")},children:"light"===r?(0,w.jsx)(w.Fragment,{children:(0,w.jsx)("img",{className:x,src:y,alt:"\u041c\u0456\u0441\u044f\u0446\u044c"})}):(0,w.jsx)(w.Fragment,{children:(0,w.jsx)("img",{className:x,src:k,alt:"\u0421\u043e\u043d\u0446\u0435"})})})},L="UserInfo_userInfoWrapper__tfsT6",K="UserInfo_userName__Oqu48",Q="UserInfo_userAvatar__NnBlo",U="UserInfo_userAvatarImg__X+BBV",O=function(){var e=(0,a.v9)(s.dy);return console.log(e),(0,w.jsxs)("div",{className:L,children:[(0,w.jsx)("p",{className:K,children:e.name}),e.avatarURL?(0,w.jsx)("img",{src:"".concat(e.avatarURL),alt:"User",className:U}):(0,w.jsx)("p",{className:Q,children:e.name.slice(0,1)})]})},P=function(){var e=(0,a.v9)((function(e){return e.currentPage.namePage}));return(0,w.jsxs)("header",{className:i,children:[(0,w.jsx)("button",{type:"button",className:u,"aria-label":"open close burger menu",children:(0,w.jsx)(g.Bbf,{className:c})}),(0,w.jsxs)("section",{children:[(0,w.jsx)("h1",{className:o,children:e}),"Calendar"===e&&(0,w.jsxs)("div",{className:d,children:[(0,w.jsx)("img",{srcSet:"".concat("data:image/png;base64,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"," 1x, ").concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAB4CAYAAAA6//q/AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABfxSURBVHgB7V0JmBTVtf5vVe/r7APMzoAQICgqGIigBFES12DCU7NoNEZfEpd8Ji8vGpU8k5iYxKif5sOIuBDjJ8Q8jUsiqIAioAhEHrJvszLDbD29L1V137nVPcCoMDv0VPf/TU/1dFVXT9c59yz/ufcUkEUWWWSRRRZZZJFFFllkkUUWWWSRRRZZZJGFwcFgcHDO2aEAzk0wfE2SUMZVSExCKe1SwfH6k3/AfQsXMg1ZGA8kfGtdgP+1I8rViMJ5Qks+6Ed/dMY4r/PzJ7dxbkEWxkNtJ/+BELIQ9vHQFuOhg538YmQoJBgUYlTLEq70WFJ+rvFj4PGvA49dDqx7BogG9OOsatQBNf7AgQ5eiQyECQZFbgxVNPZLdfFvXwk8fT0Q7kju3LUKWP8scO1iPPDIL5Hg5gkLbli4kPZchwyDYRUgEo5+64XF/zPGGW/DbdikC59cAcUFpBKaAunABmD5HYjHHVi96m+4dMFtZyIDYVgFCAf847ZuXsNGtpPpH5tAXNUQjGvQNE5pAOCwyLB+vAI3Xbcc1dWTUFQ8yrrHx6vH5rB9yCAYNgbIyy+qm3fJt3DBtBlIqBz+qKoLX0BsEgon58BRaVbw3Rv/G6PyvKfZJCykuFBGBsGQCrA/yIvNEq7+5jU34+Jv/AQmmUGWulMeUtc3b9qpb2wSh92kLWgI4XZkEAypAGbgTpcZI0xC5kXVYCYrzHJ3BUgZA2Dfe5QRRME6fchVwhYr+M8PtvCRyBAYTgG2k/DE6HfIJGGNCL72enAlhrjCux2XoJiAC/7vwAfAHgoSm5ogkRLYWCKHWTAXGQLDKYDDgRF2GR6Ew0BrK/DG76GqIvonBSidCGn298DO+Q9oVjpEUSld6ARWPQR00LGqqmcJkkw0cYbAcFkAj6MjLn5Ho1Y01VLO/xZ0or/6HMjzfwHNlS+Ognz6PMSW3wV79DCkho3AuRQSkvbEmByNRfEOMgSGswAbc1AX5+ygKlMkQL4fjgLAngP5q/eA5YyAbDLTwwJWMQVMKIREYyCX+KKSKkSdOaD3Pj8mn9UhQ2A4BVjAGNX78OeIzQmMKAG++H3I3gIwfeR3B6ucAtliA6YSRVw0ClHZHGGa9BQyCIbMAkbZsSioytsUby4w/euQiQVs2bGu2zEaBYhs3VKdFcT4OYhrDBEF7/nd+DcyCIZUAMaYokp4MqgwjlzK6MrPxLOLfoV169YgFokh4AvijX++gv2vLwIKR5OlGIdAAkFihh4dz1gAGQTDUsEWOxaHArjQaTZ/2XzWlah84194atEi7DmtVq8ObjzwNqaPpNE/+RL4VbMSiuP3FV72MjIMhqWCixgLUi73UkwkdKO/iMtHF4KpoWRpmH6xRCvyLWT2x85FUMET5R7chwyEYS2AAOX0VinFBuaXj8eX9n+Ams4avSpYKTfB5XAhWHqGmBy2gtxGRk4LM6wFEDDLsB8hgKddjetLVUyOvoLy4Cu4pYKKQRPmgFucIJ4oggyFoS2AwjWXmAGqY/q1sKxdjKulrcm/i04DvvobooTA6ZAoMhSGVgDGJOeRIqBMX/X2FUDdFsBdRNF/Nb1mhhaDRhYggQyFsRWAw92tBmhzA2NndTuGqoIqef84MhSGjgEIbqmnlQ8MilXOXBdgbAVg8PakAJQQqAlzVgEMByr/mmTA1dNxxAgnyAVkg0CjoZ3qgDT4nT0dRzGAwhWEkaEwrAXQwnDJMhw9Hgcei3oQQobCuFmAAy4p1rMLUDV0jmUshmGMZcu4TBVts50S21AHTHETTDkMkpgLGxHbKKSYHdJoO+qI8ew2N8646wI64XZa4TnRMfoiEcbakaagOMayrx3FVhNGKgxirmMu11BInHUBBbe59O/nkAnPlSVS9DCsTCS6NthoayFyy0yxjcVFWxoMJqK7gw3tIN4b9cd+hmEVQJLhphFwQgugDwXGT1n5VwSqTUHkEhGVG9dQQUFrJfFV40ionyMBjzscQYXXDhMJWF/MInc9pKTvFs/ZZ2Q5PPWLzguFtCUoYhyOh0vycOiTxxqZCMqni3PCGEdcKCWhnjQWkATuqA2iUtIwhUuY2RjG2STMEpuEQrdEvKSUEm5K0H1t3hCh6nZC090alJTwxfR3+tlPu8fR591D23uPfY9hFYDMX7GpF1dQG8IaIAlcqgnjDFnDpaSM5zeFMcZtQR5VoR1C2CYpKWQ2SG067CRNW8rDdzl6sSWlmBRJYFJURV1TE39gxAh2JOg1rALQFy/uiQQS5sFsNtkwWJ/JOSM/W6JaMYeUb3ZLBBd4ZZRYLXplEqZBEvTRz0uaeS31XAhbjHhhAeh1jbbN5FoaaLsVMtaTRVhbdYzwBYxrASSM7AUNLODGALFqFTdVT8PF9QFcZ7HhfI8ZXpsJTFxcNshCPxZC8H6qYkRUXfgJUoIN9J1eJhezi57vIivTOdKFdjFF7njnMKwCkC8tk3u4+MndPB/9gBjtTVFUEIl0AynbDU6K1O22pFk/WRDfL8+WVIS4AnNMxcyIhqmkDztII9bFOV6gXWtPdA7jWgCgVOrF6JNl5hK9hFgfuIDaAJ9UF8T37TKuIqHnOuShHemfha61jeI7Cp2zmZIPF4ctEMcUivzNmoQln8z7PwlDKoAYnS1hlPZGKDSKrE1NOl/Q0tOxBzt4FaVp11KwdZPTTPm5JGgEnBIIwQslEJF/XE1G/fQTJX//EQV9r5uBRWUudrin8xhSAQ6EUOSRkXMi2Yj+AO/u9iGsSdZJFV7hBo6rACKaJ//+HQrkfuWxoFiMtHToryeUQET+FklIHgglEKWg79Uwjfzxzp6FL2AYBWjw8xkqwy00IscqCs81HSfkDtMVWv5+M554ux4b9vnxx+smuc6s9uYd77ytnJfUBfCox4pLXWbhMXDKIaJ8liKB9EwAqXyfiC9JgiNHg9LbcxlCAQ741P986cOmhx5/s9aytymEMEVDFQU2TKv2oCTXppMrvpCCPZSIbyXn7QsrcJqjuPbzq/HlUe9KGl84gU7TbemQcCP1UcxKhLG00I4yWxpdKTk14oMJ3QXEyfb/iQKBj1gUK8sKWENfzpUOlmxAqG/jpZsaOv+94MFN+eUFdsz5fCEmlrqwffdKvL7NjhpfzpFjZUlFlbcZs8q34pqJb+NLlVuQcMzD4YLXnih1STd3TQ1fxrk8PYRriIN/JNeMnJMZ2fcFwu+3RcDJ8lWWOFgt+oHhbwEsmL52Z0f+eRPy8OT1TniiS2GNrYGldA/YrEMIxO3oiCZLAoWOTvKZFOwzK71vDOVQT0D2foeGkiTmDejRch3ndqJKfu0w4VavBZKUBkNELG4R+X6qyVmLlsz5I8Ri7qPnf6/w9E/4AsNeAcj3OcPRKH4x61mUHF4EfZKfYy5YxWa6crvhjm2HO9FIr4s5Hw6i5MopcpoCWCfqiiCSJLMJVQd98LbFeEkkiIUU6H2N/D1YmthHK6WZeaSznaQEYY2C0QDWLFqEyGD0OB7WCrBtG7eYeMfccutalEsvIOS6ESHnDQGb4zS3VyaGxFFMj5knPIeeR0uYaLFgqaJicr4tvfw9T1G9iWSa10He6NCIT9C5A8GwVIAaH8+lVEeiVG+mzb/sigm2Z1BjXkgB342PUpQeoHTtZ305H1G3HtKDSwRffyoHvV6d1JJ5vV7K5YglVLSQj9+jKlhPL71O5n4LBhHDQgH2EFNnDeAaMsnfJgGVUFCWY2NU7FDhcIRecJxe4cRf6i/EN8fiVTr8x5Y+fitrmnQGFMonstcwSToQwwOSCY85EwisWAH/ggVsSPoWpb0CHIrxieS+n3JaMdVhTvLfR6CRX9f2omDUnWjfqYAr/C6zmU1Mh1y9rxCmPkqjP0ppHT1etMl4uNDBGjHESGsFIOFP4Aksp4LH5z57lNKgYDbYHeNx/rgc7GsKzpw22j1scluRy+s0rgaN6NvdxFGtof/9+U4X1k9i7KSsVko7BWjg3KEEUUUX4ipJwW05NrgtxzPRElVyTSPoiYwvn56Hu5bvw+xxA67unjSISSG+KD4ORzC/upDtxilAWiiAIF5mRDBNS+BiOYyL7WZMJo5bskq9SMVsp5MhaKRonjjgYgc2HfDjrCoP0hFdvSr1XsWaoKXhIzLvD6dK+AKnVAF2+XmBi2GuFMJNFLidYXPAK0x9n3y462LiQ9frT+edno/7/3EQZ1Z60iaH511Cp4cvpkf179Dzw/TyVor0XwnW4JR2Jz8lCtDUxJ2qG1cRCXOLy4LJVE9ncn/pVvs5VAZ7i650CCM8DrrCGpr8MYz0WnGyEE36cT2CN3UpME/O1Ikk4KNdLST4Ntr+FT4sLitjadOQ4qSPk1o/v5yEfR8JfpLLBDYoVGvgJYoHvIBzNv72QTNslNBfMqUAJwMiX28O4yBtf0ZCn0op6jR6qZpB71L/kmrCQ9EgWuUCxIf7ApQB4WAr/1xjkL/mi3KuqHyQoXDedAdtOvi+5jD/+fK9fKghbkQVp+8RiHPeEOQPY5jipLiA+iCfQ4PyT24TTrMPySeS3c2hok7HIuS67kBN69Au9hVuvTMGhUqxK8nKb9MU3I9hin6Jo97P88mfzSTzfRHx6FXkSJxUlhDzFIK0u4UukFiBcpii3UNkCsfZJPwi15rk3YcMorjjew5KeCsi8aG9DaAI7Mi3b2iPYMGkIhbEMEafFYAsn9QQwBKPFZc5TamZKV37kJqZkipgiMBI7BMM3kkJNnK/i23rfo8iz60YSgi/DwlN21cP/+5ifVaAxnaUWB2Y4z3OIOuWwp0Ejr2JaqSvbmlBWa4NHzeasOy9i/DHq3wYCgjBB+OIkul/PxbF3UPFz59M9FkBZAtiZOv9NMqd6ZBr7z4Uwo2Ld8BE/mVSuQs/+8pYfMF7L5mh55FcmjF4ELStP4ElZS7cxlys1/PuDIe6AH88nOBpgQiF4ltrA/xgS4QHo0ryxYYbOA+u4oMFEfHH6NT0EbHaIL8QBkK/xnBzkBeTOdw+woW8tCy8xPdQKEpWoOQ5DDT6EBMxKNirURQspbr8G+VuvNfTYovhhH7xb8Uu1qwx/DKUrt31LGPJYXcSRbcJA4Uw+1Sle6LUy+6u8LC1RhK+QL/nu5Y48Qj5w51Kul4O+3RiCPvf/T0ubjgWQ6Ajgn8xGU/DoOi3AtBIUCnN+ylFxempA44vUI1gLfoDIfy2KD5IJDCj1I2vlDn6Ntd+OGFAYbJkgllfmMLpPOkWDJiryIEfJEKCeBqpx15ROqiow+kRIZJnE3H4149ysr0wOPptAQ4E+QgTxyK3GdZ0Kb12A0uRELEdvTpcjPqWMNaGFCwY6cRFZTbjC1+gXwpwmHMXCf+5PBsK0nPVTILM/0qiIpvIAnT07h2qni+8Vupkr5F7y5j7B/RLfLEA7s6xYLYlbdtMkmdr/R10RbCM69U7yPQHJRkrkGHocwxwIMDPp4rerVTPT+O5l/SvOb5ItOUlFAtU9Hi0luyo9fEoBz5ChqFPCrC/mRdTZW9pjhWD1lhpyDDqqV4fGk62V3s+E+8b1Gsjvopzk9mB+6gIVDoc592fCOEE2lgcLyID0WsFGBPE5Q4ZC+ynZBbh0IGEL7opPFKaz+qRgeiVAoio3yzjN24rvDAQhO+nanIdoui9vzAYeqUA8Qjucpowxmyw5vKdMb3dym0lGXS38E+iR4Ne4+NnW4GbxXp5IyGUAKfg7/EyD/tfZDBOOKZFtwyLGfd6LMiBgSBaq5Hpf2tPK36EDMeJjXoA82wmXGBJk+XTA4UoWgnh+2J4U1Vw8+wqlrH3CurCcRO6Awe4zVqIHcUOVKZDn5zBQIDMfiCOFUEN3xznYa3I4vgWwFSI28nvG0L4gt2h2r6Yz/drTcU1WeEfxWeK94Cfj3dIWF/kHN6+Xzf5lOfTqN+pmPDjUht7DVl0w6eyANH63MzwDY91eAtfb52qIEYKsNRswv0k/P3I4lP4lAWoC/NpNoY1+cmbD30mOE481VJNLQ7pKhULE9waRkCSYBHzByy9WfcvsO11oKMBmHGdfqPnniA+N6qAk+Db4yr+AjMezZS6fn/xKQsga/iB6zOELy6ulFoF1JPsKMdG1y1RBDpj+qrtn3IFm2IqrqDX51sYxlpNkCzScXrsH9oOPPltqtJQad4zAjj90k8dot8OJTlpUzRTjNOof5sU759Mxt/L3JlJ7fYV3RSgtp3PJKFc9sl+PIIy7aAgSqzvk1MNinHskjB+dESLXSSIKG1tomQYESMyjr9KbjxTypjo1vhBDee/SwRxBhEx59LbpppkTDIx5MsSHLQVazxg3rkGpkRqXsYWqtOY6cNDbeDRMPxTrtYSsqOdlLKRHptVhnd5FBtMeTiY+owseoluCsDMuI0oX933i/akXYqgF0y0o5ZfLIkxHeMHxAjsOlbvX6/hUaJYLyPFGBNR8TIJ/4clxwimgjExTWdV6qH3BYp3oJr+mzF0zjJ66TxvW9P8I91+PlyefAhYHAiPvqgtbHectTkPjQvY8F+edSpxRAFqQvxshwkXCtJHzIXXjulnQ/lzA5lpLu7CIV4T+yX56NI/IXShAOIt/jiaWAwPkxI8mHCgxOHArsIeRmVKOf4v9RBNJGo0q3t+135uSnb7YEoMLB6GFAt5xpRmLn8/mDjifcn33++SkzdQEj68a0ST8Cl1xn/R05wuMy8sQtdUcCF8shZcxAiUbgmffKcorVYWskMVTvYhCb/PN2bkCexVisYf+Vt1F0MpGHPkbznYbG1r4+nZCWqYQVcAKviMJoHPFq1SQynhCj8slndTRL1Bc2I1WQCnkH882cpU3JJM9/3BBHyKiteIXhUKsP7wboq+B4h4HvYmRkxo4abkEmRJjSM6ZvbRf7qzESEZhchiwJA455Jswj1eK+SYoptwLiZ9COF2RBEgzvx2OYjxpBBMrADxRdFImyVCOSgwVBIcP/a5cSVZgBkRF2affTYb8J04RS8dzTvy2Xj5NP1vFg0iOn4eNHuSmjAf2ibijzHIYsCQGkKYTMK9mvJnsRpmDRmBZpus06aIc9xb7mUbyfSfJQTeFkEtRe5XUtS9mqppneE4vjPKgadEV8tiB1s/mE2QNLP9meC5tyqc8n8WD0GijMA/9y59n7lxi7BSM5DFgCElZPjInP+WcvWbaFQtsVLpV6yQIXP+ku8gHhMHkewliubv1GKYVeVlGyjHf5cEcF6pB88N1UTKUid2xMbOeTsx8nQIpyQf3oXIGQv8SkE1rPWb6R8PfUVYL2QxeKjz86Wdcc4bg3zz3gAvwilGXSc/p3Xt3/z8hy4e+vN1vC7I32l/43GV/9DNW95/1U9/T0YWA8KREfQh52YK9NRgDHso37thjLt3tx0bSpR52fvhSVe8GS+fCuuBd8FUxRmefEWN5syH64MlbqZq1y9cmLUCgwYyqWxnC0+rbssNfj6uY9WzMWEF2t9aEqgP8Lcjj8zn2u15vGXTGwHKYM5CFv1Gt9Ejmh+ML+x73j6UKPGwXdGKc7aqnpFwbnzGxVVlaqJgNFgiCvfqh1zmQP2vBZOILPqFYWE+E3lVm5T80bA0bIbzw2dc5uaP9det+9fA/c4f56IjtNjn47nIos9I22Uewh3V+zGP4pELTeHWr7IEZZjESeb84w6KBY5SDc6NTzOyBlcHZt1yZl2IP+hyYFkuY0PTJ86ASKsJX0LozUEUEttYISn+O1xrH59v2/Om2dS6F1K4nQR//KZEGtHFoTMWIDLp8sZE6ZnPy1broyPt7CCyOCHSRgGE8GuD+J7l8I6fWmo3Vtp3r2T2rWLK/gka0HTdPDcFoo8h+5sQPW0ugtO/15YoO+ueUq/lT8jiuEgbBaCc/hrHlmVP5778I7NGpcZ41UyI9E/JG63f2E/ubIBt7ypYd60kTrprNvexTWqpMDXxMnRe8lsRJ8B0eA865y3sGFlZnYcsjou0iQGo7DyW2z2mlmtf9JHgN1OF4kV6bYscR23CBsUMFIVm3HQBiwRudb37SKX7nQf1TCBw3o905bDvWgFL40fQrK7tnXPu/gmTUKklkuXlLIYBdjXwgsYIn9kQ5uUnOq69nXvrg/z2w1tWR2L3n8vDj32d1wW0Lc37d715aPfWHXXtkd8Id4IsjI1DAT6hIaD9vfFQ835yH99AFhkIGuliBROyyCKLLLLIIou+4v8Blw9IuUqZYHwAAAAASUVORK5CYII="," 2x"),alt:"Goose",className:f}),(0,w.jsxs)("div",{children:[(0,w.jsx)("h1",{className:o,children:e}),(0,w.jsxs)("p",{className:l,children:[(0,w.jsx)("span",{className:A,children:"Let go"})," of the past and focus on the present!"]})]})]})]}),(0,w.jsxs)("section",{className:h,children:[(0,w.jsx)(M,{}),(0,w.jsx)(O,{})]})]})},R=r(1087),T=["title","titleId"];function G(){return G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},G.apply(this,arguments)}function D(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function H(e,t){var r=e.title,n=e.titleId,a=D(e,T);return p.createElement("svg",G({xmlns:"http://www.w3.org/2000/svg",width:1024,height:1024,viewBox:"0 0 1024 1024",ref:t,"aria-labelledby":n},a),r?p.createElement("title",{id:n},r):null,F||(F=p.createElement("g",{id:"icomoon-ignore"})),C||(C=p.createElement("path",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:85.3333,stroke:"currentColor",d:"M682.667 768l85.333 85.333 170.667-170.667"})),B||(B=p.createElement("path",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:85.3333,stroke:"currentColor",d:"M512 661.333h-192c-59.544 0-89.316 0-113.542 7.347-54.545 16.546-97.23 59.234-113.776 113.779-7.349 24.226-7.349 53.995-7.349 113.54v0"})),E||(E=p.createElement("path",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:85.3333,stroke:"currentColor",d:"M426.667 512c106.039 0 192-85.961 192-192s-85.961-192-192-192c-106.039 0-192 85.961-192 192s85.961 192 192 192z"})))}var Y,V=p.forwardRef(H),W=(r.p,["title","titleId"]);function X(){return X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},X.apply(this,arguments)}function J(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function q(e,t){var r=e.title,n=e.titleId,a=J(e,W);return p.createElement("svg",X({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",ref:t,"aria-labelledby":n},a),r?p.createElement("title",{id:n},r):null,Y||(Y=p.createElement("path",{d:"M21 10H3M21 12.5V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22H12M16 2V6M8 2V6M14.5 19L16.5 21L21 16.5",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var z=p.forwardRef(q),Z=(r.p,r(9126)),_="UserNav_sidebarNav__XLYYB",$="UserNav_nav_container__5cV1w",ee="UserNav_nav__item__YELOR",te="UserNav_nav__link__t1AY8",re="UserNav_nav__icon__w47i3",ne="UserNav_active__+KsqE";var ae,se=function(){return(0,w.jsx)("nav",{className:_,children:(0,w.jsxs)("ul",{className:$,children:[(0,w.jsx)("li",{className:ee,children:(0,w.jsxs)(R.OL,{className:function(e){var t=e.isActive;return"".concat(te,"  ").concat(t?ne:"")},to:"/account",children:[(0,w.jsx)(V,{className:re}),"My account"]})}),(0,w.jsx)("li",{className:ee,children:(0,w.jsxs)(R.OL,{className:function(e){var t=e.isActive;return"".concat(te,"  ").concat(t?ne:"")},to:"/calendar",children:[(0,w.jsx)(z,{className:re}),"Calendar"]})}),(0,w.jsx)("li",{className:ee,children:(0,w.jsxs)(R.OL,{className:function(e){var t=e.isActive;return"".concat(te,"  ").concat(t?ne:"")},to:"/statistics",children:[(0,w.jsx)(Z.pT2,{className:re}),"Statistics"]})})]})})},ie=["title","titleId"];function oe(){return oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},oe.apply(this,arguments)}function ce(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function le(e,t){var r=e.title,n=e.titleId,a=ce(e,ie);return p.createElement("svg",oe({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 20 20",fill:"none",ref:t,"aria-labelledby":n},a),r?p.createElement("title",{id:n},r):null,ae||(ae=p.createElement("path",{d:"M13.3333 14.1667L17.5 10M17.5 10L13.3333 5.83333M17.5 10H7.5M7.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86502 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86502C2.5 4.3998 2.5 5.09987 2.5 6.5V13.5C2.5 14.9001 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86502 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5H7.5",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var Ae=p.forwardRef(le),ue=(r.p,"LogoutBtn_logout__btn__l7Ryd"),de="LogoutBtn_logout__icon__PULwS",fe=r(6476);function he(){var e=(0,a.I0)();return(0,w.jsxs)("button",{className:ue,type:"button","aria-label":"Logout",onClick:function(){return e((0,fe.ni)())},children:["Log out",(0,w.jsx)(Ae,{className:de})]})}var ge=r.p+"static/media/logoSidebar.a79bcb380e95bb6e2995.png",me="Sidebar_sidebar__8tEtd",je="Sidebar_openSidebar__eO73N",ve="Sidebar_close__btn__BueiN",be="Sidebar_close__icon__f15Rv",pe="Sidebar_aside__title__q2P2s",xe="Sidebar_box__logosidebar__GlxB0",Ie="Sidebar_logo__sidebar__c6Obl",ye="Sidebar_logo__title__iBX0V",Fe="Sidebar_logo__change__Ifr8n";function Ce(){var e=(0,p.useState)(!1),t=(0,m.Z)(e,2),r=t[0],n=t[1];return(0,w.jsxs)("aside",{className:"".concat(me," ").concat(r?je:""),children:[(0,w.jsx)("button",{className:ve,onClick:function(){n(!r),console.log("isOpen:",r)},type:"button","aria-label":"Close",children:(0,w.jsx)(g.ySC,{className:be})}),(0,w.jsxs)("div",{className:xe,children:[(0,w.jsx)("img",{width:"71",height:"68",src:ge,alt:"SidebarLogo",className:Ie}),(0,w.jsx)("h2",{className:ye,children:"G"}),(0,w.jsx)("span",{className:Fe,children:"oo"}),(0,w.jsx)("h2",{className:ye,children:"seTrack"})]}),(0,w.jsx)("p",{className:pe,children:"User Panel"}),(0,w.jsx)(se,{}),(0,w.jsx)(he,{})]})}var Be="MainLayout_mainLayoutContainer__dmx3m",Ee="MainLayout_mainLayout__BOfKk",ke="MainLayout_pageWrapper__WvFBk",Ne=function(){var e=(0,a.v9)(s.dy);return(0,w.jsx)("section",{className:Ee,children:(0,w.jsxs)("div",{className:Be,children:[(0,w.jsx)(Ce,{}),(0,w.jsxs)("div",{className:ke,children:[(0,w.jsx)(P,{}),(0,w.jsx)(n.j3,{context:[e]})]})]})})}}}]);
//# sourceMappingURL=225.5b2edc89.chunk.js.map