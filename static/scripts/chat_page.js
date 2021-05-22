document.addEventListener('DOMContentLoaded', () => {

    //ham button mobile version
    document.querySelector("#ham").onclick = () => {
        document.querySelectorAll(".mobile-hide").forEach(p => {
            p.style.display = "block";
        });
    }
    //ham exit
    document.querySelector("#ham_exit").onclick = () =>{
        document.querySelectorAll(".mobile-hide").forEach(p => {
            p.style.display="none";
        });

    }

    document.querySelector(".transparent-bar").onclick = () =>{
        document.querySelectorAll(".mobile-hide").forEach(p => {
            p.style.display="none";
        });
    }

    document.querySelector("#send_image").onclick = () =>{
        document.querySelector(".selected_img").style.display="block";
    }

    const fileSelector = document.getElementById('img_upload');
    fileSelector.addEventListener('change', (event) => {
        const fileList = event.target.files;
        if (fileList[0]){
            //var img_name = fileList[0].name;
            //var img_size = fileList[0].size;
            // document.getElementById("image_name").innerHTML = "<ul><li>"+img_name+"    "+img_size+" "+"Bytes"+"</li></ul>";
            var image = document.getElementById('img_output');
            image.style.display = "block";
	        image.src = URL.createObjectURL(event.target.files[0]);
        }else{
            var image = document.getElementById('img_output');
            image.style.display = "none";
            document.querySelector(".selected_img").style.display="none";
        }
    });

    document.querySelector('#download-enlarged-image').onclick = () =>{
        var img = document.querySelector("#open_img");
        var a = document.createElement("a"); //Create <a>
        a.href = img.src; //Image Base64 Goes here
        a.download = "Image.jpg"; //File name Here
        a.click(); //Downloaded file
    }

    document.querySelector('#close-enlarged-img').onclick = () =>{
        document.querySelector("#enlarged-img").style.display = "none";
    }

    // Make 'enter' key submit message
    let msg = document.querySelector("#user_message");
    msg.addEventListener("keyup", event => {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.querySelector("#send_message").click();
        }
    });

});