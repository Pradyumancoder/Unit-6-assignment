const express = require('express')

const app = express()

const CLIENT_ID = "2ac9e473560e1d563ac4";

const CLIENT_SECRET = "addbfe2a5fa336ee048652d497378b363993791b";

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/',(req,res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/github/callback", async (req,res)=>{
    const {code} = req.query;

    const {access_token} =await fetch(
        "https://github.com/login/oauth/access_token",
    {
    method:"POST",
    headers:{
        accept:"application/json",
        "content-type":"application/json",
    },
    body:JSON.stringify({
        client_id:CLIENT_ID,
        client_secret:CLIENT_SECRET,
        code,
    })
}
    )
    .then((e)=>e.json())
    .catch(console.error)

    console.log("Access",access_token);

    const userDetails = await fetch("https://api.github.com/user",{
        headers:{
            Authorization:`Bearer ${access_token}`,
        },
    })
    .then((xf)=>xf.json())
    .catch(console.error);

    console.log(userDetails);

    return res.send("sign in with github success")

})

app.listen(8080,() =>{console.log('server started on port 8080')})