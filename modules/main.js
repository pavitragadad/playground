var command,product_serial_no,phone_no,email,location;
command=process.argv[2];
product_serial_no=process.argv[3];
phone_no=process.argv[4];
email=process.argv[5];
location=process.argv[6];
if(command==="saveticket"){
console.log("preparing to save");
}
else if(command==="updateticket"){
    console.log("updating status");
}
else{
console.log("unknown command");
    }
