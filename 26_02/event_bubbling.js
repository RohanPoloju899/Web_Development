<html>
    <body>
        <div class="p" id="i">
            p
            <div class="p1" id="i1">
                p1
                <div class="p2" id="i2">
                    p2
                </div>
            </div>
        </div>

        <script>
            let p=document.getElementById("i");
            let p1=document.getElementById("i1");
            let p2=document.getElementById("i2");
            p.addEventListener("click",function(e){
                console.log("p clicked");
            });
            p1.addEventListener("click",function(e){
                console.log("p1 clicked");
            });
            p2.addEventListener("click",function(e){
                console.log("p2 clicked");
            });
        </script>
    </body>
</html>
