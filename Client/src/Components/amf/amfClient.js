import amf from './amf.js'

let server = "./server/amf.php";
let amfClient = new amf.Client("amfphp", server);

export default amfClient;
