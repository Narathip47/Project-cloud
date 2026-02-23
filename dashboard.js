async function loadDashboard(){
    try{
        const res = await fetch('/api/dashboard')
        const data = await res.json()

        document.getElementById("countPost").textContent = data.countPost
        document.getElementById("countBlog").textContent = data.countBlog
        document.getElementById("countContact").textContent = data.countContact
        document.getElementById("countAdmin").textContent = data.countAdmin
    }
    //catch(err){
        //alert("โหลดข้อมูลไม่สำเร็จ")
        //console.log(err)
    }


loadDashboard()