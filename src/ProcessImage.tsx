import DetectFaces from "./DetectFaces";

const ProcessImage: Function = (files: File[]) =>{
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    let image :any;
    reader.onload = function() {
        let jpeg: boolean = true;
        try{
            image = atob((reader.result?.toString().split("data:image/jpeg;base64,")[1]) as string);
            sendData(image);
        }catch(e){
            jpeg = false;
        }
        if(jpeg === false){
            try{
                image = atob((reader.result?.toString().split("data:image/png;base64,")[1]) as string);
                sendData(image);
            }catch(e){
               return; 
            }
        }
    }
}

const sendData :Function = (image:any) => {
    const length = image == null ? null:image.length;
    const imageBytes = new ArrayBuffer(length);
    const ua = new Uint8Array(imageBytes);
    for (var i = 0; i < length; i++) {
        ua[i] = image.charCodeAt(i);
    }
    DetectFaces(ua);
}

export default ProcessImage;