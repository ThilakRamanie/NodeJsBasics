function encrypt(data) {
    console.log('Data encrypted')
}
function send(url,data) {
    const encData = encrypt(data);
    console.log(`Sending ${encData} data to url`);
}