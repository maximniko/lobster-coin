var t={bubbleClick:"bubble-click",main:"main",balance:"balance",boost:"boost",transfer:"transfer",withdraw:"withdraw",deposit:"deposit"},e={main:()=>`/${t.bubbleClick}/${t.main}`,balance:()=>`/${t.bubbleClick}/${t.balance}`,boost:()=>`/${t.bubbleClick}/${t.boost}`,transfer:()=>`/${t.bubbleClick}/${t.transfer}`,withdraw:()=>`/${t.bubbleClick}/${t.withdraw}`,deposit:()=>`/${t.bubbleClick}/${t.deposit}`,depositAdd:()=>`/${t.bubbleClick}/${t.deposit}-add`},n=[{path:t.bubbleClick,loadComponent:()=>import("./chunk-YKBTGEKN.js").then(o=>o.BubbleClickComponent),children:[{path:t.main,loadComponent:()=>import("./chunk-WNEMU6TI.js").then(o=>o.MainComponent)},{path:t.boost,loadComponent:()=>import("./chunk-DOYSAZKF.js").then(o=>o.TurboComponent)},{path:t.balance,loadComponent:()=>import("./chunk-7PTZNKU4.js").then(o=>o.BalanceComponent)},{path:t.withdraw,loadComponent:()=>import("./chunk-UEEC4553.js").then(o=>o.WithdrawComponent)},{path:t.transfer,loadComponent:()=>import("./chunk-2OVQYDWD.js").then(o=>o.TransferComponent)},{path:t.deposit,loadComponent:()=>import("./chunk-XPMOC2VB.js").then(o=>o.DepositComponent)},{path:`${t.deposit}-add`,loadComponent:()=>import("./chunk-UY66VCM5.js").then(o=>o.DepositAddComponent)},{path:"**",redirectTo:e.main(),pathMatch:"full"}]},{path:"**",redirectTo:e.main(),pathMatch:"full"}];export{e as a,n as b};